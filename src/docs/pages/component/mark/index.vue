<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 标记的文本 `<ui-mark>`
    
    <doc-component-status page="mark"></doc-component-status>

    [[[基础]]]

    #### 使用

    定义标记内容，这是一个内联元素。
    
    ````html
    <ui-mark>标记的文本</ui-mark>
    ````

    [[[声明]]]

    #### 支持

    |类型|支持|默认|
    |-|-|-|
    |尺寸|不支持|-|
    |色彩|全部|`theme`|
    |状态|`normal`<br/>`apparent`|`normal`|

    #### 色彩

    ````html
    @color:theme
    @color:feature
    @color:black
    @color:blue
    @color:silver
    @color:gray
    <ui-mark {$colorKey}>{$&colorName}</ui-mark>
    ````

    #### 状态
    
    ````html
    @state:normal,apparent
    <ui-mark {$stateKey}>{$&stateName}</ui-mark>
    ````

    [[[单元测试]]]

    <iframe src="/report/coverage/lib/components/mark/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>
    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'mark'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
