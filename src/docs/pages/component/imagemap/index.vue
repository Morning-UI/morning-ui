<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 图片热区输入 `<ui-imagemap>`
    
    <doc-component-status page="imagemap"></doc-component-status>
    
    [[[开始]]]

    定义图片热区输入。

    #### 使用

    :::democode/html
    <div style="width:300px;">
        <ui-imagemap form-name="姓名"></ui-imagemap>
    </div>
    :::

    [[[源码]]]

    <iframe src="/report/coverage/lib/components/imagemap/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>

    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                 from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'imagemap'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
