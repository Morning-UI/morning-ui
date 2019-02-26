<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 模拟盒 `<ui-dialog>`
    
    <doc-component-status page="dialog"></doc-component-status>
    
    [[[开始]]]

    定义一个模拟盒，标准的模拟盒分为三部分：

    - 头部
    - 主体
    - 操作区(尾部)
    
    模拟盒支持两种不同的出现形式：

    - 上方出现：一般用在信息确认时，提供是或否的选择，较弱，尺寸一般较小。
    - 中间出现：一般用在填写内容或阅读内容时，较强，尺寸较大。
    - 直接出现：一般用在页面内容较多，对性能有要求的页面，较快(去除了动画带来的性能负担)。

    :::vue
    @name:使用
    ---
    #demo
    >tpl
    <div>
        <ui-dialog ref="demo1"></ui-dialog>
        <ui-link js="window.morning.findVM('demo1').toggle(true);">显示模拟盒</ui-link>
    </div>
    :::

    :::vue
    @name:带头部的模拟盒
    ---
    #demo
    >desc
    通过`slot="header"`标签标记一个头部内容。
    >tpl
    <div>
        <ui-dialog ref="demo2">
            <div slot="header">This is title</div>
        </ui-dialog>
        <ui-link js="window.morning.findVM('demo2').toggle(true);">显示模拟盒</ui-link>
    </div>
    :::

    :::vue
    @name:带关闭的头部
    ---
    #demo
    >desc
    头部标题也可以在`<h1>`标签中。
    >tpl
    <div>
        <ui-dialog ref="demo3">
            <div slot="header">
                <h1>This is title</h1>
                <ui-link color="white" js="window.morning.findVM('demo3').toggle();"><i class="mo-icon mo-icon-close"></i></ui-link>
            </div>
        </ui-dialog>
        <ui-link js="window.morning.findVM('demo3').toggle(true);">显示模拟盒</ui-link>
    </div>
    :::

    :::vue
    @name:当头部无内容时自动隐藏
    ---
    #demo
    >tpl
    <div>
        <ui-dialog ref="demo4">
            <div slot="header"></div>
        </ui-dialog>
        <ui-link js="window.morning.findVM('demo4').toggle(true);">显示模拟盒</ui-link>
    </div>
    :::

    :::vue
    @name:带尾部的模拟盒
    ---
    #demo
    >desc
    通过`slot="footer"`标签标记一个尾部内容。
    >tpl
    <div>
        <ui-dialog ref="demo5">
            <div slot="footer">This is footer</div>
        </ui-dialog>
        <ui-link js="window.morning.findVM('demo5').toggle(true);">显示模拟盒</ui-link>
    </div>
    :::

    :::vue
    @name:带操作的尾部
    ---
    #demo
    >desc
    你可以在尾部的`.operate`元素中加入`ui-btn`和`ui-link`来实现可选操作。
    >tpl
    <div>
        <ui-dialog ref="demo6">
            <div slot="footer">
                <span>This is footer</span>
                <div class="operate">
                    <ui-link class="margin" color="minor" js="window.morning.findVM('demo6').toggle();">取消</ui-link>
                    <ui-btn color="success">确认</ui-btn>
                </div>
            </div>
        </ui-dialog>
        <ui-link js="window.morning.findVM('demo6').toggle(true);">显示模拟盒</ui-link>
    </div>
    :::

    :::vue
    @name:包含内容的模拟盒
    ---
    #demo
    >desc
    在组件内添加除`slot="header"`和`slot="footer"`以外的元素会加载到模拟盒的主体部分。
    >tpl
    <div>
        <ui-dialog ref="demo7">
            This is body.
        </ui-dialog>
        <ui-link js="window.morning.findVM('demo7').toggle(true);">显示模拟盒</ui-link>
    </div>
    :::
    
    :::vue
    @name:包含HTML内容的模拟盒
    ---
    #demo
    >tpl
    <div>
        <ui-dialog ref="demo8">
            <ui-grid class="fill">
                <div class="c-11">
                    <ui-center class="fill"><p>LEFT</p></ui-center>
                </div>
                <div class="c-2">
                    <ui-divider>OR</ui-divider>
                </div>
                <div class="c-11">
                    <ui-center class="fill"><p>RIGHT</p></ui-center>
                </div>
            </ui-grid>
        </ui-dialog>
        <ui-link js="window.morning.findVM('demo8').toggle(true);">显示模拟盒</ui-link>
    </div>
    :::

    :::vue
    @name:包含头部/主体/尾部的模拟盒
    ---
    #demo
    >desc
    下面是一个完整的模拟盒内容推荐布局。
    >tpl
    <div>
        <ui-dialog ref="demo9" color="light-gray">
            <div slot="header">选择一张图片</div>
            <ui-grid class="fill">
                <div class="c-11">
                    <ui-center class="fill"><ui-img class="round" src="http://morning-ui-image.test.upcdn.net/48fc612216b4fd2112a6bcd7d0db6eba.jpeg"></ui-img></ui-center>
                </div>
                <div class="c-2">
                    <ui-divider>OR</ui-divider>
                </div>
                <div class="c-11">
                    <ui-center class="fill"><ui-img class="round" src="http://morning-ui-image.test.upcdn.net/48fc612216b4fd2112a6bcd7d0db6eba.jpeg"></ui-img></ui-center>
                </div>
            </ui-grid>
            <div slot="footer">
                <span>
                    需要帮助? <ui-link color="info" size="xxs">获取帮助</ui-link>
                </span>
                <div class="operate">
                    <ui-link class="margin" color="minor" js="window.morning.findVM('demo9').toggle(false);">取消</ui-link>
                    <ui-btn color="success">左边</ui-btn>
                    <ui-btn color="success">右边</ui-btn>
                </div>
            </div>
        </ui-dialog>
        <ui-link js="window.morning.findVM('demo9').toggle(true);">显示模拟盒</ui-link>
    </div>
    :::
    
    :::vue
    @name:多层模拟盒
    ---
    #demo
    >desc
    模拟盒支持多层嵌套打开，组件会自动按照打开的顺序设置层级。(注意：使用时不用嵌套)
    >tpl
    <div>
        <ui-dialog ref="demo10" color="black" width="60%" height="60%">
            <div slot="header">第一级</div>
            <ui-link js="window.morning.findVM('demo11').toggle(true);">显示第二级模拟盒</ui-link>
        </ui-dialog>

        <ui-dialog ref="demo11" color="extra-light-black" width="40%" height="40%">
            <div slot="header">第二级</div>
            <ui-link js="window.morning.findVM('demo12').toggle(true);">显示第三级模拟盒</ui-link>
        </ui-dialog>

        <ui-dialog ref="demo12" color="light-blue" width="20%" height="20%">
            <div slot="header">第三级</div>
        </ui-dialog>

        <ui-link js="window.morning.findVM('demo10').toggle(true);">显示模拟盒</ui-link>
    </div>
    :::

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
    <ui-dialog ref="demo{$colorKey}" color="{$colorKey}">
        <div slot="header">This is title</div>
        <div slot="footer">This is footer</div>
    </ui-dialog>
    <ui-link js="window.morning.findVM('demo{$colorKey}').toggle(true);" color="{$colorKey}">{$colorName}模拟盒</ui-link>

    <br>
    :::

    [[[配置]]]

    :::vue
    @name:width
    ---
    #config
    >conf-desc
    模拟盒宽度。
    >conf-accept
    宽度数值（可以是`px`、`em`、`%`等任何css合法单位）
    >conf-type
    String
    >conf-default
    `'50%'`
    ---
    #demo
    >tpl
    <div>
        <ui-dialog ref="demo13" width="200px"></ui-dialog>
        <ui-link js="window.morning.findVM('demo13').toggle(true);">显示模拟盒</ui-link>
    </div>
    ---
    #demo
    >tpl
    <div>
        <ui-dialog ref="demo14" width="80%"></ui-dialog>
        <ui-link js="window.morning.findVM('demo14').toggle(true);">显示模拟盒</ui-link>
    </div>
    :::

    :::vue
    @name:height
    ---
    #config
    >conf-desc
    模拟盒高度。
    >conf-accept
    高度数值（可以是`px`、`em`、`%`等任何css合法单位）
    >conf-type
    String
    >conf-default
    `'50%'`
    ---
    #demo
    >tpl
    <div>
        <ui-dialog ref="demo15" height="50px"></ui-dialog>
        <ui-link js="window.morning.findVM('demo15').toggle(true);">显示模拟盒</ui-link>
    </div>
    ---
    #demo
    >tpl
    <div>
        <ui-dialog ref="demo16" height="80%"></ui-dialog>
        <ui-link js="window.morning.findVM('demo16').toggle(true);">显示模拟盒</ui-link>
    </div>
    :::

    :::vue
    @name:auto-close
    ---
    #config
    >conf-desc
    点击模拟盒以外的区域自动关闭模拟盒。
    >conf-accept
    `true`<br>`false`
    >conf-type
    Boolean
    >conf-default
    `true`
    ---
    #demo
    >desc
    设为`false`点击模拟盒以外的区域不会关闭模拟盒。
    >tpl
    <div>
        <ui-dialog ref="demo17" :auto-close="false">
            <div slot="header">
                <h1>点击外部区域不会关闭，需要点击右侧关闭</h1>
                <ui-link color="white" js="window.morning.findVM('demo17').toggle();"><i class="mo-icon mo-icon-close"></i></ui-link>
            </div>
        </ui-dialog>
        <ui-link js="window.morning.findVM('demo17').toggle(true);">显示模拟盒</ui-link>
    </div>
    :::

    :::vue
    @name:show-type
    ---
    #config
    >conf-desc
    模拟盒打开的方式(使用`no`可以提升性能)。
    >conf-accept
    `top`:从上往下弹出<br>`center`:从中间弹出<br>`no`:无动画直接出现
    >conf-type
    String
    >conf-default
    `'top'`
    ---
    #demo
    >desc
    从上往下弹出。
    >tpl
    <div>
        <ui-dialog ref="demo18" show-type="top"></ui-dialog>
        <ui-link js="window.morning.findVM('demo18').toggle(true);">显示模拟盒</ui-link>
    </div>
    ---
    #demo
    >desc
    从中间弹出。
    >tpl
    <div>
        <ui-dialog ref="demo19" show-type="center"></ui-dialog>
        <ui-link js="window.morning.findVM('demo19').toggle(true);">显示模拟盒</ui-link>
    </div>
    ---
    #demo
    >desc
    无动画直接出现。
    >tpl
    <div>
        <ui-dialog ref="demo20" show-type="no"></ui-dialog>
        <ui-link js="window.morning.findVM('demo20').toggle(true);">显示模拟盒</ui-link>
    </div>
    :::

    :::vue
    @name:show-mask
    ---
    #config
    >conf-desc
    模拟盒打开后显示背景遮罩。
    >conf-accept
    `true`<br>`false`
    >conf-type
    Boolean
    >conf-default
    `true`
    ---
    #demo
    >desc
    不显示背景遮罩。
    >tpl
    <div>
        <ui-dialog ref="demo25" :show-mask="false">
            <div style="background-color: #EAEAEA;width: 100%;height: 100%"></div>
        </ui-dialog>
        <ui-link js="window.morning.findVM('demo25').toggle(true);">显示模拟盒</ui-link>
    </div>
    :::

    [[[方法]]]

    :::vue
    @name:toggle([show])
    ---
    #method
    >method-desc
    切换模拟盒显示状态。
    >method-args
    |show|YES|切换到显示或隐藏状态，不输入则切换到反向状态。|`undefined`<br>`true`<br>`false`|`Undefined`<br>`Boolean`|`undefined`|
    >method-return
    当前组件VM实例。
    ---
    #demo
    >tpl
    <div>
        <ui-dialog ref="demo21">
            <ui-center class="fill">
                <ui-link js="window.morning.findVM('demo21').toggle(false);">隐藏模拟盒</ui-link> &nbsp;
                <ui-link js="window.morning.findVM('demo21').toggle();">切换到反向状态</ui-link>
            </ui-center>
        </ui-dialog>
        <ui-link js="window.morning.findVM('demo21').toggle(true);">显示模拟盒</ui-link>
        <ui-link js="window.morning.findVM('demo21').toggle();">切换到反向状态</ui-link>
    </div>
    :::

    [[[事件]]]

    :::vue
    @name:emit
    ---
    #event
    >event-desc
    当模拟盒切换显示状态时触发。
    ---
    #demo
    >tpl
    <div>
        <ui-dialog ref="demo22" @emit="echo">
            <ui-center class="fill">
                <ui-link js="window.morning.findVM('demo22').toggle();">隐藏模拟盒</ui-link> &nbsp;
            </ui-center>
        </ui-dialog>
        <ui-link js="window.morning.findVM('demo22').toggle();">显示模拟盒</ui-link>
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
    当模拟盒显示时触发。
    ---
    #demo
    >tpl
    <div>
        <ui-dialog ref="demo23" @show="echo">
            <ui-center class="fill">
                <ui-link js="window.morning.findVM('demo23').toggle();">隐藏模拟盒</ui-link> &nbsp;
            </ui-center>
        </ui-dialog>
        <ui-link js="window.morning.findVM('demo23').toggle();">显示模拟盒</ui-link>
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
    当模拟盒隐藏时触发。
    ---
    #demo
    >tpl
    <div>
        <ui-dialog ref="demo24" @hide="echo">
            <ui-center class="fill">
                <ui-link js="window.morning.findVM('demo24').toggle();">隐藏模拟盒</ui-link> &nbsp;
            </ui-center>
        </ui-dialog>
        <ui-link js="window.morning.findVM('demo24').toggle();">显示模拟盒</ui-link>
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
        <ui-dialog
            ref="demoEventLifecycle"
            v-show="show"
            :total="10"
            @created="echo('created')"
            @mounted="echo('mounted')"
            @before-update="echo('before-update')"
            @updated="echo('updated')"
            @before-destroy="echo('before-destroy')"
            @destroyed="echo('destroyed')"
        >
            <ui-center class="fill">
                {*text*}
                <ui-link js="window.morning.findVM('demoEventLifecycle').toggle();">隐藏模拟盒</ui-link> &nbsp;
            </ui-center>
        </ui-dialog>
        <ui-link js="window.morning.findVM('demoEventLifecycle').toggle();">显示模拟盒</ui-link>
        <br><br>
        <ui-link js="this.text='生命周期事件';">触发update</ui-link>
        <ui-link js="this.$refs['demoEventLifecycle'].$destroy();">触发destroy</ui-link>
    </div>
    >script
    {
        data : function () {
            return {
               text : '模拟盒',
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
