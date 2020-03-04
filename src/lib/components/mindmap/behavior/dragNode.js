import G6                           from '@antv/g6';
import throttle                     from 'lodash.throttle';
import sortBy                       from 'lodash.sortby';
import shapeBase                    from '../base/shape';
import {DELEGATE_SHAPE_STYLE}       from '../const/style';

const DRAG_REFRESH_INTERVAL = 160;

let dragTarget = {
    originNodeStyle : {},
    saveModel : {}
};
let dragHolderParentModel = null;
let dragHolderIndexOfParentChildren = null;

const _udpateOneDragTarget = (vm, index, dragging, _dragHolderIndexOfParentChildren) => {

    let node = dragTarget.nodes[index];

    if (dragging && !dragTarget.hidden) {

        dragTarget.originNodeStyle[index] = {
            height : node.getBBox().height
        };
        dragTarget.saveModel[index] = node.getModel();
        
        node.setState('dragging', true);
        node.update({
            isDragging : true,
            style : G6.Util.deepMix({}, {
                fillOpacity : 0
            }, node.getModel()._style)
        });

        shapeBase.toggleNodeVisibility(node, 'hide', (type, model) => {

            if (type === 'hide') {

                model.isDragging = true;

            } else {

                model.isDragging = false;

            }

        });

    } else if (!dragging && dragTarget.hidden) {

        // let oldParentChilren = node.getInEdges()[0].getSource().getModel().children;
        let nodeModel = dragTarget.saveModel[index];

        node.setState('dragging', false);
        node.update({
            isDragging : false,
            style : G6.Util.deepMix({}, {
                fillOpacity : 1
            }, nodeModel._style)
        });

        shapeBase.toggleNodeVisibility(node, 'show', (type, model) => {

            if (type === 'hide') {

                model.isDragging = true;

            } else {

                model.isDragging = false;

            }

        });

        // 移动节点
        vm.moveNodeToParent(nodeModel, dragHolderParentModel, _dragHolderIndexOfParentChildren);

    }

};

const _updateDragTarget = (vm, dragging = false) => {

    let targetNodes = dragTarget.nodes;
    let first = true;

    if (!dragging && dragTarget.hidden) {

        let dragNodes = vm.data.graph.findAllByState('node', 'dragging');
        
        for (let node of dragNodes) {

            let parentNodeModel = node.getInEdges()[0].getSource().getModel();
            let parentNodeDataChildren = parentNodeModel.children;
            let model = node.getModel();
            let index = parentNodeDataChildren.indexOf(model);

            if (
                parentNodeModel === dragHolderParentModel &&
                index < dragHolderIndexOfParentChildren
            ) {

                dragHolderIndexOfParentChildren--;

            }

            vm.removeNode(model.id);

        }

    }

    for (let index in targetNodes) {

        if (!first) {

            _udpateOneDragTarget(vm, index, dragging, dragHolderIndexOfParentChildren + 1);

        } else {

            _udpateOneDragTarget(vm, index, dragging, dragHolderIndexOfParentChildren);

        }

        first = false;

    }

    if (dragging && !dragTarget.hidden) {

        dragTarget.hidden = true;
        vm.data.graph.refreshLayout();

    } else if (!dragging && dragTarget.hidden) {

        dragTarget.hidden = false;

        dragHolderIndexOfParentChildren += targetNodes.length;
        vm.data.graph.paint();
        vm.data.graph.changeData();
        vm.data.graph.refreshLayout();

    }

};

