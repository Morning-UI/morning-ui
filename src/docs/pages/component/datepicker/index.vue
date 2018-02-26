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

    #### 使用

    :::democode/html
    <div style="width:300px;">
        <morning-datepicker form-name="日期"></morning-datepicker>
    </div>
    :::

    #### 自定义日期格式

    日期选择器允许用户自定日期格式，使用中文时间：
        
    :::democode/html
    <div style="width:300px;">
        <ui-datepicker form-name="日期" :date="+new Date('2018-03-23')" format="YYYY年MM月DD日" default-value="2018年03月23日"></ui-datepicker>
    </div>
    :::

    使用简短的年份：

    :::democode/html
    <div style="width:300px;">
        <ui-datepicker form-name="日期" :date="+new Date('2018-03-23')" format="YY年MM月DD日" default-value="18年03月23日"></ui-datepicker>
    </div>
    :::

    更多自定义格式见`format`配置。

    [[[形态]]]

    :::preset/html
    formStatus
    ---
    uikey:datepicker
    statusDefaultValue:'2018-03-23'
    statusMoreAttr::date="+new Date('2018-03-23')"
    :::

    [[[配置]]]

    :::preset/html
    formConfigTable
    ---
    |[date](#date)|日历所在的日期，日历将会切换到`date`所在的月份|时间戳|Number|`+new Date()`|
    |[format](#format)|格式化展示的日期|日期格式化字符串(支持日期占位符见下方的演示)|String|`'YYYY-MM-DD'`|
    |[align](#align)|日期对齐方式|`'left'` : 左对齐<br>`'center'` : 居中对齐<br>`'right'` : 右对齐|String|`'left'`|
    |[selectable-range](#selectable-range)|可选日期范围，若不设置则不限。这是一个数组，支持以下格式：<br><br>`[开始日期, 结束日期]`: 指定单个可选范围<br>`[[开始日期1, 结束日期1], [开始日期2, 结束日期2]]`: 指定多个可选范围<br><br>可选日期将大于等于`开始日期`，小于等于`结束日期`。<br><br>`开始日期`和`结束日期`均为日期字符串需要符合`format`配置的日期格式。|日期范围数组|Array|`undefined`|
    |[is-range](#is-range)|选择日期区间，开启后可以选在一个日期段|`true`<br>`false`|Boolean|`false`|
    |[separator](#separator)|日期区间选择时中间的分隔内容，只有开启`is-range`才有效|分隔字符串|String|`'至'`|
    |[start-name](#start-name)|日期区间选择时`开始日期`表单显示的名称，若设为`false`则显示`form-name`，只有开启`is-range`才有效|任意字符串<br>`false`:显示`form-name`|String<br>Boolean|`'开始日期'`|
    |[end-name](#end-name)|日期区间选择时`结束日期`表单显示的名称，若设为`false`则显示`form-name`，只有开启`is-range`才有效。若设置了`hide-name`则不会显示|任意字符串`false`:显示`form-name`|String<br>Boolean|`'结束日期'`|
    :::

    :::preset/html
    formConfigDemo
    ---
    uikey:datepicker
    configDefaultValue:'2018-03-23'
    configMoreAttr::date="+new Date('2018-03-23')"
    :::

    #### format
        
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

    采用`|`分隔日期：

    :::democode/html
    <div style="width:300px;">
        <ui-datepicker form-name="日期" :date="+new Date('2018-03-23')" format="YYYY | MM | DD" default-value="2018 | 03 | 23"></ui-datepicker>
    </div>
    :::

    同时显示多种日期格式(显示多个日期时，最后一个优先级最高)：

    :::democode/html
    <div style="width:400px;">
        <ui-datepicker form-name="日期" :date="+new Date('2018-03-23')" format="YYYY-MM-DD | MMM DD, YYYY" default-value="2018-03-23 | Mar 23, 2018"></ui-datepicker>
    </div>
    :::

    #### align

    居中对齐：

    :::democode/html
    <div style="width:300px;">
        <ui-datepicker form-name="日期" :date="+new Date('2018-03-23')" default-value="2018-03-23" align="center"></ui-datepicker>
    </div>
    :::

    右对齐：

    :::democode/html
    <div style="width:300px;">
        <ui-datepicker form-name="日期" :date="+new Date('2018-03-23')" default-value="2018-03-23" align="right"></ui-datepicker>
    </div>
    :::

    #### selectable-range

    设置单个可选范围(2018-03-08至2018-03-23)：

    :::democode/html
    <div style="width:300px;">
        <ui-datepicker form-name="日期" :date="+new Date('2018-03-23')" :selectable-range="['2018-03-08', '2018-03-23']"></ui-datepicker>
    </div>
    :::

    设置多个可选范围(2018-02-10至2018-02-20, 2018-02-20至2018-03-02, 2018-03-15至2018-03-25, 2018-03-20至2018-03-28, 2018-04-02至2018-04-05)：

    :::democode/html
    <div style="width:300px;">
        <ui-datepicker form-name="日期" :date="+new Date('2018-03-23')" :selectable-range="[['2018-02-10', '2018-02-20'], ['2018-02-23', '2018-03-02'], ['2018-03-15', '2018-03-25'], ['2018-03-20', '2018-03-28'], ['2018-04-02', '2018-04-05']]"></ui-datepicker>
    </div>
    :::

    #### is-range

    :::democode/html
    <div style="width:360px;">
        <ui-datepicker form-name="日期" :is-range="true"></ui-datepicker>
    </div>
    :::

    在开启`is-range`的情况下设置`default-value`:

    :::democode/html
    <div style="width:300px;">
        <ui-datepicker form-name="日期" :date="+new Date('2018-03-23')" :is-range="true" :default-value="['2018-03-10', '2018-03-20']"></ui-datepicker>
    </div>
    :::

    #### separator

    :::democode/html
    <div style="width:300px;">
        <ui-datepicker form-name="日期" :is-range="true" separator="~"></ui-datepicker>
    </div>
    :::

    #### start-name

    :::democode/html
    <div style="width:300px;">
        <ui-datepicker form-name="日期" :is-range="true" start-name="发车日期"></ui-datepicker>
    </div>
    :::

    若设为`false`则显示`form-name`：

    :::democode/html
    <div style="width:300px;">
        <ui-datepicker form-name="日期" :is-range="true" :start-name="false"></ui-datepicker>
    </div>
    :::

    #### end-name

    :::democode/html
    <div style="width:300px;">
        <ui-datepicker form-name="日期" :is-range="true" end-name="到达日期"></ui-datepicker>
    </div>
    :::

    若设为`false`则显示`form-name`：

    :::democode/html
    <div style="width:300px;">
        <ui-datepicker form-name="日期" :is-range="true" :end-name="false"></ui-datepicker>
    </div>
    :::

    [[[方法]]]

    :::preset/html
    formMethod
    ---
    uikey:datepicker
    methodValue:'2018-03-23'
    methodDefaultValue:'2018-03-23'
    :::

    [[[事件]]]

    :::preset/html
    formEvent
    ---
    uikey:datepicker
    eventValue:'2018-03-23'
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
    
    #### 值格式

    若是单一日期选择，则是日期字符串(符合`format`的格式化规则)
    若是范围日期选择，则是长度为2的数组，数组中第一项是开始日期的日期字符串(符合`format`的格式化规则)，数组中第二项是结束日期的日期字符串(符合`format`的格式化规则)。

    #### 默认值

    `undefined`

    #### 输入/输出示例

    :::repeat/html
    formValueType:datepicker
    ---
    <div>
        <p>{$valueType}类型</p>
        <div style="width:300px;">
            <ui-datepicker ref="demoType{$valueType}"></ui-datepicker>
        </div>
        <br>
        <ui-link js="window.morning.findVM('demoType{$valueType}').set({$&valueContent})">设置{$valueType}类型</ui-link>
        <ui-link js="alert(window.morning.findVM('demoType{$valueType}').getJson())">获取表单JSON值</ui-link>
    </div>
    <br>
    <br>
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
