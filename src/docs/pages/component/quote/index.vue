<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 引用文本 `<ui-quote>`
    
    <doc-component-status page="quote"></doc-component-status>

    [[[开始]]]

    定义一段引用的内容，这是一个块级元素。

    :::vue
    @name:使用
    ---
    #demo
    >tpl
    <ui-quote>引用文本</ui-quote>
    :::

    [[[形态]]]

    #### 支持

    |类型|支持|默认|
    |-|-|-|
    |尺寸|不支持|-|
    |色彩|全部(除`transparent`)|`neutral-6`|
    |状态|不支持|-|

    <a href="/guide/status.html">查看形态文档</a> / <a href="/design/color.html">查看色彩文档</a>

    :::vue
    @layout:color
    ---
    <ui-quote color="{$colorKey}">{$&colorName}</ui-quote>
    <br>
    :::

    [[[源码]]]

    <iframe src="/report/coverage/lib/components/quote/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>
    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'quote'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
