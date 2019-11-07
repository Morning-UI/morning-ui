<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 滚动文字 `<ui-textscroll>`
    
    <doc-component-status page="textscroll"></doc-component-status>
    
    [[[开始]]]

    定义一个滚动文字，这是一个块元素。

    :::vue
    @name:使用
    ---
    #demo
    >tpl
    <ui-textscroll
        :list="[
            'What is a dog?',
            'What kinds of dogs are there?',
            'How do you acquire a dog?'
        ]"
    ></ui-textscroll>
    :::

    :::vue
    @name:支持HTML及Vue Template
    ---
    #demo
    >desc
    由于在`list`配置中通过字符串模板的形式使用Vue Template，所以在模板中的组件无法直接使用上下文的props、data、methods等属性或方法。<br><br>所以需要通过`context`来帮你定位上下文。
    >tpl
    <ui-textscroll
        :list="list"
    ></ui-textscroll>
    >script
    {
        data : {
            list : [
                '<i class="mo-icon mo-icon-block-9"></i> What is a dog?',
                'What kinds of dogs are there? <ui-link :link="context.link">search</ui-link>',
                'How do you acquire a dog?'
            ],
            link : 'http://baidu.com/'
        }
    }
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
    <ui-textscroll
        color="{$colorKey}" 
        :list="[
            '{$&colorName}',
            'What is a dog?',
            'What kinds of dogs are there?',
            'How do you acquire a dog?'
        ]"
    ></ui-textscroll>
    <br><br>
    :::   

    [[[配置]]]

    :::vue
    @name:list
    ---
    #config
    >conf-desc
    滚动展示的文本列表。
    >conf-accept
    数组(项目为文本字符串，支持HTML或Vue Template)
    >conf-type
    Array
    >conf-default
    `[]`
    ---
    #demo
    >tpl
    <ui-textscroll
        :list="[
            'What is a dog?',
            'What kinds of dogs are there?',
            'How do you acquire a dog?'
        ]"
    ></ui-textscroll>
    ---
    #demo
    >desc
    由于在`list`配置中通过字符串模板的形式使用Vue Template，所以在模板中的组件无法直接使用上下文的props、data、methods等属性或方法。<br><br>所以需要通过`context`来帮你定位上下文。
    >tpl
    <ui-textscroll
        :list="list"
    ></ui-textscroll>
    >script
    {
        data : {
            list : [
                '<i class="mo-icon mo-icon-block-9"></i> What is a dog?',
                'What kinds of dogs are there? <ui-link :link="context.link">search</ui-link>',
                'How do you acquire a dog?'
            ],
            link : 'http://baidu.com/'
        }
    }
    :::

    :::vue
    @name:height
    ---
    #config
    >conf-desc
    滚动文字组件的高度。
    >conf-accept
    高度数值（可以是`px`、`em`、`%`等任何css合法单位）
    >conf-type
    String
    >conf-default
    `'21px'`
    ---
    #demo
    >tpl
    <ui-textscroll
        :list="[
            'What is a dog?<br>...',
            'What kinds of dogs are there?<br>...',
            'How do you acquire a dog?<br>...'
        ]"
        height="42px"
    ></ui-textscroll>
    :::

    :::vue
    @name:direction
    ---
    #config
    >conf-desc
    文字滚动的方向。
    >conf-accept
    `'up'` : 向上<br>`'down'` : 向下
    >conf-type
    String
    >conf-default
    `'up'`
    ---
    #demo
    >tpl
    <ui-textscroll
        :list="[
            'What is a dog?',
            'What kinds of dogs are there?',
            'How do you acquire a dog?'
        ]"
        direction="down"
    ></ui-textscroll>
    :::

    :::vue
    @name:interval
    ---
    #config
    >conf-desc
    文字滚动的时间间隔。
    >conf-accept
    时间(ms)
    >conf-type
    Number
    >conf-default
    `2000`
    ---
    #demo
    >tpl
    <ui-textscroll
        :list="[
            'What is a dog?',
            'What kinds of dogs are there?',
            'How do you acquire a dog?'
        ]"
        :interval="5000"
    ></ui-textscroll>
    ---
    #demo
    >desc
    配合`animate-time`实现无极滚动的效果。
    >tpl
    <ui-textscroll
        :list="[
            'What is a dog?',
            'What kinds of dogs are there?',
            'How do you acquire a dog?'
        ]"
        :interval="0"
        :animate-time="1500"
    ></ui-textscroll>
    :::

    :::vue
    @name:animate-time
    ---
    #config
    >conf-desc
    文字滚动过程的耗时。
    >conf-accept
    时间(ms)
    >conf-type
    Number
    >conf-default
    `200`
    ---
    #demo
    >tpl
    <ui-textscroll
        :list="[
            'What is a dog?',
            'What kinds of dogs are there?',
            'How do you acquire a dog?'
        ]"
        :animate-time="1000"
    ></ui-textscroll>
    :::

    [[[方法]]]

    :::vue
    @name:next()
    ---
    #method
    >method-desc
    切换到下一条文本。
    >method-return
    当前组件VM实例。
    ---
    #demo
    >tpl
    <div>
        <ui-textscroll
            ref="demo1"
            :list="[
                'What is a dog?',
                'What kinds of dogs are there?',
                'How do you acquire a dog?'
            ]"
        ></ui-textscroll>
        <br><br> 
        <ui-link js="morning.findVM('demo1').next();">下一条</ui-link>
    </div>
    :::

    [[[事件]]]

    :::vue
    @name:emit(index)
    ---
    #event
    >event-desc
    当滚动文字切换时触发。
    >event-args
    |index|当前文本的位置|`Number`|
    ---
    #demo
    >tpl
    <div>
        <ui-textscroll
            :list="[
                'What is a dog?',
                'What kinds of dogs are there?',
                'How do you acquire a dog?'
            ]"
            @emit="echo"
        ></ui-textscroll>
    </div>
    >script
    {
        methods : {
            echo : function (index) {
                console.log('demo2.console1', 'emit event!', index);
            }
        }
    }
    :::

    [[[源码]]]

    <iframe src="/report/coverage/lib/components/textscroll/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>

    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                 from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'textscroll'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
