<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 中心内容 `<ui-lead>`
    
    <doc-component-status page="lead"></doc-component-status>

    [[[基础]]]

    #### 使用

    定义一段中心内容，这是一个块级元素。
    
    ````html
    <ui-lead>中心内容</ui-lead>
    ````

    [[[声明]]]

    #### 支持

    |类型|支持|默认|
    |-|-|-|
    |尺寸|不支持|-|
    |色彩|全部|`black`|
    |状态|`normal`<br/>`apparent`|`normal`|

    #### 色彩

    ````html
    @colorTheme
    @colorFeature
    @colorBlack
    @colorBlue
    @colorSilver
    @colorGray
    <ui-lead {$color}>{$&name}</ui-lead>
    ````

    #### 状态
    
    ````html
    @stateNA
    <ui-lead {$state}>{$&name}</ui-lead>
    ````

    [[[单元测试]]]

    <iframe src="/coverage/lib/components/lead/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>
    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'lead'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
