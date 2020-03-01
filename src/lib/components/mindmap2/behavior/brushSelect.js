export default vm => ({
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
            // selectedEdges : [],
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
            width : 0,
            height : 0
        });
        brush.show();
        this.dragging = true;

        setTimeout(() => {

            vm.G6.Util.modifyCSS(evt.currentTarget._cfg.canvas._cfg.canvasDOM, {
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

        if (!vm.data.keydownState.mod) {
            
            vm._clearSelectedNode(this.selectedState);
        
        }

    },
    _getSelectedNodes (evt) {

        let graph = this.graph;
        let selectedState = this.selectedState;
        let originPoint = this.originPoint;
        let p1 = evt;
        let p2 = graph.getPointByCanvas(originPoint.x, originPoint.y);
        let left = Math.min(p1.x, p2.x);
        let right = Math.max(p1.x, p2.x);
        let top = Math.min(p1.y, p2.y);
        let bottom = Math.max(p1.y, p2.y);
        let width = right - left;
        let height = bottom - top;
        let centerX = left + (width / 2);
        let centerY = top + (height / 2);
        let selectedNodes = [];
        // let selectedEdges = [];
        let selectedIds = [];
        let shouldUpdate = this.shouldUpdate;

        graph.getNodes().forEach(node => {

            let bbox = node.getBBox();

            // 计算矩形相交
            if (
                Math.abs(centerX - bbox.centerX) < ((bbox.width + width) / 2) &&
                Math.abs(centerY - bbox.centerY) < ((bbox.height + height) / 2)
            ) {

                if (shouldUpdate(node, 'select')) {
            
                    selectedNodes.push(node);
            
                    const model = node.getModel();

                    selectedIds.push(model.id);
                    graph.setItemState(node, selectedState, true);
            
                }

            }

        });

        // eslint-disable-next-line no-warning-comments
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

            vm.G6.Util.modifyCSS(this.graph._cfg.canvas._cfg.canvasDOM, {
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
