<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 滑块输入 `<ui-slider>`
    
    <doc-component-status page="slider"></doc-component-status>
    
    [[[开始]]]

    定义一个滑块输入。

    :::vue
    @name:使用
    ---
    #demo
    >tpl
    <div style="width:300px;">
        <ui-slider form-name="进度"></ui-slider>
    </div>
    :::

    [[[形态]]]

    :::preset
    @name:formStatusWithSize
    @uikey:slider
    @defaultValue:40
    :::

    [[[配置]]]

    :::preset
    @name:formConfig
    @uikey:slider
    @defaultValue:40
    :::

    :::vue
    @name:max
    ---
    #config
    >conf-desc
    滑块输入允许输入的最大值。
    >conf-accept
    数字
    >conf-type
    Number
    >conf-default
    `100`
    ---
    #demo
    >tpl
    <div style="width:300px;">
        <ui-slider :max="10"></ui-slider>
    </div>
    :::

    :::vue
    @name:min
    ---
    #config
    >conf-desc
    滑块输入允许输入的最小值。
    >conf-accept
    数字
    >conf-type
    Number
    >conf-default
    `0`
    ---
    #demo
    >tpl
    <div style="width:300px;">
        <ui-slider :min="50"></ui-slider>
    </div>
    ---
    #demo
    >desc
    `max`和`min`一起使用。
    >tpl
    <div style="width:300px;">
        <ui-slider :min="1000" max="2000"></ui-slider>
    </div>
    :::

    :::vue
    @name:step
    ---
    #config
    >conf-desc
    滑动的步长，用户移动滑块时最小的数值调整单位。
    >conf-accept
    大于0的数字
    >conf-type
    Number
    >conf-default
    `1`
    ---
    #demo
    >desc
    每次调整以5为最小单位。
    >tpl
    <div style="width:300px;">
        <ui-slider :step="5"></ui-slider>
    </div>
    ---
    #demo
    >desc
    `step`也可以不是正数。
    >tpl
    <div style="width:300px;">
        <ui-slider :step="1.2"></ui-slider>
    </div>
    ---
    #demo
    >desc
    `step`配合`max`、`min`一起使用。
    >tpl
    <div style="width:300px;">
        <ui-slider :step="100" :min="1000" :max="2000"></ui-slider>
    </div>
    :::

    :::vue
    @name:show-tip
    ---
    #config
    >conf-desc
    在移动时显示滑块当前的数值。
    >conf-accept
    `true`<br/>`false`
    >conf-type
    Boolean
    >conf-default
    `true`
    ---
    #demo
    >desc
    不显示数值。
    >tpl
    <div style="width:300px;">
        <ui-slider :show-tip="false"></ui-slider>
    </div>
    :::

    :::vue
    @name:tip-formatter
    ---
    #config
    >conf-desc
    格式化滑块显示的数值。<br/>接受一个函数，函数的第一个参数是滑块的数值(数字)。<br/>如果开启了`is-range`则是一个数组，数组包含两个数字，分别是开始和结束两个滑块的数值。<br/><br/>此函数必须返回数字或字符串内容，将会显示在滑块上方。
    >conf-accept
    格式化函数
    >conf-type
    Function
    >conf-default
    `value => value`
    ---
    #demo
    >desc
    不显示数值。
    >tpl
    <div style="width:300px;">
        <ui-slider :tip-formatter="(value) => `进度：${value}%`"></ui-slider>
    </div>
    :::

    :::vue
    @name:prepend
    ---
    #config
    >conf-desc
    滑块前部显示内容（太长的内容会被隐藏）。
    >conf-accept
    内容字符串(可使用HTML)
    >conf-type
    String
    >conf-default
    `''`
    ---
    #demo
    >tpl
    <div style="width:300px;">
        <ui-slider prepend="进度"></ui-slider>
    </div>
    ---
    #demo
    >desc
    也可以使用HTML内容。
    >tpl
    <div style="width:300px;">
        <ui-slider :prepend="'<i class=\'mo-icon-set\'></i>'"></ui-slider>
    </div>
    :::

    :::vue
    @name:append
    ---
    #config
    >conf-desc
    滑块后部显示内容（太长的内容会被隐藏）。
    >conf-accept
    内容字符串(可使用HTML)
    >conf-type
    String
    >conf-default
    `''`
    ---
    #demo
    >tpl
    <div style="width:300px;">
        <ui-slider append="进度"></ui-slider>
    </div>
    ---
    #demo
    >desc
    也可以使用HTML内容。
    >tpl
    <div style="width:300px;">
        <ui-slider :append="'<i class=\'mo-icon-set\'></i>'"></ui-slider>
    </div>
    ---
    #demo
    >desc
    `prepend`和`append`一起使用。
    >tpl
    <div style="width:300px;">
        <ui-slider :prepend="'<i class=\'mo-icon-love-o\'></i>'" :append="'<i class=\'mo-icon-love-f\'></i>'"></ui-slider>
    </div>
    :::

    :::vue
    @name:show-point
    ---
    #config
    >conf-desc
    显示步长的间断点(按`step`配置)。若间断点过于密集，组件会自动调整隐藏部分间断点。
    >conf-accept
    `true`<br/>`false`
    >conf-type
    Boolean
    >conf-default
    `true`
    ---
    #demo
    >tpl
    <div style="width:300px;">
        <ui-slider :step="10" show-point></ui-slider>
    </div>
    ---
    #demo
    >desc
    如果间断点过于密集，会自动隐藏部分间断点。
    >tpl
    <div style="width:300px;">
        <ui-slider show-point :min="30" :max="260" :step="2"></ui-slider>
    </div>
    :::

    :::vue
    @name:mark-range
    ---
    #config
    >conf-desc
    标记滑动条的某部分。这是一个数组每项都是一个标记段，标记段是一个数组或对象：<br><br>如果是数组：长度为2，分别表示开始和结束。比如：`[[10, 20], [50, 70]]`会标记两段，第一段从数值10开始到20结束，第二段从数值50开始到70结束。<br><br>如果是对象，包含以下键值：<br>`start`：开始<br>`end`：结束<br>`color`：色彩，支持[设计/色彩](/design/color.html)中所有颜色，默认为`neutral-4`。也可采用HEX色值，比如`#333333`。
    >conf-accept
    数组
    >conf-type
    Array
    >conf-default
    `[]`
    ---
    #demo
    >tpl
    <div style="width:300px;">
        <ui-slider :mark-range="[[0, 20], [50, 70]]"></ui-slider>
    </div>
    ---
    #demo
    >desc
    通过色彩设置标记的颜色。
    >tpl
    <div style="width:300px;">
        <ui-slider :mark-range="[{
            start : 0,
            end : 30,
            color : 'neutral-5'
        }, {
            start : 70,
            end : 90,
            color : 'light-theme'
        }]"></ui-slider>
    </div>
    ---
    #demo
    >desc
    通过HEX色值设置标记的颜色。
    >tpl
    <div style="width:300px;">
        <ui-slider :mark-range="[{
            start : 0,
            end : 30,
            color : '#A0D06E'
        }, {
            start : 70,
            end : 90,
            color : '#FFA5B6'
        }]"></ui-slider>
    </div>
    :::

    :::vue
    @name:show-counter
    ---
    #config
    >conf-desc
    显示计数器。
    >conf-accept
    `true`<br/>`false`
    >conf-type
    Boolean
    >conf-default
    `true`
    ---
    #demo
    >tpl
    <div style="width:300px;">
        <ui-slider show-counter></ui-slider>
    </div>
    :::

    [[[方法]]]

    :::preset
    @name:formMethod
    @uikey:slider
    @value:40
    @defaultValue:40
    :::

    [[[事件]]]

    :::preset
    @name:formEvent
    @uiname:滑块输入
    @uikey:slider
    @value:40
    @wrapStyle:width:300px;
    :::

    [[[表单值]]]

    #### 值类型
    
    `Number` : 数字

    #### 值过滤
    
    - 如果数值的类型不是数字，会被转换成数字(通过`Number(n)`)
    - 如果数字是NaN，则取`min`配置的最小值
    - 如果数字小于`min`配置，则取`min`配置的最小值
    - 如果数字大于`max`配置，则取`max`配置的最大值

    #### 值格式

    取值的数字。

    #### 默认值

    `0`(`min`配置的最小值)
    
    :::preset
    @name:formValue
    @uikey:slider
    @uiname:滑块输入
    @valueType:slider
    @wrapStyle:width:300px;
    :::

    [[[源码]]]

    <iframe src="/report/coverage/lib/components/slider/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>

    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                 from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'slider'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
