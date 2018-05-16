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

    #### 自定义日期时间格式

    日期时间选择器允许用户自定日期时间格式，使用中文时间：
        
    :::democode/html
    <div style="width:300px;">
        <ui-datetimepicker form-name="日期时间" :date="+new Date('2018-03-23')" format="YYYY年MM月DD日 HH点mm分ss秒" default-value="2018年03月23日 18点10分18秒"></ui-datetimepicker>
    </div>
    :::

    更多自定义格式见`format`配置。

    #### 范围日期时间选择

    :::democode/html
    <div style="width:460px;">
        <ui-datetimepicker form-name="日期时间" :is-range="true"></ui-datetimepicker>
    </div>
    :::

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
    |[format](#format)|格式化展示的日期时间|日期时间格式化字符串(支持日期占位符见下方的演示)|String|`'YYYY-MM-DD'`|
    |[align](#align)|日期时间对齐方式|`'left'` : 左对齐<br>`'center'` : 居中对齐<br>`'right'` : 右对齐|String|`'left'`|
    |[quick-pick](#quick-pick)|显示快速选择项，这个配置是一个数组，数组中的每一项都是一个快速选择项目。<br><br>数组项支持两种类型：<br><br>__关键词__ ：支持字符串格式的快速选择关键词。<br><br>未开启`is-range`情况下包括：`今天`、`昨天`、`明天`、`n 秒前`、`n 分钟前`、`n 小时前`、`n 天前`、`n 周前`、`n 月前`、`n 年前`、`n 秒后`、`n 分钟后`、`n 小时后`、`n 天后`、`n 周后`、`n 月后`、`n 年后`(需要注意`n`后面有空格)，例如：`2 天前`、`3 周前`。<br><br>开启`is-range`情况下包括：`本周`、`本月`、`今年`、`最近 n 秒`、`最近 n 分钟`、`最近 n 小时`、`最近 n 天`、`最近 n 周`、`最近 n 月`、`最近 n 年`、`未来 n 秒`、`未来 n 分钟`、`未来 n 小时`、`未来 n 天`、`未来 n 周`、`未来 n 月`、`未来 n 年`(需要注意`n`前后有空格)，例如：`未来 2 周`、`最近 3 月`。<br><br>__时间设置__：是一个对象。<br><br>未开启`is-range`情况下包含`name`和`pick`两个属性。<br>`name`是快速选择项展现的名称。<br>`pick`支持`数字`或`日期对象`。若`pick`是`数字`则代表相对秒数，会选中当前日期时间和`pick`相加后的日期时间，所以`pick`是负数代表过去的日期时间，正数则代表未来的日期时间。若`pick`是`日期对象`则会选中`pick`所表示的日期时间。<br><br>开启`is-range`情况下包含`name`、`start`、`end`三个属性。<br>`name`是快速选择项展现的名称。<br>`start`和`end`是`日期对象`分别表示选择日期时间段的开始和结束。<br><br>你可以混合使用多种类型的快速选择项(详见[下面的示例](#quick-pick))。|字符串(关键词)<br>对象(时间设置)|Array|`[]`|
    |[date-selectable-range](#date-selectable-range)|可选日期时间范围，是一个连续的时间段，可以限制到的时分秒，若不设置则不限。这是一个数组，支持以下格式：<br><br>`[开始日期, 结束日期]`: 指定单个可选范围<br>`[[开始日期1, 结束日期1], [开始日期2, 结束日期2]]`: 指定多个可选范围<br><br>可选日期将大于等于`开始日期`，小于等于`结束日期`。<br><br>`开始日期`和`结束日期`均为日期字符串需要符合`format`配置的日期格式。|日期范围数组|Array|`undefined`|
    |[time-selectable-range](#time-selectable-range)|可选时间范围，若不设置则不限。这是一个数组，支持以下格式：<br><br>`[开始时间, 结束时间]`: 指定单个可选范围<br><br>可选时间将大于等于`开始时间`，小于等于`结束时间`。<br><br>`开始时间`和`结束时间`均为时间字符串需要符合`format`配置的时间格式。<br><br>此配置用于限制每天可选的时间范围(仅支持一个范围)，若需要限制一个时间段请使用`date-selectable-range`配置。<br><br>如同时配置了`date-selectable-range`则取可选范围的交集。|时间范围数组|Array|`undefined`|
    |[is-range](#is-range)|选择日期时间区间，开启后可以选在一个日期时间段|`true`<br>`false`|Boolean|`false`|
    |[separator](#separator)|日期时间区间选择时中间的分隔内容，只有开启`is-range`才有效|分隔字符串|String|`'至'`|
    |[start-name](#start-name)|日期时间区间选择时`开始日期时间`表单显示的名称，若设为`false`则显示`form-name`，只有开启`is-range`才有效|任意字符串<br>`false`:显示`form-name`|String<br>Boolean|`'开始日期时间'`|
    |[end-name](#end-name)|日期时间区间选择时`结束日期时间`表单显示的名称，若设为`false`则显示`form-name`，只有开启`is-range`才有效。若设置了`hide-name`则不会显示|任意字符串`false`:显示`form-name`|String<br>Boolean|`'结束日期时间'`|
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
        
    `format`允许自定义组件展示的日期时间格式，支持以下占位符：

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

    采用`|`分隔日期时间：

    :::democode/html
    <div style="width:300px;">
        <ui-datetimepicker form-name="日期时间" :date="+new Date('2018-03-23')" format="YYYY | MM | DD | HH | mm | ss" default-value="2018 | 03 | 23 | 18 | 10 | 08"></ui-datetimepicker>
    </div>
    :::

    同时显示多种日期时间格式(显示多个日期时，最后一个优先级最高)：

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

    #### quick-pick
        
    你可以通过预设的关键词来设置日期快速选择项：

    :::democode/html
    <div style="width:300px;">
        <ui-datetimepicker form-name="日期时间" :quick-pick="['30 秒前', '5 分钟前', '1 小时前', '今天', '昨天', '2 天前', '3 天前', '1 周前', '1 月前', '1 年前']"></ui-datetimepicker>
    </div>
    :::

    未来的时间也可以设置：

    :::democode/html
    <div style="width:300px;">
        <ui-datetimepicker form-name="日期时间" :quick-pick="['30 秒后', '5 分钟后', '1 小时后', '明天', '3 天后', '3 周后', '3 月后', '1 年后']"></ui-datetimepicker>
    </div>
    :::

    也可以通过选中日期时间相对与现在的秒数(正数为未来，负数为过去)来设置：
    
    :::democode/html
    <div style="width:300px;">
        <ui-datetimepicker form-name="日期时间" :quick-pick="[{name: '一分钟后', pick: 60}, {name: '半小时前', pick: -1800}, {name: '今天', pick: 0}, {name: '明天', pick: 86400}]"></ui-datetimepicker>
    </div>
    :::

    也可以通过选中日期的绝对值来设置：

    :::democode/html
    <div style="width:300px;">
        <ui-datetimepicker form-name="日期时间" :quick-pick="[{name: '生日派对', pick: new Date('2018-3-23 19:00:00')}]"></ui-datetimepicker>
    </div>
    :::
    
    配合`is-range`使用时：

    :::democode/html
    <div style="width:460px;">
        <ui-datetimepicker form-name="日期" :quick-pick="['本周', '本月', '今年', '最近 30 秒', '最近 10 分钟', '未来 5 分钟', '最近 1 小时', '最近 7 天', '未来 7 天', '最近 1 周', '最近 2 月', '未来 3 年', {name: '2015-2017', start: new Date('2015-01-01 00:00:00'), end: new Date('2017-12-31 23:59:59')}]" is-range></ui-datetimepicker>
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

    在使用`selectable-range`的同时开启`is-range`：

    :::democode/html
    <div style="width:460px;">
        <ui-datetimepicker form-name="日期时间" :date="+new Date('2018-03-23')" :date-selectable-range="['2018-03-08 00:00:00', '2018-03-23 00:00:00']" is-range></ui-datetimepicker>
    </div>
    :::

    如果`default-value`超过`selectable-range`范围：

    :::democode/html
    <div style="width:460px;">
        <ui-datetimepicker form-name="日期时间" :date="+new Date('2018-03-23')" :date-selectable-range="['2018-03-08 00:00:00', '2018-03-23 00:00:00']" :default-value="['2018-03-06 12:00:00', '2018-03-09 12:00:00']" is-range></ui-datetimepicker>
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

    #### separator

    :::democode/html
    <div style="width:460px;">
        <ui-datetimepicker form-name="日期时间" :is-range="true" separator="~"></ui-datetimepicker>
    </div>
    :::

    #### start-name

    :::democode/html
    <div style="width:460px;">
        <ui-datetimepicker form-name="日期时间" :is-range="true" start-name="发车日期"></ui-datetimepicker>
    </div>
    :::

    若设为`false`则显示`form-name`：

    :::democode/html
    <div style="width:460px;">
        <ui-datetimepicker form-name="日期时间" :is-range="true" :start-name="false"></ui-datetimepicker>
    </div>
    :::

    #### end-name

    :::democode/html
    <div style="width:460px;">
        <ui-datetimepicker form-name="日期时间" :is-range="true" end-name="到达日期"></ui-datetimepicker>
    </div>
    :::

    若设为`false`则显示`form-name`：

    :::democode/html
    <div style="width:460px;">
        <ui-datetimepicker form-name="日期时间" :is-range="true" :end-name="false"></ui-datetimepicker>
    </div>
    :::

    [[[方法]]]

    :::preset/html
    formMethod
    ---
    uikey:datetimepicker
    methodValue:'2018-03-23 12:13:14'
    methodDefaultValue:'2018-03-23 12:13:14'
    :::

    [[[事件]]]

    :::preset/html
    formEvent
    ---
    uikey:datetimepicker
    eventValue:'2018-03-23 12:13:14'
    :::

    [[[表单值]]]

    #### 值类型
    
    - `Array` : 数组
    - `String` : 字符串(按`format`配置格式化)

    #### 值过滤

    - 若是范围日期时间选择(开启`isRange`配置)，则数值是一个字符串，则将数值转换成数组，该字符串作为第一项       
    - 若是单一日期时间选择(未开启`isRange`配置)，且数值是一个数组，则取第一项
    - 若数值的类型是字符串则检测字符串的日期时间格式是否符合`format`配置，若不符合尝试转换成符合的格式，若无法转换则转换成`1971-01-01 00:00:00`的符合`format`的日期时间
    - 若使用了`date-selectable-range`或`time-selectable-range`配置，且数值对应的日期时间不在范围内，则会转换成最近的范围内日期时间
    - 若数值的类型是一个数组，且数组长度为`0`则转换为`undefined`
    - 若数值的类型是一个数组，且数组长度大于`2`，则过滤多余的项目，只保留两项
    - 若数值的类型是一个数组，且数组长度大于`0`且小于`3`，会过滤数组中所有不是字符串类型的项目，然后按照第三条规则，对所有字符串项目进行过滤
    - 若数值的类型是一个数组，且第二项代表的日期时间大于第一项，则对换数组的两项
    
    #### 值格式

    若是单一日期时间选择，则是日期时间字时间符串(符合`format`的格式化规则)
    若是范围日期时间选择，则是长度为2的数组，数组中第一项是开始日期时间的日期时间字符串(符合`format`的格式化规则)，数组中第二项是结束日期时间的日期时间字符串(符合`format`的格式化规则)。

    #### 默认值

    `undefined`

    #### 输入/输出示例

    :::repeat/html
    formValueType:datetimepicker
    ---
    <div>
        <p>{$valueType}类型</p>
        <div style="width:300px;">
            <ui-datetimepicker ref="demoType{$valueType}"></ui-datetimepicker>
        </div>
        <br>
        <ui-link js="window.morning.findVM('demoType{$valueType}').set({$&valueContent})">设置{$valueType}类型</ui-link>
        <ui-link js="alert(window.morning.findVM('demoType{$valueType}').getJson())">获取表单JSON值</ui-link>
    </div>
    <br>
    <br>
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
