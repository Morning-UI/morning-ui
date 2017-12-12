<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 时间选择器 `<ui-timepicker>`
    
    <doc-component-status page="timepicker"></doc-component-status>
    
    [[[开始]]]

    定义时间选择器。

    #### 使用

    :::democode/html
    <div style="width:300px;">
        <ui-timepicker form-name="时间"></ui-timepicker>
    </div>
    :::

    #### 自定义时间格式

    时间选择器允许用户自定时间格式，使用中文时间：

    :::democode/html
    <div style="width:300px;">
        <ui-timepicker form-name="时间" format="HH时mm分ss秒" :default-value="new Date()"></ui-timepicker>
    </div>
    :::
    
    使用12小时制：

    :::democode/html
    <div style="width:300px;">
        <ui-timepicker form-name="时间" format="h:m:s aa" :default-value="new Date()"></ui-timepicker>
    </div>
    :::

    更多自定义格式见`format`配置。

    #### 高亮当前修改时间单位

    当用户在选择器上切换时，对应修改的时间单位区域会高亮：

    :::democode/html
    <div style="width:300px;">
        <ui-timepicker form-name="时间" format="h:m:s" :default-value="new Date()"></ui-timepicker>
    </div>
    :::

    当同时有多个时间单位匹配时，只会高亮第一个匹配到的：

    :::democode/html
    <div style="width:300px;">
        <ui-timepicker form-name="时间" format="h:m:s aa | HH:mm:ss" :default-value="new Date()"></ui-timepicker>
    </div>
    :::

    [[[形态]]]

    :::preset/html
    formStatus
    ---
    uikey:timepicker
    statusDefaultValue:new Date()
    :::
    
    [[[配置]]]

    :::preset/html
    formConfigTable
    ---
    |[format](#format)|格式化展示的时间|时间格式化字符串(支持时间占位符见下方的演示)|String|`'HH:mm:ss'`|
    |[clearable](#clearable)|显示表单清空按钮|`true`<br>`false`|`false`|
    |[align](#align)|时间对齐方式|`'left'` : 左对齐<br>`'center'` : 居中对齐<br>`'right'` : 右对齐|String|`'left'`|
    |[selectable-range](#selectable-range)|可选时间范围，若不设置则不限。这是一个数组，支持以下格式：<br><br>`[开始时间, 结束时间]`: 指定单个可选范围<br>`[[开始时间1, 结束时间1], [开始时间2, 结束时间2]]`: 指定多个可选范围<br><br>可选时间将大于等于`开始时间`，小于等于`结束时间`。其中的`开始时间`和`结束时间`都是`Date`对象|时间范围数组|Array|`undefined`|
    |[is-range](#is-range)|选择时间区间，开启后可以选在一个时间段|`true`<br>`false`|Boolean|`false`|
    |[separator](#separator)|时间区间选择时中间的分隔内容，只有开启`is-range`才有效|分隔字符串|String|`'至'`|
    |[start-name](#start-name)|时间区间选择时`开始时间`表单显示的名称，若设为`false`则显示`form-name`，只有开启`is-range`才有效|任意字符串<br>`false`:显示`form-name`|String<br>Boolean|`'开始时间'`|
    |[end-name](#end-name)|时间区间选择时`结束时间`表单显示的名称，若设为`false`则显示`form-name`，只有开启`is-range`才有效。若设置了`hide-name`则不会显示|任意字符串`false`:显示`form-name`|String<br>Boolean|`'结束时间'`|
    |[is-list](#is-list)|选择时间列表，开启后可指定可选的时间点。<br><br>通过`list`配置可以指定可选时间点的列表<br>通过`list-start`、`list-end`、`list-step`，可以设置开始/结束时间和步进来生成可选时间点的列表|`true`<br>`false`|Boolean|`false`|
    |[list](#list)|||``|
    |[list-start](#list-start)|||``|
    |[list-end](#list-end)|||``|
    |[list-step](#list-step)|||``|
    :::

    :::preset/html
    formConfigDemo
    ---
    uikey:timepicker
    configDefaultValue:new Date()
    :::

    #### format
        
    `format`允许自定义组件展示的时间格式，支持以下占位符：

    |单位|占位符|示例|
    |-|-|-|
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

    采用`|`分隔时间：

    :::democode/html
    <div style="width:300px;">
        <ui-timepicker form-name="时间" format="HH | mm | ss" :default-value="new Date()"></ui-timepicker>
    </div>
    :::

    同时显示多种时间格式：

    :::democode/html
    <div style="width:400px;">
        <ui-timepicker form-name="时间" format="HH:mm:ss(24小时制), h:m:s(12小时制)" :default-value="new Date()"></ui-timepicker>
    </div>
    :::

    #### clearable

    :::democode/html
    <div style="width:300px;">
        <ui-timepicker form-name="时间" :default-value="new Date()" :clearable="true"></ui-timepicker>
    </div>
    :::

    #### align

    居中对齐：

    :::democode/html
    <div style="width:300px;">
        <ui-timepicker form-name="时间" :default-value="new Date()" align="center"></ui-timepicker>
    </div>
    :::

    右对齐：

    :::democode/html
    <div style="width:300px;">
        <ui-timepicker form-name="时间" :default-value="new Date()" align="right"></ui-timepicker>
    </div>
    :::

    #### selectable-range

    设置单个可选范围(8:30-12:00)：

    :::democode/html
    <div style="width:300px;">
        <ui-timepicker form-name="时间" :selectable-range="[new Date('1-1 08:30:00'), new Date('1-1 12:00:00')]"></ui-timepicker>
    </div>
    :::

    设置多个可选范围(08:03:02-12:30:00, 12:00:00-14:59:59, 20:30:10-21:30:20)：

    :::democode/html
    <div style="width:300px;">
        <ui-timepicker form-name="时间" :selectable-range="[[new Date('1-1 08:03:02'), new Date('1-1 12:30:00')], [new Date('1-1 12:00:00'), new Date('1-1 14:59:59')], [new Date('1-1 20:30:10'), new Date('1-1 21:30:20')]]"></ui-timepicker>
    </div>
    :::

    #### is-range

    :::democode/html
    <div style="width:300px;">
        <ui-timepicker form-name="时间" :is-range="true"></ui-timepicker>
    </div>
    :::

    #### separator

    :::democode/html
    <div style="width:300px;">
        <ui-timepicker form-name="时间" :is-range="true" separator="~"></ui-timepicker>
    </div>
    :::

    #### start-name

    :::democode/html
    <div style="width:300px;">
        <ui-timepicker form-name="时间" :is-range="true" start-name="发车时间"></ui-timepicker>
    </div>
    :::

    若设为`false`则显示`form-name`：

    :::democode/html
    <div style="width:300px;">
        <ui-timepicker form-name="时间" :is-range="true" :start-name="false"></ui-timepicker>
    </div>
    :::

    #### end-name

    :::democode/html
    <div style="width:300px;">
        <ui-timepicker form-name="时间" :is-range="true" end-name="到达时间"></ui-timepicker>
    </div>
    :::

    若设为`false`则显示`form-name`：

    :::democode/html
    <div style="width:300px;">
        <ui-timepicker form-name="时间" :is-range="true" :end-name="false"></ui-timepicker>
    </div>
    :::

    #### is-list

    :::democode/html
    <div style="width:300px;">
        <ui-timepicker form-name="时间" :is-list="true" :list="[new Date('1-1 9:00:00'), new Date('1-1 10:00:00'), new Date('1-1 11:00:00')]"></ui-timepicker>
    </div>
    :::


    [[[源码]]]

    <iframe src="/report/coverage/lib/components/timepicker/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>

    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                 from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'timepicker'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
