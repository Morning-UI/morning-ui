<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 描述列表 `<ui-dl>`

    ### 基础

    定义一个描述列表，不支持嵌套，列表中每一项包含两个标签`<dt>`和`<dd>`。

    描述列表是一个块级元素。

    描述列表支持多种布局样式，可以通过额外的`class`来使用。

    #### 使用
    
    ````html
    <ui-dl>
        <dt>Foo</dt>
        <dd>this is detail of foo</dd>
        <dt>Bar</dt>
        <dd>this is detail of bar</dd>
    </ui-dl>
    ````

    #### 水平排列布局

    ````html
    <ui-dl class="horizon">
        <dt>Horizon</dt>
        <dd>this is horizon ui-dl</dd>
        <dt>Horizon</dt>
        <dd>this is horizon ui-dl</dd>
    </ui-dl>
    ````

    #### 下划线布局

    ````html
    <ui-dl class="underline">
        <dt>Horizon</dt>
        <dd>this is horizon ui-dl</dd>
        <dt>Horizon</dt>
        <dd>this is horizon ui-dl</dd>
    </ui-dl>
    ````

    ### 声明

    #### 支持

    |类型|支持|默认|
    |-|-|-|
    |尺寸|不支持|-|
    |色彩|不支持|-|
    |状态|`normal`<br/>`apparent`|`normal`|

    #### 状态
    
    ````html
    <ui-dl normal>
        <dt>Normal</dt>
        <dd>this is normal ui-dl</dd>
        <dt>Normal</dt>
        <dd>this is normal ui-dl</dd>
    </ui-dl>

    <br>

    <ui-dl apparent>
        <dt>Apparent</dt>
        <dd>this is apparent ui-dl</dd>
        <dt>Apparent</dt>
        <dd>this is apparent ui-dl</dd>
    </ui-dl>
    ````
    </script>

    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'dl'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
