<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 级联选择 `<ui-cascader>`
    
    <doc-component-status page="cascader"></doc-component-status>
    
    [[[开始]]]

    定义文本输入框。

    :::vue
    @name:使用
    ---
    #demo
    >tpl
    <div style="width:300px;">
        <ui-cascader form-name="地址"></ui-cascader>
    </div>
    :::

    [[[源码]]]

    <iframe src="/report/coverage/lib/components/cascader/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>

    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                 from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'cascader'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
