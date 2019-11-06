!function(n){function e(e){for(var a,r,i=e[0],u=e[1],s=e[2],d=0,p=[];d<i.length;d++)r=i[d],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&p.push(o[r][0]),o[r]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(n[a]=u[a]);for(c&&c(e);p.length;)p.shift()();return l.push.apply(l,s||[]),t()}function t(){for(var n,e=0;e<l.length;e++){for(var t=l[e],a=!0,i=1;i<t.length;i++){var u=t[i];0!==o[u]&&(a=!1)}a&&(l.splice(e--,1),n=r(r.s=t[0]))}return n}var a={},o={44:0},l=[];function r(e){if(a[e])return a[e].exports;var t=a[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=n,r.c=a,r.d=function(n,e,t){r.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},r.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},r.t=function(n,e){if(1&e&&(n=r(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var a in n)r.d(t,a,function(e){return n[e]}.bind(null,a));return t},r.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return r.d(e,"a",e),e},r.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},r.p="/";var i=window.webpackJsonp=window.webpackJsonp||[],u=i.push.bind(i);i.push=e,i=i.slice();for(var s=0;s<i.length;s++)e(i[s]);var c=u;l.push([802,0]),t()}({1:function(n,e){n.exports=Vue},198:function(n,e,t){"use strict";t.r(e);var a=t(199),o=t.n(a);for(var l in a)"default"!==l&&function(n){t.d(e,n,(function(){return a[n]}))}(l);e.default=o.a},199:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a,o=t(2),l=(a=o)&&a.__esModule?a:{default:a};e.default={data:function(){return{page:"label"}},components:{"doc-component":l.default}},n.exports=e.default},380:function(n,e,t){"use strict";var a=function(){var n=this.$createElement,e=this._self._c||n;return e("doc-component",{attrs:{page:this.page,hasPadding:!0}},[e("script",{attrs:{type:"text/markdown"}},[this._v('\n# 标签 `<ui-label>`\n\n<doc-component-status page="label"></doc-component-status>\n\n[[[开始]]]\n\n定义一个标签，标签和徽标不同在于标签可以插入图片或图标，这是一个内联块元素。\n\n徽标一般单独使用，而标签一般多个一起使用。\n\n:::vue\n@name:使用\n---\n#demo\n>tpl\n<ui-label>标签</ui-label>\n:::\n\n:::vue\n@name:使用图片\n---\n#demo\n>desc\n在标签内通过`<img>`标签插入图片，此时标签文本请使用`<span>`标签。\n<br><br>\n注意：使用时请确保`<span>`和`<img>`标签之间有空格。\n>tpl\n<div>\n    <ui-label>\n        <img src="http://morning-ui-image.test.upcdn.net/48fc612216b4fd2112a6bcd7d0db6eba.jpeg"/>\n        <span>标签</span>\n    </ui-label>\n\n    <ui-label>\n        <span>标签</span>\n        <img src="http://morning-ui-image.test.upcdn.net/48fc612216b4fd2112a6bcd7d0db6eba.jpeg"/>\n    </ui-label>\n</div>\n:::\n\n:::vue\n@name:使用图标\n---\n#demo\n>desc\n为`ui-label`加上`icon`类，然后在标签内通过`<i>`标签插入图标，此时标签文本请使用`<span>`标签。\n<br><br>\n注意：使用时请确保`<span>`和`<img>`标签之间有空格。\n>tpl\n<div>\n    <ui-label>\n        <i class="mo-icon mo-icon-star-f"></i>\n        <span>标签</span>\n    </ui-label>\n\n    <ui-label>\n        <span>标签</span>\n        <i class="mo-icon mo-icon-star-f"></i>\n    </ui-label>\n</div>\n:::\n\n[[[形态]]]\n\n#### 支持\n\n|类型|支持|默认|\n|-|-|-|\n|尺寸|全部|`m`|\n|色彩|全部(除`transparent`)|`theme`|\n|状态|`normal`<br/>`apparent`|`normal`|\n\n<a href="/guide/status.html">查看形态文档</a> / <a href="/design/color.html">查看色彩文档</a>\n\n:::vue\n@name:尺寸\n---\n#renderer\n>name\nsize-repeat\n>tpl\n<ui-label size="{$sizeKey}">{$&sizeName}</ui-label>\n---\n#renderer\n>name\nsize-repeat\n>desc\n不同尺寸带图标的标签。\n>tpl\n<ui-label size="{$sizeKey}"><i class="mo-icon mo-icon-star-f"></i> <span>{$&sizeName}</span></ui-label>\n---\n#renderer\n>name\nsize-repeat\n>desc\n不同尺寸带图片的标签。\n>tpl\n<ui-label size="{$sizeKey}"><img src="http://morning-ui-image.test.upcdn.net/48fc612216b4fd2112a6bcd7d0db6eba.jpeg"/> <span>{$&sizeName}</span></ui-label>\n:::\n\n:::vue\n@layout:color\n---\n<ui-label color="{$colorKey}">{$&colorName}</ui-label>\n:::\n\n:::vue\n@layout:state-na\n---\n<ui-label state="{$stateKey}">{$&stateName}</ui-label>\n:::\n\n[[[配置]]]\n\n:::vue\n@name:closable\n---\n#config\n>conf-desc\n标签是否可以被关闭。\n>conf-accept\n`true`<br>`false`\n>conf-type\nBoolean\n>conf-default\n`false`\n---\n#demo\n>tpl\n<ui-label closable>标签</ui-label>\n:::\n\n[[[方法]]]\n\n:::vue\n@name:close()\n---\n#method\n>method-desc\n关闭标签（当标签关闭后会被立即销毁）。\n>method-return\n当前组件VM实例。\n---\n#demo\n>tpl\n<div>\n    <ui-label ref="demo1" closable>标签</ui-label>\n    <br><br>\n    <ui-link js="window.morning.findVM(\'demo1\').close();">关闭标签</ui-link>\n</div>\n:::\n\n[[[事件]]]\n\n:::vue\n@name:close\n---\n#event\n>event-desc\n标签被关闭时触发。\n---\n#demo\n>tpl\n<div>\n    <ui-label closable @close="echo">标签</ui-label>\n</div>\n>script\n{\n    methods : {\n        echo : function () {\n            console.log(\'demo1.console1\', \'close event!\');\n        }\n    }\n}\n:::\n\n:::vue\n@layout:lifecycle-event\n---\nlabel\n标签\n:::\n\n[[[源码]]]\n\n<iframe src="/report/coverage/lib/components/label/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>\n')])])},o=[];a._withStripped=!0,t.d(e,"a",(function(){return a})),t.d(e,"b",(function(){return o}))},802:function(n,e,t){"use strict";var a=l(t(1)),o=l(t(803));function l(n){return n&&n.__esModule?n:{default:n}}new a.default({el:"#root",render:function(n){return n(o.default)}})},803:function(n,e,t){"use strict";t.r(e);var a=t(380),o=t(198);for(var l in o)"default"!==l&&function(n){t.d(e,n,(function(){return o[n]}))}(l);var r=t(0),i=Object(r.a)(o.default,a.a,a.b,!1,null,null,null);i.options.__file="src/docs/pages/component/label/index.vue",e.default=i.exports}});