import {NODE_SHAPE_INDEX}           from '../nodes/mindNode';
import {
    inNodeShape,
}                                   from '../base/utils';

export default {
    click : (evt, options) => {
        
        let model = evt.item.getModel();

        if (!model._isMindNode) {

            return;

        }

        if (model.children && model.children.length > 0) {

            if (inNodeShape(options.vm, evt, evt.item.get('group').getChildByIndex(NODE_SHAPE_INDEX.collapseBtnGroup))) {

                // TODO : 切换折叠子元素
                // this._collapseExpandChildren(evt.item);

            }

        }

    }
};
