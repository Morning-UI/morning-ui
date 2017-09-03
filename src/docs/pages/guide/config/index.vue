<template>
    <doc-guide
        :page="page"
        :hasPadding="true" 
    >
    <script type="text/markdown">
    # 配置

    配置可以为组件提供不同的JS逻辑或样式。只有交互和表单组件支持配置，因为布局组件不支持JS逻辑。

    配置与声明的区别：

    - 声明是一种通用的组件属性，可以区分样式及JS逻辑，有一套全局的规范，大部分组件都支持。
    - 不通的组件可以有不同的配置，常用于区分JS逻辑，也可以区分样式，全局仅在命名上有规范，只有交互和表单组件支持。

    ### 用法

    配置必须用在UI组件标签`<ui-*>`的`attr`属性中，`key`为配置的名称，`value`是配置的数值。

    ````html
    <!-- ui-btn设置link配置 -->
    <!-- 配置名称是: link -->
    <!-- 配置数值是: http://www.google.com -->
    <ui-btn link="http://www.google.com">Google</ui-btn>
    ````

    配置基于`Vue`的`props`，你可以使用`v-bind`来传入复杂的配置，也可以使用JavaScript表达式。

    ````mixin
    @use:html.demo1,js.demo1
    ````

    ````html
    @var:demo1
    <!-- 通过v-bind为ui-pagination设置分页list -->
    <!-- 通过JavaScript表达式设置page-size -->
    <ui-pagination
        :list="list"
        :page-size="number + 1"
    >
        TODO
    </ui-pagination>
    ````

    ````js
    @var:demo1
    new Vue({
        el : '{$el}',
        template : '{$template}',
        data : {
            list : [1, 2, 3, 4, 5],
            number : 0
        }
    });
    ````

    更多用法见:[Vue/模板语法](https://cn.vuejs.org/v2/guide/syntax.html)

    ### 配置全局命名规范

    配置在全局有一套命名规范，这样是为了防止不同的组件对于某个名词理解不同，导致同一名词在不同组件的不同行为。

    在为组件添加配置前应先检查下面的列表，是否有含义相同的配置，若有请使用，若没有请将新的配置添加到下面列表并注明它的含义。

    - `c-[*]` : 栅格用，标记所占用的列

    ### 配置属性

    任何一项配置都包含五个关键属性：

    - key : 配置的名称
    - desc : 配置描述
    - accept : 接受值(可以是一个范围，也可以是几个值)
    - type : 值类型
    - default : 默认值

    组件的逻辑及文档必须响应这些关键属性。

    ### 独立性

    不同的配置之间应该是相互独立的，尽可能是无依赖的。

    </script>
    </doc-guide>
</template>

<script>
import DocGuide                    from 'Docs/common/DocGuide.vue';

export default {
    data : function () {

        return {
            page : 'config'
        };

    },
    components : {
        'doc-guide' : DocGuide
    }
};
</script>

<style lang="less">
</style>
