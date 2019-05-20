!function(n){function e(e){for(var o,a,u=e[0],m=e[1],c=e[2],l=0,s=[];l<u.length;l++)a=u[l],r[a]&&s.push(r[a][0]),r[a]=0;for(o in m)Object.prototype.hasOwnProperty.call(m,o)&&(n[o]=m[o]);for(d&&d(e);s.length;)s.shift()();return i.push.apply(i,c||[]),t()}function t(){for(var n,e=0;e<i.length;e++){for(var t=i[e],o=!0,u=1;u<t.length;u++){var m=t[u];0!==r[m]&&(o=!1)}o&&(i.splice(e--,1),n=a(a.s=t[0]))}return n}var o={},r={117:0},i=[];function a(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.m=n,a.c=o,a.d=function(n,e,t){a.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},a.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},a.t=function(n,e){if(1&e&&(n=a(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)a.d(t,o,function(e){return n[e]}.bind(null,o));return t},a.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return a.d(e,"a",e),e},a.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},a.p="/";var u=window.webpackJsonp=window.webpackJsonp||[],m=u.push.bind(u);u.push=e,u=u.slice();for(var c=0;c<u.length;c++)e(u[c]);var d=m;i.push([615,0]),t()}({1:function(n,e){n.exports=Vue},26:function(n,e,t){"use strict";t.r(e);var o=t(27),r=t.n(o);for(var i in o)"default"!==i&&function(n){t.d(e,n,function(){return o[n]})}(i);e.default=r.a},27:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o,r=t(3),i=(o=r)&&o.__esModule?o:{default:o};e.default={data:function(){return{page:"writedoc"}},components:{"doc-guide":i.default}},n.exports=e.default},292:function(n,e,t){"use strict";var o=function(){var n=this.$createElement,e=this._self._c||n;return e("doc-guide",{attrs:{page:this.page,hasPadding:!0}},[e("script",{attrs:{type:"text/markdown"}},[this._v('\n\n# 编写文档\n\n文档作为Morning UI的组成部分，是非常重要且必不可少的。\n\nMorning UI使用了一套基于[CommonMark Spec](http://spec.commonmark.org/)扩展的Markdown解析器，这意味着你可以使用任何[CommonMark Spec](http://spec.commonmark.org/)语法。\n\n## 如何编写\n\n#### 创建新文档\n\n在开始使用这些方便的用法前，你需要先为你的组件创建文档。\n\n组件的文档放在项目的`src/docs/pages/component`目录下，每一个文件夹就是一份组件文档。\n\n文件夹中包含:\n\n- index.js : 文档的视图模型\n- index.vue : 文档的内容\n\n为你的组件新建一个文件夹，然后生成这两个文件，`index.js`每个组件都一样只需要从别的组件拷贝一份即可，`index.vue`的模板如下：\n\n```html\n<template>\n    <doc-component\n            :page="page"\n            :hasPadding="true"\n        >\n    <script type="text/markdown">\n\n        \x3c!-- 文档内容 --\x3e\n\n        &lt;/script>\n    </doc-component>\n</template>\n \n<script>\nimport DocComponent                 from \'Docs/common/DocComponent.vue\';\n\nexport default {\n    data : function () {\n\n        return {\n            page : \'页面KEY\'\n        };\n\n    },\n    components : {\n        \'doc-component\' : DocComponent\n    }\n};\n&lt;/script>\n\n<style lang="less">\n</style>\n```\n\n这里只需要修改两个地方：\n\n1. `<template>`中的`文档内容`部分，你的文档写在这里\n2. `<script>`标签中的`页面KEY`部分，这里需要和组件的KEY保持一致\n\n这两个文件创建完成后，运行`npm run dev`，即可在`http://localhost:8080/component/[页面KEY].html`访问你的文档。\n\n#### 文档格式\n\n为了保证文档的一致性，请遵循下面的文档格式。\n\n##### 标题\n\n- `#` : 用于文档主标题\n- `###` : 用于每个章节的标题\n- `####` : 用于每个二级章节的标题\n- `#####` : 用于每个三级章节的标题\n\n文档中最多只能包含三级章节，且不使用`##`。\n\n##### 代码、演示及示例\n\n- ` ``` ` : 代码区域([CommonMark Spec](http://spec.commonmark.org/)支持)\n- `:::democode` : 演示及代码区域，包含示例和代码(扩展用法，见下面章节)\n- `:::vue` : Vue演示区域，包含符合Vue风格的示例和代码(扩展用法，见下面章节)\n- `:::preset` : 引用预设的文档内容(扩展用法，见下面章节)\n- `---demostart---`和`---demoend---` : 示例区域(扩展用法，见下面章节)\n\n##### 链接\n\n- `[标题](链接)` : 采用[CommonMark Spec](http://spec.commonmark.org/)的链接，如果是站内采用`/path/page.html`这样的跟相对路径。\n\n##### 文本样式\n\n- `__ __` : 加粗\n- `_ _` : 斜体\n- `~~ ~~` : 删除，采用[GFM的删除线](https://help.github.com/articles/basic-writing-and-formatting-syntax/#styling-text)\n\n##### 表格\n\n采用[GFM的表格](https://help.github.com/articles/organizing-information-with-tables/)。\n\n##### HTML或组件内容\n\n采用HTML。\n\n## 扩展功能\n\nMorning UI为了让开发者尽可能轻松的写文档，扩展了[CommonMark Spec](http://spec.commonmark.org/)。提供了很多方便的用法：\n\n- [删除线(GFM)](https://help.github.com/articles/basic-writing-and-formatting-syntax/#styling-text)\n- [表格(GFM)](https://help.github.com/articles/organizing-information-with-tables/)\n- 演示及代码(`democode`) : 一份代码，同时生成可视化的示例和完整展示代码。\n- Vue演示(`vue`) : 快速生成Vue容器、模板和JS，并进行绑定。\n- 预设(`preset`) : 预设的演示代码，传入配置即可生成演示代码。\n- 示例 : 用虚线框起来的一个区域，告诉使用者这里面是示例。用以区分文档和示例。\n\n其中`演示及代码`、`Vue演示`、`预设`都使用了同一种区块格式(这种格式我们称为`Markdown Extend`)，通过为这种区块格式指定不同的模式来决定最终的效果，后面的章节将详细介绍。\n\n#### `Markdown Extend`语法\n\n`Markdown Extend`是一个扩展语法，其中`演示及代码`、`Vue演示`、`预设`都基于这种语法，使用`:::`来标记区块，格式如下：\n\n```text\n:::[扩展名]/[代码语言]\n[扩展内容]\n:::\n```\n\n- `扩展名` : 标记区块的扩展模式，包括：演示及代码(`democode`)、Vue演示(`vue`)、预设(`preset`)\n- `代码语言` : <ui-badge size="xxs" color="minor">非必需</ui-badge>在`演示及代码`模式下，可标记`内容部分`的语言类型\n- `扩展内容` : <ui-badge size="xxs" color="minor">非必需</ui-badge>扩展的主体内容部分，在不同的模式下有不同的格式，下面的章节将详细介绍\n\n#### 演示及代码(`democode`)\n\n下面这段代码标记了一段演示及代码区域:\n\n```text\n:::democode/html\n<p>这是一个演示区域</p>\n:::\n```\n\n最后会在文档中生成如下的内容:\n\n---demostart---\n\n:::democode/html\n<p>这是一个演示区域</p>\n:::\n\n---demoend---\n\n`演示及代码`会同时生成示例和代码。避免了示例和代码需要重复写两份，这也可以确保示例和代码的一致性。\n\n在上面示例中的`html`你也可以替换成其他语言。\n\n#### Vue演示\n\n有些时候你的演示会需要使用到Vue的实例，这意味着需要创建Vue的容器、模板、JS并将它们绑定在一起，这时候你可以使用`Vue演示`来简化操作。\n\n下面是一个简单的Vue演示写法：\n\n```text\n:::vue\n#demo\n>tpl\n<div>\n    <ui-btn @emit="echo">点击触发emit事件</ui-btn>\n</div>\n>script\n{\n    methods : {\n        echo : function () {\n            console.log(\'emit event!\');\n        }\n    }\n}\n:::\n```\n\n其中`#demo`用来标记一个Vue实例演示区的开始，`>tpl`和`>script`需要和`#demo`一起使用，分别用来标记这个Vue实例的模板和脚本，最终效果：\n\n---demostart---\n\n:::vue\n#demo\n>tpl\n<div>\n    <ui-btn @emit="echo">点击触发emit事件</ui-btn>\n</div>\n>script\n{\n    methods : {\n        echo : function () {\n            console.log(\'emit event!\');\n        }\n    }\n}\n:::\n\n---demoend---\n\n##### Vue演示的标题\n\n你也可以像下面这样为你的Vue演示设置一个标题：\n\n```text\n:::vue\n@name:事件演示\n---\n#demo\n>tpl\n<div>\n    <ui-btn @emit="echo">点击触发emit事件</ui-btn>\n</div>\n>script\n{\n    methods : {\n        echo : function () {\n            console.log(\'emit event!\');\n        }\n    }\n}\n:::\n```\n\n其中`---`用来在Vue演示区域内分隔两个内区块，当出现`---`时第一个内区块是参数区。用`@[参数名]:[参数值]`来设置参数。\n\n`@name`可以用来设置一个标题。\n\n最终效果：\n\n---demostart---\n\n:::vue\n@name:事件演示\n---\n#demo\n>tpl\n<div>\n    <ui-btn @emit="echo">点击触发emit事件</ui-btn>\n</div>\n>script\n{\n    methods : {\n        echo : function () {\n            console.log(\'emit event!\');\n        }\n    }\n}\n:::\n\n---demoend---\n\n##### 多个Vue演示\n\n你也可以在一个Vue演示区域内展现多个Vue实例：\n\n```text\n:::vue\n@name:图片按钮\n---\n#demo\n>tpl\n<ui-btn class="circle">\n    <ui-img src="http://morning-ui-image.test.upcdn.net/48fc612216b4fd2112a6bcd7d0db6eba.jpeg"></ui-img>\n</ui-btn>\n---\n#demo\n>tpl\n<ui-btn class="circle plain" color="danger">\n    <ui-img src="http://morning-ui-image.test.upcdn.net/48fc612216b4fd2112a6bcd7d0db6eba.jpeg"></ui-img>\n</ui-btn>\n:::\n```\n\n同样通过多个`---`和`#demo`可以在一个Vue演示区域内展现多个Vue实例，效果如下：\n\n---demostart---\n\n:::vue\n@name:图片按钮\n---\n#demo\n>tpl\n<ui-btn class="circle">\n    <ui-img src="http://morning-ui-image.test.upcdn.net/48fc612216b4fd2112a6bcd7d0db6eba.jpeg"></ui-img>\n</ui-btn>\n---\n#demo\n>tpl\n<ui-btn class="circle plain" color="danger">\n    <ui-img src="http://morning-ui-image.test.upcdn.net/48fc612216b4fd2112a6bcd7d0db6eba.jpeg"></ui-img>\n</ui-btn>\n:::\n\n---demoend---\n\n##### 为单个Vue实例添加标题和描述\n\n在`#demo`后除了`>tpl`和`>script`外，还可以添加`>title`和`>desc`为某个Vue实例添加标题和描述：\n\n```text\n:::vue\n@name:图片按钮\n---\n#demo\n>title\n图片按钮效果\n>desc\n`circle`配合`ui-img`一起使用可实现图片按钮的效果。\n>tpl\n<ui-btn class="circle">\n    <ui-img src="http://morning-ui-image.test.upcdn.net/48fc612216b4fd2112a6bcd7d0db6eba.jpeg"></ui-img>\n</ui-btn>\n:::\n```\n\n效果如下：\n\n---demostart---\n\n:::vue\n@name:图片按钮\n---\n#demo\n>title\n图片按钮效果\n>desc\n`circle`配合`ui-img`一起使用可实现图片按钮的效果。\n>tpl\n<ui-btn class="circle">\n    <ui-img src="http://morning-ui-image.test.upcdn.net/48fc612216b4fd2112a6bcd7d0db6eba.jpeg"></ui-img>\n</ui-btn>\n:::\n\n---demoend---\n\n##### 在Vue演示中使用特殊的渲染器\n\n默认通过`#demo`标记的内区域将采用默认的Vue实例渲染器，如上面的示例演示的一样。但是针对复杂情况也支持特殊的渲染器，通过`#renderer`来标记一个实用特殊渲染的内区域：\n\n```text\n:::vue\n@name:尺寸\n---\n#renderer\n>name\nsize-repeat\n>tpl\n<ui-btn size="{$sizeKey}">{$&sizeName}</ui-btn>\n:::\n```\n\n其中使用`#renderer`时一定要添加`>name`来指定渲染器的名称。渲染器一般用于基于某个模板快速生成多个Vue实例，所以你可以在不同的渲染器的`>tpl`中使用变量，通过`{$[变量名]}`来使用，如果需要避免HTML转义可以使用`{$&[变量名]}`，最终效果如下：\n\n---demostart---\n\n:::vue\n@name:尺寸\n---\n#renderer\n>name\nsize-repeat\n>tpl\n<ui-btn size="{$sizeKey}">{$&sizeName}</ui-btn>\n:::\n\n---demoend---\n\n目前支持的渲染器有：\n\n|渲染器|参数/内容|说明|\n|-|-|-|\n|size-repeat|`sizeKey`：尺寸<br>`sizeName`：尺寸的名称|用来生成所有尺寸的演示内容|\n|color-repeat|`colorKey`：色彩<br>`colorName`：色彩的名称|用来生成所有色彩的演示内容|\n|state-repeat|`stateKey`：状态<br>`stateName`：状态的名称|用来生成所有状态的演示内容|\n|state-color-repeat|`colorKey`：色彩<br>`colorName`：色彩的名称<br>`stateKey`：状态<br>`stateName`：状态的名称|用来生成所有状态和色彩笛卡尔积的演示内容|\n|lifecycle-event(内部)|无|用来生成所有生命周期事件的演示内容|\n|value-type(内部)|无|用来生成表单组件的输入/输出的演示内容|\n\n\n##### 在Vue演示中使用布局\n\n通过上面的文档你已经了解到Vue演示的配置非常丰富，这就引出了一个问题，如果有很多类似的Vue演示，并且内容都很长，是否需要重复写。Vue演示布局就是用来解决这个问题的，布局可以认为是预先设置好的Vue演示配置，它的格式是：\n\n```text\n:::vue\n@laytou:[布局名称]\n---\n[布局内容/参数]\n```\n\n下面是一个例子：\n\n```text\n:::vue\n@layout:color\n---\n<ui-badge color="{$colorKey}">{$&colorName}</ui-badge>\n:::\n```\n\n它长的非常像一个Vue演示的写法，但不是。比如在`---`之后只能写布局内容/参数。最终效果：\n\n\n---demostart---\n\n:::vue\n@layout:color\n---\n<ui-badge color="{$colorKey}">{$&colorName}</ui-badge>\n:::\n\n---demoend---\n\n目前支持的布局有：\n\n|布局|参数/内容|说明|\n|-|-|-|\n|color|`colorKey`：色彩<br>`colorName`：色彩的名称|色彩演示|\n|size|`sizeKey`：尺寸<br>`sizeName`：尺寸的名称|尺寸演示|\n|state-na|`stateKey`：状态<br>`stateName`：状态的名称|状态演示(仅包含`normal`和`apparent`两种状态)|\n|lifecycle-event|无|生命周期事件演示|\n\n#### 预设\n\n在文档中存在着大量的雷同的文档，不同组件之间仅有几处区别，为了降低这部分重复工作。我们将这些文档做成了预设模板，你只需要传入对应的参数即可生成最终文档。\n\n使用方式如下：\n\n```text\n:::preset\n@name:formConfig\n@uikey:textinput\n@defaultValue:\'默认文本\'\n:::\n```\n\n在扩展的配置区域设置需要使用`预设`的名称，比如上面示例使用了`formStatus`预设。\n\n在内容区域有两种用法：\n\n一种是为`预设`传入的参数，一行一个，格式是`@[参数名]:[参数值]`，冒号分隔参数名和参数值，这些参数会填写到预设模板中对应的位置。\n\n另一种是不设置参数，内容区域整个传入。不同的预设支持不同的用法，详见下面的`所有预设`章节。\n\n最终的效果：\n\n---demostart---\n\n:::preset\n@name:formConfig\n@uikey:textinput\n@defaultValue:\'默认文本\'\n:::\n\n---demoend---\n\n可以看到上面这一大段的文档，仅需5行代码就可以生成，这就是`预设`的效果。\n\n##### 所有预设\n\n下面罗列了所有可以使用的预设及参数：\n\n|预设|参数/内容|说明|\n|-|-|-|\n|formStatus|@uikey：组件的Key<br>@wrapStyle：外部容器样式<br>@defaultValue：组件的默认值<br>@attrs：组件的配置<br>@slot：组件的插值|输出表单组件的形态文档(仅状态)|\n|formStatusWithStyle|@uikey：组件的Key<br>@wrapStyle：外部容器样式<br>@defaultValue：组件的默认值<br>@attrs：组件的配置<br>@slot：组件的插值|输出表单组件的形态文档(包含状态及色彩)|\n|formStatusWithSize|@uikey：组件的Key<br>@wrapStyle：外部容器样式<br>@defaultValue：组件的默认值<br>@attrs：组件的配置<br>@slot：组件的插值|输出表单组件的形态文档(包含状态及尺寸)|\n|formStatusWithStyleAndSize|@uikey：组件的Key<br>@wrapStyle：外部容器样式<br>@defaultValue：组件的默认值<br>@attrs：组件的配置<br>@slot：组件的插值|输出表单组件的形态文档(包含状态、色彩、尺寸)|\n|formConfig|@uikey：组件的Key<br>@wrapStyle：外部容器样式<br>@defaultValue：组件的默认值<br>@attrs：组件的配置<br>@slot：组件的插值<br>@formName：表单名<br>@formKey：表单KEY|表单组件基本配置演示文档|\n|formMethod|@uikey：组件的Key<br>@wrapStyle：外部容器样式<br>@defaultValue：组件的默认值<br>@attrs：组件的配置<br>@slot：组件的插值<br>@formName：表单名<br>@formKey：表单KEY|表单组件基本方法演示文档|\n|formEvent|@uikey：组件的Key<br>@wrapStyle：外部容器样式<br>@defaultValue：组件的默认值<br>@attrs：组件的配置<br>@slot：组件的插值<br>@formName：表单名<br>@formKey：表单KEY|表单组件基本事件演示文档|\n|formValue|@uikey：组件的Key<br>@wrapStyle：外部容器样式<br>@defaultValue：组件的默认值<br>@attrs：组件的配置<br>@slot：组件的插值<br>@formName：表单名<br>@formKey：表单KEY<br>@valueType：数值类型|表单组件输入/输出的演示文档|\n\n#### 示例\n\n有些时候你的示例不需要代码片段，仅仅是一段效果的HTML。这时候示例和文档会难以区分，比如这篇文档上面的那些`最终效果`。\n\n这时候你可以使用`---demostart---`和`---demoend---`将你的演示区域包裹起来，最终整个演示区域会被虚线框起来，用以区分示例和文档。\n\n注意：`---demostart---`和`---demoend---`前后需要空一行。\n\n## 文档编写规范\n\n编写文档时请遵循[开发规范](/guide/devrule.html)中的文档规范，[Code Review](/guide/review.html)将会检查文档编写规范。\n\n## 组件(Component)文档\n\n#### 内容组成\n\n组件的文档从上至下由几部分组成：\n\n- 标题 : 组件的名称及标签。\n- 组件状态栏 : 组件的单元/集成测试情况，测试覆盖率。组件最后更新日期、作者、commid id以及所有贡献者。\n- 开始 : 简单介绍组件，并从组件最简单的用法开始，一一列举组件常见的用法。\n- 形态 : 组件的形态支持情况，及所有形态的演示。\n- 配置 : 组件的配置详情，及配置的演示。\n- 方法 : 组件所有方法的演示及文档。\n- 事件 : 组件所有的事件演示及文档。\n- 表单值 : 组件的值类型、格式、默认值及输入/输出演示。\n- 源码 : 组件的`.vue`文件，及测试覆盖情况。\n\n从`开始`至`源码`部分都在标签页内，需要用添加标签名称。\n\n其中样式组件只需要：`标题`、`组件状态栏`、`开始`、`形态`、`源码`。\n\n交互组件在样式组件的基础上增加：`配置`、`方法`、`事件`。\n\n表单组件在交互组件的基础上增加：`表单值`。\n\n> 注意：所有的演示都要确保最小化的配置和代码，不要添加不必要的配置和代码。\n\n#### 标题\n\n包含组件的中文名及标签，使用`#`标题。比如：`# 多项输入框 <ui-multiinput>`\n\n#### 组件状态栏\n\n只需引入`<doc-component-status page="[组件Key]"></doc-component-status>`，会自动生成组件的状态栏。其中`[组件Key]`，需要替换成对应组件的Key。\n\n#### 开始\n\n在开始中首先要简短的介绍一下组件，然后演示组件最简单的用法，比如：\n\n```md\n\n定义一个标准标题，此组件可以替换原生的`h1-h6`标签，这是一个块级元素。\n\n#### 使用\n\n:::vue\n@name:使用\n---\n#demo\n>tpl\n<ui-h>标题</ui-h>\n:::\n```\n\n每一种用法的标题采用`####`，最简单的用法命名：`使用`，其余用法根据情况取名。\n\n#### 形态\n\n形态包含：`支持`、`尺寸`、`色彩`、`状态`四部分，其中`支持`是必需有的部分，`支持`部分的写法如下：\n\n```md\n|类型|支持|默认|\n|-|-|-|\n|尺寸|全部|`m`|\n|色彩|全部|`black`|\n|状态|`normal`<br/>`apparent`|`normal`|\n```\n\n若支持多种值，值之间用`<br/>`分隔。\n\n其余部分若组件支持则需要写出组件在这种形态下的所有情况，具体可参考[标题组件的形态](/component/h.html)。\n\n#### 配置\n\n配置包含：`配置表`、`配置演示`。\n\n配置表需要写清楚配置的Key、描述、接受值、值类型、默认值，其中接受值和值类型中多个值之间用`<br/>`分隔。\n\n配置演示中需要多每一项配做一个演示，如有必要可以增加文本说明，也可以使用多个演示。每个配置演示的标题采用`####`。具体可参考[开关组件的配置](/component/switch.html)。\n\n#### 方法\n\n组件的每个方法都需要有：`方法表达式`(采用`####`作为标题)、`方法说明`、`参数表`、`方法演示`。\n\n其中`方法演示`需要对方法的所有用法都做演示。具体可参考[开关组件的方法](/component/switch.html)。\n\n#### 事件\n\n组件的每个事件都需要有：`事件名`(采用`####`作为标题)、`事件说明`、`事件演示`。\n\n在事件的最后，需要增加组件的生命周期事件。具体可参考[文本输入框组件的事件](/component/textinput.html)。\n\n表单组件都需要包含`value-change`事件。\n\n交互组件大部分都包含`emit`事件，表示该组件被触发。\n\n#### 表单值\n\n表单值部分只有表单组件需要，需要说明：\n\n- 值类型 : 表单支持数值的类型\n- 值过滤 : 表单过滤数值的条件\n- 值格式 : 表单数值格式说明\n- 默认值\n- 输入/输出示例 : 在不同类型数值下，表单处理值的演示。\n\n具体可参考[文本输入框组件的表单值](/component/textinput.html)。\n\n#### 源码\n\n只需引入`<iframe src="/report/coverage/lib/components/[组件Key]/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>`，会自动生成组件的源码。其中`[组件Key]`，需要替换成对应组件的Key。\n\n## 指南(Guide)文档\n\nComing soon.\n\n')])])},r=[];o._withStripped=!0,t.d(e,"a",function(){return o}),t.d(e,"b",function(){return r})},615:function(n,e,t){"use strict";var o=i(t(1)),r=i(t(616));function i(n){return n&&n.__esModule?n:{default:n}}new o.default({el:"#root",render:function(n){return n(r.default)}})},616:function(n,e,t){"use strict";t.r(e);var o=t(292),r=t(26);for(var i in r)"default"!==i&&function(n){t.d(e,n,function(){return r[n]})}(i);var a=t(0),u=Object(a.a)(r.default,o.a,o.b,!1,null,null,null);u.options.__file="src/docs/pages/guide/writedoc/index.vue",e.default=u.exports}});