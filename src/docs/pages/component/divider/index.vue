<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 分频器 `<ui-divider>`
    
    <doc-component-status page="divider"></doc-component-status>

    [[[基础]]]

    #### 使用

    定义一个分频器，分频器用来区分一个区块内的左右或上下两部分。

    分频器常配合`ui-grid`使用。
    
    ````html
    <div style="width:500px;height:300px;border:1px solid #eee;">
        <ui-grid class="fill">
            <div class="c-7">
                <ui-center class="fill"><p>LEFT</p></ui-center>
            </div>
            <div class="c-2">
                <ui-divider>OR</ui-divider>
            </div>
            <div class="c-7">
                <ui-center class="fill"><p>RIGHT</p></ui-center>
            </div>
        </ui-grid>
    </div>
    ````

    #### 竖直的分频器

    ````html
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
    ````

    #### 无内容的分频器
    
    ````html
    <div style="width:500px;height:300px;border:1px solid #eee;">
        <ui-grid class="fill">
            <div class="c-7">
                <ui-center class="fill"><p>LEFT</p></ui-center>
            </div>
            <div class="c-2">
                <ui-divider></ui-divider>
            </div>
            <div class="c-7">
                <ui-center class="fill"><p>RIGHT</p></ui-center>
            </div>
        </ui-grid>
    </div>
    ````

    [[[声明]]]

    #### 支持

    |类型|支持|默认|
    |-|-|-|
    |尺寸|不支持|-|
    |色彩|不支持|-|
    |状态|不支持|-|


    [[[单元测试]]]

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
