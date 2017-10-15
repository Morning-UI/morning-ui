<template>
    <doc-guide
        :page="page"
        :hasPadding="true" 
    >
    <script type="text/markdown">

    # 开发规范

    所有的开发者及代码检视者都必须遵循以下的规范。

    > 若下面的规范后添加了<ui-badge xxs class="circle">TEST</ui-badge>标记，则表示此条规范会在自动化测试中检测。

    ### 组件规范

    #### 通用

    - 组件中的`this.$watch`优先写到`mounted()`生命周期钩子函数中。
    - 支持`slot`的组件，在模板代码中加入了`slot`。
    - 组件生成的HTML，最外层容器使用这样的标签：`<i-[name]>`，其中`name`是组件的名称。
    - 组件的`index.vue`，从上至下分别为:`<template>`、`<script>`、`<style>`三个标签。
    - `<style>`标签必须有`lang="less"`属性。
    - 每个组件必须包含两个文件：`index.vue`和`index.less`。
    - 除了表单组件之外的组件继承了`UI`类，表单组件继承了`Form`类。

    #### 交互组件

    #### 表单组件

    - 表单组件的边框/背景颜色需要使用统一的颜色。

    ### 文档规范

    #### 通用

    #### 交互组件

    #### 表单组件

    ### 测试用例规范

    #### 通用

    #### 交互组件

    #### 表单组件

    </script>
    </doc-guide>
</template>
 
<script>
import DocGuide                    from 'Docs/common/DocGuide.vue';

export default {
    data : function () {

        return {
            page : 'custom'
        };

    },
    components : {
        'doc-guide' : DocGuide
    }
};
</script>

<style lang="less">
</style>
