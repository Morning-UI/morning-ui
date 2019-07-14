!function(n){function e(e){for(var i,c,d=e[0],u=e[1],a=e[2],g=0,m=[];g<d.length;g++)c=d[g],r[c]&&m.push(r[c][0]),r[c]=0;for(i in u)Object.prototype.hasOwnProperty.call(u,i)&&(n[i]=u[i]);for(f&&f(e);m.length;)m.shift()();return o.push.apply(o,a||[]),t()}function t(){for(var n,e=0;e<o.length;e++){for(var t=o[e],i=!0,d=1;d<t.length;d++){var u=t[d];0!==r[u]&&(i=!1)}i&&(o.splice(e--,1),n=c(c.s=t[0]))}return n}var i={},r={43:0},o=[];function c(e){if(i[e])return i[e].exports;var t=i[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.m=n,c.c=i,c.d=function(n,e,t){c.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},c.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},c.t=function(n,e){if(1&e&&(n=c(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var i in n)c.d(t,i,function(e){return n[e]}.bind(null,i));return t},c.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return c.d(e,"a",e),e},c.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},c.p="/";var d=window.webpackJsonp=window.webpackJsonp||[],u=d.push.bind(d);d.push=e,d=d.slice();for(var a=0;a<d.length;a++)e(d[a]);var f=u;o.push([806,0]),t()}({1:function(n,e){n.exports=Vue},191:function(n,e,t){"use strict";t.r(e);var i=t(192),r=t.n(i);for(var o in i)"default"!==o&&function(n){t.d(e,n,function(){return i[n]})}(o);e.default=r.a},192:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,r=t(2),o=(i=r)&&i.__esModule?i:{default:i};e.default={data:function(){return{page:"img"}},components:{"doc-component":o.default}},n.exports=e.default},364:function(n,e,t){"use strict";var i=function(){var n=this.$createElement,e=this._self._c||n;return e("doc-component",{attrs:{page:this.page,hasPadding:!0}},[e("script",{attrs:{type:"text/markdown"}},[this._v('\n# 图片 `<ui-img>`\n\n<doc-component-status page="img"></doc-component-status>\n\n[[[开始]]]\n\n定义图片容器，支持三种不同形状的图片，可为图片添加文字说明。\n\n:::vue\n@name:使用\n---\n#demo\n>tpl\n<ui-img src="http://morning-ui-image.test.upcdn.net/48fc612216b4fd2112a6bcd7d0db6eba.jpeg"></ui-img>\n:::\n\n:::vue\n@name:带文字说明图片\n---\n#demo\n>tpl\n<ui-img src="http://morning-ui-image.test.upcdn.net/48fc612216b4fd2112a6bcd7d0db6eba.jpeg">说明文字</ui-img>\n:::\n\n:::vue\n@name:不同形状\n---\n#demo\n>desc\n支持三种：\n<br><br>\n- `.round` : 圆角\n- `.circle` : 圆形\n- `.thumbnail` : 相框\n>tpl\n<div>\n    <ui-img class="round" src="http://morning-ui-image.test.upcdn.net/48fc612216b4fd2112a6bcd7d0db6eba.jpeg"></ui-img>\n    <ui-img class="circle" src="http://morning-ui-image.test.upcdn.net/48fc612216b4fd2112a6bcd7d0db6eba.jpeg"></ui-img>\n    <ui-img class="thumbnail" src="http://morning-ui-image.test.upcdn.net/48fc612216b4fd2112a6bcd7d0db6eba.jpeg"></ui-img>\n</div>\n:::\n\n:::vue\n@name:支持的属性\n---\n#demo\n>desc\n`ui-img`仅支持下面这些属性：\n<br><br>\n- `src` : 图片地址\n- `width` : 图片宽度\n- `height` : 图片高度\n- `alt` : 图片加载失败显示内容\n- `title` : 图标标题\n>tpl\n<div>\n    \x3c!-- 添加width属性，自动设置图片宽度 --\x3e\n    <ui-img width="130" src="http://morning-ui-image.test.upcdn.net/48fc612216b4fd2112a6bcd7d0db6eba.jpeg"></ui-img>\n\n    \x3c!-- 添加height属性，自动设置图片高度 --\x3e\n    <ui-img height="150" src="http://morning-ui-image.test.upcdn.net/48fc612216b4fd2112a6bcd7d0db6eba.jpeg"></ui-img>\n\n    \x3c!-- 添加title属性，自动设置图片title --\x3e\n    <ui-img title="这里是title" src="http://morning-ui-image.test.upcdn.net/48fc612216b4fd2112a6bcd7d0db6eba.jpeg"></ui-img>\n\n    \x3c!-- 添加alt属性，自动设置图片alt属性，当图片无法显示时候，显示alt内容。 --\x3e\n    <ui-img alt="这里是alt" src="https://d13yacurqjgar.cloudfront.net/noimg.jpeg"></ui-img>\n</div>\n:::\n\n[[[形态]]]\n\n#### 支持\n\n|类型|支持|默认|\n|-|-|-|\n|尺寸|不支持|-|\n|色彩|不支持|-|\n|状态|不支持|-|\n\n<a href="/guide/status.html">查看形态文档</a> / <a href="/design/color.html">查看色彩文档</a>\n\n\n[[[配置]]]\n\n:::vue\n@name:src\n---\n#config\n>conf-desc\n图片地址。\n>conf-accept\nurl地址\n>conf-type\nString\n>conf-default\n`undefined`\n---\n#demo\n>tpl\n<ui-img src="http://morning-ui-image.test.upcdn.net/48fc612216b4fd2112a6bcd7d0db6eba.jpeg"></ui-img>\n:::\n\n:::vue\n@name:width\n---\n#config\n>conf-desc\n图片的宽度。\n>conf-accept\n宽度数值(等价`img`标签的`width`属性)\n>conf-type\nString\n>conf-default\n`\'auto\'`\n---\n#demo\n>tpl\n<ui-img src="http://morning-ui-image.test.upcdn.net/48fc612216b4fd2112a6bcd7d0db6eba.jpeg" width="130"></ui-img>\n:::\n\n:::vue\n@name:height\n---\n#config\n>conf-desc\n图片的高度。\n>conf-accept\n宽度数值(等价`img`标签的`height`属性)\n>conf-type\nString\n>conf-default\n`\'auto\'`\n---\n#demo\n>tpl\n<ui-img src="http://morning-ui-image.test.upcdn.net/48fc612216b4fd2112a6bcd7d0db6eba.jpeg" height="130"></ui-img>\n:::\n\n:::vue\n@name:alt\n---\n#config\n>conf-desc\n图片加载失败显示内容。\n>conf-accept\n文字\n>conf-type\nString\n>conf-default\n`undefined`\n---\n#demo\n>tpl\n<ui-img src="https://d13yacurqjgar.cloudfront.net/noimg.jpeg" alt="这里是alt"></ui-img>\n:::\n\n:::vue\n@name:title\n---\n#config\n>conf-desc\n图片的标题\n>conf-accept\n文字\n>conf-type\nString\n>conf-default\n`undefined`\n---\n#demo\n>tpl\n<ui-img src="http://morning-ui-image.test.upcdn.net/48fc612216b4fd2112a6bcd7d0db6eba.jpeg" title="这里是title"></ui-img>\n:::\n\n:::vue\n@name:preview\n---\n#config\n>conf-desc\n是否开启图片预览，开启后点击图片可以进行预览。\n>conf-accept\n`true`<br>`false`\n>conf-type\nBoolean\n>conf-default\n`false`\n---\n#demo\n>tpl\n<ui-img src="http://morning-ui-image.test.upcdn.net/48fc612216b4fd2112a6bcd7d0db6eba.jpeg" :preview="true"></ui-img>\n:::\n\n[[[方法]]]\n\n:::vue\n@name:togglePreview([show])\n---\n#method\n>method-desc\n切换图片的预览显示/隐藏，必须开启`preview`配置。\n>method-args\n|show|YES|切换到显示或隐藏状态，不输入则切换到反向状态。|`undefined`<br>`true`<br>`false`|`Undefined`<br>`Boolean`|`undefined`|\n>method-return\n当前组件VM实例。\n---\n#demo\n>tpl\n<div>\n    <ui-img ref="demo3" src="http://morning-ui-image.test.upcdn.net/48fc612216b4fd2112a6bcd7d0db6eba.jpeg" :preview="true"></ui-img>\n    <br><br> \n    <ui-link js="morning.findVM(\'demo3\').togglePreview(true);">显示预览</ui-link>\n    <ui-link js="morning.findVM(\'demo3\').togglePreview(false);">隐藏预览</ui-link>\n    <ui-link js="morning.findVM(\'demo3\').togglePreview();">切换反方向</ui-link>\n</div>\n:::\n\n[[[事件]]]\n\n:::vue\n@name:show-preview\n---\n#event\n>event-desc\n当图片预览显示时触发。\n---\n#demo\n>tpl\n<div>\n    <ui-img src="http://morning-ui-image.test.upcdn.net/48fc612216b4fd2112a6bcd7d0db6eba.jpeg" :preview="true" @show-preview="echo"></ui-img>\n</div>\n>script\n{\n    methods : {\n        echo : function () {\n            console.log(\'demo1.console1\', \'show-preview event!\');\n        }\n    }\n}\n:::\n\n:::vue\n@name:hide-preview\n---\n#event\n>event-desc\n当图片预览隐藏时触发。\n---\n#demo\n>tpl\n<div>\n    <ui-img src="http://morning-ui-image.test.upcdn.net/48fc612216b4fd2112a6bcd7d0db6eba.jpeg" :preview="true" @hide-preview="echo"></ui-img>\n</div>\n>script\n{\n    methods : {\n        echo : function () {\n            console.log(\'demo2.console1\', \'hide-preview event!\');\n        }\n    }\n}\n:::\n\n[[[源码]]]\n\n<iframe src="/report/coverage/lib/components/img/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>\n')])])},r=[];i._withStripped=!0,t.d(e,"a",function(){return i}),t.d(e,"b",function(){return r})},806:function(n,e,t){"use strict";var i=o(t(1)),r=o(t(807));function o(n){return n&&n.__esModule?n:{default:n}}new i.default({el:"#root",render:function(n){return n(r.default)}})},807:function(n,e,t){"use strict";t.r(e);var i=t(364),r=t(191);for(var o in r)"default"!==o&&function(n){t.d(e,n,function(){return r[n]})}(o);var c=t(0),d=Object(c.a)(r.default,i.a,i.b,!1,null,null,null);d.options.__file="src/docs/pages/component/img/index.vue",e.default=d.exports}});