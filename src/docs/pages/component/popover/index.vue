<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 弹出框 `<ui-popover>`
    
    <doc-component-status page="popover"></doc-component-status>
    
    [[[开始]]]

    定义一个弹出框，弹出框用于在用户交互时显示更多内容。

    :::vue
    @name:使用
    ---
    #demo
    >tpl
    <div>
        <span id="demo1">鼠标悬浮显示弹出框</span>
        <ui-popover target="#demo1">
            <p>内容内容内容内容内容1...</p>
            <p>内容内容内容内容2...</p>
            <p>内容内容内容3...</p>
        </ui-popover>
    </div>
    :::

    :::vue
    @name:带标题的弹出框
    ---
    #demo
    >desc
    弹出框支持标题`slot`，可以通过`slot="title"`来指定标题部分。
    >tpl
    <div>
        <span id="demo2">鼠标悬浮显示弹出框</span>
        <ui-popover target="#demo2">
            <b slot="title">标题</b>
            <p>内容内容内容内容内容1...</p>
            <p>内容内容内容内容2...</p>
            <p>内容内容内容3...</p>
        </ui-popover>
    </div>
    ---
    #demo
    >desc
    也可以通过标题`slot`来自定义复杂的标题部分。
    >tpl
    <div>
        <span id="demo3">鼠标悬浮显示弹出框</span>
        <ui-popover target="#demo3">
            <div slot="title">
                <b>标题</b>
                <ui-btn size="xxs">查看</ui-btn>
            </div>
            <p>内容内容内容内容内容1...</p>
            <p>内容内容内容内容2...</p>
            <p>内容内容内容3...</p>
        </ui-popover>
    </div>
    :::

    :::vue
    @name:带操作按钮的弹出框
    ---
    #demo
    >desc
    弹出框常见的场景是显示一个确认操作。
    >tpl
    <div>
        <span id="demo4">鼠标悬浮显示弹出框</span>
        <ui-popover target="#demo4">
            <b slot="title">请确认</b>
            <div style="width:200px">
                <p style="margin-top:0;">确认需要删除此内容？</p>
                <ui-textright>
                    <ui-link size="xxs" color="minor">取消</ui-link>
                    <ui-btn size="xxs" color="danger">删除</ui-btn>
                </ui-textright>
            </div>
        </ui-popover>
    </div>
    :::

    [[[形态]]]

    #### 支持

    |类型|支持|默认|
    |-|-|-|
    |尺寸|不支持|-|
    |色彩|不支持|-|
    |状态|不支持|-|

    <a href="/guide/status.html">查看形态文档</a>

    [[[配置]]]

    :::vue
    @name:target
    ---
    #config
    >conf-desc
    触发提示的目标元素，必填项。此配置改变后，若弹出框处于显示状态，则会触发一次`hide`和`show`事件，以刷新弹出框的位置。
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
        <span id="demo5">鼠标悬浮显示弹出框</span>
        <ui-popover target="#demo5">
            <p>内容内容内容内容内容1...</p>
            <p>内容内容内容内容2...</p>
            <p>内容内容内容3...</p>
        </ui-popover>
    </div>
    :::

    :::vue
    @name:placement
    ---
    #config
    >conf-desc
    弹出框位置。
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
        <span id="demo6">上方弹出框</span>
        <ui-popover target="#demo6" placement="top">
            <p>内容内容内容内容内容1...</p>
            <p>内容内容内容内容2...</p>
            <p>内容内容内容3...</p>
        </ui-popover>

        <br>

        <span id="demo7">下方弹出框</span>
        <ui-popover target="#demo7" placement="bottom">
            <p>内容内容内容内容内容1...</p>
            <p>内容内容内容内容2...</p>
            <p>内容内容内容3...</p>
        </ui-popover>

        <br>

        <span id="demo8">左侧弹出框</span>
        <ui-popover target="#demo8" placement="left">
            <p>内容内容内容内容内容1...</p>
            <p>内容内容内容内容2...</p>
            <p>内容内容内容3...</p>
        </ui-popover>

        <br>

        <span id="demo9">右侧弹出框</span>
        <ui-popover target="#demo9" placement="right">
            <p>内容内容内容内容内容1...</p>
            <p>内容内容内容内容2...</p>
            <p>内容内容内容3...</p>
        </ui-popover>
    </div>
    :::

    :::vue
    @name:offset
    ---
    #config
    >conf-desc
    偏移量。
    >conf-accept
    上下偏移量(单位px/%) 左右偏移量(单位px/%)
    >conf-type
    String
    >conf-default
    `'0 0'`
    ---
    #demo
    >tpl
    <div>
        <span id="demo10">鼠标悬浮显示弹出框</span>
        <ui-popover target="#demo10" offset="10px -30px">
            <p>内容内容内容内容内容1...</p>
            <p>内容内容内容内容2...</p>
            <p>内容内容内容3...</p>
        </ui-popover>
    </div>
    :::

    :::vue
    @name:trigger
    ---
    #config
    >conf-desc
    触发方式(支持多触发方式，多个触发器之间用空格分开)。触发方式一旦改变，已有的触发状态都会被重置。
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
        <span id="demo11">点击显示弹出框</span>
        <ui-popover target="#demo11" trigger="click">
            <p>内容内容内容内容内容1...</p>
            <p>内容内容内容内容2...</p>
            <p>内容内容内容3...</p>
        </ui-popover>

        <br>

        <span id="demo12">鼠标悬浮或点击显示弹出框</span>
        <ui-popover target="#demo12" trigger="click hover">
            <p>内容内容内容内容内容1...</p>
            <p>内容内容内容内容2...</p>
            <p>内容内容内容3...</p>
        </ui-popover>
    </div>
    ---
    #demo
    >desc
    `trigger`也可以设置为`method`，这样只能通过组件方法来触发。
    >tpl
    <div>
        <span id="demo13">目标文字</span>
        <ui-popover target="#demo13" ref="demo13" trigger="method">
            <p>内容内容内容内容内容1...</p>
            <p>内容内容内容内容2...</p>
            <p>内容内容内容3...</p>
        </ui-popover>
        
        <br><br>

        <ui-link js="morning.findVM('demo13').show();">通过组件方法显示弹出框</ui-link><br>
        <ui-link js="morning.findVM('demo13').hide();">通过组件方法隐藏弹出框</ui-link>
    </div>
    :::

    :::vue
    @name:trigger-in-delay
    ---
    #config
    >conf-desc
    目标触发提示时进行延迟。<br>此延迟仅在`trigger`为`hover`时生效。<br>当页面中使用较多`ui-popover`时使用一定的延迟，可以减少误触的情况，提升页面体验。
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
        <span id="demo14">鼠标悬浮显示弹出框</span>
        <ui-popover target="#demo14" :trigger-in-delay="300">
            <p>内容内容内容内容内容1...</p>
            <p>内容内容内容内容2...</p>
            <p>内容内容内容3...</p>
        </ui-popover>
    </div>
    ---
    #demo
    >desc
    鼠标移入元素时立即触发提示。
    >tpl
    <div>
        <span id="demo15">鼠标悬浮显示弹出框</span>
        <ui-popover target="#demo15" :trigger-in-delay="0">
            <p>内容内容内容内容内容1...</p>
            <p>内容内容内容内容2...</p>
            <p>内容内容内容3...</p>
        </ui-popover>
    </div>
    :::

    :::vue
    @name:auto-reverse
    ---
    #config
    >conf-desc
    当弹出框超出窗口时，自动反转弹出框的方向，使其可以显示。
    >conf-accept
    `true`<br>`false`
    >conf-type
    Boolean
    >conf-default
    `true`
    ---
    #demo
    >desc
    滚动页面的位置，使得下面的demo靠近窗口底部，当关闭`auto-reverse`后，弹出框不会反转方向。
    >tpl
    <div>
        <span id="demo16">鼠标悬浮显示弹出框</span>
        <ui-popover target="#demo16" placement="bottom" :auto-reverse="false">
            <p>内容内容内容内容内容</p>
            <p>内容内容内容内容内容</p>
            <p>内容内容内容内容内容</p>
            <p>内容内容内容内容内容</p>
            <p>内容内容内容内容内容</p>
            <p>内容内容内容内容内容</p>
            <p>内容内容内容内容内容</p>
            <p>内容内容内容内容内容</p>
            <p>内容内容内容内容内容</p>
            <p>内容内容内容内容内容</p>
            <p>内容内容内容内容内容</p>
        </ui-popover>
    </div>
    ---
    #demo
    >desc
    开启`auto-reverse`后，弹出框会反转方向。
    >tpl
    <div>
        <span id="demo17">鼠标悬浮显示弹出框</span>
        <ui-popover target="#demo17" placement="bottom" :auto-reverse="true">
            <p>内容内容内容内容内容</p>
            <p>内容内容内容内容内容</p>
            <p>内容内容内容内容内容</p>
            <p>内容内容内容内容内容</p>
            <p>内容内容内容内容内容</p>
            <p>内容内容内容内容内容</p>
            <p>内容内容内容内容内容</p>
            <p>内容内容内容内容内容</p>
            <p>内容内容内容内容内容</p>
            <p>内容内容内容内容内容</p>
            <p>内容内容内容内容内容</p>
        </ui-popover>
    </div>
    :::

    [[[方法]]]

    :::vue
    @name:show()
    ---
    #method
    >method-desc
    显示弹出框。
    >method-return
    当前组件VM实例。
    ---
    #demo
    >tpl
    <div>
        <span id="demo18">鼠标悬浮显示弹出框</span>
        <ui-popover target="#demo18" ref="demo18">
            <p>内容内容内容内容内容1...</p>
            <p>内容内容内容内容2...</p>
            <p>内容内容内容3...</p>
        </ui-popover>
        
        <ui-link js="morning.findVM('demo18').show();" onmouseout="morning.findVM('demo18').hide();">显示弹出框</ui-link>
    </div>
    :::
    
    :::vue
    @name:hide()
    ---
    #method
    >method-desc
    隐藏弹出框。
    >method-return
    当前组件VM实例。
    ---
    #demo
    >tpl
    <div>
        <span id="demo19">鼠标悬浮显示弹出框</span>
        <ui-popover target="#demo19" ref="demo19">
            <p>内容内容内容内容内容1...</p>
            <p>内容内容内容内容2...</p>
            <p>内容内容内容3...</p>
        </ui-popover>

        <ui-link js="morning.findVM('demo19').hide();" onmouseenter="morning.findVM('demo19').show();">隐藏弹出框</ui-link>
    </div>
    :::
    
    :::vue
    @name:toggle()
    ---
    #method
    >method-desc
    切换弹出框显示状态。
    >method-return
    当前组件VM实例。
    ---
    #demo
    >tpl
    <div>
        <span id="demo20">鼠标悬浮显示弹出框</span>
        <ui-popover target="#demo20" ref="demo20">
            <p>内容内容内容内容内容1...</p>
            <p>内容内容内容内容2...</p>
            <p>内容内容内容3...</p>
        </ui-popover>
        
        <ui-link js="morning.findVM('demo20').toggle();">切换弹出框</ui-link>
    </div>
    :::
    
    :::vue
    @name:position()
    ---
    #method
    >method-desc
    根据目标元素重新定位弹出框的位置。
    >method-return
    当前组件VM实例。
    ---
    #demo
    >tpl
    <div>
        <span id="demo21" style="position: relative;">目标文字</span>
        <ui-popover target="#demo21" ref="demo21">
            <p>内容内容内容内容内容1...</p>
            <p>内容内容内容内容2...</p>
            <p>内容内容内容3...</p>
        </ui-popover>

        <br><br>
        
        <ui-link js="morning.findVM('demo21').show();document.querySelector('#demo21').style.left='100px';">显示弹出框，然后移动目标元素位置</ui-link><br>
        <ui-link js="morning.findVM('demo21').position();">重新定位弹出框</ui-link>
    </div>
    :::

    [[[事件]]]

    :::vue
    @name:emit
    ---
    #event
    >event-desc
    当弹出框切换显示状态时时触发。
    ---
    #demo
    >tpl
    <div>
        <span id="demo22">鼠标悬浮显示弹出框</span>
        <ui-popover target="#demo22" @emit="echo">
            <p>内容内容内容内容内容1...</p>
            <p>内容内容内容内容2...</p>
            <p>内容内容内容3...</p>
        </ui-popover>
    </div>
    >script
    {
        methods : {
            echo : function () {
                console.log('demo22.console1', 'emit event!');
            }
        }
    }
    :::

    :::vue
    @name:show
    ---
    #event
    >event-desc
    当弹出框显示时触发。
    ---
    #demo
    >tpl
    <div>
        <span id="demo23">鼠标悬浮显示弹出框</span>
        <ui-popover target="#demo23" @emit="echo">
            <p>内容内容内容内容内容1...</p>
            <p>内容内容内容内容2...</p>
            <p>内容内容内容3...</p>
        </ui-popover>
    </div>
    >script
    {
        methods : {
            echo : function () {
                console.log('demo23.console1', 'show event!');
            }
        }
    }
    :::

    :::vue
    @name:hide
    ---
    #event
    >event-desc
    当弹出框显示时触发。
    ---
    #demo
    >tpl
    <div>
        <span id="demo24">鼠标悬浮显示弹出框</span>
        <ui-popover target="#demo24" @emit="echo">
            <p>内容内容内容内容内容1...</p>
            <p>内容内容内容内容2...</p>
            <p>内容内容内容3...</p>
        </ui-popover>
    </div>
    >script
    {
        methods : {
            echo : function () {
                console.log('demo24.console1', 'hide event!');
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
        <span id="demoEventLifecycle">鼠标悬浮显示弹出框</span>
        <ui-popover
            target="#demoEventLifecycle"
            ref="demoEventLifecycle"
            v-show="show"
            @created="echo('created')"
            @mounted="echo('mounted')"
            @before-update="echo('before-update')"
            @updated="echo('updated')"
            @before-destroy="echo('before-destroy')"
            @destroyed="echo('destroyed')"
        >{*text*}</ui-popover>
        <br><br>
        <ui-link js="this.text='生命周期事件';">触发update</ui-link>
        <ui-link js="this.$refs['demoEventLifecycle'].$destroy();">触发destroy</ui-link>
    </div>
    >script
    {
        data : function () {
            return {
               text : '弹出框',
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

    <iframe src="/report/coverage/lib/components/popover/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>

    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                 from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'popover'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
