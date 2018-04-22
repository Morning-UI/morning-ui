!function(n){function e(e){for(var o,u,l=e[0],c=e[1],d=e[2],s=0,m=[];s<l.length;s++)u=l[s],r[u]&&m.push(r[u][0]),r[u]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(n[o]=c[o]);for(a&&a(e);m.length;)m.shift()();return i.push.apply(i,d||[]),t()}function t(){for(var n,e=0;e<i.length;e++){for(var t=i[e],o=!0,l=1;l<t.length;l++){var c=t[l];0!==r[c]&&(o=!1)}o&&(i.splice(e--,1),n=u(u.s=t[0]))}return n}var o={},r={8:0};var i=[];function u(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.m=n,u.c=o,u.d=function(n,e,t){u.o(n,e)||Object.defineProperty(n,e,{configurable:!1,enumerable:!0,get:t})},u.r=function(n){Object.defineProperty(n,"__esModule",{value:!0})},u.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return u.d(e,"a",e),e},u.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},u.p="/";var l=window.webpackJsonp=window.webpackJsonp||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var a=c;i.push([229,0]),t()}({1:function(n,e){n.exports=Vue},11:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o,r=t(2),i=(o=r)&&o.__esModule?o:{default:o};e.default={data:function(){return{page:"btn"}},components:{"doc-component":i.default}},n.exports=e.default},110:function(n,e,t){"use strict";t.d(e,"a",function(){return o}),t.d(e,"b",function(){return r});var o=function(){var n=this.$createElement,e=this._self._c||n;return e("doc-component",{attrs:{page:this.page,hasPadding:!0}},[e("script",{attrs:{type:"text/markdown"}},[this._v('\n# 按钮 `<ui-btn>`\n\n<doc-component-status page="btn"></doc-component-status>\n\n[[[开始]]]\n\n定义一个按钮，这是一个内联块元素。\n\n#### 使用\n\n:::democode/html\n<ui-btn>按钮</ui-btn>\n:::\n\n[[[形态]]]\n\n#### 支持\n\n|类型|支持|默认|\n|-|-|-|\n|尺寸|全部|`m`|\n|色彩|全部|`theme`|\n|状态|全部|`normal`|\n\n<a href="/guide/status.html">查看形态文档</a>\n\n#### 尺寸\n\n:::repeat/html\nsize\n---\n<ui-btn size="{$sizeKey}">{$&sizeName}</ui-btn>\n:::\n\n:::repeat/html\nsize\n---\n<ui-btn size="{$sizeKey}" loading>{$&sizeName}</ui-btn>\n:::\n\n#### 色彩\n\n:::preset/html\nstatusColor\n---\nuikey:btn\n:::\n\n#### 状态\n\n:::repeat/html\nstate|br:2|color:theme\nstate|br:2|color:feature\nstate|br:2|color:black\nstate|br:2|color:blue\nstate|br:2|color:silver\nstate|br:2|color:gray\n---\n<ui-btn state="{$stateKey}" color="{$colorKey}">{$&stateName}</ui-btn>\n:::\n\n[[[配置]]]\n\n|KEY|描述|接受值|值类型|默认值|\n|-|-|-|-|-|\n|[link](#link)|链接地址，若为空则不跳转|url地址|String|`\'\'`|\n|[js](#js)|点击后执行JS逻辑|JS代码|String|`\'\'`|\n|[locked](#locked)|锁定模式，用来防止组件在短时间内被重复触发。若设置一个时间数值(ms)，该组件在时间内只触发一次。也可设为`true`，触发后需要通过`unlock()`方法来解锁组件。|`true`<br>`false`<br>数值(单位ms)|Number<br>Boolean|`false`|\n|[new-tab](#new-tab)|是否在新窗口中打开链接|`true`<br>`false`|Boolean|`false`|\n\n#### link\n\n:::democode/html\n<ui-btn :link="\'https://www.google.com\'">链接</ui-btn>\n:::\n\n#### js\n\n:::democode/html\n<ui-btn :js="\'alert(\\\'hello.\\\')\'">执行JS</ui-btn>\n:::\n\n#### locked\n\n:::democode/html\n<ui-btn :locked="3000">3秒后自动解锁</ui-btn>\n:::\n\n:::democode/html\n<ui-btn ref="demo1" locked>手动解锁</ui-btn>\n<ui-link js="morning.findVM(\'demo1\').unlock();">解锁</ui-link>\n:::\n\n#### new-tab\n\n:::democode/html\n<ui-btn new-tab :link="\'https://www.google.com\'">新窗口打开链接</ui-btn>\n:::\n\n[[[方法]]]\n\n#### lock([time])\n\n锁定按钮，锁定后按钮不会触发`emit`事件。\n\n|KEY|可选|描述|接受值|值类型|默认值|\n|-|-|-|-|-|-|\n|time|YES|解锁的时间，单位ms。设置后组件将在解锁时间后自动解锁，不设置则需要调用`unlock()`方法解锁|`undefined`<br>数值(单位ms)|`Undefined`<br>`Number`|`undefined`|\n\n:::democode/html\n<ui-btn ref="demo2">按钮</ui-btn>\n<br><br> \n<ui-link js="morning.findVM(\'demo2\').lock();">锁定</ui-link>\n<ui-link js="morning.findVM(\'demo2\').lock(2000);">锁定2s</ui-link>\n<ui-link js="morning.findVM(\'demo2\').unlock();">解锁</ui-link>\n:::\n\n#### unlock()\n\n解锁按钮，解锁后按钮可触发`emit`事件。\n\n:::democode/html\n<ui-btn ref="demo3" locked>按钮</ui-btn>\n<br><br>\n<ui-link js="morning.findVM(\'demo3\').unlock();">解锁</ui-link>\n:::\n\n[[[事件]]]\n\n#### emit\n\n当按钮被点击时触发。\n\n:::vue/html\nnew Vue({\n    el : \'{$el}\',\n    template : \'{$template}\',\n    methods : {\n        echo : function () {\n            console.log(\'demo3.console1\', \'emit event!\');\n        }\n    }\n});\n---\n<div>\n    <ui-btn @emit="echo">点击触发emit事件</ui-btn>\n</div>\n:::\n\n#### 生命周期事件\n\n:::vue/html\nwindow.demoEventLifecycle = new Vue({\n    el : \'{$el}\',\n    template : \'{$template}\',\n    data : function () {\n        return {\n           text : \'按钮\',\n           show : true\n        };\n    },\n    methods : {\n        echo : function (name) {\n            console.log(\'demoEventLifecycle.console1\', name + \' event!\');\n        }\n    }\n});\n---\n<div>\n    <ui-btn\n        ref="demoEventLifecycle"\n        v-show="show"\n        @created="echo(\'created\')"\n        @mounted="echo(\'mounted\')"\n        @before-update="echo(\'before-update\')"\n        @updated="echo(\'updated\')"\n        @before-destroy="echo(\'before-destroy\')"\n        @destroyed="echo(\'destroyed\')"\n    >{*text*}</ui-btn>\n\n    <br><br>\n\n    <ui-link js="window.demoEventLifecycle.text=\'生命周期事件\';">触发update</ui-link>\n    <ui-link js="morning.findVM(\'demoEventLifecycle\').$destroy();">触发destroy</ui-link>\n</div>\n:::\n\n[[[源码]]]\n\n<iframe src="/report/coverage/lib/components/btn/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>\n\n')])])},r=[];o._withStripped=!0},228:function(n,e,t){"use strict";t.r(e);var o=t(11),r=t.n(o);for(var i in o)"default"!==i&&function(n){t.d(e,n,function(){return o[n]})}(i);var u=t(110),l=t(0),c=!1;var d=function(n){c||t(590)},a=Object(l.a)(r.a,u.a,u.b,!1,d,null,null);a.options.__file="src/docs/pages/component/btn/index.vue",e.default=a.exports},229:function(n,e,t){"use strict";var o=i(t(1)),r=i(t(228));function i(n){return n&&n.__esModule?n:{default:n}}new o.default({el:"#root",render:function(n){return n(r.default)}})},590:function(n,e){}});