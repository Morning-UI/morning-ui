<template>
    <mor-texteditor
        :_uiid="uiid"
        :class="[formClass, stateClass, moreClass]"

        :form-name="formName"
        :form-key="formKey"
        :group="group"
        :default-value="defaultValue"
        :hide-name="hideName"
        :clearable="clearable"
        :tools="tools"
        :placeholder="placeholder"
    >

        <div class="note">{{conf.formName}}</div>

        <div class="editor-wrap">
        
            <div class="toolbar">
                <template v-for="group in conf.tools">
                    <div class="ql-formats">
                        <template v-for="tool in group">
                            <template v-if="typeof tool === 'object' && Object.keys(tool)[0] === 'header'">
                                <select class="ql-header" :id="'mor-te-tool-header-'+uiid">
                                    <template v-for="header in tool.header">
                                        <option value="" v-if="header === false">正常</option>
                                        <option value="1" v-if="header === 1">标题1</option>
                                        <option value="2" v-if="header === 2">标题2</option>
                                        <option value="3" v-if="header === 3">标题3</option>
                                        <option value="4" v-if="header === 4">标题4</option>
                                        <option value="5" v-if="header === 5">标题5</option>
                                        <option value="6" v-if="header === 6">标题6</option>
                                    </template>
                                </select>
                                <morning-tip :target="'#mor-te-tool-header-'+uiid" color="extra-light-black">设置标题</morning-tip>
                            </template>

                            <template v-if="typeof tool === 'object' && Object.keys(tool)[0] === 'size'">
                                <select class="ql-size" :id="'mor-te-tool-size-'+uiid">
                                    <template v-for="size in tool.size">
                                        <option :value="size || ''">{{size || '默认'}}</option>
                                    </template>
                                </select>
                                <morning-tip :target="'#mor-te-tool-size-'+uiid" color="extra-light-black">字体大小</morning-tip>
                            </template>

                            <template v-if="tool === 'undo'">
                                <button class="ql-undo" :id="'mor-te-tool-undo-'+uiid"></button>
                                <morning-tip :target="'#mor-te-tool-undo-'+uiid" color="extra-light-black">撤销</morning-tip>
                            </template>

                            <template v-if="tool === 'redo'">
                                <button class="ql-redo" :id="'mor-te-tool-redo-'+uiid"></button>
                                <morning-tip :target="'#mor-te-tool-redo-'+uiid" color="extra-light-black">重做</morning-tip>
                            </template>

                            <template v-if="tool === 'bold'">
                                <button class="ql-bold" :id="'mor-te-tool-bold-'+uiid"></button>
                                <morning-tip :target="'#mor-te-tool-bold-'+uiid" color="extra-light-black">加粗</morning-tip>
                            </template>

                            <template v-if="tool === 'italic'">
                                <button class="ql-italic" :id="'mor-te-tool-italic-'+uiid"></button>
                                <morning-tip :target="'#mor-te-tool-italic-'+uiid" color="extra-light-black">斜体</morning-tip>
                            </template>

                            <template v-if="tool === 'underline'">
                                <button class="ql-underline" :id="'mor-te-tool-underline-'+uiid"></button>
                                <morning-tip :target="'#mor-te-tool-underline-'+uiid" color="extra-light-black">下划线</morning-tip>
                            </template>

                            <template v-if="tool === 'strike'">
                                <button class="ql-strike" :id="'mor-te-tool-strike-'+uiid"></button>
                                <morning-tip :target="'#mor-te-tool-strike-'+uiid" color="extra-light-black">删除线</morning-tip>
                            </template>

                            <template v-if="typeof tool === 'object' && Object.keys(tool)[0] === 'color'">
                                <select class="ql-color" :id="'mor-te-tool-color-'+uiid">
                                    <template v-for="color in tool.color">
                                        <option :value="color"></option>
                                    </template>
                                </select>
                                <morning-tip :target="'#mor-te-tool-color-'+uiid" color="extra-light-black">文本颜色</morning-tip>
                            </template>

                            <template v-if="typeof tool === 'object' && Object.keys(tool)[0] === 'background'">
                                <select class="ql-background" :id="'mor-te-tool-background-'+uiid">
                                    <template v-for="background in tool.background">
                                        <option :value="background"></option>
                                    </template>
                                </select>
                                <morning-tip :target="'#mor-te-tool-background-'+uiid" color="extra-light-black">背景颜色</morning-tip>
                            </template>

                            <template v-if="typeof tool === 'object' && Object.keys(tool)[0] === 'align'">
                                <select class="ql-align" :id="'mor-te-tool-align-'+uiid">
                                    <template v-for="align in tool.align">
                                        <option :value="align"></option>
                                    </template>
                                </select>
                                <morning-tip :target="'#mor-te-tool-align-'+uiid" color="extra-light-black">文本对齐</morning-tip>
                            </template>

                            <template v-if="typeof tool === 'object' && Object.keys(tool)[0] === 'list' && tool.list === 'ordered'">
                                <button class="ql-list" value="ordered" :id="'mor-te-tool-list-ordered-'+uiid"></button>
                                <morning-tip :target="'#mor-te-tool-list-ordered-'+uiid" color="extra-light-black">有序列表</morning-tip>
                            </template>

                            <template v-if="typeof tool === 'object' && Object.keys(tool)[0] === 'list' && tool.list === 'bullet'">
                                <button class="ql-list" value="bullet" :id="'mor-te-tool-list-bullet-'+uiid"></button>
                                <morning-tip :target="'#mor-te-tool-list-bullet-'+uiid" color="extra-light-black">无序列表</morning-tip>
                            </template>

                            <template v-if="typeof tool === 'object' && Object.keys(tool)[0] === 'indent' && tool.indent === '-1'">
                                <button class="ql-indent" value="-1" :id="'mor-te-tool-indent--1-'+uiid"></button>
                                <morning-tip :target="'#mor-te-tool-indent--1-'+uiid" color="extra-light-black">减少缩进</morning-tip>
                            </template>

                            <template v-if="typeof tool === 'object' && Object.keys(tool)[0] === 'indent' && tool.indent === '+1'">
                                <button class="ql-indent" value="+1" :id="'mor-te-tool-indent-1-'+uiid"></button>
                                <morning-tip :target="'#mor-te-tool-indent-1-'+uiid" color="extra-light-black">增加缩进</morning-tip>
                            </template>

                            <template v-if="typeof tool === 'object' && Object.keys(tool)[0] === 'script' && tool.script === 'sub'">
                                <button class="ql-script" value="sub" :id="'mor-te-tool-script-sub-'+uiid"></button>
                                <morning-tip :target="'#mor-te-tool-script-sub-'+uiid" color="extra-light-black">下标</morning-tip>
                            </template>

                            <template v-if="typeof tool === 'object' && Object.keys(tool)[0] === 'script' && tool.script === 'super'">
                                <button class="ql-script" value="super" :id="'mor-te-tool-script-super-'+uiid"></button>
                                <morning-tip :target="'#mor-te-tool-script-super-'+uiid" color="extra-light-black">上标</morning-tip>
                            </template>

                            <template v-if="tool === 'blockquote'">
                                <button class="ql-blockquote" :id="'mor-te-tool-blockquote-'+uiid"></button>
                                <morning-tip :target="'#mor-te-tool-blockquote-'+uiid" color="extra-light-black">引用</morning-tip>
                            </template>

                            <template v-if="tool === 'code-block'">
                                <button class="ql-code-block" :id="'mor-te-tool-code-block-'+uiid"></button>
                                <morning-tip :target="'#mor-te-tool-code-block-'+uiid" color="extra-light-black">代码</morning-tip>
                            </template>

                            <template v-if="tool === 'clean'">
                                <button class="ql-clean" :id="'mor-te-tool-clean-'+uiid"></button>
                                <morning-tip :target="'#mor-te-tool-clean-'+uiid" color="extra-light-black">清除样式</morning-tip>
                            </template>

                            <template v-if="tool === 'link'">
                                <button class="ql-link" :id="'mor-te-tool-link-'+uiid"></button>
                                <morning-tip :target="'#mor-te-tool-link-'+uiid" color="extra-light-black">添加链接</morning-tip>
                            </template>
                        </template>
                    </div>
                </template>
            </div>
            <div class="quill"></div>
            
        </div>

        <morning-link v-if="conf.clearable" color="minor" @emit="_clean" class="cleanbtn">清空</morning-link>

    </mor-texteditor>
