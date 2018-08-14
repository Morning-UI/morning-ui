!function(n){function e(e){for(var i,d,p=e[0],a=e[1],u=e[2],l=0,s=[];l<p.length;l++)d=p[l],o[d]&&s.push(o[d][0]),o[d]=0;for(i in a)Object.prototype.hasOwnProperty.call(a,i)&&(n[i]=a[i]);for(m&&m(e);s.length;)s.shift()();return r.push.apply(r,u||[]),t()}function t(){for(var n,e=0;e<r.length;e++){for(var t=r[e],i=!0,p=1;p<t.length;p++){var a=t[p];0!==o[a]&&(i=!1)}i&&(r.splice(e--,1),n=d(d.s=t[0]))}return n}var i={},o={72:0};var r=[];function d(e){if(i[e])return i[e].exports;var t=i[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,d),t.l=!0,t.exports}d.m=n,d.c=i,d.d=function(n,e,t){d.o(n,e)||Object.defineProperty(n,e,{configurable:!1,enumerable:!0,get:t})},d.r=function(n){Object.defineProperty(n,"__esModule",{value:!0})},d.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return d.d(e,"a",e),e},d.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},d.p="/";var p=window.webpackJsonp=window.webpackJsonp||[],a=p.push.bind(p);p.push=e,p=p.slice();for(var u=0;u<p.length;u++)e(p[u]);var m=a;r.push([389,0]),t()}({1:function(n,e){n.exports=Vue},190:function(n,e,t){"use strict";t.d(e,"a",function(){return i}),t.d(e,"b",function(){return o});var i=function(){var n=this.$createElement,e=this._self._c||n;return e("doc-component",{attrs:{page:this.page,hasPadding:!0}},[e("script",{attrs:{type:"text/markdown"}},[this._v('\n# 小提示 `<ui-tip>`\n\n<doc-component-status page="tip"></doc-component-status>\n\n[[[开始]]]\n\n定义一个小提示，为界面的元素提供简要说明。\n\n#### 使用\n\n:::democode/html\n<span id="demo1">鼠标悬浮显示小提示</span>\n<ui-tip target="#demo1">提示内容</ui-tip>\n:::\n\n#### 复杂内容\n\n:::democode/html\n<span id="demo2">鼠标悬浮显示小提示</span>\n<ui-tip target="#demo2">\n    <p>标题</p>\n    <img width=\'160px\' height=\'160px\' src=\'http://morning-ui-image.test.upcdn.net/48fc612216b4fd2112a6bcd7d0db6eba.jpeg\'>\n</ui-tip>\n:::\n\n#### 目标元素有title属性\n\n如果目标元素具有`title`属性，且`ui-tip`没有设置内容，则会自动显示`title`内容。\n\n:::democode/html\n<span id="demo3" title="This is title">只有title属性, 显示title</span>\n<ui-tip target="#demo3"></ui-tip>\n\n<br>\n\n<span id="demo4" title="This is title">ui-tip中的内容, 优先显示</span>\n<ui-tip target="#demo4">提示内容</ui-tip>\n:::\n\n#### 无内容不显示\n\n在小提示组件仅包含文本内容时，若没有内容也没有`title`属性，则小提示不会显示。\n\n不显示的情况下事件也不会触发。\n\n:::democode/html\n<span id="demo5">如果没有提示内容也没有title则不显示</span>\n<ui-tip target="#demo5"></ui-tip>\n:::\n\n#### 同时绑定多个小提示\n\n:::democode/html\n<span id="demo25">多个不同方向小提示</span>\n<ui-tip target="#demo25">小提示1</ui-tip>\n<ui-tip target="#demo25" placement="bottom">小提示2</ui-tip>\n\n<br><br>\n\n<span id="demo26">多个不同位置小提示</span>\n<ui-tip target="#demo26" offset="0 30px">小提示1</ui-tip>\n<ui-tip target="#demo26" offset="0 -30px">小提示2</ui-tip>\n\n<br><br>\n\n<span id="demo27">多个不同时机显示的小提示</span>\n<ui-tip target="#demo27" offset="0 30px">小提示1</ui-tip>\n<ui-tip target="#demo27" offset="0 -30px" :trigger-in-delay="500">小提示2</ui-tip>\n:::\n\n\n#### 边距自动调整\n\n在小提示组件仅包含文本内容时(不含任何HTML标签)，提示的上下内边距会自动缩小，左右内边距不会调整。若内容包含HTML则所有内边距都是一致的。\n\n这样的调整可以让小提示在显示文本内容时更紧凑。\n\n[[[形态]]]\n\n#### 支持\n\n|类型|支持|默认|\n|-|-|-|\n|尺寸|不支持|-|\n|色彩|全部|`theme`|\n|状态|不支持|-|\n\n<a href="/guide/status.html">查看形态文档</a>\n\n#### 色彩\n\n:::repeat/html\ncolor:theme\ncolor:feature\ncolor:black\ncolor:blue\ncolor:silver\ncolor:gray\n---\n<span id="demo{$colorKey}"><ui-textcolor color="{$colorKey}">{$&colorName}小提示</ui-textcolor></span>\n<ui-tip color="{$colorKey}" target="#demo{$colorKey}">{$&colorName} 小提示</ui-tip>\n<br>\n:::\n\n[[[配置]]]\n\n|KEY|描述|接受值|值类型|默认值|\n|-|-|-|-|-|\n|[target](#target)|触发提示的目标元素，必填项。此配置改变后，若小提示处于显示状态，则会触发一次`hide`和`show`事件，以刷新小提示的位置。|元素选择器([MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/Document_Object_Model/Locating_DOM_elements_using_selectors)|String<br>Null|`null`|\n|[placement](#placement)|提示框位置|`top`:上方<br>`bottom`:下方<br>`left`:左侧<br>`right`:右侧|String|`\'top\'`|\n|[offset](#offset)|偏移量|上下偏移量(单位px/%) 左右偏移量(单位px/%)|String|`\'0 0\'`|\n|[trigger](#trigger)|触发方式(支持多触发方式，多个触发器之间用空格分开)。触发方式一旦改变，已有的触发状态都会被重置。|`hover`：鼠标移入目标元素<br>`click`：鼠标点击目标元素<br>`focus`：目标元素处于焦点状态<br>`method`：通过组件方法触发|String|`\'hover\'`|\n|[trigger-in-delay](#trigger-in-delay)|目标触发提示时进行延迟。<br>此延迟仅在`trigger`为`hover`时生效。<br>当页面中使用较多`ui-tip`时使用一定的延迟，可以减少误触的情况，提升页面体验。|延迟触发时间(ms)|Number|`200`|\n|[auto-reverse](#auto-reverse)|当小提示超出窗口时，自动反转小提示的方向，使其可以显示。|`true`<br>`false`|Boolean|`true`|\n\n#### target\n\n必填项\n\n:::democode/html\n<span id="demo6">鼠标悬浮显示小提示</span>\n<ui-tip target="#demo6">提示内容</ui-tip>\n:::\n\n#### placement\n\n:::democode/html\n<span id="demo7">上方提示</span>\n<ui-tip target="#demo7" placement="top">提示内容</ui-tip>\n\n<br>\n\n<span id="demo8">下方提示</span>\n<ui-tip target="#demo8" placement="bottom">提示内容</ui-tip>\n\n<br>\n\n<span id="demo9">左侧提示</span>\n<ui-tip target="#demo9" placement="left">提示内容</ui-tip>\n\n<br>\n\n<span id="demo10">右侧提示</span>\n<ui-tip target="#demo10" placement="right">提示内容</ui-tip>\n:::\n\n#### offset\n\n:::democode/html\n<span id="demo11">鼠标悬浮显示小提示</span>\n<ui-tip target="#demo11" offset="10px -30px">提示内容</ui-tip>\n:::\n\n#### trigger\n\n:::democode/html\n<span id="demo12">点击显示小提示</span>\n<ui-tip target="#demo12" trigger="click">提示内容</ui-tip>\n\n<br>\n\n<span id="demo13">鼠标悬浮或点击显示小提示</span>\n<ui-tip target="#demo13" trigger="click hover">提示内容</ui-tip>\n:::\n\n`trigger`也可以设置为`method`，这样只能通过组件方法来触发：\n\n:::democode/html\n<span id="demo22">目标文字</span>\n<ui-tip target="#demo22" ref="demo22" trigger="click">提示内容</ui-tip>\n\n<br><br>\n\n<ui-link js="morning.findVM(\'demo22\').show();">通过组件方法显示提示</ui-link><br>\n<ui-link js="morning.findVM(\'demo22\').hide();">通过组件方法隐藏提示</ui-link>\n:::\n\n#### trigger-in-delay\n\n鼠标移入元素时延迟300ms触发提示：\n\n:::democode/html\n<span id="demo24">鼠标悬浮显示小提示</span>\n<ui-tip target="#demo24" :trigger-in-delay="300">提示内容</ui-tip>\n:::\n\n鼠标移入元素时立即触发提示：\n\n:::democode/html\n<span id="demo24">鼠标悬浮显示小提示</span>\n<ui-tip target="#demo24" :trigger-in-delay="0">提示内容</ui-tip>\n:::\n\n#### auto-reverse\n\n滚动页面的位置，使得下面的demo靠近窗口底部，当关闭`auto-reverse`后，小提示不会反转方向：\n\n:::democode/html\n<span id="demo20">鼠标悬浮显示小提示</span>\n<ui-tip target="#demo20" placement="bottom" :auto-reverse="false">这是一段非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常长的提示内容</ui-tip>\n:::\n\n开启`auto-reverse`后，小提示会反转方向：\n\n:::democode/html\n<span id="demo21">鼠标悬浮显示小提示</span>\n<ui-tip target="#demo21" placement="bottom" :auto-reverse="true">这是一段非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常长的提示内容</ui-tip>\n:::\n\n[[[方法]]]\n\n#### show()\n\n显示小提示。\n\n:::democode/html\n<span id="demo14">鼠标悬浮显示小提示</span>\n<ui-tip target="#demo14" ref="demo14">提示内容</ui-tip>\n\n<ui-link js="morning.findVM(\'demo14\').show();" onmouseout="morning.findVM(\'demo14\').hide();">显示小提示</ui-link>\n:::\n\n#### hide()\n\n隐藏小提示。\n\n:::democode/html\n<span id="demo15">鼠标悬浮显示小提示</span>\n<ui-tip target="#demo15" ref="demo15">提示内容</ui-tip>\n\n<ui-link js="morning.findVM(\'demo15\').hide();" onmouseenter="morning.findVM(\'demo15\').show();">隐藏小提示</ui-link>\n:::\n\n#### toggle()\n\n切换小提示显示状态。\n\n:::democode/html\n<span id="demo16">鼠标悬浮显示小提示</span>\n<ui-tip target="#demo16" ref="demo16">提示内容</ui-tip>\n\n<ui-link js="morning.findVM(\'demo16\').toggle();">切换小提示</ui-link>\n:::\n\n#### position()\n\n根据目标元素重新定位小提示的位置。\n\n:::democode/html\n<span id="demo23" style="position: relative;">目标文字</span>\n<ui-tip target="#demo23" ref="demo23">提示内容</ui-tip>\n\n<br><br>\n\n<ui-link js="morning.findVM(\'demo23\').show();document.querySelector(\'#demo23\').style.left=\'100px\';">显示小提示，然后移动目标元素位置</ui-link><br>\n<ui-link js="morning.findVM(\'demo23\').position();">重新定位小提示</ui-link>\n:::\n\n[[[事件]]]\n\n#### emit\n\n当小提示切换显示状态时时触发。\n\n:::vue/html\nnew Vue({\n    el : \'{$el}\',\n    template : \'{$template}\',\n    methods : {\n        echo : function () {\n            console.log(\'demo17.console1\', \'emit event!\');\n        }\n    }\n});\n---\n<div>\n    <span id="demo17">鼠标悬浮显示小提示</span>\n    <ui-tip target="#demo17" @emit="echo">提示内容</ui-tip>\n</div>\n:::\n\n#### show\n\n当小提示显示时触发。\n\n:::vue/html\nnew Vue({\n    el : \'{$el}\',\n    template : \'{$template}\',\n    methods : {\n        echo : function () {\n            console.log(\'demo18.console1\', \'show event!\');\n        }\n    }\n});\n---\n<div>\n    <span id="demo18">鼠标悬浮显示小提示</span>\n    <ui-tip target="#demo18" @show="echo">提示内容</ui-tip>\n</div>\n:::\n\n#### hide\n\n当小提示显示时触发。\n\n:::vue/html\nnew Vue({\n    el : \'{$el}\',\n    template : \'{$template}\',\n    methods : {\n        echo : function () {\n            console.log(\'demo19.console1\', \'hide event!\');\n        }\n    }\n});\n---\n<div>\n    <span id="demo19">鼠标悬浮显示小提示</span>\n    <ui-tip target="#demo19" @hide="echo">提示内容</ui-tip>\n</div>\n:::\n\n#### 生命周期事件\n\n:::vue/html\nwindow.demoEventLifecycle = new Vue({\n    el : \'{$el}\',\n    template : \'{$template}\',\n    data : function () {\n        return {\n           text : \'小提示\',\n           show : true\n        };\n    },\n    methods : {\n        echo : function (name) {\n            console.log(\'demoEventLifecycle.console1\', `${name} event!`);\n        }\n    }\n});\n---\n<div>\n    <span id="demoEventLifecycle">鼠标悬浮显示小提示</span>\n    <ui-tip\n        target="#demoEventLifecycle"\n        ref="demoEventLifecycle"\n        v-show="show"\n        @created="echo(\'created\')"\n        @mounted="echo(\'mounted\')"\n        @before-update="echo(\'before-update\')"\n        @updated="echo(\'updated\')"\n        @before-destroy="echo(\'before-destroy\')"\n        @destroyed="echo(\'destroyed\')"\n    >{*text*}</ui-tip>\n\n    <br><br>\n\n    <ui-link js="window.demoEventLifecycle.text=\'生命周期事件\';">触发update</ui-link>\n    <ui-link js="morning.findVM(\'demoEventLifecycle\').$destroy();">触发destroy</ui-link>\n</div>\n:::\n\n[[[源码]]]\n\n<iframe src="/report/coverage/lib/components/tip/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>\n\n')])])},o=[];i._withStripped=!0},388:function(n,e,t){"use strict";t.r(e);var i=t(75),o=t.n(i);for(var r in i)"default"!==r&&function(n){t.d(e,n,function(){return i[n]})}(r);var d=t(190),p=t(0),a=!1;var u=function(n){a||t(782)},m=Object(p.a)(o.a,d.a,d.b,!1,u,null,null);m.options.__file="src/docs/pages/component/tip/index.vue",e.default=m.exports},389:function(n,e,t){"use strict";var i=r(t(1)),o=r(t(388));function r(n){return n&&n.__esModule?n:{default:n}}new i.default({el:"#root",render:function(n){return n(o.default)}})},75:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,o=t(2),r=(i=o)&&i.__esModule?i:{default:i};e.default={data:function(){return{page:"tip"}},components:{"doc-component":r.default}},n.exports=e.default},782:function(n,e){}});