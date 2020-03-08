import {
    fillNodeIds,
}                                   from '../base/utils';

export default {
    methods : {
        _saveNote : function () {

            this.note(this.data.currentEditNoteNodeIds, this.data.currentEditNoteValue);
            this.cancelEditNote();

            return this;

        },
        editNote : function (nodeIds) {

            nodeIds = fillNodeIds(nodeIds);

            let node = this.data.graph.findById(nodeIds[0]);
            let model = node.getModel();

            this.data.currentEditNoteNodeIds = nodeIds;
            this.data.currentEditNoteValue = model.note;
            this.data.$editNoteDialog.toggle(true);
            this.data.mouseOnCanvas = false;

        },
        cancelEditNote : function () {

            this.data.currentEditNoteNodeIds = [];
            this.data.currentEditNoteValue = '';
            this.data.$editNoteDialog.toggle(false);
            this.data.mouseOnCanvas = true;

        },
        note : function (nodeIds, note) {

            nodeIds = fillNodeIds(nodeIds);

            for (let nodeId of nodeIds) {

                let node = this.data.graph.findById(nodeId);
                let model = node.getModel();

                model.note = note;
                node.draw();

            }

            this.data.graph.refreshLayout();

        },
        unnote : function (nodeIds) {

            nodeIds = fillNodeIds(nodeIds);

            for (let nodeId of nodeIds) {

                let node = this.data.graph.findById(nodeId);
                let model = node.getModel();

                delete model.note;
                node.draw();

            }

            this.data.graph.refreshLayout();

        },
    }
};
