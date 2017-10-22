<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 模拟盒 `<ui-dialog>`
    
    <doc-component-status page="dialog"></doc-component-status>
    
    [[[基础]]]

    定义一个模拟盒，标准的模拟盒分为三部分：

    - 头部
    - 主体
    - 操作区(尾部)
    
    模拟盒支持两种不同的出现形式：

    - 上方出现：一般用在信息确认时，提供是或否的选择，较弱，尺寸一般较小。
    - 中间出现：一般用在填写内容或阅读内容时，较强，尺寸较大。
    - 直接出现：一般用在页面内容较多，对性能有要求的页面，较快(去除了动画带来的性能负担)。

    #### 使用

    :::democode/html
    <ui-dialog ref="demo1"></ui-dialog>
    <ui-link js="window.morning.findVM('demo1').toggle(true);">显示模拟盒</ui-link>
    :::

    #### 带头部的模拟盒

    通过`<header slot="header">`标签声明一个头部内容。

    :::democode/html
    <ui-dialog ref="demo2">
        <header slot="header">This is title</header>
    </ui-dialog>
    <ui-link js="window.morning.findVM('demo2').toggle(true);">显示模拟盒</ui-link>
    :::

    #### 带关闭的头部

    头部标题也可以在`<h1>`标签中。

    :::democode/html
    <ui-dialog ref="demo3">
        <header slot="header">
            <h1>This is title</h1>
            <ui-link dark-theme js="window.morning.findVM('demo3').toggle();"><i class="iconfont">&#xe62e;</i></ui-link>
        </header>
    </ui-dialog>
    <ui-link js="window.morning.findVM('demo3').toggle(true);">显示模拟盒</ui-link>
    :::

    #### 当头部无内容时自动隐藏

    :::democode/html
    <ui-dialog ref="demo4">
        <header slot="header"></header>
    </ui-dialog>
    <ui-link js="window.morning.findVM('demo4').toggle(true);">显示模拟盒</ui-link>
    :::

    #### 带尾部的模拟盒

    通过`<footer slot="footer">`标签声明一个尾部内容。

    :::democode/html
    <ui-dialog ref="demo5">
        <footer slot="footer">This is footer</footer>
    </ui-dialog>
    <ui-link js="window.morning.findVM('demo5').toggle(true);">显示模拟盒</ui-link>
    :::

    #### 带操作的尾部

    你可以在尾部的`<div>`中加入`ui-btn`和`ui-link`来实现可选操作。

    :::democode/html
    <ui-dialog ref="demo6">
        <footer slot="footer">
            <span>This is footer</span>
            <div>
                <ui-link class="margin" minor js="window.morning.findVM('demo6').toggle();">取消</ui-link>
                <ui-btn success>确认</ui-btn>
            </div>
        </footer>
    </ui-dialog>
    <ui-link js="window.morning.findVM('demo6').toggle(true);">显示模拟盒</ui-link>
    :::

    #### 包含内容的模拟盒

    在组件内添加除`<header slot="header">`和`<footer slot="footer">`以外的元素会加载到模拟盒的主体部分。

    :::democode/html
    <ui-dialog ref="demo7">
        This is body.
    </ui-dialog>
    <ui-link js="window.morning.findVM('demo7').toggle(true);">显示模拟盒</ui-link>
    :::

    #### 包含HTML内容的模拟盒

    :::democode/html
    <ui-dialog ref="demo8">
        <ui-grid class="fill">
            <div class="c-7">
                <ui-center class="fill"><p>LEFT</p></ui-center>
            </div>
            <div class="c-2">
                <ui-divider>OR</ui-divider>
            </div>
            <div class="c-7">
                <ui-center class="fill"><p>RIGHT</p></ui-center>
            </div>
        </ui-grid>
    </ui-dialog>
    <ui-link js="window.morning.findVM('demo8').toggle(true);">显示模拟盒</ui-link>
    :::


    #### 包含头部/主体/尾部的模拟盒

    下面是一个完整的模拟盒内容推荐布局。

    :::democode/html
    <ui-dialog ref="demo9" light-gray>
        <header slot="header">选择一张图片</header>
        <ui-grid class="fill">
            <div class="c-7">
                <ui-center class="fill"><ui-img class="rounded" src="https://d13yacurqjgara.cloudfront.net/users/1333/avatars/normal/48fc612216b4fd2112a6bcd7d0db6eba.jpeg"></ui-img></ui-center>
            </div>
            <div class="c-2">
                <ui-divider>OR</ui-divider>
            </div>
            <div class="c-7">
                <ui-center class="fill"><ui-img class="rounded" src="https://d13yacurqjgara.cloudfront.net/users/1333/avatars/normal/48fc612216b4fd2112a6bcd7d0db6eba.jpeg"></ui-img></ui-center>
            </div>
        </ui-grid>
        <footer slot="footer">
            <span>
                需要帮助? <ui-link info xxs >获取帮助</ui-link>
            </span>
            <div>
                <ui-link class="margin" minor action="emit:toggle">取消</ui-link>
                <ui-btn success>左边</ui-btn>
                <ui-btn success>右边</ui-btn>
            </div>
        </footer>
    </ui-dialog>
    <ui-link js="window.morning.findVM('demo9').toggle(true);">显示模拟盒</ui-link>
    :::

    #### 多层模拟盒

    模拟盒支持多层嵌套打开，组件会自动按照打开的顺序设置层级。(注意：使用时不用嵌套)

    :::democode/html
    <ui-dialog ref="demo10" black width="60%" height="60%">
        <header slot="header">第一级</header>
        <ui-link js="javascript:window.morning.findVM('demo11').toggle(true);">显示第二级模拟盒</ui-link>
    </ui-dialog>

    <ui-dialog ref="demo11" extra-light-black width="40%" height="40%">
        <header slot="header">第二级</header>
        <ui-link js="javascript:window.morning.findVM('demo12').toggle(true);">显示第三级模拟盒</ui-link>
    </ui-dialog>

    <ui-dialog ref="demo12" light-blue width="20%" height="20%">
        <header slot="header">第三级</header>
    </ui-dialog>

    <ui-link js="window.morning.findVM('demo10').toggle(true);">显示模拟盒</ui-link>
    :::

    [[[声明]]]

    #### 支持

    |类型|支持|默认|
    |-|-|-|
    |尺寸|不支持|-|
    |色彩|全部|`theme`|
    |状态|不支持|-|

    #### 色彩

    :::repeat/html
    color:theme
    color:feature
    color:black
    color:blue
    color:silver
    color:gray
    ---
    <ui-dialog ref="demo{$colorKey}" {$colorKey}>
        <header slot="header">This is title</header>
        <footer slot="footer">This is footer</footer>
    </ui-dialog>
    <ui-link js="window.morning.findVM('demo{$colorKey}').toggle(true);" {$colorKey}>{$colorName}模拟盒</ui-link>

    <br>
    :::

    [[[配置]]]

    |KEY|描述|接受值|值类型|默认值|
    |-|-|-|-|-|
    |width|模拟盒宽度|宽度数值（可以是`px`、`em`、`%`等任何css合法单位）|String|`'50%'`|
    |height|模拟盒高度|高度数值（可以是`px`、`em`、`%`等任何css合法单位）|String|`'50%'`|
    |auto-close|点击模拟盒以外的区域自动关闭模拟盒|`true`<br>`false`|Boolean|`true`|
    |show-type|模拟盒打开的方式|`top`:从上往下弹出<br>`center`:从中间弹出<br>`no`:无动画直接出现|String|`'top'`|

    #### width

    :::democode/html
    <ui-dialog ref="demo13" width="200px"></ui-dialog>
    <ui-link js="window.morning.findVM('demo13').toggle(true);">显示模拟盒</ui-link>
    :::

    :::democode/html
    <ui-dialog ref="demo14" width="80%"></ui-dialog>
    <ui-link js="window.morning.findVM('demo14').toggle(true);">显示模拟盒</ui-link>
    :::

    #### height

    :::democode/html
    <ui-dialog ref="demo15" height="50px"></ui-dialog>
    <ui-link js="window.morning.findVM('demo15').toggle(true);">显示模拟盒</ui-link>
    :::

    :::democode/html
    <ui-dialog ref="demo16" height="80%"></ui-dialog>
    <ui-link js="window.morning.findVM('demo16').toggle(true);">显示模拟盒</ui-link>
    :::

    #### auto-close

    设为`false`点击模拟盒以外的区域不会关闭模拟盒。

    :::democode/html
    <ui-dialog ref="demo17" :auto-close="false">
        <header slot="header">
            <h1>点击外部区域不会关闭，需要点击右侧关闭</h1>
            <ui-link dark-theme js="window.morning.findVM('demo17').toggle();"><i class="iconfont">&#xe62e;</i></ui-link>
        </header>
    </ui-dialog>
    <ui-link js="window.morning.findVM('demo17').toggle(true);">显示模拟盒</ui-link>
    :::

    #### show-type

    :::democode/html
    <!-- 从上往下弹出 -->
    <ui-dialog ref="demo18" show-type="top"></ui-dialog>
    <ui-link js="window.morning.findVM('demo18').toggle(true);">显示模拟盒</ui-link>
    :::

    :::democode/html
    <!-- 从中间弹出 -->
    <ui-dialog ref="demo19" show-type="center"></ui-dialog>
    <ui-link js="window.morning.findVM('demo19').toggle(true);">显示模拟盒</ui-link>
    :::

    :::democode/html
    <!-- 无动画直接出现 -->
    <ui-dialog ref="demo20" show-type="no"></ui-dialog>
    <ui-link js="window.morning.findVM('demo20').toggle(true);">显示模拟盒</ui-link>
    :::

    [[[方法]]]

    #### toggle([show])

    切换模拟盒显示状态。
    
    |KEY|可选|描述|接受值|值类型|默认值|
    |-|-|-|-|-|-|
    |show|YES|切换到显示或隐藏状态，不输入则切换到反向状态。|`undefined`<br>`true`<br>`false`|`Undefined`<br>`Boolean`|`undefined`|

    :::democode/html
    <ui-dialog ref="demo21">
        <ui-center class="fill">
            <ui-link js="window.morning.findVM('demo21').toggle(false);">隐藏模拟盒</ui-link> &nbsp;
            <ui-link js="window.morning.findVM('demo21').toggle();">切换到反向状态</ui-link>
        </ui-center>
    </ui-dialog>
    <ui-link js="window.morning.findVM('demo21').toggle(true);">显示模拟盒</ui-link>
    <ui-link js="window.morning.findVM('demo21').toggle();">切换到反向状态</ui-link>
    :::

    [[[事件]]]

    #### emit

    当模拟盒切换显示状态时触发。
    
    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
        methods : {
            echo : function () {
                console.log('demo22.console1', 'emit event!');
            }
        }
    });
    ---
    <div>
        <ui-dialog ref="demo22" @emit="echo">
            <ui-center class="fill">
                <ui-link js="window.morning.findVM('demo22').toggle();">隐藏模拟盒</ui-link> &nbsp;
            </ui-center>
        </ui-dialog>
        <ui-link js="window.morning.findVM('demo22').toggle();">显示模拟盒</ui-link>
    </div>
    :::

    #### show

    当模拟盒显示时触发。
    
    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
        methods : {
            echo : function () {
                console.log('demo23.console1', 'show event!');
            }
        }
    });
    ---
    <div>
        <ui-dialog ref="demo23" @show="echo">
            <ui-center class="fill">
                <ui-link js="window.morning.findVM('demo23').toggle();">隐藏模拟盒</ui-link> &nbsp;
            </ui-center>
        </ui-dialog>
        <ui-link js="window.morning.findVM('demo23').toggle();">显示模拟盒</ui-link>
    </div>
    :::

    #### hide

    当模拟盒隐藏时触发。
    
    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
        methods : {
            echo : function () {
                console.log('demo24.console1', 'hide event!');
            }
        }
    });
    ---
    <div>
        <ui-dialog ref="demo24" @hide="echo">
            <ui-center class="fill">
                <ui-link js="window.morning.findVM('demo24').toggle();">隐藏模拟盒</ui-link> &nbsp;
            </ui-center>
        </ui-dialog>
        <ui-link js="window.morning.findVM('demo24').toggle();">显示模拟盒</ui-link>
    </div>
    :::

    #### 生命周期事件
    
    :::vue/html
    window.demoEventLifecycle = new Vue({
        el : '{$el}',
        template : '{$template}',
        data : function () {
            return {
               text : '模拟盒',
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
        <ui-dialog
            ref="demoEventLifecycle"
            v-show="show"
            @created="echo('created')"
            @mounted="echo('mounted')"
            @beforeUpdate="echo('beforeUpdate')"
            @updated="echo('updated')"
            @beforeDestroy="echo('beforeDestroy')"
            @destroyed="echo('destroyed')"
        >
            <ui-center class="fill">
                {*text*}
                <ui-link js="window.morning.findVM('demoEventLifecycle').toggle();">隐藏模拟盒</ui-link> &nbsp;
            </ui-center>
        </ui-dialog>
        <ui-link js="window.morning.findVM('demoEventLifecycle').toggle();">显示模拟盒</ui-link>

        <br><br>
    
        <ui-link js="javascript:window.demoEventLifecycle.text='生命周期事件';">触发update</ui-link>
        <ui-link js="javascript:morning.findVM('demoEventLifecycle').$destroy();">触发destroy</ui-link>
    </div>
    :::

    [[[单元测试]]]

    <iframe src="/report/coverage/lib/components/dialog/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>
    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'dialog'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
