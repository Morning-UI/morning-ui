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
    
    - 演示 : 一份代码，同时生成可视化的示例和完整展示代码。
    - 快捷指令 : 可以按预设的规则重复你的演示代码。
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

    下面这段代码标记了一段演示区域:

    ```text
    \`\`\`\`html
    <p>通过两个\`\`\`\`来标记一个演示区域</p>
    \`\`\`\`
    ```

    最后会在文档中生成如下的内容:

    ````html
    <p>通过两个\`\`\`\`来标记一个演示区域</p>
    ````

    演示代码会同时生成示例和代码。避免了示例和代码需要重复写两份，这也可以确保示例和代码的一致性。

    在上面示例中的`html`你也可以替换成其他语言。

    #### 快捷指令

    在演示区域中支持使用快捷指令来减少重复文档的书写，比如你的演示需要展现所有支持的组件尺寸：

    ```text
    \`\`\`\`html
    <ui-btn xxl>XXL尺寸</ui-btn>
    <ui-btn xl>XL尺寸</ui-btn>
    <ui-btn l>L尺寸</ui-btn>
    <ui-btn m>M尺寸</ui-btn>
    <ui-btn s>S尺寸</ui-btn>
    <ui-btn xs>XS尺寸</ui-btn>
    <ui-btn xxs>XXS尺寸</ui-btn>
    \`\`\`\`
    ```

    上面的写法十分繁琐，快捷指令让你只需写出一个尺寸的演示，然后循环输出其余的尺寸。通过`@size`快捷指令，简写成：

    ```text
    \`\`\`\`html
    @size
    <ui-btn {$sizeKey}>{$&sizeName}</ui-btn>
    \`\`\`\`
    ```

    最终的效果：

    ````html
    @size
    <ui-btn {$sizeKey}>{$&sizeName}</ui-btn>
    ````

    所有快捷指令以`@`开头，必须写在演示区域的最前面。快捷指令将会重复下面的文档内容，并且会支持一些变量你可以在文档中使用，变量的使用基于[mustache](https://github.com/janl/mustache.js)语法，采用`{$`和`}`来包裹变量。

    比如这里的`@size`快捷指令，支持`sizeKey`和`sizeName`，所以你可以在下面的文档中使用这两个变量，通过`@size`的循环来输出所有的尺寸示例。

    ##### 快捷指令参数

    快捷指令支持参数，你可以在指令后通过`:`来添加参数（一条捷指令仅支持一个参数）。

    比如`@color`需要传入一个色彩参数，来告诉指令需要渲染哪组色彩：

    ```text
    \`\`\`\`html
    @color:theme
    <ui-btn {$colorKey}>{$&colorName}</ui-btn>
    \`\`\`\`
    ```

    最终的效果：

    ````html
    @color:theme
    <ui-btn {$colorKey}>{$&colorName}</ui-btn>
    ````

    ##### 多个演示区域

    有时候在一个演示区域内放太多示例会让使用者难以阅读，所以快捷指令也可以用来循环生成多个演示区域：

    ```text
    \`\`\`\`html
    @color:blue
    @color:silver
    @color:gray
    <ui-btn {$colorKey}>{$&colorName}</ui-btn>
    \`\`\`\`
    ```

    最终的效果：

    ````html
    @color:blue
    @color:silver
    @color:gray
    <ui-btn {$colorKey}>{$&colorName}</ui-btn>
    ````

    如同上面的示例，每一行的快捷指令都会生成一个新的演示区域。同时，快捷指令也会非常贴心的帮改变演示区域的样式，让示例看起来更易读。


    ##### 使用多个快捷指令

    有些时候为了展示复杂的情况，你需要同时使用多个快捷指令进行循环输出示例，你可以这样使用：

    ```text
    \`\`\`\`html
    @state|@br:2|@color:theme
    <ui-btn {$stateKey} {$colorKey}>{$&stateName}</ui-btn>
    \`\`\`\`
    ```

    最终的效果：

    ````html
    @state|@br:2|@color:theme
    <ui-btn {$stateKey} {$colorKey}>{$&stateName}</ui-btn>
    ````

    通过`|`分隔你可以在一行中使用多个指令，你的文档将会从左向右重复这些指令。其中`@br`指令用来向文档插入换行符，让示例更易读。

    ##### 所有快捷指令

    |指令|参数|说明|支持变量|
    |-|-|-|
    |@size|无|循环输出尺寸声明|sizeKey / sizeName|
    |@color|`theme`:主题色组<br>`feature`:功能色组<br>`black`:黑色组<br>`blue`:青色组<br>`silver`:银色组<br>`gray`:浅色组<br>|循环输出颜色声明|colorKey / colorName|
    |@state|需要输出的状态，多个之间用`,`分隔。<br>`normal`:正常状态<br>`hover`:Hover状态<br>`active`:激活状态<br>`disabled`:禁用状态<br>`apparent`:醒目状态<br>`loading`:载入中<br>`processing`:处理中|循环输出状态声明|stateKey / stateName|
    |@br|需要插入的换行符数量|在循环中插入换行符`<br>`|无|

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
