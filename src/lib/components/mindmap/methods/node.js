import shapeBase                    from '../base/shape';
import {
    fillNodeIds,
    getNodeShapes,
    refreshNodeEdges,
}                                   from '../base/utils';

const _removeOneNode = node => {

    if (!node) {

        return;

    }

    let parentNodeDataChildren = node.getInEdges()[0].getSource().getModel().children;
    let index = parentNodeDataChildren.indexOf(node.getModel());

    parentNodeDataChildren.splice(index, 1);

};

export default {
    methods : {
        _refreshTextEditorPosition : function (node) {

            if (this.data.editNode) {

                let edges = this.data.editNode.getEdges();

                this.data.editNode.refresh();
                refreshNodeEdges(edges);

            }

            let shapes = getNodeShapes(node);
            let textAttr = shapes.text.attr();
            let nodeBbox = node.getBBox();
            let textBbox = shapes.text.getBBox();
            let conBbox = shapes.con.getBBox();
            let zoom = this.data.graph.getZoom();
            let {
                x : nodeX,
                y : nodeY
            } = this.data.graph.getCanvasByPoint(nodeBbox.x, nodeBbox.y);

            // when text is empty use placeholder
            if (textBbox.width === 0) {

                textBbox = shapes.placeholder.getBBox();

            }

            const padding = 5;

            let inputX = `${textBbox.x + 1 - padding}px`;
            let inputY = `${textBbox.y - padding}px`;

            this.data.$editContent.style.display = 'block';
            this.data.$editContent.style.left = `${nodeX}px`;
            this.data.$editContent.style.top = `${nodeY}px`;
            this.data.$editContent.style.width = `${conBbox.width}px`;
            this.data.$editContent.style.height = `${conBbox.height}px`;
            this.data.$editContentInput.style.width = `${textBbox.width + (padding * 2)}px`;
            this.data.$editContentInput.style.height = `${textBbox.height + (padding * 2)}px`;
            this.data.$editContentInput.style.padding = `${padding}px`;
            this.data.$editContentInput.style.left = inputX;
            this.data.$editContentInput.style.top = inputY;
            // this.data.$editContentInput.style.color = textAttr.fill;
            this.data.$editContentInput.style.fontSize = `${textAttr.fontSize}px`;
            this.data.$editContentInput.style.textAlign = textAttr.textAlign;
            this.data.$editContentInput.style.fontWeight = textAttr.fontWeight;
            this.data.$editContentInput.style.fontStyle = textAttr.fontStyle;
            this.data.$editContentInput.style.fontFamily = textAttr.fontFamily;
            this.data.editContent = textAttr.text;
            this.data.editZoom = zoom;

        },
        focusNodeTextEditor : function (nodeId, clean = false) {

            let node = this.data.graph.findById(nodeId);
            let shapes = getNodeShapes(node);

            this.data.editting = true;
            this.data.editShapes = shapes;
            this.data.editNode = node;
            this._refreshEditorPosition(node);
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
                    this._editInput();

                });

            }

        },
        blurNodeTextEditor : function () {

            if (!this.data.editting) {

                return;

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

        },
        removeNode : function (nodeIds) {

            nodeIds = fillNodeIds(nodeIds);

            for (let nodeId of nodeIds) {

                _removeOneNode(this.data.graph.findById(nodeId));

            }

        },
        moveNodeToParent : function (nodeIds, parentNodeId, insertIndex) {

            nodeIds = fillNodeIds(nodeIds);

            let parentNode = this.data.graph.findById(parentNodeId);
            let parentNodeChildren = parentNode.getModel().children;
            let models = [];

            for (let nodeId of nodeIds) {

                models.push(this.data.graph.findById(nodeId).getModel());

            }

            this.removeNode(nodeIds);
            parentNodeChildren.splice(insertIndex, 0, ...models);

            // TODO 确保视图刷新

        }
    }
};
