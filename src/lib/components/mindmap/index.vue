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
        </div>
    </div>

    <morning-dialog :ref="'mor-mindmap-edit-link-' + uiid" width="400px" height="240px" show-type="center">
        <div slot="header">编辑链接</div>
        <div class="mor-mindmap-dialog-body">
            <morning-textarea v-model="data.currentEditLinkValue"></morning-textarea>
            <div class="mor-mindmap-dialog-op">
                <morning-btn color="success" @emit="_saveLink">保存</morning-btn>
                <morning-btn color="neutral-1" @emit="cancelEditLink">取消</morning-btn>
            </div>
        </div>
    </morning-dialog>

    <morning-dialog :ref="'mor-mindmap-edit-tag-' + uiid" width="400px" height="180px" show-type="center">
        <div slot="header">编辑标签</div>
        <div class="mor-mindmap-dialog-body">
            <morning-multiinput v-model="data.currentEditTagValue"></morning-multiinput>
            <div class="mor-mindmap-dialog-op">
                <morning-btn color="success" @emit="_saveTag">保存</morning-btn>
                <morning-btn color="neutral-1" @emit="cancelEditTag">取消</morning-btn>
            </div>
        </div>
    </morning-dialog>

    <morning-dialog :ref="'mor-mindmap-edit-note-' + uiid" width="400px" height="240px" show-type="center">
        <div slot="header">编辑备注</div>
        <div class="mor-mindmap-dialog-body">
            <morning-textarea v-model="data.currentEditNoteValue"></morning-textarea>
            <div class="mor-mindmap-dialog-op">
                <morning-btn color="success" @emit="_saveNote">保存</morning-btn>
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
                <morning-btn color="success" @emit="_saveMark">保存</morning-btn>
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
import GlobalEvent                  from 'Utils/GlobalEvent';
import graphBase                    from './base/graph';
import {
    editInput
}                                   from './base/editor';
import {
    MARKS,
    MARKS_GROUP_NAME,
}                                   from './const/marks';
import MixinMethodNode              from './methods/node';
import MixinMethodCollapse          from './methods/collapse';
import MixinZoom                    from './methods/zoom';
import MixinContextMenu             from './methods/contextMenu';
import MixinMethodGet               from './methods/get';
import MixinMethodLink              from './methods/link';
import MixinMethodNote              from './methods/note';
import MixinMethodTag               from './methods/tag';
import MixinMethodMark              from './methods/mark';
import MixinMethodClipboard         from './methods/clipboard';

