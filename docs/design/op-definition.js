!function(n){function e(e){for(var r,i,a=e[0],f=e[1],c=e[2],s=0,p=[];s<a.length;s++)i=a[s],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(r in f)Object.prototype.hasOwnProperty.call(f,r)&&(n[r]=f[r]);for(l&&l(e);p.length;)p.shift()();return u.push.apply(u,c||[]),t()}function t(){for(var n,e=0;e<u.length;e++){for(var t=u[e],r=!0,a=1;a<t.length;a++){var f=t[a];0!==o[f]&&(r=!1)}r&&(u.splice(e--,1),n=i(i.s=t[0]))}return n}var r={},o={98:0},u=[];function i(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=n,i.c=r,i.d=function(n,e,t){i.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},i.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},i.t=function(n,e){if(1&e&&(n=i(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)i.d(t,r,function(e){return n[e]}.bind(null,r));return t},i.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return i.d(e,"a",e),e},i.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},i.p="/";var a=window.webpackJsonp=window.webpackJsonp||[],f=a.push.bind(a);a.push=e,a=a.slice();for(var c=0;c<a.length;c++)e(a[c]);var l=f;u.push([696,0]),t()}({1:function(n,e){n.exports=Vue},322:function(n,e,t){"use strict";var r=function(){var n=this.$createElement,e=this._self._c||n;return e("doc-design",{attrs:{page:this.page,hasPadding:!0}},[e("script",{attrs:{type:"text/markdown"}},[this._v("\n\n# 操作定义\n\n## 鼠标操作\n\n鼠标在不同操作时，应呈现对应的状态：\n\n1. 默认状态：`箭头`\n2. 经过可点击元素：`手指`\n3. 可输入的元素：`光标`\n4. 无法点击/不可操作状态下：`禁用`\n5. 可拖拽的形状：`十字拖动/左右/上下箭头`\n\n## 键盘操作\n\n键盘操作快捷，方便：\n\n1. 支持回车键提交表单\n2. 支持回车键查询数据\n3. 支持`Tab`键及`上、下、左、右`箭头移动光标焦点，遵循从左到右、从上到下的原则\n\n## 页面返回\n\n应该允许用户不依赖浏览器返回，提供更快捷的返回入口：\n\n当从一个页面点击按钮或链接进入子页面时，子页面必须提供返回按钮。\n\n## 当前窗口/新窗口\n\n定义本窗口打开或新窗口打开：\n\n1. 本窗口打开：查询结果、上下翻页、新增条目、编辑条目等操作在本窗口打开\n2. 新窗口打开：各类详情、提示说明页、预览页面等采用新窗口打开\n\n如有特殊，可视情况而定。\n\n## 页面兼容\n\n1. 页面宽度`1440px`\n2. 弹窗要保证`900px`的高度下显示正常，同时能滑动查看弹出框内容。浏览器头部地址栏、工具栏总高预计`120px`，上下各预留`30px`的空间，因此弹出框高度不超过`720px`，并显示在页面内相对水平、垂直居中的位置。\n\n")])])},o=[];r._withStripped=!0,t.d(e,"a",(function(){return r})),t.d(e,"b",(function(){return o}))},696:function(n,e,t){"use strict";var r=u(t(1)),o=u(t(697));function u(n){return n&&n.__esModule?n:{default:n}}new r.default({el:"#root",render:function(n){return n(o.default)}})},697:function(n,e,t){"use strict";t.r(e);var r=t(322),o=t(81);for(var u in o)"default"!==u&&function(n){t.d(e,n,(function(){return o[n]}))}(u);var i=t(0),a=Object(i.a)(o.default,r.a,r.b,!1,null,null,null);a.options.__file="src/docs/pages/design/op-definition/index.vue",e.default=a.exports},81:function(n,e,t){"use strict";t.r(e);var r=t(82),o=t.n(r);for(var u in r)"default"!==u&&function(n){t.d(e,n,(function(){return r[n]}))}(u);e.default=o.a},82:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,o=t(4),u=(r=o)&&r.__esModule?r:{default:r};e.default={data:function(){return{page:"op-definition"}},components:{"doc-design":u.default}},n.exports=e.default}});