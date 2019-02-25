<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 卡片 `<ui-card>`
    
    <doc-component-status page="card"></doc-component-status>

    [[[开始]]]

    定义一张卡片，卡片包含头部和主体部分。

    :::vue
    @name:使用
    ---
    #demo
    >desc
    使用`slot="header"`来定义卡片头部部分，`slot="footer"`来定义卡片尾部部分，其他的内容为卡片主体部分。
    >tpl
    <div style="width:180px;height:240px;">
        <ui-card>
            <span slot="header">头部</span>
            <div>卡片</div>
            <span slot="footer">尾部</span>
        </ui-card>
    </div>
    :::

    :::vue
    @name:没有头尾部的卡片
    ---
    #demo
    >desc
    `slot="header"`不是必须的。
    >tpl
    <div style="width:180px;height:240px;">
        <ui-card>
            <div>卡片</div>
            <span slot="footer">尾部</span>
        </ui-card>
    </div>
    ---
    #demo
    >desc
    `slot="footer"`不是必须的。
    >tpl
    <div style="width:180px;height:240px;">
        <ui-card>
            <span slot="header">头部</span>
            <div>卡片</div>
        </ui-card>
    </div>
    ---
    #demo
    >desc
    同时去掉头部和尾部。
    >tpl
    <div style="width:180px;height:240px;">
        <ui-card>
            <div>卡片</div>
        </ui-card>
    </div>
    :::

    :::vue
    @name:无间隙卡片
    ---
    #demo
    >desc
    卡片内容部分默认具有间隙，可以通过`full`类来去除间隙。
    >tpl
    <div>
        <div style="width:180px;height:240px;display:inline-block;margin:10px;vertical-align: top;">
            <ui-card class="full">卡片</ui-card>
        </div>

        <div style="width:180px;height:240px;display:inline-block;margin:10px;vertical-align: top;">
            <ui-card class="full">
                <span slot="header">头部</span>
                <div>卡片</div>
                <span slot="footer">尾部</span>
            </ui-card>
        </div>
    </div>
    :::

    :::vue
    @name:头尾部内容支持HTML
    ---
    #demo
    >desc
    卡片的头尾部支持HTML，所以可以组合出更复杂的头部。
    >tpl
    <div style="width:240px;height:360px;">
        <ui-card color="extra-light-silver">
            <div slot="header">
                <ui-h size="xxs">内容列表</ui-h>
                <ui-textinput inside-name="搜索内容"></ui-textinput>
                <div class="operate" style="margin:10px 0">
                    <ui-btn size="s" color="success">新增</ui-btn>
                    <ui-link size="s" color="minor">查看帮助</ui-link>
                </div>
            </div>
            <div>卡片</div>
            <div slot="footer">
                <ui-label size="xs">标签1</ui-label>
                <ui-label size="xs" color="light-blue">标签2</ui-label>
                <ui-label size="xs" color="light-blue">标签3</ui-label>
            </div>
        </ui-card>
    </div>
    :::

    :::vue
    @name:卡片内部留白
    ---
    #demo
    >desc
    可以通过`inside-padding`样式类来为卡片增加内部留白。
    <br>
    一般可以配合自定义头部内容使用。
    >tpl
    <div style="width:240px;height:360px;">
        <ui-card color="extra-light-silver" class="inside-padding">
            <div slot="header">
                <ui-h size="xxs">内容列表</ui-h>
                <div class="operate" style="margin:10px 0">
                    <ui-btn size="xs" color="success">新增</ui-btn>
                    <ui-btn size="xs" color="minor">高级设置</ui-btn>
                    <ui-link size="xs" color="minor">查看帮助</ui-link>
                </div>
            </div>
            <div>卡片</div>
            <div slot="footer">
                <ui-label size="xs">标签1</ui-label>
                <ui-label size="xs" color="light-blue">标签2</ui-label>
                <ui-label size="xs" color="light-blue">标签3</ui-label>
            </div>
        </ui-card>
    </div>
    :::

    [[[形态]]]

    #### 支持

    |类型|支持|默认|
    |-|-|-|
    |尺寸|不支持|-|
    |色彩|全部|`theme`|
    |状态|不支持|-|

    <a href="/guide/status.html">查看形态文档</a>

    :::vue
    @layout:color
    ---
    <div style="width:180px;height:240px;display:inline-block;margin:10px;">
        <ui-card color="{$colorKey}">
            <span slot="header">{$&colorName}</span>
            <div>卡片</div>
        </ui-card>
    </div>
    :::

    [[[源码]]]

    <iframe src="/report/coverage/lib/components/card/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>
    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'card'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
