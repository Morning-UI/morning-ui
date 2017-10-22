<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 居中容器 `<ui-center>`
    
    <doc-component-status page="center"></doc-component-status>

    [[[基础]]]

    定义居中的容器，容器的内容将被居中显示，这是一个块级元素。

    #### 使用

    :::democode/html
    <div style="width:400px; height:300px;background-color:#EDF1F5">
        <ui-center>
            <div style="background-color:#A8B3C2;">居中div</div>
            居中文字
        </ui-center>
    </div>
    :::

    #### 填满容器的居中

    填满的居中容器高度为100%。


    :::democode/html
    <div style="width:400px; height:300px;background-color:#EDF1F5">
        <ui-center class="fill">
            <div style="background-color:#A8B3C2;">充满父容器</div>
            居中文字
        </ui-center>
    </div>
    :::

    [[[声明]]]

    #### 支持

    |类型|支持|默认|
    |-|-|-|
    |尺寸|不支持|-|
    |色彩|不支持|-|
    |状态|不支持|-|


    [[[单元测试]]]

    <iframe src="/report/coverage/lib/components/center/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>
    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'center'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
