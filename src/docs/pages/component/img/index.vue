<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 图片 `<ui-img>`
    
    <doc-component-status page="img"></doc-component-status>

    [[[开始]]]

    定义图片容器，支持三种不同形状的图片，可为图片添加文字说明。

    :::vue
    @name:使用
    ---
    #demo
    >tpl
    <ui-img src="http://morning-ui-image.test.upcdn.net/48fc612216b4fd2112a6bcd7d0db6eba.jpeg"></ui-img>
    :::

    :::vue
    @name:带文字说明图片
    ---
    #demo
    >tpl
    <ui-img src="http://morning-ui-image.test.upcdn.net/48fc612216b4fd2112a6bcd7d0db6eba.jpeg">说明文字</ui-img>
    :::

    :::vue
    @name:不同形状
    ---
    #demo
    >desc
    支持三种：
    <br><br>
    - `.round` : 圆角
    - `.circle` : 圆形
    - `.thumbnail` : 相框
    >tpl
    <div>
        <ui-img class="round" src="http://morning-ui-image.test.upcdn.net/48fc612216b4fd2112a6bcd7d0db6eba.jpeg"></ui-img>
        <ui-img class="circle" src="http://morning-ui-image.test.upcdn.net/48fc612216b4fd2112a6bcd7d0db6eba.jpeg"></ui-img>
        <ui-img class="thumbnail" src="http://morning-ui-image.test.upcdn.net/48fc612216b4fd2112a6bcd7d0db6eba.jpeg"></ui-img>
    </div>
    :::

    :::vue
    @name:支持的属性
    ---
    #demo
    >desc
    `ui-img`仅支持下面这些属性：
    <br><br>
    - `src` : 图片地址
    - `width` : 图片宽度
    - `height` : 图片高度
    - `alt` : 图片加载失败显示内容
    - `title` : 图标标题
    >tpl
    <div>
        <!-- 添加width属性，自动设置图片宽度 -->
        <ui-img width="130" src="http://morning-ui-image.test.upcdn.net/48fc612216b4fd2112a6bcd7d0db6eba.jpeg"></ui-img>

        <!-- 添加height属性，自动设置图片高度 -->
        <ui-img height="150" src="http://morning-ui-image.test.upcdn.net/48fc612216b4fd2112a6bcd7d0db6eba.jpeg"></ui-img>

        <!-- 添加title属性，自动设置图片title -->
        <ui-img title="这里是title" src="http://morning-ui-image.test.upcdn.net/48fc612216b4fd2112a6bcd7d0db6eba.jpeg"></ui-img>

        <!-- 添加alt属性，自动设置图片alt属性，当图片无法显示时候，显示alt内容。 -->
        <ui-img alt="这里是alt" src="https://d13yacurqjgar.cloudfront.net/noimg.jpeg"></ui-img>
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
    @name:src
    ---
    #config
    >conf-desc
    图片地址。
    >conf-accept
    url地址
    >conf-type
    String
    >conf-default
    `undefined`
    ---
    #demo
    >tpl
    <ui-img src="http://morning-ui-image.test.upcdn.net/48fc612216b4fd2112a6bcd7d0db6eba.jpeg"></ui-img>
    :::

    :::vue
    @name:width
    ---
    #config
    >conf-desc
    图片的宽度。
    >conf-accept
    宽度数值(等价`img`标签的`width`属性)
    >conf-type
    String
    >conf-default
    `'auto'`
    ---
    #demo
    >tpl
    <ui-img src="http://morning-ui-image.test.upcdn.net/48fc612216b4fd2112a6bcd7d0db6eba.jpeg" width="130"></ui-img>
    :::

    :::vue
    @name:height
    ---
    #config
    >conf-desc
    图片的高度。
    >conf-accept
    宽度数值(等价`img`标签的`height`属性)
    >conf-type
    String
    >conf-default
    `'auto'`
    ---
    #demo
    >tpl
    <ui-img src="http://morning-ui-image.test.upcdn.net/48fc612216b4fd2112a6bcd7d0db6eba.jpeg" height="130"></ui-img>
    :::

    :::vue
    @name:alt
    ---
    #config
    >conf-desc
    图片加载失败显示内容。
    >conf-accept
    文字
    >conf-type
    String
    >conf-default
    `undefined`
    ---
    #demo
    >tpl
    <ui-img src="https://d13yacurqjgar.cloudfront.net/noimg.jpeg" alt="这里是alt"></ui-img>
    :::

    :::vue
    @name:title
    ---
    #config
    >conf-desc
    图片的标题
    >conf-accept
    文字
    >conf-type
    String
    >conf-default
    `undefined`
    ---
    #demo
    >tpl
    <ui-img src="http://morning-ui-image.test.upcdn.net/48fc612216b4fd2112a6bcd7d0db6eba.jpeg" title="这里是title"></ui-img>
    :::

    :::vue
    @name:preview
    ---
    #config
    >conf-desc
    是否开启图片预览，开启后点击图片可以进行预览。
    >conf-accept
    `true`<br>`false`
    >conf-type
    Boolean
    >conf-default
    `false`
    ---
    #demo
    >tpl
    <ui-img src="http://morning-ui-image.test.upcdn.net/48fc612216b4fd2112a6bcd7d0db6eba.jpeg" :preview="true"></ui-img>
    :::

    [[[方法]]]

    :::vue
    @name:togglePreview([show])
    ---
    #method
    >method-desc
    切换图片的预览显示/隐藏，必须开启`preview`配置。
    >method-args
    |show|YES|切换到显示或隐藏状态，不输入则切换到反向状态。|`undefined`<br>`true`<br>`false`|`Undefined`<br>`Boolean`|`undefined`|
    >method-return
    当前组件VM实例。
    ---
    #demo
    >tpl
    <div>
        <ui-img ref="demo3" src="http://morning-ui-image.test.upcdn.net/48fc612216b4fd2112a6bcd7d0db6eba.jpeg" :preview="true"></ui-img>
        <br><br> 
        <ui-link js="morning.findVM('demo3').togglePreview(true);">显示预览</ui-link>
        <ui-link js="morning.findVM('demo3').togglePreview(false);">隐藏预览</ui-link>
        <ui-link js="morning.findVM('demo3').togglePreview();">切换反方向</ui-link>
    </div>
    :::

    [[[事件]]]

    :::vue
    @name:show-preview
    ---
    #event
    >event-desc
    当图片预览显示时触发。
    ---
    #demo
    >tpl
    <div>
        <ui-img src="http://morning-ui-image.test.upcdn.net/48fc612216b4fd2112a6bcd7d0db6eba.jpeg" :preview="true" @show-preview="echo"></ui-img>
    </div>
    >script
    {
        methods : {
            echo : function () {
                console.log('demo1.console1', 'show-preview event!');
            }
        }
    }
    :::

    :::vue
    @name:hide-preview
    ---
    #event
    >event-desc
    当图片预览隐藏时触发。
    ---
    #demo
    >tpl
    <div>
        <ui-img src="http://morning-ui-image.test.upcdn.net/48fc612216b4fd2112a6bcd7d0db6eba.jpeg" :preview="true" @hide-preview="echo"></ui-img>
    </div>
    >script
    {
        methods : {
            echo : function () {
                console.log('demo2.console1', 'hide-preview event!');
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
        <ui-img
            ref="demoEventLifecycle"
            v-show="show"
            src="http://morning-ui-image.test.upcdn.net/48fc612216b4fd2112a6bcd7d0db6eba.jpeg"
            @created="echo('created')"
            @mounted="echo('mounted')"
            @before-update="echo('before-update')"
            @updated="echo('updated')"
            @before-destroy="echo('before-destroy')"
            @destroyed="echo('destroyed')"
        >{*text*}</ui-img>
        <br><br>
        <ui-link js="this.text='生命周期事件';">触发update</ui-link>
        <ui-link js="this.$refs['demoEventLifecycle'].$destroy();">触发destroy</ui-link>
    </div>
    >script
    {
        data : function () {
            return {
               text : '图片',
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

    <iframe src="/report/coverage/lib/components/img/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>
    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'img'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
