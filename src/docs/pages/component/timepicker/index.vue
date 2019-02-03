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

    :::vue
    @name:使用
    ---
    #demo
    >tpl
    <div style="width:300px;">
        <ui-timepicker form-name="时间"></ui-timepicker>
    </div>
    :::

    :::vue
    @name:自定义时间格式
    ---
    #demo
    >desc
    时间选择器允许用户自定时间格式，使用中文时间。
    >tpl
    <div style="width:300px;">
        <ui-timepicker form-name="时间" format="HH时mm分ss秒" v-model="value"></ui-timepicker>
    </div>
    >script
    {
        data : {
            value : "12时30分24秒'"
        }
    }
    ---
    #demo
    >desc
    使用12小时制。<br><br>更多自定义格式见：[format配置](/component/timepicker.html#format)。
    >tpl
    <div style="width:300px;">
        <ui-timepicker form-name="时间" format="h:m:s aa" v-model="value"></ui-timepicker>
    </div>
    >script
    {
        data : {
            value : "12:30:24 a.m."
        }
    }
    :::

    :::vue
    @name:高亮当前修改时间单位
    ---
    #demo
    >desc
    当用户在选择器上切换时，对应修改的时间单位区域会高亮。
    >tpl
    <div style="width:300px;">
        <ui-timepicker form-name="时间" format="h:m:s" v-model="value"></ui-timepicker>
    </div>
    >script
    {
        data : {
            value : "8:30:24"
        }
    }
    ---
    #demo
    >desc
    当同时有多个时间单位匹配时，只会高亮第一个匹配到的。
    >tpl
    <div style="width:300px;">
        <ui-timepicker form-name="时间" format="h:m:s aa | HH:mm:ss" v-model="value"></ui-timepicker>
    </div>
    >script
    {
        data : {
            value : "8:30:24 a.m. | 08:30:24"
        }
    }
    :::

    [[[形态]]]

    :::preset
    @name:formStatus
    @uikey:timepicker
    @defaultValue:'12:30:24'
    :::

    :::vue
    @name:开启`is-list`时的禁用
    ---
    #demo
    >tpl
    <div style="width:300px;">
        <ui-timepicker state="normal" :is-list="true" :list="['09:00:00', '10:00:00', '11:00:00']" v-model="value1" form-name="正常" ></ui-timepicker>
        
        <br>
        
        <ui-timepicker state="disabled" :is-list="true" :list="['09:00:00', '10:00:00', '11:00:00']" v-model="value2" form-name="禁用" ></ui-timepicker>
    </div>
    >script
    {
        data : {
            value1 : ['10:00:00'],
            value2 : ['10:00:00']
        }
    }
    :::

    [[[配置]]]

    :::preset
    @name:formConfig
    @uikey:timepicker
    @defaultValue:'12:30:24'
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
    <div style="width:300px;">
        <ui-timepicker inside-name="时间"></ui-timepicker>
    </div>
    :::

    :::vue
    @name:format
    ---
    #config
    >conf-desc
    格式化展示的时间。
    <br><br>
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
    <br><br>
    <ui-quote color="light-blue">注意：使用12小时制时，需要加上午/下午占位符，否则可能出现无法正确解析时间的情况</ui-quote>
    >conf-accept
    时间格式化字符串(支持时间占位符见下方的演示)
    >conf-type
    String
    >conf-default
    `'HH:mm:ss'`
    ---
    #demo
    >desc
    采用`|`分隔时间。
    >tpl
    <div style="width:300px;">
        <ui-timepicker form-name="时间" format="HH | mm | ss" v-model="value"></ui-timepicker>
    </div>
    >script
    {
        data : {
            value : "12 | 30 | 24"
        }
    }
    ---
    #demo
    >desc
    同时显示多种时间格式(显示多个时间时，最后一个优先级最高)。
    >tpl
    <div style="width:400px;">
        <ui-timepicker form-name="时间" format="HH:mm:ss(24小时制), h:m:s aa(12小时制)" v-model="value"></ui-timepicker>
    </div>
    >script
    {
        data : {
            value : "08:30:24(24小时制), 8:30:24 a.m.(12小时制)"
        }
    }
    :::

    :::vue
    @name:align
    ---
    #config
    >conf-desc
    时间对齐方式。
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
        <ui-timepicker form-name="时间" v-model="value" align="center"></ui-timepicker>
    </div>
    >script
    {
        data : {
            value : "12:30:24"
        }
    }
    ---
    #demo
    >desc
    右对齐。
    >tpl
    <div style="width:300px;">
        <ui-timepicker form-name="时间" v-model="value" align="right"></ui-timepicker>
    </div>
    >script
    {
        data : {
            value : "12:30:24"
        }
    }
    :::

    :::vue
    @name:selectable-range
    ---
    #config
    >conf-desc
    可选时间范围，若不设置则不限。这是一个数组，支持以下格式：<br><br>`[开始时间, 结束时间]`: 指定单个可选范围<br>`[[开始时间1, 结束时间1], [开始时间2, 结束时间2]]`: 指定多个可选范围<br><br>可选时间将大于等于`开始时间`，小于等于`结束时间`。<br><br>`开始时间`和`结束时间`均为时间字符串需要符合`format`配置的时间格式。
    >conf-accept
    时间范围数组
    >conf-type
    Array
    >conf-default
    `undefined`
    ---
    #demo
    >desc
    设置单个可选范围(8:30-12:00)。
    >tpl
    <div style="width:300px;">
        <ui-timepicker form-name="时间" :selectable-range="['08:30:00', '12:00:00']"></ui-timepicker>
    </div>
    ---
    #demo
    >desc
    设置多个可选范围(08:03:02-12:30:00, 12:00:00-14:59:59, 20:30:10-21:30:20)。
    >tpl
    <div style="width:300px;">
        <ui-timepicker form-name="时间" :selectable-range="[['08:03:02', '12:30:00'], ['12:00:00', '14:59:59'], ['20:30:10', '21:30:20']]"></ui-timepicker>
    </div>
    ---
    #demo
    >desc
    如果`v-model`超过`selectable-range`范围。
    >tpl
    <div style="width:300px;">
        <ui-timepicker form-name="时间" :selectable-range="['08:00:00', '12:30:00']" v-model="value" is-range></ui-timepicker>
    </div>
    >script
    {
        data : {
            value : ['06:30:00', '13:45:30']
        }
    }
    :::

    :::vue
    @name:is-range
    ---
    #config
    >conf-desc
    选择时间区间，开启后可以选在一个时间段。
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
        <ui-timepicker form-name="时间" :is-range="true"></ui-timepicker>
    </div>
    ---
    #demo
    >desc
    在开启`is-range`的情况下设置`v-model`。
    >tpl
    <div style="width:300px;">
        <ui-timepicker form-name="时间" :is-range="true" v-model="value"></ui-timepicker>
    </div>
    >script
    {
        data : {
            value : ['09:00:00', '10:30:30']
        }
    }
    :::

    :::vue
    @name:separator
    ---
    #config
    >conf-desc
    时间区间选择时中间的分隔内容，只有开启`is-range`才有效。
    >conf-accept
    分隔字符串
    >conf-type
    String
    >conf-default
    `'至'`
    ---
    #demo
    >tpl
    <div style="width:300px;">
        <ui-timepicker form-name="时间" :is-range="true" separator="~"></ui-timepicker>
    </div>
    :::

    :::vue
    @name:separator-type
    ---
    #config
    >conf-desc
    时间区间选择时中间的分隔内容的展现类型。
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
    <div style="width:260px;">
        <ui-timepicker form-name="时间" :is-range="true" separator="~" separator-type="inline" align="center"></ui-timepicker>
    </div>
    :::

    :::vue
    @name:start-name
    ---
    #config
    >conf-desc
    时间区间选择时`开始时间`表单显示的名称，若设为`false`则显示`form-name`，只有开启`is-range`才有效。
    >conf-accept
    任意字符串<br>`false`:显示`form-name`
    >conf-type
    String<br>Boolean
    >conf-default
    `'开始时间'`
    ---
    #demo
    >tpl
    <div style="width:300px;">
        <ui-timepicker form-name="时间" :is-range="true" start-name="发车时间"></ui-timepicker>
    </div>
    ---
    #demo
    >desc
    若设为`false`则显示`form-name`。
    >tpl
    <div style="width:300px;">
        <ui-timepicker form-name="时间" :is-range="true" :start-name="false"></ui-timepicker>
    </div>
    :::

    :::vue
    @name:end-name
    ---
    #config
    >conf-desc
    时间区间选择时`结束时间`表单显示的名称，若设为`false`则显示`form-name`，只有开启`is-range`才有效。若设置了`hide-name`则不会显示。
    >conf-accept
    任意字符串`false`:显示`form-name`
    >conf-type
    String<br>Boolean
    >conf-default
    `'结束时间'`
    ---
    #demo
    >tpl
    <div style="width:300px;">
        <ui-timepicker form-name="时间" :is-range="true" end-name="到达时间"></ui-timepicker>
    </div>
    ---
    #demo
    >desc
    若设为`false`则显示`form-name`。
    >tpl
    <div style="width:300px;">
        <ui-timepicker form-name="时间" :is-range="true" :end-name="false"></ui-timepicker>
    </div>
    :::

    :::vue
    @name:is-list
    ---
    #config
    >conf-desc
    选择时间列表，开启后可指定可选的时间点。<br><br>通过`list`配置可以指定可选时间点的列表<br>通过`list-start`、`list-end`、`list-step`，可以设置开始/结束时间和步进来生成可选时间点的列表。
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
        <ui-timepicker form-name="时间" :is-list="true" :list="['09:00:00', '10:00:00', '11:00:00']"></ui-timepicker>
    </div>
    ---
    #demo
    >desc
    `is-list`和`is-range`一起使用。
    >tpl
    <div style="width:340px;">
        <ui-timepicker form-name="时间" :is-list="true" :is-range="true" :list="['09:00:00', '10:00:00', '11:00:00']"></ui-timepicker>
    </div>
    :::

    :::vue
    @name:list
    ---
    #config
    >conf-desc
    可选时间列表，这是一个数组，数组中每一项都是一个可选时间(需要符合`format`配置的时间格式)。当此配置和`list-start`、`list-end`、`list-step`一起使用时，组件会将这几个配置的可选时间进行合并。
    >conf-accept
    可选时间数组
    >conf-type
    Array
    >conf-default
    `[]`
    ---
    #demo
    >tpl
    <div style="width:300px;">
        <ui-timepicker form-name="时间" :is-list="true" :list="['09:00:00', '10:00:00', '11:00:00']"></ui-timepicker>
    </div>
    :::

    :::vue
    @name:list-start
    ---
    #config
    >conf-desc
    可选时间的起始时间，设为时间字符串启用，设为`false`停用。<br><br>必需配合`list-end`、`list-step`一起使用。
    >conf-accept
    可选时间的起始时间字符串(需要符合`format`配置的时间格式)
    >conf-type
    String<br>Boolean
    >conf-default
    `false`
    ---
    #demo
    >tpl
    <div style="width:300px;">
        <ui-timepicker form-name="时间" :is-list="true" list-start="09:00:00" list-end="15:00:00" list-step="01:30:00"></ui-timepicker>
    </div>
    ---
    #demo
    >desc
    配合`list`一起使用。
    >tpl
    <div style="width:300px;">
        <ui-timepicker form-name="时间" :is-list="true" list-start="09:00:00" list-end="15:00:00" list-step="01:30:00" :list="['21:00:00', '22:00:00']"></ui-timepicker>
    </div>
    :::

    :::vue
    @name:list-end
    ---
    #config
    >conf-desc
    可选时间的结束时间，设为时间字符串启用，设为`false`停用。<br><br>必需配合`list-start`、`list-step`一起使用。
    >conf-accept
    可选时间的结束时间字符串(需要符合`format`配置的时间格式)
    >conf-type
    String<br>Boolean
    >conf-default
    `false`
    ---
    #demo
    >tpl
    <div style="width:300px;">
        <ui-timepicker form-name="时间" :is-list="true" list-start="09:00:00" list-end="15:00:00" list-step="01:30:00"></ui-timepicker>
    </div>
    ---
    #demo
    >desc
    配合`list`一起使用。
    >tpl
    <div style="width:300px;">
        <ui-timepicker form-name="时间" :is-list="true" list-start="09:00:00" list-end="15:00:00" list-step="01:30:00" :list="['21:00:00', '22:00:00']"></ui-timepicker>
    </div>
    :::

    :::vue
    @name:list-end
    ---
    #config
    >conf-desc
    可选时间的间隔时间，当设置了`list-start`、`list-end`后，会将这段时间按`list-step`分割成多个可选时间点。<br><br>必需配合`list-start`、`list-end`一起使用。
    >conf-accept
    间隔时间字符串(必须是`时:分:秒`的格式)
    >conf-type
    String
    >conf-default
    `'00:30:00'`
    ---
    #demo
    >tpl
    <div style="width:300px;">
        <ui-timepicker form-name="时间" :is-list="true" list-start="09:00:00" list-end="15:00:00" list-step="01:30:00"></ui-timepicker>
    </div>
    ---
    #demo
    >desc
    配合`list`一起使用。
    >tpl
    <div style="width:300px;">
        <ui-timepicker form-name="时间" :is-list="true" list-start="09:00:00" list-end="15:00:00" list-step="01:30:00" :list="['21:00:00', '22:00:00']"></ui-timepicker>
    </div>
    :::
    
    [[[方法]]]

    :::preset
    @name:formMethod
    @uikey:timepicker
    @value:'12:30:24'
    @defaultValue:'12:30:24'
    :::

    :::vue
    @name:getDate()
    ---
    #method
    >method-desc
    获取当前选中时间的日期对象。
    >method-return
    日期对象。
    ---
    #demo
    >tpl
    <div style="width:300px;">
        <ui-timepicker ref="demo1" form-name="时间"></ui-timepicker>
        <br><br> 
        <ui-link js="morning.findVM('demo1').getDate();">获取当前选中时间的日期对象</ui-link>
    </div>
    :::

    [[[事件]]]

    :::preset
    @name:formEvent
    @uiname:时间选择器
    @uikey:timepicker
    @value:'12:30:24'
    @wrapStyle:width:300px;
    :::

    [[[表单值]]]

    #### 值类型
    
    - `Array` : 数组
    - `String` : 字符串(按`format`配置格式化)

    #### 值过滤

    - 若是范围时间选择(开启`isRange`配置)，则数值是一个字符串，则将数值转换成数组，该字符串作为第一项       
    - 若是单一时间选择(未开启`isRange`配置)，且数值是一个数组，则取第一项
    - 若数值的类型是字符串则检测字符串的时间格式是否符合`format`配置，若不符合尝试转换成符合的格式，若无法转换则转换成`00:00:00`的符合`format`的时间字符串。
    - 若数值的类型是一个数组，且数组长度为`0`则转换为`undefined`
    - 若数值的类型是一个数组，且数组长度大于`2`，则过滤多余的项目，只保留两项
    - 若数值的类型是一个数组，且数组长度大于`0`且小于`3`，会过滤数组中所有不是字符串类型的项目，然后按照第三条规则，对所有字符串项目进行过滤
    
    #### 值格式

    若是单一时间选择，则是时间字符串(符合`format`的格式化规则)
    若是范围时间选择，则是长度为2的数组，数组中第一项是开始时间点的时间字符串(符合`format`的格式化规则)，数组中第二项是结束时间点的时间字符串(符合`format`的格式化规则)。

    #### 默认值

    `undefined`

    :::preset
    @name:formValue
    @uikey:timepicker
    @uiname:时间选择器
    @valueType:timepicker
    @wrapStyle:width:300px;
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