</template>
 
<script>
import Quill                        from 'quill/core';
import Toolbar                      from 'quill/modules/toolbar';
import Syntax                       from 'quill/modules/syntax';
import SnowTheme                    from 'quill/themes/snow';
import Icons                        from 'quill/ui/icons';
import {AlignStyle}                 from 'quill/formats/align';
import {BackgroundStyle}            from 'quill/formats/background';
import {ColorStyle}                 from 'quill/formats/color';
import {SizeStyle}                  from 'quill/formats/size';
import {IndentClass}                from 'quill/formats/indent';
import Blockquote                   from 'quill/formats/blockquote';
import CodeBlock, {Code}            from 'quill/formats/code';
import Header                       from 'quill/formats/header';
import List, {ListItem}             from 'quill/formats/list';
import Bold                         from 'quill/formats/bold';
import Italic                       from 'quill/formats/italic';
import Link                         from 'quill/formats/link';
import Script                       from 'quill/formats/script';
import Strike                       from 'quill/formats/strike';
import Underline                    from 'quill/formats/underline';

Icons.undo = require('quill/assets/icons/undo.svg');
Icons.redo = require('quill/assets/icons/redo.svg');
SizeStyle.whitelist = ['12px', '13px', '14px', '16px', '20px', '28px'];

Quill.register({
    'formats/align' : AlignStyle,
    'formats/indent' : IndentClass,
    'formats/background' : BackgroundStyle,
    'formats/color' : ColorStyle,
    'formats/size' : SizeStyle,
    'formats/blockquote' : Blockquote,
    'formats/code-block' : CodeBlock,
    'formats/header' : Header,
    'formats/list' : List,
    'formats/bold' : Bold,
    'formats/code' : Code,
    'formats/italic' : Italic,
    'formats/link' : Link,
    'formats/script' : Script,
    'formats/strike' : Strike,
    'formats/underline' : Underline,

    // 'formats/image': Image,
    // 'formats/video': Video,
    'formats/list/item' : ListItem,

    // 'modules/formula': Formula,
    // 'modules/history': History,
    'modules/toolbar' : Toolbar,
    'modules/syntax' : Syntax,

    // 'themes/bubble': BubbleTheme,
    'themes/snow' : SnowTheme,
    'ui/icons' : Icons
    // 'ui/picker': Picker,
    // 'ui/icon-picker': IconPicker,
    // 'ui/color-picker': ColorPicker
    // 'ui/tooltip': Tooltip
});

