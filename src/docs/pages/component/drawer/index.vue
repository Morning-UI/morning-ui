<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 抽屉 `<ui-drawer>`
    
    <doc-component-status page="drawer"></doc-component-status>
    
    [[[开始]]]

    定义一个抽屉，此组件是从父元素边缘滑出的浮层面板。

    一般抽屉分为三部分：

    - 头部
    - 主体
    - 操作区(尾部)
    
    抽屉支持两种不同的出现形式：

    - 滑动出现：从父元素边缘滑出，交互效果较好。
    - 直接出现：一般用在页面内容较多，对性能有要求的页面，较快(去除了动画带来的性能负担)。

    当你需要展现的内容较少时，可以使用[模拟盒](/component/dialog.html)组件。

    :::vue
    @name:使用
    ---
    #demo
    >tpl
    <div>
        <ui-drawer ref="demo1"></ui-drawer>
        <ui-link js="window.morning.findVM('demo1').toggle(true);">显示抽屉</ui-link>
    </div>
    :::

    :::vue
    @name:带头部的抽屉
    ---
    #demo
    >desc
    通过`slot="header"`标签标记一个头部内容。
    >tpl
    <div>
        <ui-drawer ref="demo2">
            <div slot="header">This is title</div>
        </ui-drawer>
        <ui-link js="window.morning.findVM('demo2').toggle(true);">显示抽屉</ui-link>
    </div>
    :::

    :::vue
    @name:自定义头部
    ---
    #demo
    >desc
    组件自带的头部的内容比较固定，只能包含标题和关闭按钮等一些简单元素，高度也是固定的。在个性化的场景，可以不使用组件自带的头部。
    >tpl
    <div>
        <ui-drawer ref="demo3">
            <div style="
                width:100%;
                background:#D22343;
                color:#fff;
                font-size:36px;
                text-align:center;
                padding: 1em 0;
            ">Custom title</div>
        </ui-drawer>
        <ui-link js="window.morning.findVM('demo3').toggle(true);">显示抽屉</ui-link>
    </div>
    :::

    :::vue
    @name:带关闭的头部
    ---
    #demo
    >desc
    头部标题也可以在`<h1>`标签中，通过`<ui-link>`来增加关闭按钮。
    >tpl
    <div>
        <ui-drawer ref="demo4">
            <div slot="header">
                <h1>This is title</h1>
                <ui-link color="silver" js="window.morning.findVM('demo4').toggle();"><i class="mo-icon mo-icon-close"></i></ui-link>
            </div>
        </ui-drawer>
        <ui-link js="window.morning.findVM('demo4').toggle(true);">显示抽屉</ui-link>
    </div>
    :::

    :::vue
    @name:当头尾部无内容时自动隐藏
    ---
    #demo
    >tpl
    <div>
        <ui-drawer ref="demo5">
            <div slot="header"></div>
            <div slot="footer"></div>
        </ui-drawer>
        <ui-link js="window.morning.findVM('demo5').toggle(true);">显示抽屉</ui-link>
    </div>
    :::

    :::vue
    @name:带尾部的抽屉
    ---
    #demo
    >desc
    通过`slot="footer"`标签标记一个尾部内容。
    >tpl
    <div>
        <ui-drawer ref="demo6">
            <div slot="footer">This is footer</div>
        </ui-drawer>
        <ui-link js="window.morning.findVM('demo6').toggle(true);">显示抽屉</ui-link>
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
        <ui-drawer ref="demo7">
            <div slot="footer">
                <span>This is footer</span>
                <div class="operate">
                    <ui-link class="margin" color="minor" js="window.morning.findVM('demo7').toggle();">取消</ui-link>
                    <ui-btn color="success">确认</ui-btn>
                </div>
            </div>
        </ui-drawer>
        <ui-link js="window.morning.findVM('demo7').toggle(true);">显示抽屉</ui-link>
    </div>
    :::

    :::vue
    @name:包含内容的抽屉
    ---
    #demo
    >desc
    在组件内添加除`slot="header"`和`slot="footer"`以外的元素会加载到抽屉的主体部分。
    >tpl
    <div>
        <ui-drawer ref="demo8">
            This is body.
        </ui-drawer>
        <ui-link js="window.morning.findVM('demo8').toggle(true);">显示抽屉</ui-link>
    </div>
    :::
    
    :::vue
    @name:包含HTML内容的抽屉
    ---
    #demo
    >desc
    信息展示型的HTML内容。
    >tpl
    <div>
        <ui-drawer ref="demo9" width="400px">
            <ui-box class="margin">
                <ui-header size="xs" color="extra-light-black" class="underline">
                    个人资料
                </ui-header>
                <ui-dl class="horizontal" style="margin-top:1.5em;">
                    <dt>用户名</dt>
                    <dd>EarlyHe</dd>
                    <dt>出生日期</dt>
                    <dd>6月13日</dd>
                    <dt>性别</dt>
                    <dd>男</dd>
                    <dt>国家</dt>
                    <dd>中国</dd>
                    <dt>城市</dt>
                    <dd>杭州</dd>
                </ui-dl>
            </ui-box>
            <ui-box class="margin">
                <ui-header size="xs" color="extra-light-black" class="underline">
                    支付信息
                </ui-header>
                <ui-dl class="horizontal" style="margin-top:1.5em;">
                    <dt>付款方式</dt>
                    <dd>支付宝</dd>
                    <dt>账户</dt>
                    <dd>19191919</dd>
                    <dt>扣款方式</dt>
                    <dd>按月支持</dd>
                    <dt>更多</dt>
                    <dd>
                        <ui-link>查看账单</ui-link> / <ui-link color="minor">修改支付方式</ui-link>
                    </dd>
                </ui-dl>
            </ui-box>
        </ui-drawer>
        <ui-link js="window.morning.findVM('demo9').toggle(true);">显示抽屉</ui-link>
    </div>
    ---
    #demo
    >desc
    表单填写型的HTML内容。
    >tpl
    <div>
        <ui-drawer ref="demo10" width="560px">
            <div slot="header">填写个人资料</div>
            <ui-box class="margin">
                <ui-formgroup class="inline">
                    <header>
                        <h5>基本信息</h5>
                        <p>请填写一些基础资料</p>
                    </header>
                    <div class="row">
                        <div class="item" style="width:50%">
                            <h5 class="title">姓氏</h5>
                            <div class="content">
                                <div class="form">
                                    <ui-textinput></ui-textinput>
                                </div>
                            </div>
                        </div>
                        
                        <div class="item">
                            <h5 class="title">名字</h5>
                            <div class="content">
                                <div class="form">
                                    <ui-textinput></ui-textinput>
                                </div>
                            </div>
                        </div>
            
                        <div class="item">
                            <h5 class="title">昵称</h5>
                            <div class="content">
                                <div class="form">
                                    <ui-textinput></ui-textinput>
                                </div>
                                <p>其他用户将看到你的昵称.</p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="item">
                            <h5 class="title">简介</h5>
                            <div class="content">
                                <div class="form">
                                    <ui-textarea></ui-textarea>
                                </div>
                                <p>详细的介绍你自己.</p>
                            </div>
                        </div>
                    </div>
                </ui-formgroup>

                <ui-formgroup class="inline">
                    <header>
                        <h5>付款信息</h5>
                        <p>用于支付费用的账户信息</p>
                    </header>
                    <div class="row">
                      
                        <div class="item">
                            <h5 class="title">卡号</h5>
                            <div class="content">
                                <div class="form">
                                    <ui-textinput></ui-textinput>
                                </div>
                            </div>
                        </div>
            
                        <div class="item">
                            <h5 class="title">密码</h5>
                            <div class="content">
                                <div class="form">
                                    <ui-textinput hide-value></ui-textinput>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="item">
                            <h5 class="title">支付计划</h5>
                            <div class="content">
                                <div class="form">
                                    <ui-select
                                        :list="{
                                            day : '按日计费',
                                            month : '按月计费',
                                            year : '按年计费'
                                        }"
                                    >
                                    </ui-select>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <h5 class="title">自动扣费</h5>
                            <div class="content">
                                <div class="form">
                                    <ui-radio
                                        :list="{
                                            0 : '关闭',
                                            1 : '启用'
                                        }"
                                    >
                                    </ui-radio>
                                </div>
                            </div>
                        </div>
                    </div>
                </ui-formgroup>
            </ui-box>
            <div slot="footer">
                <div class="operate">
                    <ui-link class="margin" color="minor" js="window.morning.findVM('demo10').toggle();">取消</ui-link>
                    <ui-btn color="success">保存</ui-btn>
                </div>
            </div>
        </ui-drawer>
        <ui-link js="window.morning.findVM('demo10').toggle(true);">显示抽屉</ui-link>
    </div>
    :::
    
    :::vue
    @name:多层抽屉
    ---
    #demo
    >desc
    抽屉支持多层嵌套打开，组件会自动按照打开的顺序设置层级。(注意：使用时必须嵌套且所有抽屉的`position`一致，才会出现多层级的效果)
    >tpl
    <div>
        <ui-drawer ref="demo11">
            <div slot="header">第一级</div>
            <ui-link js="window.morning.findVM('demo12').toggle(true);">显示第二级抽屉</ui-link>

            <ui-drawer ref="demo12">
                <div slot="header">第二级</div>
                <ui-link js="window.morning.findVM('demo13').toggle(true);">显示第三级抽屉</ui-link>

                <ui-drawer ref="demo13">
                    <div slot="header">第三级</div>
                </ui-drawer>
            </ui-drawer>
        </ui-drawer>

        <ui-link js="window.morning.findVM('demo11').toggle(true);">显示抽屉</ui-link>
    </div>
    ---
    #demo
    >desc
    若嵌套的抽屉`position`不一致，则仅同样`position`的抽屉会出现多层级交互效果。
    >tpl
    <div>
        <ui-drawer ref="demo26">
            <div slot="header">第一级</div>
            <ui-link js="window.morning.findVM('demo27').toggle(true);">显示第二级抽屉</ui-link>

            <ui-drawer ref="demo27" position="left">
                <div slot="header">第二级</div>
                <ui-link js="window.morning.findVM('demo28').toggle(true);">显示第三级抽屉</ui-link>

                <ui-drawer ref="demo28" position="left">
                    <div slot="header">第三级</div>
                </ui-drawer>
            </ui-drawer>
        </ui-drawer>

        <ui-link js="window.morning.findVM('demo26').toggle(true);">显示抽屉</ui-link>
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
    @name:width
    ---
    #config
    >conf-desc
    抽屉的宽度，仅在`position`配置为`left`或`right`时有效。
    >conf-accept
    宽度数值（可以是`px`、`em`、`%`等任何css合法单位）
    >conf-type
    String
    >conf-default
    `'240px'`
    ---
    #demo
    >tpl
    <div>
        <ui-drawer ref="demo14" width="400px"></ui-drawer>
        <ui-link js="window.morning.findVM('demo14').toggle(true);">显示抽屉</ui-link>
    </div>
    ---
    #demo
    >tpl
    <div>
        <ui-drawer ref="demo15" width="50%"></ui-drawer>
        <ui-link js="window.morning.findVM('demo15').toggle(true);">显示抽屉</ui-link>
    </div>
    :::

    :::vue
    @name:height
    ---
    #config
    >conf-desc
    抽屉的高度，仅在`position`配置为`top`或`bottom`时有效。
    >conf-accept
    高度数值（可以是`px`、`em`、`%`等任何css合法单位）
    >conf-type
    String
    >conf-default
    `'200px'`
    ---
    #demo
    >tpl
    <div>
        <ui-drawer ref="demo16" position="top" height="50px"></ui-drawer>
        <ui-link js="window.morning.findVM('demo16').toggle(true);">显示抽屉</ui-link>
    </div>
    ---
    #demo
    >tpl
    <div>
        <ui-drawer ref="demo17" position="top" height="10%"></ui-drawer>
        <ui-link js="window.morning.findVM('demo17').toggle(true);">显示抽屉</ui-link>
    </div>
    :::

    :::vue
    @name:auto-close
    ---
    #config
    >conf-desc
    点击抽屉以外的区域自动关闭抽屉。
    >conf-accept
    `true`<br>`false`
    >conf-type
    Boolean
    >conf-default
    `true`
    ---
    #demo
    >desc
    设为`false`点击抽屉以外的区域不会关闭抽屉。
    >tpl
    <div>
        <ui-drawer ref="demo18" :auto-close="false" width="400px">
            <div slot="header">
                <h1>点击遮照区域不会关闭，需点右侧关闭</h1>
                <ui-link color="silver" js="window.morning.findVM('demo18').toggle();"><i class="mo-icon mo-icon-close"></i></ui-link>
            </div>
        </ui-drawer>
        <ui-link js="window.morning.findVM('demo18').toggle(true);">显示抽屉</ui-link>
    </div>
    :::

    :::vue
    @name:position
    ---
    #config
    >conf-desc
    抽屉出现的位置。
    >conf-accept
    `'top'`：上方<br>`'left'`：左侧<br>`'right'`：右侧<br>`'bottom'`：下方
    >conf-type
    String
    >conf-default
    `'top'`
    ---
    #demo
    >desc
    出现在上方。
    >tpl
    <div>
        <ui-drawer ref="demo19" position="top"></ui-drawer>
        <ui-link js="window.morning.findVM('demo19').toggle(true);">显示抽屉</ui-link>
    </div>
    ---
    #demo
    >desc
    出现在下方。
    >tpl
    <div>
        <ui-drawer ref="demo20" position="bottom"></ui-drawer>
        <ui-link js="window.morning.findVM('demo20').toggle(true);">显示抽屉</ui-link>
    </div>
    ---
    #demo
    >desc
    出现在左侧。
    >tpl
    <div>
        <ui-drawer ref="demo21" position="left"></ui-drawer>
        <ui-link js="window.morning.findVM('demo21').toggle(true);">显示抽屉</ui-link>
    </div>
    ---
    #demo
    >desc
    出现在右侧。
    >tpl
    <div>
        <ui-drawer ref="demo22" position="right"></ui-drawer>
        <ui-link js="window.morning.findVM('demo22').toggle(true);">显示抽屉</ui-link>
    </div>
    :::

    :::vue
    @name:show-type
    ---
    #config
    >conf-desc
    抽屉打开的效果(使用`no`可以提升性能)。
    >conf-accept
    `slideout`:滑出<br>`no`:无动画直接出现
    >conf-type
    String
    >conf-default
    `'slideout'`
    ---
    #demo
    >desc
    无动画直接出现的抽屉。
    >tpl
    <div>
        <ui-drawer ref="demo24" show-type="no"></ui-drawer>
        <ui-link js="window.morning.findVM('demo24').toggle(true);">显示抽屉</ui-link>
    </div>
    :::

    :::vue
    @name:show-mask
    ---
    #config
    >conf-desc
    抽屉打开后显示背景遮罩。
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
        <ui-drawer ref="demo23" :show-mask="false"></ui-drawer>
        <ui-link js="window.morning.findVM('demo23').toggle(true);">显示抽屉</ui-link>
    </div>
    :::

    [[[方法]]]

    :::vue
    @name:show()
    ---
    #method
    >method-desc
    显示抽屉。
    >method-return
    当前组件VM实例。
    ---
    #demo
    >tpl
    <div>
        <ui-drawer ref="demo34">
            <ui-center class="fill">
                <ui-link js="window.morning.findVM('demo34').hide();">隐藏抽屉</ui-link> &nbsp;
            </ui-center>
        </ui-drawer>
        <ui-link js="window.morning.findVM('demo34').show();">显示抽屉</ui-link>
    </div>
    :::

    :::vue
    @name:hide()
    ---
    #method
    >method-desc
    隐藏抽屉。
    >method-return
    当前组件VM实例。
    ---
    #demo
    >tpl
    <div>
        <ui-drawer ref="demo35">
            <ui-center class="fill">
                <ui-link js="window.morning.findVM('demo35').hide();">隐藏抽屉</ui-link> &nbsp;
            </ui-center>
        </ui-drawer>
        <ui-link js="window.morning.findVM('demo35').show();">显示抽屉</ui-link>
    </div>
    :::

    :::vue
    @name:toggle([show])
    ---
    #method
    >method-desc
    切换抽屉的显示状态。
    >method-args
    |show|YES|切换到显示或隐藏状态，不输入则切换到反向状态。|`undefined`<br>`true`<br>`false`|`Undefined`<br>`Boolean`|`undefined`|
    >method-return
    当前组件VM实例。
    ---
    #demo
    >tpl
    <div>
        <ui-drawer ref="demo30">
            <ui-center class="fill">
                <ui-link js="window.morning.findVM('demo30').toggle(false);">隐藏抽屉</ui-link> &nbsp;
                <ui-link js="window.morning.findVM('demo30').toggle();">切换到反向状态</ui-link>
            </ui-center>
        </ui-drawer>
        <ui-link js="window.morning.findVM('demo30').toggle(true);">显示抽屉</ui-link>
        <ui-link js="window.morning.findVM('demo30').toggle();">切换到反向状态</ui-link>
    </div>
    :::

    [[[事件]]]

    :::vue
    @name:emit
    ---
    #event
    >event-desc
    当抽屉切换显示状态时触发。
    ---
    #demo
    >tpl
    <div>
        <ui-drawer ref="demo31" @emit="echo">
            <ui-center class="fill">
                <ui-link js="window.morning.findVM('demo31').toggle();">隐藏抽屉</ui-link> &nbsp;
            </ui-center>
        </ui-drawer>
        <ui-link js="window.morning.findVM('demo31').toggle();">显示抽屉</ui-link>
    </div>
    >script
    {
        methods : {
            echo : function () {
                console.log('demo31.console1', 'emit event!');
            }
        }
    }
    :::

    :::vue
    @name:show
    ---
    #event
    >event-desc
    当抽屉显示时触发。
    ---
    #demo
    >tpl
    <div>
        <ui-drawer ref="demo32" @show="echo">
            <ui-center class="fill">
                <ui-link js="window.morning.findVM('demo32').toggle();">隐藏抽屉</ui-link> &nbsp;
            </ui-center>
        </ui-drawer>
        <ui-link js="window.morning.findVM('demo32').toggle();">显示抽屉</ui-link>
    </div>
    >script
    {
        methods : {
            echo : function () {
                console.log('demo32.console1', 'show event!');
            }
        }
    }
    :::

    :::vue
    @name:hide
    ---
    #event
    >event-desc
    当抽屉隐藏时触发。
    ---
    #demo
    >tpl
    <div>
        <ui-drawer ref="demo33" @hide="echo">
            <ui-center class="fill">
                <ui-link js="window.morning.findVM('demo33').toggle();">隐藏抽屉</ui-link> &nbsp;
            </ui-center>
        </ui-drawer>
        <ui-link js="window.morning.findVM('demo33').toggle();">显示抽屉</ui-link>
    </div>
    >script
    {
        methods : {
            echo : function () {
                console.log('demo33.console1', 'hide event!');
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
        <ui-drawer
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
                <ui-link js="window.morning.findVM('demoEventLifecycle').toggle();">隐藏抽屉</ui-link> &nbsp;
            </ui-center>
        </ui-drawer>
        <ui-link js="window.morning.findVM('demoEventLifecycle').toggle();">显示抽屉</ui-link>
        <br><br>
        <ui-link js="this.text='生命周期事件';">触发update</ui-link>
        <ui-link js="this.$refs['demoEventLifecycle'].$destroy();">触发destroy</ui-link>
    </div>
    >script
    {
        data : function () {
            return {
               text : '抽屉',
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

    <iframe src="/report/coverage/lib/components/drawer/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>
    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'drawer'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
