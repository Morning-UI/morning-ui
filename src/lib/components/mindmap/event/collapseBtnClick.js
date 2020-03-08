import {NODE_SHAPE_INDEX}           from '../nodes/mindNode';
import {
    inNodeShape,
}                                   from '../base/utils';

export default {
    click : (evt, options) => {
        
        let model = evt.item.getModel();
        let children = model._collapsed ? model._collapsedChildren : model.children;

        if (!model._isMindNode) {

            return;

        }

        if (children && children.length > 0) {

            if (inNodeShape(options.vm, evt, evt.item.get('group').getChildByIndex(NODE_SHAPE_INDEX.collapseBtnGroup))) {

                options.vm.collapseChildren(model.id);

            }

        }

    }
};
