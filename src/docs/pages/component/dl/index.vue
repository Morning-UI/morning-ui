<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 描述列表 `<ui-dl>`
    
    <doc-component-status page="dl"></doc-component-status>

    [[[开始]]]

    定义一个描述列表，不支持嵌套，列表中每一项包含两个标签`<dt>`和`<dd>`。

    描述列表是一个块级元素。

    描述列表支持多种布局样式，可以通过额外的`class`来使用。

    #### 使用
    
    :::democode/html
    <ui-dl>
        <dt>Foo</dt>
        <dd>this is detail of foo</dd>
        <dt>Bar</dt>
        <dd>this is detail of bar</dd>
    </ui-dl>
    :::

    #### 水平排列布局

    :::democode/html
    <ui-dl class="horizontal">
        <dt>Horizon</dt>
        <dd>this is horizontal ui-dl</dd>
        <dt>Horizon</dt>
        <dd>this is horizontal ui-dl</dd>
    </ui-dl>
    :::

    #### 下划线布局

    :::democode/html
    <ui-dl class="underline">
        <dt>Underline</dt>
        <dd>this is underline ui-dl</dd>
        <dt>Underline</dt>
        <dd>this is underline ui-dl</dd>
    </ui-dl>
    :::

    [[[形态]]]

    #### 支持

    |类型|支持|默认|
    |-|-|-|
    |尺寸|不支持|-|
    |色彩|不支持|-|
    |状态|`normal`<br/>`apparent`|`normal`|

    #### 状态
    
    :::repeat/html
    state:normal,apparent
    ---
    <ui-dl state="{$stateKey}">
        <dt>{$&stateName}</dt>
        <dd>this is normal ui-dl</dd>
        <dt>{$&stateName}</dt>
        <dd>this is normal ui-dl</dd>
    </ui-dl>
    <br>
    :::

    [[[源码]]]

    <iframe src="/report/coverage/lib/components/dl/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>
    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'dl'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
