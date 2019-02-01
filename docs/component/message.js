!function(n){function e(e){for(var i,d,u=e[0],r=e[1],m=e[2],a=0,c=[];a<u.length;a++)d=u[a],t[d]&&c.push(t[d][0]),t[d]=0;for(i in r)Object.prototype.hasOwnProperty.call(r,i)&&(n[i]=r[i]);for(l&&l(e);c.length;)c.shift()();return s.push.apply(s,m||[]),o()}function o(){for(var n,e=0;e<s.length;e++){for(var o=s[e],i=!0,u=1;u<o.length;u++){var r=o[u];0!==t[r]&&(i=!1)}i&&(s.splice(e--,1),n=d(d.s=o[0]))}return n}var i={},t={48:0},s=[];function d(e){if(i[e])return i[e].exports;var o=i[e]={i:e,l:!1,exports:{}};return n[e].call(o.exports,o,o.exports,d),o.l=!0,o.exports}d.m=n,d.c=i,d.d=function(n,e,o){d.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:o})},d.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},d.t=function(n,e){if(1&e&&(n=d(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var o=Object.create(null);if(d.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var i in n)d.d(o,i,function(e){return n[e]}.bind(null,i));return o},d.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return d.d(e,"a",e),e},d.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},d.p="/";var u=window.webpackJsonp=window.webpackJsonp||[],r=u.push.bind(u);u.push=e,u=u.slice();for(var m=0;m<u.length;m++)e(u[m]);var l=r;s.push([559,0]),o()}({1:function(n,e){n.exports=Vue},192:function(n,e,o){"use strict";o.d(e,"a",function(){return i}),o.d(e,"b",function(){return t});var i=function(){var n=this.$createElement,e=this._self._c||n;return e("doc-component",{attrs:{page:this.page,hasPadding:!0}},[e("script",{attrs:{type:"text/markdown"}},[this._v("\n# 消息 `<ui-message>`\n\n<doc-component-status page=\"message\"></doc-component-status>\n\n[[[开始]]]\n\n定义一个消息组件，这是一个块元素。\n\n由于消息组件是固定展示在页面的几个位置中的，所以同位置一般只会存在一个消息组件，可以通过`show-type`配置来设置。如果将两个消息组件配置在同一位置，同时有消息时，后使用的消息组件将会覆盖之前的消息组件。\n\n消息的推送通过`.push()`方法，主要有两种情况：\n\n- 仅消息 : 调用消息组件的`.push(message)`方法并传入一个字符串座位消息内容。\n- 有标题或配色 : 调用消息组件的`.push(option)`方法传入一个配置对象，对象的属性包括：\n    - `title` : 消息标题(String，可选，不支持HTML)，若为空则不显示消息的标题\n    - `message` : 消息内容(String，必需，支持HTML)\n    - `color` : 消息的配色(String，可选，默认`theme`配色)，支持[形态/颜色](/guide/status.html#颜色)中的所有颜色。\n\n> 使用时应注意，消息组件仅用于向用户传到信息，不应该包括可交互的行动元素。\n\n:::vue\n@name:使用\n---\n#demo\n>tpl\n<div>\n    <ui-message ref=\"demo1\"></ui-message>\n    <ui-link js=\"window.morning.findVM('demo1').push('一条新消息('+new Date()+')');\">推送一条新消息</ui-link>\n</div>\n:::\n\n:::vue\n@name:标题\n---\n#demo\n>desc\n通过配置消息对象的`title`属性来添加标题。\n>tpl\n<div>\n    <ui-message ref=\"demo1\"></ui-message>\n    <ui-link js=\"window.morning.findVM('demo1').push({title:'这是标题', message: '这是消息的内容'});\">推送一条消息</ui-link>\n</div>\n:::\n\n:::vue\n@name:配色\n---\n#demo\n>desc\n通过配置消息对象的`color`属性来添加配置。\n>tpl\n<div>\n    <ui-message ref=\"demo1\"></ui-message>\n    <ui-link js=\"window.morning.findVM('demo1').push({color:'success', message: '这是消息的内容'});\">推送一条消息</ui-link>\n</div>\n:::\n\n:::vue\n@name:消息内容使用HTML\n---\n#demo\n>tpl\n<div>\n    <ui-message ref=\"demo18\"></ui-message>\n    <ui-link js=\"window.morning.findVM('demo18').push('<i class=\\'mo-icon mo-icon-warn-f\\' style=\\'font-size:32px;width:100%;display:inline-block;text-align:center;\\'></i><br><br><b>一条新消息('+new Date()+')</b>');\">推送一条新消息</ui-link>\n</div>\n:::\n\n:::vue\n@name:消息的位置\n---\n#demo\n>desc\n你可以设置`show-type`配置，决定消息从哪个方向展示，消息组件支持的位置有：\n<br><br>\n- `top`\n- `topleft`\n- `topright`\n- `bottom`\n- `bottomleft`\n- `bottomright`\n<br><br>\n当消息展示在屏幕上方时，越靠上的消息越新。当消息展示在屏幕下方时，越靠下的消息越新。\n>tpl\n<div>\n    <div>\n        <ui-message ref=\"demo2\" show-type=\"topleft\"></ui-message>\n        <ui-link js=\"window.morning.findVM('demo2').push('屏幕左上消息('+new Date()+')');\">屏幕左上消息</ui-link>\n    </div>\n    <div>\n        <ui-message ref=\"demo3\" show-type=\"top\"></ui-message>\n        <ui-link js=\"window.morning.findVM('demo3').push('屏幕上方消息('+new Date()+')');\">屏幕上方消息</ui-link>\n    </div>\n    <div>\n        <ui-message ref=\"demo4\" show-type=\"topright\"></ui-message>\n        <ui-link js=\"window.morning.findVM('demo4').push('屏幕右上消息('+new Date()+')');\">屏幕右上消息</ui-link>\n    </div>\n    <div>\n        <ui-message ref=\"demo5\" show-type=\"bottomright\"></ui-message>\n        <ui-link js=\"window.morning.findVM('demo5').push('屏幕右上消息('+new Date()+')');\">屏幕右下消息</ui-link>\n    </div>\n    <div>\n        <ui-message ref=\"demo6\" show-type=\"bottom\"></ui-message>\n        <ui-link js=\"window.morning.findVM('demo6').push('屏幕右上消息('+new Date()+')');\">屏幕下方消息</ui-link>\n    </div>\n    <div>\n        <ui-message ref=\"demo7\" show-type=\"bottomleft\"></ui-message>\n        <ui-link js=\"window.morning.findVM('demo7').push('屏幕右上消息('+new Date()+')');\">屏幕左下消息</ui-link>\n    </div>\n</div>\n:::\n\n[[[形态]]]\n\n#### 支持\n\n|类型|支持|默认|\n|-|-|-|\n|尺寸|不支持|-|\n|色彩|不支持|-|\n|状态|不支持|-|\n\n消息组件本身不支持形态，但在发送消息时可以通过`color`来对每条消息的色彩进行控制。\n\n:::vue\n@layout:color\n---\n<div>\n    <ui-message ref=\"demo{$colorKey}\"></ui-message>\n    <ui-link color=\"{$colorKey}\" js=\"window.morning.findVM('demo{$colorKey}').push({color:'{$colorKey}', message: '这是{$colorName}的消息'});\">推送一条{$colorName}消息</ui-link>\n</div>\n:::\n\n[[[配置]]]\n\n:::vue\n@name:close-btn\n---\n#config\n>conf-desc\n是否显示关闭消息的按钮，开启后用户可以主动关闭消息，否则消息会在`close-time`设置的时间后消失。\n>conf-accept\n`true`<br>`false`\n>conf-type\nBoolean\n>conf-default\n`false`\n---\n#demo\n>tpl\n<div>\n    <ui-message ref=\"demo8\" :close-btn=\"true\"></ui-message>\n    <ui-link js=\"window.morning.findVM('demo8').push('一条新消息('+new Date()+')');\">推送一条新消息</ui-link>\n</div>\n:::\n\n:::vue\n@name:close-time\n---\n#config\n>conf-desc\n消息在多久之后关闭|数字：时间(毫秒)<br>`false` : 不会定时关闭，需要通过`close-btn`关闭\n>conf-accept\n`true`<br>`false`\n>conf-type\nNumber<br>Boolean\n>conf-default\n`4000`\n---\n#demo\n>desc\n将关闭时间缩短到1秒。\n>tpl\n<div>\n    <ui-message ref=\"demo9\" :close-time=\"1000\"></ui-message>\n    <ui-link js=\"window.morning.findVM('demo9').push('一条新消息('+new Date()+')');\">推送一条新消息</ui-link>\n</div>\n---\n#demo\n>desc\n将关闭时间设置为`false`，必需通过关闭按钮来关闭消息。\n>tpl\n<div>\n    <ui-message ref=\"demo17\" :close-time=\"false\" :close-btn=\"true\"></ui-message>\n    <ui-link js=\"window.morning.findVM('demo17').push('必需通过按钮关闭的消息');\">推送一条新消息</ui-link>\n</div>\n:::\n\n:::vue\n@name:show-type\n---\n#config\n>conf-desc\n消息出现的位置。\n>conf-accept\n`'top'` : 上方<br>`'topleft'` : 左上角<br>`'topright'` : 右上角<br>`'bottom'` : 下方<br>`'bottomleft'` : 左下角<br>`'bottomright'` : 右下角\n>conf-type\nString\n>conf-default\n`'top'`\n---\n#demo\n>tpl\n<div>\n    <ui-message ref=\"demo10\" show-type=\"bottom\"></ui-message>\n    <ui-link js=\"window.morning.findVM('demo10').push('一条新消息('+new Date()+')');\">推送一条新消息</ui-link>\n</div>\n:::\n\n:::vue\n@name:max-show\n---\n#config\n>conf-desc\n同时最多显示几条消息(仅针对当前的消息组件)，当有新的消息时，超出`max-show`的消息会被暂时隐藏。如果新的消息被手动关闭，被暂时隐藏的消息会重新显示，直至超过`close-time`。若设为`false`时则显示全部消息。\n>conf-accept\nNumber : 最多显示消息的数量<br>`false` : 显示所有\n>conf-type\nNumber<br>Boolean\n>conf-default\n`2`\n---\n#demo\n>desc\n最多显示1条。\n>tpl\n<div>\n    <ui-message ref=\"demo11\" :max-show=\"1\"></ui-message>\n    <ui-link js=\"window.morning.findVM('demo11').push('一条新消息('+new Date()+')');\">推送一条新消息</ui-link>\n</div>\n---\n#demo\n>desc\n不限制显示条数。\n>tpl\n<div>\n    <ui-message ref=\"demo12\" :max-show=\"false\" show-type=\"topleft\"></ui-message>\n    <ui-link js=\"window.morning.findVM('demo12').push('一条新消息('+new Date()+')');\">推送一条新消息</ui-link>\n</div>\n:::\n\n[[[方法]]]\n\n:::vue\n@name:push(option)\n---\n#method\n>method-desc\n推送一条消息，这个方法将返回一个消息ID，调用`.close`方法并传入消息ID可以关闭这条消息。\n>method-args\n|option|NO|如果是字符串，则将字符串内容作为消息内容发送。<br><br>如果是对象，则认为是消息配置对象，包含：<br>`title` : 消息标题(String，可选)，若为空则不显示消息的标题<br>`message` : 消息内容(String，必需)<br>`color` : 消息的配色(String，可选，默认`theme`配色)，支持[形态/颜色](/guide/status.html#颜色)中的所有颜色。|消息内容的字符串<br>消息配置对象|`String`<br>`Object`|`undefined`|\n>method-return\n当前组件VM实例。\n---\n#demo\n>desc\n直接发送消息。\n>tpl\n<div>\n    <ui-message ref=\"demo13\"></ui-message>\n    <ui-link js=\"window.morning.findVM('demo13').push('一条新消息('+new Date()+')');\">推送一条新消息</ui-link>\n</div>\n---\n#demo\n>desc\n通过配置对象发送。\n>tpl\n<div>\n    <ui-message ref=\"demo14\" show-type=\"topleft\"></ui-message>\n    <ui-link js=\"window.morning.findVM('demo14').push({title:'这是标题', message: '这是消息的内容', color: 'warning'});\">推送一条消息</ui-link>\n</div>\n:::\n\n:::vue\n@name:close(id)\n---\n#method\n>method-desc\n推送一条消息，这个方法将返回一个消息ID，调用`.close`方法并传入消息ID可以关闭这条消息。\n>method-args\n|id|NO|需要关闭消息的ID，通过`.push`方法获取。|消息ID|`Number`|`undefined`|\n>method-return\n当前组件VM实例。\n---\n#demo\n>tpl\n<div>\n    <ui-message ref=\"demo14\" :close-time=\"30000\" show-type=\"topright\"></ui-message>\n    <ui-link js=\"alert(window.demo15id = window.morning.findVM('demo14').push('一条新消息('+new Date()+')'))\">推送一条新消息，并获取消息ID</ui-link><br>\n    <ui-link js=\"window.morning.findVM('demo14').close(window.demo15id)\">通过消息ID关闭消息</ui-link>\n</div>\n:::\n\n[[[事件]]]\n\n:::vue\n@name:push\n---\n#event\n>event-desc\n当新消息推送时触发。\n---\n#demo\n>tpl\n<div>\n    <ui-message ref=\"demo15\" @push=\"echo\"></ui-message>\n    <ui-link js=\"window.morning.findVM('demo15').push('一条新消息('+new Date()+')');\">点击触发push事件</ui-link>\n</div>\n>script\n{\n    methods : {\n        echo : function () {\n            console.log('demo15.console1', 'push event!');\n        }\n    }\n}\n:::\n\n:::vue\n@name:close\n---\n#event\n>event-desc\n当消息关闭时触发。\n---\n#demo\n>tpl\n<div>\n    <ui-message ref=\"demo16\" @close=\"echo\"></ui-message>\n    <ui-link js=\"window.demo16id=window.morning.findVM('demo16').push('一条新消息('+new Date()+')');window.morning.findVM('demo16').close(window.demo16id)\">点击触发close事件</ui-link>\n</div>\n>script\n{\n    methods : {\n        echo : function () {\n            console.log('demo16.console1', 'close event!');\n        }\n    }\n}\n:::\n\n:::vue\n@layout:lifecycle-event\n---\nmessage\n消息\n:::\n\n[[[源码]]]\n\n<iframe src=\"/report/coverage/lib/components/message/index.vue.html\" name=\"codeFrame\" frameborder=\"0\" onload=\"this.height=codeFrame.document.body.scrollHeight\"></iframe>\n\n")])])},t=[];i._withStripped=!0},559:function(n,e,o){"use strict";var i=s(o(1)),t=s(o(560));function s(n){return n&&n.__esModule?n:{default:n}}new i.default({el:"#root",render:function(n){return n(t.default)}})},560:function(n,e,o){"use strict";o.r(e);var i=o(73),t=o.n(i);for(var s in i)"default"!==s&&function(n){o.d(e,n,function(){return i[n]})}(s);var d=o(192),u=o(0),r=!1;var m=function(n){r||o(799)},l=Object(u.a)(t.a,d.a,d.b,!1,m,null,null);l.options.__file="src/docs/pages/component/message/index.vue",e.default=l.exports},73:function(n,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,t=o(2),s=(i=t)&&i.__esModule?i:{default:i};e.default={data:function(){return{page:"message"}},components:{"doc-component":s.default}},n.exports=e.default},799:function(n,e){}});