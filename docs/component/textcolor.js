!function(e){function t(t){for(var r,a,c=t[0],i=t[1],l=t[2],s=0,d=[];s<c.length;s++)a=c[s],o[a]&&d.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(f&&f(t);d.length;)d.shift()();return u.push.apply(u,l||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,c=1;c<n.length;c++){var i=n[c];0!==o[i]&&(r=!1)}r&&(u.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={77:0},u=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var c=window.webpackJsonp=window.webpackJsonp||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var f=i;u.push([741,0]),n()}({1:function(e,t){e.exports=Vue},125:function(e,t,n){"use strict";n.r(t);var r=n(126),o=n.n(r);for(var u in r)"default"!==u&&function(e){n.d(t,e,function(){return r[e]})}(u);t.default=o.a},126:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(2),u=(r=o)&&r.__esModule?r:{default:r};t.default={data:function(){return{page:"textcolor"}},components:{"doc-component":u.default}},e.exports=t.default},344:function(e,t,n){"use strict";var r=function(){var e=this.$createElement,t=this._self._c||e;return t("doc-component",{attrs:{page:this.page,hasPadding:!0}},[t("script",{attrs:{type:"text/markdown"}},[this._v('\n# 文本颜色 `<ui-textcolor>`\n\n<doc-component-status page="textcolor"></doc-component-status>\n\n[[[开始]]]\n\n定义文本的颜色，这是一个内联元素。\n\n:::vue\n@name:使用\n---\n#demo\n>tpl\n<ui-textcolor>This is ui-textcolor</ui-textcolor>\n:::\n\n[[[形态]]]\n\n#### 支持\n\n|类型|支持|默认|\n|-|-|-|\n|尺寸|不支持|-|\n|色彩|全部(除`transparent`)|`theme`|\n|状态|不支持|-|\n\n<a href="/guide/status.html">查看形态文档</a> / <a href="/design/color.html">查看色彩文档</a>\n\n:::vue\n@layout:color\n---\n<ui-textcolor color="{$colorKey}">{$&colorName}</ui-textcolor>\n:::\n\n[[[源码]]]\n\n<iframe src="/report/coverage/lib/components/textcolor/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>\n')])])},o=[];r._withStripped=!0,n.d(t,"a",function(){return r}),n.d(t,"b",function(){return o})},741:function(e,t,n){"use strict";var r=u(n(1)),o=u(n(742));function u(e){return e&&e.__esModule?e:{default:e}}new r.default({el:"#root",render:function(e){return e(o.default)}})},742:function(e,t,n){"use strict";n.r(t);var r=n(344),o=n(125);for(var u in o)"default"!==u&&function(e){n.d(t,e,function(){return o[e]})}(u);var a=n(0),c=Object(a.a)(o.default,r.a,r.b,!1,null,null,null);c.options.__file="src/docs/pages/component/textcolor/index.vue",t.default=c.exports}});