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

    #### 使用

    :::democode/html
    <div style="width:130px;">
        <ui-counter form-name="数字"></ui-counter>
    </div>
    :::

    #### 长按加速

    当你长按计数器的按钮时，会增加计数器变化的频率。

    [[[形态]]]

    :::preset/html
    formStatus
    ---
    uikey:counter
    statusDefaultValue:5
    statusDivStyle:width:130px;
    :::

    [[[配置]]]

    :::preset/html
    formConfigTable
    ---
    |[step](#step)|计数器每次变动的步长，用户点击增加或减少时最小的数值调整单位。|大于0的数字|Number|`1`|
    |[max](#max)|计数器的最大值。|数字|Number|`Infinity`|
    |[min](#min)|计数器的最小值。|数字|Number|`-Infinity`|
    |[formater](#formater)|计数器显示格式化，这是一个函数。第一个参数是当前的数值，返回一个字符串用于显示。<br>必须和`parser`配置一起使用，互为逆向函数。<br>注意：若设置了`precision`此函数的参数需要作为字符串处理，否则会丢失精度。|函数|Function|`value => value`|
    |[parser](#parser)|计数器显示内容的解析函数，这是一个函数。第一个参数是当前显示的内容，返回一个数字表示解析后对应的数值。<br>必须和`formater`配置一起使用，互为逆向函数。<br>注意：若设置了`precision`需要解析小数点，否则会丢失精度|函数|Function|`value => value`|
    |[precision](#precision)|数字的精度，若为`auto`则会取数字的最精确位数。若设置了具体的精度位数则在采用四舍五入。|精度(小数点后位数)|String : 只能设为`auto`，表示自动精度<br>Number : 精度为小数点后几位|`'auto'`|
    :::

    :::preset/html
    formConfigDemo
    ---
    uikey:counter
    configDefaultValue:5
    configDivStyle:width:130px;
    :::

    #### step

    :::democode/html
    <div style="width:130px;">
        <ui-counter form-name="数字" step="3"></ui-counter>
    </div>
    :::

    :::democode/html
    <div style="width:130px;">
        <ui-counter form-name="数字" step="1.25"></ui-counter>
    </div>
    :::

    #### max

    :::democode/html
    <div style="width:130px;">
        <ui-counter form-name="数字" max="5"></ui-counter>
    </div>
    :::

    #### min

    :::democode/html
    <div style="width:130px;">
        <ui-counter form-name="数字" min="-5"></ui-counter>
    </div>
    :::

    #### formater

    :::democode/html
    <div style="width:130px;">
        <ui-counter form-name="数字" :formater="(value => value + '%')" :parser="(value => +value.replace(/%$/, ''))"></ui-counter>
    </div>
    :::

    #### parser

    :::democode/html
    <div style="width:130px;">
        <ui-counter form-name="数字" :formater="(value => value + '%')" :parser="(value => +value.replace(/%$/, ''))"></ui-counter>
    </div>
    :::

    #### precision

    整数精度：

    :::democode/html
    <div style="width:130px;">
        <ui-counter form-name="数字" step="1.4" :precision="0"></ui-counter>
    </div>
    :::

    两位小数精度：

    :::democode/html
    <div style="width:130px;">
        <ui-counter form-name="数字" step="0.2" :precision="2"></ui-counter>
    </div>
    :::

    [[[方法]]]

    :::preset/html
    formMethod
    ---
    uikey:counter
    methodValue:5
    methodDefaultValue:5
    methodDivStyle:width:130px;
    :::
    
    #### add([steps])

    计数器增加指定数量的步长。
    
    |KEY|可选|描述|接受值|值类型|默认值|
    |-|-|-|-|-|-|
    |steps|YES|数值增加几个单位(单位步长)。|数字|`Number`<br>`Undefined`|`1`|

    :::democode/html
    <div style="width:130px;">
        <ui-counter form-name="数字" ref="demo1"></ui-counter>
        <br><br> 
        <ui-link js="morning.findVM('demo1').add();">增加1个单位步长</ui-link>
        <ui-link js="morning.findVM('demo1').add(5);">增加5个单位步长</ui-link>
    </div>
    :::
    
    #### sub([steps])

    计数器减少指定数量的步长。
    
    |KEY|可选|描述|接受值|值类型|默认值|
    |-|-|-|-|-|-|
    |steps|YES|数值减少几个单位(单位步长)。|数字|`Number`<br>`Undefined`|`1`|

    :::democode/html
    <div style="width:130px;">
        <ui-counter form-name="数字" ref="demo2"></ui-counter>
        <br><br> 
        <ui-link js="morning.findVM('demo2').sub();">减少1个单位步长</ui-link>
        <ui-link js="morning.findVM('demo2').sub(5);">减少5个单位步长</ui-link>
    </div>
    :::

    [[[事件]]]

    :::preset/html
    formEvent
    ---
    uikey:counter
    eventValue:5
    eventDivStyle:width:130px;
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

    #### 输入/输出示例

    :::repeat/html
    formValueType:counter
    ---
    <div>
        <p>{$valueType}类型</p>
        <div style="width:130px;">
            <ui-counter ref="demoType{$valueType}" form-name="计数器"></ui-counter>
        </div>
        <br>
        <ui-link js="window.morning.findVM('demoType{$valueType}').set({$&valueContent})">设置{$valueType}类型</ui-link>
        <ui-link js="alert(window.morning.findVM('demoType{$valueType}').getJson())">获取表单JSON值</ui-link>
    </div>
    <br>
    <br>
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
