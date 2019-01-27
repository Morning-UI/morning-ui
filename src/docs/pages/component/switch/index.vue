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

    :::vue
    @name:使用
    ---
    #demo
    >tpl
    <div style="width:300px;">
        <ui-switch form-name="姓名"></ui-switch>
    </div>
    :::

    [[[形态]]]

    :::preset
    @name:formStatus
    @uikey:switch
    @defaultValue:true
    @attrs:open-mark="开" close-mark="关"
    :::

    [[[配置]]]

    :::preset
    @name:formConfig
    @uikey:switch
    @defaultValue:true
    :::

    :::vue
    @name:open-note
    ---
    #config
    >conf-desc
    开关开启的备注，显示开关的右侧。
    >conf-accept
    备注(支持HTML)
    >conf-type
    String
    >conf-default
    `''`
    ---
    #demo
    >tpl
    <div style="width:300px;">
        <ui-switch form-name="姓名" open-note="开启"></ui-switch>
    </div>
    ---
    #demo
    >desc
    `open-note`和`close-note`一起使用。
    >tpl
    <div style="width:300px;">
        <ui-switch form-name="姓名" close-note="关闭" open-note="开启"></ui-switch>
    </div>
    ---
    #demo
    >desc
    支持HTML。
    >tpl
    <div style="width:300px;">
        <ui-switch form-name="姓名" close-note="<span style='color:red'>关闭</span>" open-note="<span style='color:green'>开启</span>"></ui-switch>
    </div>
    :::

    :::vue
    @name:close-note
    ---
    #config
    >conf-desc
    开关关闭的备注，显示的开发的左侧。
    >conf-accept
    备注(支持HTML)
    >conf-type
    String
    >conf-default
    `''`
    ---
    #demo
    >tpl
    <div style="width:300px;">
        <ui-switch form-note="姓名" close-note="关闭"></ui-switch>
    </div>
    :::

    :::vue
    @name:open-mark
    ---
    #config
    >conf-desc
    开关开启的标记，显示开关的内部左侧，一般标记比较短只能容纳一个字符(比如icon)。
    >conf-accept
    标记内容(支持HTML)
    >conf-type
    String
    >conf-default
    `''`
    ---
    #demo
    >tpl
    <div style="width:300px;">
        <ui-switch form-note="姓名" open-mark="开"></ui-switch>
    </div>
    ---
    #demo
    >desc
    `open-mark`和`close-mark`一起使用。
    >tpl
    <div style="width:300px;">
        <ui-switch form-note="姓名" open-mark="开" close-mark="关"></ui-switch>
    </div>
    ---
    #demo
    >desc
    使用icon。
    >tpl
    <div style="width:300px;">
        <ui-switch form-note="姓名" open-mark="<i class='mo-icon mo-icon-check'>" close-mark="<i class='mo-icon mo-icon-close'>"></ui-switch>
    </div>
    :::

    :::vue
    @name:close-mark
    ---
    #config
    >conf-desc
    开关开启的标记，显示开关的内部右侧，一般标记比较短只能容纳一个字符(比如icon)。
    >conf-accept
    标记内容(支持HTML)
    >conf-type
    String
    >conf-default
    `''`
    ---
    #demo
    >tpl
    <div style="width:300px;">
        <ui-switch form-note="姓名" close-mark="关"></ui-switch>
    </div>
    :::

    [[[方法]]]

    :::preset
    @name:formMethod
    @uikey:switch
    @value:true
    @defaultValue:true
    :::

    :::vue
    @name:toggle([open])
    ---
    #method
    >method-desc
    切换下拉按钮组是否显示。
    >method-args
    |open|YES|指定开关切换到开启或关闭，若不设置则切换到相反的状态。|`undefined`<br>`true`<br>`false`|`Undefined`<br>`Boolean`|`undefined`|
    >method-return
    当前组件VM实例。
    ---
    #demo
    >tpl
    <div style="width:300px;">
        <ui-switch ref="demo1" form-name="姓名"></ui-switch>
        <br><br> 
        <ui-link js="morning.findVM('demo1').toggle();">切换相反状态</ui-link>
        <ui-link js="morning.findVM('demo1').toggle(true);">切换至开启</ui-link>
        <ui-link js="morning.findVM('demo1').toggle(false);">切换至关闭</ui-link>
    </div>
    :::

    [[[事件]]]

    :::preset
    @name:formEvent
    @uiname:开关
    @uikey:switch
    @value:true
    @wrapStyle:width:300px;
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

    :::preset
    @name:formValue
    @uikey:switch
    @uiname:开关
    @valueType:default
    @wrapStyle:width:300px;
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
