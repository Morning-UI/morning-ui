!function(n){function t(t){for(var o,i,b=t[0],a=t[1],c=t[2],l=0,p=[];l<b.length;l++)i=b[l],r[i]&&p.push(r[i][0]),r[i]=0;for(o in a)Object.prototype.hasOwnProperty.call(a,o)&&(n[o]=a[o]);for(s&&s(t);p.length;)p.shift()();return e.push.apply(e,c||[]),u()}function u(){for(var n,t=0;t<e.length;t++){for(var u=e[t],o=!0,b=1;b<u.length;b++){var a=u[b];0!==r[a]&&(o=!1)}o&&(e.splice(t--,1),n=i(i.s=u[0]))}return n}var o={},r={9:0};var e=[];function i(t){if(o[t])return o[t].exports;var u=o[t]={i:t,l:!1,exports:{}};return n[t].call(u.exports,u,u.exports,i),u.l=!0,u.exports}i.m=n,i.c=o,i.d=function(n,t,u){i.o(n,t)||Object.defineProperty(n,t,{configurable:!1,enumerable:!0,get:u})},i.r=function(n){Object.defineProperty(n,"__esModule",{value:!0})},i.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return i.d(t,"a",t),t},i.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},i.p="/";var b=window.webpackJsonp=window.webpackJsonp||[],a=b.push.bind(b);b.push=t,b=b.slice();for(var c=0;c<b.length;c++)t(b[c]);var s=a;e.push([237,0]),u()}({1:function(n,t){n.exports=Vue},114:function(n,t,u){"use strict";u.d(t,"a",function(){return o}),u.d(t,"b",function(){return r});var o=function(){var n=this.$createElement,t=this._self._c||n;return t("doc-component",{attrs:{page:this.page,hasPadding:!0}},[t("script",{attrs:{type:"text/markdown"}},[this._v('\n# 按钮组 `<ui-btngroup>`\n\n<doc-component-status page="em"></doc-component-status>\n\n[[[开始]]]\n\n定义一个按钮组，按钮组可以通过特定的HTML结构格式化按钮。\n\n按钮组默认水平排列。\n\n#### 使用\n\n:::democode/html\n <ui-btngroup>\n    <ui-btn>按钮一</ui-btn>\n    <ui-btn>按钮二</ui-btn>\n    <ui-btn>按钮三</ui-btn>\n    <ui-btn>按钮四</ui-btn>\n</ui-btngroup>\n:::\n\n#### 水平排列示例\n\n:::democode/html\n<ui-btngroup class="horizontal">\n    <ui-btn>按钮一</ui-btn>\n    <ui-btn>按钮二</ui-btn>\n    <ui-btn>按钮三</ui-btn>\n    <ui-btn>按钮四</ui-btn>\n</ui-btngroup>\n:::\n\n#### 垂直排列示例\n\n:::democode/html\n<ui-btngroup class="vertical">\n    <ui-btn>按钮一</ui-btn>\n    <ui-btn>按钮二</ui-btn>\n    <ui-btn>按钮三</ui-btn>\n    <ui-btn>按钮四</ui-btn>\n</ui-btngroup>\n:::\n\n#### 无间隔按钮组\n\n:::democode/html\n<ui-btngroup class="nogap">\n    <ui-btn color="success">确认</ui-btn>\n    <ui-btn color="minor">取消</ui-btn>\n</ui-btngroup>\n\n<br/><br/>\n\n<ui-btngroup class="vertical nogap">\n    <ui-btn color="success">确认</ui-btn>\n    <ui-btn color="minor">取消</ui-btn>\n</ui-btngroup>\n:::\n\n#### 分隔按钮组\n\n按钮之间可以插入文本分隔。\n\n:::democode/html\n<ui-btngroup class="split">\n    <ui-btn color="success">确认</ui-btn>\n    <span>或</span>\n    <ui-btn color="minor">取消</ui-btn>\n</ui-btngroup>\n\n<br><br>\n\n<ui-btngroup class="split">\n    <ui-btn color="minor">选择一</ui-btn>\n    <span>或</span>\n    <ui-btn color="minor">选择二</ui-btn>\n    <span>或</span>\n    <ui-btn info>热门选择</ui-btn>\n</ui-btngroup>\n:::\n\n[[[形态]]]\n\n#### 支持\n\n|类型|支持|默认|\n|-|-|-|\n|尺寸|不支持|-|\n|色彩|不支持|-|\n|状态|不支持|-|\n\n<a href="/guide/status.html">查看形态文档</a>\n\n按钮组不支持形态，但可通过`ui-btn`自身的形态来控制。\n\n这也意味着你可以组合不同形态的按钮，这是一个十分有用的特性。\n\n#### 组合不同的形态\n\n:::democode/html\n<p>不同尺寸组合</p>\n<ui-btngroup>\n    <ui-btn size="l">按钮一</ui-btn>\n    <ui-btn size="m" color="minor">按钮二</ui-btn>\n</ui-btngroup>\n\n<br><br>\n\n<p>不同色彩组合</p>\n<ui-btngroup>\n    <ui-btn color="success">按钮一</ui-btn>\n    <ui-btn color="minor">按钮二</ui-btn>\n</ui-btngroup>\n\n<br><br>\n\n<p>不同状态组合</p>\n<ui-btngroup>\n    <ui-btn state="normal" color="minor">按钮一</ui-btn>\n    <ui-btn state="apparent">按钮二</ui-btn>\n</ui-btngroup>\n\n<br><br>\n\n<ui-btngroup>\n    <ui-btn state="normal">按钮一</ui-btn>\n    <ui-btn state="disabled">按钮二</ui-btn>\n</ui-btngroup>\n:::\n\n#### `ui-btn`尺寸\n\n:::repeat/html\nsize\n---\n<ui-btngroup>\n    <ui-btn size="{$sizeKey}">{$&sizeName}</ui-btn>\n    <ui-btn size="{$sizeKey}">{$&sizeName}</ui-btn>\n</ui-btngroup>\n\n<br><br>\n:::\n\n#### `ui-btn`色彩\n\n:::repeat/html\ncolor:theme\ncolor:feature\ncolor:black\ncolor:blue\ncolor:silver\ncolor:gray\n---\n<ui-btngroup>\n    <ui-btn color="{$colorKey}">{$&colorName}</ui-btn>\n    <ui-btn color="{$colorKey}">{$&colorName}</ui-btn>\n</ui-btngroup>\n\n<br><br>\n:::\n\n#### `ui-btn`状态\n\n:::repeat/html\nstate\n---\n<ui-btngroup>\n    <ui-btn state="{$stateKey}">{$&stateName}</ui-btn>\n    <ui-btn state="{$stateKey}">{$&stateName}</ui-btn>\n</ui-btngroup>\n\n<br><br>\n:::\n\n[[[源码]]]\n\n<iframe src="/report/coverage/lib/components/em/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>\n')])])},r=[];o._withStripped=!0},12:function(n,t,u){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r=u(2),e=(o=r)&&o.__esModule?o:{default:o};t.default={data:function(){return{page:"btngroup"}},components:{"doc-component":e.default}},n.exports=t.default},236:function(n,t,u){"use strict";u.r(t);var o=u(12),r=u.n(o);for(var e in o)"default"!==e&&function(n){u.d(t,n,function(){return o[n]})}(e);var i=u(114),b=u(0),a=!1;var c=function(n){a||u(604)},s=Object(b.a)(r.a,i.a,i.b,!1,c,null,null);s.options.__file="src/docs/pages/component/btngroup/index.vue",t.default=s.exports},237:function(n,t,u){"use strict";var o=e(u(1)),r=e(u(236));function e(n){return n&&n.__esModule?n:{default:n}}new o.default({el:"#root",render:function(n){return n(r.default)}})},604:function(n,t){}});