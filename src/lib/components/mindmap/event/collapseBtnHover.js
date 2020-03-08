import {NODE_SHAPE_INDEX}           from '../nodes/mindNode';
import {
    inNodeShape,
}                                   from '../base/utils';

export default {
    move : (evt, options) => {

        let model = evt.item.getModel();
        let children = model._collapsed ? model._collapsedChildren : model.children;

        if (!model._isMindNode) {

            return;

        }

        if (children && children.length > 0) {

            if (inNodeShape(options.vm, evt, evt.item.get('group').getChildByIndex(NODE_SHAPE_INDEX.collapseBtnGroup))) {

                options.graph.setItemState(evt.item, 'collapse-btn-hover', true);

            } else {

                options.graph.setItemState(evt.item, 'collapse-btn-hover', false);

            }

        }

    },
    stop : (evt, options) => {

        let hoverExpendBtn = options.graph.findAllByState('node', 'collapse-btn-hover');

        if (hoverExpendBtn && hoverExpendBtn.length > 0) {

            for (let expendBtn of hoverExpendBtn) {

                options.graph.setItemState(expendBtn, 'collapse-btn-hover', false);

            }
            
        }

    }
};
