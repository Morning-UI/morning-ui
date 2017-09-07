<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 对齐文本 `<ui-textleft>` `<ui-textcenter>` `<ui-textright>`
    
    <doc-component-status page="textlcr"></doc-component-status>

    [[[基础]]]

    #### 使用

    内容对齐组件，这是一个块级元素。
    
    ````html
    <ui-textleft>左对齐文本</ui-textleft>
    <ui-textcenter>居中的文本</ui-textcenter>
    <ui-textright>右对齐文本</ui-textright>
    ````

    [[[声明]]]

    #### 支持

    |类型|支持|默认|
    |-|-|-|
    |尺寸|不支持|-|
    |色彩|不支持|-|
    |状态|不支持|-|


    [[[单元测试]]]

    <iframe src="/coverage/lib/components/textlcr/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>
    </script>
    </doc-component>
</template>

<script>
import DocComponent                from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'textlcr'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
