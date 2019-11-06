!function(n){function e(e){for(var r,c,i=e[0],a=e[1],l=e[2],f=0,s=[];f<i.length;f++)c=i[f],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&s.push(o[c][0]),o[c]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(n[r]=a[r]);for(d&&d(e);s.length;)s.shift()();return u.push.apply(u,l||[]),t()}function t(){for(var n,e=0;e<u.length;e++){for(var t=u[e],r=!0,i=1;i<t.length;i++){var a=t[i];0!==o[a]&&(r=!1)}r&&(u.splice(e--,1),n=c(c.s=t[0]))}return n}var r={},o={19:0},u=[];function c(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.m=n,c.c=r,c.d=function(n,e,t){c.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},c.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},c.t=function(n,e){if(1&e&&(n=c(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)c.d(t,r,function(e){return n[e]}.bind(null,r));return t},c.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return c.d(e,"a",e),e},c.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},c.p="/";var i=window.webpackJsonp=window.webpackJsonp||[],a=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var d=a;u.push([854,0]),t()}({1:function(n,e){n.exports=Vue},250:function(n,e,t){"use strict";t.r(e);var r=t(251),o=t.n(r);for(var u in r)"default"!==u&&function(n){t.d(e,n,(function(){return r[n]}))}(u);e.default=o.a},251:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,o=t(2),u=(r=o)&&r.__esModule?r:{default:r};e.default={data:function(){return{page:"center"}},components:{"doc-component":u.default}},n.exports=e.default},405:function(n,e,t){"use strict";var r=function(){var n=this.$createElement,e=this._self._c||n;return e("doc-component",{attrs:{page:this.page,hasPadding:!0}},[e("script",{attrs:{type:"text/markdown"}},[this._v('\n# 居中容器 `<ui-center>`\n\n<doc-component-status page="center"></doc-component-status>\n\n[[[开始]]]\n\n定义居中的容器，容器的内容将被居中显示，这是一个块级元素。\n\n:::vue\n@name:使用\n---\n#demo\n>tpl\n<div style="width:400px; height:300px;background-color:#EDF1F5">\n    <ui-center>\n        <div style="background-color:#A8B3C2;">居中div</div>\n        居中文字\n    </ui-center>\n</div>\n:::\n\n:::vue\n@name:填满容器的居中\n---\n#demo\n>desc\n填满的居中容器高度为100%。\n>tpl\n<div style="width:400px; height:300px;background-color:#EDF1F5">\n    <ui-center height-fill>\n        <div style="background-color:#A8B3C2;">充满父容器</div>\n        居中文字\n    </ui-center>\n</div>\n:::\n\n[[[形态]]]\n\n#### 支持\n\n|类型|支持|默认|\n|-|-|-|\n|尺寸|不支持|-|\n|色彩|不支持|-|\n|状态|不支持|-|\n\n<a href="/guide/status.html">查看形态文档</a> / <a href="/design/color.html">查看色彩文档</a>\n\n[[[配置]]]\n\n:::vue\n@name:height-fill\n---\n#config\n>conf-desc\n居中容器的高度与父容器高度保持一致。\n>conf-accept\n`true`<br>`false`\n>conf-type\nBoolean\n>conf-default\n`false`\n---\n#demo\n>tpl\n<div style="width:400px; height:300px;background-color:#EDF1F5">\n    <ui-center height-fill>\n        <div style="background-color:#A8B3C2;">充满父容器</div>\n        居中文字\n    </ui-center>\n</div>\n:::\n\n[[[方法]]]\n\n<h1>暂无</h1>\n\n[[[事件]]]\n\n:::vue\n@layout:lifecycle-event\n---\ncenter\n居中容器\n:::\n\n[[[源码]]]\n\n<iframe src="/report/coverage/lib/components/center/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>\n\n')])])},o=[];r._withStripped=!0,t.d(e,"a",(function(){return r})),t.d(e,"b",(function(){return o}))},854:function(n,e,t){"use strict";var r=u(t(1)),o=u(t(855));function u(n){return n&&n.__esModule?n:{default:n}}new r.default({el:"#root",render:function(n){return n(o.default)}})},855:function(n,e,t){"use strict";t.r(e);var r=t(405),o=t(250);for(var u in o)"default"!==u&&function(n){t.d(e,n,(function(){return o[n]}))}(u);var c=t(0),i=Object(c.a)(o.default,r.a,r.b,!1,null,null,null);i.options.__file="src/docs/pages/component/center/index.vue",e.default=i.exports}});