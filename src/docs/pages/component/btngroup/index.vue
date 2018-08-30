<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 按钮组 `<ui-btngroup>`
    
    <doc-component-status page="em"></doc-component-status>

    [[[开始]]]

    定义一个按钮组，按钮组可以通过特定的HTML结构格式化按钮。

    按钮组默认水平排列。

    :::vue
    > title
    使用
    ---
    <ui-btngroup>
        <ui-btn>按钮一</ui-btn>
        <ui-btn>按钮二</ui-btn>
        <ui-btn>按钮三</ui-btn>
        <ui-btn>按钮四</ui-btn>
    </ui-btngroup>
    :::

    :::vue
    > title
    水平排列示例
    > desc
    添加`horizontal`样式类可以实现按钮水平排列。
    ---
    <ui-btngroup class="horizontal">
        <ui-btn>按钮一</ui-btn>
        <ui-btn>按钮二</ui-btn>
        <ui-btn>按钮三</ui-btn>
        <ui-btn>按钮四</ui-btn>
    </ui-btngroup>
    :::

    :::vue
    > title
    垂直排列示例
    > desc
    添加`vertical`样式类可以实现按钮垂直排列。
    ---
    <ui-btngroup class="vertical">
        <ui-btn>按钮一</ui-btn>
        <ui-btn>按钮二</ui-btn>
        <ui-btn>按钮三</ui-btn>
        <ui-btn>按钮四</ui-btn>
    </ui-btngroup>
    :::

    :::vue
    > title
    无间隔按钮组
    > desc
    添加`nogap`样式类可以实现无间隔按钮组。
    ---
    <div>
        <ui-btngroup class="nogap">
            <ui-btn color="success">确认</ui-btn>
            <ui-btn color="minor">取消</ui-btn>
        </ui-btngroup>

        <br/><br/>

        <ui-btngroup class="vertical nogap">
            <ui-btn color="success">确认</ui-btn>
            <ui-btn color="minor">取消</ui-btn>
        </ui-btngroup>
    </div>
    :::

    :::vue
    > title
    分隔按钮组
    > desc
    添加`split`样式类按钮之间可以插入文本分隔。
    ---
    <div>
        <ui-btngroup class="split">
            <ui-btn color="success">确认</ui-btn>
            <span>或</span>
            <ui-btn color="minor">取消</ui-btn>
        </ui-btngroup>

        <br><br>

        <ui-btngroup class="split">
            <ui-btn color="minor">选择一</ui-btn>
            <span>或</span>
            <ui-btn color="minor">选择二</ui-btn>
            <span>或</span>
            <ui-btn info>热门选择</ui-btn>
        </ui-btngroup>
    </div>
    :::

    [[[形态]]]

    #### 支持

    |类型|支持|默认|
    |-|-|-|
    |尺寸|不支持|-|
    |色彩|不支持|-|
    |状态|不支持|-|

    <a href="/guide/status.html">查看形态文档</a>

    :::vue
    > title
    组合不同的形态
    > desc
    按钮组不支持形态，但可通过`ui-btn`自身的形态来控制。
    <br><br>
    这也意味着你可以组合不同形态的按钮，这是一个十分有用的特性。
    ---
    <div>
        <p>不同尺寸组合</p>
        <ui-btngroup>
            <ui-btn size="l">按钮一</ui-btn>
            <ui-btn size="m" color="minor">按钮二</ui-btn>
        </ui-btngroup>

        <br><br>

        <p>不同色彩组合</p>
        <ui-btngroup>
            <ui-btn color="success">按钮一</ui-btn>
            <ui-btn color="minor">按钮二</ui-btn>
        </ui-btngroup>

        <br><br>

        <p>不同状态组合</p>
        <ui-btngroup>
            <ui-btn state="normal" color="minor">按钮一</ui-btn>
            <ui-btn state="apparent">按钮二</ui-btn>
        </ui-btngroup>

        <br><br>

        <ui-btngroup>
            <ui-btn state="normal">按钮一</ui-btn>
            <ui-btn state="disabled">按钮二</ui-btn>
        </ui-btngroup>
    </div>
    :::

    #### `ui-btn`尺寸
    
    :::repeat/html
    size
    ---
    <ui-btngroup>
        <ui-btn size="{$sizeKey}">{$&sizeName}</ui-btn>
        <ui-btn size="{$sizeKey}">{$&sizeName}</ui-btn>
    </ui-btngroup>

    <br><br>
    :::

    #### `ui-btn`色彩

    :::repeat/html
    color:theme
    color:feature
    color:black
    color:blue
    color:silver
    color:gray
    ---
    <ui-btngroup>
        <ui-btn color="{$colorKey}">{$&colorName}</ui-btn>
        <ui-btn color="{$colorKey}">{$&colorName}</ui-btn>
    </ui-btngroup>

    <br><br>
    :::

    #### `ui-btn`状态
    
    :::repeat/html
    state
    ---
    <ui-btngroup>
        <ui-btn state="{$stateKey}">{$&stateName}</ui-btn>
        <ui-btn state="{$stateKey}">{$&stateName}</ui-btn>
    </ui-btngroup>

    <br><br>
    :::

    [[[源码]]]

    <iframe src="/report/coverage/lib/components/em/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>
    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'btngroup'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
