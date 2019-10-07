!function(n){function t(t){for(var i,u,c=t[0],p=t[1],s=t[2],d=0,l=[];d<c.length;d++)u=c[d],o[u]&&l.push(o[u][0]),o[u]=0;for(i in p)Object.prototype.hasOwnProperty.call(p,i)&&(n[i]=p[i]);for(a&&a(t);l.length;)l.shift()();return r.push.apply(r,s||[]),e()}function e(){for(var n,t=0;t<r.length;t++){for(var e=r[t],i=!0,c=1;c<e.length;c++){var p=e[c];0!==o[p]&&(i=!1)}i&&(r.splice(t--,1),n=u(u.s=e[0]))}return n}var i={},o={66:0},r=[];function u(t){if(i[t])return i[t].exports;var e=i[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,u),e.l=!0,e.exports}u.m=n,u.c=i,u.d=function(n,t,e){u.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:e})},u.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},u.t=function(n,t){if(1&t&&(n=u(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(u.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var i in n)u.d(e,i,function(t){return n[t]}.bind(null,i));return e},u.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return u.d(t,"a",t),t},u.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},u.p="/";var c=window.webpackJsonp=window.webpackJsonp||[],p=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var a=p;r.push([729,0]),e()}({1:function(n,t){n.exports=Vue},133:function(n,t,e){"use strict";e.r(t);var i=e(134),o=e.n(i);for(var r in i)"default"!==r&&function(n){e.d(t,n,function(){return i[n]})}(r);t.default=o.a},134:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,o=e(2),r=(i=o)&&i.__esModule?i:{default:i};t.default={data:function(){return{page:"sticky"}},components:{"doc-component":r.default}},n.exports=t.default},270:function(n,t,e){"use strict";var i=function(){var n=this.$createElement,t=this._self._c||n;return t("doc-component",{attrs:{page:this.page,hasPadding:!0}},[t("script",{attrs:{type:"text/markdown"}},[this._v('\n# 吸附 `<ui-sticky>`\n\n<doc-component-status page="sticky"></doc-component-status>\n\n[[[开始]]]\n\n定义一个吸附，这是一个内联块元素。吸附默认根据视窗滚动进行吸附，吸附仅支持Y轴。\n\n吸附组件的`z-index`默认为Morning UI全局`z-index`的初始值减1（[查看如何调整全局`z-index`](/guide/init.html#配置初始z-index值)），这在大部分场景下都会使吸附处于最前面。但是由于Morning UI并不知道实际场景中最大的`z-index`是多少，所以仍然存在被吸附元素被遮挡的情况，这种情况下你可以为吸附指定更大的`z-index`来解决。\n\n注意：`ui-sticky`和`ui-tab`一起工作时存在一些问题。\n\n:::vue\n@name:使用\n---\n#demo\n>tpl\n<div>\n    <ui-sticky>\n        <ui-btn>吸附在视窗顶部的跟随</ui-btn>\n    </ui-sticky>\n</div>\n:::\n\n:::vue\n@name:指定吸附位置\n---\n#demo\n>desc\n吸附相对位置单位是`px`。\n>tpl\n<div>\n    <ui-sticky :top="40">\n        <ui-btn>吸附在距离视窗顶部40px的位置</ui-btn>\n    </ui-sticky>\n</div>\n---\n#demo\n>desc\n也可以指定相对于底部的位置。\n>tpl\n<div>\n    <ui-sticky :bottom="10">\n        <ui-btn>吸附在距离视窗底部10px的位置</ui-btn>\n    </ui-sticky>\n</div>\n---\n#demo\n>desc\n若同时设置了`top`和`bottom`，则`bottom`优先级更高。\n>tpl\n<div>\n    <ui-sticky :bottom="80" :top="80">\n        <ui-btn>吸附在距离视窗底部80px的位置</ui-btn>\n    </ui-sticky>\n</div>\n:::\n\n:::vue\n@name:吸附于父辈容器\n---\n#demo\n>desc\n在`position`配置为`parent`时，则吸附相对父辈元素吸附，而不会相对视窗定位\n<br><br>\n父辈元素必须设置为`position:relative | absolute | fixed`，且吸附在吸附时不会超出父辈容器的。\n>tpl\n<div style="position:relative;height:300px;padding: 0 200px;">\n    <ui-sticky position="parent" :top="10">\n        <ui-btn color="neutral-8">吸附在父节点顶部的跟随</ui-btn>\n    </ui-sticky>\n    <div style="height: 228px;"></div>\n    <ui-sticky style="margin-left: 180px;" position="parent" :bottom="10">\n        <ui-btn color="neutral-8">吸附在父节点底部的跟随</ui-btn>\n    </ui-sticky>\n</div>\n---\n#demo\n>desc\n若父辈容器可滚动。\n>tpl\n<div style="height:300px;overflow-y: auto;">\n    <div style="position:relative;height:600px;padding: 0 200px;">\n        <ui-sticky position="parent" :top="10">\n            <ui-btn color="neutral-8">吸附在父节点顶部的跟随</ui-btn>\n        </ui-sticky>\n        <div style="height: 528px;"></div>\n        <ui-sticky style="margin-left: 180px;" position="parent" :bottom="10">\n            <ui-btn color="neutral-8">吸附在父节点底部的跟随</ui-btn>\n        </ui-sticky>\n    </div>\n</div>\n:::\n\n[[[形态]]]\n\n#### 支持\n\n|类型|支持|默认|\n|-|-|-|\n|尺寸|不支持|-|\n|色彩|不支持|-|\n|状态|不支持|-|\n\n[[[配置]]]\n\n:::vue\n@name:position\n---\n#config\n>conf-desc\n吸附模式，支持两种：<br>`viewport`：相对于浏览器视窗吸附<br>`parent`：根据父辈容器吸附(父辈元素必须设置为`position:relative | absolute | fixed`)，切吸附不会超出父辈容器范围。\n>conf-accept\n`\'viewport\'`<br>`\'parent\'`\n>conf-type\nString\n>conf-default\n`\'viewport\'`\n---\n#demo\n>desc\n`position`为`viewport`的吸附。\n>tpl\n<div>\n    <ui-sticky style="margin-left: 400px;">\n        <ui-btn color="neutral-4">position为viewport的吸附</ui-btn>\n    </ui-sticky>\n</div>\n---\n#demo\n>desc\n`position`为`parent`的吸附。\n>tpl\n<div style="position:relative;height:300px;padding: 0 200px;">\n    <ui-sticky position="parent" top="40" style="margin-left: 200px;">\n        <ui-btn color="neutral-4">position为parent的吸附</ui-btn>\n    </ui-sticky>\n</div>\n:::\n\n:::vue\n@name:top\n---\n#config\n>conf-desc\n吸附位置相对顶部距离。\n>conf-accept\n距离(px)\n>conf-type\nNumber\n>conf-default\n`0`\n---\n#demo\n>tpl\n<div>\n    <ui-sticky :top="70" style="margin-left: 400px;">\n        <ui-btn color="neutral-4">吸附在距离视窗顶部70px的位置</ui-btn>\n    </ui-sticky>\n</div>\n:::\n\n:::vue\n@name:bottom\n---\n#config\n>conf-desc\n吸附位置相对底部距离，当`bottom`和`top`同时设置时，优先采用`top`。\n>conf-accept\n距离(px)\n>conf-type\nNumber\n>conf-default\n`undefined`\n---\n#demo\n>tpl\n<div>\n    <ui-sticky :bottom="40" style="margin-left: 400px;">\n        <ui-btn color="neutral-4">吸附在距离视窗底部40px的位置</ui-btn>\n    </ui-sticky>\n</div>\n:::\n\n[[[方法]]]\n\n<h1>暂无</h1>\n\n[[[事件]]]\n\n:::vue\n@layout:lifecycle-event\n---\nsticky\n吸附\n:::\n\n[[[源码]]]\n\n<iframe src="/report/coverage/lib/components/sticky/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>\n\n')])])},o=[];i._withStripped=!0,e.d(t,"a",function(){return i}),e.d(t,"b",function(){return o})},729:function(n,t,e){"use strict";var i=r(e(1)),o=r(e(730));function r(n){return n&&n.__esModule?n:{default:n}}new i.default({el:"#root",render:function(n){return n(o.default)}})},730:function(n,t,e){"use strict";e.r(t);var i=e(270),o=e(133);for(var r in o)"default"!==r&&function(n){e.d(t,n,function(){return o[n]})}(r);var u=e(0),c=Object(u.a)(o.default,i.a,i.b,!1,null,null,null);c.options.__file="src/docs/pages/component/sticky/index.vue",t.default=c.exports}});