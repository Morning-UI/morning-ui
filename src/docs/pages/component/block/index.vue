<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 区块 `<ui-block>`
    
    <doc-component-status page="block"></doc-component-status>

    [[[开始]]]

    定义一个区块，区块一般包含标题和正文内容，区块与其他布局组件不同的是可以用来定义一个带风格的区域。

    #### 使用
    
    :::democode/html
    <ui-block>区块</ui-block>
    :::

    #### 常用示例
    
    :::democode/html
    <ui-block>
        <ui-h white xs>标题内容</ui-h>
        <ui-textcolor white>正文内容</ui-textcolor>
    </ui-block>
    :::

    #### 无间隙的区块

    可以通过添加`full`类来标记一个无间隙的区块。

    :::democode/html
    <ui-block class="full">无间隙的区块</ui-block>
    :::

    [[[声明]]]

    #### 支持

    |类型|支持|默认|
    |-|-|-|
    |尺寸|不支持|-|
    |色彩|全部|`theme`|
    |状态|不支持|-|

    #### 色彩

    :::preset/html
    statementColor
    ---
    uikey:block
    :::

    [[[源码]]]

    <iframe src="/report/coverage/lib/components/block/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>
    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'block'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
