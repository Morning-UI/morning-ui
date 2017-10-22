<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 文本输入框 `<ui-textinput>`
    
    <doc-component-status page="textinput"></doc-component-status>
    
    [[[基础]]]

    定义文本输入框。

    #### 使用

    :::democode/html
    <div style="width:300px;">
        <ui-textinput form-name="姓名"></ui-textinput>
    </div>
    :::

    #### 支持前缀、后缀

    :::democode/html
    <div style="width:300px;">
        <ui-textinput form-name="姓名" prepend="@"></ui-textinput>
    </div>
    :::

    :::democode/html
    <div style="width:300px;">
        <ui-textinput form-name="百分比" append="%"></ui-textinput>
    </div>
    :::

    :::democode/html
    <div style="width:300px;">
        <ui-textinput form-name="价格" prepend="价格" append="元"></ui-textinput>
    </div>
    :::

    [[[声明]]]

    :::preset/html
    formStatement
    ---
    uikey:textinput
    statementDefaultValue:''
    :::
    
    [[[配置]]]

    :::preset/html
    formConfigTable
    ---
    |hide-value|表单的数值不可见，一般用于密码表单|`true`<br>`false`|Boolean|`false`|
    |prepend|表单前缀|任意字符串|String|`undefined`|
    |append|表单后缀|任意字符串|String|`undefined`|
    :::

    :::preset/html
    formConfigDemo
    ---
    uikey:textinput
    configDefaultValue:'默认值'
    :::

    #### hide-value
    
    隐藏数值后表单的值在界面中不可见。

    :::democode/html
    <div style="width:300px;">
        <ui-textinput hide-value default-value="this is password"></ui-textinput>
    </div>
    :::

    #### prepend

    :::democode/html
    <div style="width:300px;">
        <ui-textinput form-name="姓名" prepend="@"></ui-textinput>
    </div>
    :::

    #### append

    :::democode/html
    <div style="width:300px;">
        <ui-textinput form-name="百分比" append="%"></ui-textinput>
    </div>
    :::

    [[[方法]]]

    :::preset/html
    formMethod
    ---
    uikey:textinput
    methodValue:'Jim'
    methodDefaultValue:'Jim'
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
        <ui-textinput @focus="echo" ref="demo2"></ui-textinput>
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
        <ui-textinput @blur="echo" ref="demo3"></ui-textinput>
    </div>
    :::

    :::preset/html
    formEvent
    ---
    uikey:textinput
    eventValue:'Jim'
    :::

    [[[表单值]]]

    #### 值类型

    此表单返回值类型包含:

    - `String` : 字符串

    任何其他类型的数值，都会被尝试转换成这些类型。

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
            <ui-textinput ref="demoType{$valueType}"></ui-textinput>
        </div>
        <br>
        <ui-link js="window.morning.findVM('demoType{$valueType}').set({$&valueContent})">设置{$valueType}类型</ui-link>
        <ui-link js="alert(window.morning.findVM('demoType{$valueType}').get())">获取表单JSON值</ui-link>
    </div>
    <br>
    <br>
    :::

    [[[单元测试]]]

    <iframe src="/report/coverage/lib/components/textinput/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>

    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                 from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'textinput'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
