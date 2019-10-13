<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 居中容器 `<ui-center>`
    
    <doc-component-status page="center"></doc-component-status>

    [[[开始]]]

    定义居中的容器，容器的内容将被居中显示，这是一个块级元素。

    :::vue
    @name:使用
    ---
    #demo
    >tpl
    <div style="width:400px; height:300px;background-color:#EDF1F5">
        <ui-center>
            <div style="background-color:#A8B3C2;">居中div</div>
            居中文字
        </ui-center>
    </div>
    :::

    :::vue
    @name:填满容器的居中
    ---
    #demo
    >desc
    填满的居中容器高度为100%。
    >tpl
    <div style="width:400px; height:300px;background-color:#EDF1F5">
        <ui-center height-fill>
            <div style="background-color:#A8B3C2;">充满父容器</div>
            居中文字
        </ui-center>
    </div>
    :::

    [[[形态]]]

    #### 支持

    |类型|支持|默认|
    |-|-|-|
    |尺寸|不支持|-|
    |色彩|不支持|-|
    |状态|不支持|-|

    <a href="/guide/status.html">查看形态文档</a> / <a href="/design/color.html">查看色彩文档</a>

    [[[配置]]]

    :::vue
    @name:height-fill
    ---
    #config
    >conf-desc
    居中容器的高度与父容器高度保持一致。
    >conf-accept
    `true`<br>`false`
    >conf-type
    Boolean
    >conf-default
    `false`
    ---
    #demo
    >tpl
    <div style="width:400px; height:300px;background-color:#EDF1F5">
        <ui-center height-fill>
            <div style="background-color:#A8B3C2;">充满父容器</div>
            居中文字
        </ui-center>
    </div>
    :::
    
    [[[方法]]]
    
    <h1>暂无</h1>

    [[[事件]]]

    :::vue
    @layout:lifecycle-event
    ---
    center
    居中容器
    :::

    [[[源码]]]

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
