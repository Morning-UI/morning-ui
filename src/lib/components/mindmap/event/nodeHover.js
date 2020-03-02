export default {
    in : (evt, options) => {

        if (evt.item.getModel().isMindNode) {
        
            options.graph.setItemState(evt.item, 'hover', true);
        
        }

    },
    out : (evt, options) => {

        if (evt.item.getModel().isMindNode) {

            options.graph.setItemState(evt.item, 'hover', false);
        
        }

    }

};
