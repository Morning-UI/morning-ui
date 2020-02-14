<template>
    <mor-texteditor
        :_uiid="uiid"
        :class="[formClass, stateClass, moreClass]"

        :form-name="formName"
        :form-note="formNote"
        :form-key="formKey"
        :group="group"
        :hide-name="hideName"
        :clearable="clearable"
        :_errorMessage="_errorMessage"
        :inside-name="insideName"
        :tools="tools"
        :markdown="markdown"
        :plain-clipboard="plainClipboard"
        :inline-style="inlineStyle"
        :uploader="uploader"
    >
    
        <div class="form-name" v-if="!conf.hideName && !!conf.formName">{{conf.formName}}</div>
        <div class="form-note" v-if="!!conf.formNote">{{conf.formNote}}</div>

        <div class="editor-wrap form-body" :class="{focus : data.quillFocus}">
            <div class="toolbar">
                <div v-if="conf.markdown" class="editor-logo" title="Markdown编辑">
                    <i class="mo-icon mo-icon-markdown-f"></i>
                </div>
                <div v-else class="editor-logo" title="富文本编辑">
                    <i class="mo-icon mo-icon-doc-f"></i>
                </div>
                <template v-for="(group, index) in toolSet">
                    <div class="ql-formats" :key="index">
                        <template v-for="(tool, sindex) in group">
                            <template v-if="typeof tool === 'object' && Object.keys(tool)[0] === 'header'">
                                <select class="ql-header" :key="sindex" :id="'mor-te-tool-header-'+uiid">
                                    <template v-for="(header, tindex) in tool.header">
                                        <option value="" :key="tindex" v-if="header === false">正常</option>
                                        <option value="1" :key="tindex" v-if="header === 1">标题1</option>
                                        <option value="2" :key="tindex" v-if="header === 2">标题2</option>
                                        <option value="3" :key="tindex" v-if="header === 3">标题3</option>
                                        <option value="4" :key="tindex" v-if="header === 4">标题4</option>
                                        <option value="5" :key="tindex" v-if="header === 5">标题5</option>
                                        <option value="6" :key="tindex" v-if="header === 6">标题6</option>
                                    </template>
                                </select>
                                <morning-tip :key="sindex" :target="'#mor-te-tool-header-'+uiid" color="neutral-10">设置标题</morning-tip>
                            </template>

                            <template v-if="typeof tool === 'object' && Object.keys(tool)[0] === 'size'">
                                <select class="ql-size" :key="sindex" :id="'mor-te-tool-size-'+uiid">
                                    <template v-for="(size, tindex) in tool.size">
                                        <option :value="size || ''" :key="tindex">{{size || '默认'}}</option>
                                    </template>
                                </select>
                                <morning-tip :key="sindex" :target="'#mor-te-tool-size-'+uiid" color="neutral-10">字体大小</morning-tip>
                            </template>

                            <template v-if="tool === 'undo'">
                                <button :key="sindex" class="ql-undo" :id="'mor-te-tool-undo-'+uiid"></button>
                                <morning-tip :key="sindex" :target="'#mor-te-tool-undo-'+uiid" color="neutral-10">撤销</morning-tip>
                            </template>

                            <template v-if="tool === 'redo'">
                                <button :key="sindex" class="ql-redo" :id="'mor-te-tool-redo-'+uiid"></button>
                                <morning-tip :key="sindex" :target="'#mor-te-tool-redo-'+uiid" color="neutral-10">重做</morning-tip>
                            </template>

                            <template v-if="tool === 'bold'">
                                <button :key="sindex" class="ql-bold" :id="'mor-te-tool-bold-'+uiid"></button>
                                <morning-tip :key="sindex" :target="'#mor-te-tool-bold-'+uiid" color="neutral-10">加粗</morning-tip>
                            </template>

                            <template v-if="tool === 'italic'">
                                <button :key="sindex" class="ql-italic" :id="'mor-te-tool-italic-'+uiid"></button>
                                <morning-tip :key="sindex" :target="'#mor-te-tool-italic-'+uiid" color="neutral-10">斜体</morning-tip>
                            </template>

                            <template v-if="tool === 'underline'">
                                <button :key="sindex" class="ql-underline" :id="'mor-te-tool-underline-'+uiid"></button>
                                <morning-tip :key="sindex" :target="'#mor-te-tool-underline-'+uiid" color="neutral-10">下划线</morning-tip>
                            </template>

                            <template v-if="tool === 'strike'">
                                <button :key="sindex" class="ql-strike" :id="'mor-te-tool-strike-'+uiid"></button>
                                <morning-tip :key="sindex" :target="'#mor-te-tool-strike-'+uiid" color="neutral-10">删除线</morning-tip>
                            </template>

                            <template v-if="tool === 'divider'">
                                <button :key="sindex" class="ql-divider" :id="'mor-te-tool-divider-'+uiid"></button>
                                <morning-tip :key="sindex" :target="'#mor-te-tool-divider-'+uiid" color="neutral-10">横划线</morning-tip>
                            </template>

                            <template v-if="typeof tool === 'object' && Object.keys(tool)[0] === 'color'">
                                <select :key="sindex" class="ql-color" :id="'mor-te-tool-color-'+uiid">
                                    <template v-for="(color, tindex) in tool.color">
                                        <option :value="color" :key="tindex"></option>
                                    </template>
                                </select>
                                <morning-tip :key="sindex" :target="'#mor-te-tool-color-'+uiid" color="neutral-10">文本颜色</morning-tip>
                            </template>

                            <template v-if="typeof tool === 'object' && Object.keys(tool)[0] === 'background'">
                                <select :key="sindex" class="ql-background" :id="'mor-te-tool-background-'+uiid">
                                    <template v-for="(background, tindex) in tool.background">
                                        <option :value="background" :key="tindex"></option>
                                    </template>
                                </select>
                                <morning-tip :key="sindex" :target="'#mor-te-tool-background-'+uiid" color="neutral-10">背景颜色</morning-tip>
                            </template>

                            <template v-if="typeof tool === 'object' && Object.keys(tool)[0] === 'align'">
                                <select :key="sindex" class="ql-align" :id="'mor-te-tool-align-'+uiid">
                                    <template v-for="(align, tindex) in tool.align">
                                        <option :value="align" :key="tindex"></option>
                                    </template>
                                </select>
                                <morning-tip :key="sindex" :target="'#mor-te-tool-align-'+uiid" color="neutral-10">文本对齐</morning-tip>
                            </template>

                            <template v-if="typeof tool === 'object' && Object.keys(tool)[0] === 'list' && tool.list === 'ordered'">
                                <button :key="sindex" class="ql-list" value="ordered" :id="'mor-te-tool-list-ordered-'+uiid"></button>
                                <morning-tip :key="sindex" :target="'#mor-te-tool-list-ordered-'+uiid" color="neutral-10">有序列表</morning-tip>
                            </template>

                            <template v-if="typeof tool === 'object' && Object.keys(tool)[0] === 'list' && tool.list === 'bullet'">
                                <button :key="sindex" class="ql-list" value="bullet" :id="'mor-te-tool-list-bullet-'+uiid"></button>
                                <morning-tip :key="sindex" :target="'#mor-te-tool-list-bullet-'+uiid" color="neutral-10">无序列表</morning-tip>
                            </template>

                            <template v-if="typeof tool === 'object' && Object.keys(tool)[0] === 'indent' && tool.indent === '-1'">
                                <button :key="sindex" class="ql-indent" value="-1" :id="'mor-te-tool-indent--1-'+uiid"></button>
                                <morning-tip :key="sindex" :target="'#mor-te-tool-indent--1-'+uiid" color="neutral-10">减少缩进</morning-tip>
                            </template>

                            <template v-if="typeof tool === 'object' && Object.keys(tool)[0] === 'indent' && tool.indent === '+1'">
                                <button :key="sindex" class="ql-indent" value="+1" :id="'mor-te-tool-indent-1-'+uiid"></button>
                                <morning-tip :key="sindex" :target="'#mor-te-tool-indent-1-'+uiid" color="neutral-10">增加缩进</morning-tip>
                            </template>

                            <template v-if="typeof tool === 'object' && Object.keys(tool)[0] === 'script' && tool.script === 'sub'">
                                <button :key="sindex" class="ql-script" value="sub" :id="'mor-te-tool-script-sub-'+uiid"></button>
                                <morning-tip :key="sindex" :target="'#mor-te-tool-script-sub-'+uiid" color="neutral-10">下标</morning-tip>
                            </template>

                            <template v-if="typeof tool === 'object' && Object.keys(tool)[0] === 'script' && tool.script === 'super'">
                                <button :key="sindex" class="ql-script" value="super" :id="'mor-te-tool-script-super-'+uiid"></button>
                                <morning-tip :key="sindex" :target="'#mor-te-tool-script-super-'+uiid" color="neutral-10">上标</morning-tip>
                            </template>

                            <template v-if="tool === 'blockquote'">
                                <button :key="sindex" class="ql-blockquote" :id="'mor-te-tool-blockquote-'+uiid"></button>
                                <morning-tip :key="sindex" :target="'#mor-te-tool-blockquote-'+uiid" color="neutral-10">引用</morning-tip>
                            </template>

                            <template v-if="tool === 'code-block'">
                                <button :key="sindex" class="ql-code-block" :id="'mor-te-tool-code-block-'+uiid"></button>
                                <morning-tip :key="sindex" :target="'#mor-te-tool-code-block-'+uiid" color="neutral-10">代码</morning-tip>
                            </template>

                            <template v-if="tool === 'clean'">
                                <button :key="sindex" class="ql-clean" :id="'mor-te-tool-clean-'+uiid"></button>
                                <morning-tip :key="sindex" :target="'#mor-te-tool-clean-'+uiid" color="neutral-10">清除样式</morning-tip>
                            </template>

                            <template v-if="tool === 'link'">
                                <button :key="sindex" class="ql-link" :id="'mor-te-tool-link-'+uiid"></button>
                                <morning-tip :key="sindex" :target="'#mor-te-tool-link-'+uiid" color="neutral-10">链接(请先选中文本)</morning-tip>
                            </template>

                            <template v-if="tool === 'image'">
                                <button :key="sindex" class="ql-image" :id="'mor-te-tool-image-'+uiid"></button>
                                <morning-tip :key="sindex" :target="'#mor-te-tool-image-'+uiid" color="neutral-10">图片</morning-tip>
                            </template>

                            <template v-if="tool === 'emoji'">
                                <button :key="sindex" class="ql-emoji" :id="'mor-te-tool-emoji-'+uiid"></button>
                                <morning-tip :key="sindex" :target="'#mor-te-tool-emoji-'+uiid" color="neutral-10">表情</morning-tip>
                            </template>

                            <template v-if="tool === 'table'">
                                <button :key="sindex" class="ql-table" :id="'mor-te-tool-table-'+uiid"></button>
                                <morning-tip :key="sindex" :target="'#mor-te-tool-table-'+uiid" color="neutral-10">表格</morning-tip>
                            </template>
                        </template>
                    </div>
                </template>
            </div>
            <div class="quill"></div>
        </div>

        <morning-dialog
            :ref="'ui-select-dialog-'+uiid"
            class="mo-texteditor-dialog"
            color="neutral-2"
            width="300px"
            height="160px"
            show-type="center"
        >
            <template #header>
                <header>
                    <h1>插入图片</h1>
                    <ui-link color="dark-theme" :js="'morning.findVM(\'ui-select-dialog-'+uiid+'\').toggle(false)'"><i class="mo-icon mo-icon-close"></i></ui-link>
                </header>
            </template>
            <div>
                <morning-upload
                    :ref="'ui-select-uploader-'+this.uiid"
                    inside-name=""
                    accept-type="image/*"
                    allow-url
                    allow-drag
                    :uploader="conf.uploader"

                    @value-change="_insertImage"
                >
                </morning-upload>
            </div>
        </morning-dialog>

        <div class="error-message">{{conf._errorMessage}}</div>
        <morning-link v-if="conf.clearable" color="minor" @emit="_clean" class="cleanbtn">清空</morning-link>

    </mor-texteditor>
