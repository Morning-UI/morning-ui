export default {
    methods : {
        // getAllSelectedNode : function () {

        //     let nodes = this.data.graph.findAllByState('node', 'selected');
        //     let nodeIds = [];

        //     for (let node of nodes) {

        //         nodeIds.push(node.get('id'));

        //     }

        //     return nodeIds;

        // },
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

        },
        getSelectedNodeDetail : function () {

            return this.getAllSelectedNodeDetail()[0];

        },
        getRootNode : function () {

            let nodes = this.data.graph.findAll('node', () => (true));

            if (nodes && nodes[0]) {

                return nodes[0].getModel().id;

            }

            return undefined;

        },
        getAllNode : function () {

            let nodes = this.data.graph.getNodes();
            let nodeIds = [];

            for (let node of nodes) {

                if (node.getModel().isMindNode) {

                    nodeIds.push(node.get('id'));

                }

            }

            return nodeIds;

        },
        getAllNodeDetail : function () {

            let nodes = this.data.graph.getNodes();
            let nodeIds = [];
            let model;

            for (let node of nodes) {

                model = node.getModel();

                if (model.isMindNode) {
                
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

            }

            return nodeIds;

        },
        getEdittingState : function () {
            
            return this.data.editting;

        },
    }
};
