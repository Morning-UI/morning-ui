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

    :::vue
    @name:使用
    ---
    #demo
    >tpl
    <ui-badge>24</ui-badge>
    :::

    :::vue
    @name:扁平徽章
    ---
    #demo
    >tpl
    <ui-badge class="flat">24</ui-badge>
    :::
    
    :::vue
    @name:圆形徽章
    ---
    #demo
    >tpl
    <ui-badge class="circle">圆形徽章</ui-badge>
    :::

    :::vue
    @name:无内容隐藏
    ---
    #demo
    >desc
    当徽章内没有内容时，会自动隐藏。
    >tpl
    <ui-badge></ui-badge>
    :::

    [[[形态]]]

    #### 支持

    |类型|支持|默认|
    |-|-|-|
    |尺寸|全部|`m`|
    |色彩|全部|`theme`|
    |状态|`normal`<br/>`apparent`|`normal`|

    <a href="/guide/status.html">查看形态文档</a>

    :::repeat/html
    size
    ---
    <ui-badge size="{$sizeKey}">{$&sizeName}</ui-badge>
    :::
    
    :::repeat/html
    size
    ---
    <ui-badge class="circle" size="{$sizeKey}">{$&sizeName}</ui-badge>
    :::

    :::preset/html
    statusColor
    ---
    uikey:badge
    :::

    :::repeat/html
    state:normal,apparent
    ---
    <ui-badge state="{$stateKey}">{$&stateName}</ui-badge>
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