</template>
 
<script>
import Quill                        from 'quill/core';
import Toolbar                      from 'quill/modules/toolbar';
import Syntax                       from 'quill/modules/syntax';
import Clipboard                    from 'quill/modules/clipboard';
import Table                        from 'quill/modules/Table';
import {AlignStyle}                 from 'quill/formats/align';
import {BackgroundStyle}            from 'quill/formats/background';
import {ColorStyle}                 from 'quill/formats/color';
import {SizeStyle}                  from 'quill/formats/size';
import Blockquote                   from 'quill/formats/blockquote';
import CodeBlock, {Code}            from 'quill/formats/code';
import Header                       from 'quill/formats/header';
import List                         from 'quill/formats/list';
import Bold                         from 'quill/formats/bold';
import Italic                       from 'quill/formats/italic';
import Link                         from 'quill/formats/link';
import Script                       from 'quill/formats/script';
import Strike                       from 'quill/formats/strike';
import Underline                    from 'quill/formats/underline';
import Icons                        from './quill-core/ui/icons';
import SnowTheme                    from './quill-core/themes/snow';
import Emoji                        from './quill-emoji/quill-emoji';

window.Quill = Quill;

// 因为ImageResize使用了`window.Quill`，所以必须使用require
const ImageResize = require('./quill-image-resize-module/ImageResize').default;
const QuillBetterTable = require('./quill-better-table/quill-better-table').default;
const Delta = Quill.imports.delta;
const Parchment = Quill.imports.parchment;

