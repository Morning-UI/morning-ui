<template>
    <doc-guide
        :page="page"
        :hasPadding="true" 
    >
    <script type="text/markdown">
    # 表单
    
    表单组件区别于样式和交互组件，包含很多通用的逻辑。MorningUI的全局对象上也对表单组件进行了扩展。

    ### 通用逻辑

    所有的表单都支持以下这些通用逻辑。

    #### 表单形态

    表单组件支持三种形态：`normal`、`readonly`、`disabled`。

    `readonly`状态下的表单用户无法修改表单值，但可通过JS可以修改，一般用于展示。

    `disabled`状态下的表单无法修改表单值，一般用于展示。

    详见：[disabled和readonly的区别](/guide/status.html#disabled和readonly的区别)。

    #### 表单配置

    表单组件支持下面几种通用配置：

    - form-name : 表单的名称(用于显示)
    - form-key : 表单的KEY(用于逻辑中作为识别标示)
    - group : 表单组
    - default-value : 表单的默认值(不支持单向数据流)
    - hide-name : 隐藏表单名(所有表单默认都有显示表单名的位置，你可以隐藏后自行设置)
    
    #### 表单方法

    表单组件支持下面几种通用方法：

    - set() : 设置表单的值
    - get() : 获取表单的值
    - getJson() : 获取表单的JSON值
    - setName() : 设置表单的名称
    - getName() : 获取表单的名称
    - setKey() : 设置表单的KEY
    - getKey() : 获取表单的KEY
    - setGroup() : 设置表单组件所属的表单组
    - getGroup() : 获取表单组件所属的表单组
    - addGroup() : 将表单组件添加到表单组
    - removeGroup() : 将表单组件从表单组中移除

    #### 表单事件

    表单组件支持下面几种通用事件：

    - value-change : 表单值发生改变时触发(表单初始化时的数值变动不会触发此事件)
    - created : 组件实例创建后(组件生命周期事件，等同于vue中的`created`)
    - mounted : 组件挂载到DOM后(组件生命周期事件，等同于vue中的`mounted`)
    - before-update : 组件更新前(组件生命周期事件，等同于vue中的`before-update`)
    - updated : 组件更新后(组件生命周期事件，等同于vue中的`updated`)
    - before-destroy : 组件销毁前(组件生命周期事件，等同于vue中的`before-destroy`)
    - destroyed : 组件销毁后(组件生命周期事件，等同于vue中的`destroyed`)

    ### 表单值

    表单中所有的值都有支持的类型，若输入的值不符合表单支持的类型，表单会进行转换。

    所有的表单都会说明：

    - 值类型 : 表单支持数值的类型
    - 值过滤 : 表单过滤数值的条件
    - 值格式 : 表单数值格式说明
    - 默认值

    ### 表单组

    通过在组件上设置`group`属性，可以将表单组件添加到同一个表单组。

    表单组内的所有表单KEY和值都会以键值对的形式存在一个对象中。

    你可以通过两种方式获取：

    - `morning.getGroup(groupKey)` : 获取指定表单组的数据
    - `morning.getGroupJson(groupKey)` : 获取指定表单组的JSON数据

    :::vue
    #demo
    >tpl
    <div>
        <div style="width:300px;">
            <ui-textinput group="demo1" form-key="name" form-name="姓名" default-value="Jim"></ui-textinput>
            <br> 
            <ui-textinput group="demo1" form-key="age" form-name="年龄" default-value="17"></ui-textinput>
            <br> 
            <ui-radio :list="{male:'Male',female:'Female'}" group="demo1" form-key="gender" form-name="性别" default-value="male"></ui-radio>
            <br> 
            <ui-multiinput group="demo1" form-key="tags" form-name="标签" :default-value="['Happy']"></ui-multiinput>
        </div>
        <br><br>
        <ui-btn js="console.log('demo1 data', window.morning.getGroup('demo1'));">在Console输出表单组数据</ui-btn>
        <ui-btn js="console.log('demo1 data', window.morning.getGroupJson('demo1'));">在Console输出表单组JSON数据</ui-btn>
    </div>
    :::

    一组表单也可以同时设置值：

    - `morning.setGroup(groupKey, dataObject)` : 设置指定表单组的数据
    - `morning.setGroupJson(groupKey, dataJson)` : 设置指定表单组的JSON数据
    
    `dataObject`是一组键值对，键名为表单的KEY，键值是需要设置的表单值。`dataJson`是`dataObject`经过JSON序列化后的字符串。
    
    :::vue
    #demo
    >tpl
    <div>
        <div style="width:300px;">
            <ui-textinput group="demo2" form-key="name" form-name="姓名"></ui-textinput>
            <br> 
            <ui-textinput group="demo2" form-key="age" form-name="年龄"></ui-textinput>
            <br> 
            <ui-radio :list="{male:'Male',female:'Female'}" group="demo2" form-key="gender" form-name="性别"></ui-radio>
            <br> 
            <ui-multiinput group="demo2" form-key="tags" form-name="标签"></ui-multiinput>
        </div>
        <br><br>
        <ui-btn js="window.morning.setGroup('demo2', {name:'Jim', age:'17', gender: 'male', tags: ['Happy']});">通过对象设置一组表单值</ui-btn>
        <ui-btn js='window.morning.setGroupJson("demo2", "{\"name\":\"Jim\",\"age\":\"17\",\"gender\":\"male\",\"tags\":[\"Happy\"]}");'>通过JSON设置一组表单值</ui-btn>
    </div>
    :::

    #### 设置部分值

    在`dataJson`或`dataObject`中你可以只设置部分表单的数值，比如：

    :::vue
    #demo
    >tpl
    <div>
        <div style="width:300px;">
            <ui-textinput group="demo3" form-key="name" form-name="姓名"></ui-textinput>
            <br> 
            <ui-radio :list="{male:'Male',female:'Female'}" group="demo3" form-key="gender" form-name="性别"></ui-radio>
        </div>
        <br><br>
        <ui-btn js="window.morning.setGroup('demo3', {gender: 'male'});">只设置性别表单</ui-btn>
    </div>
    :::

    #### 清空表单的值

    在`dataJson`或`dataObject`中若显式的设置`undefined`，则会清空对应表单的值，比如：

    :::vue
    #demo
    >tpl
    <div>
        <div style="width:300px;">
            <ui-textinput group="demo4" form-key="name" form-name="姓名" default-value="Jim"></ui-textinput>
            <br> 
            <ui-radio :list="{male:'Male',female:'Female'}" group="demo4" form-key="gender" form-name="性别" default-value="male"></ui-radio>
        </div>
        <br><br>
        <ui-btn js="window.morning.setGroup('demo4', {gender:undefined});">清空性别表单</ui-btn>
    </div>
    :::

    #### 清空一组表单的值

    通过`cleanGroup`方法可以清空一整组表单的值，比如：

    :::vue
    #demo
    >tpl
    <div>
        <div style="width:300px;">
            <ui-textinput group="demo5" form-key="name" form-name="姓名" default-value="Jim"></ui-textinput>
            <br> 
            <ui-radio :list="{male:'Male',female:'Female'}" group="demo5" form-key="gender" form-name="性别" default-value="male"></ui-radio>
        </div>
        <br><br>
        <ui-btn js="window.morning.cleanGroup('demo5');">清空整组表单</ui-btn>
    </div>
    :::

    ### 表单数据双向绑定
    
    大部分情况下表单的值和父视图中的数据是关联的，这时候可以使用`v-model`指令将表单值绑定到父视图中。

    绑定是双向的，组件值改变会同步到父视图的data中，父视图的值改变也会改变组件的值：
    
    :::vue
    #demo
    >tpl
    <div style="width:400px;">
        <p>1. 修改下面表单内容，然后点击<code>获取父视图的data</code>，父视图的数据同步变化</p>
        <p>2. 点击<code>修改父视图的data</code>，表单的值也会变化</p>
        <ui-formgroup>
        <ui-textinput v-model="name" form-name="姓名" default-value="Jim"></ui-textinput>
        <br>
        <ui-radio :list="{male:'Male',female:'Female'}" v-model="gender" default-value="male"></ui-radio>
        </ui-formgroup>
        <br><br>
        <ui-btn js="alert(demoVm.getData());">获取父视图的data</ui-btn>
        <ui-btn js="demoVm.setData();">修改父视图的data</ui-btn>
    </div>
    >script
    {
        data : {
            name : undefined,
            gender : undefined
        },
        methods : {
            getData : function() {
                return JSON.stringify({
                    name : this.name,
                    gender : this.gender
                })
            },
            setData : function() {
                this.name = 'Sam';
                this.gender = 'female';
            }
        }
    }
    :::

    注意：如果表单处于`disable`状态，父视图中的数值变化将不会同步到表单(但`default-value`数值可以应用到表单)。

    `v-model`指令的用法详见：<a href="https://cn.vuejs.org/v2/guide/forms.html" target="_blank">表单输入绑定</a>

    #### `v-model`和`default-value`一起使用

    当`v-model`和`default-value`一起使用并都有效时，组件会优先同步到`v-model`的数值。

    ### 全局扩展

    MorningUI的全局对象`morning`上对表单组件进行了扩展，可以让使用者更方便的获取、设置表单值。

    </script>
    </doc-guide>
</template>
 
<script>
import DocGuide                    from 'Docs/common/DocGuide.vue';

export default {
    data : function () {

        return {
            page : 'form'
        };

    },
    components : {
        'doc-guide' : DocGuide
    }
};
</script>

<style lang="less">
</style>
