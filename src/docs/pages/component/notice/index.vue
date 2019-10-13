<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 通知 `<ui-notice>`
    
    <doc-component-status page="notice"></doc-component-status>
    
    [[[开始]]]

    定义一个通知组件，这是一个块元素。

    :::vue
    @name:使用
    ---
    #demo
    >tpl
    <div>
        <ui-notice ref="demo1"></ui-notice>
        <ui-link js="window.morning.findVM('demo1').push('一条新消息('+new Date()+')');">推送一条新消息</ui-link>
    </div>
    :::

    [[[源码]]]

    <iframe src="/report/coverage/lib/components/notice/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>

    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                 from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'notice'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
