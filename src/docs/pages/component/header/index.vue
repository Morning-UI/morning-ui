<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 页头 `<ui-header>`
    
    <doc-component-status page="header"></doc-component-status>

    [[[开始]]]

    定义一个页头，常用在某个区块的头部使用，用于导航、显示标题等作用，这是一个块级元素。

    可通过`slot`来定义主标题部分，`slot="sub-title"`来定义子标题部分。

    :::vue
    @name:使用
    ---
    #demo
    >tpl
    <ui-header>页头标题</ui-header>
    :::

    :::vue
    @name:带下划线的页头
    ---
    #demo
    >tpl
    <ui-header underline>
        页头标题
        <span slot="sub-title">页头子标题</span>
    </ui-header>
    :::

    :::vue
    @name:带返回操作的页头
    ---
    #demo
    >tpl
    <ui-header show-back>
        页头标题
        <span slot="sub-title">页头子标题</span>
    </ui-header>
    :::

    :::vue
    @name:带面包屑导航的页头
    ---
    #demo
    >desc
    使用`slot="breadcrumbs"`来定义面包屑导航部分
    >tpl
    <ui-header>
        当前页面
        <span slot="sub-title">这里是说明</span>
        <ui-breadcrumbs
            slot="breadcrumbs"
            root-name="首页"
            :list="[
                {'level1' : '第一级'},
                {'level2' : '第二级'},
                {'current' : '当前页面'}
            ]"
        ></ui-breadcrumbs>
    </ui-header>
    :::

    :::vue
    @name:配合标签和头像一起使用
    ---
    #demo
    >tpl
    <ui-header>
        <ui-avatar class="circle"><ui-img src="https://cdn.dribbble.com/users/60266/avatars/normal/gustavo_avatar.jpg?1402000442"></ui-img></ui-avatar>
        当前页面
        <span slot="sub-title">这里是说明 <ui-label size="xs">标签</ui-label></span>
        <ui-breadcrumbs
            slot="breadcrumbs"
            root-name="首页"
            :list="[
                {'level1' : '第一级'},
                {'level2' : '第二级'},
                {'current' : '当前页面'}
            ]"
        ></ui-breadcrumbs>
    </ui-header>
    :::

    [[[形态]]]

    #### 支持

    |类型|支持|默认|
    |-|-|-|
    |尺寸|全部|`m`|
    |色彩|全部(除`transparent`)|`black`|
    |状态|不支持|-|

    <a href="/guide/status.html">查看形态文档</a> / <a href="/design/color.html">查看色彩文档</a>

    :::vue
    @layout:size
    ---
    <ui-header size="{$sizeKey}">{$&sizeName}<span slot="sub-title">页头子标题</span></ui-header>
    :::

    :::vue
    @layout:color
    ---
    <ui-header color="{$colorKey}">{$&colorName}<span slot="sub-title">页头子标题</span></ui-header>
    :::

    [[[配置]]]

    :::vue
    @name:mark
    ---
    #config
    >conf-desc
    显示页头标记。
    >conf-accept
    `true`<br>`false`
    >conf-type
    Boolean
    >conf-default
    `false`
    ---
    #demo
    >tpl
    <ui-header mark>
        页头标题
        <span slot="sub-title">页头子标题</span>
    </ui-header>
    :::

    :::vue
    @name:underline
    ---
    #config
    >conf-desc
    显示页头的下划线。
    >conf-accept
    `true`<br>`false`
    >conf-type
    Boolean
    >conf-default
    `false`
    ---
    #demo
    >tpl
    <ui-header underline>
        页头标题
        <span slot="sub-title">页头子标题</span>
    </ui-header>
    :::

    :::vue
    @name:show-back
    ---
    #config
    >conf-desc
    显示返回按钮，可以通过`back`事件来监听，此按钮被点击。
    >conf-accept
    `true`<br>`false`
    >conf-type
    Boolean
    >conf-default
    `false`
    ---
    #demo
    >tpl
    <ui-header show-back>
        页头标题
        <span slot="sub-title">页头子标题</span>
    </ui-header>
    ---
    #demo
    >desc
    配合`mark`一起使用。
    >tpl
    <ui-header show-back mark>
        页头标题
        <span slot="sub-title">页头子标题</span>
    </ui-header>
    ---
    #demo
    >desc
    配合`underline`一起使用。
    >tpl
    <ui-header show-back underline>
        页头标题
        <span slot="sub-title">页头子标题</span>
    </ui-header>
    :::

    [[[方法]]]
    
    <h1>暂无</h1>

    [[[事件]]]

    :::vue
    @name:back
    ---
    #event
    >event-desc
    开启`show-back`配置后，当返回按钮被点击时触发。
    ---
    #demo
    >tpl
    <div>
        <ui-header show-back @back="echo">
            页头标题
            <span slot="sub-title">页头子标题</span>
        </ui-header>
    </div>
    >script
    {
        methods : {
            echo : function () {
                console.log('demo1.console1', 'back event!');
            }
        }
    }
    :::

    :::vue
    @layout:lifecycle-event
    ---
    header
    页头
    :::

    [[[源码]]]

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
