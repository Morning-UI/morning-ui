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
    > title
    使用
    ---
    <ui-btn>按钮</ui-btn>
    :::

    :::vue
    > title
    按钮的多种样式
    > desc
    按钮支持以下样式类：
    <br><br>
    - `plain` : 朴素的按钮
    - `round` : 圆角按钮
    - `circle` : 圆形按钮
    ---
    <div>
        <ui-btn class="plain">朴素的按钮</ui-btn>
        <br><br>
        <ui-btn class="round">圆角按钮</ui-btn>
        <br><br>
        <ui-btn class="circle">
            <i class="mo-icon mo-icon-star-f"></i>
        </ui-btn>
    </div>
    :::

    :::vue
    > title
    组合使用样式
    > desc
    按钮的`plain`样式可以和`round`或`circle`进行组合。
    ---
    <div>
        <ui-btn class="round plain">朴素的圆角按钮</ui-btn>
        <br><br>
        <ui-btn class="circle plain">  
            <i class="mo-icon mo-icon-star-f"></i>
        </ui-btn>
    </div>
    :::
    
    :::vue
    > title
    图片按钮
    > desc
    `circle`配合`ui-img`一起使用可实现图片按钮的效果。
    ---
    <ui-btn class="circle">
        <ui-img src="http://morning-ui-image.test.upcdn.net/48fc612216b4fd2112a6bcd7d0db6eba.jpeg"></ui-img>
    </ui-btn>
    :::
    
    :::vue
    > title
    带边框的图片按钮
    > desc
    `circle`和`plain`可为图片按钮增加边框。
    ---
    <ui-btn class="circle plain" color="danger">
        <ui-img src="http://morning-ui-image.test.upcdn.net/48fc612216b4fd2112a6bcd7d0db6eba.jpeg"></ui-img>
    </ui-btn>
    :::
    
    [[[形态]]]

    #### 支持

    |类型|支持|默认|
    |-|-|-|
    |尺寸|全部|`m`|
    |色彩|全部|`theme`|
    |状态|全部|`normal`|

    <a href="/guide/status.html">查看形态文档</a>

    #### 尺寸

    :::repeat/html
    size
    ---
    <ui-btn size="{$sizeKey}">{$&sizeName}</ui-btn>
    :::

    :::repeat/html
    size
    ---
    <ui-btn size="{$sizeKey}" locked>{$&sizeName}</ui-btn>
    :::

    :::repeat/html
    size
    ---
    <ui-btn size="{$sizeKey}" class="circle">
        <i class="mo-icon mo-icon-star-f"></i>
    </ui-btn>
    :::

    :::repeat/html
    size
    ---
    <ui-btn size="{$sizeKey}" class="circle" locked></ui-btn>
    :::

    #### 色彩

    :::repeat/html
    color:theme
    color:feature
    color:black
    color:blue
    color:silver
    color:gray
    ---
    <ui-btn color="{$colorKey}">{$&colorName}</ui-btn>
    <ui-btn color="{$colorKey}" class="plain">{$&colorName}</ui-btn>
    <ui-btn color="{$colorKey}" locked>{$&colorName}</ui-btn>
    <ui-btn color="{$colorKey}" locked class="plain">{$&colorName}</ui-btn>
    <br><br> 
    :::
    
    #### 状态
    
    :::repeat/html
    state|br:2|color:theme
    state|br:2|color:feature
    state|br:2|color:black
    state|br:2|color:blue
    state|br:2|color:silver
    state|br:2|color:gray
    ---
    <ui-btn state="{$stateKey}" color="{$colorKey}">{$&stateName}</ui-btn>
    :::

    [[[配置]]]
    
    :::vue
    > title
    link
    > config
    |链接地址，若为空则不跳转|url地址|String|`''`|
    ---
    <ui-btn :link="'https://www.google.com'">链接</ui-btn>
    :::

    :::vue
    > title
    js
    > config
    |点击后执行JS逻辑|JS代码|String|`''`|
    ---
    <ui-btn :js="'alert(\'hello.\')'">执行JS</ui-btn>
    :::

    :::vue
    > title
    locked
    > config
    |锁定模式，用来防止组件在短时间内被重复触发。若设置一个时间数值(ms)，该组件在时间内只触发一次。也可设为`true`，触发后需要通过`unlock()`方法来解锁组件。|`true`<br>`false`<br>数值(单位ms)|Number<br>Boolean|`false`|
    > demo
    <ui-btn :locked="3000">3秒后自动解锁</ui-btn>
    > demo-desc
    自动解锁
    ---
    <div>
        <ui-btn ref="demo1" locked>需要手动解锁</ui-btn>
        <ui-link js="morning.findVM('demo1').unlock();">解锁</ui-link>
    </div>
    :::

    :::vue
    > title
    new-tab
    > config
    |是否在新窗口中打开链接|`true`<br>`false`|Boolean|`false`|
    ---
    <ui-btn new-tab :link="'https://www.google.com'">新窗口打开链接</ui-btn>
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
