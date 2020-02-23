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
import modifyCSS                    from '@antv/dom-util/lib/modify-css.js';
import sortBy                       from 'lodash.sortby';
import throttle                     from 'lodash.throttle';
// import arrayUniq                    from 'array-uniq';
import GlobalEvent                  from 'Utils/GlobalEvent';

// eslint-disable-next-line no-unused-vars
import xmindSdk                     from 'xmind-sdk/dist/xmind-sdk.bundle.js';
// import {parse} from 'date-fns';
// import clipboardCopy from 'clipboard-copy';
import MARKS                        from './const/marks';
import SHAPE_INDEX                  from './const/shapeIndex';
import ANNEX_LIST                   from './const/annexList';
import ANNEX_PADDING                from './const/annexPadding';

import BaseEvent                    from './base/event';
import BaseGraph                    from './base/graph';
import BaseRegistrar                from './base/registrar';
import MixinMark                    from './mixins/mark';
import MixinLink                    from './mixins/link';
import MixinNote                    from './mixins/note';
import MixinTag                     from './mixins/tag';
import MixinZoom                    from './mixins/zoom';
import MixinInsert                  from './mixins/insert';
import MixinMove                    from './mixins/move';
import MixinCopy                    from './mixins/copy';
import MixinDelete                  from './mixins/delete';
import MixinSelect                  from './mixins/select';
import MixinImport                  from './mixins/import';
import MixinExport                  from './mixins/export';
import MixinStyling                 from './mixins/styling';
import MixinGetData                 from './mixins/getData';

const PolylineUtil = require('@antv/g6/lib/shape/edges/polyline-util');

/* eslint-disable no-unused-vars, no-magic-numbers */
const outlinePadding = 3;
const annexMargin = {
    left : 8
};
const tagPadding = {
    x : 8,
    y : 6
};
const markConPaddingRight = 10;
const dragRefreshInterval = 160;
const lineColor = 'rgba(51, 51, 51, 1)';
const lineWidth = 2;
const placeholderColor = 'rgba(147, 233, 245, 1)';

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
const markGourpsName = {
    priority : '优先级',
    task : '任务',
    flag : '旗帜',
    star : '星星',
    status : '状态'
};
/* eslint-enable no-unused-vars, no-magic-numbers */

