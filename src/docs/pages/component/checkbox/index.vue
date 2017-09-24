<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 复选框组 `<ui-checkbox>`
    
    <doc-component-status page="checkbox"></doc-component-status>
    
    [[[基础]]]

    定义文本输入框。

    #### 使用

    ````html
    <div style="width:300px;">
        <ui-checkbox form-name="姓名" :list="{Tim:'Tim Boelaars',Andrew:'Andrew Colin Beck',Victor:'Victor Erixon'}"></ui-checkbox>
    </div>
    ````

    [[[声明]]]

    ````import
    @id:formStatementWithStyle
    @uikey:checkbox
    @statementDefaultValue:['Tim']
    @statementMoreAttr::list="{Tim:'Tim Boelaars',Andrew:'Andrew Colin Beck',Victor:'Victor Erixon'}"
    ````

    [[[配置]]]

    |KEY|描述|接受值|值类型|默认值|
    |-|-|-|
    ````import
    @id:formConfigTable
    ````
    |accept-html|项目的的名称可以使用HTML|`true`<br>`false`|Boolean|`false`|
    |list|可选项目列表|可选项目列表的对象，键名是key，键值是name用于显示|Object|`{}`|

    ````import
    @id:formConfigDemo
    @uikey:checkbox
    @configDefaultValue:['Tim']
    @configMoreAttr::list="{Tim:'Tim Boelaars',Andrew:'Andrew Colin Beck',Victor:'Victor Erixon'}"
    ````
    
    #### accept-html

    如果让`ui-checkbox`的显示文本，渲染成HTML，而不是字符串。可以设置`accept-html`。

    ````mixin
    @use:html.demo1,js.demo1
    ````

    ````html
    @var:demo1
    <div style="width:300px;">
        <ui-checkbox
            form-name="姓名"
            accept-html
            :list="list"
        ></ui-checkbox>
    </div>
    ````

    ````js
    @var:demo1
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
    ````

    #### list

    ````html
    <div style="width:300px;">
        <ui-checkbox form-name="姓名" :list="{Tim:'Tim Boelaars',Andrew:'Andrew Colin Beck',Victor:'Victor Erixon'}"></ui-checkbox>
    </div>
    ````

    [[[方法]]]

    ````import
    @id:formMethod
    @uikey:checkbox
    @methodValue:['Tim', 'Andrew']
    @methodDefaultValue:['Tim']
    @methodMoreAttr::list="{Tim:'Tim Boelaars',Andrew:'Andrew Colin Beck',Victor:'Victor Erixon'}"
    ````

    [[[事件]]]

    ````import
    @id:formEvent
    @uikey:checkbox
    @eventValue:['Tim', 'Andrew']
    @eventMoreAttr::list="{Tim:'Tim Boelaars',Andrew:'Andrew Colin Beck',Victor:'Victor Erixon'}"
    ````

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

    ````html
    @formValueType:checkbox
    <div>
        <p>{$valueType}类型</p>
        <div style="width:300px;">
            <ui-checkbox ref="demoType{$valueType}" :list="{Tim:'Tim Boelaars',Andrew:'Andrew Colin Beck',Victor:'Victor Erixon'}"></ui-checkbox>
        </div>
        <br>
        <a href="javascript:;" onclick="window.morning.findVM('demoType{$valueType}').set({$&valueContent})">设置{$valueType}类型</a>
        <a href="javascript:;" onclick="alert(window.morning.findVM('demoType{$valueType}').get())">获取表单JSON值</a>
    </div>
    <br>
    <br>
    ````

    [[[单元测试]]]

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
