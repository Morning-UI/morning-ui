export default {
    methods : {
        showContextMenu : function (nodeId, x, y) {

            // TODO : x,y没有的时候取NodeId的

            this.data.contextMenu = {
                style : {
                    left : `${x}px`,
                    top : `${y}px`,
                    display : 'flex',
                },
                nodeId
            };
            
            let nodes = this.getAllSelectedNode();

            if (nodes && nodes.length === 1) {

                this._clearSelectedNode('selected');

            }

            this.selectNode(nodeId);

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
