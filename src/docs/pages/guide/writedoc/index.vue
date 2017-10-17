<template>
    <doc-guide
        :page="page"
        :hasPadding="true" 
    >
    <script type="text/markdown">
    
    # 编写文档

    文档作为Morning UI的组成部分，是非常重要且必不可少的。

    Morning UI使用了一套基于[GFM(GitHub Flavored Markdown)](https://guides.github.com/features/mastering-markdown/)扩展的文档解析器，这意味着你可以使用任何[GFM](https://guides.github.com/features/mastering-markdown/)语法。

    ### 如何编写

    Morning UI为了让开发者尽可能轻松的写文档，扩展了GFM。提供了很多方便的用法：
    
    - 演示 : 你的代码将生成一个可视化的示例，同时在示例下完整展示代码。避免了示例和代码需要重复写两份，这也可以确保示例和代码的一致性。
    - 快捷指令 : 可以按预设的规则重复你的演示代码。比如你的演示需要展现所有支持的组件尺寸，你只需写出一个尺寸的演示，然后交给快捷指令生成其他尺寸的演示。
    - 混合 : 单个演示代码中你只能写一种语言，有时候你需要HTML和JS一起运作。这时候你可以使用混合将两段演示代码(HTML和JS)组合成一个可视化的示例。
    - 引用 : 预设的演示代码，传入配置即可生成演示代码。

    现在你对于这些新概念一定很懵逼，下面的章节详细为你解释了这些新的用法。

    #### 创建新文档

    在开始使用这些方便的用法前，你需要先为你的组件创建文档。

    组件的文档放在项目的`src/docs/pages/component`目录下，每一个文件夹就是一份组件文档。

    文件夹中包含:

    - index.js : 文档的视图模型
    - index.vue : 文档的内容

    为你的组件新建一个文件夹，然后生成这两个文件，`index.js`每个组件都一样只需要从别的组件拷贝一份即可，`index.vue`的模板如下：
    
    ```html
    <template>
        <doc-component
                :page="page"
                :hasPadding="true"
            >
        <script type="text/markdown">

            <!-- 文档内容 -->

            &lt;/script>
        </doc-component>
    </template>
     
    <script>
    import DocComponent                 from 'Docs/common/DocComponent.vue';

    export default {
        data : function () {

            return {
                page : '页面KEY'
            };

        },
        components : {
            'doc-component' : DocComponent
        }
    };
    &lt;/script>

    <style lang="less">
    </style>
    ```

    这里只需要修改两个地方：

    1. `<template>`中的`文档内容`部分，你的文档写在这里
    2. `<script>`标签中的`页面KEY`部分，这里需要和组件的KEY保持一致
    
    这两个文件创建完成后，运行`npm run dev`，即可在`http://localhost:8080/component/[页面KEY].html`访问你的文档。

    #### 演示

    #### 快捷指令

    - size
    - color
    - state
    - br

    #### 混合

    #### 引用

    ### 文档编写规范

    编写文档时请遵循[开发规范](/guide/devrule.html)中的文档规范，[Code Review](/guide/review.html)将会检查文档编写规范。

    ### 组件(Component)文档

    #### 内容组成

    #### 组件状态栏

    #### 基础

    #### 声明

    #### 配置

    #### 方法

    #### 事件

    #### 表单值

    #### 源码

    ### 指南(Guide)文档
    
    Coming soon.

    </script>
    </doc-guide>
</template>
 
<script>
import DocGuide                    from 'Docs/common/DocGuide.vue';

export default {
    data : function () {

        return {
            page : 'writedoc'
        };

    },
    components : {
        'doc-guide' : DocGuide
    }
};
</script>

<style lang="less">
</style>
