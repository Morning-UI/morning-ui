!function(n){function e(e){for(var p,r,d=e[0],u=e[1],a=e[2],c=0,m=[];c<d.length;c++)r=d[c],t[r]&&m.push(t[r][0]),t[r]=0;for(p in u)Object.prototype.hasOwnProperty.call(u,p)&&(n[p]=u[p]);for(s&&s(e);m.length;)m.shift()();return i.push.apply(i,a||[]),o()}function o(){for(var n,e=0;e<i.length;e++){for(var o=i[e],p=!0,d=1;d<o.length;d++){var u=o[d];0!==t[u]&&(p=!1)}p&&(i.splice(e--,1),n=r(r.s=o[0]))}return n}var p={},t={58:0},i=[];function r(e){if(p[e])return p[e].exports;var o=p[e]={i:e,l:!1,exports:{}};return n[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=n,r.c=p,r.d=function(n,e,o){r.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:o})},r.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},r.t=function(n,e){if(1&e&&(n=r(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var p in n)r.d(o,p,function(e){return n[e]}.bind(null,p));return o},r.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return r.d(e,"a",e),e},r.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},r.p="/";var d=window.webpackJsonp=window.webpackJsonp||[],u=d.push.bind(d);d.push=e,d=d.slice();for(var a=0;a<d.length;a++)e(d[a]);var s=u;i.push([722,0]),o()}({1:function(n,e){n.exports=Vue},140:function(n,e,o){"use strict";o.r(e);var p=o(141),t=o.n(p);for(var i in p)"default"!==i&&function(n){o.d(e,n,function(){return p[n]})}(i);e.default=t.a},141:function(n,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var p,t=o(2),i=(p=t)&&p.__esModule?p:{default:p};e.default={data:function(){return{page:"popover"}},components:{"doc-component":i.default}},n.exports=e.default},357:function(n,e,o){"use strict";var p=function(){var n=this.$createElement,e=this._self._c||n;return e("doc-component",{attrs:{page:this.page,hasPadding:!0}},[e("script",{attrs:{type:"text/markdown"}},[this._v('\n# 弹出框 `<ui-popover>`\n\n<doc-component-status page="popover"></doc-component-status>\n\n[[[开始]]]\n\n定义一个弹出框，弹出框用于在用户交互时显示更多内容。\n\n如果仅展示简单的内容，比如一句话或一张图可以使用[小提示](/component/tip.html)。\n\n而需要展现更多内容时，可以使用[模拟盒](/component/dialog.html)。\n\n:::vue\n@name:使用\n---\n#demo\n>tpl\n<div>\n    <span id="demo1">鼠标悬浮显示弹出框</span>\n    <ui-popover target="#demo1">\n        <p>内容内容内容内容内容1...</p>\n        <p>内容内容内容内容2...</p>\n        <p>内容内容内容3...</p>\n    </ui-popover>\n</div>\n:::\n\n:::vue\n@name:带标题的弹出框\n---\n#demo\n>desc\n弹出框支持标题`slot`，可以通过`slot="title"`来指定标题部分。\n>tpl\n<div>\n    <span id="demo2">鼠标悬浮显示弹出框</span>\n    <ui-popover target="#demo2">\n        <b slot="title">标题</b>\n        <p>内容内容内容内容内容1...</p>\n        <p>内容内容内容内容2...</p>\n        <p>内容内容内容3...</p>\n    </ui-popover>\n</div>\n---\n#demo\n>desc\n也可以通过标题`slot`来自定义复杂的标题部分。\n>tpl\n<div>\n    <span id="demo3">鼠标悬浮显示弹出框</span>\n    <ui-popover target="#demo3">\n        <div slot="title">\n            <b>标题</b>\n            <ui-btn size="xxs">查看</ui-btn>\n        </div>\n        <p>内容内容内容内容内容1...</p>\n        <p>内容内容内容内容2...</p>\n        <p>内容内容内容3...</p>\n    </ui-popover>\n</div>\n:::\n\n:::vue\n@name:带操作按钮的弹出框\n---\n#demo\n>desc\n弹出框常见的场景是显示一个确认操作。\n>tpl\n<div>\n    <span id="demo4">鼠标悬浮显示弹出框</span>\n    <ui-popover target="#demo4">\n        <b slot="title">请确认</b>\n        <div style="width:200px">\n            <p style="margin-top:0;">确认需要删除此内容？</p>\n            <ui-textright>\n                <ui-link size="xxs" color="minor">取消</ui-link>\n                <ui-btn size="xxs" color="danger">删除</ui-btn>\n            </ui-textright>\n        </div>\n    </ui-popover>\n</div>\n:::\n\n[[[形态]]]\n\n#### 支持\n\n|类型|支持|默认|\n|-|-|-|\n|尺寸|不支持|-|\n|色彩|不支持|-|\n|状态|不支持|-|\n\n<a href="/guide/status.html">查看形态文档</a>\n\n[[[配置]]]\n\n:::vue\n@name:target\n---\n#config\n>conf-desc\n触发提示的目标元素，必填项。此配置改变后，若弹出框处于显示状态，则会触发一次`hide`和`show`事件，以刷新弹出框的位置。\n>conf-accept\n元素选择器([MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/Document_Object_Model/Locating_DOM_elements_using_selectors))\n>conf-type\nString<br>Null\n>conf-default\n`null`\n---\n#demo\n>desc\n此配置为必须项。\n>tpl\n<div>\n    <span id="demo5">鼠标悬浮显示弹出框</span>\n    <ui-popover target="#demo5">\n        <p>内容内容内容内容内容1...</p>\n        <p>内容内容内容内容2...</p>\n        <p>内容内容内容3...</p>\n    </ui-popover>\n</div>\n:::\n\n:::vue\n@name:placement\n---\n#config\n>conf-desc\n弹出框位置。\n>conf-accept\n`top`:上方<br>`bottom`:下方<br>`left`:左侧<br>`right`:右侧\n>conf-type\nString\n>conf-default\n`\'top\'`\n---\n#demo\n>tpl\n<div>\n    <span id="demo6">上方弹出框</span>\n    <ui-popover target="#demo6" placement="top">\n        <p>内容内容内容内容内容1...</p>\n        <p>内容内容内容内容2...</p>\n        <p>内容内容内容3...</p>\n    </ui-popover>\n\n    <br>\n\n    <span id="demo7">下方弹出框</span>\n    <ui-popover target="#demo7" placement="bottom">\n        <p>内容内容内容内容内容1...</p>\n        <p>内容内容内容内容2...</p>\n        <p>内容内容内容3...</p>\n    </ui-popover>\n\n    <br>\n\n    <span id="demo8">左侧弹出框</span>\n    <ui-popover target="#demo8" placement="left">\n        <p>内容内容内容内容内容1...</p>\n        <p>内容内容内容内容2...</p>\n        <p>内容内容内容3...</p>\n    </ui-popover>\n\n    <br>\n\n    <span id="demo9">右侧弹出框</span>\n    <ui-popover target="#demo9" placement="right">\n        <p>内容内容内容内容内容1...</p>\n        <p>内容内容内容内容2...</p>\n        <p>内容内容内容3...</p>\n    </ui-popover>\n</div>\n:::\n\n:::vue\n@name:offset\n---\n#config\n>conf-desc\n偏移量。\n>conf-accept\n左右偏移量(单位px/%), 上下偏移量(单位px/%)\n>conf-type\nString\n>conf-default\n`\'0, 0\'`\n---\n#demo\n>tpl\n<div>\n    <span id="demo10">鼠标悬浮显示弹出框</span>\n    <ui-popover target="#demo10" offset="-30px, 10px">\n        <p>内容内容内容内容内容1...</p>\n        <p>内容内容内容内容2...</p>\n        <p>内容内容内容3...</p>\n    </ui-popover>\n</div>\n:::\n\n:::vue\n@name:trigger\n---\n#config\n>conf-desc\n触发方式(支持多触发方式，多个触发器之间用空格分开)。触发方式一旦改变，已有的触发状态都会被重置。\n<br><br>\n当处于`click`配置时，点击`target`元素会切换显示/隐藏状态，同时点击其他区域会隐藏弹出框。\n>conf-accept\n`hover`：鼠标移入目标元素<br>`click`：鼠标点击目标元素<br>`rclick`：鼠标右键点击目标元素<br>`focus`：目标元素处于焦点状态<br>`method`：通过组件方法触发\n>conf-type\nString\n>conf-default\n`\'hover\'`\n---\n#demo\n>tpl\n<div>\n    <span id="demo11">点击显示弹出框</span>\n    <ui-popover target="#demo11" trigger="click">\n        <p>内容内容内容内容内容1...</p>\n        <p>内容内容内容内容2...</p>\n        <p>内容内容内容3...</p>\n    </ui-popover>\n\n    <br>\n\n    <span id="demo12">鼠标悬浮或点击显示弹出框</span>\n    <ui-popover target="#demo12" trigger="click hover">\n        <p>内容内容内容内容内容1...</p>\n        <p>内容内容内容内容2...</p>\n        <p>内容内容内容3...</p>\n    </ui-popover>\n</div>\n---\n#demo\n>desc\n鼠标右键点击显示的弹出框。\n>tpl\n<div>\n    <span id="demo34">右键点击显示弹出框</span>\n    <ui-popover target="#demo34" trigger="rclick">\n        <p>内容内容内容内容内容1...</p>\n        <p>内容内容内容内容2...</p>\n        <p>内容内容内容3...</p>\n    </ui-popover>\n\n    <br>\n\n    <span id="demo35">鼠标悬浮或右键点击显示弹出框</span>\n    <ui-popover target="#demo35" trigger="rclick hover">\n        <p>内容内容内容内容内容1...</p>\n        <p>内容内容内容内容2...</p>\n        <p>内容内容内容3...</p>\n    </ui-popover>\n</div>\n---\n#demo\n>desc\n`trigger`也可以设置为`method`，这样只能通过组件方法来触发。\n>tpl\n<div>\n    <span id="demo13">目标文字</span>\n    <ui-popover target="#demo13" ref="demo13" trigger="method">\n        <p>内容内容内容内容内容1...</p>\n        <p>内容内容内容内容2...</p>\n        <p>内容内容内容3...</p>\n    </ui-popover>\n    \n    <br><br>\n\n    <ui-link js="morning.findVM(\'demo13\').show();">通过组件方法显示弹出框</ui-link><br>\n    <ui-link js="morning.findVM(\'demo13\').hide();">通过组件方法隐藏弹出框</ui-link>\n</div>\n:::\n\n:::vue\n@name:trigger-in-delay\n---\n#config\n>conf-desc\n目标触发提示时进行延迟。<br>此延迟仅在`trigger`为`hover`时生效。<br>当页面中使用较多`ui-popover`时使用一定的延迟，可以减少误触的情况，提升页面体验。\n>conf-accept\n延迟触发时间(ms)\n>conf-type\nNumber\n>conf-default\n`200`\n---\n#demo\n>desc\n鼠标移入元素时延迟300ms触发提示。\n>tpl\n<div>\n    <span id="demo14">鼠标悬浮显示弹出框</span>\n    <ui-popover target="#demo14" :trigger-in-delay="300">\n        <p>内容内容内容内容内容1...</p>\n        <p>内容内容内容内容2...</p>\n        <p>内容内容内容3...</p>\n    </ui-popover>\n</div>\n---\n#demo\n>desc\n鼠标移入元素时立即触发提示。\n>tpl\n<div>\n    <span id="demo15">鼠标悬浮显示弹出框</span>\n    <ui-popover target="#demo15" :trigger-in-delay="0">\n        <p>内容内容内容内容内容1...</p>\n        <p>内容内容内容内容2...</p>\n        <p>内容内容内容3...</p>\n    </ui-popover>\n</div>\n:::\n\n:::vue\n@name:auto-reverse\n---\n#config\n>conf-desc\n当弹出框超出窗口时，自动反转弹出框的方向，使其可以显示。\n>conf-accept\n`true`<br>`false`\n>conf-type\nBoolean\n>conf-default\n`true`\n---\n#demo\n>desc\n滚动页面的位置，使得下面的demo靠近窗口底部，当关闭`auto-reverse`后，弹出框不会反转方向。\n>tpl\n<div>\n    <span id="demo16">鼠标悬浮显示弹出框</span>\n    <ui-popover target="#demo16" placement="bottom" :auto-reverse="false">\n        <p>内容内容内容内容内容</p>\n        <p>内容内容内容内容内容</p>\n        <p>内容内容内容内容内容</p>\n        <p>内容内容内容内容内容</p>\n        <p>内容内容内容内容内容</p>\n        <p>内容内容内容内容内容</p>\n        <p>内容内容内容内容内容</p>\n        <p>内容内容内容内容内容</p>\n        <p>内容内容内容内容内容</p>\n        <p>内容内容内容内容内容</p>\n        <p>内容内容内容内容内容</p>\n    </ui-popover>\n</div>\n---\n#demo\n>desc\n开启`auto-reverse`后，弹出框会反转方向。\n>tpl\n<div>\n    <span id="demo17">鼠标悬浮显示弹出框</span>\n    <ui-popover target="#demo17" placement="bottom" :auto-reverse="true">\n        <p>内容内容内容内容内容</p>\n        <p>内容内容内容内容内容</p>\n        <p>内容内容内容内容内容</p>\n        <p>内容内容内容内容内容</p>\n        <p>内容内容内容内容内容</p>\n        <p>内容内容内容内容内容</p>\n        <p>内容内容内容内容内容</p>\n        <p>内容内容内容内容内容</p>\n        <p>内容内容内容内容内容</p>\n        <p>内容内容内容内容内容</p>\n        <p>内容内容内容内容内容</p>\n    </ui-popover>\n</div>\n:::\n\n:::vue\n@name:align\n---\n#config\n>conf-desc\n弹出框对于触发元素的对齐。\n>conf-accept\n`start`:向左或向上对齐<br>`middle`:居中对齐<br>`end`:向右或向下对齐\n>conf-type\nString\n>conf-default\n`\'middle\'`\n---\n#demo\n>tpl\n<div>\n    <span id="demo25">向左对齐</span>\n    <ui-popover target="#demo25" align="start">\n        <p>内容内容内容内容内容1...</p>\n        <p>内容内容内容内容2...</p>\n        <p>内容内容内容3...</p>\n    </ui-popover>\n\n    <br>\n\n    <span id="demo26">向上对齐</span>\n    <ui-popover target="#demo26" align="start" placement="left">\n        <p>内容内容内容内容内容1...</p>\n        <p>内容内容内容内容2...</p>\n        <p>内容内容内容3...</p>\n    </ui-popover>\n\n    <br>\n\n    <span id="demo27">向右对齐</span>\n    <ui-popover target="#demo27" align="end">\n        <p>内容内容内容内容内容1...</p>\n        <p>内容内容内容内容2...</p>\n        <p>内容内容内容3...</p>\n    </ui-popover>\n\n    <br>\n\n    <span id="demo28">向下对齐</span>\n    <ui-popover target="#demo28" align="end" placement="left">\n        <p>内容内容内容内容内容1...</p>\n        <p>内容内容内容内容2...</p>\n        <p>内容内容内容3...</p>\n    </ui-popover>\n</div>\n:::\n\n[[[方法]]]\n\n:::vue\n@name:show()\n---\n#method\n>method-desc\n显示弹出框。\n>method-return\n当前组件VM实例。\n---\n#demo\n>tpl\n<div>\n    <span id="demo18">显示弹出框</span>\n    <ui-popover trigger="method" target="#demo18" ref="demo18">\n        <p>内容内容内容内容内容1...</p>\n        <p>内容内容内容内容2...</p>\n        <p>内容内容内容3...</p>\n    </ui-popover>\n    \n    <ui-link js="morning.findVM(\'demo18\').show();" onmouseout="morning.findVM(\'demo18\').hide();">显示弹出框</ui-link>\n</div>\n:::\n\n:::vue\n@name:hide()\n---\n#method\n>method-desc\n隐藏弹出框。\n>method-return\n当前组件VM实例。\n---\n#demo\n>tpl\n<div>\n    <span id="demo19">显示弹出框</span>\n    <ui-popover trigger="method" target="#demo19" ref="demo19">\n        <p>内容内容内容内容内容1...</p>\n        <p>内容内容内容内容2...</p>\n        <p>内容内容内容3...</p>\n    </ui-popover>\n\n    <ui-link js="morning.findVM(\'demo19\').hide();" onmouseenter="morning.findVM(\'demo19\').show();">隐藏弹出框</ui-link>\n</div>\n:::\n\n:::vue\n@name:toggle([show])\n---\n#method\n>method-desc\n切换弹出框显示状态。\n>method-args\n|show|YES|切换到显示或隐藏状态，不输入则切换到反向状态。|`undefined`<br>`true`<br>`false`|`Undefined`<br>`Boolean`|`undefined`|\n>method-return\n当前组件VM实例。\n---\n#demo\n>tpl\n<div>\n    <span id="demo20">显示弹出框</span>\n    <ui-popover trigger="method" target="#demo20" ref="demo20">\n        <p>内容内容内容内容内容1...</p>\n        <p>内容内容内容内容2...</p>\n        <p>内容内容内容3...</p>\n    </ui-popover>\n\n    <ui-link js="morning.findVM(\'demo20\').toggle();">切换到反向状态</ui-link>\n    <ui-link js="morning.findVM(\'demo20\').toggle(true);">显示弹出框</ui-link>\n    <ui-link js="morning.findVM(\'demo20\').toggle(false);">隐藏弹出框</ui-link>\n</div>\n:::\n\n:::vue\n@name:position()\n---\n#method\n>method-desc\n根据目标元素重新定位弹出框的位置。\n>method-return\n当前组件VM实例。\n---\n#demo\n>tpl\n<div>\n    <span id="demo21" style="position: relative;">目标文字</span>\n    <ui-popover target="#demo21" ref="demo21">\n        <p>内容内容内容内容内容1...</p>\n        <p>内容内容内容内容2...</p>\n        <p>内容内容内容3...</p>\n    </ui-popover>\n\n    <br><br>\n    \n    <ui-link js="morning.findVM(\'demo21\').show();document.querySelector(\'#demo21\').style.left=\'100px\';">显示弹出框，然后移动目标元素位置</ui-link><br>\n    <ui-link js="morning.findVM(\'demo21\').position();">重新定位弹出框</ui-link>\n</div>\n:::\n\n[[[事件]]]\n\n:::vue\n@name:emit\n---\n#event\n>event-desc\n当弹出框切换显示状态时时触发。\n---\n#demo\n>tpl\n<div>\n    <span id="demo22">鼠标悬浮显示弹出框</span>\n    <ui-popover target="#demo22" @emit="echo">\n        <p>内容内容内容内容内容1...</p>\n        <p>内容内容内容内容2...</p>\n        <p>内容内容内容3...</p>\n    </ui-popover>\n</div>\n>script\n{\n    methods : {\n        echo : function () {\n            console.log(\'demo22.console1\', \'emit event!\');\n        }\n    }\n}\n:::\n\n:::vue\n@name:show\n---\n#event\n>event-desc\n当弹出框显示时触发。\n---\n#demo\n>tpl\n<div>\n    <span id="demo23">鼠标悬浮显示弹出框</span>\n    <ui-popover target="#demo23" @emit="echo">\n        <p>内容内容内容内容内容1...</p>\n        <p>内容内容内容内容2...</p>\n        <p>内容内容内容3...</p>\n    </ui-popover>\n</div>\n>script\n{\n    methods : {\n        echo : function () {\n            console.log(\'demo23.console1\', \'show event!\');\n        }\n    }\n}\n:::\n\n:::vue\n@name:hide\n---\n#event\n>event-desc\n当弹出框显示时触发。\n---\n#demo\n>tpl\n<div>\n    <span id="demo24">鼠标悬浮显示弹出框</span>\n    <ui-popover target="#demo24" @emit="echo">\n        <p>内容内容内容内容内容1...</p>\n        <p>内容内容内容内容2...</p>\n        <p>内容内容内容3...</p>\n    </ui-popover>\n</div>\n>script\n{\n    methods : {\n        echo : function () {\n            console.log(\'demo24.console1\', \'hide event!\');\n        }\n    }\n}\n:::\n\n:::vue\n@name:生命周期事件\n---\n#event\n>event-desc\n组件的生命周期事件，详见:[基础/事件/生命周期事件](/guide/event.html#生命周期事件)。\n---\n#demo\n>tpl\n<div>\n    <span id="demoEventLifecycle">鼠标悬浮显示弹出框</span>\n    <ui-popover\n        target="#demoEventLifecycle"\n        ref="demoEventLifecycle"\n        v-show="show"\n        @created="echo(\'created\')"\n        @mounted="echo(\'mounted\')"\n        @before-update="echo(\'before-update\')"\n        @updated="echo(\'updated\')"\n        @before-destroy="echo(\'before-destroy\')"\n        @destroyed="echo(\'destroyed\')"\n    >{*text*}</ui-popover>\n    <br><br>\n    <ui-link js="this.text=\'生命周期事件\';">触发update</ui-link>\n    <ui-link js="this.$refs[\'demoEventLifecycle\'].$destroy();">触发destroy</ui-link>\n</div>\n>script\n{\n    data : function () {\n        return {\n           text : \'弹出框\',\n           show : true\n        };\n    },\n    methods : {\n        echo : function (name) {\n            console.log(\'demoEventLifecycle.console1\', name + \' event!\');\n        }\n    }\n}\n:::\n\n[[[源码]]]\n\n<iframe src="/report/coverage/lib/components/popover/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>\n\n')])])},t=[];p._withStripped=!0,o.d(e,"a",function(){return p}),o.d(e,"b",function(){return t})},722:function(n,e,o){"use strict";var p=i(o(1)),t=i(o(723));function i(n){return n&&n.__esModule?n:{default:n}}new p.default({el:"#root",render:function(n){return n(t.default)}})},723:function(n,e,o){"use strict";o.r(e);var p=o(357),t=o(140);for(var i in t)"default"!==i&&function(n){o.d(e,n,function(){return t[n]})}(i);var r=o(0),d=Object(r.a)(t.default,p.a,p.b,!1,null,null,null);d.options.__file="src/docs/pages/component/popover/index.vue",e.default=d.exports}});