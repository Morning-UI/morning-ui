<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 计数器 `<ui-counter>`
    
    <doc-component-status page="counter"></doc-component-status>
    
    [[[开始]]]

    定义计数器，这是一个块元素，具有最小宽度。

    :::vue
    @name:使用
    ---
    #demo
    >tpl
    <div style="width:130px;">
        <ui-counter form-name="数字"></ui-counter>
    </div>
    :::

    #### 长按加速

    当你长按计数器的按钮时，会增加计数器变化的频率。

    [[[形态]]]

    :::preset
    @name:formStatusWithSize
    @uikey:counter
    @defaultValue:5
    @wrapStyle:width:130px;
    :::

    [[[配置]]]

    :::preset
    @name:formConfig
    @uikey:counter
    @defaultValue:5
    @wrapStyle:width:130px;
    :::

    :::vue
    @name:step
    ---
    #config
    >conf-desc
    计数器每次变动的步长，用户点击增加或减少时最小的数值调整单位。
    >conf-accept
    大于0的数字
    >conf-type
    Number
    >conf-default
    `1`
    ---
    #demo
    >tpl
    <div style="width:130px;">
        <ui-counter form-name="数字" step="3"></ui-counter>
    </div>
    ---
    #demo
    >tpl
    <div style="width:130px;">
        <ui-counter form-name="数字" step="1.25"></ui-counter>
    </div>
    :::

    :::vue
    @name:max
    ---
    #config
    >conf-desc
    计数器的最大值。
    >conf-accept
    数字
    >conf-type
    Number
    >conf-default
    `Infinity`
    ---
    #demo
    >tpl
    <div style="width:130px;">
        <ui-counter form-name="数字" max="5"></ui-counter>
    </div>
    :::

    :::vue
    @name:min
    ---
    #config
    >conf-desc
    计数器的最小值。
    >conf-accept
    数字
    >conf-type
    Number
    >conf-default
    `-Infinity`
    ---
    #demo
    >tpl
    <div style="width:130px;">
        <ui-counter form-name="数字" min="-5"></ui-counter>
    </div>
    :::

    :::vue
    @name:formater
    ---
    #config
    >conf-desc
    计数器显示格式化，这是一个函数。第一个参数是当前的数值，返回一个字符串用于显示。<br>必须和`parser`配置一起使用，互为逆向函数。<br>注意：若设置了`precision`此函数的参数需要作为字符串处理，否则会丢失精度。
    >conf-accept
    函数
    >conf-type
    Function
    >conf-default
    `value => value`
    ---
    #demo
    >tpl
    <div style="width:130px;">
        <ui-counter form-name="数字" :formater="(value => value + '%')" :parser="(value => +value.replace(/%$/, ''))"></ui-counter>
    </div>
    :::

    :::vue
    @name:parser
    ---
    #config
    >conf-desc
    计数器显示内容的解析函数，这是一个函数。第一个参数是当前显示的内容，返回一个数字表示解析后对应的数值。<br>必须和`formater`配置一起使用，互为逆向函数。<br>注意：若设置了`precision`需要解析小数点，否则会丢失精度。
    >conf-accept
    函数
    >conf-type
    Function
    >conf-default
    `value => value`
    ---
    #demo
    >tpl
    <div style="width:130px;">
        <ui-counter form-name="数字" :formater="(value => value + '%')" :parser="(value => +value.replace(/%$/, ''))"></ui-counter>
    </div>
    :::

    :::vue
    @name:precision
    ---
    #config
    >conf-desc
    数字的精度，若为`auto`则会取数字的最精确位数。若设置了具体的精度位数则在采用四舍五入。
    >conf-accept
    精度(小数点后位数)
    >conf-type
    String : 只能设为`auto`，表示自动精度<br>Number : 精度为小数点后几位
    >conf-default
    `'auto'`
    ---
    #demo
    >desc
    整数精度。
    >tpl
    <div style="width:130px;">
        <ui-counter form-name="数字" step="1.4" :precision="0"></ui-counter>
    </div>
    ---
    #demo
    >desc
    两位小数精度。
    >tpl
    <div style="width:130px;">
        <ui-counter form-name="数字" step="0.2" :precision="2"></ui-counter>
    </div>
    :::

    :::vue
    @name:controls-position
    ---
    #config
    >conf-desc
    按钮位置。
    >conf-accept
    `'both'`<br>`'right'`
    >conf-type
    String
    >conf-default
    `'both'`
    ---
    #demo
    >desc
    位于右侧的按钮。
    >tpl
    <div style="width:130px;">
        <ui-counter form-name="数字" controls-position="right"></ui-counter>
    </div>
    :::

    [[[方法]]]

    :::preset
    @name:formMethod
    @uikey:counter
    @value:5
    @defaultValue:5
    @wrapStyle:width:130px;
    :::

    :::vue
    @name:add([steps])
    ---
    #method
    >method-desc
    计数器增加指定数量的步长。
    >method-args
    |steps|YES|数值增加几个单位(单位步长)。|数字|`Number`<br>`Undefined`|`1`|
    >method-return
    当前组件VM实例。
    ---
    #demo
    >tpl
    <div style="width:130px;">
        <ui-counter form-name="数字" ref="demo1"></ui-counter>
        <br><br> 
        <ui-link js="morning.findVM('demo1').add();">增加1个单位步长</ui-link>
        <ui-link js="morning.findVM('demo1').add(5);">增加5个单位步长</ui-link>
    </div>
    :::

    :::vue
    @name:sub([steps])
    ---
    #method
    >method-desc
    计数器减少指定数量的步长。
    >method-args
    |steps|YES|数值减少几个单位(单位步长)。|数字|`Number`<br>`Undefined`|`1`|
    >method-return
    当前组件VM实例。
    ---
    #demo
    >tpl
    <div style="width:130px;">
        <ui-counter form-name="数字" ref="demo2"></ui-counter>
        <br><br> 
        <ui-link js="morning.findVM('demo2').sub();">减少1个单位步长</ui-link>
        <ui-link js="morning.findVM('demo2').sub(5);">减少5个单位步长</ui-link>
    </div>
    :::
    
    [[[事件]]]
    
    :::preset
    @name:formEvent
    @uiname:计数器
    @uikey:counter
    @value:5
    @wrapStyle:width:130px;
    :::

    [[[表单值]]]

    #### 值类型
    
    `Number` : 数字

    #### 值过滤

    - 所有包含非数字及小数点的字符串，会过滤非数字的字符，如果存在多个小数点取最后一个
    - 非数字类型会转换成数字，如转换后为`NaN`则取`0`
    - 超过`max`配置的数字，会设置为`max`
    - 低于`min`配置的数字，会设置为`min`

    #### 值格式

    数字

    #### 默认值

    `0`

    :::preset
    @name:formValue
    @uikey:counter
    @uiname:计数器
    @valueType:counter
    @wrapStyle:width:130px;
    :::

    [[[源码]]]

    <iframe src="/report/coverage/lib/components/counter/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>

    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                 from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'counter'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
