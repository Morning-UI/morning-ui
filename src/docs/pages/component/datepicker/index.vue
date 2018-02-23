<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 日期选择器 `<ui-datepicker>`
    
    <doc-component-status page="datepicker"></doc-component-status>
    
    [[[开始]]]

    定义日期选择器。

    #### 使用

    :::democode/html
    <div style="width:300px;">
        <morning-private-datepicker :date="+new Date('2018-1-1')" :selectable-range="[['2017-12-10', '2017-12-15'], ['2017-12-23', '2018-01-10'], ['2018-01-23', '2018-02-03']]" form-name="日期"></morning-private-datepicker>
    </div>
    :::
    
    [[[源码]]]

    <iframe src="/report/coverage/lib/components/datepicker/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>

    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                 from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'datepicker'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
