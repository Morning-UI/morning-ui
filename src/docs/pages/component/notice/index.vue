<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 通知 `<ui-notice>`
    
    <doc-component-status page="notice"></doc-component-status>
    
    [[[开始]]]

    定义一个通知组件，这是一个块元素。

    由于通知组件是固定展示在页面的几个位置中的，所以同位置一般只会存在一个通知组件，可以通过`show-type`配置来设置。如果将两个通知组件配置在同一位置，同时有通知时，后使用的通知组件将会覆盖之前的通知组件。

    通知的推送通过`.push()`方法，主要有两种情况：

    - 仅通知 : 调用通知组件的·.push(message)·方法并传入一个字符串座位通知内容。
    - 有头部或尾部 :  调用通知组件的`.push(option)`方法传入一个配置对象，对象的属性包括：
        - `header` : 通知的头部(String，可选，支持HTML/Vue组件)，若为空则不显示通知的头部
        - `body` : 通知正文(String，必需，支持HTML/Vue组件)
        - `footer` : 通知的尾部(String，可选，支持HTML/Vue组件)，若为空则不显示通知的尾部
        - `icon` : 通知的`icon`(String，可选，支持HTML)
        - `type` : 通知的类型，预设了颜色和`icon`(String，可选值：`success`、`warning`、`error`、`info`)，使用后`icon`配置无效

    > 需要注意通知(`ui-notice`)和通知(`ui-message`)组件的区别在于，通知(`ui-notice`)一般包含了可交互的行动元素，而通知(`ui-message`)一般仅用于向用户传递信息。查看[通知组件](message.html)

    :::vue
    @name:使用
    ---
    #demo
    >tpl
    <div>
        <ui-notice ref="demo1"></ui-notice>
        <ui-link js="window.morning.findVM('demo1').push('一条新通知('+new Date()+')');">推送一条新通知</ui-link>
    </div>
    :::

    :::vue
    @name:带头部的通知
    ---
    #demo
    >desc
    通过配置通知对象的`header`属性来添加头部。
    >tpl
    <div>
        <ui-notice ref="demo1"></ui-notice>
        <ui-link js="window.morning.findVM('demo1').push({header : '<div style=\'display:flex;align-items:center;\'><b>通知标题</b> <ui-badge size=\'xxs\' color=\'primary\'>重要</ui-badge></div>',body : '一条新通知('+new Date()+')'});">推送一条新通知</ui-link>
    </div>
    :::

    :::vue
    @name:带尾部的通知
    ---
    #demo
    >desc
    通过配置通知对象的`footer`属性来添加尾部。
    >tpl
    <div>
        <ui-notice ref="demo1"></ui-notice>
        <ui-link js="window.morning.findVM('demo1').push({body : '一条新通知('+new Date()+')',footer : '<ui-btn color=\'primary\' size=\'xs\'>查看详情</ui-btn>'});">推送一条新通知</ui-link>
    </div>
    :::

    :::vue
    @name:带`icon`的通知
    ---
    #demo
    >desc
    通过配置通知对象的`icon`属性来添加图标。
    >tpl
    <div>
        <ui-notice ref="demo1"></ui-notice>
        <ui-link js="window.morning.findVM('demo1').push({body : '一条新通知('+new Date()+')', icon : '<i class=\'mo-icon mo-icon-location\' style=\'color:#B2B2B2\'></i>'});">推送一条新通知</ui-link>
    </div>
    :::

    :::vue
    @name:完整的通知
    ---
    #demo
    >tpl
    <div>
        <ui-notice ref="demo1"></ui-notice>
        <ui-link js="window.morning.findVM('demo1').push({header : '<div style=\'display:flex;align-items:center;\'><b>通知标题</b> <ui-badge size=\'xxs\' color=\'primary\'>重要</ui-badge></div>',body : '一条新通知('+new Date()+')',footer : '<ui-btn color=\'minor\' size=\'xs\'>查看详情</ui-btn>', icon : '<i class=\'mo-icon mo-icon-location\' style=\'color:#B2B2B2\'></i>'});">推送一条新通知</ui-link>
    </div>
    :::

    :::vue
    @name:不同类型的通知
    ---
    #demo
    >desc
    通过`type`指定`success`类型的通知。
    >tpl
    <div>
        <ui-notice ref="demo1"></ui-notice>
        <ui-link js="window.morning.findVM('demo1').push({type : 'success',header : '<b>通知标题</b>',body : '一条新通知('+new Date()+')',footer : '<ui-btn color=\'minor\' size=\'xs\'>查看详情</ui-btn>'});">推送一条新通知</ui-link>
    </div>
    ---
    #demo
    >desc
    通过`type`指定`warning`类型的通知。
    >tpl
    <div>
        <ui-notice ref="demo1"></ui-notice>
        <ui-link js="window.morning.findVM('demo1').push({type : 'warning',header : '<b>通知标题</b>',body : '一条新通知('+new Date()+')',footer : '<ui-btn color=\'minor\' size=\'xs\'>查看详情</ui-btn>'});">推送一条新通知</ui-link>
    </div>
    ---
    #demo
    >desc
    通过`type`指定`error`类型的通知。
    >tpl
    <div>
        <ui-notice ref="demo1"></ui-notice>
        <ui-link js="window.morning.findVM('demo1').push({type : 'error',header : '<b>通知标题</b>',body : '一条新通知('+new Date()+')',footer : '<ui-btn color=\'minor\' size=\'xs\'>查看详情</ui-btn>'});">推送一条新通知</ui-link>
    </div>
    ---
    #demo
    >desc
    通过`type`指定`info`类型的通知。
    >tpl
    <div>
        <ui-notice ref="demo1"></ui-notice>
        <ui-link js="window.morning.findVM('demo1').push({type : 'info',header : '<b>通知标题</b>',body : '一条新通知('+new Date()+')',footer : '<ui-btn color=\'minor\' size=\'xs\'>查看详情</ui-btn>'});">推送一条新通知</ui-link>
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
    @name:close-btn
    ---
    #config
    >conf-desc
    是否显示关闭通知的按钮，开启后用户可以主动关闭通知，否则通知会在`done-time`设置的时间后消失。
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
        <ui-notice ref="demo5" :close-btn="true"></ui-notice>
        <ui-link js="window.morning.findVM('demo5').push('一条新通知('+new Date()+')');">推送一条新通知</ui-link>
    </div>
    :::

    :::vue
    @name:done-time
    ---
    #config
    >conf-desc
    通知在多久之后关闭|数字：时间(毫秒)<br>`false` : 不会定时关闭，需要通过`close-btn`关闭
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
        <ui-notice ref="demo6" :done-time="1000"></ui-notice>
        <ui-link js="window.morning.findVM('demo6').push('一条新通知('+new Date()+')');">推送一条新通知</ui-link>
    </div>
    ---
    #demo
    >desc
    将关闭时间设置为`false`，必需通过关闭按钮来关闭通知。
    >tpl
    <div>
        <ui-notice ref="demo7" :done-time="false" :close-btn="true"></ui-notice>
        <ui-link js="window.morning.findVM('demo7').push('必需通过按钮关闭的通知');">推送一条新通知</ui-link>
    </div>
    :::

    :::vue
    @name:show-type
    ---
    #config
    >conf-desc
    通知出现的位置。
    >conf-accept
    `'topleft'` : 左上角<br>`'topright'` : 右上角<br>`'bottomleft'` : 左下角<br>`'bottomright'` : 右下角
    >conf-type
    String
    >conf-default
    `'topright'`
    ---
    #demo
    >desc
    右下角出现通知。
    >tpl
    <div>
        <ui-notice ref="demo2" show-type="bottomright"></ui-notice>
        <ui-link js="window.morning.findVM('demo2').push('一条新通知('+new Date()+')');">推送一条新通知</ui-link>
    </div>
    ---
    #demo
    >desc
    左下角出现通知。
    >tpl
    <div>
        <ui-notice ref="demo3" show-type="bottomleft"></ui-notice>
        <ui-link js="window.morning.findVM('demo3').push('一条新通知('+new Date()+')');">推送一条新通知</ui-link>
    </div>
    ---
    #demo
    >desc
    左上角出现通知。
    >tpl
    <div>
        <ui-notice ref="demo4" show-type="topleft"></ui-notice>
        <ui-link js="window.morning.findVM('demo4').push('一条新通知('+new Date()+')');">推送一条新通知</ui-link>
    </div>
    :::

    :::vue
    @name:max-show
    ---
    #config
    >conf-desc
    同时最多显示几条通知(仅针对当前的通知组件)，当有新的通知时，超出`max-show`的通知会被暂时隐藏。如果新的通知被手动关闭，被暂时隐藏的通知会重新显示，直至超过`done-time`。若设为`false`时则显示全部通知。
    >conf-accept
    Number : 最多显示通知的数量<br>`false` : 显示所有
    >conf-type
    Number<br>Boolean
    >conf-default
    `3`
    ---
    #demo
    >desc
    最多显示1条。
    >tpl
    <div>
        <ui-notice ref="demo11" :max-show="1"></ui-notice>
        <ui-link js="window.morning.findVM('demo11').push('一条新通知('+new Date()+')');">推送一条新通知</ui-link>
    </div>
    ---
    #demo
    >desc
    不限制显示条数。
    >tpl
    <div>
        <ui-notice ref="demo12" :max-show="false" show-type="topleft"></ui-notice>
        <ui-link js="window.morning.findVM('demo12').push('一条新通知('+new Date()+')');">推送一条新通知</ui-link>
    </div>
    :::

    [[[事件]]]

    :::vue
    @name:push
    ---
    #event
    >event-desc
    当新通知推送时触发。
    ---
    #demo
    >tpl
    <div>
        <ui-notice ref="demo9" @push="echo"></ui-notice>
        <ui-link js="window.morning.findVM('demo9').push('一条新通知('+new Date()+')');">点击触发push事件</ui-link>
    </div>
    >script
    {
        methods : {
            echo : function () {
                console.log('demo9.console1', 'push event!');
            }
        }
    }
    :::
    
    :::vue
    @name:close
    ---
    #event
    >event-desc
    当通知关闭时触发。
    ---
    #demo
    >tpl
    <div>
        <ui-message ref="demo10" @close="echo"></ui-message>
        <ui-link js="window.demo10id=window.morning.findVM('demo10').push('一条新通知('+new Date()+')');window.morning.findVM('demo10').close(window.demo10id)">点击触发close事件</ui-link>
    </div>
    >script
    {
        methods : {
            echo : function () {
                console.log('demo10.console1', 'close event!');
            }
        }
    }
    :::

    :::vue
    @layout:lifecycle-event
    ---
    notice
    通知
    :::

    [[[源码]]]

    <iframe src="/report/coverage/lib/components/notice/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>

    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                 from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'notice'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
