!function(n){function e(e){for(var a,o,l=e[0],u=e[1],s=e[2],p=0,d=[];p<l.length;p++)o=l[p],r[o]&&d.push(r[o][0]),r[o]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(n[a]=u[a]);for(c&&c(e);d.length;)d.shift()();return i.push.apply(i,s||[]),t()}function t(){for(var n,e=0;e<i.length;e++){for(var t=i[e],a=!0,l=1;l<t.length;l++){var u=t[l];0!==r[u]&&(a=!1)}a&&(i.splice(e--,1),n=o(o.s=t[0]))}return n}var a={},r={47:0},i=[];function o(e){if(a[e])return a[e].exports;var t=a[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=n,o.c=a,o.d=function(n,e,t){o.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},o.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},o.t=function(n,e){if(1&e&&(n=o(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var a in n)o.d(t,a,function(e){return n[e]}.bind(null,a));return t},o.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return o.d(e,"a",e),e},o.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},o.p="/";var l=window.webpackJsonp=window.webpackJsonp||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var s=0;s<l.length;s++)e(l[s]);var c=u;i.push([764,0]),t()}({1:function(n,e){n.exports=Vue},170:function(n,e,t){"use strict";t.r(e);var a=t(171),r=t.n(a);for(var i in a)"default"!==i&&function(n){t.d(e,n,function(){return a[n]})}(i);e.default=r.a},171:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a,r=t(2),i=(a=r)&&a.__esModule?a:{default:a};e.default={data:function(){return{page:"label"}},components:{"doc-component":i.default}},n.exports=e.default},344:function(n,e,t){"use strict";var a=function(){var n=this.$createElement,e=this._self._c||n;return e("doc-component",{attrs:{page:this.page,hasPadding:!0}},[e("script",{attrs:{type:"text/markdown"}},[this._v('\n# 标签 `<ui-label>`\n\n<doc-component-status page="label"></doc-component-status>\n\n[[[开始]]]\n\n定义一个标签，标签和徽标不同在于标签可以插入图片或图标，这是一个内联块元素。\n\n徽标一般单独使用，而标签一般多个一起使用。\n\n:::vue\n@name:使用\n---\n#demo\n>tpl\n<ui-label>标签</ui-label>\n:::\n\n:::vue\n@name:使用图片\n---\n#demo\n>desc\n为`ui-label`加上`image`类，然后在标签内通过`<img>`标签插入图片，此时标签文本请使用`<span>`标签。\n<br><br>\n注意：使用时请确保`<span>`和`<img>`标签之间有空格。\n>tpl\n<div>\n    <ui-label class="image">\n        <img src="http://morning-ui-image.test.upcdn.net/48fc612216b4fd2112a6bcd7d0db6eba.jpeg"/>\n        <span>标签</span>\n    </ui-label>\n\n    <ui-label class="image">\n        <span>标签</span>\n        <img src="http://morning-ui-image.test.upcdn.net/48fc612216b4fd2112a6bcd7d0db6eba.jpeg"/>\n    </ui-label>\n</div>\n:::\n\n:::vue\n@name:使用图标\n---\n#demo\n>desc\n为`ui-label`加上`icon`类，然后在标签内通过`<i>`标签插入图标，此时标签文本请使用`<span>`标签。\n<br><br>\n注意：使用时请确保`<span>`和`<img>`标签之间有空格。\n>tpl\n<div>\n    <ui-label class="icon">\n        <i class="mo-icon mo-icon-star-f"></i>\n        <span>标签</span>\n    </ui-label>\n\n    <ui-label class="icon">\n        <span>标签</span>\n        <i class="mo-icon mo-icon-star-f"></i>\n    </ui-label>\n</div>\n:::\n\n[[[形态]]]\n\n#### 支持\n\n|类型|支持|默认|\n|-|-|-|\n|尺寸|全部|`m`|\n|色彩|全部(除`transparent`)|`theme`|\n|状态|`normal`<br/>`apparent`|`normal`|\n\n<a href="/guide/status.html">查看形态文档</a> / <a href="/design/color.html">查看色彩文档</a>\n\n:::vue\n@name:尺寸\n---\n#renderer\n>name\nsize-repeat\n>tpl\n<ui-label size="{$sizeKey}">{$&sizeName}</ui-label>\n---\n#renderer\n>name\nsize-repeat\n>desc\n不同尺寸带图标的标签。\n>tpl\n<ui-label class="icon" size="{$sizeKey}"><i class="mo-icon mo-icon-star-f"></i> <span>{$&sizeName}</span></ui-label>\n---\n#renderer\n>name\nsize-repeat\n>desc\n不同尺寸带图片的标签。\n>tpl\n<ui-label class="image" size="{$sizeKey}"><img src="http://morning-ui-image.test.upcdn.net/48fc612216b4fd2112a6bcd7d0db6eba.jpeg"/> <span>{$&sizeName}</span></ui-label>\n:::\n\n:::vue\n@layout:color\n---\n<ui-label color="{$colorKey}">{$&colorName}</ui-label>\n:::\n\n:::vue\n@layout:state-na\n---\n<ui-label state="{$stateKey}">{$&stateName}</ui-label>\n:::\n\n[[[源码]]]\n\n<iframe src="/report/coverage/lib/components/label/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>\n')])])},r=[];a._withStripped=!0,t.d(e,"a",function(){return a}),t.d(e,"b",function(){return r})},764:function(n,e,t){"use strict";var a=i(t(1)),r=i(t(765));function i(n){return n&&n.__esModule?n:{default:n}}new a.default({el:"#root",render:function(n){return n(r.default)}})},765:function(n,e,t){"use strict";t.r(e);var a=t(344),r=t(170);for(var i in r)"default"!==i&&function(n){t.d(e,n,function(){return r[n]})}(i);var o=t(0),l=Object(o.a)(r.default,a.a,a.b,!1,null,null,null);l.options.__file="src/docs/pages/component/label/index.vue",e.default=l.exports}});