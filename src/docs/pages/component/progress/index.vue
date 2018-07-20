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

    #### 使用

    :::democode/html
    <div style="width:320px">
        <ui-progress></ui-progress>
    </div>
    :::

    #### 设置进度

    :::democode/html
    <div style="width:320px">
        <ui-progress :percent="30"></ui-progress>
    </div>
    :::

    #### 标记正在处理

    开启`progressing`配置后进度条会通过动画效果表示正在处理：

    :::democode/html
    <div style="width:320px">
        <ui-progress progressing :percent="60"></ui-progress>
    </div>
    :::

    #### 环状进度条

    :::democode/html
    <div style="width:160px">
        <ui-progress type="ring" :percent="30"></ui-progress>
    </div>
    :::
    
    [[[形态]]]

    #### 支持

    |类型|支持|默认|
    |-|-|-|
    |尺寸|不支持|-|
    |色彩|全部|`theme`|
    |状态|不支持|-|

    <a href="/guide/status.html">查看形态文档</a>

    #### 色彩

    :::repeat/html
    color:theme
    color:feature
    color:black
    color:blue
    color:silver
    color:gray
    ---
    <div style="width:320px">
        <ui-progress :percent="30" color="{$colorKey}"></ui-progress>
    </div>
    <br>
    :::

    [[[配置]]]

    |KEY|描述|接受值|值类型|默认值|
    |-|-|-|-|-|
    |[percent](#percent)|进度百分比|0%至100%|Number|`0`|
    |[progressing](#progressing)|是否显示正在处理的动画效果|`true`<br>`false`|Boolean|`false`|
    |[type](#type)|进度条类型|`'line'` : 直线型<br>`'ring'` : 环形|String|`'line'`|
    |[failed](#failed)|显示失败状态|`true`<br>`false`|Boolean|`false`|

    #### percent

    :::democode/html
    <div style="width:320px">
        <ui-progress :percent="60"></ui-progress>
    </div>
    :::
    
    #### progressing

    :::democode/html
    <div style="width:320px">
        <ui-progress :percent="60" progressing></ui-progress>
    </div>
    :::

    配合`type`一起使用：

    :::democode/html
    <div style="width:160px">
        <ui-progress :percent="60" progressing type="ring"></ui-progress>
    </div>
    :::
    
    #### type

    环形进度条：

    :::democode/html
    <div style="width:160px">
        <ui-progress :percent="60" type="ring"></ui-progress>
    </div>
    :::
    
    #### failed

    失败状态的进度条：

    :::democode/html
    <div style="width:320px">
        <ui-progress :percent="60" :failed="true"></ui-progress>
    </div>
    :::

    配合`type`一起使用：

    :::democode/html
    <div style="width:160px">
        <ui-progress :percent="60" type="ring" :failed="true"></ui-progress>
    </div>
    :::

    [[[方法]]]
    
    <h1>暂无</h1>

    [[[事件]]]

    #### emit

    当进度变化时触发。

    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
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
    });
    ---
    <div style="width:320px">
        <ui-progress :percent="percent" ref="demo1" @emit="echo"></ui-progress>
        <ui-link @emit="changePercent">点击触发emit事件</ui-link>
    </div>
    :::

    #### 生命周期事件

    :::vue/html
    window.demoEventLifecycle = new Vue({
        el : '{$el}',
        template : '{$template}',
        data : function () {
            return {
               text : '进度条',
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
    <div style="width:320px">
        <ui-progress
            ref="demoEventLifecycle"
            v-show="show"
            @created="echo('created')"
            @mounted="echo('mounted')"
            @before-update="echo('before-update')"
            @updated="echo('updated')"
            @before-destroy="echo('before-destroy')"
            @destroyed="echo('destroyed')"
        >{*text*}</ui-progress>

        <br><br>

        <ui-link js="window.demoEventLifecycle.text='生命周期事件';">触发update</ui-link>
        <ui-link js="morning.findVM('demoEventLifecycle').$destroy();">触发destroy</ui-link>
    </div>
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
