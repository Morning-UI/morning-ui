<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 警告提示 `<ui-alert>`
    
    <doc-component-status page="alert"></doc-component-status>
    
    [[[开始]]]

    定义一个警告提示，警告提示是一次性的信息展示组件，当警告提示被关闭后组件会被销毁。

    警告提示的内容支持HTML。

    :::vue
    @name:使用
    ---
    #demo
    >tpl
    <ui-alert>展示的内容</ui-alert>
    :::

    :::vue
    @name:不同类型的警告提示
    ---
    #demo
    >desc
    通过`type`配置可以设置不通的警告提示类型。
    >tpl
    <div>
        <ui-alert type="normal">展示的内容</ui-alert><br>
        <ui-alert type="success">展示的内容</ui-alert><br>
        <ui-alert type="warning">展示的内容</ui-alert><br>
        <ui-alert type="danger">展示的内容</ui-alert><br>
        <ui-alert type="primary">展示的内容</ui-alert><br>
        <ui-alert type="minor">展示的内容</ui-alert><br>
        <ui-alert type="info">展示的内容</ui-alert>
    </div>
    :::

    :::vue
    @name:显示图标
    ---
    #demo
    >desc
    每个类型的警告提示内置了默认图标，通过`show-icon`配置开启。
    >tpl
    <div>
        <ui-alert show-icon type="normal">展示的内容</ui-alert><br>
        <ui-alert show-icon type="success">展示的内容</ui-alert><br>
        <ui-alert show-icon type="warning">展示的内容</ui-alert><br>
        <ui-alert show-icon type="danger">展示的内容</ui-alert><br>
        <ui-alert show-icon type="primary">展示的内容</ui-alert><br>
        <ui-alert show-icon type="minor">展示的内容</ui-alert><br>
        <ui-alert show-icon type="info">展示的内容</ui-alert>
    </div>
    ---
    #demo
    >desc
    警告提示的内容支持HTML，你也可以设置自定义的图标。
    >tpl
    <ui-alert><i class="mo-icon mo-icon-list"></i> 展示的内容</ui-alert><br>
    :::

    :::vue
    @name:可关闭
    ---
    #demo
    >tpl
    <ui-alert can-close>展示的内容</ui-alert>
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
    @name:type
    ---
    #config
    >conf-desc
    警告提示的类型。
    >conf-accept
    `'normal'` : 正常<br>`'success'` : 完成(成功)<br>`'warning'` : 警告<br>`'danger'` : 危险(失败)<br>`'primary'` : 重要<br>`'minor'` : 次要(疑问)<br>`'info'` : 信息
    >conf-type
    String
    >conf-default
    `'normal'`
    ---
    #demo
    >tpl
    <div>
        <ui-alert show-icon type="normal">展示的内容</ui-alert><br>
        <ui-alert show-icon type="success">展示的内容</ui-alert><br>
        <ui-alert show-icon type="warning">展示的内容</ui-alert><br>
        <ui-alert show-icon type="danger">展示的内容</ui-alert><br>
        <ui-alert show-icon type="primary">展示的内容</ui-alert><br>
        <ui-alert show-icon type="minor">展示的内容</ui-alert><br>
        <ui-alert show-icon type="info">展示的内容</ui-alert>
    </div>
    :::

    :::vue
    @name:show-icon
    ---
    #config
    >conf-desc
    显示警告提示的默认图标，不同的`type`图标也不一样。
    >conf-accept
    `true`<br>`false`
    >conf-type
    Boolean
    >conf-default
    `false`
    ---
    #demo
    >desc
    每个类型的警告提示内置了默认图标，通过`show-icon`配置开启。
    >tpl
    <div>
        <ui-alert show-icon type="normal">展示的内容</ui-alert><br>
        <ui-alert show-icon type="success">展示的内容</ui-alert><br>
        <ui-alert show-icon type="warning">展示的内容</ui-alert><br>
        <ui-alert show-icon type="danger">展示的内容</ui-alert><br>
        <ui-alert show-icon type="primary">展示的内容</ui-alert><br>
        <ui-alert show-icon type="minor">展示的内容</ui-alert><br>
        <ui-alert show-icon type="info">展示的内容</ui-alert>
    </div>
    :::

    :::vue
    @name:can-close
    ---
    #config
    >conf-desc
    警告提示可以被主动关闭(显示关闭链接)。
    >conf-accept
    `true`<br>`false`
    >conf-type
    Boolean
    >conf-default
    `false`
    ---
    #demo
    >tpl
    <div>
        <ui-alert can-close type="normal">展示的内容</ui-alert><br>
        <ui-alert can-close type="success">展示的内容</ui-alert><br>
        <ui-alert can-close type="warning">展示的内容</ui-alert><br>
        <ui-alert can-close type="danger">展示的内容</ui-alert><br>
        <ui-alert can-close type="primary">展示的内容</ui-alert><br>
        <ui-alert can-close type="minor">展示的内容</ui-alert><br>
        <ui-alert can-close type="info">展示的内容</ui-alert>
    </div>
    :::

    :::vue
    @name:close-content
    ---
    #config
    >conf-desc
    关闭链接的内容(支持HTML)。
    >conf-accept
    关闭的DOM字符串
    >conf-type
    String
    >conf-default
    `'&lt;i class="mo-icon mo-icon-close">&lt;/i>'`
    ---
    #demo
    >desc
    自定义关闭的DOM。
    >tpl
    <div>
        <ui-alert can-close close-content="关闭">展示的内容</ui-alert>
    </div>
    :::

    :::vue
    @name:align
    ---
    #config
    >conf-desc
    警告提示内容的对齐方式。
    >conf-accept
    `'left'` : 左对齐<br>`'center'` : 居中对齐<br>`'right'` : 右对齐
    >conf-type
    String
    >conf-default
    `'left'`
    ---
    #demo
    >desc
    居中对齐。
    >tpl
    <ui-alert align="center">展示的内容</ui-alert>
    ---
    #demo
    >desc
    居中对齐配合`can-close`和`show-icon`。
    >tpl
    <ui-alert align="center" show-icon can-close>展示的内容</ui-alert>
    ---
    #demo
    >desc
    右对齐。
    >tpl
    <ui-alert align="right">展示的内容</ui-alert>
    ---
    #demo
    >desc
    右对齐配合`can-close`和`show-icon`。
    >tpl
    <ui-alert align="right" show-icon can-close>展示的内容</ui-alert>
    :::
    
    :::vue
    @name:title
    ---
    #config
    >conf-desc
    警告提示的标题(仅支持文本)，若为空字符串则不显示。
    >conf-accept
    标题字符串
    >conf-type
    String
    >conf-default
    `''`
    ---
    #demo
    >tpl
    <ui-alert title="标题内容">展示的内容</ui-alert>
    ---
    #demo
    >desc
    配置`can-close`和`show-icon`。
    >tpl
    <ui-alert title="标题内容" show-icon can-close>展示的内容</ui-alert>
    :::

    [[[方法]]]

    :::vue
    @name:close()
    ---
    #method
    >method-desc
    关闭警告提示。
    >method-return
    当前组件VM实例。
    ---
    #demo
    >tpl
    <div>
        <ui-alert ref="demo1">展示的内容</ui-alert>
        <br><br>
        <ui-link js="morning.findVM('demo1').close();">关闭</ui-link>
    </div>
    :::

    [[[事件]]]

    :::vue
    @name:close
    ---
    #event
    >event-desc
    当警告提示被关闭时触发。
    ---
    #demo
    >tpl
    <div>
        <ui-alert @close="echo" can-close>点击关闭触发</ui-alert>
    </div>
    >script
    {
        methods : {
            echo : function () {
                console.log('demo2.console1', 'close event!');
            }
        }
    }
    :::

    :::vue
    @layout:lifecycle-event
    ---
    alert
    警告提示
    :::

    [[[源码]]]

    <iframe src="/report/coverage/lib/components/alert/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>

    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                 from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'alert'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
