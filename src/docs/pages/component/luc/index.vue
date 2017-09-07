<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 大小写 `<ui-lowercase>` `<ui-uppercase>` `<ui-capitalize>`
    
    <doc-component-status page="luc"></doc-component-status>

    [[[基础]]]

    #### 使用

    大小写控制组件，这是一个内联元素。
    
    ````html
    <div><ui-lowercase>小写的英文文本: tHere is A LEtter</ui-lowercase></div>
    <div><ui-uppercase>大写的英文文本: tHere is A LEtter</ui-uppercase></div>
    <div><ui-capitalize>首字母大写的文本: tHere is A LEtter</ui-capitalize></div>
    ````

    [[[声明]]]

    #### 支持

    |类型|支持|默认|
    |-|-|-|
    |尺寸|不支持|-|
    |色彩|不支持|-|
    |状态|不支持|-|


    [[[单元测试]]]

    <iframe src="/coverage/lib/components/luc/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>
    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'luc'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
