!function(n){function e(e){for(var d,o,r=e[0],l=e[1],c=e[2],m=0,s=[];m<r.length;m++)o=r[m],a[o]&&s.push(a[o][0]),a[o]=0;for(d in l)Object.prototype.hasOwnProperty.call(l,d)&&(n[d]=l[d]);for(u&&u(e);s.length;)s.shift()();return i.push.apply(i,c||[]),t()}function t(){for(var n,e=0;e<i.length;e++){for(var t=i[e],d=!0,r=1;r<t.length;r++){var l=t[r];0!==a[l]&&(d=!1)}d&&(i.splice(e--,1),n=o(o.s=t[0]))}return n}var d={},a={15:0},i=[];function o(e){if(d[e])return d[e].exports;var t=d[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=n,o.c=d,o.d=function(n,e,t){o.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},o.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},o.t=function(n,e){if(1&e&&(n=o(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var d in n)o.d(t,d,function(e){return n[e]}.bind(null,d));return t},o.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return o.d(e,"a",e),e},o.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},o.p="/";var r=window.webpackJsonp=window.webpackJsonp||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var u=l;i.push([833,0]),t()}({1:function(n,e){n.exports=Vue},235:function(n,e,t){"use strict";t.r(e);var d=t(236),a=t.n(d);for(var i in d)"default"!==i&&function(n){t.d(e,n,function(){return d[n]})}(i);e.default=a.a},236:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var d,a=t(2),i=(d=a)&&d.__esModule?d:{default:d};e.default={data:function(){return{page:"calendar"}},components:{"doc-component":i.default}},n.exports=e.default},287:function(n,e,t){"use strict";var d=function(){var n=this.$createElement,e=this._self._c||n;return e("doc-component",{attrs:{page:this.page,hasPadding:!0}},[e("script",{attrs:{type:"text/markdown"}},[this._v("\n# 日历 `<ui-calendar>`\n\n<doc-component-status page=\"calendar\"></doc-component-status>\n\n[[[开始]]]\n\n定义一个日历，这是一个块级元素。\n\n点击头部的年份或月份可以选择更多年份及月份。\n\n:::vue\n@name:使用\n---\n#demo\n>tpl\n<div style=\"width:260px\">\n    <ui-calendar></ui-calendar>\n</div>\n:::\n\n[[[形态]]]\n\n#### 支持\n\n|类型|支持|默认|\n|-|-|-|\n|尺寸|不支持|-|\n|色彩|不支持|-|\n|状态|不支持|-|\n\n[[[配置]]]\n\n:::vue\n@name:date\n---\n#config\n>conf-desc\n日历所在的日期，日历将会切换到`date`所在的月份。\n>conf-accept\n时间戳\n>conf-type\nNumber\n>conf-default\n`+new Date()`\n---\n#demo\n>tpl\n<div style=\"width:260px\">\n    <ui-calendar :date=\"+new Date('2015-11-11')\"></ui-calendar>\n</div>\n:::\n\n:::vue\n@name:highlight-now\n---\n#config\n>conf-desc\n高亮今天的日期。\n>conf-accept\n`true`<br>`false`\n>conf-type\nBoolean\n>conf-default\n`true`\n---\n#demo\n>tpl\n<div style=\"width:260px\">\n    <ui-calendar highlight-now></ui-calendar>\n</div>\n:::\n\n:::vue\n@name:highlight-hover\n---\n#config\n>conf-desc\n高亮鼠标hover状态的日期。\n>conf-accept\n`true`<br>`false`\n>conf-type\nBoolean\n>conf-default\n`false`\n---\n#demo\n>tpl\n<div style=\"width:260px\">\n    <ui-calendar highlight-hover></ui-calendar>\n</div>\n:::\n\n:::vue\n@name:highlight-day\n---\n#config\n>conf-desc\n高亮指定日期，接受一个数组，数组中每一项代表一个或一段日期，所有匹配到的日期都会高亮。\n>conf-accept\n数组，数组中支持三种类型的项目：<br><br>`Date`对象 : 高亮指定日期<br>`Number`(时间戳) : 高亮指定时间戳所在的日期<br>`Array` : 数组格式为:`[start, end]`，从`start`开始到`end`的日期都会高亮，`start`和`end`支持`Date`对象及时间戳\n>conf-type\nArray\n>conf-default\n`[]`\n---\n#demo\n>desc\n高亮指定的日期（若一段日期是连续的则会显示连续的样式），接受`Date`对象和时间戳。\n>tpl\n<div style=\"width:260px\">\n    <ui-calendar\n        :date=\"+new Date('2017-11-01')\"\n        :highlight-day=\"[\n            new Date('2017-10-31'),\n            +new Date('2017-11-01'),\n            new Date('2017-11-02'),\n            +new Date('2017-11-08')\n        ]\"\n    ></ui-calendar>\n</div>\n---\n#demo\n>desc\n高亮指定的日期范围。\n>tpl\n<div style=\"width:260px\">\n    <ui-calendar\n        :date=\"+new Date('2017-11-01')\"\n        :highlight-day=\"[\n            [new Date('2017-10-27'), new Date('2017-11-03')],\n            [new Date('2017-11-29'), new Date('2017-12-02')],\n            [new Date('2017-12-05'), new Date('2017-12-12')]\n        ]\"\n    ></ui-calendar>\n</div>\n:::\n\n:::vue\n@name:pick-year-month\n---\n#config\n>conf-desc\n选择年份后继续选择月份。如果关闭选完年份后会关闭年份选择器，如果开启选完年份后会开启月份选择器。\n>conf-accept\n`true`<br>`false`\n>conf-type\nBoolean\n>conf-default\n`false`\n---\n#demo\n>desc\n点击头部的年份来选择年份，选完后会显示月份选择器。\n>tpl\n<div style=\"width:260px\">\n    <ui-calendar pick-year-month></ui-calendar>\n</div>\n:::\n\n:::vue\n@name:background-mark\n---\n#config\n>conf-desc\n日期的背景标记，通过改变日期的背景颜色来标记。<br/><br/>数值是一个数组对象，数组中的每一个对象表示一个标记，标记包含属性：<br/>`start` : 标记开始的日期(Date对象)<br/>`end` : 标记结束的日期(Date对象)<br/>`style` : 标记的色彩样式，支持[设计/色彩](/design/color.html)中所有的功能及中性颜色值(除`transparent`)<br>`disabled` : 禁用样式<br><br>一个标记对象必需完整的包含`start` / `end`，否则不会生效。\n>conf-accept\n标记数组对象\n>conf-type\nArray\n>conf-default\n`[]`\n---\n#demo\n>tpl\n<div style=\"width:260px\">\n    <ui-calendar \n        :date=\"+new Date('2017-11-01')\"\n        :background-mark=\"[\n            {\n                start: new Date('2017-11-09'),\n                end: new Date('2017-11-13'),\n                style: 'primary'\n            },\n            {\n                start: new Date('2017-11-20'),\n                end: new Date('2017-11-20'),\n                style: 'danger'\n            }\n        ]\"\n    ></ui-calendar>\n</div>\n---\n#demo\n>desc\n跨月份的标记。\n>tpl\n<div style=\"width:260px\">\n    <ui-calendar\n        :date=\"+new Date('2017-11-01')\"\n        :background-mark=\"[\n            {\n                start: new Date('2017-10-20'), \n                end: new Date('2017-11-03'), \n                style: 'neutral-2'\n            }\n        ]\"\n    ></ui-calendar>\n</div>\n---\n#demo\n>desc\n禁用样式配合`highlight-hover`。\n>tpl\n<div style=\"width:260px\">\n    <ui-calendar\n        highlight-hover\n        :date=\"+new Date('2017-11-01')\"\n        :background-mark=\"[\n            {\n                start: new Date('2017-11-09'),\n                end: new Date('2017-11-13'),\n                disabled: true\n            }\n        ]\"\n    ></ui-calendar>\n</div>\n:::\n\n:::vue\n@name:point-mark\n---\n#config\n>conf-desc\n日期的点标记，一般用于表示该日期上有事件。<br/><br/>数值是一个数组对象，数组中的每一个对象表示一个标记，标记包含属性：<br/>`start` : 标记开始的日期(Date对象)<br/>`end` : 标记结束的日期(Date对象)<br/>`style` : 标记的色彩样式，支持[设计/色彩](/design/color.html)中所有的功能及中性颜色值(除`transparent`)<br><br>一个标记对象必需完整的包含`start` / `end`，否则不会生效。\n>conf-accept\n标记数组对象\n>conf-type\nArray\n>conf-default\n`[]`\n---\n#demo\n>tpl\n<div style=\"width:260px\">\n    <ui-calendar\n        :date=\"+new Date('2017-11-01')\"\n        :point-mark=\"[\n            {   \n                start: new Date('2017-11-09'),\n                end: new Date('2017-11-13'),\n                style: 'primary'\n            },\n            {\n                start: new Date('2017-11-20'),\n                end: new Date('2017-11-20'),\n                style: 'danger'\n            }\n        ]\"\n    ></ui-calendar>\n</div>\n---\n#demo\n>desc\n跨月份的标记。\n>tpl\n<div style=\"width:260px\">\n    <ui-calendar\n        :date=\"+new Date('2017-11-01')\"\n        :point-mark=\"[\n            {\n                start: new Date('2017-10-20'),\n                end: new Date('2017-11-03'),\n                style: 'primary'\n            }\n        ]\"\n    ></ui-calendar>\n</div>\n:::\n\n:::vue\n@name:mode\n---\n#config\n>conf-desc\n日历显示日期的模式。\n>conf-accept\n`'day'`：显示到天<br>`'month'`：显示到月份<br>`'year'`：显示到年\n>conf-type\nString\n>conf-default\n`'day'`\n---\n#demo\n>tpl\n<div style=\"width:260px\">\n    <ui-calendar mode=\"month\"></ui-calendar>\n</div>\n---\n#demo\n>tpl\n<div style=\"width:260px\">\n    <ui-calendar mode=\"year\"></ui-calendar>\n</div>\n---\n#demo\n>desc\n`mode`配合`highlight-now`一起使用。\n>tpl\n<div style=\"width:260px\">\n    <ui-calendar mode=\"month\" highlight-now></ui-calendar>\n    <br>\n    <ui-calendar mode=\"year\" highlight-now></ui-calendar>\n</div>\n---\n#demo\n>desc\n`mode`配合`highlight-hover`一起使用。\n>tpl\n<div style=\"width:260px\">\n    <ui-calendar mode=\"month\" highlight-hover></ui-calendar>\n    <br>\n    <ui-calendar mode=\"year\" highlight-hover></ui-calendar>\n</div>\n---\n#demo\n>desc\n`mode`配合`highlight-day`一起使用。\n>tpl\n<div style=\"width:260px\">\n    <ui-calendar\n        mode=\"month\"\n        :date=\"+new Date('2017-11-01')\"\n        :highlight-day=\"[\n            new Date('2017-03-01'),\n            +new Date('2017-04-01'),\n            new Date('2017-05-01'),\n            +new Date('2017-09-01')\n        ]\"\n    ></ui-calendar>\n    <br>\n    <ui-calendar\n        mode=\"year\"\n        :date=\"+new Date('2017-11-01')\"\n        :highlight-day=\"[\n            new Date('2011-01-01'),\n            +new Date('2012-01-01'),\n            new Date('2013-01-01'),\n            +new Date('2022-01-01')\n        ]\"\n    ></ui-calendar>\n</div>\n---\n#demo\n>desc\n`mode`配合`background-mark`一起使用。\n>tpl\n<div style=\"width:260px\">\n    <ui-calendar\n        mode=\"month\"\n        :date=\"+new Date('2017-11-01')\"\n        :background-mark=\"[\n            {\n                start: new Date('2017-03-01'),\n                end: new Date('2017-06-01'),\n                style: 'primary'\n            },\n            {\n                start: new Date('2017-11-01'),\n                end: new Date('2017-11-01'),\n                style: 'danger'\n            }\n        ]\"\n    ></ui-calendar>\n    <br>\n    <ui-calendar\n        mode=\"year\"\n        :date=\"+new Date('2017-11-01')\"\n        :background-mark=\"[\n            {\n                start: new Date('2009-01-01'),\n                end: new Date('2012-01-01'),\n                style: 'primary'\n            },\n            {\n                start: new Date('2020-01-01'),\n                end: new Date('2020-01-01'),\n                style: 'danger'\n            }\n        ]\"\n    ></ui-calendar>\n</div>\n---\n#demo\n>desc\n`mode`配合`point-mark`一起使用。\n>tpl\n<div style=\"width:260px\">\n    <ui-calendar\n        mode=\"month\"\n        :date=\"+new Date('2017-11-01')\"\n        :point-mark=\"[\n            {\n                start: new Date('2017-03-01'),\n                end: new Date('2017-06-01'),\n                style: 'primary'\n            },\n            {\n                start: new Date('2017-11-01'),\n                end: new Date('2017-11-01'),\n                style: 'danger'\n            }\n        ]\"\n    ></ui-calendar>\n    <br>\n    <ui-calendar\n        mode=\"year\"\n        :date=\"+new Date('2017-11-01')\"\n        :point-mark=\"[\n            {\n                start: new Date('2009-01-01'),\n                end: new Date('2012-01-01'),\n                style: 'primary'\n            },\n            {\n                start: new Date('2020-01-01'),\n                end: new Date('2020-01-01'),\n                style: 'danger'\n            }\n        ]\"\n    ></ui-calendar>\n</div>\n:::\n\n[[[方法]]]\n\n:::vue\n@name:toggleYearPick([show])\n---\n#method\n>method-desc\n切换年份选择器显示状态。\n>method-args\n|show|YES|切换到显示或隐藏状态，不输入则切换到反向状态。|`undefined`<br>`true`<br>`false`|`Undefined`<br>`Boolean`|`undefined`|\n>method-return\n当前组件VM实例。\n---\n#demo\n>tpl\n<div>\n    <div style=\"width:260px\">\n        <ui-calendar ref=\"demo1\"></ui-calendar>\n    </div>\n    <br>\n    <ui-link js=\"window.morning.findVM('demo1').toggleYearPick(true);\">显示年份选择器</ui-link>\n    <ui-link js=\"window.morning.findVM('demo1').toggleYearPick(false);\">隐藏年份选择器</ui-link>\n    <ui-link js=\"window.morning.findVM('demo1').toggleYearPick();\">切换到反向状态</ui-link>\n</div>\n:::\n\n:::vue\n@name:toggleMonthPick([show])\n---\n#method\n>method-desc\n切换月份选择器显示状态。\n>method-args\n|show|YES|切换到显示或隐藏状态，不输入则切换到反向状态。|`undefined`<br>`true`<br>`false`|`Undefined`<br>`Boolean`|`undefined`|\n>method-return\n当前组件VM实例。\n---\n#demo\n>tpl\n<div>\n    <div style=\"width:260px\">\n        <ui-calendar ref=\"demo2\"></ui-calendar>\n    </div>\n    <br>\n    <ui-link js=\"window.morning.findVM('demo2').toggleMonthPick(true);\">显示月份选择器</ui-link>\n    <ui-link js=\"window.morning.findVM('demo2').toggleMonthPick(false);\">隐藏月份选择器</ui-link>\n    <ui-link js=\"window.morning.findVM('demo2').toggleMonthPick();\">切换到反向状态</ui-link>\n</div>\n:::\n\n:::vue\n@name:getDate([format])\n---\n#method\n>method-desc\n将日历所在日期格式化后返回。\n>method-args\n|format|YES|日期格式，采用`data-fns`进行格式化|格式化字符串，参数见[date-fns/format](https://date-fns.org/v2.0.0-alpha.27/docs/format)|`String`|`\"yyyy-MM-dd'T'HH:mm:ss.SSSxxx\"`|\n>method-return\n返回格式化后的日期字符串。\n---\n#demo\n>tpl\n<div>\n    <div style=\"width:260px\">\n        <ui-calendar ref=\"demo3\"></ui-calendar>\n    </div>\n    <br>\n    <ui-link js=\"alert(window.morning.findVM('demo3').getDate());\">获取日历所在日期</ui-link>\n</div>\n:::\n\n:::vue\n@name:getTime()\n---\n#method\n>method-desc\n将日历所在日期的时间戳。\n>method-return\n返回时间戳数字。\n---\n#demo\n>tpl\n<div>\n    <div style=\"width:260px\">\n        <ui-calendar ref=\"demo4\"></ui-calendar>\n    </div>\n    <br>\n    <ui-link js=\"alert(window.morning.findVM('demo4').getTime());\">获取日历所在日期的时间戳</ui-link>\n</div>\n:::\n\n:::vue\n@name:setTime(timestrap)\n---\n#method\n>method-desc\n将日历所在日期设置到指定时间戳。\n>method-args\n|timestrap|NO|设置日期的时间戳|时间戳|`Number`|`undefined`|\n>method-return\n当前组件VM实例。\n---\n#demo\n>tpl\n<div>\n    <div style=\"width:260px\">\n        <ui-calendar ref=\"demo5\"></ui-calendar>\n    </div>\n    <br>\n    <ui-link js=\"window.morning.findVM('demo5').setTime(+new Date('2016-01-01'));\">日历所在日期设置到2016年1月1日</ui-link>\n</div>\n:::\n\n:::vue\n@name:set(value, [unit])\n---\n#method\n>method-desc\n将日历设定到指定的年份或月份。\n>method-args\n|value|NO|设置的数值|年份或月份|`Number`|`undefined`|\n|unit|YES|设置年份或月份(月份从0开始)|`'year'`<br>`'month'`|`String`|`'month'`|\n>method-return\n当前组件VM实例。\n---\n#demo\n>tpl\n<div>\n    <div style=\"width:260px\">\n        <ui-calendar ref=\"demo6\"></ui-calendar>\n    </div>\n    <br>\n    <ui-link js=\"window.morning.findVM('demo6').set(2009, 'year');\">日历的年份设置到2009年</ui-link>\n    <ui-link js=\"window.morning.findVM('demo6').set(5, 'month');\">日历的月份设置到6月</ui-link>\n</div>\n:::\n\n:::vue\n@name:add(amount, [unit])\n---\n#method\n>method-desc\n将日历的所在日期增加几天、几月或几年。\n>method-args\n|amount|NO|需要增加的数值|数值|`Number`|`undefined`|\n|unit|YES|增加的单位|`'year'`<br>`'month'`<br>`'day'`|`String`|`'month'`|\n>method-return\n当前组件VM实例。\n---\n#demo\n>tpl\n<div>\n    <div style=\"width:260px\">\n        <ui-calendar ref=\"demo7\"></ui-calendar>\n    </div>\n    <br>\n    <ui-link js=\"window.morning.findVM('demo7').add(60, 'day');\">日历增加60天</ui-link>\n    <ui-link js=\"window.morning.findVM('demo7').add(3, 'month');\">日历增加3个月</ui-link>\n    <ui-link js=\"window.morning.findVM('demo7').add(5, 'year');\">日历增加5年</ui-link>\n</div>\n:::\n\n:::vue\n@name:sub(amount, [unit])\n---\n#method\n>method-desc\n将日历的所在日期减少几天、几月或几年。\n>method-args\n|amount|NO|需要减少的数值|数值|`Number`|`undefined`|\n|unit|YES|减少的单位|`'year'`<br>`'month'`<br>`'day'`|`String`|`'month'`|\n>method-return\n当前组件VM实例。\n---\n#demo\n>tpl\n<div>\n    <div style=\"width:260px\">\n        <ui-calendar ref=\"demo8\"></ui-calendar>\n    </div>\n    <br>\n    <ui-link js=\"window.morning.findVM('demo8').sub(60, 'day');\">日历减少60天</ui-link>\n    <ui-link js=\"window.morning.findVM('demo8').sub(3, 'month');\">日历减少3个月</ui-link>\n    <ui-link js=\"window.morning.findVM('demo8').sub(5, 'year');\">日历减少5年</ui-link>\n</div>\n:::\n\n:::vue\n@name:getHighlight([includeNow])\n---\n#method\n>method-desc\n获取日历所有高亮的日期。\n>method-args\n|includeNow|YES|是否包含当天|`true`<br>`false`|`Boolean`|`false`|\n>method-return\n返回一个由所有高亮日期对象(Date)组成的数组，返回的所有日期从早到晚排序，日期时间都是`00:00:00`。\n---\n#demo\n>tpl\n<div>\n    <div style=\"width:260px\">\n        <ui-calendar\n            ref=\"demo9\"\n            :date=\"new Date('2017-10-01')\"\n            :highlight-day=\"[\n                new Date('2017-11-05T13:00:00'),\n                [new Date('2017-11-03'), new Date('2017-11-11')],\n                [new Date('2017-10-27'), new Date('2017-11-02')],\n                [new Date('2017-12-07T21:30:23'), new Date('2017-12-20')],\n                new Date('2017-12-15')\n            ]\"\n        ></ui-calendar>\n    </div>\n    <br>\n    <ui-link js=\"console.log('demo9.console1', window.morning.findVM('demo9').getHighlight())\">获取所有高亮的日期</ui-link>\n    <ui-link js=\"console.log('demo9.console2', window.morning.findVM('demo9').getHighlight(true))\">获取所有高亮的日期(包含当天)</ui-link>\n</div>\n:::\n\n:::vue\n@name:setHighlight(list)\n---\n#method\n>method-desc\n获取日历所有高亮的日期，所有所有高亮日期对象(Date)组成的数组，返回的日期时间都是`00:00:00`。\n>method-args\n|list|NO|高亮指定日期，接受一个数组，数组中每一项代表一个或一段日期，所有匹配到的日期都会高亮|数组，数组中支持三种类型的项目：<br><br>`Date`对象 : 高亮指定日期<br>`Number`(时间戳) : 高亮指定时间戳所在的日期<br>`Array` : 数组格式为:`[start, end]`，从`start`开始到`end`的日期都会高亮，`start`和`end`支持`Date`对象及时间戳|Array|`[]`|\n>method-return\n当前组件VM实例。\n---\n#demo\n>tpl\n<div>\n    <div style=\"width:260px\">\n        <ui-calendar ref=\"demo10\" :date=\"new Date('2017-11-01')\"></ui-calendar>\n    </div>\n    <br>\n    <ui-link js=\"window.morning.findVM('demo10').setHighlight([new Date('2017-11-05'), [new Date('2017-11-07'), new Date('2017-11-11')], [new Date('2017-10-27'), new Date('2017-11-02')], [new Date('2017-12-07'), new Date('2017-12-20')], new Date('2017-12-15')])\">高亮指定日期</ui-link>\n</div>\n:::\n\n[[[事件]]]\n\n:::vue\n@name:change\n---\n#event\n>event-desc\n当日历所在日期变化时触发。\n---\n#demo\n>tpl\n<div style=\"width:260px\">\n    <ui-calendar ref=\"demo11\" @change=\"echo\"></ui-calendar>\n    <ui-link js=\"window.morning.findVM('demo11').setTime(+new Date('2017-10-01'));\">触发change事件</ui-link>\n</div>\n>script\n{\n    methods : {\n        echo : function () {\n            console.log('demo11.console1', 'change event!');\n        }\n    }\n}\n:::\n\n:::vue\n@name:month-change\n---\n#event\n>event-desc\n当日历所在月份变化时触发。\n---\n#demo\n>tpl\n<div style=\"width:260px\">\n    <ui-calendar ref=\"demo12\" @month-change=\"echo\"></ui-calendar>\n    <ui-link js=\"window.morning.findVM('demo12').sub(1, 'month');\">触发month-change事件</ui-link>\n</div>\n>script\n{\n    methods : {\n        echo : function () {\n            console.log('demo12.console1', 'month-change event!');\n        }\n    }\n}\n:::\n\n:::vue\n@name:year-change\n---\n#event\n>event-desc\n当日历所在年份变化时触发。\n---\n#demo\n>tpl\n<div style=\"width:260px\">\n    <ui-calendar ref=\"demo13\" @year-change=\"echo\"></ui-calendar>\n    <ui-link js=\"window.morning.findVM('demo13').sub(1, 'year');\">触发year-change事件</ui-link>\n</div>\n>script\n{\n    methods : {\n        echo : function () {\n            console.log('demo13.console1', 'year-change event!');\n        }\n    }\n}\n:::\n\n:::vue\n@name:highlight\n---\n#event\n>event-desc\n当日历高亮日期变化时触发。\n---\n#demo\n>tpl\n<div style=\"width:260px\">\n    <ui-calendar ref=\"demo14\" @highlight=\"echo\" :date=\"new Date('2017-01-01')\"></ui-calendar>\n    <ui-link js=\"window.morning.findVM('demo14').setHighlight([new Date('2017-01-01')]);\">触发highlight事件</ui-link>\n</div>\n>script\n{\n    methods : {\n        echo : function () {\n            console.log('demo14.console1', 'highlight event!');\n        }\n    }\n}\n:::\n\n:::vue\n@name:date-click\n---\n#event\n>event-desc\n某个日期被点击时触发。\n若`mode=\"month\"`则某个月份被点击时触发。\n>event-args\n|date|用户点击的日期|`Date`|\n---\n#demo\n>tpl\n<div style=\"width:260px\">\n    <p>点击一个日期来触发</p>\n    <ui-calendar ref=\"demo15\" @date-click=\"echo\"></ui-calendar>\n</div>\n>script\n{\n    methods : {\n        echo : function (date) {\n            console.log('demo15.console1', 'click date:' + date);\n        }\n    }\n}\n:::\n\n:::vue\n@name:date-enter\n---\n#event\n>event-desc\n鼠标移入某个日期时触发。\n若`mode=\"month\"`则鼠标移入某个月份时触发。\n>event-args\n|date|鼠标移入的日期|`Date`|\n---\n#demo\n>tpl\n<div style=\"width:260px\">\n    <p>鼠标移入日期来触发</p>\n    <ui-calendar ref=\"demo15\" @date-enter=\"echo\"></ui-calendar>\n</div>\n>script\n{\n    methods : {\n        echo : function (date) {\n            console.log('demo15.console1', 'enter date:' + date);\n        }\n    }\n}\n:::\n\n:::vue\n@name:date-leave\n---\n#event\n>event-desc\n鼠标移出某个日期时触发。\n若`mode=\"month\"`则鼠标移出某个月份时触发。\n>event-args\n|date|鼠标移出的日期|`Date`|\n---\n#demo\n>tpl\n<div style=\"width:260px\">\n    <p>鼠标移出日期来触发</p>\n    <ui-calendar ref=\"demo15\" @date-leave=\"echo\"></ui-calendar>\n</div>\n>script\n{\n    methods : {\n        echo : function (date) {\n            console.log('demo15.console1', 'leave date:' + date);\n        }\n    }\n}\n:::\n\n:::vue\n@layout:lifecycle-event\n---\ncalendar\n日历\n:::\n\n[[[源码]]]\n\n<iframe src=\"/report/coverage/lib/components/calendar/index.vue.html\" name=\"codeFrame\" frameborder=\"0\" onload=\"this.height=codeFrame.document.body.scrollHeight\"></iframe>\n\n")])])},a=[];d._withStripped=!0,t.d(e,"a",function(){return d}),t.d(e,"b",function(){return a})},833:function(n,e,t){"use strict";var d=i(t(1)),a=i(t(834));function i(n){return n&&n.__esModule?n:{default:n}}new d.default({el:"#root",render:function(n){return n(a.default)}})},834:function(n,e,t){"use strict";t.r(e);var d=t(287),a=t(235);for(var i in a)"default"!==i&&function(n){t.d(e,n,function(){return a[n]})}(i);var o=t(0),r=Object(o.a)(a.default,d.a,d.b,!1,null,null,null);r.options.__file="src/docs/pages/component/calendar/index.vue",e.default=r.exports}});