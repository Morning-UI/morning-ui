!function(n){function t(t){for(var r,c,a=t[0],i=t[1],s=t[2],f=0,p=[];f<a.length;f++)c=a[f],o[c]&&p.push(o[c][0]),o[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(n[r]=i[r]);for(l&&l(t);p.length;)p.shift()();return u.push.apply(u,s||[]),e()}function e(){for(var n,t=0;t<u.length;t++){for(var e=u[t],r=!0,a=1;a<e.length;a++){var i=e[a];0!==o[i]&&(r=!1)}r&&(u.splice(t--,1),n=c(c.s=e[0]))}return n}var r={},o={54:0};var u=[];function c(t){if(r[t])return r[t].exports;var e=r[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,c),e.l=!0,e.exports}c.m=n,c.c=r,c.d=function(n,t,e){c.o(n,t)||Object.defineProperty(n,t,{configurable:!1,enumerable:!0,get:e})},c.r=function(n){Object.defineProperty(n,"__esModule",{value:!0})},c.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return c.d(t,"a",t),t},c.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},c.p="/";var a=window.webpackJsonp=window.webpackJsonp||[],i=a.push.bind(a);a.push=t,a=a.slice();for(var s=0;s<a.length;s++)t(a[s]);var l=i;u.push([321,0]),e()}({1:function(n,t){n.exports=Vue},156:function(n,t,e){"use strict";e.d(t,"a",function(){return r}),e.d(t,"b",function(){return o});var r=function(){var n=this.$createElement,t=this._self._c||n;return t("doc-component",{attrs:{page:this.page,hasPadding:!0}},[t("script",{attrs:{type:"text/markdown"}},[this._v('\n# 文本颜色 `<ui-textcolor>`\n\n<doc-component-status page="textcolor"></doc-component-status>\n\n[[[开始]]]\n\n定义文本的颜色，这是一个内联元素。\n\n#### 使用\n\n:::democode/html\n<ui-textcolor>This is ui-textcolor</ui-textcolor>\n:::\n\n[[[形态]]]\n\n#### 支持\n\n|类型|支持|默认|\n|-|-|-|\n|尺寸|不支持|-|\n|色彩|全部|`theme`|\n|状态|不支持|-|\n\n<a href="/guide/status.html">查看形态文档</a>\n\n#### 色彩\n\n:::preset/html\nstatusColor\n---\nuikey:textcolor\n:::\n\n[[[源码]]]\n\n<iframe src="/report/coverage/lib/components/textcolor/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>\n')])])},o=[];r._withStripped=!0},320:function(n,t,e){"use strict";e.r(t);var r=e(57),o=e.n(r);for(var u in r)"default"!==u&&function(n){e.d(t,n,function(){return r[n]})}(u);var c=e(156),a=e(0),i=!1;var s=function(n){i||e(682)},l=Object(a.a)(o.a,c.a,c.b,!1,s,null,null);l.options.__file="src/docs/pages/component/textcolor/index.vue",t.default=l.exports},321:function(n,t,e){"use strict";var r=u(e(1)),o=u(e(320));function u(n){return n&&n.__esModule?n:{default:n}}new r.default({el:"#root",render:function(n){return n(o.default)}})},57:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=e(2),u=(r=o)&&r.__esModule?r:{default:r};t.default={data:function(){return{page:"textcolor"}},components:{"doc-component":u.default}},n.exports=t.default},682:function(n,t){}});