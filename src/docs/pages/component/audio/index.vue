<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 音频播放 `<ui-audio>`
    
    <doc-component-status page="audio"></doc-component-status>
    
    [[[开始]]]

    定义一个音频播放，这是一个块元素。

    注意：在`Safari`浏览器的部分版本(比如`11`)中，你需要允许网站播放音频，否则此组件无法正常工作，[详见此](https://webkit.org/blog/7734/auto-play-policy-changes-for-macos/)。

    :::vue
    @name:使用
    ---
    #demo
    >tpl
    <div style="width: 300px">
        <ui-audio src="http://morning-ui-media.test.upcdn.net/audio/The%20xx%20-%20VCR.mp3"></ui-audio>
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

    :::vue
    @name:src
    ---
    #config
    >conf-desc
    播放源文件。
    >conf-accept
    音频文件网络地址
    >conf-type
    String
    >conf-default
    `''`
    ---
    #demo
    >tpl
    <div style="width: 300px">
        <ui-audio src="http://morning-ui-media.test.upcdn.net/audio/The%20xx%20-%20VCR.mp3"></ui-audio>
    </div>
    ---
    #demo
    >desc
    如果不设置则无法播放。
    >tpl
    <div style="width: 300px">
        <ui-audio></ui-audio>
    </div>
    :::

    :::vue
    @name:hide-time
    ---
    #config
    >conf-desc
    隐藏时间。
    >conf-accept
    `true`<br>`false`
    >conf-type
    Boolean
    >conf-default
    `false`
    ---
    #demo
    >tpl
    <div style="width: 300px">
        <ui-audio src="http://morning-ui-media.test.upcdn.net/audio/The%20xx%20-%20VCR.mp3" :hide-time="true"></ui-audio>
    </div>
    :::

    :::vue
    @name:hide-progress
    ---
    #config
    >conf-desc
    隐藏播放进度条。
    >conf-accept
    `true`<br>`false`
    >conf-type
    Boolean
    >conf-default
    `false`
    ---
    #demo
    >tpl
    <div style="width: 300px">
        <ui-audio src="http://morning-ui-media.test.upcdn.net/audio/The%20xx%20-%20VCR.mp3" :hide-progress="true"></ui-audio>
    </div>
    :::

    :::vue
    @name:autoplay
    ---
    #config
    >conf-desc
    自动播放。
    >conf-accept
    `true`<br>`false`
    >conf-type
    Boolean
    >conf-default
    `false`
    ---
    #demo
    >desc
    设置后音频会自动播放（此处不演示，可通过以下代码改为`:autoplay="true"`观看效果）。
    >tpl
    <div style="width: 300px">
        <ui-audio src="http://morning-ui-media.test.upcdn.net/audio/The%20xx%20-%20VCR.mp3" :autoplay="false"></ui-audio>
    </div>
    :::

    [[[方法]]]

    :::vue
    @name:play([play])
    ---
    #method
    >method-desc
    切换音频播放状态。
    >method-args
    |play|YES|切换到播放或暂停状态，不输入则切换到反向状态。|`undefined`<br>`true`<br>`false`|`Undefined`<br>`Boolean`|`undefined`|
    >method-return
    当前组件VM实例。
    ---
    #demo
    >tpl
    <div style="width:300px">
        <ui-audio ref="demo1" src="http://morning-ui-media.test.upcdn.net/audio/The%20xx%20-%20VCR.mp3"></ui-audio>
        <br>
        <ui-link js="window.morning.findVM('demo1').play(true);">播放</ui-link>
        <ui-link js="window.morning.findVM('demo1').play(false);">暂停</ui-link>
        <ui-link js="window.morning.findVM('demo1').play();">切换到反向状态</ui-link>
    </div>
    :::

    :::vue
    @name:to([time])
    ---
    #method
    >method-desc
    切换到音频指定位置。
    >method-args
    |time|YES|切换到音频指定位置(单位秒)。若超出音频时间返回则会重置。|`undefined`<br>播放位置(秒)`|`Undefined`<br>`Number`|`undefined`|
    >method-return
    当前组件VM实例。
    ---
    #demo
    >tpl
    <div style="width:300px">
        <ui-audio ref="demo2" src="http://morning-ui-media.test.upcdn.net/audio/The%20xx%20-%20VCR.mp3"></ui-audio>
        <br>
        <ui-link js="window.morning.findVM('demo2').to(50);">切换到第50秒</ui-link>
    </div>
    :::

    :::vue
    @name:mute([toggle])
    ---
    #method
    >method-desc
    切换静音。
    >method-args
    |toggle|YES|切换至静音，不输入则切换到反向状态。|`undefined`<br>`true`<br>`false`|`Undefined`<br>`Boolean`|`undefined`|
    >method-return
    当前组件VM实例。
    ---
    #demo
    >tpl
    <div style="width:300px">
        <ui-audio ref="demo3" src="http://morning-ui-media.test.upcdn.net/audio/The%20xx%20-%20VCR.mp3"></ui-audio>
        <br>
        <ui-link js="window.morning.findVM('demo3').mute(true);">静音</ui-link>
        <ui-link js="window.morning.findVM('demo3').mute(false);">取消静音</ui-link>
        <ui-link js="window.morning.findVM('demo3').mute();">切换到反向状态</ui-link>
    </div>
    :::

    :::vue
    @name:volume(value)
    ---
    #method
    >method-desc
    调整音量大小。
    >method-args
    |value|NO|音量大小|0-100之间的数字|`Number`|`0`|
    >method-return
    当前组件VM实例。
    ---
    #demo
    >tpl
    <div style="width:300px">
        <ui-audio ref="demo8" src="http://morning-ui-media.test.upcdn.net/audio/The%20xx%20-%20VCR.mp3"></ui-audio>
        <br>
        <ui-link js="window.morning.findVM('demo8').volume(0);">音量设为0</ui-link>
        <ui-link js="window.morning.findVM('demo8').volume(30);">音量设为30</ui-link>
        <ui-link js="window.morning.findVM('demo8').volume(100);">音量设为100</ui-link>
    </div>
    :::

    :::vue
    @name:getInfo()
    ---
    #method
    >method-desc
    获取当前播放音频信息。
    >method-return
    返回音频播放信息对象(包含音频源地址、时间长度、当前播放位置、静音状态、音量)。
    ---
    #demo
    >tpl
    <div style="width:300px">
        <ui-audio ref="demo4" src="http://morning-ui-media.test.upcdn.net/audio/The%20xx%20-%20VCR.mp3"></ui-audio>
        <br>
        <ui-link js="console.log(window.morning.findVM('demo4').getInfo());">获取音频信息</ui-link>
    </div>
    :::

    [[[事件]]]

    :::vue
    @name:play
    ---
    #event
    >event-desc
    当音频开始播放时触发。
    ---
    #demo
    >tpl
    <div style="width:300px">
        <ui-audio ref="demo5" src="http://morning-ui-media.test.upcdn.net/audio/The%20xx%20-%20VCR.mp3" @play="echo"></ui-audio>
        <ui-link js="window.morning.findVM('demo5').play(true);">点击触发play事件</ui-link>
    </div>
    >script
    {
        methods : {
            echo : function () {
                console.log('demo5.play', 'play event!');
            }
        }
    }
    :::

    :::vue
    @name:pause
    ---
    #event
    >event-desc
    当音频暂停播放时触发。
    ---
    #demo
    >tpl
    <div style="width:300px">
        <ui-audio ref="demo6" src="http://morning-ui-media.test.upcdn.net/audio/The%20xx%20-%20VCR.mp3" @pause="echo"></ui-audio>
        <ui-link js="window.morning.findVM('demo6').play(true);setTimeout(()=>window.morning.findVM('demo6').play(false))">点击触发pause事件</ui-link>
    </div>
    >script
    {
        methods : {
            echo : function () {
                console.log('demo6.pause', 'pause event!');
            }
        }
    }
    :::

    :::vue
    @name:play-change
    ---
    #event
    >event-desc
    当音频播放状态改变时触发。
    ---
    #demo
    >tpl
    <div style="width:300px">
        <ui-audio ref="demo10" src="http://morning-ui-media.test.upcdn.net/audio/The%20xx%20-%20VCR.mp3" @play-change="echo"></ui-audio>
        <ui-link js="window.morning.findVM('demo10').play();">点击触发play-change事件</ui-link>
    </div>
    >script
    {
        methods : {
            echo : function () {
                console.log('demo10.play-change', 'play-change event!');
            }
        }
    }
    :::

    :::vue
    @name:mute-change
    ---
    #event
    >event-desc
    静音状态改变时触发。
    ---
    #demo
    >tpl
    <div style="width:300px">
        <ui-audio ref="demo7" src="http://morning-ui-media.test.upcdn.net/audio/The%20xx%20-%20VCR.mp3" @mute-change="echo"></ui-audio>
        <ui-link js="window.morning.findVM('demo7').mute();">点击触发mute-change事件</ui-link>
    </div>
    >script
    {
        methods : {
            echo : function () {
                console.log('demo7.mute-change', 'mute-change event!');
            }
        }
    }
    :::

    :::vue
    @name:volume-change
    ---
    #event
    >event-desc
    音量状态改变时触发。
    ---
    #demo
    >tpl
    <div style="width:300px">
        <ui-audio ref="demo9" src="http://morning-ui-media.test.upcdn.net/audio/The%20xx%20-%20VCR.mp3" @volume-change="echo"></ui-audio>
        <ui-link js="window.morning.findVM('demo9').volume(30);">点击触发volume-change事件</ui-link>
    </div>
    >script
    {
        methods : {
            echo : function () {
                console.log('demo9.volume-change', 'volume-change event!');
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
        <ui-audio
            ref="demoEventLifecycle"
            v-show="show"
            src="http://morning-ui-media.test.upcdn.net/audio/The%20xx%20-%20VCR.mp3"
            @created="echo('created')"
            @mounted="echo('mounted')"
            @before-update="echo('before-update')"
            @updated="echo('updated')"
            @before-destroy="echo('before-destroy')"
            @destroyed="echo('destroyed')"
        >{*text*}</ui-audio>
        <br><br>
        <ui-link js="this.text='生命周期事件';">触发update</ui-link>
        <ui-link js="this.$refs['demoEventLifecycle'].$destroy();">触发destroy</ui-link>
    </div>
    >script
    {
        data : function () {
            return {
               text : '音频',
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

    <iframe src="/report/coverage/lib/components/audio/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>

    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                 from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'audio'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
