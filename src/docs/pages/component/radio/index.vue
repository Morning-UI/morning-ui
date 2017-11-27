<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 单选框组 `<ui-radio>`
    
    <doc-component-status page="radio"></doc-component-status>
    
    [[[开始]]]

    定义单选框组，单选框组只能单选，若需要多选请使用`ui-checkbox`。

    #### 使用

    :::democode/html
    <div style="width:300px;">
        <ui-radio form-name="姓名" :list="{Tim:'Tim Boelaars',Andrew:'Andrew Colin Beck',Victor:'Victor Erixon'}"></ui-radio>
    </div>
    :::

    [[[形态]]]

    :::preset/html
    formStatusWithStyle
    ---
    uikey:radio
    statusDefaultValue:'Tim'
    statusMoreAttr::list="{Tim:'Tim Boelaars',Andrew:'Andrew Colin Beck',Victor:'Victor Erixon'}"
    :::

    [[[配置]]]

    :::preset/html
    formConfigTable
    ---
    |accept-html|项目的的名称可以使用HTML|`true`<br>`false`|Boolean|`false`|
    |list|可选项目列表|可选项目列表的对象，键名是key，键值是name用于显示|Object|`{}`|
    :::

    :::preset/html
    formConfigDemo
    ---
    uikey:radio
    configDefaultValue:'Tim'
    configMoreAttr::list="{Tim:'Tim Boelaars',Andrew:'Andrew Colin Beck',Victor:'Victor Erixon'}"
    :::
    
    #### accept-html

    如果让`ui-radio`的显示文本，渲染成HTML，而不是字符串。可以设置`accept-html`。

    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
        data : function () {
            return {
                list : {
                    Red : '<span style="color:red;">我是红色span</span>',
                    Green : '<span style="color:green;">我是绿色span</span>'
                }
            }
        }
    });
    ---
    <div style="width:300px;">
        <ui-radio
            form-name="姓名"
            accept-html
            :list="list"
        ></ui-radio>
    </div>
    :::

    #### list

    :::democode/html
    <div style="width:300px;">
        <ui-radio form-name="姓名" :list="{Tim:'Tim Boelaars',Andrew:'Andrew Colin Beck',Victor:'Victor Erixon'}"></ui-radio>
    </div>
    :::

    [[[方法]]]

    :::preset/html
    formMethod
    ---
    uikey:radio
    methodValue:'Tim'
    methodDefaultValue:'Tim'
    methodMoreAttr::list="{Tim:'Tim Boelaars',Andrew:'Andrew Colin Beck',Victor:'Victor Erixon'}"
    :::
    
    #### toggle(key)

    选中单个选项。
    
    |KEY|可选|描述|接受值|值类型|默认值|
    |-|-|-|-|-|-|
    |key|NO|需要选中选项的键值|键值字符串|`String`|`undefined`|

    :::democode/html
    <div style="width:300px;">
        <ui-radio ref="demo2" form-name="姓名" :list="{Tim:'Tim Boelaars',Andrew:'Andrew Colin Beck',Victor:'Victor Erixon'}"></ui-radio>
    </div>
    <br>
    <ui-link js="morning.findVM('demo2').toggle('Tim');">选中Tim</ui-link>
    <ui-link js="morning.findVM('demo2').toggle('Andrew');">选中Andrew</ui-link>
    :::

    [[[事件]]]

    :::preset/html
    formEvent
    ---
    uikey:radio
    eventValue:'Tim'
    eventMoreAttr::list="{Tim:'Tim Boelaars',Andrew:'Andrew Colin Beck',Victor:'Victor Erixon'}"
    :::

    [[[表单值]]]

    #### 值类型
    
    `String` : 字符串(键值列表`list`中的一项)

    #### 值过滤

    - 所有不支持的值类型，都会被尝试转换成`undefined`。
    - 若数不在键值列表(`list`)中，会被转换成`undefined`。

    #### 值格式

    选中项目的键值，或是未选中(`undefined`)。

    #### 默认值

    `undefined`

    #### 输入/输出示例

    :::repeat/html
    formValueType
    ---
    <div>
        <p>{$valueType}类型</p>
        <div style="width:300px;">
            <ui-radio ref="demoType{$valueType}" :list="{Jim:'Jim Boelaars',Andrew:'Andrew Colin Beck',Victor:'Victor Erixon'}"></ui-radio>
        </div>
        <br>
        <ui-link js="window.morning.findVM('demoType{$valueType}').set({$&valueContent})">设置{$valueType}类型</ui-link>
        <ui-link js="alert(window.morning.findVM('demoType{$valueType}').getJson())">获取表单JSON值</ui-link>
    </div>
    <br>
    <br>
    :::

    [[[源码]]]

    <iframe src="/report/coverage/lib/components/radio/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>

    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                 from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'radio'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
