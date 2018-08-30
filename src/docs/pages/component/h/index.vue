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
    @name:link
    ---
    demo:
    > code
    <ui-btn :locked="3000">3秒后自动解锁</ui-btn>
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
