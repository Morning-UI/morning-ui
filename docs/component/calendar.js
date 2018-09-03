!function(n){function e(e){for(var i,o,r=e[0],l=e[1],u=e[2],h=0,m=[];h<r.length;h++)o=r[h],d[o]&&m.push(d[o][0]),d[o]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(n[i]=l[i]);for(c&&c(e);m.length;)m.shift()();return a.push.apply(a,u||[]),t()}function t(){for(var n,e=0;e<a.length;e++){for(var t=a[e],i=!0,r=1;r<t.length;r++){var l=t[r];0!==d[l]&&(i=!1)}i&&(a.splice(e--,1),n=o(o.s=t[0]))}return n}var i={},d={12:0};var a=[];function o(e){if(i[e])return i[e].exports;var t=i[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=n,o.c=i,o.d=function(n,e,t){o.o(n,e)||Object.defineProperty(n,e,{configurable:!1,enumerable:!0,get:t})},o.r=function(n){Object.defineProperty(n,"__esModule",{value:!0})},o.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return o.d(e,"a",e),e},o.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},o.p="/";var r=window.webpackJsonp=window.webpackJsonp||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var u=0;u<r.length;u++)e(r[u]);var c=l;a.push([273,0]),t()}({1:function(n,e){n.exports=Vue},132:function(n,e,t){"use strict";t.d(e,"a",function(){return i}),t.d(e,"b",function(){return d});var i=function(){var n=this.$createElement,e=this._self._c||n;return e("doc-component",{attrs:{page:this.page,hasPadding:!0}},[e("script",{attrs:{type:"text/markdown"}},[this._v("\n# 日历 `<ui-calendar>`\n\n<doc-component-status page=\"calendar\"></doc-component-status>\n\n[[[开始]]]\n\n定义一个日历，这是一个块级元素。\n\n点击头部的年份或月份可以选择更多年份及月份。\n\n#### 使用\n\n:::democode/html\n<div style=\"width:300px\">\n    <ui-calendar></ui-calendar>\n</div>\n:::\n\n[[[形态]]]\n\n#### 支持\n\n|类型|支持|默认|\n|-|-|-|\n|尺寸|不支持|-|\n|色彩|不支持|-|\n|状态|不支持|-|\n\n[[[配置]]]\n\n|KEY|描述|接受值|值类型|默认值|\n|-|-|-|-|-|\n|[date](#date)|日历所在的日期，日历将会切换到`date`所在的月份|时间戳|Number|`+new Date()`|\n|[highlight-now](#highlight-now)|高亮今天的日期|`true`<br>`false`|Boolean|`true`|\n|[highlight-hover](#highlight-hover)|高亮鼠标hover状态的日期|`true`<br>`false`|Boolean|`false`|\n|[highlight-day](#highlight-day)|高亮指定日期，接受一个数组，数组中每一项代表一个或一段日期，所有匹配到的日期都会高亮|数组，数组中支持三种类型的项目：<br><br>`Date`对象 : 高亮指定日期<br>`Number`(时间戳) : 高亮指定时间戳所在的日期<br>`Array` : 数组格式为:`[start, end]`，从`start`开始到`end`的日期都会高亮，`start`和`end`支持`Date`对象及时间戳|Array|`[]`|\n|[pick-year-month](#pick-year-month)|选择年份后继续选择月份。如果关闭选完年份后会关闭年份选择器，如果开启选完年份后会开启月份选择器|`true`<br>`false`|Boolean|`false`|\n|[background-mark](#background-mark)|日期的背景标记，通过改变日期的背景颜色来标记。<br/><br/>数值是一个数组对象，数组中的每一个对象表示一个标记，标记包含属性：<br/>`start` : 标记开始的日期(Date对象)<br/>`end` : 标记结束的日期(Date对象)<br/>`style` : 标记的色彩样式，支持[形态/颜色](/guide/status.html#颜色)中所有的功能及辅助颜色值<br>`disabled` : 禁用样式<br><br>一个标记对象必需完整的包含`start`/`end`，否则不会生效。|标记数组对象|Array|`[]`|\n|[point-mark](#point-mark)|日期的点标记，一般用于表示该日期上有事件。<br/><br/>数值是一个数组对象，数组中的每一个对象表示一个标记，标记包含属性：<br/>`start` : 标记开始的日期(Date对象)<br/>`end` : 标记结束的日期(Date对象)<br/>`style` : 标记的色彩样式，支持[形态/颜色](/guide/status.html#颜色)中所有的功能及辅助颜色值<br><br>一个标记对象必需完整的包含`start`/`end`，否则不会生效。|标记数组对象|Array|`[]`|\n\n#### date\n\n:::democode/html\n<div style=\"width:300px\">\n    <ui-calendar :date=\"+new Date('2015-11-11')\"></ui-calendar>\n</div>\n:::\n\n#### highlight-now\n\n:::democode/html\n<div style=\"width:300px\">\n    <ui-calendar highlight-now></ui-calendar>\n</div>\n:::\n\n#### highlight-hover\n\n:::democode/html\n<div style=\"width:300px\">\n    <ui-calendar highlight-hover></ui-calendar>\n</div>\n:::\n\n#### highlight-day\n\n高亮指定的日期（若一段日期是连续的则会显示连续的样式），接受`Date`对象和时间戳：\n\n:::democode/html\n<div style=\"width:300px\">\n    <ui-calendar\n        :date=\"+new Date('2017-11-1')\"\n        :highlight-day=\"[\n            new Date('2017-10-31'),\n            +new Date('2017-11-1'),\n            new Date('2017-11-2'),\n            +new Date('2017-11-8')\n        ]\"\n    ></ui-calendar>\n</div>\n:::\n\n高亮指定的日期范围：\n\n:::democode/html\n<div style=\"width:300px\">\n    <ui-calendar\n        :date=\"+new Date('2017-11-1')\"\n        :highlight-day=\"[\n            [new Date('2017-10-27'), new Date('2017-11-3')],\n            [new Date('2017-11-29'), new Date('2017-12-2')],\n            [new Date('2017-12-5'), new Date('2017-12-12')]\n        ]\"\n    ></ui-calendar>\n</div>\n:::\n\n#### pick-year-month\n\n点击头部的年份来选择年份，选完后会显示月份选择器：\n\n:::democode/html\n<div style=\"width:300px\">\n    <ui-calendar pick-year-month></ui-calendar>\n</div>\n:::\n\n#### background-mark\n\n:::democode/html\n<div style=\"width:300px\">\n    <ui-calendar \n        :date=\"+new Date('2017-11-1')\"\n        :background-mark=\"[\n            {\n                start: new Date('2017-11-9'),\n                end: new Date('2017-11-13'),\n                style: 'primary'\n            },\n            {\n                start: new Date('2017-11-20'),\n                end: new Date('2017-11-20'),\n                style: 'danger'\n            }\n        ]\"\n    ></ui-calendar>\n</div>\n:::\n\n跨月份的标记：\n\n:::democode/html\n<div style=\"width:300px\">\n    <ui-calendar\n        :date=\"+new Date('2017-11-1')\"\n        :background-mark=\"[\n            {\n                start: new Date('2017-10-20'), \n                end: new Date('2017-11-3'), \n                style: 'light-gray'\n            }\n        ]\"\n    ></ui-calendar>\n</div>\n:::\n\n禁用样式配合`highlight-hover`：\n\n:::democode/html\n<div style=\"width:300px\">\n    <ui-calendar\n        highlight-hover\n        :date=\"+new Date('2017-11-1')\"\n        :background-mark=\"[\n            {\n                start: new Date('2017-11-9'),\n                end: new Date('2017-11-13'),\n                disabled: true\n            }\n        ]\"\n    ></ui-calendar>\n</div>\n:::\n\n#### point-mark\n\n:::democode/html\n<div style=\"width:300px\">\n    <ui-calendar\n        :date=\"+new Date('2017-11-1')\"\n        :point-mark=\"[\n            {   \n                start: new Date('2017-11-9'),\n                end: new Date('2017-11-13'),\n                style: 'primary'\n            },\n            {\n                start: new Date('2017-11-20'),\n                end: new Date('2017-11-20'),\n                style: 'danger'\n            }\n        ]\"\n    ></ui-calendar>\n</div>\n:::\n\n跨月份的标记：\n\n:::democode/html\n<div style=\"width:300px\">\n    <ui-calendar\n        :date=\"+new Date('2017-11-1')\"\n        :point-mark=\"[\n            {\n                start: new Date('2017-10-20'),\n                end: new Date('2017-11-3'),\n                style: 'primary'\n            }\n        ]\"\n    ></ui-calendar>\n</div>\n:::\n\n禁用样式配合`highlight-hover`：\n\n:::democode/html\n<div style=\"width:300px\">\n    <ui-calendar\n        highlight-hover\n        :date=\"+new Date('2017-11-1')\"\n        :point-mark=\"[\n            {\n                start: new Date('2017-11-9'), \n                end: new Date('2017-11-13'), \n                disabled: true\n            }\n        ]\"\n    ></ui-calendar>\n</div>\n:::\n\n[[[方法]]]\n\n#### toggleYearPick([show])\n\n切换年份选择器显示状态。\n\n|KEY|可选|描述|接受值|值类型|默认值|\n|-|-|-|-|-|-|\n|show|YES|切换到显示或隐藏状态，不输入则切换到反向状态。|`undefined`<br>`true`<br>`false`|`Undefined`<br>`Boolean`|`undefined`|\n\n:::democode/html\n<div style=\"width:300px\">\n    <ui-calendar ref=\"demo1\"></ui-calendar>\n</div>\n<br>\n<ui-link js=\"window.morning.findVM('demo1').toggleYearPick(true);\">显示年份选择器</ui-link>\n<ui-link js=\"window.morning.findVM('demo1').toggleYearPick(false);\">隐藏年份选择器</ui-link>\n<ui-link js=\"window.morning.findVM('demo1').toggleYearPick();\">切换到反向状态</ui-link>\n:::\n\n#### toggleMonthPick([show])\n\n切换月份选择器显示状态。\n\n|KEY|可选|描述|接受值|值类型|默认值|\n|-|-|-|-|-|-|\n|show|YES|切换到显示或隐藏状态，不输入则切换到反向状态。|`undefined`<br>`true`<br>`false`|`Undefined`<br>`Boolean`|`undefined`|\n\n:::democode/html\n<div style=\"width:300px\">\n    <ui-calendar ref=\"demo2\"></ui-calendar>\n</div>\n<br>\n<ui-link js=\"window.morning.findVM('demo2').toggleMonthPick(true);\">显示月份选择器</ui-link>\n<ui-link js=\"window.morning.findVM('demo2').toggleMonthPick(false);\">隐藏月份选择器</ui-link>\n<ui-link js=\"window.morning.findVM('demo2').toggleMonthPick();\">切换到反向状态</ui-link>\n:::\n\n#### getDate([format])\n\n将日历所在日期格式化后返回。\n\n|KEY|可选|描述|接受值|值类型|默认值|\n|-|-|-|-|-|-|\n|format|YES|日期格式，采用`data-fns`进行格式化|格式化字符串，参数见[date-fns/format](https://date-fns.org/v1.29.0/docs/format)|`String`|`'YYYY-MM-DDTHH:mm:ss.SSSZ'`|\n\n:::democode/html\n<div style=\"width:300px\">\n    <ui-calendar ref=\"demo3\"></ui-calendar>\n</div>\n<br>\n<ui-link js=\"alert(window.morning.findVM('demo3').getDate());\">获取日历所在日期</ui-link>\n:::\n\n#### getTime()\n\n将日历所在日期的时间戳。\n\n:::democode/html\n<div style=\"width:300px\">\n    <ui-calendar ref=\"demo4\"></ui-calendar>\n</div>\n<br>\n<ui-link js=\"alert(window.morning.findVM('demo4').getTime());\">获取日历所在日期的时间戳</ui-link>\n:::\n\n#### setTime(timestrap)\n\n将日历所在日期设置到指定时间戳。\n\n|KEY|可选|描述|接受值|值类型|默认值|\n|-|-|-|-|-|-|\n|timestrap|NO|设置日期的时间戳|时间戳|`Number`|`undefined`|\n\n:::democode/html\n<div style=\"width:300px\">\n    <ui-calendar ref=\"demo5\"></ui-calendar>\n</div>\n<br>\n<ui-link js=\"window.morning.findVM('demo5').setTime(+new Date('2016-1-1'));\">日历所在日期设置到2016年1月1日</ui-link>\n:::\n\n#### set(value, [unit])\n\n将日历设定到指定的年份或月份。\n\n|KEY|可选|描述|接受值|值类型|默认值|\n|-|-|-|-|-|-|\n|value|NO|设置的数值|年份或月份|`Number`|`undefined`|\n|unit|YES|设置年份或月份|`'year'`<br>`'month'`|`String`|`'month'`|\n\n:::democode/html\n<div style=\"width:300px\">\n    <ui-calendar ref=\"demo6\"></ui-calendar>\n</div>\n<br>\n<ui-link js=\"window.morning.findVM('demo6').set(2009, 'year');\">日历的年份设置到2009年</ui-link>\n<ui-link js=\"window.morning.findVM('demo6').set(5, 'month');\">日历的月份设置到5月</ui-link>\n:::\n\n#### add(amount, [unit])\n\n将日历的所在日期增加几天、几月或几年。\n\n|KEY|可选|描述|接受值|值类型|默认值|\n|-|-|-|-|-|-|\n|amount|NO|需要增加的数值|数值|`Number`|`undefined`|\n|unit|YES|增加的单位|`'year'`<br>`'month'`<br>`'day'`|`String`|`'month'`|\n\n:::democode/html\n<div style=\"width:300px\">\n    <ui-calendar ref=\"demo7\"></ui-calendar>\n</div>\n<br>\n<ui-link js=\"window.morning.findVM('demo7').add(60, 'day');\">日历增加60天</ui-link>\n<ui-link js=\"window.morning.findVM('demo7').add(3, 'month');\">日历增加3个月</ui-link>\n<ui-link js=\"window.morning.findVM('demo7').add(5, 'year');\">日历增加5年</ui-link>\n:::\n\n#### sub(amount, [unit])\n\n将日历的所在日期减少几天、几月或几年。\n\n|KEY|可选|描述|接受值|值类型|默认值|\n|-|-|-|-|-|-|\n|amount|NO|需要减少的数值|数值|`Number`|`undefined`|\n|unit|YES|减少的单位|`'year'`<br>`'month'`<br>`'day'`|`String`|`'month'`|\n\n:::democode/html\n<div style=\"width:300px\">\n    <ui-calendar ref=\"demo8\"></ui-calendar>\n</div>\n<br>\n<ui-link js=\"window.morning.findVM('demo8').sub(60, 'day');\">日历减少60天</ui-link>\n<ui-link js=\"window.morning.findVM('demo8').sub(3, 'month');\">日历减少3个月</ui-link>\n<ui-link js=\"window.morning.findVM('demo8').sub(5, 'year');\">日历减少5年</ui-link>\n:::\n\n#### getHighlight([includeNow])\n\n获取日历所有高亮的日期，所有所有高亮日期对象(Date)组成的数组，返回的所有日期从早到晚排序，日期时间都是`00:00:00`。\n\n|KEY|可选|描述|接受值|值类型|默认值|\n|-|-|-|-|-|-|\n|includeNow|YES|是否包含当天|`true`<br>`false`|`Boolean`|`false`|\n\n:::democode/html\n<div style=\"width:300px\">\n    <ui-calendar\n        ref=\"demo9\"\n        :highlight-day=\"[\n            new Date('2017-11-5 13:00:00'),\n            [new Date('2017-11-3'), new Date('2017-11-11')],\n            [new Date('2017-10-27'), new Date('2017-11-2')],\n            [new Date('2017-12-7 21:30:23'), new Date('2017-12-20')],\n            new Date('2017-12-15')\n        ]\"\n    ></ui-calendar>\n</div>\n<br>\n<ui-link js=\"console.log('demo9.console1', window.morning.findVM('demo9').getHighlight())\">获取所有高亮的日期</ui-link>\n<ui-link js=\"console.log('demo9.console2', window.morning.findVM('demo9').getHighlight(true))\">获取所有高亮的日期(包含当天)</ui-link>\n:::\n\n#### setHighlight(list)\n\n获取日历所有高亮的日期，所有所有高亮日期对象(Date)组成的数组，返回的日期时间都是`00:00:00`。\n\n|KEY|可选|描述|接受值|值类型|默认值|\n|-|-|-|-|-|-|\n|list|NO|高亮指定日期，接受一个数组，数组中每一项代表一个或一段日期，所有匹配到的日期都会高亮|数组，数组中支持三种类型的项目：<br><br>`Date`对象 : 高亮指定日期<br>`Number`(时间戳) : 高亮指定时间戳所在的日期<br>`Array` : 数组格式为:`[start, end]`，从`start`开始到`end`的日期都会高亮，`start`和`end`支持`Date`对象及时间戳|Array|`[]`|\n\n:::democode/html\n<div style=\"width:300px\">\n    <ui-calendar ref=\"demo10\"></ui-calendar>\n</div>\n<br>\n<ui-link js=\"window.morning.findVM('demo10').setHighlight([new Date('2017-11-5'), [new Date('2017-11-7'), new Date('2017-11-11')], [new Date('2017-10-27'), new Date('2017-11-2')], [new Date('2017-12-7'), new Date('2017-12-20')], new Date('2017-12-15')])\">高亮指定日期</ui-link>\n:::\n\n[[[事件]]]\n\n#### change\n\n当日历所在日期变化时触发。\n\n:::vue/html\nnew Vue({\n    el : '{$el}',\n    template : '{$template}',\n    methods : {\n        echo : function () {\n            console.log('demo11.console1', 'change event!');\n        }\n    }\n});\n---\n<div style=\"width:300px\">\n    <ui-calendar ref=\"demo11\" @change=\"echo\"></ui-calendar>\n    <ui-link js=\"window.morning.findVM('demo11').setTime(+new Date('2017-10-1'));\">触发change事件</ui-link>\n</div>\n:::\n\n#### month-change\n\n当日历所在月份变化时触发。\n\n:::vue/html\nnew Vue({\n    el : '{$el}',\n    template : '{$template}',\n    methods : {\n        echo : function () {\n            console.log('demo12.console1', 'month-change event!');\n        }\n    }\n});\n---\n<div style=\"width:300px\">\n    <ui-calendar ref=\"demo12\" @month-change=\"echo\"></ui-calendar>\n    <ui-link js=\"window.morning.findVM('demo12').sub(1, 'month');\">触发month-change事件</ui-link>\n</div>\n:::\n\n#### year-change\n\n当日历所在年份变化时触发。\n\n:::vue/html\nnew Vue({\n    el : '{$el}',\n    template : '{$template}',\n    methods : {\n        echo : function () {\n            console.log('demo13.console1', 'year-change event!');\n        }\n    }\n});\n---\n<div style=\"width:300px\">\n    <ui-calendar ref=\"demo13\" @year-change=\"echo\"></ui-calendar>\n    <ui-link js=\"window.morning.findVM('demo13').sub(1, 'year');\">触发year-change事件</ui-link>\n</div>\n:::\n\n#### highlight\n\n当日历高亮日期变化时触发。\n\n:::vue/html\nnew Vue({\n    el : '{$el}',\n    template : '{$template}',\n    methods : {\n        echo : function () {\n            console.log('demo14.console1', 'highlight event!');\n        }\n    }\n});\n---\n<div style=\"width:300px\">\n    <ui-calendar ref=\"demo14\" @highlight=\"echo\"></ui-calendar>\n    <ui-link js=\"window.morning.findVM('demo14').setHighlight([new Date('2017-1-1')]);\">触发highlight事件</ui-link>\n</div>\n:::\n\n#### date-click\n\n某个日期被点击时触发。\n\n##### 参数\n\n|KEY|描述|值类型|\n|-|-|-|\n|date|用户点击的日期|`Date`|\n\n:::vue/html\nnew Vue({\n    el : '{$el}',\n    template : '{$template}',\n    methods : {\n        echo : function (date) {\n            console.log('demo15.console1', 'click date:' + date);\n        }\n    }\n});\n---\n<div style=\"width:300px\">\n    <p>点击一个日期来触发</p>\n    <ui-calendar ref=\"demo15\" @date-click=\"echo\"></ui-calendar>\n</div>\n:::\n\n#### date-enter\n\n鼠标移入某个日期时触发。\n\n##### 参数\n\n|KEY|描述|值类型|\n|-|-|-|\n|date|鼠标移入的日期|`Date`|\n\n:::vue/html\nnew Vue({\n    el : '{$el}',\n    template : '{$template}',\n    methods : {\n        echo : function (date) {\n            console.log('demo15.console1', 'enter date:' + date);\n        }\n    }\n});\n---\n<div style=\"width:300px\">\n    <p>鼠标移入日期来触发</p>\n    <ui-calendar ref=\"demo15\" @date-enter=\"echo\"></ui-calendar>\n</div>\n:::\n\n#### date-leave\n\n鼠标移出某个日期时触发。\n\n##### 参数\n\n|KEY|描述|值类型|\n|-|-|-|\n|date|鼠标移出的日期|`Date`|\n\n:::vue/html\nnew Vue({\n    el : '{$el}',\n    template : '{$template}',\n    methods : {\n        echo : function (date) {\n            console.log('demo15.console1', 'leave date:' + date);\n        }\n    }\n});\n---\n<div style=\"width:300px\">\n    <p>鼠标移出日期来触发</p>\n    <ui-calendar ref=\"demo15\" @date-leave=\"echo\"></ui-calendar>\n</div>\n:::\n\n#### 生命周期事件\n\n:::vue/html\nwindow.demoEventLifecycle = new Vue({\n    el : '{$el}',\n    template : '{$template}',\n    data : function () {\n        return {\n           text : '日历',\n           show : true\n        };\n    },\n    methods : {\n        echo : function (name) {\n            console.log('demoEventLifecycle.console1', name + ' event!');\n        }\n    }\n});\n---\n<div style=\"width:300px\">\n    <ui-calendar\n        ref=\"demoEventLifecycle\"\n        v-show=\"show\"\n        @created=\"echo('created')\"\n        @mounted=\"echo('mounted')\"\n        @before-update=\"echo('before-update')\"\n        @updated=\"echo('updated')\"\n        @before-destroy=\"echo('before-destroy')\"\n        @destroyed=\"echo('destroyed')\"\n    >{*text*}</ui-calendar>\n\n    <br><br>\n\n    <ui-link js=\"window.demoEventLifecycle.text='生命周期事件';\">触发update</ui-link>\n    <ui-link js=\"morning.findVM('demoEventLifecycle').$destroy();\">触发destroy</ui-link>\n</div>\n:::\n\n[[[源码]]]\n\n<iframe src=\"/report/coverage/lib/components/calendar/index.vue.html\" name=\"codeFrame\" frameborder=\"0\" onload=\"this.height=codeFrame.document.body.scrollHeight\"></iframe>\n\n")])])},d=[];i._withStripped=!0},15:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,d=t(2),a=(i=d)&&i.__esModule?i:{default:i};e.default={data:function(){return{page:"calendar"}},components:{"doc-component":a.default}},n.exports=e.default},272:function(n,e,t){"use strict";t.r(e);var i=t(15),d=t.n(i);for(var a in i)"default"!==a&&function(n){t.d(e,n,function(){return i[n]})}(a);var o=t(132),r=t(0),l=!1;var u=function(n){l||t(671)},c=Object(r.a)(d.a,o.a,o.b,!1,u,null,null);c.options.__file="src/docs/pages/component/calendar/index.vue",e.default=c.exports},273:function(n,e,t){"use strict";var i=a(t(1)),d=a(t(272));function a(n){return n&&n.__esModule?n:{default:n}}new i.default({el:"#root",render:function(n){return n(d.default)}})},671:function(n,e){}});