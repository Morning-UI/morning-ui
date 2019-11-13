!function(n){function e(e){for(var o,r,l=e[0],a=e[1],u=e[2],s=0,c=[];s<l.length;s++)r=l[s],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&c.push(i[r][0]),i[r]=0;for(o in a)Object.prototype.hasOwnProperty.call(a,o)&&(n[o]=a[o]);for(p&&p(e);c.length;)c.shift()();return d.push.apply(d,u||[]),t()}function t(){for(var n,e=0;e<d.length;e++){for(var t=d[e],o=!0,l=1;l<t.length;l++){var a=t[l];0!==i[a]&&(o=!1)}o&&(d.splice(e--,1),n=r(r.s=t[0]))}return n}var o={},i={74:0},d=[];function r(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=n,r.c=o,r.d=function(n,e,t){r.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},r.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},r.t=function(n,e){if(1&e&&(n=r(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)r.d(t,o,function(e){return n[e]}.bind(null,o));return t},r.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return r.d(e,"a",e),e},r.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},r.p="/";var l=window.webpackJsonp=window.webpackJsonp||[],a=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var p=a;d.push([742,0]),t()}({1:function(n,e){n.exports=Vue},140:function(n,e,t){"use strict";t.r(e);var o=t(141),i=t.n(o);for(var d in o)"default"!==d&&function(n){t.d(e,n,(function(){return o[n]}))}(d);e.default=i.a},141:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o,i=t(2),d=(o=i)&&o.__esModule?o:{default:o};e.default={data:function(){return{page:"texteditor"}},components:{"doc-component":d.default}},n.exports=e.default},413:function(n,e,t){"use strict";var o=function(){var n=this.$createElement,e=this._self._c||n;return e("doc-component",{attrs:{page:this.page,hasPadding:!0}},[e("script",{attrs:{type:"text/markdown"}},[this._v("\n# 富文本编辑器 `<ui-texteditor>`\n\n<doc-component-status page=\"texteditor\"></doc-component-status>\n\n[[[开始]]]\n\n定义富文本编辑器，支持富文本编辑及Markdown编辑。\n\n富文本编辑器基于[quilljs](https://quilljs.com/)(版本2.0.0-dev.3)打造，Morning UI深度定制并扩展了[quilljs](https://quilljs.com/)。\n\n富文本编辑器支持`emoji`表情，使用时可以通过顶部的工具栏选择，或输入`:`加字符会出现表情提示。\n\n:::vue\n@name:使用\n---\n#demo\n>tpl\n<div style=\"width:100%;height:320px;padding-bottom:70px;\">\n    <ui-texteditor form-name=\"文章编辑\"></ui-texteditor>\n</div>\n:::\n\n:::vue\n@name:富文本编辑并渲染HTML\n---\n#demo\n>desc\n富文本编辑模式的取值自带了基础样式，用于还原富文本内容的样式。所以你可以直接将获取的到数值插入至HTML，即可还原富文本。\n>tpl\n<div>\n    <div style=\"width:100%;height:320px;padding-bottom:70px;\">\n        <ui-texteditor form-name=\"文章编辑\" @value-change=\"syncHtml\"></ui-texteditor>\n    </div>\n    <br>\n    <br>\n    <br>\n    <h3>预览</h3>\n    <div class=\"demo1-preview\" style=\"width:100%;height:320px;border:1px #e0e0e0 solid;padding:15px;overflow-x: scroll;\">\n        \n    </div>\n</div>\n>script\n{\n    methods : {\n        syncHtml : function (value) {\n\n            let $preview = this.$el.querySelector('.demo1-preview');\n            \n            $preview && ($preview.innerHTML = value);\n\n        }\n    }\n}\n:::\n\n:::vue\n@name:Markdown编辑并渲染HTML\n---\n#demo\n>desc\nMarkdown编辑模式下，编辑器仅输出纯文本，转换成Markdown格式的HTML及样式需要使用第三方库。\n<br><br>\nHTML转换推荐使用：[markdown-it](https://github.com/markdown-it/markdown-it)\n<br>\nMarkdown样式：[github-markdown-css](https://www.npmjs.com/package/github-markdown-css)\n>tpl\n<div>\n    <div style=\"width:100%;height:320px;padding-bottom:70px;\">\n        <ui-texteditor form-name=\"文章编辑\" @value-change=\"syncHtml\" markdown></ui-texteditor>\n    </div>\n    <br>\n    <br>\n    <br>\n    <h3>预览</h3>\n    <div class=\"demo1-preview\" style=\"width:100%;height:320px;border:1px #e0e0e0 solid;padding:15px;overflow-x: scroll;\">\n        \n    </div>\n</div>\n>script\n{\n    methods : {\n        syncHtml : function (value) {\n\n            let $preview = this.$el.querySelector('.demo1-preview');\n            let markdown = new MarkdownIt({\n                html : true\n            });\n            \n            $preview && ($preview.innerHTML = markdown.render(value));\n\n        }\n    }\n}\n:::\n\n[[[形态]]]\n\n:::preset\n@name:formStatus\n@uikey:texteditor\n@defaultValue:'<p>编辑你的文章...</p>'\n@wrapStyle:width:100%;\n:::\n\n[[[配置]]]\n\n:::preset\n@name:formConfig\n@uikey:texteditor\n@defaultValue:'<p>编辑你的文章...</p>'\n@wrapStyle:width:100%;\n@attrs: :tools=\"[['bold', 'italic']]\"\n:::\n\n:::vue\n@name:inside-name\n---\n#config\n>conf-desc\n在组件内显示的名称，和`form-name`互为补充。\n>conf-accept\n名称\n>conf-type\nString\n>conf-default\n`'请输入'`\n---\n#demo\n>tpl\n<div style=\"width:100%;height:240px;padding-bottom:70px;\">\n    <ui-texteditor inside-name=\"编写文章...\"></ui-texteditor>\n</div>\n:::\n\n:::vue\n@name:tools\n---\n#config\n>conf-desc\n设置富文本编辑工具，这是一个数组，数组中需要再嵌套一个数组。<br>第二层的数组，代表工具组，多个工具组之间会有更多间隙。<br>在第二层的数组中你可以通过字符串或对象来设置使用的工具。<br><br>注意：因为此配置的默认值包含所有工具，随着版本更新工具会不断的增加。建议配置固定的工具，而不是采用默认值，以免引入不必要的工具。<br><br>下面是可用的工具配置：\n<br><br>\n|KEY|说明|值|\n|-|-|-|\n|header|标题设置|数组，完整列表：`[false, 1, 2, 3, 4, 5, 6]`，可选其中部分使用|\n|size|字体大小|数组，完整列表：`[false, '12px', '13px', '14px', '16px', '20px', '28px']`，可选其中部分使用|\n|undo|撤销操作|无|\n|redo|重做操作|无|\n|bold|加粗|无|\n|italic|斜体|无|\n|underline|下划线|无|\n|strike|删除线|无|\n|divider|横划线|无|\n|color|文本颜色|数组，可选颜色列表，如`['#00000', '#999999']`，也可设为空数组则使用默认颜色组|\n|background|背景颜色|数组，可选颜色列表，如`['#00000', '#999999']`，也可设为空数组则使用默认颜色组|\n|align|对齐方式|仅支持空数组：`[]`|\n|list|列表|选项：`ordered`: 有序列表，`bullet`: 无序列表|\n|indent|缩进|选项：`-1`: 减少缩进，`+1`: 增加缩进|\n|script|角标|选项：`sub`: 下标，`super`: 上标|\n|blockquote|引用|无|\n|code-block|代码片段|无|\n|link|链接|无|\n|image|图片|无|\n|emoji|emoji表情|无|\n|table|表格|无|\n|clean|清除样式|无|\n>conf-accept\n数组\n>conf-type\nArray\n>conf-default\n默认是包含所有工具的数组\n---\n#demo\n>desc\n使用<b>无值</b>的工具。\n>tpl\n<div style=\"width:100%;height:240px;padding-bottom:70px;\">\n    <ui-texteditor\n        form-name=\"文章编辑\"\n        :tools=\"[\n            ['bold', 'italic']\n        ]\"\n    ></ui-texteditor>\n</div>\n---\n#demo\n>desc\n使用<b>值为数组</b>的工具。\n>tpl\n<div style=\"width:100%;height:240px;padding-bottom:70px;\">\n    <ui-texteditor\n        form-name=\"文章编辑\"\n        :tools=\"[\n            [{list: 'ordered'}, {list: 'bullet'}, {indent: '-1'}, {indent: '+1'}]\n        ]\"\n    ></ui-texteditor>\n</div>\n---\n#demo\n>desc\n使用<b>值为选项</b>的工具。\n>tpl\n<div style=\"width:100%;height:240px;padding-bottom:70px;\">\n    <ui-texteditor \n        form-name=\"文章编辑\" \n        :tools=\"[\n            [{header: [false, 1, 2, 3, 4, 5, 6]}]\n        ]\"\n    ></ui-texteditor>\n</div>\n---\n#demo\n>desc\n通过`tools`中嵌套数组将工具分为多个组（多个组时间会有更多的间隙）。\n>tpl\n<div style=\"width:100%;height:240px;padding-bottom:70px;\">\n    <ui-texteditor\n        form-name=\"文章编辑\"\n        :tools=\"[\n            [{header: [false, 1, 2, 3, 4, 5, 6]}],\n            ['bold', 'italic'],\n            [{list: 'ordered'}, {list: 'bullet'}, {indent: '-1'}, {indent: '+1'}]\n        ]\"\n    ></ui-texteditor>\n</div>\n---\n#demo\n>desc\n完整的`tools`配置如下。\n>tpl\n<div style=\"width:100%;height:240px;padding-bottom:70px;\">\n    <ui-texteditor\n        form-name=\"文章编辑\"\n        :tools=\"[\n            [\n                {\n                    header : [false, 1, 2, 3, 4, 5, 6]\n                },\n                {\n                    size : [false, '12px', '13px', '14px', '16px', '20px', '28px']\n                }\n            ],\n            ['undo', 'redo'],\n            [\n                'bold',\n                'italic',\n                'underline',\n                'strike',\n                {\n                    align : []\n                },\n                {\n                    indent : '-1'\n                },\n                {\n                    indent : '+1'\n                }\n            ],\n            [\n                {\n                    color : []\n                },\n                {\n                    background : []\n                }\n            ],\n            [\n                {\n                    list : 'ordered'\n                },\n                {\n                    list : 'bullet'\n                },\n                'divider'\n            ],\n            [\n                {\n                    script : 'sub'\n                },\n                {\n                    script : 'super'\n                },\n                'blockquote',\n                'code-block'\n            ],\n            ['link', 'image', 'emoji', 'table'],\n            ['clean']\n        ]\"\n    ></ui-texteditor>\n</div>\n:::\n\n:::vue\n@name:markdown\n---\n#config\n>conf-desc\n开启Markdown编辑模式，开启后会清除所有文本样式，且`tools`和`plain-clipboard`将采用预设配置，自定义配置无效。\n<br>\n注意：开启后编辑器仅输出Markdown文本，转换成Markdown格式的HTML及样式需要使用第三方库。详见：[Markdown编辑并渲染HTML](#Markdown编辑并渲染HTML)。\n>conf-accept\n`true`<br>`false`\n>conf-type\nBoolean\n>conf-default\n`true`\n---\n#demo\n>tpl\n<div style=\"width:100%;height:240px;padding-bottom:70px;\">\n    <ui-texteditor markdown></ui-texteditor>\n</div>\n:::\n\n:::vue\n@name:plain-clipboard\n---\n#config\n>conf-desc\n从剪切板粘贴的内容不附带样式，仅粘贴纯文本。\n>conf-accept\n`true`<br>`false`\n>conf-type\nBoolean\n>conf-default\n`false`\n---\n#demo\n>tpl\n<div style=\"width:100%;height:240px;padding-bottom:70px;\">\n    <ui-texteditor plain-clipboard></ui-texteditor>\n</div>\n:::\n\n:::vue\n@name:inline-style\n---\n#config\n>conf-desc\n在输出富文本内容时，将部分格式化输出至`style`中，而不是通过`class`。\n<br>\n当内容较少时`style`的形式可以输出更小的文本，当内容较多时`class`的形式可以输出更小的文本。\n<br>\n目前仅对：`缩进(indent)`有效。\n>conf-accept\n`true`<br>`false`\n>conf-type\nBoolean\n>conf-default\n`false`\n---\n#demo\n>tpl\n<div style=\"width:100%;height:240px;padding-bottom:70px;\">\n    <ui-texteditor :inline-style=\"true\"></ui-texteditor>\n</div>\n:::\n\n:::vue\n@name:uploader\n---\n#config\n>conf-desc\n当使用`image`工具时图片上传适配器，默认采用全局设置。详见：[文件上传 / `uploader`配置](upload.html#uploader)\n>conf-accept\n文件上传适配器函数\n>conf-type\nFunction\n>conf-default\n`undefined`\n---\n#demo\n>desc\n下面的示例的通过指定适配器演示了文件上传失败的情况。\n>tpl\n<div style=\"width:100%;height:240px;padding-bottom:70px;\">\n    <ui-texteditor :uploader=\"uploader\"></ui-texteditor>\n</div>\n>script\n{\n    methods : {\n        uploader : function (file) {\n\n            console.log(55, file);\n\n            return {\n                status : false,\n                message : '文件上传失败，请重试'\n            };\n\n        }\n    }\n}\n:::\n\n[[[方法]]]\n\n:::preset\n@name:formMethod\n@uikey:texteditor\n@value:'<p>编辑你的文章...</p>'\n@defaultValue:'<p>编辑你的文章...</p>'\n@wrapStyle:width:100%;height:260px;padding-bottom:80px;\n:::\n\n:::vue\n@name:getHtml()\n---\n#method\n>method-desc\n获取富文本内容。\n>method-return\n富文本内容。\n---\n#demo\n>tpl\n<div>\n    <div style=\"width:100%;height:240px;padding-bottom:70px;\">\n        <ui-texteditor ref=\"demo3\"></ui-texteditor>\n    </div>\n    <br>\n    <ui-link js=\"console.log(morning.findVM('demo3').getHtml());\">获取内容</ui-link>\n</div>\n:::\n\n:::vue\n@name:getHtmlWithoutStyle()\n---\n#method\n>method-desc\n获取富文本内容（不包含样式）。<br>由于样式大小较大，可以通过此方法获取不包含样式的Html，然后在展示的位置通过外链样式来达到效果（[获取样式文件](/texteditor-style.less)）。\n>method-return\n富文本内容。\n---\n#demo\n>tpl\n<div>\n    <div style=\"width:100%;height:240px;padding-bottom:70px;\">\n        <ui-texteditor ref=\"demo4\"></ui-texteditor>\n    </div>\n    <br>\n    <ui-link js=\"console.log(morning.findVM('demo4').getHtmlWithoutStyle());\">获取内容</ui-link>\n</div>\n:::\n\n[[[事件]]]\n\n:::preset\n@name:formEvent\n@uiname:富文本编辑器\n@uikey:texteditor\n@value:'<p>编辑你的文章...</p>'\n@wrapStyle:width:100%;height:260px;padding-bottom:80px;\n:::\n\n:::vue\n@name:selection-change\n---\n#event\n>event-desc\n当用户选择编辑文字发生变化后触发。\n---\n#demo\n>tpl\n<div style=\"width:100%;height:240px;\">\n    <ui-texteditor @selection-change=\"echo\" ref=\"demo2\"></ui-texteditor>\n</div>\n>script\n{\n    methods : {\n        echo : function () {\n            console.log('demo2.console1', 'selection-change event!');\n        }\n    }\n}\n:::\n\n:::vue\n@name:focus\n---\n#event\n>event-desc\n当表单聚焦后触发。\n---\n#demo\n>tpl\n<div style=\"width:100%;height:240px;\">\n    <ui-texteditor @focus=\"echo\" ref=\"demo3\"></ui-texteditor>\n</div>\n>script\n{\n    methods : {\n        echo : function () {\n            console.log('demo3.console1', 'focus event!');\n        }\n    }\n}\n:::\n\n:::vue\n@name:blur\n---\n#event\n>event-desc\n当表单失焦后触发。\n---\n#demo\n>tpl\n<div style=\"width:100%;height:240px;\">\n    <ui-texteditor @blur=\"echo\" ref=\"demo4\"></ui-texteditor>\n</div>\n>script\n{\n    methods : {\n        echo : function () {\n            console.log('demo4.console1', 'blur event!');\n        }\n    }\n}\n:::\n\n[[[表单值]]]\n\n#### 值类型\n\n`String` : 字符串\n\n#### 值过滤\n\n- 如果数值类型为非字符串(`undefined`除外)，会转换成字符串\n\n#### 值格式\n\n内容值字符串(HTML)。\n\n#### 默认值\n\n`undefined`\n\n:::preset\n@name:formValue\n@uikey:texteditor\n@uiname:富文本编辑器\n@valueType:texteditor\n@wrapStyle:width:100%;height:260px;padding-bottom:80px;\n:::\n\n[[[源码]]]\n\n<iframe src=\"/report/coverage/lib/components/texteditor/index.vue.html\" name=\"codeFrame\" frameborder=\"0\" onload=\"this.height=codeFrame.document.body.scrollHeight\"></iframe>\n\n")])])},i=[];o._withStripped=!0,t.d(e,"a",(function(){return o})),t.d(e,"b",(function(){return i}))},742:function(n,e,t){"use strict";var o=d(t(1)),i=d(t(743));function d(n){return n&&n.__esModule?n:{default:n}}new o.default({el:"#root",render:function(n){return n(i.default)}})},743:function(n,e,t){"use strict";t.r(e);var o=t(413),i=t(140);for(var d in i)"default"!==d&&function(n){t.d(e,n,(function(){return i[n]}))}(d);var r=t(0),l=Object(r.a)(i.default,o.a,o.b,!1,null,null,null);l.options.__file="src/docs/pages/component/texteditor/index.vue",e.default=l.exports}});