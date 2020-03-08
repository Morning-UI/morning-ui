import {
    fillNodeIds,
    pluckDetailFromNode
}                                   from '../base/utils';

export default {
    methods : {
        getAllSelectedNodeIds : function () {

            let nodes = this.data.graph.findAllByState('node', 'selected');
            let nodeIds = [];

            for (let node of nodes) {

                nodeIds.push(node.get('id'));

            }

            return nodeIds;

        },
        getAllSelectedNodeDetails : function () {

            let nodeIds = this.getAllSelectedNodeIds();

            if (nodeIds.length === 1) {

                return [this.getNodeDetail(nodeIds)];

            }

            return this.getNodeDetail(nodeIds);

        },
        getSelectedNodeId : function () {

            return this.getAllSelectedNodeIds()[0];

        },
        getSelectedNodeDetail : function () {

            return this.getAllSelectedNodeDetails()[0];

        },
        getNodeDetail : function (nodeIds) {
            
            nodeIds = fillNodeIds(nodeIds);

            let nodeModels = [];

            for (let nodeId of nodeIds) {

                nodeModels.push(this.data.graph.findById(nodeId).getModel());

            }
            
            let details = pluckDetailFromNode(nodeModels);

            if (nodeIds.length === 1) {

                return details[0];

            }

            return details;

        },
        getAllNodeIds : function () {

            let nodes = this.data.graph.getNodes();
            let nodeIds = [];

            for (let node of nodes) {

                if (node.getModel()._isMindNode) {

                    nodeIds.push(node.get('id'));

                }

            }

            return nodeIds;

        },
        getAllNodeDetails : function () {

            let nodeIds = this.getAllNodeIds();

            if (nodeIds.length === 1) {

                return [this.getNodeDetail(nodeIds)];

            }

            return this.getNodeDetail(nodeIds);

        },
        getRootNodeId : function () {

            let nodes = this.getAllNodeIds();

            if (nodes && nodes[0]) {

                return nodes[0];

            }

            return undefined;

        },
        getRootNodeDetail : function () {

            let nodeId = this.getRootNodeId();

            if (nodeId) {

                return this.getNodeDetail(nodeId);

            }

            return undefined;

        },
        getEdittingState : function () {
            
            return this.data.editting;

        },
    }
};
