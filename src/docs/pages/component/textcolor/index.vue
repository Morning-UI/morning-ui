<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 文本颜色 `<ui-textcolor>`

    ### 基础

    定义文本的颜色，这是一个内联元素。

    #### 使用

    ````html
    <ui-textcolor>This is ui-textcolor</ui-textcolor>
    ````

    ### 声明

    #### 支持

    |类型|支持|默认|
    |-|-|-|
    |尺寸|不支持|-|
    |色彩|全部|`theme`|
    |状态|不支持|-|

    #### 色彩

    ````html
    @colorTheme
    @colorFeature
    @colorBlack
    @colorBlue
    @colorSilver
    @colorGray
    <ui-textcolor {$color}>{$&name}</ui-textcolor>
    ````
    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'textcolor'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
