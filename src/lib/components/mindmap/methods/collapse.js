import {
    fillNodeIds,
}                                   from '../base/utils';

const collapseExpandChildren = (vm, node, collapse) => {

    let model = node.getModel();

    if (collapse === undefined) {

        collapse = !model._collapsed;

    }

    if (model._collapse === collapse) {

        return;

    }

    model._collapsed = collapse;

    if (collapse) {
        
        model._collapsedChildren = model.children;
        model.children = [];

    } else {

        model.children = model._collapsedChildren;
        model._collapsedChildren = [];

    }

    vm.data.graph.setItemState(node, 'children-collapse', collapse);

};

export default {
    methods : {
        collapseChildren : function (nodeIds, collapse) {

            nodeIds = fillNodeIds(nodeIds);

            for (let nodeId of nodeIds) {

                let node = this.data.graph.findById(nodeId);

                collapseExpandChildren(this, node, collapse);
                node.draw();

            }

            this.data.graph.changeData();
            this.data.graph.refreshLayout();

        }
    }
};
