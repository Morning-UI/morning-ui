!function(n){function e(e){for(var i,c,u=e[0],l=e[1],a=e[2],s=0,f=[];s<u.length;s++)c=u[s],o[c]&&f.push(o[c][0]),o[c]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(n[i]=l[i]);for(d&&d(e);f.length;)f.shift()();return r.push.apply(r,a||[]),t()}function t(){for(var n,e=0;e<r.length;e++){for(var t=r[e],i=!0,u=1;u<t.length;u++){var l=t[u];0!==o[l]&&(i=!1)}i&&(r.splice(e--,1),n=c(c.s=t[0]))}return n}var i={},o={13:0},r=[];function c(e){if(i[e])return i[e].exports;var t=i[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.m=n,c.c=i,c.d=function(n,e,t){c.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},c.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},c.t=function(n,e){if(1&e&&(n=c(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var i in n)c.d(t,i,function(e){return n[e]}.bind(null,i));return t},c.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return c.d(e,"a",e),e},c.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},c.p="/";var u=window.webpackJsonp=window.webpackJsonp||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var a=0;a<u.length;a++)e(u[a]);var d=l;r.push([861,0]),t()}({1:function(n,e){n.exports=Vue},249:function(n,e,t){"use strict";t.r(e);var i=t(250),o=t.n(i);for(var r in i)"default"!==r&&function(n){t.d(e,n,function(){return i[n]})}(r);e.default=o.a},250:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,o=t(2),r=(i=o)&&i.__esModule?i:{default:i};e.default={data:function(){return{page:"btn"}},components:{"doc-component":r.default}},n.exports=e.default},402:function(n,e,t){"use strict";var i=function(){var n=this.$createElement,e=this._self._c||n;return e("doc-component",{attrs:{page:this.page,hasPadding:!0}},[e("script",{attrs:{type:"text/markdown"}},[this._v('\n# 按钮 `<ui-btn>`\n\n<doc-component-status page="btn"></doc-component-status>\n\n[[[开始]]]\n\n定义一个按钮，这是一个内联块元素。\n\n:::vue\n@name:使用\n---\n#demo\n>tpl\n<ui-btn>按钮</ui-btn>\n:::\n\n:::vue\n@name:按钮的多种样式\n---\n#demo\n>desc\n按钮支持以下样式类：\n<br><br>\n- `plain` : 朴素的按钮\n- `round` : 圆角按钮\n- `circle` : 圆形按钮\n>tpl\n<div>\n    <ui-btn class="plain">朴素的按钮</ui-btn>\n    <br><br>\n    <ui-btn class="round">圆角按钮</ui-btn>\n    <br><br>\n    <ui-btn class="circle">\n        <i class="mo-icon mo-icon-star-f"></i>\n    </ui-btn>\n</div>\n---\n#demo\n>desc\n其中`plain`可以和`round`或`circle`进行组合。\n>tpl\n<div>\n    <ui-btn class="round plain">朴素的圆角按钮</ui-btn>\n    <br><br>\n    <ui-btn class="circle plain">\n        <i class="mo-icon mo-icon-star-f"></i>\n    </ui-btn>\n</div>\n:::\n\n:::vue\n@name:图片按钮\n---\n#demo\n>desc\n`circle`配合`ui-img`一起使用可实现图片按钮的效果。\n>tpl\n<ui-btn class="circle">\n    <ui-img src="http://morning-ui-image.test.upcdn.net/48fc612216b4fd2112a6bcd7d0db6eba.jpeg"></ui-img>\n</ui-btn>\n---\n#demo\n>desc\n在上面的基础上增加`plain`可为图片按钮增加边框。\n>tpl\n<ui-btn class="circle plain" color="danger">\n    <ui-img src="http://morning-ui-image.test.upcdn.net/48fc612216b4fd2112a6bcd7d0db6eba.jpeg"></ui-img>\n</ui-btn>\n:::\n\n[[[形态]]]\n\n#### 支持\n\n|类型|支持|默认|\n|-|-|-|\n|尺寸|全部|`m`|\n|色彩|全部(除`transparent`)|`theme`|\n|状态|全部|`normal`|\n\n<a href="/guide/status.html">查看形态文档</a> / <a href="/design/color.html">查看色彩文档</a>\n\n:::vue\n@name:尺寸\n---\n#renderer\n>name\nsize-repeat\n>tpl\n<ui-btn size="{$sizeKey}">{$&sizeName}</ui-btn>\n---\n#renderer\n>name\nsize-repeat\n>desc\n尺寸配合`locked`配置一起使用。\n>tpl\n<ui-btn size="{$sizeKey}" locked>{$&sizeName}</ui-btn>\n---\n#renderer\n>name\nsize-repeat\n>desc\n尺寸配合`circle`样式类一起使用。\n>tpl\n<ui-btn size="{$sizeKey}" class="circle">\n    <i class="mo-icon mo-icon-star-f"></i>\n</ui-btn>\n---\n#renderer\n>name\nsize-repeat\n>desc\n尺寸配合`circle`样式类和`locked`配置一起使用。\n>tpl\n<ui-btn size="{$sizeKey}" class="circle" locked></ui-btn>\n:::\n\n:::vue\n@layout:color\n---\n<ui-btn color="{$colorKey}">{$&colorName}</ui-btn>\n<ui-btn color="{$colorKey}" class="plain">{$&colorName}</ui-btn>\n<ui-btn color="{$colorKey}" locked>{$&colorName}</ui-btn>\n<ui-btn color="{$colorKey}" locked class="plain">{$&colorName}</ui-btn>\n<br><br>\n:::\n\n:::vue\n@name:状态\n---\n#renderer\n>name\nstate-color-repeat\n>tpl\n<ui-btn state="{$stateKey}" color="{$colorKey}">{$&stateName}</ui-btn>\n:::\n\n[[[配置]]]\n\n:::vue\n@name:link\n---\n#config\n>conf-desc\n链接地址，若为空则不跳转。\n>conf-accept\nurl地址\n>conf-type\nString\n>conf-default\n`\'\'`\n---\n#demo\n>tpl\n<ui-btn :link="\'https://www.google.com\'">链接</ui-btn>\n:::\n\n:::vue\n@name:js\n---\n#config\n>conf-desc\n点击后执行JS逻辑（可以通过`this`访问VM上下文）。\n>conf-accept\nJS代码\n>conf-type\nString\n>conf-default\n`\'\'`\n---\n#demo\n>tpl\n<ui-btn :js="\'alert(\\\'hello.\\\')\'">执行JS</ui-btn>\n---\n#demo\n>title\n访问上下文\n>desc\n使用`this`可以访问VM的上下文。\n>tpl\n<ui-link :js="\'alert(this.text)\'">使用上下文</ui-link>\n>script\n{\n    data : function () {\n        return {\n            text : \'hello!\'\n        };\n    }\n}\n:::\n\n:::vue\n@name:locked\n---\n#config\n>conf-desc\n锁定模式，用来防止组件在短时间内被重复触发。若设置一个时间数值(ms)，该组件在时间内只触发一次。也可设为`true`，触发后需要通过`unlock()`方法来解锁组件。\n>conf-accept\n`true`<br>`false`<br>数值(单位ms)\n>conf-type\nNumber<br>Boolean\n>conf-default\n`false`\n---\n#demo\n>desc\n自动解锁。\n>tpl\n<ui-btn :locked="3000">3秒后自动解锁</ui-btn>\n---\n#demo\n>desc\n手动解锁。\n>tpl\n<div>\n    <ui-btn ref="demo1" locked>手动解锁</ui-btn>\n    <ui-link js="morning.findVM(\'demo1\').unlock();">解锁</ui-link>\n</div>\n:::\n\n:::vue\n@name:new-tab\n---\n#config\n>conf-desc\n是否在新窗口中打开链接。\n>conf-accept\n`true`<br>`false`\n>conf-type\nBoolean\n>conf-default\n`false`\n---\n#demo\n>tpl\n<ui-btn new-tab :link="\'https://www.google.com\'">新窗口打开链接</ui-btn>\n:::\n\n[[[方法]]]\n\n:::vue\n@name:lock([time])\n---\n#method\n>method-desc\n锁定按钮，锁定后按钮不会触发`emit`事件。\n>method-args\n|time|YES|解锁的时间，单位ms。设置后组件将在解锁时间后自动解锁，不设置则需要调用`unlock()`方法解锁|`undefined`<br>数值(单位ms)|`Undefined`<br>`Number`|`undefined`|\n>method-return\n当前组件VM实例。\n---\n#demo\n>tpl\n<div>\n    <ui-btn ref="demo2">按钮</ui-btn>\n    <br><br> \n    <ui-link js="morning.findVM(\'demo2\').lock();">锁定</ui-link>\n    <ui-link js="morning.findVM(\'demo2\').lock(2000);">锁定2s</ui-link>\n    <ui-link js="morning.findVM(\'demo2\').unlock();">解锁</ui-link>\n</div>\n:::\n\n:::vue\n@name:unlock()\n---\n#method\n>method-desc\n解锁按钮，解锁后按钮可触发`emit`事件。\n>method-return\n当前组件VM实例。\n---\n#demo\n>tpl\n<div>\n    <ui-btn ref="demo3" locked>按钮</ui-btn>\n    <br><br>\n    <ui-link js="morning.findVM(\'demo3\').unlock();">解锁</ui-link>\n</div>\n:::\n\n[[[事件]]]\n\n:::vue\n@name:emit\n---\n#event\n>event-desc\n当按钮被点击时触发。\n---\n#demo\n>tpl\n<div>\n    <ui-btn @emit="echo">点击触发emit事件</ui-btn>\n</div>\n>script\n{\n    methods : {\n        echo : function () {\n            console.log(\'demo3.console1\', \'emit event!\');\n        }\n    }\n}\n:::\n\n:::vue\n@layout:lifecycle-event\n---\nbtn\n按钮\n:::\n\n[[[源码]]]\n\n<iframe src="/report/coverage/lib/components/btn/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>\n\n')])])},o=[];i._withStripped=!0,t.d(e,"a",function(){return i}),t.d(e,"b",function(){return o})},861:function(n,e,t){"use strict";var i=r(t(1)),o=r(t(862));function r(n){return n&&n.__esModule?n:{default:n}}new i.default({el:"#root",render:function(n){return n(o.default)}})},862:function(n,e,t){"use strict";t.r(e);var i=t(402),o=t(249);for(var r in o)"default"!==r&&function(n){t.d(e,n,function(){return o[n]})}(r);var c=t(0),u=Object(c.a)(o.default,i.a,i.b,!1,null,null,null);u.options.__file="src/docs/pages/component/btn/index.vue",e.default=u.exports}});