<template>
    <doc-guide
        :page="page"
        :hasPadding="true" 
    >
    <script type="text/markdown">

    # 开发规范

    所有的开发者及代码检视者都必须遵循以下的规范。

    > 若下面的规范后添加了<ui-badge xxs class="circle">AUTO</ui-badge>标记，则表示此条规范会在自动化测试中检测。

    ### 组件规范

    #### 通用

    - 组件的`index.vue`，从上至下分别为:`<template>`、`<script>`、`<style>`三个标签
    - `<style>`标签必须有`lang="less"`属性
    - 引入了`<style lang="less" src="./index.less"></style>`
    - 使用`watch`对变量进行观察时尽量使用`this.$watch`方法
    - 组件中的`this.$watch`优先写到`mounted()`生命周期钩子函数中
    - 组件中有关`data.value`和`conf.group`的观察函数`this.$watch`优先写到`created()`生命周期钩子函数中
    - 支持`slot`的组件，在模板代码中加入了`slot`
    - 组件生成的HTML，最外层容器使用这样的标签：`<i-[name]>`，其中`name`是组件的名称
    - 每个组件必须包含两个文件：`index.vue`和`index.less`
    - 除了表单组件之外的组件继承了`UI`类，表单组件继承了`Form`类
    - 在组件根标签的class中正确的绑定了支持的声明，完整示例：`:class="[sizeClass, styleClass, stateClass]"`
    - 组件的`name`正确
    - 通过ESLint及StyleLint
    - 在`lib/components/index.js`中导出了组件
    - 确保代码不受压缩的影响
    - 样式类的命名符合[样式类全局命名规范](/guide/styleclass.html)

    #### 交互组件

    - 配置的命名符合[配置全局命名规范](/guide/config.html)

    #### 表单组件

    - 表单组件继承了`Form`类
    - 表单组件的边框/背景颜色需要使用统一的颜色
    - 方法的命名符合[方法全局命名规范](/guide/method.html)
    - 事件的命名符合[事件全局命名规范](/guide/event.html)

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
            page : 'devrule'
        };

    },
    components : {
        'doc-guide' : DocGuide
    }
};
</script>

<style lang="less">
</style>
