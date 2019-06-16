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
    
    :::vue
    @name:使用
    ---
    #demo
    >tpl
    <div style="width:300px;">
        <ui-checkbox
            form-name="姓名"
            :list="{
                Tim : 'Tim Boelaars',
                Andrew : 'Andrew Colin Beck',
                Victor : 'Victor Erixon'
            }"
        ></ui-checkbox>
    </div>
    :::

    :::vue
    @name:带边框的复选框组
    ---
    #demo
    >desc
    通过`border`样式类指定复选框组以带边框的样式显示。
    >tpl
    <div style="width:320px;">
        <ui-checkbox
            form-name="姓名"
            class="border"
            :list="{
                Tim : 'Tim Boelaars',
                Andrew : 'Andrew Colin Beck',
                Victor : 'Victor Erixon'
            }"
        ></ui-checkbox>
    </div>
    :::

    :::vue
    @name:垂直布局的复选框组
    ---
    #demo
    >tpl
    <div style="width:320px;">
        <ui-checkbox
            form-name="姓名"
            class="vertical"
            :list="{
                Tim : 'Tim Boelaars',
                Andrew : 'Andrew Colin Beck',
                Victor : 'Victor Erixon'
            }"
        ></ui-checkbox>
    </div>
    :::

    [[[形态]]]

    :::preset
    @name:formStatusWithStyleAndSize
    @uikey:checkbox
    @defaultValue:['Tim']
    @attrs: :list="{Tim:'Tim Boelaars',Andrew:'Andrew Colin Beck',Victor:'Victor Erixon'}"
    :::

    [[[配置]]]

    :::preset
    @name:formConfig
    @uikey:checkbox
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
    如果让`ui-checkbox`的显示文本，渲染成HTML，而不是字符串。可以设置`accept-html`。
    >tpl
    <div style="width:300px;">
        <ui-checkbox
            form-name="姓名"
            accept-html
            :list="list"
        ></ui-checkbox>
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
        <ui-checkbox
            form-name="姓名"
            :list="{
                Tim : 'Tim Boelaars',
                Andrew : 'Andrew Colin Beck',
                Victor : 'Victor Erixon'
            }"
        ></ui-checkbox>
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
        <ui-checkbox 
            form-name="姓名" 
            :list="{
                Tim : 'Tim Boelaars',
                Andrew : 'Andrew Colin Beck',
                Victor : 'Victor Erixon',
                Shaun : 'Shaun Moynihan',
                Emir : 'Emir Ayouni'
            }" 
            :disabled-options="['Tim', 'Victor']"
        ></ui-checkbox>
    </div>
    ---
    #demo
    >desc
    若禁止的项目已经被选中，则不可修改。
    >tpl
    <div style="width:300px;">
        <ui-checkbox 
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
        ></ui-checkbox>
    </div>
    >script
    {
        data : {
            value : ['Tim', 'Emir']
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
        <ui-checkbox
            form-name="姓名"
            :list="{
                Tim : 'Tim Boelaars',
                Andrew : 'Andrew Colin Beck',
                Victor : 'Victor Erixon',
                Shaun : 'Shaun Moynihan',
                Emir : 'Emir Ayouni'
            }"
            :hidden-options="['Tim', 'Victor']"
        ></ui-checkbox>
    </div>
    :::

    :::vue
    @name:max
    ---
    #config
    >conf-desc
    最多可选项目的数量。
    >conf-accept
    数量
    >conf-type
    Number
    >conf-default
    `Infinity`
    ---
    #demo
    >tpl
    <div style="width:300px;">
        <ui-checkbox
            form-name="姓名"
            :list="{
                Tim : 'Tim Boelaars',
                Andrew : 'Andrew Colin Beck',
                Victor : 'Victor Erixon',
                Shaun : 'Shaun Moynihan',
                Emir : 'Emir Ayouni'
            }"
            :max="3"
        ></ui-checkbox>
    </div>
    :::

    :::vue
    @name:parent
    ---
    #config
    >conf-desc
    此配置可以将当前的复选框组件关联到另一个复选框的某个选项上，建立从属关系。<br><br>如果父选项被选中，那么所关联的子选项都会被选中。<br>如果部分子选项被选中，那么父选项会处于部分选中状态。<br><br>每个父选项只能关联到一个复选框组件上。关联时会优先取子复选框组件的状态。
    >conf-accept
    `[关联复选框的选择器]:[关联选项的key]`
    >conf-type
    String
    >conf-default
    `''`
    ---
    #demo
    >tpl
    <div style="width:300px;">
        <ui-checkbox
            form-name="Continents"
            id="continents"
            :list="{
                asia : 'Asia',
                na : 'North America',
                europe : 'Europe',
                africa : 'Africa'
            }"></ui-checkbox>
        <ui-checkbox
            form-name="Asia"
            parent="#continents:asia"
            :list="{
                beijing : 'Beijing',
                hk : 'Hong Kong',
                singapore : 'Singapore',
                tokyo : 'Tokyo'
            }"
        ></ui-checkbox>
        <ui-checkbox
            form-name="North America"
            parent="#continents:na"
            :list="{
                ny : 'New York',
                toronto : 'Toronto',
                la : 'Los Angeles'
            }"
        ></ui-checkbox>
        <ui-checkbox
            form-name="Europe"
            parent="#continents:europe"
            :list="{
                london : 'London',
                paris : 'Paris',
                berlin : 'Berlin',
                rome : 'Rome',
                copenhagen : 'Copenhagen',
                madrid : 'Madrid'
            }"
        ></ui-checkbox>
        <ui-checkbox
            form-name="Africa"
            parent="#continents:africa"
            :list="{
                cairo : 'Cairo',
                cuba : 'Cuba'
            }"
        ></ui-checkbox>
    </div>
    ---
    #demo
    >desc
    有默认值的情况。
    >tpl
    <div style="width:300px;">
        <ui-checkbox
            form-name="Continents"
            id="continents2"
            v-model="value1"
            :list="{
                asia : 'Asia',
                na : 'North America',
                europe : 'Europe',
                africa : 'Africa'
            }"
        ></ui-checkbox>
        <ui-checkbox
            form-name="Asia"
            parent="#continents2:asia"
            :list="{
                beijing : 'Beijing',
                hk : 'Hong Kong',
                singapore : 'Singapore',
                tokyo : 'Tokyo'
            }"
        ></ui-checkbox>
        <ui-checkbox
            form-name="North America"
            parent="#continents2:na"
            v-model="value2"
            :list="{
                ny : 'New York',
                toronto : 'Toronto',
                la : 'Los Angeles'
            }"
        ></ui-checkbox>
        <ui-checkbox
            form-name="Europe"
            parent="#continents2:europe"
            :list="{
                london : 'London',
                paris : 'Paris',
                berlin : 'Berlin',
                rome : 'Rome',
                copenhagen : 'Copenhagen',
                madrid : 'Madrid'
            }"
        ></ui-checkbox>
        <ui-checkbox
            form-name="Africa"
            parent="#continents2:africa"
            v-model="value3"
            :list="{
                cairo : 'Cairo',
                cuba : 'Cuba'
            }"
        ></ui-checkbox>
    </div>
    >script
    {
        data : {
            value1 : ['europe'],
            value2 : ['ny'],
            value3 : ['cairo', 'cuba']
        }
    }
    ---
    #demo
    >desc
    配合`disabled-options`一起使用。
    >tpl
    <div style="width:300px;">
        <ui-checkbox
            form-name="Continents"
            id="continents3"
            :list="{asia:'Asia'}"
        ></ui-checkbox>
        <ui-checkbox
            form-name="Asia"
            parent="#continents3:asia"
            :disabled-options="['beijing', 'hk']"
            :list="{
                beijing : 'Beijing',
                hk : 'Hong Kong',
                singapore : 'Singapore',
                tokyo : 'Tokyo'
            }"
        ></ui-checkbox>
    </div>
    ---
    #demo
    >desc
    配合`max`一起使用。
    >tpl
    <div style="width:300px;">
        <ui-checkbox 
            form-name="Continents" 
            id="continents4" 
            :list="{asia:'Asia'}"
        ></ui-checkbox>
        <ui-checkbox 
            form-name="Asia" 
            parent="#continents4:asia" 
            :max="2" 
            :list="{
                beijing : 'Beijing',
                hk : 'Hong Kong',
                singapore : 'Singapore',
                tokyo : 'Tokyo'
            }"
        ></ui-checkbox>
    </div>
    ---
    #demo
    >desc
    多个复选框组件绑定到一个父选项上。
    >tpl
    <div style="width:300px;">
        <ui-checkbox
            form-name="Continents"
            id="continents5"
            :list="{
                asia : 'Asia',
                europe : 'Europe'
            }"
        ></ui-checkbox>
        <ui-checkbox 
            form-name="Asia / China" 
            parent="#continents5:asia" 
            :list="{
                beijing : 'Beijing',
                shanghai : 'Shanghai'
            }"
        ></ui-checkbox>
        <ui-checkbox 
            form-name="Asia / Japan" 
            parent="#continents5:asia" 
            :list="{
                tokyo : 'Tokyo',
                osaka : 'Osaka'
            }"
        ></ui-checkbox>
        <ui-checkbox 
            form-name="Asia / Korea" 
            parent="#continents5:asia" 
            :list="{
                seoul : 'Seoul',
                busan : 'Busan'
            }"
        ></ui-checkbox>
        <ui-checkbox 
            form-name="Europe / UK" 
            parent="#continents5:europe" 
            :list="{
                london : 'London',
                manchester : 'Manchester'
            }"
        ></ui-checkbox>
        <ui-checkbox 
            form-name="Europe / France" 
            parent="#continents5:europe" 
            :list="{
                paris : 'Paris',
                lyon : 'Lyon'
            }"
        ></ui-checkbox>
    </div>
    :::

    :::vue
    @name:type
    ---
    #config
    >conf-desc
    复选框选中的样式。
    >conf-accept
    `'check'` : 选中标记(对勾)
    `'button'` : 按钮式
    >conf-type
    String
    >conf-default
    `'check'`
    ---
    #demo
    >desc
    按钮式的复选框。
    >tpl
    <div>
        <ui-checkbox
            form-name="姓名"
            :list="{
                Tim : 'Tim Boelaars',
                Andrew : 'Andrew Colin Beck',
                Victor : 'Victor Erixon',
                Shaun : 'Shaun Moynihan',
                Emir : 'Emir Ayouni'
            }"
            type="button"
        ></ui-checkbox>
    </div>
    :::

    :::vue
    @name:indeterminate
    ---
    #config
    >conf-desc
    开启此配置后复选框组件将转换成纯展示模式，所有表单相关的能力都将失效。通过`checked-state`配置来修改复选框组件的展示状态。
    >conf-accept
    `true`<br>`false`
    >conf-type
    Boolean
    >conf-default
    `false`
    ---
    #demo
    >tpl
    <div style="width:300px;">
        <ui-checkbox
            form-name="姓名"
            :list="{
                Tim : 'Tim Boelaars',
                Andrew : 'Andrew Colin Beck',
                Victor : 'Victor Erixon',
                Shaun : 'Shaun Moynihan',
                Emir : 'Emir Ayouni'
            }"
            :indeterminate="true"
            :checked-state="{
                Tim : 0
            }"
        ></ui-checkbox>
    </div>
    :::

    :::vue
    @name:checked-state
    ---
    #config
    >conf-desc
    此配置必须配合`indeterminate`配置一起使用，可以用来控制组件的选中状态。值是一个对象，对象的键名为需要控制选项的`key`，键值为一个状态数字：`-1`是未选中，`0`是部分选中，`1`是选中。未设置的`key`默认为未选中。
    >conf-accept
    对象
    >conf-type
    `Object`
    >conf-default
    `{}`
    ---
    #demo
    >tpl
    <div style="width:300px;">
        <ui-checkbox
            form-name="姓名"
            :list="{
                Tim : 'Tim Boelaars',
                Andrew : 'Andrew Colin Beck',
                Victor : 'Victor Erixon',
                Shaun : 'Shaun Moynihan',
                Emir : 'Emir Ayouni'
            }"
            :indeterminate="true"
            :checked-state="{
                Tim : 0,
                Andrew : 1
            }"
        ></ui-checkbox>
    </div>
    :::

    [[[方法]]]

    :::preset
    @name:formMethod
    @uikey:checkbox
    @value:['Tim', 'Andrew']
    @defaultValue:['Tim']
    @attrs: :list="{Tim:'Tim Boelaars',Andrew:'Andrew Colin Beck',Victor:'Victor Erixon'}"
    :::

    :::vue
    @name:toggle(key, [checked])
    ---
    #method
    >method-desc
    切换单个选项的选中状态。
    >method-args
    |key|NO|需要切换状态的选项的键值|键值字符串|`String`|`undefined`|
    |checked|YES|需要切换的状态|`undefined`: 切换到相反的状态<br>`true`: 切换到选中状态<br>`false`: 切换到未选中状态|`Undefined`<br>`Boolean`|`undefined`|
    >method-return
    当前组件VM实例。
    ---
    #demo
    >tpl
    <div>
        <div style="width:300px;">
            <ui-checkbox
                ref="demo2"
                form-name="姓名"
                :list="{
                    Tim : 'Tim Boelaars',
                    Andrew : 'Andrew Colin Beck',
                    Victor : 'Victor Erixon'
                }"
            ></ui-checkbox>
        </div>
        <br>
        <ui-link js="morning.findVM('demo2').toggle('Tim');">切换Tim至相反状态</ui-link>
        <ui-link js="morning.findVM('demo2').toggle('Tim', true);">切换Tim至选中</ui-link>
        <ui-link js="morning.findVM('demo2').toggle('Tim', false);">切换Tim至未选中</ui-link>
    </div>
    :::

    :::vue
    @name:getCheckedState()
    ---
    #method
    >method-desc
    返回当前复选框的选中状态，仅在使用`indeterminate`配置时有效。
    >method-return
    返回一个对象。<br>对象的键名为选项的`key`，键值为一个状态数字：<br>`-1`是未选中<br>`0`是部分选中<br>`1`是选中
    ---
    #demo
    >tpl
    <div>
        <div style="width:300px;">
            <ui-checkbox
                ref="demo3"
                form-name="姓名"
                :list="{
                    Tim : 'Tim Boelaars',
                    Andrew : 'Andrew Colin Beck',
                    Victor : 'Victor Erixon',
                    Shaun : 'Shaun Moynihan',
                    Emir : 'Emir Ayouni'
                }"
                :indeterminate="true"
                :checked-state="{
                    Tim : 0,
                    Andrew : 1
                }"
            ></ui-checkbox>
        </div>
        <br>
        <ui-link js="console.log(morning.findVM('demo3').getCheckedState());">获取选中状态</ui-link>
    </div>
    :::

    [[[事件]]]

    :::preset
    @name:formEvent
    @uiname:复选框组
    @uikey:checkbox
    @value:['Tim', 'Andrew']
    @attrs: :list="{Tim:'Tim Boelaars',Andrew:'Andrew Colin Beck',Victor:'Victor Erixon'}"
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

    :::preset
    @name:formValue
    @uikey:checkbox
    @uiname:复选框组
    @valueType:checkbox
    @attrs: :list="{Tim:'Tim Boelaars',Andrew:'Andrew Colin Beck',Victor:'Victor Erixon'}"
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