export default {
    origin : 'Form',
    name : 'mindmap',
    mixins : [
        GlobalEvent,
        MixinMethodNode,
        MixinMethodCollapse,
        MixinZoom,
        MixinContextMenu,
        MixinMethodGet,
        MixinMethodLink,
        MixinMethodNote,
        MixinMethodTag,
        MixinMethodMark,
        MixinMethodClipboard,
    ],
    props : {
        layout : {
            type : String,
            default : 'LR',
            validator : (value => ['LR'].indexOf(value) !== -1)
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
            G6 : null,
            data : {
                $canvas : null,
                $editContent : null,
                $editContentInput : null,
                $nodeNote : null,
                $notePopover : null,
                $editLinkDialog : null,
                $editTagDialog : null,
                $editNoteDialog : null,
                $editMarkDialog : null,
                $importDialog : null,
                graph : null,
                minimap : null,
                dragging : false,
                keydownState : {
                    mod : false
                },
                globalId : 1,
                editting : false,
                editShapes : {},
                editNode : null,
                editContent : '',
                editZoom : 1,
                currentNodeNote : '',
                nodeNoteShow : false,
                nodeNoteZoom : 1,
                contextMenu : {
                    style : {}
                },
                mouseOnCanvas : false,
                dataMap : {},
                markGroups : {},
                currentEditLinkNodeIds : [],
                currentEditLinkValue : '',
                currentEditTagNodeIds : [],
                currentEditTagValue : [],
                currentEditNoteNodeIds : [],
                currentEditNoteValue : '',
                currentEditMarkNodeIds : [],
                currentEditMarkValue : {
                    priority : '0',
                    task : '0',
                    flag : '0',
                    star : '0',
                    status : '0'
                },
            }
        };

    },
    methods : {
        _initMarkGroups : function () {

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
        _initEl : function () {

            this.data.$canvas = this.$el.querySelector('.canvas');
            this.data.$editContent = this.$el.querySelector('.edit-content');
            this.data.$editContentInput = this.data.$editContent.querySelector('textarea');
            this.data.$nodeNote = this.$el.querySelector('.node-note');
            this.data.$notePopover = this.$refs[`mor-mindmap-note-${this.uiid}`];
            this.data.$editLinkDialog = this.$refs[`mor-mindmap-edit-link-${this.uiid}`];
            this.data.$editTagDialog = this.$refs[`mor-mindmap-edit-tag-${this.uiid}`];
            this.data.$editNoteDialog = this.$refs[`mor-mindmap-edit-note-${this.uiid}`];
            this.data.$editMarkDialog = this.$refs[`mor-mindmap-edit-mark-${this.uiid}`];
            this.data.$importDialog = this.$refs[`mor-mindmap-import-${this.uiid}`];

        },
        _clearSelectedNode : function (selectedState) {
                    
            let graph = this.data.graph;
            let autoPaint = graph.get('autoPaint');
            let nodes = graph.findAllByState('node', selectedState);
            let edges = graph.findAllByState('edge', selectedState);
            
            graph.setAutoPaint(false);
            nodes.forEach(node => graph.setItemState(node, selectedState, false));
            edges.forEach(edge => graph.setItemState(edge, selectedState, false));
            // this.selectedNodes = [];
            // this.selectedEdges = [];
            graph.paint();
            graph.setAutoPaint(autoPaint);

        },
        _sliderZoomChange : function () {

            let zoom = this.$refs['mor-mindmap-zoomslider'].get() / 100;

            this.zoom(zoom);

        },
        _editInput : function () {

            editInput(this);

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
    },
    created : function () {

        this._initMarkGroups();

    },
    mounted : function () {

        let data2 = {
            text : 'Modeling Methods',
            children : [
                {
                    text : 'ClassificationClassification',
                    children : [
                        {
                            text : `Different in`,
                            link : 'http://baidu.com/',
                            mark : ['priority:1', 'priority:2', 'star:red']
                        },
                        {
                            text : 'Linear discriminant analysis',
                            tag : ['标签1', '标签2']
                        },
                        {
                            text : 'Decision trees',
                            note : '123'
                        },
                        {
                            text : 'Decision trees',
                            link : 'http://baidu.com'
                        },
                        {
                            text : 'Decision trees',
                            note : '123',
                            link : 'http://baidu.com'
                        },
                        {
                            text : 'Decision trees'
                        },
                        {
                            text : 'Probabilistic neural network'
                        },
                        {
                            text : 'Support vector machine'
                        }
                    ]
                },
                {
                    text : 'Consensus',
                    children : [
                        {
                            text : 'Models diversity',
                            children : [
                                {
                                    text : 'Different initializations',
                                    link : 'http://baidu.com/'
                                },
                                {
                                    text : 'Different parameter choices'
                                },
                                {
                                    text : 'Different architectures'
                                },
                                {
                                    text : 'Different modeling methods'
                                },
                                {
                                    text : 'Different training sets'
                                },
                                {
                                    text : 'Different feature sets'
                                }
                            ]
                        },
                        {
                            text : 'Methods',
                            children : [
                                {
                                    text : 'Classifier selection'
                                },
                                {
                                    text : 'Classifier fusion'
                                }
                            ]
                        },
                        {
                            text : 'Common',
                            children : [
                                {
                                    text : 'Bagging'
                                },
                                {
                                    text : 'Boosting'
                                },
                                {
                                    text : 'AdaBoost'
                                }
                            ]
                        }
                    ]
                },
                {
                    text : 'Regression',
                    children : [
                        {
                            text : 'Multiple linear regression'
                        },
                        {
                            text : 'Partial least squares'
                        },
                        {
                            text : 'Multi-layer feedforward neural network'
                        },
                        {
                            text : 'General regression neural network'
                        },
                        {
                            text : 'Support vector regression'
                        }
                    ]
                }
            ]
        };

        // let data2 = {
        //     text : 'Modeling Methods',
        //     children : [
        //         {
        //             text : 'ClassificationClassification',
        //             children : [
        //                 {
        //                     text : 'Decision trees',
        //                     link : 'http://baidu.com/',
        //                     note : '123',
        //                     mark : ['priority:1', 'priority:2', 'star:red', 'flag:darkblue'],
        //                     tag : ['标签1', '标签2']
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
        //             text : 'Methods',
        //             children : [
        //                 {
        //                     text : 'Classifier selection'
        //                 },
        //                 {
        //                     text : 'Classifier fusion'
        //                 }
        //             ]
        //         },
        //     ]
        // };

        this._initEl();
        graphBase.register(this);
        graphBase.create(this);
        graphBase.bindEvent(this);
        graphBase.readData(this, data2);

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
