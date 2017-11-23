<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 段落输入框 `<ui-textarea>`
    
    <doc-component-status page="textarea"></doc-component-status>
    
    [[[开始]]]

    定义段落输入框。

    #### 使用

    :::democode/html
    <div style="width:300px;">
        <ui-textarea form-name="姓名"></ui-textarea>
    </div>
    :::

    [[[形态]]]

    :::preset/html
    formStatus
    ---
    uikey:textarea
    statusDefaultValue:''
    :::
    
    [[[配置]]]

    :::preset/html
    formConfigTable
    ---
    |rows|段落输入框的高度对应的行数|大于0的数字|Number|`4`|
    :::

    :::preset/html
    formConfigDemo
    ---
    uikey:textarea
    configDefaultValue:'默认值'
    :::

    #### rows

    :::democode/html
    <div style="width:300px;">
        <ui-textarea :rows="8"></ui-textarea>
    </div>
    :::

    [[[方法]]]

    :::preset/html
    formMethod
    ---
    uikey:textarea
    methodValue:'Jim'
    methodDefaultValue:'Jim'
    :::

    #### setRows(num)

    增加或减少表单的行数。

    |KEY|可选|描述|接受值|值类型|默认值|
    |-|-|-|-|-|-|
    |num|NO|指定行数，或增加/减少指定行数|以加号开头的字符串:增加指定行数<br>以减号开头的字符串:减少指定行数<br>数字:设置为指定行数|String<br>Number|`undefined`|

    :::democode/html
    <div style="width:300px;">
        <ui-textarea ref="demo1"></ui-textarea>
        <br>
        <ui-link js="window.morning.findVM('demo1').setRows(2)">设置为2行</ui-link>
        <ui-link js="window.morning.findVM('demo1').setRows('+1')">增加1行</ui-link>
        <ui-link js="window.morning.findVM('demo1').setRows('-1')">减少1行</ui-link>
    </div>
    :::

    [[[事件]]]

    #### focus

    当表单聚焦后触发。
    
    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
        methods : {
            echo : function () {
                console.log('demo2.console1', 'focus event!');
            }
        }
    });
    ---
    <div style="width:300px;">
        <ui-textarea @focus="echo" ref="demo2"></ui-textarea>
    </div>
    :::

    #### blur

    当表单失焦后触发。
    
    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
        methods : {
            echo : function () {
                console.log('demo3.console1', 'blur event!');
            }
        }
    });
    ---
    <div style="width:300px;">
        <ui-textarea @blur="echo" ref="demo3"></ui-textarea>
    </div>
    :::

    :::preset/html
    formEvent
    ---
    uikey:textarea
    eventValue:'Jim'
    :::

    [[[表单值]]]

    #### 值类型
    
    `String` : 字符串

    #### 值过滤

    - 如果数值的类型是对象，会被转换成JSON序列化字符串。
    - 非对象且不支持的值类型，都会被尝试转换成字符串，使用`String(value)`。

    #### 值格式

    内容值字符串。

    #### 默认值

    `''`

    #### 输入/输出示例

    :::repeat/html
    formValueType
    ---
    <div>
        <p>{$valueType}类型</p>
        <div style="width:300px;">
            <ui-textarea ref="demoType{$valueType}"></ui-textarea>
        </div>
        <br>
        <ui-link js="window.morning.findVM('demoType{$valueType}').set({$&valueContent})">设置{$valueType}类型</ui-link>
        <ui-link js="alert(window.morning.findVM('demoType{$valueType}').getJson())">获取表单JSON值</ui-link>
    </div>
    <br>
    <br>
    :::

    [[[源码]]]

    <iframe src="/report/coverage/lib/components/textarea/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>

    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                 from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'textarea'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
