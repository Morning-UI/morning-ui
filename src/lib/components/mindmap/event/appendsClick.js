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

        if (!model._isMindNode) {

            return;

        }

        if (model.link) {

            if (inAnnex(options.vm, evt, APPENDS_LIST.link.index)) {

                options.vm.showLink(model.id);

            }

        }

        if (model.note) {

            let indexOfAppends = model.link ? APPENDS_LIST.note.index : APPENDS_LIST.link.index;

            if (inAnnex(options.vm, evt, indexOfAppends)) {

                options.vm.showNote(model.id);

            } else {

                options.vm.hideNote(model.id);

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
