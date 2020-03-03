import isHotkey                     from 'is-hotkey';
import {manualPaint}                from '../base/graph';
import shapeBase                    from '../base/shape';

const _editInput = vm => {

    let shapes = vm.data.editShapes;

    manualPaint(vm, () => {

        shapes.text.attr({
            text : this.data.editContent
        });

        this.data.editNode.update({
            text : this.data.editContent
        });

        // 临时修复问题：https://github.com/antvis/g/pull/121
        if (vm.data.editContent.indexOf('\n') === -1) {

            shapes.text._attrs.lineCount = 1;

        }

        vm.data.graph.paint();
        shapeBase.refreshMindNode(shapes, this.data.editNode.getModel());
        vm._refreshEditorPosition(this.data.editNode);

    });

};

const _editAppendNewline = vm => {

    let content = vm.data.editContent;

    vm.data.editContent = content;
    _editInput(vm);

};

const defaultHotkeyMap = {
    backspace : () => {
        
        this.deleteNode(this.getAllSelectedNode());

    },
    'mod+c' : () => {
        
        this.copyNodeToClipboard(this.getSelectedNode());

    },
    'mod+v' : () => {

        this.insertSubNode(this.getSelectedNode(), this.getClipboard());

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

        let nodeId = options.vm.getSelectedNode();
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
