!function(n){function t(t){for(var i,r,c=t[0],s=t[1],u=t[2],d=0,p=[];d<c.length;d++)r=c[d],o[r]&&p.push(o[r][0]),o[r]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(n[i]=s[i]);for(l&&l(t);p.length;)p.shift()();return a.push.apply(a,u||[]),e()}function e(){for(var n,t=0;t<a.length;t++){for(var e=a[t],i=!0,c=1;c<e.length;c++){var s=e[c];0!==o[s]&&(i=!1)}i&&(a.splice(t--,1),n=r(r.s=e[0]))}return n}var i={},o={1:0};var a=[];function r(t){if(i[t])return i[t].exports;var e=i[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=n,r.c=i,r.d=function(n,t,e){r.o(n,t)||Object.defineProperty(n,t,{configurable:!1,enumerable:!0,get:e})},r.r=function(n){Object.defineProperty(n,"__esModule",{value:!0})},r.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return r.d(t,"a",t),t},r.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},r.p="/";var c=window.webpackJsonp=window.webpackJsonp||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var l=s;a.push([247,0]),e()}({1:function(n,t){n.exports=Vue},119:function(n,t,e){"use strict";e.d(t,"a",function(){return i}),e.d(t,"b",function(){return o});var i=function(){var n=this.$createElement,t=this._self._c||n;return t("doc-component",{attrs:{page:this.page,hasPadding:!0}},[t("script",{attrs:{type:"text/markdown"}},[this._v('\n# 行动栏 `<ui-action>`\n\n<doc-component-status page="action"></doc-component-status>\n\n[[[开始]]]\n\n定义一个包含多个操作的行动栏。\n\n行动栏可包含：\n\n- 名称 .title\n- 说明 .note\n- 行动区域 .action\n\n#### 使用\n\n:::democode/html\n<div style="width:400px">\n    <ui-action>\n        <div class="title">\n            <h5>行动名称</h5>\n            <span class="note">行动说明</span>\n        </div>\n        <div class="action">\n            <ui-btn>行动按钮</ui-btn>\n        </div>\n    </ui-action>\n</div>\n:::\n\n#### 多个行动入口\n\n:::democode/html\n<div style="width:400px">\n    <ui-action>\n        <div class="title">\n            <h5>行动名称</h5>\n            <span class="note">行动说明</span>\n        </div>\n        <div class="action">\n            <ui-btn>确认</ui-btn>\n            <ui-link color="minor">取消</ui-link>\n        </div>\n    </ui-action>\n</div>\n:::\n\n#### 垂直排列\n\n:::democode/html\n<div style="width:400px">\n    <ui-action class="vertical">\n        <div class="title">\n            <h5>行动名称</h5>\n            <span class="note">行动说明</span>\n        </div>\n        <div class="action">\n            <ui-textinput></ui-textinput>\n        </div>\n    </ui-action>\n</div>\n:::\n\n[[[形态]]]\n\n#### 支持\n\n|类型|支持|默认|\n|-|-|-|\n|尺寸|全部|`m`|\n|色彩|全部|`black`|\n|状态|不支持|-|\n\n<a href="/guide/status.html">查看形态文档</a>\n\n#### 尺寸\n\n:::repeat/html\nsize\n---\n<div style="width:400px">\n    <ui-action size="{$sizeKey}">\n        <div class="title">\n            <h5>{$&sizeName}</h5>\n            <span class="note">行动说明</span>\n        </div>\n        <div class="action">\n            <ui-btn size="{$sizeKey}">行动按钮</ui-btn>\n        </div>\n    </ui-action>\n</div>\n<br>\n:::\n\n#### 色彩\n\n:::repeat/html\ncolor:theme\ncolor:feature\ncolor:black\ncolor:blue\ncolor:silver\ncolor:gray\n---\n<div style="width:400px">\n    <ui-action color="{$colorKey}">\n        <div class="title">\n            <h5>{$&colorName}</h5>\n            <span class="note">行动说明</span>\n        </div>\n        <div class="action">\n            <ui-btn color="{$colorKey}">{$name}按钮</ui-btn>\n        </div>\n    </ui-action>\n</div>\n<br>\n:::\n\n[[[源码]]]\n\n<iframe src="/report/coverage/lib/components/action/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>\n\n')])])},o=[];i._withStripped=!0},246:function(n,t,e){"use strict";e.r(t);var i=e(4),o=e.n(i);for(var a in i)"default"!==a&&function(n){e.d(t,n,function(){return i[n]})}(a);var r=e(119),c=e(0),s=!1;var u=function(n){s||e(640)},l=Object(c.a)(o.a,r.a,r.b,!1,u,null,null);l.options.__file="src/docs/pages/component/action/index.vue",t.default=l.exports},247:function(n,t,e){"use strict";var i=a(e(1)),o=a(e(246));function a(n){return n&&n.__esModule?n:{default:n}}new i.default({el:"#root",render:function(n){return n(o.default)}})},4:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,o=e(2),a=(i=o)&&i.__esModule?i:{default:i};t.default={data:function(){return{page:"action"}},components:{"doc-component":a.default}},n.exports=t.default},640:function(n,t){}});