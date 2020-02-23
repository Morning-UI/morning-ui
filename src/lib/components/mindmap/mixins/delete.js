export default {
    methods : {
        deleteNode : function (nodeIds) {

            nodeIds = this._fillNodeIds(nodeIds);

            for (let nodeId of nodeIds) {

                let node = this.data.graph.findById(nodeId);
                let model = node.getModel();
                let parent = node.getInEdges()[0].getSource();
                let parentModel = parent.getModel();
                let indexOfParent = parentModel.children.indexOf(model);

                parentModel.children.splice(indexOfParent, 1);

            }

            this.data.graph.changeData();
            this.data.graph.layout();

            return this;

        }
    }
};
