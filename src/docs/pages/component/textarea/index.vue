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

    :::vue
    @name:使用
    ---
    #demo
    >tpl
    <div style="width:300px;">
        <ui-textarea form-name="姓名"></ui-textarea>
    </div>
    :::

    [[[形态]]]

    :::preset
    @name:formStatusWithSize
    @uikey:textarea
    @defaultValue:'默认文本'
    :::

    [[[配置]]]

    :::preset
    @name:formConfig
    @uikey:textarea
    @defaultValue:'默认文本'
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
        <ui-textarea inside-name="段落"></ui-textarea>
    </div>
    :::

    :::vue
    @name:rows
    ---
    #config
    >conf-desc
    段落输入框的默认高度对应的行数，若设置了`max-rows`则此数值不会超过`max-rows`。
    >conf-accept
    大于0的数字
    >conf-type
    Number
    >conf-default
    `4`
    ---
    #demo
    >tpl
    <div style="width:300px;">
        <ui-textarea :rows="8"></ui-textarea>
    </div>
    :::

    :::vue
    @name:auto-size
    ---
    #config
    >conf-desc
    段落内容超过输入框并将出现滚动条时，自动增加输入框的高度。当内容减少时，自动减少输入框高度。最小高度将维持在`rows`配置设置的高度(最小为2行的高度)，最大高度不超过`max-rows`。
    >conf-accept
    `true`<br>`false`
    >conf-type
    Boolean
    >conf-default
    `false`
    ---
    #demo
    >desc
    尝试输入5行内容，段落输入框会自动增加高度。
    >tpl
    <div style="width:300px;">
        <ui-textarea auto-size></ui-textarea>
    </div>
    :::

    :::vue
    @name:max-rows
    ---
    #config
    >conf-desc
    段落内容的最大高度对应的行数。若同时设置了`auto-size`配置，则超过`max-rows`后会出现滚动条。
    >conf-accept
    大于0的数字
    >conf-type
    Number
    >conf-default
    `Infinity`
    ---
    #demo
    >desc
    超过8行后会出现滚动条。
    >tpl
    <div style="width:300px;">
        <ui-textarea auto-size :max-rows="8"></ui-textarea>
    </div>
    ---
    #demo
    >desc
    同时设置最小3行，最大6行。
    >tpl
    <div style="width:300px;">
        <ui-textarea auto-size :rows="3" :max-rows="6"></ui-textarea>
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
        <ui-textarea :maxlength="50"></ui-textarea>
    </div>
    :::

    :::vue
    @name:resize
    ---
    #config
    >conf-desc
    段落输入框是否可以通过拖拽调整大小。
    >conf-accept
    `'none'` : 无法调整<br>`'both'` : 可调整<br>`'vertical'` : 仅调整高度<br>`'horizontal'` : 仅调整宽度
    >conf-type
    String
    >conf-default
    `'none'`
    ---
    #demo
    >desc
    段落输入框可调整大小。
    >tpl
    <div style="width:300px;">
        <ui-textarea :maxlength="50" resize="both"></ui-textarea>
    </div>
    ---
    #demo
    >desc
    段落输入框可调整高度。
    >tpl
    <div style="width:300px;">
        <ui-textarea :maxlength="50" resize="vertical"></ui-textarea>
    </div>
    :::

    [[[方法]]]

    :::preset
    @name:formMethod
    @uikey:textarea
    @value:'Jim'
    @defaultValue:'Jim'
    :::

    [[[事件]]]

    :::preset
    @name:formEvent
    @uiname:段落输入框
    @uikey:textarea
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
        <ui-textarea @focus="echo" ref="demo2"></ui-textarea>
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
        <ui-textarea @blur="echo" ref="demo3"></ui-textarea>
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
    @uikey:textarea
    @uiname:段落输入框
    @valueType:default
    @wrapStyle:width:300px;
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
