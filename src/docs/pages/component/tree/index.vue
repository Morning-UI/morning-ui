<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 树状控件 `<ui-tree>`
    
    <doc-component-status page="tree"></doc-component-status>

    [[[开始]]]

    定义一个树状控件，这是一个块元素。

    :::vue
    @name:使用
    ---
    #demo
    >desc
    使用`slot`的`name`属性标记内容对应的折叠面板的KEY，面板的KEY是唯一索引，所以`slot`不能重复。
    >tpl
    <div style="width: 560px;">
        <ui-tree></ui-tree>
    </div>
    :::

    [[[源码]]]

    <iframe src="/report/coverage/lib/components/tree/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>
    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'tree'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
