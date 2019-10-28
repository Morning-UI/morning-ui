
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

            // root节点不能被拖拽
            // TODO : 等g6 3.1.4升级后启用hasLocked来判断
            if (evt.item.get('model').isRoot) {

                return;

            }

            // 获取所有选中的元素
            let nodes = this.graph.findAllByState('node', 'selected');
            let targetNodeId = evt.item.get('id');

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
                
                window.document.body.removeEventListener('mouseup', fn, false);
                this.fn = null;
            
            }

            // this.graph.paint();
            vm._removeOldDragPlaceholder();
            vm._updateDragTarget(false);
            this.graph.refreshLayout();
            vm.data.dragging = false;

        },
        // 若在拖拽时，鼠标移出画布区域，此时放开鼠标无法终止 drag 行为。在画布外监听 mouseup 事件，放开则终止
        onOutOfRange (evt) {

            // 没有target不能被拖动
            if (!this.target || !this.targets || this.targets.length === 0) {

                return;

            }

            if (this.origin) {
                
                let canvasElement = this.graph.get('canvas').get('el');
                let fn = ev => {

                    if (ev.target !== canvasElement) {

                        this.onDragEnd(evt);

                    }

                };

                this.fn = fn;
                window.document.body.addEventListener('mouseup', fn, false);
            
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
            // if (evt.type === 'dragend') {
            //     this._toggleChildren(item, 'show');
            // } else {
            //     this._toggleChildren(item, 'hide');
            // }

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

                    this.delegateShape = parent.addShape('rect', {
                        attrs : Object.assign({
                            width : bbox.width,
                            height : bbox.height,
                            x : x + bbox.x,
                            y : y + bbox.y,
                        }, delegateAttrs)
                    });
                    vm.data.dragTarget = {
                        node : evt.item,
                        hidden : false
                    };
                    this.target.set('delegateShape', this.delegateShape);

                }

                vm._updateDragTarget(true);
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