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

    注意：日期选择器的`set()` / `get()`方法设置/获取的数值为格式化后的日期字符串，如需获取可计算的日期对象，请使用`getDate()`方法。

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
        <ui-datepicker form-name="日期" :date="+new Date('2018-03-23')" format="yyyy年MM月dd日" v-model="value"></ui-datepicker>
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
        <ui-datepicker form-name="日期" :date="+new Date('2018-03-23')" format="yy年MM月dd日" v-model="value"></ui-datepicker>
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

    :::vue
    @name:使用相对日期
    ---
    #demo
    >desc
    日期选择器也支持手动输入相对日期(需要开启`relative`配置)。
    <br><br>
    由于是相对日期，当通过`getDate()`方法获取日期时，结果会随着时间变化。
    <br><br>
    相对日期支持以某一日期为起点的任意距离的日期，详见[配置/relative](#relative)。
    >tpl
    <div style="width:300px;">
        <ui-datepicker form-name="相对日期" relative v-model="value" ref="demo5"></ui-datepicker>
        <ui-link js="console.log(morning.findVM('demo5').getDate());">获取一天前的时间对象</ui-link>
    </div>
    >script
    {
        data : {
            value : "now - 1D"
        }
    }
    :::

    :::vue
    @name:定义底部额外内容
    ---
    #demo
    >desc
    可以通过名为`footer`的`slot`来定义日期选择器底部的内容。
    >tpl
    <div style="width:300px;">
        <ui-datepicker
            form-name="日期"
            ref="demo12"
            :quick-pick="[
                '今天',
                '昨天',
                '2 天前',
                '3 天前',
                '1 周前',
                '1 月前',
                '1 年前',
            ]"
        >
            <template #footer>
                <div style="text-align:right;">
                    <ui-btn size="xs" class="plain" color="minor" style="vertical-align:top;" @emit="$refs['demo12'].set(undefined)">清空</ui-btn>
                    <ui-btn size="xs" @emit="$refs['demo12'].togglePicker(false)">确定</ui-btn>
                </div>
            </template>
        </ui-datepicker>
    </dic>
    ---
    #demo
    >desc
    配合`is-range`一起使用。
    >tpl
    <div style="width:420px;">
        <ui-datepicker
            form-name="日期"
            ref="demo13"
            is-range
            :quick-pick="[
                '本周',
                '本月',
                '今年',
            ]"
        >
            <template #footer>
                <div style="text-align:right;">
                    <ui-btn size="xs" class="plain" color="minor" style="vertical-align:top;" @emit="$refs['demo13'].set(undefined)">清空</ui-btn>
                    <ui-btn size="xs" @emit="$refs['demo13'].togglePicker(false)">确定</ui-btn>
                </div>
            </template>
        </ui-datepicker>
    </dic>
    :::
    
    [[[形态]]]
    
    :::preset
    @name:formStatusWithSize
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
    `'请选择'`
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
    |年份|yy|00, 01, ..., 99|
    ||yyyy|1900, 1901, ..., 2099|
    |季度|Q|1, 2, 3, 4|
    ||Qo|1st, 2nd, 3rd, 4th|
    ||QQ|01, 02, 03, 04|
    ||QQQ|Q1, Q2, Q3, Q4|
    |月份|M|1, 2, ..., 12|
    ||Mo|1st, 2nd, ..., 12th|
    ||MM|01, 02, ..., 12|
    ||MMM|Jan, Feb, ..., Dec|
    ||MMMM|January, February, ..., December|
    |一月中第几天|d|1, 2, ..., 31|
    ||do|1st, 2nd, ..., 31st|
    ||dd|01, 02, ..., 31|
    |一周中第几天|i|1, 2, 3, ..., 7|
    ||io|1st, 2nd, ..., 7th|
    ||iii|Mon, Tue, Wed, ..., Su|
    ||iiii|Monday, Tuesday, ..., Sunday|
    ||iiiiii|Mo, Tu, We, Th, Fr, Su, Sa|
    |一年中第几天|D|1, 2, ..., 366|
    ||DDD|001, 002, ..., 366|
    ||DDDo|1st, 2nd, ..., 366th|
    >conf-accept
    日期格式化字符串(支持日期占位符见下方的演示)
    >conf-type
    String
    >conf-default
    `'yyyy-MM-dd'`
    ---
    #demo
    >desc
    采用`|`分隔日期。
    >tpl
    <div style="width:300px;">
        <ui-datepicker form-name="日期" :date="+new Date('2018-03-23')" format="yyyy | MM | dd" v-model="value"></ui-datepicker>
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
        <ui-datepicker form-name="日期" :date="+new Date('2018-03-23')" format="yyyy-MM-dd | MMM dd, yyyy" v-model="value"></ui-datepicker>
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
    显示快速选择项，这个配置是一个数组，数组中的每一项都是一个快速选择项目。
    <br><br>
    数组项支持两种类型：
    <br><br>
    __关键词__ ：支持字符串格式的快速选择关键词。
    <br><br>
    未开启`is-range`情况下包括：`今天`、`昨天`、`明天`、`n 天前`、`n 周前`、`n 月前`、`n 年前`、`n 天后`、`n 周后`、`n 月后`、`n 年后`(需要注意`n`后面有空格)，例如：`2 天前`、`3 周前`。
    <br><br>
    开启`is-range`情况下包括：`本周`、`本月`、`今年`、`最近 n 天`、`最近 n 周`、`最近 n 月`、`最近 n 年`、`未来 n 天`、`未来 n 周`、`未来 n 月`、`未来 n 年`(需要注意`n`前后有空格)，例如：`未来 2 周`、`最近 3 月`。
    <br><br>
    __时间设置__：是一个对象。
    <br><br>
    未开启`is-range`情况下包含`name`和`pick`两个属性。
    <br>
    `name`是快速选择项展现的名称。
    <br>
    `pick`支持`数字`、`日期对象`、`相对日期时间表达式`。
    <br>
    若`pick`是`数字`则代表相对天数，会选中当前日期和`pick`相加后的日期，所以`pick`是负数代表过去的日期，正数则代表未来的日期。
    <br>
    若`pick`是`日期对象`则会选中`pick`所表示的日期。
    <br>
    若`pick`是`相对日期时间表达式`，必须开启`relative`配置，详见：[配置/relative](#relative)。
    <br><br>
    开启`is-range`情况下包含`name`、`start`、`end`三个属性。<br>`name`是快速选择项展现的名称。<br>`start`和`end`是`日期对象`分别表示选择日期段的开始和结束。
    <br><br>
    你可以混合使用多种类型的快速选择项(详见[下面的示例](#quick-pick))。
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
                {name: '劳动节', pick: new Date('2018-05-01')},
                {name: '国庆节', pick: new Date('2018-10-01')}
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
    ---
    #demo
    >desc
    开启`relative`配置，并设置`相对日期时间表达式`。相对日期时间详见：[配置/relative](#relative)
    >tpl
    <div style="width:300px;">
        <ui-datepicker
            form-name="日期时间"
            relative
            :quick-pick="[
                {
                    name: '季度末',
                    pick : 'endOfQuarter'
                },
                {
                    name : '年度初',
                    pick : 'startOfYear'
                }
            ]"
        ></ui-datepicker>
    </div>
    ---
    #demo
    >desc
    开启`relative`和`is-range`配置，配合`相对日期时间表达式`。相对日期时间详见：[配置/relative](#relative)
    >tpl
    <div style="width:460px;">
        <ui-datepicker
            form-name="日期时间"
            is-range
            relative
            :quick-pick="[
                {
                    name : '本周截止目前',
                    start : 'startOfWeek',
                    end : 'now'
                },
                {
                    name: '本季度',
                    start : 'startOfQuarter',
                    end : 'endOfQuarter'
                }
            ]"
        ></ui-datepicker>
    </div>
    :::

    :::vue
    @name:selectable-range
    ---
    #config
    >conf-desc
    可选日期范围，若不设置则不限。这是一个数组，支持以下格式：<br><br>`[开始日期, 结束日期]`: 指定单个可选范围<br>`[[开始日期1, 结束日期1], [开始日期2, 结束日期2]]`: 指定多个可选范围<br><br>可选日期将大于等于`开始日期`，小于等于`结束日期`。<br><br>`开始日期`和`结束日期`均为日期字符串需要符合`format`配置的日期格式。
    <br><br>
    此配置无法和`relative`一起使用。
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
    <br>
    注意：开启此配置后弹出框超出视窗，位置自动调整会被禁用。
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
    任意字符串<br>`false`:显示`inside-name`
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

    :::vue
    @name:relative
    ---
    #config
    >conf-desc
    相对日期，开启后支持用户输入指定格式的相对日期，相对日期为某日期开始距离一定时间的日期。
    <br><br>
    开启后可以在日期选择器中输入`相对日期表达式`，格式如下：
    <br>
    `[开始日期] [操作符] [日期值][日期单位]`
    <br><br>
    - 开始日期包括：
        - `now` : 当前时间
        - `startOfWeex` : 本周的第一天
        - `endOfWeex` : 本周的最后一天
        - `startOfMonth` : 本月的第一天
        - `endOfMonth` : 本月的最后一天
        - `startOfQuarter` : 本季度的第一天
        - `endOfQuarter` : 本季度的最后一天
        - `startOfYear` : 本年的第一天
        - `endOfYear` : 本年的最后一天
    - 操作符包括：
        - `+` : 往后的日期
        - `-` : 往前的日期
    - 日期值 ： 一个数字，根据单位不同，代表不同的时间长度
    - 日期单位包括（大小写敏感）：
        - `D` : 天
        - `W` : 周
        - `M` : 月
        - `Q` : 季度
        - `Y` : 年

    `相对日期表达式`可以这么写：
    - `startOfMonth` : 本月的第一天
    - `now - 1W` : 一周前
    - `startOfQuarter + 1Q` : 下个季度的第一天

    通过`getDate()`获取的日期对象，将依据`相对日期表达式`进行计算，不同的时间获取到的值将不同。
    <br><br>
    注意：使用此配置后`selectable-range`配置将失效。
    >conf-accept
    `true`<br>`false`
    >conf-type
    Boolean
    >conf-default
    `false`
    ---
    #demo
    >tpl
    <div style="width:300px;">
        <ui-datepicker form-name="相对日期" relative v-model="value" ref="demo6"></ui-datepicker>
        <ui-link js="console.log(morning.findVM('demo6').getDate());">获取一天前的时间对象</ui-link>
    </div>
    >script
    {
        data : {
            value : "now - 1D"
        }
    }
    ---
    #demo
    >desc
    配合`is-range`一起使用。
    >tpl
    <div style="width:300px;">
        <ui-datepicker form-name="相对日期" relative is-range v-model="value" ref="demo7"></ui-datepicker>
        <ui-link js="console.log(morning.findVM('demo7').getDate());">获取5天前至现在的时间对象</ui-link>
    </div>
    >script
    {
        data : {
            value : ["now - 5D", "now"]
        }
    }
    ---
    #demo
    >desc
    设置上一个季度开始和结尾。
    >tpl
    <div style="width:420px;">
        <ui-datepicker form-name="相对日期" relative is-range v-model="value" ref="demo8"></ui-datepicker>
        <ui-link js="console.log(morning.findVM('demo8').getDate());">获取上一个季度开始和结尾的时间对象</ui-link>
    </div>
    >script
    {
        data : {
            value : ["startOfQuarter - 1Q", "endOfQuarter - 1Q"]
        }
    }
    ---
    #demo
    >desc
    和`selectable-range`一起使用，`selectable-range`将失效。
    <br><br>
    因为相对日期无法被限制范围。
    >tpl
    <div style="width:300px;">
        <ui-datepicker form-name="相对日期" relative :date="+new Date('2018-03-23')" :selectable-range="['2018-03-08', '2018-03-23']"></ui-datepicker>
    </div>
    :::

    :::vue
    @name:month-pick
    ---
    #config
    >conf-desc
    日期选择器开启月份选择模式。
    <br>
    可以配合`format="yyyy-MM"`配置来显示月份。
    >conf-accept
    `true`<br>`false`
    >conf-type
    Boolean
    >conf-default
    `false`
    ---
    #demo
    >tpl
    <div style="width:300px;">
        <ui-datepicker form-name="日期" :month-pick="true" format="yyyy-MM"></ui-datepicker>
    </div>
    ---
    #demo
    >desc
    配合`is-range`一起使用。
    >tpl
    <div style="width:300px;">
        <ui-datepicker form-name="日期" is-range :month-pick="true" format="yyyy-MM"></ui-datepicker>
    </div>
    :::

    :::vue
    @name:hidden-icon
    ---
    #config
    >conf-desc
    隐藏日期选择器的图标。
    >conf-accept
    `true`<br>`false`
    >conf-type
    Boolean
    >conf-default
    `false`
    ---
    #demo
    >tpl
    <div style="width:300px;">
        <ui-datepicker form-name="日期" :hidden-icon="true" format="yyyy-MM"></ui-datepicker>
    </div>
    ---
    #demo
    >desc
    配合`is-range`一起使用。
    >tpl
    <div style="width:300px;">
        <ui-datepicker form-name="日期" is-range :hidden-icon="true" format="yyyy-MM"></ui-datepicker>
    </div>
    :::

    [[[方法]]]

    :::preset
    @name:formMethod
    @uikey:datepicker
    @value:'2018-03-23'
    @defaultValue:'2018-03-23'
    :::

    :::vue
    @name:getDate()
    ---
    #method
    >method-desc
    获取当前选中日期的日期对象。
    <br><br>
    获取的日期对象，仅日期部分有效，时间部分为默认值。
    >method-return
    日期对象。
    ---
    #demo
    >tpl
    <div style="width:300px;">
        <ui-datepicker ref="demo9" form-name="日期"></ui-datepicker>
        <br><br>
        <ui-link js="console.log(morning.findVM('demo9').getDate());">获取当前选中的日期对象</ui-link>
    </div>
    :::

    :::vue
    @name:togglePicker(show)
    ---
    #method
    >method-desc
    切换日期选择弹出框显示状态。
    >method-args
    |show|NO|切换到显示或隐藏状态。`true`<br>`false`|`Boolean`|`undefined`|
    >method-return
    当前组件VM实例。
    ---
    #demo
    >tpl
    <div style="width:300px;">
        <ui-datepicker ref="demo10" form-name="日期"></ui-datepicker>
        <br><br> 
        <ui-link js="morning.findVM('demo10').togglePicker(true);">显示弹出框</ui-link>
        <ui-link js="morning.findVM('demo10').togglePicker(false);">隐藏弹出框</ui-link>
    </div>
    ---
    #demo
    >desc
    配合`is-range`配置一起使用。
    >tpl
    <div style="width:300px;">
        <ui-datepicker ref="demo11" form-name="日期" is-range></ui-datepicker>
        <br><br> 
        <ui-link js="morning.findVM('demo11').togglePicker(true);">显示弹出框</ui-link>
        <ui-link js="morning.findVM('demo11').togglePicker(false);">隐藏弹出框</ui-link>
    </div>
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
            <ui-datepicker @focus="echo"></ui-datepicker>
        </div>
        <br><br>
        <div style="width:420px;">
            <ui-datepicker is-range @focus="echo"></ui-datepicker>
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
            <ui-datepicker @blur="echo"></ui-datepicker>
        </div>
        <br><br>
        <div style="width:420px;">
            <ui-datepicker is-range @blur="echo"></ui-datepicker>
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

    :::vue
    @name:pick-done
    ---
    #event
    >event-desc
    当日期选择器完成日期选择时触发。
    <br>
    在关闭`is-range`配置时，`pick-done`等效于`value-change`，但在开启`is-range`时，`pick-done`的触发需要选择完一段完整的日期范围。
    ---
    #demo
    >tpl
    <div>
        <div style="width:300px;">
            <ui-datepicker @pick-done="echo"></ui-datepicker>
        </div>
        <br><br>
        <div style="width:420px;">
            <ui-datepicker is-range @pick-done="echo"></ui-datepicker>
        </div>
    </div>
    >script
    {
        methods : {
            echo : function () {
                console.log('demo5.console1', 'pick-done event!');
            }
        }
    }
    :::

    [[[表单值]]]

    #### 值类型
    
    - `Array` : 数组
    - `String` : 字符串(按`format`配置格式化)或`相对日期表达式`

    #### 值过滤

    - 若是范围日期选择(开启`isRange`配置)，则数值是一个字符串，则将数值转换成数组，该字符串作为第一项       
    - 若是单一日期选择(未开启`isRange`配置)，且数值是一个数组，则取第一项
    - 若开启了`relative`配置且格式符合`相对日期表达式`则不做任何处理，否则进行下列判断
    - 若数值的类型是字符串则检测字符串的日期格式是否符合`format`配置，若不符合尝试转换成符合的格式，若无法转换则转换成`1971-01-01`的符合`format`的日期字符串。
    - 若数值的类型是一个数组，且数组长度为`0`则转换为`undefined`
    - 若数值的类型是一个数组，且数组长度大于`2`，则过滤多余的项目，只保留两项
    - 若数值的类型是一个数组，且数组长度大于`0`且小于`3`，会过滤数组中所有不是字符串类型的项目，然后按照第3/4条规则，对所有字符串项目进行过滤
    - 若数值的类型是一个数组，且第二项代表的日期时间大于第一项，则对换数组的两项
    
    #### 值格式

    若是单一日期选择，则是日期字符串(符合`format`的格式化规则)或`相对日期表达式`
    若是范围日期选择，则是长度为2的数组，数组中第一项是开始日期的日期字符串(符合`format`的格式化规则)或`相对日期表达式`，数组中第二项是结束日期的日期字符串(符合`format`的格式化规则)或`相对日期表达式`。

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
