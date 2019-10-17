!function(n){function e(e){for(var o,u,a=e[0],l=e[1],c=e[2],f=0,s=[];f<a.length;f++)u=a[f],Object.prototype.hasOwnProperty.call(r,u)&&r[u]&&s.push(r[u][0]),r[u]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(n[o]=l[o]);for(d&&d(e);s.length;)s.shift()();return i.push.apply(i,c||[]),t()}function t(){for(var n,e=0;e<i.length;e++){for(var t=i[e],o=!0,a=1;a<t.length;a++){var l=t[a];0!==r[l]&&(o=!1)}o&&(i.splice(e--,1),n=u(u.s=t[0]))}return n}var o={},r={11:0},i=[];function u(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.m=n,u.c=o,u.d=function(n,e,t){u.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},u.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},u.t=function(n,e){if(1&e&&(n=u(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)u.d(t,o,function(e){return n[e]}.bind(null,o));return t},u.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return u.d(e,"a",e),e},u.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},u.p="/";var a=window.webpackJsonp=window.webpackJsonp||[],l=a.push.bind(a);a.push=e,a=a.slice();for(var c=0;c<a.length;c++)e(a[c]);var d=l;i.push([865,0]),t()}({1:function(n,e){n.exports=Vue},264:function(n,e,t){"use strict";t.r(e);var o=t(265),r=t.n(o);for(var i in o)"default"!==i&&function(n){t.d(e,n,(function(){return o[n]}))}(i);e.default=r.a},265:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o,r=t(2),i=(o=r)&&o.__esModule?o:{default:o};e.default={data:function(){return{page:"box"}},components:{"doc-component":i.default}},n.exports=e.default},304:function(n,e,t){"use strict";var o=function(){var n=this.$createElement,e=this._self._c||n;return e("doc-component",{attrs:{page:this.page,hasPadding:!0}},[e("script",{attrs:{type:"text/markdown"}},[this._v('\n# 容器 `<ui-box>`\n\n<doc-component-status page="box"></doc-component-status>\n\n[[[开始]]]\n\n定义一个容器，`ui-box`常用来作为最外部的容器，容器是块级元素。\n\n容器默认高度是自适应的。\n\n:::vue\n@name:使用\n---\n#demo\n>tpl\n<div style="width:400px;height:200px;">\n    <ui-box style="background-color:#e0e0e0">\n        容器\n    </ui-box>\n</div>\n:::\n\n:::vue\n@name:有边距的容器\n---\n#demo\n>tpl\n<div style="width:400px;height:200px;">\n    <ui-box margin style="background-color:#e0e0e0">\n        有边距的容器\n    </ui-box>\n</div>\n:::\n\n:::vue\n@name:填满的容器\n---\n#demo\n>desc\n填满的容器高度为100%。\n>tpl\n<div>\n    <div style="width:400px;height:200px;">\n        <ui-box height-fill style="background-color:#e0e0e0">\n            填满的容器\n        </ui-box>\n    </div>\n    \n    <br>\n\n    <div style="width:400px;height:200px;">\n        <ui-box margin height-fill style="background-color:#e0e0e0">\n            有边距填满的容器\n        </ui-box>\n    </div>\n</div>\n:::\n\n[[[形态]]]\n\n#### 支持\n\n|类型|支持|默认|\n|-|-|-|\n|尺寸|不支持|-|\n|色彩|不支持|-|\n|状态|不支持|-|\n\n<a href="/guide/status.html">查看形态文档</a> / <a href="/design/color.html">查看色彩文档</a>\n\n\n[[[配置]]]\n\n:::vue\n@name:margin\n---\n#config\n>conf-desc\n容器是否有边距。\n>conf-accept\n`true`<br>`false`\n>conf-type\nBoolean\n>conf-default\n`false`\n---\n#demo\n>tpl\n<div style="width:400px;height:200px;">\n    <ui-box margin style="background-color:#e0e0e0">\n        有边距的容器\n    </ui-box>\n</div>\n:::\n\n:::vue\n@name:height-fill\n---\n#config\n>conf-desc\n容器的高度与父容器高度保持一致。\n>conf-accept\n`true`<br>`false`\n>conf-type\nBoolean\n>conf-default\n`false`\n---\n#demo\n>tpl\n<div style="width:400px;height:200px;">\n    <ui-box height-fill style="background-color:#e0e0e0">\n        填满的容器\n    </ui-box>\n</div>\n:::\n\n[[[方法]]]\n\n<h1>暂无</h1>\n\n[[[事件]]]\n\n:::vue\n@layout:lifecycle-event\n---\nbox\n容器\n:::\n\n[[[源码]]]\n\n<iframe src="/report/coverage/lib/components/box/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>\n')])])},r=[];o._withStripped=!0,t.d(e,"a",(function(){return o})),t.d(e,"b",(function(){return r}))},865:function(n,e,t){"use strict";var o=i(t(1)),r=i(t(866));function i(n){return n&&n.__esModule?n:{default:n}}new o.default({el:"#root",render:function(n){return n(r.default)}})},866:function(n,e,t){"use strict";t.r(e);var o=t(304),r=t(264);for(var i in r)"default"!==i&&function(n){t.d(e,n,(function(){return r[n]}))}(i);var u=t(0),a=Object(u.a)(r.default,o.a,o.b,!1,null,null,null);a.options.__file="src/docs/pages/component/box/index.vue",e.default=a.exports}});