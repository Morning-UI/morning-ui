import isHotkey                     from 'is-hotkey';
import {editInput}                  from '../base/editor';

const _editAppendNewline = vm => {

    let content = vm.data.editContent;

    vm.data.editContent = content;
    editInput(vm);

};

const defaultHotkeyMap = {
    backspace : () => {
        
        this.deleteNode(this.getAllSelectedNodeIds());

    },
    'mod+c' : () => {
        
        this.copyNodeToClipboard(this.getSelectedNodeId());

    },
    'mod+v' : () => {

        this.insertSubNode(this.getSelectedNodeId(), this.getClipboard());

    }
};
const edittingHotkeyMap = {
    'shift+enter' : vm => {

        _editAppendNewline(vm);

    },
    enter : vm => {

        vm.blurNodeTextEditor();
    
    }
};

export default (evt, options) => {

    let hotkeyMap = Object.assign({}, defaultHotkeyMap, options.vm.conf.hotkeyMap);
    let hitHotkey = false;

    if (options.vm.data.mouseOnCanvas && options.vm.data.editting === true) {

        for (let key in edittingHotkeyMap) {

            if (isHotkey(key, evt) && typeof edittingHotkeyMap[key] === 'function') {

                edittingHotkeyMap[key](options.vm);
                hitHotkey = true;

            }

        }

    }

    if (options.vm.data.mouseOnCanvas && options.vm.data.editting === false) {

        for (let key in hotkeyMap) {

            if (isHotkey(key, evt) && typeof hotkeyMap[key] === 'function') {

                hotkeyMap[key](options.vm);
                hitHotkey = true;

            }

        }

    }

    if (options.vm.data.editting === false && !hitHotkey) {

        let nodeId = options.vm.getSelectedNodeId();
        let keycode = evt.which;
        
        /* eslint-disable no-magic-numbers */
        if (
            options.vm.data.mouseOnCanvas &&
            nodeId &&
            (
                (keycode >= 65 && keycode <= 90) ||
                (keycode >= 48 && keycode <= 57) ||
                (keycode >= 219 && keycode <= 222) ||
                (keycode >= 186 && keycode <= 192)
            )
        ) {

            options.vm.focusNodeTextEditor(nodeId, true);

        }
        /* eslint-enable no-magic-numbers */

    }

};