Icons.undo = require('quill/assets/icons/undo.svg');
Icons.redo = require('quill/assets/icons/redo.svg');
Icons.divider = require('quill/assets/icons/horizontal-rule.svg');
Icons.image = require('quill/assets/icons/image.svg');
SizeStyle.whitelist = ['12px', '13px', '14px', '16px', '20px', '28px'];

const quillImgAttributes = [
    'alt',
    'height',
    'width'
];

// untils :
const removeClass = (node, matcher) => {

    node.classList.forEach(val => {

        if (matcher.test(val)) {

            node.classList.remove(val);

        }

    });

};

// extend tools : divider
let BlockEmbed = Quill.import('blots/block/embed');

class Divider extends BlockEmbed {}

Divider.blotName = 'divider';
Divider.tagName = 'HR';

// modify tools : indent(class version)
class IdentAttributorForClass extends Parchment.ClassAttributor {

    add (node, value) {

        if (value === '+1' || value === '-1') {
            
            let indent = this.value(node) || 0;
        
            value = (value === '+1' ? (indent + 1) : (indent - 1));
        
        }

        removeClass(node, /^ql-i-/);

        if (value === 0) {
            
            this.remove(node);
            
            return true;
            
        }

        let result = super.add(node, value);

        node.classList.add(`ql-i-${value}`);

        return result;

    }

