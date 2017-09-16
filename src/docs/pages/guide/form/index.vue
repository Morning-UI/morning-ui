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

    表单组件支持两种状态声明：`正常`和`禁用`。

    `禁用`状态下的表单无法修改表单值，一般用于展示。

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

    - valueChange : 表单值发生改变时触发
    
    ### 全局扩展

    MorningUI的全局对象`morning`上对表单组件进行了扩展，可以让使用者更方便的获取、设置表单值。

    #### 表单组

    通过在组件上设置`group`属性，可以将表单组件添加到同一个表单组。

    表单组内的所有表单KEY和值都会以键值对的形式存在一个对象中。

    TODO DEMO


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
