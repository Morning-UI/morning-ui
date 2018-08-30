<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 内联列表 `<ui-il>`
    
    <doc-component-status page="il"></doc-component-status>

    [[[开始]]]

    定义一个内联列表，不支持嵌套，列表中每一项使用`<li>`标签。
    
    :::vue
    > title
    使用
    ---
    <ui-il>
        <li>This is first</li>
        <li>This is second</li>
        <li>This is third</li>
    </ui-il>
    :::

    [[[形态]]]

    #### 支持

    |类型|支持|默认|
    |-|-|-|
    |尺寸|不支持|-|
    |色彩|不支持|-|
    |状态|`normal`<br/>`apparent`|`normal`|

    <a href="/guide/status.html">查看形态文档</a>

    #### 状态    
    
    :::repeat/html
    state:normal,apparent
    ---
    <ui-il state="{$stateKey}">
        <li>this is {$&stateName} ui-il</li>
        <li>this is {$&stateName} ui-il</li>
    </ui-il>
    :::

    [[[源码]]]

    <iframe src="/report/coverage/lib/components/il/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>
    </script>

    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'il'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
