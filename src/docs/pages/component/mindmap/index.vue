<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 思维导图 `<ui-mindmap>`
    
    <doc-component-status page="mindmap"></doc-component-status>
    <doc-component-experimental></doc-component-not-recommended>
    
    [[[开始]]]

    定义一个思维导图组件，这是一个块元素。

    :::vue
    @name:使用
    ---
    #demo
    >tpl
    <div style="height:600px">
        <ui-mindmap layout="LR" width="100%" height="100%" ref="mindmap"
        >
            <div slot="context-menu"><morning-btn size="s" color="white" @emit="$refs.mindmap.insertSubNode($refs.mindmap.data.contextMenu.nodeId);$refs.mindmap._hideContextMenu();">插入子级</morning-btn></div>
        </ui-mindmap>
    </div>
    >script
    {
        methods : {
            echo : function (){
                console.log(123,morning.map[10].getEdittingState())
            }
        }
    }
    :::

    [[[源码]]]

    <iframe src="/report/coverage/lib/components/mindmap/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>

    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                 from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'mindmap'
        };

    },
    methods : {},
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
