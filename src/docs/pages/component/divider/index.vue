<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 分频器 `<ui-divider>`
    
    <doc-component-status page="divider"></doc-component-status>

    [[[开始]]]

    定义一个分频器，分频器用来区分一个区块内的左右或上下两部分。

    分频器常配合`ui-grid`使用。

    :::vue
    > title
    使用
    ---
    <div style="width:500px;height:300px;border:1px solid #eee;">
        <ui-grid class="fill">
            <div class="c-11">
                <ui-center class="fill"><p>LEFT</p></ui-center>
            </div>
            <div class="c-2">
                <ui-divider>OR</ui-divider>
            </div>
            <div class="c-11">
                <ui-center class="fill"><p>RIGHT</p></ui-center>
            </div>
        </ui-grid>
    </div>
    :::

    :::vue
    > title
    竖直的分频器
    > desc
    添加`vertical`类可使用竖直的分频器。
    ---
    <div style="width:500px;height:300px;border:1px solid #eee;">
        <div style="width:100%;height:140px;">
            <ui-center class="fill"><p>TOP</p></ui-center>
        </div>
        <div style="width:100%;height:20px;">
            <ui-divider class="vertical">OR</ui-divider>
        </div>
        <div style="width:100%;height:140px;">
            <ui-center class="fill"><p>BOTTOM</p></ui-center>
        </div>
    </div>
    :::
    
    :::vue
    > title
    无内容的分频器
    ---
    <div style="width:500px;height:300px;border:1px solid #eee;">
        <ui-grid class="fill">
            <div class="c-11">
                <ui-center class="fill"><p>LEFT</p></ui-center>
            </div>
            <div class="c-2">
                <ui-divider></ui-divider>
            </div>
            <div class="c-11">
                <ui-center class="fill"><p>RIGHT</p></ui-center>
            </div>
        </ui-grid>
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


    [[[源码]]]

    <iframe src="/report/coverage/lib/components/divider/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>
    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'divider'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
