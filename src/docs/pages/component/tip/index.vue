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

    如果需要在小提示中显示更复杂的内容，可以使用[弹出框](/component/popover.html)。

    :::vue
    @name:使用
    ---
    #demo
    >tpl
    <div>
        <span id="demo1">鼠标悬浮显示小提示</span>
        <ui-tip target="#demo1">提示内容</ui-tip>
    </div>
    :::

    :::vue
    @name:复杂内容
    ---
    #demo
    >tpl
    <div>
        <span id="demo2">鼠标悬浮显示小提示</span>
        <ui-tip target="#demo2">
            <p>标题</p>
            <img width='160px' height='160px' src='http://morning-ui-image.test.upcdn.net/48fc612216b4fd2112a6bcd7d0db6eba.jpeg'>
        </ui-tip>

        <br>

        <span id="demo33">鼠标悬浮显示小提示</span>
        <ui-tip target="#demo33" color="silver">
            <ui-h size="xxs" color="light-black">标题</ui-h>
            <p>很长很长的内容很长很长的内容很长很长的内容很长很长的内容很长很长的内容很长很长的内容很长很长的内容很长很长的内容很长很长的内容很长很长的内容很长很长的内容很长很长的内容很长很长的内容很长很长的内容...</p>
        </ui-tip>
    </div>
    :::

    :::vue
    @name:目标元素有title属性
    ---
    #demo
    >desc
    如果目标元素具有`title`属性，且`ui-tip`没有设置内容，则会自动显示`title`内容。
    >tpl
    <div>
        <span id="demo3" title="This is title">只有title属性, 显示title</span>
        <ui-tip target="#demo3"></ui-tip>
        
        <br>

        <span id="demo4" title="This is title">ui-tip中的内容, 优先显示</span>
        <ui-tip target="#demo4">提示内容</ui-tip>
    </div>
    :::

    :::vue
    @name:无内容不显示
    ---
    #demo
    >desc
    在小提示组件仅包含文本内容时，若没有内容也没有`title`属性，则小提示不会显示。
    <br><br>
    不显示的情况下事件也不会触发。
    >tpl
    <div>
        <span id="demo5">如果没有提示内容也没有title则不显示</span>
        <ui-tip target="#demo5"></ui-tip>
    </div>
    :::

    :::vue
    @name:同时绑定多个小提示
    ---
    #demo
    >tpl
    <div>
        <span id="demo25">多个不同方向小提示</span>
        <ui-tip target="#demo25">小提示1</ui-tip>
        <ui-tip target="#demo25" placement="bottom">小提示2</ui-tip>

        <br><br>

        <span id="demo26">多个不同位置小提示</span>
        <ui-tip target="#demo26" offset="30px, 0">小提示1</ui-tip>
        <ui-tip target="#demo26" offset="-30px, 0">小提示2</ui-tip>

        <br><br>

        <span id="demo27">多个不同时机显示的小提示</span>
        <ui-tip target="#demo27" offset="30px, 0">小提示1</ui-tip>
        <ui-tip target="#demo27" offset="-30px, 0" :trigger-in-delay="500">小提示2</ui-tip>
    </div>
    :::

    #### 边距自动调整

    在小提示组件仅包含文本内容时(不含任何HTML标签)，提示的上下内边距会自动缩小，左右内边距不会调整。若内容包含HTML则所有内边距都是一致的。

    这样的调整可以让小提示在显示文本内容时更紧凑。

    [[[形态]]]

    #### 支持

    |类型|支持|默认|
    |-|-|-|
    |尺寸|不支持|-|
    |色彩|全部|`theme`|
    |状态|不支持|-|

    <a href="/guide/status.html">查看形态文档</a>

    :::vue
    @layout:color
    ---
    <span id="demo{$colorKey}"><ui-textcolor color="{$colorKey}">{$&colorName}小提示</ui-textcolor></span>
    <ui-tip color="{$colorKey}" target="#demo{$colorKey}">{$&colorName} 小提示</ui-tip>
    <br>
    :::

    [[[配置]]]

    :::vue
    @name:target
    ---
    #config
    >conf-desc
    触发提示的目标元素，必填项。此配置改变后，若小提示处于显示状态，则会触发一次`hide`和`show`事件，以刷新小提示的位置。
    >conf-accept
    元素选择器([MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/Document_Object_Model/Locating_DOM_elements_using_selectors))
    >conf-type
    String<br>Null
    >conf-default
    `null`
    ---
    #demo
    >desc
    此配置为必须项。
    >tpl
    <div>
        <span id="demo6">鼠标悬浮显示小提示</span>
        <ui-tip target="#demo6">提示内容</ui-tip>
    </div>
    :::

    :::vue
    @name:placement
    ---
    #config
    >conf-desc
    提示框位置。
    >conf-accept
    `top`:上方<br>`bottom`:下方<br>`left`:左侧<br>`right`:右侧
    >conf-type
    String
    >conf-default
    `'top'`
    ---
    #demo
    >tpl
    <div>
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
    </div>
    :::

    :::vue
    @name:offset
    ---
    #config
    >conf-desc
    偏移量。
    >conf-accept
    左右偏移量(单位px/%), 上下偏移量(单位px/%)
    >conf-type
    String
    >conf-default
    `'0, 0'`
    ---
    #demo
    >tpl
    <div>
        <span id="demo11">鼠标悬浮显示小提示</span>
        <ui-tip target="#demo11" offset="-30px, 10px">提示内容</ui-tip>
    </div>
    :::

    :::vue
    @name:trigger
    ---
    #config
    >conf-desc
    触发方式(支持多触发方式，多个触发器之间用空格分开)。触发方式一旦改变，已有的触发状态都会被重置。
    <br><br>
    当处于`click`配置时，点击`target`元素会切换显示/隐藏状态，同时点击其他区域会隐藏小提示。
    >conf-accept
    `hover`：鼠标移入目标元素<br>`click`：鼠标点击目标元素<br>`focus`：目标元素处于焦点状态<br>`method`：通过组件方法触发
    >conf-type
    String
    >conf-default
    `'hover'`
    ---
    #demo
    >tpl
    <div>
        <span id="demo12">点击显示小提示</span>
        <ui-tip target="#demo12" trigger="click">提示内容</ui-tip>

        <br>

        <span id="demo13">鼠标悬浮或点击显示小提示</span>
        <ui-tip target="#demo13" trigger="click hover">提示内容</ui-tip>
    </div>
    ---
    #demo
    >desc
    `trigger`也可以设置为`method`，这样只能通过组件方法来触发。
    >tpl
    <div>
        <span id="demo22">目标文字</span>
        <ui-tip target="#demo22" ref="demo22" trigger="method">提示内容</ui-tip>
        
        <br><br>

        <ui-link js="morning.findVM('demo22').show();">通过组件方法显示提示</ui-link><br>
        <ui-link js="morning.findVM('demo22').hide();">通过组件方法隐藏提示</ui-link>
    </div>
    :::

    :::vue
    @name:trigger-in-delay
    ---
    #config
    >conf-desc
    目标触发提示时进行延迟。<br>此延迟仅在`trigger`为`hover`时生效。<br>当页面中使用较多`ui-tip`时使用一定的延迟，可以减少误触的情况，提升页面体验。
    >conf-accept
    延迟触发时间(ms)
    >conf-type
    Number
    >conf-default
    `200`
    ---
    #demo
    >desc
    鼠标移入元素时延迟300ms触发提示。
    >tpl
    <div>
        <span id="demo24">鼠标悬浮显示小提示</span>
        <ui-tip target="#demo24" :trigger-in-delay="300">提示内容</ui-tip>
    </div>
    ---
    #demo
    >desc
    鼠标移入元素时立即触发提示。
    >tpl
    <div>
        <span id="demo32">鼠标悬浮显示小提示</span>
        <ui-tip target="#demo32" :trigger-in-delay="0">提示内容</ui-tip>
    </div>
    :::

    :::vue
    @name:auto-reverse
    ---
    #config
    >conf-desc
    当小提示超出窗口时，自动反转小提示的方向，使其可以显示。
    >conf-accept
    `true`<br>`false`
    >conf-type
    Boolean
    >conf-default
    `true`
    ---
    #demo
    >desc
    滚动页面的位置，使得下面的demo靠近窗口底部，当关闭`auto-reverse`后，小提示不会反转方向。
    >tpl
    <div>
        <span id="demo20">鼠标悬浮显示小提示</span>
        <ui-tip target="#demo20" placement="bottom" :auto-reverse="false" style="max-width:160px;">这是一段非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常长的提示内容</ui-tip>
    </div>
    ---
    #demo
    >desc
    开启`auto-reverse`后，小提示会反转方向。
    >tpl
    <div>
        <span id="demo21">鼠标悬浮显示小提示</span>
        <ui-tip target="#demo21" placement="bottom" :auto-reverse="true" style="max-width:160px;">这是一段非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常长的提示内容</ui-tip>
    </div>
    :::

    :::vue
    @name:align
    ---
    #config
    >conf-desc
    小提示对于触发元素的对齐。
    >conf-accept
    `start`:向左或向上对齐<br>`middle`:居中对齐<br>`end`:向右或向下对齐
    >conf-type
    String
    >conf-default
    `'middle'`
    ---
    #demo
    >tpl
    <div>
        <span id="demo28">向左对齐</span>
        <ui-tip target="#demo28" align="start">提示内容</ui-tip>

        <br>

        <span id="demo29">向上对齐</span>
        <ui-tip target="#demo29" align="start" placement="left">提示内容</ui-tip>

        <br>

        <span id="demo30">向右对齐</span>
        <ui-tip target="#demo30" align="end">提示内容</ui-tip>

        <br>

        <span id="demo31">向下对齐</span>
        <ui-tip target="#demo31" align="end" placement="left">提示内容</ui-tip>
    </div>
    :::

    [[[方法]]]

    :::vue
    @name:show()
    ---
    #method
    >method-desc
    显示小提示。
    >method-return
    当前组件VM实例。
    ---
    #demo
    >tpl
    <div>
        <span id="demo14">鼠标悬浮显示小提示</span>
        <ui-tip target="#demo14" ref="demo14">提示内容</ui-tip>
        
        <ui-link js="morning.findVM('demo14').show();" onmouseout="morning.findVM('demo14').hide();">显示小提示</ui-link>
    </div>
    :::
    
    :::vue
    @name:hide()
    ---
    #method
    >method-desc
    隐藏小提示。
    >method-return
    当前组件VM实例。
    ---
    #demo
    >tpl
    <div>
        <span id="demo15">鼠标悬浮显示小提示</span>
        <ui-tip target="#demo15" ref="demo15">提示内容</ui-tip>
        
        <ui-link js="morning.findVM('demo15').hide();" onmouseenter="morning.findVM('demo15').show();">隐藏小提示</ui-link>
    </div>
    :::
    
    :::vue
    @name:toggle()
    ---
    #method
    >method-desc
    切换小提示显示状态。
    >method-return
    当前组件VM实例。
    ---
    #demo
    >tpl
    <div>
        <span id="demo16">鼠标悬浮显示小提示</span>
        <ui-tip target="#demo16" ref="demo16">提示内容</ui-tip>
        
        <ui-link js="morning.findVM('demo16').toggle();">切换小提示</ui-link>
    </div>
    :::
    
    :::vue
    @name:position()
    ---
    #method
    >method-desc
    根据目标元素重新定位小提示的位置。
    >method-return
    当前组件VM实例。
    ---
    #demo
    >tpl
    <div>
        <span id="demo23" style="position: relative;">目标文字</span>
        <ui-tip target="#demo23" ref="demo23">提示内容</ui-tip>

        <br><br>
        
        <ui-link js="morning.findVM('demo23').show();document.querySelector('#demo23').style.left='100px';">显示小提示，然后移动目标元素位置</ui-link><br>
        <ui-link js="morning.findVM('demo23').position();">重新定位小提示</ui-link>
    </div>
    :::

    [[[事件]]]

    :::vue
    @name:emit
    ---
    #event
    >event-desc
    当小提示切换显示状态时触发。
    ---
    #demo
    >tpl
    <div>
        <span id="demo17">鼠标悬浮显示小提示</span>
        <ui-tip target="#demo17" @emit="echo">提示内容</ui-tip>
    </div>
    >script
    {
        methods : {
            echo : function () {
                console.log('demo17.console1', 'emit event!');
            }
        }
    }
    :::

    :::vue
    @name:show
    ---
    #event
    >event-desc
    当小提示显示时触发。
    ---
    #demo
    >tpl
    <div>
        <span id="demo18">鼠标悬浮显示小提示</span>
        <ui-tip target="#demo18" @show="echo">提示内容</ui-tip>
    </div>
    >script
    {
        methods : {
            echo : function () {
                console.log('demo18.console1', 'show event!');
            }
        }
    }
    :::

    :::vue
    @name:hide
    ---
    #event
    >event-desc
    当小提示显示时触发。
    ---
    #demo
    >tpl
    <div>
        <span id="demo19">鼠标悬浮显示小提示</span>
        <ui-tip target="#demo19" @hide="echo">提示内容</ui-tip>
    </div>
    >script
    {
        methods : {
            echo : function () {
                console.log('demo19.console1', 'hide event!');
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
        <ui-link js="this.text='生命周期事件';">触发update</ui-link>
        <ui-link js="this.$refs['demoEventLifecycle'].$destroy();">触发destroy</ui-link>
    </div>
    >script
    {
        data : function () {
            return {
               text : '小提示',
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