// <i class="mo-icon mo-icon-error-cf cleanicon" v-show="(conf.state !== 'readonly' && conf.state !== 'disabled') && conf.insideClearable &&  data.value" @click.stop="set(undefined)"></i>
export default {
    origin : 'Form',
    name : 'mindmap',
    mixins : [
        GlobalEvent,
        BaseEvent,
        BaseGraph,
        BaseRegistrar,
        MixinMark,
        MixinLink,
        MixinNote,
        MixinTag,
        MixinZoom,
        MixinInsert,
        MixinMove,
        MixinCopy,
        MixinDelete,
        MixinSelect,
        MixinImport,
        MixinExport,
        MixinStyling,
        MixinGetData
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
                graph : null,
                $canvas : null,
                $editContent : null,
                $editContentInput : null,
                $nodeNote : null,
                $notePopover : null,
                $editLinkDialog : null,
                $editNoteDialog : null,
                $editMarkDialog : null,
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
                $importDialog : null,
                currentImportNode : undefined,
                currentImportMode : 'replace',
                mouseOnCanvas : false,
                keydownState : {
                    mod : false
                }
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
        _getGroupShapes : function (item) {

            let box = item.getKeyShape();
            let group = box.getParent();
            let con = group.getChildren()[SHAPE_INDEX.CON];
            let outline = group.getChildren()[SHAPE_INDEX.OUTLINE];
            let text = group.getChildren()[SHAPE_INDEX.TEXT];
            let placeholder = group.getChildren()[SHAPE_INDEX.PLACEHOLDER];
            let bottomline = group.getChildren()[SHAPE_INDEX.BOTTOMLINE];
            let markConGroup = group.getChildren()[SHAPE_INDEX.MARKCON_GROUPINDEX];
            let appendConGroup = group.getChildren()[SHAPE_INDEX.APPENDCON_GROUPINDEX];

            return {
                con,
                box,
                text,
                outline,
                placeholder,
                bottomline,
                markConGroup,
                appendConGroup
            };

        },
        _refreshNodeEdges : function (edges) {

            for (let edge of edges) {

                edge.refresh();

            }

        },
        _refreshNodeNotePosition : function (node, noteConIndex) {

            let groupShapes = this._getGroupShapes(node);
            let noteConBbox = groupShapes.appendConGroup.getChildren()[noteConIndex].getBBox();
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

            const padding = 5;

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
            // this.data.$editContentInput.style.color = textAttr.fill;
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
            this.data.editContent = '';
            this.data.editGroupShapes = {};
            this.data.editZoom = 1;
            this.data.editNode.setState('editing', false);
            this.data.editNode = null;
            this.data.graph.layout();
            this.Vue.nextTick(() => {
                
                this.data.editting = false;
            
            });

        },
        _manualPaint : function (paintCallback) {
    
            let autoPaint = this.data.graph.get('autoPaint');

            paintCallback();

            this.data.graph.paint();
            this.data.graph.setAutoPaint(autoPaint);

        },
        _editAppendNewline : function () {

            let content = this.data.editContent;
            
            this.data.editContent = content;
            this._editInput();

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
            // this.data.graph.layout();

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
                this.data.graph.layout();
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
                .getChildren()[SHAPE_INDEX.TEXT][
                    type
                ]();
            node
                .get('group')
                .getChildren()[SHAPE_INDEX.CON][
                    type
                ]();
            node
                .get('group')
                .getChildren()[SHAPE_INDEX.BOTTOMLINE][
                    type
                ]();
            node
                .get('group')
                .getChildren()[SHAPE_INDEX.MARKCON_GROUPINDEX][
                    type
                ]();
            node
                .get('group')
                .getChildren()[SHAPE_INDEX.APPENDCON_GROUPINDEX][
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
                this.data.graph.layout();

            } else if (!dragging && dragTarget.hidden) {

                dragTarget.hidden = false;

                this.data.dragHolderIndexOfParentChildren = this.data.dragHolderIndexOfParentChildren + targetNodes.length;
                this.data.graph.paint();
                this.data.graph.changeData();
                this.data.graph.layout();

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
                markConGroup,
                appendConGroup
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
            let markConGroupBbox = markConGroup.getBBox();
            let appendConGroupBbox = appendConGroup.getBBox();

            if (model.note || model.link) {

                conWidth += conPaddingX / 2;

            }

            if (model._mark && model._mark.length > 0) {

                conWidth += markConGroupBbox.width;

            }

            if (model.link || model.note || (model.tag && model.tag.length > 0)) {

                conWidth += appendConGroupBbox.width;

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
            
            this._refreshAppendConGroupPosition(groupShapes, model);

        },
        _refreshAppendConGroupPosition : function (groupShapes, model) {

            let {
                text,
                markConGroup,
                appendConGroup
            } = groupShapes;
            let style = this._getNodeStyles(mindNodeStyle, model);
            let conPaddingX = style.fontSize * 1.5;
            let conPaddingY = style.fontSize * 0.75;
            let appends = this._getAppends(model);
            let textBbox = text.getBBox();
            let markConGroupBbox = markConGroup.getBBox();

            if (appends && appends.length > 0) {

                let appendWidthTotal = 0;

                for (let index in appends) {

                    let appendCon = appendConGroup.getChildren()[index * 2];
                    let appendText = appendConGroup.getChildren()[(index * 2) + 1];
                    let appendConBbox = appendCon.getBBox();
                    let appendTextBbox = appendText.getBBox();
                    let appendConX = textBbox.width + markConGroupBbox.width + conPaddingX + annexMargin.left;
                    let x = appendConX + appendWidthTotal;

                    appendCon.attr({
                        x,
                        y : (-appendTextBbox.height / 2) + conPaddingY + ANNEX_PADDING.Y
                    });
                    appendText.attr({
                        x : x + (appendTextBbox.width / 2) + ANNEX_PADDING.X,
                        y : (appendTextBbox.height / 2) + conPaddingY
                    });

                    appendWidthTotal += appendConBbox.width + annexMargin.left;

                }

            }
            
        },
        _getAppends : function (model) {

            let style = this._getNodeStyles(mindNodeStyle, model);
            let appends = [];

            if (model.link) {

                appends.push({
                    fontFamily : 'morningicon',
                    fontSize : style.fontSize,
                    genText : () => String.fromCharCode(parseInt('e704;', 16))
                });

            }

            if (model.note) {

                appends.push({
                    fontFamily : 'morningicon',
                    fontSize : style.fontSize,
                    fill : 'transparent',
                    genText : () => String.fromCharCode(parseInt('e605;', 16))
                });

            }

            if (model.tag) {
                
                for (let tag of model.tag) {

                    appends.push({
                        fontFamily : undefined,
                        fontSize : style.fontSize,
                        fill : tag.background || '#E0E0E0',
                        textFill : tag.color || '#000000',
                        genText : () => tag.text || tag
                    });

                }

            }

            return appends;

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
        _editNode : function (nodeId, clean = false) {

            let node = this.data.graph.findById(nodeId);
            let groupShapes = this._getGroupShapes(node);

            this.data.editting = true;
            this.data.editGroupShapes = groupShapes;
            this.data.editNode = node;
            this._refreshEditorPosition(node);
            groupShapes.text.attr({
                opacity : 0
            });
            this.data.editNode.setState('editing', true);
            this.data.graph.paint();
            this.data.$editContentInput.focus();

            if (clean) {

                setTimeout(() => {

                    this.data.editContent = this
                        .data
                        .editContent
                        .split('')
                        .slice(-1)
                        .join('');
                    this._editInput();

                });

            }

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

                        let markConGroup = evt.item.get('group').getChildren()[SHAPE_INDEX.MARKCON_GROUPINDEX];
                        let markCon = markConGroup.getChildren()[index * 2];

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
                    
                    // TODO
                    if (routeCfg) {
                        
                        return vm._getPathWithBorderRadiusByPolyline(points, routeCfg.radius);

                    }

                    console.log('warn no routeCfg:', points, routeCfg);
                
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

                },
                getCustomConfig : function () {

                    return {
                        style : {
                            lineWidth : placeholderEdgeStyle.borderWidth,
                            stroke : placeholderEdgeStyle.borderColor,
                            radius : placeholderEdgeStyle.radius
                        }
                    };
                
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

                        modifyCSS(evt.currentTarget._cfg.canvas._cfg.canvasDOM, {
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

                    if (!vm.data.keydownState.mod) {
                        
                        vm._clearSelectedNode(this.selectedState);
                    
                    }

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

                        modifyCSS(this.graph._cfg.canvas._cfg.canvasDOM, {
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
                    this.graph.layout();
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
        _traverseNodeUpdateMark : function (item) {

            if (item.mark && item.mark.length > 0) {

                let mark = {};

                for (let index in item.mark) {

                    let name = item.mark[index];
                    let group = name.split(':')[0];

                    if (MARKS[name]) {
                        
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
        _pluckDataFromNodes : function (children) {

            let cleanData = [];

            for (let item of children) {

                let cleanItem = {
                    text : item.text,
                    note : item.note,
                    mark : item.mark,
                    link : item.link,
                    tag : item.tag
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
        _fillNodeIds : function (nodeIds) {

            if (typeof nodeIds === 'number') {

                return [nodeIds];

            }

            return nodeIds;

        },
        _sliderZoomChange : function () {

            let zoom = this.$refs['mor-mindmap-zoomslider'].get() / 100;

            this.zoom(zoom);

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

        let defaultData = {
            text : '新建主题',
            isRoot : true
        };

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

        this._registrar();
        this._createGraph();
        this._bindEvent();
        this._readData(data2);
        // this._readData(defaultData);

        this._globalEventAdd('keydown', '_onGlobalKeydown');
        this._globalEventAdd('keyup', '_onGlobalKeyup');

    },
    beforeDestroy : function () {

        this._globalEventRemove('keydown', '_onGlobalKeydown');
        this._globalEventRemove('keyup', '_onGlobalKeyup');

    }
};
</script>

