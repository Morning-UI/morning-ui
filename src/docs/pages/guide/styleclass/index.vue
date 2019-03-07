<template>
    <doc-guide
        :page="page"
        :hasPadding="true" 
    >
    <script type="text/markdown">
    # 样式类

    样式类就是CSS类，可以给组件提供不同的样式。所有的组件都可以支持样式类，但是不同的组件有不同的样式类。

    样式类与形态的区别：

    - 形态是一种通用的组件属性，可以区分样式及JS逻辑，有一套全局的规范，大部分组件都支持。
    - 样式类不同的组件有不同的支持，仅用于区分样式，全局仅在命名上有规范，当组件有样式需求时才支持。

    你可以在组件文档的开始标签中找到支持的样式类。

    ## 用法

    样式类必须用在UI组件标签`<ui-*>`的`class`中。

    :::democode/html
    <!-- ui-label标签上的icon是样式类 -->
    <!-- span标签上的icon不是样式类 -->
    <ui-label class="icon">
        <i class="mo-icon mo-icon-star-f"></i>
        <span class="icon">标签</span>
    </ui-label>
    :::

    ## 样式类全局命名规范

    样式类在全局有一套命名规范，这样是为了防止不同的组件对于某个名词理解不同，导致同一名词在不同组件的不同行为。

    在为组件添加样式类前应先检查下面的列表，是否有含义相同的样式类，若有请使用，若没有请将新的样式类添加到下面列表并注明它的含义。

    - `horizontal` : 水平排列
    - `vertical` : 垂直排列
    - `gutter-none` : 子元素间没有间隙
    - `space-around` : 子元素间(包括两侧)均有相等间隙
    - `fill` : 高度填满父元素
    - `full` : 元素没有内边距
    - `margin` : 元素有外边距
    - `no-padding` : 元素无内边距
    - `inline` : 内联
    - `inline-block` : 内联块
    - `block` : 块级 / 区块
    - `mark` : 包含标记
    - `underline` : 下划线
    - `noborder` : 无边框
    - `flat` : 扁平
    - `circle` : 圆形
    - `line` : 线条
    - `image` : 使用图片
    - `icon` : 使用图标
    - `split` : 分隔
    - `round` : 圆角
    - `circle` : 圆形
    - `thumbnail` : 相框
    - `plain` : 朴素
    - `btn` : 按钮式
    - `border` : 边框
    - `item-title-left` : 项标题左对齐
    - `item-title-center` : 项标题居中对齐
    - `item-title-right` : 项标题右对齐

    </script>
    </doc-guide>
</template>
 
<script>
import DocGuide                    from 'Docs/common/DocGuide.vue';

export default {
    data : function () {

        return {
            page : 'styleclass'
        };

    },
    components : {
        'doc-guide' : DocGuide
    }
};
</script>

<style lang="less">
</style>
