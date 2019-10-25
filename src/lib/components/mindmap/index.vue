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
    </div>

    <div class="error-message">{{conf._errorMessage}}</div>
    <morning-link v-if="conf.clearable" color="minor" @emit="_clean" class="cleanbtn">清空</morning-link>

    </mor-mindmap>
</template>
 
<script>
import G6                           from '@antv/g6';

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
                graph : null
            }
        };

    },
    methods : {},
    created : function () {},
    mounted : function () {

        G6.registerNode('mind-node-block', {
            drawShape : (cfg, group) => {

                let outline = group.addShape('rect', {
                    attrs : {
                        fill : 'transparent',
                        radius : 6,
                        cursor : 'move',
                        stroke : 'transparent',
                        lineWidth : 3
                    }
                });
                let rect = group.addShape('rect', {
                    attrs : {
                        fill : '#96d3e6',
                        radius : 6,
                        cursor : 'move'
                    }
                });
                let text = group.addShape('text', {
                    attrs : {
                        text : cfg.id,
                        x : 0,
                        y : 0,
                        textAlign : 'center',
                        textBaseline : 'middle',
                        fill : '#434b53',
                        fontSize : 16,
                        cursor : 'move'
                    }
                });
                let textBbox = text.getBBox();

                rect.attr({
                    x : textBbox.minX - 24,
                    y : textBbox.minY - 12,
                    width : textBbox.width + 48,
                    height : textBbox.height + 24
                });

                let rectBbox = rect.getBBox();

                outline.attr({
                    x : rectBbox.minX - 3,
                    y : rectBbox.minY - 3,
                    width : rectBbox.width + 6,
                    height : rectBbox.height + 6
                });

                return rect;

            },
            setState : (name, value, item) => {

                let states = item.getStates();
                let shape = item.get('keyShape');
                let group = shape.getParent();
                let outline = group.getChildByIndex(0);
                let text = group.getChildByIndex(1);

                if (states.indexOf('drag') !== -1) {

                    item.toFront();
                    shape.attr({
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

                    shape.attr({
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

                if (states.indexOf('selected') !== -1) {

                    outline.attr({
                        stroke : '#27befc',
                        lineWidth : 3
                    });

                } else if (states.indexOf('hover') !== -1) {

                    outline.attr({
                        stroke : '#8cdcf5',
                        lineWidth : 3
                    });

                } else {

                    outline.attr({
                        stroke : 'transparent',
                        lineWidth : 3
                    });

                }

            }
        }, 'single-shape');

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

        G6.registerEdge('node-horizontal-edge', {
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

        const ALLOW_EVENTS = [ 'drag', 'shift', 'ctrl', 'alt' ];

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
            onMouseUp (evt) {

                if (!this.brush) {

                    return;

                }

                let graph = this.graph;
                let autoPaint = graph.get('autoPaint');
                
                graph.setAutoPaint(false);
                this.brush.hide();
                // this._getSelectedNodes(evt);
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
            _getSelectedNodes(e) {

                let graph = this.graph;
                let selectedState = this.selectedState;
                let originPoint = this.originPoint;
                let p1 = {x : e.x, y : e.y};
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
            _createBrush() {

                let brush = this.graph.get('canvas').addShape('rect', {
                    attrs: this.brushStyle,
                    capture: false
                });

                this.brush = brush;

                return brush;

            },
            _updateBrush(evt) {

                const originPoint = this.originPoint;
                
                this.brush.attr({
                    width: Math.abs(evt.canvasX - originPoint.x),
                    height: Math.abs(evt.canvasY - originPoint.y),
                    x: Math.min(evt.canvasX, originPoint.x),
                    y: Math.min(evt.canvasY, originPoint.y)
                });

            },
            onKeyDown(evt) {

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
            onKeyUp() {

                if (this.brush) {

                    this.brush.hide();
                    this.dragging = false;

                }

                this.keydown = false;

            }
        });

        this.data.graph = new G6.TreeGraph({
            container : this.$el.querySelector('.canvas'),
            width : 700,
            height : 500,
            pixelRatio : 2,
            modes : {
                default: [
                    // {
                    //     type: 'collapse-expand',
                    //     onChange: function onChange(item, collapsed) {
                    //         var data = item.get('model').data;
                    //         data.collapsed = collapsed;
                    //         return true;
                    //     }
                    // },
                    'drag-canvas',
                    'zoom-canvas',
                    {
                        type : 'click-select',
                        multiple : true,
                        keyCode : 17
                    },
                    {
                        type : 'drag-node',
                        delegateStyle : {
                            strokeOpacity : 0.6,
                            fillOpacity : 0.6
                        },
                        updateEdge : true
                    },
                    {
                        type : 'mor-brush-select'
                    }
                ]
            },
            defaultNode : {
                shape : 'mind-node-block'
            },
            defaultEdge : {
                shape : 'node-horizontal-edge',
            },
            layout: {
                type: 'mindmap',
                direction: 'H',
                getHeight: function getHeight() {
                    return 32;
                },
                getWidth: function getWidth() {
                    return 160;
                },
                getVGap: function getVGap() {
                    return 10;
                },
                getHGap: function getHGap() {
                    return 100;
                }
            }
        });

        var centerX = 0;

        this.data.graph.node(function(node) {

            if (node.id === 'Modeling Methods') {
                centerX = node.x;

            }

            return {
                // size: 26,
                // style: {
                //     fill: '#40a9ff',
                //     stroke: '#096dd9'
                // },
                // label: node.id,
                // labelCfg: {
                //     position: node.children && node.children.length > 0 ? 'left' : node.x > centerX ? 'right' : 'left'
                // }
            };
        });

        this.data.graph.on('node:mouseenter', evt => {
            this.data.graph.setItemState(evt.item, 'hover', true);
        });

        this.data.graph.on('node:mouseleave', evt => {
            this.data.graph.setItemState(evt.item, 'hover', false);
        });

        this.data.graph.on('node:dragstart', evt => {
            this.data.graph.setItemState(evt.item, 'drag', true);
        });

        this.data.graph.on('node:dragend', evt => {
            this.data.graph.setItemState(evt.item, 'drag', false);
        });

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

        this.data.graph.data(
            {
            "id": "Modeling Methods",
            "children": [
                {
                    "id": "Classification",
                    "children": [
                        { "id": "Logistic regression" },
                        { "id": "Linear discriminant analysis" },
                        { "id": "Rules" },
                        { "id": "Decision trees" },
                        { "id": "Naive Bayes" },
                        { "id": "K nearest neighbor" },
                        { "id": "Probabilistic neural network" },
                        { "id": "Support vector machine" }
                    ]
                },
                {
                    "id": "Consensus",
                    "children": [
                        {
                            "id": "Models diversity",
                            "children": [
                                { "id": "Different initializations" },
                                { "id": "Different parameter choices" },
                                { "id": "Different architectures" },
                                { "id": "Different modeling methods" },
                                { "id": "Different training sets" },
                                { "id": "Different feature sets" }
                            ]
                            },
                        {
                            "id": "Methods",
                            "children": [
                                { "id": "Classifier selection" },
                                { "id": "Classifier fusion" }
                            ]
                        },
                        {
                            "id": "Common",
                            "children": [
                                { "id": "Bagging" },
                                { "id": "Boosting" },
                                { "id": "AdaBoost" }
                            ]
                        }
                    ]
                },
                {
                    "id": "Regression",
                    "children": [
                        { "id": "Multiple linear regression" },
                        { "id": "Partial least squares" },
                        { "id": "Multi-layer feedforward neural network" },
                        { "id": "General regression neural network" },
                        { "id": "Support vector regression" }
                    ]
                }
            ]
            }
        );
        this.data.graph.render();
        this.data.graph.fitView();

    }
};
</script>
