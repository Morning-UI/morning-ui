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
            <!-- <ui-btn size="s" color="white" @emit="(data.contextMenu.nodeId);_hideContextMenu();">删除节点</ui-btn> -->
            <!-- <morning-btn size="s" color="white" @emit="editLink(data.contextMenu.nodeId);_hideContextMenu();">设置链接</morning-btn>
            <morning-btn size="s" color="white" @emit="editNote(data.contextMenu.nodeId);_hideContextMenu();">设置备注</morning-btn>
            <morning-btn size="s" color="white" @emit="editMark(data.contextMenu.nodeId);_hideContextMenu();">设置标记</morning-btn>
            <morning-btn size="s" color="white" @emit="exportTo('xmind', data.contextMenu.nodeId);_hideContextMenu();">导出节点</morning-btn>
            <morning-btn size="s" color="white" @emit="showImportFile(data.contextMenu.nodeId, 'replace');_hideContextMenu();">导入数据并替换</morning-btn>
            <morning-btn size="s" color="white" @emit="showImportFile(data.contextMenu.nodeId, 'append');_hideContextMenu();">导入数据在结尾插入</morning-btn>
            <morning-btn size="s" color="white" @emit="showImportFile(data.contextMenu.nodeId, 'prepend');_hideContextMenu();">导入数据在开头插入</morning-btn>
            <morning-btn size="s" color="danger" class="plain" @emit="deleteNode(data.contextMenu.nodeId);_hideContextMenu();">删除节点</morning-btn> -->
        </div>
    </div>

    <morning-dialog :ref="'mor-mindmap-edit-link-' + uiid" width="380px" height="240px" show-type="center">
        <div slot="header">编辑链接</div>
        <div class="mor-mindmap-dialog-body">
            <morning-textarea v-model="data.currentEditLinkValue"></morning-textarea>
            <div class="mor-mindmap-dialog-op">
                <morning-btn color="success" @emit="link(data.currentEditLinkNodeId, data.currentEditLinkValue);cancelEditLink();">保存</morning-btn>
                <morning-btn color="neutral-1" @emit="cancelEditLink">取消</morning-btn>
            </div>
        </div>
    </morning-dialog>

    <morning-dialog :ref="'mor-mindmap-edit-note-' + uiid" width="380px" height="240px" show-type="center">
        <div slot="header">编辑备注</div>
        <div class="mor-mindmap-dialog-body">
            <morning-textarea v-model="data.currentEditNoteValue"></morning-textarea>
            <div class="mor-mindmap-dialog-op">
                <morning-btn color="success" @emit="note(data.currentEditNoteNodeId, data.currentEditNoteValue);cancelEditNote();">保存</morning-btn>
                <morning-btn color="neutral-1" @emit="cancelEditNote">取消</morning-btn>
            </div>
        </div>
    </morning-dialog>

    <morning-dialog :ref="'mor-mindmap-edit-mark-' + uiid" width="540px" height="490px" show-type="center">
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
                <morning-btn color="success" @emit="_saveMarks(data.currentEditMarkNodeId, data.currentEditMarkValue);cancelEditMark();">保存</morning-btn>
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
import sortBy                       from 'lodash.sortby';
import throttle                     from 'lodash.throttle';
import map                          from 'lodash.map';
import JSZip                        from 'jszip';
import arrayUniq                    from 'array-uniq';
import copy                         from 'clipboard-copy';

// eslint-disable-next-line no-unused-vars
import xmindSdk                     from 'xmind-sdk/dist/xmind-sdk.bundle.js';

const PolylineUtil = require('@antv/g6/lib/shape/edges/polyline-util');

/* eslint-disable no-unused-vars, no-magic-numbers */
const boxShapeIndex = 0;
const outlineShapeIndex = 1;
const conShapeIndex = 2;
const textShapeIndex = 3;
const placeholderShapeIndex = 4;
const bottomlineShapeIndex = 5;
const linkConShapeIndex = 6;
const linkShapeIndex = 7;
const noteConShapeIndex = 8;
const noteShapeIndex = 9;
const markConGroupIndex = 10;

const outlinePadding = 3;
const annexPadding = 4;
const markConPaddingRight = 10;
const dragRefreshInterval = 160;

const lineColor = 'rgba(51, 51, 51, 1)';
const lineWidth = 2;
const placeholderColor = 'rgba(147, 233, 245, 1)';

const annexList = {
    link : {
        index : linkConShapeIndex,
        state : 'link-hover'
    },
    note : {
        index : noteConShapeIndex,
        state : 'note-hover'
    }
};

const mindNodeStyle = {
    bgColor : '#e8e8e8',
    fontColor : 'rgba(0, 0, 0, 1)',
    fontSize : 16,
    fontWeight : 400,
    fontStyle : 'normal',
    borderWidth : 1,
    borderColor : lineColor,
    outlineColor : '#8cdcf5',
    outlineActiveColor : '#27befc',
    outlineRadius : 6,
    _shapePresets : {
        'round-rect' : {
            radius : 6
        },
        rect : {
            radius : 0
        },
        'half-round-rect' : {
            // 动态计算
            computedRadius : 0.5,
            radius : 0
        },
        line : {
            bgColor : 'transparent',
            borderColor : 'transparent',
            borderWidth : 0,
            bottomlineBg : lineColor,
            bottomlineHeight : 2
        }
    }
};
const rootMindNodeStyle = {
    bgColor : 'rgba(35, 123, 191, 1)',
    fontColor : 'rgba(255, 255, 255, 1)',
    fontSize : 24,
    fontWeight : 400,
    fontStyle : 'normal',
    borderWidth : 0,
    borderColor : lineColor,
    outlineColor : '#8cdcf5',
    outlineActiveColor : '#27befc',
    outlineRadius : 6,
    _shapePresets : {
        'round-rect' : {
            radius : 6
        },
        rect : {
            radius : 0
        },
        'half-round-rect' : {
            // 动态计算
            computedRadius : 0.5,
            radius : 0
        },
        line : {
            fontColor : 'rgba(0, 0, 0, 1)',
            bgColor : 'transparent',
            borderColor : 'transparent',
            borderWidth : 0,
            bottomlineBg : lineColor,
            bottomlineHeight : 2
        }
    }
};
const placeholderNodeStyle = {
    bgColor : placeholderColor,
    fontColor : 'rgba(255, 255, 255, 0)',
    fontSize : 24,
    borderWidth : 0,
    borderColor : lineColor,
    outlineColor : '#8cdcf5',
    outlineActiveColor : '#27befc',
    radius : 6
};
const mindEdgeStyle = {
    borderWidth : lineWidth,
    borderColor : lineColor,
    radius : 10
};
const placeholderEdgeStyle = {
    borderWidth : lineWidth + 1,
    borderColor : placeholderColor,
    radius : 10
};
const delegateShapeStyle = {
    bgColor : 'rgba(75, 201, 218, 0.3)',
    borderColor : 'rgba(75, 201, 218, 1)',
    borderWidth : 2
};
const marks = {
    'priority:1' : {
        iconfont : 'e641',
        iconcls : 'mo-icon-num-1-cf',
        color : 'rgb(230, 69, 70)',
        markMethod : 'priority',
        markValue : '1'
    },
    'priority:2' : {
        iconfont : 'e644',
        iconcls : 'mo-icon-num-2-cf',
        color : 'rgb(255, 179, 50)',
        markMethod : 'priority',
        markValue : '2'
    },
    'priority:3' : {
        iconfont : 'e647',
        iconcls : 'mo-icon-num-3-cf',
        color : 'rgb(79, 109, 250)',
        markMethod : 'priority',
        markValue : '3'
    },
    'priority:4' : {
        iconfont : 'e645',
        iconcls : 'mo-icon-num-4-cf',
        color : 'rgb(127, 172, 178)',
        markMethod : 'priority',
        markValue : '4'
    },
    'priority:5' : {
        iconfont : 'e64b',
        iconcls : 'mo-icon-num-5-cf',
        color : 'rgb(127, 172, 178)',
        markMethod : 'priority',
        markValue : '5'
    },
    'priority:6' : {
        iconfont : 'e643',
        iconcls : 'mo-icon-num-6-cf',
        color : 'rgb(127, 172, 178)',
        markMethod : 'priority',
        markValue : '6'
    },
    'priority:7' : {
        iconfont : 'e648',
        iconcls : 'mo-icon-num-7-cf',
        color : 'rgb(127, 172, 178)',
        markMethod : 'priority',
        markValue : '7'
    },
    'task:start' : {
        iconfont : 'e649',
        iconcls : 'mo-icon-progress-start-cf',
        color : 'rgb(54, 203, 102)',
        markMethod : 'task',
        markValue : 'start'
    },
    'task:18' : {
        iconfont : 'e677',
        iconcls : 'mo-icon-progress-1-8-cf',
        color : 'rgb(54, 203, 102)',
        markMethod : 'task',
        markValue : 'oct'
    },
    'task:14' : {
        iconfont : 'e676',
        iconcls : 'mo-icon-progress-1-4-cf',
        color : 'rgb(54, 203, 102)',
        markMethod : 'task',
        markValue : 'quarter'
    },
    'task:38' : {
        iconfont : 'e679',
        iconcls : 'mo-icon-progress-3-8-cf',
        color : 'rgb(54, 203, 102)',
        markMethod : 'task',
        markValue : '3oct'
    },
    'task:12' : {
        iconfont : 'e67d',
        iconcls : 'mo-icon-progress-1-2-cf',
        color : 'rgb(54, 203, 102)',
        markMethod : 'task',
        markValue : 'half'
    },
    'task:58' : {
        iconfont : 'e67e',
        iconcls : 'mo-icon-progress-5-8-cf',
        color : 'rgb(54, 203, 102)',
        markMethod : 'task',
        markValue : '5oct'
    },
    'task:34' : {
        iconfont : 'e678',
        iconcls : 'mo-icon-progress-3-4-cf',
        color : 'rgb(54, 203, 102)',
        markMethod : 'task',
        markValue : '3quar'
    },
    'task:78' : {
        iconfont : 'e67f',
        iconcls : 'mo-icon-progress-7-8-cf',
        color : 'rgb(54, 203, 102)',
        markMethod : 'task',
        markValue : '7oct'
    },
    'task:done' : {
        iconfont : 'e621',
        iconcls : 'mo-icon-progress-done-cf',
        color : 'rgb(54, 203, 102)',
        markMethod : 'task',
        markValue : 'done'
    },
    'flag:red' : {
        iconfont : 'e8cd',
        iconcls : 'mo-icon-flag-c',
        color : 'rgb(230, 69, 70)',
        markMethod : 'flag',
        markValue : 'red'
    },
    'flag:yellow' : {
        iconfont : 'e8cd',
        iconcls : 'mo-icon-flag-c',
        color : 'rgb(255, 179, 50)',
        markMethod : 'flag',
        markValue : 'orange'
    },
    'flag:darkblue' : {
        iconfont : 'e8cd',
        iconcls : 'mo-icon-flag-c',
        color : 'rgb(79, 109, 250)',
        markMethod : 'flag',
        markValue : 'dark-blue'
    },
    'flag:purple' : {
        iconfont : 'e8cd',
        iconcls : 'mo-icon-flag-c',
        color : 'rgb(189, 60, 174)',
        markMethod : 'flag',
        markValue : 'purple'
    },
    'flag:green' : {
        iconfont : 'e8cd',
        iconcls : 'mo-icon-flag-c',
        color : 'rgb(54, 203, 102)',
        markMethod : 'flag',
        markValue : 'green'
    },
    'flag:skyblue' : {
        iconfont : 'e8cd',
        iconcls : 'mo-icon-flag-c',
        color : 'rgb(0, 188, 228)',
        markMethod : 'flag',
        markValue : 'blue'
    },
    'flag:gray' : {
        iconfont : 'e8cd',
        iconcls : 'mo-icon-flag-c',
        color : 'rgb(127, 172, 178)',
        markMethod : 'flag',
        markValue : 'gray'
    },
    'star:red' : {
        iconfont : 'e85f',
        iconcls : 'mo-icon-star-cf',
        color : 'rgb(230, 69, 70)',
        markMethod : 'star',
        markValue : 'red'
    },
    'star:yellow' : {
        iconfont : 'e85f',
        iconcls : 'mo-icon-star-cf',
        color : 'rgb(255, 179, 50)',
        markMethod : 'star',
        markValue : 'orange'
    },
    'star:darkblue' : {
        iconfont : 'e85f',
        iconcls : 'mo-icon-star-cf',
        color : 'rgb(79, 109, 250)',
        markMethod : 'star',
        markValue : 'dark-blue'
    },
    'star:purple' : {
        iconfont : 'e85f',
        iconcls : 'mo-icon-star-cf',
        color : 'rgb(189, 60, 174)',
        markMethod : 'star',
        markValue : 'purple'
    },
    'star:green' : {
        iconfont : 'e85f',
        iconcls : 'mo-icon-star-cf',
        color : 'rgb(54, 203, 102)',
        markMethod : 'star',
        markValue : 'green'
    },
    'star:skyblue' : {
        iconfont : 'e85f',
        iconcls : 'mo-icon-star-cf',
        color : 'rgb(0, 188, 228)',
        markMethod : 'star',
        markValue : 'blue'
    },
    'star:gray' : {
        iconfont : 'e85f',
        iconcls : 'mo-icon-star-cf',
        color : 'rgb(127, 172, 178)',
        markMethod : 'star',
        markValue : 'gray'
    }
};
const markGourpsName = {
    priority : '优先级',
    task : '任务',
    flag : '旗帜',
    star : '星星'
};
/* eslint-enable no-unused-vars, no-magic-numbers */
const defaultWidth = 760;
const defaultHeight = 500;

