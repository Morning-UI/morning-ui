<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 按钮 `<ui-btn>`
    
    <doc-component-status page="btn"></doc-component-status>
    
    [[[开始]]]

    定义一个按钮，这是一个内联块元素。

    :::vue
    @name:使用
    ---
    #demo
    >tpl
    <ui-btn>按钮</ui-btn>
    :::

    :::vue
    @name:按钮图标
    ---
    #demo
    >desc
    可以通过`<i>`标签在按钮中使用图标
    >tpl
    <ui-btn><i class="mo-icon mo-icon-love-o"></i> 按钮</ui-btn>
    :::

    :::vue
    @name:按钮的多种样式
    ---
    #demo
    >desc
    按钮支持以下样式类：
    <br><br>
    - `plain` : 朴素按钮
    - `ghost` : 幽灵按钮
    - `fade` : 褪色按钮
    - `round` : 圆角按钮
    - `circle` : 圆形按钮
    >tpl
    <div>
        <ui-btn class="plain">朴素按钮</ui-btn>
        <br><br>
        <ui-btn class="ghost">幽灵按钮</ui-btn>
        <br><br>
        <ui-btn class="fade">褪色按钮</ui-btn>
        <br><br>
        <ui-btn class="round">圆角按钮</ui-btn>
        <br><br>
        <ui-btn class="circle">
            <i class="mo-icon mo-icon-star-f"></i>
        </ui-btn>
    </div>
    ---
    #demo
    >desc
    其中`plain`可以和`round`或`circle`进行组合。
    >tpl
    <div>
        <ui-btn class="round plain">朴素的圆角按钮</ui-btn>
        <br><br>
        <ui-btn class="circle plain">
            <i class="mo-icon mo-icon-star-f"></i>
        </ui-btn>
    </div>
    ---
    #demo
    >desc
    其中`fade`和`ghost`进行组合。
    >tpl
    <div>
        <ui-btn class="ghost fade" color="light-theme">按钮</ui-btn>
    </div>
    :::

    :::vue
    @name:图片按钮
    ---
    #demo
    >desc
    `circle`配合`ui-img`一起使用可实现图片按钮的效果。
    >tpl
    <ui-btn class="circle">
        <ui-img src="http://morning-ui-image.test.upcdn.net/48fc612216b4fd2112a6bcd7d0db6eba.jpeg"></ui-img>
    </ui-btn>
    ---
    #demo
    >desc
    在上面的基础上增加`plain`可为图片按钮增加边框。
    >tpl
    <ui-btn class="circle plain" color="danger">
        <ui-img src="http://morning-ui-image.test.upcdn.net/48fc612216b4fd2112a6bcd7d0db6eba.jpeg"></ui-img>
    </ui-btn>
    :::
    
    [[[形态]]]

    #### 支持

    |类型|支持|默认|
    |-|-|-|
    |尺寸|全部|`m`|
    |色彩|全部(除`transparent`)|`theme`|
    |状态|全部|`normal`|

    <a href="/guide/status.html">查看形态文档</a> / <a href="/design/color.html">查看色彩文档</a>

    :::vue
    @name:尺寸
    ---
    #renderer
    >name
    size-repeat
    >tpl
    <ui-btn size="{$sizeKey}">{$&sizeName}</ui-btn>
    ---
    #renderer
    >name
    size-repeat
    >desc
    尺寸配合`locked`配置一起使用。
    >tpl
    <ui-btn size="{$sizeKey}" locked>{$&sizeName}</ui-btn>
    ---
    #renderer
    >name
    size-repeat
    >desc
    尺寸配合`circle`样式类一起使用。
    >tpl
    <ui-btn size="{$sizeKey}" class="circle">
        <i class="mo-icon mo-icon-star-f"></i>
    </ui-btn>
    ---
    #renderer
    >name
    size-repeat
    >desc
    尺寸配合`circle`样式类和`locked`配置一起使用。
    >tpl
    <ui-btn size="{$sizeKey}" class="circle" locked></ui-btn>
    :::

    :::vue
    @layout:color
    ---
    <ui-btn color="{$colorKey}">{$&colorName}</ui-btn>
    <ui-btn color="{$colorKey}" class="plain">{$&colorName}</ui-btn>
    <ui-btn color="{$colorKey}" class="ghost">{$&colorName}</ui-btn>
    <ui-btn color="{$colorKey}" locked>{$&colorName}</ui-btn>
    <ui-btn color="{$colorKey}" locked class="plain">{$&colorName}</ui-btn>
    <ui-btn color="{$colorKey}" locked class="ghost">{$&colorName}</ui-btn>
    <br><br>
    :::

    :::vue
    @name:状态
    ---
    #renderer
    >name
    state-color-repeat
    >tpl
    <ui-btn state="{$stateKey}" color="{$colorKey}">{$&stateName}</ui-btn>
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
    <ui-btn :link="'https://www.google.com'">链接</ui-btn>
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
    <ui-btn :js="'alert(\'hello.\')'">执行JS</ui-btn>
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
    <ui-btn :locked="3000">3秒后自动解锁</ui-btn>
    ---
    #demo
    >desc
    手动解锁。
    >tpl
    <div>
        <ui-btn ref="demo1" locked>手动解锁</ui-btn>
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
    <ui-btn new-tab :link="'https://www.google.com'">新窗口打开链接</ui-btn>
    :::

    [[[方法]]]

    :::vue
    @name:lock([time])
    ---
    #method
    >method-desc
    锁定按钮，锁定后按钮不会触发`emit`事件。
    >method-args
    |time|YES|解锁的时间，单位ms。设置后组件将在解锁时间后自动解锁，不设置则需要调用`unlock()`方法解锁|`undefined`<br>数值(单位ms)|`Undefined`<br>`Number`|`undefined`|
    >method-return
    当前组件VM实例。
    ---
    #demo
    >tpl
    <div>
        <ui-btn ref="demo2">按钮</ui-btn>
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
    解锁按钮，解锁后按钮可触发`emit`事件。
    >method-return
    当前组件VM实例。
    ---
    #demo
    >tpl
    <div>
        <ui-btn ref="demo3" locked>按钮</ui-btn>
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
    当按钮被点击时触发。
    ---
    #demo
    >tpl
    <div>
        <ui-btn @emit="echo">点击触发emit事件</ui-btn>
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
    btn
    按钮
    :::

    [[[源码]]]

    <iframe src="/report/coverage/lib/components/btn/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>

    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                 from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'btn'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
