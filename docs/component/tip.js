!function(n){function e(e){for(var i,r,p=e[0],a=e[1],u=e[2],m=0,c=[];m<p.length;m++)r=p[m],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&c.push(o[r][0]),o[r]=0;for(i in a)Object.prototype.hasOwnProperty.call(a,i)&&(n[i]=a[i]);for(s&&s(e);c.length;)c.shift()();return d.push.apply(d,u||[]),t()}function t(){for(var n,e=0;e<d.length;e++){for(var t=d[e],i=!0,p=1;p<t.length;p++){var a=t[p];0!==o[a]&&(i=!1)}i&&(d.splice(e--,1),n=r(r.s=t[0]))}return n}var i={},o={80:0},d=[];function r(e){if(i[e])return i[e].exports;var t=i[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=n,r.c=i,r.d=function(n,e,t){r.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},r.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},r.t=function(n,e){if(1&e&&(n=r(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var i in n)r.d(t,i,function(e){return n[e]}.bind(null,i));return t},r.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return r.d(e,"a",e),e},r.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},r.p="/";var p=window.webpackJsonp=window.webpackJsonp||[],a=p.push.bind(p);p.push=e,p=p.slice();for(var u=0;u<p.length;u++)e(p[u]);var s=a;d.push([730,0]),t()}({1:function(n,e){n.exports=Vue},128:function(n,e,t){"use strict";t.r(e);var i=t(129),o=t.n(i);for(var d in i)"default"!==d&&function(n){t.d(e,n,(function(){return i[n]}))}(d);e.default=o.a},129:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,o=t(2),d=(i=o)&&i.__esModule?i:{default:i};e.default={data:function(){return{page:"tip"}},components:{"doc-component":d.default}},n.exports=e.default},401:function(n,e,t){"use strict";var i=function(){var n=this.$createElement,e=this._self._c||n;return e("doc-component",{attrs:{page:this.page,hasPadding:!0}},[e("script",{attrs:{type:"text/markdown"}},[this._v('\n# 小提示 `<ui-tip>`\n\n<doc-component-status page="tip"></doc-component-status>\n\n[[[开始]]]\n\n定义一个小提示，为界面的元素提供简要说明。\n\n如果需要在小提示中显示更复杂的内容，可以使用[弹出框](/component/popover.html)。\n\n:::vue\n@name:使用\n---\n#demo\n>tpl\n<div>\n    <span id="demo1">鼠标悬浮显示小提示</span>\n    <ui-tip target="#demo1">提示内容</ui-tip>\n</div>\n:::\n\n:::vue\n@name:复杂内容\n---\n#demo\n>tpl\n<div>\n    <span id="demo2">鼠标悬浮显示小提示</span>\n    <ui-tip target="#demo2">\n        <p>标题</p>\n        <img width=\'160px\' height=\'160px\' src=\'http://morning-ui-image.test.upcdn.net/48fc612216b4fd2112a6bcd7d0db6eba.jpeg\'>\n    </ui-tip>\n\n    <br>\n\n    <span id="demo33">鼠标悬浮显示小提示</span>\n    <ui-tip target="#demo33" color="neutral-4">\n        <ui-h size="xxs" color="neutral-10">标题</ui-h>\n        <p>很长很长的内容很长很长的内容很长很长的内容很长很长的内容很长很长的内容很长很长的内容很长很长的内容很长很长的内容很长很长的内容很长很长的内容很长很长的内容很长很长的内容很长很长的内容很长很长的内容...</p>\n    </ui-tip>\n</div>\n:::\n\n:::vue\n@name:目标元素有title属性\n---\n#demo\n>desc\n如果目标元素具有`title`属性，且`ui-tip`没有设置内容，则会自动显示`title`内容。\n>tpl\n<div>\n    <span id="demo3" title="This is title">只有title属性, 显示title</span>\n    <ui-tip target="#demo3"></ui-tip>\n    \n    <br>\n\n    <span id="demo4" title="This is title">ui-tip中的内容, 优先显示</span>\n    <ui-tip target="#demo4">提示内容</ui-tip>\n</div>\n:::\n\n:::vue\n@name:无内容不显示\n---\n#demo\n>desc\n在小提示组件仅包含文本内容时，若没有内容也没有`title`属性，则小提示不会显示。\n<br><br>\n不显示的情况下事件也不会触发。\n>tpl\n<div>\n    <span id="demo5">如果没有提示内容也没有title则不显示</span>\n    <ui-tip target="#demo5"></ui-tip>\n</div>\n:::\n\n:::vue\n@name:同时绑定多个小提示\n---\n#demo\n>tpl\n<div>\n    <span id="demo25">多个不同方向小提示</span>\n    <ui-tip target="#demo25">小提示1</ui-tip>\n    <ui-tip target="#demo25" placement="bottom">小提示2</ui-tip>\n\n    <br><br>\n\n    <span id="demo26">多个不同位置小提示</span>\n    <ui-tip target="#demo26" offset="30px, 0">小提示1</ui-tip>\n    <ui-tip target="#demo26" offset="-30px, 0">小提示2</ui-tip>\n\n    <br><br>\n\n    <span id="demo27">多个不同时机显示的小提示</span>\n    <ui-tip target="#demo27" offset="30px, 0">小提示1</ui-tip>\n    <ui-tip target="#demo27" offset="-30px, 0" :trigger-in-delay="500">小提示2</ui-tip>\n</div>\n:::\n\n#### 边距自动调整\n\n在小提示组件仅包含文本内容时(不含任何HTML标签)，提示的上下内边距会自动缩小，左右内边距不会调整。若内容包含HTML则所有内边距都是一致的。\n\n这样的调整可以让小提示在显示文本内容时更紧凑。\n\n[[[形态]]]\n\n#### 支持\n\n|类型|支持|默认|\n|-|-|-|\n|尺寸|不支持|-|\n|色彩|全部(除`transparent`)|`theme`|\n|状态|不支持|-|\n\n<a href="/guide/status.html">查看形态文档</a> / <a href="/design/color.html">查看色彩文档</a>\n\n:::vue\n@layout:color\n---\n<span id="demo{$colorKey}"><ui-textcolor color="{$colorKey}">{$&colorName}小提示</ui-textcolor></span>\n<ui-tip color="{$colorKey}" target="#demo{$colorKey}">{$&colorName} 小提示</ui-tip>\n<br>\n:::\n\n[[[配置]]]\n\n:::vue\n@name:target\n---\n#config\n>conf-desc\n触发提示的目标元素，必填项。此配置改变后，若小提示处于显示状态，则会触发一次`hide`和`show`事件，以刷新小提示的位置。\n>conf-accept\n元素选择器([MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/Document_Object_Model/Locating_DOM_elements_using_selectors))\n>conf-type\nString<br>Null\n>conf-default\n`null`\n---\n#demo\n>desc\n此配置为必须项。\n>tpl\n<div>\n    <span id="demo6">鼠标悬浮显示小提示</span>\n    <ui-tip target="#demo6">提示内容</ui-tip>\n</div>\n:::\n\n:::vue\n@name:placement\n---\n#config\n>conf-desc\n提示框位置。\n>conf-accept\n`top`:上方<br>`bottom`:下方<br>`left`:左侧<br>`right`:右侧\n>conf-type\nString\n>conf-default\n`\'top\'`\n---\n#demo\n>tpl\n<div>\n    <span id="demo7">上方提示</span>\n    <ui-tip target="#demo7" placement="top">提示内容</ui-tip>\n\n    <br>\n\n    <span id="demo8">下方提示</span>\n    <ui-tip target="#demo8" placement="bottom">提示内容</ui-tip>\n\n    <br>\n\n    <span id="demo9">左侧提示</span>\n    <ui-tip target="#demo9" placement="left">提示内容</ui-tip>\n\n    <br>\n\n    <span id="demo10">右侧提示</span>\n    <ui-tip target="#demo10" placement="right">提示内容</ui-tip>\n</div>\n:::\n\n:::vue\n@name:offset\n---\n#config\n>conf-desc\n偏移量。\n>conf-accept\n左右偏移量(单位px/%), 上下偏移量(单位px/%)\n>conf-type\nString\n>conf-default\n`\'0, 0\'`\n---\n#demo\n>tpl\n<div>\n    <span id="demo11">鼠标悬浮显示小提示</span>\n    <ui-tip target="#demo11" offset="-30px, 10px">提示内容</ui-tip>\n</div>\n:::\n\n:::vue\n@name:trigger\n---\n#config\n>conf-desc\n触发方式(支持多触发方式，多个触发器之间用空格分开)。触发方式一旦改变，已有的触发状态都会被重置。\n<br><br>\n当处于`click`配置时，点击`target`元素会切换显示/隐藏状态，同时点击其他区域会隐藏小提示。\n>conf-accept\n`hover`：鼠标移入目标元素<br>`click`：鼠标点击目标元素<br>`rclick`：鼠标右键点击目标元素<br>`focus`：目标元素处于焦点状态<br>`method`：通过组件方法触发\n>conf-type\nString\n>conf-default\n`\'hover\'`\n---\n#demo\n>tpl\n<div>\n    <span id="demo12">点击显示小提示</span>\n    <ui-tip target="#demo12" trigger="click">提示内容</ui-tip>\n\n    <br>\n\n    <span id="demo13">鼠标悬浮或点击显示小提示</span>\n    <ui-tip target="#demo13" trigger="click hover">提示内容</ui-tip>\n</div>\n---\n#demo\n>desc\n鼠标右键点击显示的小提示。\n>tpl\n<div>\n    <span id="demo34">右键点击显示小提示</span>\n    <ui-tip target="#demo34" trigger="rclick">提示内容</ui-tip>\n\n    <br>\n\n    <span id="demo35">鼠标悬浮或右键点击显示小提示</span>\n    <ui-tip target="#demo35" trigger="rclick hover">提示内容</ui-tip>\n</div>\n---\n#demo\n>desc\n`trigger`也可以设置为`method`，这样只能通过组件方法来触发。\n>tpl\n<div>\n    <span id="demo22">目标文字</span>\n    <ui-tip target="#demo22" ref="demo22" trigger="method">提示内容</ui-tip>\n    \n    <br><br>\n\n    <ui-link js="morning.findVM(\'demo22\').show();">通过组件方法显示提示</ui-link><br>\n    <ui-link js="morning.findVM(\'demo22\').hide();">通过组件方法隐藏提示</ui-link>\n</div>\n:::\n\n:::vue\n@name:trigger-in-delay\n---\n#config\n>conf-desc\n目标触发提示时进行延迟。<br>此延迟仅在`trigger`为`hover`时生效。<br>当页面中使用较多`ui-tip`时使用一定的延迟，可以减少误触的情况，提升页面体验。\n>conf-accept\n延迟触发时间(ms)\n>conf-type\nNumber\n>conf-default\n`200`\n---\n#demo\n>desc\n鼠标移入元素时延迟300ms触发提示。\n>tpl\n<div>\n    <span id="demo24">鼠标悬浮显示小提示</span>\n    <ui-tip target="#demo24" :trigger-in-delay="300">提示内容</ui-tip>\n</div>\n---\n#demo\n>desc\n鼠标移入元素时立即触发提示。\n>tpl\n<div>\n    <span id="demo32">鼠标悬浮显示小提示</span>\n    <ui-tip target="#demo32" :trigger-in-delay="0">提示内容</ui-tip>\n</div>\n:::\n\n:::vue\n@name:auto-reverse\n---\n#config\n>conf-desc\n当小提示超出窗口时，自动反转小提示的方向，使其可以显示。\n>conf-accept\n`true`<br>`false`\n>conf-type\nBoolean\n>conf-default\n`true`\n---\n#demo\n>desc\n滚动页面的位置，使得下面的demo靠近窗口底部，当关闭`auto-reverse`后，小提示不会反转方向。\n>tpl\n<div>\n    <span id="demo20">鼠标悬浮显示小提示</span>\n    <ui-tip target="#demo20" placement="bottom" :auto-reverse="false" style="max-width:160px;">这是一段非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常长的提示内容</ui-tip>\n</div>\n---\n#demo\n>desc\n开启`auto-reverse`后，小提示会反转方向。\n>tpl\n<div>\n    <span id="demo21">鼠标悬浮显示小提示</span>\n    <ui-tip target="#demo21" placement="bottom" :auto-reverse="true" style="max-width:160px;">这是一段非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常长的提示内容</ui-tip>\n</div>\n:::\n\n:::vue\n@name:align\n---\n#config\n>conf-desc\n小提示对于触发元素的对齐。\n>conf-accept\n`start`:向左或向上对齐<br>`middle`:居中对齐<br>`end`:向右或向下对齐\n>conf-type\nString\n>conf-default\n`\'middle\'`\n---\n#demo\n>tpl\n<div>\n    <span id="demo28">向左对齐</span>\n    <ui-tip target="#demo28" align="start">提示内容</ui-tip>\n\n    <br>\n\n    <span id="demo29">向上对齐</span>\n    <ui-tip target="#demo29" align="start" placement="left">提示内容</ui-tip>\n\n    <br>\n\n    <span id="demo30">向右对齐</span>\n    <ui-tip target="#demo30" align="end">提示内容</ui-tip>\n\n    <br>\n\n    <span id="demo31">向下对齐</span>\n    <ui-tip target="#demo31" align="end" placement="left">提示内容</ui-tip>\n</div>\n:::\n\n[[[方法]]]\n\n:::vue\n@name:show()\n---\n#method\n>method-desc\n显示小提示。\n>method-return\n当前组件VM实例。\n---\n#demo\n>tpl\n<div>\n    <span id="demo14">显示小提示</span>\n    <ui-tip target="#demo14" ref="demo14">提示内容</ui-tip>\n    \n    <ui-link js="morning.findVM(\'demo14\').show();" onmouseout="morning.findVM(\'demo14\').hide();">显示小提示</ui-link>\n</div>\n:::\n\n:::vue\n@name:hide()\n---\n#method\n>method-desc\n隐藏小提示。\n>method-return\n当前组件VM实例。\n---\n#demo\n>tpl\n<div>\n    <span id="demo15">显示小提示</span>\n    <ui-tip trigger="method" target="#demo15" ref="demo15">提示内容</ui-tip>\n    \n    <ui-link js="morning.findVM(\'demo15\').hide();" onmouseenter="morning.findVM(\'demo15\').show();">隐藏小提示</ui-link>\n</div>\n:::\n\n:::vue\n@name:toggle([show])\n---\n#method\n>method-desc\n切换小提示显示状态。\n>method-args\n|show|YES|切换到显示或隐藏状态，不输入则切换到反向状态。|`undefined`<br>`true`<br>`false`|`Undefined`<br>`Boolean`|`undefined`|\n>method-return\n当前组件VM实例。\n---\n#demo\n>tpl\n<div>\n    <span id="demo16">显示小提示</span>\n    <ui-tip trigger="method" target="#demo16" ref="demo16">提示内容</ui-tip>\n    \n    <ui-link js="morning.findVM(\'demo16\').toggle();">切换到反向状态</ui-link>\n    <ui-link js="morning.findVM(\'demo16\').toggle(true);">显示小提示</ui-link>\n    <ui-link js="morning.findVM(\'demo16\').toggle(false);">隐藏小提示</ui-link>\n</div>\n:::\n\n:::vue\n@name:position()\n---\n#method\n>method-desc\n根据目标元素重新定位小提示的位置。\n>method-return\n当前组件VM实例。\n---\n#demo\n>tpl\n<div>\n    <span id="demo23" style="position: relative;">目标文字</span>\n    <ui-tip trigger="method" target="#demo23" ref="demo23">提示内容</ui-tip>\n\n    <br><br>\n    \n    <ui-link js="morning.findVM(\'demo23\').show();document.querySelector(\'#demo23\').style.left=\'100px\';">显示小提示，然后移动目标元素位置</ui-link><br>\n    <ui-link js="morning.findVM(\'demo23\').position();">重新定位小提示</ui-link>\n</div>\n:::\n\n[[[事件]]]\n\n:::vue\n@name:emit\n---\n#event\n>event-desc\n当小提示切换显示状态时触发。\n---\n#demo\n>tpl\n<div>\n    <span id="demo17">鼠标悬浮显示小提示</span>\n    <ui-tip target="#demo17" @emit="echo">提示内容</ui-tip>\n</div>\n>script\n{\n    methods : {\n        echo : function () {\n            console.log(\'demo17.console1\', \'emit event!\');\n        }\n    }\n}\n:::\n\n:::vue\n@name:show\n---\n#event\n>event-desc\n当小提示显示时触发。\n---\n#demo\n>tpl\n<div>\n    <span id="demo18">鼠标悬浮显示小提示</span>\n    <ui-tip target="#demo18" @show="echo">提示内容</ui-tip>\n</div>\n>script\n{\n    methods : {\n        echo : function () {\n            console.log(\'demo18.console1\', \'show event!\');\n        }\n    }\n}\n:::\n\n:::vue\n@name:hide\n---\n#event\n>event-desc\n当小提示显示时触发。\n---\n#demo\n>tpl\n<div>\n    <span id="demo19">鼠标悬浮显示小提示</span>\n    <ui-tip target="#demo19" @hide="echo">提示内容</ui-tip>\n</div>\n>script\n{\n    methods : {\n        echo : function () {\n            console.log(\'demo19.console1\', \'hide event!\');\n        }\n    }\n}\n:::\n\n:::vue\n@name:after-show\n---\n#event\n>event-desc\n当小提示完成显示动画时触发。\n---\n#demo\n>tpl\n<div>\n    <span id="demo36">鼠标悬浮显示小提示</span>\n    <ui-tip target="#demo36" @after-show="echo">提示内容</ui-tip>\n</div>\n>script\n{\n    methods : {\n        echo : function () {\n            console.log(\'demo36.console1\', \'after-show event!\');\n        }\n    }\n}\n:::\n\n:::vue\n@name:after-hide\n---\n#event\n>event-desc\n当小提示完成隐藏动画时触发。\n---\n#demo\n>tpl\n<div>\n    <span id="demo37">鼠标悬浮显示小提示</span>\n    <ui-tip target="#demo37" @after-hide="echo">提示内容</ui-tip>\n</div>\n>script\n{\n    methods : {\n        echo : function () {\n            console.log(\'demo37.console1\', \'after-hide event!\');\n        }\n    }\n}\n:::\n\n:::vue\n@name:生命周期事件\n---\n#event\n>event-desc\n组件的生命周期事件，详见:[基础/事件/生命周期事件](/guide/event.html#生命周期事件)。\n---\n#demo\n>tpl\n<div>\n    <span id="demoEventLifecycle">鼠标悬浮显示小提示</span>\n    <ui-tip\n        target="#demoEventLifecycle"\n        ref="demoEventLifecycle"\n        v-show="show"\n        @created="echo(\'created\')"\n        @mounted="echo(\'mounted\')"\n        @before-update="echo(\'before-update\')"\n        @updated="echo(\'updated\')"\n        @before-destroy="echo(\'before-destroy\')"\n        @destroyed="echo(\'destroyed\')"\n    >{*text*}</ui-tip>\n    <br><br>\n    <ui-link js="this.text=\'生命周期事件\';">触发update</ui-link>\n    <ui-link js="this.$refs[\'demoEventLifecycle\'].$destroy();">触发destroy</ui-link>\n</div>\n>script\n{\n    data : function () {\n        return {\n           text : \'小提示\',\n           show : true\n        };\n    },\n    methods : {\n        echo : function (name) {\n            console.log(\'demoEventLifecycle.console1\', name + \' event!\');\n        }\n    }\n}\n:::\n\n[[[源码]]]\n\n<iframe src="/report/coverage/lib/components/tip/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>\n\n')])])},o=[];i._withStripped=!0,t.d(e,"a",(function(){return i})),t.d(e,"b",(function(){return o}))},730:function(n,e,t){"use strict";var i=d(t(1)),o=d(t(731));function d(n){return n&&n.__esModule?n:{default:n}}new i.default({el:"#root",render:function(n){return n(o.default)}})},731:function(n,e,t){"use strict";t.r(e);var i=t(401),o=t(128);for(var d in o)"default"!==d&&function(n){t.d(e,n,(function(){return o[n]}))}(d);var r=t(0),p=Object(r.a)(o.default,i.a,i.b,!1,null,null,null);p.options.__file="src/docs/pages/component/tip/index.vue",e.default=p.exports}});