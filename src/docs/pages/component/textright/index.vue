<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 右对齐文本 `<ui-textright>`
    
    <doc-component-status page="textright"></doc-component-status>

    <doc-component-not-recommended date="2019年3月7日" plan="使用CSS样式text-align来替代"></doc-component-not-recommended>

    [[[开始]]]

    内容右对齐组件，这是一个块级元素。

    :::vue
    @name:使用
    ---
    #demo
    >tpl
    <ui-textright>右对齐文本</ui-textright>
    :::

    [[[形态]]]

    #### 支持

    |类型|支持|默认|
    |-|-|-|
    |尺寸|不支持|-|
    |色彩|不支持|-|
    |状态|不支持|-|

    <a href="/guide/status.html">查看形态文档</a> / <a href="/design/color.html">查看色彩文档</a>


    [[[源码]]]

    <iframe src="/report/coverage/lib/components/textright/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>
    </script>
    </doc-component>
</template>

<script>
import DocComponent                from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'textright'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
