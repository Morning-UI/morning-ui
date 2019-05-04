<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 进度条 `<ui-progress>`
    
    <doc-component-status page="progress"></doc-component-status>
    
    [[[开始]]]

    定义进度条，这是一个块元素。

    :::vue
    @name:使用
    ---
    #demo
    >tpl
    <div style="width:320px">
        <ui-progress></ui-progress>
    </div>
    :::

    :::vue
    @name:设置进度
    ---
    #demo
    >tpl
    <div style="width:320px">
        <ui-progress :percent="30"></ui-progress>
    </div>
    :::

    :::vue
    @name:标记正在处理
    ---
    #demo
    >desc
    开启`progressing`配置后进度条会通过动画效果表示正在处理。
    >tpl
    <div style="width:320px">
        <ui-progress progressing :percent="60"></ui-progress>
    </div>
    :::

    :::vue
    @name:环状进度条
    ---
    #demo
    >tpl
    <div style="width:160px">
        <ui-progress type="ring" :percent="30"></ui-progress>
    </div>
    :::

    [[[形态]]]

    #### 支持

    |类型|支持|默认|
    |-|-|-|
    |尺寸|不支持|-|
    |色彩|全部(除`transparent`)|`theme`|
    |状态|不支持|-|

    <a href="/guide/status.html">查看形态文档</a> / <a href="/design/color.html">查看色彩文档</a>

    :::vue
    @layout:color
    ---
    <div style="width:320px">
        <ui-progress :percent="30" color="{$colorKey}"></ui-progress>
    </div>
    <br>
    :::

    [[[配置]]]

    :::vue
    @name:percent
    ---
    #config
    >conf-desc
    进度百分比。
    >conf-accept
    0%至100%
    >conf-type
    Number
    >conf-default
    `0`
    ---
    #demo
    >tpl
    <div style="width:320px">
        <ui-progress :percent="60"></ui-progress>
    </div>
    :::

    :::vue
    @name:progressing
    ---
    #config
    >conf-desc
    是否显示正在处理的动画效果。
    >conf-accept
    `true`<br>`false`
    >conf-type
    Boolean
    >conf-default
    `false`
    ---
    #demo
    >tpl
    <div style="width:320px">
        <ui-progress :percent="60" progressing></ui-progress>
    </div>
    ---
    #demo
    >desc
    配合`type`一起使用。
    >tpl
    <div style="width:160px">
        <ui-progress :percent="60" progressing type="ring"></ui-progress>
    </div>
    :::

    :::vue
    @name:type
    ---
    #config
    >conf-desc
    进度条类型。
    >conf-accept
    `'line'` : 直线型<br>`'ring'` : 环形
    >conf-type
    String
    >conf-default
    `'line'`
    ---
    #demo
    >desc
    环形进度条。
    >tpl
    <div style="width:160px">
        <ui-progress :percent="60" type="ring"></ui-progress>
    </div>
    :::

    :::vue
    @name:failed
    ---
    #config
    >conf-desc
    显示失败状态。
    >conf-accept
    `true`<br>`false`
    >conf-type
    Boolean
    >conf-default
    `false`
    ---
    #demo
    >desc
    失败状态的进度条。
    >tpl
    <div style="width:320px">
        <ui-progress :percent="60" :failed="true"></ui-progress>
    </div>
    ---
    #demo
    >desc
    配合`type`一起使用。
    >tpl
    <div style="width:160px">
        <ui-progress :percent="60" type="ring" :failed="true"></ui-progress>
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
    当进度变化时触发。
    ---
    #demo
    >tpl
    <div style="width:320px">
        <ui-progress :percent="percent" ref="demo1" @emit="echo"></ui-progress>
        <ui-link @emit="changePercent">点击触发emit事件</ui-link>
    </div>
    >script
    {
        data : {
            percent : 0
        },
        methods : {
            changePercent : function () {
               this.percent = 50;
            },
            echo : function () {
                console.log('demo1.console1', 'emit event!');
            }
        }
    }
    :::

    :::vue
    @layout:lifecycle-event
    ---
    progress
    进度条
    :::

    [[[源码]]]

    <iframe src="/report/coverage/lib/components/progress/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>

    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                 from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'progress'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
