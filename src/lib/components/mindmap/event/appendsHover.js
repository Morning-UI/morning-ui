import {
    APPENDS_LIST,
}                                   from '../const/style';
import {
    inAnnex,
}                                   from '../base/utils';

export default {
    move : (evt, options) => {

        let model = evt.item.getModel();

        if (!model._isMindNode) {

            return;

        }

        if (model.link) {

            if (inAnnex(options.vm, evt, APPENDS_LIST.link.index)) {

                options.graph.setItemState(evt.item, APPENDS_LIST.link.state, true);

            } else {

                options.graph.setItemState(evt.item, APPENDS_LIST.link.state, false);

            }

        }

        if (model.note) {

            let index = APPENDS_LIST.note.index;

            if (!model.link) {

                index = 0;

            }

            if (inAnnex(options.vm, evt, index)) {

                options.graph.setItemState(evt.item, APPENDS_LIST.note.state, true);

            } else {

                options.graph.setItemState(evt.item, APPENDS_LIST.note.state, false);

            }

        }

    },
    stop : (evt, options) => {

        let hoverNotes = options.graph.findAllByState('node', 'note-hover');

        if (hoverNotes && hoverNotes.length > 0) {

            for (let note of hoverNotes) {

                options.graph.setItemState(note, APPENDS_LIST.note.state, false);

            }
            
        }

    }
};
