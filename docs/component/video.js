!function(n){function e(e){for(var i,r,u=e[0],l=e[1],s=e[2],c=0,m=[];c<u.length;c++)r=u[c],o[r]&&m.push(o[r][0]),o[r]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(n[i]=l[i]);for(a&&a(e);m.length;)m.shift()();return d.push.apply(d,s||[]),t()}function t(){for(var n,e=0;e<d.length;e++){for(var t=d[e],i=!0,u=1;u<t.length;u++){var l=t[u];0!==o[l]&&(i=!1)}i&&(d.splice(e--,1),n=r(r.s=t[0]))}return n}var i={},o={84:0},d=[];function r(e){if(i[e])return i[e].exports;var t=i[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=n,r.c=i,r.d=function(n,e,t){r.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},r.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},r.t=function(n,e){if(1&e&&(n=r(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var i in n)r.d(t,i,function(e){return n[e]}.bind(null,i));return t},r.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return r.d(e,"a",e),e},r.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},r.p="/";var u=window.webpackJsonp=window.webpackJsonp||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var s=0;s<u.length;s++)e(u[s]);var a=l;d.push([692,0]),t()}({1:function(n,e){n.exports=Vue},361:function(n,e,t){"use strict";var i=function(){var n=this.$createElement,e=this._self._c||n;return e("doc-component",{attrs:{page:this.page,hasPadding:!0}},[e("script",{attrs:{type:"text/markdown"}},[this._v('\n# 视频播放 `<ui-video>`\n\n<doc-component-status page="video"></doc-component-status>\n\n[[[开始]]]\n\n定义一个视频播放，这是一个块元素。\n\n注意：在`Safari`浏览器的部分版本(比如`11`)中，你需要允许网站播放音频，否则此组件无法正常工作，[详见此](https://webkit.org/blog/7734/auto-play-policy-changes-for-macos/)。\n\n:::vue\n@name:使用\n---\n#demo\n>tpl\n<div style="width:400px">\n    <ui-video src="https://media.w3.org/2010/05/sintel/trailer.mp4"></ui-video>\n</div>\n:::\n\n[[[形态]]]\n\n#### 支持\n\n|类型|支持|默认|\n|-|-|-|\n|尺寸|不支持|-|\n|色彩|不支持|-|\n|状态|不支持|-|\n\n[[[配置]]]\n\n:::vue\n@name:src\n---\n#config\n>conf-desc\n播放源文件。\n>conf-accept\n视频文件网络地址\n>conf-type\nString\n>conf-default\n`\'\'`\n---\n#demo\n>tpl\n<div style="width: 400px">\n    <ui-video src="https://media.w3.org/2010/05/sintel/trailer.mp4"></ui-video>\n</div>\n---\n#demo\n>desc\n如果不设置则无法播放。\n>tpl\n<div style="width: 400px">\n    <ui-video></ui-video>\n</div>\n:::\n\n:::vue\n@name:poster\n---\n#config\n>conf-desc\n视频的预览图。\n>conf-accept\n图片地址\n>conf-type\nString\n>conf-default\n`\'\'`\n---\n#demo\n>tpl\n<div style="width: 400px">\n    <ui-video src="https://media.w3.org/2010/05/sintel/trailer.mp4" poster="https://media.w3.org/2010/05/sintel/poster.png"></ui-video>\n</div>\n:::\n\n:::vue\n@name:hide-time\n---\n#config\n>conf-desc\n隐藏时间。\n>conf-accept\n`true`<br>`false`\n>conf-type\nBoolean\n>conf-default\n`false`\n---\n#demo\n>tpl\n<div style="width: 400px">\n    <ui-video src="https://media.w3.org/2010/05/sintel/trailer.mp4" :hide-time="true"></ui-video>\n</div>\n:::\n\n:::vue\n@name:hide-progress\n---\n#config\n>conf-desc\n隐藏播放进度条。\n>conf-accept\n`true`<br>`false`\n>conf-type\nBoolean\n>conf-default\n`false`\n---\n#demo\n>tpl\n<div style="width: 400px">\n    <ui-video src="https://media.w3.org/2010/05/sintel/trailer.mp4" :hide-progress="true"></ui-video>\n</div>\n:::\n\n:::vue\n@name:autoplay\n---\n#config\n>conf-desc\n自动播放。\n>conf-accept\n`true`<br>`false`\n>conf-type\nBoolean\n>conf-default\n`false`\n---\n#demo\n>desc\n设置后视频会自动播放（此处不演示，可通过以下代码改为`:autoplay="true"`观看效果）。\n>tpl\n<div style="width: 400px">\n    <ui-video src="https://media.w3.org/2010/05/sintel/trailer.mp4" :autoplay="false"></ui-video>\n</div>\n:::\n\n:::vue\n@name:allow-fullscreen\n---\n#config\n>conf-desc\n是否允许视频全屏，若不允许则不会显示全屏按钮。\n>conf-accept\n`true`<br>`false`\n>conf-type\nBoolean\n>conf-default\n`true`\n---\n#demo\n>desc\n设置后视频会自动播放（此处不演示，可通过以下代码改为`:autoplay="true"`观看效果）。\n>tpl\n<div style="width: 400px">\n    <ui-video src="https://media.w3.org/2010/05/sintel/trailer.mp4" :allow-fullscreen="false"></ui-video>\n</div>\n:::\n\n[[[方法]]]\n\n:::vue\n@name:play([play])\n---\n#method\n>method-desc\n切换视频播放状态。\n>method-args\n|play|YES|切换到播放或暂停状态，不输入则切换到反向状态。|`undefined`<br>`true`<br>`false`|`Undefined`<br>`Boolean`|`undefined`|\n>method-return\n当前组件VM实例。\n---\n#demo\n>tpl\n<div style="width:400px">\n    <ui-video ref="demo1" src="https://media.w3.org/2010/05/sintel/trailer.mp4"></ui-video>\n    <br>\n    <ui-link js="window.morning.findVM(\'demo1\').play(true);">播放</ui-link>\n    <ui-link js="window.morning.findVM(\'demo1\').play(false);">暂停</ui-link>\n    <ui-link js="window.morning.findVM(\'demo1\').play();">切换到反向状态</ui-link>\n</div>\n:::\n\n:::vue\n@name:to([time])\n---\n#method\n>method-desc\n切换到视频指定位置。\n>method-args\n|time|YES|切换到视频指定位置(单位秒)。若超出视频时间返回则会重置。|`undefined`<br>播放位置(秒)`|`Undefined`<br>`Number`|`undefined`|\n>method-return\n当前组件VM实例。\n---\n#demo\n>tpl\n<div style="width:400px">\n    <ui-video ref="demo2" src="https://media.w3.org/2010/05/sintel/trailer.mp4"></ui-video>\n    <br>\n    <ui-link js="window.morning.findVM(\'demo2\').to(20);">切换到第20秒</ui-link>\n</div>\n:::\n\n:::vue\n@name:mute([toggle])\n---\n#method\n>method-desc\n切换静音。\n>method-args\n|toggle|YES|切换至静音，不输入则切换到反向状态。|`undefined`<br>`true`<br>`false`|`Undefined`<br>`Boolean`|`undefined`|\n>method-return\n当前组件VM实例。\n---\n#demo\n>tpl\n<div style="width:400px">\n    <ui-video ref="demo3" src="https://media.w3.org/2010/05/sintel/trailer.mp4"></ui-video>\n    <br>\n    <ui-link js="window.morning.findVM(\'demo3\').mute(true);">静音</ui-link>\n    <ui-link js="window.morning.findVM(\'demo3\').mute(false);">取消静音</ui-link>\n    <ui-link js="window.morning.findVM(\'demo3\').mute();">切换到反向状态</ui-link>\n</div>\n:::\n\n:::vue\n@name:volume(value)\n---\n#method\n>method-desc\n调整音量大小。\n>method-args\n|value|NO|音量大小|0-100之间的数字|`Number`|`0`|\n>method-return\n当前组件VM实例。\n---\n#demo\n>tpl\n<div style="width:400px">\n    <ui-video ref="demo8" src="https://media.w3.org/2010/05/sintel/trailer.mp4"></ui-video>\n    <br>\n    <ui-link js="window.morning.findVM(\'demo8\').volume(0);">音量设为0</ui-link>\n    <ui-link js="window.morning.findVM(\'demo8\').volume(30);">音量设为30</ui-link>\n    <ui-link js="window.morning.findVM(\'demo8\').volume(100);">音量设为100</ui-link>\n</div>\n:::\n\n:::vue\n@name:getInfo()\n---\n#method\n>method-desc\n获取当前播放视频信息。\n>method-return\n返回视频播放信息(包含视频源地址、时间长度、当前播放位置、静音状态、音量)。\n---\n#demo\n>tpl\n<div style="width:400px">\n    <ui-video ref="demo4" src="https://media.w3.org/2010/05/sintel/trailer.mp4"></ui-video>\n    <br>\n    <ui-link js="console.log(window.morning.findVM(\'demo4\').getInfo());">获取视频信息</ui-link>\n</div>\n:::\n\n[[[事件]]]\n\n:::vue\n@name:play\n---\n#event\n>event-desc\n当视频开始播放时触发。\n---\n#demo\n>tpl\n<div style="width:400px">\n    <ui-video ref="demo5" src="https://media.w3.org/2010/05/sintel/trailer.mp4" @play="echo"></ui-video>\n    <ui-link js="window.morning.findVM(\'demo5\').play(true);">点击触发play事件</ui-link>\n</div>\n>script\n{\n    methods : {\n        echo : function () {\n            console.log(\'demo5.play\', \'emit event!\');\n        }\n    }\n}\n:::\n\n:::vue\n@name:pause\n---\n#event\n>event-desc\n当视频暂停播放时触发。\n---\n#demo\n>tpl\n<div style="width:400px">\n    <ui-video ref="demo6" src="https://media.w3.org/2010/05/sintel/trailer.mp4" @pause="echo"></ui-video>\n    <ui-link js="window.morning.findVM(\'demo6\').play(true);setTimeout(()=>window.morning.findVM(\'demo6\').play(false))">点击触发pause事件</ui-link>\n</div>\n>script\n{\n    methods : {\n        echo : function () {\n            console.log(\'demo6.pause\', \'emit event!\');\n        }\n    }\n}\n:::\n\n:::vue\n@name:play-change\n---\n#event\n>event-desc\n当视频播放状态改变时触发。\n---\n#demo\n>tpl\n<div style="width:400px">\n    <ui-video ref="demo10" src="https://media.w3.org/2010/05/sintel/trailer.mp4" @play-change="echo"></ui-video>\n    <ui-link js="window.morning.findVM(\'demo10\').play();">点击触发play-change事件</ui-link>\n</div>\n>script\n{\n    methods : {\n        echo : function () {\n            console.log(\'demo10.play-change\', \'emit event!\');\n        }\n    }\n}\n:::\n\n:::vue\n@name:mute-change\n---\n#event\n>event-desc\n静音状态改变时触发。\n---\n#demo\n>tpl\n<div style="width:400px">\n    <ui-video ref="demo7" src="https://media.w3.org/2010/05/sintel/trailer.mp4" @mute-change="echo"></ui-video>\n    <ui-link js="window.morning.findVM(\'demo7\').mute();">点击触发mute-change事件</ui-link>\n</div>\n>script\n{\n    methods : {\n        echo : function () {\n            console.log(\'demo7.mute-change\', \'emit event!\');\n        }\n    }\n}\n:::\n\n:::vue\n@name:volume-change\n---\n#event\n>event-desc\n音量状态改变时触发。\n---\n#demo\n>tpl\n<div style="width:400px">\n    <ui-video ref="demo9" src="https://media.w3.org/2010/05/sintel/trailer.mp4" @volume-change="echo"></ui-video>\n    <ui-link js="window.morning.findVM(\'demo9\').volume(30);">点击触发volume-change事件</ui-link>\n</div>\n>script\n{\n    methods : {\n        echo : function () {\n            console.log(\'demo9.volume-change\', \'emit event!\');\n        }\n    }\n}\n:::\n\n:::vue\n@name:fullscreen-change\n---\n#event\n>event-desc\n当视频全屏状态改变时触发。\n---\n#demo\n>tpl\n<div style="width:400px">\n    <ui-video ref="demo10" src="https://media.w3.org/2010/05/sintel/trailer.mp4" @fullscreen-change="echo"></ui-video>\n    <p>点击全屏来触发此事件</p>\n</div>\n>script\n{\n    methods : {\n        echo : function () {\n            console.log(\'demo10.fullscreen-change\', \'emit event!\');\n        }\n    }\n}\n:::\n\n:::vue\n@name:生命周期事件\n---\n#event\n>event-desc\n组件的生命周期事件，详见:[基础/事件/生命周期事件](/guide/event.html#生命周期事件)。\n---\n#demo\n>tpl\n<div>\n    <ui-video\n        ref="demoEventLifecycle"\n        v-show="show"\n        src="https://media.w3.org/2010/05/sintel/trailer.mp4"\n        @created="echo(\'created\')"\n        @mounted="echo(\'mounted\')"\n        @before-update="echo(\'before-update\')"\n        @updated="echo(\'updated\')"\n        @before-destroy="echo(\'before-destroy\')"\n        @destroyed="echo(\'destroyed\')"\n    >{*text*}</ui-video>\n    <br><br>\n    <ui-link js="this.text=\'生命周期事件\';">触发update</ui-link>\n    <ui-link js="this.$refs[\'demoEventLifecycle\'].$destroy();">触发destroy</ui-link>\n</div>\n>script\n{\n    data : function () {\n        return {\n           text : \'视频\',\n           show : true\n        };\n    },\n    methods : {\n        echo : function (name) {\n            console.log(\'demoEventLifecycle.console1\', name + \' event!\');\n        }\n    }\n}\n:::\n\n[[[源码]]]\n\n<iframe src="/report/coverage/lib/components/video/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>\n\n')])])},o=[];i._withStripped=!0,t.d(e,"a",function(){return i}),t.d(e,"b",function(){return o})},692:function(n,e,t){"use strict";var i=d(t(1)),o=d(t(693));function d(n){return n&&n.__esModule?n:{default:n}}new i.default({el:"#root",render:function(n){return n(o.default)}})},693:function(n,e,t){"use strict";t.r(e);var i=t(361),o=t(95);for(var d in o)"default"!==d&&function(n){t.d(e,n,function(){return o[n]})}(d);var r=t(0),u=Object(r.a)(o.default,i.a,i.b,!1,null,null,null);u.options.__file="src/docs/pages/component/video/index.vue",e.default=u.exports},95:function(n,e,t){"use strict";t.r(e);var i=t(96),o=t.n(i);for(var d in i)"default"!==d&&function(n){t.d(e,n,function(){return i[n]})}(d);e.default=o.a},96:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,o=t(2),d=(i=o)&&i.__esModule?i:{default:i};e.default={data:function(){return{page:"video"}},components:{"doc-component":d.default}},n.exports=e.default}});