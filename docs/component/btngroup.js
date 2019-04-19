!function(n){function t(t){for(var e,o,b=t[0],a=t[1],s=t[2],p=0,l=[];p<b.length;p++)o=b[p],i[o]&&l.push(i[o][0]),i[o]=0;for(e in a)Object.prototype.hasOwnProperty.call(a,e)&&(n[e]=a[e]);for(c&&c(t);l.length;)l.shift()();return r.push.apply(r,s||[]),u()}function u(){for(var n,t=0;t<r.length;t++){for(var u=r[t],e=!0,b=1;b<u.length;b++){var a=u[b];0!==i[a]&&(e=!1)}e&&(r.splice(t--,1),n=o(o.s=u[0]))}return n}var e={},i={14:0},r=[];function o(t){if(e[t])return e[t].exports;var u=e[t]={i:t,l:!1,exports:{}};return n[t].call(u.exports,u,u.exports,o),u.l=!0,u.exports}o.m=n,o.c=e,o.d=function(n,t,u){o.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:u})},o.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},o.t=function(n,t){if(1&t&&(n=o(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var u=Object.create(null);if(o.r(u),Object.defineProperty(u,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var e in n)o.d(u,e,function(t){return n[t]}.bind(null,e));return u},o.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return o.d(t,"a",t),t},o.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},o.p="/";var b=window.webpackJsonp=window.webpackJsonp||[],a=b.push.bind(b);b.push=t,b=b.slice();for(var s=0;s<b.length;s++)t(b[s]);var c=a;r.push([822,0]),u()}({1:function(n,t){n.exports=Vue},232:function(n,t,u){"use strict";u.r(t);var e=u(233),i=u.n(e);for(var r in e)"default"!==r&&function(n){u.d(t,n,function(){return e[n]})}(r);t.default=i.a},233:function(n,t,u){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e,i=u(2),r=(e=i)&&e.__esModule?e:{default:e};t.default={data:function(){return{page:"btngroup"}},components:{"doc-component":r.default}},n.exports=t.default},280:function(n,t,u){"use strict";var e=function(){var n=this.$createElement,t=this._self._c||n;return t("doc-component",{attrs:{page:this.page,hasPadding:!0}},[t("script",{attrs:{type:"text/markdown"}},[this._v('\n# 按钮组 `<ui-btngroup>`\n\n<doc-component-status page="em"></doc-component-status>\n\n[[[开始]]]\n\n定义一个按钮组，按钮组可以通过特定的HTML结构格式化按钮。\n\n按钮组默认水平排列。\n\n:::vue\n@name:使用\n---\n#demo\n>tpl\n<ui-btngroup>\n    <ui-btn>按钮一</ui-btn>\n    <ui-btn>按钮二</ui-btn>\n    <ui-btn>按钮三</ui-btn>\n    <ui-btn>按钮四</ui-btn>\n</ui-btngroup>\n:::\n\n:::vue\n@name:水平排列示例\n---\n#demo\n>desc\n添加`horizontal`样式类可以实现按钮水平排列。\n>tpl\n<ui-btngroup class="horizontal">\n    <ui-btn>按钮一</ui-btn>\n    <ui-btn>按钮二</ui-btn>\n    <ui-btn>按钮三</ui-btn>\n    <ui-btn>按钮四</ui-btn>\n</ui-btngroup>\n:::\n\n:::vue\n@name:垂直排列示例\n---\n#demo\n>desc\n添加`vertical`样式类可以实现按钮垂直排列。\n>tpl\n<ui-btngroup class="vertical">\n    <ui-btn>按钮一</ui-btn>\n    <ui-btn>按钮二</ui-btn>\n    <ui-btn>按钮三</ui-btn>\n    <ui-btn>按钮四</ui-btn>\n</ui-btngroup>\n:::\n\n:::vue\n@name:无间隔按钮组\n---\n#demo\n>desc\n添加`nogap`样式类可以实现无间隔按钮组。\n>tpl\n<div>\n    <ui-btngroup class="nogap">\n        <ui-btn color="success">确认</ui-btn>\n        <ui-btn color="minor">取消</ui-btn>\n    </ui-btngroup>\n\n    <br/><br/>\n\n    <ui-btngroup class="vertical nogap">\n        <ui-btn color="success">确认</ui-btn>\n        <ui-btn color="minor">取消</ui-btn>\n    </ui-btngroup>\n</div>\n:::\n\n:::vue\n@name:分隔按钮组\n---\n#demo\n>desc\n添加`split`样式类按钮之间可以插入文本分隔。\n>tpl\n<div>\n    <ui-btngroup class="split">\n        <ui-btn color="success">确认</ui-btn>\n        <span>或</span>\n        <ui-btn color="minor">取消</ui-btn>\n    </ui-btngroup>\n\n    <br><br>\n\n    <ui-btngroup class="split">\n        <ui-btn color="minor">选择一</ui-btn>\n        <span>或</span>\n        <ui-btn color="minor">选择二</ui-btn>\n        <span>或</span>\n        <ui-btn info>热门选择</ui-btn>\n    </ui-btngroup>\n</div>\n:::\n\n[[[形态]]]\n\n#### 支持\n\n|类型|支持|默认|\n|-|-|-|\n|尺寸|不支持|-|\n|色彩|不支持|-|\n|状态|不支持|-|\n\n<a href="/guide/status.html">查看形态文档</a>\n\n:::vue\n@name:组合不同的形态\n---\n#demo\n>desc\n按钮组不支持形态，但可通过`ui-btn`自身的形态来控制。\n<br><br>\n这也意味着你可以组合不同形态的按钮，这是一个十分有用的特性。\n>tpl\n<div>\n    <p>不同尺寸组合</p>\n    <ui-btngroup>\n        <ui-btn size="l">按钮一</ui-btn>\n        <ui-btn size="m" color="minor">按钮二</ui-btn>\n    </ui-btngroup>\n\n    <br><br>\n\n    <p>不同色彩组合</p>\n    <ui-btngroup>\n        <ui-btn color="success">按钮一</ui-btn>\n        <ui-btn color="minor">按钮二</ui-btn>\n    </ui-btngroup>\n\n    <br><br>\n\n    <p>不同状态组合</p>\n    <ui-btngroup>\n        <ui-btn state="normal" color="minor">按钮一</ui-btn>\n        <ui-btn state="apparent">按钮二</ui-btn>\n    </ui-btngroup>\n\n    <br><br>\n\n    <ui-btngroup>\n        <ui-btn state="normal">按钮一</ui-btn>\n        <ui-btn state="disabled">按钮二</ui-btn>\n    </ui-btngroup>\n</div>\n:::\n\n#### `ui-btn`尺寸\n\n`ui-btngroup`本身不支持尺寸，可以使用`ui-btn`来设置尺寸。\n\n:::vue\n@layout:size\n---\n<ui-btngroup>\n    <ui-btn size="{$sizeKey}">{$&sizeName}</ui-btn>\n    <ui-btn size="{$sizeKey}">{$&sizeName}</ui-btn>\n</ui-btngroup>\n\n<br><br>\n:::\n\n#### `ui-btn`色彩\n\n`ui-btngroup`本身不支持色彩，可以使用`ui-btn`来设置色彩。\n\n:::vue\n@layout:color\n---\n<ui-btngroup>\n    <ui-btn color="{$colorKey}">{$&colorName}</ui-btn>\n    <ui-btn color="{$colorKey}">{$&colorName}</ui-btn>\n</ui-btngroup>\n\n<br><br>\n:::\n\n#### `ui-btn`状态\n\n`ui-btngroup`本身不支持状态，可以使用`ui-btn`来设置状态。\n\n:::vue\n@layout:state-na\n---\n<ui-btngroup>\n    <ui-btn state="{$stateKey}">{$&stateName}</ui-btn>\n    <ui-btn state="{$stateKey}">{$&stateName}</ui-btn>\n</ui-btngroup>\n\n<br><br>\n:::\n\n[[[源码]]]\n\n<iframe src="/report/coverage/lib/components/em/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>\n')])])},i=[];e._withStripped=!0,u.d(t,"a",function(){return e}),u.d(t,"b",function(){return i})},822:function(n,t,u){"use strict";var e=r(u(1)),i=r(u(823));function r(n){return n&&n.__esModule?n:{default:n}}new e.default({el:"#root",render:function(n){return n(i.default)}})},823:function(n,t,u){"use strict";u.r(t);var e=u(280),i=u(232);for(var r in i)"default"!==r&&function(n){u.d(t,n,function(){return i[n]})}(r);var o=u(0),b=Object(o.a)(i.default,e.a,e.b,!1,null,null,null);b.options.__file="src/docs/pages/component/btngroup/index.vue",t.default=b.exports}});