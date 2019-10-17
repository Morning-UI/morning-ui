!function(n){function e(e){for(var r,a,i=e[0],c=e[1],f=e[2],p=0,d=[];p<i.length;p++)a=i[p],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(n[r]=c[r]);for(l&&l(e);d.length;)d.shift()();return u.push.apply(u,f||[]),t()}function t(){for(var n,e=0;e<u.length;e++){for(var t=u[e],r=!0,i=1;i<t.length;i++){var c=t[i];0!==o[c]&&(r=!1)}r&&(u.splice(e--,1),n=a(a.s=t[0]))}return n}var r={},o={86:0},u=[];function a(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.m=n,a.c=r,a.d=function(n,e,t){a.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},a.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},a.t=function(n,e){if(1&e&&(n=a(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)a.d(t,r,function(e){return n[e]}.bind(null,r));return t},a.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return a.d(e,"a",e),e},a.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},a.p="/";var i=window.webpackJsonp=window.webpackJsonp||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var f=0;f<i.length;f++)e(i[f]);var l=c;u.push([712,0]),t()}({1:function(n,e){n.exports=Vue},110:function(n,e,t){"use strict";t.r(e);var r=t(111),o=t.n(r);for(var u in r)"default"!==u&&function(n){t.d(e,n,(function(){return r[n]}))}(u);e.default=o.a},111:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,o=t(4),u=(r=o)&&r.__esModule?r:{default:r};e.default={data:function(){return{page:"align"}},components:{"doc-design":u.default}},n.exports=e.default},378:function(n,e,t){"use strict";var r=function(){var n=this.$createElement,e=this._self._c||n;return e("doc-design",{attrs:{page:this.page,hasPadding:!0}},[e("script",{attrs:{type:"text/markdown"}},[this._v('\n\n# 对齐\n\n## 文案类内容对齐\n\n##### 普通对齐样式/有序列表\n\n1. 均采用左对齐方式\n2. 通过采用增加段落间距的方式区分段落，而不是首行缩进\n\n<div class="example">\n    <p>示例：</p>\n    <img src="http://h0.hucdn.com/open201921/1bbf70d4f2a89a23_607x151.jpg" />\n</div>\n\n##### 分层列表\n\n1. 均采用分层级左对齐方式\n2. 分层列表包含有序、无序两种状态\n\n<div class="example">\n    <p>示例：</p>\n    <img src="http://h0.hucdn.com/open201921/cd45be8afe5e39c4_606x397.jpg" />\n</div>\n\n## 表单类内容对齐\n\n冒号对齐（右对齐）能让内容锁定在一定范围内，让用户眼球顺着冒号的视觉流，就能找到所有填写项，从而提高填写效率。\n\n<div class="example">\n    <p>示例：</p>\n    <img src="http://h0.hucdn.com/open201921/f9419f7d5571aba6_317x183.jpg" />\n</div>\n\n## 数字类内容对齐\n\n数字末尾对齐。\n\n<div class="example">\n    <p>示例：</p>\n    <img src="http://h0.hucdn.com/open201921/6f59f035b01815ad_174x116.jpg" />\n</div>\n\n\n')])])},o=[];r._withStripped=!0,t.d(e,"a",(function(){return r})),t.d(e,"b",(function(){return o}))},712:function(n,e,t){"use strict";var r=u(t(1)),o=u(t(713));function u(n){return n&&n.__esModule?n:{default:n}}new r.default({el:"#root",render:function(n){return n(o.default)}})},713:function(n,e,t){"use strict";t.r(e);var r=t(378),o=t(110);for(var u in o)"default"!==u&&function(n){t.d(e,n,(function(){return o[n]}))}(u);var a=t(0),i=Object(a.a)(o.default,r.a,r.b,!1,null,null,null);i.options.__file="src/docs/pages/design/align/index.vue",e.default=i.exports}});