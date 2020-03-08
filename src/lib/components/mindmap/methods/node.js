import map                          from 'lodash.map';
import shapeBase                    from '../base/shape';
import {
    APPENDS_LIST,
}                                   from '../const/style';
import {
    fillNodeIds,
    getNodeShapes,
    traverseNode,
}                                   from '../base/utils';
import {
    refreshTextEditorPosition,
    editInput,
}                                   from '../base/editor';

const _parseNewNodeDataOne = data => {

    if (typeof data === 'string') {

        try {

            data = JSON.parse(data);

        } catch (e) {}

    }

    data = Object.assign({
        text : '新的节点'
    }, data);

    return data;

};

// TODO : 是否需要过滤无效的数据
const _parseNewNodeData = data => {

    if (data instanceof Array) {

        for (let key in data) {

            data[key] = _parseNewNodeDataOne(data[key]);

        }

        return data;

    }

    return [_parseNewNodeDataOne(data)];

};

export default {
    methods : {
        // 聚焦单个节点的文本输入
        focusNodeTextEditor : function (nodeId, clean = false) {

            let node = this.data.graph.findById(nodeId);
            let shapes = getNodeShapes(node);

            this.data.editting = true;
            this.data.editShapes = shapes;
            this.data.editNode = node;
            refreshTextEditorPosition(this, node);
            shapes.text.attr({
                opacity : 0
            });
            this.data.editNode.setState('editing', true);
            this.data.graph.paint();
            this.data.$editContentInput.focus();

            if (clean) {

                setTimeout(() => {

                    this.data.editContent = this
                        .data
                        .editContent
                        .split('')
                        .slice(-1)
                        .join('');
                    editInput(this);

                });

            }

            return this;

        },
        // 失焦单个节点的文本输入
        blurNodeTextEditor : function () {

            if (!this.data.editting) {

                return this;

            }

            let shapes = getNodeShapes(this.data.editNode);

            shapes.text.attr({
                opacity : 1
            });
            this.data.graph.paint();
            this.data.$editContent.style.display = 'none';
            this.data.editContent = '';
            this.data.editShapes = {};
            this.data.editZoom = 1;
            this.data.editNode.setState('editing', false);
            this.data.editNode = null;
            this.data.graph.refreshLayout();
            this.Vue.nextTick(() => {
                
                this.data.editting = false;
            
            });

            return this;

        },
        // 打开单个节点的链接
        showLink : function (nodeId) {

            let node = this.data.graph.findById(nodeId);
            let model = node.getModel();

            if (model.link) {

                window.open(model.link);

            }

            return this;

        },
        // 打开单个节点的备注
        showNote : function (nodeId) {

            let node = this.data.graph.findById(nodeId);
            let model = node.getModel();
            let indexOfAppends = model.link ? APPENDS_LIST.note.index : APPENDS_LIST.link.index;

            if (model.note) {

                this.data.currentNodeNote = model.note.replace(/\n/g, '<br>');
                this.data.nodeNoteShow = true;
                shapeBase.refreshNodeNotePosition(this, node, indexOfAppends);
                this.data.$notePopover.toggle(true);

            }

            return this;

        },
        // 关闭单个节点的备注
        hideNote : function () {

            this.data.nodeNoteShow = false;
            this.data.$notePopover.toggle(false);

            return this;

        },
        // 移除多个节点
        removeNode : function (nodeIds, _refresh = true) {

            nodeIds = fillNodeIds(nodeIds);

            for (let nodeId of nodeIds) {

                let node = this.data.graph.findById(nodeId);

                if (!node) {

                    return;

                }

                let model = node.getModel();
                let parent = node.getInEdges()[0].getSource();
                let parentModel = parent.getModel();
                let parentChildren = parentModel._collapsed ? parentModel._collapsedChildren : parentModel.children;
                let indexOfParent = parentChildren.indexOf(model);

                parentChildren.splice(indexOfParent, 1);

            }

            if (_refresh) {
    
                this.data.graph.changeData();
                this.data.graph.refreshLayout();

            }

            return this;

        },
        // TODO : moveNodeToParent 是否可以使用 insertSubNode
        // moveNodeToParent : function (nodeId, parentNodeId, insertIndex, _refresh = true) {

        //     nodeIds = fillNodeIds(nodeIds);

        //     let parentNode = this.data.graph.findById(parentNodeId);
        //     let parentNodeChildren = parentNode.getModel().children;
        //     let models = [];
        //     let nodeModel = this.data.graph.findById(nodeId).getModel();
        //     let nodeInParentNode = parentNodeChildren.indexOf(nodeModel);

        //     // 如果移动的节点在同一父节点下
        //     if (nodeInParentNode !== -1) {

        //         models.push(nodeModel);

        //     }

        //     parentNodeChildren.splice(insertIndex, 0, nodeModel);
        //     // this.removeNode(nodeId, refresh);

        //     if (_refresh) {
                
        //         this.data.graph.paint();
        //         this.data.graph.changeData();
        //         this.data.graph.refreshLayout();
                
        //     }

        //     return this;

        // },
        // 选择多个节点
        selectNode : function (nodeIds) {

            nodeIds = fillNodeIds(nodeIds);

            for (let nodeId of nodeIds) {

                let node = this.data.graph.findById(nodeId);

                if (node.getModel()._isMindNode) {

                    this.data.graph.setItemState(node, 'selected', true);

                }

            }

            return this;

        },
        // 插入子节点
        insertSubNode : function (nodeId, datas, index = -1, _refresh = true) {

            let node = this.data.graph.findById(nodeId);
            let model = node.getModel();
            let children = model._collapsed ? model._collapsedChildren : model.children
            let isSingle = (datas instanceof Array);

            datas = _parseNewNodeData(datas);

            if (children === undefined) {

                if (model._collapsed) {

                    model._collapsedChildren = [];
                    children = model._collapsedChildren;

                } else {

                    model.children = [];
                    children = model.children;

                }

            }

            traverseNode(this, datas);

            if (index > -1) {

                let datas2 = Object.assign([], datas);

                datas2.reverse();

                for (let item of datas2) {
                
                    children.splice(index, 0, item);

                }

            } else {

                for (let item of datas) {
                
                    children.push(item);

                }

            }

            if (_refresh) {

                this.data.graph.changeData();
                this.data.graph.refreshLayout();

            }

            if (isSingle) {

                return datas[0].id;

            }

            return map(datas, 'id');

        },
    }
};
