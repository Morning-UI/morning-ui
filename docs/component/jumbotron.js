!function(n){function t(t){for(var o,i,a=t[0],c=t[1],s=t[2],f=0,p=[];f<a.length;f++)i=a[f],r[i]&&p.push(r[i][0]),r[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(n[o]=c[o]);for(l&&l(t);p.length;)p.shift()();return u.push.apply(u,s||[]),e()}function e(){for(var n,t=0;t<u.length;t++){for(var e=u[t],o=!0,a=1;a<e.length;a++){var c=e[a];0!==r[c]&&(o=!1)}o&&(u.splice(t--,1),n=i(i.s=e[0]))}return n}var o={},r={37:0};var u=[];function i(t){if(o[t])return o[t].exports;var e=o[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=n,i.c=o,i.d=function(n,t,e){i.o(n,t)||Object.defineProperty(n,t,{configurable:!1,enumerable:!0,get:e})},i.r=function(n){Object.defineProperty(n,"__esModule",{value:!0})},i.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return i.d(t,"a",t),t},i.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},i.p="/";var a=window.webpackJsonp=window.webpackJsonp||[],c=a.push.bind(a);a.push=t,a=a.slice();for(var s=0;s<a.length;s++)t(a[s]);var l=c;u.push([311,0]),e()}({1:function(n,t){n.exports=Vue},151:function(n,t,e){"use strict";e.d(t,"a",function(){return o}),e.d(t,"b",function(){return r});var o=function(){var n=this.$createElement,t=this._self._c||n;return t("doc-component",{attrs:{page:this.page,hasPadding:!0}},[t("script",{attrs:{type:"text/markdown"}},[this._v('\n# 巨幕 `<ui-jumbotron>`\n\n<doc-component-status page="jumbotron"></doc-component-status>\n\n[[[开始]]]\n\n定义一个巨幕，巨幕包含标题、内容和一组按钮或链接，巨幕往往用来定义一个显眼的行动区域。\n\n巨幕可包含：\n\n- 标题 h1\n- 说明 p\n- 行动区域\n\n#### 使用\n\n:::democode/html\n<ui-jumbotron>\n    <h1>标题</h1>\n    <p>这个一个介绍区域，用来放置一些介绍内容。<br>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>\n    <ui-btn size="m">行动</ui-btn> &nbsp;\n    <ui-link color="minor" size="m">查看更多</ui-link>\n</ui-jumbotron>\n:::\n\n[[[形态]]]\n\n#### 支持\n\n|类型|支持|默认|\n|-|-|-|\n|尺寸|不支持|-|\n|色彩|不支持|-|\n|状态|不支持|-|\n\n<a href="/guide/status.html">查看形态文档</a>\n\n\n[[[源码]]]\n\n<iframe src="/report/coverage/lib/components/jumbotron/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>\n')])])},r=[];o._withStripped=!0},310:function(n,t,e){"use strict";e.r(t);var o=e(40),r=e.n(o);for(var u in o)"default"!==u&&function(n){e.d(t,n,function(){return o[n]})}(u);var i=e(151),a=e(0),c=!1;var s=function(n){c||e(696)},l=Object(a.a)(r.a,i.a,i.b,!1,s,null,null);l.options.__file="src/docs/pages/component/jumbotron/index.vue",t.default=l.exports},311:function(n,t,e){"use strict";var o=u(e(1)),r=u(e(310));function u(n){return n&&n.__esModule?n:{default:n}}new o.default({el:"#root",render:function(n){return n(r.default)}})},40:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r=e(2),u=(o=r)&&o.__esModule?o:{default:o};t.default={data:function(){return{page:"jumbotron"}},components:{"doc-component":u.default}},n.exports=t.default},696:function(n,t){}});