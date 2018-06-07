<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 视频播放 `<ui-video>`
    
    <doc-component-status page="video"></doc-component-status>
    
    [[[开始]]]

    定义一个视频播放，这是一个块元素。

    #### 使用

    :::democode/html
    <ui-video></ui-video>
    :::

    [[[源码]]]

    <iframe src="/report/coverage/lib/components/video/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>

    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                 from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'video'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
