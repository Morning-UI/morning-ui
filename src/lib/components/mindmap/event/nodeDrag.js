export default {
    start : (evt, options) => {

        if (!evt.item.destroyed && !evt.item.getModel().isRoot && evt.item.getModel().isMindNode) {
            
            options.graph.setItemState(evt.item, 'drag', true);

        }

    },
    end : (evt, options) => {

        if (!evt.item.destroyed && !evt.item.getModel().isRoot && evt.item.getModel().isMindNode) {

            options.graph.setItemState(evt.item, 'drag', false);

        }

    }
};
