import arrayUniq                    from 'array-uniq';
import difference                   from 'lodash.difference';
import {
    fillNodeIds,
    traverseNodeUpdateMark,
}                                   from '../base/utils';

export default {
    methods : {
        _saveMark : function () {
            
            this.setAllMark(this.data.currentEditMarkNodeIds, this.data.currentEditMarkValue);
            this.cancelEditMark();

            return this;

        },
        editMark : function (nodeIds) {

            nodeIds = fillNodeIds(nodeIds);

            let node = this.data.graph.findById(nodeIds[0]);
            let model = node.getModel();
            let markGroups = {};

            this.data.currentEditMarkNodeIds = nodeIds;

            if (model._mark && model._mark.length > 0) {

                for (let mark of model._mark) {

                    markGroups[mark.split(':')[0]] = mark.replace(':', '-');

                }

            }

            markGroups = Object.assign({
                priority : '0',
                task : '0',
                flag : '0',
                star : '0',
                status : '0'
            }, markGroups);

            this.data.currentEditMarkValue = markGroups;
            this.data.$editMarkDialog.toggle(true);
            this.data.mouseOnCanvas = false;

        },
        cancelEditMark : function () {

            this.data.currentEditMarkNodeIds = [];
            this.data.$editMarkDialog.toggle(false);
            this.data.mouseOnCanvas = true;

        },
        setAllMark : function (nodeIds, marks) {

            nodeIds = fillNodeIds(nodeIds);
            marks = arrayUniq(marks);

            for (let nodeId of nodeIds) {

                let addMarks = [];
                let removeMarks = [];
                let currentMarks = this.getNodeDetail(nodeId).mark;

                if (currentMarks === undefined) {

                    currentMarks = [];

                }

                addMarks = difference(marks, currentMarks);
                removeMarks = difference(currentMarks, marks);

                for (let addMark of addMarks) {

                    this.mark(nodeId, addMark);

                }

                for (let removeMark of removeMarks) {

                    this.unmark(nodeId, removeMark);

                }

            }

            return this;

        },
        mark : function (nodeIds, mark) {

            nodeIds = fillNodeIds(nodeIds);

            for (let nodeId of nodeIds) {

                let node = this.data.graph.findById(nodeId);
                let model = node.getModel();

                if (model.mark === undefined) {

                    model.mark = [];

                }

                model.mark.push(mark);
                model.mark = arrayUniq(model.mark);
                traverseNodeUpdateMark(model);
                node.draw();

            }

            this.data.graph.refreshLayout();

        },
        unmark : function (nodeIds, mark) {

            nodeIds = fillNodeIds(nodeIds);

            for (let nodeId of nodeIds) {

                let node = this.data.graph.findById(nodeId);
                let model = node.getModel();
                let index = model.mark.indexOf(mark);

                if (index !== -1) {

                    model.mark.splice(index, 1);

                }

                traverseNodeUpdateMark(model);
                node.draw();

            }

            this.data.graph.refreshLayout();

        },
    }
};
