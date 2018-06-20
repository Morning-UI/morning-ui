<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 视频播放 `<ui-video>`
    
    <doc-component-status page="video"></doc-component-status>
    
    [[[开始]]]

    定义一个视频播放，这是一个块元素。

    #### 使用

    :::democode/html
    <div style="width:400px">
        <ui-video src="https://media.w3.org/2010/05/sintel/trailer.mp4"></ui-video>
    </div>
    :::

    [[[形态]]]

    #### 支持

    |类型|支持|默认|
    |-|-|-|
    |尺寸|不支持|-|
    |色彩|不支持|-|
    |状态|不支持|-|

    [[[配置]]]

    |KEY|描述|接受值|值类型|默认值|
    |-|-|-|-|-|
    |[src](#src)|播放源文件|视频文件网络地址|String|`''`|
    |[poster](#poster)|视频的预览图|图片地址|String|`''`|
    |[hide-time](#hide-time)|隐藏时间|`true`<br>`false`|Boolean|`false`|
    |[hide-progress](#hide-progress)|隐藏播放进度条|`true`<br>`false`|Boolean|`false`|
    |[autoplay](#autoplay)|自动播放|`true`<br>`false`|Boolean|`false`|
    |[allow-fullscreen](#allow-fullscreen)|是否允许视频全屏，若不允许则不会显示全屏按钮|`true`<br>`false`|Boolean|`true`|

    #### src

    :::democode/html
    <div style="width: 400px">
        <ui-video src="https://media.w3.org/2010/05/sintel/trailer.mp4"></ui-video>
    </div>
    :::

    如果不设置则无法播放：

    :::democode/html
    <div style="width: 400px">
        <ui-video></ui-video>
    </div>
    :::

    #### poster

    :::democode/html
    <div style="width: 400px">
        <ui-video src="https://media.w3.org/2010/05/sintel/trailer.mp4" poster="https://media.w3.org/2010/05/sintel/poster.png"></ui-video>
    </div>
    :::
    
    #### hide-time

    :::democode/html
    <div style="width: 400px">
        <ui-video src="https://media.w3.org/2010/05/sintel/trailer.mp4" :hide-time="true"></ui-video>
    </div>
    :::
    
    #### hide-progress

    :::democode/html
    <div style="width: 400px">
        <ui-video src="https://media.w3.org/2010/05/sintel/trailer.mp4" :hide-progress="true"></ui-video>
    </div>
    :::
    
    #### autoplay
    
    设置后视频会自动播放（此处不演示，可通过以下代码观看效果）：

    ````html
    <div style="width: 400px">
        <ui-video src="https://media.w3.org/2010/05/sintel/trailer.mp4" :autoplay="true"></ui-video>
    </div>
    ````

    #### allow-fullscreen

    :::democode/html
    <div style="width: 400px">
        <ui-video src="https://media.w3.org/2010/05/sintel/trailer.mp4" :allow-fullscreen="false"></ui-video>
    </div>
    :::

    [[[方法]]]

    #### play([play])

    切换视频播放状态。
    
    |KEY|可选|描述|接受值|值类型|默认值|
    |-|-|-|-|-|-|
    |play|YES|切换到播放或暂停状态，不输入则切换到反向状态。|`undefined`<br>`true`<br>`false`|`Undefined`<br>`Boolean`|`undefined`|

    :::democode/html
    <div style="width:400px">
        <ui-video ref="demo1" src="https://media.w3.org/2010/05/sintel/trailer.mp4"></ui-video>
    </div>
    <br>
    <ui-link js="window.morning.findVM('demo1').play(true);">播放</ui-link>
    <ui-link js="window.morning.findVM('demo1').play(false);">暂停</ui-link>
    <ui-link js="window.morning.findVM('demo1').play();">切换到反向状态</ui-link>
    :::

    #### to([time])

    切换到视频指定位置。
    
    |KEY|可选|描述|接受值|值类型|默认值|
    |-|-|-|-|-|-|
    |time|YES|切换到视频指定位置(单位秒)。若超出视频时间返回则会重置。|`undefined`<br>播放位置(秒)`|`Undefined`<br>`Number`|`undefined`|

    :::democode/html
    <div style="width:400px">
        <ui-video ref="demo2" src="https://media.w3.org/2010/05/sintel/trailer.mp4"></ui-video>
    </div>
    <br>
    <ui-link js="window.morning.findVM('demo2').to(20);">切换到第20秒</ui-link>
    :::

    #### mute([toggle])

    切换静音。
    
    |KEY|可选|描述|接受值|值类型|默认值|
    |-|-|-|-|-|-|
    |toggle|YES|切换至静音，不输入则切换到反向状态。|`undefined`<br>`true`<br>`false`|`Undefined`<br>`Boolean`|`undefined`|

    :::democode/html
    <div style="width:400px">
        <ui-video ref="demo3" src="https://media.w3.org/2010/05/sintel/trailer.mp4"></ui-video>
    </div>
    <br>
    <ui-link js="window.morning.findVM('demo3').mute(true);">静音</ui-link>
    <ui-link js="window.morning.findVM('demo3').mute(false);">取消静音</ui-link>
    <ui-link js="window.morning.findVM('demo3').mute();">切换到反向状态</ui-link>
    :::

    #### volume(value)

    调整音量大小。
    
    |KEY|可选|描述|接受值|值类型|默认值|
    |-|-|-|-|-|-|
    |value|NO|音量大小|0-100之间的数字|`Number`|`0`|

    :::democode/html
    <div style="width:400px">
        <ui-video ref="demo8" src="https://media.w3.org/2010/05/sintel/trailer.mp4"></ui-video>
    </div>
    <br>
    <ui-link js="window.morning.findVM('demo8').volume(0);">音量设为0</ui-link>
    <ui-link js="window.morning.findVM('demo8').volume(30);">音量设为30</ui-link>
    <ui-link js="window.morning.findVM('demo8').volume(100);">音量设为100</ui-link>
    :::

    #### getInfo()

    返回视频播放信息(包含视频源地址、时间长度、当前播放位置、静音状态、音量)。

    :::democode/html
    <div style="width:400px">
        <ui-video ref="demo4" src="https://media.w3.org/2010/05/sintel/trailer.mp4"></ui-video>
    </div>
    <br>
    <ui-link js="console.log(window.morning.findVM('demo4').getInfo());">获取视频信息</ui-link>
    :::

    [[[事件]]]

    #### play

    当视频开始播放时触发。

    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
        methods : {
            echo : function () {
                console.log('demo5.play', 'emit event!');
            }
        }
    });
    ---
    <div style="width:400px">
        <ui-video ref="demo5" src="https://media.w3.org/2010/05/sintel/trailer.mp4" @play="echo"></ui-video>
        <ui-link js="window.morning.findVM('demo5').play(true);">点击触发play事件</ui-link>
    </div>
    :::

    #### pause

    当视频暂停播放时触发。

    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
        methods : {
            echo : function () {
                console.log('demo6.pause', 'emit event!');
            }
        }
    });
    ---
    <div style="width:400px">
        <ui-video ref="demo6" src="https://media.w3.org/2010/05/sintel/trailer.mp4" @pause="echo"></ui-video>
        <ui-link js="window.morning.findVM('demo6').play(true);setTimeout(()=>window.morning.findVM('demo6').play(false))">点击触发pause事件</ui-link>
    </div>
    :::

    #### play-change

    当视频播放状态改变时触发。

    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
        methods : {
            echo : function () {
                console.log('demo10.play-change', 'emit event!');
            }
        }
    });
    ---
    <div style="width:400px">
        <ui-video ref="demo10" src="https://media.w3.org/2010/05/sintel/trailer.mp4" @play-change="echo"></ui-video>
        <ui-link js="window.morning.findVM('demo10').play();">点击触发play-change事件</ui-link>
    </div>
    :::

    #### mute-change

    静音状态改变时触发。

    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
        methods : {
            echo : function () {
                console.log('demo7.mute-change', 'emit event!');
            }
        }
    });
    ---
    <div style="width:400px">
        <ui-video ref="demo7" src="https://media.w3.org/2010/05/sintel/trailer.mp4" @mute-change="echo"></ui-video>
        <ui-link js="window.morning.findVM('demo7').mute();">点击触发mute-change事件</ui-link>
    </div>
    :::

    #### volume-change

    音量状态改变时触发。

    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
        methods : {
            echo : function () {
                console.log('demo9.volume-change', 'emit event!');
            }
        }
    });
    ---
    <div style="width:400px">
        <ui-video ref="demo9" src="https://media.w3.org/2010/05/sintel/trailer.mp4" @volume-change="echo"></ui-video>
        <ui-link js="window.morning.findVM('demo9').volume(30);">点击触发volume-change事件</ui-link>
    </div>
    :::

    #### fullscreen-change

    当视频全屏状态改变时触发。

    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
        methods : {
            echo : function () {
                console.log('demo10.fullscreen-change', 'emit event!');
            }
        }
    });
    ---
    <div style="width:400px">
        <ui-video ref="demo10" src="https://media.w3.org/2010/05/sintel/trailer.mp4" @fullscreen-change="echo"></ui-video>
        <p>点击全屏来触发此事件</p>
    </div>
    :::

    #### 生命周期事件

    :::vue/html
    window.demoEventLifecycle = new Vue({
        el : '{$el}',
        template : '{$template}',
        data : function () {
            return {
               text : '视频',
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
    <div style="width:400px">
        <ui-video
            ref="demoEventLifecycle"
            v-show="show"
            src="https://media.w3.org/2010/05/sintel/trailer.mp4"
            @created="echo('created')"
            @mounted="echo('mounted')"
            @before-update="echo('before-update')"
            @updated="echo('updated')"
            @before-destroy="echo('before-destroy')"
            @destroyed="echo('destroyed')"
        >{*text*}</ui-video>

        <br><br>

        <ui-link js="window.demoEventLifecycle.text='生命周期事件';">触发update</ui-link>
        <ui-link js="morning.findVM('demoEventLifecycle').$destroy();">触发destroy</ui-link>
    </div>
    :::

    [[[源码]]]

    <iframe src="/report/coverage/lib/components/video/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>

    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                 from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'video'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
