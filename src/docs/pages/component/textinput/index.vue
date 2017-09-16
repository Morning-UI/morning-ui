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

    ````html
    <div style="width:300px;">
        <ui-textinput form-name="姓名"></ui-textinput>
    </div>
    ````

    #### 支持前缀、后缀

    ````html
    <div style="width:300px;">
        <ui-textinput form-name="姓名" prepend="@"></ui-textinput>
    </div>
    ````

    ````html
    <div style="width:300px;">
        <ui-textinput form-name="百分比" append="%"></ui-textinput>
    </div>
    ````

    ````html
    <div style="width:300px;">
        <ui-textinput form-name="价格" prepend="价格" append="元"></ui-textinput>
    </div>
    ````

    [[[声明]]]

    ````import
    @id:formStatement
    @uikey:textinput
    ````
    
    [[[配置]]]

    |KEY|描述|接受值|值类型|默认值|
    |-|-|-|
    ````import
    @id:formConfigTable
    ````
    |hide-value|表单的数值不可见，一般用于密码表单|`true`<br>`false`|Boolean|`false`|
    |prepend|表单前缀|任意字符串|String|`undefined`|
    |append|表单后缀|任意字符串|String|`undefined`|

    ````import
    @id:formConfigDemo
    @uikey:textinput
    ````

    #### hide-value
    
    隐藏数值后表单的值在界面中不可见。

    ````html
    <div style="width:300px;">
        <ui-textinput hide-value default-value="this is password"></ui-textinput>
    </div>
    ````

    #### prepend

    ````html
    <div style="width:300px;">
        <ui-textinput form-name="姓名" prepend="@"></ui-textinput>
    </div>
    ````

    #### append

    ````html
    <div style="width:300px;">
        <ui-textinput form-name="百分比" append="%"></ui-textinput>
    </div>
    ````

    [[[方法]]]

    ````import
    @id:formMethod
    @uikey:textinput
    ````

    [[[事件]]]

    ````import
    @id:formEvent
    @uikey:textinput
    ````

    [[[表单值]]]

    #### 值类型

    此表单返回值类型包含:

    - `String` : 字符串

    任何其他类型的数值，都会被尝试转换成这些类型。

    #### 值格式

    内容值字符串。

    #### 默认值

    默认值为空字符串：

    `''`

    #### 输入/输出示例

    ````html
    @formValueType
    <div>
        <p>{$valueType}类型</p>
        <div style="width:300px;">
            <ui-textinput ref="demoType{$valueType}"></ui-textinput>
        </div>
        <br>
        <a href="javascript:;" onclick="window.morning.findVM('demoType{$valueType}').set({$&valueContent})">设置{$valueType}类型</a>
        <a href="javascript:;" onclick="alert(window.morning.findVM('demoType{$valueType}').get())">获取表单JSON值</a>
    </div>
    <br>
    <br>
    ````

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