    remove (node) {

        removeClass(node, /^ql-i-/);

        return super.remove(node);

    }

    canAdd (node, value) {
        
        return super.canAdd(node, value) || super.canAdd(node, parseInt(value));
    
    }

    value (node) {

        // Don't return NaN
        return parseInt(super.value(node)) || undefined;

    }

}

let IndentClass = new IdentAttributorForClass('indent', 'ql-indent', {
    scope : Parchment.Scope.BLOCK,
    whitelist : [1, 2, 3, 4, 5, 6, 7, 8]
});

// extend tools : indent(style version)
const levels = [1, 2, 3, 4, 5, 6, 7, 8];
const multiplier = 3;

class IndentAttributorForStyle extends Parchment.StyleAttributor {

    add (node, value) {

        removeClass(node, /^ql-i-/);

        if (value !== 0) {
    
            node.classList.add(`ql-i-${value}`);

        }

        return super.add(node, `${value * multiplier}em`);

    }

    remove (node) {

        removeClass(node, /^ql-i-/);

        return super.remove(node);

    }

    value (node) {

        // Don't return NaN
        return parseFloat(super.value(node)) / multiplier || undefined;

    }

}

let IndentStyle = new IndentAttributorForStyle('indent', 'margin-left', {
    scope : Parchment.Scope.BLOCK,
    whitelist : levels.map(value => `${value * multiplier}em`)
});

// extend tools : image
class Image extends BlockEmbed {

    static create (value) {

        let node = super.create();

        node.setAttribute('src', value);

        return node;
  
    }
  
    static formats (domNode) {
        
        return quillImgAttributes.reduce((formats, attribute) => {
        
            if (domNode.hasAttribute(attribute)) {

                formats[attribute] = domNode.getAttribute(attribute);

            }
            
            return formats;
    
        }, {});

    }

    static value (node) {

        return node.getAttribute('src');

    }

