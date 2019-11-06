!function(n){function e(e){for(var t,a,d=e[0],l=e[1],s=e[2],c=0,p=[];c<d.length;c++)a=d[c],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(t in l)Object.prototype.hasOwnProperty.call(l,t)&&(n[t]=l[t]);for(u&&u(e);p.length;)p.shift()();return r.push.apply(r,s||[]),i()}function i(){for(var n,e=0;e<r.length;e++){for(var i=r[e],t=!0,d=1;d<i.length;d++){var l=i[d];0!==o[l]&&(t=!1)}t&&(r.splice(e--,1),n=a(a.s=i[0]))}return n}var t={},o={16:0},r=[];function a(e){if(t[e])return t[e].exports;var i=t[e]={i:e,l:!1,exports:{}};return n[e].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=n,a.c=t,a.d=function(n,e,i){a.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:i})},a.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},a.t=function(n,e){if(1&e&&(n=a(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var t in n)a.d(i,t,function(e){return n[e]}.bind(null,t));return i},a.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return a.d(e,"a",e),e},a.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},a.p="/";var d=window.webpackJsonp=window.webpackJsonp||[],l=d.push.bind(d);d.push=e,d=d.slice();for(var s=0;s<d.length;s++)e(d[s]);var u=l;r.push([860,0]),i()}({1:function(n,e){n.exports=Vue},256:function(n,e,i){"use strict";i.r(e);var t=i(257),o=i.n(t);for(var r in t)"default"!==r&&function(n){i.d(e,n,(function(){return t[n]}))}(r);e.default=o.a},257:function(n,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t,o=i(2),r=(t=o)&&t.__esModule?t:{default:t};e.default={data:function(){return{page:"card"}},components:{"doc-component":r.default}},n.exports=e.default},408:function(n,e,i){"use strict";var t=function(){var n=this.$createElement,e=this._self._c||n;return e("doc-component",{attrs:{page:this.page,hasPadding:!0}},[e("script",{attrs:{type:"text/markdown"}},[this._v('\n# 卡片 `<ui-card>`\n\n<doc-component-status page="card"></doc-component-status>\n\n[[[开始]]]\n\n定义一张卡片，卡片包含头部和主体部分。\n\n:::vue\n@name:使用\n---\n#demo\n>desc\n使用`slot="header"`来定义卡片头部部分，`slot="footer"`来定义卡片尾部部分，其他的内容为卡片主体部分。\n>tpl\n<div style="width:180px;height:240px;">\n    <ui-card>\n        <span slot="header">头部</span>\n        <div>卡片</div>\n        <span slot="footer">尾部</span>\n    </ui-card>\n</div>\n:::\n\n:::vue\n@name:没有头尾部的卡片\n---\n#demo\n>desc\n`slot="header"`不是必须的。\n>tpl\n<div style="width:180px;height:240px;">\n    <ui-card>\n        <div>卡片</div>\n        <span slot="footer">尾部</span>\n    </ui-card>\n</div>\n---\n#demo\n>desc\n`slot="footer"`不是必须的。\n>tpl\n<div style="width:180px;height:240px;">\n    <ui-card>\n        <span slot="header">头部</span>\n        <div>卡片</div>\n    </ui-card>\n</div>\n---\n#demo\n>desc\n同时去掉头部和尾部。\n>tpl\n<div style="width:180px;height:240px;">\n    <ui-card>\n        <div>卡片</div>\n    </ui-card>\n</div>\n:::\n\n:::vue\n@name:无间隙卡片\n---\n#demo\n>desc\n卡片内容部分默认具有间隙，可以通过`no-padding`来去除间隙。\n>tpl\n<div>\n    <div style="width:180px;height:240px;display:inline-block;margin:10px;vertical-align: top;">\n        <ui-card no-padding>卡片</ui-card>\n    </div>\n\n    <div style="width:180px;height:240px;display:inline-block;margin:10px;vertical-align: top;">\n        <ui-card no-padding>\n            <span slot="header">头部</span>\n            <div>卡片</div>\n            <span slot="footer">尾部</span>\n        </ui-card>\n    </div>\n</div>\n:::\n\n:::vue\n@name:头尾部内容支持HTML\n---\n#demo\n>desc\n卡片的头尾部支持HTML，所以可以组合出更复杂的头部。\n>tpl\n<div style="width:240px;height:360px;">\n    <ui-card color="neutral-1">\n        <div slot="header">\n            <ui-h size="xxs">内容列表</ui-h>\n            <ui-textinput inside-name="搜索内容"></ui-textinput>\n            <div class="operate" style="margin:10px 0">\n                <ui-btn size="s" color="success">新增</ui-btn>\n                <ui-link size="s" color="minor">查看帮助</ui-link>\n            </div>\n        </div>\n        <div>卡片</div>\n        <div slot="footer">\n            <ui-label size="xs">标签1</ui-label>\n            <ui-label size="xs" color="neutral-3">标签2</ui-label>\n            <ui-label size="xs" color="neutral-3">标签3</ui-label>\n        </div>\n    </ui-card>\n</div>\n:::\n\n:::vue\n@name:卡片内部留白\n---\n#demo\n>desc\n可以通过`inside-padding`来为卡片增加内部留白。\n<br>\n一般可以配合自定义头部内容使用。\n>tpl\n<div style="width:240px;height:360px;">\n    <ui-card color="neutral-1" inside-padding>\n        <div slot="header">\n            <ui-h size="xxs">内容列表</ui-h>\n            <div class="operate" style="margin:10px 0">\n                <ui-btn size="xs" color="success">新增</ui-btn>\n                <ui-btn size="xs" color="minor">高级设置</ui-btn>\n                <ui-link size="xs" color="minor">查看帮助</ui-link>\n            </div>\n        </div>\n        <div>卡片</div>\n        <div slot="footer">\n            <ui-label size="xs">标签1</ui-label>\n            <ui-label size="xs" color="neutral-3">标签2</ui-label>\n            <ui-label size="xs" color="neutral-3">标签3</ui-label>\n        </div>\n    </ui-card>\n</div>\n:::\n\n[[[形态]]]\n\n#### 支持\n\n|类型|支持|默认|\n|-|-|-|\n|尺寸|不支持|-|\n|色彩|全部(除`transparent`)|`theme`|\n|状态|不支持|-|\n\n<a href="/guide/status.html">查看形态文档</a> / <a href="/design/color.html">查看色彩文档</a>\n\n:::vue\n@layout:color\n---\n<div style="width:180px;height:240px;display:inline-block;margin:10px;">\n    <ui-card color="{$colorKey}">\n        <span slot="header">{$&colorName}</span>\n        <div>卡片</div>\n    </ui-card>\n</div>\n:::\n\n\n[[[配置]]]\n\n:::vue\n@name:no-padding\n---\n#config\n>conf-desc\n卡片主体部分是否有内边距。\n>conf-accept\n`true`<br>`false`\n>conf-type\nBoolean\n>conf-default\n`false`\n---\n#demo\n>tpl\n<div>\n    <div style="width:180px;height:240px;display:inline-block;margin:10px;vertical-align: top;">\n        <ui-card no-padding>卡片</ui-card>\n    </div>\n\n    <div style="width:180px;height:240px;display:inline-block;margin:10px;vertical-align: top;">\n        <ui-card no-padding>\n            <span slot="header">头部</span>\n            <div>卡片</div>\n            <span slot="footer">尾部</span>\n        </ui-card>\n    </div>\n</div>\n:::\n\n:::vue\n@name:inside-padding\n---\n#config\n>conf-desc\n卡片内部是否有留白。\n>conf-accept\n`true`<br>`false`\n>conf-type\nBoolean\n>conf-default\n`false`\n---\n#demo\n>tpl\n<div style="width:240px;height:360px;">\n    <ui-card color="neutral-1" inside-padding>\n        <div slot="header">\n            <ui-h size="xxs">内容列表</ui-h>\n            <div class="operate" style="margin:10px 0">\n                <ui-btn size="xs" color="success">新增</ui-btn>\n                <ui-btn size="xs" color="minor">高级设置</ui-btn>\n                <ui-link size="xs" color="minor">查看帮助</ui-link>\n            </div>\n        </div>\n        <div>卡片</div>\n        <div slot="footer">\n            <ui-label size="xs">标签1</ui-label>\n            <ui-label size="xs" color="neutral-3">标签2</ui-label>\n            <ui-label size="xs" color="neutral-3">标签3</ui-label>\n        </div>\n    </ui-card>\n</div>\n:::\n\n[[[方法]]]\n\n<h1>暂无</h1>\n\n[[[事件]]]\n\n:::vue\n@layout:lifecycle-event\n---\ncard\n卡片\n:::\n\n[[[源码]]]\n\n<iframe src="/report/coverage/lib/components/card/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>\n')])])},o=[];t._withStripped=!0,i.d(e,"a",(function(){return t})),i.d(e,"b",(function(){return o}))},860:function(n,e,i){"use strict";var t=r(i(1)),o=r(i(861));function r(n){return n&&n.__esModule?n:{default:n}}new t.default({el:"#root",render:function(n){return n(o.default)}})},861:function(n,e,i){"use strict";i.r(e);var t=i(408),o=i(256);for(var r in o)"default"!==r&&function(n){i.d(e,n,(function(){return o[n]}))}(r);var a=i(0),d=Object(a.a)(o.default,t.a,t.b,!1,null,null,null);d.options.__file="src/docs/pages/component/card/index.vue",e.default=d.exports}});