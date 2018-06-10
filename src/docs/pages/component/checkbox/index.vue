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

    #### 带边框的复选框组

    通过`border`样式类指定复选框组以带边框的样式显示：

    :::democode/html
    <div style="width:320px;">
        <ui-checkbox form-name="姓名" class="border" :list="{Tim:'Tim Boelaars',Andrew:'Andrew Colin Beck',Victor:'Victor Erixon'}"></ui-checkbox>
    </div>
    :::

    #### 垂直布局的复选框组

    :::democode/html
    <div style="width:320px;">
        <ui-checkbox form-name="姓名" class="vertical" :list="{Tim:'Tim Boelaars',Andrew:'Andrew Colin Beck',Victor:'Victor Erixon'}"></ui-checkbox>
    </div>
    :::

    [[[形态]]]

    :::preset/html
    formStatusWithStyle
    ---
    uikey:checkbox
    statusDefaultValue:['Tim']
    statusMoreAttr::list="{Tim:'Tim Boelaars',Andrew:'Andrew Colin Beck',Victor:'Victor Erixon'}"
    :::

    [[[配置]]]

    :::preset/html
    formConfigTable
    ---
    |[accept-html](#accept-html)|项目的的名称可以使用HTML|`true`<br>`false`|Boolean|`false`|
    |[list](#list)|可选项目列表|可选项目列表的对象，键名是key，键值是name用于显示|Object|`{}`|
    |[disabled-options](#disabled-options)|禁止选中的项目（`set()`方法仍然可以选中禁止的项目，但`toggle()`方法无法选中禁止的项目）。|由禁止修改项目键名(key)组成的数组|Array|`[]`|
    |[max](#max)|最多可选项目的数量|数量|Number|`Infinity`|
    |[parent](#parent)|此配置可以将当前的复选框组件关联到另一个复选框的某个选项上，建立从属关系。<br><br>如果父选项被选中，那么所关联的子选项都会被选中。<br>如果部分子选项被选中，那么父选项会处于部分选中状态。<br><br>每个父选项只能关联到一个复选框组件上。关联时会优先取子复选框组件的状态。|`[关联复选框的选择器]:[关联选项的key]`|String|`''`|
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

    #### list

    :::democode/html
    <div style="width:300px;">
        <ui-checkbox form-name="姓名" :list="{Tim:'Tim Boelaars',Andrew:'Andrew Colin Beck',Victor:'Victor Erixon'}"></ui-checkbox>
    </div>
    :::

    #### disabled-options

    被禁止的项目将无法选中：

    :::democode/html
    <div style="width:300px;">
        <ui-checkbox form-name="姓名" :list="{Tim:'Tim Boelaars',Andrew:'Andrew Colin Beck',Victor:'Victor Erixon',Shaun:'Shaun Moynihan',Emir:'Emir Ayouni'}" :disabled-options="['Tim', 'Victor']"></ui-checkbox>
    </div>
    :::

    若禁止的项目已经被选中，则不可修改：

    :::democode/html
    <div style="width:300px;">
        <ui-checkbox form-name="姓名" :list="{Tim:'Tim Boelaars',Andrew:'Andrew Colin Beck',Victor:'Victor Erixon',Shaun:'Shaun Moynihan',Emir:'Emir Ayouni'}" :disabled-options="['Tim', 'Victor']" :default-value="['Tim', 'Emir']"></ui-checkbox>
    </div>
    :::

    #### max

    :::democode/html
    <div style="width:300px;">
        <ui-checkbox form-name="姓名" :list="{Tim:'Tim Boelaars',Andrew:'Andrew Colin Beck',Victor:'Victor Erixon',Shaun:'Shaun Moynihan',Emir:'Emir Ayouni'}" :max="3"></ui-checkbox>
    </div>
    :::

    #### parent

    :::democode/html
    <div style="width:300px;">
        <ui-checkbox form-name="Continents" id="continents" :list="{asia:'Asia',na:'North America',europe:'Europe',africa:'Africa'}"></ui-checkbox>
        <ui-checkbox form-name="Asia" parent="#continents:asia" :list="{beijing:'Beijing',hk:'Hong Kong',singapore:'Singapore',tokyo:'Tokyo'}"></ui-checkbox>
        <ui-checkbox form-name="North America" parent="#continents:na" :list="{ny:'New York',toronto:'Toronto',la:'Los Angeles'}"></ui-checkbox>
        <ui-checkbox form-name="Europe" parent="#continents:europe" :list="{london:'London',paris:'Paris',berlin:'Berlin',rome:'Rome',copenhagen:'Copenhagen',madrid:'Madrid'}"></ui-checkbox>
        <ui-checkbox form-name="Africa" parent="#continents:africa" :list="{cairo:'Cairo',cuba:'Cuba'}"></ui-checkbox>
    </div>
    :::

    有默认值的情况：

    :::democode/html
    <div style="width:300px;">
        <ui-checkbox form-name="Continents" id="continents2" :default-value="['europe']" :list="{asia:'Asia',na:'North America',europe:'Europe',africa:'Africa'}"></ui-checkbox>
        <ui-checkbox form-name="Asia" parent="#continents2:asia" :list="{beijing:'Beijing',hk:'Hong Kong',singapore:'Singapore',tokyo:'Tokyo'}"></ui-checkbox>
        <ui-checkbox form-name="North America" parent="#continents2:na" :default-value="['ny']" :list="{ny:'New York',toronto:'Toronto',la:'Los Angeles'}"></ui-checkbox>
        <ui-checkbox form-name="Europe" parent="#continents2:europe" :list="{london:'London',paris:'Paris',berlin:'Berlin',rome:'Rome',copenhagen:'Copenhagen',madrid:'Madrid'}"></ui-checkbox>
        <ui-checkbox form-name="Africa" parent="#continents2:africa" :default-value="['cairo', 'cuba']" :list="{cairo:'Cairo',cuba:'Cuba'}"></ui-checkbox>
    </div>
    :::
    
    配合`disabled-options`一起使用：

    :::democode/html
    <div style="width:300px;">
        <ui-checkbox form-name="Continents" id="continents3" :list="{asia:'Asia'}"></ui-checkbox>
        <ui-checkbox form-name="Asia" parent="#continents3:asia" :disabled-options="['beijing', 'hk']" :list="{beijing:'Beijing',hk:'Hong Kong',singapore:'Singapore',tokyo:'Tokyo'}"></ui-checkbox>
    </div>
    :::

    配合`max`一起使用：

    :::democode/html
    <div style="width:300px;">
        <ui-checkbox form-name="Continents" id="continents4" :list="{asia:'Asia'}"></ui-checkbox>
        <ui-checkbox form-name="Asia" parent="#continents4:asia" :max="2" :list="{beijing:'Beijing',hk:'Hong Kong',singapore:'Singapore',tokyo:'Tokyo'}"></ui-checkbox>
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
    <ui-link js="morning.findVM('demo2').toggle('Tim');">切换Tim至相反状态</ui-link>
    <ui-link js="morning.findVM('demo2').toggle('Tim', true);">切换Tim至选中</ui-link>
    <ui-link js="morning.findVM('demo2').toggle('Tim', false);">切换Tim至未选中</ui-link>
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
    
    `Array` : 数组

    #### 值过滤

    - 所有不支持的值类型，都会被尝试转换成空数组(`[]`)。
    - 若数组中的键值不在键值列表(`list`)中，会被过滤。
    - 若数组的长度大于`max`配置，则会取头开始取`max`配置长度的项目，多余的项目会被丢弃。

    #### 值格式

    包含选中键值的无序数组，键值是字符串。

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
        <ui-link js="alert(window.morning.findVM('demoType{$valueType}').getJson())">获取表单JSON值</ui-link>
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
