<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 面板分割 `<ui-split>`
    
    <doc-component-status page="split"></doc-component-status>
    
    [[[开始]]]

    定义一个面板分割，这是一个块级元素。

    :::vue
    @name:使用
    ---
    #demo
    >tpl
    <div style="width:500px;height:100px;border: 1px #e0e0e0 solid">
        <ui-split>
            <div slot="a">左边面板</div>
            <div slot="b">右边面板</div>
        </ui-split>
    </div>
    :::

    [[[源码]]]

    <iframe src="/report/coverage/lib/components/split/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>

    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                 from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'split'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
