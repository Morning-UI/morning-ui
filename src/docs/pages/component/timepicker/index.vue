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
    |[list](#list)|可选时间列表，这是一个数组，数组中每一项都是一个`Date`对象，对象的时间就是可选时间点。当此配置和`list-start`、`list-end`、`list-step`一起使用时，组件会将这几个配置的可选时间进行合并|可选时间数组|Array|`[]`|
    |[list-start](#list-startlist-endlist-step)|可选时间的起始时间，设为`Date`对象启用，设为`false`停用。必需配合`list-end`、`list-step`一起使用。|可选时间的起始时间|Date<br>Boolean|`false`|
    |[list-end](#list-startlist-endlist-step)|可选时间的结束时间，设为`Date`对象启用，设为`false`停用。必需配合`list-start`、`list-step`一起使用。|可选时间的结束时间|Date<br>Boolean|`false`|
    |[list-step](#list-startlist-endlist-step)|可选时间的间隔时间，当设置了`list-start`、`list-end`后，会将这段时间按`list-step`分割成多个可选时间点。必需配合`list-start`、`list-end`一起使用。|间隔时间字符串(必须是`时:分:秒`的格式)|String|`00:30:00`|
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

    #### list

    :::democode/html
    <div style="width:300px;">
        <ui-timepicker form-name="时间" :is-list="true" :list="[new Date('1-1 9:00:00'), new Date('1-1 10:00:00'), new Date('1-1 11:00:00')]"></ui-timepicker>
    </div>
    :::

    #### list-start & list-end & list-step

    :::democode/html
    <div style="width:300px;">
        <ui-timepicker form-name="时间" :is-list="true" :list-start="new Date('1-1 9:00:00')" :list-end="new Date('1-1 15:00:00')" list-step="01:30:00"></ui-timepicker>
    </div>
    :::

    配合`list`一起使用：

    :::democode/html
    <div style="width:300px;">
        <ui-timepicker form-name="时间" :is-list="true" :list-start="new Date('1-1 9:00:00')" :list-end="new Date('1-1 15:00:00')" list-step="01:30:00" :list="[new Date('1-1 21:00:00'), new Date('1-1 22:00:00')]"></ui-timepicker>
    </div>
    :::

    [[[方法]]]

    :::preset/html
    formMethod
    ---
    uikey:timepicker
    methodValue:[new Date()]
    methodDefaultValue:[new Date()]
    :::

    [[[事件]]]

    :::preset/html
    formEvent
    ---
    uikey:timepicker
    eventValue:[new Date()]
    :::

    [[[表单值]]]

    #### 值类型
    
    `Array` : 数组

    #### 值过滤
    
    - 如果数值的类型是非数组，会被转换成空数组。
    - 若数组中第一项将会被尝试转换成`Date`对象，若结果是非法`Date`对象，则会被转换成当前时间`Date`对象。
    - 若数组中第二项将会被尝试转换成`Date`对象，若结果是非法`Date`对象且开启`is-range`配置，则会被转换成当前时间`Date`对象。
    - 若数组长度为2且未开启`is-range`配置，则数组只保留第一项。
    - 数组中所有的`Date`对象的年/月/日都会统一。

    #### 值格式

    若是单一时间选择，则是长度为1的数组，数组中第一项是选中时间点的`Date`对象。
    若是范围时间选择，则是长度为2的数组，数组中第一项是开始时间点的`Date`对象，数组中第二项是结束时间点的`Date`对象。

    #### 默认值

    `[]`

    #### 输入/输出示例

    :::repeat/html
    formValueType:timepicker
    ---
    <div>
        <p>{$valueType}类型</p>
        <div style="width:300px;">
            <ui-timepicker ref="demoType{$valueType}"></ui-timepicker>
        </div>
        <br>
        <ui-link js="window.morning.findVM('demoType{$valueType}').set({$&valueContent})">设置{$valueType}类型</ui-link>
        <ui-link js="alert(window.morning.findVM('demoType{$valueType}').getJson())">获取表单JSON值</ui-link>
    </div>
    <br>
    <br>
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
