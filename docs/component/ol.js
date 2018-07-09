!function(n){function i(i){for(var t,r,s=i[0],u=i[1],a=i[2],f=0,d=[];f<s.length;f++)r=s[f],o[r]&&d.push(o[r][0]),o[r]=0;for(t in u)Object.prototype.hasOwnProperty.call(u,t)&&(n[t]=u[t]);for(c&&c(i);d.length;)d.shift()();return l.push.apply(l,a||[]),e()}function e(){for(var n,i=0;i<l.length;i++){for(var e=l[i],t=!0,s=1;s<e.length;s++){var u=e[s];0!==o[u]&&(t=!1)}t&&(l.splice(i--,1),n=r(r.s=e[0]))}return n}var t={},o={47:0};var l=[];function r(i){if(t[i])return t[i].exports;var e=t[i]={i:i,l:!1,exports:{}};return n[i].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=n,r.c=t,r.d=function(n,i,e){r.o(n,i)||Object.defineProperty(n,i,{configurable:!1,enumerable:!0,get:e})},r.r=function(n){Object.defineProperty(n,"__esModule",{value:!0})},r.n=function(n){var i=n&&n.__esModule?function(){return n.default}:function(){return n};return r.d(i,"a",i),i},r.o=function(n,i){return Object.prototype.hasOwnProperty.call(n,i)},r.p="/";var s=window.webpackJsonp=window.webpackJsonp||[],u=s.push.bind(s);s.push=i,s=s.slice();for(var a=0;a<s.length;a++)i(s[a]);var c=u;l.push([331,0]),e()}({1:function(n,i){n.exports=Vue},161:function(n,i,e){"use strict";e.d(i,"a",function(){return t}),e.d(i,"b",function(){return o});var t=function(){var n=this.$createElement,i=this._self._c||n;return i("doc-component",{attrs:{page:this.page,hasPadding:!0}},[i("script",{attrs:{type:"text/markdown"}},[this._v('\n# 有序列表 `<ui-ol>`\n\n<doc-component-status page="ol"></doc-component-status>\n\n[[[开始]]]\n\n定义一个有序列表，支持多层嵌套，列表中每一项使用`<li>`标签。\n\n#### 使用\n\n:::democode/html\n<ui-ol>\n    <li>This is first</li>\n    <li>This is second</li>\n    <li>This is third</li>\n</ui-ol>\n:::\n\n#### 三层嵌套\n\n:::democode/html\n<ui-ol>\n    <li>This is 1</li>\n    <ui-ol>\n        <li>This is 2.1</li>\n        <ui-ol>\n            <li>This is 2.2.1</li>\n            <li>This is 2.2.2</li>\n        </ui-ol>\n        <li>This is 2.3</li>\n    </ui-ol>\n    <li>This is 3</li>\n</ui-ol>\n:::\n\n#### 超过三层嵌套\n\n超过三层的无序列表，项目序号均为`lower-latin`。\n\n:::democode/html\n<ui-ol>\n    <li>This is 1</li>\n    <ui-ol>\n        <li>This is 2.1</li>\n        <ui-ol>\n            <li>This is 2.2.1</li>\n            <ui-ol>\n                <li>This is 2.2.2.1</li>\n                <li>This is 2.2.2.2</li>\n            </ui-ol>\n            <li>This is 2.2.3</li>\n        </ui-ol>\n        <li>This is 2.3</li>\n    </ui-ol>\n    <li>This is 3</li>\n</ui-ol>\n:::\n\n[[[形态]]]\n\n#### 支持\n\n|类型|支持|默认|\n|-|-|-|\n|尺寸|不支持|-|\n|色彩|不支持|-|\n|状态|`normal`<br/>`apparent`|`normal`|\n\n<a href="/guide/status.html">查看形态文档</a>\n\n#### 状态\n\n:::repeat/html\nstate:normal,apparent\n---\n<ui-ol state="{$stateKey}">\n    <li>this is {$&stateName} ui-ol</li>\n    <li>this is {$&stateName} ui-ol</li>\n</ui-ol>\n<br>\n:::\n\n[[[源码]]]\n\n<iframe src="/report/coverage/lib/components/ol/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>\n')])])},o=[];t._withStripped=!0},330:function(n,i,e){"use strict";e.r(i);var t=e(50),o=e.n(t);for(var l in t)"default"!==l&&function(n){e.d(i,n,function(){return t[n]})}(l);var r=e(161),s=e(0),u=!1;var a=function(n){u||e(716)},c=Object(s.a)(o.a,r.a,r.b,!1,a,null,null);c.options.__file="src/docs/pages/component/ol/index.vue",i.default=c.exports},331:function(n,i,e){"use strict";var t=l(e(1)),o=l(e(330));function l(n){return n&&n.__esModule?n:{default:n}}new t.default({el:"#root",render:function(n){return n(o.default)}})},50:function(n,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var t,o=e(2),l=(t=o)&&t.__esModule?t:{default:t};i.default={data:function(){return{page:"ol"}},components:{"doc-component":l.default}},n.exports=i.default},716:function(n,i){}});