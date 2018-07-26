<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 告示 `<ui-alert>`
    
    <doc-component-status page="alert"></doc-component-status>
    
    [[[开始]]]

    定义一个告示，告示是一次性的信息展示组件，当告示被关闭后组件会被销毁。

    告示的内容支持HTML。

    #### 使用

    :::democode/html
    <ui-alert>展示的内容</ui-alert>
    :::

    #### 不同类型的告示

    通过`type`配置可以设置不通的告示类型。

    :::democode/html
    <ui-alert type="normal">展示的内容</ui-alert><br>
    <ui-alert type="success">展示的内容</ui-alert><br>
    <ui-alert type="warning">展示的内容</ui-alert><br>
    <ui-alert type="danger">展示的内容</ui-alert><br>
    <ui-alert type="primary">展示的内容</ui-alert><br>
    <ui-alert type="minor">展示的内容</ui-alert><br>
    <ui-alert type="info">展示的内容</ui-alert>
    :::

    #### 显示图标

    每个类型的告示内置了默认图标，通过`show-icon`配置开启：

    :::democode/html
    <ui-alert show-icon type="normal">展示的内容</ui-alert><br>
    <ui-alert show-icon type="success">展示的内容</ui-alert><br>
    <ui-alert show-icon type="warning">展示的内容</ui-alert><br>
    <ui-alert show-icon type="danger">展示的内容</ui-alert><br>
    <ui-alert show-icon type="primary">展示的内容</ui-alert><br>
    <ui-alert show-icon type="minor">展示的内容</ui-alert><br>
    <ui-alert show-icon type="info">展示的内容</ui-alert>
    :::

    告示的内容支持HTML，你也可以设置自定义的图标：

    :::democode/html
    <ui-alert><i class="mo-icon mo-icon-list"></i> 展示的内容</ui-alert><br>
    :::

    #### 可关闭

    :::democode/html
    <ui-alert can-close>展示的内容</ui-alert>
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

    |KEY|描述|接受值|值类型|默认值|
    |-|-|-|-|-|
    |[type](#type)|告示的类型|`'normal'` : 正常<br>`'success'` : 完成(成功)<br>`'warning'` : 警告<br>`'danger'` : 危险(失败)<br>`'primary'` : 重要<br>`'minor'` : 次要(疑问)<br>`'info'` : 信息<br>|String|`'normal'`|
    |[show-icon](#show-icon)|显示告示的默认图标，不同的`type`图标也不一样。|`true`<br>`false`|Boolean|`false`|
    |[can-close](#can-close)|告示可以被主动关闭(显示关闭链接)。|`true`<br>`false`|Boolean|`false`|
    |[close-content](#close-content)|关闭链接的内容(支持HTML)|关闭的DOM字符串|String|`'&lt;i class="mo-icon mo-icon-close">&lt;/i>'`|
    |[align](#align)|告示内容的对齐方式|`'left'` : 左对齐<br>`'center'` : 居中对齐<br>`'right'` : 右对齐|String|`'left'`|
    |[title](#title)|告示的标题(仅支持文本)，若为空字符串则不显示|标题字符串|String|`''`|

    #### type

    :::democode/html
    <ui-alert show-icon type="normal">展示的内容</ui-alert><br>
    <ui-alert show-icon type="success">展示的内容</ui-alert><br>
    <ui-alert show-icon type="warning">展示的内容</ui-alert><br>
    <ui-alert show-icon type="danger">展示的内容</ui-alert><br>
    <ui-alert show-icon type="primary">展示的内容</ui-alert><br>
    <ui-alert show-icon type="minor">展示的内容</ui-alert><br>
    <ui-alert show-icon type="info">展示的内容</ui-alert>
    :::

    #### show-icon

    每个类型的告示内置了默认图标，通过`show-icon`配置开启：

    :::democode/html
    <ui-alert show-icon type="normal">展示的内容</ui-alert><br>
    <ui-alert show-icon type="success">展示的内容</ui-alert><br>
    <ui-alert show-icon type="warning">展示的内容</ui-alert><br>
    <ui-alert show-icon type="danger">展示的内容</ui-alert><br>
    <ui-alert show-icon type="primary">展示的内容</ui-alert><br>
    <ui-alert show-icon type="minor">展示的内容</ui-alert><br>
    <ui-alert show-icon type="info">展示的内容</ui-alert>
    :::

    #### can-close

    :::democode/html
    <ui-alert can-close type="normal">展示的内容</ui-alert><br>
    <ui-alert can-close type="success">展示的内容</ui-alert><br>
    <ui-alert can-close type="warning">展示的内容</ui-alert><br>
    <ui-alert can-close type="danger">展示的内容</ui-alert><br>
    <ui-alert can-close type="primary">展示的内容</ui-alert><br>
    <ui-alert can-close type="minor">展示的内容</ui-alert><br>
    <ui-alert can-close type="info">展示的内容</ui-alert>
    :::

    #### close-content

    自定义关闭的DOM：

    :::democode/html
    <ui-alert can-close close-content="关闭">展示的内容</ui-alert>
    :::

    #### align

    居中对齐：

    :::democode/html
    <ui-alert align="center">展示的内容</ui-alert>
    :::

    居中对齐配合`can-close`和`show-icon`:

    :::democode/html
    <ui-alert align="center" show-icon can-close>展示的内容</ui-alert>
    :::    

    右对齐：

    :::democode/html
    <ui-alert align="right">展示的内容</ui-alert>
    :::

    右对齐配合`can-close`和`show-icon`:

    :::democode/html
    <ui-alert align="right" show-icon can-close>展示的内容</ui-alert>
    :::

    #### title

    :::democode/html
    <ui-alert title="标题内容">展示的内容</ui-alert>
    :::

    配置`can-close`和`show-icon`:

    :::democode/html
    <ui-alert title="标题内容" show-icon can-close>展示的内容</ui-alert>
    :::

    [[[方法]]]

    #### close()

    关闭告示。
    
    :::democode/html
    <ui-alert ref="demo1">展示的内容</ui-alert>
    <br><br>
    <ui-link js="morning.findVM('demo1').close();">关闭</ui-link>
    :::

    [[[事件]]]

    #### close

    当告示被关闭时触发。

    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
        methods : {
            echo : function () {
                console.log('demo2.console1', 'close event!');
            }
        }
    });
    ---
    <div>
        <ui-alert @close="echo" can-close>点击关闭触发</ui-alert>
    </div>
    :::

    #### 生命周期事件

    :::vue/html
    window.demoEventLifecycle = new Vue({
        el : '{$el}',
        template : '{$template}',
        data : function () {
            return {
               text : '告示',
               show : true
            };
        },
        methods : {
            echo : function (name) {
                console.log('demoEventLifecycle.console1', name + ' event!');
            }
        }
    });
    ---
    <div>
        <ui-alert
            ref="demoEventLifecycle"
            v-show="show"
            @created="echo('created')"
            @mounted="echo('mounted')"
            @before-update="echo('before-update')"
            @updated="echo('updated')"
            @before-destroy="echo('before-destroy')"
            @destroyed="echo('destroyed')"
        >{*text*}</ui-alert>

        <br><br>

        <ui-link js="window.demoEventLifecycle.text='生命周期事件';">触发update</ui-link>
        <ui-link js="morning.findVM('demoEventLifecycle').$destroy();">触发destroy</ui-link>
    </div>
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
