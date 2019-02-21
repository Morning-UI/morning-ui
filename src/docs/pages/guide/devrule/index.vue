<template>
    <doc-guide
        :page="page"
        :hasPadding="true" 
    >
    <script type="text/markdown">

    # 开发规范

    所有的开发者及代码检视者都必须遵循以下的规范。

    > 若下面的规范后添加了<ui-badge size="xxs" class="circle">AUTO</ui-badge>标记，则表示此条规范会在自动化测试中检测。

    ## 组件规范

    #### 通用
        
    - 组件在Vue模板中的标签以`mor-`开头<ui-badge size="xxs" class="circle">AUTO</ui-badge>
    - 组件绑定`:_uiid="uiid"`<ui-badge size="xxs" class="circle">AUTO</ui-badge>
    - 组件的`index.vue`，从上至下分别为:`<template>`、`<script>`、`<style>`三个标签
    - `<style>`标签必须有`lang="less"`属性
    - 引入了`<style lang="less" src="./index.less"></style>`
    - 使用`watch`对变量进行观察时尽量使用`this.$watch`方法
    - 组件中的`this.$watch`优先写到`mounted()`生命周期钩子函数中
    - 组件中有关`data.value`和`conf.group`的观察函数`this.$watch`优先写到`created()`生命周期钩子函数中
    - 支持`slot`的组件，在模板代码中加入了`slot`
    - 组件生成的HTML，最外层容器使用这样的标签：`<mor-[name]>`，其中`name`是组件的名称
    - 每个组件必须包含两个文件：`index.vue`和`index.less`
    - 除了表单组件之外的组件继承了`UI`类，表单组件继承了`Form`类
    - 在组件根标签的class中正确的绑定了支持的形态，完整示例：`:class="[sizeClass, colorClass, stateClass]"`
    - CSS中有支持的形态样式
    - 所有支持的形态，有默认样式，比如：
    ```less
    &{
        .si-m;
        .co-t;
        .st-normal;
    }
    ```
    - 组件的`name`正确
    - 通过ESLint及StyleLint<ui-badge size="xxs" class="circle">AUTO</ui-badge>
    - 在`lib/components/index.js`中导出了组件
    - 确保代码不受压缩的影响
    - 样式类的命名符合[样式类全局命名规范](/guide/styleclass.html#样式类全局命名规范)
    - 组件支持Vue.js的`in-DOM`模板
    - 组件内依赖其它组件，使用`morning-`前缀，比如依赖按钮使用：`morning-btn`
    - 支持形态的情况下，需要添加形态的样式
    - 组件内所有的色彩以`styles/var.less`中`@color`开头的变量为基础，可以修改亮度
    - 组件内的尺寸应尽量使用`styles/var.less`中`@fontSize`变量为基础
    - 组件内的尺寸单位首选`em`
    - LESS中的`id`、`class`、函数命名采用中划线命名<ui-badge size="xxs" class="circle">AUTO</ui-badge>
    - 形态在LESS中的书写顺序为：尺寸、颜色、状态
    - 组件的公开方法若不需要返回值，则返回当前`vm`实例
    - 编写CSS类名时应该仅可能简短
    - 编写CSS选择器时尽可能减少嵌套

    #### 交互组件

    - 配置的命名符合[配置全局命名规范](/guide/config.html#配置全局命名规范)
    - 添加`document`或全局级别的事件使用`utils/GlobalEvent.js`
    - 拖拽逻辑使用`utils/Move.js`
    - 弹出逻辑使用`utils/PopupManager.js`
    - `z-index`管理使用`utils/IndexManager.js`
    - 配置都需要设置类型及默认值
    - 组件私有的`methods`应该以下划线开头，非下划线开头的`methods`都是组件的公开方法
    - 支持生命周期事件
    - 配置要响应单向数据流(特殊情况可不响应)

    #### 表单组件

    - 表单组件继承了`Form`类
    - 表单组件的边框/背景颜色需要使用统一的颜色
    - 方法的命名符合[方法全局命名规范](/guide/method.html#方法全局命名规范)
    - 事件的命名符合[事件全局命名规范](/guide/event.html#事件全局命名规范)
    - 需要添加`_valueFilter`方法来处理数值过滤
    - 在模板中绑定以下的`props`:`form-name`、`form-key`、`group`、`hide-name`
    - 组件模板中包含显示`form-name`的位置
    - 当`hide-name`配置为`true`是隐藏`form-name`
    - 表单高度应尽量使用`styles/var.less`中`@formHeight`变量为基础
    - 表单边框、背景、文字等色彩以`styles/var.less`中`@colorForm`开头的变量为基础，可以修改亮度
    - 表单的值可被JSON序列化
    - 支持状态形态中的`normal`和`disabled`
    - 支持以下这些配置：`form-name`、`form-key`、`group`、`hide-name`
    - 支持以下这些方法：`.set`、`.get`、`.setName`、`.getName`、`.setKey`、`.getKey`、`.setGroup`、`.getGroup`、`.addGroup`、`.removeGroup`
    - 支持`value-change`事件

    ## 文档规范

    #### 通用

    - 文档包含：标题、组件状态栏、开始、形态、源码
    - 组件标题及HTML标签正确
    - 组件介绍跟在`开始`标签后面，清晰明白。如有必要可以追加详细说明。
    - `开始`中应该包含组件中所有样式类的名称、说明、演示
    - `使用`演示必须是最简单的，如需要可补充说明
    - `形态`中注明形态的支持情况，若不是全部支持，需要列出支持的项目
    - `形态`中的演示需要包含支持形态的每一种值示例，且示例遵循最小化原则(不要多种形态混合用，除非演示需要)，如需要可补充示例说明
    - `形态`中色彩演示部分，主题/功能/杂项色彩应该分区展示
    - 文档中代码演示部分应该具有较高的可读性，如果代码量较多需要加入适量的空行
    - 新增的样式类、配置、方法、事件命名需要加到全局命名规范中
    - 演示代码与展示源码保持一致，且两个区域是连在一起的
    - 文档的`page`属性正确

    #### 交互组件

    - 文档包含：标题、组件状态栏、开始、形态、配置、方法、事件、源码
    - 事件/生命周期事件中名称正确
    - 文档表格中`默认值`需要加反引号，如果是字符串需要再加引号
    - 文档表格中`值类型`一行一个，不需要加反引号
    - 文档表格中`接受值`一行一个，如有必要需要加说明，数值用反引号，说明直接写
    - 方法名称中的必填项直接写，可选项使用`[]`包裹，比如：`.set(key, [value])`中`key`是必填项，`value`是可选项
    - 具有生命周期事件演示
    - 如果配置的内容过多，在配置表单中简单说明并添加跳转锚点，详细内容写到配置的演示区域之上，和演示之间用`---`分割。
    - 对于不支持单向数据流的配置需要在配置文档中说明

    #### 表单组件

    - 文档包含：标题、组件状态栏、开始、形态、配置、方法、事件、表单值、源码
    - 具有状态形态中的`normal`和`disabled`的演示
    - 具有以下这些配置演示：`form-name`、`form-key`、`group`、`hide-name`
    - 具有以下这些方法演示：`.set`、`.get`、`.setName`、`.getName`、`.setKey`、`.getKey`、`.setGroup`、`.getGroup`、`.addGroup`、`.removeGroup`
    - 具有`value-change`事件演示

    ## 测试用例规范

    Coming soon

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
