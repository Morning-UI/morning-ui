<template>
    <mor-mindmap
        :_uiid="uiid"
        :class="[formClass, sizeClass, stateClass]"

        :form-name="formName"
        :form-note="formNote"
        :form-key="formKey"
        :form-width="formWidth"
        :group="group"
        :hide-name="hideName"
        :clearable="clearable"
        :inside-clearable="insideClearable"
        :_errorMessage="_errorMessage"
        :layout="layout"
        :width="width"
        :height="height"
        :hotkey-map="hotkeyMap"
    >

    <div class="form-name" v-if="!conf.hideName && !!conf.formName">{{conf.formName}}</div>
    <div class="form-note" v-if="!!conf.formNote">{{conf.formNote}}</div>

    <div class="mindmap-wrap form-body">
        <div class="canvas"></div>
        <div class="edit-content">
            <textarea
                v-model="data.editContent"
                @input="_editInput"
                @mouseup.native="_editInput"
                @keydown.native="_editInput"
            ></textarea>
        </div>
        <div class="mindmap-tools">
            <!-- <morning-btn size="s" color="white"></morning-btn> -->
            <morning-slider
                :min="20"
                :max="150"
                ref="mor-mindmap-zoomslider"
                @value-change="_sliderZoomChange"
                :tip-formatter="(value) => `缩放：${value}%`"
            ></morning-slider>
        </div>
        <div class="node-note" :id="'mor-mindmap-note-'+uiid"></div>
        <morning-popover
            :target="'#mor-mindmap-note-'+uiid"
            :ref="'mor-mindmap-note-'+uiid"
            trigger="method"
            placement="bottom"
        ><span v-html="data.currentNodeNote"></span></morning-popover>
        <div class="context-menu" :style="data.contextMenu.style">
            <slot name="context-menu"></slot>
            <!-- <morning-btn size="s" color="white" @emit="insertSubNode(data.contextMenu.nodeId);_hideContextMenu();">插入子级</morning-btn>
            <morning-btn size="s" color="white" @emit="insertAfterNode(data.contextMenu.nodeId);_hideContextMenu();">插入同级</morning-btn>
            <morning-btn size="s" color="white" @emit="copyNodeToClipboard(data.contextMenu.nodeId);_hideContextMenu();">复制节点</morning-btn>
            <morning-btn size="s" color="white" @emit="insertSubNode(data.contextMenu.nodeId, morning._mindmapClipboard);_hideContextMenu();">粘贴并插入子级</morning-btn>
            <morning-btn size="s" color="white" @emit="insertAfterNode(data.contextMenu.nodeId, morning._mindmapClipboard);_hideContextMenu();">粘贴并插入同级</morning-btn> -->
            <!-- <ui-btn size="s" color="white" @emit="deleteNode(data.contextMenu.nodeId);_hideContextMenu();">删除节点</ui-btn>
            <morning-btn size="s" color="white" @emit="editLink(data.contextMenu.nodeId);_hideContextMenu();">设置链接</morning-btn> -->
            <!-- <morning-btn size="s" color="white" @emit="editNote(data.contextMenu.nodeId);_hideContextMenu();">设置备注</morning-btn>
            <morning-btn size="s" color="white" @emit="editMark(data.contextMenu.nodeId);_hideContextMenu();">设置标记</morning-btn>
            <morning-btn size="s" color="white" @emit="exportTo('xmind', data.contextMenu.nodeId);_hideContextMenu();">导出节点</morning-btn>
            <morning-btn size="s" color="white" @emit="showImportFile(data.contextMenu.nodeId, 'replace');_hideContextMenu();">导入数据并替换</morning-btn>
            <morning-btn size="s" color="white" @emit="showImportFile(data.contextMenu.nodeId, 'append');_hideContextMenu();">导入数据在结尾插入</morning-btn>
            <morning-btn size="s" color="white" @emit="showImportFile(data.contextMenu.nodeId, 'prepend');_hideContextMenu();">导入数据在开头插入</morning-btn>
            <morning-btn size="s" color="danger" class="plain" @emit="deleteNode(data.contextMenu.nodeId);_hideContextMenu();">删除节点</morning-btn> -->
        </div>
    </div>

    <morning-dialog :ref="'mor-mindmap-edit-link-' + uiid" width="400px" height="240px" show-type="center">
        <div slot="header">编辑链接</div>
        <div class="mor-mindmap-dialog-body">
            <morning-textarea v-model="data.currentEditLinkValue"></morning-textarea>
            <div class="mor-mindmap-dialog-op">
                <morning-btn color="success" @emit="link(data.currentEditLinkNodeIds, data.currentEditLinkValue);cancelEditLink();">保存</morning-btn>
                <morning-btn color="neutral-1" @emit="cancelEditLink">取消</morning-btn>
            </div>
        </div>
    </morning-dialog>

    <morning-dialog :ref="'mor-mindmap-edit-note-' + uiid" width="400px" height="240px" show-type="center">
        <div slot="header">编辑备注</div>
        <div class="mor-mindmap-dialog-body">
            <morning-textarea v-model="data.currentEditNoteValue"></morning-textarea>
            <div class="mor-mindmap-dialog-op">
                <morning-btn color="success" @emit="note(data.currentEditNoteNodeIds, data.currentEditNoteValue);cancelEditNote();">保存</morning-btn>
                <morning-btn color="neutral-1" @emit="cancelEditNote">取消</morning-btn>
            </div>
        </div>
    </morning-dialog>

    <morning-dialog :ref="'mor-mindmap-edit-mark-' + uiid" width="580px" height="580px" show-type="center">
        <div slot="header">编辑标记</div>
        <div class="mor-mindmap-dialog-body">
            <morning-form
                v-for="group in data.markGroups"
                :key="group.key"
                label-position="head-left"
            >
                <ui-formitem :label="group.name">
                    <morning-radio
                        :list="group.list"  
                        accept-html
                        size="s"
                        color="neutral-2"
                        type="button"
                        v-model="data.currentEditMarkValue[group.key]"
                    >
                    </morning-radio>
                </ui-formitem>
            </morning-form>
            <div class="mor-mindmap-dialog-op">
                <morning-btn color="success" @emit="_saveMarks(data.currentEditMarkNodeIds, data.currentEditMarkValue);cancelEditMark();">保存</morning-btn>
                <morning-btn color="neutral-1" @emit="cancelEditMark">取消</morning-btn>
            </div>
        </div>
    </morning-dialog>

    <morning-dialog :ref="'mor-mindmap-import-' + uiid" width="380px" height="300px" show-type="center" @hide="_resetImportStatus">
        <div slot="header">导入数据</div>
        <div class="mor-mindmap-dialog-body">
            <morning-upload
                :uploader="_importFile"
                type="box"
                only-read-file
                item-name="JSON或XMind文件"
                accept-type=".json, .xmind"
            ></morning-upload>
            <div class="mor-mindmap-dialog-op">
                <morning-btn color="neutral-1" @emit="cancelImportFile">取消</morning-btn>
            </div>
        </div>
    </morning-dialog>

    <div class="error-message">{{conf._errorMessage}}</div>
    <morning-link v-if="conf.clearable" color="minor" @emit="_clean" class="cleanbtn">清空</morning-link>

    </mor-mindmap>
