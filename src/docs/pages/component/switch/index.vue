<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 开关 `<ui-switch>`
    
    <doc-component-status page="switch"></doc-component-status>
    
    [[[开始]]]

    定义开关，开关只存在布尔状态。

    #### 使用

    :::democode/html
    <div style="width:300px;">
        <ui-switch form-name="姓名"></ui-switch>
    </div>
    :::

    [[[形态]]]

    :::preset/html
    formStatusWithStyle
    ---
    uikey:switch
    statusDefaultValue:true
    :::

    [[[配置]]]

    :::preset/html
    formConfigTable
    ---
    |auto-hide-name|当表档名为空时自动隐藏表单名部分|`true`<br>`false`|Boolean|`false`|
    :::

    :::preset/html
    formConfigDemo
    ---
    uikey:switch
    configDefaultValue:true
    :::

    #### auto-hide-name

    第二个组件表单名为空，名字部分被隐藏。

    :::democode/html
    <div style="width:300px;">
        <ui-switch form-name="姓名" auto-hide-name></ui-switch>
        <ui-switch form-name="" auto-hide-name></ui-switch>
    </div>
    :::

    [[[方法]]]

    :::preset/html
    formMethod
    ---
    uikey:switch
    methodValue:true
    methodDefaultValue:true
    :::

    #### toggle([open])

    切换下拉按钮组是否显示。
    
    |KEY|可选|描述|接受值|值类型|默认值|
    |-|-|-|-|-|-|
    |open|YES|指定开关切换到开启或关闭，若不设置则切换到相反的状态。|`undefined`<br>`true`<br>`false`|`Undefined`<br>`Boolean`|`undefined`|

    :::democode/html
    <div style="width:300px;">
        <ui-switch ref="demo1" form-name="姓名"></ui-switch>
        <br><br> 
        <ui-link js="morning.findVM('demo1').toggle();">切换相反状态</ui-link>
        <ui-link js="morning.findVM('demo1').toggle(true);">切换至开启</ui-link>
        <ui-link js="morning.findVM('demo1').toggle(false);">切换至关闭</ui-link>
    </div>
    :::

    [[[事件]]]

    :::preset/html
    formEvent
    ---
    uikey:switch
    eventValue:true
    :::

    [[[表单值]]]

    #### 值类型
    
    `Boolean` : 布尔值

    #### 值过滤

    - 所有不支持的值类型，都会被尝试转换成布尔值，使用`!!value`。

    #### 值格式

    `true`或`false`

    #### 默认值

    `false`

    #### 输入/输出示例

    :::repeat/html
    formValueType
    ---
    <div>
        <p>{$valueType}类型</p>
        <div style="width:300px;">
            <ui-switch ref="demoType{$valueType}" form-name="开关"></ui-switch>
        </div>
        <br>
        <ui-link js="window.morning.findVM('demoType{$valueType}').set({$&valueContent})">设置{$valueType}类型</ui-link>
        <ui-link js="alert(window.morning.findVM('demoType{$valueType}').getJson())">获取表单JSON值</ui-link>
    </div>
    <br>
    <br>
    :::

    [[[源码]]]

    <iframe src="/report/coverage/lib/components/switch/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>

    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                 from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'switch'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
