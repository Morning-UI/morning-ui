<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 日历 `<ui-calendar>`
    
    <doc-component-status page="calendar"></doc-component-status>
    
    [[[开始]]]

    定义一个日历，这是一个块级元素。

    点击头部的年份或月份可以选择更多年份及月份。

    #### 使用

    :::democode/html
    <div style="width:300px">
        <ui-calendar></ui-calendar>
    </div>
    :::
    
    [[[形态]]]

    #### 支持

    |类型|支持|默认|
    |-|-|-|
    |尺寸|不支持|-|
    |色彩|不支持|-|
    |状态|不支持|-|

    [[[配置]]]

    |KEY|描述|接受值|值类型|默认值|
    |-|-|-|-|-|
    |[date](#date)|日历所在的日期，日历将会切换到`date`所在的月份|时间戳|Number|`+new Date()`|
    |[highlight-now](#highlight-now)|高亮今天的日期|`true`<br>`false`|Boolean|`true`|
    |[highlight-hover](#highlight-hover)|高亮鼠标hover状态的日期|`true`<br>`false`|Boolean|`false`|
    |[highlight-day](#highlight-day)|高亮指定日期，接受一个数组，数组中每一项代表一个或一段日期，所有匹配到的日期都会高亮|数组，数组中支持三种类型的项目：<br><br>`Date`对象 : 高亮指定日期<br>`Number`(时间戳) : 高亮指定时间戳所在的日期<br>`Array` : 数组格式为:`[start, end]`，从`start`开始到`end`的日期都会高亮，`start`和`end`支持`Date`对象及时间戳|Array|`[]`|
    |[pick-year-month](#pick-year-month)|选择年份后继续选择月份。如果关闭选完年份后会关闭年份选择器，如果开启选完年份后会开启月份选择器|`true`<br>`false`|Boolean|`false`|
    |[background-mark](#background-mark)|日期的背景标记，通过改变日期的背景颜色来标记。<br/><br/>数值是一个数组对象，数组中的每一个对象表示一个标记，标记包含属性：<br/>`start` : 标记开始的日期(Date对象)<br/>`end` : 标记结束的日期(Date对象)<br/>`style` : 标记的色彩样式，支持[形态/颜色](/guide/status.html#颜色)中所有的功能及辅助颜色值<br>`disabled` : 禁用样式<br><br>一个标记对象必需完整的包含`start`/`end`，否则不会生效。|标记数组对象|Array|`[]`|
    |[point-mark](#point-mark)|日期的点标记，一般用于表示该日期上有事件。<br/><br/>数值是一个数组对象，数组中的每一个对象表示一个标记，标记包含属性：<br/>`start` : 标记开始的日期(Date对象)<br/>`end` : 标记结束的日期(Date对象)<br/>`style` : 标记的色彩样式，支持[形态/颜色](/guide/status.html#颜色)中所有的功能及辅助颜色值<br><br>一个标记对象必需完整的包含`start`/`end`，否则不会生效。|标记数组对象|Array|`[]`|

    #### date

    :::democode/html
    <div style="width:300px">
        <ui-calendar :date="+new Date('2015-11-11')"></ui-calendar>
    </div>
    :::

    #### highlight-now

    :::democode/html
    <div style="width:300px">
        <ui-calendar highlight-now></ui-calendar>
    </div>
    :::

    #### highlight-hover

    :::democode/html
    <div style="width:300px">
        <ui-calendar highlight-hover></ui-calendar>
    </div>
    :::

    #### highlight-day

    高亮指定的日期（若一段日期是连续的则会显示连续的样式），接受`Date`对象和时间戳：

    :::democode/html
    <div style="width:300px">
        <ui-calendar :date="+new Date('2017-11-1')" :highlight-day="[new Date('2017-10-31'), +new Date('2017-11-1'), new Date('2017-11-2'), +new Date('2017-11-8')]"></ui-calendar>
    </div>
    :::

    高亮指定的日期范围：

    :::democode/html
    <div style="width:300px">
        <ui-calendar :date="+new Date('2017-11-1')" :highlight-day="[[new Date('2017-10-27'), new Date('2017-11-3')], [new Date('2017-11-29'), new Date('2017-12-2')], [new Date('2017-12-5'), new Date('2017-12-12')]]"></ui-calendar>
    </div>
    :::

    #### pick-year-month

    点击头部的年份来选择年份，选完后会显示月份选择器：

    :::democode/html
    <div style="width:300px">
        <ui-calendar pick-year-month></ui-calendar>
    </div>
    :::

    #### background-mark

    :::democode/html
    <div style="width:300px">
        <ui-calendar :date="+new Date('2017-11-1')" :background-mark="[{start: new Date('2017-11-9'), end: new Date('2017-11-13'), style: 'primary'}, {start: new Date('2017-11-20'), end: new Date('2017-11-20'), style: 'danger'}]"></ui-calendar>
    </div>
    :::

    跨月份的标记：

    :::democode/html
    <div style="width:300px">
        <ui-calendar :date="+new Date('2017-11-1')" :background-mark="[{start: new Date('2017-10-20'), end: new Date('2017-11-3'), style: 'light-gray'}]"></ui-calendar>
    </div>
    :::

    禁用样式配合`highlight-hover`：

    :::democode/html
    <div style="width:300px">
        <ui-calendar highlight-hover :date="+new Date('2017-11-1')" :background-mark="[{start: new Date('2017-11-9'), end: new Date('2017-11-13'), disabled: true}]"></ui-calendar>
    </div>
    :::

    #### point-mark

    :::democode/html
    <div style="width:300px">
        <ui-calendar :date="+new Date('2017-11-1')" :point-mark="[{start: new Date('2017-11-9'), end: new Date('2017-11-13'), style: 'primary'}, {start: new Date('2017-11-20'), end: new Date('2017-11-20'), style: 'danger'}]"></ui-calendar>
    </div>
    :::

    跨月份的标记：

    :::democode/html
    <div style="width:300px">
        <ui-calendar :date="+new Date('2017-11-1')" :point-mark="[{start: new Date('2017-10-20'), end: new Date('2017-11-3'), style: 'primary'}]"></ui-calendar>
    </div>
    :::

    禁用样式配合`highlight-hover`：

    :::democode/html
    <div style="width:300px">
        <ui-calendar highlight-hover :date="+new Date('2017-11-1')" :point-mark="[{start: new Date('2017-11-9'), end: new Date('2017-11-13'), disabled: true}]"></ui-calendar>
    </div>
    :::

    [[[方法]]]

    #### toggleYearPick([show])

    切换年份选择器显示状态。
    
    |KEY|可选|描述|接受值|值类型|默认值|
    |-|-|-|-|-|-|
    |show|YES|切换到显示或隐藏状态，不输入则切换到反向状态。|`undefined`<br>`true`<br>`false`|`Undefined`<br>`Boolean`|`undefined`|

    :::democode/html
    <div style="width:300px">
        <ui-calendar ref="demo1"></ui-calendar>
    </div>
    <br>
    <ui-link js="window.morning.findVM('demo1').toggleYearPick(true);">显示年份选择器</ui-link>
    <ui-link js="window.morning.findVM('demo1').toggleYearPick(false);">隐藏年份选择器</ui-link>
    <ui-link js="window.morning.findVM('demo1').toggleYearPick();">切换到反向状态</ui-link>
    :::

    #### toggleMonthPick([show])

    切换月份选择器显示状态。
    
    |KEY|可选|描述|接受值|值类型|默认值|
    |-|-|-|-|-|-|
    |show|YES|切换到显示或隐藏状态，不输入则切换到反向状态。|`undefined`<br>`true`<br>`false`|`Undefined`<br>`Boolean`|`undefined`|

    :::democode/html
    <div style="width:300px">
        <ui-calendar ref="demo2"></ui-calendar>
    </div>
    <br>
    <ui-link js="window.morning.findVM('demo2').toggleMonthPick(true);">显示月份选择器</ui-link>
    <ui-link js="window.morning.findVM('demo2').toggleMonthPick(false);">隐藏月份选择器</ui-link>
    <ui-link js="window.morning.findVM('demo2').toggleMonthPick();">切换到反向状态</ui-link>
    :::

    #### getDate([format])

    将日历所在日期格式化后返回。
    
    |KEY|可选|描述|接受值|值类型|默认值|
    |-|-|-|-|-|-|
    |format|YES|日期格式，采用`data-fns`进行格式化|格式化字符串，参数见[date-fns/format](https://date-fns.org/v1.29.0/docs/format)|`String`|`'YYYY-MM-DDTHH:mm:ss.SSSZ'`|

    :::democode/html
    <div style="width:300px">
        <ui-calendar ref="demo3"></ui-calendar>
    </div>
    <br>
    <ui-link js="alert(window.morning.findVM('demo3').getDate());">获取日历所在日期</ui-link>
    :::

    #### getTime()

    将日历所在日期的时间戳。
    
    :::democode/html
    <div style="width:300px">
        <ui-calendar ref="demo4"></ui-calendar>
    </div>
    <br>
    <ui-link js="alert(window.morning.findVM('demo4').getTime());">获取日历所在日期的时间戳</ui-link>
    :::

    #### setTime(timestrap)

    将日历所在日期设置到指定时间戳。
    
    |KEY|可选|描述|接受值|值类型|默认值|
    |-|-|-|-|-|-|
    |timestrap|NO|设置日期的时间戳|时间戳|`Number`|`undefined`|
    
    :::democode/html
    <div style="width:300px">
        <ui-calendar ref="demo5"></ui-calendar>
    </div>
    <br>
    <ui-link js="window.morning.findVM('demo5').setTime(+new Date('2016-1-1'));">日历所在日期设置到2016年1月1日</ui-link>
    :::

    #### set(value, [unit])

    将日历设定到指定的年份或月份。

    |KEY|可选|描述|接受值|值类型|默认值|
    |-|-|-|-|-|-|
    |value|NO|设置的数值|年份或月份|`Number`|`undefined`|
    |unit|YES|设置年份或月份|`'year'`<br>`'month'`|`String`|`'month'`|
    
    :::democode/html
    <div style="width:300px">
        <ui-calendar ref="demo6"></ui-calendar>
    </div>
    <br>
    <ui-link js="window.morning.findVM('demo6').set(2009, 'year');">日历的年份设置到2009年</ui-link>
    <ui-link js="window.morning.findVM('demo6').set(5, 'month');">日历的月份设置到5月</ui-link>
    :::

    #### add(amount, [unit])

    将日历的所在日期增加几天、几月或几年。

    |KEY|可选|描述|接受值|值类型|默认值|
    |-|-|-|-|-|-|
    |amount|NO|需要增加的数值|数值|`Number`|`undefined`|
    |unit|YES|增加的单位|`'year'`<br>`'month'`<br>`'day'`|`String`|`'month'`|
    
    :::democode/html
    <div style="width:300px">
        <ui-calendar ref="demo7"></ui-calendar>
    </div>
    <br>
    <ui-link js="window.morning.findVM('demo7').add(60, 'day');">日历增加60天</ui-link>
    <ui-link js="window.morning.findVM('demo7').add(3, 'month');">日历增加3个月</ui-link>
    <ui-link js="window.morning.findVM('demo7').add(5, 'year');">日历增加5年</ui-link>
    :::

    #### sub(amount, [unit])

    将日历的所在日期减少几天、几月或几年。

    |KEY|可选|描述|接受值|值类型|默认值|
    |-|-|-|-|-|-|
    |amount|NO|需要减少的数值|数值|`Number`|`undefined`|
    |unit|YES|减少的单位|`'year'`<br>`'month'`<br>`'day'`|`String`|`'month'`|
    
    :::democode/html
    <div style="width:300px">
        <ui-calendar ref="demo8"></ui-calendar>
    </div>
    <br>
    <ui-link js="window.morning.findVM('demo8').sub(60, 'day');">日历减少60天</ui-link>
    <ui-link js="window.morning.findVM('demo8').sub(3, 'month');">日历减少3个月</ui-link>
    <ui-link js="window.morning.findVM('demo8').sub(5, 'year');">日历减少5年</ui-link>
    :::

    #### getHighlight([includeNow])

    获取日历所有高亮的日期，所有所有高亮日期对象(Date)组成的数组，返回的所有日期从早到晚排序，日期时间都是`00:00:00`。

    |KEY|可选|描述|接受值|值类型|默认值|
    |-|-|-|-|-|-|
    |includeNow|YES|是否包含当天|`true`<br>`false`|`Boolean`|`false`|

    :::democode/html
    <div style="width:300px">
        <ui-calendar ref="demo9" :highlight-day="[new Date('2017-11-5 13:00:00'), [new Date('2017-11-3'), new Date('2017-11-11')], [new Date('2017-10-27'), new Date('2017-11-2')], [new Date('2017-12-7 21:30:23'), new Date('2017-12-20')], new Date('2017-12-15')]"></ui-calendar>
    </div>
    <br>
    <ui-link js="console.log('demo9.console1', window.morning.findVM('demo9').getHighlight())">获取所有高亮的日期</ui-link>
    <ui-link js="console.log('demo9.console2', window.morning.findVM('demo9').getHighlight(true))">获取所有高亮的日期(包含当天)</ui-link>
    :::

    #### setHighlight(list)

    获取日历所有高亮的日期，所有所有高亮日期对象(Date)组成的数组，返回的日期时间都是`00:00:00`。

    |KEY|可选|描述|接受值|值类型|默认值|
    |-|-|-|-|-|-|
    |list|NO|高亮指定日期，接受一个数组，数组中每一项代表一个或一段日期，所有匹配到的日期都会高亮|数组，数组中支持三种类型的项目：<br><br>`Date`对象 : 高亮指定日期<br>`Number`(时间戳) : 高亮指定时间戳所在的日期<br>`Array` : 数组格式为:`[start, end]`，从`start`开始到`end`的日期都会高亮，`start`和`end`支持`Date`对象及时间戳|Array|`[]`|

    :::democode/html
    <div style="width:300px">
        <ui-calendar ref="demo10"></ui-calendar>
    </div>
    <br>
    <ui-link js="window.morning.findVM('demo10').setHighlight([new Date('2017-11-5'), [new Date('2017-11-7'), new Date('2017-11-11')], [new Date('2017-10-27'), new Date('2017-11-2')], [new Date('2017-12-7'), new Date('2017-12-20')], new Date('2017-12-15')])">高亮指定日期</ui-link>
    :::

    [[[事件]]]

    #### change

    当日历所在日期变化时触发。

    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
        methods : {
            echo : function () {
                console.log('demo11.console1', 'change event!');
            }
        }
    });
    ---
    <div style="width:300px">
        <ui-calendar ref="demo11" @change="echo"></ui-calendar>
        <ui-link js="window.morning.findVM('demo11').setTime(+new Date('2017-10-1'));">触发change事件</ui-link>
    </div>
    :::

    #### month-change

    当日历所在月份变化时触发。

    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
        methods : {
            echo : function () {
                console.log('demo12.console1', 'month-change event!');
            }
        }
    });
    ---
    <div style="width:300px">
        <ui-calendar ref="demo12" @month-change="echo"></ui-calendar>
        <ui-link js="window.morning.findVM('demo12').sub(1, 'month');">触发month-change事件</ui-link>
    </div>
    :::

    #### year-change

    当日历所在年份变化时触发。

    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
        methods : {
            echo : function () {
                console.log('demo13.console1', 'year-change event!');
            }
        }
    });
    ---
    <div style="width:300px">
        <ui-calendar ref="demo13" @year-change="echo"></ui-calendar>
        <ui-link js="window.morning.findVM('demo13').sub(1, 'year');">触发year-change事件</ui-link>
    </div>
    :::

    #### highlight

    当日历高亮日期变化时触发。

    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
        methods : {
            echo : function () {
                console.log('demo14.console1', 'highlight event!');
            }
        }
    });
    ---
    <div style="width:300px">
        <ui-calendar ref="demo14" @highlight="echo"></ui-calendar>
        <ui-link js="window.morning.findVM('demo14').setHighlight([new Date('2017-1-1')]);">触发highlight事件</ui-link>
    </div>
    :::

    #### date-click
    
    某个日期被点击时触发。

    ##### 参数

    |KEY|描述|值类型|
    |-|-|-|
    |date|用户点击的日期|`Date`|

    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
        methods : {
            echo : function (date) {
                console.log('demo15.console1', 'click date:' + date);
            }
        }
    });
    ---
    <div style="width:300px">
        <p>点击一个日期来触发</p>
        <ui-calendar ref="demo15" @date-click="echo"></ui-calendar>
    </div>
    :::

    #### date-enter
    
    鼠标移入某个日期时触发。

    ##### 参数

    |KEY|描述|值类型|
    |-|-|-|
    |date|鼠标移入的日期|`Date`|

    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
        methods : {
            echo : function (date) {
                console.log('demo15.console1', 'enter date:' + date);
            }
        }
    });
    ---
    <div style="width:300px">
        <p>鼠标移入日期来触发</p>
        <ui-calendar ref="demo15" @date-enter="echo"></ui-calendar>
    </div>
    :::

    #### date-leave
    
    鼠标移出某个日期时触发。

    ##### 参数

    |KEY|描述|值类型|
    |-|-|-|
    |date|鼠标移出的日期|`Date`|

    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
        methods : {
            echo : function (date) {
                console.log('demo15.console1', 'leave date:' + date);
            }
        }
    });
    ---
    <div style="width:300px">
        <p>鼠标移出日期来触发</p>
        <ui-calendar ref="demo15" @date-leave="echo"></ui-calendar>
    </div>
    :::

    #### 生命周期事件

    :::vue/html
    window.demoEventLifecycle = new Vue({
        el : '{$el}',
        template : '{$template}',
        data : function () {
            return {
               text : '日历',
               show : true
            };
        },
        methods : {
            echo : function (name) {
                console.log('demoEventLifecycle.console1', name + ' event!');
            }
        }
    });
    ---
    <div style="width:300px">
        <ui-calendar
            ref="demoEventLifecycle"
            v-show="show"
            @created="echo('created')"
            @mounted="echo('mounted')"
            @before-update="echo('before-update')"
            @updated="echo('updated')"
            @before-destroy="echo('before-destroy')"
            @destroyed="echo('destroyed')"
        >{*text*}</ui-calendar>

        <br><br>

        <ui-link js="window.demoEventLifecycle.text='生命周期事件';">触发update</ui-link>
        <ui-link js="morning.findVM('demoEventLifecycle').$destroy();">触发destroy</ui-link>
    </div>
    :::

    [[[源码]]]

    <iframe src="/report/coverage/lib/components/calendar/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>

    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                 from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'calendar'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
