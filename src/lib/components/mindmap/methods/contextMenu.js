export default {
    methods : {
        showContextMenu : function (nodeId, x, y) {

            if (x === undefined && y === undefined) {

                let node = this.data.graph.findById(nodeId);
                let nodeBbox = node.getBBox();
                let {
                    x : canvasX,
                    y : canvasY
                } = this.data.graph.getCanvasByPoint(nodeBbox.centerX, nodeBbox.centerY);

                x = canvasX;
                y = canvasY;

                this._clearSelectedNode('selected');

            } else {

                let nodes = this.getAllSelectedNodeIds();

                // nodes.length = 1时表示仅选中单个node，选中单个node时点击切换选中node
                if (nodes && nodes.length === 1) {

                    this._clearSelectedNode('selected');

                }

                this.selectNode(nodeId);

            }

            this.data.contextMenu = {
                style : {
                    left : `${x}px`,
                    top : `${y}px`,
                    display : 'flex',
                },
                nodeId
            };

            return this;

        },
        hideContextMenu : function () {
            
            this.data.contextMenu = {
                style : {
                    display : 'none'
                }
            };

            return this;

        }
    }
};
