import shapeBase                    from '../base/shape';
import {
    APPENDS_LIST,
}                                   from '../const/style';
import {
    inAnnex,
}                                   from '../base/utils';

export default {
    click : (evt, options) => {

        let model = evt.item.getModel();

        if (!model.isMindNode) {

            return;

        }

        if (model.link) {

            if (inAnnex(options.vm, evt, APPENDS_LIST.link.index)) {

                window.open(model.link);

            }

        }

        if (model.note) {

            let index = APPENDS_LIST.note.index;

            if (!model.link) {

                index = 0;

            }

            if (inAnnex(options.vm, evt, index)) {

                options.vm.data.currentNodeNote = model.note.replace(/\n/g, '<br>');
                options.vm.data.nodeNoteShow = true;
                shapeBase.refreshNodeNotePosition(options.vm, evt.item, index);
                options.vm.data.$notePopover.toggle(true);

            } else {

                options.vm.data.nodeNoteShow = false;
                options.vm.data.$notePopover.toggle(false);

            }

        }

    },
    stop : (evt, options) => {

        if (options.vm.data.nodeNoteShow) {

            options.vm.data.nodeNoteShow = false;
            options.vm.data.$notePopover.toggle(false);

        }

    },
    resize : (evt, options) => {

        options.vm.data.$nodeNote.style.transform = `scale(${options.vm.data.nodeNoteZoom})`;

    },
    noteShow : (evt, options) => {

        options.vm.data.$nodeNote.style.pointerEvents = (options.vm.data.nodeNoteShow ? 'default' : 'none');

    }
};
