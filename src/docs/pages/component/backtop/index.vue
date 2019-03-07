<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 回到顶部 `<ui-backtop>`
    
    <doc-component-status page="backtop"></doc-component-status>
    
    [[[开始]]]

    定义一个回到顶部组件，当页面内容过多时可以使用，使用户可以快速回到页面顶部。

    :::vue
    @name:使用
    ---
    #demo
    >tpl
    <ui-backtop></ui-backtop>
    :::

    :::vue
    @name:自定义内容
    ---
    #demo
    >tpl
    <ui-backtop>
        返回顶部
    </ui-backtop>
    ---
    #demo
    >tpl
    <ui-backtop>
        <i class="mo-icon mo-icon-arrow-up"></i>
        返回
    </ui-backtop>
    :::

    [[[形态]]]

    #### 支持

    |类型|支持|默认|
    |-|-|-|
    |尺寸|不支持|-|
    |色彩|不支持|-|
    |状态|不支持|-|

    [[[配置]]]

    :::vue
    @name:fixed
    ---
    #config
    >conf-desc
    固定在屏幕上的回到顶部。
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
        <p>见右下角</p>
        <ui-backtop fixed>
            固定在屏幕
        </ui-backtop>
    </div>
    :::

    :::vue
    @name:right
    ---
    #config
    >conf-desc
    固定在屏幕上的位置距离右侧多远，仅在启用`fixed`配置时生效。
    >conf-accept
    距离（可以是`px`、`em`、`%`等任何css合法单位）
    >conf-type
    String
    >conf-default
    `'40px'`
    ---
    #demo
    >tpl
    <div>
        <p>见右下角</p>
        <ui-backtop fixed right="10px" bottom="90px">
            距离右侧10px
        </ui-backtop>
    </div>
    :::

    :::vue
    @name:bottom
    ---
    #config
    >conf-desc
    固定在屏幕上的位置距离底部多远，仅在启用`fixed`配置时生效。
    >conf-accept
    距离（可以是`px`、`em`、`%`等任何css合法单位）
    >conf-type
    String
    >conf-default
    `'40px'`
    ---
    #demo
    >tpl
    <div>
        <p>见右下角</p>
        <ui-backtop fixed bottom="140px">
            距离底部120px
        </ui-backtop>
    </div>
    :::

    :::vue
    @name:scroll-height
    ---
    #config
    >conf-desc
    当滚动距离顶部多远时显示。
    >conf-accept
    距离（单位`px`）
    >conf-type
    Number
    >conf-default
    `0`
    ---
    #demo
    >tpl
    <div>
        <p>见右下角</p>
        <ui-backtop fixed bottom="190px" :scroll-height="400">
            当滚动到400px时出现
        </ui-backtop>
    </div>
    :::

    [[[方法]]]
    
    <h1>暂无</h1>

    [[[事件]]]

    :::vue
    @name:emit
    ---
    #event
    >event-desc
    当返回顶部时触发。
    ---
    #demo
    >tpl
    <ui-backtop ref="demo1" @emit="echo"></ui-backtop>
    >script
    {
        methods : {
            echo : function (name) {
                console.log('demo1.console1', `emit event!`);
            }
        }
    }
    :::

    :::vue
    @name:生命周期事件
    ---
    #event
    >event-desc
    组件的生命周期事件，详见:[基础/事件/生命周期事件](/guide/event.html#生命周期事件)。
    ---
    #demo
    >tpl
    <div>
        <ui-backtop
            ref="demoEventLifecycle"
            v-show="show"
            @created="echo('created')"
            @mounted="echo('mounted')"
            @before-update="echo('before-update')"
            @updated="echo('updated')"
            @before-destroy="echo('before-destroy')"
            @destroyed="echo('destroyed')"
        >{*text*}</ui-backtop>
        <br><br>
        <ui-link js="this.text='生命周期事件';">触发update</ui-link>
        <ui-link js="this.$refs['demoEventLifecycle'].$destroy();">触发destroy</ui-link>
    </div>
    >script
    {
        data : function () {
            return {
               text : '回到顶部',
               show : true
            };
        },
        methods : {
            echo : function (name) {
                console.log('demoEventLifecycle.console1', name + ' event!');
            }
        }
    }
    :::

    [[[源码]]]

    <iframe src="/report/coverage/lib/components/backtop/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>

    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                 from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'backtop'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
