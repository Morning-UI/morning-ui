!function(e){function n(n){for(var r,c,a=n[0],i=n[1],s=n[2],l=0,d=[];l<a.length;l++)c=a[l],o[c]&&d.push(o[c][0]),o[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(f&&f(n);d.length;)d.shift()();return u.push.apply(u,s||[]),t()}function t(){for(var e,n=0;n<u.length;n++){for(var t=u[n],r=!0,a=1;a<t.length;a++){var i=t[a];0!==o[i]&&(r=!1)}r&&(u.splice(n--,1),e=c(c.s=t[0]))}return e}var r={},o={54:0};var u=[];function c(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.m=e,c.c=r,c.d=function(e,n,t){c.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:t})},c.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},c.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(n,"a",n),n},c.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},c.p="/";var a=window.webpackJsonp=window.webpackJsonp||[],i=a.push.bind(a);a.push=n,a=a.slice();for(var s=0;s<a.length;s++)n(a[s]);var f=i;u.push([327,0]),t()}({1:function(e,n){e.exports=Vue},159:function(e,n,t){"use strict";t.d(n,"a",function(){return r}),t.d(n,"b",function(){return o});var r=function(){var e=this.$createElement,n=this._self._c||e;return n("doc-component",{attrs:{page:this.page,hasPadding:!0}},[n("script",{attrs:{type:"text/markdown"}},[this._v('\n# 居中对齐文本 `<ui-textcenter>`\n\n<doc-component-status page="textcenter"></doc-component-status>\n\n[[[开始]]]\n\n内容居中对齐组件，这是一个块级元素。\n\n#### 使用\n\n:::democode/html\n<ui-textcenter>居中的文本</ui-textcenter>\n:::\n\n[[[形态]]]\n\n#### 支持\n\n|类型|支持|默认|\n|-|-|-|\n|尺寸|不支持|-|\n|色彩|不支持|-|\n|状态|不支持|-|\n\n<a href="/guide/status.html">查看形态文档</a>\n\n\n[[[源码]]]\n\n<iframe src="/report/coverage/lib/components/textcenter/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>\n')])])},o=[];r._withStripped=!0},326:function(e,n,t){"use strict";t.r(n);var r=t(57),o=t.n(r);for(var u in r)"default"!==u&&function(e){t.d(n,e,function(){return r[e]})}(u);var c=t(159),a=t(0),i=!1;var s=function(e){i||t(694)},f=Object(a.a)(o.a,c.a,c.b,!1,s,null,null);f.options.__file="src/docs/pages/component/textcenter/index.vue",n.default=f.exports},327:function(e,n,t){"use strict";var r=u(t(1)),o=u(t(326));function u(e){return e&&e.__esModule?e:{default:e}}new r.default({el:"#root",render:function(e){return e(o.default)}})},57:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r,o=t(2),u=(r=o)&&r.__esModule?r:{default:r};n.default={data:function(){return{page:"textcenter"}},components:{"doc-component":u.default}},e.exports=n.default},694:function(e,n){}});