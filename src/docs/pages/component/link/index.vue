<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 链接 `<ui-link>`
    
    <doc-component-status page="link"></doc-component-status>
    
    [[[开始]]]

    定义一个链接，这是一个内联块元素。

    :::vue
    @name:使用
    ---
    #demo
    >tpl
    <ui-link>链接</ui-link>
    :::

    [[[形态]]]

    #### 支持

    |类型|支持|默认|
    |-|-|-|
    |尺寸|全部|`m`|
    |色彩|全部|`theme`|
    |状态|全部|`normal`|

    <a href="/guide/status.html">查看形态文档</a>

    :::vue
    @name:尺寸
    ---
    #renderer
    >name
    size-repeat
    >tpl
    <ui-link size="{$sizeKey}">{$&sizeName}</ui-link>
    ---
    #renderer
    >name
    size-repeat
    >desc
    尺寸配合`locked`配置一起使用。
    >tpl
    <ui-link size="{$sizeKey}" locked>{$&sizeName}</ui-link>
    :::

    :::vue
    @layout:color
    ---
    <ui-link color="{$colorKey}">{$&colorName}</ui-link>
    <ui-link color="{$colorKey}" locked>{$&colorName}</ui-link>
    <br><br>
    :::

    :::vue
    @name:状态
    ---
    #renderer
    >name
    state-color-repeat
    >tpl
    <ui-link state="{$stateKey}" color="{$colorKey}">{$&stateName}</ui-link>
    :::

    [[[配置]]]

    :::vue
    @name:link
    ---
    #config
    >conf-desc
    链接地址，若为空则不跳转。
    >conf-accept
    url地址
    >conf-type
    String
    >conf-default
    `''`
    ---
    #demo
    >tpl
    <ui-link :link="'https://www.google.com'">链接</ui-link>
    :::

    :::vue
    @name:js
    ---
    #config
    >conf-desc
    点击后执行JS逻辑（可以通过`this`访问VM上下文）。
    >conf-accept
    JS代码
    >conf-type
    String
    >conf-default
    `''`
    ---
    #demo
    >tpl
    <ui-link :js="'alert(\'hello.\')'">执行JS</ui-link>
    ---
    #demo
    >title
    访问上下文
    >desc
    使用`this`可以访问VM的上下文。
    >tpl
    <ui-link :js="'alert(this.text)'">使用上下文</ui-link>
    >script
    {
        data : function () {
            return {
                text : 'hello!'
            };
        }
    }
    :::

    :::vue
    @name:locked
    ---
    #config
    >conf-desc
    锁定模式，用来防止组件在短时间内被重复触发。若设置一个时间数值(ms)，该组件在时间内只触发一次。也可设为`true`，触发后需要通过`unlock()`方法来解锁组件。
    >conf-accept
    `true`<br>`false`<br>数值(单位ms)
    >conf-type
    Number<br>Boolean
    >conf-default
    `false`
    ---
    #demo
    >desc
    自动解锁。
    >tpl
    <ui-link :locked="3000">3秒后自动解锁</ui-link>
    ---
    #demo
    >desc
    手动解锁。
    >tpl
    <div>
        <ui-link ref="demo1" locked>手动解锁</ui-link>
        <ui-link js="morning.findVM('demo1').unlock();">解锁</ui-link>
    </div>
    :::

    :::vue
    @name:new-tab
    ---
    #config
    >conf-desc
    是否在新窗口中打开链接。
    >conf-accept
    `true`<br>`false`
    >conf-type
    Boolean
    >conf-default
    `false`
    ---
    #demo
    >tpl
    <ui-link new-tab :link="'https://www.google.com'">新窗口打开链接</ui-link>
    :::

    [[[方法]]]

    :::vue
    @name:lock([time])
    ---
    #method
    >method-desc
    锁定链接，锁定后链接不会触发`emit`事件。
    >method-args
    |time|YES|解锁的时间，单位ms。设置后组件将在解锁时间后自动解锁，不设置则需要调用`unlock()`方法解锁|`undefined`<br>数值(单位ms)|`Undefined`<br>`Number`|`undefined`|
    >method-return
    当前组件VM实例。
    ---
    #demo
    >tpl
    <div>
        <ui-link ref="demo2">链接</ui-link>
        <br><br> 
        <ui-link js="morning.findVM('demo2').lock();">锁定</ui-link>
        <ui-link js="morning.findVM('demo2').lock(2000);">锁定2s</ui-link>
        <ui-link js="morning.findVM('demo2').unlock();">解锁</ui-link>
    </div>
    :::

    :::vue
    @name:unlock()
    ---
    #method
    >method-desc
    解锁链接，解锁后链接可触发`emit`事件。
    >method-return
    当前组件VM实例。
    ---
    #demo
    >tpl
    <div>
        <ui-link ref="demo3" locked>链接</ui-link>
        <br><br> 
        <ui-link js="morning.findVM('demo3').unlock();">解锁</ui-link>
    </div>
    :::

    [[[事件]]]

    :::vue
    @name:emit
    ---
    #event
    >event-desc
    当链接被点击时触发。
    ---
    #demo
    >tpl
    <div>
        <ui-link @emit="echo">点击触发emit事件</ui-link>
    </div>
    >script
    {
        methods : {
            echo : function () {
                console.log('demo3.console1', 'emit event!');
            }
        }
    }
    :::

    :::vue
    @layout:lifecycle-event
    ---
    link
    链接
    :::

    [[[源码]]]

    <iframe src="/report/coverage/lib/components/link/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>
    </script>

    </doc-component>
</template>
 
<script>
import DocComponent                from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'link'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
