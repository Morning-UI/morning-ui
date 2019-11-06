!function(e){function n(n){for(var o,c,i=n[0],l=n[1],d=n[2],f=0,s=[];f<i.length;f++)c=i[f],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&s.push(r[c][0]),r[c]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);for(a&&a(n);s.length;)s.shift()();return u.push.apply(u,d||[]),t()}function t(){for(var e,n=0;n<u.length;n++){for(var t=u[n],o=!0,i=1;i<t.length;i++){var l=t[i];0!==r[l]&&(o=!1)}o&&(u.splice(n--,1),e=c(c.s=t[0]))}return e}var o={},r={84:0},u=[];function c(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.m=e,c.c=o,c.d=function(e,n,t){c.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,n){if(1&n&&(e=c(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)c.d(t,o,function(n){return e[n]}.bind(null,o));return t},c.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(n,"a",n),n},c.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},c.p="/";var i=window.webpackJsonp=window.webpackJsonp||[],l=i.push.bind(i);i.push=n,i=i.slice();for(var d=0;d<i.length;d++)n(i[d]);var a=l;u.push([721,0]),t()}({1:function(e,n){e.exports=Vue},118:function(e,n,t){"use strict";t.r(n);var o=t(119),r=t.n(o);for(var u in o)"default"!==u&&function(e){t.d(n,e,(function(){return o[e]}))}(u);n.default=r.a},119:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o,r=t(2),u=(o=r)&&o.__esModule?o:{default:o};n.default={data:function(){return{page:"uniformcolor"}},components:{"doc-component":u.default}},e.exports=n.default},340:function(e,n,t){"use strict";var o=function(){var e=this.$createElement,n=this._self._c||e;return n("doc-component",{attrs:{page:this.page,hasPadding:!0}},[n("script",{attrs:{type:"text/markdown"}},[this._v('\n# 配色\n\n在某些场景下组件之外的元素需要和Morning UI保持一致的配色，为此Morning UI提供了CSS类供组件外的元素添加形态中的颜色。\n\n配色支持[设计/色彩](/design/color.html)中的所有色彩。\n\n组件中使用色彩请查看[形态/色彩](/guide/status.html#色彩)。\n\n## 文字配色\n\n如果你需要对元素内的文字，通过`mo-co-font-*`这样的CSS类来进行配色，比如：`mo-co-font-theme`：\n\n:::democode/html\n<p class="mo-co-font-theme">这里是非组件元素</p>\n:::\n\n## 边框配色\n\n如果你需要对元素的边框配色，通过`mo-co-border-*`这样的CSS类来进行配色，比如：`mo-co-border-theme`：\n\n:::democode/html\n<div style="width:200px;height:50px;border-width:3px;border-style: solid;" class="mo-co-border-theme">这里是非组件元素</div>\n:::\n\n## 背景配色\n\n如果你需要对元素的边框配色，通过`mo-co-bg-*`这样的CSS类来进行配色，比如：`mo-co-bg-theme`：\n\n:::democode/html\n<div style="width:200px;height:200px;color: #FFF;" class="mo-co-bg-theme">这里是非组件元素</div>\n:::\n\n## 一起使用\n\n所有的配色都可以一起使用：\n\n:::democode/html\n<div style="width:200px;height:50px;border-width:3px;border-style: dashed;" class="mo-co-bg-neutral-1 mo-co-border-neutral-10 mo-co-font-black">这里是非组件元素</div>\n:::\n\n')])])},r=[];o._withStripped=!0,t.d(n,"a",(function(){return o})),t.d(n,"b",(function(){return r}))},721:function(e,n,t){"use strict";var o=u(t(1)),r=u(t(722));function u(e){return e&&e.__esModule?e:{default:e}}new o.default({el:"#root",render:function(e){return e(r.default)}})},722:function(e,n,t){"use strict";t.r(n);var o=t(340),r=t(118);for(var u in r)"default"!==u&&function(e){t.d(n,e,(function(){return r[e]}))}(u);var c=t(0),i=Object(c.a)(r.default,o.a,o.b,!1,null,null,null);i.options.__file="src/docs/pages/component/uniformcolor/index.vue",n.default=i.exports}});