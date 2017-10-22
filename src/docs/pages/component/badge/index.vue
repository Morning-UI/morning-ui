<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 徽章 `<ui-badge>`
    
    <doc-component-status page="badge"></doc-component-status>

    [[[开始]]]

    定义一个徽章，徽章一般跟在内容后面，来标记一些特殊的内容(通常是数字)，这是一个内联块元素。

    徽章内部只能包含文本内容。

    #### 使用

    :::democode/html
    <ui-badge>24</ui-badge>
    :::

    #### 扁平徽章

    :::democode/html
    <ui-badge class="flat">24</ui-badge>
    :::
    
    #### 圆形徽章

    :::democode/html
    <ui-badge class="circle">圆形徽章</ui-badge>
    :::

    #### 无内容隐藏

    当徽章内没有内容时，会自动隐藏。

    :::democode/html
    <ui-badge></ui-badge>
    :::

    [[[声明]]]

    #### 支持

    |类型|支持|默认|
    |-|-|-|
    |尺寸|全部|`m`|
    |色彩|全部|`theme`|
    |状态|`normal`<br/>`apparent`|`normal`|

    #### 尺寸
    
    :::repeat/html
    size
    ---
    <ui-badge {$sizeKey}>{$&sizeName}</ui-badge>
    :::
    
    :::repeat/html
    size
    ---
    <ui-badge class="circle" {$sizeKey}>{$&sizeName}</ui-badge>
    :::

    #### 色彩

    :::preset/html
    statementColor
    ---
    uikey:badge
    :::

    #### 状态
    
    :::repeat/html
    state:normal,apparent
    ---
    <ui-badge {$stateKey}>{$&stateName}</ui-badge>
    :::

    [[[源码]]]

    <iframe src="/report/coverage/lib/components/badge/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>
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
