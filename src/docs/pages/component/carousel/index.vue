<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 轮播 `<ui-carousel>`

    <doc-component-status page="carousel"></doc-component-status>
    
    [[[开始]]]

    定义一个按钮，这是一个内联块元素。

    #### 使用

    :::democode/html
    <ui-carousel
        :list="[
            {
                img : '',
                link : ''
            }
        ]"
    ></ui-carousel>
    :::

    [[[源码]]]

    <iframe src="/report/coverage/lib/components/carousel/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>

    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                 from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'carousel'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
