!function(n){function e(e){for(var r,u,i=e[0],s=e[1],c=e[2],l=0,p=[];l<i.length;l++)u=i[l],a[u]&&p.push(a[u][0]),a[u]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(n[r]=s[r]);for(d&&d(e);p.length;)p.shift()();return o.push.apply(o,c||[]),t()}function t(){for(var n,e=0;e<o.length;e++){for(var t=o[e],r=!0,i=1;i<t.length;i++){var s=t[i];0!==a[s]&&(r=!1)}r&&(o.splice(e--,1),n=u(u.s=t[0]))}return n}var r={},a={6:0};var o=[];function u(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.m=n,u.c=r,u.d=function(n,e,t){u.o(n,e)||Object.defineProperty(n,e,{configurable:!1,enumerable:!0,get:t})},u.r=function(n){Object.defineProperty(n,"__esModule",{value:!0})},u.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return u.d(e,"a",e),e},u.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},u.p="/";var i=window.webpackJsonp=window.webpackJsonp||[],s=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var d=s;o.push([255,0]),t()}({1:function(n,e){n.exports=Vue},123:function(n,e,t){"use strict";t.d(e,"a",function(){return r}),t.d(e,"b",function(){return a});var r=function(){var n=this.$createElement,e=this._self._c||n;return e("doc-component",{attrs:{page:this.page,hasPadding:!0}},[e("script",{attrs:{type:"text/markdown"}},[this._v('\n# 徽章 `<ui-badge>`\n\n<doc-component-status page="badge"></doc-component-status>\n\n[[[开始]]]\n\n定义一个徽章，徽章一般跟在内容后面，来标记一些特殊的内容(通常是数字)，这是一个内联块元素。\n\n徽章内部只能包含文本内容。\n\n#### 使用\n\n:::democode/html\n<ui-badge>24</ui-badge>\n:::\n\n#### 扁平徽章\n\n:::democode/html\n<ui-badge class="flat">24</ui-badge>\n:::\n\n#### 圆形徽章\n\n:::democode/html\n<ui-badge class="circle">圆形徽章</ui-badge>\n:::\n\n#### 无内容隐藏\n\n当徽章内没有内容时，会自动隐藏。\n\n:::democode/html\n<ui-badge></ui-badge>\n:::\n\n[[[形态]]]\n\n#### 支持\n\n|类型|支持|默认|\n|-|-|-|\n|尺寸|全部|`m`|\n|色彩|全部|`theme`|\n|状态|`normal`<br/>`apparent`|`normal`|\n\n<a href="/guide/status.html">查看形态文档</a>\n\n#### 尺寸\n\n:::repeat/html\nsize\n---\n<ui-badge size="{$sizeKey}">{$&sizeName}</ui-badge>\n:::\n\n:::repeat/html\nsize\n---\n<ui-badge class="circle" size="{$sizeKey}">{$&sizeName}</ui-badge>\n:::\n\n#### 色彩\n\n:::preset/html\nstatusColor\n---\nuikey:badge\n:::\n\n#### 状态\n\n:::repeat/html\nstate:normal,apparent\n---\n<ui-badge state="{$stateKey}">{$&stateName}</ui-badge>\n:::\n\n[[[源码]]]\n\n<iframe src="/report/coverage/lib/components/badge/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>\n')])])},a=[];r._withStripped=!0},254:function(n,e,t){"use strict";t.r(e);var r=t(9),a=t.n(r);for(var o in r)"default"!==o&&function(n){t.d(e,n,function(){return r[n]})}(o);var u=t(123),i=t(0),s=!1;var c=function(n){s||t(646)},d=Object(i.a)(a.a,u.a,u.b,!1,c,null,null);d.options.__file="src/docs/pages/component/badge/index.vue",e.default=d.exports},255:function(n,e,t){"use strict";var r=o(t(1)),a=o(t(254));function o(n){return n&&n.__esModule?n:{default:n}}new r.default({el:"#root",render:function(n){return n(a.default)}})},646:function(n,e){},9:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,a=t(2),o=(r=a)&&r.__esModule?r:{default:r};e.default={data:function(){return{page:"badge"}},components:{"doc-component":o.default}},n.exports=e.default}});