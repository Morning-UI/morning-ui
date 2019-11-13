!function(n){function e(e){for(var i,l,u=e[0],s=e[1],a=e[2],f=0,d=[];f<u.length;f++)l=u[f],Object.prototype.hasOwnProperty.call(o,l)&&o[l]&&d.push(o[l][0]),o[l]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(n[i]=s[i]);for(c&&c(e);d.length;)d.shift()();return r.push.apply(r,a||[]),t()}function t(){for(var n,e=0;e<r.length;e++){for(var t=r[e],i=!0,u=1;u<t.length;u++){var s=t[u];0!==o[s]&&(i=!1)}i&&(r.splice(e--,1),n=l(l.s=t[0]))}return n}var i={},o={56:0},r=[];function l(e){if(i[e])return i[e].exports;var t=i[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,l),t.l=!0,t.exports}l.m=n,l.c=i,l.d=function(n,e,t){l.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},l.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},l.t=function(n,e){if(1&e&&(n=l(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(l.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var i in n)l.d(t,i,function(e){return n[e]}.bind(null,i));return t},l.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return l.d(e,"a",e),e},l.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},l.p="/";var u=window.webpackJsonp=window.webpackJsonp||[],s=u.push.bind(u);u.push=e,u=u.slice();for(var a=0;a<u.length;a++)e(u[a]);var c=s;r.push([779,0]),t()}({1:function(n,e){n.exports=Vue},176:function(n,e,t){"use strict";t.r(e);var i=t(177),o=t.n(i);for(var r in i)"default"!==r&&function(n){t.d(e,n,(function(){return i[n]}))}(r);e.default=o.a},177:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,o=t(2),r=(i=o)&&i.__esModule?i:{default:i};e.default={data:function(){return{page:"ol"}},components:{"doc-component":r.default}},n.exports=e.default},386:function(n,e,t){"use strict";var i=function(){var n=this.$createElement,e=this._self._c||n;return e("doc-component",{attrs:{page:this.page,hasPadding:!0}},[e("script",{attrs:{type:"text/markdown"}},[this._v('\n# 有序列表 `<ui-ol>`\n\n<doc-component-status page="ol"></doc-component-status>\n\n[[[开始]]]\n\n定义一个有序列表，支持多层嵌套，列表中每一项使用`<li>`标签。\n\n:::vue\n@name:使用\n---\n#demo\n>tpl\n<ui-ol>\n    <li>This is first</li>\n    <li>This is second</li>\n    <li>This is third</li>\n</ui-ol>\n:::\n\n:::vue\n@name:三层嵌套\n---\n#demo\n>desc\n有序列表支持多层嵌套。\n>tpl\n<ui-ol>\n    <li>This is 1</li>\n    <ui-ol>\n        <li>This is 2.1</li>\n        <ui-ol>\n            <li>This is 2.2.1</li>\n            <li>This is 2.2.2</li>\n        </ui-ol>\n        <li>This is 2.3</li>\n    </ui-ol>\n    <li>This is 3</li>\n</ui-ol>\n:::\n\n:::vue\n@name:超过三层嵌套\n---\n#demo\n>desc\n超过三层的无序列表，项目序号均为`lower-latin`。\n>tpl\n<ui-ol>\n    <li>This is 1</li>\n    <ui-ol>\n        <li>This is 2.1</li>\n        <ui-ol>\n            <li>This is 2.2.1</li>\n            <ui-ol>\n                <li>This is 2.2.2.1</li>\n                <li>This is 2.2.2.2</li>\n            </ui-ol>\n            <li>This is 2.2.3</li>\n        </ui-ol>\n        <li>This is 2.3</li>\n    </ui-ol>\n    <li>This is 3</li>\n</ui-ol>\n:::\n\n[[[形态]]]\n\n#### 支持\n\n|类型|支持|默认|\n|-|-|-|\n|尺寸|不支持|-|\n|色彩|不支持|-|\n|状态|`normal`<br/>`apparent`|`normal`|\n\n<a href="/guide/status.html">查看形态文档</a> / <a href="/design/color.html">查看色彩文档</a>\n\n:::vue\n@layout:state-na\n---\n<ui-ol state="{$stateKey}">\n    <li>this is {$&stateName} ui-ol</li>\n    <li>this is {$&stateName} ui-ol</li>\n</ui-ol>\n<br>\n:::\n\n[[[源码]]]\n\n<iframe src="/report/coverage/lib/components/ol/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>\n')])])},o=[];i._withStripped=!0,t.d(e,"a",(function(){return i})),t.d(e,"b",(function(){return o}))},779:function(n,e,t){"use strict";var i=r(t(1)),o=r(t(780));function r(n){return n&&n.__esModule?n:{default:n}}new i.default({el:"#root",render:function(n){return n(o.default)}})},780:function(n,e,t){"use strict";t.r(e);var i=t(386),o=t(176);for(var r in o)"default"!==r&&function(n){t.d(e,n,(function(){return o[n]}))}(r);var l=t(0),u=Object(l.a)(o.default,i.a,i.b,!1,null,null,null);u.options.__file="src/docs/pages/component/ol/index.vue",e.default=u.exports}});