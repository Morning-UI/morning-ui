!function(n){function e(e){for(var o,c,l=e[0],i=e[1],a=e[2],s=0,d=[];s<l.length;s++)c=l[s],r[c]&&d.push(r[c][0]),r[c]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(n[o]=i[o]);for(f&&f(e);d.length;)d.shift()();return u.push.apply(u,a||[]),t()}function t(){for(var n,e=0;e<u.length;e++){for(var t=u[e],o=!0,l=1;l<t.length;l++){var i=t[l];0!==r[i]&&(o=!1)}o&&(u.splice(e--,1),n=c(c.s=t[0]))}return n}var o={},r={10:0},u=[];function c(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.m=n,c.c=o,c.d=function(n,e,t){c.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},c.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},c.t=function(n,e){if(1&e&&(n=c(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)c.d(t,o,function(e){return n[e]}.bind(null,o));return t},c.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return c.d(e,"a",e),e},c.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},c.p="/";var l=window.webpackJsonp=window.webpackJsonp||[],i=l.push.bind(l);l.push=e,l=l.slice();for(var a=0;a<l.length;a++)e(l[a]);var f=i;u.push([840,0]),t()}({1:function(n,e){n.exports=Vue},244:function(n,e,t){"use strict";t.r(e);var o=t(245),r=t.n(o);for(var u in o)"default"!==u&&function(n){t.d(e,n,function(){return o[n]})}(u);e.default=r.a},245:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o,r=t(2),u=(o=r)&&o.__esModule?o:{default:o};e.default={data:function(){return{page:"block"}},components:{"doc-component":u.default}},n.exports=e.default},281:function(n,e,t){"use strict";var o=function(){var n=this.$createElement,e=this._self._c||n;return e("doc-component",{attrs:{page:this.page,hasPadding:!0}},[e("script",{attrs:{type:"text/markdown"}},[this._v('\n# 区块 `<ui-block>`\n\n<doc-component-status page="block"></doc-component-status>\n\n[[[开始]]]\n\n定义一个区块，区块一般包含标题和正文内容，区块与其他样式组件不同的是可以用来定义一个带风格的区域。\n\n:::vue\n@name:使用\n---\n#demo\n>tpl\n<ui-block>区块</ui-block>\n:::\n\n:::vue\n@name:常用示例\n---\n#demo\n>tpl\n<ui-block>\n    <ui-h color="white" size="xs">标题内容</ui-h>\n    <ui-textcolor color="white">正文内容</ui-textcolor>\n</ui-block>\n:::\n\n:::vue\n@name:无间隙的区块\n---\n#demo\n>desc\n可以通过添加`full`类来标记一个无间隙的区块。\n>tpl\n<ui-block class="full">无间隙的区块</ui-block>\n:::\n\n[[[形态]]]\n\n#### 支持\n\n|类型|支持|默认|\n|-|-|-|\n|尺寸|不支持|-|\n|色彩|全部(除`transparent`)|`theme`|\n|状态|不支持|-|\n\n<a href="/guide/status.html">查看形态文档</a> / <a href="/design/color.html">查看色彩文档</a>\n\n:::vue\n@layout:color\n---\n<ui-block color="{$colorKey}">{$&colorName}</ui-block>\n:::\n\n[[[源码]]]\n\n<iframe src="/report/coverage/lib/components/block/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>\n')])])},r=[];o._withStripped=!0,t.d(e,"a",function(){return o}),t.d(e,"b",function(){return r})},840:function(n,e,t){"use strict";var o=u(t(1)),r=u(t(841));function u(n){return n&&n.__esModule?n:{default:n}}new o.default({el:"#root",render:function(n){return n(r.default)}})},841:function(n,e,t){"use strict";t.r(e);var o=t(281),r=t(244);for(var u in r)"default"!==u&&function(n){t.d(e,n,function(){return r[n]})}(u);var c=t(0),l=Object(c.a)(r.default,o.a,o.b,!1,null,null,null);l.options.__file="src/docs/pages/component/block/index.vue",e.default=l.exports}});