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

const boxShapeIndex = 0;
const outlineShapeIndex = 1;
const conShapeIndex = 2;
const textShapeIndex = 3;
const placeholderShapeIndex = 4;

const conPaddingX = 24;
const conPaddingY = 12;
const outlinePadding = 3;

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
                $canvas : null,
                globalId : 1,
                dragging : false,
                editting : false,
                editGroupShapes : {},
                editNode : null,
                editContent : '',
                editZoom : 1,
                dragOptions : {},
                dragTarget : {
                    originNodeStyle : {},
                    saveModel : {}
                },
                dragging : false,
                dragLastHolderParent : null,
                dragLastHolderIndex : null
            }
        };

    },
    methods : {
        // _getIncomeNode : function (node) {

        //     return node.getInEdges()[0].getSource();

        // },
        // _getOutcomeNodes : function (node) {

        //     let nodes = [];

        //     node.getOutEdges().forEach(edge => {

        //         nodes.push(edge.getTarget());

        //     });

        //     return nodes;

        // },
        _clearSelectedNode : function (selectedState) {
                    
            let graph = this.data.graph;
            let autoPaint = graph.get('autoPaint');
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
        _getGroupShapes : function (item) {

            let box = item.getKeyShape();
            let group = box.getParent();
            let con = group.getChildByIndex(conShapeIndex);
            let outline = group.getChildByIndex(outlineShapeIndex);
            let text = group.getChildByIndex(textShapeIndex);
            let placeholder = group.getChildByIndex(placeholderShapeIndex);

            return {
                con,
                box,
                text,
                outline,
                placeholder
            };

        },
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
            let conBbox = groupShapes.con.getBBox();
            let zoom = this.data.graph.getZoom();
            let {
                x : nodeX,
                y : nodeY
            } = this.data.graph.getCanvasByPoint(nodeBbox.x, nodeBbox.y);

            // when text is empty use placeholder
            if (textBbox.width === 0) {

                textBbox = groupShapes.placeholder.getBBox();

            }

            let inputX = `${textBbox.x + 1}px`;
            let inputY = `${textBbox.y}px`;

            // inputX = (inputX < 0) ? `calc(50% - ${Math.abs(inputX)}px - ${textBbox.width / 2}px)` : `calc(50% + ${inputX}px - ${textBbox.width / 2}px)`;
            // inputY = (inputY < 0) ? `calc(50% - ${Math.abs(inputY)}px)` : `calc(50% + ${inputY}px)`;

            this.data.$editContent.style.display = 'block';
            this.data.$editContent.style.left = `${nodeX}px`;
            this.data.$editContent.style.top = `${nodeY}px`;
            this.data.$editContent.style.width = `${conBbox.width}px`;
            this.data.$editContent.style.height = `${conBbox.height}px`;
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
        _cancelEdit : function () {

            if (!this.data.editting) {

                return;

            }

            let groupShapes = this._getGroupShapes(this.data.editNode);

            groupShapes.text.attr({
                opacity : 1
            });
            this.data.graph.paint();
            this.data.$editContent.style.display = 'none';
            this.data.editting = false;
            this.data.editContent = '';
            this.data.editGroupShapes = {};
            this.data.editZoom = 1;
            this.data.editNode.setState('editing', false);
            this.data.editNode = null;
            this.data.graph.refreshLayout();

        },
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
                this._refreshMindNode(groupShapes);
                this._refreshEditor(this.data.editNode);

            });

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

            // if (!delegateShape) {

            //     return;

            // }

            let nodes = this.data.graph.getNodes();
            let delegateBbox = delegateShape.getBBox();
            let distance;
            let distanceNodes = [];
            let matchOptions = {};

            delegateBbox.centerX = delegateBbox.x + (delegateBbox.width / 2);
            delegateBbox.centerY = delegateBbox.y + (delegateBbox.height / 2);

            // 按距离对节点排序
            distanceNodes = sortBy(nodes, node => {

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

                if (node === targetNode ||
                    node.getModel()._isPlaceolder ||
                    node.getModel().isDragging === true) {

                    continue;

                }

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
                    shape : 'mor-placeholder-node',
                    anchorPoints : [[0, 0.5], [1, 0.5]],
                    _isPlaceolder : true
                });
                this.data.dragLastHolderParent = model.children;
                this.data.graph.paint();
                this.data.graph.changeData();
                this.data.graph.refreshLayout();
                this.data.graph.findById(this.data.globalId - 1).getInEdges()[0].update({
                    shape : 'mor-placeholder-edge'
                });

            }

        }, 160),
        _toggleAllChildren : function (node, type) {

            let outEdges = node.getOutEdges();

            for (let edge of outEdges) {

                let child = edge.getTarget();
                let model = child.getModel();
                
                edge[type]();
                child[type]();

                if (type === 'hide') {

                    model.isDragging = true;

                } else {

                    model.isDragging = false;

                }

                if (child.getOutEdges().length > 0) {

                    this._toggleAllChildren(child, type);

                }

            }

        },
        _updateDragTarget : function (startDrag = false) {

            let dragTarget = this.data.dragTarget;
            let targetNodes = dragTarget.nodes;
            let updateDragLastHolderIndex = false;

            if (startDrag === true && dragTarget.hidden === false) {

                for (let index in targetNodes) {

                    let node = targetNodes[index];

                    dragTarget.originNodeStyle[index] = {
                        height : node.getBBox().height
                    };
                    dragTarget.saveModel[index] = node.getModel();

                    node.update({
                        isDragging : true,
                        style : {
                            fillOpacity : 0,
                            radius : 0
                        }
                    });
                    node.getInEdges()[0].hide();
                    node
                        .get('group')
                        .getChildByIndex(textShapeIndex)
                        .hide();
                    node
                        .get('group')
                        .getChildByIndex(conShapeIndex)
                        .hide();
                    this._toggleAllChildren(node, 'hide');

                }

                dragTarget.hidden = true;
                this.data.graph.refreshLayout();
                
            } else if (startDrag === false && dragTarget.hidden === true) {

                // TODO 获取顶级父元素target进行移动
                for (let index in targetNodes) {

                    let node = targetNodes[index];

                    let parent = node.getInEdges()[0].getSource().getModel().children;
                    let indexOfParent = parent.indexOf(node.getModel());

                    node.getInEdges()[0].getSource().getModel().children.splice(indexOfParent, 1);
                    node.update({
                        isDragging : false,
                        style : {
                            fillOpacity : 1,
                            radius : 6
                        }
                    });
                    node
                        .get('group')
                        .getChildByIndex(textShapeIndex)
                        .show();
                    node
                        .get('group')
                        .getChildByIndex(conShapeIndex)
                        .show();
                    this._toggleAllChildren(node, 'show');
                    node.getInEdges()[0].show();

                    if (this.data.dragLastHolderParent === parent && this.data.dragLastHolderIndex > indexOfParent) {

                        if (!updateDragLastHolderIndex) {
                        
                            this.data.dragLastHolderIndex = this.data.dragLastHolderIndex - 1;
                            updateDragLastHolderIndex = true;

                        }

                        this.data.dragLastHolderParent.splice(this.data.dragLastHolderIndex + 1, 0, dragTarget.saveModel[index]);

                    }

                }

                dragTarget.hidden = false;
                this.data.graph.paint();
                this.data.graph.changeData();
                this.data.graph.refreshLayout();

            }

        },
        _refreshMindNode : function (groupShapes) {

            let {
                box,
                outline,
                con,
                text,
                placeholder
            } = groupShapes;
            let textBbox = text.getBBox();

            // when text is empty use placeholder
            if (textBbox.width === 0) {
                
                textBbox = groupShapes.placeholder.getBBox();

            }

            con.attr({
                width : textBbox.width + (conPaddingX * 2),
                height : textBbox.height + (conPaddingY * 2)
            });

            let conBbox = con.getBBox();
            
            outline.attr({
                width : conBbox.width + (outlinePadding * 2),
                height : conBbox.height + (outlinePadding * 2)
            });

            box.attr({
                width : conBbox.width,
                height : conBbox.height
            });

            placeholder.attr({
                y : textBbox.height / 2 + conPaddingY
            });

            text.attr({
                y : textBbox.height / 2 + conPaddingY
            })

        },
        _onNodeHover : function () {

            this.data.graph.on('node:mouseenter', evt => {

                if (evt.item.getModel().isMindNode) {
                
                    this.data.graph.setItemState(evt.item, 'hover', true);
                
                }
            
            });

            this.data.graph.on('node:mouseleave', evt => {

                if (evt.item.getModel().isMindNode) {

                    this.data.graph.setItemState(evt.item, 'hover', false);
                
                }

            });

        },
        _onNodeSelected : function () {

            this.data.graph.on('node:click', evt => {

                this._clearSelectedNode('selected');

                if (evt.item.getModel().isMindNode) {
                    
                    this.data.graph.setItemState(evt.item, 'selected', true);
                
                }
            
            });

        },
        _onNodeEdit : function () {

            this.data.graph.on('node:dblclick', evt => {

                let groupShapes = this._getGroupShapes(evt.item);

                this.data.editting = true;
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

                if (this.data.editting) {
        
                    this._refreshEditor(this.data.editNode);

                }

            });

            this.data.graph.on('click', evt => {
                
                if (this.data.editting &&
                    this.data.editNode !== evt.item) {

                    this._cancelEdit();

                }

            });

            this.data.graph.on('canvas:mousedown', evt => {
                
                if (this.data.editting &&
                    this.data.editNode !== evt.item) {

                    this._cancelEdit();

                }

            });

            this.$watch('data.editZoom', () => {

                this.data.$editContent.style.transform = `scale(${this.data.editZoom})`;

            });

        },
        _onNodeDrag : function () {

            this.data.graph.on('node:dragstart', evt => {

                if (!evt.item.destroyed && !evt.item.getModel().isRoot && evt.item.getModel().isMindNode) {
                    
                    this.data.graph.setItemState(evt.item, 'drag', true);

                }

            });

            this.data.graph.on('node:dragend', evt => {

                if (!evt.item.destroyed && !evt.item.getModel().isRoot && evt.item.getModel().isMindNode) {

                    this.data.graph.setItemState(evt.item, 'drag', false);

                }

            });
            
        },
        _regMindNode : function () {

            G6.registerNode('mor-mind-node', {
                drawShape : (cfg, group) => {

                    let cursor = 'default';

                    let box = group.addShape('rect', {
                        attrs : {
                            x : 0,
                            y : 0,
                            fill : 'transparent',
                            cursor
                        }
                    });
                    let outline = group.addShape('rect', {
                        attrs : {
                            fill : 'transparent',
                            radius : 6,
                            cursor,
                            stroke : 'transparent',
                            lineWidth : 3
                        }
                    });
                    let con = group.addShape('rect', {
                        attrs : {
                            fill : '#96d3e6',
                            radius : 6,
                            cursor
                        }
                    });
                    let text = group.addShape('text', {
                        attrs : {
                            x : 0,
                            y : 0,
                            text : cfg.text,
                            textAlign : 'left',
                            textBaseline : 'middle',
                            fill : 'rgba(67,75,83,1)',
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
                            fill : 'rgba(67,75,83,1)',
                            fontSize : 16,
                            cursor
                        }
                    });

                    let textBbox = text.getBBox();

                    con.attr({
                        x : 0,
                        y : 0,
                        width : textBbox.width + (conPaddingX * 2),
                        height : textBbox.height + (conPaddingY * 2)
                    });

                    let conBbox = con.getBBox();

                    box.attr({
                        width : conBbox.width,
                        height : conBbox.height
                    });

                    let boxBbox = con.getBBox();
                    
                    outline.attr({
                        x : boxBbox.minX - outlinePadding,
                        y : boxBbox.minY - outlinePadding,
                        width : boxBbox.width + (outlinePadding * 2),
                        height : boxBbox.height + (outlinePadding * 2)
                    });

                    text.attr({
                        x : conPaddingX,
                        y : textBbox.height / 2 + conPaddingY
                    });

                    placeholder.attr({
                        x : conPaddingX,
                        y : textBbox.height / 2 + conPaddingY
                    });

                    return box;

                },
                setState : (name, value, item) => {

                    let states = item.getStates();
                    let box = item.get('keyShape');
                    let group = box.getParent();
                    let outline = group.getChildByIndex(outlineShapeIndex);
                    let text = group.getChildByIndex(textShapeIndex);
                    let con = group.getChildByIndex(conShapeIndex);

                    if (states.indexOf('drag') !== -1) {

                        // item.toFront();
                        // con.attr({
                        //     fillOpacity : 0.3,
                        //     fill : '#959fa2'
                        // });
                        // text.attr({
                        //     fill : 'rgba(67,75,83,0.4)'
                        // });
                        outline.attr({
                            fillOpacity : 0,
                            strokeOpacity : 0
                        });

                    } else {

                        // con.attr({
                        //     fillOpacity : 1,
                        //     fill : '#96d3e6'
                        // });
                        // text.attr({
                        //     fill : 'rgba(67,75,83,1)'
                        // });
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
                        group.set('zIndex', 9);

                    } else if (
                        this.data.dragging === false &&
                        states.indexOf('hover') !== -1
                    ) {

                        outline.attr({
                            stroke : '#8cdcf5',
                            lineWidth : 3
                        });
                        group.set('zIndex', 3);

                    } else {

                        outline.attr({
                            stroke : 'transparent',
                            lineWidth : 3
                        });
                        group.set('zIndex', 1);

                    }

                }
            }, 'single-shape');

        },
        _regPlaceholderNode : function () {

            G6.registerNode('mor-placeholder-node', {
                drawShape : (cfg, group) => {

                    let key = group.addShape('rect', {
                        attrs : {
                            fill : '#f16d6d',
                            cursor : 'default',
                            width : 80,
                            height : 28,
                            x : 0,
                            y : 0,
                            radius : 6,
                        }
                    });

                    return key;

                }
            }, 'single-shape');

        },
        _regMindEdge : function () {

            G6.registerEdge('mor-mind-edge', {
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
        _regPlaceholderEdge : function () {

            G6.registerEdge('mor-placeholder-edge', {
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
                        stroke : '#f16d6d',
                        lineWidth : 3,
                        // lineDash : [5, 5],
                        path : this.getPath(points)
                    });

                }
            }, 'cubic-horizontal');

        },
        _regBehaviorBrushSelect : function () {

            let vm = this;

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

                    vm._clearSelectedNode(this.selectedState);

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
                        width : Math.abs(evt.canvasX - originPoint.x),
                        height : Math.abs(evt.canvasY - originPoint.y),
                        x : Math.min(evt.canvasX, originPoint.x),
                        y : Math.min(evt.canvasY, originPoint.y)
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
                        targets : []
                    };
                },
                getEvents () {

                    return {
                        'node:dragstart' : 'onDragStart',
                        'node:drag' : 'onDrag',
                        'node:dragend' : 'onDragEnd',
                        // 'canvas:mouseleave' : 'onOutOfRange'
                    };

                },
                onDragStart (evt) {
                    
                    if (!this.shouldBegin.call(this, evt)) {

                        return;

                    }

                    // root节点不能被拖拽
                    // TODO : 等g6 3.1.4升级后启用hasLocked来判断
                    if (evt.item.get('model').isRoot) {

                        return;

                    }

                    this.dragOptions = {
                        originX : evt.x,
                        originY : evt.y,
                        delegateShape : null
                    };

                    console.log('onDragStart');

                    // 获取所有选中的元素
                    let nodes = this.graph.findAllByState('node', 'selected');
                    let targetNodeId = evt.item.get('id');

                    // 当前拖动的节点是否是选中的节点
                    let dragNodes = nodes.filter(node => (targetNodeId === node.get('id')));

                    // 只拖动当前节点
                    if (dragNodes.length === 0) {

                        let model = evt.item.getModel();
                        
                        this.target = evt.item;
                        this.dragOptions.type = 'unselect-single';
                        this.point = {
                            x : model.x,
                            y : model.y 
                        };
                    
                    // 拖动选中节点
                    } else if (nodes.length === 1) {
    
                        this.targets.push(evt.item);
                        this.dragOptions.type = 'select';
                        // this.dragOptions.model = evt.item.getModel();
                        // this.dragOptions.nodeId = evt.item.get('id');

                    // 拖动多个节点
                    } else {
                        
                        nodes.forEach(node => {

                            // const hasLocked = node.hasLocked();
                            // if (!hasLocked) {
                            // }

                            this.targets.push(node);

                        });
                        this.dragOptions.type = 'select';

                    }

                    this.origin = {
                        x : evt.x,
                        y : evt.y
                    };
                    // this.originPoint = {};

                },
                onDrag (evt) {

                    if (!this.origin || !this.get('shouldUpdate').call(this, evt)) {
                
                        return;
                    
                    }

                    if (this.targets.length > 0) {

                        // 只拖动单个元素
                        this._updateDelegate(evt);

                        // this.targets.forEach(target => {
                        //     this._update(target, e, this.enableDelegate);
                        // });

                    } else {

                        // 只拖动单个元素
                        this._update(evt);

                    }

                    vm.data.dragging = true;

                },
                onDragEnd (evt) {

                    if (!this.origin || !this.shouldEnd.call(this, evt)) {
                        
                        return;
                    
                    }

                    if (this.dragOptions.delegateShape) {
                        
                        this.dragOptions.delegateShape.remove();
                        this.dragOptions.delegateShape = null;

                    }

                    this.dragOptions = {};
                    this.origin = null;
                    this.point = {};
                    this.originPoint = {};
                    // this.targets.length = 0;
                    // this.target = null;

                    // 终止时需要判断此时是否在监听画布外的 mouseup 事件，若有则解绑
                    let fn = this.fn;

                    if (fn) {
                        
                        window.document.body.removeEventListener('mouseup', fn, false);
                        this.fn = null;
                    
                    }

                    // this.graph.paint();
                    vm._updateDragTarget(false);
                    vm._removeOldDragPlaceholder();
                    this.graph.refreshLayout();
                    vm.data.dragging = false;

                },
                _update (evt) {

                    let origin = this.origin;
                    let x = evt.x - origin.x + this.point.x;
                    let y = evt.y - origin.y + this.point.y;

                    // 拖动单个未选中元素
                    this._updateDelegate(evt, x, y);
                
                },
                _updateDelegate (evt, x, y) {

                    // 如果还没创建代理元素
                    if (!this.dragOptions.delegateShape) {

                        let parent = this.graph.get('group');

                        if (this.targets.length > 0) {

                            const {
                                x,
                                y,
                                width,
                                height,
                                minX,
                                minY
                            } = this._calculationGroupPosition();

                            this.originPoint = {
                                x,
                                y,
                                width,
                                height,
                                minX,
                                minY
                            };

                            this.dragOptions.delegateShape = parent.addShape('rect', {
                                attrs : {
                                    fill : '#F3F9FF',
                                    fillOpacity : 0.5,
                                    stroke : '#1890FF',
                                    strokeOpacity : 0.9,
                                    lineDash : [5, 5],
                                    width,
                                    height,
                                    x,
                                    y
                                }
                            });
                            vm.data.dragTarget = {
                                nodes : this.targets,
                                hidden : false,
                                originNodeStyle : {},
                                saveModel : {}
                            };

                        } else {

                            let bbox = this.target.get('keyShape').getBBox();
                            
                            this.dragOptions.delegateShape = parent.addShape('rect', {
                                attrs : {
                                    fill : '#F3F9FF',
                                    fillOpacity : 0.5,
                                    stroke : '#1890FF',
                                    strokeOpacity : 0.9,
                                    lineDash : [5, 5],
                                    width : bbox.width,
                                    height : bbox.height,
                                    x : x + bbox.x,
                                    y : y + bbox.y,
                                }
                            });
                            vm.data.dragTarget = {
                                nodes : [this.target],
                                hidden : false,
                                originNodeStyle : {},
                                saveModel : {}
                            };

                        }
                        
                        vm._updateDragTarget(true);
                        vm._refreshDragPlaceholder(this.dragOptions.delegateShape, evt.item);
                        // this.target.set('delegateShape', this.delegateShape);
                        // this.dragOptions.delegateShape.set('capture', false);

                    } else if (this.dragOptions.type === 'unselect-single') {

                        let bbox = evt.item.get('keyShape').getBBox();

                        this.dragOptions.delegateShape.attr({
                            x : x + bbox.x,
                            y : y + bbox.y
                        });
                        vm._refreshDragPlaceholder(this.dragOptions.delegateShape, null);

                    } else if (this.dragOptions.type === 'select') {
        
                        let clientX = evt.x - this.origin.x + this.originPoint.minX;
                        let clientY = evt.y - this.origin.y + this.originPoint.minY;

                        this.dragOptions.delegateShape.attr({
                            x : clientX,
                            y : clientY
                        });
                        vm._refreshDragPlaceholder(this.dragOptions.delegateShape, null);

                    }

                    this.graph.paint();

                },
                _calculationGroupPosition() {

                    let graph = this.graph;
                    let nodes = graph.findAllByState('node', 'selected');
                    let minx = Infinity;
                    let maxx = -Infinity;
                    let miny = Infinity;
                    let maxy = -Infinity;

                    // 获取已节点的所有最大最小x y值
                    for (let id of nodes) {

                        let element = (typeof id === 'string') ? graph.findById(id) : id;
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
        _registrar : function () {

            this._regMindNode();
            this._regPlaceholderNode();
            this._regMindEdge();
            this._regPlaceholderEdge();

            this._regBehaviorBrushSelect();
            this._regBehaviorDragNode();

        },
        _bindEvent : function () {

            this._onNodeHover();
            this._onNodeSelected();
            this._onNodeEdit();
            this._onNodeDrag();

        },
        _createGraph : function () {

            this.data.graph = new G6.TreeGraph({
                container : this.data.$canvas,
                width : 760,
                height : 500,
                pixelRatio : 2,
                animate : false,
                modes : {
                    default : [
                        'drag-canvas',
                        'zoom-canvas',
                        'mor-brush-select',
                        'mor-drag-node'
                    ]
                },
                defaultNode : {
                    shape : 'mor-mind-node'
                },
                defaultEdge : {
                    shape : 'mor-mind-edge'
                },
                layout : {
                    type : 'compactBox',
                    direction : 'LR',
                    getHeight : data => {

                        let node = this.data.graph.findById(data.id);

                        if (
                            !node ||
                            (node && node.destroyed) ||
                            (node && node.getModel().isDragging)
                        ) {

                            return 0;

                        }
                        
                        return node.getBBox().height;

                    },
                    getWidth : data => {

                        let node = this.data.graph.findById(data.id);

                        if (
                            !node ||
                            (node && node.destroyed) ||
                            (node && node.getModel().isDragging)
                        ) {

                            return 0;

                        }

                        return node.getBBox().width;

                    },
                    getVGap : data => {

                        let node = this.data.graph.findById(data.id);

                        if (node && node.getModel().isDragging) {

                            return 0;

                        }

                        return 5;

                    },
                    getHGap : () => {

                        return 30;

                    }
                }
            });

        },
        _readData : function (data) {

            G6.Util.traverseTree(data, item => {

                item.id = this.data.globalId++;
                item.shape = 'mor-mind-node';
                item.anchorPoints = [[0, 0.5], [1, 0.5]];
                item.isMindNode = true;
            
            });
            this.data.graph.read(data);

            setTimeout(() => {

                this.data.graph.refreshLayout(true);

            });

        }
    },
    created : function () {},
    mounted : function () {

        this.data.$canvas = this.$el.querySelector('.canvas');
        this.data.$editContent = this.$el.querySelector('.edit-content');
        this.data.$editContentInput = this.data.$editContent.querySelector('textarea');

        let data = {
            "text": "ClassificationClassification",
            "isRoot" : true,
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
        };

        let data2 = {
            "text": "Modeling Methods",
            "isRoot" : true,
            "children": [
                {
                    "text": "ClassificationClassification",
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

        let data3 = {
            "text": "Modeling Methods",
            "isRoot" : true,
            "children": [
                {
                    "text": "ClassificationClassification",
                    "children": [
                        { "text": "Logistic regression" },
                        { "text": "Linear discriminant analysis" }
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

        this._registrar();
        this._createGraph();
        this._bindEvent();
        this._readData(data3);
        window.G6 = G6;

    }
};
</script>



