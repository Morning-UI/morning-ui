<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 按钮 `<ui-btn>`

    ### 基础

    定义一个按钮，这是一个内联块元素。

    #### 使用

    ````html
    <ui-btn>按钮</ui-btn>
    ````

    ### 声明

    #### 支持

    |类型|支持|默认|
    |-|-|-|
    |尺寸|全部|`m`|
    |色彩|全部|`theme`|
    |状态|全部|`normal`|

    #### 尺寸

    ````html
    @size
    <ui-btn {$size}>{$&name}</ui-btn>
    ````

    #### 色彩

    ````html
    @colorTheme
    @colorFeature
    @colorBlack
    @colorBlue
    @colorSilver
    @colorGray
    <ui-btn {$color}>{$&name}</ui-btn>
    ````

    #### 状态
    
    ````html
    @stateALLwithTheme
    @stateALLwithFeature
    @stateALLwithBlue
    @stateALLwithSilver
    @stateALLwithGray
    <ui-btn {$state} {$color}>{$&name}</ui-btn>
    ````

    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'btn'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
