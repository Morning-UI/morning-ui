!function(n){function e(e){for(var i,o,m=e[0],s=e[1],l=e[2],d=0,u=[];d<m.length;d++)o=m[d],r[o]&&u.push(r[o][0]),r[o]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(n[i]=s[i]);for(c&&c(e);u.length;)u.shift()();return a.push.apply(a,l||[]),t()}function t(){for(var n,e=0;e<a.length;e++){for(var t=a[e],i=!0,m=1;m<t.length;m++){var s=t[m];0!==r[s]&&(i=!1)}i&&(a.splice(e--,1),n=o(o.s=t[0]))}return n}var i={},r={74:0},a=[];function o(e){if(i[e])return i[e].exports;var t=i[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=n,o.c=i,o.d=function(n,e,t){o.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},o.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},o.t=function(n,e){if(1&e&&(n=o(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var i in n)o.d(t,i,function(e){return n[e]}.bind(null,i));return t},o.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return o.d(e,"a",e),e},o.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},o.p="/";var m=window.webpackJsonp=window.webpackJsonp||[],s=m.push.bind(m);m.push=e,m=m.slice();for(var l=0;l<m.length;l++)e(m[l]);var c=s;a.push([635,0]),t()}({1:function(n,e){n.exports=Vue},284:function(n,e,t){"use strict";var i=function(){var n=this.$createElement,e=this._self._c||n;return e("doc-component",{attrs:{page:this.page,hasPadding:!0}},[e("script",{attrs:{type:"text/markdown"}},[this._v('\n# 时间选择器 `<ui-timepicker>`\n\n<doc-component-status page="timepicker"></doc-component-status>\n\n[[[开始]]]\n\n定义时间选择器。\n\n:::vue\n@name:使用\n---\n#demo\n>tpl\n<div style="width:300px;">\n    <ui-timepicker form-name="时间"></ui-timepicker>\n</div>\n:::\n\n:::vue\n@name:自定义时间格式\n---\n#demo\n>desc\n时间选择器允许用户自定时间格式，使用中文时间。\n>tpl\n<div style="width:300px;">\n    <ui-timepicker form-name="时间" format="HH时mm分ss秒" v-model="value"></ui-timepicker>\n</div>\n>script\n{\n    data : {\n        value : "12时30分24秒\'"\n    }\n}\n---\n#demo\n>desc\n使用12小时制。<br><br>更多自定义格式见：[format配置](/component/timepicker.html#format)。\n>tpl\n<div style="width:300px;">\n    <ui-timepicker form-name="时间" format="h:m:s aa" v-model="value"></ui-timepicker>\n</div>\n>script\n{\n    data : {\n        value : "12:30:24 a.m."\n    }\n}\n:::\n\n:::vue\n@name:高亮当前修改时间单位\n---\n#demo\n>desc\n当用户在选择器上切换时，对应修改的时间单位区域会高亮。\n>tpl\n<div style="width:300px;">\n    <ui-timepicker form-name="时间" format="h:m:s" v-model="value"></ui-timepicker>\n</div>\n>script\n{\n    data : {\n        value : "8:30:24"\n    }\n}\n---\n#demo\n>desc\n当同时有多个时间单位匹配时，只会高亮第一个匹配到的。\n>tpl\n<div style="width:300px;">\n    <ui-timepicker form-name="时间" format="h:m:s aa | HH:mm:ss" v-model="value"></ui-timepicker>\n</div>\n>script\n{\n    data : {\n        value : "8:30:24 a.m. | 08:30:24"\n    }\n}\n:::\n\n[[[形态]]]\n\n:::preset\n@name:formStatus\n@uikey:timepicker\n@defaultValue:\'12:30:24\'\n:::\n\n:::vue\n@name:开启`is-list`时的禁用\n---\n#demo\n>tpl\n<div style="width:300px;">\n    <ui-timepicker state="normal" :is-list="true" :list="[\'09:00:00\', \'10:00:00\', \'11:00:00\']" v-model="value1" form-name="正常" ></ui-timepicker>\n    \n    <br>\n    \n    <ui-timepicker state="disabled" :is-list="true" :list="[\'09:00:00\', \'10:00:00\', \'11:00:00\']" v-model="value2" form-name="禁用" ></ui-timepicker>\n</div>\n>script\n{\n    data : {\n        value1 : [\'10:00:00\'],\n        value2 : [\'10:00:00\']\n    }\n}\n:::\n\n[[[配置]]]\n\n:::preset\n@name:formConfig\n@uikey:timepicker\n@defaultValue:\'12:30:24\'\n:::\n\n:::vue\n@name:inside-name\n---\n#config\n>conf-desc\n在组件内显示的名称，和`form-name`互为补充。\n>conf-accept\n名称\n>conf-type\nString\n>conf-default\n`\'\'`\n---\n#demo\n>tpl\n<div style="width:300px;">\n    <ui-timepicker inside-name="时间"></ui-timepicker>\n</div>\n:::\n\n:::vue\n@name:format\n---\n#config\n>conf-desc\n格式化展示的时间。\n<br><br>\n`format`允许自定义组件展示的时间格式，支持以下占位符：\n|单位|占位符|示例|\n|-|-|-|\n|上午/下午|A|AM, PM|\n||a|am, pm|\n||aa|a.m., p.m.|\n|小时|H|0, 1, ... 23|\n||HH|00, 01, ... 23|\n||h|0, 1, ... 12|\n||hh|00, 01, ... 12|\n|分钟|mm|00, 01, ... 59|\n||m|0, 1, ... 59|\n|秒|ss|00, 01, ... 59|\n||s|0, 1, ... 59|\n<br><br>\n<ui-quote color="light-blue">注意：使用12小时制时，需要加上午/下午占位符，否则可能出现无法正确解析时间的情况</ui-quote>\n>conf-accept\n时间格式化字符串(支持时间占位符见下方的演示)\n>conf-type\nString\n>conf-default\n`\'HH:mm:ss\'`\n---\n#demo\n>desc\n采用`|`分隔时间。\n>tpl\n<div style="width:300px;">\n    <ui-timepicker form-name="时间" format="HH | mm | ss" v-model="value"></ui-timepicker>\n</div>\n>script\n{\n    data : {\n        value : "12 | 30 | 24"\n    }\n}\n---\n#demo\n>desc\n同时显示多种时间格式(显示多个时间时，最后一个优先级最高)。\n>tpl\n<div style="width:400px;">\n    <ui-timepicker form-name="时间" format="HH:mm:ss(24小时制), h:m:s aa(12小时制)" v-model="value"></ui-timepicker>\n</div>\n>script\n{\n    data : {\n        value : "08:30:24(24小时制), 8:30:24 a.m.(12小时制)"\n    }\n}\n:::\n\n:::vue\n@name:align\n---\n#config\n>conf-desc\n时间对齐方式。\n>conf-accept\n`\'left\'` : 左对齐<br>`\'center\'` : 居中对齐<br>`\'right\'` : 右对齐\n>conf-type\nString\n>conf-default\n`\'left\'`\n---\n#demo\n>desc\n居中对齐。\n>tpl\n<div style="width:300px;">\n    <ui-timepicker form-name="时间" v-model="value" align="center"></ui-timepicker>\n</div>\n>script\n{\n    data : {\n        value : "12:30:24"\n    }\n}\n---\n#demo\n>desc\n右对齐。\n>tpl\n<div style="width:300px;">\n    <ui-timepicker form-name="时间" v-model="value" align="right"></ui-timepicker>\n</div>\n>script\n{\n    data : {\n        value : "12:30:24"\n    }\n}\n:::\n\n:::vue\n@name:selectable-range\n---\n#config\n>conf-desc\n可选时间范围，若不设置则不限。这是一个数组，支持以下格式：<br><br>`[开始时间, 结束时间]`: 指定单个可选范围<br>`[[开始时间1, 结束时间1], [开始时间2, 结束时间2]]`: 指定多个可选范围<br><br>可选时间将大于等于`开始时间`，小于等于`结束时间`。<br><br>`开始时间`和`结束时间`均为时间字符串需要符合`format`配置的时间格式。\n>conf-accept\n时间范围数组\n>conf-type\nArray\n>conf-default\n`undefined`\n---\n#demo\n>desc\n设置单个可选范围(8:30-12:00)。\n>tpl\n<div style="width:300px;">\n    <ui-timepicker form-name="时间" :selectable-range="[\'08:30:00\', \'12:00:00\']"></ui-timepicker>\n</div>\n---\n#demo\n>desc\n设置多个可选范围(08:03:02-12:30:00, 12:00:00-14:59:59, 20:30:10-21:30:20)。\n>tpl\n<div style="width:300px;">\n    <ui-timepicker form-name="时间" :selectable-range="[[\'08:03:02\', \'12:30:00\'], [\'12:00:00\', \'14:59:59\'], [\'20:30:10\', \'21:30:20\']]"></ui-timepicker>\n</div>\n---\n#demo\n>desc\n如果`v-model`超过`selectable-range`范围。\n>tpl\n<div style="width:300px;">\n    <ui-timepicker form-name="时间" :selectable-range="[\'08:00:00\', \'12:30:00\']" v-model="value" is-range></ui-timepicker>\n</div>\n>script\n{\n    data : {\n        value : [\'06:30:00\', \'13:45:30\']\n    }\n}\n:::\n\n:::vue\n@name:is-range\n---\n#config\n>conf-desc\n选择时间区间，开启后可以选在一个时间段。\n>conf-accept\n`true`<br>`false`\n>conf-type\nBoolean\n>conf-default\n`false`\n---\n#demo\n>tpl\n<div style="width:300px;">\n    <ui-timepicker form-name="时间" :is-range="true"></ui-timepicker>\n</div>\n---\n#demo\n>desc\n在开启`is-range`的情况下设置`v-model`。\n>tpl\n<div style="width:300px;">\n    <ui-timepicker form-name="时间" :is-range="true" v-model="value"></ui-timepicker>\n</div>\n>script\n{\n    data : {\n        value : [\'09:00:00\', \'10:30:30\']\n    }\n}\n:::\n\n:::vue\n@name:separator\n---\n#config\n>conf-desc\n时间区间选择时中间的分隔内容，只有开启`is-range`才有效。\n>conf-accept\n分隔字符串\n>conf-type\nString\n>conf-default\n`\'至\'`\n---\n#demo\n>tpl\n<div style="width:300px;">\n    <ui-timepicker form-name="时间" :is-range="true" separator="~"></ui-timepicker>\n</div>\n:::\n\n:::vue\n@name:separator-type\n---\n#config\n>conf-desc\n时间区间选择时中间的分隔内容的展现类型。\n>conf-accept\n`\'block\'`：块状<br>`\'inline\'`：行内\n>conf-type\nString\n>conf-default\n`\'block\'`\n---\n#demo\n>desc\n`inline`的分隔(一般配合`align`居中一起使用)。\n>tpl\n<div style="width:260px;">\n    <ui-timepicker form-name="时间" :is-range="true" separator="~" separator-type="inline" align="center"></ui-timepicker>\n</div>\n:::\n\n:::vue\n@name:start-name\n---\n#config\n>conf-desc\n时间区间选择时`开始时间`表单显示的名称，若设为`false`则显示`form-name`，只有开启`is-range`才有效。\n>conf-accept\n任意字符串<br>`false`:显示`form-name`\n>conf-type\nString<br>Boolean\n>conf-default\n`\'开始时间\'`\n---\n#demo\n>tpl\n<div style="width:300px;">\n    <ui-timepicker form-name="时间" :is-range="true" start-name="发车时间"></ui-timepicker>\n</div>\n---\n#demo\n>desc\n若设为`false`则显示`form-name`。\n>tpl\n<div style="width:300px;">\n    <ui-timepicker form-name="时间" :is-range="true" :start-name="false"></ui-timepicker>\n</div>\n:::\n\n:::vue\n@name:end-name\n---\n#config\n>conf-desc\n时间区间选择时`结束时间`表单显示的名称，若设为`false`则显示`form-name`，只有开启`is-range`才有效。若设置了`hide-name`则不会显示。\n>conf-accept\n任意字符串`false`:显示`form-name`\n>conf-type\nString<br>Boolean\n>conf-default\n`\'结束时间\'`\n---\n#demo\n>tpl\n<div style="width:300px;">\n    <ui-timepicker form-name="时间" :is-range="true" end-name="到达时间"></ui-timepicker>\n</div>\n---\n#demo\n>desc\n若设为`false`则显示`form-name`。\n>tpl\n<div style="width:300px;">\n    <ui-timepicker form-name="时间" :is-range="true" :end-name="false"></ui-timepicker>\n</div>\n:::\n\n:::vue\n@name:is-list\n---\n#config\n>conf-desc\n选择时间列表，开启后可指定可选的时间点。<br><br>通过`list`配置可以指定可选时间点的列表<br>通过`list-start`、`list-end`、`list-step`，可以设置开始/结束时间和步进来生成可选时间点的列表。\n>conf-accept\n`true`<br>`false`\n>conf-type\nBoolean\n>conf-default\n`false`\n---\n#demo\n>tpl\n<div style="width:300px;">\n    <ui-timepicker form-name="时间" :is-list="true" :list="[\'09:00:00\', \'10:00:00\', \'11:00:00\']"></ui-timepicker>\n</div>\n---\n#demo\n>desc\n`is-list`和`is-range`一起使用。\n>tpl\n<div style="width:340px;">\n    <ui-timepicker form-name="时间" :is-list="true" :is-range="true" :list="[\'09:00:00\', \'10:00:00\', \'11:00:00\']"></ui-timepicker>\n</div>\n:::\n\n:::vue\n@name:list\n---\n#config\n>conf-desc\n可选时间列表，这是一个数组，数组中每一项都是一个可选时间(需要符合`format`配置的时间格式)。当此配置和`list-start`、`list-end`、`list-step`一起使用时，组件会将这几个配置的可选时间进行合并。\n>conf-accept\n可选时间数组\n>conf-type\nArray\n>conf-default\n`[]`\n---\n#demo\n>tpl\n<div style="width:300px;">\n    <ui-timepicker form-name="时间" :is-list="true" :list="[\'09:00:00\', \'10:00:00\', \'11:00:00\']"></ui-timepicker>\n</div>\n:::\n\n:::vue\n@name:list-start\n---\n#config\n>conf-desc\n可选时间的起始时间，设为时间字符串启用，设为`false`停用。<br><br>必需配合`list-end`、`list-step`一起使用。\n>conf-accept\n可选时间的起始时间字符串(需要符合`format`配置的时间格式)\n>conf-type\nString<br>Boolean\n>conf-default\n`false`\n---\n#demo\n>tpl\n<div style="width:300px;">\n    <ui-timepicker form-name="时间" :is-list="true" list-start="09:00:00" list-end="15:00:00" list-step="01:30:00"></ui-timepicker>\n</div>\n---\n#demo\n>desc\n配合`list`一起使用。\n>tpl\n<div style="width:300px;">\n    <ui-timepicker form-name="时间" :is-list="true" list-start="09:00:00" list-end="15:00:00" list-step="01:30:00" :list="[\'21:00:00\', \'22:00:00\']"></ui-timepicker>\n</div>\n:::\n\n:::vue\n@name:list-end\n---\n#config\n>conf-desc\n可选时间的结束时间，设为时间字符串启用，设为`false`停用。<br><br>必需配合`list-start`、`list-step`一起使用。\n>conf-accept\n可选时间的结束时间字符串(需要符合`format`配置的时间格式)\n>conf-type\nString<br>Boolean\n>conf-default\n`false`\n---\n#demo\n>tpl\n<div style="width:300px;">\n    <ui-timepicker form-name="时间" :is-list="true" list-start="09:00:00" list-end="15:00:00" list-step="01:30:00"></ui-timepicker>\n</div>\n---\n#demo\n>desc\n配合`list`一起使用。\n>tpl\n<div style="width:300px;">\n    <ui-timepicker form-name="时间" :is-list="true" list-start="09:00:00" list-end="15:00:00" list-step="01:30:00" :list="[\'21:00:00\', \'22:00:00\']"></ui-timepicker>\n</div>\n:::\n\n:::vue\n@name:list-end\n---\n#config\n>conf-desc\n可选时间的间隔时间，当设置了`list-start`、`list-end`后，会将这段时间按`list-step`分割成多个可选时间点。<br><br>必需配合`list-start`、`list-end`一起使用。\n>conf-accept\n间隔时间字符串(必须是`时:分:秒`的格式)\n>conf-type\nString\n>conf-default\n`\'00:30:00\'`\n---\n#demo\n>tpl\n<div style="width:300px;">\n    <ui-timepicker form-name="时间" :is-list="true" list-start="09:00:00" list-end="15:00:00" list-step="01:30:00"></ui-timepicker>\n</div>\n---\n#demo\n>desc\n配合`list`一起使用。\n>tpl\n<div style="width:300px;">\n    <ui-timepicker form-name="时间" :is-list="true" list-start="09:00:00" list-end="15:00:00" list-step="01:30:00" :list="[\'21:00:00\', \'22:00:00\']"></ui-timepicker>\n</div>\n:::\n\n[[[方法]]]\n\n:::preset\n@name:formMethod\n@uikey:timepicker\n@value:\'12:30:24\'\n@defaultValue:\'12:30:24\'\n:::\n\n:::vue\n@name:getDate()\n---\n#method\n>method-desc\n获取当前选中时间的日期对象。\n>method-return\n日期对象。\n---\n#demo\n>tpl\n<div style="width:300px;">\n    <ui-timepicker ref="demo1" form-name="时间"></ui-timepicker>\n    <br><br> \n    <ui-link js="morning.findVM(\'demo1\').getDate();">获取当前选中时间的日期对象</ui-link>\n</div>\n:::\n\n[[[事件]]]\n\n:::preset\n@name:formEvent\n@uiname:时间选择器\n@uikey:timepicker\n@value:\'12:30:24\'\n@wrapStyle:width:300px;\n:::\n\n[[[表单值]]]\n\n#### 值类型\n\n- `Array` : 数组\n- `String` : 字符串(按`format`配置格式化)\n\n#### 值过滤\n\n- 若是范围时间选择(开启`isRange`配置)，则数值是一个字符串，则将数值转换成数组，该字符串作为第一项       \n- 若是单一时间选择(未开启`isRange`配置)，且数值是一个数组，则取第一项\n- 若数值的类型是字符串则检测字符串的时间格式是否符合`format`配置，若不符合尝试转换成符合的格式，若无法转换则转换成`00:00:00`的符合`format`的时间字符串。\n- 若数值的类型是一个数组，且数组长度为`0`则转换为`undefined`\n- 若数值的类型是一个数组，且数组长度大于`2`，则过滤多余的项目，只保留两项\n- 若数值的类型是一个数组，且数组长度大于`0`且小于`3`，会过滤数组中所有不是字符串类型的项目，然后按照第三条规则，对所有字符串项目进行过滤\n\n#### 值格式\n\n若是单一时间选择，则是时间字符串(符合`format`的格式化规则)\n若是范围时间选择，则是长度为2的数组，数组中第一项是开始时间点的时间字符串(符合`format`的格式化规则)，数组中第二项是结束时间点的时间字符串(符合`format`的格式化规则)。\n\n#### 默认值\n\n`undefined`\n\n:::preset\n@name:formValue\n@uikey:timepicker\n@uiname:时间选择器\n@valueType:timepicker\n@wrapStyle:width:300px;\n:::\n\n[[[源码]]]\n\n<iframe src="/report/coverage/lib/components/timepicker/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>\n\n')])])},r=[];i._withStripped=!0,t.d(e,"a",function(){return i}),t.d(e,"b",function(){return r})},635:function(n,e,t){"use strict";var i=a(t(1)),r=a(t(636));function a(n){return n&&n.__esModule?n:{default:n}}new i.default({el:"#root",render:function(n){return n(r.default)}})},636:function(n,e,t){"use strict";t.r(e);var i=t(284),r=t(90);for(var a in r)"default"!==a&&function(n){t.d(e,n,function(){return r[n]})}(a);var o=t(0),m=Object(o.a)(r.default,i.a,i.b,!1,null,null,null);m.options.__file="src/docs/pages/component/timepicker/index.vue",e.default=m.exports},90:function(n,e,t){"use strict";t.r(e);var i=t(91),r=t.n(i);for(var a in i)"default"!==a&&function(n){t.d(e,n,function(){return i[n]})}(a);e.default=r.a},91:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,r=t(2),a=(i=r)&&i.__esModule?i:{default:i};e.default={data:function(){return{page:"timepicker"}},components:{"doc-component":a.default}},n.exports=e.default}});