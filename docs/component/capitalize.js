!function(e){function n(n){for(var r,u,i=n[0],c=n[1],l=n[2],d=0,s=[];d<i.length;d++)u=i[d],o[u]&&s.push(o[u][0]),o[u]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(f&&f(n);s.length;)s.shift()();return a.push.apply(a,l||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],r=!0,i=1;i<t.length;i++){var c=t[i];0!==o[c]&&(r=!1)}r&&(a.splice(n--,1),e=u(u.s=t[0]))}return e}var r={},o={16:0},a=[];function u(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.m=e,u.c=r,u.d=function(e,n,t){u.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,n){if(1&n&&(e=u(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)u.d(t,r,function(n){return e[n]}.bind(null,r));return t},u.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(n,"a",n),n},u.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},u.p="/";var i=window.webpackJsonp=window.webpackJsonp||[],c=i.push.bind(i);i.push=n,i=i.slice();for(var l=0;l<i.length;l++)n(i[l]);var f=c;a.push([855,0]),t()}({1:function(e,n){e.exports=Vue},243:function(e,n,t){"use strict";t.r(n);var r=t(244),o=t.n(r);for(var a in r)"default"!==a&&function(e){t.d(n,e,function(){return r[e]})}(a);n.default=o.a},244:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r,o=t(2),a=(r=o)&&r.__esModule?r:{default:r};n.default={data:function(){return{page:"capitalize"}},components:{"doc-component":a.default}},e.exports=n.default},399:function(e,n,t){"use strict";var r=function(){var e=this.$createElement,n=this._self._c||e;return n("doc-component",{attrs:{page:this.page,hasPadding:!0}},[n("script",{attrs:{type:"text/markdown"}},[this._v('\n# 首字大写文本 `<ui-capitalize>`\n\n<doc-component-status page="capitalize"></doc-component-status>\n\n<doc-component-not-recommended date="2019年3月11日" plan="使用CSS样式text-transform来替代"></doc-component-not-recommended>\n\n[[[开始]]]\n\n首字大写文本组件，这是一个内联元素。\n\n:::vue\n@name:使用\n---\n#demo\n>tpl\n<ui-capitalize>首字母大写的文本: tHere is A LEtter</ui-capitalize>\n:::\n\n[[[形态]]]\n\n#### 支持\n\n|类型|支持|默认|\n|-|-|-|\n|尺寸|不支持|-|\n|色彩|不支持|-|\n|状态|不支持|-|\n\n<a href="/guide/status.html">查看形态文档</a> / <a href="/design/color.html">查看色彩文档</a>\n\n\n[[[源码]]]\n\n<iframe src="/report/coverage/lib/components/capitalize/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>\n')])])},o=[];r._withStripped=!0,t.d(n,"a",function(){return r}),t.d(n,"b",function(){return o})},855:function(e,n,t){"use strict";var r=a(t(1)),o=a(t(856));function a(e){return e&&e.__esModule?e:{default:e}}new r.default({el:"#root",render:function(e){return e(o.default)}})},856:function(e,n,t){"use strict";t.r(n);var r=t(399),o=t(243);for(var a in o)"default"!==a&&function(e){t.d(n,e,function(){return o[e]})}(a);var u=t(0),i=Object(u.a)(o.default,r.a,r.b,!1,null,null,null);i.options.__file="src/docs/pages/component/capitalize/index.vue",n.default=i.exports}});