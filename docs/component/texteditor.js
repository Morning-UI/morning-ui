!function(n){function e(e){for(var i,d,l=e[0],u=e[1],a=e[2],p=0,c=[];p<l.length;p++)d=l[p],o[d]&&c.push(o[d][0]),o[d]=0;for(i in u)Object.prototype.hasOwnProperty.call(u,i)&&(n[i]=u[i]);for(s&&s(e);c.length;)c.shift()();return r.push.apply(r,a||[]),t()}function t(){for(var n,e=0;e<r.length;e++){for(var t=r[e],i=!0,l=1;l<t.length;l++){var u=t[l];0!==o[u]&&(i=!1)}i&&(r.splice(e--,1),n=d(d.s=t[0]))}return n}var i={},o={70:0};var r=[];function d(e){if(i[e])return i[e].exports;var t=i[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,d),t.l=!0,t.exports}d.m=n,d.c=i,d.d=function(n,e,t){d.o(n,e)||Object.defineProperty(n,e,{configurable:!1,enumerable:!0,get:t})},d.r=function(n){Object.defineProperty(n,"__esModule",{value:!0})},d.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return d.d(e,"a",e),e},d.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},d.p="/";var l=window.webpackJsonp=window.webpackJsonp||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var a=0;a<l.length;a++)e(l[a]);var s=u;r.push([391,0]),t()}({1:function(n,e){n.exports=Vue},191:function(n,e,t){"use strict";t.d(e,"a",function(){return i}),t.d(e,"b",function(){return o});var i=function(){var n=this.$createElement,e=this._self._c||n;return e("doc-component",{attrs:{page:this.page,hasPadding:!0}},[e("script",{attrs:{type:"text/markdown"}},[this._v("\n# 富文本编辑器 `<ui-texteditor>`\n\n<doc-component-status page=\"texteditor\"></doc-component-status>\n\n[[[开始]]]\n\n定义富文本编辑器。\n\n富文本编辑器基于[quilljs](https://quilljs.com/)(版本1.3.6)打造，Morning UI深度定制并扩展了[quilljs](https://quilljs.com/)。\n\n:::vue\n@name:使用\n---\n#demo\n>tpl\n<div style=\"width:100%;height:320px;\">\n    <ui-texteditor form-name=\"文章编辑\"></ui-texteditor>\n</div>\n:::\n\n:::vue\n@name:获取富文本并渲染HTML\n---\n#demo\n>desc\n富文本编辑器的取值自带了基础样式，用于还原富文本内容的样式。所以你可以直接将获取的到数值插入至HTML，即可还原富文本。\n>tpl\n<div>\n    <div style=\"width:100%;height:320px;\">\n        <ui-texteditor form-name=\"文章编辑\" @value-change=\"syncHtml\"></ui-texteditor>\n    </div>\n    <br>\n    <h3>预览</h3>\n    <div class=\"demo1-preview\" style=\"width:100%;height:320px;border:1px #e0e0e0 solid;padding:15px;overflow-x: scroll;\">\n        \n    </div>\n</div>\n>script\n{\n    methods : {\n        syncHtml : function (value) {\n\n            let $preview = this.$el.querySelector('.demo1-preview');\n            \n            $preview && ($preview.innerHTML = value);\n\n        }\n    }\n}\n:::\n\n[[[形态]]]\n\n:::preset\n@name:formStatus\n@uikey:texteditor\n@defaultValue:'<p>编辑你的文章...</p>'\n@wrapStyle:width:100%;height:160px;\n:::\n\n[[[配置]]]\n\n:::preset\n@name:formConfig\n@uikey:texteditor\n@defaultValue:'<p>编辑你的文章...</p>'\n@wrapStyle:width:100%;height:160px;\n:::\n\n:::vue\n@name:inside-name\n---\n#config\n>conf-desc\n在组件内显示的名称，和`form-name`互为补充。\n>conf-accept\n名称\n>conf-type\nString\n>conf-default\n`''`\n---\n#demo\n>tpl\n<div style=\"width:100%;height:240px;\">\n    <ui-texteditor inside-name=\"编写文章...\"></ui-texteditor>\n</div>\n:::\n\n:::vue\n@name:tools\n---\n#config\n>conf-desc\n设置富文本编辑工具，这是一个数组，数组中需要再嵌套一个数组。<br>第二层的数组，代表工具组，多个工具组之间会有更多间隙。<br>在第二层的数组中你可以通过字符串或对象来设置使用的工具。<br><br>注意：因为此配置的默认值包含所有工具，随着版本更新工具会不断的增加。建议配置固定的工具，而不是采用默认值，以免引入不必要的工具。<br><br>下面是可用的工具配置：\n<br><br>\n|KEY|说明|值|\n|-|-|-|\n|header|标题设置|数组，完整列表：`[false, 1, 2, 3, 4, 5, 6]`，可选其中部分使用|\n|size|字体大小|数组，完整列表：`[false, '12px', '13px', '14px', '16px', '20px', '28px']`，可选其中部分使用|\n|undo|撤销操作|无|\n|redo|重做操作|无|\n|bold|加粗|无|\n|italic|斜体|无|\n|underline|下划线|无|\n|strike|删除线|无|\n|divider|横划线|无|\n|color|文本颜色|数组，可选颜色列表，如`['#00000', '#999999']`，也可设为空数组则使用默认颜色组|\n|background|背景颜色|数组，可选颜色列表，如`['#00000', '#999999']`，也可设为空数组则使用默认颜色组|\n|align|对齐方式|仅支持空数组：`[]`|\n|list|列表|选项：`ordered`: 有序列表，`bullet`: 无序列表|\n|indent|缩进|选项：`-1`: 减少缩进，`+1`: 增加缩进|\n|script|角标|选项：`sub`: 下标，`super`: 上标|\n|blockquote|引用|无|\n|code-block|代码片段|无|\n|link|链接|无|\n|image|图片|无|\n|clean|清除样式|无|\n>conf-accept\n数组\n>conf-type\nArray\n>conf-default\n默认是包含所有工具的数组\n---\n#demo\n>desc\n使用<b>无值</b>的工具。\n>tpl\n<div style=\"width:100%;height:240px;\">\n    <ui-texteditor\n        form-name=\"文章编辑\"\n        :tools=\"[\n            ['bold', 'italic']\n        ]\"\n    ></ui-texteditor>\n</div>\n---\n#demo\n>desc\n使用<b>值为数组</b>的工具。\n>tpl\n<div style=\"width:100%;height:240px;\">\n    <ui-texteditor\n        form-name=\"文章编辑\"\n        :tools=\"[\n            [{list: 'ordered'}, {list: 'bullet'}, {indent: '-1'}, {indent: '+1'}]\n        ]\"\n    ></ui-texteditor>\n</div>\n---\n#demo\n>desc\n使用<b>值为选项</b>的工具。\n>tpl\n<div style=\"width:100%;height:240px;\">\n    <ui-texteditor \n        form-name=\"文章编辑\" \n        :tools=\"[\n            [{header: [false, 1, 2, 3, 4, 5, 6]}]\n        ]\"\n    ></ui-texteditor>\n</div>\n---\n#demo\n>desc\n通过`tools`中嵌套数组将工具分为多个组（多个组时间会有更多的间隙）。\n>tpl\n<div style=\"width:100%;height:240px;\">\n    <ui-texteditor\n        form-name=\"文章编辑\"\n        :tools=\"[\n            [{header: [false, 1, 2, 3, 4, 5, 6]}],\n            ['bold', 'italic'],\n            [{list: 'ordered'}, {list: 'bullet'}, {indent: '-1'}, {indent: '+1'}]\n        ]\"\n    ></ui-texteditor>\n</div>\n---\n#demo\n>desc\n完整的`tools`配置如下。\n>tpl\n<div style=\"width:100%;height:240px;\">\n    <ui-texteditor\n        form-name=\"文章编辑\"\n        :tools=\"[\n            [\n                {\n                    header : [false, 1, 2, 3, 4, 5, 6]\n                },\n                {\n                    size : [false, '12px', '13px', '14px', '16px', '20px', '28px']\n                }\n            ],\n            ['undo', 'redo'],\n            [\n                'bold',\n                'italic',\n                'underline',\n                'strike',\n                {\n                    align : []\n                },\n                {\n                    indent : '-1'\n                },\n                {\n                    indent : '+1'\n                }\n            ],\n            [\n                {\n                    color : []\n                },\n                {\n                    background : []\n                }\n            ],\n            [\n                {\n                    list : 'ordered'\n                },\n                {\n                    list : 'bullet'\n                },\n                'divider'\n            ],\n            [\n                {\n                    script : 'sub'\n                },\n                {\n                    script : 'super'\n                },\n                'blockquote',\n                'code-block'\n            ],\n            ['link', 'image'],\n            ['clean']\n        ]\"\n    ></ui-texteditor>\n</div>\n:::\n\n[[[方法]]]\n\n:::preset\n@name:formMethod\n@uikey:texteditor\n@value:'<p>编辑你的文章...</p>'\n@defaultValue:'<p>编辑你的文章...</p>'\n@wrapStyle:width:100%;height:260px;padding-bottom:80px;\n:::\n\n[[[事件]]]\n\n:::preset\n@name:formEvent\n@uiname:富文本编辑器\n@uikey:texteditor\n@value:'<p>编辑你的文章...</p>'\n@wrapStyle:width:100%;height:260px;padding-bottom:80px;\n:::\n\n:::vue\n@name:selection-change\n---\n#event\n>event-desc\n当用户选择编辑文字发生变化后触发。\n---\n#demo\n>tpl\n<div style=\"width:100%;height:240px;\">\n    <ui-texteditor @selection-change=\"echo\" ref=\"demo2\"></ui-texteditor>\n</div>\n>script\n{\n    methods : {\n        echo : function () {\n            console.log('demo2.console1', 'selection-change event!');\n        }\n    }\n}\n:::\n\n[[[表单值]]]\n\n#### 值类型\n\n`String` : 字符串\n\n#### 值过滤\n\n- 如果数值类型为非字符串(`undefined`除外)，会转换成字符串\n\n#### 值格式\n\n内容值字符串(HTML)。\n\n#### 默认值\n\n`undefined`\n\n:::preset\n@name:formValue\n@uikey:texteditor\n@uiname:富文本编辑器\n@valueType:texteditor\n@wrapStyle:width:100%;height:260px;padding-bottom:80px;\n:::\n\n[[[源码]]]\n\n<iframe src=\"/report/coverage/lib/components/texteditor/index.vue.html\" name=\"codeFrame\" frameborder=\"0\" onload=\"this.height=codeFrame.document.body.scrollHeight\"></iframe>\n\n")])])},o=[];i._withStripped=!0},390:function(n,e,t){"use strict";t.r(e);var i=t(73),o=t.n(i);for(var r in i)"default"!==r&&function(n){t.d(e,n,function(){return i[n]})}(r);var d=t(191),l=t(0),u=!1;var a=function(n){u||t(791)},s=Object(l.a)(o.a,d.a,d.b,!1,a,null,null);s.options.__file="src/docs/pages/component/texteditor/index.vue",e.default=s.exports},391:function(n,e,t){"use strict";var i=r(t(1)),o=r(t(390));function r(n){return n&&n.__esModule?n:{default:n}}new i.default({el:"#root",render:function(n){return n(o.default)}})},73:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,o=t(2),r=(i=o)&&i.__esModule?i:{default:i};e.default={data:function(){return{page:"texteditor"}},components:{"doc-component":r.default}},n.exports=e.default},791:function(n,e){}});