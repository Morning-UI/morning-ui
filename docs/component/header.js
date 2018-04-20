!function(n){function e(e){for(var t,l,u=e[0],c=e[1],i=e[2],d=0,f=[];d<u.length;d++)l=u[d],o[l]&&f.push(o[l][0]),o[l]=0;for(t in c)Object.prototype.hasOwnProperty.call(c,t)&&(n[t]=c[t]);for(s&&s(e);f.length;)f.shift()();return a.push.apply(a,i||[]),r()}function r(){for(var n,e=0;e<a.length;e++){for(var r=a[e],t=!0,u=1;u<r.length;u++){var c=r[u];0!==o[c]&&(t=!1)}t&&(a.splice(e--,1),n=l(l.s=r[0]))}return n}var t={},o={26:0};var a=[];function l(e){if(t[e])return t[e].exports;var r=t[e]={i:e,l:!1,exports:{}};return n[e].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.m=n,l.c=t,l.d=function(n,e,r){l.o(n,e)||Object.defineProperty(n,e,{configurable:!1,enumerable:!0,get:r})},l.r=function(n){Object.defineProperty(n,"__esModule",{value:!0})},l.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return l.d(e,"a",e),e},l.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},l.p="/";var u=window.webpackJsonp=window.webpackJsonp||[],c=u.push.bind(u);u.push=e,u=u.slice();for(var i=0;i<u.length;i++)e(u[i]);var s=c;a.push([265,0]),r()}({1:function(n,e){n.exports=Vue},128:function(n,e,r){"use strict";r.d(e,"a",function(){return t}),r.d(e,"b",function(){return o});var t=function(){var n=this.$createElement,e=this._self._c||n;return e("doc-component",{attrs:{page:this.page,hasPadding:!0}},[e("script",{attrs:{type:"text/markdown"}},[this._v('\n# 页头 `<ui-header>`\n\n<doc-component-status page="header"></doc-component-status>\n\n[[[开始]]]\n\n定义一个页头，常用在容器内部，这是一个块级元素。\n\n#### 使用\n\n:::democode/html\n<ui-header>\n    页头标题\n</ui-header>\n:::\n\n#### 子标题\n\n你可以使用`<small>`标记子标题。\n\n:::democode/html\n<ui-header>\n    页头标题<small>页头子标题</small>\n</ui-header>\n:::\n\n#### 带标记的页头\n\n:::democode/html\n<ui-header class="mark">\n    页头标题<small>页头子标题</small>\n</ui-header>\n:::\n\n#### 带下划线的页头\n\n:::democode/html\n<ui-header class="underline">\n    页头标题<small>页头子标题</small>\n</ui-header>\n:::\n\n[[[形态]]]\n\n#### 支持\n\n|类型|支持|默认|\n|-|-|-|\n|尺寸|全部|`m`|\n|色彩|全部|`black`|\n|状态|不支持|-|\n\n<a href="/guide/status.html">查看形态文档</a>\n\n#### 尺寸\n\n:::repeat/html\nsize\n---\n<ui-header class="mark" size="{$sizeKey}">{$&sizeName}<small>页头子标题</small></ui-header>\n:::\n\n#### 色彩\n\n:::repeat/html\ncolor:theme\ncolor:feature\ncolor:black\ncolor:blue\ncolor:silver\ncolor:gray\n---\n<ui-header color="{$colorKey}">{$&colorName}<small>页头子标题</small></ui-header>\n:::\n\n[[[源码]]]\n\n<iframe src="/report/coverage/lib/components/header/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>\n')])])},o=[];t._withStripped=!0},264:function(n,e,r){"use strict";r.r(e);var t=r(29),o=r.n(t);for(var a in t)"default"!==a&&function(n){r.d(e,n,function(){return t[n]})}(a);var l=r(128),u=r(0),c=!1;var i=function(n){c||r(626)},s=Object(u.a)(o.a,l.a,l.b,!1,i,null,null);s.options.__file="src/docs/pages/component/header/index.vue",e.default=s.exports},265:function(n,e,r){"use strict";var t=a(r(1)),o=a(r(264));function a(n){return n&&n.__esModule?n:{default:n}}new t.default({el:"#root",render:function(n){return n(o.default)}})},29:function(n,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t,o=r(2),a=(t=o)&&t.__esModule?t:{default:t};e.default={data:function(){return{page:"header"}},components:{"doc-component":a.default}},n.exports=e.default},626:function(n,e){}});