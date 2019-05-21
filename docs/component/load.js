!function(n){function e(e){for(var o,l,r=e[0],u=e[1],a=e[2],c=0,s=[];c<r.length;c++)l=r[c],d[l]&&s.push(d[l][0]),d[l]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(n[o]=u[o]);for(f&&f(e);s.length;)s.shift()();return t.push.apply(t,a||[]),i()}function i(){for(var n,e=0;e<t.length;e++){for(var i=t[e],o=!0,r=1;r<i.length;r++){var u=i[r];0!==d[u]&&(o=!1)}o&&(t.splice(e--,1),n=l(l.s=i[0]))}return n}var o={},d={50:0},t=[];function l(e){if(o[e])return o[e].exports;var i=o[e]={i:e,l:!1,exports:{}};return n[e].call(i.exports,i,i.exports,l),i.l=!0,i.exports}l.m=n,l.c=o,l.d=function(n,e,i){l.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:i})},l.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},l.t=function(n,e){if(1&e&&(n=l(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var i=Object.create(null);if(l.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)l.d(i,o,function(e){return n[e]}.bind(null,o));return i},l.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return l.d(e,"a",e),e},l.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},l.p="/";var r=window.webpackJsonp=window.webpackJsonp||[],u=r.push.bind(r);r.push=e,r=r.slice();for(var a=0;a<r.length;a++)e(r[a]);var f=u;t.push([769,0]),i()}({1:function(n,e){n.exports=Vue},168:function(n,e,i){"use strict";i.r(e);var o=i(169),d=i.n(o);for(var t in o)"default"!==t&&function(n){i.d(e,n,function(){return o[n]})}(t);e.default=d.a},169:function(n,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o,d=i(2),t=(o=d)&&o.__esModule?o:{default:o};e.default={data:function(){return{page:"load"}},components:{"doc-component":t.default}},n.exports=e.default},354:function(n,e,i){"use strict";var o=function(){var n=this.$createElement,e=this._self._c||n;return e("doc-component",{attrs:{page:this.page,hasPadding:!0}},[e("script",{attrs:{type:"text/markdown"}},[this._v('\n# 加载 `<ui-load>`\n\n<doc-component-status page="load"></doc-component-status>\n\n[[[开始]]]\n\n定义一个加载，加载可以通过时间或`Promise`控制载入状态：\n\n- 时间：一定时间后载入内容，一般用来异步载入内容，减少首屏渲染压力。\n- Promise：一般用于异步加载内容，当内容获取后完成`Promise`显示内容。\n\n加载的内容为`ui-load`的内容。\n\n当内容未载入时，加载会在内容区域显示一个`loading`标识，当内容载入后会渲染内容。\n\n当内容载入失败时加载会提示用户载入失败。\n\n:::vue\n@name:使用\n---\n#demo\n>tpl\n<div style="width:400px;height:200px;background: #f6f6f6">\n    \x3c!-- 默认0.2秒后加载成功 --\x3e\n    <ui-load>0.2秒后加载成功</ui-load>\n</div>\n:::\n\n:::vue\n@name:5秒后加载成功\n---\n#demo\n>tpl\n<div style="width:400px;height:200px;background: #f6f6f6">\n    <ui-load :done-time="5000">5秒后加载成功</ui-load>\n</div>\n:::\n\n:::vue\n@name:使用Promise完成加载\n---\n#demo\n>tpl\n<div>\n    <div style="width:400px;height:200px;background: #f6f6f6">\n        <ui-load ref="demo1" :done-time="false">加载成功</ui-load>\n    </div>\n    <ui-link js="window.morning.findVM(\'demo1\').resolve();">完成加载</ui-link>\n</div>\n:::\n\n:::vue\n@name:使用Promise失败加载\n---\n#demo\n>tpl\n<div>\n    <div style="width:400px;height:200px;background: #f6f6f6">\n        <ui-load ref="demo2" :done-time="false">加载失败</ui-load>\n    </div>\n    <ui-link js="window.morning.findVM(\'demo2\').reject();">失败加载</ui-link>\n</div>\n:::\n\n:::vue\n@name:带提示的加载\n---\n#demo\n>tpl\n<div style="width:400px;height:200px;background: #f6f6f6">\n    <ui-load :done-time="false" note="加载中">加载成功</ui-load>\n</div>\n:::\n\n[[[形态]]]\n\n#### 支持\n\n|类型|支持|默认|\n|-|-|-|\n|尺寸|全部|`m`|\n|色彩|不支持|-|\n|状态|不支持|-|\n\n<a href="/guide/status.html">查看形态文档</a> / <a href="/design/color.html">查看色彩文档</a>\n\n:::vue\n@name:尺寸\n---\n#renderer\n>name\nsize-repeat\n>tpl\n<div style="width:400px;height:200px;background: #f6f6f6">\n    <ui-load size="{$sizeKey}" :done-time="false" note="{$sizeName}">加载成功</ui-load>\n</div>\n:::\n\n[[[配置]]]\n\n:::vue\n@name:done-time\n---\n#config\n>conf-desc\n多少时间(ms)后完成加载，若设为false则需要手动完成或拒绝加载。如果当前正处于加载中，`done-time`改变后需要下次加载生效。\n>conf-accept\n时间值(ms)<br>`false`\n>conf-type\nBoolean<br>Number\n>conf-default\n`200`\n---\n#demo\n>desc\n设定一段时间后加载完成。\n>tpl\n<div style="width:400px;height:200px;background: #f6f6f6">\n    <ui-load :done-time="5000">5秒后加载成功</ui-load>\n</div>\n:::\n\n:::vue\n@name:note\n---\n#config\n>conf-desc\n加载过程中的提示。\n>conf-accept\n提示字符串\n>conf-type\nString\n>conf-default\n`\'\'`\n---\n#demo\n>tpl\n<div style="width:400px;height:200px;background: #f6f6f6">\n    <ui-load :done-time="false" note="加载中">加载成功</ui-load>\n</div>\n:::\n\n:::vue\n@name:only-hidden\n---\n#config\n>conf-desc\n加载组件默认采用了`slot`这意味着未加载完成时里面的内容不会被渲染。<br>\n在某些场景下可能仅仅需要隐藏，可以使用此配置。\n>conf-accept\n`true`<br>`false`\n>conf-type\nBoolean\n>conf-default\n`false`\n---\n#demo\n>desc\n当反复加载时组件的uiid不会增加。\n>tpl\n<div>\n    <div style="width:400px;height:200px;background: #f6f6f6">\n        <ui-load ref="demo9" :done-time="500" :only-hidden="true">\n            <ui-lead ref="demo9lead">当反复加载时组件的uiid不会增加</ui-lead>\n        </ui-load>\n    </div>\n    <ui-btn @emit="$refs.demo9.reload()">再次加载</ui-btn>\n    <ui-btn @emit="alert($refs.demo9lead.uiid)">获取uiid</ui-btn>\n</div>\n---\n#demo\n>desc\n当反复加载时组件的uiid会改变。\n>tpl\n<div>\n    <div style="width:400px;height:200px;background: #f6f6f6">\n        <ui-load ref="demo10" :done-time="500" :only-hidden="false">\n            <ui-lead ref="demo10lead">当反复加载时标件的uiid会改变</ui-lead>\n        </ui-load>\n    </div>\n    <ui-btn @emit="$refs.demo10.reload()">再次加载</ui-btn>\n    <ui-btn @emit="alert($refs.demo10lead.uiid)">获取uiid</ui-btn>\n</div>\n:::\n\n[[[方法]]]\n\n:::vue\n@name:resolve()\n---\n#method\n>method-desc\n完成加载，一般在远程请求成功获取数据后调用。\n>method-return\n当前组件VM实例。\n---\n#demo\n>tpl\n<div>\n    <div style="width:400px;height:200px;background: #f6f6f6">\n        <ui-load ref="demo3" :done-time="false">加载成功</ui-load>\n    </div>\n    <ui-link js="window.morning.findVM(\'demo3\').resolve();">完成加载</ui-link>\n</div>\n:::\n\n:::vue\n@name:reject()\n---\n#method\n>method-desc\n失败加载，一般在远程请求失败后调用。\n>method-return\n当前组件VM实例。\n---\n#demo\n>tpl\n<div>\n    <div style="width:400px;height:200px;background: #f6f6f6">\n        <ui-load ref="demo4" :done-time="false">加载成功</ui-load>\n    </div>\n    <ui-link js="window.morning.findVM(\'demo4\').reject();">失败加载</ui-link>\n</div>\n:::\n\n:::vue\n@name:reload()\n---\n#method\n>method-desc\n重新进入加载状态，若组件仍在加载状态，此方法无效。\n>method-return\n当前组件VM实例。\n---\n#demo\n>tpl\n<div>\n    <div style="width:400px;height:200px;background: #f6f6f6">\n        <ui-load ref="demo5" :done-time="3000">加载成功</ui-load>\n    </div>\n    <ui-link js="window.morning.findVM(\'demo5\').reload();">重新加载</ui-link>\n</div>\n:::\n\n[[[事件]]]\n\n:::vue\n@name:emit\n---\n#event\n>event-desc\n当加载完毕时触发，不管加载是否成功都会触发此事件。\n---\n#demo\n>tpl\n<div>\n    <div style="width:400px;height:200px;background: #f6f6f6">\n        <ui-load ref="demo6" @emit="echo" :done-time="false">加载成功</ui-load>\n    </div>\n    <ui-link js="window.morning.findVM(\'demo6\').resolve();">触发emit</ui-link>\n</div>\n>script\n{\n    methods : {\n        echo : function () {\n            console.log(\'demo6.console1\', \'emit event!\');\n        }\n    }\n}\n:::\n\n:::vue\n@name:done\n---\n#event\n>event-desc\n当加载完毕并成功时触发。\n---\n#demo\n>tpl\n<div>\n    <div style="width:400px;height:200px;background: #f6f6f6">\n        <ui-load ref="demo7" @done="echo" :done-time="false">加载成功</ui-load>\n    </div>\n    <ui-link js="window.morning.findVM(\'demo7\').resolve();">触发done</ui-link>\n</div>\n>script\n{\n    methods : {\n        echo : function () {\n            console.log(\'demo7.console1\', \'done event!\');\n        }\n    }\n}\n:::\n\n:::vue\n@name:fail\n---\n#event\n>event-desc\n当加载完毕并成功时触发。\n---\n#demo\n>tpl\n<div>\n    <div style="width:400px;height:200px;background: #f6f6f6">\n        <ui-load ref="demo8" @fail="echo" :done-time="false">加载失败</ui-load>\n    </div>\n    <ui-link js="window.morning.findVM(\'demo8\').reject();">触发fail</ui-link>\n</div>\n>script\n{\n    methods : {\n        echo : function () {\n            console.log(\'demo8.console1\', \'fail event!\');\n        }\n    }\n}\n:::\n\n:::vue\n@layout:lifecycle-event\n---\nload\n加载\n:::\n\n[[[源码]]]\n\n<iframe src="/report/coverage/lib/components/load/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>\n\n')])])},d=[];o._withStripped=!0,i.d(e,"a",function(){return o}),i.d(e,"b",function(){return d})},769:function(n,e,i){"use strict";var o=t(i(1)),d=t(i(770));function t(n){return n&&n.__esModule?n:{default:n}}new o.default({el:"#root",render:function(n){return n(d.default)}})},770:function(n,e,i){"use strict";i.r(e);var o=i(354),d=i(168);for(var t in d)"default"!==t&&function(n){i.d(e,n,function(){return d[n]})}(t);var l=i(0),r=Object(l.a)(d.default,o.a,o.b,!1,null,null,null);r.options.__file="src/docs/pages/component/load/index.vue",e.default=r.exports}});