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

    ### 扩展功能

    Morning UI为了让开发者尽可能轻松的写文档，扩展了GFM。提供了很多方便的用法：
    
    - 演示 : 一份代码，同时生成可视化的示例和完整展示代码。
    - 快捷指令 : 可以按预设的规则重复你的演示代码。
    - Vue实例 : 快速生成Vue容器、模板和JS，并进行绑定。
    - 预设 : 预设的演示代码，传入配置即可生成演示代码。
    - 示例区域 : 用虚线框起来的一个区域，告诉使用者这里面是示例。用以区分文档和示例。

    现在你对于这些新概念一定很懵逼，下面的章节详细为你解释了这些新的用法。

    #### 演示

    下面这段代码标记了一段演示区域:

    ```text
    \`\`\`\`html
    <p>通过两个\`\`\`\`来标记一个演示区域</p>
    \`\`\`\`
    ```

    最后会在文档中生成如下的内容:

    ---demostart---

    ````html
    <p>通过两个\`\`\`\`来标记一个演示区域</p>
    ````
    
    ---demoend---

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

    ---demostart---

    ````html
    @size
    <ui-btn {$sizeKey}>{$&sizeName}</ui-btn>
    ````
    
    ---demoend---

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

    ---demostart---

    ````html
    @color:theme
    <ui-btn {$colorKey}>{$&colorName}</ui-btn>
    ````
    
    ---demoend---

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

    ---demostart---

    ````html
    @color:blue
    @color:silver
    @color:gray
    <ui-btn {$colorKey}>{$&colorName}</ui-btn>
    ````
    
    ---demoend---

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

    ---demostart---

    ````html
    @state|@br:2|@color:theme
    <ui-btn {$stateKey} {$colorKey}>{$&stateName}</ui-btn>
    ````
    
    ---demoend---

    通过`|`分隔你可以在一行中使用多个指令，你的文档将会从左向右重复这些指令。其中`@br`指令用来向文档插入换行符，让示例更易读。

    ##### 所有快捷指令

    |指令|参数|说明|支持变量|
    |-|-|-|
    |@size|无|循环输出尺寸声明|sizeKey / sizeName|
    |@color|`theme`:主题色组<br>`feature`:功能色组<br>`black`:黑色组<br>`blue`:青色组<br>`silver`:银色组<br>`gray`:浅色组<br>|循环输出颜色声明|colorKey / colorName|
    |@state|需要输出的状态，多个之间用`,`分隔。<br>`normal`:正常状态<br>`hover`:Hover状态<br>`active`:激活状态<br>`disabled`:禁用状态<br>`apparent`:醒目状态<br>`loading`:载入中<br>`processing`:处理中|循环输出状态声明|stateKey / stateName|
    |@br|需要插入的换行符数量|在循环中插入换行符`<br>`|无|

    #### Vue实例

    有些时候你的演示会需要使用到Vue的实例，这意味着需要创建Vue的容器、模板、JS并将它们绑定在一起，这时候你可以使用Vue实例来简化操作。

    首先使用`@var`来声明Vue的模板：

    ```text
    \`\`\`\`html
    @var:demo1
    <div>
        <ui-btn @emit="echo">点击触发emit事件</ui-btn>
    </div>
    \`\`\`\`
    ```

    然后用相同的方法声明Vue的实例：

    ```text
    \`\`\`\`js
    @var:demo1
    new Vue({
        el : '{$el}',
        template : '{$template}',
        methods : {
            echo : function () {
                console.log('emit event!');
            }
        }
    });
    \`\`\`\`
    ```

    你一定注意到上面代码中的`{$el}`和`${template}`，这是[mustache](https://github.com/janl/mustache.js)语法，在生成文档时Vue实例会自动帮你替换成对应的Vue元素及模板id。

    这是为了防止同一个页面中的Vue元素或模板id冲突，Vue实例会帮你管理这些id。

    接下来在一个语言类型为`vue`的演示区域中使用`@use`引用注册的演示：

    ```text
    \`\`\`\`vue
    @use:html.demo1,js.demo1
    \`\`\`\`
    ```

    `@use`后面是你需要引用的其他演示区域，采用`,`分隔多个引用，每个引用格式:`[语言类型].[演示区域名称]`。

    由于引用区分语言类型，所以你可以在不同语言的演示区域中`@var`相同的名称。

    将上面的代码合在一起之后：

    ---demostart---

    ````vue
    @use:html.demo1,js.demo1
    ````

    ````html
    @var:demo1
    <div>
        <ui-btn @emit="echo">点击触发emit事件</ui-btn>
    </div>
    ````

    ````js
    @var:demo1
    new Vue({
        el : '{$el}',
        template : '{$template}',
        methods : {
            echo : function () {
                alert('emit event!');
            }
        }
    });
    ````

    ---demoend---

    其中的`<div id="demo-5483-el">`就是Vue实例自动帮你生成的Vue实例根节点。

    注意：一般被引用的演示区域紧跟在`vue`区域之后。

    #### 预设

    在表单组件的文档中存在着大量的重复文档，不同组件之间仅有几处区别，为了降低这部分重复工作。我们将这些文档做成了预设模板，你只需要传入对应的参数即可生成最终文档。

    首先你需要将演示区域的语言设置成`preset`来使用预设功能。

    ```text
    \`\`\`\`preset
    @id:formStatement
    @uikey:textinput
    @statementDefaultValue:''
    \`\`\`\`
    ```

    然后在下一行使用`@id`来说明你要使用哪个预设，比如上面的示例使用了`formStatement`预设。

    在`@id`之后每一行都是一个参数，格式是`@[参数名]:[参数值]`，这些参数会填写到预设模板中对应的位置。

    最终的效果：

    ---demostart---

    ````preset
    @id:formStatement
    @uikey:textinput
    @statementDefaultValue:''
    ````

    ---demoend---

    可以看到上面这一大段的文档，仅需5行代码就可以生成，这就是导入的效果。

    ##### 所有导入

    #### 示例区域

    有些时候你的示例不需要代码片段，仅仅是一段效果的HTML。这时候示例和文档会难以区分，比如这篇文档上面的那些`最终效果`。

    这时候你可以使用`---demostart---`和`---demoend---`将你的演示区域包裹起来，最终整个演示区域会被虚线框起来，用以区分示例和文档。

    注意：`---demostart---`和`---demoend---`前后需要空一行。

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
