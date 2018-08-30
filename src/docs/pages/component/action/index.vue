<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 行动栏 `<ui-action>`
    
    <doc-component-status page="action"></doc-component-status>

    [[[开始]]]

    定义一个包含多个操作的行动栏。

    :::vue
    > title
    使用
    > desc
    行动栏可包含：
    <br><br>
    - 名称: `.title`
    - 说明: `.note`
    - 行动区域: `.action`
    ---
    <div style="width:400px">
        <ui-action>
            <div class="title">
                <h5>行动名称</h5>
                <span class="note">行动说明</span>
            </div>
            <div class="action">
                <ui-btn>行动按钮</ui-btn>
            </div>
        </ui-action>
    </div>
    :::

    :::vue
    > title
    多个行动入口
    ---
    <div style="width:400px">
        <ui-action>
            <div class="title">
                <h5>行动名称</h5>
                <span class="note">行动说明</span>
            </div>
            <div class="action">
                <ui-btn>确认</ui-btn>
                <ui-link color="minor">取消</ui-link>
            </div>
        </ui-action>
    </div>
    :::

    :::vue
    > title
    垂直排列
    ---
    <div style="width:400px">
        <ui-action class="vertical">
            <div class="title">
                <h5>行动名称</h5>
                <span class="note">行动说明</span>
            </div>
            <div class="action">
                <ui-textinput></ui-textinput>
            </div>
        </ui-action>
    </div>
    :::

    [[[形态]]]

    #### 支持

    |类型|支持|默认|
    |-|-|-|
    |尺寸|全部|`m`|
    |色彩|全部|`black`|
    |状态|不支持|-|

    <a href="/guide/status.html">查看形态文档</a>

    #### 尺寸
    
    :::repeat/html
    size
    ---
    <div style="width:400px">
        <ui-action size="{$sizeKey}">
            <div class="title">
                <h5>{$&sizeName}</h5>
                <span class="note">行动说明</span>
            </div>
            <div class="action">
                <ui-btn size="{$sizeKey}">行动按钮</ui-btn>
            </div>
        </ui-action>
    </div>
    <br>
    :::

    #### 色彩

    :::repeat/html
    color:theme
    color:feature
    color:black
    color:blue
    color:silver
    color:gray
    ---
    <div style="width:400px">
        <ui-action color="{$colorKey}">
            <div class="title">
                <h5>{$&colorName}</h5>
                <span class="note">行动说明</span>
            </div>
            <div class="action">
                <ui-btn color="{$colorKey}">{$name}按钮</ui-btn>
            </div>
        </ui-action>
    </div>
    <br>
    :::

    [[[源码]]]

    <iframe src="/report/coverage/lib/components/action/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>

    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'action'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
