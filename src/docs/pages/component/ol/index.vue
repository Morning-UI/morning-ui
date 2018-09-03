<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 有序列表 `<ui-ol>`
    
    <doc-component-status page="ol"></doc-component-status>

    [[[开始]]]

    定义一个有序列表，支持多层嵌套，列表中每一项使用`<li>`标签。

    :::vue
    @name:使用
    ---
    #demo
    >tpl
    <ui-ol>
        <li>This is first</li>
        <li>This is second</li>
        <li>This is third</li>
    </ui-ol>
    :::

    :::vue
    @name:三层嵌套
    ---
    #demo
    >desc
    有序列表支持多层嵌套。
    >tpl
    <ui-ol>
        <li>This is 1</li>
        <ui-ol>
            <li>This is 2.1</li>
            <ui-ol>
                <li>This is 2.2.1</li>
                <li>This is 2.2.2</li>
            </ui-ol>
            <li>This is 2.3</li>
        </ui-ol>
        <li>This is 3</li>
    </ui-ol>
    :::

    :::vue
    @name:超过三层嵌套
    ---
    #demo
    >desc
    超过三层的无序列表，项目序号均为`lower-latin`。
    >tpl
    <ui-ol>
        <li>This is 1</li>
        <ui-ol>
            <li>This is 2.1</li>
            <ui-ol>
                <li>This is 2.2.1</li>
                <ui-ol>
                    <li>This is 2.2.2.1</li>
                    <li>This is 2.2.2.2</li>
                </ui-ol>
                <li>This is 2.2.3</li>
            </ui-ol>
            <li>This is 2.3</li>
        </ui-ol>
        <li>This is 3</li>
    </ui-ol>
    :::

    [[[形态]]]

    #### 支持

    |类型|支持|默认|
    |-|-|-|
    |尺寸|不支持|-|
    |色彩|不支持|-|
    |状态|`normal`<br/>`apparent`|`normal`|

    <a href="/guide/status.html">查看形态文档</a>

    :::vue
    @layout:state-na
    ---
    <ui-ol state="{$stateKey}">
        <li>this is {$&stateName} ui-ol</li>
        <li>this is {$&stateName} ui-ol</li>
    </ui-ol>
    <br>
    :::

    [[[源码]]]

    <iframe src="/report/coverage/lib/components/ol/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>
    </script>

    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'ol'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
