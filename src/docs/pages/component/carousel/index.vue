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

    使用时请用`<div slot=item></div>`来定一个区域，内容可以是任意HTML，如果内容为单个`<img>`标签，则组件会有默认样式。

    #### 使用

    :::democode/html
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

    #### 使用HTML内容

    :::democode/html
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

    <a href="/guide/status.html">查看形态文档</a>

    [[[配置]]]

    |KEY|描述|接受值|值类型|默认值|
    |-|-|-|-|-|
    |[toggle-time](#toggle-time)|轮播切换时间，若设为0则不会自动切换|时间(ms)|Number|`0`|
    |[toggle-type](#toggle-type)|轮播切换效果|`'none'` : 直接切换<br>`'fade'` : 渐隐渐显<br>`'move'` : 移动|String|`'none'`|
    |[toggle-btn](#toggle-btn)|是否显示切换按钮|`true`<br>`false`|Boolean|`false`|
    |[indicator-position](#indicator-position)|指示器的位置|`'inside'` : 轮播内<br>`'outside'` : 轮播外|String|`'inside'`|
    |[indicator-type](#indicator-type)|指示器的类型|`'dot'` : 原点<br>`'line'` : 线条|String|`'dot'`|
    |[trigger](#trigger)|指示器的触发方式|`'click'` : 点击<br>`'hover'` : 鼠标移入|String|`'click'`|

    #### toggle-time

    每2000ms切换下一张：

    :::democode/html
    <div style="width:480px;">
        <ui-carousel :toggle-time="0">
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

    #### toggle-type

    渐隐渐显切换：

    :::democode/html
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
    :::

    移动切换：

    :::democode/html
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

    #### toggle-btn

    显示切换按钮：

    :::democode/html
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
    
    #### indicator-position

    位于轮播外的指示器：

    :::democode/html
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
    
    #### indicator-type

    线条类型的指示器：

    :::democode/html
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

    #### trigger

    鼠标移入指示器触发切换：

    :::democode/html
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

    [[[方法]]]

    #### next()

    切换到下一页轮播。
    
    :::democode/html
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
    </div>
    <ui-link js="morning.findVM('demo1').next();">下一页</ui-link>
    :::

    #### prev()

    切换到上一页轮播。
    
    :::democode/html
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
    </div>
    <ui-link js="morning.findVM('demo2').prev();">上一页</ui-link>
    :::
    
    #### switch(index)

    |KEY|可选|描述|接受值|值类型|默认值|
    |-|-|-|-|-|-|
    |index|NO|切换到第几页轮播(从`0`开始)|`Number`|`undefined`|
    
    :::democode/html
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
    </div>
    <ui-link js="morning.findVM('demo3').switch(0);">切换到第1页</ui-link>
    <ui-link js="morning.findVM('demo3').switch(2);">切换到第3页</ui-link>
    :::

    [[[事件]]]

    #### emit

    当轮播切换时触发。

    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
        methods : {
            echo : function () {
                console.log('demo4.console1', 'emit event!');
            }
        }
    });
    ---
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
    :::

    #### 生命周期事件

    :::vue/html
    window.demoEventLifecycle = new Vue({
        el : '{$el}',
        template : '{$template}',
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
    });
    ---
    <div style="width:480px;">
        <ui-carousel
            ref="demoEventLifecycle"
            v-show="show"
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

        <ui-link js="window.demoEventLifecycle.text='生命周期事件';">触发update</ui-link>
        <ui-link js="morning.findVM('demoEventLifecycle').$destroy();">触发destroy</ui-link>
    </div>
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
