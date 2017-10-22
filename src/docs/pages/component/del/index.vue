<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 删除的文本 `<ui-del>`
    
    <doc-component-status page="del"></doc-component-status>

    [[[开始]]]

    #### 使用

    将一段内容标记为废弃的，这是内联元素。
    
    :::democode/html
    <ui-del>中心内容</ui-del>
    :::

    [[[声明]]]

    #### 支持

    |类型|支持|默认|
    |-|-|-|
    |尺寸|不支持|-|
    |色彩|不支持|-|
    |状态|不支持|-|


    [[[源码]]]

    <iframe src="/report/coverage/lib/components/del/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>
    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'del'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
