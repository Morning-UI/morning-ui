<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    > 
    <script type="text/markdown">

    # 标题 `<ui-h>`
    
    <doc-component-status page="h"></doc-component-status>
    
    [[[开始]]]

    定义一个标准标题，此组件可以替换原生的`h1-h6`标签，这是一个块级元素。
    
    :::vue
    @name:使用
    ---
    #demo
    >tpl
    <ui-h>标题</ui-h>
    :::

    [[[形态]]]

    #### 支持

    |类型|支持|默认|
    |-|-|-|
    |尺寸|全部|`m`|
    |色彩|全部(除`transparent`)|`black`|
    |状态|`normal`<br/>`apparent`|`normal`|

    <a href="/guide/status.html">查看形态文档</a> / <a href="/design/color.html">查看色彩文档</a> / <a href="/design/color.html">查看色彩文档</a>
    
    :::vue
    @layout:size
    ---
    <ui-h size="{$sizeKey}">{$&sizeName}</ui-h>
    :::

    :::vue
    @layout:color
    ---
    <ui-h color="{$colorKey}">{$&colorName}</ui-h>
    :::

    :::vue
    @layout:state-na
    ---
    <ui-h state="{$stateKey}">{$&stateName}</ui-h>
    :::

    [[[源码]]]

    <iframe src="/report/coverage/lib/components/h/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>
    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'h'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
