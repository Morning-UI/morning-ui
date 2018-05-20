<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 小提示 `<ui-tip>`
    
    <doc-component-status page="tip"></doc-component-status>
    
    [[[开始]]]

    定义一个小提示，为界面的元素提供简要说明。

    #### 使用

    :::democode/html
    <span id="demo1">鼠标悬浮显示小提示</span>
    <ui-tip target="#demo1">提示内容</ui-tip>
    :::

    #### 复杂内容

    :::democode/html
    <span id="demo2">鼠标悬浮显示小提示</span>
    <ui-tip target="#demo2">
        <p>标题</p>
        <img width='160px' height='160px' src='http://morning-ui-image.test.upcdn.net/48fc612216b4fd2112a6bcd7d0db6eba.jpeg'>
    </ui-tip>
    :::

    #### 目标元素有title属性

    如果目标元素具有`title`属性，且`ui-tip`没有设置内容，则会自动显示`title`内容。

    :::democode/html
    <span id="demo3" title="This is title">只有title属性, 显示title</span>
    <ui-tip target="#demo3"></ui-tip>
    
    <br>

    <span id="demo4" title="This is title">ui-tip中的内容, 优先显示</span>
    <ui-tip target="#demo4">提示内容</ui-tip>
    :::

    #### 无内容不显示

    不显示的情况下事件也不会触发。

    :::democode/html
    <span id="demo5">如果没有提示内容也没有title则不显示</span>
    <ui-tip target="#demo5"></ui-tip>
    :::

    [[[形态]]]

    #### 支持

    |类型|支持|默认|
    |-|-|-|
    |尺寸|不支持|-|
    |色彩|全部|`theme`|
    |状态|不支持|-|

    <a href="/guide/status.html">查看形态文档</a>

    #### 色彩

    :::repeat/html
    color:theme
    color:feature
    color:black
    color:blue
    color:silver
    color:gray
    ---
    <span id="demo{$colorKey}"><ui-textcolor color="{$colorKey}">{$&colorName}小提示</ui-textcolor></span>
    <ui-tip color="{$colorKey}" target="#demo{$colorKey}">{$&colorName} 小提示</ui-tip>
    <br>
    :::

    [[[配置]]]

    |KEY|描述|接受值|值类型|默认值|
    |-|-|-|-|-|
    |[target](#target)|触发提示的目标元素，必填项。此配置改变后，若小提示处于显示状态，则会触发一次`hide`和`show`事件，以刷新小提示的位置。|元素选择器([MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/Document_Object_Model/Locating_DOM_elements_using_selectors)|String<br>Null|`null`|
    |[placement](#placement)|提示框位置|`top`:上方<br>`bottom`:下方<br>`left`:左侧<br>`right`:右侧|String|`'top'`|
    |[offset](#offset)|偏移量|上下偏移量(单位px/%) 左右偏移量(单位px/%)|String|`'0 0'`|
    |[trigger](#trigger)|触发方式(支持多触发方式，多个触发器之间用空格分开)。触发方式一旦改变，已有的触发状态都会被重置。|`hover`<br>`click`<br>`focus`|String|`'hover'`|
    |[auto-reverse](#auto-reverse)|当小提示超出窗口时，自动反转小提示的方向，使其可以显示。|`true`<br>`false`|Boolean|`true`|
    
    #### target

    必填项

    :::democode/html
    <span id="demo6">鼠标悬浮显示小提示</span>
    <ui-tip target="#demo6">提示内容</ui-tip>
    :::

    #### placement

    :::democode/html
    <span id="demo7">上方提示</span>
    <ui-tip target="#demo7" placement="top">提示内容</ui-tip>

    <br>

    <span id="demo8">下方提示</span>
    <ui-tip target="#demo8" placement="bottom">提示内容</ui-tip>

    <br>

    <span id="demo9">左侧提示</span>
    <ui-tip target="#demo9" placement="left">提示内容</ui-tip>

    <br>

    <span id="demo10">右侧提示</span>
    <ui-tip target="#demo10" placement="right">提示内容</ui-tip>
    :::

    #### offset

    :::democode/html
    <span id="demo11">鼠标悬浮显示小提示</span>
    <ui-tip target="#demo11" offset="10px -30px">提示内容</ui-tip>
    :::

    #### trigger

    :::democode/html
    <span id="demo12">点击显示小提示</span>
    <ui-tip target="#demo12" trigger="click">提示内容</ui-tip>

    <br>

    <span id="demo13">鼠标悬浮或点击显示小提示</span>
    <ui-tip target="#demo13" trigger="click hover">提示内容</ui-tip>
    :::

    #### auto-reverse

    滚动页面的位置，使得下面的demo靠近窗口底部，当关闭`auto-reverse`后，小提示不会反转方向：

    :::democode/html
    <span id="demo20">鼠标悬浮显示小提示</span>
    <ui-tip target="#demo20" placement="bottom" :auto-reverse="false">这是一段非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常长的提示内容</ui-tip>
    :::

    开启`auto-reverse`后，小提示会反转方向：

    :::democode/html
    <span id="demo21">鼠标悬浮显示小提示</span>
    <ui-tip target="#demo21" placement="bottom" :auto-reverse="true">这是一段非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常长的提示内容</ui-tip>
    :::

    [[[方法]]]

    #### show()

    显示小提示。

    :::democode/html
    <span id="demo14">鼠标悬浮显示小提示</span>
    <ui-tip target="#demo14" ref="demo14">提示内容</ui-tip>
    
    <ui-link js="morning.findVM('demo14').show();" onmouseout="morning.findVM('demo14').hide();">显示小提示</ui-link>
    :::

    #### hide()

    隐藏小提示。

    :::democode/html
    <span id="demo15">鼠标悬浮显示小提示</span>
    <ui-tip target="#demo15" ref="demo15">提示内容</ui-tip>
    
    <ui-link js="morning.findVM('demo15').hide();" onmouseenter="morning.findVM('demo15').show();">隐藏小提示</ui-link>
    :::

    #### toggle()

    切换小提示显示状态。

    :::democode/html
    <span id="demo16">鼠标悬浮显示小提示</span>
    <ui-tip target="#demo16" ref="demo16">提示内容</ui-tip>
    
    <ui-link js="morning.findVM('demo16').toggle();">切换小提示</ui-link>
    :::
    
    [[[事件]]]

    #### emit

    当小提示切换显示状态时时触发。

    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
        methods : {
            echo : function () {
                console.log('demo17.console1', 'emit event!');
            }
        }
    });
    ---
    <div>
        <span id="demo17">鼠标悬浮显示小提示</span>
        <ui-tip target="#demo17" @emit="echo">提示内容</ui-tip>
    </div>
    :::

    #### show

    当小提示显示时触发。

    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
        methods : {
            echo : function () {
                console.log('demo18.console1', 'show event!');
            }
        }
    });
    ---
    <div>
        <span id="demo18">鼠标悬浮显示小提示</span>
        <ui-tip target="#demo18" @show="echo">提示内容</ui-tip>
    </div>
    :::

    #### hide

    当小提示显示时触发。

    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
        methods : {
            echo : function () {
                console.log('demo19.console1', 'hide event!');
            }
        }
    });
    ---
    <div>
        <span id="demo19">鼠标悬浮显示小提示</span>
        <ui-tip target="#demo19" @hide="echo">提示内容</ui-tip>
    </div>
    :::

    #### 生命周期事件
    
    :::vue/html
    window.demoEventLifecycle = new Vue({
        el : '{$el}',
        template : '{$template}',
        data : function () {
            return {
               text : '小提示',
               show : true
            };
        },
        methods : {
            echo : function (name) {
                console.log('demoEventLifecycle.console1', `${name} event!`);
            }
        }
    });
    ---
    <div>
        <span id="demoEventLifecycle">鼠标悬浮显示小提示</span>
        <ui-tip
            target="#demoEventLifecycle"
            ref="demoEventLifecycle"
            v-show="show"
            @created="echo('created')"
            @mounted="echo('mounted')"
            @before-update="echo('before-update')"
            @updated="echo('updated')"
            @before-destroy="echo('before-destroy')"
            @destroyed="echo('destroyed')"
        >{*text*}</ui-tip>

        <br><br>
    
        <ui-link js="window.demoEventLifecycle.text='生命周期事件';">触发update</ui-link>
        <ui-link js="morning.findVM('demoEventLifecycle').$destroy();">触发destroy</ui-link>
    </div>
    :::

    [[[源码]]]

    <iframe src="/report/coverage/lib/components/tip/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>

    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                 from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'tip'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
