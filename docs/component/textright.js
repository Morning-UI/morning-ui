!function(t){function e(e){for(var r,a,i=e[0],c=e[1],l=e[2],d=0,s=[];d<i.length;d++)a=i[d],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&s.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);for(f&&f(e);s.length;)s.shift()();return u.push.apply(u,l||[]),n()}function n(){for(var t,e=0;e<u.length;e++){for(var n=u[e],r=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(r=!1)}r&&(u.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},o={81:0},u=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var i=window.webpackJsonp=window.webpackJsonp||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var f=c;u.push([733,0]),n()}({1:function(t,e){t.exports=Vue},117:function(t,e,n){"use strict";n.r(e);var r=n(118),o=n.n(r);for(var u in r)"default"!==u&&function(t){n.d(e,t,(function(){return r[t]}))}(u);e.default=o.a},118:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,o=n(2),u=(r=o)&&r.__esModule?r:{default:r};e.default={data:function(){return{page:"textright"}},components:{"doc-component":u.default}},t.exports=e.default},340:function(t,e,n){"use strict";var r=function(){var t=this.$createElement,e=this._self._c||t;return e("doc-component",{attrs:{page:this.page,hasPadding:!0}},[e("script",{attrs:{type:"text/markdown"}},[this._v('\n# 右对齐文本 `<ui-textright>`\n\n<doc-component-status page="textright"></doc-component-status>\n\n<doc-component-not-recommended date="2019年3月7日" plan="使用CSS样式text-align来替代"></doc-component-not-recommended>\n\n[[[开始]]]\n\n内容右对齐组件，这是一个块级元素。\n\n:::vue\n@name:使用\n---\n#demo\n>tpl\n<ui-textright>右对齐文本</ui-textright>\n:::\n\n[[[形态]]]\n\n#### 支持\n\n|类型|支持|默认|\n|-|-|-|\n|尺寸|不支持|-|\n|色彩|不支持|-|\n|状态|不支持|-|\n\n<a href="/guide/status.html">查看形态文档</a> / <a href="/design/color.html">查看色彩文档</a>\n\n\n[[[源码]]]\n\n<iframe src="/report/coverage/lib/components/textright/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>\n')])])},o=[];r._withStripped=!0,n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o}))},733:function(t,e,n){"use strict";var r=u(n(1)),o=u(n(734));function u(t){return t&&t.__esModule?t:{default:t}}new r.default({el:"#root",render:function(t){return t(o.default)}})},734:function(t,e,n){"use strict";n.r(e);var r=n(340),o=n(117);for(var u in o)"default"!==u&&function(t){n.d(e,t,(function(){return o[t]}))}(u);var a=n(0),i=Object(a.a)(o.default,r.a,r.b,!1,null,null,null);i.options.__file="src/docs/pages/component/textright/index.vue",e.default=i.exports}});