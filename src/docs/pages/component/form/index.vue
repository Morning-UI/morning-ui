<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 表单 `<ui-form>`
    
    <doc-component-status page="form"></doc-component-status>
    <doc-component-experimental></doc-component-not-recommended>
    
    [[[开始]]]

    定义一组表单。

    :::vue
    @name:使用
    ---
    #demo
    >tpl
    <div style="width:420px;">
        <ui-form>
            <ui-formitem label="姓名">
                <ui-textinput form-key="name"></ui-textinput>
            </ui-formitem>
            <ui-formitem label="简介">
                <ui-textarea form-key="introduction"></ui-textarea>
            </ui-formitem>
        </ui-form>
    </div>
    :::

    [[[源码]]]

    <iframe src="/report/coverage/lib/components/form/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>

    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                 from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'form'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
