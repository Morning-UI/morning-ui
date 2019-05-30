!function(n){function e(e){for(var r,c,i=e[0],p=e[1],a=e[2],f=0,s=[];f<i.length;f++)c=i[f],o[c]&&s.push(o[c][0]),o[c]=0;for(r in p)Object.prototype.hasOwnProperty.call(p,r)&&(n[r]=p[r]);for(d&&d(e);s.length;)s.shift()();return u.push.apply(u,a||[]),t()}function t(){for(var n,e=0;e<u.length;e++){for(var t=u[e],r=!0,i=1;i<t.length;i++){var p=t[i];0!==o[p]&&(r=!1)}r&&(u.splice(e--,1),n=c(c.s=t[0]))}return n}var r={},o={98:0},u=[];function c(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.m=n,c.c=r,c.d=function(n,e,t){c.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},c.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},c.t=function(n,e){if(1&e&&(n=c(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)c.d(t,r,function(e){return n[e]}.bind(null,r));return t},c.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return c.d(e,"a",e),e},c.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},c.p="/";var i=window.webpackJsonp=window.webpackJsonp||[],p=i.push.bind(i);i.push=e,i=i.slice();for(var a=0;a<i.length;a++)e(i[a]);var d=p;u.push([690,0]),t()}({1:function(n,e){n.exports=Vue},355:function(n,e,t){"use strict";var r=function(){var n=this.$createElement,e=this._self._c||n;return e("doc-design",{attrs:{page:this.page,hasPadding:!0}},[e("script",{attrs:{type:"text/markdown"}},[this._v('\n\n# 间距\n\n## 行高与段落\n\n标题行高默认为字号的 1.5 倍，正文行高默认为字号的 1.5 倍，段落间距为字号的 1 倍宽。\n\n<img src="http://h0.hucdn.com/open201921/ad492e6fe6c8b303_1320x148.jpg">\n\n\n## 间距关系\n\n##### 纵向\n\n通过`小号间距`、`中号间距`、`大号间距`三种规格来划分信息层次，如果信息之间关联性越高，他们之间的距离就应该约接近，也越像一个视觉单元；反之，应该越远。\n\n<img src="http://h0.hucdn.com/open201921/f7b075cbbf33d2e9_418x90.jpg">\n\n在这三种规格不适用的情况下，可使用`基础间距 = 4*n`的间距，如 16px 为基础间距。如需要更大倍数的间距，请按照`4*n`规律进行计算。\n\n<div class="example">\n    <p>示例：</p>\n    <img src="http://h0.hucdn.com/open201921/99885980a5210d94_678x136.jpg" />\n</div>\n\n##### 横向\n\n为了适用不同尺寸的屏幕，在横向采用自适应布局来排布组件，从而保证布局的灵活性。\n\n在一个组件内部，元素的横向间距也应该有所不同。\n\n<img src="http://h0.hucdn.com/open201921/6cefa977e844fdd9_568x131.jpg">\n\n在这三种规格不适用的情况下，可使用`基础间距 = 4*n`的间距，如`16px`为基础间距。如需要更大倍数的间距，请按照`4*n`规律进行计算。\n\n<div class="example">\n    <p>示例：</p>\n    <img src="http://h0.hucdn.com/open201921/eec13e519d8d14d7_919x189.jpg" />\n</div>\n\n## 标点\n\n1. 默认使用全角中文标点，特殊情况如时间可使用全角英文标点\n2. 遇到完整的英文整句、特殊名词，其内容使用半角标点\n3. 数字使用半角字符\n4. 使用`*`可表示重要性内容\n5. 短句一律不使用句号\n\n<div class="example">\n    <p>示例：</p>\n    <img src="http://h0.hucdn.com/open201921/c077149235d417d3_132x77.jpg" />\n</div>\n\n## 空格\n\n1. 中文和英文间需要空格\n2. 正文与链接之间需要空格\n3. 数字与中文、英文之间需要增加空格\n4. 数字与符号之间不需要空格，数字与表示单位的英文字母之间不需要空格（如 2px）\n\n<div class="example">\n    <p>示例：</p>\n    <img src="http://h0.hucdn.com/open201921/344548437471dd46_1001x35.jpg" />\n</div>\n\n')])])},o=[];r._withStripped=!0,t.d(e,"a",function(){return r}),t.d(e,"b",function(){return o})},690:function(n,e,t){"use strict";var r=u(t(1)),o=u(t(691));function u(n){return n&&n.__esModule?n:{default:n}}new r.default({el:"#root",render:function(n){return n(o.default)}})},691:function(n,e,t){"use strict";t.r(e);var r=t(355),o=t(77);for(var u in o)"default"!==u&&function(n){t.d(e,n,function(){return o[n]})}(u);var c=t(0),i=Object(c.a)(o.default,r.a,r.b,!1,null,null,null);i.options.__file="src/docs/pages/design/spacing/index.vue",e.default=i.exports},77:function(n,e,t){"use strict";t.r(e);var r=t(78),o=t.n(r);for(var u in r)"default"!==u&&function(n){t.d(e,n,function(){return r[n]})}(u);e.default=o.a},78:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,o=t(4),u=(r=o)&&r.__esModule?r:{default:r};e.default={data:function(){return{page:"spacing"}},components:{"doc-design":u.default}},n.exports=e.default}});