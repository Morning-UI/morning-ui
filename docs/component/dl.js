!function(n){function t(t){for(var d,i,a=t[0],u=t[1],l=t[2],c=0,f=[];c<a.length;c++)i=a[c],r[i]&&f.push(r[i][0]),r[i]=0;for(d in u)Object.prototype.hasOwnProperty.call(u,d)&&(n[d]=u[d]);for(s&&s(t);f.length;)f.shift()();return o.push.apply(o,l||[]),e()}function e(){for(var n,t=0;t<o.length;t++){for(var e=o[t],d=!0,a=1;a<e.length;a++){var u=e[a];0!==r[u]&&(d=!1)}d&&(o.splice(t--,1),n=i(i.s=e[0]))}return n}var d={},r={25:0};var o=[];function i(t){if(d[t])return d[t].exports;var e=d[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=n,i.c=d,i.d=function(n,t,e){i.o(n,t)||Object.defineProperty(n,t,{configurable:!1,enumerable:!0,get:e})},i.r=function(n){Object.defineProperty(n,"__esModule",{value:!0})},i.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return i.d(t,"a",t),t},i.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},i.p="/";var a=window.webpackJsonp=window.webpackJsonp||[],u=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var s=u;o.push([295,0]),e()}({1:function(n,t){n.exports=Vue},143:function(n,t,e){"use strict";e.d(t,"a",function(){return d}),e.d(t,"b",function(){return r});var d=function(){var n=this.$createElement,t=this._self._c||n;return t("doc-component",{attrs:{page:this.page,hasPadding:!0}},[t("script",{attrs:{type:"text/markdown"}},[this._v('\n# 描述列表 `<ui-dl>`\n\n<doc-component-status page="dl"></doc-component-status>\n\n[[[开始]]]\n\n定义一个描述列表，不支持嵌套，列表中每一项包含两个标签`<dt>`和`<dd>`。\n\n描述列表是一个块级元素。\n\n描述列表支持多种布局样式，可以通过额外的`class`来使用。\n\n#### 使用\n\n:::democode/html\n<ui-dl>\n    <dt>Foo</dt>\n    <dd>this is detail of foo</dd>\n    <dt>Bar</dt>\n    <dd>this is detail of bar</dd>\n</ui-dl>\n:::\n\n#### 水平排列布局\n\n:::democode/html\n<ui-dl class="horizontal">\n    <dt>Horizon</dt>\n    <dd>this is horizontal ui-dl</dd>\n    <dt>Horizon</dt>\n    <dd>this is horizontal ui-dl</dd>\n</ui-dl>\n:::\n\n#### 下划线布局\n\n:::democode/html\n<ui-dl class="underline">\n    <dt>Underline</dt>\n    <dd>this is underline ui-dl</dd>\n    <dt>Underline</dt>\n    <dd>this is underline ui-dl</dd>\n</ui-dl>\n:::\n\n[[[形态]]]\n\n#### 支持\n\n|类型|支持|默认|\n|-|-|-|\n|尺寸|不支持|-|\n|色彩|不支持|-|\n|状态|`normal`<br/>`apparent`|`normal`|\n\n<a href="/guide/status.html">查看形态文档</a>\n\n#### 状态\n\n:::repeat/html\nstate:normal,apparent\n---\n<ui-dl state="{$stateKey}">\n    <dt>{$&stateName}</dt>\n    <dd>this is normal ui-dl</dd>\n    <dt>{$&stateName}</dt>\n    <dd>this is normal ui-dl</dd>\n</ui-dl>\n<br>\n:::\n\n[[[源码]]]\n\n<iframe src="/report/coverage/lib/components/dl/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>\n')])])},r=[];d._withStripped=!0},28:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var d,r=e(2),o=(d=r)&&d.__esModule?d:{default:d};t.default={data:function(){return{page:"dl"}},components:{"doc-component":o.default}},n.exports=t.default},294:function(n,t,e){"use strict";e.r(t);var d=e(28),r=e.n(d);for(var o in d)"default"!==o&&function(n){e.d(t,n,function(){return d[n]})}(o);var i=e(143),a=e(0),u=!1;var l=function(n){u||e(688)},s=Object(a.a)(r.a,i.a,i.b,!1,l,null,null);s.options.__file="src/docs/pages/component/dl/index.vue",t.default=s.exports},295:function(n,t,e){"use strict";var d=o(e(1)),r=o(e(294));function o(n){return n&&n.__esModule?n:{default:n}}new d.default({el:"#root",render:function(n){return n(r.default)}})},688:function(n,t){}});