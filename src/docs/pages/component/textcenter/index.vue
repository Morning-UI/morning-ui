<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 居中对齐文本 `<ui-textcenter>`
    
    <doc-component-status page="textcenter"></doc-component-status>

    <doc-component-not-recommended date="2019年3月7日" plan="使用CSS样式text-align来替代"></doc-component-not-recommended>

    [[[开始]]]

    内容居中对齐组件，这是一个块级元素。
    
    :::vue
    @name:使用
    ---
    #demo
    >tpl
    <ui-textcenter>居中的文本</ui-textcenter>
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

    <iframe src="/report/coverage/lib/components/textcenter/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>
    </script>
    </doc-component>
</template>

<script>
import DocComponent                from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'textcenter'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