// <i class="mo-icon mo-icon-error-cf cleanicon" v-show="(conf.state !== 'readonly' && conf.state !== 'disabled') && conf.insideClearable &&  data.value" @click.stop="set(undefined)"></i>
export default {
    origin : 'Form',
    name : 'mindmap',
    props : {
        layout : {
            type : String,
            default : 'LR',
            validator : (value => ['LR', 'RL'].indexOf(value) !== -1)
        },
        width : {
            type : Number,
            default : defaultWidth
        },
        height : {
            type : Number,
            default : defaultHeight
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
            data : {
                markGroups : {},
                graph : null,
                $canvas : null,
                $editContent : null,
                $editContentInput : null,
                $nodeNote : null,
                $notePopover : null,
                $editLinkDialog : null,
                $editNoteDialog : null,
                $editMarkDialog : null,
                $importDialog : null,
                globalId : 1,
                editting : false,
                editGroupShapes : {},
                editNode : null,
                editContent : '',
                editZoom : 1,
                dragOptions : {},
                dragTarget : {
                    originNodeStyle : {},
                    saveModel : {}
                },
                dragging : false,
                dragHolderParentChilren : null,
                dragHolderIndexOfParentChildren : null,
                dataMap : {},
                currentNodeNote : '',
                nodeNoteZoom : 1,
                nodeNoteShow : false,
                contextMenu : {
                    style : {}
                },
                currentEditLinkNodeId : 0,
                currentEditNoteNodeId : 0,
                currentEditMarkNodeId : 0,
                currentEditLinkValue : '',
                currentEditNoteValue : '',
                currentEditMarkValue : {
                    priority : '0',
                    task : '0',
                    flag : '0',
                    star : '0'
                },
                currentImportNode : undefined,
                currentImportMode : 'replace'
            }
        };

    },
    methods : {
        _getNodeStyles : function (nodeStyle, model) {

            if (model.shapeStyle === undefined) {

                if (model.depth < 2) {

                    model.shapeStyle = 'round-rect';

                } else {

                    model.shapeStyle = 'line';

                }

            }

            if (model.shapeStyle === 'line') {
                
                model.anchorPoints = [[0, 1], [1, 1]];

            }

            return G6.Util.deepMix({}, nodeStyle, nodeStyle._shapePresets[model.shapeStyle], model.style);

        },
        _clearSelectedNode : function (selectedState) {
                    
            let graph = this.data.graph;
            let autoPaint = graph.get('autoPaint');
            let nodes = graph.findAllByState('node', selectedState);
            let edges = graph.findAllByState('edge', selectedState);
            
            graph.setAutoPaint(false);
            nodes.forEach(node => graph.setItemState(node, selectedState, false));
            edges.forEach(edge => graph.setItemState(edge, selectedState, false));
            this.selectedNodes = [];
            // this.selectedEdges = [];
            graph.paint();
            graph.setAutoPaint(autoPaint);

        },
        _getGroupShapes : function (item) {

            let box = item.getKeyShape();
            let group = box.getParent();
            let con = group.getChildByIndex(conShapeIndex);
            let outline = group.getChildByIndex(outlineShapeIndex);
            let text = group.getChildByIndex(textShapeIndex);
            let placeholder = group.getChildByIndex(placeholderShapeIndex);
            let bottomline = group.getChildByIndex(bottomlineShapeIndex);
            let link = group.getChildByIndex(linkShapeIndex);
            let linkCon = group.getChildByIndex(linkConShapeIndex);
            let note = group.getChildByIndex(noteShapeIndex);
            let noteCon = group.getChildByIndex(noteConShapeIndex);
            let markConGroup = group.getChildByIndex(markConGroupIndex);

            return {
                con,
                box,
                text,
                outline,
                placeholder,
                bottomline,
                link,
                linkCon,
                note,
                noteCon,
                markConGroup
            };

        },
        _refreshNodeEdges : function (edges) {

            for (let edge of edges) {

                edge.refresh();

            }

        },
        _refreshNodeNotePosition : function (node) {

            let groupShapes = this._getGroupShapes(node);
            let noteConBbox = groupShapes.noteCon.getBBox();
            let nodeBbox = node.getBBox();
            let zoom = this.data.graph.getZoom();
            let {
                x : nodeX,
                y : nodeY
            } = this.data.graph.getCanvasByPoint(nodeBbox.x, nodeBbox.y);

            this.data.$nodeNote.style.display = 'block';
            this.data.$nodeNote.style.left = `${nodeX + (noteConBbox.x * zoom)}px`;
            this.data.$nodeNote.style.top = `${nodeY + noteConBbox.y}px`;
            this.data.$nodeNote.style.width = `${noteConBbox.width}px`;
            this.data.$nodeNote.style.height = `${noteConBbox.height}px`;
            this.data.nodeNoteZoom = zoom;

        },
        _refreshEditorPosition : function (node) {

            if (this.data.editNode) {
                
                let edges = this.data.editNode.getEdges();

                this.data.editNode.refresh();
                this._refreshNodeEdges(edges);

            }
    
            let groupShapes = this._getGroupShapes(node);
            let textAttr = groupShapes.text.attr();
            let nodeBbox = node.getBBox();
            let textBbox = groupShapes.text.getBBox();
            let conBbox = groupShapes.con.getBBox();
            let zoom = this.data.graph.getZoom();
            let {
                x : nodeX,
                y : nodeY
            } = this.data.graph.getCanvasByPoint(nodeBbox.x, nodeBbox.y);

            // when text is empty use placeholder
            if (textBbox.width === 0) {

                textBbox = groupShapes.placeholder.getBBox();

            }

            const padding = 0;

            let inputX = `${textBbox.x + 1 - padding}px`;
            let inputY = `${textBbox.y - padding}px`;

            this.data.$editContent.style.display = 'block';
            this.data.$editContent.style.left = `${nodeX}px`;
            this.data.$editContent.style.top = `${nodeY}px`;
            this.data.$editContent.style.width = `${conBbox.width}px`;
            this.data.$editContent.style.height = `${conBbox.height}px`;
            this.data.$editContentInput.style.width = `${textBbox.width + (padding * 2)}px`;
            this.data.$editContentInput.style.height = `${textBbox.height + (padding * 2)}px`;
            this.data.$editContentInput.style.padding = `${padding}px`;
            this.data.$editContentInput.style.left = inputX;
            this.data.$editContentInput.style.top = inputY;
            this.data.$editContentInput.style.color = textAttr.fill;
            this.data.$editContentInput.style.fontSize = `${textAttr.fontSize}px`;
            this.data.$editContentInput.style.textAlign = textAttr.textAlign;
            this.data.$editContentInput.style.fontWeight = textAttr.fontWeight;
            this.data.$editContentInput.style.fontStyle = textAttr.fontStyle;
            this.data.$editContentInput.style.fontFamily = textAttr.fontFamily;
            this.data.editContent = textAttr.text;
            this.data.editZoom = zoom;

        },
        _cancelEdit : function () {

            if (!this.data.editting) {

                return;

            }

            let groupShapes = this._getGroupShapes(this.data.editNode);

            groupShapes.text.attr({
                opacity : 1
            });
            this.data.graph.paint();
            this.data.$editContent.style.display = 'none';
            this.data.editting = false;
            this.data.editContent = '';
            this.data.editGroupShapes = {};
            this.data.editZoom = 1;
            this.data.editNode.setState('editing', false);
            this.data.editNode = null;
            this.data.graph.refreshLayout();

        },
        _manualPaint : function (paintCallback) {
    
            let autoPaint = this.data.graph.get('autoPaint');

            paintCallback();

            this.data.graph.paint();
            this.data.graph.setAutoPaint(autoPaint);

        },
        _editInput : function () {

            let groupShapes = this.data.editGroupShapes;

            this._manualPaint(() => {

                groupShapes.text.attr({
                    text : this.data.editContent
                });

                this.data.editNode.update({
                    text : this.data.editContent
                });

                // 临时修复问题：https://github.com/antvis/g/pull/121
                if (this.data.editContent.indexOf('\n') === -1) {

                    groupShapes.text._attrs.lineCount = 1;

                }

                this.data.graph.paint();
                this._refreshMindNode(groupShapes, this.data.editNode.getModel());
                this._refreshEditorPosition(this.data.editNode);

            });

        },
        _fillChildBbox : function (bbox, node) {

            let model = node.getModel();

            bbox.conMaxX = bbox.maxX;
            bbox.conMinX = bbox.minX;
            bbox.conMaxY = bbox.maxY;
            bbox.conMinY = bbox.minY;

            if (!model.children || model.children.length === 0) {

                return bbox;

            }
            
            for (let child of model.children) {

                let childNode = this.data.graph.findById(child.id);
                let childBbox = childNode.getBBox();

                if (childBbox.maxX > bbox.conMaxX) {

                    bbox.conMaxX = childBbox.maxX;

                }

                if (childBbox.minX < bbox.conMinX) {

                    bbox.conMinX = childBbox.minX;

                }

                if (childBbox.maxY > bbox.conMaxY) {

                    bbox.conMaxY = childBbox.maxY;

                }

                if (childBbox.minY < bbox.conMinY) {

                    bbox.conMinY = childBbox.minY;

                }

            }

            return bbox;

        },
        _removeOldDragPlaceholder : function () {

            if (this.data.dragHolderIndexOfParentChildren > -1 && this.data.dragHolderParentChilren) {

                this.data.dragHolderParentChilren.splice(this.data.dragHolderIndexOfParentChildren, 1);

            }

            this.data.dragHolderParentChilren = null;
            this.data.dragHolderIndexOfParentChildren = null;
            this.data.graph.changeData();
            // this.data.graph.refreshLayout();

        },
        _refreshDragHolder : throttle(function (delegateShape, targetNode) {

            // if (!delegateShape) {

            //     return;

            // }

            let nodes = this.data.graph.getNodes();
            let delegateBbox = delegateShape.getBBox();
            let distance;
            let distanceNodes = [];
            let matchOptions = {};

            delegateBbox.centerX = delegateBbox.x + (delegateBbox.width / 2);
            delegateBbox.centerY = delegateBbox.y + (delegateBbox.height / 2);

            // 按距离对节点排序
            distanceNodes = sortBy(nodes, node => {

                let nodeBbox = node.getBBox();

                distance = Math.sqrt(
                    Math.pow(Math.abs(nodeBbox.centerX - delegateBbox.centerX), 2) +
                    Math.pow(Math.abs(nodeBbox.centerY - delegateBbox.centerY), 2)
                );

                return distance;

            });

            // 选择最匹配的元素
            // Child[n] : 作为子元素，centerX > Parent.centerX
            for (let node of distanceNodes) {

                if (node === targetNode ||
                    node.getModel()._isHolder ||
                    node.getModel().isDragging === true) {

                    // eslint-disable-next-line no-continue
                    continue;

                }

                let nodeBbox = node.getBBox();

                this._fillChildBbox(nodeBbox, node);

                // 如果是root节点无视区域
                if (
                    (
                        (this.conf.layout === 'LR' && nodeBbox.centerX < delegateBbox.x) ||
                        (this.conf.layout === 'RL' && nodeBbox.centerX > delegateBbox.x) ||
                        node.getModel().isRoot
                    ) &&
                    (
                        (nodeBbox.conMaxY > delegateBbox.centerY && delegateBbox.centerY > nodeBbox.conMinY) ||
                        node.getModel().isRoot
                        // (nodeBbox.conMaxY > delegateBbox.maxY && delegateBbox.maxY > nodeBbox.conMinY)
                    )
                ) {

                    matchOptions.node = node;
                    matchOptions.mode = 'childN';
                    matchOptions.index = 0;
                    matchOptions.hasPlaceholder = false;

                    let children = node.getModel().children;

                    for (let index in children) {
                        
                        let childData = children[index];
                        let childBbox = this.data.graph.findById(childData.id).getBBox();

                        if (!childData._isHolder && delegateBbox.centerY > childBbox.centerY) {

                            matchOptions.index = +index + 1;

                        }

                        if (childData._isHolder) {

                            matchOptions.hasPlaceholder = index;

                        }

                    }
                    
                    break;

                }

            }

            // 清除上一个placeholder
            this._removeOldDragPlaceholder();

            if (matchOptions.hasPlaceholder < matchOptions.index) {

                matchOptions.index--;

            }

            if (matchOptions.node) {

                // 创建新的placeholder
                let model = matchOptions.node.getModel();

                if (model.children === undefined) {

                    model.children = [];

                }

                this.data.dragHolderIndexOfParentChildren = matchOptions.index;
                model.children.splice(matchOptions.index, 0, {
                    id : this.data.globalId++,
                    shape : 'mor-placeholder-node',
                    // eslint-disable-next-line no-magic-numbers
                    anchorPoints : [[0, 0.5], [1, 0.5]],
                    _isHolder : true
                });
                this.data.dragHolderParentChilren = model.children;
                this.data.graph.paint();
                this.data.graph.changeData();
                this.data.graph.refreshLayout();
                this.data.graph.findById(this.data.globalId - 1).getInEdges()[0].update({
                    shape : 'mor-placeholder-edge'
                });

            }

        }, dragRefreshInterval),
        _toggleAllChildren : function (node, type) {

            let outEdges = node.getOutEdges();

            for (let edge of outEdges) {

                let child = edge.getTarget();
                let model = child.getModel();
                
                edge[type]();
                child[type]();

                if (type === 'hide') {

                    model.isDragging = true;

                } else {

                    model.isDragging = false;

                }

                if (child.getOutEdges().length > 0) {

                    this._toggleAllChildren(child, type);

                }

            }

        },
        _insertNode : function (nodeData, newParentChilren, insertIndex) {

            newParentChilren.splice(insertIndex, 0, nodeData);

        },
        _removeNode : function (node) {

            let parentNodeDataChildren = node.getInEdges()[0].getSource().getModel().children;
            let nodeModel = node.getModel();
            let index = parentNodeDataChildren.indexOf(nodeModel);

            if (
                parentNodeDataChildren === this.data.dragHolderParentChilren &&
                index < this.data.dragHolderIndexOfParentChildren
            ) {

                this.data.dragHolderIndexOfParentChildren--;

            }

            parentNodeDataChildren.splice(index, 1);

        },
        _toggleNodeBox : function (node, type = 'show') {
        
            // 隐藏边
            node.getInEdges()[0][type]();

            // 隐藏文本和主容器
            node
                .get('group')
                .getChildByIndex(textShapeIndex)[
                    type
                ]();
            node
                .get('group')
                .getChildByIndex(conShapeIndex)[
                    type
                ]();
            node
                .get('group')
                .getChildByIndex(bottomlineShapeIndex)[
                    type
                ]();
            node
                .get('group')
                .getChildByIndex(linkConShapeIndex)[
                    type
                ]();
            node
                .get('group')
                .getChildByIndex(linkShapeIndex)[
                    type
                ]();
            node
                .get('group')
                .getChildByIndex(noteConShapeIndex)[
                    type
                ]();
            node
                .get('group')
                .getChildByIndex(noteShapeIndex)[
                    type
                ]();
            node
                .get('group')
                .getChildByIndex(markConGroupIndex)[
                    type
                ]();
            
            // 隐藏所有子项
            this._toggleAllChildren(node, type);

        },
        _udpateOneDragTarget : function (index, dragTarget, dragging, dragHolderIndexOfParentChildren) {

            let node = dragTarget.nodes[index];

            if (dragging && !dragTarget.hidden) {

                dragTarget.originNodeStyle[index] = {
                    height : node.getBBox().height
                };
                dragTarget.saveModel[index] = node.getModel();
                
                node.setState('dragging', true);
                node.update({
                    isDragging : true,
                    style : G6.Util.deepMix({}, {
                        fillOpacity : 0
                    }, node.getModel().style)
                });

                this._toggleNodeBox(node, 'hide');

            } else if (!dragging && dragTarget.hidden) {

                // let oldParentChilren = node.getInEdges()[0].getSource().getModel().children;
                let nodeData = dragTarget.saveModel[index];

                node.setState('dragging', false);
                node.update({
                    isDragging : false,
                    style : G6.Util.deepMix({}, {
                        fillOpacity : 1
                    }, nodeData.style)
                });

                this._toggleNodeBox(node, 'show');

                // 移动节点
                this._insertNode(nodeData, this.data.dragHolderParentChilren, dragHolderIndexOfParentChildren);

            }

        },
        _updateDragTarget : function (dragging = false) {

            let dragTarget = this.data.dragTarget;
            let targetNodes = dragTarget.nodes;
            let first = true;

            if (!dragging && dragTarget.hidden) {

                let dragNodes = this.data.graph.findAllByState('node', 'dragging');
                
                for (let node of dragNodes) {

                    this._removeNode(node);

                }

            }

            for (let index in targetNodes) {

                if (!first) {

                    this._udpateOneDragTarget(index, this.data.dragTarget, dragging, this.data.dragHolderIndexOfParentChildren + 1);

                } else {

                    this._udpateOneDragTarget(index, this.data.dragTarget, dragging, this.data.dragHolderIndexOfParentChildren);

                }

                first = false;

            }

            if (dragging && !dragTarget.hidden) {

                dragTarget.hidden = true;
                this.data.graph.refreshLayout();

            } else if (!dragging && dragTarget.hidden) {

                dragTarget.hidden = false;

                this.data.dragHolderIndexOfParentChildren = this.data.dragHolderIndexOfParentChildren + targetNodes.length;
                this.data.graph.paint();
                this.data.graph.changeData();
                this.data.graph.refreshLayout();

            }

        },
        /* eslint-disable no-magic-numbers */
        _refreshMindNode : function (groupShapes, model) {

            let {
                box,
                outline,
                con,
                text,
                placeholder,
                bottomline,
                linkCon,
                link,
                noteCon,
                note,
                markConGroup
            } = groupShapes;
            let textBbox = text.getBBox();
            let conPaddingX = box.get('conPaddingX');
            let conPaddingY = box.get('conPaddingY');

            // when text is empty use placeholder
            if (textBbox.width === 0) {
                
                textBbox = groupShapes.placeholder.getBBox();

            }

            let conWidth = textBbox.width + (conPaddingX * 2);
            let conHeight = textBbox.height + (conPaddingY * 2);
            let linkConBbox = linkCon.getBBox();
            let noteConBbox = noteCon.getBBox();
            let markConGroupBbox = markConGroup.getBBox();

            if (model.link) {

                conWidth += linkConBbox.width;

            }

            if (model.note) {

                conWidth += noteConBbox.width;

            }

            if (model.note || model.link) {

                conWidth += conPaddingX / 2;

            }

            if (model._mark && model._mark.length > 0) {

                conWidth += markConGroupBbox.width;
                // textX = markConGroupBbox.width;

            }

            con.attr({
                width : conWidth,
                height : conHeight
            });

            let conBbox = con.getBBox();
            
            outline.attr({
                width : conBbox.width + (outlinePadding * 2),
                height : conBbox.height + (outlinePadding * 2)
            });

            box.attr({
                width : conBbox.width,
                height : conBbox.height
            });

            placeholder.attr({
                y : (textBbox.height / 2) + conPaddingY
            });

            text.attr({
                y : (textBbox.height / 2) + conPaddingY
            });

            let boxBbox = box.getBBox();

            bottomline.attr({
                x : boxBbox.minX - 1,
                y : boxBbox.maxY - 0.5,
                width : boxBbox.width + 2
            });

            // for link annex
            if (model.link) {
                
                let linkBbox = link.getBBox();

                linkConBbox = linkCon.getBBox();
                linkCon.attr({
                    x : conBbox.width - linkConBbox.width - conPaddingX - annexPadding,
                    y : conPaddingY - annexPadding
                });
                linkConBbox = linkCon.getBBox();
                link.attr({
                    x : linkConBbox.minX + (linkBbox.width / 2) + annexPadding + 1,
                    y : linkConBbox.minY + (linkBbox.height / 2) + annexPadding + 1
                });

            }

            // for note annex
            if (model.note) {

                let noteBbox = note.getBBox();

                noteConBbox = noteCon.getBBox();
                noteCon.attr({
                    x : conBbox.width - noteConBbox.width - conPaddingX - annexPadding,
                    y : conPaddingY - annexPadding
                });
                noteConBbox = noteCon.getBBox();
                note.attr({
                    x : noteConBbox.minX + (noteBbox.width / 2) + annexPadding + 1,
                    y : noteConBbox.minY + (noteBbox.height / 2) + annexPadding + 1
                });
            
            }

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

        },
        _hideContextMenu : function () {
            
            this.data.contextMenu = {
                style : {
                    display : 'none'
                }
            };

        },
        /* eslint-enable no-magic-numbers */
        _inNodeShape : function (evt, shape) {

            let zoom = this.data.graph.getZoom();
            let itemBbox = evt.item.getBBox();
            let itemCanvasXY = this.data.graph.getCanvasByPoint(itemBbox.x, itemBbox.y);
            let x = (evt.canvasX - itemCanvasXY.x) / zoom;
            let y = (evt.canvasY - itemCanvasXY.y) / zoom;
            let shapeBbox = shape.getBBox();

            if (x > shapeBbox.minX &&
                x < shapeBbox.maxX &&
                y > shapeBbox.minY &&
                y < shapeBbox.maxY) {

                return true;

            }

            return false;

        },
        _inAnnex : function (evt, shapeIndex) {

            return this._inNodeShape(evt, evt.item.get('group').getChildByIndex(shapeIndex));

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
        _onMarkHover : function () {

            this.data.graph.on('node:mousemove', evt => {

                let model = evt.item.getModel();
                let hover = false;

                if (!model.isMindNode) {

                    return;

                }

                if (model._mark && model._mark.length > 0) {

                    for (let index in model._mark) {

                        let markConGroup = evt.item.get('group').getChildByIndex(markConGroupIndex);
                        let markCon = markConGroup.getChildByIndex(index * 2);

                        if (!hover && this._inNodeShape(evt, markCon)) {

                            this.data.graph.setItemState(evt.item, `mark-${index}-hover`, true);
                            hover = true;

                        } else {

                            this.data.graph.setItemState(evt.item, `mark-${index}-hover`, false);

                        }

                    }

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

                    if (this._inAnnex(evt, annexList.link.index)) {

                        this.data.graph.setItemState(evt.item, annexList.link.state, true);

                    } else {

                        this.data.graph.setItemState(evt.item, annexList.link.state, false);

                    }

                }

                if (model.note) {

                    if (this._inAnnex(evt, annexList.note.index)) {

                        this.data.graph.setItemState(evt.item, annexList.note.state, true);

                    } else {

                        this.data.graph.setItemState(evt.item, annexList.note.state, false);

                    }

                }

            });

            this.data.graph.on('canvas:mousemove', () => {

                let hoverNotes = this.data.graph.findAllByState('node', 'note-hover');

                if (hoverNotes && hoverNotes.length > 0) {

                    for (let note of hoverNotes) {

                        this.data.graph.setItemState(note, annexList.note.state, false);

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

                    if (this._inAnnex(evt, annexList.link.index)) {

                        window.open(model.link);

                    }

                }

                if (model.note) {

                    if (this._inAnnex(evt, annexList.note.index)) {

                        this.data.currentNodeNote = model.note.replace(/\n/g, '<br>');
                        this.data.nodeNoteShow = true;
                        this._refreshNodeNotePosition(evt.item);
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
        _onNodeSelected : function () {

            this.data.graph.on('node:click', evt => {

                this._clearSelectedNode('selected');

                if (evt.item.getModel().isMindNode) {
                    
                    this.data.graph.setItemState(evt.item, 'selected', true);
                
                }
            
            });

        },
        _onNodeEdit : function () {

            this.data.graph.on('node:dblclick', evt => {

                let groupShapes = this._getGroupShapes(evt.item);

                this.data.editting = true;
                this.data.editGroupShapes = groupShapes;
                this.data.editNode = evt.item;
                this._refreshEditorPosition(evt.item);
                groupShapes.text.attr({
                    opacity : 0
                });
                this.data.editNode.setState('editing', true);
                this.data.graph.paint();
                this.data.$editContentInput.focus();

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
        _onCanvasGrab : function () {

            this.data.graph.on('canvas:mousedown', evt => (
                G6.Util.modifyCSS(evt.currentTarget.get('canvas').get('canvasDOM'), {
                    cursor : 'grabbing'
                }))
            );

            this.data.graph.on('canvas:mouseenter', evt => (
                G6.Util.modifyCSS(evt.currentTarget.get('canvas').get('canvasDOM'), {
                    cursor : 'grab'
                }))
            );

            this.data.graph.on('canvas:mouseup', evt => (
                G6.Util.modifyCSS(evt.currentTarget.get('canvas').get('canvasDOM'), {
                    cursor : 'grab'
                }))
            );

        },
        /* eslint-disable no-magic-numbers */
        _regRootMindNode : function () {

            G6.registerNode('mor-root-mind-node', {
                drawShape : (cfg, group) => {

                    let style = this._getNodeStyles(rootMindNodeStyle, cfg);
                    let cursor = 'default';
                    let conPaddingX = style.fontSize * 1.5;
                    let conPaddingY = style.fontSize * 0.75;
                    let box = group.addShape('rect', {
                        attrs : {
                            x : 0,
                            y : 0,
                            fill : 'transparent',
                            cursor
                        }
                    });
                    let outline = group.addShape('rect', {
                        attrs : {
                            fill : 'transparent',
                            radius : style.outlineRadius,
                            cursor,
                            stroke : 'transparent',
                            lineWidth : 3
                        }
                    });
                    let con = group.addShape('rect', {
                        attrs : {
                            fill : style.bgColor,
                            radius : style.radius,
                            cursor,
                            lineWidth : style.borderWidth,
                            stroke : style.borderColor
                        }
                    });
                    let text = group.addShape('text', {
                        attrs : {
                            x : 0,
                            y : 0,
                            text : cfg.text,
                            textAlign : 'left',
                            textBaseline : 'middle',
                            fill : style.fontColor,
                            fontSize : style.fontSize,
                            fontWeight : style.fontWeight,
                            fontStyle : style.fontStyle,
                            cursor
                        }
                    });
                    let placeholder = group.addShape('text', {
                        attrs : {
                            text : ' ',
                            x : 0,
                            y : 0,
                            textAlign : 'left',
                            textBaseline : 'middle',
                            fill : style.fontColor,
                            fontSize : style.fontSize,
                            cursor
                        }
                    });
                    let bottomline = group.addShape('rect', {
                        attrs : {
                            fill : style.bottomlineBg
                        }
                    });
                    let linkCon = group.addShape('rect', {
                        attrs : {
                            x : 0,
                            y : 0,
                            radius : 3,
                            fill : 'transparent',
                            fillOpacity : 0.7,
                            stroke : 'transparent'
                        }
                    });
                    let link = group.addShape('text', {
                        attrs : {
                            x : 0,
                            y : 0,
                            fill : style.fontColor,
                            fillOpacity : 0.6,
                            fontFamily : 'morningicon',
                            fontSize : style.fontSize,
                            textAlign : 'center',
                            textBaseline : 'middle'
                        }
                    });

                    let textBbox = text.getBBox();
                    let linkBbox = link.getBBox();
                    let linkConBbox = linkCon.getBBox();
                    let conWidth = textBbox.width + (conPaddingX * 2);
                    let conHeight = textBbox.height + (conPaddingY * 2);

                    if (cfg.link) {

                        link.attr({
                            text : String.fromCharCode(parseInt('e704;', 16))
                        });

                        linkBbox = link.getBBox();

                        linkCon.attr({
                            width : linkBbox.width + (annexPadding * 2),
                            height : linkBbox.height + (annexPadding * 2)
                        });

                        linkConBbox = linkCon.getBBox();

                        conWidth = textBbox.width + (conPaddingX * 2) + (linkConBbox.width + (conPaddingX / 2));

                    }

                    con.attr({
                        x : 0,
                        y : 0,
                        width : conWidth,
                        height : conHeight
                    });

                    let conBbox = con.getBBox();

                    if (cfg.link) {

                        linkCon.attr({
                            x : conBbox.width - linkConBbox.width - conPaddingX - annexPadding,
                            y : conPaddingY - annexPadding
                        });

                        linkConBbox = linkCon.getBBox();

                        link.attr({
                            x : linkConBbox.minX + (linkBbox.width / 2) + annexPadding + 1,
                            y : linkConBbox.minY + (linkBbox.height / 2) + annexPadding + 1
                        });

                    }

                    box.attr({
                        width : conBbox.width,
                        height : conBbox.height
                    });
                    box.set('conPaddingX', conPaddingX);
                    box.set('conPaddingY', conPaddingY);

                    let boxBbox = con.getBBox();
                    
                    outline.attr({
                        x : boxBbox.minX - outlinePadding,
                        y : boxBbox.minY - outlinePadding,
                        width : boxBbox.width + (outlinePadding * 2),
                        height : boxBbox.height + (outlinePadding * 2)
                    });

                    text.attr({
                        x : conPaddingX,
                        y : (textBbox.height / 2) + conPaddingY
                    });

                    placeholder.attr({
                        x : conPaddingX,
                        y : (textBbox.height / 2) + conPaddingY
                    });

                    bottomline.attr({
                        x : boxBbox.minX - 1,
                        y : boxBbox.maxY - 0.5,
                        height : style.bottomlineHeight,
                        width : boxBbox.width + 2
                    });

                    return box;

                },
                setState : (name, value, item) => {

                    let style = this._getNodeStyles(rootMindNodeStyle, item.getModel());
                    let states = item.getStates();
                    let box = item.get('keyShape');
                    let group = box.getParent();
                    let outline = group.getChildByIndex(outlineShapeIndex);
                    let linkCon = group.getChildByIndex(linkConShapeIndex);
                    let link = group.getChildByIndex(linkShapeIndex);

                    if (states.indexOf('drag') !== -1) {

                        outline.attr({
                            fillOpacity : 0,
                            strokeOpacity : 0
                        });

                    } else {

                        outline.attr({
                            fillOpacity : 1,
                            strokeOpacity : 1
                        });

                    }

                    if (states.indexOf('link-hover') !== -1) {

                        linkCon.attr({
                            fill : style.outlineColor,
                            stroke : style.outlineActiveColor,
                            cursor : 'pointer'
                        });
                        link.attr({
                            fillOpacity : 1,
                            cursor : 'pointer'
                        });

                    } else {

                        linkCon.attr({
                            fill : 'transparent',
                            stroke : 'transparent',
                            cursor : 'default'
                        });
                        link.attr({
                            fillOpacity : 0.6,
                            cursor : 'default'
                        });

                    }

                    if (
                        this.data.dragging === false &&
                        (
                            states.indexOf('selected') !== -1 ||
                            states.indexOf('editing') !== -1
                        )
                    ) {

                        outline.attr({
                            stroke : style.outlineActiveColor,
                            lineWidth : 3
                        });
                        group.set('zIndex', 9);

                    } else if (
                        this.data.dragging === false &&
                        states.indexOf('hover') !== -1
                    ) {

                        outline.attr({
                            stroke : style.outlineColor,
                            lineWidth : 3
                        });
                        group.set('zIndex', 3);

                    } else {

                        outline.attr({
                            stroke : 'transparent',
                            lineWidth : 3
                        });
                        group.set('zIndex', 1);

                    }

                }
            }, 'single-shape');

        },
        _regMindNode : function () {

            G6.registerNode('mor-mind-node', {
                drawShape : (cfg, group) => {

                    let style = this._getNodeStyles(mindNodeStyle, cfg);
                    let cursor = 'move';
                    let conPaddingX = style.fontSize * 1.5;
                    let conPaddingY = style.fontSize * 0.75;
                    let box = group.addShape('rect', {
                        attrs : {
                            x : 0,
                            y : 0,
                            fill : 'transparent',
                            cursor
                        }
                    });
                    let outline = group.addShape('rect', {
                        attrs : {
                            fill : 'transparent',
                            radius : style.outlineRadius,
                            cursor,
                            stroke : 'transparent',
                            lineWidth : 3
                        }
                    });
                    let con = group.addShape('rect', {
                        attrs : {
                            fill : style.bgColor,
                            radius : style.radius,
                            cursor,
                            lineWidth : style.borderWidth,
                            stroke : style.borderColor
                        }
                    });
                    let text = group.addShape('text', {
                        attrs : {
                            x : 0,
                            y : 0,
                            text : cfg.text,
                            textAlign : 'left',
                            textBaseline : 'middle',
                            fill : style.fontColor,
                            fontSize : style.fontSize,
                            fontWeight : style.fontWeight,
                            fontStyle : style.fontStyle,
                            cursor
                        }
                    });
                    let placeholder = group.addShape('text', {
                        attrs : {
                            text : ' ',
                            x : 0,
                            y : 0,
                            textAlign : 'left',
                            textBaseline : 'middle',
                            fill : style.fontColor,
                            fontSize : style.fontSize,
                            cursor
                        }
                    });
                    let bottomline = group.addShape('rect', {
                        attrs : {
                            fill : style.bottomlineBg
                        }
                    });
                    let linkCon = group.addShape('rect', {
                        attrs : {
                            x : 0,
                            y : 0,
                            radius : 3,
                            fill : 'transparent',
                            fillOpacity : 0.7,
                            stroke : 'transparent'
                        }
                    });
                    let link = group.addShape('text', {
                        attrs : {
                            x : 0,
                            y : 0,
                            fill : style.fontColor,
                            fillOpacity : 0.6,
                            fontFamily : 'morningicon',
                            fontSize : style.fontSize,
                            textAlign : 'center',
                            textBaseline : 'middle'
                        }
                    });
                    let noteCon = group.addShape('rect', {
                        attrs : {
                            x : 0,
                            y : 0,
                            radius : 3,
                            fill : 'transparent',
                            fillOpacity : 0.7,
                            stroke : 'transparent'
                        }
                    });
                    let note = group.addShape('text', {
                        attrs : {
                            x : 0,
                            y : 0,
                            fill : style.fontColor,
                            fillOpacity : 0.6,
                            fontFamily : 'morningicon',
                            fontSize : style.fontSize,
                            textAlign : 'center',
                            textBaseline : 'middle'
                        }
                    });
                    let markConGroup = group.addGroup({
                        id : `node-${cfg.id}-mark-box`,
                        attrs : {
                            x : 0,
                            y : 0
                        }
                    });

                    if (cfg._mark && cfg._mark.length > 0) {
    
                        for (let index in cfg._mark) {

                            let markName = cfg._mark[index];
                            let markCon = markConGroup.addShape('rect', {
                                attrs : {
                                    x : 0,
                                    y : 0,
                                    fill : 'transparent',
                                    fillOpacity : 0.7,
                                    stroke : 'transparent',
                                    radius : 3
                                },
                                zIndex : 99
                            });

                            let mark = markConGroup.addShape('text', {
                                attrs : {
                                    x : 0,
                                    y : 0,
                                    fontFamily : 'morningicon',
                                    fontSize : style.fontSize,
                                    textAlign : 'center',
                                    textBaseline : 'middle',
                                    fill : marks[markName].color,
                                    text : String.fromCharCode(parseInt(`${marks[markName].iconfont};`, 16))
                                }
                            });

                            let markBbox = mark.getBBox();
                            
                            markCon.attr({
                                x : (-markBbox.width / 2) - annexPadding + (markBbox.width * index),
                                y : (-markBbox.height / 2) - annexPadding,
                                width : markBbox.width,
                                height : markBbox.height + (annexPadding * 2)
                            });

                        }

                        // markConGroup.set('keyShape', markCons[0]);
                        // markConGroup.attr({
                        //     height : 23,
                        //     width : cfg._mark.length * 20
                        // });

                    }

                    let textBbox = text.getBBox();
                    let linkBbox = link.getBBox();
                    let linkConBbox = linkCon.getBBox();
                    let markConGroupBbox = markConGroup.getBBox();
                    let noteBbox = note.getBBox();
                    let noteConBbox = noteCon.getBBox();
                    let conWidth = textBbox.width + (conPaddingX * 2);
                    let conHeight = textBbox.height + (conPaddingY * 2);
                    let textX = 0;

                    if (cfg.link) {

                        link.attr({
                            text : String.fromCharCode(parseInt('e704;', 16))
                        });

                        linkBbox = link.getBBox();
                        linkCon.attr({
                            width : linkBbox.width + (annexPadding * 2),
                            height : linkBbox.height + (annexPadding * 2)
                        });

                        linkConBbox = linkCon.getBBox();
                        conWidth += linkConBbox.width;

                    }

                    if (cfg.note) {

                        note.attr({
                            text : String.fromCharCode(parseInt('e605;', 16))
                        });

                        noteBbox = note.getBBox();
                        noteCon.attr({
                            width : noteBbox.width + (annexPadding * 2),
                            height : noteBbox.height + (annexPadding * 2)
                        });

                        noteConBbox = noteCon.getBBox();
                        conWidth += noteConBbox.width;

                    }

                    if (cfg._mark && cfg._mark.length > 0) {

                        conWidth += markConGroupBbox.width;
                        textX = markConGroupBbox.width;

                    }

                    if (cfg.note || cfg.link) {

                        conWidth += (conPaddingX / 2) + markConPaddingRight;

                    }

                    con.attr({
                        x : 0,
                        y : 0,
                        width : conWidth,
                        height : conHeight
                    });

                    let conBbox = con.getBBox();

                    if (cfg.link) {

                        linkCon.attr({
                            x : conBbox.width - linkConBbox.width - conPaddingX - annexPadding,
                            y : conPaddingY - annexPadding
                        });

                        linkConBbox = linkCon.getBBox();

                        link.attr({
                            x : linkConBbox.minX + (linkBbox.width / 2) + annexPadding + 1,
                            y : linkConBbox.minY + (linkBbox.height / 2) + annexPadding + 1
                        });

                    }

                    if (cfg.note) {

                        noteCon.attr({
                            x : conBbox.width - noteConBbox.width - conPaddingX - annexPadding,
                            y : conPaddingY - annexPadding
                        });

                        noteConBbox = noteCon.getBBox();

                        note.attr({
                            x : noteConBbox.minX + (noteBbox.width / 2) + annexPadding + 1,
                            y : noteConBbox.minY + (noteBbox.height / 2) + annexPadding + 1
                        });

                    }

                    if (cfg._mark && cfg._mark.length > 0) {

                        markConGroupBbox = markConGroup.getBBox();

                        for (let index in cfg._mark) {

                            let markCon = markConGroup.getChildByIndex(index * 2);
                            let mark = markConGroup.getChildByIndex((index * 2) + 1);
                            let markBbox = mark.getBBox();
                            let markConBbox = markCon.getBBox();

                            markCon.attr({
                                x : (-markBbox.width / 2) + conPaddingX + (markConBbox.width * index),
                                y : (-markBbox.height / 2) + conPaddingY + annexPadding
                            });
                            mark.attr({
                                x : (markBbox.width / 4) + conPaddingX + (markConBbox.width * index),
                                y : (markBbox.height / 2) + conPaddingY
                            });

                        }

                    }

                    box.attr({
                        width : conBbox.width,
                        height : conBbox.height
                    });
                    box.set('conPaddingX', conPaddingX);
                    box.set('conPaddingY', conPaddingY);

                    let boxBbox = con.getBBox();
                    
                    outline.attr({
                        x : boxBbox.minX - outlinePadding,
                        y : boxBbox.minY - outlinePadding,
                        width : boxBbox.width + (outlinePadding * 2),
                        height : boxBbox.height + (outlinePadding * 2)
                    });

                    text.attr({
                        x : textX + conPaddingX,
                        y : (textBbox.height / 2) + conPaddingY
                    });

                    placeholder.attr({
                        x : textX + conPaddingX,
                        y : (textBbox.height / 2) + conPaddingY
                    });

                    bottomline.attr({
                        x : boxBbox.minX - 1,
                        y : boxBbox.maxY - 0.5,
                        height : style.bottomlineHeight,
                        width : boxBbox.width + 2
                    });

                    return box;

                },
                setState : (name, value, item) => {

                    let model = item.getModel();
                    let style = this._getNodeStyles(mindNodeStyle, model);
                    let states = item.getStates();
                    let box = item.get('keyShape');
                    let group = box.getParent();
                    let outline = group.getChildByIndex(outlineShapeIndex);
                    let linkCon = group.getChildByIndex(linkConShapeIndex);
                    let link = group.getChildByIndex(linkShapeIndex);
                    let noteCon = group.getChildByIndex(noteConShapeIndex);
                    let note = group.getChildByIndex(noteShapeIndex);
                    let markConGroup = group.getChildByIndex(markConGroupIndex);

                    if (states.indexOf('drag') !== -1) {

                        outline.attr({
                            fillOpacity : 0,
                            strokeOpacity : 0
                        });

                    } else {

                        outline.attr({
                            fillOpacity : 1,
                            strokeOpacity : 1
                        });

                    }

                    if (states.indexOf('link-hover') !== -1) {

                        linkCon.attr({
                            fill : style.outlineColor,
                            stroke : style.outlineActiveColor,
                            cursor : 'pointer'
                        });
                        link.attr({
                            fillOpacity : 1,
                            cursor : 'pointer'
                        });

                    } else {

                        linkCon.attr({
                            fill : 'transparent',
                            stroke : 'transparent',
                            cursor : 'default'
                        });
                        link.attr({
                            fillOpacity : 0.6,
                            cursor : 'default'
                        });

                    }

                    if (states.indexOf('note-hover') !== -1) {

                        noteCon.attr({
                            fill : style.outlineColor,
                            stroke : style.outlineActiveColor,
                            cursor : 'pointer'
                        });
                        note.attr({
                            fillOpacity : 1,
                            cursor : 'pointer'
                        });

                    } else {

                        noteCon.attr({
                            fill : 'transparent',
                            stroke : 'transparent',
                            cursor : 'default'
                        });
                        note.attr({
                            fillOpacity : 0.6,
                            cursor : 'default'
                        });

                    }

                    if (model._mark && model._mark.length > 0) {

                        for (let index in model._mark) {

                            let markCon = markConGroup.getChildByIndex(index * 2);
                            let mark = markConGroup.getChildByIndex((index * 2) + 1);

                            if (states.indexOf(`mark-${index}-hover`) !== -1) {

                                markCon.attr({
                                    // fill : style.outlineColor,
                                    stroke : style.outlineActiveColor,
                                    cursor : 'pointer'
                                });
                                mark.attr({
                                    cursor : 'pointer'
                                });

                            } else {

                                markCon.attr({
                                    // fill : 'transparent',
                                    stroke : 'transparent',
                                    cursor : 'default'
                                });
                                mark.attr({
                                    cursor : 'default'
                                });

                            }
                            
                        }

                    }

                    if (
                        this.data.dragging === false &&
                        (
                            states.indexOf('selected') !== -1 ||
                            states.indexOf('editing') !== -1
                        )
                    ) {

                        outline.attr({
                            stroke : style.outlineActiveColor,
                            lineWidth : 3
                        });
                        group.set('zIndex', 9);

                    } else if (
                        this.data.dragging === false &&
                        states.indexOf('hover') !== -1
                    ) {

                        outline.attr({
                            stroke : style.outlineColor,
                            lineWidth : 3
                        });
                        group.set('zIndex', 3);

                    } else {

                        outline.attr({
                            stroke : 'transparent',
                            lineWidth : 3
                        });
                        group.set('zIndex', 1);

                    }

                }
            }, 'single-shape');

        },
        _regPlaceholderNode : function () {

            G6.registerNode('mor-placeholder-node', {
                drawShape : (cfg, group) => {

                    let options = G6.Util.deepMix(placeholderNodeStyle, cfg.style);
                    let key = group.addShape('rect', {
                        attrs : {
                            fill : options.bgColor,
                            cursor : 'default',
                            width : 80,
                            height : 28,
                            x : 0,
                            y : 0,
                            radius : options.radius,
                        }
                    });

                    return key;

                }
            }, 'single-shape');

        },
        /* eslint-enable no-magic-numbers */
        _getPathWithBorderRadiusByPolyline : function (points, borderRadius) {

            let pathSegments = [];
            let startPoint = points[0];

            pathSegments.push(`M ${startPoint.x} ${startPoint.y}`);

            points.forEach((point, i) => {

                let p1 = points[i + 1];
                let p2 = points[i + 2];

                if (p1 && p2 && i === 1) {

                    if (PolylineUtil.isBending(point, p1, p2)) {

                        let _getBorderRadiusPoint = PolylineUtil.getBorderRadiusPoints(point, p1, p2, borderRadius);
                        let ps = _getBorderRadiusPoint[0];
                        let pt = _getBorderRadiusPoint[1];

                        pathSegments.push(`L ${ps.x} ${ps.y}`);
                        pathSegments.push(`Q ${p1.x} ${p1.y} ${pt.x} ${pt.y}`);
                        pathSegments.push(`L ${pt.x} ${pt.y}`);
                    
                    } else {

                        pathSegments.push(`L ${p1.x} ${p1.y}`);
                    
                    }

                } else if (p1) {

                    pathSegments.push(`L ${p1.x} ${p1.y}`);
                
                }

            });

            return pathSegments.join('');

        },
        _regMindEdge : function () {

            let vm = this;

            G6.registerEdge('mor-mind-edge', {
                getPath : function (points, routeCfg) {
                    
                    return vm._getPathWithBorderRadiusByPolyline(points, routeCfg.radius);
                
                },
                getShapeStyle : function (cfg) {

                    cfg = this.getPathPoints(cfg);

                    let offset = 5;
                    let startPoint = cfg.startPoint;
                    let endPoint = cfg.endPoint;
                    // let controlPoints = this.getControlPoints(cfg);
                    let points = [startPoint];
                    let sourceNode = cfg.source;
                    let targetNode = cfg.target;
                    let customOptions = this.getCustomConfig(cfg) || {};
                    let controlPoints = [];

                    if (sourceNode.getModel().shapeStyle === 'line') {

                        controlPoints.push({
                            anchorIndex : 0,
                            index : 0,
                            x : (sourceNode.getBBox().maxX + targetNode.getBBox().minX) / 2,
                            y : sourceNode.getBBox().maxY
                        });

                    } else {

                        controlPoints.push({
                            anchorIndex : 0,
                            index : 0,
                            x : (sourceNode.getBBox().maxX + targetNode.getBBox().minX) / 2,
                            y : sourceNode.getBBox().centerY
                        });

                    }

                    if (targetNode.getModel().shapeStyle === 'line') {

                        controlPoints.push({
                            anchorIndex : 0,
                            index : 0,
                            x : (sourceNode.getBBox().maxX + targetNode.getBBox().minX) / 2,
                            y : targetNode.getBBox().maxY
                        });

                    } else {

                        controlPoints.push({
                            anchorIndex : 0,
                            index : 0,
                            x : (sourceNode.getBBox().maxX + targetNode.getBBox().minX) / 2,
                            y : targetNode.getBBox().centerY
                        });

                    }

                    // 添加控制点
                    if (controlPoints) {
                        
                        points = points.concat(controlPoints);
                    
                    }
                    
                    // 添加结束点
                    points.push(endPoint);

                    let source = cfg.sourceNode;
                    let target = cfg.targetNode;
                    
                    let routeCfg = {
                        radius : mindEdgeStyle.radius
                    };
                    
                    if (!controlPoints) {
                        
                        routeCfg = {
                            source,
                            target,
                            offset,
                            radius : mindEdgeStyle.radius
                        };
                    
                    }
 
                    let path = this.getPath(points, routeCfg);

                    return G6.Util.deepMix({}, G6.Global.defaultEdge.style, {
                        lineWidth : mindEdgeStyle.borderWidth,
                        stroke : mindEdgeStyle.borderColor,
                        radius : mindEdgeStyle.radius
                    }, customOptions.style, {
                        path
                    });

                }
            }, 'polyline');

        },
        _regPlaceholderEdge : function () {

            G6.registerEdge('mor-placeholder-edge', {
                getCustomConfig : function () {

                    return {
                        style : {
                            lineWidth : placeholderEdgeStyle.borderWidth,
                            stroke : placeholderEdgeStyle.borderColor,
                            radius : placeholderEdgeStyle.radius
                        }
                    };
                
                }
            }, 'mor-mind-edge');

        },
        /* eslint-disable no-magic-numbers */
        _regBehaviorBrushSelect : function () {

            let vm = this;

            G6.registerBehavior('mor-brush-select', {
                getDefaultCfg () {

                    return {
                        brushStyle : {
                            fill : '#e0efff',
                            fillOpacity : 0.4,
                            stroke : '#b2d2ef',
                            lineWidth : 1
                        },
                        onSelect () {},
                        onDeselect () {},
                        selectedState : 'selected',
                        includeEdges : true,
                        // selectedEdges : [],
                        selectedNodes : []
                    };
                
                },
                getEvents () {

                    return {
                        mousedown : 'onMouseDown',
                        mousemove : 'onMouseMove',
                        mouseup : 'onMouseUp',
                        'canvas:click' : '_clearStates',
                        keyup : 'onKeyUp',
                        keydown : 'onKeyDown'
                    };

                },
                onMouseDown (evt) {

                    if (evt.item || !this.keydown) {
                        
                        return;
                    
                    }

                    let brush = this.brush;

                    this._clearStates();
                    
                    if (!brush) {
                        
                        brush = this._createBrush();
                    
                    }

                    this.originPoint = {
                        x : evt.canvasX,
                        y : evt.canvasY
                    };
                    brush.attr({
                        width : 0,
                        height : 0
                    });
                    brush.show();
                    this.dragging = true;

                    setTimeout(() => {

                        G6.Util.modifyCSS(evt.currentTarget._cfg.canvas._cfg.canvasDOM, {
                            cursor : 'default'
                        });
                    
                    });

                },
                onMouseMove (evt) {

                    if (!this.dragging ||
                        !this.keydown) {

                        return;

                    }

                    this._clearStates();
                    this._getSelectedNodes(evt);
                    this._updateBrush(evt);
                    this.graph.paint();

                },
                onMouseUp () {

                    if (!this.brush) {

                        return;

                    }

                    let graph = this.graph;
                    let autoPaint = graph.get('autoPaint');
                    
                    graph.setAutoPaint(false);
                    this.brush.hide();
                    this.dragging = false;
                    this.graph.paint();
                    graph.setAutoPaint(autoPaint);
                
                },
                _clearStates () {

                    vm._clearSelectedNode(this.selectedState);

                },
                _getSelectedNodes (evt) {

                    let graph = this.graph;
                    let selectedState = this.selectedState;
                    let originPoint = this.originPoint;
                    let p1 = evt;
                    let p2 = graph.getPointByCanvas(originPoint.x, originPoint.y);
                    let left = Math.min(p1.x, p2.x);
                    let right = Math.max(p1.x, p2.x);
                    let top = Math.min(p1.y, p2.y);
                    let bottom = Math.max(p1.y, p2.y);
                    let width = right - left;
                    let height = bottom - top;
                    let centerX = left + (width / 2);
                    let centerY = top + (height / 2);
                    let selectedNodes = [];
                    // let selectedEdges = [];
                    let selectedIds = [];
                    let shouldUpdate = this.shouldUpdate;

                    graph.getNodes().forEach(node => {

                        let bbox = node.getBBox();

                        // 计算矩形相交
                        if (
                            Math.abs(centerX - bbox.centerX) < ((bbox.width + width) / 2) &&
                            Math.abs(centerY - bbox.centerY) < ((bbox.height + height) / 2)
                        ) {

                            if (shouldUpdate(node, 'select')) {
                        
                                selectedNodes.push(node);
                        
                                const model = node.getModel();

                                selectedIds.push(model.id);
                                graph.setItemState(node, selectedState, true);
                        
                            }

                        }

                    });

                    // eslint-disable-next-line no-warning-comments
                    // TODO : select edge
                    // if (this.includeEdges) {
                        
                    //     // 选中边，边的source和target都在选中的节点中时才选中
                    //     selectedNodes.forEach(node => {
                    //         const edges = node.getEdges();
                    //         edges.forEach(edge => {
                    //         const model = edge.getModel();
                    //         const { source, target } = model;
                    //         if (selectedIds.includes(source)
                    //             && selectedIds.includes(target)
                    //             && shouldUpdate(edge, 'select')) {
                    //             selectedEdges.push(edge);
                    //             graph.setItemState(edge, selectedState, true);
                    //         }
                    //         });
                    //     });
                    
                    // }

                    // this.selectedEdges = selectedEdges;
                    this.selectedNodes = selectedNodes;

                },
                _createBrush () {

                    let brush = this.graph.get('canvas').addShape('rect', {
                        attrs : this.brushStyle,
                        capture : false
                    });

                    this.brush = brush;

                    return brush;

                },
                _updateBrush (evt) {

                    const originPoint = this.originPoint;
                    
                    this.brush.attr({
                        width : Math.abs(evt.canvasX - originPoint.x),
                        height : Math.abs(evt.canvasY - originPoint.y),
                        x : Math.min(evt.canvasX, originPoint.x),
                        y : Math.min(evt.canvasY, originPoint.y)
                    });

                },
                onKeyDown (evt) {

                    const code = evt.key;

                    if (code && code.toLowerCase() === 'shift') {
                    
                        this.keydown = true;
                    
                    } else {
                        
                        this.keydown = false;
                    
                    }

                    setTimeout(() => {

                        G6.Util.modifyCSS(this.graph._cfg.canvas._cfg.canvasDOM, {
                            cursor : 'default'
                        });
                    
                    });

                },
                onKeyUp () {

                    if (this.brush) {

                        this.brush.hide();
                        this.dragging = false;

                    }

                    this.keydown = false;

                }
            });

        },
        _regBehaviorDragNode : function () {

            let vm = this;

            G6.registerBehavior('mor-drag-node', {
                getDefaultCfg () {

                    return {
                        targets : []
                    };
                
                },
                getEvents () {

                    return {
                        'node:dragstart' : 'onDragStart',
                        'node:drag' : 'onDrag',
                        'node:dragend' : 'onDragEnd',
                        // 'canvas:mouseleave' : 'onOutOfRange'
                    };

                },
                onDragStart (evt) {

                    if (!this.shouldBegin.call(this, evt)) {

                        return;

                    }

                    // root节点不能被拖拽
                    // eslint-disable-next-line no-warning-comments
                    // TODO : 等g6 3.1.4升级后启用hasLocked来判断
                    if (evt.item.get('model').isRoot) {

                        return;

                    }

                    this.dragOptions = {
                        originX : evt.x,
                        originY : evt.y,
                        delegateShape : null
                    };

                    // 获取所有选中的元素
                    let nodes = this.graph.findAllByState('node', 'selected');
                    let targetNodeId = evt.item.get('id');

                    // 当前拖动的节点是否是选中的节点
                    let dragNodes = nodes.filter(node => (targetNodeId === node.get('id')));

                    if (dragNodes.length === 0) {

                        // 只拖动当前节点
                        let model = evt.item.getModel();
                        
                        this.targets = [evt.item];
                        this.dragOptions.type = 'unselect-single';
                        this.point = {
                            x : model.x,
                            y : model.y
                        };
                    
                    } else if (nodes.length === 1) {
    
                        // 拖动选中节点
                        this.targets.push(evt.item);
                        this.dragOptions.type = 'select';

                    } else {

                        let models = [];
                        let getTopSelectedNodeModel = node => {
                            
                            let model = node.getModel();
                            let parentNode = this.graph.findById(model.id).getInEdges()[0].getSource();

                            if (parentNode.getStates().indexOf('selected') !== -1) {

                                model = getTopSelectedNodeModel(parentNode);

                            }

                            return model;

                        };
                        
                        // 拖动多个节点
                        nodes.forEach(node => {

                            let model = getTopSelectedNodeModel(node);

                            // 仅计算top节点
                            if (models.indexOf(model) === -1) {

                                models.push(model);
                                this.targets.push(node);
                            
                            }

                        });

                        this.dragOptions.type = 'select';

                    }

                },
                onDrag (evt) {

                    // !this.origin ||
                    if (!this.get('shouldUpdate').call(this, evt)) {

                        return;

                    }

                    if (this.dragOptions.type === 'unselect-single') {

                        this._updateDelegate(evt);

                    } else {

                        this._updateDelegate(evt);

                    }

                    vm.data.dragging = true;

                },
                onDragEnd (evt) {
                    
                    // !this.origin ||
                    if (!this.shouldEnd.call(this, evt)) {

                        return;
                    
                    }

                    if (this.dragOptions.delegateShape) {

                        this.dragOptions.delegateShape.remove();
                        this.dragOptions.delegateShape = null;

                    }

                    // this.origin = null;
                    // this.originPoint = {};
                    // this.target = null;

                    // 终止时需要判断此时是否在监听画布外的 mouseup 事件，若有则解绑
                    let fn = this.fn;

                    if (fn) {
                        
                        window.document.body.removeEventListener('mouseup', fn, false);
                        this.fn = null;
                    
                    }

                    // this.graph.paint();
                    vm._updateDragTarget(false);
                    vm._removeOldDragPlaceholder();
                    this.graph.refreshLayout();
                    this.dragOptions = {};
                    this.point = {};
                    this.targets.length = 0;
                    vm.data.dragging = false;

                },
                _updateDelegate (evt) {

                    // 如果还没创建代理元素
                    if (!this.dragOptions.delegateShape) {

                        let parent = this.graph.get('group');
                        let delegateShapeAttr = {
                            fill : delegateShapeStyle.bgColor,
                            stroke : delegateShapeStyle.borderColor,
                            lineWidth : delegateShapeStyle.borderWidth,
                            lineDash : [5, 5]
                        };

                        if (this.dragOptions.type === 'select') {

                            const {
                                x,
                                y,
                                width,
                                height,
                                minX,
                                minY
                            } = this._calculationGroupPosition();

                            this.originPoint = {
                                x,
                                y,
                                width,
                                height,
                                minX,
                                minY
                            };

                            this.dragOptions.delegateShape = parent.addShape('rect', {
                                attrs : Object.assign({
                                    width,
                                    height,
                                    x,
                                    y
                                }, delegateShapeAttr)
                            });
                            vm.data.dragTarget = {
                                nodes : this.targets,
                                hidden : false,
                                originNodeStyle : {},
                                saveModel : {}
                            };

                        } else if (this.dragOptions.type === 'unselect-single') {

                            let bbox = this.targets[0].get('keyShape').getBBox();
                            let x = evt.x - this.dragOptions.originX + this.point.x;
                            let y = evt.y - this.dragOptions.originY + this.point.y;

                            this.dragOptions.delegateShape = parent.addShape('rect', {
                                attrs : Object.assign({
                                    width : bbox.width,
                                    height : bbox.height,
                                    x : x + bbox.x,
                                    y : y + bbox.y,
                                }, delegateShapeAttr)
                            });
                            vm.data.dragTarget = {
                                nodes : this.targets,
                                hidden : false,
                                originNodeStyle : {},
                                saveModel : {}
                            };

                        }
                        
                        vm._updateDragTarget(true);
                        vm._refreshDragHolder(this.dragOptions.delegateShape, evt.item);
                        // this.target.set('delegateShape', this.delegateShape);
                        // this.dragOptions.delegateShape.set('capture', false);

                    } else if (this.dragOptions.type === 'unselect-single') {

                        let bbox = evt.item.get('keyShape').getBBox();
                        let x = evt.x - this.dragOptions.originX + this.point.x;
                        let y = evt.y - this.dragOptions.originY + this.point.y;

                        this.dragOptions.delegateShape.attr({
                            x : x + bbox.x,
                            y : y + bbox.y
                        });
                        vm._refreshDragHolder(this.dragOptions.delegateShape, null);

                    } else if (this.dragOptions.type === 'select') {
        
                        let clientX = evt.x - this.dragOptions.originX + this.originPoint.minX;
                        let clientY = evt.y - this.dragOptions.originY + this.originPoint.minY;

                        this.dragOptions.delegateShape.attr({
                            x : clientX,
                            y : clientY
                        });
                        vm._refreshDragHolder(this.dragOptions.delegateShape, null);

                    }

                    this.graph.paint();

                },
                _calculationGroupPosition () {

                    let graph = this.graph;
                    let nodes = graph.findAllByState('node', 'selected');
                    let minx = Infinity;
                    let maxx = -Infinity;
                    let miny = Infinity;
                    let maxy = -Infinity;

                    // 获取已节点的所有最大最小x y值
                    for (let id of nodes) {

                        let element = (typeof id === 'string') ? graph.findById(id) : id;
                        let bbox = element.getBBox();
                        let {
                            minX,
                            minY,
                            maxX,
                            maxY
                        } = bbox;

                        if (minX < minx) {

                            minx = minX;

                        }

                        if (minY < miny) {
                            
                            miny = minY;
                        
                        }

                        if (maxX > maxx) {
                            
                            maxx = maxX;
                        
                        }

                        if (maxY > maxy) {
                            
                            maxy = maxY;
                        
                        }

                    }

                    let x = Math.floor(minx) - 20;
                    let y = Math.floor(miny) + 10;
                    let width = Math.ceil(maxx) - x;
                    let height = Math.ceil(maxy) - y;

                    return {
                        x,
                        y,
                        width,
                        height,
                        minX : minx,
                        minY : miny
                    };

                }
            });

        },
        _registrar : function () {

            this._regMindNode();
            this._regRootMindNode();
            this._regPlaceholderNode();
            this._regMindEdge();
            this._regPlaceholderEdge();

            this._regBehaviorBrushSelect();
            this._regBehaviorDragNode();

        },
        // _bindHotkey : function () {

        //     this.data.graph

        // },
        _bindEvent : function () {

            this._onCanvasGrab();
            this._onNodeHover();
            this._onNodeSelected();
            this._onNodeEdit();
            this._onNodeDrag();
            this._onAnnexHover();
            this._onAnnexClick();
            this._onContextMenu();
            // this._onHotkey();
            
            // eslint-disable-next-line no-warning-comments
            // TODO : mark hover is not work, cause zIndex
            // this._onMarkHover();

        },
        _createGraph : function () {

            let graphOtions = {
                container : this.data.$canvas,
                width : this.conf.width,
                height : this.conf.height,
                pixelRatio : 2,
                animate : false,
                modes : {
                    default : [
                        'drag-canvas',
                        'zoom-canvas',
                        'mor-brush-select',
                        'mor-drag-node'
                    ]
                },
                defaultNode : {
                    shape : 'mor-mind-node'
                },
                defaultEdge : {
                    shape : 'mor-mind-edge'
                },
                layout : {
                    getHeight : data => {

                        let node = this.data.graph.findById(data.id);

                        if (
                            !node ||
                            (node && node.destroyed) ||
                            (node && node.getModel().isDragging)
                        ) {

                            return 0;

                        }

                        let model = node.getModel();

                        if (model.style && model.style.computedRadius) {

                            node.get('group').getChildByIndex(conShapeIndex)
                                .attr({
                                    radius : node.getBBox().height * model.style.computedRadius
                                });
                            node.get('group').set('radius', node.getBBox().height * model.style.computedRadius);

                        }
                        
                        return node.getBBox().height;

                    },
                    getWidth : data => {

                        let node = this.data.graph.findById(data.id);

                        if (
                            !node ||
                            (node && node.destroyed) ||
                            (node && node.getModel().isDragging)
                        ) {

                            return 0;

                        }

                        return node.getBBox().width;

                    },
                    getVGap : data => {

                        let node = this.data.graph.findById(data.id);

                        if (node && node.getModel().isDragging) {

                            return 0;

                        }

                        return 5;

                    },
                    getHGap : () => 30
                }
            };

            if (this.conf.layout === 'LR') {

                graphOtions.layout.direction = 'LR';
                graphOtions.layout.type = 'compactBox';

            } else if (this.conf.layout === 'RL') {

                graphOtions.layout.direction = 'RL';
                graphOtions.layout.type = 'compactBox';

            }
            
            // else if (this.conf.layout === 'RL') {

            //     graphOtions.layout.direction = 'LR';
            //     graphOtions.layout.type = 'indented';

            // }

            this.data.graph = new G6.TreeGraph(graphOtions);

        },
        _traverseNodeUpdateMark : function (item) {

            if (item.mark && item.mark.length > 0) {

                let mark = {};

                for (let index in item.mark) {

                    let name = item.mark[index];
                    let group = name.split(':')[0];

                    if (marks[name]) {
                        
                        mark[group] = name;

                    }

                }

                item._mark = Object.values(mark);

            } else {

                item._mark = [];

            }
    
        },
        _traverseOneNode : function (item) {

            item.id = this.data.globalId++;
            item.anchorPoints = [[0, 0.5], [1, 0.5]];
            item.isMindNode = true;
            item.style = {};
            // item._shape = item.shape;
            item.shapeStyle = item.shapeStyle;
            this.data.dataMap[item.id] = item;

            if (item.isRoot) {

                item.shape = 'mor-root-mind-node';

            } else {
                
                item.shape = 'mor-mind-node';

            }

            this._traverseNodeUpdateMark(item);

        },
        _traverseNode : function (items) {

            let root = {
                text : 'root',
                children : items
            };

            G6.Util.traverseTree(root, this._traverseOneNode);

            return root.children;

        },
        /* eslint-enable no-magic-numbers */
        _readData : function (data) {

            G6.Util.traverseTree(data, this._traverseOneNode);
            this.data.graph.read(data);

            setTimeout(() => {

                this.data.graph.refreshLayout(true);

            });

        },
        _exportDataWalker : function (data, nodeCallback, customWalker) {

            let dataWalker = (currentData, ...args) => {

                for (let item of currentData) {

                    nodeCallback(item, ...args);

                    if (item.children && item.children.length > 0) {

                        if (typeof customWalker === 'function') {

                            customWalker(Object.assign([], item.children), dataWalker);

                        } else {

                            dataWalker(item.children);

                        }

                    }

                }

            };

            dataWalker(data);

        },
        _importDataWalker : function (data, nodeCallback, customWalker) {

            let dataWalker = (currentData, ...args) => {

                for (let item of currentData) {

                    nodeCallback(item, ...args);

                    if (item.children) {

                        if (typeof customWalker === 'function') {

                            customWalker(item.children, dataWalker);

                        } else {

                            dataWalker(item.children);

                        }

                    }

                }

            };

            dataWalker(data);

        },
        _swapArr : function (children, fromIndex, toIndex) {

            children[toIndex] = children.splice(fromIndex, 1, children[toIndex])[0];
        
            return children;

        },
        _downloadFile : function (dataUrl, suffix) {

            let downloadLink = document.createElement('a');

            downloadLink.style.display = 'none';
            downloadLink.href = dataUrl;
            downloadLink.download = `${+new Date()}.${suffix}`;
            window.document.body.appendChild(downloadLink);
            downloadLink.click();
            window.document.body.removeChild(downloadLink);

        },
        _exportPNG : function () {

            let canvas = this.data.$canvas.querySelector('canvas');

            return canvas.toDataURL('image/png');

        },
        _exportJSON : function (data) {

            let json = [];
            let current = null;

            this._exportDataWalker(data, (item, parent) => {

                current = {
                    name : item.text,
                    children : []
                };

                current.link = item.link;
                current.note = item.note;
                current.mark = item.mark;

                if (parent === undefined) {

                    json.push(current);

                } else {

                    parent.push(current);

                }

            }, (children, dataWalker) => {

                if (children && children.length > 0) {

                    dataWalker(children, current.children);

                }

            });

            return json;
            
        },
        _importJSON : function (data) {

            let xmindData;
            let current;

            this._importDataWalker(data, (item, parent) => {

                current = {
                    text : item.name,
                    children : []
                };

                if (item.link) {
                    
                    current.link = item.link;

                }

                if (item.note) {
                    
                    current.note = item.note;

                }

                if (item.mark) {
                    
                    current.mark = item.mark;

                }

                this._traverseOneNode(current);

                if (parent === undefined) {

                    xmindData = current;

                } else {

                    parent.push(current);

                }

            }, (children, dataWalker) => {

                if (children && children.length > 0) {

                    dataWalker(children, current.children);

                }

            });

            return xmindData;

        },
        _exportXMIND : function (data) {

            let zip = new JSZip();
            let {
                Workbook,
                Topic,
                Dumper,
                Marker
            } = window;
            let topic;
            let workbook = new Workbook();
            let current = null;

            this._exportDataWalker(data, (item, cid) => {

                current = {
                    title : item.text
                };

                if (item.link) {

                    current.href = item.link;

                }

                if (topic === undefined) {

                    topic = new Topic({
                        sheet : workbook.createSheet('sheet title', current.text)
                    });

                } else if (cid) {

                    topic.on(cid).add(current);

                }

                if (item.note) {

                    topic.on(topic.cid()).note(item.note);

                }

                if (item._mark && item._mark.length > 0) {

                    let marker = new Marker();

                    for (let markName of item._mark) {

                        topic.on(topic.cid()).marker(marker[marks[markName].markMethod](marks[markName].markValue));

                    }

                }

            }, (children, dataWalker) => {

                if (children && children.length > 0) {

                    children.unshift(children.pop());
                    dataWalker(children, topic.cid());

                }

            });

            let dumper = new Dumper({
                workbook
            });
            let files = dumper.dumping();

            for (const file of files) {

                if (file.filename === 'content.json') {

                    file.value = JSON.parse(file.value);

                    if (this.conf.layout === 'LR') {
                    
                        file.value[0].rootTopic.structureClass = 'org.xmind.ui.logic.right';

                    } else if (this.conf.layout === 'RL') {
                    
                        file.value[0].rootTopic.structureClass = 'org.xmind.ui.logic.left';

                    }
                    
                    // else if (this.conf.layout === 'TL') {
                    //     file.value[0].rootTopic.structureClass = 'org.xmind.ui.tree.right';
                    // }

                    file.value = JSON.stringify(file.value);

                }
                
                zip.file(file.filename, file.value);

            }
            
            return zip.generateAsync({
                type : 'blob'
            });

        },
        _importXMIND : function (data) {

            let xmindData;
            let current;

            this._importDataWalker(data, (item, parent) => {

                current = {
                    text : item.title,
                    children : []
                };

                if (item.href) {
                    
                    current.link = item.href;

                }

                if (item.notes) {
                    
                    current.note = item.notes.plain.content;

                }

                if (item.markers) {
                    
                    current.mark = map(item.markers, 'markerId');

                }

                this._traverseOneNode(current);

                if (parent === undefined) {

                    xmindData = current;

                } else {

                    parent.push(current);

                }

            }, (children, dataWalker) => {

                if (children) {

                    dataWalker(children.attached, current.children);

                }

            });

            return xmindData;

        },
        _saveMarks : function (nodeId, groups) {

            let markList = Object.values(groups);
            let node = this.data.graph.findById(nodeId);
            let model = node.getModel();

            markList = arrayUniq(markList);
            markList = markList.filter(mark => (mark !== '0'));
            
            for (let index in markList) {

                markList[index] = markList[index].replace('-', ':');

            }

            if (model.mark === undefined) {

                model.mark = [];

            }

            model.mark = markList;
            this._traverseNodeUpdateMark(model);
            node.draw();
            this.data.graph.refreshLayout();

        },
        _importFile : function (file) {

            let nodeId = this.data.currentImportNode;
            let mode = this.data.currentImportMode;

            this.cancelImportFile();

            if (file.file.type === 'application/json') {

                file.file.text().then(text => {
                        
                    this.importFrom('json', text, nodeId, mode);

                });

            } else if (file.file.type === 'application/vnd.xmind.workbook') {

                file.file
                    .arrayBuffer()
                    .then(arrayBuffer => {
                        
                        let zip = new JSZip();

                        return zip
                            .loadAsync(arrayBuffer)
                            .then(content => (content.files['content.json']));

                    })
                    .then(contentFile => (
                        new TextDecoder('utf-8').decode(contentFile._data.compressedContent)
                    ))
                    .then(text => {

                        this.importFrom('xmind', text, nodeId, mode);

                    });

            }

        },
        _resetImportStatus : function () {

            this.data.currentImportNode = undefined;
            this.data.currentImportMode = undefined;

        },
        _pluckDataFromNodes : function (children) {

            let cleanData = [];

            for (let item of children) {

                let cleanItem = {
                    text : item.text,
                    note : item.note,
                    mark : item.mark,
                    link : item.link
                };

                if (item.children) {

                    cleanItem.children = this._pluckDataFromNodes(item.children);

                }

                cleanData.push(cleanItem);

            }

            return cleanData;

        },
        _parseNewNodeDataOne : function (data) {

            if (typeof data === 'string') {

                try {

                    data = JSON.parse(data);

                } catch (e) {}

            }

            data = Object.assign({
                text : '新的节点'
            }, data);

            return data;

        },
        _parseNewNodeData : function (data) {

            if (data instanceof Array) {

                for (let key in data) {

                    data[key] = this._parseNewNodeDataOne(data[key]);

                }

                return data;

            }

            return [this._parseNewNodeDataOne(data)];

        },
        downloadFile : function (type, nodeId) {

            let data = [this.data.graph.get('data')];

            if (nodeId) {

                data = [this.data.graph.findById(nodeId).getModel()];

            }

            // type is : xmind,png,json
            let dataResult = this[`_export${type.toUpperCase()}`](data);

            if (type === 'png') {

                this._downloadFile(dataResult, 'png');
            
            } else if (type === 'xmind') {

                dataResult.then(blob => this._downloadFile(URL.createObjectURL(blob), 'xmind'));

            } else if (type === 'json') {
                
                let blob = new Blob([JSON.stringify(dataResult, null, 4)]);

                this._downloadFile(URL.createObjectURL(blob), 'json');

            }

            return this;

        },
        exportToObject : function (nodeId) {

            let data = [this.data.graph.get('data')];

            if (nodeId) {

                data = [this.data.graph.findById(nodeId).getModel()];

            }

            return this._exportJSON(data);

        },
        importFromObject : function (data, nodeId, mode) {

            return this.importFrom('json', data, nodeId, mode);

        },
        importFrom : function (type, data, nodeId, mode = 'replace') {

            let xmindData = {};

            if (type === 'json') {

                if (typeof data === 'string') {
                    
                    data = JSON.parse(data);

                }
                xmindData = this._importJSON(data);

            } else if (type === 'xmind') {

                if (typeof data === 'string') {
                    
                    data = JSON.parse(data);

                }

                xmindData = this._importXMIND([data[0].rootTopic]);

            }

            if (nodeId) {

                let node = this.data.graph.findById(nodeId);
                let model = node.getModel();

                if (model.children === undefined) {

                    model.children = [];

                }

                if (mode === 'replace') {

                    model.children = [xmindData];

                } else if (mode === 'append') {

                    model.children = model.children.concat([xmindData]);

                } else if (mode === 'prepend') {

                    model.children = [xmindData].concat(model.children);

                }

                this.data.graph.changeData();
                this.data.graph.refreshLayout();

            } else {

                xmindData.isRoot = true;
                this._readData(xmindData);

            }

            return this;

        },
        showImportFile : function (nodeId, mode) {

            this.data.currentImportNode = nodeId;
            this.data.currentImportMode = mode;
            this.data.$importDialog.toggle(true);

        },
        cancelImportFile : function () {

            this.data.$importDialog.toggle(false);

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
        // 插入子节点
        insertSubNode : function (nodeId, datas, index = -1) {

            let node = this.data.graph.findById(nodeId);
            let model = node.getModel();
            let isSingle = (datas instanceof Array);

            datas = this._parseNewNodeData(datas);

            if (model.children === undefined) {

                model.children = [];

            }

            this._traverseNode(datas);

            if (index > -1) {

                let datas2 = Object.assign([], datas);

                datas2.reverse();

                for (let item of datas2) {
                
                    model.children.splice(index, 0, item);

                }

            } else {

                for (let item of datas) {
                
                    model.children.push(item);

                }

            }

            this.data.graph.changeData();
            this.data.graph.refreshLayout();
            
            if (isSingle) {

                return datas[0].id;

            }

            return map(datas, 'id');

        },
        copyNode : function (nodeId) {

            let node = this.data.graph.findById(nodeId);
            let model = node.getModel();
            let data = this._pluckDataFromNodes([model]);

            return data[0];

        },
        copyNodeToClipboard : function (nodeId) {

            let data = this.copyNode(nodeId);

            data = JSON.stringify(data);
            this.morning._mindmapClipboard = data;
            copy(data);

            return data;

        },
        // 插入唯一节点(向后)
        appendUniqueNode : function (nodeId, data) {

            let node = this.data.graph.findById(nodeId);
            let model = node.getModel();

            data = this._parseNewNodeData(data);
            data = data[0];
            data.children = this._pluckDataFromNodes(model.children);
            G6.Util.traverseTree(data, this._traverseOneNode);
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
            G6.Util.traverseTree(data, this._traverseOneNode);
            parentModel.children.splice(nodeIndexOfParent, 1, data);
            this.data.graph.changeData();
            this.data.graph.refreshLayout();

            return data.id;

        },
        deleteNode : function (nodeId) {

            let node = this.data.graph.findById(nodeId);
            let model = node.getModel();
            let parent = node.getInEdges()[0].getSource();
            let parentModel = parent.getModel();
            let indexOfParent = parentModel.children.indexOf(model);

            parentModel.children.splice(indexOfParent, 1);
            this.data.graph.changeData();
            this.data.graph.refreshLayout();

            return this;

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

            model.style = G6.Util.deepMix(model.style, style);
            node.draw();
            this.data.graph.refreshLayout();

        },
        zoom : function (zoom) {

            this.data.graph.zoomTo(zoom);

            return this;

        },
        getZoom : function () {

            return this.data.graph.getZoom();

        },
        fitView : function () {

            this.data.graph.fitView();

        },
        link : function (nodeId, link) {

            let node = this.data.graph.findById(nodeId);
            let model = node.getModel();

            model.link = link;
            node.draw();
            this.data.graph.refreshLayout();

        },
        unlink : function (nodeId) {

            let node = this.data.graph.findById(nodeId);
            let model = node.getModel();

            delete model.link;
            node.draw();
            this.data.graph.refreshLayout();

        },
        mark : function (nodeId, mark) {

            let node = this.data.graph.findById(nodeId);
            let model = node.getModel();

            if (model.mark === undefined) {

                model.mark = [];

            }

            model.mark.push(mark);
            model.mark = arrayUniq(model.mark);
            this._traverseNodeUpdateMark(model);
            node.draw();
            this.data.graph.refreshLayout();

        },
        unmark : function (nodeId, mark) {

            let node = this.data.graph.findById(nodeId);
            let model = node.getModel();
            let index = model.mark.indexOf(mark);

            if (index !== -1) {

                model.mark.splice(index, 1);

            }

            this._traverseNodeUpdateMark(model);
            node.draw();
            this.data.graph.refreshLayout();

        },
        note : function (nodeId, note) {

            let node = this.data.graph.findById(nodeId);
            let model = node.getModel();

            model.note = note;
            node.draw();
            this.data.graph.refreshLayout();

        },
        editLink : function (nodeId) {

            let node = this.data.graph.findById(nodeId);
            let model = node.getModel();

            this.data.currentEditLinkNodeId = nodeId;
            this.data.currentEditLinkValue = model.link;
            this.data.$editLinkDialog.toggle(true);

        },
        cancelEditLink : function () {

            this.data.currentEditLinkNodeId = 0;
            this.data.currentEditLinkValue = '';
            this.data.$editLinkDialog.toggle(false);

        },
        editNote : function (nodeId) {

            let node = this.data.graph.findById(nodeId);
            let model = node.getModel();

            this.data.currentEditNoteNodeId = nodeId;
            this.data.currentEditNoteValue = model.note;
            this.data.$editNoteDialog.toggle(true);

        },
        cancelEditNote : function () {

            this.data.currentEditNoteNodeId = 0;
            this.data.currentEditNoteValue = '';
            this.data.$editNoteDialog.toggle(false);

        },
        editMark : function (nodeId) {

            let node = this.data.graph.findById(nodeId);
            let model = node.getModel();
            let markGroups = {};

            this.data.currentEditMarkNodeId = nodeId;

            if (model._mark && model._mark.length > 0) {

                for (let mark of model._mark) {

                    markGroups[mark.split(':')[0]] = mark.replace(':', '-');

                }

            }

            markGroups = Object.assign({
                priority : '0',
                task : '0',
                flag : '0',
                star : '0'
            }, markGroups);

            this.data.currentEditMarkValue = markGroups;
            this.data.$editMarkDialog.toggle(true);

        },
        cancelEditMark : function () {

            this.data.currentEditMarkNodeId = 0;
            // this.data.currentEditMarkValue = {
            //     priority : '0',
            //     task : '0',
            //     flag : '0',
            //     star : '0'
            // };
            this.data.$editMarkDialog.toggle(false);

        },
        getSelectedNode : function () {

            return this.getAllSelectedNode()[0];

        },
        getAllSelectedNode : function () {

            let nodes = this.data.graph.findAllByState('node', 'selected');
            let nodeIds = [];

            for (let node of nodes) {

                nodeIds.push(node.get('id'));

            }

            return nodeIds;

        }
    },
    created : function () {

        let groups = {};

        for (let index in marks) {

            let mark = marks[index];
            let group = index.split(':')[0];

            if (groups[group] === undefined) {

                groups[group] = {
                    key : group,
                    name : markGourpsName[group],
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

        this.data.$canvas = this.$el.querySelector('.canvas');
        this.data.$editContent = this.$el.querySelector('.edit-content');
        this.data.$editContentInput = this.data.$editContent.querySelector('textarea');
        this.data.$nodeNote = this.$el.querySelector('.node-note');
        this.data.$notePopover = this.$refs[`mor-mindmap-note-${this.uiid}`];
        this.data.$editLinkDialog = this.$refs[`mor-mindmap-edit-link-${this.uiid}`];
        this.data.$editNoteDialog = this.$refs[`mor-mindmap-edit-note-${this.uiid}`];
        this.data.$editMarkDialog = this.$refs[`mor-mindmap-edit-mark-${this.uiid}`];
        this.data.$importDialog = this.$refs[`mor-mindmap-import-${this.uiid}`];

        // let data = {
        //     text : 'ClassificationClassification',
        //     isRoot : true,
        //     children : [
        //         {
        //             text : 'Logistic regression'
        //         },
        //         {
        //             text : 'Linear discriminant analysis'
        //         },
        //         {
        //             text : 'Rules'
        //         },
        //         {
        //             text : 'Decision trees'
        //         },
        //         {
        //             text : 'Naive Bayes'
        //         },
        //         {
        //             text : 'K nearest neighbor'
        //         },
        //         {
        //             text : 'Probabilistic neural network'
        //         },
        //         {
        //             text : 'Support vector machine'
        //         }
        //     ]
        // };

        // item includes :
        // - text
        // - note
        // - mark
        // - link
        // - isRoot*
        // - children*

        let data2 = {
            text : 'Modeling Methods',
            isRoot : true,
            children : [
                {
                    text : 'ClassificationClassification',
                    children : [
                        {
                            text : `Different in`,
                            note : 'hello',
                            mark : ['priority:1', 'priority:2', 'star:red']
                        },
                        {
                            text : 'Linear discriminant analysis'
                        },
                        {
                            text : 'Rules'
                        },
                        {
                            text : 'Decision trees'
                        },
                        {
                            text : 'Naive Bayes'
                        },
                        {
                            text : 'K nearest neighbor'
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

        // let data3 = {
        //     text : 'Modeling Methods',
        //     isRoot : true,
        //     children : [
        //         {
        //             text : 'ClassificationClassification',
        //             children : [
        //                 {
        //                     text : 'Logistic regression'
        //                 },
        //                 {
        //                     text : 'Linear discriminant analysis'
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

        this._registrar();
        this._createGraph();
        this._bindEvent();
        this._readData(data2);
        window.G6 = G6;

    }
};
</script>
