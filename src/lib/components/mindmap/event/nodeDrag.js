export default {
    start : (evt, options) => {

        if (!evt.item.destroyed && !evt.item.getModel()._isRoot && evt.item.getModel()._isMindNode) {
            
            options.graph.setItemState(evt.item, 'drag', true);

        }

    },
    end : (evt, options) => {

        if (!evt.item.destroyed && !evt.item.getModel()._isRoot && evt.item.getModel()._isMindNode) {

            options.graph.setItemState(evt.item, 'drag', false);

        }

    }
};
