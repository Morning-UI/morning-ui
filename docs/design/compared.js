!function(n){function e(e){for(var r,i,a=e[0],c=e[1],f=e[2],d=0,p=[];d<a.length;d++)i=a[d],o[i]&&p.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(n[r]=c[r]);for(l&&l(e);p.length;)p.shift()();return u.push.apply(u,f||[]),t()}function t(){for(var n,e=0;e<u.length;e++){for(var t=u[e],r=!0,a=1;a<t.length;a++){var c=t[a];0!==o[c]&&(r=!1)}r&&(u.splice(e--,1),n=i(i.s=t[0]))}return n}var r={},o={94:0},u=[];function i(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=n,i.c=r,i.d=function(n,e,t){i.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},i.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},i.t=function(n,e){if(1&e&&(n=i(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)i.d(t,r,function(e){return n[e]}.bind(null,r));return t},i.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return i.d(e,"a",e),e},i.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},i.p="/";var a=window.webpackJsonp=window.webpackJsonp||[],c=a.push.bind(a);a.push=e,a=a.slice();for(var f=0;f<a.length;f++)e(a[f]);var l=c;u.push([695,0]),t()}({1:function(n,e){n.exports=Vue},320:function(n,e,t){"use strict";var r=function(){var n=this.$createElement,e=this._self._c||n;return e("doc-design",{attrs:{page:this.page,hasPadding:!0}},[e("script",{attrs:{type:"text/markdown"}},[this._v('\n\n# 对比\n\n对比是增加信息展示优先级最有效方法之一，让用户快速识别关键信息。\n\n## 主次关系对比\n\n为了让用户能在操作上（类似表单、弹出框等场景）快速做出判断， 来突出其中一项相对更重要或者更高频的操作or弱化其中一项相对不重要或更低频的操作。\n\n注：在使用对比时，尽量保证被突出的元素只有1个\n\n<div class="example">\n    <p>示例：</p>\n    <img src="http://h0.hucdn.com/open201921/874a3469c72498a1_396x74.jpg" />\n</div>\n\n在一些需要用户慎重决策的场景中，系统应该保持中立，不能替用户或者诱导用户做出判断。\n\n<div class="example">\n    <p>示例：</p>\n    <img src="http://h0.hucdn.com/open201921/c18cf657bd640782_1152x295.jpg" />\n</div>\n\n## 状态关系对比\n\n通过改变颜色的方法来实现状态关系的对比，以便用户更好的区分信息。\n\n<div class="example">\n    <p>示例：</p>\n    <img src="http://h0.hucdn.com/open201921/db345a5b5066b832_1152x509.jpg" />\n</div>\n\n')])])},o=[];r._withStripped=!0,t.d(e,"a",function(){return r}),t.d(e,"b",function(){return o})},695:function(n,e,t){"use strict";var r=u(t(1)),o=u(t(696));function u(n){return n&&n.__esModule?n:{default:n}}new r.default({el:"#root",render:function(n){return n(o.default)}})},696:function(n,e,t){"use strict";t.r(e);var r=t(320),o=t(85);for(var u in o)"default"!==u&&function(n){t.d(e,n,function(){return o[n]})}(u);var i=t(0),a=Object(i.a)(o.default,r.a,r.b,!1,null,null,null);a.options.__file="src/docs/pages/design/compared/index.vue",e.default=a.exports},85:function(n,e,t){"use strict";t.r(e);var r=t(86),o=t.n(r);for(var u in r)"default"!==u&&function(n){t.d(e,n,function(){return r[n]})}(u);e.default=o.a},86:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,o=t(4),u=(r=o)&&r.__esModule?r:{default:r};e.default={data:function(){return{page:"compared"}},components:{"doc-design":u.default}},n.exports=e.default}});