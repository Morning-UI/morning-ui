<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 按钮组 `<ui-btngroup>`
    
    <doc-component-status page="em"></doc-component-status>

    [[[基础]]]

    定义一个按钮组，按钮组可以通过特定的HTML结构格式化按钮。

    按钮组默认水平排列。

    #### 使用
    
    ````html
     <ui-btngroup>
        <ui-btn>按钮一</ui-btn>
        <ui-btn>按钮二</ui-btn>
        <ui-btn>按钮三</ui-btn>
        <ui-btn>按钮四</ui-btn>
    </ui-btngroup>
    ````

    #### 水平排列示例

    ````html
    <ui-btngroup class="horizontal">
        <ui-btn>按钮一</ui-btn>
        <ui-btn>按钮二</ui-btn>
        <ui-btn>按钮三</ui-btn>
        <ui-btn>按钮四</ui-btn>
    </ui-btngroup>
    ````

    #### 垂直排列示例

    ````html
    <ui-btngroup class="vertical">
        <ui-btn>按钮一</ui-btn>
        <ui-btn>按钮二</ui-btn>
        <ui-btn>按钮三</ui-btn>
        <ui-btn>按钮四</ui-btn>
    </ui-btngroup>
    ````

    #### 无间隔按钮组

    ````html
    <ui-btngroup class="nogap">
        <ui-btn success>确认</ui-btn>
        <ui-btn minor>取消</ui-btn>
    </ui-btngroup>

    <br/><br/>

    <ui-btngroup class="vertical nogap">
        <ui-btn success>确认</ui-btn>
        <ui-btn minor>取消</ui-btn>
    </ui-btngroup>
    ````

    #### 分隔按钮组

    按钮之间可以插入文本分隔。

    ````html
    <ui-btngroup class="split">
        <ui-btn success>确认</ui-btn>
        <span>或</span>
        <ui-btn minor>取消</ui-btn>
    </ui-btngroup>

    <br><br>

    <ui-btngroup class="split">
        <ui-btn minor>选择一</ui-btn>
        <span>或</span>
        <ui-btn minor>选择二</ui-btn>
        <span>或</span>
        <ui-btn info>热门选择</ui-btn>
    </ui-btngroup>
    ````

    [[[声明]]]

    #### 支持

    |类型|支持|默认|
    |-|-|-|
    |尺寸|不支持|-|
    |色彩|不支持|-|
    |状态|不支持|-|

    按钮组不支持声明，但可通过`ui-btn`自身的声明来控制。

    这也意味着你可以组合不同声明的按钮，这是一个十分有用的特性。

    #### 组合不同的声明

    ````html
    <p>不同尺寸组合</p>
    <ui-btngroup>
        <ui-btn l>按钮一</ui-btn>
        <ui-btn m minor>按钮二</ui-btn>
    </ui-btngroup>

    <br><br>

    <p>不同色彩组合</p>
    <ui-btngroup>
        <ui-btn success>按钮一</ui-btn>
        <ui-btn minor>按钮二</ui-btn>
    </ui-btngroup>

    <br><br>

    <p>不同状态组合</p>
    <ui-btngroup>
        <ui-btn normal minor>按钮一</ui-btn>
        <ui-btn apparent>按钮二</ui-btn>
    </ui-btngroup>

    <br><br>

    <ui-btngroup>
        <ui-btn normal>按钮一</ui-btn>
        <ui-btn loading>按钮二</ui-btn>
    </ui-btngroup>
    ````

    #### `ui-btn`尺寸

    ````html
    @size
    <ui-btngroup>
        <ui-btn {$size}>{$&name}</ui-btn>
        <ui-btn {$size}>{$&name}</ui-btn>
    </ui-btngroup>

    <br><br>
    ````

    #### `ui-btn`色彩

    ````html
    @colorTheme
    @colorFeature
    @colorBlack
    @colorBlue
    @colorSilver
    @colorGray
    <ui-btngroup>
        <ui-btn {$color}>{$&name}</ui-btn>
        <ui-btn {$color}>{$&name}</ui-btn>
    </ui-btngroup>

    <br><br>
    ````

    #### `ui-btn`状态
    
    ````html
    @stateALL
    <ui-btngroup>
        <ui-btn {$state}>{$&name}</ui-btn>
        <ui-btn {$state}>{$&name}</ui-btn>
    </ui-btngroup>

    <br><br>
    ````

    [[[单元测试]]]

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
