<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 日历 `<ui-calendar>`
    
    <doc-component-status page="calendar"></doc-component-status>
    
    [[[开始]]]

    定义一个日历，这是一个块级元素。

    #### 使用

    :::democode/html
    <div style="width:300px">
        <ui-calendar :highlight-day="[new Date('2017-11-5'), [new Date('2017-11-9'), new Date('2017-11-11')], [new Date('2017-10-27'), new Date('2017-11-2')], [new Date('2017-12-7'), new Date('2017-12-20')], new Date('2017-12-15')]"></ui-calendar>
    </div>
    :::

    [[[源码]]]

    <iframe src="/report/coverage/lib/components/calendar/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>

    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                 from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'calendar'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
