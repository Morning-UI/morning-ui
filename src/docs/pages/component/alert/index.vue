<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 告示 `<ui-alert>`
    
    <doc-component-status page="alert"></doc-component-status>
    
    [[[开始]]]

    定义一个告示。

    #### 使用

    :::democode/html
    <ui-alert>展示的内容</ui-alert>
    :::

    [[[源码]]]

    <iframe src="/report/coverage/lib/components/alert/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>

    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                 from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'alert'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
