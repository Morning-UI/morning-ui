<template>
    <mor-mindmap
        :_uiid="uiid"
        :class="[formClass, sizeClass, stateClass]"

        :form-name="formName"
        :form-note="formNote"
        :form-key="formKey"
        :form-width="formWidth"
        :group="group"
        :hide-name="hideName"
        :clearable="clearable"
        :inside-clearable="insideClearable"
        :_errorMessage="_errorMessage"
    >

    <div class="form-name" v-if="!conf.hideName && !!conf.formName">{{conf.formName}}</div>
    <div class="form-note" v-if="!!conf.formNote">{{conf.formNote}}</div>

    <div class="mindmap-wrap form-body">
        <div class="canvas"></div>
        <div class="edit-content">
            <textarea
                v-model="data.editContent"
                @input="_editInput"
                @mouseup.native="_editInput"
                @keydown.native="_editInput"
            ></textarea>
        </div>
    </div>

    <div class="error-message">{{conf._errorMessage}}</div>
    <morning-link v-if="conf.clearable" color="minor" @emit="_clean" class="cleanbtn">清空</morning-link>

    </mor-mindmap>
</template>
 
<script>
import G6                           from '@antv/g6';
import sortBy                       from 'lodash.sortby';
import throttle                     from 'lodash.throttle';

