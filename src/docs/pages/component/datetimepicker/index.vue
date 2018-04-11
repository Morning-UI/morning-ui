<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 日期时间选择器 `<ui-datetimepicker>`
    
    <doc-component-status page="datetimepicker"></doc-component-status>
    
    [[[开始]]]

    定义日期时间选择器。

    #### 使用

    :::democode/html
    <div style="width:300px;">
        <ui-datetimepicker form-name="日期时间"></ui-datetimepicker>
    </div>
    :::

    #### 自定义日期格式

    日期时间选择器允许用户自定日期格式，使用中文时间：
        
    :::democode/html
    <div style="width:300px;">
        <ui-datetimepicker form-name="日期时间" :date="+new Date('2018-03-23')" format="YYYY年MM月DD日 HH点mm分ss秒" default-value="2018年03月23日 18点10分18秒"></ui-datetimepicker>
    </div>
    :::

    更多自定义格式见`format`配置。

    #### 范围日期选择
    
    TODO

    [[[形态]]]

    :::preset/html
    formStatus
    ---
    uikey:datetimepicker
    statusDefaultValue:'2018-03-23 18:10:18'
    statusMoreAttr::date="+new Date('2018-03-23 18:10:18')"
    :::

    [[[配置]]]

    :::preset/html
    formConfigTable
    ---
    |[date](#date)|日历所在的日期，日历将会切换到`date`所在的月份|时间戳|Number|`+new Date()`|
    |[format](#format)|格式化展示的日期|日期格式化字符串(支持日期占位符见下方的演示)|String|`'YYYY-MM-DD'`|
    |[align](#align)|日期对齐方式|`'left'` : 左对齐<br>`'center'` : 居中对齐<br>`'right'` : 右对齐|String|`'left'`|
    |[date-selectable-range](#date-selectable-range)|可选日期时间范围，是一个连续的时间段，可以限制到的时分秒，若不设置则不限。这是一个数组，支持以下格式：<br><br>`[开始日期, 结束日期]`: 指定单个可选范围<br>`[[开始日期1, 结束日期1], [开始日期2, 结束日期2]]`: 指定多个可选范围<br><br>可选日期将大于等于`开始日期`，小于等于`结束日期`。<br><br>`开始日期`和`结束日期`均为日期字符串需要符合`format`配置的日期格式。|日期范围数组|Array|`undefined`|
    |[time-selectable-range](#time-selectable-range)|可选时间范围，若不设置则不限。这是一个数组，支持以下格式：<br><br>`[开始时间, 结束时间]`: 指定单个可选范围<br><br>可选时间将大于等于`开始时间`，小于等于`结束时间`。<br><br>`开始时间`和`结束时间`均为时间字符串需要符合`format`配置的时间格式。<br><br>此配置用于限制每天可选的时间范围(仅支持一个范围)，若需要限制一个时间段请使用`date-selectable-range`配置。<br><br>如同时配置了`date-selectable-range`则取可选范围的交集。|时间范围数组|Array|`undefined`|
    |[is-range](#is-range)|选择日期区间，开启后可以选在一个日期段|`true`<br>`false`|Boolean|`false`|
    |[separator](#separator)|日期区间选择时中间的分隔内容，只有开启`is-range`才有效|分隔字符串|String|`'至'`|
    |[start-name](#start-name)|日期区间选择时`开始日期`表单显示的名称，若设为`false`则显示`form-name`，只有开启`is-range`才有效|任意字符串<br>`false`:显示`form-name`|String<br>Boolean|`'开始日期'`|
    |[end-name](#end-name)|日期区间选择时`结束日期`表单显示的名称，若设为`false`则显示`form-name`，只有开启`is-range`才有效。若设置了`hide-name`则不会显示|任意字符串`false`:显示`form-name`|String<br>Boolean|`'结束日期'`|
    :::

    :::preset/html
    formConfigDemo
    ---
    uikey:datetimepicker
    configDefaultValue:'2018-03-23 18:10:18'
    configMoreAttr::date="+new Date('2018-03-23 18:10:18')"
    :::

    #### date

    :::democode/html
    <div style="width:300px">
        <ui-datetimepicker :date="+new Date('2018-03-23')"></ui-datetimepicker>
    </div>
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
    |上午/下午|A|AM, PM|
    ||a|am, pm|
    ||aa|a.m., p.m.|
    |小时|H|0, 1, ... 23|
    ||HH|00, 01, ... 23|
    ||h|0, 1, ... 12|
    ||hh|00, 01, ... 12|
    |分钟|mm|00, 01, ... 59|
    ||m|0, 1, ... 59|
    |秒|ss|00, 01, ... 59|
    ||s|0, 1, ... 59|

    采用`|`分隔日期：

    :::democode/html
    <div style="width:300px;">
        <ui-datetimepicker form-name="日期时间" :date="+new Date('2018-03-23')" format="YYYY | MM | DD | HH | mm | ss" default-value="2018 | 03 | 23 | 18 | 10 | 08"></ui-datetimepicker>
    </div>
    :::

    同时显示多种日期格式(显示多个日期时，最后一个优先级最高)：

    :::democode/html
    <div style="width:400px;">
        <ui-datetimepicker form-name="日期时间" :date="+new Date('2018-03-23')" format="YYYY-MM-DD HH:mm:ss | HH:m:s, MMM DD, YYYY" default-value="2018-03-23 18:10:08 | 18:10:8, Mar 23, 2018"></ui-datetimepicker>
    </div>
    :::

    #### align

    居中对齐：

    :::democode/html
    <div style="width:300px;">
        <ui-datetimepicker form-name="日期时间" :date="+new Date('2018-03-23')" default-value="2018-03-23 18:10:18" align="center"></ui-datetimepicker>
    </div>
    :::

    右对齐：

    :::democode/html
    <div style="width:300px;">
        <ui-datetimepicker form-name="日期时间" :date="+new Date('2018-03-23')" default-value="2018-03-23 18:10:18" align="right"></ui-datetimepicker>
    </div>
    :::
    
    #### date-selectable-range

    设置单个可选范围(2018-03-08至2018-03-23)：

    :::democode/html
    <div style="width:300px;">
        <ui-datetimepicker form-name="日期时间" :date="+new Date('2018-03-23')" :date-selectable-range="['2018-03-08 00:00:00', '2018-03-23 00:00:00']"></ui-datetimepicker>
    </div>
    :::

    设置具体时间(2018-03-08 12:30:00至2018-03-23 20:59:59)：

    :::democode/html
    <div style="width:300px;">
        <ui-datetimepicker form-name="日期时间" :date="+new Date('2018-03-23')" :date-selectable-range="['2018-03-08 12:30:00', '2018-03-23 20:59:59']"></ui-datetimepicker>
    </div>
    :::

    设置多个可选范围(2018-02-10至2018-02-20, 2018-02-20至2018-03-02, 2018-03-15至2018-03-25, 2018-03-20至2018-03-28, 2018-04-02至2018-04-05)：

    :::democode/html
    <div style="width:300px;">
        <ui-datetimepicker form-name="日期时间" :date="+new Date('2018-03-23')" :date-selectable-range="[['2018-02-10 00:00:00', '2018-02-20 00:00:00'], ['2018-02-23 00:00:00', '2018-03-02 00:00:00'], ['2018-03-15 12:30:00', '2018-03-25 20:00:00'], ['2018-03-20 00:00:00', '2018-03-28 18:00:00'], ['2018-04-02 00:00:00', '2018-04-05 00:00:00']]"></ui-datetimepicker>
    </div>
    :::
    
    #### time-selectable-range

    设置每天可选时间为(8:00-18:00)：

    :::democode/html
    <div style="width:300px;">
        <ui-datetimepicker form-name="日期时间" :date="+new Date('2018-03-23')" :time-selectable-range="['08:00:00', '18:00:00']"></ui-datetimepicker>
    </div>
    :::

    配合`date-selectable-range`使用时可选时间需要符合两个条件的限制：

    :::democode/html
    <div style="width:300px;">
        <ui-datetimepicker form-name="日期时间" :date="+new Date('2018-03-23')" :date-selectable-range="['2018-03-08 12:30:00', '2018-03-23 20:00:00']" :time-selectable-range="['08:00:00', '18:00:00']"></ui-datetimepicker>
    </div>
    :::

    #### is-range

    :::democode/html
    <div style="width:460px;">
        <ui-datetimepicker form-name="日期时间" :is-range="true"></ui-datetimepicker>
    </div>
    :::

    在开启`is-range`的情况下设置`default-value`:

    :::democode/html
    <div style="width:460px;">
        <ui-datetimepicker form-name="日期时间" :date="+new Date('2018-03-23')" :is-range="true" :default-value="['2018-03-10 08:00:00', '2018-03-20 21:30:30']"></ui-datetimepicker>
    </div>
    :::

    [[[源码]]]

    <iframe src="/report/coverage/lib/components/datetimepicker/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>

    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                 from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'datetimepicker'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
