!function(n){function e(e){for(var i,r,u=e[0],l=e[1],a=e[2],c=0,s=[];c<u.length;c++)r=u[c],Object.prototype.hasOwnProperty.call(t,r)&&t[r]&&s.push(t[r][0]),t[r]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(n[i]=l[i]);for(f&&f(e);s.length;)s.shift()();return d.push.apply(d,a||[]),o()}function o(){for(var n,e=0;e<d.length;e++){for(var o=d[e],i=!0,u=1;u<o.length;u++){var l=o[u];0!==t[l]&&(i=!1)}i&&(d.splice(e--,1),n=r(r.s=o[0]))}return n}var i={},t={47:0},d=[];function r(e){if(i[e])return i[e].exports;var o=i[e]={i:e,l:!1,exports:{}};return n[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=n,r.c=i,r.d=function(n,e,o){r.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:o})},r.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},r.t=function(n,e){if(1&e&&(n=r(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var i in n)r.d(o,i,function(e){return n[e]}.bind(null,i));return o},r.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return r.d(e,"a",e),e},r.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},r.p="/";var u=window.webpackJsonp=window.webpackJsonp||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var a=0;a<u.length;a++)e(u[a]);var f=l;d.push([791,0]),o()}({1:function(n,e){n.exports=Vue},190:function(n,e,o){"use strict";o.r(e);var i=o(191),t=o.n(i);for(var d in i)"default"!==d&&function(n){o.d(e,n,(function(){return i[n]}))}(d);e.default=t.a},191:function(n,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,t=o(2),d=(i=t)&&i.__esModule?i:{default:i};e.default={data:function(){return{page:"load"}},components:{"doc-component":d.default}},n.exports=e.default},366:function(n,e,o){"use strict";var i=function(){var n=this.$createElement,e=this._self._c||n;return e("doc-component",{attrs:{page:this.page,hasPadding:!0}},[e("script",{attrs:{type:"text/markdown"}},[this._v('\n# 加载 `<ui-load>`\n\n<doc-component-status page="load"></doc-component-status>\n\n[[[开始]]]\n\n定义一个加载，加载可以通过时间或`Promise`控制载入状态：\n\n- 时间：一定时间后载入内容，一般用来异步载入内容，减少首屏渲染压力。\n- Promise：一般用于异步加载内容，当内容获取后完成`Promise`显示内容。\n\n加载的内容为`ui-load`的内容。\n\n当内容未载入时，加载会在内容区域显示一个`loading`标识，当内容载入后会渲染内容。\n\n当内容载入失败时加载会提示用户载入失败。\n\n:::vue\n@name:使用\n---\n#demo\n>tpl\n<div style="width:400px;height:200px;background: #f6f6f6">\n    \x3c!-- 默认0.2秒后加载成功 --\x3e\n    <ui-load>0.2秒后加载成功</ui-load>\n</div>\n:::\n\n:::vue\n@name:5秒后加载成功\n---\n#demo\n>tpl\n<div style="width:400px;height:200px;background: #f6f6f6">\n    <ui-load :done-time="5000">5秒后加载成功</ui-load>\n</div>\n:::\n\n:::vue\n@name:使用Promise完成加载\n---\n#demo\n>tpl\n<div>\n    <div style="width:400px;height:200px;background: #f6f6f6">\n        <ui-load ref="demo1" :done-time="false">加载成功</ui-load>\n    </div>\n    <ui-link js="window.morning.findVM(\'demo1\').resolve();">完成加载</ui-link>\n</div>\n:::\n\n:::vue\n@name:使用Promise失败加载\n---\n#demo\n>tpl\n<div>\n    <div style="width:400px;height:200px;background: #f6f6f6">\n        <ui-load ref="demo2" :done-time="false">加载失败</ui-load>\n    </div>\n    <ui-link js="window.morning.findVM(\'demo2\').reject();">失败加载</ui-link>\n</div>\n:::\n\n:::vue\n@name:带提示的加载\n---\n#demo\n>tpl\n<div style="width:400px;height:200px;background: #f6f6f6">\n    <ui-load :done-time="false" note="加载中">加载成功</ui-load>\n</div>\n:::\n\n[[[形态]]]\n\n#### 支持\n\n|类型|支持|默认|\n|-|-|-|\n|尺寸|全部|`m`|\n|色彩|不支持|-|\n|状态|不支持|-|\n\n<a href="/guide/status.html">查看形态文档</a> / <a href="/design/color.html">查看色彩文档</a>\n\n:::vue\n@name:尺寸\n---\n#renderer\n>name\nsize-repeat\n>tpl\n<div style="width:400px;height:200px;background: #f6f6f6">\n    <ui-load size="{$sizeKey}" :done-time="false" note="{$sizeName}">加载成功</ui-load>\n</div>\n:::\n\n[[[配置]]]\n\n:::vue\n@name:done-time\n---\n#config\n>conf-desc\n多少时间(ms)后完成加载，若设为false则需要手动完成或拒绝加载。如果当前正处于加载中，`done-time`改变后需要下次加载生效。\n>conf-accept\n时间值(ms)<br>`false`\n>conf-type\nBoolean<br>Number\n>conf-default\n`200`\n---\n#demo\n>desc\n设定一段时间后加载完成。\n>tpl\n<div style="width:400px;height:200px;background: #f6f6f6">\n    <ui-load :done-time="5000">5秒后加载成功</ui-load>\n</div>\n:::\n\n:::vue\n@name:note\n---\n#config\n>conf-desc\n加载过程中的提示。\n>conf-accept\n提示字符串\n>conf-type\nString\n>conf-default\n`\'\'`\n---\n#demo\n>tpl\n<div style="width:400px;height:200px;background: #f6f6f6">\n    <ui-load :done-time="false" note="加载中">加载成功</ui-load>\n</div>\n:::\n\n:::vue\n@name:only-hidden\n---\n#config\n>conf-desc\n加载组件默认采用了`slot`这意味着未加载完成时里面的内容不会被渲染。<br>\n在某些场景下可能仅仅需要隐藏，可以使用此配置。\n>conf-accept\n`true`<br>`false`\n>conf-type\nBoolean\n>conf-default\n`false`\n---\n#demo\n>desc\n当反复加载时组件的uiid不会增加。\n>tpl\n<div>\n    <div style="width:400px;height:200px;background: #f6f6f6">\n        <ui-load ref="demo9" :done-time="500" :only-hidden="true">\n            <ui-lead ref="demo9lead">当反复加载时组件的uiid不会增加</ui-lead>\n        </ui-load>\n    </div>\n    <ui-btn @emit="$refs.demo9.reload()">再次加载</ui-btn>\n    <ui-btn @emit="alert($refs.demo9lead.uiid)">获取uiid</ui-btn>\n</div>\n---\n#demo\n>desc\n当反复加载时组件的uiid会改变。\n>tpl\n<div>\n    <div style="width:400px;height:200px;background: #f6f6f6">\n        <ui-load ref="demo10" :done-time="500" :only-hidden="false">\n            <ui-lead ref="demo10lead">当反复加载时标件的uiid会改变</ui-lead>\n        </ui-load>\n    </div>\n    <ui-btn @emit="$refs.demo10.reload()">再次加载</ui-btn>\n    <ui-btn @emit="alert($refs.demo10lead.uiid)">获取uiid</ui-btn>\n</div>\n:::\n\n[[[方法]]]\n\n:::vue\n@name:resolve()\n---\n#method\n>method-desc\n完成加载，一般在远程请求成功获取数据后调用。\n>method-return\n当前组件VM实例。\n---\n#demo\n>tpl\n<div>\n    <div style="width:400px;height:200px;background: #f6f6f6">\n        <ui-load ref="demo3" :done-time="false">加载成功</ui-load>\n    </div>\n    <ui-link js="window.morning.findVM(\'demo3\').resolve();">完成加载</ui-link>\n</div>\n:::\n\n:::vue\n@name:reject()\n---\n#method\n>method-desc\n失败加载，一般在远程请求失败后调用。\n>method-return\n当前组件VM实例。\n---\n#demo\n>tpl\n<div>\n    <div style="width:400px;height:200px;background: #f6f6f6">\n        <ui-load ref="demo4" :done-time="false">加载成功</ui-load>\n    </div>\n    <ui-link js="window.morning.findVM(\'demo4\').reject();">失败加载</ui-link>\n</div>\n:::\n\n:::vue\n@name:reload()\n---\n#method\n>method-desc\n重新进入加载状态，若组件仍在加载状态，此方法无效。\n>method-return\n当前组件VM实例。\n---\n#demo\n>tpl\n<div>\n    <div style="width:400px;height:200px;background: #f6f6f6">\n        <ui-load ref="demo5" :done-time="3000">加载成功</ui-load>\n    </div>\n    <ui-link js="window.morning.findVM(\'demo5\').reload();">重新加载</ui-link>\n</div>\n:::\n\n[[[事件]]]\n\n:::vue\n@name:emit\n---\n#event\n>event-desc\n当加载完毕时触发，不管加载是否成功都会触发此事件。\n---\n#demo\n>tpl\n<div>\n    <div style="width:400px;height:200px;background: #f6f6f6">\n        <ui-load ref="demo6" @emit="echo" :done-time="false">加载成功</ui-load>\n    </div>\n    <ui-link js="window.morning.findVM(\'demo6\').resolve();">触发emit</ui-link>\n</div>\n>script\n{\n    methods : {\n        echo : function () {\n            console.log(\'demo6.console1\', \'emit event!\');\n        }\n    }\n}\n:::\n\n:::vue\n@name:done\n---\n#event\n>event-desc\n当加载完毕并成功时触发。\n---\n#demo\n>tpl\n<div>\n    <div style="width:400px;height:200px;background: #f6f6f6">\n        <ui-load ref="demo7" @done="echo" :done-time="false">加载成功</ui-load>\n    </div>\n    <ui-link js="window.morning.findVM(\'demo7\').resolve();">触发done</ui-link>\n</div>\n>script\n{\n    methods : {\n        echo : function () {\n            console.log(\'demo7.console1\', \'done event!\');\n        }\n    }\n}\n:::\n\n:::vue\n@name:fail\n---\n#event\n>event-desc\n当加载完毕并成功时触发。\n---\n#demo\n>tpl\n<div>\n    <div style="width:400px;height:200px;background: #f6f6f6">\n        <ui-load ref="demo8" @fail="echo" :done-time="false">加载失败</ui-load>\n    </div>\n    <ui-link js="window.morning.findVM(\'demo8\').reject();">触发fail</ui-link>\n</div>\n>script\n{\n    methods : {\n        echo : function () {\n            console.log(\'demo8.console1\', \'fail event!\');\n        }\n    }\n}\n:::\n\n\n:::vue\n@name:生命周期事件\n---\n#event\n>event-desc\n组件的生命周期事件，详见:[基础/事件/生命周期事件](/guide/event.html#生命周期事件)。\n---\n#demo\n>tpl\n<div>\n    <div style="width:400px;height:200px;background: #f6f6f6">\n        <ui-load\n            ref="demoEventLifecycle"\n            v-show="show"\n            :done-time="false"\n            @created="echo(\'created\')"\n            @mounted="echo(\'mounted\')"\n            @before-update="echo(\'before-update\')"\n            @updated="echo(\'updated\')"\n            @before-destroy="echo(\'before-destroy\')"\n            @destroyed="echo(\'destroyed\')"\n        >{*text*}</ui-load>\n    </div>\n    <br><br>\n    <ui-link js="this.text=\'生命周期事件\';">触发update</ui-link>\n    <ui-link js="this.$refs[\'demoEventLifecycle\'].$destroy();">触发destroy</ui-link>\n</div>\n>script\n{\n    data : function () {\n        return {\n           text : \'加载\',\n           show : true\n        };\n    },\n    methods : {\n        echo : function (name) {\n            console.log(\'demoEventLifecycle.console1\', name + \' event!\');\n        }\n    }\n}\n:::\n\n[[[源码]]]\n\n<iframe src="/report/coverage/lib/components/load/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>\n\n')])])},t=[];i._withStripped=!0,o.d(e,"a",(function(){return i})),o.d(e,"b",(function(){return t}))},791:function(n,e,o){"use strict";var i=d(o(1)),t=d(o(792));function d(n){return n&&n.__esModule?n:{default:n}}new i.default({el:"#root",render:function(n){return n(t.default)}})},792:function(n,e,o){"use strict";o.r(e);var i=o(366),t=o(190);for(var d in t)"default"!==d&&function(n){o.d(e,n,(function(){return t[n]}))}(d);var r=o(0),u=Object(r.a)(t.default,i.a,i.b,!1,null,null,null);u.options.__file="src/docs/pages/component/load/index.vue",e.default=u.exports}});