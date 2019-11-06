<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 消息 `<ui-message>`
    
    <doc-component-status page="message"></doc-component-status>
    
    [[[开始]]]

    定义一个消息组件，这是一个块元素。

    由于消息组件是固定展示在页面的几个位置中的，所以同位置一般只会存在一个消息组件，可以通过`show-type`配置来设置。如果将两个消息组件配置在同一位置，同时有消息时，后使用的消息组件将会覆盖之前的消息组件。

    消息的推送通过`.push()`方法，主要有两种情况：

    - 仅消息 : 调用消息组件的`.push(message)`方法并传入一个字符串座位消息内容。
    - 有标题或配色 : 调用消息组件的`.push(option)`方法传入一个配置对象，对象的属性包括：
        - `title` : 消息标题(String，可选，不支持HTML)，若为空则不显示消息的标题
        - `message` : 消息内容(String，必需，支持HTML)
        - `color` : 消息的配色(String，可选，默认`theme`配色)，支持[形态/颜色](/guide/status.html#颜色)中的所有颜色。

    > 需要注意通知(`ui-notice`)和消息(`ui-message`)组件的区别在于，通知(`ui-notice`)一般包含了可交互的行动元素，而消息(`ui-message`)一般仅用于向用户传递信息。查看[通知组件](notice.html)
    
    :::vue
    @name:使用
    ---
    #demo
    >tpl
    <div>
        <ui-message ref="demo1"></ui-message>
        <ui-link js="window.morning.findVM('demo1').push('一条新消息('+new Date()+')');">推送一条新消息</ui-link>
    </div>
    :::

    :::vue
    @name:标题
    ---
    #demo
    >desc
    通过配置消息对象的`title`属性来添加标题。
    >tpl
    <div>
        <ui-message ref="demo1"></ui-message>
        <ui-link js="window.morning.findVM('demo1').push({title:'这是标题', message: '这是消息的内容'});">推送一条消息</ui-link>
    </div>
    :::

    :::vue
    @name:配色
    ---
    #demo
    >desc
    通过配置消息对象的`color`属性来添加配置。
    >tpl
    <div>
        <ui-message ref="demo1"></ui-message>
        <ui-link js="window.morning.findVM('demo1').push({color:'success', message: '这是消息的内容'});">推送一条消息</ui-link>
    </div>
    :::

    :::vue
    @name:消息内容使用HTML
    ---
    #demo
    >tpl
    <div>
        <ui-message ref="demo18"></ui-message>
        <ui-link js="window.morning.findVM('demo18').push('<i class=\'mo-icon mo-icon-warn-f\' style=\'font-size:32px;width:100%;display:inline-block;text-align:center;\'></i><br><br><b>一条新消息('+new Date()+')</b>');">推送一条新消息</ui-link>
    </div>
    :::

    :::vue
    @name:消息的位置
    ---
    #demo
    >desc
    你可以设置`show-type`配置，决定消息从哪个方向展示，消息组件支持的位置有：
    <br><br>
    - `top`
    - `topleft`
    - `topright`
    - `bottom`
    - `bottomleft`
    - `bottomright`
    <br><br>
    当消息展示在屏幕上方时，越靠上的消息越新。当消息展示在屏幕下方时，越靠下的消息越新。
    >tpl
    <div>
        <div>
            <ui-message ref="demo2" show-type="topleft"></ui-message>
            <ui-link js="window.morning.findVM('demo2').push('屏幕左上消息('+new Date()+')');">屏幕左上消息</ui-link>
        </div>
        <div>
            <ui-message ref="demo3" show-type="top"></ui-message>
            <ui-link js="window.morning.findVM('demo3').push('屏幕上方消息('+new Date()+')');">屏幕上方消息</ui-link>
        </div>
        <div>
            <ui-message ref="demo4" show-type="topright"></ui-message>
            <ui-link js="window.morning.findVM('demo4').push('屏幕右上消息('+new Date()+')');">屏幕右上消息</ui-link>
        </div>
        <div>
            <ui-message ref="demo5" show-type="bottomright"></ui-message>
            <ui-link js="window.morning.findVM('demo5').push('屏幕右上消息('+new Date()+')');">屏幕右下消息</ui-link>
        </div>
        <div>
            <ui-message ref="demo6" show-type="bottom"></ui-message>
            <ui-link js="window.morning.findVM('demo6').push('屏幕右上消息('+new Date()+')');">屏幕下方消息</ui-link>
        </div>
        <div>
            <ui-message ref="demo7" show-type="bottomleft"></ui-message>
            <ui-link js="window.morning.findVM('demo7').push('屏幕右上消息('+new Date()+')');">屏幕左下消息</ui-link>
        </div>
    </div>
    :::

    [[[形态]]]

    #### 支持

    |类型|支持|默认|
    |-|-|-|
    |尺寸|不支持|-|
    |色彩|不支持|-|
    |状态|不支持|-|

    消息组件本身不支持形态，但在发送消息时可以通过`color`来对每条消息的色彩进行控制。

    :::vue
    @layout:color
    ---
    <div>
        <ui-message ref="demo{$colorKey}"></ui-message>
        <ui-link color="{$colorKey}" js="window.morning.findVM('demo{$colorKey}').push({color:'{$colorKey}', message: '这是{$colorName}的消息'});">推送一条{$colorName}消息</ui-link>
    </div>
    :::

    [[[配置]]]

    :::vue
    @name:close-btn
    ---
    #config
    >conf-desc
    是否显示关闭消息的按钮，开启后用户可以主动关闭消息，否则消息会在`done-time`设置的时间后消失。
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
        <ui-message ref="demo8" :close-btn="true"></ui-message>
        <ui-link js="window.morning.findVM('demo8').push('一条新消息('+new Date()+')');">推送一条新消息</ui-link>
    </div>
    :::

    :::vue
    @name:done-time
    ---
    #config
    >conf-desc
    消息在多久之后关闭|数字：时间(毫秒)<br>`false` : 不会定时关闭，需要通过`close-btn`关闭
    >conf-accept
    `true`<br>`false`
    >conf-type
    Number<br>Boolean
    >conf-default
    `4000`
    ---
    #demo
    >desc
    将关闭时间缩短到1秒。
    >tpl
    <div>
        <ui-message ref="demo9" :done-time="1000"></ui-message>
        <ui-link js="window.morning.findVM('demo9').push('一条新消息('+new Date()+')');">推送一条新消息</ui-link>
    </div>
    ---
    #demo
    >desc
    将关闭时间设置为`false`，必需通过关闭按钮来关闭消息。
    >tpl
    <div>
        <ui-message ref="demo17" :done-time="false" :close-btn="true"></ui-message>
        <ui-link js="window.morning.findVM('demo17').push('必需通过按钮关闭的消息');">推送一条新消息</ui-link>
    </div>
    :::

    :::vue
    @name:show-type
    ---
    #config
    >conf-desc
    消息出现的位置。
    >conf-accept
    `'top'` : 上方<br>`'topleft'` : 左上角<br>`'topright'` : 右上角<br>`'bottom'` : 下方<br>`'bottomleft'` : 左下角<br>`'bottomright'` : 右下角
    >conf-type
    String
    >conf-default
    `'top'`
    ---
    #demo
    >tpl
    <div>
        <ui-message ref="demo10" show-type="bottom"></ui-message>
        <ui-link js="window.morning.findVM('demo10').push('一条新消息('+new Date()+')');">推送一条新消息</ui-link>
    </div>
    :::

    :::vue
    @name:max-show
    ---
    #config
    >conf-desc
    同时最多显示几条消息(仅针对当前的消息组件)，当有新的消息时，超出`max-show`的消息会被暂时隐藏。如果新的消息被手动关闭，被暂时隐藏的消息会重新显示，直至超过`done-time`。若设为`false`时则显示全部消息。
    >conf-accept
    Number : 最多显示消息的数量<br>`false` : 显示所有
    >conf-type
    Number<br>Boolean
    >conf-default
    `2`
    ---
    #demo
    >desc
    最多显示1条。
    >tpl
    <div>
        <ui-message ref="demo11" :max-show="1"></ui-message>
        <ui-link js="window.morning.findVM('demo11').push('一条新消息('+new Date()+')');">推送一条新消息</ui-link>
    </div>
    ---
    #demo
    >desc
    不限制显示条数。
    >tpl
    <div>
        <ui-message ref="demo12" :max-show="false" show-type="topleft"></ui-message>
        <ui-link js="window.morning.findVM('demo12').push('一条新消息('+new Date()+')');">推送一条新消息</ui-link>
    </div>
    :::

    [[[方法]]]

    :::vue
    @name:push(option)
    ---
    #method
    >method-desc
    推送一条消息，这个方法将返回一个消息ID，调用`.close`方法并传入消息ID可以关闭这条消息。
    >method-args
    |option|NO|如果是字符串，则将字符串内容作为消息内容发送。<br><br>如果是对象，则认为是消息配置对象，包含：<br>`title` : 消息标题(String，可选)，若为空则不显示消息的标题<br>`message` : 消息内容(String，必需)<br>`color` : 消息的配色(String，可选，默认`theme`配色)，支持[形态/颜色](/guide/status.html#颜色)中的所有颜色。|消息内容的字符串<br>消息配置对象|`String`<br>`Object`|`undefined`|
    >method-return
    当前组件VM实例。
    ---
    #demo
    >desc
    直接发送消息。
    >tpl
    <div>
        <ui-message ref="demo13"></ui-message>
        <ui-link js="window.morning.findVM('demo13').push('一条新消息('+new Date()+')');">推送一条新消息</ui-link>
    </div>
    ---
    #demo
    >desc
    通过配置对象发送。
    >tpl
    <div>
        <ui-message ref="demo14" show-type="topleft"></ui-message>
        <ui-link js="window.morning.findVM('demo14').push({title:'这是标题', message: '这是消息的内容', color: 'warning'});">推送一条消息</ui-link>
    </div>
    :::

    :::vue
    @name:close(id)
    ---
    #method
    >method-desc
    推送一条消息，这个方法将返回一个消息ID，调用`.close`方法并传入消息ID可以关闭这条消息。
    >method-args
    |id|NO|需要关闭消息的ID，通过`.push`方法获取。|消息ID|`Number`|`undefined`|
    >method-return
    当前组件VM实例。
    ---
    #demo
    >tpl
    <div>
        <ui-message ref="demo14" :done-time="30000" show-type="topright"></ui-message>
        <ui-link js="alert(window.demo15id = window.morning.findVM('demo14').push('一条新消息('+new Date()+')'))">推送一条新消息，并获取消息ID</ui-link><br>
        <ui-link js="window.morning.findVM('demo14').close(window.demo15id)">通过消息ID关闭消息</ui-link>
    </div>
    :::

    [[[事件]]]

    :::vue
    @name:push
    ---
    #event
    >event-desc
    当新消息推送时触发。
    ---
    #demo
    >tpl
    <div>
        <ui-message ref="demo15" @push="echo"></ui-message>
        <ui-link js="window.morning.findVM('demo15').push('一条新消息('+new Date()+')');">点击触发push事件</ui-link>
    </div>
    >script
    {
        methods : {
            echo : function () {
                console.log('demo15.console1', 'push event!');
            }
        }
    }
    :::
    
    :::vue
    @name:close
    ---
    #event
    >event-desc
    当消息关闭时触发。
    ---
    #demo
    >tpl
    <div>
        <ui-message ref="demo16" @close="echo"></ui-message>
        <ui-link js="window.demo16id=window.morning.findVM('demo16').push('一条新消息('+new Date()+')');window.morning.findVM('demo16').close(window.demo16id)">点击触发close事件</ui-link>
    </div>
    >script
    {
        methods : {
            echo : function () {
                console.log('demo16.console1', 'close event!');
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
        <ui-message
            ref="demoEventLifecycle"
            v-show="show"
            @created="echo('created')"
            @mounted="echo('mounted')"
            @before-update="echo('before-update')"
            @updated="echo('updated')"
            @before-destroy="echo('before-destroy')"
            @destroyed="echo('destroyed')"
        >
            {*text*}
        </ui-message>
        <ui-link js="window.morning.findVM('demoEventLifecycle').push('一条新消息('+new Date()+')');">推送一条新消息</ui-link>
        <br><br>
        <ui-link js="this.text='生命周期事件';">触发update</ui-link>
        <ui-link js="this.$refs['demoEventLifecycle'].$destroy();">触发destroy</ui-link>
    </div>
    >script
    {
        data : function () {
            return {
               text : '消息',
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

    <iframe src="/report/coverage/lib/components/message/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>

    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                 from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'message'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