// <i class="mo-icon mo-icon-error-cf cleanicon" v-show="(conf.state !== 'readonly' && conf.state !== 'disabled') && conf.insideClearable &&  data.value" @click.stop="set(undefined)"></i>
export default {
    origin : 'Form',
    name : 'mindmap',
    props : {},
    computed : {
        _conf : function () {

            return {};

        }
    },
    data : function () {

        return {
            data : {
                graph : null,
                $editContent : null,
                $editContentInput : null,
                editMode : false,
                editContent : '',
                editGroupShapes : {},
                editZoom : 1,
                editNode : null,
                dragging : false,
                dragLastHolderParent : null,
                dragLastHolderIndex : null,
                rootNodeId : null,
                globalId : 1,
            }
        };

    },
    methods : {
        _manualPaint : function (paintCallback) {
    
            let autoPaint = this.data.graph.get('autoPaint');

            paintCallback();

            this.data.graph.paint();
            this.data.graph.setAutoPaint(autoPaint);

        },
        _editInput : function () {

            let groupShapes = this.data.editGroupShapes;

            this._manualPaint(() => {

                groupShapes.text.attr({
                    text : this.data.editContent
                });

                this.data.editNode.update({
                    text : this.data.editContent
                });

                // 临时修复问题：https://github.com/antvis/g/pull/121
                if (this.data.editContent.indexOf('\n') === -1) {

                    groupShapes.text._attrs.lineCount = 1;

                }

                this.data.graph.paint();
                this._refreshNode(groupShapes);
                this._refreshEditor(this.data.editNode);

            });

        },
        _getGroupShapes : function (item) {

            const textShapeIndex = 2;
            const outlineShapeIndex = 0;
            const placeholderShapeIndex = 3;

            let key = item.getKeyShape();
            let text = key.getParent().getChildByIndex(textShapeIndex);
            let outline = key.getParent().getChildByIndex(outlineShapeIndex);
            let placeholder = key.getParent().getChildByIndex(placeholderShapeIndex);

            return {
                key,
                text,
                outline,
                placeholder
            };

        },
        // _getNodeEdges : function (node) {

        //     let edges = {
        //         in : node.getInEdges(),
        //         out : node.getOutEdges()
        //     };

        //     edges.all = edges.in.concat(edges.out);

        //     return edges;

        // },
        _refreshNodeEdges : function (edges) {

            for (let edge of edges) {

                edge.refresh();

            }

        },
        _refreshEditor : function (node) {

            if (this.data.editNode) {
                
                let edges = this.data.editNode.getEdges();

                this.data.editNode.refresh();
                this._refreshNodeEdges(edges);

            }

            let groupShapes = this._getGroupShapes(node);
            let textAttr = groupShapes.text.attr();
            let nodeBbox = node.getBBox();
            let textBbox = groupShapes.text.getBBox();
            let keyBbox = groupShapes.key.getBBox();
            let zoom = this.data.graph.getZoom();
            let {
                x : nodeX,
                y : nodeY
            } = this.data.graph.getCanvasByPoint(nodeBbox.x, nodeBbox.y);

            // when text is empty use placeholder
            if (textBbox.width === 0) {

                textBbox = groupShapes.placeholder.getBBox();

            }

            let inputX = textBbox.x;
            let inputY = textBbox.y;

            inputX = (inputX < 0) ? `calc(50% - ${Math.abs(inputX)}px - ${textBbox.width/2}px)` : `calc(50% + ${inputX}px - ${textBbox.width/2}px)`;
            inputY = (inputY < 0) ? `calc(50% - ${Math.abs(inputY)}px)` : `calc(50% + ${inputY}px)`;

            this.data.$editContent.style.display = 'block';
            this.data.$editContent.style.left = `${nodeX}px`;
            this.data.$editContent.style.top = `${nodeY}px`;
            this.data.$editContent.style.width = `${keyBbox.width}px`;
            this.data.$editContent.style.height = `${keyBbox.height}px`;
            this.data.$editContentInput.style.width = `${textBbox.width}px`;
            this.data.$editContentInput.style.height = `${textBbox.height}px`;
            this.data.$editContentInput.style.left = inputX;
            this.data.$editContentInput.style.top = inputY;
            this.data.$editContentInput.style.color = textAttr.fill;
            this.data.$editContentInput.style.fontSize = `${textAttr.fontSize}px`;
            this.data.$editContentInput.style.textAlign = textAttr.textAlign;
            this.data.$editContentInput.style.fontWeight = textAttr.fontWeight;
            this.data.$editContentInput.style.fontFamily = textAttr.fontFamily;
            this.data.editContent = textAttr.text;
            this.data.editZoom = zoom;

        },
        _refreshNode : function (groupShapes) {

            const keyPaddingX = 24;
            const keyPaddingY = 12;
            const outlinePadding = 3;

            let textBbox = groupShapes.text.getBBox();

            // when text is empty use placeholder
            if (textBbox.width === 0) {
                
                textBbox = groupShapes.placeholder.getBBox();

            }

            groupShapes.key.attr({
                x : textBbox.minX - keyPaddingX,
                y : textBbox.minY - keyPaddingY,
                width : textBbox.width + (keyPaddingX * 2),
                height : textBbox.height + (keyPaddingY * 2)
            });

            let keyBbox = groupShapes.key.getBBox();

            groupShapes.outline.attr({
                x : keyBbox.minX - outlinePadding,
                y : keyBbox.minY - outlinePadding,
                width : keyBbox.width + (outlinePadding * 2),
                height : keyBbox.height + (outlinePadding * 2)
            });

        },
        _cancelEdit : function () {

            if (!this.data.editMode) {

                return;

            }

            let groupShapes = this._getGroupShapes(this.data.editNode);

            groupShapes.text.attr({
                opacity : 1
            });
            this.data.graph.paint();
            this.data.$editContent.style.display = 'none';
            this.data.editMode = false;
            this.data.editContent = '';
            this.data.editGroupShapes = {};
            this.data.editZoom = 1;
            this.data.editNode.setState('editing', false);
            this.data.editNode = null;
            this.data.graph.refreshLayout();

        },
        _fillChildBbox : function (bbox, node) {

            let model = node.getModel();

            bbox.conMaxX = bbox.maxX;
            bbox.conMinX = bbox.minX;
            bbox.conMaxY = bbox.maxY;
            bbox.conMinY = bbox.minY;

            if (!model.children || model.children.length === 0) {

                return bbox;

            }
            
            for (let child of model.children) {

                let childNode = this.data.graph.findById(child.id);
                let childBbox = childNode.getBBox();

                if (childBbox.maxX > bbox.conMaxX) {

                    bbox.conMaxX = childBbox.maxX;

                }

                if (childBbox.minX < bbox.conMinX) {

                    bbox.conMinX = childBbox.minX;

                }

                if (childBbox.maxY > bbox.conMaxY) {

                    bbox.conMaxY = childBbox.maxY;

                }

                if (childBbox.minY < bbox.conMinY) {

                    bbox.conMinY = childBbox.minY;

                }

            }

            return bbox;

        },
        _removeOldDragPlaceholder : function () {

            if (this.data.dragLastHolderIndex > -1 && this.data.dragLastHolderParent) {

                this.data.dragLastHolderParent.splice(this.data.dragLastHolderIndex, 1);

            }
            this.data.dragLastHolderParent = null;
            this.data.dragLastHolderIndex = null;
            this.data.graph.changeData();
            // this.data.graph.refreshLayout();

        },
        _refreshDragPlaceholder : throttle(function (delegateShape, targetNode) {

            let nodes = this.data.graph.getNodes();
            let delegateBbox = delegateShape.getBBox();
            let distance;
            let distanceNodes = [];
            let matchOptions = {};

            delegateBbox.centerX = delegateBbox.x + (delegateBbox.width / 2);
            delegateBbox.centerY = delegateBbox.y + (delegateBbox.height / 2);

            // 按距离对节点排序
            distanceNodes = sortBy(nodes, node => {

                if (targetNode === node || node._cfg.model._isPlaceolder) {

                    return Infinity;

                }

                let nodeBbox = node.getBBox();

                distance = Math.sqrt(
                    Math.pow(Math.abs(nodeBbox.centerX - delegateBbox.centerX), 2) +
                    Math.pow(Math.abs(nodeBbox.centerY - delegateBbox.centerY), 2)
                );

                return distance;

            });

            // 选择最匹配的元素
            // Child[n] : 作为子元素，centerX > Parent.centerX
            for (let node of distanceNodes) {

                let nodeBbox = node.getBBox();

                this._fillChildBbox(nodeBbox, node);

                if (
                    nodeBbox.centerX < delegateBbox.x &&
                    (
                        (nodeBbox.conMaxY > delegateBbox.minY && delegateBbox.minY > nodeBbox.conMinY) ||
                        (nodeBbox.conMaxY > delegateBbox.maxY && delegateBbox.maxY > nodeBbox.conMinY)
                    )
                ) {

                    matchOptions.node = node;
                    matchOptions.mode = 'childN';
                    matchOptions.index = 0;
                    matchOptions.hasPlaceholder = false;

                    for (let index in node.getModel().children) {
                        
                        let childData = node.getModel().children[index];
                        let childBbox = this.data.graph.findById(childData.id).getBBox();


                        if (!childData._isPlaceolder && delegateBbox.centerY > childBbox.centerY) {

                            matchOptions.index = +index + 1;

                        }

                        if (childData._isPlaceolder) {

                            matchOptions.hasPlaceholder = index;

                        }

                    }
                    
                    break;

                }

            }

            // 清除上一个placeholder
            this._removeOldDragPlaceholder();

            if (matchOptions.hasPlaceholder < matchOptions.index) {

                matchOptions.index--;

            }

            if (matchOptions.node) {
                
                // 创建新的placeholder
                let model = matchOptions.node.getModel();

                if (model.children === undefined) {

                    model.children = [];

                }

                this.data.dragLastHolderIndex = matchOptions.index;
                model.children.splice(matchOptions.index, 0, {
                    id : this.data.globalId++,
                    shape : 'mor-node-placeholder',
                    anchorPoints : [[0, 0.5], [1, 0.5]],
                    _isPlaceolder : true
                });
                this.data.dragLastHolderParent = model.children;
                this.data.graph.paint();
                this.data.graph.changeData();
                this.data.graph.refreshLayout();
                this.data.graph.findById(this.data.globalId - 1).getInEdges()[0].update({
                    shape : 'mor-edge-placeholder-line'
                });

            }

        }, 160),
        _regNodeBlock : function () {

            G6.registerNode('mor-node-block', {
                drawShape : (cfg, group) => {

                    let cursor = 'move';

                    if (cfg.isRoot) {

                        cursor = 'default';

                    }

                    let outline = group.addShape('rect', {
                        attrs : {
                            fill : 'transparent',
                            radius : 6,
                            cursor,
                            stroke : 'transparent',
                            lineWidth : 3
                        }
                    });
                    let key = group.addShape('rect', {
                        attrs : {
                            fill : '#96d3e6',
                            radius : 6,
                            cursor
                        }
                    });
                    let text = group.addShape('text', {
                        attrs : {
                            text : cfg.text,
                            x : 0,
                            y : 0,
                            textAlign : 'left',
                            textBaseline : 'middle',
                            fill : '#434b53',
                            fontSize : 16,
                            cursor
                        }
                    });
                    let placeholder = group.addShape('text', {
                        attrs : {
                            text : ' ',
                            x : 0,
                            y : 0,
                            textAlign : 'left',
                            textBaseline : 'middle',
                            fill : '#434b53',
                            fontSize : 16,
                            cursor
                        }
                    });

                    this._refreshNode({
                        key,
                        text,
                        outline,
                        placeholder
                    });

                    return key;

                },
                setState : (name, value, item) => {

                    let states = item.getStates();
                    let key = item.get('keyShape');
                    let group = key.getParent();
                    let outline = group.getChildByIndex(0);
                    let text = group.getChildByIndex(1);

                    if (states.indexOf('drag') !== -1) {

                        item.toFront();
                        key.attr({
                            fillOpacity : 0.6,
                            strokeOpacity : 0.6
                        });
                        text.attr({
                            opacity : 0.6
                        });
                        outline.attr({
                            fillOpacity : 0,
                            strokeOpacity : 0
                        });

                    } else {

                        key.attr({
                            fillOpacity : 1,
                            strokeOpacity : 1
                        });
                        text.attr({
                            opacity : 1
                        });
                        outline.attr({
                            fillOpacity : 1,
                            strokeOpacity : 1
                        });

                    }

                    if (
                        this.data.dragging === false &&
                        (
                            states.indexOf('selected') !== -1 ||
                            states.indexOf('editing') !== -1
                        )
                    ) {

                        outline.attr({
                            stroke : '#27befc',
                            lineWidth : 3
                        });
                        key.getParent().set('zIndex', 9);

                    } else if (this.data.dragging === false && states.indexOf('hover') !== -1) {

                        outline.attr({
                            stroke : '#8cdcf5',
                            lineWidth : 3
                        });
                        key.getParent().set('zIndex', 3);

                    } else {

                        outline.attr({
                            stroke : 'transparent',
                            lineWidth : 3
                        });
                        key.getParent().set('zIndex', 1);

                    }

                }
            }, 'single-shape');

        },
        _regNodePlaceholder : function () {

            G6.registerNode('mor-node-placeholder', {
                drawShape : (cfg, group) => {

                    let key = group.addShape('rect', {
                        attrs : {
                            fill : '#adbec3',
                            cursor : 'default',
                            width : 80,
                            height : 28,
                            x : -24,
                            y : -20,
                            radius : 6,
                        }
                    });

                    return key;

                }
            }, 'single-shape');

        },
        _regEdgeCubicHorizontal : function () {

            G6.registerEdge('mor-edge-cinoc-horizontal', {
                getShapeStyle : function (cfg) {

                    let startPoint = cfg.startPoint;
                    let endPoint = cfg.endPoint;
                    let controlPoints = this.getControlPoints(cfg);
                    let points = [startPoint];

                    if (controlPoints) {

                        points = points.concat(controlPoints);

                    }

                    points.push(endPoint);

                    return G6.Util.mix({}, G6.Global.defaultEdge.style, cfg.style, {
                        stroke : '#8693a4',
                        lineWidth : 3,
                        path : this.getPath(points)
                    });

                }
            }, 'cubic-horizontal');

        },
        _regEdgePlaceholderLine : function () {

            G6.registerEdge('mor-edge-placeholder-line', {
                getShapeStyle : function (cfg) {

                    let startPoint = cfg.startPoint;
                    let endPoint = cfg.endPoint;
                    let controlPoints = this.getControlPoints(cfg);
                    let points = [startPoint];

                    if (controlPoints) {

                        points = points.concat(controlPoints);

                    }

                    points.push(endPoint);

                    return G6.Util.mix({}, G6.Global.defaultEdge.style, cfg.style, {
                        stroke : '#adbec3',
                        lineWidth : 3,
                        // lineDash : [5, 5],
                        path : this.getPath(points)
                    });

                }
            }, 'cubic-horizontal');

        },
        _regBehaviorBrushSelect : function () {

            G6.registerBehavior('mor-brush-select', {
                getDefaultCfg () {
                    return {
                        brushStyle : {
                            fill : '#e0efff',
                            fillOpacity : 0.4,
                            stroke : '#b2d2ef',
                            lineWidth : 1
                        },
                        onSelect () {},
                        onDeselect () {},
                        selectedState : 'selected',
                        includeEdges : true,
                        selectedEdges : [],
                        selectedNodes : []
                    };
                },
                getEvents () {

                    return {
                        mousedown : 'onMouseDown',
                        mousemove : 'onMouseMove',
                        mouseup : 'onMouseUp',
                        'canvas:click' : '_clearStates',
                        keyup : 'onKeyUp',
                        keydown : 'onKeyDown'
                    };

                },
                onMouseDown (evt) {

                    if (evt.item || !this.keydown) {
                        
                        return;
                    
                    }

                    let brush = this.brush;

                    this._clearStates();
                    
                    if (!brush) {
                        
                        brush = this._createBrush();
                    
                    }

                    this.originPoint = {
                        x : evt.canvasX,
                        y : evt.canvasY
                    };
                    brush.attr({
                        width: 0,
                        height: 0
                    });
                    brush.show();
                    this.dragging = true;

                    setTimeout(() => {
                        G6.Util.modifyCSS(evt.currentTarget._cfg.canvas._cfg.canvasDOM, {
                            cursor : 'default'
                        });
                    });

                },
                onMouseMove (evt) {

                    if (!this.dragging ||
                        !this.keydown) {

                        return;

                    }

                    this._clearStates();
                    this._getSelectedNodes(evt);
                    this._updateBrush(evt);
                    this.graph.paint();

                },
                onMouseUp () {

                    if (!this.brush) {

                        return;

                    }

                    let graph = this.graph;
                    let autoPaint = graph.get('autoPaint');
                    
                    graph.setAutoPaint(false);
                    this.brush.hide();
                    this.dragging = false;
                    this.graph.paint();
                    graph.setAutoPaint(autoPaint);
                
                },
                _clearStates () {

                    let graph = this.graph;
                    let autoPaint = graph.get('autoPaint');
                    let selectedState = this.selectedState;
                    let nodes = graph.findAllByState('node', selectedState);
                    let edges = graph.findAllByState('edge', selectedState);
                    
                    graph.setAutoPaint(false);
                    nodes.forEach(node => graph.setItemState(node, selectedState, false));
                    edges.forEach(edge => graph.setItemState(edge, selectedState, false));
                    this.selectedNodes = [];
                    this.selectedEdges = [];
                    graph.paint();
                    graph.setAutoPaint(autoPaint);

                },
                _getSelectedNodes(evt) {

                    let graph = this.graph;
                    let selectedState = this.selectedState;
                    let originPoint = this.originPoint;
                    let p1 = evt;
                    let p2 = graph.getPointByCanvas(originPoint.x, originPoint.y);
                    let left = Math.min(p1.x, p2.x);
                    let right = Math.max(p1.x, p2.x);
                    let top = Math.min(p1.y, p2.y);
                    let bottom = Math.max(p1.y, p2.y);
                    let selectedNodes = [];
                    let selectedEdges = [];
                    let selectedIds = [];
                    let shouldUpdate = this.shouldUpdate;

                    graph.getNodes().forEach(node => {

                        let bbox = node.getBBox();
                        let bboxLT = [bbox.x, bbox.y];
                        let bboxLB = [bbox.x, bbox.y + bbox.height];
                        let bboxRT = [bbox.x + bbox.width, bbox.y];
                        let bboxRB = [bbox.x + bbox.width, bbox.y + bbox.height];

                        // 四个角任意一个角
                        if (
                            (
                                bboxLT[0] >= left &&
                                bboxLT[0] <= right &&
                                bboxLT[1] >= top &&
                                bboxLT[1] <= bottom
                            ) ||
                            (
                                bboxLB[0] >= left &&
                                bboxLB[0] <= right &&
                                bboxLB[1] >= top &&
                                bboxLB[1] <= bottom
                            ) ||
                            (
                                bboxRT[0] >= left &&
                                bboxRT[0] <= right &&
                                bboxRT[1] >= top &&
                                bboxRT[1] <= bottom
                            ) ||
                            (
                                bboxRB[0] >= left &&
                                bboxRB[0] <= right &&
                                bboxRB[1] >= top &&
                                bboxRB[1] <= bottom
                            )
                        ) {

                            if (shouldUpdate(node, 'select')) {
                        
                                selectedNodes.push(node);
                        
                                const model = node.getModel();
                        
                                selectedIds.push(model.id);
                                graph.setItemState(node, selectedState, true);
                        
                            }

                        }

                    });

                    // TODO : select edge
                    // if (this.includeEdges) {
                        
                    //     // 选中边，边的source和target都在选中的节点中时才选中
                    //     selectedNodes.forEach(node => {
                    //         const edges = node.getEdges();
                    //         edges.forEach(edge => {
                    //         const model = edge.getModel();
                    //         const { source, target } = model;
                    //         if (selectedIds.includes(source)
                    //             && selectedIds.includes(target)
                    //             && shouldUpdate(edge, 'select')) {
                    //             selectedEdges.push(edge);
                    //             graph.setItemState(edge, selectedState, true);
                    //         }
                    //         });
                    //     });
                    
                    // }

                    // this.selectedEdges = selectedEdges;
                    this.selectedNodes = selectedNodes;

                },
                _createBrush () {

                    let brush = this.graph.get('canvas').addShape('rect', {
                        attrs : this.brushStyle,
                        capture : false
                    });

                    this.brush = brush;

                    return brush;

                },
                _updateBrush (evt) {

                    const originPoint = this.originPoint;
                    
                    this.brush.attr({
                        width: Math.abs(evt.canvasX - originPoint.x),
                        height: Math.abs(evt.canvasY - originPoint.y),
                        x: Math.min(evt.canvasX, originPoint.x),
                        y: Math.min(evt.canvasY, originPoint.y)
                    });

                },
                onKeyDown (evt) {

                    const code = evt.key;

                    if (code && code.toLowerCase() === 'shift') {
                    
                        this.keydown = true;
                    
                    } else {
                        
                        this.keydown = false;
                    
                    }

                    setTimeout(() => {
                        G6.Util.modifyCSS(this.graph._cfg.canvas._cfg.canvasDOM, {
                            cursor : 'default'
                        });
                    });

                },
                onKeyUp () {

                    if (this.brush) {

                        this.brush.hide();
                        this.dragging = false;

                    }

                    this.keydown = false;

                }
            });

        },
        _regBehaviorDragNode : function () {

            let vm = this;

            G6.registerBehavior('mor-drag-node', {
                getDefaultCfg () {
                    return {
                        updateEdge : true,
                        delegateStyle : {},
                        // placeholderStyle : {},
                        enableDelegate : false,
                        targets : []
                    };
                },
                getEvents () {

                    return {
                        'node:dragstart' : 'onDragStart',
                        'node:drag' : 'onDrag',
                        'node:dragend' : 'onDragEnd',
                        'canvas:mouseleave' : 'onOutOfRange'
                    };

                },
                onDragStart (evt) {

                    if (!this.shouldBegin.call(this, evt)) {

                        return;

                    }

                    let item = evt.item;

                    // root节点不能被拖拽
                    if (item.get('model').isRoot) {

                        return;

                    }

                    // TODO : hasLocked是3.1.4新版本的功能，等g6 3.1.4升级后启用
                    // let hasLocked = item.hasLocked();
                    // if (hasLocked) {
                    //     return;
                    // }

                    // 获取所有选中的元素
                    let nodes = this.graph.findAllByState('node', 'selected');
                    let currentNodeId = item.get('id');

                    // 当前拖动的节点是否是选中的节点
                    let dragNodes = nodes.filter(node => {

                        let nodeId = node.get('id');

                        return currentNodeId === nodeId;

                    });

                    // 只拖动当前节点
                    if (dragNodes.length === 0) {
                        
                        this.target = item;
                    
                    } else if (nodes.length > 1) {

                        // 拖动多个节点
                        nodes.forEach(node => {
                            
                            // TODO : hasLocked是3.1.4新版本的功能，等g6 3.1.4升级后启用
                            // if (!node.hasLocked()) {}
                            
                            this.targets.push(node);
                            
                        });

                    } else {

                        this.targets.push(item);

                    }

                    this.origin = {
                        x : evt.x,
                        y : evt.y
                    };
                    this.point = {};
                    this.originPoint = {};

                },
                onDrag (evt) {
                    
                    if (!this.origin) {
                        
                        return;
                    
                    }
                    
                    if (!this.get('shouldUpdate').call(this, evt)) {
                        
                        return;
                    
                    }

                    // 当targets中元素时，则说明拖动的是多个选中的元素
                    if (this.targets.length > 0) {
                        
                        if (this.enableDelegate) {
                        
                            this._updateDelegate(evt);

                        } else {
                            
                            this.targets.forEach(target => {
                                
                                this._update(target, evt, this.enableDelegate);
                            
                            });
                        
                        }

                    } else {
                        
                        // 只拖动单个元素
                        this._update(this.target, evt, this.enableDelegate);
                    
                    }

                    vm.data.dragging = true;

                },
                onDragEnd (evt) {

                    if (!this.origin || !this.shouldEnd.call(this, evt)) {
                        
                        return;
                    
                    }

                    if (this.delegateShape) {

                        this.delegateShape.remove();
                        this.delegateShape = null;
                    
                    }

                    if (this.target) {
                        
                        let delegateShape = this.target.get('delegateShape');

                        if (delegateShape) {

                            delegateShape.remove();
                            this.target.set('delegateShape', null);
                    
                        }
                    
                    }

                    if (this.targets.length > 0) {
    
                        // 获取所有已经选中的节点
                        this.targets.forEach(node => this._update(node, evt));

                    } else if (this.target) {
                        
                        this._update(this.target, evt);
                    
                    }

                    this.point = {};
                    this.origin = null;
                    this.originPoint = {};
                    this.targets.length = 0;
                    this.target = null;

                    // 终止时需要判断此时是否在监听画布外的 mouseup 事件，若有则解绑
                    let fn = this.fn;

                    if (fn) {
                        
                        window.body.removeEventListener('mouseup', fn, false);
                        this.fn = null;
                    
                    }

                    // this.graph.paint();
                    vm._removeOldDragPlaceholder();
                    this.graph.refreshLayout();
                    vm.data.dragging = false;

                },
                // 若在拖拽时，鼠标移出画布区域，此时放开鼠标无法终止 drag 行为。在画布外监听 mouseup 事件，放开则终止
                onOutOfRange (evt) {

                    if (this.origin) {
                        
                        let canvasElement = this.graph.get('canvas').get('el');
                        let fn = ev => {

                            if (ev.target !== canvasElement) {

                                this.onDragEnd(evt);

                            }

                        };

                        this.fn = fn;
                        window.body.addEventListener('mouseup', fn, false);
                    
                    }

                },
                _toggleChildren (item, method = 'hide') {
                    
                    let edges = item.getEdges();
                    let edgeTarget;

                    item[method]();
                    edges.forEach(edge => {

                        edge[method]();
                        edgeTarget = edge.getTarget();

                        if (edgeTarget && edgeTarget !== item) {
                            
                            this._toggleChildren(edgeTarget, method);
                        
                        }

                    });
                    
                },
                _update (item, evt, enableDelegate) {

                    let origin = this.origin;
                    let model = item.get('model');
                    let nodeId = item.get('id');

                    if (!this.point[nodeId]) {
                    
                        this.point[nodeId] = {
                            x : model.x,
                            y : model.y
                        };
                    
                    }

                    let x = evt.x - origin.x + this.point[nodeId].x;
                    let y = evt.y - origin.y + this.point[nodeId].y;

                    // 拖动时隐藏节点和边
                    if (evt.type === 'dragend') {

                        this._toggleChildren(item, 'show');

                    } else {

                        this._toggleChildren(item, 'hide');
                        
                    }

                    // 拖动单个未选中元素
                    if (enableDelegate) {
                        
                        this._updateDelegate(evt, x, y);

                        return;
                    
                    }

                    let pos = {
                        x,
                        y
                    };

                    if (this.get('updateEdge')) {
                        
                        this.graph.updateItem(item, pos);
                    
                    } else {
                        
                        item.updatePosition(pos);
                        this.graph.paint();
                    
                    }
                
                },
                // 更新拖动元素时的delegate
                _updateDelegate (evt, x, y) {

                    let bbox = evt.item.get('keyShape').getBBox();

                    if (!this.delegateShape) {
                        
                        // 拖动多个
                        let parent = this.graph.get('group');
                        let delegateAttrs = G6.Util.deepMix({
                            fill : '#F3F9FF',
                            fillOpacity : 0.5,
                            stroke : '#1890FF',
                            strokeOpacity : 0.9,
                            lineDash : [5, 5]
                        }, this.delegateStyle);
                        // let placeholderAttrs = G6.Util.deepMix({
                        //     fill : '#8ec8fe'
                        // }, this.placeholderStyle);
                        
                        if (this.targets.length > 0) {

                            let {
                                x,
                                y,
                                width,
                                height,
                                minX,
                                minY
                            } = this.calculationGroupPosition();
                            
                            this.originPoint = {
                                x,
                                y,
                                width,
                                height,
                                minX,
                                minY
                            };
                            
                            // model上的x, y是相对于图形中心的，delegateShape是g实例，x,y是绝对坐标
                            this.delegateShape = parent.addShape('rect', {
                                attrs : Object.assign({
                                    width,
                                    height,
                                    x,
                                    y,
                                }, delegateAttrs)
                            });

                        } else if (this.target) {


                            
                            // this.placeholderShape = parent.addShape('rect', {
                            //     attrs : Object.assign({
                            //         width : 60,
                            //         heigth : 17
                            //     }, placeholderAttrs);
                            // });
                            this.delegateShape = parent.addShape('rect', {
                                attrs : Object.assign({
                                    width : bbox.width,
                                    height : bbox.height,
                                    x : x + bbox.x,
                                    y : y + bbox.y,
                                }, delegateAttrs)
                            });
                            this.target.set('delegateShape', this.delegateShape);
                        
                        }

                        this.delegateShape.set('capture', false);

                    } else if (this.targets.length > 0) {
                        
                        let clientX = evt.x - this.origin.x + this.originPoint.minX;
                        let clientY = evt.y - this.origin.y + this.originPoint.minY;
                        
                        this.delegateShape.attr({
                            x : clientX,
                            y : clientY
                        });

                    } else if (this.target) {

                        this.delegateShape.attr({
                            x : x + bbox.x,
                            y : y + bbox.y
                        });
        
                    }

                        
                    vm._refreshDragPlaceholder(this.delegateShape, evt.item);
                    this.graph.paint();

                },
                // 计算delegate位置，包括左上角左边及宽度和高度
                calculationGroupPosition () {
                    
                    let graph = this.graph;
                    let nodes = graph.findAllByState('node', 'selected');
                    let minx = Infinity;
                    let maxx = -Infinity;
                    let miny = Infinity;
                    let maxy = -Infinity;

                    // 获取已节点的所有最大最小x y值
                    for (let id of nodes) {

                        let element = typeof id === 'string' ? graph.findById(id) : id;
                        let bbox = element.getBBox();
                        let {
                            minX,
                            minY,
                            maxX,
                            maxY
                        } = bbox;
                        
                        if (minX < minx) {
                        
                            minx = minX;
                        
                        }

                        if (minY < miny) {
                        
                            miny = minY;
                        
                        }

                        if (maxX > maxx) {
                            
                            maxx = maxX;
                        
                        }

                        if (maxY > maxy) {
                            
                            maxy = maxY;
                        
                        }
                    
                    }
                    
                    let x = Math.floor(minx) - 20;
                    let y = Math.floor(miny) + 10;
                    let width = Math.ceil(maxx) - x;
                    let height = Math.ceil(maxy) - y;

                    return {
                        x,
                        y,
                        width,
                        height,
                        minX : minx,
                        minY : miny
                    };

                }
            });

        },
        _onNodeHover : function () {

            this.data.graph.on('node:mouseenter', evt => {
                this.data.graph.setItemState(evt.item, 'hover', true);
            });

            this.data.graph.on('node:mouseleave', evt => {
                this.data.graph.setItemState(evt.item, 'hover', false);
            });

        },
        _onNodeDrag : function () {

            this.data.graph.on('node:dragstart', evt => {
                this.data.graph.setItemState(evt.item, 'drag', true);
            });

            this.data.graph.on('node:dragend', evt => {
                this.data.graph.setItemState(evt.item, 'drag', false);
            });
            
        },
        _onCanvasGrab : function () {

            this.data.graph.on('canvas:mousedown', evt => {
                G6.Util.modifyCSS(evt.currentTarget._cfg.canvas._cfg.canvasDOM, {
                    cursor : 'grabbing'
                });
            });

            this.data.graph.on('canvas:mouseenter', evt => {
                G6.Util.modifyCSS(evt.currentTarget._cfg.canvas._cfg.canvasDOM, {
                    cursor : 'grab'
                });
            });

            this.data.graph.on('canvas:mouseup', evt => {
                G6.Util.modifyCSS(evt.currentTarget._cfg.canvas._cfg.canvasDOM, {
                    cursor : 'grab'
                });
            });

        },
        _onNodeEdit : function () {

            this.data.graph.on('node:dblclick', evt => {

                let groupShapes = this._getGroupShapes(evt.item);

                this.data.editMode = true;
                this.data.editGroupShapes = groupShapes;
                this.data.editNode = evt.item;
                this._refreshEditor(evt.item);
                groupShapes.text.attr({
                    opacity : 0
                });
                this.data.editNode.setState('editing', true);
                this.data.graph.paint();
                this.data.$editContentInput.focus();

            });

            this.data.graph.on('wheelzoom', () => {

                if (this.data.editMode) {
        
                    this._refreshEditor(this.data.editNode);

                }

            });

            this.data.graph.on('click', evt => {
                
                if (this.data.editMode &&
                    this.data.editNode !== evt.item) {

                    this._cancelEdit();

                }

            });

            this.data.graph.on('canvas:mousedown', evt => {
                
                if (this.data.editMode &&
                    this.data.editNode !== evt.item) {

                    this._cancelEdit();

                }

            });

            this.$watch('data.editZoom', () => {

                this.data.$editContent.style.transform = `scale(${this.data.editZoom})`;

            });

        },
        _initRegister : function () {

            this._regNodeBlock();
            this._regNodePlaceholder();
            this._regEdgeCubicHorizontal();
            this._regEdgePlaceholderLine();
            this._regBehaviorBrushSelect();
            this._regBehaviorDragNode();

        },
        _bindEvent : function () {

            this._onCanvasGrab();
            this._onNodeHover();
            this._onNodeDrag();
            this._onNodeEdit();

        }
    },
    created : function () {},
    mounted : function () {

        this.data.$editContent = this.$el.querySelector('.edit-content');
        this.data.$editContentInput = this.data.$editContent.querySelector('textarea');
        this._initRegister();
        this.data.graph = new G6.TreeGraph({
            container : this.$el.querySelector('.canvas'),
            width : 760,
            height : 500,
            pixelRatio : 2,
            animate : false,
            modes : {
                default : [
                    'drag-canvas',
                    'zoom-canvas',
                    {
                        type : 'click-select',
                        multiple : true,
                        keyCode : 17
                    },
                    {
                        type : 'mor-drag-node',
                        updateEdge : true,
                        enableDelegate : true
                    },
                    'mor-brush-select'
                ]
            },
            nodeStateStyles : {
                active : {
                    fillOpacity: 1
                }
            },
            defaultNode : {
                shape : 'mor-node-block'
            },
            defaultEdge : {
                shape : 'mor-edge-cinoc-horizontal'
                // shape : 'cubic-horizontal'
            },
            layout : {
                type : 'compactBox',
                direction: 'LR',
                getId: function getId(d) {
                    return d.id;
                },
                getHeight : d => {

                    let node = this.data.graph.findById(d.id);

                    return node ? node.getBBox().height : 0;

                },
                getWidth : d => {

                    let node = this.data.graph.findById(d.id);

                    return node ? node.getBBox().width : 0;

                },
                getVGap : () => {
                    return 5;
                },
                getHGap : () => {
                    return 20;
                }
            }
        });
        this._bindEvent();

        let centerX = 0;
        // let rootNode = null;

        let data = {
            "text": "Modeling Methods",
            "isRoot" : true,
            "children": [
                {
                    "text": "Classification",
                    "children": [
                        { "text": "Logistic regression" },
                        { "text": "Linear discriminant analysis" },
                        { "text": "Rules" },
                        { "text": "Decision trees" },
                        { "text": "Naive Bayes" },
                        { "text": "K nearest neighbor" },
                        { "text": "Probabilistic neural network" },
                        { "text": "Support vector machine" }
                    ]
                },
                {
                    "text": "Consensus",
                    "children": [
                        {
                            "text": "Models diversity",
                            "children": [
                                { "text": "Different initializations" },
                                { "text": "Different parameter choices" },
                                { "text": "Different architectures" },
                                { "text": "Different modeling methods" },
                                { "text": "Different training sets" },
                                { "text": "Different feature sets" }
                            ]
                            },
                        {
                            "text": "Methods",
                            "children": [
                                { "text": "Classifier selection" },
                                { "text": "Classifier fusion" }
                            ]
                        },
                        {
                            "text": "Common",
                            "children": [
                                { "text": "Bagging" },
                                { "text": "Boosting" },
                                { "text": "AdaBoost" }
                            ]
                        }
                    ]
                },
                {
                    "text": "Regression",
                    "children": [
                        { "text": "Multiple linear regression" },
                        { "text": "Partial least squares" },
                        { "text": "Multi-layer feedforward neural network" },
                        { "text": "General regression neural network" },
                        { "text": "Support vector regression" }
                    ]
                }
            ]
        };


        // let data = {
        //     "text": "Classification",
        //     "children": [
        //         { "text": "Logistic regression" },
        //         { "text": "Linear discriminant analysis" },
        //         { "text": "Rules" },
        //         { "text": "Decision trees" },
        //         { "text": "Naive Bayes" },
        //         { "text": "K nearest neighbor" },
        //         { "text": "Probabilistic neural network" },
        //         { "text": "Support vector machine" }
        //     ]
        // };

        G6.Util.traverseTree(data, item => {

            item.id = this.data.globalId++;
            item.shape = 'mor-node-block';
            item.anchorPoints = [[0, 0.5], [1, 0.5]];

            if (item.isRoot) {

                this.data.rootNodeId = item.id;

            }
        
        });

        this.data.graph.read(data);

        setTimeout(() => {

            this.data.graph.refreshLayout(true);
            // this.data.graph.set('animate', true);
            
        });

        // this.data.graph.fitView();

        window.G6 = G6;

    }
};

    // G6.registerNode('mind-node-underline', {
        //     drawShape: (cfg, group) => {

        //         let rect = group.addShape('rect', {
        //             attrs : {
        //                 fill : '#f0f0f0',
        //                 cursor : 'move'
        //             }
        //         });
        //         let underline = group.addShape('rect', {
        //             attrs : {
        //                 fill : '#587ef7',
        //                 cursor : 'move',
        //                 height : 4
        //             }
        //         });
        //         let text = group.addShape('text', {
        //             attrs : {
        //                 text : cfg.id,
        //                 x : 0,
        //                 y : 0,
        //                 textAlign : 'center',
        //                 textBaseline : 'middle',
        //                 fill : '#000000',
        //                 fontSize : 16,
        //                 cursor : 'move'
        //             }
        //         });

        //         let textBbox = text.getBBox();

        //         rect.attr({
        //             x : textBbox.minX - 24,
        //             y : textBbox.minY - 12,
        //             width : textBbox.width + 48,
        //             height : textBbox.height + 24
        //         });

        //         let rectBbox = rect.getBBox();

        //         underline.attr({
        //             x : rectBbox.minX,
        //             y : rectBbox.maxY - 4,
        //             width : rectBbox.width
        //         });

        //         return rect;

        //     },
        //     setState : (name, value, item) => {

        //         let shape = item.get('keyShape');

        //         if (name === 'hover' && value === true) {

        //             shape.attr({
        //                 stroke : '#31cdf1',
        //                 strokeWidth : 6
        //             });

        //         } else if (name === 'hover' && value === false) {

        //             shape.attr({
        //                 stroke : '#ffffff',
        //                 strokeWidth : 6
        //             });

        //         }

        //     }
        // }, 'single-shape');
</script>



