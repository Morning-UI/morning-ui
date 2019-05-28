!function(n){function e(e){for(var r,i,a=e[0],c=e[1],f=e[2],p=0,d=[];p<a.length;p++)i=a[p],u[i]&&d.push(u[i][0]),u[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(n[r]=c[r]);for(l&&l(e);d.length;)d.shift()();return o.push.apply(o,f||[]),t()}function t(){for(var n,e=0;e<o.length;e++){for(var t=o[e],r=!0,a=1;a<t.length;a++){var c=t[a];0!==u[c]&&(r=!1)}r&&(o.splice(e--,1),n=i(i.s=t[0]))}return n}var r={},u={92:0},o=[];function i(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=n,i.c=r,i.d=function(n,e,t){i.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},i.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},i.t=function(n,e){if(1&e&&(n=i(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)i.d(t,r,function(e){return n[e]}.bind(null,r));return t},i.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return i.d(e,"a",e),e},i.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},i.p="/";var a=window.webpackJsonp=window.webpackJsonp||[],c=a.push.bind(a);a.push=e,a=a.slice();for(var f=0;f<a.length;f++)e(a[f]);var l=c;o.push([700,0]),t()}({1:function(n,e){n.exports=Vue},322:function(n,e,t){"use strict";var r=function(){var n=this.$createElement,e=this._self._c||n;return e("doc-design",{attrs:{page:this.page,hasPadding:!0}},[e("script",{attrs:{type:"text/markdown"}},[this._v('\n\n# 对齐\n\n## 文案类内容对齐\n\n##### 普通对齐样式/有序列表\n\n1. 均采用左对齐方式\n2. 通过采用增加段落间距的方式区分段落，而不是首行缩进\n\n<div class="example">\n    <p>示例：</p>\n    <img src="http://h0.hucdn.com/open201921/1bbf70d4f2a89a23_607x151.jpg" />\n</div>\n\n##### 分层列表\n\n1. 均采用分层级左对齐方式\n2. 分层列表包含有序、无序两种状态\n\n<div class="example">\n    <p>示例：</p>\n    <img src="http://h0.hucdn.com/open201921/cd45be8afe5e39c4_606x397.jpg" />\n</div>\n\n## 表单类内容对齐\n\n冒号对齐（右对齐）能让内容锁定在一定范围内，让用户眼球顺着冒号的视觉流，就能找到所有填写项，从而提高填写效率。\n\n<div class="example">\n    <p>示例：</p>\n    <img src="http://h0.hucdn.com/open201921/f9419f7d5571aba6_317x183.jpg" />\n</div>\n\n## 数字类内容对齐\n\n数字末尾对齐。\n\n<div class="example">\n    <p>示例：</p>\n    <img src="http://h0.hucdn.com/open201921/6f59f035b01815ad_174x116.jpg" />\n</div>\n\n\n')])])},u=[];r._withStripped=!0,t.d(e,"a",function(){return r}),t.d(e,"b",function(){return u})},700:function(n,e,t){"use strict";var r=o(t(1)),u=o(t(701));function o(n){return n&&n.__esModule?n:{default:n}}new r.default({el:"#root",render:function(n){return n(u.default)}})},701:function(n,e,t){"use strict";t.r(e);var r=t(322),u=t(89);for(var o in u)"default"!==o&&function(n){t.d(e,n,function(){return u[n]})}(o);var i=t(0),a=Object(i.a)(u.default,r.a,r.b,!1,null,null,null);a.options.__file="src/docs/pages/design/align/index.vue",e.default=a.exports},89:function(n,e,t){"use strict";t.r(e);var r=t(90),u=t.n(r);for(var o in r)"default"!==o&&function(n){t.d(e,n,function(){return r[n]})}(o);e.default=u.a},90:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,u=t(4),o=(r=u)&&r.__esModule?r:{default:r};e.default={data:function(){return{page:"align"}},components:{"doc-design":o.default}},n.exports=e.default}});