    format (name, value) {
        
        if (quillImgAttributes.indexOf(name) > -1) {
            
            if (value) {

                this.domNode.setAttribute(name, value);
    
            } else {
            
                this.domNode.removeAttribute(name);
            
            }
        
        } else {
          
            super.format(name, value);
        
        }
      
    }

}

// extend module : clipboard
class PlainClipboard extends Clipboard {

    convert (html = null) {
    
        if (typeof html === 'string') {
            
            this.quill.container.innerHTML = html;
        
        }
        
        let text = this.quill.container.innerText;
        
        this.quill.container.innerHTML = '';
        
        return new Delta().insert(text);
  
    }

}

Image.blotName = 'image';
Image.tagName = 'IMG';

Quill.register({
    'attributors/style/align' : AlignStyle,
    'attributors/style/background' : BackgroundStyle,
    'attributors/style/color' : ColorStyle,
    'attributors/style/size' : SizeStyle,

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
    'formats/divider' : Divider,

    'formats/image' : Image,
    'formats/emoji' : Emoji.EmojiBlot,
    // 'formats/video': Video,

    // 'modules/formula': Formula,
    // 'modules/history': History,
    'modules/toolbar' : Toolbar,
    'modules/syntax' : Syntax,
    'modules/imageResize' : ImageResize,
    'modules/emoji-shortname' : Emoji.ShortNameEmoji,
    'modules/emoji-toolbar' : Emoji.ToolbarEmoji,
    'modules/table' : Table,
    'modules/better-table' : QuillBetterTable,
    // 'modules/emoji-textarea': Emoji.TextAreaEmoji,
    // 'modules/clipboard' : PlainClipboard,

    // 'themes/bubble': BubbleTheme,
    'themes/snow' : SnowTheme,
    'ui/icons' : Icons
    // 'ui/picker': Picker,
    // 'ui/icon-picker': IconPicker,
    // 'ui/color-picker': ColorPicker
    // 'ui/tooltip': Tooltip
}, true);

