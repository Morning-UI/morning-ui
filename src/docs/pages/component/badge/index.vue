<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 徽章 `<ui-badge>`

    ### 基础

    定义一个徽章，徽章一般跟在内容后面，来标记一些特殊的内容(通常是数字)，这是一个内联块元素。

    徽章内部只能包含文本内容。

    #### 使用

    ````html
    <ui-badge>24</ui-badge>
    ````

    #### 扁平徽章

    ````html
    <ui-badge class="flat">24</ui-badge>
    ````
    
    #### 圆形徽章

    ````html
    <ui-badge class="circle">圆形徽章</ui-badge>
    ````

    #### 无内容隐藏

    当徽章内没有内容时，会自动隐藏。

    ````html
    <ui-badge></ui-badge>
    ````

    ### 声明

    #### 支持

    |类型|支持|默认|
    |-|-|-|
    |尺寸|全部|`m`|
    |色彩|全部|`theme`|
    |状态|`normal`<br/>`apparent`|`normal`|

    #### 尺寸

    ````html
    @size
    <ui-badge {$key}>{$&name}</ui-badge>
    ````

    ````html
    @size
    <ui-badge class="circle" {$key}>{$&name}</ui-badge>
    ````

    #### 色彩

    ````html
    @colorTheme
    @colorFeature
    @colorBlack
    @colorBlue
    @colorSilver
    @colorGray
    <ui-badge {$key}>{$&name}</ui-badge>
    ````

    #### 状态

    ````html
    @stateNA
    <ui-badge {$key}>{$&name}</ui-badge>
    ````
    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'badge'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