const _fillChildBbox = (vm, bbox, node) => {

    let model = node.getModel();

    bbox.conMaxX = bbox.maxX;
    bbox.conMinX = bbox.minX;
    bbox.conMaxY = bbox.maxY;
    bbox.conMinY = bbox.minY;

    if (!model.children || model.children.length === 0) {

        return bbox;

    }
    
    for (let child of model.children) {

        let childNode = vm.data.graph.findById(child.id);
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

};

const _removeOldDragPlaceholder = vm => {

    if (dragHolderIndexOfParentChildren > -1 && dragHolderParentModel) {

        dragHolderParentModel.children.splice(dragHolderIndexOfParentChildren, 1);

    }

    dragHolderParentModel = null;
    dragHolderIndexOfParentChildren = null;
    vm.data.graph.changeData();

};

const _refreshDragHolder = throttle((vm, delegateShape, targetNode) => {

    // if (!delegateShape) {

    //     return;

    // }

    let nodes = vm.data.graph.getNodes();
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
            node.getModel()._isHolder ||
            node.getModel().isDragging === true) {

            // eslint-disable-next-line no-continue
            continue;

        }

        let nodeBbox = node.getBBox();

        _fillChildBbox(vm, nodeBbox, node);

        // 如果是root节点无视区域
        if (
            (
                (vm.conf.layout === 'LR' && nodeBbox.centerX < delegateBbox.x) ||
                // (vm.conf.layout === 'RL' && nodeBbox.centerX > delegateBbox.x) ||
                node.getModel()._isRoot
            ) &&
            (
                (nodeBbox.conMaxY > delegateBbox.centerY && delegateBbox.centerY > nodeBbox.conMinY) ||
                node.getModel()._isRoot
                // (nodeBbox.conMaxY > delegateBbox.maxY && delegateBbox.maxY > nodeBbox.conMinY)
            )
        ) {

            matchOptions.node = node;
            matchOptions.mode = 'childN';
            matchOptions.index = 0;
            matchOptions.hasPlaceholder = false;

            let children = node.getModel().children;

            for (let index in children) {
                
                let childData = children[index];
                let childBbox = vm.data.graph.findById(childData.id).getBBox();

                if (!childData._isHolder && delegateBbox.centerY > childBbox.centerY) {

                    matchOptions.index = +index + 1;

                }

                if (childData._isHolder) {

                    matchOptions.hasPlaceholder = index;

                }

            }
            
            break;

        }

    }

    // 清除上一个placeholder
    _removeOldDragPlaceholder(vm);

    if (matchOptions.hasPlaceholder < matchOptions.index) {

        matchOptions.index--;

    }

    if (matchOptions.node) {

        // 创建新的placeholder
        let model = matchOptions.node.getModel();

        if (model.children === undefined) {

            model.children = [];

        }

        dragHolderIndexOfParentChildren = matchOptions.index;
        model.children.splice(matchOptions.index, 0, {
            id : vm.data.globalId++,
            shape : 'mor-placeholder-node',
            // eslint-disable-next-line no-magic-numbers
            _anchorPoints : [[0, 0.5], [1, 0.5]],
            _isHolder : true
        });
        dragHolderParentModel = model;
        vm.data.graph.paint();
        vm.data.graph.changeData();
        vm.data.graph.refreshLayout();
        vm.data.graph.findById(vm.data.globalId - 1).getInEdges()[0].update({
            shape : 'mor-placeholder-edge'
        });

    }

}, DRAG_REFRESH_INTERVAL);

