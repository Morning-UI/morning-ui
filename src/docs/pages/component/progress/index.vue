<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 进度条 `<ui-progress>`
    
    <doc-component-status page="progress"></doc-component-status>
    
    [[[开始]]]

    定义进度条，这是一个块元素。

    #### 使用

    :::democode/html
    <div style="width:320px">
        <ui-progress></ui-progress>
    </div>
    :::

    #### 标记正在处理

    开启`progressing`配置后进度条会通过动画效果表示正在处理：

    :::democode/html
    <div style="width:320px">
        <ui-progress progressing></ui-progress>
    </div>
    :::

    #### 环状进度条

    :::democode/html
    <div style="width:160px">
        <ui-progress type="ring"></ui-progress>
    </div>
    :::
    [[[源码]]]

    <iframe src="/report/coverage/lib/components/progress/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>

    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                 from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'progress'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
