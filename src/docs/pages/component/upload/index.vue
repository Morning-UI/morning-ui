<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 文件上传 `<ui-upload>`
    
    <doc-component-status page="upload"></doc-component-status>
    
    [[[开始]]]

    定义文件上传框。

    #### 使用

    :::democode/html
    <div style="width:300px;">
        <ui-upload form-name="图片"></ui-upload>
    </div>
    :::

    [[[源码]]]

    <iframe src="/report/coverage/lib/components/upload/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>

    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                 from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'upload'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
