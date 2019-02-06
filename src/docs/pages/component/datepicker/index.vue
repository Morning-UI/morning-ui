<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 日期选择器 `<ui-datepicker>`
    
    <doc-component-status page="datepicker"></doc-component-status>
    
    [[[开始]]]

    定义日期选择器。

    :::vue
    @name:使用
    ---
    #demo
    >tpl
    <div style="width:300px;">
        <ui-datepicker form-name="日期"></ui-datepicker>
    </div>
    :::

    :::vue
    @name:自定义日期格式
    ---
    #demo
    >desc
    日期选择器允许用户自定日期格式，使用中文时间。
    >tpl
    <div style="width:300px;">
        <ui-datepicker form-name="日期" :date="+new Date('2018-03-23')" format="YYYY年MM月DD日" v-model="value"></ui-datepicker>
    </div>
    >script
    {
        data : {
            value : '2018年03月23日'
        }
    }
    ---
    #demo
    >desc
    使用简短的年份。<br><br>更多自定义格式见：[format配置](/component/datepicker.html#format)。
    >tpl
    <div style="width:300px;">
        <ui-datepicker form-name="日期" :date="+new Date('2018-03-23')" format="YY年MM月DD日" v-model="value"></ui-datepicker>
    </div>
    >script
    {
        data : {
            value : '18年03月23日'
        }
    }
    :::

    :::vue
    @name:范围日期选择
    ---
    #demo
    >tpl
    <div style="width:360px;">
        <ui-datepicker form-name="日期" :is-range="true"></ui-datepicker>
    </div>
    :::
    
    [[[形态]]]
    
    :::preset
    @name:formStatus
    @uikey:datepicker
    @defaultValue:'2018-03-23'
    @attrs: :date="+new Date('2018-03-23')"
    :::

    [[[配置]]]

    :::preset
    @name:formConfig
    @uikey:datepicker
    @defaultValue:'2018-03-23'
    @attrs: :date="+new Date('2018-03-23')"
    :::

    :::vue
    @name:inside-name
    ---
    #config
    >conf-desc
    在组件内显示的名称，和`form-name`互为补充。
    >conf-accept
    名称
    >conf-type
    String
    >conf-default
    `''`
    ---
    #demo
    >tpl
    <div style="width:300px">
        <ui-datepicker inside-name="日期"></ui-datepicker>
    </div>
    :::

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
        <ui-datepicker :date="+new Date('2018-03-23')"></ui-datepicker>
    </div>
    :::

    :::vue
    @name:format
    ---
    #config
    >conf-desc
    格式化展示的日期。
    <br><br>
    `format`允许自定义组件展示的日期格式，支持以下占位符：
    |单位|占位符|示例|
    |-|-|-|
    |年份|YY|00, 01, ..., 99|
    ||YYYY|1900, 1901, ..., 2099|
    |季度|Q|1, 2, 3, 4|
    ||Qo|1st, 2nd, 3rd, 4th|
    |月份|M|1, 2, ..., 12|
    ||Mo|1st, 2nd, ..., 12th|
    ||MM|01, 02, ..., 12|
    ||MMM|Jan, Feb, ..., Dec|
    ||MMMM|January, February, ..., December|
    |一月中第几天|D|1, 2, ..., 31|
    ||Do|1st, 2nd, ..., 31st|
    ||DD|01, 02, ..., 31|
    |一周中第几天|d|0, 1, ..., 6|
    ||do|0th, 1st, ..., 6th|
    ||dd|Su, Mo, ..., Sa|
    ||ddd|Sun, Mon, ..., Sat|
    ||dddd|Sunday, Monday, ..., Saturday|
    |一年中第几天|DDD|1, 2, ..., 366|
    ||DDDo|1st, 2nd, ..., 366th|
    ||DDDD|001, 002, ..., 366|
    >conf-accept
    日期格式化字符串(支持日期占位符见下方的演示)
    >conf-type
    String
    >conf-default
    `'YYYY-MM-DD'`
    ---
    #demo
    >desc
    采用`|`分隔日期。
    >tpl
    <div style="width:300px;">
        <ui-datepicker form-name="日期" :date="+new Date('2018-03-23')" format="YYYY | MM | DD" v-model="value"></ui-datepicker>
    </div>
    >script
    {
        data : {
            value : '2018 | 03 | 23'
        }
    }
    ---
    #demo
    >desc
    同时显示多种日期格式(显示多个日期时，最后一个优先级最高)。
    >tpl
    <div style="width:400px;">
        <ui-datepicker form-name="日期" :date="+new Date('2018-03-23')" format="YYYY-MM-DD | MMM DD, YYYY" v-model="value"></ui-datepicker>
    </div>
    >script
    {
        data : {
            value : '2018-03-23 | Mar 23, 2018'
        }
    }
    :::

    :::vue
    @name:align
    ---
    #config
    >conf-desc
    日期对齐方式。
    >conf-accept
    `'left'` : 左对齐<br>`'center'` : 居中对齐<br>`'right'` : 右对齐
    >conf-type
    String
    >conf-default
    `'left'`
    ---
    #demo
    >desc
    居中对齐。
    >tpl
    <div style="width:300px;">
        <ui-datepicker form-name="日期" :date="+new Date('2018-03-23')" v-model="value" align="center"></ui-datepicker>
    </div>
    >script
    {
        data : {
            value : '2018-03-23'
        }
    }
    ---
    #demo
    >desc
    右对齐。
    >tpl
    <div style="width:300px;">
        <ui-datepicker form-name="日期" :date="+new Date('2018-03-23')" v-model="value" align="right"></ui-datepicker>
    </div>
    >script
    {
        data : {
            value : '2018-03-23'
        }
    }
    :::

    :::vue
    @name:quick-pick
    ---
    #config
    >conf-desc
    显示快速选择项，这个配置是一个数组，数组中的每一项都是一个快速选择项目。<br><br>数组项支持两种类型：<br><br>__关键词__ ：支持字符串格式的快速选择关键词。<br><br>未开启`is-range`情况下包括：`今天`、`昨天`、`明天`、`n 天前`、`n 周前`、`n 月前`、`n 年前`、`n 天后`、`n 周后`、`n 月后`、`n 年后`(需要注意`n`后面有空格)，例如：`2 天前`、`3 周前`。<br><br>开启`is-range`情况下包括：`本周`、`本月`、`今年`、`最近 n 天`、`最近 n 周`、`最近 n 月`、`最近 n 年`、`未来 n 天`、`未来 n 周`、`未来 n 月`、`未来 n 年`(需要注意`n`前后有空格)，例如：`未来 2 周`、`最近 3 月`。<br><br>__时间设置__：是一个对象。<br><br>未开启`is-range`情况下包含`name`和`pick`两个属性。<br>`name`是快速选择项展现的名称。<br>`pick`支持`数字`或`日期对象`。若`pick`是`数字`则代表相对天数，会选中当前日期和`pick`相加后的日期，所以`pick`是负数代表过去的日期，正数则代表未来的日期。若`pick`是`日期对象`则会选中`pick`所表示的日期。<br><br>开启`is-range`情况下包含`name`、`start`、`end`三个属性。<br>`name`是快速选择项展现的名称。<br>`start`和`end`是`日期对象`分别表示选择日期段的开始和结束。<br><br>你可以混合使用多种类型的快速选择项(详见[下面的示例](#quick-pick))。
    >conf-accept
    字符串(关键词)<br>对象(时间设置)
    >conf-type
    Array
    >conf-default
    `[]`
    ---
    #demo
    >desc
    你可以通过预设的关键词来设置日期快速选择项。
    >tpl
    <div style="width:300px;">
        <ui-datepicker
            form-name="日期"
            :quick-pick="[
                '今天',
                '昨天',
                '2 天前',
                '3 天前',
                '1 周前',
                '2 周前',
                '3 周前',
                '1 月前',
                '2 月前',
                '3 月前',
                '6 月前',
                '1 年前',
                '2 年前',
                '3 年前'
            ]"
        ></ui-datepicker>
    </div>
    ---
    #demo
    >desc
    未来的时间也可以设置。
    >tpl
    <div style="width:300px;">
        <ui-datepicker
            form-name="日期"
            :quick-pick="[
                '明天',
                '3 天后',
                '3 周后',
                '3 月后',
                '1 年后'
            ]"
        ></ui-datepicker>
    </div>
    ---
    #demo
    >desc
    也可以通过选中日期相对与当天的天数(正数为未来，负数为过去)来设置。
    >tpl
    <div style="width:300px;">
        <ui-datepicker
            form-name="日期"
            :quick-pick="[
                {name: '今天', pick: 0},
                {name: '昨天', pick: -1},
                {name: '明天', pick: 1}
            ]"
        ></ui-datepicker>
    </div>
    ---
    #demo
    >desc
    也可以通过选中日期的绝对值来设置。
    >tpl
    <div style="width:300px;">
        <ui-datepicker 
            form-name="日期"
            :quick-pick="[
                {name: '劳动节', pick: new Date('2018-5-1')},
                {name: '国庆节', pick: new Date('2018-10-1')}
            ]"
        ></ui-datepicker>
    </div>
    ---
    #demo
    >desc
    配合`is-range`使用时。
    >tpl
    <div style="width:360px;">
        <ui-datepicker
            form-name="日期"
            :quick-pick="[
                '本周',
                '本月',
                '今年',
                '最近 1 周',
                '最近 2 月',
                '最近 3 年',
                '未来 1 周',
                '未来 2 月',
                '未来 3 年',
                {
                    name: '2015-2017年',
                    start: new Date('2015-01-01'),
                    end: new Date('2017-01-01')
                }
            ]"
            is-range
        ></ui-datepicker>
    </div>
    :::

    :::vue
    @name:selectable-range
    ---
    #config
    >conf-desc
    可选日期范围，若不设置则不限。这是一个数组，支持以下格式：<br><br>`[开始日期, 结束日期]`: 指定单个可选范围<br>`[[开始日期1, 结束日期1], [开始日期2, 结束日期2]]`: 指定多个可选范围<br><br>可选日期将大于等于`开始日期`，小于等于`结束日期`。<br><br>`开始日期`和`结束日期`均为日期字符串需要符合`format`配置的日期格式。
    >conf-accept
    日期范围数组
    >conf-type
    Array
    >conf-default
    `undefined`
    ---
    #demo
    >desc
    设置单个可选范围(2018-03-08至2018-03-23)。
    >tpl
    <div style="width:300px;">
        <ui-datepicker form-name="日期" :date="+new Date('2018-03-23')" :selectable-range="['2018-03-08', '2018-03-23']"></ui-datepicker>
    </div>
    ---
    #demo
    >desc
    设置多个可选范围(2018-02-10至2018-02-20, 2018-02-20至2018-03-02, 2018-03-15至2018-03-25, 2018-03-20至2018-03-28, 2018-04-02至2018-04-05)。
    >tpl
    <div style="width:300px;">
        <ui-datepicker
            form-name="日期"
            :date="+new Date('2018-03-23')"
            :selectable-range="[
                ['2018-02-10', '2018-02-20'],
                ['2018-02-23', '2018-03-02'],
                ['2018-03-15', '2018-03-25'],
                ['2018-03-20', '2018-03-28'],
                ['2018-04-02', '2018-04-05']
            ]"
        ></ui-datepicker>
    </div>
    ---
    #demo
    >desc
    在使用`selectable-range`的同时开启`is-range`。
    >tpl
    <div style="width:360px;">
        <ui-datepicker form-name="日期" :date="+new Date('2018-03-23')" :selectable-range="['2018-03-08', '2018-03-23']" is-range></ui-datepicker>
    </div>
    ---
    #demo
    >desc
    如果`v-model`超过`selectable-range`范围。
    >tpl
    <div style="width:360px;">
        <ui-datepicker form-name="日期" :date="+new Date('2018-03-23')" :selectable-range="['2018-03-08', '2018-03-23']" v-model="value" is-range></ui-datepicker>
    </div>
    >script
    {
        data : {
            value : ['2018-03-03', '2018-03-26']
        }
    }
    :::

    :::vue
    @name:is-range
    ---
    #config
    >conf-desc
    选择日期区间，开启后可以选在一个日期段。
    >conf-accept
    `true`<br>`false`
    >conf-type
    Boolean
    >conf-default
    `false`
    ---
    #demo
    >tpl
    <div style="width:360px;">
        <ui-datepicker form-name="日期" :is-range="true"></ui-datepicker>
    </div>
    ---
    #demo
    >desc
    在开启`is-range`的情况下设置`v-model`。
    >tpl
    <div style="width:360px;">
        <ui-datepicker form-name="日期" :date="+new Date('2018-03-23')" :is-range="true" v-model="value"></ui-datepicker>
    </div>
    >script
    {
        data : {
            value : ['2018-03-10', '2018-03-20']
        }
    }
    :::

    :::vue
    @name:range-input-direction
    ---
    #config
    >conf-desc
    区间日期选择时，开始/结束输入框的排列方向<br>仅在开启`is-range`配置时生效。
    >conf-accept
    `'horizontal'` : 横向<br>`'vertical'` : 竖直
    >conf-type
    String
    >conf-default
    `'horizontal'`
    ---
    #demo
    >desc
    竖直排列的选择框。
    >tpl
    <div style="width:280px;">
        <ui-datepicker form-name="日期" :is-range="true" range-input-direction="vertical"></ui-datepicker>
    </div>
    :::

    :::vue
    @name:separator
    ---
    #config
    >conf-desc
    日期区间选择时中间的分隔内容，只有开启`is-range`才有效。
    >conf-accept
    分隔字符串
    >conf-type
    String
    >conf-default
    `'至'`
    ---
    #demo
    >tpl
    <div style="width:360px;">
        <ui-datepicker form-name="日期" :is-range="true" separator="~"></ui-datepicker>
    </div>
    :::

    :::vue
    @name:separator-type
    ---
    #config
    >conf-desc
    日期区间选择时中间的分隔内容的展现类型。
    >conf-accept
    `'block'`：块状<br>`'inline'`：行内
    >conf-type
    String
    >conf-default
    `'block'`
    ---
    #demo
    >desc
    `inline`的分隔(一般配合`align`居中一起使用)。
    >tpl
    <div style="width:300px;">
        <ui-datepicker form-name="日期" :is-range="true" separator="~" separator-type="inline" align="center"></ui-datepicker>
    </div>
    :::

    :::vue
    @name:start-name
    ---
    #config
    >conf-desc
    日期区间选择时`开始日期`表单显示的名称，若设为`false`则显示`inside-name`，只有开启`is-range`才有效。
    >conf-accept
    任意字符串<br>`false`:显示`inside-name`
    >conf-type
    String<br>Boolean
    >conf-default
    `'开始日期'`
    ---
    #demo
    >tpl
    <div style="width:360px;">
        <ui-datepicker form-name="日期" :is-range="true" start-name="发车日期"></ui-datepicker>
    </div>
    ---
    #demo
    >desc
    若设为`false`则显示`form-name`。
    >tpl
    <div style="width:360px;">
        <ui-datepicker form-name="日期" :is-range="true" :start-name="false"></ui-datepicker>
    </div>
    :::

    :::vue
    @name:end-name
    ---
    #config
    >conf-desc
    日期区间选择时`结束日期`表单显示的名称，若设为`false`则显示`inside-name`，只有开启`is-range`才有效。若设置了`hide-name`则不会显示。
    >conf-accept
    任意字符串`false`:显示`inside-name`
    >conf-type
    String<br>Boolean
    >conf-default
    `'结束日期'`
    ---
    #demo
    >tpl
    <div style="width:360px;">
        <ui-datepicker form-name="日期" :is-range="true" end-name="到达日期"></ui-datepicker>
    </div>
    ---
    #demo
    >desc
    若设为`false`则显示`form-name`。
    >tpl
    <div style="width:360px;">
        <ui-datepicker form-name="日期" :is-range="true" :end-name="false"></ui-datepicker>
    </div>
    :::

    :::vue
    @name:done-hidden
    ---
    #config
    >conf-desc
    开启此配置后当完成日期选择后选择器会被隐藏。
    >conf-accept
    `true`<br>`false`
    >conf-type
    Boolean
    >conf-default
    `false`
    ---
    #demo
    >desc
    选择完日期后不隐藏选择器。
    >tpl
    <div style="width:300px;">
        <ui-datepicker form-name="日期" :done-hidden="false"></ui-datepicker>
    </div>
    ---
    #demo
    >desc
    选择完日期后隐藏选择器。
    >tpl
    <div style="width:300px;">
        <ui-datepicker form-name="日期" done-hidden></ui-datepicker>
    </div>
    ---
    #demo
    >desc
    `done-hidden`和`is-range`一起使用。
    >tpl
    <div style="width:360px;">
        <ui-datepicker form-name="日期" done-hidden is-range></ui-datepicker>
    </div>
    ---
    #demo
    >desc
    `done-hidden`和`quick-pick`一起使用。
    >tpl
    <div style="width:300px;">
        <ui-datepicker
            form-name="日期"
            done-hidden
            :quick-pick="[
                '今天',
                '昨天',
                '1 周前',
                '1 月前',
                '1 年前'
            ]"
        ></ui-datepicker>
    </div>
    :::

    [[[方法]]]

    :::preset
    @name:formMethod
    @uikey:datepicker
    @value:'2018-03-23'
    @defaultValue:'2018-03-23'
    :::

    [[[事件]]]

    :::preset
    @name:formEvent
    @uiname:日期选择器
    @uikey:datepicker
    @value:'2018-03-23'
    @wrapStyle:width:300px;
    :::

    :::vue
    @name:input-focus
    ---
    #event
    >event-desc
    当日期选择器的输入框聚焦时触发。
    ---
    #demo
    >tpl
    <div>
        <div style="width:300px;">
            <ui-datepicker ref="demo1" @input-focus="echo"></ui-datepicker>
        </div>
    </div>
    >script
    {
        methods : {
            echo : function () {
                console.log('demo1.console1', 'input-focus event!');
            }
        }
    }
    :::

    :::vue
    @name:input-blur
    ---
    #event
    >event-desc
    当日期选择器的输入框失焦时触发。
    ---
    #demo
    >tpl
    <div>
        <div style="width:300px;">
            <ui-datepicker ref="demo2" @input-blur="echo"></ui-datepicker>
        </div>
    </div>
    >script
    {
        methods : {
            echo : function () {
                console.log('demo2.console1', 'input-blur event!');
            }
        }
    }
    :::

    :::vue
    @name:focus
    ---
    #event
    >event-desc
    当日期选择器聚焦时触发。
    ---
    #demo
    >tpl
    <div>
        <div style="width:300px;">
            <ui-datepicker ref="demo3" @focus="echo"></ui-datepicker>
        </div>
    </div>
    >script
    {
        methods : {
            echo : function () {
                console.log('demo3.console1', 'focus event!');
            }
        }
    }
    :::

    :::vue
    @name:blur
    ---
    #event
    >event-desc
    当日期选择器失焦时触发。
    ---
    #demo
    >tpl
    <div>
        <div style="width:300px;">
            <ui-datepicker ref="demo4" @blur="echo"></ui-datepicker>
        </div>
    </div>
    >script
    {
        methods : {
            echo : function () {
                console.log('demo4.console1', 'blur event!');
            }
        }
    }
    :::

    [[[表单值]]]

    #### 值类型
    
    - `Array` : 数组
    - `String` : 字符串(按`format`配置格式化)

    #### 值过滤

    - 若是范围日期选择(开启`isRange`配置)，则数值是一个字符串，则将数值转换成数组，该字符串作为第一项       
    - 若是单一日期选择(未开启`isRange`配置)，且数值是一个数组，则取第一项
    - 若数值的类型是字符串则检测字符串的日期格式是否符合`format`配置，若不符合尝试转换成符合的格式，若无法转换则转换成`1971-01-01`的符合`format`的日期字符串。
    - 若数值的类型是一个数组，且数组长度为`0`则转换为`undefined`
    - 若数值的类型是一个数组，且数组长度大于`2`，则过滤多余的项目，只保留两项
    - 若数值的类型是一个数组，且数组长度大于`0`且小于`3`，会过滤数组中所有不是字符串类型的项目，然后按照第三条规则，对所有字符串项目进行过滤
    - 若数值的类型是一个数组，且第二项代表的日期时间大于第一项，则对换数组的两项
    
    #### 值格式

    若是单一日期选择，则是日期字符串(符合`format`的格式化规则)
    若是范围日期选择，则是长度为2的数组，数组中第一项是开始日期的日期字符串(符合`format`的格式化规则)，数组中第二项是结束日期的日期字符串(符合`format`的格式化规则)。

    #### 默认值

    `undefined`

    :::preset
    @name:formValue
    @uikey:datepicker
    @uiname:日期选择器
    @valueType:datepicker
    @wrapStyle:width:300px;
    :::

    [[[源码]]]

    <iframe src="/report/coverage/lib/components/datepicker/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>

    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                 from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'datepicker'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
