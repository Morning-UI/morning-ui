export default {
    methods : {
        _clearSelectedNode : function (selectedState) {
                    
            let graph = this.data.graph;
            let autoPaint = graph.get('autoPaint');
            let nodes = graph.findAllByState('node', selectedState);
            let edges = graph.findAllByState('edge', selectedState);
            
            graph.setAutoPaint(false);
            nodes.forEach(node => graph.setItemState(node, selectedState, false));
            edges.forEach(edge => graph.setItemState(edge, selectedState, false));
            this.selectedNodes = [];
            // this.selectedEdges = [];
            graph.paint();
            graph.setAutoPaint(autoPaint);

        },
        selectNode : function (nodeIds) {

            nodeIds = this._fillNodeIds(nodeIds);

            for (let nodeId of nodeIds) {

                let node = this.data.graph.findById(nodeId);

                if (node.getModel().isMindNode) {

                    this.data.graph.setItemState(node, 'selected', true);
                
                }

            }

        },
        clearSelectedNode : function () {

            this._clearSelectedNode('selected');

        },
        getSelectedNode : function () {

            return this.getAllSelectedNode()[0];

        },
        getSelectedNodeDetail : function () {

            return this.getAllSelectedNodeDetail()[0];

        },
        getAllSelectedNode : function () {

            let nodes = this.data.graph.findAllByState('node', 'selected');
            let nodeIds = [];

            for (let node of nodes) {

                nodeIds.push(node.get('id'));

            }

            return nodeIds;

        },
        getAllSelectedNodeDetail : function () {

            let nodes = this.data.graph.findAllByState('node', 'selected');
            let nodeIds = [];
            let model;

            for (let node of nodes) {

                model = node.getModel();

                nodeIds.push({
                    id : model.id,
                    depth : model.depth,
                    link : model.link,
                    mark : Object.assign([], model.mark),
                    note : model.note,
                    text : model.text,
                    tag : model.tag
                });

            }

            return nodeIds;

        }
    }
};
