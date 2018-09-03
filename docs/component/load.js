!function(n){function e(e){for(var t,l,r=e[0],u=e[1],a=e[2],c=0,s=[];c<r.length;c++)l=r[c],i[l]&&s.push(i[l][0]),i[l]=0;for(t in u)Object.prototype.hasOwnProperty.call(u,t)&&(n[t]=u[t]);for(f&&f(e);s.length;)s.shift()();return d.push.apply(d,a||[]),o()}function o(){for(var n,e=0;e<d.length;e++){for(var o=d[e],t=!0,r=1;r<o.length;r++){var u=o[r];0!==i[u]&&(t=!1)}t&&(d.splice(e--,1),n=l(l.s=o[0]))}return n}var t={},i={43:0};var d=[];function l(e){if(t[e])return t[e].exports;var o=t[e]={i:e,l:!1,exports:{}};return n[e].call(o.exports,o,o.exports,l),o.l=!0,o.exports}l.m=n,l.c=t,l.d=function(n,e,o){l.o(n,e)||Object.defineProperty(n,e,{configurable:!1,enumerable:!0,get:o})},l.r=function(n){Object.defineProperty(n,"__esModule",{value:!0})},l.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return l.d(e,"a",e),e},l.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},l.p="/";var r=window.webpackJsonp=window.webpackJsonp||[],u=r.push.bind(r);r.push=e,r=r.slice();for(var a=0;a<r.length;a++)e(r[a]);var f=u;d.push([335,0]),o()}({1:function(n,e){n.exports=Vue},163:function(n,e,o){"use strict";o.d(e,"a",function(){return t}),o.d(e,"b",function(){return i});var t=function(){var n=this.$createElement,e=this._self._c||n;return e("doc-component",{attrs:{page:this.page,hasPadding:!0}},[e("script",{attrs:{type:"text/markdown"}},[this._v('\n# 加载 `<ui-load>`\n\n<doc-component-status page="load"></doc-component-status>\n\n[[[开始]]]\n\n定义一个加载，加载可以通过时间或`Promise`控制载入状态：\n\n- 时间：一定时间后载入内容，一般用来异步载入内容，减少首屏渲染压力。\n- Promise：一般用于异步加载内容，当内容获取后完成`Promise`显示内容。\n\n加载的内容为`ui-load`的内容。\n\n当内容未载入时，加载会在内容区域显示一个`loading`标识，当内容载入后会渲染内容。\n\n当内容载入失败时加载会提示用户载入失败。\n\n#### 使用\n\n:::democode/html\n<div style="width:400px;height:200px;background: #f6f6f6">\n    \x3c!-- 默认0.2秒后加载成功 --\x3e\n    <ui-load>0.2秒后加载成功</ui-load>\n</div>\n:::\n\n#### 5秒后加载成功\n\n:::democode/html\n<div style="width:400px;height:200px;background: #f6f6f6">\n    <ui-load :time="5000">5秒后加载成功</ui-load>\n</div>\n:::\n\n#### 使用Promise完成加载\n\n:::democode/html\n<div style="width:400px;height:200px;background: #f6f6f6">\n    <ui-load ref="demo1" :time="false">加载成功</ui-load>\n</div>\n<ui-link js="window.morning.findVM(\'demo1\').resolve();">完成加载</ui-link>\n:::\n\n#### 使用Promise失败加载\n\n:::democode/html\n<div style="width:400px;height:200px;background: #f6f6f6">\n    <ui-load ref="demo2" :time="false">加载失败</ui-load>\n</div>\n<ui-link js="window.morning.findVM(\'demo2\').reject();">失败加载</ui-link>\n:::\n\n#### 带提示的加载\n\n:::democode/html\n<div style="width:400px;height:200px;background: #f6f6f6">\n    <ui-load :time="false" note="加载中">加载成功</ui-load>\n</div>\n:::\n\n[[[形态]]]\n\n#### 支持\n\n|类型|支持|默认|\n|-|-|-|\n|尺寸|全部|`m`|\n|色彩|不支持|-|\n|状态|不支持|-|\n\n<a href="/guide/status.html">查看形态文档</a>\n\n\n#### 尺寸\n\n:::repeat/html\nsize\n---\n<div style="width:400px;height:200px;background: #f6f6f6">\n    <ui-load size="{$sizeKey}" :time="false" note="{$sizeName}">加载成功</ui-load>\n</div>\n:::\n\n[[[配置]]]\n\n|KEY|描述|接受值|值类型|默认值|\n|-|-|-|-|-|\n|[time](#time)|多少时间(ms)后完成加载，若设为false则需要手动完成或拒绝加载。如果当前正处于加载中，`time`改变后需要下次加载生效。|时间值(ms)<br>`false`|Boolean<br>Number|`200`|\n|[note](#note)|加载过程中的提示|提示字符串|String|`\'\'`|\n\n#### time\n\n设定一段时间后加载完成。\n\n:::democode/html\n<div style="width:400px;height:200px;background: #f6f6f6">\n    <ui-load :time="5000">5秒后加载成功</ui-load>\n</div>\n:::\n\n#### note\n\n:::democode/html\n<div style="width:400px;height:200px;background: #f6f6f6">\n    <ui-load :time="false" note="加载中">加载成功</ui-load>\n</div>\n:::\n\n[[[方法]]]\n\n#### resolve()\n\n完成加载，一般在远程请求成功获取数据后调用。\n\n:::democode/html\n<div style="width:400px;height:200px;background: #f6f6f6">\n    <ui-load ref="demo3" :time="false">加载成功</ui-load>\n</div>\n<ui-link js="window.morning.findVM(\'demo3\').resolve();">完成加载</ui-link>\n:::\n\n#### reject()\n\n失败加载，一般在远程请求失败后调用。\n\n:::democode/html\n<div style="width:400px;height:200px;background: #f6f6f6">\n    <ui-load ref="demo4" :time="false">加载成功</ui-load>\n</div>\n<ui-link js="window.morning.findVM(\'demo4\').reject();">失败加载</ui-link>\n:::\n\n#### reload()\n\n重新进入加载状态，若组件仍在加载状态，此方法无效。\n\n:::democode/html\n<div style="width:400px;height:200px;background: #f6f6f6">\n    <ui-load ref="demo5" :time="3000">加载成功</ui-load>\n</div>\n<ui-link js="window.morning.findVM(\'demo5\').reload();">重新加载</ui-link>\n:::\n\n[[[事件]]]\n\n#### emit\n\n当加载完毕时触发，不管加载是否成功都会触发此事件。\n\n:::vue/html\nnew Vue({\n    el : \'{$el}\',\n    template : \'{$template}\',\n    methods : {\n        echo : function () {\n            console.log(\'demo6.console1\', \'emit event!\');\n        }\n    }\n});\n---\n<div>\n    <div style="width:400px;height:200px;background: #f6f6f6">\n        <ui-load ref="demo6" @emit="echo" :time="false">加载成功</ui-load>\n    </div>\n    <ui-link js="window.morning.findVM(\'demo6\').resolve();">触发emit</ui-link>\n</div>\n:::\n\n#### done\n\n当加载完毕并成功时触发。\n\n:::vue/html\nnew Vue({\n    el : \'{$el}\',\n    template : \'{$template}\',\n    methods : {\n        echo : function () {\n            console.log(\'demo7.console1\', \'done event!\');\n        }\n    }\n});\n---\n<div>\n    <div style="width:400px;height:200px;background: #f6f6f6">\n        <ui-load ref="demo7" @done="echo" :time="false">加载成功</ui-load>\n    </div>\n    <ui-link js="window.morning.findVM(\'demo7\').resolve();">触发done</ui-link>\n</div>\n:::\n\n#### fail\n\n当加载完毕并成功时触发。\n\n:::vue/html\nnew Vue({\n    el : \'{$el}\',\n    template : \'{$template}\',\n    methods : {\n        echo : function () {\n            console.log(\'demo8.console1\', \'fail event!\');\n        }\n    }\n});\n---\n<div>\n    <div style="width:400px;height:200px;background: #f6f6f6">\n        <ui-load ref="demo8" @fail="echo" :time="false">加载失败</ui-load>\n    </div>\n    <ui-link js="window.morning.findVM(\'demo8\').reject();">触发fail</ui-link>\n</div>\n:::\n\n#### 生命周期事件\n\n:::vue/html\nwindow.demoEventLifecycle = new Vue({\n    el : \'{$el}\',\n    template : \'{$template}\',\n    data : function () {\n        return {\n           text : \'加载\',\n           show : true\n        };\n    },\n    methods : {\n        echo : function (name) {\n            console.log(\'demoEventLifecycle.console1\', `${name} event!`);\n        }\n    }\n});\n---\n<div>\n    <ui-load\n        ref="demoEventLifecycle"\n        v-show="show"\n        @created="echo(\'created\')"\n        @mounted="echo(\'mounted\')"\n        @before-update="echo(\'before-update\')"\n        @updated="echo(\'updated\')"\n        @before-destroy="echo(\'before-destroy\')"\n        @destroyed="echo(\'destroyed\')"\n    >{*text*}</ui-load>\n\n    <br><br>\n\n    <ui-link js="window.demoEventLifecycle.text=\'生命周期事件\';">触发update</ui-link>\n    <ui-link js="morning.findVM(\'demoEventLifecycle\').$destroy();">触发destroy</ui-link>\n</div>\n:::\n\n[[[源码]]]\n\n<iframe src="/report/coverage/lib/components/load/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>\n\n')])])},i=[];t._withStripped=!0},334:function(n,e,o){"use strict";o.r(e);var t=o(46),i=o.n(t);for(var d in t)"default"!==d&&function(n){o.d(e,n,function(){return t[n]})}(d);var l=o(163),r=o(0),u=!1;var a=function(n){u||o(733)},f=Object(r.a)(i.a,l.a,l.b,!1,a,null,null);f.options.__file="src/docs/pages/component/load/index.vue",e.default=f.exports},335:function(n,e,o){"use strict";var t=d(o(1)),i=d(o(334));function d(n){return n&&n.__esModule?n:{default:n}}new t.default({el:"#root",render:function(n){return n(i.default)}})},46:function(n,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t,i=o(2),d=(t=i)&&t.__esModule?t:{default:t};e.default={data:function(){return{page:"load"}},components:{"doc-component":d.default}},n.exports=e.default},733:function(n,e){}});