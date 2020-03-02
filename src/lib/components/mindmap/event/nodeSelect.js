export default (evt, options) => {

    if (options.vm.data.keydownState.mod) {

        if (evt.item.getModel().isMindNode) {

            if (evt.item.getStates().indexOf('selected') !== -1) {
            
                options.graph.setItemState(evt.item, 'selected', false);

            } else {
            
                options.graph.setItemState(evt.item, 'selected', true);

            }
        
        }

    } else {

        options.vm._clearSelectedNode('selected');

        if (evt.item.getModel().isMindNode) {
            
            options.graph.setItemState(evt.item, 'selected', true);
        
        }

    }

};
