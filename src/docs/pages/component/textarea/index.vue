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
    |[inside-name](#inside-name)|在组件内显示的名称，和`form-name`互为补充。|名称|String|`''`|
    |[rows](#rows)|段落输入框的默认高度对应的行数，若设置了`max-rows`则此数值不会超过`max-rows`。|大于0的数字|Number|`4`|
    |[auto-size](#auto-size)|段落内容超过输入框并将出现滚动条时，自动增加输入框的高度。当内容减少时，自动减少输入框高度。最小高度将维持在`rows`配置设置的高度(最小为2行的高度)，最大高度不超过`max-rows`。|`true`<br>`false`|Boolean|`false`|
    |[max-rows](#max-rows)|段落内容的最大高度对应的行数。若同时设置了`auto-size`配置，则超过`max-rows`后会出现滚动条。|大于0的数字|Number|`Infinity`|
    |[maxlength](#maxlength)|输入内容的最大长度|最大长度|Number|`Infinity`|
    :::

    :::preset/html
    formConfigDemo
    ---
    uikey:textarea
    configDefaultValue:'默认值'
    :::

    #### inside-name

    :::democode/html
    <div style="width:300px">
        <ui-textarea inside-name="段落"></ui-textarea>
    </div>
    :::

    #### rows

    :::democode/html
    <div style="width:300px;">
        <ui-textarea :rows="8"></ui-textarea>
    </div>
    :::

    #### auto-size

    尝试输入5行内容，段落输入框会自动增加高度：

    :::democode/html
    <div style="width:300px;">
        <ui-textarea auto-size></ui-textarea>
    </div>
    :::

    #### max-rows

    超过8行后会出现滚动条：

    :::democode/html
    <div style="width:300px;">
        <ui-textarea auto-size :max-rows="8"></ui-textarea>
    </div>
    :::

    同时设置最小3行，最大6行：

    :::democode/html
    <div style="width:300px;">
        <ui-textarea auto-size :rows="3" :max-rows="6"></ui-textarea>
    </div>
    :::

    #### maxlength

    :::democode/html
    <div style="width:300px;">
        <ui-textarea :maxlength="50"></ui-textarea>
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
