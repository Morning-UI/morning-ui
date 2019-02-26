<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 抽屉 `<ui-drawer>`
    
    <doc-component-status page="drawer"></doc-component-status>
    
    [[[开始]]]

    定义一个抽屉，此组件是从父元素边缘滑出的浮层面板。

    :::vue
    @name:使用
    ---
    #demo
    >tpl
    <div>
        <ui-drawer ref="demo1"></ui-drawer>
        <ui-link js="window.morning.findVM('demo1').toggle(true);">显示抽屉</ui-link>
    </div>
    :::

    [[[源码]]]

    <iframe src="/report/coverage/lib/components/drawer/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>
    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'drawer'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
