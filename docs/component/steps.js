!function(n){function e(e){for(var s,o,d=e[0],r=e[1],l=e[2],p=0,a=[];p<d.length;p++)o=d[p],i[o]&&a.push(i[o][0]),i[o]=0;for(s in r)Object.prototype.hasOwnProperty.call(r,s)&&(n[s]=r[s]);for(u&&u(e);a.length;)a.shift()();return c.push.apply(c,l||[]),t()}function t(){for(var n,e=0;e<c.length;e++){for(var t=c[e],s=!0,d=1;d<t.length;d++){var r=t[d];0!==i[r]&&(s=!1)}s&&(c.splice(e--,1),n=o(o.s=t[0]))}return n}var s={},i={68:0},c=[];function o(e){if(s[e])return s[e].exports;var t=s[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=n,o.c=s,o.d=function(n,e,t){o.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},o.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},o.t=function(n,e){if(1&e&&(n=o(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var s in n)o.d(t,s,function(e){return n[e]}.bind(null,s));return t},o.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return o.d(e,"a",e),e},o.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},o.p="/";var d=window.webpackJsonp=window.webpackJsonp||[],r=d.push.bind(d);d.push=e,d=d.slice();for(var l=0;l<d.length;l++)e(d[l]);var u=r;c.push([712,0]),t()}({1:function(n,e){n.exports=Vue},124:function(n,e,t){"use strict";t.r(e);var s=t(125),i=t.n(s);for(var c in s)"default"!==c&&function(n){t.d(e,n,function(){return s[n]})}(c);e.default=i.a},125:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s,i=t(2),c=(s=i)&&s.__esModule?s:{default:s};e.default={data:function(){return{page:"steps"}},components:{"doc-component":c.default}},n.exports=e.default},378:function(n,e,t){"use strict";var s=function(){var n=this.$createElement,e=this._self._c||n;return e("doc-component",{attrs:{page:this.page,hasPadding:!0}},[e("script",{attrs:{type:"text/markdown"}},[this._v("\n# 步骤条 `<ui-steps>`\n\n<doc-component-status page=\"steps\"></doc-component-status>\n\n[[[开始]]]\n\n定义一个步骤条，这是一个块元素。\n\n:::vue\n@name:使用\n---\n#demo\n>tpl\n<div style=\"width:500px\">\n    <ui-steps\n        :list=\"[\n            '第一步',\n            '第二步',\n            '第三步'\n        ]\"\n    ></ui-steps>\n</div>\n:::\n\n:::vue\n@name:描述\n---\n#demo\n>desc\n你可以为每个步骤添加描述。\n>tpl\n<div style=\"width:500px\">\n    <ui-steps\n        :list=\"[\n            {\n                title : '第一步',\n                desc : '填写基本信息'\n            },\n            {\n                title : '第二步',\n                desc : '绑定手机号'\n            },\n            {\n                title : '第三步',\n                desc : '开通账号'\n            }\n        ]\"\n    ></ui-steps>\n</div>\n:::\n\n:::vue\n@name:完成的步骤\n---\n#demo\n>desc\n通过`done-step`来配置完成的步骤(-1表示没有完成步骤，0表示完成第一步，以此类推)。\n>tpl\n<div style=\"width:500px\">\n    <ui-steps\n        :done-step=\"0\"\n        :list=\"[\n            {\n                title : '第一步',\n                desc : '填写基本信息'\n            },\n            {\n                title : '第二步',\n                desc : '绑定手机号'\n            },\n            {\n                title : '第三步',\n                desc : '开通账号'\n            }\n        ]\"\n    ></ui-steps>\n</div>\n:::\n\n:::vue\n@name:高亮当前步骤\n---\n#demo\n>desc\n通过开启`mark-current`配置来高亮当前步骤。\n>tpl\n<div style=\"width:500px\">\n    <ui-steps\n        mark-current\n        :done-step=\"0\"\n        :list=\"[\n            {\n                title : '第一步',\n                desc : '填写基本信息'\n            },\n            {\n                title : '第二步',\n                desc : '绑定手机号'\n            },\n            {\n                title : '第三步',\n                desc : '开通账号'\n            }\n        ]\"\n    ></ui-steps>\n</div>\n:::\n\n:::vue\n@name:将当前步骤标记为进行中\n---\n#demo\n>desc\n在开启`mark-current`后，通过将`current-type`设为`progress`可将当前步骤标记为进行中。\n>tpl\n<div style=\"width:500px\">\n    <ui-steps\n        mark-current\n        current-type=\"progress\"\n        :done-step=\"0\"\n        :list=\"[\n            {\n                title : '第一步',\n                desc : '填写基本信息'\n            },\n            {\n                title : '第二步',\n                desc : '绑定手机号'\n            },\n            {\n                title : '第三步',\n                desc : '开通账号'\n            }\n        ]\"\n    ></ui-steps>\n</div>\n:::\n\n:::vue\n@name:标记完成的步骤\n---\n#demo\n>desc\n开启`show-icon`配置可以标记完成的步骤。\n>tpl\n<div style=\"width:500px\">\n    <ui-steps\n        show-icon\n        :done-step=\"0\"\n        :list=\"[\n            {\n                title : '第一步',\n                desc : '填写基本信息'\n            },\n            {\n                title : '第二步',\n                desc : '绑定手机号'\n            },\n            {\n                title : '第三步',\n                desc : '开通账号'\n            }\n        ]\"\n    ></ui-steps>\n</div>\n:::\n\n[[[形态]]]\n\n#### 支持\n\n|类型|支持|默认|\n|-|-|-|\n|尺寸|不支持|-|\n|色彩|不支持|-|\n|状态|不支持|-|\n\n<a href=\"/guide/status.html\">查看形态文档</a>\n\n[[[配置]]]\n\n:::vue\n@name:list\n---\n#config\n>conf-desc\n步骤的列表，这是一个数组，数组中每一项都是一个步骤。项目可以是对象或字符串。<br><br>项目是字符串时，字符串是步骤的标题（这是一种缩写）。<br><br>项目是对象时，这个对象用来描述这个步骤，包含以下字段：<br>`title` : 步骤标题(必须)<br>`desc` : 步骤描述<br>`icon` : 步骤的icon，这是一个HTML片段<br><br>这个列表数组是有序的。\n>conf-accept\n步骤列表数组\n>conf-type\nArray\n>conf-default\n`[]`\n---\n#demo\n>desc\n项目为字符串的简写。\n>tpl\n<div style=\"width:500px\">\n    <ui-steps\n        :list=\"[\n            '第一步',\n            '第二步',\n            '第三步'\n        ]\"\n    ></ui-steps>\n</div>\n---\n#demo\n>desc\n包含步骤描述的写法。\n>tpl\n<div style=\"width:500px\">\n    <ui-steps\n        :list=\"[\n            {\n                title : '第一步',\n                desc : '填写基本信息'\n            },\n            {\n                title : '第二步',\n                desc : '绑定手机号'\n            },\n            {\n                title : '第三步',\n                desc : '开通账号'\n            }\n        ]\"\n    ></ui-steps>\n</div>\n---\n#demo\n>desc\n定制步骤icon的写法。\n>tpl\n<div style=\"width:500px\">\n    <ui-steps\n        :list=\"[\n            {\n                title : '第一步',\n                desc : '填写基本信息',\n                icon : '<i class=\\'mo-icon mo-icon-list\\'></i>'\n            },\n            {\n                title : '第二步',\n                desc : '绑定手机号',\n                icon : '<i class=\\'mo-icon mo-icon-copy\\'></i>'\n            },\n            {\n                title : '第三步',\n                desc : '开通账号',\n                icon : '<i class=\\'mo-icon mo-icon-correct-cf\\'></i>'\n            }\n        ]\"\n    ></ui-steps>\n</div>\n:::\n\n:::vue\n@name:done-step\n---\n#config\n>conf-desc\n完成的步骤数，`-1`表示未完成，`0`表示完成第一步，`1`表示完成第二步，以此类推。\n>conf-accept\n步骤数\n>conf-type\nNumber\n>conf-default\n`-1`\n---\n#demo\n>tpl\n<div style=\"width:500px\">\n    <ui-steps\n        :done-step=\"0\"\n        :list=\"[\n            {\n                title : '第一步',\n                desc : '填写基本信息'\n            },\n            {\n                title : '第二步',\n                desc : '绑定手机号'\n            },\n            {\n                title : '第三步',\n                desc : '开通账号'\n            }\n        ]\"\n    ></ui-steps>\n</div>\n:::\n\n:::vue\n@name:mark-current\n---\n#config\n>conf-desc\n是否标记当前的步骤，比较类型通过`current-type`设置。\n>conf-accept\n`true`<br>`false`\n>conf-type\nBoolean\n>conf-default\n`false`\n---\n#demo\n>tpl\n<div style=\"width:500px\">\n    <ui-steps\n        mark-current\n        :done-step=\"0\"\n        :list=\"[\n            {\n                title : '第一步',\n                desc : '填写基本信息'\n            },\n            {\n                title : '第二步',\n                desc : '绑定手机号'\n            },\n            {\n                title : '第三步',\n                desc : '开通账号'\n            }\n        ]\"\n    ></ui-steps>\n</div>\n:::\n\n:::vue\n@name:current-type\n---\n#config\n>conf-desc\n标记当前步骤的方式。\n>conf-accept\n`'highlight'` : 高亮<br>`'progress'` : 进行中\n>conf-type\nString\n>conf-default\n`'highlight'`\n---\n#demo\n>tpl\n<div style=\"width:500px\">\n    <ui-steps\n        mark-current\n        current-type=\"progress\"\n        :done-step=\"0\"\n        :list=\"[\n            {\n                title : '第一步',\n                desc : '填写基本信息'\n            },\n            {\n                title : '第二步',\n                desc : '绑定手机号'\n            },\n            {\n                title : '第三步',\n                desc : '开通账号'\n            }\n        ]\"\n    ></ui-steps>\n</div>\n:::\n\n:::vue\n@name:show-icon\n---\n#config\n>conf-desc\n完成时是否显示特定icon。\n>conf-accept\n`true`<br>`false`\n>conf-type\nBoolean\n>conf-default\n`false`\n---\n#demo\n>tpl\n<div style=\"width:500px\">\n    <ui-steps\n        show-icon\n        :done-step=\"0\"\n        :list=\"[\n            {\n                title : '第一步',\n                desc : '填写基本信息'\n            },\n            {\n                title : '第二步',\n                desc : '绑定手机号'\n            },\n            {\n                title : '第三步',\n                desc : '开通账号'\n            }\n        ]\"\n    ></ui-steps>\n</div>\n:::\n\n:::vue\n@name:align\n---\n#config\n>conf-desc\n步骤的标题和描述对齐方式。\n>conf-accept\n`'center'` : 居中<br>`'left'` : 左对齐<br>`'right'` : 右对齐\n>conf-type\nString\n>conf-default\n`'center'`\n---\n#demo\n>desc\n左对齐。\n>tpl\n<div style=\"width:500px\">\n    <ui-steps\n        align=\"left\"\n        :list=\"[\n            {\n                title : '第一步',\n                desc : '填写基本信息'\n            },\n            {\n                title : '第二步',\n                desc : '绑定手机号'\n            },\n            {\n                title : '第三步',\n                desc : '开通账号'\n            }\n        ]\"\n    ></ui-steps>\n</div>\n---\n#demo\n>desc\n右对齐。\n>tpl\n<div style=\"width:500px\">\n    <ui-steps\n        align=\"right\"\n        :list=\"[\n            {\n                title : '第一步',\n                desc : '填写基本信息'\n            },\n            {\n                title : '第二步',\n                desc : '绑定手机号'\n            },\n            {\n                title : '第三步',\n                desc : '开通账号'\n            }\n        ]\"\n    ></ui-steps>\n</div>\n:::\n\n:::vue\n@name:failed\n---\n#config\n>conf-desc\n失败的步骤，这是一个数组，数组中的每一项都是一个数字，表示失败步骤的索引(从0开始)。\n>conf-accept\n数组\n>conf-type\nArray\n>conf-default\n`[]`\n---\n#demo\n>tpl\n<div style=\"width:500px\">\n    <ui-steps\n        :failed=\"[1]\"\n        :list=\"[\n            {\n                title : '第一步',\n                desc : '填写基本信息'\n            },\n            {\n                title : '第二步',\n                desc : '绑定手机号'\n            },\n            {\n                title : '第三步',\n                desc : '开通账号'\n            }\n        ]\"\n    ></ui-steps>\n</div>\n---\n#demo\n>desc\n配合`show-icon`使用。\n>tpl\n<div style=\"width:500px\">\n    <ui-steps\n        :done-step=\"1\"\n        :failed=\"[0]\"\n        show-icon\n        :list=\"[\n            {\n                title : '第一步',\n                desc : '填写基本信息'\n            },\n            {\n                title : '第二步',\n                desc : '绑定手机号'\n            },\n            {\n                title : '第三步',\n                desc : '开通账号'\n            }\n        ]\"\n    ></ui-steps>\n</div>\n:::\n\n[[[方法]]]\n\n<h1>暂无</h1>\n\n[[[事件]]]\n\n:::vue\n@name:生命周期事件\n---\n#event\n>event-desc\n组件的生命周期事件，详见:[基础/事件/生命周期事件](/guide/event.html#生命周期事件)。\n---\n#demo\n>tpl\n<div>\n    <ui-steps\n        ref=\"demoEventLifecycle\"\n        v-show=\"show\"\n        :list=\"[\n            {\n                title : '第一步',\n                desc : '填写基本信息'\n            },\n            {\n                title : '第二步',\n                desc : '绑定手机号'\n            },\n            {\n                title : '第三步',\n                desc : '开通账号'\n            }\n        ]\"\n        @created=\"echo('created')\"\n        @mounted=\"echo('mounted')\"\n        @before-update=\"echo('before-update')\"\n        @updated=\"echo('updated')\"\n        @before-destroy=\"echo('before-destroy')\"\n        @destroyed=\"echo('destroyed')\"\n    >{*text*}</ui-steps>\n    <br><br>\n    <ui-link js=\"this.text='生命周期事件';\">触发update</ui-link>\n    <ui-link js=\"this.$refs['demoEventLifecycle'].$destroy();\">触发destroy</ui-link>\n</div>\n>script\n{\n    data : function () {\n        return {\n           text : '步骤条',\n           show : true\n        };\n    },\n    methods : {\n        echo : function (name) {\n            console.log('demoEventLifecycle.console1', name + ' event!');\n        }\n    }\n}\n:::\n\n[[[源码]]]\n\n<iframe src=\"/report/coverage/lib/components/steps/index.vue.html\" name=\"codeFrame\" frameborder=\"0\" onload=\"this.height=codeFrame.document.body.scrollHeight\"></iframe>\n\n")])])},i=[];s._withStripped=!0,t.d(e,"a",function(){return s}),t.d(e,"b",function(){return i})},712:function(n,e,t){"use strict";var s=c(t(1)),i=c(t(713));function c(n){return n&&n.__esModule?n:{default:n}}new s.default({el:"#root",render:function(n){return n(i.default)}})},713:function(n,e,t){"use strict";t.r(e);var s=t(378),i=t(124);for(var c in i)"default"!==c&&function(n){t.d(e,n,function(){return i[n]})}(c);var o=t(0),d=Object(o.a)(i.default,s.a,s.b,!1,null,null,null);d.options.__file="src/docs/pages/component/steps/index.vue",e.default=d.exports}});