// this inline style form quill v1.3.6
const inlineStyle = `
    .mo-texteditor p,
    .mo-texteditor ol,
    .mo-texteditor ul,
    .mo-texteditor pre,
    .mo-texteditor blockquote,
    .mo-texteditor h1,
    .mo-texteditor h2,
    .mo-texteditor h3,
    .mo-texteditor h4,
    .mo-texteditor h5,
    .mo-texteditor h6 {
      margin: 0;
      padding: 0;
      counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;
    }
    .mo-texteditor ol,
    .mo-texteditor ul {
      padding-left: 1.5em;
    }
    .mo-texteditor ol > li,
    .mo-texteditor ul > li {
      list-style-type: none;
    }
    .mo-texteditor li::before {
      display: inline-block;
      white-space: nowrap;
      width: 1.2em;
    }
    .mo-texteditor li::before {
      margin-left: -1.5em;
      margin-right: 0.3em;
      text-align: right;
    }
    .mo-texteditor ol li,
    .mo-texteditor ul li {
      padding-left: 1.5em;
    }
    .mo-texteditor ol li {
      counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;
      counter-increment: list-0;
    }
    .mo-texteditor ol li:before {
      content: counter(list-0, decimal) '. ';
    }
    .mo-texteditor ol li.ql-indent-1 {
      counter-increment: list-1;
    }
    .mo-texteditor ol li.ql-indent-1:before {
      content: counter(list-1, lower-alpha) '. ';
    }
    .mo-texteditor ol li.ql-indent-1 {
      counter-reset: list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;
    }
    .mo-texteditor ol li.ql-indent-2 {
      counter-increment: list-2;
    }
    .mo-texteditor ol li.ql-indent-2:before {
      content: counter(list-2, lower-roman) '. ';
    }
    .mo-texteditor ol li.ql-indent-2 {
      counter-reset: list-3 list-4 list-5 list-6 list-7 list-8 list-9;
    }
    .mo-texteditor ol li.ql-indent-3 {
      counter-increment: list-3;
    }
    .mo-texteditor ol li.ql-indent-3:before {
      content: counter(list-3, decimal) '. ';
    }
    .mo-texteditor ol li.ql-indent-3 {
      counter-reset: list-4 list-5 list-6 list-7 list-8 list-9;
    }
    .mo-texteditor ol li.ql-indent-4 {
      counter-increment: list-4;
    }
    .mo-texteditor ol li.ql-indent-4:before {
      content: counter(list-4, lower-alpha) '. ';
    }
    .mo-texteditor ol li.ql-indent-4 {
      counter-reset: list-5 list-6 list-7 list-8 list-9;
    }
    .mo-texteditor ol li.ql-indent-5 {
      counter-increment: list-5;
    }
    .mo-texteditor ol li.ql-indent-5:before {
      content: counter(list-5, lower-roman) '. ';
    }
    .mo-texteditor ol li.ql-indent-5 {
      counter-reset: list-6 list-7 list-8 list-9;
    }
    .mo-texteditor ol li.ql-indent-6 {
      counter-increment: list-6;
    }
    .mo-texteditor ol li.ql-indent-6:before {
      content: counter(list-6, decimal) '. ';
    }
    .mo-texteditor ol li.ql-indent-6 {
      counter-reset: list-7 list-8 list-9;
    }
    .mo-texteditor ol li.ql-indent-7 {
      counter-increment: list-7;
    }
    .mo-texteditor ol li.ql-indent-7:before {
      content: counter(list-7, lower-alpha) '. ';
    }
    .mo-texteditor ol li.ql-indent-7 {
      counter-reset: list-8 list-9;
    }
    .mo-texteditor ol li.ql-indent-8 {
      counter-increment: list-8;
    }
    .mo-texteditor ol li.ql-indent-8:before {
      content: counter(list-8, lower-roman) '. ';
    }
    .mo-texteditor ol li.ql-indent-8 {
      counter-reset: list-9;
    }
    .mo-texteditor ol li.ql-indent-9 {
      counter-increment: list-9;
    }
    .mo-texteditor ol li.ql-indent-9:before {
      content: counter(list-9, decimal) '. ';
    }
    .mo-texteditor .ql-indent-1 {
      padding-left: 3em;
    }
    .mo-texteditor li.ql-indent-1 {
      padding-left: 4.5em;
    }
    .mo-texteditor .ql-indent-2 {
      padding-left: 6em;
    }
    .mo-texteditor li.ql-indent-2 {
      padding-left: 7.5em;
    }
    .mo-texteditor .ql-indent-3 {
      padding-left: 9em;
    }
    .mo-texteditor li.ql-indent-3 {
      padding-left: 10.5em;
    }
    .mo-texteditor .ql-indent-4 {
      padding-left: 12em;
    }
    .mo-texteditor li.ql-indent-4 {
      padding-left: 13.5em;
    }
    .mo-texteditor .ql-indent-5 {
      padding-left: 15em;
    }
    .mo-texteditor li.ql-indent-5 {
      padding-left: 16.5em;
    }
    .mo-texteditor .ql-indent-6 {
      padding-left: 18em;
    }
    .mo-texteditor li.ql-indent-6 {
      padding-left: 19.5em;
    }
    .mo-texteditor .ql-indent-7 {
      padding-left: 21em;
    }
    .mo-texteditor li.ql-indent-7 {
      padding-left: 22.5em;
    }
    .mo-texteditor .ql-indent-8 {
      padding-left: 24em;
    }
    .mo-texteditor li.ql-indent-8 {
      padding-left: 25.5em;
    }
    .mo-texteditor .ql-indent-9 {
      padding-left: 27em;
    }
    .mo-texteditor li.ql-indent-9 {
      padding-left: 28.5em;
    }
    .mo-texteditor.ql-blank::before {
      color: rgba(0,0,0,0.6);
      content: attr(data-placeholder);
      font-style: italic;
      left: 15px;
      pointer-events: none;
      position: absolute;
      right: 15px;
    }
    .mo-texteditor {
      box-sizing: border-box;
    }
    .mo-texteditor * {
      box-sizing: border-box;
    }
    .mo-texteditor .ql-stroke {
      fill: none;
      stroke: #444;
      stroke-linecap: round;
      stroke-linejoin: round;
      stroke-width: 2;
    }
    .mo-texteditor .ql-stroke-miter {
      fill: none;
      stroke: #444;
      stroke-miterlimit: 10;
      stroke-width: 2;
    }
    .mo-texteditor .ql-fill,
    .mo-texteditor .ql-stroke.ql-fill {
      fill: #444;
    }
    .mo-texteditor .ql-empty {
      fill: none;
    }
    .mo-texteditor .ql-even {
      fill-rule: evenodd;
    }
    .mo-texteditor.ql-thin,
    .mo-texteditor.ql-stroke.ql-thin {
      stroke-width: 1;
    }
    .mo-texteditor .ql-transparent {
      opacity: 0.4;
    }
    .mo-texteditor h1 {
      font-size: 2em;
    }
    .mo-texteditor h2 {
      font-size: 1.5em;
    }
    .mo-texteditor h3 {
      font-size: 1.17em;
    }
    .mo-texteditor h4 {
      font-size: 1em;
    }
    .mo-texteditor h5 {
      font-size: 0.83em;
    }
    .mo-texteditor h6 {
      font-size: 0.67em;
    }
    .mo-texteditor a {
      text-decoration: underline;
    }
    .mo-texteditor blockquote {
      border-left: 4px solid #ccc;
      margin-bottom: 5px;
      margin-top: 5px;
      padding-left: 16px;
    }
    .mo-texteditor code,
    .mo-texteditor pre {
      background-color: #f0f0f0;
      border-radius: 3px;
    }
    .mo-texteditor pre {
      white-space: pre-wrap;
      margin-bottom: 5px;
      margin-top: 5px;
      padding: 5px 10px;
    }
    .mo-texteditor code {
      font-size: 85%;
      padding: 2px 4px;
    }
    .mo-texteditor pre.ql-syntax {
      background-color: #23241f;
      color: #f8f8f2;
      overflow: visible;
    }
    .mo-texteditor img {
      max-width: 100%;
    }
    .mo-texteditor a {
      color: #06c;
    }
`;

