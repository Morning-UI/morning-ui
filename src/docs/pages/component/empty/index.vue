<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 空状态 `<ui-empty>`
    
    <doc-component-status page="empty"></doc-component-status>
    
    [[[开始]]]

    定义一个空状态组件，一般用于没有数据或信息时展示(通过`v-if`或`v-show`)。

    :::vue
    @name:使用
    ---
    #demo
    >tpl
    <div style="width:360px;height:220px">
        <ui-empty></ui-empty>
    </div>
    :::

    :::vue
    @name:添加附属内容
    ---
    #demo
    >desc
    可以通过`slot`来为empty添加额外的内容
    >tpl
    <div style="width:360px;height:220px">
        <ui-empty>
            <ui-btn color="success" size="xs">创建内容</ui-btn>
        </ui-empty>
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

    [[[配置]]]

    :::vue
    @name:image
    ---
    #config
    >conf-desc
    自定义提示图片或图标。
    <br>
    需要注意的是由于`image`中的内容通过字符串模板的形式渲染，所以若使用了组件，则无法使用上下文的`props`、`data`、`methods`等属性或方法。
    >conf-accept
    提示内容的HTML
    >conf-type
    String
    >conf-default
    `'<i class="mo-icon mo-icon-drawer-empty"></i>'`
    ---
    #demo
    >desc
    自定义的提示图标。
    >tpl
    <div style="width:360px;height:220px">
        <ui-empty
            image='<i class="mo-icon mo-icon-block-9"></i>'
        ></ui-empty>
    </div>
    ---
    #demo
    >desc
    自定义的提示图片。
    >tpl
    <div style="width:360px;height:220px">
        <ui-empty
            image='<img src="http://h0.hucdn.com/open201908/a4d8596b03d3a641_300x300.png" width="80"></img>'
        ></ui-empty>
    </div>
    ---
    #demo
    >desc
    在自定义提示图片中使用组件。
    <br>
    需要注意的是由于`image`中的内容通过字符串模板的形式渲染，所以若使用了组件，则无法使用上下文的`props`、`data`、`methods`等属性或方法。
    >tpl
    <div style="width:360px;height:220px">
        <ui-empty
            image='<ui-img class="circle" src="http://h0.hucdn.com/open201908/a4d8596b03d3a641_300x300.png" width="80"></ui-img>'
        ></ui-empty>
    </div>
    ---
    #demo
    >desc
    可以输入空的`image`配置来隐藏图片。
    >tpl
    <div style="width:360px;height:220px">
        <ui-empty
            image=''
        ></ui-empty>
    </div>
    :::

    :::vue
    @name:note
    ---
    #config
    >conf-desc
    自定义提示文案。
    <br>
    需要注意的是由于`note`中的内容通过字符串模板的形式渲染，所以若使用了组件，则无法使用上下文的`props`、`data`、`methods`等属性或方法。
    >conf-accept
    提示内容HTML
    >conf-type
    String
    >conf-default
    `暂无数据`
    ---
    #demo
    >tpl
    <div style="width:360px;height:220px">
        <ui-empty
            note="无内容"
        ></ui-empty>
    </div>
    ---
    #demo
    >desc
    使用HTML的提示文案。
    >tpl
    <div style="width:360px;height:220px">
        <ui-empty
            note="<b>无内容</b>"
        ></ui-empty>
    </div>
    ---
    #demo
    >desc
    在自定义提示文案中使用组件。
    >tpl
    <div style="width:360px;height:220px">
        <ui-empty
            note="无内容，你可以：<ui-link>重新加载<ui-link>"
        ></ui-empty>
    </div>
    ---
    #demo
    >desc
    可以输入空的`note`配置来隐藏提示文案。
    >tpl
    <div style="width:360px;height:220px">
        <ui-empty
            note=''
        ></ui-empty>
    </div>
    :::

    [[[方法]]]
    
    <h1>暂无</h1>

    [[[事件]]]

    :::vue
    @layout:lifecycle-event
    ---
    empty
    :::


    [[[源码]]]

    <iframe src="/report/coverage/lib/components/empty/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>

    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                 from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'empty'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
