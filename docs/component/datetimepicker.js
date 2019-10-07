!function(n){function e(e){for(var i,r,o=e[0],c=e[1],m=e[2],s=0,u=[];s<o.length;s++)r=o[s],a[r]&&u.push(a[r][0]),a[r]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(n[i]=c[i]);for(l&&l(e);u.length;)u.shift()();return d.push.apply(d,m||[]),t()}function t(){for(var n,e=0;e<d.length;e++){for(var t=d[e],i=!0,o=1;o<t.length;o++){var c=t[o];0!==a[c]&&(i=!1)}i&&(d.splice(e--,1),n=r(r.s=t[0]))}return n}var i={},a={25:0},d=[];function r(e){if(i[e])return i[e].exports;var t=i[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=n,r.c=i,r.d=function(n,e,t){r.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},r.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},r.t=function(n,e){if(1&e&&(n=r(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var i in n)r.d(t,i,function(e){return n[e]}.bind(null,i));return t},r.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return r.d(e,"a",e),e},r.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},r.p="/";var o=window.webpackJsonp=window.webpackJsonp||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var m=0;m<o.length;m++)e(o[m]);var l=c;d.push([813,0]),t()}({1:function(n,e){n.exports=Vue},215:function(n,e,t){"use strict";t.r(e);var i=t(216),a=t.n(i);for(var d in i)"default"!==d&&function(n){t.d(e,n,function(){return i[n]})}(d);e.default=a.a},216:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,a=t(2),d=(i=a)&&i.__esModule?i:{default:i};e.default={data:function(){return{page:"datetimepicker"}},components:{"doc-component":d.default}},n.exports=e.default},300:function(n,e,t){"use strict";var i=function(){var n=this.$createElement,e=this._self._c||n;return e("doc-component",{attrs:{page:this.page,hasPadding:!0}},[e("script",{attrs:{type:"text/markdown"}},[this._v('\n# 日期时间选择器 `<ui-datetimepicker>`\n\n<doc-component-status page="datetimepicker"></doc-component-status>\n\n[[[开始]]]\n\n定义日期时间选择器。\n\n注意：日期时间选择器的`set()` / `get()`方法设置/获取的数值为格式化后的日期时间字符串，如需获取可计算的日期对象，请使用`getDate()`方法。\n\n:::vue\n@name:使用\n---\n#demo\n>tpl\n<div style="width:300px;">\n    <ui-datetimepicker form-name="日期时间"></ui-datetimepicker>\n</div>\n:::\n\n:::vue\n@name:自定义日期时间格式\n---\n#demo\n>desc\n日期时间选择器允许用户自定日期时间格式，使用中文时间。\n<br><br>\n更多自定义格式见：[format配置](/component/datetimepicker.html#format)。\n>tpl\n<div style="width:300px;">\n    <ui-datetimepicker form-name="日期时间" :date="+new Date(\'2018-03-23\')" format="yyyy年MM月dd日 HH点mm分ss秒" v-model="value"></ui-datetimepicker>\n</div>\n>script\n{\n    data : {\n        value : \'2018年03月23日 18点10分18秒\'\n    }\n}\n:::\n\n:::vue\n@name:范围日期时间选择\n---\n#demo\n>tpl\n<div style="width:460px;">\n    <ui-datetimepicker form-name="日期时间" :is-range="true"></ui-datetimepicker>\n</div>\n:::\n\n:::vue\n@name:使用相对日期时间\n---\n#demo\n>desc\n日期时间选择器也支持手动输入相对日期时间(需要开启`relative`配置)。\n<br><br>\n由于是相对日期时间，当通过`getDate()`方法获取日期时间时，结果会随着时间变化。\n<br><br>\n相对日期时间支持以某一日期时间为起点的任意距离的日期时间，详见[配置/relative](#relative)。\n>tpl\n<div style="width:300px;">\n    <ui-datetimepicker form-name="相对日期" relative v-model="value" ref="demo5"></ui-datetimepicker>\n    <ui-link js="console.log(morning.findVM(\'demo5\').getDate());">获取一天前的时间对象</ui-link>\n</div>\n>script\n{\n    data : {\n        value : "now - 1D"\n    }\n}\n:::\n\n:::vue\n@name:定义底部额外内容\n---\n#demo\n>desc\n可以通过名为`footer`的`slot`来定义日期选择器底部的内容。\n>tpl\n<div style="width:300px;">\n    <ui-datetimepicker\n        form-name="日期时间"\n        ref="demo17"\n        :quick-pick="[\n            \'今天\',\n            \'昨天\',\n            \'2 天前\',\n            \'3 天前\',\n            \'1 周前\',\n            \'1 月前\',\n            \'1 年前\',\n        ]"\n    >\n        <div slot="footer" style="text-align:right;">\n            <ui-btn size="xs" class="plain" color="minor" style="vertical-align:top;" @emit="$refs[\'demo17\'].set(undefined)">清空</ui-btn>\n            <ui-btn size="xs" @emit="$refs[\'demo17\'].togglePicker(false)">确定</ui-btn>\n        </div>\n    </ui-datetimepicker>\n</dic>\n---\n#demo\n>desc\n配合`is-range`一起使用。\n>tpl\n<div style="width:420px;">\n    <ui-datetimepicker\n        form-name="日期时间"\n        ref="demo18"\n        is-range\n        :quick-pick="[\n            \'本周\',\n            \'本月\',\n            \'今年\',\n        ]"\n    >\n        <div slot="footer" style="text-align:right;">\n            <ui-btn size="xs" class="plain" color="minor" style="vertical-align:top;" @emit="$refs[\'demo18\'].set(undefined)">清空</ui-btn>\n            <ui-btn size="xs" @emit="$refs[\'demo18\'].togglePicker(false)">确定</ui-btn>\n        </div>\n    </ui-datetimepicker>\n</dic>\n:::\n\n[[[形态]]]\n\n:::preset\n@name:formStatusWithSize\n@uikey:datetimepicker\n@defaultValue:\'2018-03-23 18:10:18\'\n@attrs: :date="+new Date(\'2018-03-23 18:10:18\')"\n:::\n\n[[[配置]]]\n\n:::preset\n@name:formConfig\n@uikey:datetimepicker\n@defaultValue:\'2018-03-23 18:10:18\'\n@attrs: :date="+new Date(\'2018-03-23 18:10:18\')"\n:::\n\n:::vue\n@name:inside-name\n---\n#config\n>conf-desc\n在组件内显示的名称，和`form-name`互为补充。\n>conf-accept\n名称\n>conf-type\nString\n>conf-default\n`\'请选择\'`\n---\n#demo\n>tpl\n<div style="width:300px">\n    <ui-datetimepicker inside-name="日期时间"></ui-datetimepicker>\n</div>\n:::\n\n:::vue\n@name:date\n---\n#config\n>conf-desc\n日历所在的日期，日历将会切换到`date`所在的月份。\n>conf-accept\n时间戳\n>conf-type\nNumber\n>conf-default\n`+new Date()`\n---\n#demo\n>tpl\n<div style="width:300px">\n    <ui-datetimepicker :date="+new Date(\'2018-03-23\')"></ui-datetimepicker>\n</div>\n:::\n\n:::vue\n@name:format\n---\n#config\n>conf-desc\n格式化展示的日期时间。\n<br><br>\n`format`允许自定义组件展示的日期时间格式，支持以下占位符：\n<br><br>\n|单位|占位符|示例|\n|-|-|-|\n|年份|yy|00, 01, ..., 99|\n||yyyy|1900, 1901, ..., 2099|\n|季度|Q|1, 2, 3, 4|\n||Qo|1st, 2nd, 3rd, 4th|\n||QQ|01, 02, 03, 04|\n||QQQ|Q1, Q2, Q3, Q4|\n|月份|M|1, 2, ..., 12|\n||Mo|1st, 2nd, ..., 12th|\n||MM|01, 02, ..., 12|\n||MMM|Jan, Feb, ..., Dec|\n||MMMM|January, February, ..., December|\n|一月中第几天|d|1, 2, ..., 31|\n||do|1st, 2nd, ..., 31st|\n||dd|01, 02, ..., 31|\n|一周中第几天|i|1, 2, 3, ..., 7|\n||io|1st, 2nd, ..., 7th|\n||iii|Mon, Tue, Wed, ..., Su|\n||iiii|Monday, Tuesday, ..., Sunday|\n||iiiiii|Mo, Tu, We, Th, Fr, Su, Sa|\n|一年中第几天|D|1, 2, ..., 366|\n||DDD|001, 002, ..., 366|\n||DDDo|1st, 2nd, ..., 366th|\n|上午/下午|a|AM, PM|\n||aaaa|a.m., p.m.|\n|小时|H|0, 1, ... 23|\n||HH|00, 01, ... 23|\n||h|0, 1, ... 12|\n||hh|00, 01, ... 12|\n|分钟|mm|00, 01, ... 59|\n||m|0, 1, ... 59|\n|秒|ss|00, 01, ... 59|\n||s|0, 1, ... 59|\n>conf-accept\n日期时间格式化字符串(支持日期占位符见下方的演示)\n>conf-type\nString\n>conf-default\n`\'yyyy-MM-dd HH:mm:ss\'`\n---\n#demo\n>desc\n采用`|`分隔日期时间。\n>tpl\n<div style="width:300px;">\n    <ui-datetimepicker form-name="日期时间" :date="+new Date(\'2018-03-23\')" format="yyyy | MM | dd | HH | mm | ss" v-model="value"></ui-datetimepicker>\n</div>\n>script\n{\n    data : {\n        value : \'2018 | 03 | 23 | 18 | 10 | 08\'\n    }\n}\n---\n#demo\n>desc\n同时显示多种日期时间格式(显示多个日期时，最后一个优先级最高)。\n>tpl\n<div style="width:400px;">\n    <ui-datetimepicker form-name="日期时间" :date="+new Date(\'2018-03-23\')" format="yyyy-MM-dd HH:mm:ss | HH:m:s, MMM dd, yyyy" v-model="value"></ui-datetimepicker>\n</div>\n>script\n{\n    data : {\n        value : \'2018-03-23 18:10:08 | 18:10:8, Mar 23, 2018\'\n    }\n}\n:::\n\n:::vue\n@name:align\n---\n#config\n>conf-desc\n日期时间对齐方式。\n>conf-accept\n`\'left\'` : 左对齐<br>`\'center\'` : 居中对齐<br>`\'right\'` : 右对齐\n>conf-type\nString\n>conf-default\n`\'left\'`\n---\n#demo\n>desc\n居中对齐。\n>tpl\n<div style="width:300px;">\n    <ui-datetimepicker form-name="日期时间" :date="+new Date(\'2018-03-23\')" v-model="value" align="center"></ui-datetimepicker>\n</div>\n>script\n{\n    data : {\n        value : \'2018-03-23 18:10:18\'\n    }\n}\n---\n#demo\n>desc\n右对齐。\n>tpl\n<div style="width:300px;">\n    <ui-datetimepicker form-name="日期时间" :date="+new Date(\'2018-03-23\')" v-model="value" align="right"></ui-datetimepicker>\n</div>\n>script\n{\n    data : {\n        value : \'2018-03-23 18:10:18\'\n    }\n}\n:::\n\n:::vue\n@name:quick-pick\n---\n#config\n>conf-desc\n显示快速选择项，这个配置是一个数组，数组中的每一项都是一个快速选择项目。\n<br><br>\n数组项支持三种类型：\n<br><br>\n__关键词__ ：支持字符串格式的快速选择关键词。\n<br><br>\n未开启`is-range`情况下包括：`今天`、`昨天`、`明天`、`n 秒前`、`n 分钟前`、`n 小时前`、`n 天前`、`n 周前`、`n 月前`、`n 年前`、`n 秒后`、`n 分钟后`、`n 小时后`、`n 天后`、`n 周后`、`n 月后`、`n 年后`(需要注意`n`后面有空格)，例如：`2 天前`、`3 周前`。\n<br><br>\n开启`is-range`情况下包括：`本周`、`本月`、`今年`、`最近 n 秒`、`最近 n 分钟`、`最近 n 小时`、`最近 n 天`、`最近 n 周`、`最近 n 月`、`最近 n 年`、`未来 n 秒`、`未来 n 分钟`、`未来 n 小时`、`未来 n 天`、`未来 n 周`、`未来 n 月`、`未来 n 年`(需要注意`n`前后有空格)，例如：`未来 2 周`、`最近 3 月`。\n<br><br>\n__时间设置__：是一个对象。\n<br><br>\n未开启`is-range`情况下包含`name`和`pick`两个属性。<br>`name`是快速选择项展现的名称。\n<br><br>\n`pick`支持`数字`、`日期对象`、`相对日期时间表达式`。\n<br>\n若`pick`是`数字`则代表相对秒数，会选中当前日期时间和`pick`相加后的日期时间，所以`pick`是负数代表过去的日期时间，正数则代表未来的日期时间。\n<br>\n若`pick`是`日期对象`则会选中`pick`所表示的日期时间。\n<br>\n若`pick`是`相对日期时间表达式`，必须开启`relative`配置，详见：[配置/relative](#relative)。\n<br><br>\n开启`is-range`情况下包含`name`、`start`、`end`三个属性。\n<br><br>\n`name`是快速选择项展现的名称。\n<br>\n`start`和`end`是`日期对象`分别表示选择日期时间段的开始和结束（支持`数字`、`日期对象`、`相对日期时间表达式`）。\n<br><br>\n你可以混合使用多种类型的快速选择项(详见[下面的示例](#quick-pick))。\n>conf-accept\n字符串(关键词)<br>对象(时间设置)\n>conf-type\nArray\n>conf-default\n`[]`\n---\n#demo\n>desc\n你可以通过预设的关键词来设置日期快速选择项。\n>tpl\n<div style="width:300px;">\n    <ui-datetimepicker\n        form-name="日期时间"\n        :quick-pick="[\n            \'30 秒前\',\n            \'5 分钟前\',\n            \'1 小时前\',\n            \'今天\',\n            \'昨天\',\n            \'2 天前\',\n            \'3 天前\',\n            \'1 周前\',\n            \'1 月前\',\n            \'1 年前\'\n        ]"\n    ></ui-datetimepicker>\n</div>\n---\n#demo\n>desc\n未来的时间也可以设置。\n>tpl\n<div style="width:300px;">\n    <ui-datetimepicker\n        form-name="日期时间"\n        :quick-pick="[\n            \'30 秒后\',\n            \'5 分钟后\',\n            \'1 小时后\',\n            \'明天\',\n            \'3 天后\',\n            \'3 周后\',\n            \'3 月后\',\n            \'1 年后\'\n        ]"\n    ></ui-datetimepicker>\n</div>\n---\n#demo\n>desc\n也可以通过选中日期时间相对与现在的秒数(正数为未来，负数为过去)来设置。\n>tpl\n<div style="width:300px;">\n    <ui-datetimepicker\n        form-name="日期时间"\n        :quick-pick="[\n            {name: \'一分钟后\', pick: 60},\n            {name: \'半小时前\', pick: -1800},\n            {name: \'今天\', pick: 0},\n            {name: \'明天\', pick: 86400}\n        ]"\n    ></ui-datetimepicker>\n</div>\n---\n#demo\n>desc\n也可以通过选中日期的绝对值来设置。\n>tpl\n<div style="width:300px;">\n    <ui-datetimepicker form-name="日期时间" :quick-pick="[{name: \'生日派对\', pick: new Date(\'2018-03-23 19:00:00\')}]"></ui-datetimepicker>\n</div>\n---\n#demo\n>desc\n配合`is-range`使用时。\n>tpl\n<div style="width:460px;">\n    <ui-datetimepicker\n        form-name="日期"\n        is-range\n        :quick-pick="[\n            \'本周\',\n            \'本月\',\n            \'今年\',\n            \'最近 30 秒\',\n            \'最近 10 分钟\',\n            \'未来 5 分钟\',\n            \'最近 1 小时\',\n            \'最近 7 天\',\n            \'未来 7 天\',\n            \'最近 1 周\',\n            \'最近 2 月\',\n            \'未来 3 年\',\n            {\n                name: \'2015-2017\',\n                start: new Date(\'2015-01-01 00:00:00\'),\n                end: new Date(\'2017-12-31 23:59:59\')\n            }\n        ]"\n    ></ui-datetimepicker>\n</div>\n---\n#demo\n>desc\n开启`relative`配置，并设置`相对日期时间表达式`。相对日期时间详见：[配置/relative](#relative)\n>tpl\n<div style="width:300px;">\n    <ui-datetimepicker\n        form-name="日期时间"\n        relative\n        :quick-pick="[\n            {\n                name: \'五分钟前\',\n                pick : \'now - 5m\'\n            },\n            {\n                name: \'季度末\',\n                pick : \'endOfQuarter\'\n            },\n            {\n                name : \'年度初\',\n                pick : \'startOfYear\'\n            }\n        ]"\n    ></ui-datetimepicker>\n</div>\n---\n#demo\n>desc\n开启`relative`和`is-range`配置，配合`相对日期时间表达式`。相对日期时间详见：[配置/relative](#relative)\n>tpl\n<div style="width:460px;">\n    <ui-datetimepicker\n        form-name="日期时间"\n        is-range\n        relative\n        :quick-pick="[\n            {\n                name : \'近一小时\',\n                start : \'now - 1h\',\n                end : \'now\'\n            },\n            {\n                name : \'本周截止目前\',\n                start : \'startOfWeek\',\n                end : \'now\'\n            },\n            {\n                name: \'本季度\',\n                start : \'startOfQuarter\',\n                end : \'endOfQuarter\'\n            }\n        ]"\n    ></ui-datetimepicker>\n</div>\n:::\n\n:::vue\n@name:date-selectable-range\n---\n#config\n>conf-desc\n可选日期时间范围，是一个连续的时间段，可以限制到的时分秒，若不设置则不限。这是一个数组，支持以下格式：<br><br>`[开始日期, 结束日期]`: 指定单个可选范围<br>`[[开始日期1, 结束日期1], [开始日期2, 结束日期2]]`: 指定多个可选范围<br><br>可选日期将大于等于`开始日期`，小于等于`结束日期`。<br><br>`开始日期`和`结束日期`均为日期字符串需要符合`format`配置的日期格式。\n<br><br>\n此配置无法和`relative`一起使用。\n>conf-accept\n日期范围数组\n>conf-type\nArray\n>conf-default\n`undefined`\n---\n#demo\n>desc\n设置单个可选范围(2018-03-08至2018-03-23)。\n>tpl\n<div style="width:300px;">\n    <ui-datetimepicker form-name="日期时间" :date="+new Date(\'2018-03-23\')" :date-selectable-range="[\'2018-03-08 00:00:00\', \'2018-03-23 00:00:00\']"></ui-datetimepicker>\n</div>\n---\n#demo\n>desc\n设置具体时间(2018-03-08 12:30:00至2018-03-23 20:59:59)。\n>tpl\n<div style="width:300px;">\n    <ui-datetimepicker form-name="日期时间" :date="+new Date(\'2018-03-23\')" :date-selectable-range="[\'2018-03-08 12:30:00\', \'2018-03-23 20:59:59\']"></ui-datetimepicker>\n</div>\n---\n#demo\n>desc\n设置多个可选范围(2018-02-10至2018-02-20, 2018-02-20至2018-03-02, 2018-03-15至2018-03-25, 2018-03-20至2018-03-28, 2018-04-02至2018-04-05)。\n>tpl\n<div style="width:300px;">\n    <ui-datetimepicker\n        form-name="日期时间"\n        :date="+new Date(\'2018-03-23\')"\n        :date-selectable-range="[\n            [\'2018-02-10 00:00:00\', \'2018-02-20 00:00:00\'],\n            [\'2018-02-23 00:00:00\', \'2018-03-02 00:00:00\'],\n            [\'2018-03-15 12:30:00\', \'2018-03-25 20:00:00\'],\n            [\'2018-03-20 00:00:00\', \'2018-03-28 18:00:00\'],\n            [\'2018-04-02 00:00:00\', \'2018-04-05 00:00:00\']\n        ]"\n    ></ui-datetimepicker>\n</div>\n---\n#demo\n>desc\n在使用`selectable-range`的同时开启`is-range`。\n>tpl\n<div style="width:460px;">\n    <ui-datetimepicker form-name="日期时间" :date="+new Date(\'2018-03-23\')" :date-selectable-range="[\'2018-03-08 00:00:00\', \'2018-03-23 00:00:00\']" is-range></ui-datetimepicker>\n</div>\n---\n#demo\n>desc\n如果`v-model`超过`selectable-range`范围。\n>tpl\n<div style="width:460px;">\n    <ui-datetimepicker form-name="日期时间" :date="+new Date(\'2018-03-23\')" :date-selectable-range="[\'2018-03-08 00:00:00\', \'2018-03-23 00:00:00\']" v-model="value" is-range></ui-datetimepicker>\n</div>\n>script\n{\n    data : {\n        value : [\'2018-03-04 12:00:00\', \'2018-03-29 12:00:00\']\n    }\n}\n:::\n\n:::vue\n@name:time-selectable-range\n---\n#config\n>conf-desc\n可选时间范围，若不设置则不限。这是一个数组，支持以下格式：<br><br>`[开始时间, 结束时间]`: 指定单个可选范围<br><br>可选时间将大于等于`开始时间`，小于等于`结束时间`。<br><br>`开始时间`和`结束时间`均为时间字符串需要符合`format`配置的时间格式。<br><br>此配置用于限制每天可选的时间范围(仅支持一个范围)，若需要限制一个时间段请使用`date-selectable-range`配置。<br><br>如同时配置了`date-selectable-range`则取可选范围的交集。\n<br><br>\n此配置无法和`relative`一起使用。\n>conf-accept\n时间范围数组\n>conf-type\nArray\n>conf-default\n`undefined`\n---\n#demo\n>desc\n设置每天可选时间为(8:00-18:00)。\n>tpl\n<div style="width:300px;">\n    <ui-datetimepicker form-name="日期时间" :date="+new Date(\'2018-03-23\')" :time-selectable-range="[\'08:00:00\', \'18:00:00\']"></ui-datetimepicker>\n</div>\n---\n#demo\n>desc\n配合`date-selectable-range`使用时可选时间需要符合两个条件的限制。\n>tpl\n<div style="width:300px;">\n    <ui-datetimepicker form-name="日期时间" :date="+new Date(\'2018-03-23\')" :date-selectable-range="[\'2018-03-08 12:30:00\', \'2018-03-23 20:00:00\']" :time-selectable-range="[\'08:00:00\', \'18:00:00\']"></ui-datetimepicker>\n</div>\n:::\n\n:::vue\n@name:is-range\n---\n#config\n>conf-desc\n选择日期时间区间，开启后可以选在一个日期时间段。\n>conf-accept\n`true`<br>`false`\n>conf-type\nBoolean\n>conf-default\n`false`\n---\n#demo\n>tpl\n<div style="width:460px;">\n    <ui-datetimepicker form-name="日期时间" :is-range="true"></ui-datetimepicker>\n</div>\n---\n#demo\n>desc\n在开启`is-range`的情况下设置`v-model`。\n>tpl\n<div style="width:460px;">\n    <ui-datetimepicker form-name="日期时间" :date="+new Date(\'2018-03-23\')" :is-range="true" v-model="value"></ui-datetimepicker>\n</div>\n>script\n{\n    data : {\n        value : [\'2018-03-10 08:00:00\', \'2018-03-20 21:30:30\']\n    }\n}\n:::\n\n:::vue\n@name:range-input-direction\n---\n#config\n>conf-desc\n区间日期选择时，开始/结束输入框的排列方向<br>仅在开启`is-range`配置时生效。\n>conf-accept\n`\'horizontal\'` : 横向<br>`\'vertical\'` : 竖直\n>conf-type\nString\n>conf-default\n`\'horizontal\'`\n---\n#demo\n>desc\n竖直排列的选择框。\n>tpl\n<div style="width:320px;">\n    <ui-datetimepicker form-name="日期时间" :is-range="true" range-input-direction="vertical"></ui-datetimepicker>\n</div>\n:::\n\n:::vue\n@name:separator\n---\n#config\n>conf-desc\n日期时间区间选择时中间的分隔内容，只有开启`is-range`才有效。\n>conf-accept\n分隔字符串\n>conf-type\nString\n>conf-default\n`\'至\'`\n---\n#demo\n>desc\n竖直排列的选择框。\n>tpl\n<div style="width:460px;">\n    <ui-datetimepicker form-name="日期时间" :is-range="true" separator="~"></ui-datetimepicker>\n</div>\n:::\n\n:::vue\n@name:separator-type\n---\n#config\n>conf-desc\n日期时间区间选择时中间的分隔内容的展现类型。\n>conf-accept\n`\'block\'`：块状<br>`\'inline\'`：行内\n>conf-type\nString\n>conf-default\n`\'block\'`\n---\n#demo\n>desc\n`inline`的分隔(一般配合`align`居中一起使用)。\n>tpl\n<div style="width:400px;">\n    <ui-datetimepicker form-name="日期时间" :is-range="true" separator="~" separator-type="inline" align="center"></ui-datetimepicker>\n</div>\n:::\n\n:::vue\n@name:start-name\n---\n#config\n>conf-desc\n日期时间区间选择时`开始日期时间`表单显示的名称，若设为`false`则显示`form-name`，只有开启`is-range`才有效。\n>conf-accept\n任意字符串<br>`false`:显示`form-name`\n>conf-type\nString<br>Boolean\n>conf-default\n`\'开始日期时间\'`\n---\n#demo\n>tpl\n<div style="width:460px;">\n    <ui-datetimepicker form-name="日期时间" :is-range="true" start-name="发车日期"></ui-datetimepicker>\n</div>\n---\n#demo\n>desc\n若设为`false`则显示`form-name`。\n>tpl\n<div style="width:460px;">\n    <ui-datetimepicker form-name="日期时间" :is-range="true" :start-name="false"></ui-datetimepicker>\n</div>\n:::\n\n:::vue\n@name:end-name\n---\n#config\n>conf-desc\n日期时间区间选择时`结束日期时间`表单显示的名称，若设为`false`则显示`form-name`，只有开启`is-range`才有效。若设置了`hide-name`则不会显示。\n>conf-accept\n任意字符串`false`:显示`form-name`\n>conf-type\nString<br>Boolean\n>conf-default\n`\'结束日期时间\'`\n---\n#demo\n>tpl\n<div style="width:460px;">\n    <ui-datetimepicker form-name="日期时间" :is-range="true" end-name="到达日期"></ui-datetimepicker>\n</div>\n---\n#demo\n>desc\n若设为`false`则显示`form-name`。\n>tpl\n<div style="width:460px;">\n    <ui-datetimepicker form-name="日期时间" :is-range="true" :end-name="false"></ui-datetimepicker>\n</div>\n:::\n\n:::vue\n@name:done-hidden\n---\n#config\n>conf-desc\n开启此配置后当完成日期选择后选择器会被隐藏。\n>conf-accept\n`true`<br>`false`\n>conf-type\nBoolean\n>conf-default\n`false`\n---\n#demo\n>desc\n选择完日期后不隐藏选择器。\n>tpl\n<div style="width:300px;">\n    <ui-datetimepicker form-name="日期时间" :done-hidden="false"></ui-datetimepicker>\n</div>\n---\n#demo\n>desc\n选择完日期后隐藏选择器。\n>tpl\n<div style="width:300px;">\n    <ui-datetimepicker form-name="日期时间" done-hidden></ui-datetimepicker>\n</div>\n---\n#demo\n>desc\n`done-hidden`和`is-range`一起使用。\n>tpl\n<div style="width:460px;">\n    <ui-datetimepicker form-name="日期时间" done-hidden is-range></ui-datetimepicker>\n</div>\n---\n#demo\n>desc\n`done-hidden`和`quick-pick`一起使用。\n>tpl\n<div style="width:300px;">\n    <ui-datetimepicker\n        form-name="日期时间"\n        done-hidden\n        :quick-pick="[\n            \'今天\',\n            \'昨天\',\n            \'1 周前\',\n            \'1 月前\',\n            \'1 年前\'\n        ]"\n    ></ui-datetimepicker>\n</div>\n:::\n\n:::vue\n@name:relative\n---\n#config\n>conf-desc\n相对日期时间，开启后支持用户输入指定格式的相对日期时间，相对日期时间为某日期时间开始距离一定时间的日期时间。\n<br><br>\n开启后可以在日期时间选择器中输入`相对日期时间表达式`，格式如下：\n<br>\n`[开始日期/时间] [操作符] [日期/时间值][日期/时间单位]`\n<br><br>\n- 开始日期/时间包括：\n    - `now` : 当前时间\n    - `startOfSecond` : 当前秒的第一毫秒\n    - `endOfSecond` : 当前秒的最后一毫秒\n    - `startOfMinute` : 当前分钟的第一秒\n    - `endOfMinute` : 当前分钟的最后一秒\n    - `startOfHour` : 当前小时的第一分钟\n    - `endOfHour` : 当前小时的最后一分钟\n    - `startOfDay` : 当天的第一小时\n    - `endOfDay` : 当天的最后一小时\n    - `startOfWeex` : 本周的第一天\n    - `endOfWeex` : 本周的最后一天\n    - `startOfMonth` : 本月的第一天\n    - `endOfMonth` : 本月的最后一天\n    - `startOfQuarter` : 本季度的第一天\n    - `endOfQuarter` : 本季度的最后一天\n    - `startOfYear` : 本年的第一天\n    - `endOfYear` : 本年的最后一天\n- 操作符包括：\n    - `+` : 往后的日期时间\n    - `-` : 往前的日期时间\n- 日期/时间值 ： 一个数字，根据单位不同，代表不同的时间长度\n- 日期/时间单位包括（大小写敏感）：\n    - `ms` : 毫秒\n    - `s` : 秒\n    - `m` : 分钟\n    - `h` : 小时\n    - `D` : 天\n    - `W` : 周\n    - `M` : 月\n    - `Q` : 季度\n    - `Y` : 年\n\n`相对日期时间表达式`可以这么写：\n- `now - 1m` : 一分钟前\n- `now - 1W` : 一周前\n- `startOfQuarter + 1Q` : 下个季度的第一天\n\n通过`getDate()`获取的日期对象，将依据`相对日期时间表达式`进行计算，不同的时间获取到的值将不同。\n<br><br>\n注意：使用此配置后`date-selectable-range`和`time-selectable-range`配置将失效。\n>conf-accept\n`true`<br>`false`\n>conf-type\nBoolean\n>conf-default\n`false`\n---\n#demo\n>tpl\n<div style="width:300px;">\n    <ui-datetimepicker form-name="相对日期" relative v-model="value" ref="demo6"></ui-datetimepicker>\n    <ui-link js="console.log(morning.findVM(\'demo6\').getDate());">获取一天前的时间对象</ui-link>\n</div>\n>script\n{\n    data : {\n        value : "now - 1D"\n    }\n}\n---\n#demo\n>desc\n配合`is-range`一起使用。\n>tpl\n<div style="width:420px;">\n    <ui-datetimepicker form-name="相对日期" relative is-range v-model="value" ref="demo7"></ui-datetimepicker>\n    <ui-link js="console.log(morning.findVM(\'demo7\').getDate());">获取5小时前至现在的时间对象</ui-link>\n</div>\n>script\n{\n    data : {\n        value : ["now - 5h", "now"]\n    }\n}\n---\n#demo\n>desc\n设置当天的开始至结束。\n>tpl\n<div style="width:420px;">\n    <ui-datetimepicker form-name="相对日期" relative is-range v-model="value" ref="demo8"></ui-datetimepicker>\n    <ui-link js="console.log(morning.findVM(\'demo8\').getDate());">获取当天的开始至结束的时间对象</ui-link>\n</div>\n>script\n{\n    data : {\n        value : ["startOfDay", "endOfDay"]\n    }\n}\n---\n#demo\n>desc\n与`date-selectable-range`和`time-selectable-range`一起使用，`date-selectable-range`和`time-selectable-range`将失效。\n<br><br>\n因为相对日期时间无法被限制范围。\n>tpl\n<div style="width:300px;">\n    <ui-datetimepicker form-name="相对日期" relative :date="+new Date(\'2018-03-23\')" :date-selectable-range="[\'2018-03-08 12:30:00\', \'2018-03-23 20:00:00\']" :time-selectable-range="[\'08:00:00\', \'18:00:00\']"></ui-datetimepicker>\n</div>\n:::\n\n:::vue\n@name:hidden-icon\n---\n#config\n>conf-desc\n隐藏日期时间选择器的图标。\n>conf-accept\n`true`<br>`false`\n>conf-type\nBoolean\n>conf-default\n`false`\n---\n#demo\n>tpl\n<div style="width:300px;">\n    <ui-datetimepicker form-name="日期时间" :hidden-icon="true"></ui-datetimepicker>\n</div>\n---\n#demo\n>desc\n配合`is-range`一起使用。\n>tpl\n<div style="width:420px;">\n    <ui-datetimepicker form-name="日期时间" is-range :hidden-icon="true"></ui-datetimepicker>\n</div>\n:::\n\n[[[方法]]]\n\n:::preset\n@name:formMethod\n@uikey:datetimepicker\n@value:\'2018-03-23 12:13:14\'\n@defaultValue:\'2018-03-23 12:13:14\'\n:::\n\n:::vue\n@name:getDate()\n---\n#method\n>method-desc\n获取当前选中日期时间的日期对象。\n<br><br>\n获取的日期对象。\n>method-return\n日期对象。\n---\n#demo\n>tpl\n<div style="width:300px;">\n    <ui-datetimepicker ref="demo9" form-name="日期"></ui-datetimepicker>\n    <br><br>\n    <ui-link js="console.log(morning.findVM(\'demo9\').getDate());">获取当前选中的日期对象</ui-link>\n</div>\n:::\n\n:::vue\n@name:togglePicker(show)\n---\n#method\n>method-desc\n切换日期时间选择弹出框显示状态。\n>method-args\n|show|NO|切换到显示或隐藏状态。`true`<br>`false`|`Boolean`|`undefined`|\n>method-return\n当前组件VM实例。\n---\n#demo\n>tpl\n<div style="width:300px;">\n    <ui-datetimepicker ref="demo15" form-name="日期"></ui-datetimepicker>\n    <br><br> \n    <ui-link js="morning.findVM(\'demo15\').togglePicker(true);">显示弹出框</ui-link>\n    <ui-link js="morning.findVM(\'demo15\').togglePicker(false);">隐藏弹出框</ui-link>\n</div>\n---\n#demo\n>desc\n配合`is-range`配置一起使用。\n>tpl\n<div style="width:300px;">\n    <ui-datetimepicker ref="demo16" form-name="日期" is-range></ui-datetimepicker>\n    <br><br> \n    <ui-link js="morning.findVM(\'demo16\').togglePicker(true);">显示弹出框</ui-link>\n    <ui-link js="morning.findVM(\'demo16\').togglePicker(false);">隐藏弹出框</ui-link>\n</div>\n:::\n\n[[[事件]]]\n\n:::preset\n@name:formEvent\n@uiname:日期时间选择器\n@uikey:datetimepicker\n@value:\'2018-03-23 12:13:14\'\n@wrapStyle:width:300px;\n:::\n\n:::vue\n@name:input-focus\n---\n#event\n>event-desc\n当日期时间选择器的输入框聚焦时触发，若开启了`is-range`配置则在两个输入框间切换时不会触发此事件。\n---\n#demo\n>tpl\n<div>\n    <div style="width:300px;">\n        <ui-datetimepicker ref="demo10" @input-focus="echo"></ui-datetimepicker>\n    </div>\n</div>\n>script\n{\n    methods : {\n        echo : function () {\n            console.log(\'demo10.console1\', \'input-focus event!\');\n        }\n    }\n}\n:::\n\n:::vue\n@name:input-blur\n---\n#event\n>event-desc\n当日期时间选择器的输入框失焦时触发，若开启了`is-range`配置则在两个输入框间切换时不会触发此事件。\n---\n#demo\n>tpl\n<div>\n    <div style="width:300px;">\n        <ui-datetimepicker ref="demo11" @input-blur="echo"></ui-datetimepicker>\n    </div>\n</div>\n>script\n{\n    methods : {\n        echo : function () {\n            console.log(\'demo11.console1\', \'input-blur event!\');\n        }\n    }\n}\n:::\n\n:::vue\n@name:focus\n---\n#event\n>event-desc\n当日期时间选择器聚焦时触发。\n---\n#demo\n>tpl\n<div>\n    <div style="width:300px;">\n        <ui-datetimepicker @focus="echo"></ui-datetimepicker>\n    </div>\n    <br><br>\n    <div style="width:420px;">\n        <ui-datetimepicker is-range @focus="echo"></ui-datetimepicker>\n    </div>\n</div>\n>script\n{\n    methods : {\n        echo : function () {\n            console.log(\'demo12.console1\', \'focus event!\');\n        }\n    }\n}\n:::\n\n:::vue\n@name:blur\n---\n#event\n>event-desc\n当日期时间选择器失焦时触发。\n---\n#demo\n>tpl\n<div>\n    <div style="width:300px;">\n        <ui-datetimepicker @blur="echo"></ui-datetimepicker>\n    </div>\n    <br><br>\n    <div style="width:420px;">\n        <ui-datetimepicker is-range @blur="echo"></ui-datetimepicker>\n    </div>\n</div>\n>script\n{\n    methods : {\n        echo : function () {\n            console.log(\'demo13.console1\', \'blur event!\');\n        }\n    }\n}\n:::\n\n:::vue\n@name:pick-done\n---\n#event\n>event-desc\n当日期时间选择器完成日期时间选择时触发。\n<br>\n在关闭`is-range`配置时，`pick-done`等效于`value-change`，但在开启`is-range`时，`pick-done`的触发需要选择完一段完整的日期时间范围。\n---\n#demo\n>tpl\n<div>\n    <div style="width:300px;">\n        <ui-datetimepicker @pick-done="echo"></ui-datetimepicker>\n    </div>\n    <br><br>\n    <div style="width:420px;">\n        <ui-datetimepicker is-range @pick-done="echo"></ui-datetimepicker>\n    </div>\n</div>\n>script\n{\n    methods : {\n        echo : function () {\n            console.log(\'demo14.console1\', \'pick-done event!\');\n        }\n    }\n}\n:::\n\n[[[表单值]]]\n\n#### 值类型\n\n- `Array` : 数组\n- `String` : 字符串(按`format`配置格式化)或`相对日期时间表达式`\n\n#### 值过滤\n\n- 若是范围日期时间选择(开启`isRange`配置)，则数值是一个字符串，则将数值转换成数组，该字符串作为第一项       \n- 若是单一日期时间选择(未开启`isRange`配置)，且数值是一个数组，则取第一项\n- 若开启了`relative`配置且格式符合`相对日期时间表达式`则不做任何处理，否则进行下列判断\n- 若数值的类型是字符串则检测字符串的日期时间格式是否符合`format`配置，若不符合尝试转换成符合的格式，若无法转换则转换成`1971-01-01 00:00:00`的符合`format`的日期时间\n- 若使用了`date-selectable-range`或`time-selectable-range`配置，且数值对应的日期时间不在范围内，则会转换成最近的范围内日期时间\n- 若数值的类型是一个数组，且数组长度为`0`则转换为`undefined`\n- 若数值的类型是一个数组，且数组长度大于`2`，则过滤多余的项目，只保留两项\n- 若数值的类型是一个数组，且数组长度大于`0`且小于`3`，会过滤数组中所有不是字符串类型的项目，然后按照第3/4条规则，对所有字符串项目进行过滤\n- 若数值的类型是一个数组，且第二项代表的日期时间大于第一项，则对换数组的两项\n\n#### 值格式\n\n若是单一日期时间选择，则是日期时间字时间符串(符合`format`的格式化规则)或`相对日期时间表达式`\n若是范围日期时间选择，则是长度为2的数组，数组中第一项是开始日期时间的日期时间字符串(符合`format`的格式化规则)或`相对日期时间表达式`，数组中第二项是结束日期时间的日期时间字符串(符合`format`的格式化规则)或`相对日期时间表达式`。\n\n#### 默认值\n\n`undefined`\n\n:::preset\n@name:formValue\n@uikey:datetimepicker\n@uiname:日期时间选择器\n@valueType:datetimepicker\n@wrapStyle:width:300px;\n:::\n\n[[[源码]]]\n\n<iframe src="/report/coverage/lib/components/datetimepicker/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>\n\n')])])},a=[];i._withStripped=!0,t.d(e,"a",function(){return i}),t.d(e,"b",function(){return a})},813:function(n,e,t){"use strict";var i=d(t(1)),a=d(t(814));function d(n){return n&&n.__esModule?n:{default:n}}new i.default({el:"#root",render:function(n){return n(a.default)}})},814:function(n,e,t){"use strict";t.r(e);var i=t(300),a=t(215);for(var d in a)"default"!==d&&function(n){t.d(e,n,function(){return a[n]})}(d);var r=t(0),o=Object(r.a)(a.default,i.a,i.b,!1,null,null,null);o.options.__file="src/docs/pages/component/datetimepicker/index.vue",e.default=o.exports}});