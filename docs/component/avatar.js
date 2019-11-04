!function(n){function a(a){for(var e,u,s=a[0],o=a[1],c=a[2],v=0,d=[];v<s.length;v++)u=s[v],Object.prototype.hasOwnProperty.call(r,u)&&r[u]&&d.push(r[u][0]),r[u]=0;for(e in o)Object.prototype.hasOwnProperty.call(o,e)&&(n[e]=o[e]);for(l&&l(a);d.length;)d.shift()();return i.push.apply(i,c||[]),t()}function t(){for(var n,a=0;a<i.length;a++){for(var t=i[a],e=!0,s=1;s<t.length;s++){var o=t[s];0!==r[o]&&(e=!1)}e&&(i.splice(a--,1),n=u(u.s=t[0]))}return n}var e={},r={7:0},i=[];function u(a){if(e[a])return e[a].exports;var t=e[a]={i:a,l:!1,exports:{}};return n[a].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.m=n,u.c=e,u.d=function(n,a,t){u.o(n,a)||Object.defineProperty(n,a,{enumerable:!0,get:t})},u.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},u.t=function(n,a){if(1&a&&(n=u(n)),8&a)return n;if(4&a&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&a&&"string"!=typeof n)for(var e in n)u.d(t,e,function(a){return n[a]}.bind(null,e));return t},u.n=function(n){var a=n&&n.__esModule?function(){return n.default}:function(){return n};return u.d(a,"a",a),a},u.o=function(n,a){return Object.prototype.hasOwnProperty.call(n,a)},u.p="/";var s=window.webpackJsonp=window.webpackJsonp||[],o=s.push.bind(s);s.push=a,s=s.slice();for(var c=0;c<s.length;c++)a(s[c]);var l=o;i.push([884,0]),t()}({1:function(n,a){n.exports=Vue},265:function(n,a,t){"use strict";t.r(a);var e=t(266),r=t.n(e);for(var i in e)"default"!==i&&function(n){t.d(a,n,(function(){return e[n]}))}(i);a.default=r.a},266:function(n,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e,r=t(2),i=(e=r)&&e.__esModule?e:{default:e};a.default={data:function(){return{page:"avatar"}},components:{"doc-component":i.default}},n.exports=a.default},292:function(n,a,t){"use strict";var e=function(){var n=this.$createElement,a=this._self._c||n;return a("doc-component",{attrs:{page:this.page,hasPadding:!0}},[a("script",{attrs:{type:"text/markdown"}},[this._v('\n# 头像 `<ui-avatar>`\n\n<doc-component-status page="avatar"></doc-component-status>\n\n[[[开始]]]\n\n定义一个头像，这是一个内联块元素。\n\n:::vue\n@name:使用\n---\n#demo\n>tpl\n<ui-avatar>\n    <ui-img src="https://cdn.dribbble.com/users/60266/avatars/normal/gustavo_avatar.jpg?1402000442"></ui-img>\n</ui-avatar>\n:::\n\n:::vue\n@name:圆形头像\n---\n#demo\n>desc\n通过`.circle`可以设置圆形头像。\n>tpl\n<ui-avatar class="circle">\n    <ui-img src="https://cdn.dribbble.com/users/60266/avatars/normal/gustavo_avatar.jpg?1402000442"></ui-img>\n</ui-avatar>\n:::\n\n:::vue\n@name:不同类型的头像\n---\n#demo\n>desc\n头像的内容可以是文字、图片、图标。\n>tpl\n<div>\n    \x3c!-- 文字头像 --\x3e\n    <ui-avatar class="circle">\n        EA\n    </ui-avatar>\n\n    \x3c!-- 图片头像 --\x3e\n    <ui-avatar class="circle">\n        <ui-img src="https://cdn.dribbble.com/users/60266/avatars/normal/gustavo_avatar.jpg?1402000442"></ui-img>\n    </ui-avatar>\n\n    \x3c!-- 图标头像 --\x3e\n    <ui-avatar class="circle">\n        <i class="mo-icon-user-o"></i>\n    </ui-avatar>\n</div>\n:::\n\n:::vue\n@name:配合徽标一起使用\n---\n#demo\n>desc\n头像中可使用开启`attach`配置的徽标。\n>tpl\n<div>\n    <ui-avatar size="l">\n        <ui-img src="https://cdn.dribbble.com/users/60266/avatars/normal/gustavo_avatar.jpg?1402000442"></ui-img>\n        <ui-badge type="point" attach="right-top"></ui-badge>\n    </ui-avatar>\n    <br><br>\n    <ui-avatar size="l">\n        <ui-img src="https://cdn.dribbble.com/users/60266/avatars/normal/gustavo_avatar.jpg?1402000442"></ui-img>\n        <ui-badge type="counter" :count="19" size="xxs" attach="right-top"></ui-badge>\n    </ui-avatar>\n    <br><br>\n    <ui-avatar size="l" class="circle">\n        <ui-img src="https://cdn.dribbble.com/users/60266/avatars/normal/gustavo_avatar.jpg?1402000442"></ui-img>\n        <ui-badge type="point" attach="right-top"></ui-badge>\n    </ui-avatar>\n</div>\n:::\n\n:::vue\n@name:自动调整字符大小\n---\n#demo\n>desc\n当头像内容是文本时，可自动根据文本长度调整大小。\n>tpl\n<div>\n    <ui-avatar class="circle">\n        {*name*}\n    </ui-avatar>\n    <br><br>\n    <ui-link js="this.changeName()">更换名字</ui-link>\n</div>\n>script\n{\n    data : {\n        nameList : [\'U\', \'Luck\', \'Tom\', \'Edward\'],\n        name : \'U\',\n        index : 0\n    },\n    methods : {\n        changeName : function () {\n            this.name = this.nameList[(++this.index)%4];\n        }\n    }\n}\n:::\n\n[[[形态]]]\n\n#### 支持\n\n|类型|支持|默认|\n|-|-|-|\n|尺寸|全部|`m`|\n|色彩|全部(除`transparent`)|`theme`|\n|状态|`normal`<br/>`apparent`|`normal`|\n\n<a href="/guide/status.html">查看形态文档</a> / <a href="/design/color.html">查看色彩文档</a>\n\n:::vue\n@name:尺寸\n---\n#renderer\n>name\nsize-repeat\n>tpl\n<ui-avatar size="{$sizeKey}">\n    EA\n</ui-avatar>\n<ui-avatar size="{$sizeKey}">\n    <ui-img src="https://cdn.dribbble.com/users/60266/avatars/normal/gustavo_avatar.jpg?1402000442"></ui-img>\n</ui-avatar>\n<ui-avatar size="{$sizeKey}">\n    <i class="mo-icon-user-o"></i>\n</ui-avatar>\n<br><br>\n---\n#renderer\n>name\nsize-repeat\n>desc\n尺寸配合`.circle`一起使用。\n>tpl\n<ui-avatar class="circle" size="{$sizeKey}">\n    EA\n</ui-avatar>\n<ui-avatar class="circle" size="{$sizeKey}">\n    <ui-img src="https://cdn.dribbble.com/users/60266/avatars/normal/gustavo_avatar.jpg?1402000442"></ui-img>\n</ui-avatar>\n<ui-avatar class="circle" size="{$sizeKey}">\n    <i class="mo-icon-user-o"></i>\n</ui-avatar>\n<br><br>\n:::\n\n:::vue\n@layout:color\n---\n<ui-avatar color="{$colorKey}">\n    EA\n</ui-avatar>\n<ui-avatar color="{$colorKey}">\n    <i class="mo-icon-user-o"></i>\n</ui-avatar>\n<ui-avatar class="circle" color="{$colorKey}">\n    EA\n</ui-avatar>\n<ui-avatar class="circle" color="{$colorKey}">\n    <i class="mo-icon-user-o"></i>\n</ui-avatar>\n<br><br>\n:::\n\n:::vue\n@layout:state-na\n---\n<ui-avatar class="circle" state="{$stateKey}">\n    EA\n</ui-avatar>\n<ui-avatar class="circle" state="{$stateKey}">\n    <ui-img src="https://cdn.dribbble.com/users/60266/avatars/normal/gustavo_avatar.jpg?1402000442"></ui-img>\n</ui-avatar>\n<ui-avatar class="circle" state="{$stateKey}">\n    <i class="mo-icon-user-o"></i>\n</ui-avatar>\n<br><br>\n:::\n\n[[[配置]]]\n\n<h1>暂无</h1>\n\n[[[方法]]]\n\n<h1>暂无</h1>\n\n[[[事件]]]\n\n:::vue\n@layout:lifecycle-event\n---\navatar\n头像\n:::\n\n[[[源码]]]\n\n<iframe src="/report/coverage/lib/components/avatar/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>\n\n')])])},r=[];e._withStripped=!0,t.d(a,"a",(function(){return e})),t.d(a,"b",(function(){return r}))},884:function(n,a,t){"use strict";var e=i(t(1)),r=i(t(885));function i(n){return n&&n.__esModule?n:{default:n}}new e.default({el:"#root",render:function(n){return n(r.default)}})},885:function(n,a,t){"use strict";t.r(a);var e=t(292),r=t(265);for(var i in r)"default"!==i&&function(n){t.d(a,n,(function(){return r[n]}))}(i);var u=t(0),s=Object(u.a)(r.default,e.a,e.b,!1,null,null,null);s.options.__file="src/docs/pages/component/avatar/index.vue",a.default=s.exports}});