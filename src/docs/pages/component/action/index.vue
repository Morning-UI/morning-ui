<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 行动栏 `<ui-action>`
    
    <doc-component-status page="action"></doc-component-status>

    [[[基础]]]

    定义一个包含多个操作的行动栏。

    行动栏可包含：
    
    - 名称 .title
    - 说明 .note
    - 行动区域 .action

    #### 使用

    ````html
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
    ````

    #### 多个行动入口

    ````html
    <div style="width:400px">
        <ui-action>
            <div class="title">
                <h5>行动名称</h5>
                <span class="note">行动说明</span>
            </div>
            <div class="action">
                <ui-btn>确认</ui-btn>
                <ui-link minor>取消</ui-link>
            </div>
        </ui-action>
    </div>
    ````

    #### 垂直排列

    ````html
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
    <div style="width:400px">
        <ui-action {$size}>
            <div class="title">
                <h5>{$&name}</h5>
                <span class="note">行动说明</span>
            </div>
            <div class="action">
                <ui-btn {$size}>行动按钮</ui-btn>
            </div>
        </ui-action>
    </div>
    ````

    #### 色彩

    ````html
    @colorTheme
    @colorFeature
    @colorBlack
    @colorBlue
    @colorSilver
    @colorGray
    <div style="width:400px">
        <ui-action {$color}>
            <div class="title">
                <h5>{$&name}</h5>
                <span class="note">行动说明</span>
            </div>
            <div class="action">
                <ui-btn {$color}>{$name}按钮</ui-btn>
            </div>
        </ui-action>
    </div>
    <br>
    ````

    [[[单元测试]]]

    <iframe src="/coverage/lib/components/action/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>

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
