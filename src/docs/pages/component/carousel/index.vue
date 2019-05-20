<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 轮播 `<ui-carousel>`

    <doc-component-status page="carousel"></doc-component-status>
    
    [[[开始]]]

    定义一个轮播，这是一个块元素。

    :::vue
    @name:使用
    ---
    #demo
    >desc
    使用时请用`<div slot=item></div>`来定一个区域，内容可以是任意HTML，如果内容为单个`<img>`标签，则组件会有默认样式。
    >tpl
    <div style="width:480px;">
        <ui-carousel>
            <div slot="item">
                <img src="http://morning-ui-image.test.upcdn.net/carousel/1.png" alt="1">
            </div>
            <div slot="item">
                <img src="http://morning-ui-image.test.upcdn.net/carousel/2.png" alt="2">
            </div>
            <div slot="item">
                <img src="http://morning-ui-image.test.upcdn.net/carousel/3.png" alt="3">
            </div>
            <div slot="item">
                <img src="http://morning-ui-image.test.upcdn.net/carousel/4.png" alt="4">
            </div>
            <div slot="item">
                <img src="http://morning-ui-image.test.upcdn.net/carousel/5.png" alt="5">
            </div>
        </ui-carousel>
    </div>
    :::

    :::vue
    @name:使用HTML内容
    ---
    #demo
    >tpl
    <div style="width:480px;">
        <ui-carousel>
            <div slot="item">
                <div style="width:100%;height:240px;background:#E2E8EE;text-align:center;line-height:240px;font-size:48px;">
                    1
                </div>
            </div>
            <div slot="item">
                <div style="width:100%;height:240px;background:#F0F0F0;text-align:center;line-height:240px;font-size:48px;">
                    2
                </div>
            </div>
            <div slot="item">
                <div style="width:100%;height:240px;background:#E2E8EE;text-align:center;line-height:240px;font-size:48px;">
                    3
                </div>
            </div>
        </ui-carousel>
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
    @name:toggle-time
    ---
    #config
    >conf-desc
    轮播切换时间，若设为0则不会自动切换。
    >conf-accept
    时间(ms)
    >conf-type
    Number
    >conf-default
    `0`
    ---
    #demo
    >desc
    每2000ms切换下一张。
    >tpl
    <div style="width:480px;">
        <ui-carousel :toggle-time="2000">
            <div slot="item">
                <img src="http://morning-ui-image.test.upcdn.net/carousel/1.png" alt="1">
            </div>
            <div slot="item">
                <img src="http://morning-ui-image.test.upcdn.net/carousel/2.png" alt="2">
            </div>
            <div slot="item">
                <img src="http://morning-ui-image.test.upcdn.net/carousel/3.png" alt="3">
            </div>
            <div slot="item">
                <img src="http://morning-ui-image.test.upcdn.net/carousel/4.png" alt="4">
            </div>
            <div slot="item">
                <img src="http://morning-ui-image.test.upcdn.net/carousel/5.png" alt="5">
            </div>
        </ui-carousel>
    </div>
    :::

    :::vue
    @name:toggle-type
    ---
    #config
    >conf-desc
    轮播切换效果。
    >conf-accept
    `'none'` : 直接切换<br>`'fade'` : 渐隐渐显<br>`'move'` : 移动
    >conf-type
    String
    >conf-default
    `'none'`
    ---
    #demo
    >desc
    渐隐渐显切换。
    >tpl
    <div style="width:480px;">
        <ui-carousel toggle-type="fade">
            <div slot="item">
                <img src="http://morning-ui-image.test.upcdn.net/carousel/1.png" alt="1">
            </div>
            <div slot="item">
                <img src="http://morning-ui-image.test.upcdn.net/carousel/2.png" alt="2">
            </div>
            <div slot="item">
                <img src="http://morning-ui-image.test.upcdn.net/carousel/3.png" alt="3">
            </div>
            <div slot="item">
                <img src="http://morning-ui-image.test.upcdn.net/carousel/4.png" alt="4">
            </div>
            <div slot="item">
                <img src="http://morning-ui-image.test.upcdn.net/carousel/5.png" alt="5">
            </div>
        </ui-carousel>
    </div>
    ---
    #demo
    >desc
    移动切换。
    >tpl
    <div style="width:480px;">
        <ui-carousel toggle-type="move">
            <div slot="item">
                <img src="http://morning-ui-image.test.upcdn.net/carousel/1.png" alt="1">
            </div>
            <div slot="item">
                <img src="http://morning-ui-image.test.upcdn.net/carousel/2.png" alt="2">
            </div>
            <div slot="item">
                <img src="http://morning-ui-image.test.upcdn.net/carousel/3.png" alt="3">
            </div>
            <div slot="item">
                <img src="http://morning-ui-image.test.upcdn.net/carousel/4.png" alt="4">
            </div>
            <div slot="item">
                <img src="http://morning-ui-image.test.upcdn.net/carousel/5.png" alt="5">
            </div>
        </ui-carousel>
    </div>
    :::

    :::vue
    @name:toggle-btn
    ---
    #config
    >conf-desc
    是否显示切换按钮。
    >conf-accept
    `true`<br>`false`
    >conf-type
    Boolean
    >conf-default
    `false`
    ---
    #demo
    >desc
    显示切换按钮。
    >tpl
    <div style="width:480px;">
        <ui-carousel toggle-btn>
            <div slot="item">
                <img src="http://morning-ui-image.test.upcdn.net/carousel/1.png" alt="1">
            </div>
            <div slot="item">
                <img src="http://morning-ui-image.test.upcdn.net/carousel/2.png" alt="2">
            </div>
            <div slot="item">
                <img src="http://morning-ui-image.test.upcdn.net/carousel/3.png" alt="3">
            </div>
            <div slot="item">
                <img src="http://morning-ui-image.test.upcdn.net/carousel/4.png" alt="4">
            </div>
            <div slot="item">
                <img src="http://morning-ui-image.test.upcdn.net/carousel/5.png" alt="5">
            </div>
        </ui-carousel>
    </div>
    :::

    :::vue
    @name:indicator-position
    ---
    #config
    >conf-desc
    指示器的位置。
    >conf-accept
    `'inside'` : 轮播内<br>`'outside'` : 轮播外
    >conf-type
    String
    >conf-default
    `'inside'`
    ---
    #demo
    >desc
    位于轮播外的指示器。
    >tpl
    <div style="width:480px;">
        <ui-carousel indicator-position="outside">
            <div slot="item">
                <img src="http://morning-ui-image.test.upcdn.net/carousel/1.png" alt="1">
            </div>
            <div slot="item">
                <img src="http://morning-ui-image.test.upcdn.net/carousel/2.png" alt="2">
            </div>
            <div slot="item">
                <img src="http://morning-ui-image.test.upcdn.net/carousel/3.png" alt="3">
            </div>
            <div slot="item">
                <img src="http://morning-ui-image.test.upcdn.net/carousel/4.png" alt="4">
            </div>
            <div slot="item">
                <img src="http://morning-ui-image.test.upcdn.net/carousel/5.png" alt="5">
            </div>
        </ui-carousel>
    </div>
    :::

    :::vue
    @name:indicator-type
    ---
    #config
    >conf-desc
    指示器的类型。
    >conf-accept
    `'dot'` : 原点<br>`'line'` : 线条
    >conf-type
    String
    >conf-default
    `'dot'`
    ---
    #demo
    >desc
    线条类型的指示器。
    >tpl
    <div style="width:480px;">
        <ui-carousel indicator-type="line">
            <div slot="item">
                <img src="http://morning-ui-image.test.upcdn.net/carousel/1.png" alt="1">
            </div>
            <div slot="item">
                <img src="http://morning-ui-image.test.upcdn.net/carousel/2.png" alt="2">
            </div>
            <div slot="item">
                <img src="http://morning-ui-image.test.upcdn.net/carousel/3.png" alt="3">
            </div>
            <div slot="item">
                <img src="http://morning-ui-image.test.upcdn.net/carousel/4.png" alt="4">
            </div>
            <div slot="item">
                <img src="http://morning-ui-image.test.upcdn.net/carousel/5.png" alt="5">
            </div>
        </ui-carousel>
    </div>
    :::

    :::vue
    @name:trigger
    ---
    #config
    >conf-desc
    指示器的触发方式。
    >conf-accept
    `'click'` : 点击<br>`'hover'` : 鼠标移入
    >conf-type
    String
    >conf-default
    `'click'`
    ---
    #demo
    >desc
    鼠标移入指示器触发切换。
    >tpl
    <div style="width:480px;">
        <ui-carousel trigger="hover">
            <div slot="item">
                <img src="http://morning-ui-image.test.upcdn.net/carousel/1.png" alt="1">
            </div>
            <div slot="item">
                <img src="http://morning-ui-image.test.upcdn.net/carousel/2.png" alt="2">
            </div>
            <div slot="item">
                <img src="http://morning-ui-image.test.upcdn.net/carousel/3.png" alt="3">
            </div>
            <div slot="item">
                <img src="http://morning-ui-image.test.upcdn.net/carousel/4.png" alt="4">
            </div>
            <div slot="item">
                <img src="http://morning-ui-image.test.upcdn.net/carousel/5.png" alt="5">
            </div>
        </ui-carousel>
    </div>
    :::

    :::vue
    @name:direction
    ---
    #config
    >conf-desc
    轮播方向。
    >conf-accept
    `'horizontal'` : 横向<br>`'vertical'` : 竖向
    >conf-type
    String
    >conf-default
    `'horizontal'`
    ---
    #demo
    >desc
    竖向的轮播。
    >tpl
    <div style="width:480px;">
        <ui-carousel direction="vertical">
            <div slot="item">
                <img src="http://morning-ui-image.test.upcdn.net/carousel/1.png" alt="1">
            </div>
            <div slot="item">
                <img src="http://morning-ui-image.test.upcdn.net/carousel/2.png" alt="2">
            </div>
            <div slot="item">
                <img src="http://morning-ui-image.test.upcdn.net/carousel/3.png" alt="3">
            </div>
            <div slot="item">
                <img src="http://morning-ui-image.test.upcdn.net/carousel/4.png" alt="4">
            </div>
            <div slot="item">
                <img src="http://morning-ui-image.test.upcdn.net/carousel/5.png" alt="5">
            </div>
        </ui-carousel>
    </div>
    ---
    #demo
    >desc
    配合`toggle-type`一起使用。
    >tpl
    <div style="width:480px;">
        <ui-carousel direction="vertical" toggle-type="move">
            <div slot="item">
                <img src="http://morning-ui-image.test.upcdn.net/carousel/1.png" alt="1">
            </div>
            <div slot="item">
                <img src="http://morning-ui-image.test.upcdn.net/carousel/2.png" alt="2">
            </div>
            <div slot="item">
                <img src="http://morning-ui-image.test.upcdn.net/carousel/3.png" alt="3">
            </div>
            <div slot="item">
                <img src="http://morning-ui-image.test.upcdn.net/carousel/4.png" alt="4">
            </div>
            <div slot="item">
                <img src="http://morning-ui-image.test.upcdn.net/carousel/5.png" alt="5">
            </div>
        </ui-carousel>
    </div>
    ---
    #demo
    >desc
    配合`toggle-btn`一起使用。
    >tpl
    <div style="width:480px;">
        <ui-carousel direction="vertical" toggle-btn>
            <div slot="item">
                <img src="http://morning-ui-image.test.upcdn.net/carousel/1.png" alt="1">
            </div>
            <div slot="item">
                <img src="http://morning-ui-image.test.upcdn.net/carousel/2.png" alt="2">
            </div>
            <div slot="item">
                <img src="http://morning-ui-image.test.upcdn.net/carousel/3.png" alt="3">
            </div>
            <div slot="item">
                <img src="http://morning-ui-image.test.upcdn.net/carousel/4.png" alt="4">
            </div>
            <div slot="item">
                <img src="http://morning-ui-image.test.upcdn.net/carousel/5.png" alt="5">
            </div>
        </ui-carousel>
    </div>
    ---
    #demo
    >desc
    配合`indicator-position`一起使用。
    >tpl
    <div style="width:480px;">
        <ui-carousel direction="vertical" indicator-position="outside">
            <div slot="item">
                <img src="http://morning-ui-image.test.upcdn.net/carousel/1.png" alt="1">
            </div>
            <div slot="item">
                <img src="http://morning-ui-image.test.upcdn.net/carousel/2.png" alt="2">
            </div>
            <div slot="item">
                <img src="http://morning-ui-image.test.upcdn.net/carousel/3.png" alt="3">
            </div>
            <div slot="item">
                <img src="http://morning-ui-image.test.upcdn.net/carousel/4.png" alt="4">
            </div>
            <div slot="item">
                <img src="http://morning-ui-image.test.upcdn.net/carousel/5.png" alt="5">
            </div>
        </ui-carousel>
    </div>
    :::

    [[[方法]]]

    :::vue
    @name:next()
    ---
    #method
    >method-desc
    切换到下一页轮播。
    >method-return
    当前组件VM实例。
    ---
    #demo
    >tpl
    <div style="width:480px;">
        <ui-carousel ref="demo1">
            <div slot="item">
                <img src="http://morning-ui-image.test.upcdn.net/carousel/1.png" alt="1">
            </div>
            <div slot="item">
                <img src="http://morning-ui-image.test.upcdn.net/carousel/2.png" alt="2">
            </div>
            <div slot="item">
                <img src="http://morning-ui-image.test.upcdn.net/carousel/3.png" alt="3">
            </div>
            <div slot="item">
                <img src="http://morning-ui-image.test.upcdn.net/carousel/4.png" alt="4">
            </div>
            <div slot="item">
                <img src="http://morning-ui-image.test.upcdn.net/carousel/5.png" alt="5">
            </div>
        </ui-carousel>
        <ui-link js="morning.findVM('demo1').next();">下一页</ui-link>
    </div>
    :::

    :::vue
    @name:prev()
    ---
    #method
    >method-desc
    切换到上一页轮播。
    >method-return
    当前组件VM实例。
    ---
    #demo
    >tpl
    <div style="width:480px;">
        <ui-carousel ref="demo2">
            <div slot="item">
                <img src="http://morning-ui-image.test.upcdn.net/carousel/1.png" alt="1">
            </div>
            <div slot="item">
                <img src="http://morning-ui-image.test.upcdn.net/carousel/2.png" alt="2">
            </div>
            <div slot="item">
                <img src="http://morning-ui-image.test.upcdn.net/carousel/3.png" alt="3">
            </div>
            <div slot="item">
                <img src="http://morning-ui-image.test.upcdn.net/carousel/4.png" alt="4">
            </div>
            <div slot="item">
                <img src="http://morning-ui-image.test.upcdn.net/carousel/5.png" alt="5">
            </div>
        </ui-carousel>
        <ui-link js="morning.findVM('demo2').prev();">上一页</ui-link>
    </div>
    :::

    :::vue
    @name:switch(index)
    ---
    #method
    >method-desc
    锁定按钮，锁定后按钮不会触发`emit`事件。
    >method-args
    |index|NO|切换到第几页轮播(从`0`开始)|`Number`|`undefined`|
    >method-return
    当前组件VM实例。
    ---
    #demo
    >tpl
    <div style="width:480px;">
        <ui-carousel ref="demo3">
            <div slot="item">
                <img src="http://morning-ui-image.test.upcdn.net/carousel/1.png" alt="1">
            </div>
            <div slot="item">
                <img src="http://morning-ui-image.test.upcdn.net/carousel/2.png" alt="2">
            </div>
            <div slot="item">
                <img src="http://morning-ui-image.test.upcdn.net/carousel/3.png" alt="3">
            </div>
            <div slot="item">
                <img src="http://morning-ui-image.test.upcdn.net/carousel/4.png" alt="4">
            </div>
            <div slot="item">
                <img src="http://morning-ui-image.test.upcdn.net/carousel/5.png" alt="5">
            </div>
        </ui-carousel>
        <ui-link js="morning.findVM('demo3').switch(0);">切换到第1页</ui-link>
        <ui-link js="morning.findVM('demo3').switch(2);">切换到第3页</ui-link>
    </div>
    :::

    [[[事件]]]

    :::vue
    @name:emit
    ---
    #event
    >event-desc
    当轮播切换时触发。
    ---
    #demo
    >tpl
    <div style="width:480px;">
        <ui-carousel @emit="echo">
            <div slot="item">
                <img src="http://morning-ui-image.test.upcdn.net/carousel/1.png" alt="1">
            </div>
            <div slot="item">
                <img src="http://morning-ui-image.test.upcdn.net/carousel/2.png" alt="2">
            </div>
            <div slot="item">
                <img src="http://morning-ui-image.test.upcdn.net/carousel/3.png" alt="3">
            </div>
            <div slot="item">
                <img src="http://morning-ui-image.test.upcdn.net/carousel/4.png" alt="4">
            </div>
            <div slot="item">
                <img src="http://morning-ui-image.test.upcdn.net/carousel/5.png" alt="5">
            </div>
        </ui-carousel>
    </div>
    >script
    {
        methods : {
            echo : function () {
                console.log('demo4.console1', 'emit event!');
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
    <div style="width:480px;">
        <ui-carousel
            ref="demoEventLifecycle"
            v-show="show"
            :total="10"
            @created="echo('created')"
            @mounted="echo('mounted')"
            @before-update="echo('before-update')"
            @updated="echo('updated')"
            @before-destroy="echo('before-destroy')"
            @destroyed="echo('destroyed')"
        >
            <div slot="item">
                <img src="http://morning-ui-image.test.upcdn.net/carousel/1.png" alt="1">
            </div>
            <div slot="item">
                <img src="http://morning-ui-image.test.upcdn.net/carousel/2.png" alt="2">
            </div>
            <div slot="item">
                <img src="http://morning-ui-image.test.upcdn.net/carousel/3.png" alt="3">
            </div>
            <div slot="item">
                <img src="http://morning-ui-image.test.upcdn.net/carousel/4.png" alt="4">
            </div>
            <div slot="item">
                {*text*}
            </div>
        </ui-carousel>
        <br><br>
        <ui-link js="this.text='生命周期事件';">触发update</ui-link>
        <ui-link js="this.$refs['demoEventLifecycle'].$destroy();">触发destroy</ui-link>
    </div>
    >script
    {
        data : function () {
            return {
               text : '轮播',
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

    <iframe src="/report/coverage/lib/components/carousel/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>

    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                 from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'carousel'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
