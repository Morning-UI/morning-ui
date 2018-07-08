<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 计数器 `<ui-counter>`
    
    <doc-component-status page="counter"></doc-component-status>
    
    [[[开始]]]

    定义计数器。

    #### 使用

    :::democode/html
    <div style="width:120px;">
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
    statusDivStyle:width:120px;
    :::

    [[[配置]]]

    :::preset/html
    formConfigTable
    ---
    |[step](#step)|计数器每次变动的步长，用户点击增加或减少时最小的数值调整单位。|大于0的数字|Number|`1`|
    |[max](#max)|计数器的最大值。|数字|Number|`Infinity`|
    |[min](#min)|计数器的最小值。|数字|Number|`-Infinity`|
    |[formater](#formater)|计数器显示格式化，这是一个函数。第一个参数是当前的数值，返回一个字符串用于显示。|函数|Function|`value => value`|
    |[precision](#precision)|显示数字的精度，若为`auto`则会取数字的最精确位数。若设置了具体的精度位数则在采用四舍五入。|精度(小数点后位数)|String : 只能设为`auto`，表示自动精度<br>Number : 精度为小数点后几位|`'auto'`|
    :::

    :::preset/html
    formConfigDemo
    ---
    uikey:counter
    configDefaultValue:5
    configDivStyle:width:120px;
    :::

    #### step

    :::democode/html
    <div style="width:120px;">
        <ui-counter form-name="数字" step="3"></ui-counter>
    </div>
    :::

    :::democode/html
    <div style="width:120px;">
        <ui-counter form-name="数字" step="1.25"></ui-counter>
    </div>
    :::

    #### max

    :::democode/html
    <div style="width:120px;">
        <ui-counter form-name="数字" max="5"></ui-counter>
    </div>
    :::

    #### min

    :::democode/html
    <div style="width:120px;">
        <ui-counter form-name="数字" min="-5"></ui-counter>
    </div>
    :::

    #### formater

    :::democode/html
    <div style="width:120px;">
        <ui-counter form-name="数字" :formater="(value => value + '%')"></ui-counter>
    </div>
    :::

    #### precision

    显示整数的精度：

    :::democode/html
    <div style="width:120px;">
        <ui-counter form-name="数字" step="1.4" :precision="0"></ui-counter>
    </div>
    :::

    显示一位小数精度：

    :::democode/html
    <div style="width:120px;">
        <ui-counter form-name="数字" step="0.04" :precision="1"></ui-counter>
    </div>
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
