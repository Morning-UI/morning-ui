<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 中心内容 `<ui-lead>`
    
    <doc-component-status page="lead"></doc-component-status>

    [[[开始]]]

    定义一段中心内容，这是一个块级元素。

    :::vue
    @name:使用
    ---
    #demo
    >tpl
    <ui-lead>中心内容</ui-lead>
    :::

    [[[形态]]]

    #### 支持

    |类型|支持|默认|
    |-|-|-|
    |尺寸|不支持|-|
    |色彩|全部(除`transparent`)|`black`|
    |状态|`normal`<br/>`apparent`|`normal`|

    <a href="/guide/status.html">查看形态文档</a> / <a href="/design/color.html">查看色彩文档</a> / <a href="/design/color.html">查看色彩文档</a>

    :::vue
    @layout:color
    ---
    <ui-lead color="{$colorKey}">{$&colorName}</ui-lead>
    :::

    :::vue
    @layout:state-na
    ---
    <ui-lead state="{$stateKey}">{$&stateName}</ui-lead>
    :::

    [[[源码]]]

    <iframe src="/report/coverage/lib/components/lead/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>
    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'lead'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
