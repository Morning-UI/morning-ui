!function(n){function e(e){for(var i,u,p=e[0],d=e[1],c=e[2],s=0,l=[];s<p.length;s++)u=p[s],o[u]&&l.push(o[u][0]),o[u]=0;for(i in d)Object.prototype.hasOwnProperty.call(d,i)&&(n[i]=d[i]);for(a&&a(e);l.length;)l.shift()();return r.push.apply(r,c||[]),t()}function t(){for(var n,e=0;e<r.length;e++){for(var t=r[e],i=!0,p=1;p<t.length;p++){var d=t[p];0!==o[d]&&(i=!1)}i&&(r.splice(e--,1),n=u(u.s=t[0]))}return n}var i={},o={31:0},r=[];function u(e){if(i[e])return i[e].exports;var t=i[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.m=n,u.c=i,u.d=function(n,e,t){u.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},u.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},u.t=function(n,e){if(1&e&&(n=u(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var i in n)u.d(t,i,function(e){return n[e]}.bind(null,i));return t},u.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return u.d(e,"a",e),e},u.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},u.p="/";var p=window.webpackJsonp=window.webpackJsonp||[],d=p.push.bind(p);p.push=e,p=p.slice();for(var c=0;c<p.length;c++)e(p[c]);var a=d;r.push([753,0]),t()}({1:function(n,e){n.exports=Vue},184:function(n,e,t){"use strict";t.r(e);var i=t(185),o=t.n(i);for(var r in i)"default"!==r&&function(n){t.d(e,n,function(){return i[n]})}(r);e.default=o.a},185:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,o=t(2),r=(i=o)&&i.__esModule?i:{default:i};e.default={data:function(){return{page:"empty"}},components:{"doc-component":r.default}},n.exports=e.default},339:function(n,e,t){"use strict";var i=function(){var n=this.$createElement,e=this._self._c||n;return e("doc-component",{attrs:{page:this.page,hasPadding:!0}},[e("script",{attrs:{type:"text/markdown"}},[this._v('\n# 空状态 `<ui-empty>`\n\n<doc-component-status page="empty"></doc-component-status>\n\n[[[开始]]]\n\n定义一个空状态组件，一般用于没有数据或信息时展示(通过`v-if`或`v-show`)。\n\n:::vue\n@name:使用\n---\n#demo\n>tpl\n<div style="width:360px;height:220px">\n    <ui-empty></ui-empty>\n</div>\n:::\n\n:::vue\n@name:添加附属内容\n---\n#demo\n>desc\n可以通过`slot`来为empty添加额外的内容\n>tpl\n<div style="width:360px;height:220px">\n    <ui-empty>\n        <ui-btn color="success" size="xs">创建内容</ui-btn>\n    </ui-empty>\n</div>\n:::\n\n[[[形态]]]\n\n#### 支持\n\n|类型|支持|默认|\n|-|-|-|\n|尺寸|不支持|-|\n|色彩|不支持|-|\n|状态|不支持|-|\n\n<a href="/guide/status.html">查看形态文档</a>\n\n[[[配置]]]\n\n:::vue\n@name:image\n---\n#config\n>conf-desc\n自定义提示图片或图标。\n<br>\n需要注意的是由于`image`中的内容通过字符串模板的形式渲染，所以若使用了组件，则无法使用上下文的`props`、`data`、`methods`等属性或方法。\n>conf-accept\n提示内容的HTML\n>conf-type\nString\n>conf-default\n`\'<i class="mo-icon mo-icon-drawer-empty"></i>\'`\n---\n#demo\n>desc\n自定义的提示图标。\n>tpl\n<div style="width:360px;height:220px">\n    <ui-empty\n        image=\'<i class="mo-icon mo-icon-block-9"></i>\'\n    ></ui-empty>\n</div>\n---\n#demo\n>desc\n自定义的提示图片。\n>tpl\n<div style="width:360px;height:220px">\n    <ui-empty\n        image=\'<img src="http://h0.hucdn.com/open201908/a4d8596b03d3a641_300x300.png" width="80"></img>\'\n    ></ui-empty>\n</div>\n---\n#demo\n>desc\n在自定义提示图片中使用组件。\n<br>\n需要注意的是由于`image`中的内容通过字符串模板的形式渲染，所以若使用了组件，则无法使用上下文的`props`、`data`、`methods`等属性或方法。\n>tpl\n<div style="width:360px;height:220px">\n    <ui-empty\n        image=\'<ui-img class="circle" src="http://h0.hucdn.com/open201908/a4d8596b03d3a641_300x300.png" width="80"></ui-img>\'\n    ></ui-empty>\n</div>\n---\n#demo\n>desc\n可以输入空的`image`配置来隐藏图片。\n>tpl\n<div style="width:360px;height:220px">\n    <ui-empty\n        image=\'\'\n    ></ui-empty>\n</div>\n:::\n\n:::vue\n@name:note\n---\n#config\n>conf-desc\n自定义提示文案。\n<br>\n需要注意的是由于`note`中的内容通过字符串模板的形式渲染，所以若使用了组件，则无法使用上下文的`props`、`data`、`methods`等属性或方法。\n>conf-accept\n提示内容HTML\n>conf-type\nString\n>conf-default\n`暂无数据`\n---\n#demo\n>tpl\n<div style="width:360px;height:220px">\n    <ui-empty\n        note="无内容"\n    ></ui-empty>\n</div>\n---\n#demo\n>desc\n使用HTML的提示文案。\n>tpl\n<div style="width:360px;height:220px">\n    <ui-empty\n        note="<b>无内容</b>"\n    ></ui-empty>\n</div>\n---\n#demo\n>desc\n在自定义提示文案中使用组件。\n>tpl\n<div style="width:360px;height:220px">\n    <ui-empty\n        note="无内容，你可以：<ui-link>重新加载<ui-link>"\n    ></ui-empty>\n</div>\n---\n#demo\n>desc\n可以输入空的`note`配置来隐藏提示文案。\n>tpl\n<div style="width:360px;height:220px">\n    <ui-empty\n        note=\'\'\n    ></ui-empty>\n</div>\n:::\n\n[[[方法]]]\n\n<h1>暂无</h1>\n\n[[[事件]]]\n\n:::vue\n@layout:lifecycle-event\n---\nempty\n:::\n\n\n[[[源码]]]\n\n<iframe src="/report/coverage/lib/components/empty/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>\n\n')])])},o=[];i._withStripped=!0,t.d(e,"a",function(){return i}),t.d(e,"b",function(){return o})},753:function(n,e,t){"use strict";var i=r(t(1)),o=r(t(754));function r(n){return n&&n.__esModule?n:{default:n}}new i.default({el:"#root",render:function(n){return n(o.default)}})},754:function(n,e,t){"use strict";t.r(e);var i=t(339),o=t(184);for(var r in o)"default"!==r&&function(n){t.d(e,n,function(){return o[n]})}(r);var u=t(0),p=Object(u.a)(o.default,i.a,i.b,!1,null,null,null);p.options.__file="src/docs/pages/component/empty/index.vue",e.default=p.exports}});