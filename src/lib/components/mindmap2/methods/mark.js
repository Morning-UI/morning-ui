import arrayUniq                    from 'array-uniq';

export default {
    methods : {
        _saveMarks : function (nodeIds, groups) {

            let markList = Object.values(groups);

            for (let nodeId of nodeIds) {

                let node = this.data.graph.findById(nodeId);
                let model = node.getModel();

                markList = arrayUniq(markList);
                markList = markList.filter(mark => (mark !== '0'));
                
                for (let index in markList) {

                    markList[index] = markList[index].replace('-', ':');

                }

                if (model.mark === undefined) {

                    model.mark = [];

                }
                
                model.mark = markList;
                this._traverseNodeUpdateMark(model);
                node.draw();

            }

            this.data.graph.refreshLayout();

        },
        editMark : function (nodeIds) {

            nodeIds = this._fillNodeIds(nodeIds);

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
        mark : function (nodeIds, mark) {

            nodeIds = this._fillNodeIds(nodeIds);

            for (let nodeId of nodeIds) {

                let node = this.data.graph.findById(nodeId);
                let model = node.getModel();

                if (model.mark === undefined) {

                    model.mark = [];

                }

                model.mark.push(mark);
                model.mark = arrayUniq(model.mark);
                this._traverseNodeUpdateMark(model);
                node.draw();

            }

            this.data.graph.refreshLayout();

        },
        unmark : function (nodeIds, mark) {

            nodeIds = this._fillNodeIds(nodeIds);

            for (let nodeId of nodeIds) {

                let node = this.data.graph.findById(nodeId);
                let model = node.getModel();
                let index = model.mark.indexOf(mark);

                if (index !== -1) {

                    model.mark.splice(index, 1);

                }

                this._traverseNodeUpdateMark(model);
                node.draw();

            }

            this.data.graph.refreshLayout();

        },
    }
};
