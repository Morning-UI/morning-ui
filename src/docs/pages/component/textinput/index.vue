<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 文本输入框 `<ui-textinput>`
    
    <doc-component-status page="textinput"></doc-component-status>
    
    [[[开始]]]

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

    [[[形态]]]

    :::preset/html
    formStatus
    ---
    uikey:textinput
    statusDefaultValue:''
    :::
    
    [[[配置]]]

    :::preset/html
    formConfigTable
    ---
    |[inside-name](#inside-name)|在组件内显示的名称，和`form-name`互为补充。|名称|String|`''`|
    |[hide-value](#hide-value)|表单的数值不可见，一般用于密码表单|`true`<br>`false`|Boolean|`false`|
    |[prepend](#prepend)|表单前缀|任意字符串(支持HTML)|String|`undefined`|
    |[append](#append)|表单后缀|任意字符串(支持HTML)|String|`undefined`|
    |[append-type](#append-type)|表单前后缀内容的展现类型|`'block'`：块状<br>`'inline'`：行内|String|`'block'`|
    |[align](#align)|内容对齐方式|`'left'` : 左对齐<br>`'center'` : 居中对齐<br>`'right'` : 右对齐|String|`'left'`|
    |[maxlength](#maxlength)|输入内容的最大长度|最大长度|Number|`Infinity`|
    :::

    :::preset/html
    formConfigDemo
    ---
    uikey:textinput
    configDefaultValue:'默认值'
    :::

    #### inside-name

    :::democode/html
    <div style="width:300px">
        <ui-textinput inside-name="姓名"></ui-textinput>
    </div>
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

    #### append-type

    行内类型的前后缀：

    :::democode/html
    <div style="width:180px;">
        <ui-textinput form-name="当天消费" prepend="支出"  append="人名币" append-type="inline"></ui-textinput>
    </div>
    :::

    #### align

    :::democode/html
    <div style="width:300px;">
        <ui-textinput form-name="内容居中对齐" align="center"></ui-textinput>
    </div>
    :::

    :::democode/html
    <div style="width:300px;">
        <ui-textinput form-name="内容右对齐" align="right"></ui-textinput>
    </div>
    :::

    #### maxlength

    :::democode/html
    <div style="width:300px;">
        <ui-textinput form-name="姓名" :maxlength="10"></ui-textinput>
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
            <ui-textinput ref="demoType{$valueType}"></ui-textinput>
        </div>
        <br>
        <ui-link js="window.morning.findVM('demoType{$valueType}').set({$&valueContent})">设置{$valueType}类型</ui-link>
        <ui-link js="alert(window.morning.findVM('demoType{$valueType}').getJson())">获取表单JSON值</ui-link>
    </div>
    <br>
    <br>
    :::

    [[[源码]]]

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
