<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 颜色选择器 `<ui-colorpicker>`
    
    <doc-component-status page="colorpicker"></doc-component-status>
    
    [[[开始]]]

    定义文本输入框。

    #### 使用

    :::democode/html
    <div style="width:300px;">
        <ui-colorpicker form-name="颜色选择"></ui-colorpicker>
    </div>
    :::

    [[[源码]]]

    <iframe src="/report/coverage/lib/components/colorpicker/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>

    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                 from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'colorpicker'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
