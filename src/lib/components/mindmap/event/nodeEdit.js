import {NODE_SHAPE_INDEX}           from '../nodes/mindNode';
import {inNodeShape}                from '../base/utils';

export default {
    edit : (evt, options) => {

        // 如果点击非text区域不进入编辑
        if (!inNodeShape(options.vm, evt, evt.item.get('group').getChildByIndex(NODE_SHAPE_INDEX.text))) {

            return;

        }

        options.vm.focusNodeTextEditor(evt.item.getModel().id);

    },
    refresh : (evt, options) => {

        if (options.vm.data.editting) {

            options.vm._refreshEditorPosition(options.vm.data.editNode);

        }

    },
    cancel : (evt, options) => {

        if (options.vm.data.editting &&
            options.vm.data.editNode !== evt.item) {

            options.vm.blurNodeTextEditor();

        }

    },
    zoom : (evt, options) => {

        options.vm.data.$editContent.style.transform = `scale(${options.vm.data.editZoom})`;

    }
};
