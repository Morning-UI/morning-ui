<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 日期时间选择器 `<ui-datetimepicker>`
    
    <doc-component-status page="datetimepicker"></doc-component-status>
    
    [[[开始]]]

    定义日期选择器。

    #### 使用

    :::democode/html
    <div style="width:300px;">
        <morning-datetimepicker form-name="日期时间"></morning-datetimepicker>
    </div>
    :::

    [[[源码]]]

    <iframe src="/report/coverage/lib/components/datetimepicker/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>

    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                 from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'datetimepicker'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
