import modifyCSS                    from '@antv/dom-util/lib/modify-css.js';
import isHotkey                     from 'is-hotkey';
import SHAPE_INDEX                  from '../const/shapeIndex';
import ANNEX_LIST                   from '../const/annexList';

export default {
    methods : {
        _inAnnex : function (evt, shapeIndex) {

            return this
                ._inNodeShape(
                    evt,
                    evt.item
                        .get('group')
                        .getChildren()[SHAPE_INDEX.APPENDCON_GROUPINDEX]
                        .getChildren()[shapeIndex]
                );

        },
        _showContextMenu : function (x, y, nodeId) {

            this.data.contextMenu = {
                style : {
                    left : `${x}px`,
                    top : `${y}px`,
                    display : 'flex',
                },
                nodeId
            };
            
            let nodes = this.getAllSelectedNode();

            if (nodes && nodes.length === 1) {

                this._clearSelectedNode('selected');

            }

            this.selectNode(nodeId);

        },
        _hideContextMenu : function () {
            
            this.data.contextMenu = {
                style : {
                    display : 'none'
                }
            };

        },
        _onCanvasGrab : function () {

            this.data.graph.on('canvas:mousedown', evt => (
                modifyCSS(evt.currentTarget.get('canvas').get('canvasDOM'), {
                    cursor : 'grabbing'
                }))
            );

            this.data.graph.on('canvas:mouseenter', evt => (
                modifyCSS(evt.currentTarget.get('canvas').get('canvasDOM'), {
                    cursor : 'grab'
                }))
            );

            this.data.graph.on('canvas:mouseup', evt => (
                modifyCSS(evt.currentTarget.get('canvas').get('canvasDOM'), {
                    cursor : 'grab'
                }))
            );

        },
        _onNodeHover : function () {

            this.data.graph.on('node:mouseenter', evt => {

                if (evt.item.getModel().isMindNode) {
                
                    this.data.graph.setItemState(evt.item, 'hover', true);
                
                }
            
            });

            this.data.graph.on('node:mouseleave', evt => {

                if (evt.item.getModel().isMindNode) {

                    this.data.graph.setItemState(evt.item, 'hover', false);
                
                }

            });

        },
        _onNodeSelected : function () {

            this.data.graph.on('node:click', evt => {

                if (this.data.keydownState.mod) {

                    if (evt.item.getModel().isMindNode) {

                        if (evt.item.getStates().indexOf('selected') !== -1) {
                        
                            this.data.graph.setItemState(evt.item, 'selected', false);

                        } else {
                        
                            this.data.graph.setItemState(evt.item, 'selected', true);

                        }
                    
                    }

                } else {

                    this._clearSelectedNode('selected');

                    if (evt.item.getModel().isMindNode) {
                        
                        this.data.graph.setItemState(evt.item, 'selected', true);
                    
                    }

                }
            
            });

        },
        _onNodeEdit : function () {

            this.data.graph.on('node:dblclick', evt => {

                this._editNode(evt.item.getModel().id);

            });

            this.data.graph.on('wheelzoom', () => {

                if (this.data.editting) {
        
                    this._refreshEditorPosition(this.data.editNode);

                }

            });

            this.data.graph.on('click', evt => {
                
                if (this.data.editting &&
                    this.data.editNode !== evt.item) {

                    this._cancelEdit();

                }

            });

            this.data.graph.on('canvas:mousedown', evt => {
                
                if (this.data.editting &&
                    this.data.editNode !== evt.item) {

                    this._cancelEdit();

                }

            });

            this.$watch('data.editZoom', () => {

                this.data.$editContent.style.transform = `scale(${this.data.editZoom})`;

            });

        },
        _onNodeDrag : function () {

            this.data.graph.on('node:dragstart', evt => {

                if (!evt.item.destroyed && !evt.item.getModel().isRoot && evt.item.getModel().isMindNode) {
                    
                    this.data.graph.setItemState(evt.item, 'drag', true);

                }

            });

            this.data.graph.on('node:dragend', evt => {

                if (!evt.item.destroyed && !evt.item.getModel().isRoot && evt.item.getModel().isMindNode) {

                    this.data.graph.setItemState(evt.item, 'drag', false);

                }

            });
            
        },
        _onAnnexHover : function () {

            this.data.graph.on('node:mousemove', evt => {

                let model = evt.item.getModel();

                if (!model.isMindNode) {

                    return;

                }

                if (model.link) {

                    if (this._inAnnex(evt, ANNEX_LIST.LINK.index)) {

                        this.data.graph.setItemState(evt.item, ANNEX_LIST.LINK.state, true);

                    } else {

                        this.data.graph.setItemState(evt.item, ANNEX_LIST.LINK.state, false);

                    }

                }

                if (model.note) {

                    let index = ANNEX_LIST.NOTE.index;

                    if (!model.link) {

                        index = 0;

                    }

                    if (this._inAnnex(evt, index)) {

                        this.data.graph.setItemState(evt.item, ANNEX_LIST.NOTE.state, true);

                    } else {

                        this.data.graph.setItemState(evt.item, ANNEX_LIST.NOTE.state, false);

                    }

                }

            });

            this.data.graph.on('canvas:mousemove', () => {

                let hoverNotes = this.data.graph.findAllByState('node', 'note-hover');

                if (hoverNotes && hoverNotes.length > 0) {

                    for (let note of hoverNotes) {

                        this.data.graph.setItemState(note, ANNEX_LIST.NOTE.state, false);

                    }
                    
                }

            });

        },
        _onAnnexClick : function () {

            this.data.graph.on('node:click', evt => {

                let model = evt.item.getModel();

                if (!model.isMindNode) {

                    return;

                }

                if (model.link) {

                    if (this._inAnnex(evt, ANNEX_LIST.LINK.index)) {

                        window.open(model.link);

                    }

                }

                if (model.note) {

                    let index = ANNEX_LIST.NOTE.index;

                    if (!model.link) {

                        index = 0;

                    }

                    if (this._inAnnex(evt, index)) {

                        this.data.currentNodeNote = model.note.replace(/\n/g, '<br>');
                        this.data.nodeNoteShow = true;
                        this._refreshNodeNotePosition(evt.item, index);
                        this.data.$notePopover.toggle(true);

                    } else {

                        this.data.nodeNoteShow = false;
                        this.data.$notePopover.toggle(false);

                    }

                }

            });

            this.data.graph.on('canvas:click', () => {

                if (this.data.nodeNoteShow) {

                    this.data.nodeNoteShow = false;
                    this.data.$notePopover.toggle(false);

                }

            });

            this.data.graph.on('wheelzoom', () => {

                if (this.data.nodeNoteShow) {

                    this.data.nodeNoteShow = false;
                    this.data.$notePopover.toggle(false);

                }

            });

            this.$watch('data.nodeNoteZoom', () => {

                this.data.$nodeNote.style.transform = `scale(${this.data.nodeNoteZoom})`;

            });

            this.$watch('data.nodeNoteShow', () => {

                this.data.$nodeNote.style.pointerEvents = (this.data.nodeNoteShow ? 'default' : 'none');

            });

        },
        _onContextMenu : function () {
            
            this.data.graph.on('node:contextmenu', evt => {

                let {
                    x : canvasX,
                    y : canvasY
                } = this.data.graph.getCanvasByPoint(evt.x, evt.y);

                if (evt.item) {

                    let model = evt.item.getModel();

                    if (model.isMindNode) {

                        this._showContextMenu(canvasX, canvasY, model.id);

                    }

                }

            });

            this.data.graph.on('node:mouseleave', () => {

                this._hideContextMenu();

            });

        },
        _onCanvasKeydown : function () {

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
            const editingHotkeyMap = {
                'shift+enter' : () => {

                    this._editAppendNewline();

                },
                enter : () => {

                    this._cancelEdit();
                
                }
            };
            let hotkeyMap = Object.assign({}, defaultHotkeyMap, this.conf.hotkeyMap);

            this.data.graph.on('keydown', evt => {

                let hitHotkey = false;

                if (this.data.mouseOnCanvas && this.data.editting === true) {

                    for (let key in editingHotkeyMap) {

                        if (isHotkey(key, evt) && typeof editingHotkeyMap[key] === 'function') {

                            editingHotkeyMap[key]();
                            hitHotkey = true;

                        }

                    }

                }

                if (this.data.mouseOnCanvas && this.data.editting === false) {

                    for (let key in hotkeyMap) {

                        if (isHotkey(key, evt) && typeof hotkeyMap[key] === 'function') {

                            hotkeyMap[key]();
                            hitHotkey = true;

                        }

                    }

                }

                if (this.data.editting === false && !hitHotkey) {

                    let nodeId = this.getSelectedNode();
                    let keycode = evt.which;
                    
                    /* eslint-disable no-magic-numbers */
                    if (
                        this.data.mouseOnCanvas &&
                        nodeId &&
                        (
                            (keycode >= 65 && keycode <= 90) ||
                            (keycode >= 48 && keycode <= 57) ||
                            (keycode >= 219 && keycode <= 222) ||
                            (keycode >= 186 && keycode <= 192)
                        )
                    ) {

                        this._editNode(nodeId, true);

                    }
                    /* eslint-enable no-magic-numbers */

                }

            });
            
        },
        _onCanvasMouseLeave : function () {

            this.data.graph.on('canvas:mouseover', () => {
                
                this.data.mouseOnCanvas = true;

            });

            this.data.graph.on('canvas:mouseleave', () => {
                
                this.data.mouseOnCanvas = false;

            });

        },
        _bindEvent : function () {

            // this._onCanvasGrab();
            this._onNodeHover();
            // this._onNodeSelected();
            // this._onNodeEdit();
            // this._onNodeDrag();
            // this._onAnnexHover();
            // this._onAnnexClick();
            // this._onContextMenu();
            // this._onCanvasKeydown();
            // this._onCanvasMouseLeave();
            
            // eslint-disable-next-line no-warning-comments
            // TODO : mark hover is not work, cause zIndex
            // this._onMarkHover();

        }
    }
};
