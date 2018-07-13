!function(n){function t(t){for(var i,o,l=t[0],r=t[1],c=t[2],d=0,v=[];d<l.length;d++)o=l[d],a[o]&&v.push(a[o][0]),a[o]=0;for(i in r)Object.prototype.hasOwnProperty.call(r,i)&&(n[i]=r[i]);for(u&&u(t);v.length;)v.shift()();return s.push.apply(s,c||[]),e()}function e(){for(var n,t=0;t<s.length;t++){for(var e=s[t],i=!0,l=1;l<e.length;l++){var r=e[l];0!==a[r]&&(i=!1)}i&&(s.splice(t--,1),n=o(o.s=e[0]))}return n}var i={},a={55:0};var s=[];function o(t){if(i[t])return i[t].exports;var e=i[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=n,o.c=i,o.d=function(n,t,e){o.o(n,t)||Object.defineProperty(n,t,{configurable:!1,enumerable:!0,get:e})},o.r=function(n){Object.defineProperty(n,"__esModule",{value:!0})},o.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return o.d(t,"a",t),t},o.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},o.p="/";var l=window.webpackJsonp=window.webpackJsonp||[],r=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var u=r;s.push([349,0]),e()}({1:function(n,t){n.exports=Vue},170:function(n,t,e){"use strict";e.d(t,"a",function(){return i}),e.d(t,"b",function(){return a});var i=function(){var n=this.$createElement,t=this._self._c||n;return t("doc-component",{attrs:{page:this.page,hasPadding:!0}},[t("script",{attrs:{type:"text/markdown"}},[this._v('\n# 统计 `<ui-statistic>`\n\n<doc-component-status page="statistic"></doc-component-status>\n\n[[[开始]]]\n\n定义统计区域，统计包含数值和名称，这是一个内联块标签。\n\n统计可包含：\n\n- 数值 .value\n- 名称 .label\n\n#### 使用\n\n:::democode/html\n<ui-statistic>\n    <div class="value">5,550</div>\n    <div class="label">downloads</div>\n</ui-statistic>\n:::\n\n#### 带图片统计\n\n:::democode/html\n<ui-statistic>\n    <div class="value"><img src="http://morning-ui-image.test.upcdn.net/48fc612216b4fd2112a6bcd7d0db6eba.jpeg"/><span>5,550</span></div>\n    <div class="label">downloads</div>\n</ui-statistic>\n:::\n\n#### 带图标统计\n\n:::democode/html\n<ui-statistic>\n    <div class="value"><i class="iconfont">&#xe6e2;</i><span>5,550</span></div>\n    <div class="label">downloads</div>\n</ui-statistic>\n:::\n\n#### 水平名称\n\n:::democode/html\n<ui-statistic class="horizontal">\n    <div class="value">5,550</div>\n    <div class="label">downloads</div>\n</ui-statistic>\n\n\n<ui-statistic class="horizontal">\n    <div class="label">downloads</div>\n    <div class="value">5,550</div>\n</ui-statistic>\n:::\n\n#### 上方名称\n\n:::democode/html\n<ui-statistic>\n    <div class="label">downloads</div>\n    <div class="value">5,550</div>\n</ui-statistic>\n:::\n\n[[[形态]]]\n\n#### 支持\n\n|类型|支持|默认|\n|-|-|-|\n|尺寸|全部|`m`|\n|色彩|全部|`black`|\n|状态|`normal`<br/>`apparent`|`normal`|\n\n<a href="/guide/status.html">查看形态文档</a>\n\n#### 尺寸\n\n:::repeat/html\nsize\n---\n<ui-statistic size="{$sizeKey}">\n    <div class="value">5,550</div>\n    <div class="label">{$&sizeName}</div>\n</ui-statistic>\n:::\n\n#### 色彩\n\n:::repeat/html\ncolor:theme\ncolor:feature\ncolor:black\ncolor:blue\ncolor:silver\ncolor:gray\n---\n<ui-statistic color="{$colorKey}">\n    <div class="value">5,550</div>\n    <div class="label">{$&colorName}</div>\n</ui-statistic>\n:::\n\n#### 状态\n\n:::repeat/html\nstate:normal,apparent\n---\n<ui-statistic state="{$stateKey}">\n    <div class="value">5,550</div>\n    <div class="label">{$&stateName}</div>\n</ui-statistic>\n:::\n\n[[[源码]]]\n\n<iframe src="/report/coverage/lib/components/statistic/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>\n')])])},a=[];i._withStripped=!0},348:function(n,t,e){"use strict";e.r(t);var i=e(58),a=e.n(i);for(var s in i)"default"!==s&&function(n){e.d(t,n,function(){return i[n]})}(s);var o=e(170),l=e(0),r=!1;var c=function(n){r||e(736)},u=Object(l.a)(a.a,o.a,o.b,!1,c,null,null);u.options.__file="src/docs/pages/component/statistic/index.vue",t.default=u.exports},349:function(n,t,e){"use strict";var i=s(e(1)),a=s(e(348));function s(n){return n&&n.__esModule?n:{default:n}}new i.default({el:"#root",render:function(n){return n(a.default)}})},58:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,a=e(2),s=(i=a)&&i.__esModule?i:{default:i};t.default={data:function(){return{page:"statistic"}},components:{"doc-component":s.default}},n.exports=t.default},736:function(n,t){}});