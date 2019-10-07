!function(n){function e(e){for(var t,u,r=e[0],a=e[1],c=e[2],m=0,s=[];m<r.length;m++)u=r[m],o[u]&&s.push(o[u][0]),o[u]=0;for(t in a)Object.prototype.hasOwnProperty.call(a,t)&&(n[t]=a[t]);for(l&&l(e);s.length;)s.shift()();return d.push.apply(d,c||[]),i()}function i(){for(var n,e=0;e<d.length;e++){for(var i=d[e],t=!0,r=1;r<i.length;r++){var a=i[r];0!==o[a]&&(t=!1)}t&&(d.splice(e--,1),n=u(u.s=i[0]))}return n}var t={},o={6:0},d=[];function u(e){if(t[e])return t[e].exports;var i=t[e]={i:e,l:!1,exports:{}};return n[e].call(i.exports,i,i.exports,u),i.l=!0,i.exports}u.m=n,u.c=t,u.d=function(n,e,i){u.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:i})},u.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},u.t=function(n,e){if(1&e&&(n=u(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var i=Object.create(null);if(u.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var t in n)u.d(i,t,function(e){return n[e]}.bind(null,t));return i},u.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return u.d(e,"a",e),e},u.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},u.p="/";var r=window.webpackJsonp=window.webpackJsonp||[],a=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var l=a;d.push([851,0]),i()}({1:function(n,e){n.exports=Vue},253:function(n,e,i){"use strict";i.r(e);var t=i(254),o=i.n(t);for(var d in t)"default"!==d&&function(n){i.d(e,n,function(){return t[n]})}(d);e.default=o.a},254:function(n,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t,o=i(2),d=(t=o)&&t.__esModule?t:{default:t};e.default={data:function(){return{page:"audio"}},components:{"doc-component":d.default}},n.exports=e.default},276:function(n,e,i){"use strict";var t=function(){var n=this.$createElement,e=this._self._c||n;return e("doc-component",{attrs:{page:this.page,hasPadding:!0}},[e("script",{attrs:{type:"text/markdown"}},[this._v('\n# 音频播放 `<ui-audio>`\n\n<doc-component-status page="audio"></doc-component-status>\n\n[[[开始]]]\n\n定义一个音频播放，这是一个块元素。\n\n注意：在`Safari`浏览器的部分版本(比如`11`)中，你需要允许网站播放音频，否则此组件无法正常工作，[详见此](https://webkit.org/blog/7734/auto-play-policy-changes-for-macos/)。\n\n:::vue\n@name:使用\n---\n#demo\n>tpl\n<div style="width: 300px">\n    <ui-audio src="http://morning-ui-media.test.upcdn.net/audio/The%20xx%20-%20VCR.mp3"></ui-audio>\n</div>\n:::\n\n[[[形态]]]\n\n#### 支持\n\n|类型|支持|默认|\n|-|-|-|\n|尺寸|不支持|-|\n|色彩|不支持|-|\n|状态|不支持|-|\n\n[[[配置]]]\n\n:::vue\n@name:src\n---\n#config\n>conf-desc\n播放源文件。\n>conf-accept\n音频文件网络地址\n>conf-type\nString\n>conf-default\n`\'\'`\n---\n#demo\n>tpl\n<div style="width: 300px">\n    <ui-audio src="http://morning-ui-media.test.upcdn.net/audio/The%20xx%20-%20VCR.mp3"></ui-audio>\n</div>\n---\n#demo\n>desc\n如果不设置则无法播放。\n>tpl\n<div style="width: 300px">\n    <ui-audio></ui-audio>\n</div>\n:::\n\n:::vue\n@name:hide-time\n---\n#config\n>conf-desc\n隐藏时间。\n>conf-accept\n`true`<br>`false`\n>conf-type\nBoolean\n>conf-default\n`false`\n---\n#demo\n>tpl\n<div style="width: 300px">\n    <ui-audio src="http://morning-ui-media.test.upcdn.net/audio/The%20xx%20-%20VCR.mp3" :hide-time="true"></ui-audio>\n</div>\n:::\n\n:::vue\n@name:hide-progress\n---\n#config\n>conf-desc\n隐藏播放进度条。\n>conf-accept\n`true`<br>`false`\n>conf-type\nBoolean\n>conf-default\n`false`\n---\n#demo\n>tpl\n<div style="width: 300px">\n    <ui-audio src="http://morning-ui-media.test.upcdn.net/audio/The%20xx%20-%20VCR.mp3" :hide-progress="true"></ui-audio>\n</div>\n:::\n\n:::vue\n@name:autoplay\n---\n#config\n>conf-desc\n自动播放。\n>conf-accept\n`true`<br>`false`\n>conf-type\nBoolean\n>conf-default\n`false`\n---\n#demo\n>desc\n设置后音频会自动播放（此处不演示，可通过以下代码改为`:autoplay="true"`观看效果）。\n>tpl\n<div style="width: 300px">\n    <ui-audio src="http://morning-ui-media.test.upcdn.net/audio/The%20xx%20-%20VCR.mp3" :autoplay="false"></ui-audio>\n</div>\n:::\n\n[[[方法]]]\n\n:::vue\n@name:play([play])\n---\n#method\n>method-desc\n切换音频播放状态。\n>method-args\n|play|YES|切换到播放或暂停状态，不输入则切换到反向状态。|`undefined`<br>`true`<br>`false`|`Undefined`<br>`Boolean`|`undefined`|\n>method-return\n当前组件VM实例。\n---\n#demo\n>tpl\n<div style="width:300px">\n    <ui-audio ref="demo1" src="http://morning-ui-media.test.upcdn.net/audio/The%20xx%20-%20VCR.mp3"></ui-audio>\n    <br>\n    <ui-link js="window.morning.findVM(\'demo1\').play(true);">播放</ui-link>\n    <ui-link js="window.morning.findVM(\'demo1\').play(false);">暂停</ui-link>\n    <ui-link js="window.morning.findVM(\'demo1\').play();">切换到反向状态</ui-link>\n</div>\n:::\n\n:::vue\n@name:to([time])\n---\n#method\n>method-desc\n切换到音频指定位置。\n>method-args\n|time|YES|切换到音频指定位置(单位秒)。若超出音频时间返回则会重置。|`undefined`<br>播放位置(秒)`|`Undefined`<br>`Number`|`undefined`|\n>method-return\n当前组件VM实例。\n---\n#demo\n>tpl\n<div style="width:300px">\n    <ui-audio ref="demo2" src="http://morning-ui-media.test.upcdn.net/audio/The%20xx%20-%20VCR.mp3"></ui-audio>\n    <br>\n    <ui-link js="window.morning.findVM(\'demo2\').to(50);">切换到第50秒</ui-link>\n</div>\n:::\n\n:::vue\n@name:mute([toggle])\n---\n#method\n>method-desc\n切换静音。\n>method-args\n|toggle|YES|切换至静音，不输入则切换到反向状态。|`undefined`<br>`true`<br>`false`|`Undefined`<br>`Boolean`|`undefined`|\n>method-return\n当前组件VM实例。\n---\n#demo\n>tpl\n<div style="width:300px">\n    <ui-audio ref="demo3" src="http://morning-ui-media.test.upcdn.net/audio/The%20xx%20-%20VCR.mp3"></ui-audio>\n    <br>\n    <ui-link js="window.morning.findVM(\'demo3\').mute(true);">静音</ui-link>\n    <ui-link js="window.morning.findVM(\'demo3\').mute(false);">取消静音</ui-link>\n    <ui-link js="window.morning.findVM(\'demo3\').mute();">切换到反向状态</ui-link>\n</div>\n:::\n\n:::vue\n@name:volume(value)\n---\n#method\n>method-desc\n调整音量大小。\n>method-args\n|value|NO|音量大小|0-100之间的数字|`Number`|`0`|\n>method-return\n当前组件VM实例。\n---\n#demo\n>tpl\n<div style="width:300px">\n    <ui-audio ref="demo8" src="http://morning-ui-media.test.upcdn.net/audio/The%20xx%20-%20VCR.mp3"></ui-audio>\n    <br>\n    <ui-link js="window.morning.findVM(\'demo8\').volume(0);">音量设为0</ui-link>\n    <ui-link js="window.morning.findVM(\'demo8\').volume(30);">音量设为30</ui-link>\n    <ui-link js="window.morning.findVM(\'demo8\').volume(100);">音量设为100</ui-link>\n</div>\n:::\n\n:::vue\n@name:getInfo()\n---\n#method\n>method-desc\n获取当前播放音频信息。\n>method-return\n返回音频播放信息对象(包含音频源地址、时间长度、当前播放位置、静音状态、音量)。\n---\n#demo\n>tpl\n<div style="width:300px">\n    <ui-audio ref="demo4" src="http://morning-ui-media.test.upcdn.net/audio/The%20xx%20-%20VCR.mp3"></ui-audio>\n    <br>\n    <ui-link js="console.log(window.morning.findVM(\'demo4\').getInfo());">获取音频信息</ui-link>\n</div>\n:::\n\n[[[事件]]]\n\n:::vue\n@name:play\n---\n#event\n>event-desc\n当音频开始播放时触发。\n---\n#demo\n>tpl\n<div style="width:300px">\n    <ui-audio ref="demo5" src="http://morning-ui-media.test.upcdn.net/audio/The%20xx%20-%20VCR.mp3" @play="echo"></ui-audio>\n    <ui-link js="window.morning.findVM(\'demo5\').play(true);">点击触发play事件</ui-link>\n</div>\n>script\n{\n    methods : {\n        echo : function () {\n            console.log(\'demo5.play\', \'play event!\');\n        }\n    }\n}\n:::\n\n:::vue\n@name:pause\n---\n#event\n>event-desc\n当音频暂停播放时触发。\n---\n#demo\n>tpl\n<div style="width:300px">\n    <ui-audio ref="demo6" src="http://morning-ui-media.test.upcdn.net/audio/The%20xx%20-%20VCR.mp3" @pause="echo"></ui-audio>\n    <ui-link js="window.morning.findVM(\'demo6\').play(true);setTimeout(()=>window.morning.findVM(\'demo6\').play(false))">点击触发pause事件</ui-link>\n</div>\n>script\n{\n    methods : {\n        echo : function () {\n            console.log(\'demo6.pause\', \'pause event!\');\n        }\n    }\n}\n:::\n\n:::vue\n@name:play-change\n---\n#event\n>event-desc\n当音频播放状态改变时触发。\n---\n#demo\n>tpl\n<div style="width:300px">\n    <ui-audio ref="demo10" src="http://morning-ui-media.test.upcdn.net/audio/The%20xx%20-%20VCR.mp3" @play-change="echo"></ui-audio>\n    <ui-link js="window.morning.findVM(\'demo10\').play();">点击触发play-change事件</ui-link>\n</div>\n>script\n{\n    methods : {\n        echo : function () {\n            console.log(\'demo10.play-change\', \'play-change event!\');\n        }\n    }\n}\n:::\n\n:::vue\n@name:mute-change\n---\n#event\n>event-desc\n静音状态改变时触发。\n---\n#demo\n>tpl\n<div style="width:300px">\n    <ui-audio ref="demo7" src="http://morning-ui-media.test.upcdn.net/audio/The%20xx%20-%20VCR.mp3" @mute-change="echo"></ui-audio>\n    <ui-link js="window.morning.findVM(\'demo7\').mute();">点击触发mute-change事件</ui-link>\n</div>\n>script\n{\n    methods : {\n        echo : function () {\n            console.log(\'demo7.mute-change\', \'mute-change event!\');\n        }\n    }\n}\n:::\n\n:::vue\n@name:volume-change\n---\n#event\n>event-desc\n音量状态改变时触发。\n---\n#demo\n>tpl\n<div style="width:300px">\n    <ui-audio ref="demo9" src="http://morning-ui-media.test.upcdn.net/audio/The%20xx%20-%20VCR.mp3" @volume-change="echo"></ui-audio>\n    <ui-link js="window.morning.findVM(\'demo9\').volume(30);">点击触发volume-change事件</ui-link>\n</div>\n>script\n{\n    methods : {\n        echo : function () {\n            console.log(\'demo9.volume-change\', \'volume-change event!\');\n        }\n    }\n}\n:::\n\n:::vue\n@name:生命周期事件\n---\n#event\n>event-desc\n组件的生命周期事件，详见:[基础/事件/生命周期事件](/guide/event.html#生命周期事件)。\n---\n#demo\n>tpl\n<div>\n    <ui-audio\n        ref="demoEventLifecycle"\n        v-show="show"\n        src="http://morning-ui-media.test.upcdn.net/audio/The%20xx%20-%20VCR.mp3"\n        @created="echo(\'created\')"\n        @mounted="echo(\'mounted\')"\n        @before-update="echo(\'before-update\')"\n        @updated="echo(\'updated\')"\n        @before-destroy="echo(\'before-destroy\')"\n        @destroyed="echo(\'destroyed\')"\n    >{*text*}</ui-audio>\n    <br><br>\n    <ui-link js="this.text=\'生命周期事件\';">触发update</ui-link>\n    <ui-link js="this.$refs[\'demoEventLifecycle\'].$destroy();">触发destroy</ui-link>\n</div>\n>script\n{\n    data : function () {\n        return {\n           text : \'音频\',\n           show : true\n        };\n    },\n    methods : {\n        echo : function (name) {\n            console.log(\'demoEventLifecycle.console1\', name + \' event!\');\n        }\n    }\n}\n:::\n\n[[[源码]]]\n\n<iframe src="/report/coverage/lib/components/audio/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>\n\n')])])},o=[];t._withStripped=!0,i.d(e,"a",function(){return t}),i.d(e,"b",function(){return o})},851:function(n,e,i){"use strict";var t=d(i(1)),o=d(i(852));function d(n){return n&&n.__esModule?n:{default:n}}new t.default({el:"#root",render:function(n){return n(o.default)}})},852:function(n,e,i){"use strict";i.r(e);var t=i(276),o=i(253);for(var d in o)"default"!==d&&function(n){i.d(e,n,function(){return o[n]})}(d);var u=i(0),r=Object(u.a)(o.default,t.a,t.b,!1,null,null,null);r.options.__file="src/docs/pages/component/audio/index.vue",e.default=r.exports}});