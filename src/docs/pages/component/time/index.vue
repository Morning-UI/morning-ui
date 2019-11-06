<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 时间 `<ui-time>`
    
    <doc-component-status page="time"></doc-component-status>
    
    [[[开始]]]

    定义一个时间展示组件，这是一个内联块级元素。
    
    时间展示组件可以用来展示各种格式的绝对时间和相对时间，时间组件本身无样式可以通过额外的CSS来添加样式。

    :::vue
    @name:使用
    ---
    #demo
    >tpl
    <ui-time :time="new Date('2019-03-01 15:00:00')"></ui-time>
    :::

    :::vue
    @name:设置相对时间
    ---
    #demo
    >desc
    设置的`time`与当前时间相差多久(默认采用模糊的用语，但更具可读性)。
    >tpl
    <div>
        <!-- 几秒前 -->
        <ui-time :time="new Date()" relative></ui-time><br>
        <!-- 几分钟前 -->
        <ui-time :time="new Date(Date.now() - 60*1000 + 1000)" relative></ui-time><br>
        <ui-time :time="new Date(Date.now() - 3*60*1000 + 1000)" relative></ui-time><br>
        <!-- 几小时前 -->
        <ui-time :time="new Date(Date.now() - 2*3600*1000 + 1000)" relative></ui-time><br>
        <!-- 几天前 -->
        <ui-time :time="new Date(Date.now() - 2*24*3600*1000 + 1000)" relative></ui-time><br>
        <!-- 几月前 -->
        <ui-time :time="new Date(Date.now() - 2*30*24*3600*1000 + 1000)" relative></ui-time><br>
        <!-- 几年前 -->
        <ui-time :time="new Date(Date.now() - 1.4*365*24*3600*1000 + 1000)" relative></ui-time><br>
        <ui-time :time="new Date(Date.now() - 1.8*365*24*3600*1000 + 1000)" relative></ui-time><br>
    </div>
    ---
    #demo
    >desc
    也可以通过`strict`来显示精确的相对时间。
    >tpl
    <div>
        <!-- 几秒前 -->
        <ui-time :time="new Date()" relative></ui-time><br>
        <!-- 几分钟前 -->
        <ui-time :time="new Date(Date.now() - 60*1000 + 1000)" relative strict></ui-time><br>
        <ui-time :time="new Date(Date.now() - 3*60*1000 + 1000)" relative strict></ui-time><br>
        <!-- 几小时前 -->
        <ui-time :time="new Date(Date.now() - 2*3600*1000 + 1000)" relative strict></ui-time><br>
        <!-- 几天前 -->
        <ui-time :time="new Date(Date.now() - 2*24*3600*1000 + 1000)" relative strict></ui-time><br>
        <!-- 几月前 -->
        <ui-time :time="new Date(Date.now() - 2*30*24*3600*1000 + 1000)" relative strict></ui-time><br>
        <!-- 几年前 -->
        <ui-time :time="new Date(Date.now() - 1.4*365*24*3600*1000 + 1000)" relative strict></ui-time><br>
        <ui-time :time="new Date(Date.now() - 1.8*365*24*3600*1000 + 1000)" relative strict></ui-time><br>
    </div>
    :::

    :::vue
    @name:实时更新时间
    ---
    #demo
    >desc
    可以通过`real-time`设置某一时刻开始实时变化的绝对时间。
    >tpl
    <div>
        <ui-time :time="new Date()" real-time></ui-time><br>
    </div>
    ---
    #demo
    >desc
    指定`real-time`为数字，可以设置更新间隔，单位为`ms`。
    >tpl
    <div>
        <ui-time :time="new Date()" :real-time="3000"></ui-time><br>
    </div>
    ---
    #demo
    >desc
    若时间是相对的通过`real-time`可以实时更新相对时间，但是更新间隔较久。
    >tpl
    <div>
        <ui-time :time="new Date()" relative real-time></ui-time><br>
    </div>
    ---
    #demo
    >desc
    当`real-time`配合`relative`和`strict`一起使用，可以较实时的更新相对时间。
    >tpl
    <div>
        <ui-time :time="new Date()" relative strict real-time></ui-time><br>
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
    @name:time
    ---
    #config
    >conf-desc
    设置一个时间，用于显示此时刻的绝对时间，或计算当前时刻与此时刻的相对时间。
    >conf-accept
    标准日期对象
    >conf-type
    Date
    >conf-default
    `new Date()`
    ---
    #demo
    >tpl
    <ui-time :time="new Date('2015-11-11')"></ui-time>
    :::

    :::vue
    @name:format
    ---
    #config
    >conf-desc
    绝对时间的展示格式，仅在关闭`relative`时有效。
    <br><br>
    `format`允许自定义组件展示的日期时间格式，支持以下占位符：
    <br><br>
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
    |上午/下午|a|AM, PM|
    ||aaaa|a.m., p.m.|
    |小时|H|0, 1, ... 23|
    ||HH|00, 01, ... 23|
    ||h|0, 1, ... 12|
    ||hh|00, 01, ... 12|
    |分钟|mm|00, 01, ... 59|
    ||m|0, 1, ... 59|
    |秒|ss|00, 01, ... 59|
    ||s|0, 1, ... 59|
    |毫秒|S|0, 1, ..., 9|
    ||SS|00, 01, ..., 99|
    ||SSS|000, 001, ..., 999|
    >conf-accept
    日期时间格式化字符串(支持日期占位符见下方的演示)
    >conf-type
    String
    >conf-default
    `'yyyy-MM-dd HH:mm:ss'`
    ---
    #demo
    >desc
    自定义绝对时间展示格式。
    >tpl
    <ui-time :time="new Date()" format="yyyy | MM | dd | HH | mm | ss"></ui-time>
    :::

    :::vue
    @name:relative
    ---
    #config
    >conf-desc
    展示相对时间，相对时间为当前时刻与`time`所设置时刻的差。
    >conf-accept
    `true`<br>`false`
    >conf-type
    Boolean
    >conf-default
    `false`
    ---
    #demo
    >tpl
    <div>
        <!-- 几秒前 -->
        <ui-time :time="new Date()" relative></ui-time><br>
        <!-- 几分钟前 -->
        <ui-time :time="new Date(Date.now() - 60*1000 + 1000)" relative></ui-time><br>
        <ui-time :time="new Date(Date.now() - 3*60*1000 + 1000)" relative></ui-time><br>
        <!-- 几小时前 -->
        <ui-time :time="new Date(Date.now() - 2*3600*1000 + 1000)" relative></ui-time><br>
        <!-- 几天前 -->
        <ui-time :time="new Date(Date.now() - 2*24*3600*1000 + 1000)" relative></ui-time><br>
        <!-- 几月前 -->
        <ui-time :time="new Date(Date.now() - 2*30*24*3600*1000 + 1000)" relative></ui-time><br>
        <!-- 几年前 -->
        <ui-time :time="new Date(Date.now() - 1.4*365*24*3600*1000 + 1000)" relative></ui-time><br>
        <ui-time :time="new Date(Date.now() - 1.8*365*24*3600*1000 + 1000)" relative></ui-time><br>
    </div>
    :::

    :::vue
    @name:strict
    ---
    #config
    >conf-desc
    显示相对时间时使用更精确的展现方式，仅在`relative`开启时有效。
    >conf-accept
    `true`<br>`false`
    >conf-type
    Boolean
    >conf-default
    `false`
    ---
    #demo
    >tpl
    <div>
        <!-- 几秒前 -->
        <ui-time :time="new Date()" relative></ui-time><br>
        <!-- 几分钟前 -->
        <ui-time :time="new Date(Date.now() - 60*1000 + 1000)" relative strict></ui-time><br>
        <ui-time :time="new Date(Date.now() - 3*60*1000 + 1000)" relative strict></ui-time><br>
        <!-- 几小时前 -->
        <ui-time :time="new Date(Date.now() - 2*3600*1000 + 1000)" relative strict></ui-time><br>
        <!-- 几天前 -->
        <ui-time :time="new Date(Date.now() - 2*24*3600*1000 + 1000)" relative strict></ui-time><br>
        <!-- 几月前 -->
        <ui-time :time="new Date(Date.now() - 2*30*24*3600*1000 + 1000)" relative strict></ui-time><br>
        <!-- 几年前 -->
        <ui-time :time="new Date(Date.now() - 1.4*365*24*3600*1000 + 1000)" relative strict></ui-time><br>
        <ui-time :time="new Date(Date.now() - 1.8*365*24*3600*1000 + 1000)" relative strict></ui-time><br>
    </div>
    :::

    :::vue
    @name:real-time
    ---
    #config
    >conf-desc
    实时更新展示的时间。
    <br>
    在绝对时间展示模式下(关闭`relative`)：会实时更新`time`所配置的时间（递增）。
    <br>
    在相对时间展示模式下(开启`relative`)：会实时更新当前时刻与`time`所设置时刻的差。
    >conf-accept
    `true`: 开启实时更新(默认`1000ms`间隔)<br>
    `false` : 关闭实时更新<br>
    Number : 设置实时更新间隔(单位`ms`)
    >conf-type
    Boolean<br>Number
    >conf-default
    `true`
    ---
    #demo
    >desc
    可以通过`real-time`设置某一时刻开始实时变化的绝对时间。
    >tpl
    <div>
        <ui-time :time="new Date()" real-time></ui-time><br>
    </div>
    ---
    #demo
    >desc
    减缓实时更新间隔，提升性能。
    >tpl
    <div>
        <ui-time :time="new Date()" :real-time="3000"></ui-time><br>
    </div>
    ---
    #demo
    >desc
    加快实时更新间隔，获得更好体验。
    >tpl
    <div>
        <ui-time :time="new Date()" format="HH:mm:ss:SSS" :real-time="50"></ui-time><br>
    </div>
    ---
    #demo
    >desc
    若时间是相对的通过`real-time`可以实时更新相对时间，但是更新间隔较久。
    >tpl
    <div>
        <ui-time :time="new Date()" relative real-time></ui-time><br>
    </div>
    ---
    #demo
    >desc
    当`real-time`配合`relative`和`strict`一起使用，可以较实时的更新相对时间。
    >tpl
    <div>
        <ui-time :time="new Date()" relative strict real-time></ui-time><br>
    </div>
    :::

    :::vue
    @name:countdown
    ---
    #config
    >conf-desc
    倒计时到某个时间点，使用此配置后将无视`time`、`format`、`relative`、`strict`配置。
    <br>
    暂时不支持自定义格式。
    >conf-accept
    标准日期对象
    >conf-type
    Date
    >conf-default
    `new Date()`
    ---
    #demo
    >tpl
    <ui-time :countdown="new Date('2099-12-12')"></ui-time>
    ---
    #demo
    >desc
    使用`real-time`开启实时倒计时。
    >tpl
    <ui-time :countdown="new Date('2099-12-12')" real-time></ui-time>
    :::

    [[[方法]]]
    
    <h1>暂无</h1>

    [[[事件]]]

    :::vue
    @layout:lifecycle-event
    ---
    time
    时间
    :::

    [[[源码]]]

    <iframe src="/report/coverage/lib/components/time/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>

    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                 from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'time'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
