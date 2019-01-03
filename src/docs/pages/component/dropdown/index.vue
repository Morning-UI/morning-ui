<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 下拉菜单 `<ui-dropdown>`
    
    <doc-component-status page="dropdown"></doc-component-status>
    
    [[[开始]]]

    定义下拉菜单，这是一个内联块元素。

    `ui-dropdown`内包含一组`ui-btn`或`ui-btngroup`，可以标记两个特定的按钮:

    - `slot="showbtn"` : 标记默认显示的按钮
    - `emitbtn` : 标记触发按钮组的按钮。

    组件内支持一个向下箭头图标，可以通过`<i class="mo-icon mo-icon-dropdown"></i>`使用。

    #### 使用

    :::democode/html
    <ui-dropdown>
        <ui-btn slot="showbtn" emitbtn>更多 <i class="mo-icon mo-icon-dropdown"></i></ui-btn>
        <ui-btn color="white">收藏</ui-btn>
        <ui-btn color="white">修改</ui-btn>
        <ui-btn color="danger">删除</ui-btn>
    </ui-dropdown>
    :::

    #### 分别标记`showbtn`和`emitbtn`
    
    分开标记`showbtn`和`emitbtn`，再配合`ui-btngroup`可以实现非常棒的效果。

    :::democode/html
    <ui-dropdown>
        <ui-btngroup slot="showbtn">
            <ui-btn color="success">立即购买</ui-btn>
            <!-- 这里的mo-icon组件附带，可直接使用 -->
            <ui-btn color="minor" emitbtn><i class="mo-icon mo-icon-dropdown"></i></ui-btn>
        </ui-btngroup>
        <ui-btn color="info">加入购物车</ui-btn>
        <ui-btn color="white"><i class="mo-icon mo-icon-star-f"></i> 收藏</ui-btn>
        <ui-btn color="white"><i class="mo-icon mo-icon-share-f"></i> 分享</ui-btn>
    </ui-dropdown>
    :::

    #### 配合链接使用

    :::democode/html
    <ui-dropdown>
        <ui-link slot="showbtn" emitbtn>更多 <i class="mo-icon mo-icon-dropdown"></i></ui-link>
        <ui-btn color="white">收藏</ui-btn>
        <ui-btn color="white">修改</ui-btn>
        <ui-btn color="danger">删除</ui-btn>
    </ui-dropdown>
    :::

    #### 不同的尺寸及颜色
    
    通过设置按钮或链接本身的尺寸和颜色来修改。

    :::democode/html
    <ui-dropdown>
        <ui-btn slot="showbtn" emitbtn size="xs">更多 <i class="mo-icon mo-icon-dropdown"></i></ui-btn>
        <ui-btn color="white" size="xs">打开</ui-btn>
        <ui-btn color="white" size="xs">关闭</ui-btn>
        <ui-btn color="danger" size="xs">删除</ui-btn>
    </ui-dropdown>
    :::

    [[[形态]]]

    #### 支持

    |类型|支持|默认|
    |-|-|-|
    |尺寸|不支持|-|
    |色彩|不支持|-|
    |状态|不支持|-|

    <a href="/guide/status.html">查看形态文档</a>

    下拉菜单不支持形态，但可通过`ui-btn` / `ui-btngroup`自身的形态来控制。

    [[[配置]]]

    |KEY|描述|接受值|值类型|默认值|
    |-|-|-|-|-|
    |[auto-close](#auto-close)|点击下拉菜单中按钮后自动隐藏|`true`<br>`false`|Boolean|`true`|
    |[trigger](#trigger)|触发下拉菜单方式。触发方式一旦改变，已有的触发状态都会被重置。|`hover`：鼠标移入目标元素<br>`click`：鼠标点击目标元素<br>`focus`：目标元素处于焦点状态<br>`method`：通过组件方法触发|String|`click`|
    |[trigger-in-delay](#trigger-in-delay)|目标触发下拉菜单时进行延迟。<br>此延迟仅在`trigger`为`hover`时生效。<br>使用一定的延迟，可以减少误触的情况，提升页面体验。|延迟触发时间(ms)|Number|`200`|
    |[auto-reverse](#auto-reverse)|当下拉菜单超出窗口时，自动反转下拉菜单的方向，使其可以显示。|`true`<br>`false`|Boolean|`true`|

    #### auto-close

    点击菜单中按钮后不会自动隐藏，需要点击`更多`来隐藏。

    :::democode/html
    <ui-dropdown :auto-close="false">
        <ui-btn slot="showbtn" emitbtn>更多</ui-btn>
        <ui-btn color="white">收藏</ui-btn>
        <ui-btn color="white">修改</ui-btn>
        <ui-btn color="danger">删除</ui-btn>
    </ui-dropdown>
    :::

    #### trigger
    
    采用鼠标右键触发：

    :::democode/html
    <ui-dropdown trigger="rclick">
        <ui-link slot="showbtn" emitbtn>右键点击查看更多</ui-link>
        <ui-btn color="white">收藏</ui-btn>
        <ui-btn color="white">修改</ui-btn>
        <ui-btn color="danger">删除</ui-btn>
    </ui-dropdown>
    :::

    采用hover方式触发：

    :::democode/html
    <ui-dropdown trigger="hover">
        <ui-btn slot="showbtn" emitbtn>更多</ui-btn>
        <ui-btn color="white">收藏</ui-btn>
        <ui-btn color="white">修改</ui-btn>
        <ui-btn color="danger">删除</ui-btn>
    </ui-dropdown>
    :::

    `trigger`和`auto-close`配合使用：

    :::democode/html
    <ui-dropdown :auto-close="false" trigger="hover">
        <ui-btn slot="showbtn" emitbtn>更多</ui-btn>
        <ui-btn color="white">收藏</ui-btn>
        <ui-btn color="white">修改</ui-btn>
        <ui-btn color="danger">删除</ui-btn>
    </ui-dropdown>
    :::

    `trigger`也可以设置为`method`，这样只能通过组件方法来触发：

    :::democode/html
    <ui-dropdown ref="demo4" trigger="method">
        <ui-btn slot="showbtn" emitbtn>更多 <i class="mo-icon  mo-icon-dropdown"></i></ui-btn>
        <ui-btn color="white">收藏</ui-btn>
        <ui-btn color="white">修改</ui-btn>
        <ui-btn color="danger">删除</ui-btn>
    </ui-dropdown>
    
    <br><br>

    <ui-link js="morning.findVM('demo4').toggle(true);">通过组件方法显示</ui-link><br>
    <ui-link js="morning.findVM('demo4').toggle(false);">通过组件方法隐藏</ui-link>
    :::

    #### trigger-in-delay

    鼠标移入元素时延迟300ms触发提示：

    :::democode/html
    <ui-dropdown trigger="hover" :trigger-in-delay="300">
        <ui-btn slot="showbtn" emitbtn>更多</ui-btn>
        <ui-btn color="white">收藏</ui-btn>
        <ui-btn color="white">修改</ui-btn>
        <ui-btn color="danger">删除</ui-btn>
    </ui-dropdown>
    :::

    鼠标移入元素时立即触发提示：

    :::democode/html
    <ui-dropdown trigger="hover" :trigger-in-delay="0">
        <ui-btn slot="showbtn" emitbtn>更多</ui-btn>
        <ui-btn color="white">收藏</ui-btn>
        <ui-btn color="white">修改</ui-btn>
        <ui-btn color="danger">删除</ui-btn>
    </ui-dropdown>
    :::

    #### auto-reverse

    滚动页面的位置，使得下面的demo靠近窗口底部，当关闭`auto-reverse`后，下拉菜单不会反转方向：

    :::democode/html
    <ui-dropdown :auto-reverse="false">
        <ui-btn slot="showbtn" emitbtn>更多 <i class="mo-icon mo-icon-dropdown"></i></ui-btn>
        <ui-btn color="white">收藏</ui-btn>
        <ui-btn color="white">修改</ui-btn>
        <ui-btn color="danger">删除</ui-btn>
    </ui-dropdown>
    :::

    开启`auto-reverse`后，下拉菜单会反转方向：

    :::democode/html
    <ui-dropdown :auto-reverse="true">
        <ui-btn slot="showbtn" emitbtn>更多 <i class="mo-icon mo-icon-dropdown"></i></ui-btn>
        <ui-btn color="white">收藏</ui-btn>
        <ui-btn color="white">修改</ui-btn>
        <ui-btn color="danger">删除</ui-btn>
    </ui-dropdown>
    :::

    [[[方法]]]

    #### toggle([show])

    切换下拉按钮组是否显示。
    
    |KEY|可选|描述|接受值|值类型|默认值|
    |-|-|-|-|-|-|
    |show|YES|指定按钮组需要切换到隐藏或显示，若不设置则切换到相反的状态。|`undefined`<br>`true`<br>`false`|`Undefined`<br>`Boolean`|`undefined`|

    :::democode/html
    <ui-dropdown ref="demo1">
        <ui-btn slot="showbtn" emitbtn>更多 <i class="mo-icon  mo-icon-dropdown"></i></ui-btn>
        <ui-btn color="white">收藏</ui-btn>
        <ui-btn color="white">修改</ui-btn>
        <ui-btn color="danger">删除</ui-btn>
    </ui-dropdown>
    <br><br> 
    <ui-link js="morning.findVM('demo1').toggle();">切换相反状态</ui-link>
    <ui-link js="morning.findVM('demo1').toggle(true);">切换至显示</ui-link>
    <ui-link js="morning.findVM('demo1').toggle(false);">切换至隐藏</ui-link>
    :::

    [[[事件]]]

    #### emit

    当按钮组显示或隐藏时触发`emit`事件。

    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
        methods : {
            echo : function () {
                console.log('demo1.console1', 'emit event!');
            }
        }
    });
    ---
    <div>
        <ui-dropdown @emit="echo">
            <ui-btn slot="showbtn" emitbtn>emit事件 <i class="mo-icon mo-icon-dropdown"></i></ui-btn>
            <ui-btn color="white">收藏</ui-btn>
            <ui-btn color="white">修改</ui-btn>
            <ui-btn color="danger">删除</ui-btn>
        </ui-dropdown>
    </div>
    :::

    #### show

    当按钮组显示时触发`show`事件。

    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
        methods : {
            echo : function () {
                console.log('demo2.console1', 'show event!');
            }
        }
    });
    ---
    <div>
        <ui-dropdown @show="echo">
            <ui-btn slot="showbtn" emitbtn>show事件 <i class="mo-icon mo-icon-dropdown"></i></ui-btn>
            <ui-btn color="white">收藏</ui-btn>
            <ui-btn color="white">修改</ui-btn>
            <ui-btn color="danger">删除</ui-btn>
        </ui-dropdown>
    </div>
    :::

    #### hide

    当按钮组隐藏时触发`hide`事件。

    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
        methods : {
            echo : function () {
                console.log('demo3.console1', 'hide event!');
            }
        }
    });
    ---
    <div>
        <ui-dropdown @hide="echo">
            <ui-btn slot="showbtn" emitbtn>hide事件 <i class="mo-icon mo-icon-dropdown"></i></ui-btn>
            <ui-btn color="white">收藏</ui-btn>
            <ui-btn color="white">修改</ui-btn>
            <ui-btn color="danger">删除</ui-btn>
        </ui-dropdown>
    </div>
    :::

    #### 生命周期事件

    :::vue/html
    window.demoEventLifecycle = new Vue({
        el : '{$el}',
        template : '{$template}',
        data : function () {
            return {
               text : '下拉菜单',
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
        <ui-dropdown
            ref="demoEventLifecycle"
            v-show="show"
            @created="echo('created')"
            @mounted="echo('mounted')"
            @before-update="echo('before-update')"
            @updated="echo('updated')"
            @before-destroy="echo('before-destroy')"
            @destroyed="echo('destroyed')"
        >

            <ui-btn slot="showbtn" emitbtn>{*text*} <i class="mo-icon mo-icon-dropdown"></i></ui-btn>
            <ui-btn color="white">收藏</ui-btn>
            <ui-btn color="white">修改</ui-btn>
            <ui-btn color="danger">删除</ui-btn>

        </ui-dropdown>

        <br><br>
    
        <ui-link js="window.demoEventLifecycle.text='生命周期事件';">触发update</ui-link>
        <ui-link js="morning.findVM('demoEventLifecycle').$destroy();">触发destroy</ui-link>
    </div>
    :::

    [[[源码]]]

    <iframe src="/report/coverage/lib/components/dropdown/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>
    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'dropdown'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
