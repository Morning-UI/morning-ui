<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 页头 `<ui-header>`
    
    <doc-component-status page="header"></doc-component-status>

    [[[基础]]]

    定义一个页头，常用在容器内部，这是一个块级元素。

    #### 使用

    ````html
    <ui-header>
        页头标题
    </ui-header>
    ````

    #### 子标题

    你可以使用`<small>`标记子标题。

    ````html
    <ui-header>
        页头标题<small>页头子标题</small>
    </ui-header>
    ````

    #### 带标记的页头

    ````html
    <ui-header class="mark">
        页头标题<small>页头子标题</small>
    </ui-header>
    ````

    #### 带下划线的页头

    ````html
    <ui-header class="underline">
        页头标题<small>页头子标题</small>
    </ui-header>
    ````

    [[[声明]]]

    #### 支持

    |类型|支持|默认|
    |-|-|-|
    |尺寸|全部|`m`|
    |色彩|全部|`black`|
    |状态|不支持|-|

    #### 尺寸

    ````html
    @size
    <ui-header class="mark" {$size}>{$&name}<small>页头子标题</small></ui-header>
    ````

    #### 色彩

    ````html
    @colorTheme
    @colorFeature
    @colorBlack
    @colorBlue
    @colorSilver
    @colorGray
    <ui-header {$color}>{$&name}<small>页头子标题</small></ui-header>
    ````

    [[[单元测试]]]

    <iframe src="/report/coverage/lib/components/header/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>
    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'header'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
