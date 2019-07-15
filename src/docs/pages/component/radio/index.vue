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

    :::vue
    @name:使用
    ---
    #demo
    >tpl
    <div style="width:300px;">
        <ui-radio
            form-name="姓名"
            :list="{
                Tim : 'Tim Boelaars',
                Andrew : 'Andrew Colin Beck',
                Victor : 'Victor Erixon'
            }"
        ></ui-radio>
    </div>
    :::

    :::vue
    @name:带边框的单选框组
    ---
    #demo
    >desc
    通过`border`样式类指定单选框组以带边框的样式显示。
    <br>
    注意：此样式无法和`type="button"`配置一起使用。
    >tpl
    <div style="width:320px;">
        <ui-radio
            form-name="姓名"
            class="border"
            :list="{
                Tim : 'Tim Boelaars',
                Andrew : 'Andrew Colin Beck',
                Victor : 'Victor Erixon'
            }"></ui-radio>
    </div>
    :::

    :::vue
    @name:垂直布局的单选框组
    ---
    #demo
    >tpl
    <div style="width:320px;">
        <ui-radio
            form-name="姓名"
            class="vertical"
            :list="{
                Tim:'Tim Boelaars',
                Andrew:'Andrew Colin Beck',
                Victor:'Victor Erixon'
            }"
        ></ui-radio>
    </div>
    :::

    [[[形态]]]

    :::preset
    @name:formStatusWithStyleAndSize
    @uikey:radio
    @defaultValue:'Tim'
    @attrs: :list="{Tim:'Tim Boelaars',Andrew:'Andrew Colin Beck',Victor:'Victor Erixon'}"
    :::

    [[[配置]]]

    :::preset
    @name:formConfig
    @uikey:radio
    @defaultValue:['Tim']
    @attrs: :list="{Tim:'Tim Boelaars',Andrew:'Andrew Colin Beck',Victor:'Victor Erixon'}"
    :::

    :::vue
    @name:accept-html
    ---
    #config
    >conf-desc
    项目的的名称可以使用HTML。
    >conf-accept
    `true`<br>`false`
    >conf-type
    Boolean
    >conf-default
    `false`
    ---
    #demo
    >desc
    如果让`ui-radio`的显示文本，渲染成HTML，而不是字符串。可以设置`accept-html`。
    >tpl
    <div style="width:300px;">
        <ui-radio
            form-name="姓名"
            accept-html
            :list="list"
        ></ui-radio>
    </div>
    >script
    {
        data : function () {
            return {
                list : {
                    Red : '<span style="color:red;">我是红色span</span>',
                    Green : '<span style="color:green;">我是绿色span</span>'
                }
            }
        }
    }
    :::

    :::vue
    @name:list
    ---
    #config
    >conf-desc
    可选项目列表。
    >conf-accept
    可选项目列表的对象，键名是key，键值是name用于显示
    >conf-type
    Object
    >conf-default
    `{}`
    ---
    #demo
    >tpl
    <div style="width:300px;">
        <ui-radio
            form-name="姓名"
            :list="{
                Tim : 'Tim Boelaars',
                Andrew : 'Andrew Colin Beck',
                Victor : 'Victor Erixon'
            }"
        ></ui-radio>
    </div>
    :::

    :::vue
    @name:disabled-options
    ---
    #config
    >conf-desc
    禁止选中的项目（`set()`方法仍然可以选中禁止的项目，但`toggle()`方法无法选中禁止的项目）。
    >conf-accept
    由禁止修改项目键名(key)组成的数组
    >conf-type
    Array
    >conf-default
    `[]`
    ---
    #demo
    >desc
    被禁止的项目将无法选中。
    >tpl
    <div style="width:300px;">
        <ui-radio
            form-name="姓名"
            :list="{
                Tim:'Tim Boelaars',
                Andrew:'Andrew Colin Beck',
                Victor:'Victor Erixon',
                Shaun:'Shaun Moynihan',
                Emir:'Emir Ayouni'
            }"
            :disabled-options="['Tim', 'Victor']"
        ></ui-radio>
    </div>
    ---
    #demo
    >desc
    若禁止的项目已经被选中，则组件会清空。
    >tpl
    <div style="width:300px;">
        <ui-radio
            form-name="姓名"
            :list="{
                Tim : 'Tim Boelaars',
                Andrew : 'Andrew Colin Beck',
                Victor : 'Victor Erixon',
                Shaun : 'Shaun Moynihan',
                Emir : 'Emir Ayouni'
            }"
            :disabled-options="['Tim', 'Victor']"
            v-model="value"
        ></ui-radio>
    </div>
    >script
    {
        data : {
            value : 'Tim'
        }
    }
    :::

    :::vue
    @name:hidden-options
    ---
    #config
    >conf-desc
    隐藏指定的选项。注意：隐藏仅仅是视觉上的，若隐藏的选项已经选中，并不会改变其选中状态。
    >conf-accept
    由需要隐藏项目键名(key)组成的数组
    >conf-type
    Array
    >conf-default
    `[]`
    ---
    #demo
    >tpl
    <div style="width:300px;">
        <ui-radio
            form-name="姓名"
            :list="{
                Tim : 'Tim Boelaars',
                Andrew : 'Andrew Colin Beck',
                Victor : 'Victor Erixon',
                Shaun : 'Shaun Moynihan',
                Emir : 'Emir Ayouni'
            }"
            :hidden-options="['Tim', 'Victor']"
        ></ui-radio>
    </div>
    :::

    :::vue
    @name:type
    ---
    #config
    >conf-desc
    单选框选中的样式。
    >conf-accept
    `'check'` : 选中标记(对勾)
    `'point'` : 小圆点
    `'button'` : 按钮式
    >conf-type
    String
    >conf-default
    `'point'`
    ---
    #demo
    >desc
    选中标记类型的单选框。
    >tpl
    <div style="width:300px;">
        <ui-radio
            form-name="姓名"
            :list="{
                Tim : 'Tim Boelaars',
                Andrew : 'Andrew Colin Beck',
                Victor : 'Victor Erixon',
                Shaun : 'Shaun Moynihan',
                Emir : 'Emir Ayouni'
            }"
            type="check"
        ></ui-radio>
    </div>
    ---
    #demo
    >desc
    按钮式的单选框。
    >tpl
    <div>
        <ui-radio
            form-name="姓名"
            :list="{
                Tim : 'Tim Boelaars',
                Andrew : 'Andrew Colin Beck',
                Victor : 'Victor Erixon',
                Shaun : 'Shaun Moynihan',
                Emir : 'Emir Ayouni'
            }"
            type="button"
        ></ui-radio>
    </div>
    :::

    [[[方法]]]

    :::preset
    @name:formMethod
    @uikey:radio
    @value:'Tim'
    @defaultValue:'Tim'
    @attrs: :list="{Tim:'Tim Boelaars',Andrew:'Andrew Colin Beck',Victor:'Victor Erixon'}"
    :::

    :::vue
    @name:toggle(key)
    ---
    #method
    >method-desc
    选中单个选项。
    >method-args
    |key|NO|需要选中选项的键值|键值字符串|`String`|`undefined`|
    >method-return
    当前组件VM实例。
    ---
    #demo
    >tpl
    <div>
        <div style="width:300px;">
            <ui-radio
                ref="demo2"
                form-name="姓名"
                :list="{
                    Tim : 'Tim Boelaars',
                    Andrew : 'Andrew Colin Beck',
                    Victor : 'Victor Erixon'
                }"
            ></ui-radio>
        </div>
        <br>
        <ui-link js="morning.findVM('demo2').toggle('Tim');">选中Tim</ui-link>
        <ui-link js="morning.findVM('demo2').toggle('Andrew');">选中Andrew</ui-link>
    </div>
    :::

    [[[事件]]]

    :::preset
    @name:formEvent
    @uiname:单选框组
    @uikey:radio
    @value:'Tim'
    @attrs: :list="{Tim:'Tim Boelaars',Andrew:'Andrew Colin Beck',Victor:'Victor Erixon'}"
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

    :::preset
    @name:formValue
    @uikey:radio
    @uiname:单选框组
    @valueType:default
    @attrs: :list="{Jim:'Jim Boelaars',Andrew:'Andrew Colin Beck',Victor:'Victor Erixon'}"
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
