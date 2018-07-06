<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 计数器 `<ui-counter>`
    
    <doc-component-status page="counter"></doc-component-status>
    
    [[[开始]]]

    定义计数器。

    #### 使用

    :::democode/html
    <div style="width:120px;">
        <ui-counter form-name="数字"></ui-counter>
    </div>
    :::

    [[[源码]]]

    <iframe src="/report/coverage/lib/components/counter/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>

    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                 from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'counter'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
