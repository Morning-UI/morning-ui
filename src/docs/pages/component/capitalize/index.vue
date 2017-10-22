<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 首字大写文本 `<ui-capitalize>`
    
    <doc-component-status page="capitalize"></doc-component-status>

    [[[基础]]]

    #### 使用

    首字大写文本组件，这是一个内联元素。
    
    :::democode/html
    <div><ui-capitalize>首字母大写的文本: tHere is A LEtter</ui-capitalize></div>
    :::

    [[[声明]]]

    #### 支持

    |类型|支持|默认|
    |-|-|-|
    |尺寸|不支持|-|
    |色彩|不支持|-|
    |状态|不支持|-|


    [[[单元测试]]]

    <iframe src="/report/coverage/lib/components/capitalize/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>
    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'capitalize'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
