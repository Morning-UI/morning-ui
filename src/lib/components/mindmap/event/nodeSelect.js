import {NODE_SHAPE_INDEX}           from '../nodes/mindNode';
import {
    inNodeShape,
}                                   from '../base/utils';

export default (evt, options) => {

    let model = evt.item.getModel();
    let children = model._collapsed ? model._collapsedChildren : model.children;

    if (children && children.length > 0) {

        if (inNodeShape(options.vm, evt, evt.item.get('group').getChildByIndex(NODE_SHAPE_INDEX.collapseBtnGroup))) {

            return;

        }

    }

    if (options.vm.data.keydownState.mod) {

        if (evt.item.getModel()._isMindNode) {

            if (evt.item.getStates().indexOf('selected') !== -1) {
            
                options.graph.setItemState(evt.item, 'selected', false);

            } else {
            
                options.graph.setItemState(evt.item, 'selected', true);

            }
        
        }

    } else {

        options.vm._clearSelectedNode('selected');

        if (evt.item.getModel()._isMindNode) {
            
            options.graph.setItemState(evt.item, 'selected', true);
        
        }

    }

};
