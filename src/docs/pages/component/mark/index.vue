<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 标记的文本 `<ui-mark>`

    ### 基础

    #### 使用

    定义标记内容，这是一个内联元素。
    
    ````html
    <ui-mark>标记的文本</ui-mark>
    ````

    ### 声明

    #### 支持

    |类型|支持|默认|
    |-|-|-|
    |尺寸|不支持|-|
    |色彩|全部|`theme`|
    |状态|`normal`<br/>`apparent`|`normal`|

    #### 色彩

    ````html
    @colorTheme
    @colorFeature
    @colorBlack
    @colorBlue
    @colorSilver
    @colorGray
    <ui-mark {$key}>{$&name}</ui-mark>
    ````

    #### 状态
    
    ````html
    @stateNA
    <ui-mark {$key}>{$&name}</ui-mark>
    ````
    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'mark'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
