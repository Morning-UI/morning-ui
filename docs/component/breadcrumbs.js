!function(n){function e(e){for(var r,o,d=e[0],s=e[1],u=e[2],c=0,m=[];c<d.length;c++)o=d[c],l[o]&&m.push(l[o][0]),l[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(n[r]=s[r]);for(a&&a(e);m.length;)m.shift()();return i.push.apply(i,u||[]),t()}function t(){for(var n,e=0;e<i.length;e++){for(var t=i[e],r=!0,d=1;d<t.length;d++){var s=t[d];0!==l[s]&&(r=!1)}r&&(i.splice(e--,1),n=o(o.s=t[0]))}return n}var r={},l={10:0},i=[];function o(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=n,o.c=r,o.d=function(n,e,t){o.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},o.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},o.t=function(n,e){if(1&e&&(n=o(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)o.d(t,r,function(e){return n[e]}.bind(null,r));return t},o.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return o.d(e,"a",e),e},o.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},o.p="/";var d=window.webpackJsonp=window.webpackJsonp||[],s=d.push.bind(d);d.push=e,d=d.slice();for(var u=0;u<d.length;u++)e(d[u]);var a=s;i.push([790,0]),t()}({1:function(n,e){n.exports=Vue},224:function(n,e,t){"use strict";t.r(e);var r=t(225),l=t.n(r);for(var i in r)"default"!==i&&function(n){t.d(e,n,function(){return r[n]})}(i);e.default=l.a},225:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,l=t(2),i=(r=l)&&r.__esModule?r:{default:r};e.default={data:function(){return{page:"breadcrumbs"}},components:{"doc-component":i.default}},n.exports=e.default},259:function(n,e,t){"use strict";var r=function(){var n=this.$createElement,e=this._self._c||n;return e("doc-component",{attrs:{page:this.page,hasPadding:!0}},[e("script",{attrs:{type:"text/markdown"}},[this._v("\n# 面包屑 `<ui-breadcrumbs>`\n\n<doc-component-status page=\"breadcrumbs\"></doc-component-status>\n\n[[[开始]]]\n\n定义一个模面包屑导航。\n\n:::vue\n@name:使用\n---\n#demo\n>tpl\n<ui-breadcrumbs :list=\"list\"></ui-breadcrumbs>\n>script\n{\n    data : {\n        list : [\n            {'level1' : '第一级'},\n            {'level2' : '第二级'},\n            {'level3' : '第三级'}\n        ]\n    }\n}\n:::\n\n[[[形态]]]\n\n#### 支持\n\n|类型|支持|默认|\n|-|-|-|\n|尺寸|全部|`m`|\n|色彩|不支持|-|\n|状态|不支持|-|\n\n<a href=\"/guide/status.html\">查看形态文档</a>\n\n:::vue\n@name:尺寸\n---\n#renderer\n>name\nsize-repeat\n>tpl\n<ui-breadcrumbs\n    :list=\"[\n        {'level1' : '第一级'},\n        {'level2' : '第二级'},\n        {'level3' : '第三级'}\n    ]\" \n    size=\"{$sizeKey}\" \n    root-name=\"{$&sizeName}\"\n></ui-breadcrumbs>\n:::\n\n[[[配置]]]\n\n:::vue\n@name:root-name\n---\n#config\n>conf-desc\n根层级名称。\n>conf-accept\n名称<br>`false` : 不显示\n>conf-type\nString<br>Boolean\n>conf-default\n`false`\n---\n#demo\n>desc\n`root-name`不在层级关系中，仅仅作为一个提示存在。\n>tpl\n<ui-breadcrumbs :list=\"list\" root-name=\"首页\"></ui-breadcrumbs>\n>script\n{\n    data : {\n        list : [\n            {'level1' : '第一级'},\n            {'level2' : '第二级'},\n            {'level3' : '第三级'}\n        ]\n    }\n}\n:::\n\n:::vue\n@name:choose-root\n---\n#config\n>conf-desc\n可以选择跟层级，选择跟层级将会清空层级列表。\n>conf-accept\n`true`<br>`false`\n>conf-type\nBoolean\n>conf-default\n`false`\n---\n#demo\n>desc\n跟层级可被选中，选中时所有层级会被清空。\n>tpl\n<ui-breadcrumbs :list=\"list\" root-name=\"首页\" choose-root></ui-breadcrumbs>\n>script\n{\n    data : {\n        list : [\n            {'level1' : '第一级'},\n            {'level2' : '第二级'},\n            {'level3' : '第三级'}\n        ]\n    }\n}\n:::\n\n:::vue\n@name:list\n---\n#config\n>conf-desc\n默认面包屑层级。\n>conf-accept\n一个数组，数组中每一个对象代表一个层级，对象的键名是层级的值，对象的键值是层级的名称。对象的键名必须唯一。\n>conf-type\nArray\n>conf-default\n`[]`\n---\n#demo\n>desc\n跟层级可被选中，选中时所有层级会被清空。\n>tpl\n<ui-breadcrumbs :list=\"list\"></ui-breadcrumbs>\n>script\n{\n    data : {\n        list : [\n            {'level1' : '第一级'},\n            {'level2' : '第二级'},\n            {'level3' : '第三级'},\n            {'level4' : '第四级'},\n            {'level5' : '第五级'}\n        ]\n    }\n}\n:::\n\n:::vue\n@name:max-history\n---\n#config\n>conf-desc\n面包屑记录历史步骤最大数，每次切换计一次步骤。\n>conf-accept\n步骤数\n>conf-type\nBoolean\n>conf-default\n`20`\n---\n#demo\n>desc\n设置最多可回退步骤数，注意由于操作后立即会记录历史，所以：\n<br><br>\n- 如果限制最多回退1步，`max-history`设为2\n- 如果限制不准回退，`max-history`设为1\n>tpl\n<div>\n    \x3c!-- 设置最多回退1步 --\x3e\n    <ui-breadcrumbs ref=\"demo6\" :list=\"list\" :max-history=\"2\"></ui-breadcrumbs>\n    <ui-link js=\"morning.findVM('demo6').backLast();\">回退一步</ui-link>\n</div>\n>script\n{\n    data : {\n        list : [\n            {'level1' : '第一级'},\n            {'level2' : '第二级'},\n            {'level3' : '第三级'}\n        ]\n    }\n}\n:::\n\n:::vue\n@name:separator\n---\n#config\n>conf-desc\n指定分隔的文字及图标。如果是图标需要使用`<i>`标签，支持所有[图标](/component/iconfont.html)。\n>conf-accept\n文字<br>`<i>`图标\n>conf-type\nString\n>conf-default\n`'/'`\n---\n#demo\n>desc\n使用`>`来分隔。\n>tpl\n<ui-breadcrumbs :list=\"list\" separator=\">\"></ui-breadcrumbs>\n>script\n{\n    data : {\n        list : [\n            {'level1' : '第一级'},\n            {'level2' : '第二级'},\n            {'level3' : '第三级'}\n        ]\n    }\n}\n---\n#demo\n>desc\n使用图标来分隔。\n>tpl\n<ui-breadcrumbs :list=\"list\" separator=\"<i class='mo-icon-arrow-right'></i>\"></ui-breadcrumbs>\n>script\n{\n    data : {\n        list : [\n            {'level1' : '第一级'},\n            {'level2' : '第二级'},\n            {'level3' : '第三级'}\n        ]\n    }\n}\n:::\n\n[[[方法]]]\n\n:::vue\n@name:toLevel(index)\n---\n#method\n>method-desc\n锁定按钮，锁定后按钮不会触发`emit`事件。\n<br><br>\n注意由于第1级无法切换，所以：\n<br><br>\n- 切换到第2级，使用`toLevel(1)`\n- 切换到第n级，使用`toLevel(n - 1)`\n>method-args\n|index|NO|若是数字则切换到指定深度的层级，若是字符串切换到指定键名的层级|数值(指定的层级)<br>字符串(指定键名的层级)|`Number`<br>`String`|`undefined`|\n>method-return\n当前组件VM实例。\n---\n#demo\n>tpl\n<div>\n    <ui-breadcrumbs ref=\"demo7\" :list=\"list\"></ui-breadcrumbs>\n    <ui-link js=\"morning.findVM('demo7').toLevel(1);\">切换到第2级</ui-link>\n    <ui-link js=\"morning.findVM('demo7').toLevel('level3');\">切换到level3</ui-link>\n    <ui-link js=\"morning.findVM('demo7').backLast();\">恢复</ui-link>\n</div>\n>script\n{\n    data : {\n        list : [\n            {'level1' : '第一级'},\n            {'level2' : '第二级'},\n            {'level3' : '第三级'},\n            {'level4' : '第四级'},\n            {'level5' : '第五级'}\n        ]\n    }\n}\n:::\n\n:::vue\n@name:getLevel()\n---\n#method\n>method-desc\n获取当前层级信息，包括：\n<br><br>\n- keyList : 层级的key数组\n- nameList : 层级的name数组\n- currentKey : 当前选中的key\n- currentName : 当前选中的name\n- length : 层级长度\n>method-return\n返回一个层级信息对象。\n---\n#demo\n>tpl\n<div>\n    <ui-breadcrumbs ref=\"demo8\" :list=\"list\"></ui-breadcrumbs>\n    <ui-link js=\"alert(JSON.stringify(morning.findVM('demo8').getLevel()));\">获取层级信息</ui-link>\n</div>\n>script\n{\n    data : {\n        list : [\n            {'level1' : '第一级'},\n            {'level2' : '第二级'},\n            {'level3' : '第三级'}\n        ]\n    }\n}\n:::\n\n:::vue\n@name:getHistory()\n---\n#method\n>method-desc\n获取当前面包屑历史。\n>method-return\n返回一个数组，数组中每一项都是一个完整的层级信息，可以通过`setLevel()`方法设置。\n---\n#demo\n>tpl\n<div>\n    <ui-breadcrumbs ref=\"demo9\" :list=\"list\"></ui-breadcrumbs>\n    <ui-link js=\"alert(JSON.stringify(morning.findVM('demo9').getHistory()));\">获取历史步骤</ui-link>\n</div>\n>script\n{\n    data : {\n        list : [\n            {'level1' : '第一级'},\n            {'level2' : '第二级'},\n            {'level3' : '第三级'}\n        ]\n    }\n}\n:::\n\n:::vue\n@name:backLast([num])\n---\n#method\n>method-desc\n回退步骤。\n>method-args\n|num|YES|指定要返回的步数，从最后开始，从1开始|回退的步骤数|`Number`|`1`|\n>method-return\n当前组件VM实例。\n---\n#demo\n>tpl\n<div>\n    <ui-breadcrumbs ref=\"demo10\" :list=\"list\"></ui-breadcrumbs>\n    <ui-link js=\"morning.findVM('demo10').backLast(1);\">回退一步</ui-link>\n    <ui-link js=\"morning.findVM('demo10').backLast(2);\">回退两步</ui-link>\n</div>\n>script\n{\n    data : {\n        list : [\n            {'level1' : '第一级'},\n            {'level2' : '第二级'},\n            {'level3' : '第三级'},\n            {'level4' : '第四级'},\n            {'level5' : '第五级'}\n        ]\n    }\n}\n:::\n\n:::vue\n@name:addLevel(level)\n---\n#method\n>method-desc\n添加一个层级，注意层级的键名不能重复。\n>method-args\n|level|NO|添加的层级|对象，键名为层级的值，键值为层级的名称|`Object`|`undefined`|\n>method-return\n当前组件VM实例。\n---\n#demo\n>tpl\n<div>\n    <ui-breadcrumbs ref=\"demo11\" :list=\"list\"></ui-breadcrumbs>\n    <ui-link js=\"morning.findVM('demo11').addLevel({'level4':'新层级'});\">新增一个层级</ui-link>\n</div>\n>script\n{\n    data : {\n        list : [\n            {'level1' : '第一级'},\n            {'level2' : '第二级'},\n            {'level3' : '第三级'}\n        ]\n    }\n}\n:::\n\n:::vue\n@name:setLevel(levelList)\n---\n#method\n>method-desc\n重设整个层级关系。\n>method-args\n|levelList|NO|添加的层级|一个数组，数组中每一个对象代表一个层级，对象的键名是层级的值，对象的键值是层级的名称|`Array`|`undefined`|\n>method-return\n当前组件VM实例。\n---\n#demo\n>tpl\n<div>\n    <ui-breadcrumbs ref=\"demo12\" :list=\"list\"></ui-breadcrumbs>\n    <ui-link js=\"morning.findVM('demo12').setLevel([{'level6':'第六级'},{'level7':'第七级'}]);\">重设整个层级</ui-link>\n    <ui-link js=\"morning.findVM('demo12').backLast();\">恢复</ui-link>\n</div>\n>script\n{\n    data : {\n        list : [\n            {'level1' : '第一级'},\n            {'level2' : '第二级'},\n            {'level3' : '第三级'}\n        ]\n    }\n}\n:::\n\n[[[事件]]]\n\n:::vue\n@name:emit\n---\n#event\n>event-desc\n当选择层级改变时触发。\n---\n#demo\n>tpl\n<ui-breadcrumbs ref=\"demo13\" :list=\"list\" @emit=\"echo\"></ui-breadcrumbs>\n>script\n{\n    data : {\n        list : [\n            {'level1' : '第一级'},\n            {'level2' : '第二级'},\n            {'level3' : '第三级'}\n        ]\n    },\n    methods : {\n        echo : function (name) {\n            console.log('demo13.console1', `emit event!`);\n        }\n    }\n}\n:::\n\n:::vue\n@name:生命周期事件\n---\n#event\n>event-desc\n组件的生命周期事件，详见:[基础/事件/生命周期事件](/guide/event.html#生命周期事件)。\n---\n#demo\n>tpl\n<div>\n    <ui-breadcrumbs\n        ref=\"demoEventLifecycle\"\n        v-show=\"show\"\n        :list=\"[\n            {'level1' : '第一级'},\n            {'level2' : '第二级'},\n            {'level3' : '第三级'}\n        ]\"\n        @created=\"echo('created')\"\n        @mounted=\"echo('mounted')\"\n        @before-update=\"echo('before-update')\"\n        @updated=\"echo('updated')\"\n        @before-destroy=\"echo('before-destroy')\"\n        @destroyed=\"echo('destroyed')\"\n    >{*text*}</ui-breadcrumbs>\n    <br><br>\n    <ui-link js=\"this.text='生命周期事件';\">触发update</ui-link>\n    <ui-link js=\"this.$refs['demoEventLifecycle'].$destroy();\">触发destroy</ui-link>\n</div>\n>script\n{\n    data : function () {\n        return {\n           text : '面包屑',\n           show : true\n        };\n    },\n    methods : {\n        echo : function (name) {\n            console.log('demoEventLifecycle.console1', name + ' event!');\n        }\n    }\n}\n:::\n\n[[[源码]]]\n\n<iframe src=\"/report/coverage/lib/components/breadcrumbs/index.vue.html\" name=\"codeFrame\" frameborder=\"0\" onload=\"this.height=codeFrame.document.body.scrollHeight\"></iframe>\n\n")])])},l=[];r._withStripped=!0,t.d(e,"a",function(){return r}),t.d(e,"b",function(){return l})},790:function(n,e,t){"use strict";var r=i(t(1)),l=i(t(791));function i(n){return n&&n.__esModule?n:{default:n}}new r.default({el:"#root",render:function(n){return n(l.default)}})},791:function(n,e,t){"use strict";t.r(e);var r=t(259),l=t(224);for(var i in l)"default"!==i&&function(n){t.d(e,n,function(){return l[n]})}(i);var o=t(0),d=Object(o.a)(l.default,r.a,r.b,!1,null,null,null);d.options.__file="src/docs/pages/component/breadcrumbs/index.vue",e.default=d.exports}});