export default vm => ({
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
        // eslint-disable-next-line no-warning-comments
        // TODO : 等g6 3.1.4升级后启用hasLocked来判断
        if (evt.item.get('model')._isRoot) {

            return;

        }

        this.dragOptions = {
            originX : evt.x,
            originY : evt.y,
            delegateShape : null
        };

        // 获取所有选中的元素
        let nodes = this.graph.findAllByState('node', 'selected');
        let targetNodeId = evt.item.get('id');

        // 当前拖动的节点是否是选中的节点
        let dragNodes = nodes.filter(node => (targetNodeId === node.get('id')));

        if (dragNodes.length === 0) {

            // 只拖动当前节点
            let model = evt.item.getModel();
            
            this.targets = [evt.item];
            this.dragOptions.type = 'unselect-single';
            this.point = {
                x : model.x,
                y : model.y
            };
        
        } else if (nodes.length === 1) {

            // 拖动选中节点
            this.targets.push(evt.item);
            this.dragOptions.type = 'select';

        } else {

            let models = [];
            let getTopSelectedNodeModel = node => {
                
                let model = node.getModel();
                let parentNode = this.graph.findById(model.id).getInEdges()[0].getSource();

                if (parentNode.getStates().indexOf('selected') !== -1) {

                    model = getTopSelectedNodeModel(parentNode);

                }

                return model;

            };
            
            // 拖动多个节点
            nodes.forEach(node => {

                let model = getTopSelectedNodeModel(node);

                // 仅计算top节点
                if (models.indexOf(model) === -1) {

                    models.push(model);
                    this.targets.push(node);
                
                }

            });

            this.dragOptions.type = 'select';

        }

    },
    onDrag (evt) {

        // !this.origin ||
        if (!this.get('shouldUpdate').call(this, evt)) {

            return;

        }

        if (this.dragOptions.type === 'unselect-single') {

            this._updateDelegate(evt);

        } else {

            this._updateDelegate(evt);

        }

        vm.data.dragging = true;

    },
    onDragEnd (evt) {
        
        // !this.origin ||
        if (!this.shouldEnd.call(this, evt)) {

            return;
        
        }

        if (this.dragOptions.delegateShape) {

            this.dragOptions.delegateShape.remove();
            this.dragOptions.delegateShape = null;

        }

        // this.origin = null;
        // this.originPoint = {};
        // this.target = null;

        // 终止时需要判断此时是否在监听画布外的 mouseup 事件，若有则解绑
        let fn = this.fn;

        if (fn) {
            
            window.document.body.removeEventListener('mouseup', fn, false);
            this.fn = null;
        
        }

        // this.graph.paint();
        _updateDragTarget(vm, false);
        _removeOldDragPlaceholder(vm);
        this.graph.refreshLayout();
        this.dragOptions = {};
        this.point = {};
        this.targets.length = 0;
        vm.data.dragging = false;

    },
    _updateDelegate (evt) {

        // 如果还没创建代理元素
        if (!this.dragOptions.delegateShape) {

            let parent = this.graph.get('group');
            let delegateShapeAttr = {
                fill : DELEGATE_SHAPE_STYLE.bgColor,
                stroke : DELEGATE_SHAPE_STYLE.borderColor,
                lineWidth : DELEGATE_SHAPE_STYLE.borderWidth,
                lineDash : [5, 5]
            };

            if (this.dragOptions.type === 'select') {

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
                    attrs : Object.assign({
                        width,
                        height,
                        x,
                        y
                    }, delegateShapeAttr)
                });
                dragTarget = {
                    nodes : this.targets,
                    hidden : false,
                    originNodeStyle : {},
                    saveModel : {}
                };

            } else if (this.dragOptions.type === 'unselect-single') {

                let bbox = this.targets[0].get('keyShape').getBBox();
                let x = evt.x - this.dragOptions.originX + this.point.x;
                let y = evt.y - this.dragOptions.originY + this.point.y;

                this.dragOptions.delegateShape = parent.addShape('rect', {
                    attrs : Object.assign({
                        width : bbox.width,
                        height : bbox.height,
                        x : x + bbox.x,
                        y : y + bbox.y,
                    }, delegateShapeAttr)
                });
                dragTarget = {
                    nodes : this.targets,
                    hidden : false,
                    originNodeStyle : {},
                    saveModel : {}
                };

            }
            
            _updateDragTarget(vm, true);
            _refreshDragHolder(vm, this.dragOptions.delegateShape, evt.item);
            // this.target.set('delegateShape', this.delegateShape);
            // this.dragOptions.delegateShape.set('capture', false);

        } else if (this.dragOptions.type === 'unselect-single') {

            let bbox = evt.item.get('keyShape').getBBox();
            let x = evt.x - this.dragOptions.originX + this.point.x;
            let y = evt.y - this.dragOptions.originY + this.point.y;

            this.dragOptions.delegateShape.attr({
                x : x + bbox.x,
                y : y + bbox.y
            });
            _refreshDragHolder(vm, this.dragOptions.delegateShape, null);

        } else if (this.dragOptions.type === 'select') {

            let clientX = evt.x - this.dragOptions.originX + this.originPoint.minX;
            let clientY = evt.y - this.dragOptions.originY + this.originPoint.minY;

            this.dragOptions.delegateShape.attr({
                x : clientX,
                y : clientY
            });
            _refreshDragHolder(vm, this.dragOptions.delegateShape, null);

        }

        this.graph.paint();

    },
    _calculationGroupPosition () {

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
