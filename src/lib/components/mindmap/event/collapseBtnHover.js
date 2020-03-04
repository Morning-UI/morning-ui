import {NODE_SHAPE_INDEX}           from '../nodes/mindNode';
import {
    inNodeShape,
}                                   from '../base/utils';

export default {
    move : (evt, options) => {

        let model = evt.item.getModel();

        if (!model._isMindNode) {

            return;

        }

        if (model.children && model.children.length > 0) {

            if (inNodeShape(options.vm, evt, evt.item.get('group').getChildByIndex(NODE_SHAPE_INDEX.collapseBtnGroup))) {

                options.graph.setItemState(evt.item, 'expand-btn-hover', true);

            } else {

                options.graph.setItemState(evt.item, 'expand-btn-hover', false);

            }

        }

    },
    stop : (evt, options) => {

        let hoverExpendBtn = options.graph.findAllByState('node', 'expand-btn-hover');

        if (hoverExpendBtn && hoverExpendBtn.length > 0) {

            for (let expendBtn of hoverExpendBtn) {

                options.graph.setItemState(expendBtn, 'expand-btn-hover', false);

            }
            
        }

    }
};
