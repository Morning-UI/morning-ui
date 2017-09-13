<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 小提示 `<ui-tip>`
    
    <doc-component-status page="tip"></doc-component-status>
    
    [[[基础]]]

    定义一个小提示，为界面的元素提供简要说明。

    #### 使用

    ````html
    <span id="demo1">鼠标悬浮显示小提示</span>
    <ui-tip target="#demo1">提示内容</ui-tip>
    ````

    [[[单元测试]]]

    <iframe src="/report/coverage/lib/components/tip/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>

    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                 from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'tip'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
