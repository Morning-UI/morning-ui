<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 小号文本 `<ui-small>`
    
    <doc-component-status page="small"></doc-component-status>

    <doc-component-not-recommended date="2019年4月6日" plan="使用<small>标签替代"></doc-component-not-recommended>

    [[[开始]]]

    标记一段小号内容，这是一个内联元素。
    
    :::vue
    @name:使用
    ---
    #demo
    >tpl
    <ui-small>小号文本</ui-small>
    :::

    [[[形态]]]

    #### 支持

    |类型|支持|默认|
    |-|-|-|
    |尺寸|不支持|-|
    |色彩|不支持|-|
    |状态|不支持|-|

    <a href="/guide/status.html">查看形态文档</a>


    [[[源码]]]

    <iframe src="/report/coverage/lib/components/small/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>
    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'small'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
