!function(n){function e(e){for(var r,u,l=e[0],a=e[1],c=e[2],s=0,d=[];s<l.length;s++)u=l[s],o[u]&&d.push(o[u][0]),o[u]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(n[r]=a[r]);for(f&&f(e);d.length;)d.shift()();return i.push.apply(i,c||[]),t()}function t(){for(var n,e=0;e<i.length;e++){for(var t=i[e],r=!0,l=1;l<t.length;l++){var a=t[l];0!==o[a]&&(r=!1)}r&&(i.splice(e--,1),n=u(u.s=t[0]))}return n}var r={},o={110:0},i=[];function u(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.m=n,u.c=r,u.d=function(n,e,t){u.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},u.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},u.t=function(n,e){if(1&e&&(n=u(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)u.d(t,r,function(e){return n[e]}.bind(null,r));return t},u.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return u.d(e,"a",e),e},u.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},u.p="/";var l=window.webpackJsonp=window.webpackJsonp||[],a=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var f=a;i.push([608,0]),t()}({1:function(n,e){n.exports=Vue},271:function(n,e,t){"use strict";var r=function(){var n=this.$createElement,e=this._self._c||n;return e("doc-guide",{attrs:{page:this.page,hasPadding:!0}},[e("script",{attrs:{type:"text/markdown"}},[this._v('\n# 样式类\n\n样式类就是CSS类，可以给组件提供不同的样式。所有的组件都可以支持样式类，但是不同的组件有不同的样式类。\n\n样式类与形态的区别：\n\n- 形态是一种通用的组件属性，可以区分样式及JS逻辑，有一套全局的规范，大部分组件都支持。\n- 样式类不同的组件有不同的支持，仅用于区分样式，全局仅在命名上有规范，当组件有样式需求时才支持。\n\n你可以在组件文档的开始标签中找到支持的样式类。\n\n## 用法\n\n样式类必须用在UI组件标签`<ui-*>`的`class`中。\n\n:::democode/html\n\x3c!-- ui-label标签上的icon是样式类 --\x3e\n\x3c!-- span标签上的icon不是样式类 --\x3e\n<ui-label class="icon">\n    <i class="mo-icon mo-icon-star-f"></i>\n    <span class="icon">标签</span>\n</ui-label>\n:::\n\n## 样式类全局命名规范\n\n样式类在全局有一套命名规范，这样是为了防止不同的组件对于某个名词理解不同，导致同一名词在不同组件的不同行为。\n\n在为组件添加样式类前应先检查下面的列表，是否有含义相同的样式类，若有请使用，若没有请将新的样式类添加到下面列表并注明它的含义。\n\n- `horizontal` : 水平排列\n- `vertical` : 垂直排列\n- `gutter-none` : 子元素间没有间隙\n- `space-around` : 子元素间(包括两侧)均有相等间隙\n- `fill` : 高度填满父元素\n- `full` : 元素没有内边距\n- `margin` : 元素有外边距\n- `no-padding` : 元素无内边距\n- `inline` : 内联\n- `inline-block` : 内联块\n- `block` : 块级 / 区块\n- `mark` : 包含标记\n- `underline` : 下划线\n- `noborder` : 无边框\n- `flat` : 扁平\n- `circle` : 圆形\n- `line` : 线条\n- `image` : 使用图片\n- `icon` : 使用图标\n- `split` : 分隔\n- `round` : 圆角\n- `circle` : 圆形\n- `thumbnail` : 相框\n- `plain` : 朴素\n- `btn` : 按钮式\n- `border` : 边框\n- `item-title-left` : 项标题左对齐\n- `item-title-center` : 项标题居中对齐\n- `item-title-right` : 项标题右对齐\n\n')])])},o=[];r._withStripped=!0,t.d(e,"a",function(){return r}),t.d(e,"b",function(){return o})},32:function(n,e,t){"use strict";t.r(e);var r=t(33),o=t.n(r);for(var i in r)"default"!==i&&function(n){t.d(e,n,function(){return r[n]})}(i);e.default=o.a},33:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,o=t(3),i=(r=o)&&r.__esModule?r:{default:r};e.default={data:function(){return{page:"styleclass"}},components:{"doc-guide":i.default}},n.exports=e.default},608:function(n,e,t){"use strict";var r=i(t(1)),o=i(t(609));function i(n){return n&&n.__esModule?n:{default:n}}new r.default({el:"#root",render:function(n){return n(o.default)}})},609:function(n,e,t){"use strict";t.r(e);var r=t(271),o=t(32);for(var i in o)"default"!==i&&function(n){t.d(e,n,function(){return o[n]})}(i);var u=t(0),l=Object(u.a)(o.default,r.a,r.b,!1,null,null,null);l.options.__file="src/docs/pages/guide/styleclass/index.vue",e.default=l.exports}});