!function(n){function e(e){for(var o,i,u=e[0],a=e[1],d=e[2],f=0,l=[];f<u.length;f++)i=u[f],c[i]&&l.push(c[i][0]),c[i]=0;for(o in a)Object.prototype.hasOwnProperty.call(a,o)&&(n[o]=a[o]);for(p&&p(e);l.length;)l.shift()();return r.push.apply(r,d||[]),t()}function t(){for(var n,e=0;e<r.length;e++){for(var t=r[e],o=!0,u=1;u<t.length;u++){var a=t[u];0!==c[a]&&(o=!1)}o&&(r.splice(e--,1),n=i(i.s=t[0]))}return n}var o={},c={8:0},r=[];function i(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=n,i.c=o,i.d=function(n,e,t){i.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},i.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},i.t=function(n,e){if(1&e&&(n=i(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)i.d(t,o,function(e){return n[e]}.bind(null,o));return t},i.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return i.d(e,"a",e),e},i.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},i.p="/";var u=window.webpackJsonp=window.webpackJsonp||[],a=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var p=a;r.push([824,0]),t()}({1:function(n,e){n.exports=Vue},240:function(n,e,t){"use strict";t.r(e);var o=t(241),c=t.n(o);for(var r in o)"default"!==r&&function(n){t.d(e,n,function(){return o[n]})}(r);e.default=c.a},241:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o,c=t(2),r=(o=c)&&o.__esModule?o:{default:o};e.default={data:function(){return{page:"backtop"}},components:{"doc-component":r.default}},n.exports=e.default},368:function(n,e,t){"use strict";var o=function(){var n=this.$createElement,e=this._self._c||n;return e("doc-component",{attrs:{page:this.page,hasPadding:!0}},[e("script",{attrs:{type:"text/markdown"}},[this._v('\n# 回到顶部 `<ui-backtop>`\n\n<doc-component-status page="backtop"></doc-component-status>\n\n[[[开始]]]\n\n定义一个回到顶部组件，当页面内容过多时可以使用，使用户可以快速回到页面顶部。\n\n:::vue\n@name:使用\n---\n#demo\n>tpl\n<ui-backtop></ui-backtop>\n:::\n\n:::vue\n@name:自定义内容\n---\n#demo\n>tpl\n<ui-backtop>\n    返回顶部\n</ui-backtop>\n---\n#demo\n>tpl\n<ui-backtop>\n    <i class="mo-icon mo-icon-arrow-up"></i>\n    返回\n</ui-backtop>\n:::\n\n[[[形态]]]\n\n#### 支持\n\n|类型|支持|默认|\n|-|-|-|\n|尺寸|不支持|-|\n|色彩|不支持|-|\n|状态|不支持|-|\n\n[[[配置]]]\n\n:::vue\n@name:fixed\n---\n#config\n>conf-desc\n固定在屏幕上的回到顶部。\n>conf-accept\n`true`<br>`false`\n>conf-type\nBoolean\n>conf-default\n`false`\n---\n#demo\n>tpl\n<div>\n    <p>见右下角</p>\n    <ui-backtop fixed>\n        固定在屏幕\n    </ui-backtop>\n</div>\n:::\n\n:::vue\n@name:right\n---\n#config\n>conf-desc\n固定在屏幕上的位置距离右侧多远，仅在启用`fixed`配置时生效。\n>conf-accept\n距离（可以是`px`、`em`、`%`等任何css合法单位）\n>conf-type\nString\n>conf-default\n`\'40px\'`\n---\n#demo\n>tpl\n<div>\n    <p>见右下角</p>\n    <ui-backtop fixed right="10px" bottom="90px">\n        距离右侧10px\n    </ui-backtop>\n</div>\n:::\n\n:::vue\n@name:bottom\n---\n#config\n>conf-desc\n固定在屏幕上的位置距离底部多远，仅在启用`fixed`配置时生效。\n>conf-accept\n距离（可以是`px`、`em`、`%`等任何css合法单位）\n>conf-type\nString\n>conf-default\n`\'40px\'`\n---\n#demo\n>tpl\n<div>\n    <p>见右下角</p>\n    <ui-backtop fixed bottom="140px">\n        距离底部120px\n    </ui-backtop>\n</div>\n:::\n\n:::vue\n@name:scroll-height\n---\n#config\n>conf-desc\n当滚动距离顶部多远时显示。\n>conf-accept\n距离（单位`px`）\n>conf-type\nNumber\n>conf-default\n`0`\n---\n#demo\n>tpl\n<div>\n    <p>见右下角</p>\n    <ui-backtop fixed bottom="190px" :scroll-height="400">\n        当滚动到400px时出现\n    </ui-backtop>\n</div>\n:::\n\n[[[方法]]]\n\n<h1>暂无</h1>\n\n[[[事件]]]\n\n:::vue\n@name:emit\n---\n#event\n>event-desc\n当返回顶部时触发。\n---\n#demo\n>tpl\n<ui-backtop ref="demo1" @emit="echo"></ui-backtop>\n>script\n{\n    methods : {\n        echo : function (name) {\n            console.log(\'demo1.console1\', `emit event!`);\n        }\n    }\n}\n:::\n\n:::vue\n@name:生命周期事件\n---\n#event\n>event-desc\n组件的生命周期事件，详见:[基础/事件/生命周期事件](/guide/event.html#生命周期事件)。\n---\n#demo\n>tpl\n<div>\n    <ui-backtop\n        ref="demoEventLifecycle"\n        v-show="show"\n        @created="echo(\'created\')"\n        @mounted="echo(\'mounted\')"\n        @before-update="echo(\'before-update\')"\n        @updated="echo(\'updated\')"\n        @before-destroy="echo(\'before-destroy\')"\n        @destroyed="echo(\'destroyed\')"\n    >{*text*}</ui-backtop>\n    <br><br>\n    <ui-link js="this.text=\'生命周期事件\';">触发update</ui-link>\n    <ui-link js="this.$refs[\'demoEventLifecycle\'].$destroy();">触发destroy</ui-link>\n</div>\n>script\n{\n    data : function () {\n        return {\n           text : \'回到顶部\',\n           show : true\n        };\n    },\n    methods : {\n        echo : function (name) {\n            console.log(\'demoEventLifecycle.console1\', name + \' event!\');\n        }\n    }\n}\n:::\n\n[[[源码]]]\n\n<iframe src="/report/coverage/lib/components/backtop/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>\n\n')])])},c=[];o._withStripped=!0,t.d(e,"a",function(){return o}),t.d(e,"b",function(){return c})},824:function(n,e,t){"use strict";var o=r(t(1)),c=r(t(825));function r(n){return n&&n.__esModule?n:{default:n}}new o.default({el:"#root",render:function(n){return n(c.default)}})},825:function(n,e,t){"use strict";t.r(e);var o=t(368),c=t(240);for(var r in c)"default"!==r&&function(n){t.d(e,n,function(){return c[n]})}(r);var i=t(0),u=Object(i.a)(c.default,o.a,o.b,!1,null,null,null);u.options.__file="src/docs/pages/component/backtop/index.vue",e.default=u.exports}});