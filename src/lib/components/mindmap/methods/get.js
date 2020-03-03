export default {
    methods : {
        getAllSelectedNode : function () {

            let nodes = this.data.graph.findAllByState('node', 'selected');
            let nodeIds = [];

            for (let node of nodes) {

                nodeIds.push(node.get('id'));

            }

            return nodeIds;

        },
        getSelectedNode : function () {

            return this.getAllSelectedNode()[0];

        },
    }
};
