<template>
    <doc-guide
        :page="page"
        :hasPadding="true" 
    >
    <script type="text/markdown">
    
    # 编写文档

    文档作为Morning UI的组成部分，是非常重要且必不可少的。

    Morning UI使用了一套基于[CommonMark Spec](http://spec.commonmark.org/)扩展的Markdown解析器，这意味着你可以使用任何[CommonMark Spec](http://spec.commonmark.org/)语法。

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

    #### 文档格式

    为了保证文档的一致性，请遵循下面的文档格式。

    ##### 标题

    - `#` : 用于文档主标题
    - `###` : 用于每个章节的标题
    - `####` : 用于每个二级章节的标题
    - `#####` : 用于每个三级章节的标题

    文档中最多只能包含三级章节，且不使用`##`。

    ##### 代码、演示及示例
    
    - ` ``` ` : 代码区域([CommonMark Spec](http://spec.commonmark.org/)支持)
    - `:::democode` : 演示区域，包含示例和代码(扩展用法，见下面章节)
    - `---demostart---`和`---demoend---` : 示例区域(扩展用法，见下面章节)

    ##### 链接

    - `[标题](链接)` : 采用[CommonMark Spec](http://spec.commonmark.org/)的链接，如果是站内采用`/path/page.html`这样的跟相对路径。

    ##### 文本样式

    - `__ __` : 加粗
    - `_ _` : 斜体
    - `~~ ~~` : 删除，采用[GFM的删除线](https://help.github.com/articles/basic-writing-and-formatting-syntax/#styling-text)

    ##### 表格

    采用[GFM的表格](https://help.github.com/articles/organizing-information-with-tables/)。

    ##### HTML或组件内容

    采用HTML。

    ### 扩展功能

    Morning UI为了让开发者尽可能轻松的写文档，扩展了[CommonMark Spec](http://spec.commonmark.org/)。提供了很多方便的用法：
    
    - [删除线(GFM)](https://help.github.com/articles/basic-writing-and-formatting-syntax/#styling-text)
    - [表格(GFM)](https://help.github.com/articles/organizing-information-with-tables/)
    - 演示及代码 : 一份代码，同时生成可视化的示例和完整展示代码。
    - Vue演示 : 快速生成Vue容器、模板和JS，并进行绑定。
    - 预设 : 预设的演示代码，传入配置即可生成演示代码。
    - 示例 : 用虚线框起来的一个区域，告诉使用者这里面是示例。用以区分文档和示例。

    下面的章节详细为你解释了这些新的用法。

    #### 扩展语法

    除示例之外的，演示、Vue演示、预设都基于了同一种扩展语法：使用`:::`标记的区块，格式如下：

    ```text
    :::[扩展名]/[代码语言]
    [扩展配置]
    ---
    [内容部分]
    :::
    ```

    - `扩展名` : 标记需要使用的扩展功能
    - `代码语言` : <ui-badge size="xxs" color="minor">非必需</ui-badge>标记`内容部分`的语言类型
    - `扩展配置` : <ui-badge size="xxs" color="minor">非必需</ui-badge>用来声明扩展的配置，会在后面详细说明
    - `内容部分` : <ui-badge size="xxs" color="minor">非必需</ui-badge>是扩展的主体内容部分

    其中配置和内容采用`---`分隔。

    #### 演示及代码

    下面这段代码标记了一段演示及代码区域:

    ```text
    :::democode/html
    <p>这是一个演示区域</p>
    :::
    ```

    最后会在文档中生成如下的内容:
    
    ---demostart---

    :::democode/html
    <p>这是一个演示区域</p>
    :::

    ---demoend---

    `演示及代码`会同时生成示例和代码。避免了示例和代码需要重复写两份，这也可以确保示例和代码的一致性。

    在上面示例中的`html`你也可以替换成其他语言。

    #### Vue演示
    
    有些时候你的演示会需要使用到Vue的实例，这意味着需要创建Vue的容器、模板、JS并将它们绑定在一起，这时候你可以使用`Vue演示`来简化操作。

    扩展中的配置部分变为了初始化`Vue演示`的JS脚本，内容部分为Vue的模板：

    ```text
    :::vue
    #demo
    >tpl
    <div>
        <ui-btn @emit="echo">点击触发emit事件</ui-btn>
    </div>
    >script
    {
        methods : {
            echo : function () {
                console.log('emit event!');
            }
        }
    }
    :::
    ```

    你一定注意到上面代码中的`{$el}`和`${template}`，这是[mustache](https://github.com/janl/mustache.js)语法，在生成文档时`Vue演示`会自动帮你替换成对应的Vue元素及模板id。

    这是为了防止同一个页面中的Vue元素或模板id冲突，`Vue演示`会帮你管理这些id。

    最终效果：

    ---demostart---

    :::vue
    #demo
    >tpl
    <div>
        <ui-btn @emit="echo">点击触发emit事件</ui-btn>
    </div>
    >script
    {
        methods : {
            echo : function () {
                console.log('emit event!');
            }
        }
    }
    :::

    ---demoend---

    其中的`<div id="demo-[id]-el">`就是`Vue演示`自动帮你生成的Vue演示根节点。

    #### 预设

    在文档中存在着大量的雷同的文档，不同组件之间仅有几处区别，为了降低这部分重复工作。我们将这些文档做成了预设模板，你只需要传入对应的参数即可生成最终文档。

    使用方式如下：

    ```text
    :::preset
    @name:formConfig
    @uikey:textinput
    @defaultValue:'默认文本'
    :::
    ```

    在扩展的配置区域设置需要使用`预设`的名称，比如上面示例使用了`formStatus`预设。

    在内容区域有两种用法：

    一种是为`预设`传入的参数，一行一个，格式是`[参数名]:[参数值]`，冒号分隔参数名和参数值，这些参数会填写到预设模板中对应的位置。

    另一种是不设置参数，内容区域整个传入。不同的预设支持不同的用法，详见下面的`所有预设`章节。

    最终的效果：

    ---demostart---

    :::preset
    @name:formConfig
    @uikey:textinput
    @defaultValue:'默认文本'
    :::

    ---demoend---

    可以看到上面这一大段的文档，仅需5行代码就可以生成，这就是`预设`的效果。

    ##### 所有预设

    下面罗列了所有可以使用的预设及参数：

    |预设|参数/内容|说明|
    |-|-|-|
    |colorColor|@uikey：组件的Key|除表单组件外的色彩形态文档(仅简单情况，负责情况请使用自定义模板和`重复`来生成)|
    |formStatus|@uikey：组件的Key<br>@statusDefaultValue：组件的默认值<br>@statusMoreAttr：组件的配置<br>@statusSlot：组件的插值|输出表单组件的形态文档(仅状态)|
    |formStatusWithStyle|@uikey：组件的Key<br>@statusDefaultValue：组件的默认值<br>@statusMoreAttr：组件的配置<br>@statusSlot：组件的插值|输出表单组件的形态文档(包含状态及色彩)|
    |formConfigDemo|@uikey：组件的Key<br>@configDefaultValue：组件的默认值<br>@configMoreAttr：组件的配置<br>@configSlot：组件的插值|表单基本配置示例文档|
    |formConfigTable|组件的其余配置作为内容部分|表单配置说明文档(表格)|
    |formMethod|@uikey：组件的Key<br>@methodDefaultValue：组件的默认值<br>@methodMoreAttr：组件的配置<br>@methodSlot：组件的插值<br>@methodValue：组件的值|表单基本方法示例文档|
    |formEvent|@uikey：组件的Key<br>@eventMoreAttr：组件的配置<br>@eventSlot：组件的插值<br>@eventValue：组件的值|表单基本事件示例文档|

    #### 示例

    有些时候你的示例不需要代码片段，仅仅是一段效果的HTML。这时候示例和文档会难以区分，比如这篇文档上面的那些`最终效果`。

    这时候你可以使用`---demostart---`和`---demoend---`将你的演示区域包裹起来，最终整个演示区域会被虚线框起来，用以区分示例和文档。

    注意：`---demostart---`和`---demoend---`前后需要空一行。

    ### 文档编写规范

    编写文档时请遵循[开发规范](/guide/devrule.html)中的文档规范，[Code Review](/guide/review.html)将会检查文档编写规范。

    ### 组件(Component)文档

    #### 内容组成

    组件的文档从上至下由几部分组成：

    - 标题 : 组件的名称及标签。
    - 组件状态栏 : 组件的单元/集成测试情况，测试覆盖率。组件最后更新日期、作者、commid id以及所有贡献者。
    - 开始 : 简单介绍组件，并从组件最简单的用法开始，一一列举组件常见的用法。
    - 形态 : 组件的形态支持情况，及所有形态的演示。
    - 配置 : 组件的配置详情，及配置的演示。
    - 方法 : 组件所有方法的演示及文档。
    - 事件 : 组件所有的事件演示及文档。
    - 表单值 : 组件的值类型、格式、默认值及输入/输出演示。
    - 源码 : 组件的`.vue`文件，及测试覆盖情况。

    从`开始`至`源码`部分都在标签页内，需要用添加标签名称。

    其中样式组件只需要：`标题`、`组件状态栏`、`开始`、`形态`、`源码`。

    交互组件在样式组件的基础上增加：`配置`、`方法`、`事件`。

    表单组件在交互组件的基础上增加：`表单值`。

    > 注意：所有的演示都要确保最小化的配置和代码，不要添加不必要的配置和代码。

    #### 标题

    包含组件的中文名及标签，使用`#`标题。比如：`# 多项输入框 <ui-multiinput>`

    #### 组件状态栏

    只需引入`<doc-component-status page="[组件Key]"></doc-component-status>`，会自动生成组件的状态栏。其中`[组件Key]`，需要替换成对应组件的Key。

    #### 开始

    在开始中首先要简短的介绍一下组件，然后演示组件最简单的用法，比如：

    ```md
    
    定义一个标准标题，此组件可以替换原生的`h1-h6`标签，这是一个块级元素。

    #### 使用
    
    :::democode/html
    <ui-h>标题</ui-h>
    :::
    ```

    每一种用法的标题采用`####`，最简单的用法命名：`使用`，其余用法根据情况取名。

    #### 形态

    形态包含：`支持`、`尺寸`、`色彩`、`状态`四部分，其中`支持`是必需有的部分，`支持`部分的写法如下：

    ```md
    |类型|支持|默认|
    |-|-|-|
    |尺寸|全部|`m`|
    |色彩|全部|`black`|
    |状态|`normal`<br/>`apparent`|`normal`|
    ```

    若支持多种值，值之间用`<br/>`分隔。

    其余部分若组件支持则需要写出组件在这种形态下的所有情况，具体可参考[标题组件的形态](/component/h.html)。

    #### 配置

    配置包含：`配置表`、`配置演示`。

    配置表需要写清楚配置的Key、描述、接受值、值类型、默认值，其中接受值和值类型中多个值之间用`<br/>`分隔。

    配置演示中需要多每一项配做一个演示，如有必要可以增加文本说明，也可以使用多个演示。每个配置演示的标题采用`####`。具体可参考[开关组件的配置](/component/switch.html)。

    #### 方法

    组件的每个方法都需要有：`方法表达式`(采用`####`作为标题)、`方法说明`、`参数表`、`方法演示`。

    其中`方法演示`需要对方法的所有用法都做演示。具体可参考[开关组件的方法](/component/switch.html)。

    #### 事件

    组件的每个事件都需要有：`事件名`(采用`####`作为标题)、`事件说明`、`事件演示`。

    在事件的最后，需要增加组件的生命周期事件。具体可参考[文本输入框组件的事件](/component/textinput.html)。

    表单组件都需要包含`value-change`事件。

    交互组件大部分都包含`emit`事件，表示该组件被触发。

    #### 表单值

    表单值部分只有表单组件需要，需要说明：

    - 值类型 : 表单支持数值的类型
    - 值过滤 : 表单过滤数值的条件
    - 值格式 : 表单数值格式说明
    - 默认值
    - 输入/输出示例 : 在不同类型数值下，表单处理值的演示。

    具体可参考[文本输入框组件的表单值](/component/textinput.html)。

    #### 源码

    只需引入`<iframe src="/report/coverage/lib/components/[组件Key]/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>`，会自动生成组件的源码。其中`[组件Key]`，需要替换成对应组件的Key。

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
