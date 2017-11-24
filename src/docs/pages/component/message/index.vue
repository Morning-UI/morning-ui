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

    由于消息组件是固定展示在页面的几个位置中的，所以同位置一般只会存在一个消息组件，可以通过`show-type`配置来设置。

    消息的推送通过`.push()`方法，主要有两种情况：

    - 仅消息 : 调用消息组件的`.push(message)`方法并传入一个字符串座位消息内容。
    - 有标题或配色 : 调用消息组件的`.push(option)`方法传入一个配置对象，对象的属性包括：
        - `title` : 消息标题(String，可选)，若为空则不显示消息的标题
        - `message` : 消息内容(String，必需)
        - `color` : 消息的配色(String，可选，默认`theme`配色)，支持[形态/颜色](/guide/status.html#颜色)中的所有颜色。

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
