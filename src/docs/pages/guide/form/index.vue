<template>
    <doc-guide
        :page="page"
        :hasPadding="true" 
    >
    <script type="text/markdown">
    # 表单
    
    表单组件区别于布局和交互组件，包含很多通用的逻辑。MorningUI的全局对象上也对表单组件进行了扩展。

    ### 通用逻辑

    所有的表单都支持以下这些通用逻辑。

    #### 表单声明

    表单组件支持两种状态声明：`normal`和`disabled`。

    `disabled`状态下的表单无法修改表单值，一般用于展示。

    #### 表单配置

    表单组件支持下面几种通用配置：

    - form-name : 表单的名称(用于显示)
    - form-key : 表单的KEY(用于逻辑中作为识别标示)
    - group : 表单组
    - default-value : 表单的默认值
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

    - value-change : 表单值发生改变时触发
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

    :::democode/html
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
    :::

    一组表单也可以同时设置值：

    - `morning.setGroup(groupKey, dataObject)` : 设置指定表单组的数据
    - `morning.setGroupJson(groupKey, dataJson)` : 设置指定表单组的JSON数据
    
    `dataObject`是一组键值对，键名为表单的KEY，键值是需要设置的表单值。`dataJson`是`dataObject`经过JSON序列化后的字符串。
    
    :::democode/html
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
    :::

    #### 设置部分值

    在`dataJson`或`dataObject`中你可以只设置部分表单的数值，比如：

    :::democode/html
    <div style="width:300px;">
        <ui-textinput group="demo3" form-key="name" form-name="姓名"></ui-textinput>
        <br> 
        <ui-radio :list="{male:'Male',female:'Female'}" group="demo3" form-key="gender" form-name="性别"></ui-radio>
    </div>
    <br><br>
    <ui-btn js="window.morning.setGroup('demo3', {gender: 'male'});">只设置性别表单</ui-btn>
    :::

    #### 清空表单的值

    在`dataJson`或`dataObject`中若显式的设置`undefined`，则会清空对应表单的值，比如：

    :::democode/html
    <div style="width:300px;">
        <ui-textinput group="demo4" form-key="name" form-name="姓名" default-value="Jim"></ui-textinput>
        <br> 
        <ui-radio :list="{male:'Male',female:'Female'}" group="demo4" form-key="gender" form-name="性别" default-value="male"></ui-radio>
    </div>
    <br><br>
    <ui-btn js="window.morning.setGroup('demo4', {gender:undefined});">清空性别表单</ui-btn>
    :::

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
