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
        <ui-timepicker form-name="时间" format="HH时mm分ss秒" default-value="12时30分24秒"></ui-timepicker>
    </div>
    :::
    
    使用12小时制：

    :::democode/html
    <div style="width:300px;">
        <ui-timepicker form-name="时间" format="h:m:s aa" default-value="12:30:24 a.m."></ui-timepicker>
    </div>
    :::

    更多自定义格式见`format`配置。

    #### 高亮当前修改时间单位

    当用户在选择器上切换时，对应修改的时间单位区域会高亮：

    :::democode/html
    <div style="width:300px;">
        <ui-timepicker form-name="时间" format="h:m:s" default-value="8:30:24"></ui-timepicker>
    </div>
    :::

    当同时有多个时间单位匹配时，只会高亮第一个匹配到的：

    :::democode/html
    <div style="width:300px;">
        <ui-timepicker form-name="时间" format="h:m:s aa | HH:mm:ss" default-value="8:30:24 a.m. | 08:30:24"></ui-timepicker>
    </div>
    :::

    [[[形态]]]

    :::preset/html
    formStatus
    ---
    uikey:timepicker
    statusDefaultValue:'12:30:24'
    :::

  <!--   :::democode/html
    <div style="width:300px;">
        <ui-timepicker state="normal" :is-list="true" :default-value="['12:30:24']" form-name="正常" ></ui-timepicker>
    </div>
    <br>
    <div style="width:300px;">
        <ui-timepicker state="disabled" :is-list="true" :default-value="['12:30:24']" form-name="禁用" ></ui-timepicker>
    </div>
    <br>
    ::: -->

    [[[配置]]]

    :::preset/html
    formConfigTable
    ---
    |[format](#format)|格式化展示的时间|时间格式化字符串(支持时间占位符见下方的演示)|String|`'HH:mm:ss'`|
    |[align](#align)|时间对齐方式|`'left'` : 左对齐<br>`'center'` : 居中对齐<br>`'right'` : 右对齐|String|`'left'`|
    |[selectable-range](#selectable-range)|可选时间范围，若不设置则不限。这是一个数组，支持以下格式：<br><br>`[开始时间, 结束时间]`: 指定单个可选范围<br>`[[开始时间1, 结束时间1], [开始时间2, 结束时间2]]`: 指定多个可选范围<br><br>可选时间将大于等于`开始时间`，小于等于`结束时间`。|时间范围数组|Array|`undefined`|
    :::

    :::preset/html
    formConfigDemo
    ---
    uikey:timepicker
    configDefaultValue:'12:30:24'
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

    <ui-quote color="light-blue">注意：使用12小时制时，需要加上午/下午占位符，否则可能出现无法正确解析时间的情况</ui-quote>

    采用`|`分隔时间：

    :::democode/html
    <div style="width:300px;">
        <ui-timepicker form-name="时间" format="HH | mm | ss" default-value="12 | 30 | 24"></ui-timepicker>
    </div>
    :::

    同时显示多种时间格式：

    :::democode/html
    <div style="width:400px;">
        <ui-timepicker form-name="时间" format="HH:mm:ss(24小时制), h:m:s aa(12小时制)" default-value="08:30:24(24小时制), 8:30:24 a.m.(12小时制)"></ui-timepicker>
    </div>
    :::

    #### align

    居中对齐：

    :::democode/html
    <div style="width:300px;">
        <ui-timepicker form-name="时间" default-value="12:30:24" align="center"></ui-timepicker>
    </div>
    :::

    右对齐：

    :::democode/html
    <div style="width:300px;">
        <ui-timepicker form-name="时间" default-value="12:30:24" align="right"></ui-timepicker>
    </div>
    :::

    #### selectable-range

    设置单个可选范围(8:30-12:00)：

    :::democode/html
    <div style="width:300px;">
        <ui-timepicker form-name="时间" :selectable-range="['08:30:00', '12:00:00']"></ui-timepicker>
    </div>
    :::

    设置多个可选范围(08:03:02-12:30:00, 12:00:00-14:59:59, 20:30:10-21:30:20)：

    :::democode/html
    <div style="width:300px;">
        <ui-timepicker form-name="时间" :selectable-range="[['08:03:02', '12:30:00'], ['12:00:00', '14:59:59'], ['20:30:10', '21:30:20']]"></ui-timepicker>
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
