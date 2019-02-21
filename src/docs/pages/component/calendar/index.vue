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

    :::vue
    @name:使用
    ---
    #demo
    >tpl
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

    :::vue
    @name:date
    ---
    #config
    >conf-desc
    日历所在的日期，日历将会切换到`date`所在的月份。
    >conf-accept
    时间戳
    >conf-type
    Number
    >conf-default
    `+new Date()`
    ---
    #demo
    >tpl
    <div style="width:300px">
        <ui-calendar :date="+new Date('2015-11-11')"></ui-calendar>
    </div>
    :::

    :::vue
    @name:highlight-now
    ---
    #config
    >conf-desc
    高亮今天的日期。
    >conf-accept
    `true`<br>`false`
    >conf-type
    Boolean
    >conf-default
    `true`
    ---
    #demo
    >tpl
    <div style="width:300px">
        <ui-calendar highlight-now></ui-calendar>
    </div>
    :::

    :::vue
    @name:highlight-hover
    ---
    #config
    >conf-desc
    高亮鼠标hover状态的日期。
    >conf-accept
    `true`<br>`false`
    >conf-type
    Boolean
    >conf-default
    `false`
    ---
    #demo
    >tpl
    <div style="width:300px">
        <ui-calendar highlight-hover></ui-calendar>
    </div>
    :::

    :::vue
    @name:highlight-day
    ---
    #config
    >conf-desc
    高亮指定日期，接受一个数组，数组中每一项代表一个或一段日期，所有匹配到的日期都会高亮。
    >conf-accept
    数组，数组中支持三种类型的项目：<br><br>`Date`对象 : 高亮指定日期<br>`Number`(时间戳) : 高亮指定时间戳所在的日期<br>`Array` : 数组格式为:`[start, end]`，从`start`开始到`end`的日期都会高亮，`start`和`end`支持`Date`对象及时间戳
    >conf-type
    Array
    >conf-default
    `[]`
    ---
    #demo
    >desc
    高亮指定的日期（若一段日期是连续的则会显示连续的样式），接受`Date`对象和时间戳。
    >tpl
    <div style="width:300px">
        <ui-calendar
            :date="+new Date('2017-11-01')"
            :highlight-day="[
                new Date('2017-10-31'),
                +new Date('2017-11-01'),
                new Date('2017-11-02'),
                +new Date('2017-11-08')
            ]"
        ></ui-calendar>
    </div>
    ---
    #demo
    >desc
    高亮指定的日期范围。
    >tpl
    <div style="width:300px">
        <ui-calendar
            :date="+new Date('2017-11-01')"
            :highlight-day="[
                [new Date('2017-10-27'), new Date('2017-11-03')],
                [new Date('2017-11-29'), new Date('2017-12-02')],
                [new Date('2017-12-05'), new Date('2017-12-12')]
            ]"
        ></ui-calendar>
    </div>
    :::

    :::vue
    @name:pick-year-month
    ---
    #config
    >conf-desc
    选择年份后继续选择月份。如果关闭选完年份后会关闭年份选择器，如果开启选完年份后会开启月份选择器。
    >conf-accept
    `true`<br>`false`
    >conf-type
    Boolean
    >conf-default
    `false`
    ---
    #demo
    >desc
    点击头部的年份来选择年份，选完后会显示月份选择器。
    >tpl
    <div style="width:300px">
        <ui-calendar pick-year-month></ui-calendar>
    </div>
    :::

    :::vue
    @name:background-mark
    ---
    #config
    >conf-desc
    日期的背景标记，通过改变日期的背景颜色来标记。<br/><br/>数值是一个数组对象，数组中的每一个对象表示一个标记，标记包含属性：<br/>`start` : 标记开始的日期(Date对象)<br/>`end` : 标记结束的日期(Date对象)<br/>`style` : 标记的色彩样式，支持[形态/颜色](/guide/status.html#颜色)中所有的功能及辅助颜色值<br>`disabled` : 禁用样式<br><br>一个标记对象必需完整的包含`start`/`end`，否则不会生效。
    >conf-accept
    标记数组对象
    >conf-type
    Array
    >conf-default
    `[]`
    ---
    #demo
    >tpl
    <div style="width:300px">
        <ui-calendar 
            :date="+new Date('2017-11-01')"
            :background-mark="[
                {
                    start: new Date('2017-11-09'),
                    end: new Date('2017-11-13'),
                    style: 'primary'
                },
                {
                    start: new Date('2017-11-20'),
                    end: new Date('2017-11-20'),
                    style: 'danger'
                }
            ]"
        ></ui-calendar>
    </div>
    ---
    #demo
    >desc
    跨月份的标记。
    >tpl
    <div style="width:300px">
        <ui-calendar
            :date="+new Date('2017-11-01')"
            :background-mark="[
                {
                    start: new Date('2017-10-20'), 
                    end: new Date('2017-11-03'), 
                    style: 'light-gray'
                }
            ]"
        ></ui-calendar>
    </div>
    ---
    #demo
    >desc
    禁用样式配合`highlight-hover`。
    >tpl
    <div style="width:300px">
        <ui-calendar
            highlight-hover
            :date="+new Date('2017-11-01')"
            :background-mark="[
                {
                    start: new Date('2017-11-09'),
                    end: new Date('2017-11-13'),
                    disabled: true
                }
            ]"
        ></ui-calendar>
    </div>
    :::

    :::vue
    @name:point-mark
    ---
    #config
    >conf-desc
    日期的点标记，一般用于表示该日期上有事件。<br/><br/>数值是一个数组对象，数组中的每一个对象表示一个标记，标记包含属性：<br/>`start` : 标记开始的日期(Date对象)<br/>`end` : 标记结束的日期(Date对象)<br/>`style` : 标记的色彩样式，支持[形态/颜色](/guide/status.html#颜色)中所有的功能及辅助颜色值<br><br>一个标记对象必需完整的包含`start`/`end`，否则不会生效。
    >conf-accept
    标记数组对象
    >conf-type
    Array
    >conf-default
    `[]`
    ---
    #demo
    >tpl
    <div style="width:300px">
        <ui-calendar
            :date="+new Date('2017-11-01')"
            :point-mark="[
                {   
                    start: new Date('2017-11-09'),
                    end: new Date('2017-11-13'),
                    style: 'primary'
                },
                {
                    start: new Date('2017-11-20'),
                    end: new Date('2017-11-20'),
                    style: 'danger'
                }
            ]"
        ></ui-calendar>
    </div>
    ---
    #demo
    >desc
    跨月份的标记。
    >tpl
    <div style="width:300px">
        <ui-calendar
            :date="+new Date('2017-11-01')"
            :point-mark="[
                {
                    start: new Date('2017-10-20'),
                    end: new Date('2017-11-03'),
                    style: 'primary'
                }
            ]"
        ></ui-calendar>
    </div>
    :::

    [[[方法]]]

    :::vue
    @name:toggleYearPick([show])
    ---
    #method
    >method-desc
    切换年份选择器显示状态。
    >method-args
    |show|YES|切换到显示或隐藏状态，不输入则切换到反向状态。|`undefined`<br>`true`<br>`false`|`Undefined`<br>`Boolean`|`undefined`|
    >method-return
    当前组件VM实例。
    ---
    #demo
    >tpl
    <div>
        <div style="width:300px">
            <ui-calendar ref="demo1"></ui-calendar>
        </div>
        <br>
        <ui-link js="window.morning.findVM('demo1').toggleYearPick(true);">显示年份选择器</ui-link>
        <ui-link js="window.morning.findVM('demo1').toggleYearPick(false);">隐藏年份选择器</ui-link>
        <ui-link js="window.morning.findVM('demo1').toggleYearPick();">切换到反向状态</ui-link>
    </div>
    :::

    :::vue
    @name:toggleMonthPick([show])
    ---
    #method
    >method-desc
    切换月份选择器显示状态。
    >method-args
    |show|YES|切换到显示或隐藏状态，不输入则切换到反向状态。|`undefined`<br>`true`<br>`false`|`Undefined`<br>`Boolean`|`undefined`|
    >method-return
    当前组件VM实例。
    ---
    #demo
    >tpl
    <div>
        <div style="width:300px">
            <ui-calendar ref="demo2"></ui-calendar>
        </div>
        <br>
        <ui-link js="window.morning.findVM('demo2').toggleMonthPick(true);">显示月份选择器</ui-link>
        <ui-link js="window.morning.findVM('demo2').toggleMonthPick(false);">隐藏月份选择器</ui-link>
        <ui-link js="window.morning.findVM('demo2').toggleMonthPick();">切换到反向状态</ui-link>
    </div>
    :::

    :::vue
    @name:getDate([format])
    ---
    #method
    >method-desc
    将日历所在日期格式化后返回。
    >method-args
    |format|YES|日期格式，采用`data-fns`进行格式化|格式化字符串，参数见[date-fns/format](https://date-fns.org/v1.29.0/docs/format)|`String`|`'YYYY-MM-DDTHH:mm:ss.SSSZ'`|
    >method-return
    返回格式化后的日期字符串。
    ---
    #demo
    >tpl
    <div>
        <div style="width:300px">
            <ui-calendar ref="demo3"></ui-calendar>
        </div>
        <br>
        <ui-link js="alert(window.morning.findVM('demo3').getDate());">获取日历所在日期</ui-link>
    </div>
    :::

    :::vue
    @name:getTime()
    ---
    #method
    >method-desc
    将日历所在日期的时间戳。
    >method-return
    返回时间戳数字。
    ---
    #demo
    >tpl
    <div>
        <div style="width:300px">
            <ui-calendar ref="demo4"></ui-calendar>
        </div>
        <br>
        <ui-link js="alert(window.morning.findVM('demo4').getTime());">获取日历所在日期的时间戳</ui-link>
    </div>
    :::

    :::vue
    @name:setTime(timestrap)
    ---
    #method
    >method-desc
    将日历所在日期设置到指定时间戳。
    >method-args
    |timestrap|NO|设置日期的时间戳|时间戳|`Number`|`undefined`|
    >method-return
    当前组件VM实例。
    ---
    #demo
    >tpl
    <div>
        <div style="width:300px">
            <ui-calendar ref="demo5"></ui-calendar>
        </div>
        <br>
        <ui-link js="window.morning.findVM('demo5').setTime(+new Date('2016-01-01'));">日历所在日期设置到2016年1月1日</ui-link>
    </div>
    :::

    :::vue
    @name:set(value, [unit])
    ---
    #method
    >method-desc
    将日历设定到指定的年份或月份。
    >method-args
    |value|NO|设置的数值|年份或月份|`Number`|`undefined`|
    |unit|YES|设置年份或月份|`'year'`<br>`'month'`|`String`|`'month'`|
    >method-return
    当前组件VM实例。
    ---
    #demo
    >tpl
    <div>
        <div style="width:300px">
            <ui-calendar ref="demo6"></ui-calendar>
        </div>
        <br>
        <ui-link js="window.morning.findVM('demo6').set(2009, 'year');">日历的年份设置到2009年</ui-link>
        <ui-link js="window.morning.findVM('demo6').set(5, 'month');">日历的月份设置到5月</ui-link>
    </div>
    :::

    :::vue
    @name:add(amount, [unit])
    ---
    #method
    >method-desc
    将日历的所在日期增加几天、几月或几年。
    >method-args
    |amount|NO|需要增加的数值|数值|`Number`|`undefined`|
    |unit|YES|增加的单位|`'year'`<br>`'month'`<br>`'day'`|`String`|`'month'`|
    >method-return
    当前组件VM实例。
    ---
    #demo
    >tpl
    <div>
        <div style="width:300px">
            <ui-calendar ref="demo7"></ui-calendar>
        </div>
        <br>
        <ui-link js="window.morning.findVM('demo7').add(60, 'day');">日历增加60天</ui-link>
        <ui-link js="window.morning.findVM('demo7').add(3, 'month');">日历增加3个月</ui-link>
        <ui-link js="window.morning.findVM('demo7').add(5, 'year');">日历增加5年</ui-link>
    </div>
    :::

    :::vue
    @name:sub(amount, [unit])
    ---
    #method
    >method-desc
    将日历的所在日期减少几天、几月或几年。
    >method-args
    |amount|NO|需要减少的数值|数值|`Number`|`undefined`|
    |unit|YES|减少的单位|`'year'`<br>`'month'`<br>`'day'`|`String`|`'month'`|
    >method-return
    当前组件VM实例。
    ---
    #demo
    >tpl
    <div>
        <div style="width:300px">
            <ui-calendar ref="demo8"></ui-calendar>
        </div>
        <br>
        <ui-link js="window.morning.findVM('demo8').sub(60, 'day');">日历减少60天</ui-link>
        <ui-link js="window.morning.findVM('demo8').sub(3, 'month');">日历减少3个月</ui-link>
        <ui-link js="window.morning.findVM('demo8').sub(5, 'year');">日历减少5年</ui-link>
    </div>
    :::

    :::vue
    @name:getHighlight([includeNow])
    ---
    #method
    >method-desc
    获取日历所有高亮的日期。
    >method-args
    |includeNow|YES|是否包含当天|`true`<br>`false`|`Boolean`|`false`|
    >method-return
    返回一个由所有高亮日期对象(Date)组成的数组，返回的所有日期从早到晚排序，日期时间都是`00:00:00`。
    ---
    #demo
    >tpl
    <div>
        <div style="width:300px">
            <ui-calendar
                ref="demo9"
                :highlight-day="[
                    new Date('2017-11-05T13:00:00'),
                    [new Date('2017-11-03'), new Date('2017-11-11')],
                    [new Date('2017-10-27'), new Date('2017-11-02')],
                    [new Date('2017-12-07T21:30:23'), new Date('2017-12-20')],
                    new Date('2017-12-15')
                ]"
            ></ui-calendar>
        </div>
        <br>
        <ui-link js="console.log('demo9.console1', window.morning.findVM('demo9').getHighlight())">获取所有高亮的日期</ui-link>
        <ui-link js="console.log('demo9.console2', window.morning.findVM('demo9').getHighlight(true))">获取所有高亮的日期(包含当天)</ui-link>
    </div>
    :::

    :::vue
    @name:setHighlight(list)
    ---
    #method
    >method-desc
    获取日历所有高亮的日期，所有所有高亮日期对象(Date)组成的数组，返回的日期时间都是`00:00:00`。
    >method-args
    |list|NO|高亮指定日期，接受一个数组，数组中每一项代表一个或一段日期，所有匹配到的日期都会高亮|数组，数组中支持三种类型的项目：<br><br>`Date`对象 : 高亮指定日期<br>`Number`(时间戳) : 高亮指定时间戳所在的日期<br>`Array` : 数组格式为:`[start, end]`，从`start`开始到`end`的日期都会高亮，`start`和`end`支持`Date`对象及时间戳|Array|`[]`|
    >method-return
    当前组件VM实例。
    ---
    #demo
    >tpl
    <div>
        <div style="width:300px">
            <ui-calendar ref="demo10"></ui-calendar>
        </div>
        <br>
        <ui-link js="window.morning.findVM('demo10').setHighlight([new Date('2017-11-05'), [new Date('2017-11-07'), new Date('2017-11-11')], [new Date('2017-10-27'), new Date('2017-11-02')], [new Date('2017-12-07'), new Date('2017-12-20')], new Date('2017-12-15')])">高亮指定日期</ui-link>
    </div>
    :::

    [[[事件]]]

    :::vue
    @name:change
    ---
    #event
    >event-desc
    当日历所在日期变化时触发。
    ---
    #demo
    >tpl
    <div style="width:300px">
        <ui-calendar ref="demo11" @change="echo"></ui-calendar>
        <ui-link js="window.morning.findVM('demo11').setTime(+new Date('2017-10-01'));">触发change事件</ui-link>
    </div>
    >script
    {
        methods : {
            echo : function () {
                console.log('demo11.console1', 'change event!');
            }
        }
    }
    :::
    
    :::vue
    @name:month-change
    ---
    #event
    >event-desc
    当日历所在月份变化时触发。
    ---
    #demo
    >tpl
    <div style="width:300px">
        <ui-calendar ref="demo12" @month-change="echo"></ui-calendar>
        <ui-link js="window.morning.findVM('demo12').sub(1, 'month');">触发month-change事件</ui-link>
    </div>
    >script
    {
        methods : {
            echo : function () {
                console.log('demo12.console1', 'month-change event!');
            }
        }
    }
    :::

    :::vue
    @name:year-change
    ---
    #event
    >event-desc
    当日历所在年份变化时触发。
    ---
    #demo
    >tpl
    <div style="width:300px">
        <ui-calendar ref="demo13" @year-change="echo"></ui-calendar>
        <ui-link js="window.morning.findVM('demo13').sub(1, 'year');">触发year-change事件</ui-link>
    </div>
    >script
    {
        methods : {
            echo : function () {
                console.log('demo13.console1', 'year-change event!');
            }
        }
    }
    :::
    
    :::vue
    @name:year-change
    ---
    #event
    >event-desc
    当日历所在年份变化时触发。
    ---
    #demo
    >tpl
    <div style="width:300px">
        <ui-calendar ref="demo13" @year-change="echo"></ui-calendar>
        <ui-link js="window.morning.findVM('demo13').sub(1, 'year');">触发year-change事件</ui-link>
    </div>
    >script
    {
        methods : {
            echo : function () {
                console.log('demo13.console1', 'year-change event!');
            }
        }
    }
    :::
    
    :::vue
    @name:highlight
    ---
    #event
    >event-desc
    当日历高亮日期变化时触发。
    ---
    #demo
    >tpl
    <div style="width:300px">
        <ui-calendar ref="demo14" @highlight="echo"></ui-calendar>
        <ui-link js="window.morning.findVM('demo14').setHighlight([new Date('2017-01-01')]);">触发highlight事件</ui-link>
    </div>
    >script
    {
        methods : {
            echo : function () {
                console.log('demo14.console1', 'highlight event!');
            }
        }
    }
    :::
    
    :::vue
    @name:date-click
    ---
    #event
    >event-desc
    某个日期被点击时触发。
    >event-args
    |date|用户点击的日期|`Date`|
    ---
    #demo
    >tpl
    <div style="width:300px">
        <p>点击一个日期来触发</p>
        <ui-calendar ref="demo15" @date-click="echo"></ui-calendar>
    </div>
    >script
    {
        methods : {
            echo : function (date) {
                console.log('demo15.console1', 'click date:' + date);
            }
        }
    }
    :::
    
    :::vue
    @name:date-enter
    ---
    #event
    >event-desc
    鼠标移入某个日期时触发。
    >event-args
    |date|鼠标移入的日期|`Date`|
    ---
    #demo
    >tpl
    <div style="width:300px">
        <p>鼠标移入日期来触发</p>
        <ui-calendar ref="demo15" @date-enter="echo"></ui-calendar>
    </div>
    >script
    {
        methods : {
            echo : function (date) {
                console.log('demo15.console1', 'enter date:' + date);
            }
        }
    }
    :::

    :::vue
    @name:date-leave
    ---
    #event
    >event-desc
    鼠标移出某个日期时触发。
    >event-args
    |date|鼠标移出的日期|`Date`|
    ---
    #demo
    >tpl
    <div style="width:300px">
        <p>鼠标移出日期来触发</p>
        <ui-calendar ref="demo15" @date-leave="echo"></ui-calendar>
    </div>
    >script
    {
        methods : {
            echo : function (date) {
                console.log('demo15.console1', 'leave date:' + date);
            }
        }
    }
    :::

    :::vue
    @layout:lifecycle-event
    ---
    calendar
    日历
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
