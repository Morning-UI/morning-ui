import {
    fillNodeIds,
}                                   from '../base/utils';

export default {
    methods : {
        _saveLink : function () {

            this.link(this.data.currentEditLinkNodeIds, this.data.currentEditLinkValue);
            this.cancelEditLink();

            return this;

        },
        editLink : function (nodeIds) {

            nodeIds = fillNodeIds(nodeIds);

            let node = this.data.graph.findById(nodeIds[0]);
            let model = node.getModel();

            this.data.currentEditLinkNodeIds = nodeIds;
            this.data.currentEditLinkValue = model.link;
            this.data.$editLinkDialog.toggle(true);
            this.data.mouseOnCanvas = false;

        },
        cancelEditLink : function () {

            this.data.currentEditLinkNodeIds = [];
            this.data.currentEditLinkValue = '';
            this.data.$editLinkDialog.toggle(false);
            this.data.mouseOnCanvas = true;

        },
        link : function (nodeIds, link) {

            nodeIds = fillNodeIds(nodeIds);

            for (let nodeId of nodeIds) {

                let node = this.data.graph.findById(nodeId);
                let model = node.getModel();

                model.link = link;
                node.draw();

            }

            this.data.graph.refreshLayout();

        },
        unlink : function (nodeIds) {

            nodeIds = fillNodeIds(nodeIds);

            for (let nodeId of nodeIds) {

                let node = this.data.graph.findById(nodeId);
                let model = node.getModel();

                delete model.link;
                node.draw();

            }

            this.data.graph.refreshLayout();

        },
    }
};