</template>
 
<script>
import G6                           from '@antv/g6';
// import map                          from 'lodash.map';
// import copy                         from 'clipboard-copy';
// import isHotkey                     from 'is-hotkey';
import GlobalEvent                  from 'Utils/GlobalEvent';

import shapeBase                    from './base/shape';

import MixinMethodTag               from './methods/tag';
import MixinMethodMark              from './methods/mark';
import MixinMethodLink              from './methods/link';
import MixinMethodNote              from './methods/note';
import MixinMethodZoom              from './methods/zoom';
import MixinMethodImport            from './methods/import';
import MixinMethodExport            from './methods/export';
import MixinMethodGet               from './methods/get';

import getMindNodeConfig            from './nodes/mindNode';
// import getMindNodeRootConfig        from './nodes/mindNodeRoot';
import getPlaceholderNodeConfig     from './nodes/placeholderNode';
import getMindEdgeConfig            from './nodes/mindEdge';
import getPlaceholderEdgeConfig     from './nodes/placeholderEdge';
import getBrushSelectConfig         from './behavior/brushSelect';
import getDragNodeConfig            from './behavior/dragNode';

import {
    MARKS,
    MARKS_GROUP_NAME
}                                   from './const/marks';
import {
    CON_SHAPE_INDEX,
    MARK_CON_GROUP_INDEX,
    APPEND_CON_GROUP_INDEX,
    EXPAND_BTN_GROUP_INDEX,
    TEXT_SHAPE_INDEX,
}                                   from './const/shapeIndex';
import {
    ANNEX_LIST,
}                                   from './const/nodeStyle';

