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
// import G6                           from '@antv/g6';
// import map                          from 'lodash.map';
// import copy                         from 'clipboard-copy';
// import isHotkey                     from 'is-hotkey';
// import GlobalEvent                  from 'Utils/GlobalEvent';

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
// import xmindSdk                     from 'xmind-sdk/dist/xmind-sdk.bundle.js';

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
                // dragging : false,
                // dataMap : {},
                // currentNodeNote : '',
                // nodeNoteZoom : 1,
                // nodeNoteShow : false,
                // contextMenu : {
                //     style : {}
                // },
                // currentEditLinkNodeIds : [],
                // currentEditLinkValue : '',
                // currentEditMarkNodeIds : [],
                // currentEditMarkValue : {
                //     priority : '0',
                //     task : '0',
                //     flag : '0',
                //     star : '0',
                //     status : '0'
                // },
                // currentEditNoteNodeIds : [],
                // currentEditNoteValue : '',
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
        /* eslint-disable no-magic-numbers */
        /* eslint-disable no-magic-numbers */
        /* eslint-enable no-magic-numbers */
        _swapArr : function (children, fromIndex, toIndex) {

            children[toIndex] = children.splice(fromIndex, 1, children[toIndex])[0];
        
            return children;

        },
        _resetImportStatus : function () {

            this.data.currentImportNode = undefined;
            this.data.currentImportMode = undefined;

        },
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
    // created : function () {

    //     let groups = {};

    //     for (let index in MARKS) {

    //         let mark = MARKS[index];
    //         let group = index.split(':')[0];

    //         if (groups[group] === undefined) {

    //             groups[group] = {
    //                 key : group,
    //                 name : MARKS_GROUP_NAME[group],
    //                 list : {
    //                     0 : '不使用'
    //                 }
    //             };

    //         }

    //         groups[group].list[index.replace(':', '-')] = `<i class="mo-icon ${mark.iconcls}" style="color:${mark.color}"></i>`;

    //     }

    //     this.data.markGroups = groups;

    // },
    // mounted : function () {

    //     this._globalEventAdd('paste', '_updateClipboard');
    //     this._globalEventAdd('keydown', '_onGlobalKeydown');
    //     this._globalEventAdd('keyup', '_onGlobalKeyup');

    // },
    // beforeDestroy : function () {

    //     this._globalEventRemove('paste', '_updateClipboard');
    //     this._globalEventRemove('keydown', '_onGlobalKeydown');
    //     this._globalEventRemove('keyup', '_onGlobalKeyup');

    // }
};
</script>
