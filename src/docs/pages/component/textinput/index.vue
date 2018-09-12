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

    :::vue
    @name:使用
    ---
    #demo
    >tpl
    <div style="width:300px;">
        <ui-textinput form-name="姓名"></ui-textinput>
    </div>
    :::

    :::vue
    @name:支持前缀、后缀
    ---
    #demo
    >tpl
    <div style="width:300px;">
        <ui-textinput form-name="姓名" prepend="@"></ui-textinput>
    </div>
    ---
    #demo
    >tpl
    <div style="width:300px;">
        <ui-textinput form-name="百分比" append="%"></ui-textinput>
    </div>
    ---
    #demo
    >tpl
    <div style="width:300px;">
        <ui-textinput form-name="价格" prepend="价格" append="元"></ui-textinput>
    </div>
    :::

    [[[形态]]]

    :::preset
    @name:formStatus
    @uikey:textinput
    @defaultValue:''
    :::

    [[[配置]]]

    :::preset
    @name:formConfig
    @uikey:textinput
    @defaultValue:''
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
    <div style="width:300px">
        <ui-textinput inside-name="姓名"></ui-textinput>
    </div>
    :::

    :::vue
    @name:hide-value
    ---
    #config
    >conf-desc
    表单的数值不可见，一般用于密码表单。
    >conf-accept
    `true`<br>`false`
    >conf-type
    Boolean
    >conf-default
    `false`
    ---
    #demo
    >desc
    隐藏数值后表单的值在界面中不可见。
    >tpl
    <div style="width:300px;">
        <ui-textinput hide-value default-value="this is password"></ui-textinput>
    </div>
    :::

    :::vue
    @name:prepend
    ---
    #config
    >conf-desc
    表单前缀。
    >conf-accept
    任意字符串(支持HTML)
    >conf-type
    String
    >conf-default
    `undefined`
    ---
    #demo
    >tpl
    <div style="width:300px;">
        <ui-textinput form-name="姓名" prepend="@"></ui-textinput>
    </div>
    :::

    :::vue
    @name:append
    ---
    #config
    >conf-desc
    表单后缀。
    >conf-accept
    任意字符串(支持HTML)
    >conf-type
    String
    >conf-default
    `undefined`
    ---
    #demo
    >tpl
    <div style="width:300px;">
        <ui-textinput form-name="百分比" append="%"></ui-textinput>
    </div>
    :::

    :::vue
    @name:append-type
    ---
    #config
    >conf-desc
    表单前后缀内容的展现类型。
    >conf-accept
    `'block'`：块状<br>`'inline'`：行内
    >conf-type
    String
    >conf-default
    `'block'`
    ---
    #demo
    >desc
    行内类型的前后缀。
    >tpl
    <div style="width:180px;">
        <ui-textinput form-name="当天消费" prepend="支出"  append="人名币" append-type="inline"></ui-textinput>
    </div>
    :::

    :::vue
    @name:align
    ---
    #config
    >conf-desc
    内容对齐方式。
    >conf-accept
    `'left'` : 左对齐<br>`'center'` : 居中对齐<br>`'right'` : 右对齐
    >conf-type
    String
    >conf-default
    `'left'`
    ---
    #demo
    >tpl
    <div style="width:300px;">
        <ui-textinput form-name="内容居中对齐" align="center"></ui-textinput>
    </div>
    ---
    #demo
    >tpl
    <div style="width:300px;">
        <ui-textinput form-name="内容右对齐" align="right"></ui-textinput>
    </div>
    :::

    :::vue
    @name:maxlength
    ---
    #config
    >conf-desc
    输入内容的最大长度。
    >conf-accept
    最大长度
    >conf-type
    Number
    >conf-default
    `Infinity`
    ---
    #demo
    >tpl
    <div style="width:300px;">
        <ui-textinput form-name="姓名" :maxlength="10"></ui-textinput>
    </div>
    :::

    [[[方法]]]

    :::preset
    @name:formMethod
    @uikey:textinput
    @value:'Jim'
    @defaultValue:'Jim'
    :::

    [[[事件]]]

    :::preset
    @name:formEvent
    @uiname:文本输入框
    @uikey:textinput
    @value:'Jim'
    @wrapStyle:width:300px;
    :::
    
    :::vue
    @name:focus
    ---
    #event
    >event-desc
    当表单聚焦后触发。
    ---
    #demo
    >tpl
    <div style="width:300px;">
        <ui-textinput @focus="echo" ref="demo2"></ui-textinput>
    </div>
    >script
    {
        methods : {
            echo : function () {
                console.log('demo2.console1', 'focus event!');
            }
        }
    }
    :::

    :::vue
    @name:blur
    ---
    #event
    >event-desc
    当表单失焦后触发。
    ---
    #demo
    >tpl
    <div style="width:300px;">
        <ui-textinput @blur="echo" ref="demo3"></ui-textinput>
    </div>
    >script
    {
        methods : {
            echo : function () {
                console.log('demo3.console1', 'blur event!');
            }
        }
    }
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

    :::preset
    @name:formValue
    @uikey:textinput
    @uiname:文本输入框
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
