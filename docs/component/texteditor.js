!function(n){function e(e){for(var o,d,l=e[0],u=e[1],a=e[2],p=0,c=[];p<l.length;p++)d=l[p],i[d]&&c.push(i[d][0]),i[d]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(n[o]=u[o]);for(s&&s(e);c.length;)c.shift()();return r.push.apply(r,a||[]),t()}function t(){for(var n,e=0;e<r.length;e++){for(var t=r[e],o=!0,l=1;l<t.length;l++){var u=t[l];0!==i[u]&&(o=!1)}o&&(r.splice(e--,1),n=d(d.s=t[0]))}return n}var o={},i={61:0};var r=[];function d(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,d),t.l=!0,t.exports}d.m=n,d.c=o,d.d=function(n,e,t){d.o(n,e)||Object.defineProperty(n,e,{configurable:!1,enumerable:!0,get:t})},d.r=function(n){Object.defineProperty(n,"__esModule",{value:!0})},d.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return d.d(e,"a",e),e},d.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},d.p="/";var l=window.webpackJsonp=window.webpackJsonp||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var a=0;a<l.length;a++)e(l[a]);var s=u;r.push([355,0]),t()}({1:function(n,e){n.exports=Vue},173:function(n,e,t){"use strict";t.d(e,"a",function(){return o}),t.d(e,"b",function(){return i});var o=function(){var n=this.$createElement,e=this._self._c||n;return e("doc-component",{attrs:{page:this.page,hasPadding:!0}},[e("script",{attrs:{type:"text/markdown"}},[this._v("\n# 富文本编辑器 `<ui-texteditor>`\n\n<doc-component-status page=\"texteditor\"></doc-component-status>\n\n[[[开始]]]\n\n定义富文本编辑器。\n\n富文本编辑器基于[quilljs](https://quilljs.com/)(版本1.3.6)打造，Morning UI深度定制并扩展了[quilljs](https://quilljs.com/)。\n\n#### 使用\n\n:::democode/html\n<div style=\"width:100%;height:320px;\">\n    <ui-texteditor form-name=\"文章编辑\"></ui-texteditor>\n</div>\n:::\n\n#### 获取富文本并渲染HTML\n\n富文本编辑器的取值自带了基础样式，用于还原富文本内容的样式。所以你可以直接将获取的到数值插入至HTML，即可还原富文本。\n\n:::vue/html\nnew Vue({\n    el : '{$el}',\n    template : '{$template}',\n    methods : {\n        syncHtml : function (value) {\n\n            let $preview = this.$el.querySelector('.demo1-preview');\n            \n            $preview && ($preview.innerHTML = value);\n\n        }\n    }\n});\n---\n<div>\n    <div style=\"width:100%;height:320px;\">\n        <ui-texteditor form-name=\"文章编辑\" @value-change=\"syncHtml\"></ui-texteditor>\n    </div>\n    <br>\n    <h3>预览</h3>\n    <div class=\"demo1-preview\" style=\"width:100%;height:320px;border:1px #e0e0e0 solid;padding:15px\">\n        \n    </div>\n</div>\n:::\n\n[[[形态]]]\n\n:::preset/html\nformStatus\n---\nuikey:texteditor\nstatusDefaultValue:'<p>编辑你的文章...</p>'\nstatusDivStyle:width:100%;height:160px;\n:::\n\n[[[配置]]]\n\n:::preset/html\nformConfigTable\n---\n|[tools](#tools)|设置富文本编辑工具，这是一个数组，数组中需要再嵌套一个数组。<br>第二层的数组，代表工具组，多个工具组之间会有更多间隙。<br>在第二层的数组中你可以通过字符串或对象来设置使用的工具。(详见[下面的示例](#tools))|数组|Array|默认是包含所有工具的数组|\n|[placeholder](#placeholder)|编辑区域默认显示内容|字符串|String|`''`|\n:::\n\n:::preset/html\nformConfigDemo\n---\nuikey:texteditor\nconfigDefaultValue:'<p>编辑你的文章...</p>'\nconfigDivStyle:width:100%;height:240px;padding-bottom:40px;\n:::\n\n#### tools\n\n`tools`允许你设置富文本编辑工具，工具包含：\n\n|KEY|说明|值|\n|-|-|-|\n|header|标题设置|数组，完整列表：`[false, 1, 2, 3, 4, 5, 6]`，可选其中部分使用|\n|size|字体大小|数组，完整列表：`[false, '12px', '13px', '14px', '16px', '20px', '28px']`，可选其中部分使用|\n|undo|撤销操作|无|\n|redo|重做操作|无|\n|bold|加粗|无|\n|italic|斜体|无|\n|underline|下划线|无|\n|strike|删除线|无|\n|color|文本颜色|数组，可选颜色列表，如`['#00000', '#999999']`，也可设为空数组则使用默认颜色组|\n|background|背景颜色|数组，可选颜色列表，如`['#00000', '#999999']`，也可设为空数组则使用默认颜色组|\n|align|对齐方式|仅支持空数组：`[]`|\n|list|列表|选项：`ordered`: 有序列表，`bullet`: 无序列表|\n|indent|缩进|选项：`-1`: 减少缩进，`+1`: 增加缩进|\n|script|角标|选项：`sub`: 下标，`super`: 上标|\n|blockquote|引用|无|\n|code-block|代码片段|无|\n|link|链接|无|\n|clean|清除样式|无|\n\n使用<b>无值</b>的工具：\n\n:::democode/html\n<div style=\"width:100%;height:240px;\">\n    <ui-texteditor\n        form-name=\"文章编辑\"\n        :tools=\"[\n            ['bold', 'italic']\n        ]\"\n    ></ui-texteditor>\n</div>\n:::\n\n使用<b>值为数组</b>的工具：\n\n:::democode/html\n<div style=\"width:100%;height:240px;\">\n    <ui-texteditor\n        form-name=\"文章编辑\"\n        :tools=\"[\n            [{list: 'ordered'}, {list: 'bullet'}, {indent: '-1'}, {indent: '+1'}]\n        ]\"\n    ></ui-texteditor>\n</div>\n:::\n\n使用<b>值为选项</b>的工具：\n\n:::democode/html\n<div style=\"width:100%;height:240px;\">\n    <ui-texteditor \n        form-name=\"文章编辑\" \n        :tools=\"[\n            [{header: [false, 1, 2, 3, 4, 5, 6]}]\n        ]\"\n    ></ui-texteditor>\n</div>\n:::\n\n通过`tools`中嵌套数组将工具分为多个组（多个组时间会有更多的间隙）：\n\n:::democode/html\n<div style=\"width:100%;height:240px;\">\n    <ui-texteditor\n        form-name=\"文章编辑\"\n        :tools=\"[\n            [{header: [false, 1, 2, 3, 4, 5, 6]}],\n            ['bold', 'italic'],\n            [{list: 'ordered'}, {list: 'bullet'}, {indent: '-1'}, {indent: '+1'}]\n        ]\"\n    ></ui-texteditor>\n</div>\n:::\n\n#### placeholder\n\n:::democode/html\n<div style=\"width:100%;height:240px;\">\n    <ui-texteditor form-name=\"文章编辑\" placeholder=\"编写文章...\"></ui-texteditor>\n</div>\n:::\n\n[[[方法]]]\n\n:::preset/html\nformMethod\n---\nuikey:texteditor\nmethodValue:'<p>编辑你的文章...</p>'\nmethodDefaultValue:'<p>编辑你的文章...</p>'\nmethodDivStyle:width:100%;height:260px;padding-bottom:80px;\n:::\n\n[[[事件]]]\n\n#### selection-change\n\n当用户选择编辑文字发生变化后触发。\n\n:::vue/html\nnew Vue({\n    el : '{$el}',\n    template : '{$template}',\n    methods : {\n        echo : function () {\n            console.log('demo2.console1', 'selection-change event!');\n        }\n    }\n});\n---\n<div style=\"width:100%;height:240px;\">\n    <ui-texteditor @selection-change=\"echo\" ref=\"demo2\"></ui-texteditor>\n</div>\n:::\n\n:::preset/html\nformEvent\n---\nuikey:texteditor\neventValue:'<p>编辑你的文章...</p>'\neventDivStyle:width:100%;height:260px;padding-bottom:80px;\n:::\n\n[[[表单值]]]\n\n#### 值类型\n\n`String` : 字符串\n\n#### 值过滤\n\n- 如果数值类型为非字符串(`undefined`除外)，会转换成字符串\n\n#### 值格式\n\n内容值字符串(HTML)。\n\n#### 默认值\n\n`undefined`\n\n#### 输入/输出示例\n\n:::repeat/html\nformValueType:texteditor\n---\n<div>\n    <p>{$valueType}类型</p>\n    <div style=\"width:100%;height: 240px;\">\n        <ui-texteditor ref=\"demoType{$valueType}\"></ui-texteditor>\n    </div>\n    <br>\n    <ui-link js=\"window.morning.findVM('demoType{$valueType}').set({$&valueContent})\">设置{$valueType}类型</ui-link>\n    <ui-link js=\"alert(window.morning.findVM('demoType{$valueType}').getJson())\">获取表单JSON值</ui-link>\n</div>\n<br>\n<br>\n:::\n\n[[[源码]]]\n\n<iframe src=\"/report/coverage/lib/components/texteditor/index.vue.html\" name=\"codeFrame\" frameborder=\"0\" onload=\"this.height=codeFrame.document.body.scrollHeight\"></iframe>\n\n")])])},i=[];o._withStripped=!0},354:function(n,e,t){"use strict";t.r(e);var o=t(64),i=t.n(o);for(var r in o)"default"!==r&&function(n){t.d(e,n,function(){return o[n]})}(r);var d=t(173),l=t(0),u=!1;var a=function(n){u||t(736)},s=Object(l.a)(i.a,d.a,d.b,!1,a,null,null);s.options.__file="src/docs/pages/component/texteditor/index.vue",e.default=s.exports},355:function(n,e,t){"use strict";var o=r(t(1)),i=r(t(354));function r(n){return n&&n.__esModule?n:{default:n}}new o.default({el:"#root",render:function(n){return n(i.default)}})},64:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o,i=t(2),r=(o=i)&&o.__esModule?o:{default:o};e.default={data:function(){return{page:"texteditor"}},components:{"doc-component":r.default}},n.exports=e.default},736:function(n,e){}});