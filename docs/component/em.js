!function(e){function n(n){for(var r,a,c=n[0],i=n[1],f=n[2],d=0,s=[];d<c.length;d++)a=c[d],o[a]&&s.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(l&&l(n);s.length;)s.shift()();return u.push.apply(u,f||[]),t()}function t(){for(var e,n=0;n<u.length;n++){for(var t=u[n],r=!0,c=1;c<t.length;c++){var i=t[c];0!==o[i]&&(r=!1)}r&&(u.splice(n--,1),e=a(a.s=t[0]))}return e}var r={},o={33:0},u=[];function a(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.m=e,a.c=r,a.d=function(e,n,t){a.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,n){if(1&n&&(e=a(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)a.d(t,r,function(n){return e[n]}.bind(null,r));return t},a.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(n,"a",n),n},a.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},a.p="/";var c=window.webpackJsonp=window.webpackJsonp||[],i=c.push.bind(c);c.push=n,c=c.slice();for(var f=0;f<c.length;f++)n(c[f]);var l=i;u.push([805,0]),t()}({1:function(e,n){e.exports=Vue},202:function(e,n,t){"use strict";t.r(n);var r=t(203),o=t.n(r);for(var u in r)"default"!==u&&function(e){t.d(n,e,function(){return r[e]})}(u);n.default=o.a},203:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r,o=t(2),u=(r=o)&&r.__esModule?r:{default:r};n.default={data:function(){return{page:"em"}},components:{"doc-component":u.default}},e.exports=n.default},322:function(e,n,t){"use strict";var r=function(){var e=this.$createElement,n=this._self._c||e;return n("doc-component",{attrs:{page:this.page,hasPadding:!0}},[n("script",{attrs:{type:"text/markdown"}},[this._v('\n# 斜体文本 `<ui-em>`\n\n<doc-component-status page="em"></doc-component-status>\n\n<doc-component-not-recommended date="2019年4月6日" plan="使用<em>标签替代"></doc-component-not-recommended>\n\n[[[开始]]]\n\n标记一段斜体内容，这是一个内联元素。\n\n:::vue\n@name:使用\n---\n#demo\n>tpl\n<ui-em>斜体文本</ui-em>\n:::\n\n[[[形态]]]\n\n#### 支持\n\n|类型|支持|默认|\n|-|-|-|\n|尺寸|不支持|-|\n|色彩|不支持|-|\n|状态|不支持|-|\n\n<a href="/guide/status.html">查看形态文档</a> / <a href="/design/color.html">查看色彩文档</a>\n\n\n[[[源码]]]\n\n<iframe src="/report/coverage/lib/components/em/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>\n')])])},o=[];r._withStripped=!0,t.d(n,"a",function(){return r}),t.d(n,"b",function(){return o})},805:function(e,n,t){"use strict";var r=u(t(1)),o=u(t(806));function u(e){return e&&e.__esModule?e:{default:e}}new r.default({el:"#root",render:function(e){return e(o.default)}})},806:function(e,n,t){"use strict";t.r(n);var r=t(322),o=t(202);for(var u in o)"default"!==u&&function(e){t.d(n,e,function(){return o[e]})}(u);var a=t(0),c=Object(a.a)(o.default,r.a,r.b,!1,null,null,null);c.options.__file="src/docs/pages/component/em/index.vue",n.default=c.exports}});