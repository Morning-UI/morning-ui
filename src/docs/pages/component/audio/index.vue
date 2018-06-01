<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 音频播放 `<ui-audio>`
    
    <doc-component-status page="audio"></doc-component-status>
    
    [[[开始]]]

    定义一个音频播放，这是一个内联块元素。

    #### 使用

    :::democode/html
    <div style="width: 300px">
        <ui-audio src="http://morning-ui-media.test.upcdn.net/audio/The%20xx%20-%20VCR.mp3"></ui-audio>
    </div>
    :::

    [[[源码]]]

    <iframe src="/report/coverage/lib/components/audio/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>

    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                 from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'audio'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
