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
        - `title` : 消息标题(String，可选)，若为空则不显示消息的标题
        - `message` : 消息内容(String，必需)
        - `color` : 消息的配色(String，可选，默认`theme`配色)，支持[形态/颜色](/guide/status.html#颜色)中的所有颜色。

    > 使用时应注意，消息组件仅用于向用户传到信息，不应该包括可交互的行动元素。

    #### 使用

    :::democode/html
    <div>
        <ui-message ref="demo1"></ui-message>
        <ui-link js="window.morning.findVM('demo1').push('一条新消息('+new Date()+')');">推送一条新消息</ui-link>
    </div>
    :::

    #### 标题

    通过配置消息对象的`title`属性来添加标题：

    :::democode/html
    <div>
        <ui-message ref="demo1"></ui-message>
        <ui-link js="window.morning.findVM('demo1').push({title:'这是标题', message: '这是消息的内容'});">推送一条消息</ui-link>
    </div>
    :::

    #### 配色

    通过配置消息对象的`color`属性来添加配置：

    :::democode/html
    <div>
        <ui-message ref="demo1"></ui-message>
        <ui-link js="window.morning.findVM('demo1').push({color:'success', message: '这是消息的内容'});">推送一条消息</ui-link>
    </div>
    :::

    #### 消息的位置

    你可以设置`show-type`配置，决定消息从哪个方向展示，消息组件支持的位置有：

    - `top`
    - `topleft`
    - `topright`
    - `bottom`
    - `bottomleft`
    - `bottomright`

    当消息展示在屏幕上方时，越靠上的消息越新。当消息展示在屏幕下方时，越靠下的消息越新。

    :::democode/html
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
    :::

    [[[形态]]]

    #### 支持

    |类型|支持|默认|
    |-|-|-|
    |尺寸|不支持|-|
    |色彩|不支持|-|
    |状态|不支持|-|

    消息组件本身不支持形态，但在发送消息时可以通过`color`来对每条消息的色彩进行控制。

    :::repeat/html
    color:theme
    color:feature
    color:black
    color:blue
    color:silver
    color:gray
    ---
    <div>
        <ui-message ref="demo{$colorKey}"></ui-message>
        <ui-link color="{$colorKey}" js="window.morning.findVM('demo{$colorKey}').push({color:'{$colorKey}', message: '这是{$colorName}的消息'});">推送一条{$colorName}消息</ui-link>
    </div>
    :::

    [[[配置]]]

    |KEY|描述|接受值|值类型|默认值|
    |-|-|-|-|-|
    |close-btn|是否显示关闭消息的按钮，开启后用户可以主动关闭消息，否则消息会在`close-time`设置的时间后消失|`true`<br>`false`|Boolean|`false`|
    |close-time|消息在多久之后消失|时间(毫秒)|Number|`4000`|
    |show-type|消息出现的位置|`'top'` : 上方<br>`'topleft'` : 左上角<br>`'topright'` : 右上角<br>`'bottom'` : 下方<br>`'bottomleft'` : 左下角<br>`'bottomright'` : 右下角|String|`'top'`|
    |max-show|同时最多显示几条消息(仅针对当前的消息组件)，当有新的消息时，超出`max-show`的消息会被暂时隐藏。如果新的消息被手动关闭，被暂时隐藏的消息会重新显示，直至超过`close-time`。若设为`false`时则显示全部消息|Number : 最多显示消息的数量<br>`false` : 显示所有|Number<br>Boolean|`2`|
    
    #### close-btn

    :::democode/html
    <div>
        <ui-message ref="demo8" :close-btn="true"></ui-message>
        <ui-link js="window.morning.findVM('demo8').push('一条新消息('+new Date()+')');">推送一条新消息</ui-link>
    </div>
    :::

    #### close-time

    :::democode/html
    <div>
        <ui-message ref="demo9" :close-time="1000"></ui-message>
        <ui-link js="window.morning.findVM('demo9').push('一条新消息('+new Date()+')');">推送一条新消息</ui-link>
    </div>
    :::

    #### show-type

    :::democode/html
    <div>
        <ui-message ref="demo10" show-type="bottom"></ui-message>
        <ui-link js="window.morning.findVM('demo10').push('一条新消息('+new Date()+')');">推送一条新消息</ui-link>
    </div>
    :::

    #### max-show

    最多显示1条：

    :::democode/html
    <div>
        <ui-message ref="demo11" :max-show="1"></ui-message>
        <ui-link js="window.morning.findVM('demo11').push('一条新消息('+new Date()+')');">推送一条新消息</ui-link>
    </div>
    :::

    不限制显示条数：

    :::democode/html
    <div>
        <ui-message ref="demo12" :max-show="false" show-type="topleft"></ui-message>
        <ui-link js="window.morning.findVM('demo12').push('一条新消息('+new Date()+')');">推送一条新消息</ui-link>
    </div>
    :::

    [[[方法]]]

    #### push(option)

    推送一条消息，这个方法将返回一个消息ID，调用`.close`方法并传入消息ID可以关闭这条消息。
    
    |KEY|可选|描述|接受值|值类型|默认值|
    |-|-|-|-|-|-|
    |option|NO|如果是字符串，则将字符串内容作为消息内容发送。<br><br>如果是对象，则认为是消息配置对象，包含：<br>`title` : 消息标题(String，可选)，若为空则不显示消息的标题<br>`message` : 消息内容(String，必需)<br>`color` : 消息的配色(String，可选，默认`theme`配色)，支持[形态/颜色](/guide/status.html#颜色)中的所有颜色。|消息内容的字符串<br>消息配置对象|`String`<br>`Object`|`undefined`|
    
    直接发送消息：

    :::democode/html
    <div>
        <ui-message ref="demo13"></ui-message>
        <ui-link js="window.morning.findVM('demo13').push('一条新消息('+new Date()+')');">推送一条新消息</ui-link>
    </div>
    :::

    通过配置对象发送：

    :::democode/html
    <div>
        <ui-message ref="demo14" show-type="topleft"></ui-message>
        <ui-link js="window.morning.findVM('demo14').push({title:'这是标题', message: '这是消息的内容', color: 'warning'});">推送一条消息</ui-link>
    </div>
    :::

    #### close(id)

    推送一条消息，这个方法将返回一个消息ID，调用`.close`方法并传入消息ID可以关闭这条消息。
    
    |KEY|可选|描述|接受值|值类型|默认值|
    |-|-|-|-|-|-|
    |id|NO|需要关闭消息的ID，通过`.push`方法获取。|消息ID|`Number`|`undefined`|

    :::democode/html
    <div>
        <ui-message ref="demo14" :close-time="30000" show-type="topright"></ui-message>
        <ui-link js="alert(window.demo15id = window.morning.findVM('demo14').push('一条新消息('+new Date()+')'))">推送一条新消息，并获取消息ID</ui-link><br>
        <ui-link js="window.morning.findVM('demo14').close(window.demo15id)">通过消息ID关闭消息</ui-link>
    </div>
    :::

    [[[事件]]]

    #### push

    当新消息推送时触发。

    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
        methods : {
            echo : function () {
                console.log('demo15.console1', 'push event!');
            }
        }
    });
    ---
    <div>
        <ui-message ref="demo15" @push="echo"></ui-message>
        <ui-link js="window.morning.findVM('demo15').push('一条新消息('+new Date()+')');">点击触发push事件</ui-link>
    </div>
    :::

    #### close

    当消息关闭时触发。

    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
        methods : {
            echo : function () {
                console.log('demo16.console1', 'close event!');
            }
        }
    });
    ---
    <div>
        <ui-message ref="demo16" @close="echo"></ui-message>
        <ui-link js="window.demo16id=window.morning.findVM('demo16').push('一条新消息('+new Date()+')');window.morning.findVM('demo16').close(window.demo16id)">点击触发close事件</ui-link>
    </div>
    :::

    #### 生命周期事件

    :::vue/html
    window.demoEventLifecycle = new Vue({
        el : '{$el}',
        template : '{$template}',
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
    });
    ---
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
        >{*text*}</ui-message>

        <br><br>

        <ui-link js="window.demoEventLifecycle.text='生命周期事件';">触发update</ui-link>
        <ui-link js="morning.findVM('demoEventLifecycle').$destroy();">触发destroy</ui-link>
    </div>
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