// this inline style form quill v1.3.6
// 需要同步修改index.less和texteditor-style.less
let inlineStyleBase = `
.mo-te p,
.mo-te ol,
.mo-te ul,
.mo-te pre,
.mo-te blockquote,
.mo-te h1,
.mo-te h2,
.mo-te h3,
.mo-te h4,
.mo-te h5,
.mo-te h6 {
    margin: 0;
    padding: 0;
    counter-reset: l-1 l-2 l-3 l-4 l-5 l-6 l-7 l-8 l-9;
}
.mo-te ol,
.mo-te ul {
    padding-left: 1.5em;
}
.mo-te ol > li,
.mo-te ul > li {
    list-style-type: none;
}
.mo-te ul > li::before {
        content: '\\2022';
}
.mo-te li::before {
    display: inline-block;
    white-space: nowrap;
    width: 1.2em;
    margin-left: -1.5em;
    margin-right: 0.3em;
    text-align: right;
}
.mo-te ol li,
.mo-te ul li {
    padding-left: 1.5em;
}
.mo-te ol li {
    counter-reset: l-1 l-2 l-3 l-4 l-5 l-6 l-7 l-8 l-9;
    counter-increment: l-0;
}
.mo-te ol li:before {
    content: counter(l-0, decimal) '. ';
}
.mo-te ol li.ql-i-1 {
    counter-increment: l-1;
}
.mo-te ol li.ql-i-1:before {
    content: counter(l-1, lower-alpha) '. ';
}
.mo-te ol li.ql-i-1 {
    counter-reset: l-2 l-3 l-4 l-5 l-6 l-7 l-8 l-9;
}
.mo-te ol li.ql-i-2 {
    counter-increment: l-2;
}
.mo-te ol li.ql-i-2:before {
    content: counter(l-2, lower-roman) '. ';
}
.mo-te ol li.ql-i-2 {
    counter-reset: l-3 l-4 l-5 l-6 l-7 l-8 l-9;
}
.mo-te ol li.ql-i-3 {
    counter-increment: l-3;
}
.mo-te ol li.ql-i-3:before {
    content: counter(l-3, decimal) '. ';
}
.mo-te ol li.ql-i-3 {
    counter-reset: l-4 l-5 l-6 l-7 l-8 l-9;
}
.mo-te ol li.ql-i-4 {
    counter-increment: l-4;
}
.mo-te ol li.ql-i-4:before {
    content: counter(l-4, lower-alpha) '. ';
}
.mo-te ol li.ql-i-4 {
    counter-reset: l-5 l-6 l-7 l-8 l-9;
}
.mo-te ol li.ql-i-5 {
    counter-increment: l-5;
}
.mo-te ol li.ql-i-5:before {
    content: counter(l-5, lower-roman) '. ';
}
.mo-te ol li.ql-i-5 {
    counter-reset: l-6 l-7 l-8 l-9;
}
.mo-te ol li.ql-i-6 {
    counter-increment: l-6;
}
.mo-te ol li.ql-i-6:before {
    content: counter(l-6, decimal) '. ';
}
.mo-te ol li.ql-i-6 {
    counter-reset: l-7 l-8 l-9;
}
.mo-te ol li.ql-i-7 {
    counter-increment: l-7;
}
.mo-te ol li.ql-i-7:before {
    content: counter(l-7, lower-alpha) '. ';
}
.mo-te ol li.ql-i-7 {
    counter-reset: l-8 l-9;
}
.mo-te ol li.ql-i-8 {
    counter-increment: l-8;
}
.mo-te ol li.ql-i-8:before {
    content: counter(l-8, lower-roman) '. ';
}
.mo-te ol li.ql-i-8 {
    counter-reset: l-9;
}
.mo-te ol li.ql-i-9 {
    counter-increment: l-9;
}
.mo-te ol li.ql-i-9:before {
    content: counter(l-9, decimal) '. ';
}
.mo-te.ql-blank::before {
    color: rgba(0,0,0,0.6);
    content: attr(data-placeholder);
    font-style: italic;
    left: 15px;
    pointer-events: none;
    position: absolute;
    right: 15px;
}
.mo-te {
    box-sizing: border-box;
}
.mo-te * {
    box-sizing: border-box;
}
.mo-te .ql-stroke {
    fill: none;
    stroke: #444;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 2;
}
.mo-te .ql-stroke-miter {
    fill: none;
    stroke: #444;
    stroke-miterlimit: 10;
    stroke-width: 2;
}
.mo-te .ql-fill,
.mo-te .ql-stroke.ql-fill {
    fill: #444;
}
.mo-te .ql-empty {
    fill: none;
}
.mo-te .ql-even {
    fill-rule: evenodd;
}
.mo-te.ql-thin,
.mo-te.ql-stroke.ql-thin {
    stroke-width: 1;
}
.mo-te .ql-transparent {
    opacity: 0.4;
}
.mo-te h1 {
    font-size: 2em;
    border-bottom: none;
}
.mo-te h2 {
    font-size: 1.5em;
}
.mo-te h3 {
    font-size: 1.17em;
}
.mo-te h4 {
    font-size: 1em;
}
.mo-te h5 {
    font-size: 0.83em;
}
.mo-te h6 {
    font-size: 0.67em;
}
.mo-te a {
    text-decoration: underline;
}
.mo-te blockquote {
    border-left: 4px solid #ccc;
    margin-bottom: 5px;
    margin-top: 5px;
    padding-left: 16px;
}
.mo-te code,
.mo-te pre {
    background-color: #f0f0f0;
    border-radius: 3px;
}
.mo-te pre {
    white-space: pre-wrap;
    margin-bottom: 5px;
    margin-top: 5px;
    padding: 5px 10px;
}
.mo-te code {
    font-size: 85%;
    padding: 2px 4px;
}
.mo-te pre.ql-syntax {
    background-color: #23241f;
    color: #f8f8f2;
    overflow: visible;
}
.mo-te img {
    max-width: 100%;
    margin: 0;
    padding: 0;
    border: none;
}
.mo-te a {
    color: #06c;
}
`;