// eslint-disable-next-line no-unused-vars
import xmindSdk                     from 'xmind-sdk/dist/xmind-sdk.bundle.js';

/* eslint-disable no-unused-vars, no-magic-numbers */
const tagPadding = {
    x : 8,
    y : 6
};
const markConPaddingRight = 10;
/* eslint-enable no-unused-vars, no-magic-numbers */

// <i class="mo-icon mo-icon-error-cf cleanicon" v-show="(conf.state !== 'readonly' && conf.state !== 'disabled') && conf.insideClearable &&  data.value" @click.stop="set(undefined)"></i>
export default {
    origin : 'Form',
    name : 'mindmap',
    mixins : [
        GlobalEvent,
        MixinMethodTag,
        MixinMethodMark,
        MixinMethodLink,
        MixinMethodNote,
        MixinMethodZoom,
        MixinMethodImport,
        MixinMethodExport,
        MixinMethodGet,
    ],
    props : {
        layout : {
            type : String,
            default : 'LR',
            validator : (value => ['LR', 'RL'].indexOf(value) !== -1)
        },
        width : {
            type : String,
            default : '760px'
        },
        height : {
            type : String,
            default : '500px'
        },
        hotkeyMap : {
            type : Object,
            default : (() => ({}))
        }
    },
    computed : {
        _conf : function () {

            return {
                layout : this.layout,
                width : this.width,
                height : this.height,
                hotkeyMap : this.hotkeyMap
            };

        }
    },
    data : function () {

        return {
            G6,
            data : {
                markGroups : {},
                // globalId : 1,
                // editting : false,
                // editGroupShapes : {},
                // editNode : null,
                // editContent : '',
                // editZoom : 1,
                dragging : false,
                // dataMap : {},
                // currentNodeNote : '',
                // nodeNoteZoom : 1,
                // nodeNoteShow : false,
                // contextMenu : {
                //     style : {}
                // },
                currentEditLinkNodeIds : [],
                currentEditNoteNodeIds : [],
                currentEditMarkNodeIds : [],
                currentEditLinkValue : '',
                currentEditNoteValue : '',
                currentEditMarkValue : {
                    priority : '0',
                    task : '0',
                    flag : '0',
                    star : '0',
                    status : '0'
                },
                currentImportNode : undefined,
                currentImportMode : 'replace',
                // mouseOnCanvas : false,
                keydownState : {
                    mod : false
                }
            }
        };

    },
    methods : {
        // _clearSelectedNode : function (selectedState) {
                    
        //     let graph = this.data.graph;
        //     let autoPaint = graph.get('autoPaint');
        //     let nodes = graph.findAllByState('node', selectedState);
        //     let edges = graph.findAllByState('edge', selectedState);
            
        //     graph.setAutoPaint(false);
        //     nodes.forEach(node => graph.setItemState(node, selectedState, false));
        //     edges.forEach(edge => graph.setItemState(edge, selectedState, false));
        //     this.selectedNodes = [];
        //     // this.selectedEdges = [];
        //     graph.paint();
        //     graph.setAutoPaint(autoPaint);

        // },
        // _refreshNodeEdges : function (edges) {

        //     for (let edge of edges) {

        //         edge.refresh();

        //     }

        // },
        // _refreshEditorPosition : function (node) {

        //     if (this.data.editNode) {
                
        //         let edges = this.data.editNode.getEdges();

        //         this.data.editNode.refresh();
        //         this._refreshNodeEdges(edges);

        //     }
    
        //     let groupShapes = shapeBase.getGroupShapes(node);
        //     let textAttr = groupShapes.text.attr();
        //     let nodeBbox = node.getBBox();
        //     let textBbox = groupShapes.text.getBBox();
        //     let conBbox = groupShapes.con.getBBox();
        //     let zoom = this.data.graph.getZoom();
        //     let {
        //         x : nodeX,
        //         y : nodeY
        //     } = this.data.graph.getCanvasByPoint(nodeBbox.x, nodeBbox.y);

        //     // when text is empty use placeholder
        //     if (textBbox.width === 0) {

        //         textBbox = groupShapes.placeholder.getBBox();

        //     }

        //     const padding = 5;

        //     let inputX = `${textBbox.x + 1 - padding}px`;
        //     let inputY = `${textBbox.y - padding}px`;

        //     this.data.$editContent.style.display = 'block';
        //     this.data.$editContent.style.left = `${nodeX}px`;
        //     this.data.$editContent.style.top = `${nodeY}px`;
        //     this.data.$editContent.style.width = `${conBbox.width}px`;
        //     this.data.$editContent.style.height = `${conBbox.height}px`;
        //     this.data.$editContentInput.style.width = `${textBbox.width + (padding * 2)}px`;
        //     this.data.$editContentInput.style.height = `${textBbox.height + (padding * 2)}px`;
        //     this.data.$editContentInput.style.padding = `${padding}px`;
        //     this.data.$editContentInput.style.left = inputX;
        //     this.data.$editContentInput.style.top = inputY;
        //     // this.data.$editContentInput.style.color = textAttr.fill;
        //     this.data.$editContentInput.style.fontSize = `${textAttr.fontSize}px`;
        //     this.data.$editContentInput.style.textAlign = textAttr.textAlign;
        //     this.data.$editContentInput.style.fontWeight = textAttr.fontWeight;
        //     this.data.$editContentInput.style.fontStyle = textAttr.fontStyle;
        //     this.data.$editContentInput.style.fontFamily = textAttr.fontFamily;
        //     this.data.editContent = textAttr.text;
        //     this.data.editZoom = zoom;

        // },
        // _manualPaint : function (paintCallback) {
    
        //     let autoPaint = this.data.graph.get('autoPaint');

        //     paintCallback();

        //     this.data.graph.paint();
        //     this.data.graph.setAutoPaint(autoPaint);

        // },
        // _editInput : function () {

        //     let groupShapes = this.data.editGroupShapes;

        //     this._manualPaint(() => {

        //         groupShapes.text.attr({
        //             text : this.data.editContent
        //         });

        //         this.data.editNode.update({
        //             text : this.data.editContent
        //         });

        //         // 临时修复问题：https://github.com/antvis/g/pull/121
        //         if (this.data.editContent.indexOf('\n') === -1) {

        //             groupShapes.text._attrs.lineCount = 1;

        //         }

        //         this.data.graph.paint();
        //         shapeBase.refreshMindNode(groupShapes, this.data.editNode.getModel());
        //         this._refreshEditorPosition(this.data.editNode);

        //     });

        // },
        /* eslint-disable no-magic-numbers */
        _collapseExpandOneChild : function (node, collapse) {

            if (collapse) {

                shapeBase.toggleNodeBox(node, 'hide');

            } else {

                shapeBase.toggleNodeBox(node, 'show');

            }

        },
        _collapseExpandChildren : function (node, collapse) {

            let model = node.getModel();
            let children = model.children;

            if (collapse === undefined) {

                collapse = !model.childrenCollapse;

            }

            model.childrenCollapse = collapse;
            this.data.graph.setItemState(node, 'children-collapse', collapse);

            for (let childModel of children) {

                childModel.collapse = collapse;
                this._collapseExpandOneChild(this.data.graph.findById(childModel.id), collapse);

            }

        },
        // _nodeEventShouldEmit : function (evt) {

        //     let model = evt.item.getModel();

        //     if (model.collapse || model.isDragging) {

        //         return false;

        //     }

        //     return true;

        // },
        /* eslint-enable no-magic-numbers */
        // _inAnnex : function (evt, shapeIndex) {

        //     return this
        //         ._inNodeShape(
        //             evt,
        //             evt.item.get('group')
        //                 .getChildByIndex(APPEND_CON_GROUP_INDEX)
        //                 .getChildByIndex(shapeIndex)
        //         );

        // },
        // _editNode : function (nodeId, clean = false) {

        //     let node = this.data.graph.findById(nodeId);
        //     let groupShapes = shapeBase.getGroupShapes(node);

        //     this.data.editting = true;
        //     this.data.editGroupShapes = groupShapes;
        //     this.data.editNode = node;
        //     this._refreshEditorPosition(node);
        //     groupShapes.text.attr({
        //         opacity : 0
        //     });
        //     this.data.editNode.setState('editing', true);
        //     this.data.graph.paint();
        //     this.data.$editContentInput.focus();

        //     if (clean) {

        //         setTimeout(() => {

        //             this.data.editContent = this
        //                 .data
        //                 .editContent
        //                 .split('')
        //                 .slice(-1)
        //                 .join('');
        //             this._editInput();

        //         });

        //     }

        // },
        _onExpandBtnHover : function () {

            this.data.graph.on('node:mousemove', evt => {

                if (!this._nodeEventShouldEmit(evt)) {

                    return;

                }

                let model = evt.item.getModel();

                if (!model.isMindNode) {

                    return;

                }

                if (model.children && model.children.length > 0) {

                    if (this._inNodeShape(evt, evt.item.get('group').getChildByIndex(EXPAND_BTN_GROUP_INDEX))) {

                        this.data.graph.setItemState(evt.item, 'expand-btn-hover', true);

                    } else {

                        this.data.graph.setItemState(evt.item, 'expand-btn-hover', false);

                    }

                }

            });

            this.data.graph.on('canvas:mousemove', () => {

                let hoverExpendBtn = this.data.graph.findAllByState('node', 'expand-btn-hover');

                if (hoverExpendBtn && hoverExpendBtn.length > 0) {

                    for (let expendBtn of hoverExpendBtn) {

                        this.data.graph.setItemState(expendBtn, 'expand-btn-hover', false);

                    }
                    
                }

            });

        },
        _onGlobalKeydown : function (evt) {

            const modKeycode = [91, 17];

            if (modKeycode.indexOf(evt.keyCode) !== -1) {

                this.data.keydownState.mod = true;

            }

        },
        _onGlobalKeyup : function (evt) {

            const modKeycode = [91, 17];

            if (modKeycode.indexOf(evt.keyCode) !== -1) {

                this.data.keydownState.mod = false;

            }

        },
        /* eslint-disable no-magic-numbers */
        _registrar : function () {

            // this.G6.registerNode('mor-root-mind-node', getMindNodeRootConfig(this), 'single-shape');
            // this.G6.registerNode('mor-mind-node', getMindNodeConfig(this), 'single-shape');
            // this.G6.registerNode('mor-placeholder-node', getPlaceholderNodeConfig(this), 'single-shape');
            // this.G6.registerEdge('mor-mind-edge', getMindEdgeConfig(this), 'polyline');
            // this.G6.registerEdge('mor-placeholder-edge', getPlaceholderEdgeConfig(this), 'mor-mind-edge');
            // this.G6.registerBehavior('mor-brush-select', getBrushSelectConfig(this));
            // this.G6.registerBehavior('mor-drag-node', getDragNodeConfig(this));

        },
        // _bindEvent : function () {

            // this._onCanvasGrab();
            // this._onNodeHover();
            // this._onNodeSelected();
            // this._onNodeEdit();
            // this._onNodeDrag();
            // this._onAnnexHover();
            // this._onAnnexClick();
            // this._onExpandBtnHover();
            // this._onExpandBtnClick();
            // this._onContextMenu();
            // this._onCanvasKeydown();
            // this._onCanvasMouseLeave();
            // this._onHotkey();
            
            // eslint-disable-next-line no-warning-comments
            // TODO : mark hover is not work, cause zIndex
            // this._onMarkHover();

        // },
        _createGraph : function () {

        },
        /* eslint-enable no-magic-numbers */
        _swapArr : function (children, fromIndex, toIndex) {

            children[toIndex] = children.splice(fromIndex, 1, children[toIndex])[0];
        
            return children;

        },
        _resetImportStatus : function () {

            this.data.currentImportNode = undefined;
            this.data.currentImportMode = undefined;

        },
        // _fillNodeIds : function (nodeIds) {

        //     if (typeof nodeIds === 'number') {

        //         return [nodeIds];

        //     }

        //     return nodeIds;

        // },
        _sliderZoomChange : function () {

            let zoom = this.$refs['mor-mindmap-zoomslider'].get() / 100;

            this.zoom(zoom);

        },
        _updateClipboard : function (evt) {

            if (evt.clipboardData) {

                this.morning._mindmapClipboard = evt.clipboardData.getData('text');

            }

        },
        // 插入同级节点(前)
        insertBeforeNode : function (nodeId, datas) {

            let node = this.data.graph.findById(nodeId);
            let model = node.getModel();
            let parent = node.getInEdges()[0].getSource();
            let parentModel = parent.getModel();
            let indexOfParent = parentModel.children.indexOf(model);

            datas = this._parseNewNodeData(datas);

            return this.insertSubNode(parentModel.id, datas, indexOfParent);

        },
        // 插入同级节点(后)
        insertAfterNode : function (nodeId, datas) {

            let node = this.data.graph.findById(nodeId);
            let model = node.getModel();
            let parent = node.getInEdges()[0].getSource();
            let parentModel = parent.getModel();
            let indexOfParent = parentModel.children.indexOf(model);

            datas = this._parseNewNodeData(datas);

            return this.insertSubNode(parentModel.id, datas, indexOfParent + 1);

        },
        // 插入同级节点(最后)
        insertNode : function (nodeId, datas) {

            let node = this.data.graph.findById(nodeId);
            let model = node.getModel();

            if (model.isRoot) {

                return null;

            }

            let parentModel = node.getInEdges()[0].getSource().getModel();

            datas = this._parseNewNodeData(datas);

            return this.insertSubNode(parentModel.id, datas);

        },
        // 插入唯一节点(向后)
        appendUniqueNode : function (nodeId, data) {

            let node = this.data.graph.findById(nodeId);
            let model = node.getModel();

            data = this._parseNewNodeData(data);
            data = data[0];
            data.children = this._pluckDataFromNodes(model.children);
            this.G6.Util.traverseTree(data, this._traverseOneNode);
            model.children = [data];
            // parentModel.children.splice(nodeIndexOfParent, 1, data);
            this.data.graph.changeData();
            this.data.graph.refreshLayout();

            return data.id;

        },
        // 插入唯一节点(向前)
        prependUniqueNode : function (nodeId, data) {

            let node = this.data.graph.findById(nodeId);
            let model = node.getModel();

            if (model.isRoot) {

                return null;

            }

            let parentModel = node.getInEdges()[0].getSource().getModel();
            let nodeIndexOfParent = parentModel.children.indexOf(model);

            data = this._parseNewNodeData(data);
            data = data[0];
            data.children = this._pluckDataFromNodes([model]);
            this.G6.Util.traverseTree(data, this._traverseOneNode);
            parentModel.children.splice(nodeIndexOfParent, 1, data);
            this.data.graph.changeData();
            this.data.graph.refreshLayout();

            return data.id;

        },
        moveUp : function (nodeId) {

            let node = this.data.graph.findById(nodeId);
            let model = node.getModel();
            let parent = node.getInEdges()[0].getSource();
            let parentModel = parent.getModel();
            let indexOfParent = parentModel.children.indexOf(model);

            if (indexOfParent === 0) {

                return this;

            }

            this._swapArr(parentModel.children, indexOfParent, indexOfParent - 1);
            this.data.graph.changeData();
            this.data.graph.refreshLayout();

        },
        moveDown : function (nodeId) {

            let node = this.data.graph.findById(nodeId);
            let model = node.getModel();
            let parent = node.getInEdges()[0].getSource();
            let parentModel = parent.getModel();
            let indexOfParent = parentModel.children.indexOf(model);

            if (indexOfParent === parentModel.children.length - 1) {

                return this;

            }

            this._swapArr(parentModel.children, indexOfParent, indexOfParent + 1);
            this.data.graph.changeData();
            this.data.graph.refreshLayout();

            return this;

        },
        stylingNode : function (nodeId, style) {

            // style included : fontSize / fontWeight / fontColor / fontStyle

            let node = this.data.graph.findById(nodeId);
            let model = node.getModel();

            model.style = this.G6.Util.deepMix(model.style, style);
            node.draw();
            this.data.graph.refreshLayout();

        },
        clearSelectedNode : function () {

            this._clearSelectedNode('selected');

        }
    },
    created : function () {

        let groups = {};

        for (let index in MARKS) {

            let mark = MARKS[index];
            let group = index.split(':')[0];

            if (groups[group] === undefined) {

                groups[group] = {
                    key : group,
                    name : MARKS_GROUP_NAME[group],
                    list : {
                        0 : '不使用'
                    }
                };

            }

            groups[group].list[index.replace(':', '-')] = `<i class="mo-icon ${mark.iconcls}" style="color:${mark.color}"></i>`;

        }

        this.data.markGroups = groups;

    },
    mounted : function () {

        // item includes :
        // - text
        // - note
        // - mark
        // - link
        // - isRoot*
        // - children*

        // let data2 = {
        //     text : 'Modeling Methods',
        //     isRoot : true,
        //     children : [
        //         {
        //             text : 'ClassificationClassification',
        //             children : [
        //                 {
        //                     text : `Different in`,
        //                     link : 'http://baidu.com/',
        //                     mark : ['priority:1', 'priority:2', 'star:red']
        //                 },
        //                 {
        //                     text : 'Linear discriminant analysis',
        //                     tag : ['标签1', '标签2']
        //                 },
        //                 {
        //                     text : 'Decision trees',
        //                     note : '123'
        //                 },
        //                 {
        //                     text : 'Decision trees',
        //                     link : 'http://baidu.com'
        //                 },
        //                 {
        //                     text : 'Decision trees',
        //                     note : '123',
        //                     link : 'http://baidu.com'
        //                 },
        //                 {
        //                     text : 'Decision trees'
        //                 },
        //                 {
        //                     text : 'Probabilistic neural network'
        //                 },
        //                 {
        //                     text : 'Support vector machine'
        //                 }
        //             ]
        //         },
        //         {
        //             text : 'Consensus',
        //             children : [
        //                 {
        //                     text : 'Models diversity',
        //                     children : [
        //                         {
        //                             text : 'Different initializations',
        //                             link : 'http://baidu.com/'
        //                         },
        //                         {
        //                             text : 'Different parameter choices'
        //                         },
        //                         {
        //                             text : 'Different architectures'
        //                         },
        //                         {
        //                             text : 'Different modeling methods'
        //                         },
        //                         {
        //                             text : 'Different training sets'
        //                         },
        //                         {
        //                             text : 'Different feature sets'
        //                         }
        //                     ]
        //                 },
        //                 {
        //                     text : 'Methods',
        //                     children : [
        //                         {
        //                             text : 'Classifier selection'
        //                         },
        //                         {
        //                             text : 'Classifier fusion'
        //                         }
        //                     ]
        //                 },
        //                 {
        //                     text : 'Common',
        //                     children : [
        //                         {
        //                             text : 'Bagging'
        //                         },
        //                         {
        //                             text : 'Boosting'
        //                         },
        //                         {
        //                             text : 'AdaBoost'
        //                         }
        //                     ]
        //                 }
        //             ]
        //         },
        //         {
        //             text : 'Regression',
        //             children : [
        //                 {
        //                     text : 'Multiple linear regression'
        //                 },
        //                 {
        //                     text : 'Partial least squares'
        //                 },
        //                 {
        //                     text : 'Multi-layer feedforward neural network'
        //                 },
        //                 {
        //                     text : 'General regression neural network'
        //                 },
        //                 {
        //                     text : 'Support vector regression'
        //                 }
        //             ]
        //         }
        //     ]
        // };

        // this._registrar();
        // this._createGraph();
        // this._bindEvent();
        // this._readData(data2);
        // this._readDate({
        //     text : '新建主题',
        //     isRoot : true
        // });
        this._globalEventAdd('paste', '_updateClipboard');
        this._globalEventAdd('keydown', '_onGlobalKeydown');
        this._globalEventAdd('keyup', '_onGlobalKeyup');

    },
    beforeDestroy : function () {

        this._globalEventRemove('paste', '_updateClipboard');
        this._globalEventRemove('keydown', '_onGlobalKeydown');
        this._globalEventRemove('keyup', '_onGlobalKeyup');

    }
};
</script>
