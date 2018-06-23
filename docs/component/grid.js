!function(n){function d(d){for(var e,s,a=d[0],r=d[1],E=d[2],l=0,g=[];l<a.length;l++)s=a[l],i[s]&&g.push(i[s][0]),i[s]=0;for(e in r)Object.prototype.hasOwnProperty.call(r,e)&&(n[e]=r[e]);for(t&&t(d);g.length;)g.shift()();return o.push.apply(o,E||[]),c()}function c(){for(var n,d=0;d<o.length;d++){for(var c=o[d],e=!0,a=1;a<c.length;a++){var r=c[a];0!==i[r]&&(e=!1)}e&&(o.splice(d--,1),n=s(s.s=c[0]))}return n}var e={},i={26:0};var o=[];function s(d){if(e[d])return e[d].exports;var c=e[d]={i:d,l:!1,exports:{}};return n[d].call(c.exports,c,c.exports,s),c.l=!0,c.exports}s.m=n,s.c=e,s.d=function(n,d,c){s.o(n,d)||Object.defineProperty(n,d,{configurable:!1,enumerable:!0,get:c})},s.r=function(n){Object.defineProperty(n,"__esModule",{value:!0})},s.n=function(n){var d=n&&n.__esModule?function(){return n.default}:function(){return n};return s.d(d,"a",d),d},s.o=function(n,d){return Object.prototype.hasOwnProperty.call(n,d)},s.p="/";var a=window.webpackJsonp=window.webpackJsonp||[],r=a.push.bind(a);a.push=d,a=a.slice();for(var E=0;E<a.length;E++)d(a[E]);var t=r;o.push([285,0]),c()}({1:function(n,d){n.exports=Vue},138:function(n,d,c){"use strict";c.d(d,"a",function(){return e}),c.d(d,"b",function(){return i});var e=function(){var n=this.$createElement,d=this._self._c||n;return d("doc-component",{attrs:{page:this.page,hasPadding:!0}},[d("script",{attrs:{type:"text/markdown"}},[this._v('\n# 栅格 `<ui-grid>`\n\n<doc-component-status page="grid"></doc-component-status>\n\n[[[开始]]]\n\n定义一个栅格系统，栅格系统支持嵌套。\n\n这是一个24列的栅格系统，支持自适应，不支持响应式。\n\n通过类`c-[n]`来标记栅格所占用的列，通过类`offset-[n]`来标记栅格偏移列数。\n\n列之间默认具有间隙，两端无间隙，可以通过两个类来调整间隙：\n\n- `nogap` : 生成不具有间隙的栅格\n- `avggap` : 生成两端包含间隙的栅格\n\n#### 使用\n\n:::democode/html\n<ui-grid>\n    <div class="c-6" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-6</div>\n    <div class="c-6" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-6</div>\n    <div class="c-6" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-6</div>\n    <div class="c-6" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-6</div>\n</ui-grid>\n:::\n\n#### 栅格组合\n\n:::democode/html\n<ui-grid>\n    <div class="c-24" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-24</div>\n</ui-grid>\n\n<br>\n\n<ui-grid>\n    <div class="c-2" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-2</div>\n    <div class="c-22" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-22</div>\n</ui-grid>\n\n<br>\n\n<ui-grid>\n    <div class="c-8" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-8</div>\n    <div class="c-16" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-16</div>\n</ui-grid>\n\n<br>\n\n<ui-grid>\n    <div class="c-4" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-4</div>\n    <div class="c-7" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-7</div>\n    <div class="c-13" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-13</div>\n</ui-grid>\n\n<br>\n\n<ui-grid>\n    <div class="c-6" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-6</div>\n    <div class="c-6" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-6</div>\n    <div class="c-12" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-12</div>\n</ui-grid>\n:::\n\n#### 栅格偏移\n\n:::democode/html\n<ui-grid>\n    <div class="c-2" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-2</div>\n    <div class="c-2" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-2</div>\n    <div class="c-2" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-2</div>\n    <div class="c-2" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-2</div>\n    <div class="c-2" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-2</div>\n    <div class="c-2" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-2</div>\n    <div class="c-2" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-2</div>\n    <div class="c-2" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-2</div>\n    <div class="c-2" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-2</div>\n    <div class="c-2" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-2</div>\n    <div class="c-2" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-2</div>\n    <div class="c-2" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-2</div>\n</ui-grid>\n\n<br>\n\n<ui-grid>\n    <div class="c-4 offset-4" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-4 offset-4</div>\n    <div class="c-4 offset-4" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-4 offset-4</div>\n</ui-grid>\n\n<br>\n\n<ui-grid>\n    <div class="c-4 offset-2" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-4 offset-2</div>\n    <div class="c-9 offset-1" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-9 offset-1</div>\n</ui-grid>\n:::\n\n\n\n#### 栅格嵌套\n\n栅格系统支持多层级嵌套。\n\n:::democode/html\n<ui-grid>\n    <div class="c-6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</div>\n    <div class="c-18" style="background-color:#D6DDE5;">\n        <ui-grid>\n            <div class="c-9" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-9</div>\n            <div class="c-15" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-15</div>\n        </ui-grid>\n    </div>\n</ui-grid>\n:::\n\n#### 无间隔栅格\n\n添加`nogap`的样式类可以使栅格之间无间隔。\n\n:::democode/html\n<ui-grid class="nogap">\n    <div class="c-6" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-6</div>\n    <div class="c-6" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-6</div>\n    <div class="c-6" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-6</div>\n    <div class="c-6" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-6</div>\n</ui-grid>\n\n<br>\n\n<ui-grid class="nogap">\n    <div class="c-9" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-9</div>\n    <div class="c-15" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-15</div>\n</ui-grid>\n\n<br>\n\n<ui-grid class="nogap">\n    <div class="c-2" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-2</div>\n    <div class="c-2" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-2</div>\n    <div class="c-2" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-2</div>\n    <div class="c-2" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-2</div>\n    <div class="c-2" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-2</div>\n    <div class="c-2" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-2</div>\n    <div class="c-2" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-2</div>\n    <div class="c-2" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-2</div>\n    <div class="c-2" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-2</div>\n    <div class="c-2" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-2</div>\n    <div class="c-2" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-2</div>\n    <div class="c-2" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-2</div>\n</ui-grid>\n\n<br>\n\n<ui-grid class="nogap">\n    <div class="c-4 offset-4" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-4 offset-4</div>\n    <div class="c-4 offset-4" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-4 offset-4</div>\n</ui-grid>\n:::\n\n#### 两端包含间隙栅格\n\n添加`avggap`的样式类可以使栅格两端也有间隙。\n\n:::democode/html\n<ui-grid class="avggap">\n    <div class="c-6" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-6</div>\n    <div class="c-6" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-6</div>\n    <div class="c-6" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-6</div>\n    <div class="c-6" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-6</div>\n</ui-grid>\n\n<br>\n\n<ui-grid class="avggap">\n    <div class="c-9" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-9</div>\n    <div class="c-15" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-15</div>\n</ui-grid>\n\n<br>\n\n<ui-grid class="avggap">\n    <div class="c-2" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-2</div>\n    <div class="c-2" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-2</div>\n    <div class="c-2" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-2</div>\n    <div class="c-2" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-2</div>\n    <div class="c-2" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-2</div>\n    <div class="c-2" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-2</div>\n    <div class="c-2" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-2</div>\n    <div class="c-2" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-2</div>\n    <div class="c-2" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-2</div>\n    <div class="c-2" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-2</div>\n    <div class="c-2" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-2</div>\n    <div class="c-2" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-2</div>\n</ui-grid>\n\n<br>\n\n<ui-grid class="avggap">\n    <div class="c-4 offset-4" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-4 offset-4</div>\n    <div class="c-4 offset-4" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-4 offset-4</div>\n</ui-grid>\n:::\n\n#### 填满容器的栅格\n\n填满容器的栅格高度为100%。\n\n:::democode/html\n<div style="height:200px;">\n    <ui-grid class="fill">\n        <div class="c-6" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-6</div>\n        <div class="c-6" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-6</div>\n        <div class="c-6" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-6</div>\n        <div class="c-6" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-6</div>\n    </ui-grid>\n</div>\n:::\n\n\n[[[形态]]]\n\n#### 支持\n\n|类型|支持|默认|\n|-|-|-|\n|尺寸|不支持|-|\n|色彩|不支持|-|\n|状态|不支持|-|\n\n<a href="/guide/status.html">查看形态文档</a>\n\n\n[[[源码]]]\n\n<iframe src="/report/coverage/lib/components/grid/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>\n')])])},i=[];e._withStripped=!0},284:function(n,d,c){"use strict";c.r(d);var e=c(29),i=c.n(e);for(var o in e)"default"!==o&&function(n){c.d(d,n,function(){return e[n]})}(o);var s=c(138),a=c(0),r=!1;var E=function(n){r||c(666)},t=Object(a.a)(i.a,s.a,s.b,!1,E,null,null);t.options.__file="src/docs/pages/component/grid/index.vue",d.default=t.exports},285:function(n,d,c){"use strict";var e=o(c(1)),i=o(c(284));function o(n){return n&&n.__esModule?n:{default:n}}new e.default({el:"#root",render:function(n){return n(i.default)}})},29:function(n,d,c){"use strict";Object.defineProperty(d,"__esModule",{value:!0});var e,i=c(2),o=(e=i)&&e.__esModule?e:{default:e};d.default={data:function(){return{page:"grid"}},components:{"doc-component":o.default}},n.exports=d.default},666:function(n,d){}});