let inlineStyleForIndent = `
.mo-te .ql-indent-1 {
    padding-left: 3em;
}
.mo-te li.ql-indent-1 {
    padding-left: 4.5em;
}
.mo-te .ql-indent-2 {
    padding-left: 6em;
}
.mo-te li.ql-indent-2 {
    padding-left: 7.5em;
}
.mo-te .ql-indent-3 {
    padding-left: 9em;
}
.mo-te li.ql-indent-3 {
    padding-left: 10.5em;
}
.mo-te .ql-indent-4 {
    padding-left: 12em;
}
.mo-te li.ql-indent-4 {
    padding-left: 13.5em;
}
.mo-te .ql-indent-5 {
    padding-left: 15em;
}
.mo-te li.ql-indent-5 {
    padding-left: 16.5em;
}
.mo-te .ql-indent-6 {
    padding-left: 18em;
}
.mo-te li.ql-indent-6 {
    padding-left: 19.5em;
}
.mo-te .ql-indent-7 {
    padding-left: 21em;
}
.mo-te li.ql-indent-7 {
    padding-left: 22.5em;
}
.mo-te .ql-indent-8 {
    padding-left: 24em;
}
.mo-te li.ql-indent-8 {
    padding-left: 25.5em;
}
.mo-te .ql-indent-9 {
    padding-left: 27em;
}
.mo-te li.ql-indent-9 {
    padding-left: 28.5em;
}
`;

