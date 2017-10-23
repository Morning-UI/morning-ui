<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 复选框组 `<ui-checkbox>`
    
    <doc-component-status page="checkbox"></doc-component-status>
    
    [[[开始]]]

    定义复选框组，复选框组可以多选，若需要单选请使用`ui-radio`。

    #### 使用

    :::democode/html
    <div style="width:300px;">
        <ui-checkbox form-name="姓名" :list="{Tim:'Tim Boelaars',Andrew:'Andrew Colin Beck',Victor:'Victor Erixon'}"></ui-checkbox>
    </div>
    :::

    [[[声明]]]

    :::preset/html
    formStatementWithStyle
    ---
    uikey:checkbox
    statementDefaultValue:['Tim']
    statementMoreAttr::list="{Tim:'Tim Boelaars',Andrew:'Andrew Colin Beck',Victor:'Victor Erixon'}"
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
    uikey:checkbox
    configDefaultValue:['Tim']
    configMoreAttr::list="{Tim:'Tim Boelaars',Andrew:'Andrew Colin Beck',Victor:'Victor Erixon'}"
    :::
    
    #### accept-html

    如果让`ui-checkbox`的显示文本，渲染成HTML，而不是字符串。可以设置`accept-html`。
    
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
        <ui-checkbox
            form-name="姓名"
            accept-html
            :list="list"
        ></ui-checkbox>
    </div>
    :::
   
    [[[方法]]]

    :::preset/html
    formMethod
    ---
    uikey:checkbox
    methodValue:['Tim', 'Andrew']
    methodDefaultValue:['Tim']
    methodMoreAttr::list="{Tim:'Tim Boelaars',Andrew:'Andrew Colin Beck',Victor:'Victor Erixon'}"
    :::
    
    #### toggle(key, [checked])

    切换单个选项的选中状态。
    
    |KEY|可选|描述|接受值|值类型|默认值|
    |-|-|-|-|-|-|
    |key|NO|需要切换状态的选项的键值|键值字符串|`String`|`undefined`|
    |checked|YES|需要切换的状态|`undefined`: 切换到相反的状态<br>`true`: 切换到选中状态<br>`false`: 切换到未选中状态|`Undefined`<br>`Boolean`|`undefined`|

    :::democode/html
    <div style="width:300px;">
        <ui-checkbox ref="demo2" form-name="姓名" :list="{Tim:'Tim Boelaars',Andrew:'Andrew Colin Beck',Victor:'Victor Erixon'}"></ui-checkbox>
    </div>
    <br>
    <ui-link js="javascript:morning.findVM('demo2').toggle('Tim');">切换Tim至相反状态</ui-link>
    <ui-link js="javascript:morning.findVM('demo2').toggle('Tim', true);">切换Tim至选中</ui-link>
    <ui-link js="javascript:morning.findVM('demo2').toggle('Tim', false);">切换Tim至未选中</ui-link>
    :::

    [[[事件]]]

    :::preset/html
    formEvent
    ---
    uikey:checkbox
    eventValue:['Tim', 'Andrew']
    eventMoreAttr::list="{Tim:'Tim Boelaars',Andrew:'Andrew Colin Beck',Victor:'Victor Erixon'}"
    :::

    [[[表单值]]]

    #### 值类型

    此表单返回值类型包含:

    - `Array` : 数组

    任何其他类型的数值，都会被转换成空数组(`[]`)。

    #### 值格式

    包含选中键值的无序数组。

    #### 默认值

    `[]`

    #### 输入/输出示例

    :::repeat/html
    formValueType:checkbox
    ---
    <div>
        <p>{$valueType}类型</p>
        <div style="width:300px;">
            <ui-checkbox ref="demoType{$valueType}" :list="{Tim:'Tim Boelaars',Andrew:'Andrew Colin Beck',Victor:'Victor Erixon'}"></ui-checkbox>
        </div>
        <br>
        <ui-link js="window.morning.findVM('demoType{$valueType}').set({$&valueContent})">设置{$valueType}类型</ui-link>
        <ui-link js="alert(window.morning.findVM('demoType{$valueType}').get())">获取表单JSON值</ui-link>
    </div>
    <br>
    <br>
    :::

    [[[源码]]]

    <iframe src="/report/coverage/lib/components/checkbox/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>

    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                 from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'checkbox'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