export default {
    origin : 'Form',
    name : 'texteditor',
    props : {
        tools : {
            type : Array,
            default : (() => [
                [
                    {
                        header : [false, 1, 2, 3, 4, 5, 6]
                    },
                    {
                        size : [false, '12px', '13px', '14px', '16px', '20px', '28px']
                    }
                ],
                ['undo', 'redo'],
                ['bold', 'italic', 'underline', 'strike'],
                [
                    {
                        color : []
                    },
                    {
                        background : []
                    }
                ],
                [
                    {
                        align : []
                    },
                    {
                        list : 'ordered'
                    },
                    {
                        list : 'bullet'
                    },
                    {
                        indent : '-1'
                    },
                    {
                        indent : '+1'
                    }
                ],
                [
                    {
                        script : 'sub'
                    },
                    {
                        script : 'super'
                    },
                    'blockquote',
                    'code-block'
                ],
                ['link'],
                ['clean']
            ])
        },
        placeholder : {
            type : String,
            default : ''
        }
    },
    computed : {
        _conf : function () {

            return {
                tools : this.tools,
                placeholder : this.placeholder
            };

        },
        moreClass : function () {

            return {
                'hide-name' : !!this.conf.hideName
            };

        }
    },
    data : function () {

        return {
            data : {
                quill : null,
                dontSetHtml : false
            }
        };

    },
    methods : {
        _valueFilter : function (value) {

            if (value === undefined) {

                return value;

            }

            return String(value);

        },
        _refreshQuillHeight : function () {

            let $quill = this.$el.querySelector('.quill');
            let $toolbar = this.$el.querySelector('.toolbar');

            $quill.style.height = `calc(100% - ${$toolbar.clientHeight}px)`;

        },
        getHtml : function () {

            let html = this.$el.querySelector('.ql-editor').innerHTML;

            html = `<style class="mo-texteditor-style">${inlineStyle.replace(/(\n|[ ]{2})/g, '')}</style><div class="mo-texteditor">${html}</div>`;

            return html;

        },
        setHtml : function (html, ignoreDisabled) {

            if (this.data.dontSetHtml ||
                (this.conf.state === 'disabled' && !ignoreDisabled)) {

                return this;

            }

            if (html === undefined) {

                this.data.quill.deleteText(0, this.data.quill.getLength());

                return this;

            }

            if (html.search('<div class="mo-texteditor">') !== -1) {

                let $cleanDiv = document.createElement('div');

                $cleanDiv.innerHTML = html;

                let $texteditor = $cleanDiv.querySelector('.mo-texteditor');

                if ($texteditor) {

                    html = $texteditor.innerHTML;

                }

            }

            this.data.quill.clipboard.dangerouslyPasteHTML(html);

            return this;

        }
    },
    created : function () {},
    mounted : function () {

        this.data.quill = new Quill(this.$el.querySelector('.quill'), {
            theme : 'snow',
            placeholder : this.conf.placeholder,
            modules : {
                toolbar : {
                    container : this.$el.querySelector('.toolbar'),
                    handlers : {
                        undo : () => {

                            this.data.quill.history.undo();

                        },
                        redo : () => {

                            this.data.quill.history.redo();

                        }
                    }
                }
            }
        });

        this.data.quill.on('text-change', () => {

            this.data.dontSetHtml = true;
            this._set(this.getHtml(), true);

            this.Vue.nextTick(() => {

                this.data.dontSetHtml = false;
    
            });

        });

        this.data.quill.on('selection-change', () => {

            this.$emit('selection-change');

        });

        this.$watch('conf.state', () => {

            if (this.conf.state === 'disabled' ||
                this.conf.state === 'readonly') {

                this.data.quill.disable();

            } else {

                this.data.quill.enable();

            }

        }, {
            immediate : true
        });

        this.$on('value-change', () => {

            this.setHtml(this.get());

        });

        this.Vue.nextTick(() => {

            this.setHtml(this.get(), true);

        });

    },
    updated : function () {

        this._refreshQuillHeight();

    }
};
</script>

<style lang="less" src="./index.less"></style>