export default {
    origin : 'Form',
    name : 'texteditor',
    props : {
        insideName : {
            type : String,
            default : '请输入'
        },
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
                [
                    'bold',
                    'italic',
                    'underline',
                    'strike',
                    {
                        align : []
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
                        color : []
                    },
                    {
                        background : []
                    }
                ],
                [
                    {
                        list : 'ordered'
                    },
                    {
                        list : 'bullet'
                    },
                    'divider'
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
                ['link', 'image', 'emoji', 'table'],
                ['clean']
            ])
        },
        uploader : {
            type : Function,
            default : undefined
        },
        markdown : {
            type : Boolean,
            default : false
        },
        plainClipboard : {
            type : Boolean,
            default : false
        },
        inlineStyle : {
            type : Boolean,
            default : false
        }
    },
    computed : {
        _conf : function () {

            return {
                insideName : this.insideName,
                tools : this.tools,
                uploader : this.uploader,
                markdown : this.markdown,
                plainClipboard : this.plainClipboard,
                inlineStyle : this.inlineStyle
            };

        },
        moreClass : function () {

            return {
                'hide-name' : !!this.conf.hideName || !this.conf.formName
            };

        },
        toolSet : function () {

            if (this.conf.markdown) {

                return [
                    ['undo', 'redo']
                ];

            }

            return this.conf.tools;

        },
        isPlainClipboard : function () {

            if (this.conf.markdown) {

                return true;

            }

            return this.conf.plainClipboard;

        }
    },
    data : function () {

        return {
            data : {
                quill : null,
                dontSetHtml : false,
                quillFocus : false
            }
        };

    },
    methods : {
        _valueFilter : function (value) {

            if (value === undefined) {

                return value;

            }

            if (typeof value === 'object') {

                return JSON.stringify(value);

            }

            return String(value);

        },
        _refreshQuillHeight : function () {

            let $quill = this.$el.querySelector('.quill');
            let $toolbar = this.$el.querySelector('.toolbar');

            // 1px for bottom border
            $quill.style.maxHeight = `calc(100% - ${$toolbar.clientHeight}px - 1px)`;

        },
        _insertImage : function () {

            let $uploader = this.$refs[`ui-select-uploader-${this.uiid}`];
            let image = $uploader.get();

            if (image && image.length > 0) {
                
                $uploader.set(undefined);

                let range = this.data.quill.getSelection(true);

                this.data.quill.insertText(range.index, '\n', Quill.sources.USER);
                this.data.quill.insertEmbed(range.index + 1, 'image', image[0].path, Quill.sources.USER);
                this.data.quill.setSelection(range.index + 2, Quill.sources.SILENT);

            }

            this.$refs[`ui-select-dialog-${this.uiid}`].toggle(false);

        },
        _initQuill : function () {

            Quill.register({
                'formats/indent' : (this.conf.inlineStyle ? IndentStyle : IndentClass)
            }, true);

            let toolbar = {
                container : this.$el.querySelector('.toolbar'),
                handlers : {
                    undo : () => {

                        this.data.quill.history.undo();

                    },
                    redo : () => {

                        this.data.quill.history.redo();

                    },
                    divider : () => {

                        let range = this.data.quill.getSelection(true);

                        this.data.quill.insertText(range.index, '\n', Quill.sources.USER);
                        this.data.quill.insertEmbed(range.index + 1, 'divider', true, Quill.sources.USER);
                        this.data.quill.setSelection(range.index + 2, Quill.sources.SILENT);

                    },
                    image : () => {

                        this.$refs[`ui-select-dialog-${this.uiid}`].toggle(true);

                        return false;

                    },
                    emoji : () => {},
                    table : () => {

                        let betterTable = this.data.quill.getModule('better-table');

                        betterTable.insertTable(3, 3);

                    }
                }
            };
            let modules = {
                imageResize : {}
            };
            let enableEmoji = false;

            for (let group of this.conf.tools) {

                if (group instanceof Array &&
                    group.indexOf('emoji') !== -1) {

                    enableEmoji = true;

                }

            }

            if (enableEmoji) {

                modules['emoji-toolbar'] = true;
                // modules['emoji-textarea'] = true;
                modules['emoji-shortname'] = true;

            }

            modules.toolbar = toolbar;
            modules.table = false;
            modules['better-table'] = {
                operationMenu : {
                    items : {
                        insertColumnRight : {
                            text : '在后面添加列'
                        },
                        insertColumnLeft : {
                            text : '在前面添加列'
                        },
                        insertRowUp : {
                            text : '在前面添加行'
                        },
                        insertRowDown : {
                            text : '在后面添加行'
                        },
                        mergeCells : {
                            text : '合并单元格'
                        },
                        unmergeCells : {
                            text : '取消合并单元格'
                        },
                        deleteColumn : {
                            text : '删除列'
                        },
                        deleteRow : {
                            text : '删除行'
                        },
                        deleteTable : {
                            text : '删除表格'
                        }
                    }
                }
            };
            modules.keyboard = {
                bindings : QuillBetterTable.keyboardBindings
            };

            this.data.quill = new Quill(this.$el.querySelector('.quill'), {
                theme : 'snow',
                placeholder : this.conf.insideName,
                modules : modules
            });

            this.data.quill.on('text-change', () => {

                setTimeout(() => {

                    let betterTableModule = this.data.quill.getModule('better-table');

                    this.data.dontSetHtml = true;
                    this._set(this.getHtml(), true);

                    if (betterTableModule.tableSelection) {
                        
                        betterTableModule.tableSelection.refreshHelpLinesPosition();

                    }

                    this.Vue.nextTick(() => {

                        this.data.dontSetHtml = false;

                    });

                });

            });

            this.data.quill.on('selection-change', () => {

                this.$emit('selection-change');

            });

            this.data.quill.on('editor-change', () => {

                this._quillCheckFocus();

            });

            this.setHtml(this.get());

        },
        _quillCheckFocus : function () {

            let focus = this.data.quill.hasFocus();

            if (focus) {

                this.data.quillFocus = true;

            } else {

                this.data.quillFocus = false;

            }

        },
        getHtml : function () {

            if (!this.conf.markdown) {

                if (!this.conf.inlineStyle) {
    
                    return `<style class="mo-te-style">${inlineStyleBase.replace(/(\n|[ ]{2})/g, '')}${inlineStyleForIndent.replace(/(\n|[ ]{2})/g, '')}</style><div class="mo-te">${this.getHtmlWithoutStyle()}</div>`;

                }

                return `<style class="mo-te-style">${inlineStyleBase.replace(/(\n|[ ]{2})/g, '')}</style><div class="mo-te">${this.getHtmlWithoutStyle()}</div>`;

            }

            return this.getHtmlWithoutStyle();

        },
        getHtmlWithoutStyle : function () {

            let html;

            if (!this.conf.markdown) {
                
                html = this.$el.querySelector('.ql-editor').innerHTML;

            } else {

                html = this.$el.querySelector('.ql-editor').innerText;

            }

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

            if (html.search('<div class="mo-te">') !== -1) {

                let $cleanDiv = document.createElement('div');

                $cleanDiv.innerHTML = html;

                let $texteditor = $cleanDiv.querySelector('.mo-te');

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

        this.$watch('isPlainClipboard', () => {

            if (this.isPlainClipboard) {

                Quill.register({
                    'modules/clipboard' : PlainClipboard
                });

            } else {

                Quill.register({
                    'modules/clipboard' : Clipboard
                });

            }

            this._initQuill();

        }, {
            immediate : true
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

        this.$watch('data.quillFocus', () => {

            if (this.data.quillFocus) {

                this.$emit('focus');

            } else {

                this.$emit('blur');

            }

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
