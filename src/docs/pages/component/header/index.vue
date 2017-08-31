<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 页头 `<ui-header>`

    ### 基础

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

    ### 声明

    #### 支持

    |类型|支持|默认|
    |-|-|-|
    |尺寸|全部|`m`|
    |色彩|全部|`black`|
    |状态|不支持|-|

    #### 尺寸

    ````html
    <ui-header class="mark" xxl>XXL尺寸<small>页头子标题</small></ui-header>
    <ui-header class="mark" xl>XL尺寸<small>页头子标题</small></ui-header>
    <ui-header class="mark" l>L尺寸<small>页头子标题</small></ui-header>
    <ui-header class="mark" m>M尺寸<small>页头子标题</small></ui-header>
    <ui-header class="mark" s>S尺寸<small>页头子标题</small></ui-header>
    <ui-header class="mark" xs>XS尺寸<small>页头子标题</small></ui-header>
    <ui-header class="mark" xxs>XXS尺寸<small>页头子标题</small></ui-header>
    ````

    #### 色彩

    ````html
    <ui-header theme>主题色<small>页头子标题</small></ui-header>
    <ui-header light-theme>浅主题色<small>页头子标题</small></ui-header>
    <ui-header dark-theme>深主题色<small>页头子标题</small></ui-header>
    ````

    ````html
    <ui-header success>成功/正确<small>页头子标题</small></ui-header>
    <ui-header warning>警告/注意<small>页头子标题</small></ui-header>
    <ui-header danger>错误/危险<small>页头子标题</small></ui-header>
    <ui-header primary>主要/关键<small>页头子标题</small></ui-header>
    <ui-header minor>次要/不醒目<small>页头子标题</small></ui-header>
    <ui-header info>信息/额外<small>页头子标题</small></ui-header>
    ````

    ````html
    <ui-header black>黑色<small>页头子标题</small></ui-header>
    <ui-header light-black>浅黑色<small>页头子标题</small></ui-header>
    <ui-header extra-light-black>超浅黑色<small>页头子标题</small></ui-header>

    <ui-header blue>青色<small>页头子标题</small></ui-header>
    <ui-header light-blue>浅青色<small>页头子标题</small></ui-header>
    <ui-header extra-light-blue>超浅青色<small>页头子标题</small></ui-header>

    <div style="background: #aaa">
        <ui-header silver>银色<small>页头子标题</small></ui-header>
        <ui-header light-silver>浅银色<small>页头子标题</small></ui-header>
        <ui-header extra-light-silver>超浅银色<small>页头子标题</small></ui-header>
    </div>

    <div style="background: #bbb">
        <ui-header gray>灰色<small>页头子标题</small></ui-header>
        <ui-header light-gray>浅灰色<small>页头子标题</small></ui-header>
        <ui-header white>白色<small>页头子标题</small></ui-header>
    </div>
    ````

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
