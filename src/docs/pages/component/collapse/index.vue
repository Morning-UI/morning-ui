<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 折叠面板 `<ui-collapse>`
    
    <doc-component-status page="collapse"></doc-component-status>

    [[[开始]]]

    定义一个折叠面板，折叠面板支持嵌套，这是一个块元素。

    折叠面板支持多种样式，通过不同的样式类来区分。

    :::vue
    @name:使用
    ---
    #demo
    >desc
    使用`slot`的`name`属性标记内容对应的折叠面板的KEY，面板的KEY是唯一索引，所以`slot`不能重复。
    >tpl
    <div style="width: 560px;">
        <ui-collapse>
            <div slot="one" title="第一个">
                这里是第一个内容
            </div>
            <div slot="two" title="第二个">
                这里是第二个内容
            </div>
            <div slot="three" title="第三个">
                这里是第三个内容
            </div>
        </ui-collapse>
    </div>
    :::

    :::vue
    @name:使用HTML标题
    ---
    #demo
    >desc
    标题支持使用HTML，但不支持使用Morning或VUE组件。
    >tpl
    <div style="width: 560px;">
        <ui-collapse>
            <div slot="app" :title="'<i class=\'mo-icon mo-icon-block-4\'></i>应用'">
                这里是应用内容
            </div>
            <div slot="tag" :title="'<i class=\'mo-icon mo-icon-tag-f\'></i>标签'">
                这里是标签内容
            </div>
            <div slot="more" title="更多">
                这里是更多内容
            </div>
        </ui-collapse>
    </div>
    :::

    :::vue
    @name:手风琴效果
    ---
    #demo
    >desc
    通过将`max-show`配置设为`1`可以实现手风琴效果。
    >tpl
    <div style="width: 560px;">
        <ui-collapse :max-show="1">
            <div slot="one" title="第一个">
                这里是第一个内容
            </div>
            <div slot="two" title="第二个">
                这里是第二个内容
            </div>
            <div slot="three" title="第三个">
                这里是第三个内容
            </div>
        </ui-collapse>
    </div>
    :::

    :::vue
    @name:线条风格的折叠面板
    ---
    #demo
    >desc
    通过`line`样式类可以显示线条风格的折叠面板。
    >tpl
    <div style="width: 560px;">
        <ui-collapse class="line">
            <div slot="one" title="第一个">
                这里是第一个内容
            </div>
            <div slot="two" title="第二个">
                这里是第二个内容
            </div>
            <div slot="three" title="第三个">
                这里是第三个内容
            </div>
        </ui-collapse>
    </div>
    :::

    :::vue
    @name:区块风格的折叠面板
    ---
    #demo
    >desc
    通过`block`样式类可以显示区块风格的折叠面板。
    >tpl
    <div style="width: 560px;">
        <ui-collapse class="block">
            <div slot="one" title="第一个">
                这里是第一个内容
            </div>
            <div slot="two" title="第二个">
                这里是第二个内容
            </div>
            <div slot="three" title="第三个">
                这里是第三个内容
            </div>
        </ui-collapse>
    </div>
    :::

    :::vue
    @name:不显示右侧箭头
    ---
    #demo
    >desc
    通过`no-arrow`样式类可以不显示右侧箭头。
    >tpl
    <div style="width: 560px;">
        <ui-collapse class="no-arrow">
            <div slot="one" title="第一个">
                这里是第一个内容
            </div>
            <div slot="two" title="第二个">
                这里是第二个内容
            </div>
            <div slot="three" title="第三个">
                这里是第三个内容
            </div>
        </ui-collapse>
    </div>
    :::

    :::vue
    @name:支持嵌套
    ---
    #demo
    >tpl
    <div style="width: 560px;">
        <ui-collapse>
            <div slot="one" title="第一组">
                这里是第一组内容
            </div>
            <div slot="two" title="第二组">
                <ui-collapse>
                    <div slot="one" title="第二组第一个">
                        这里是第二组第一个内容
                    </div>
                    <div slot="two" title="第二组第二个">
                        这里是第二组第二个内容
                    </div>
                    <div slot="three" title="第二组第三个">
                        这里是第二组第三个内容
                    </div>
                </ui-collapse>
            </div>
            <div slot="three" title="第三组">
                这里是第三组内容
            </div>
        </ui-collapse>
    </div>
    :::

    :::vue
    @name:无内容面板
    ---
    #demo
    >desc
    若某个面板中没有内容，建议使用空状态组件(`ui-empty`)。
    >tpl
    <div style="width: 560px;">
        <ui-collapse>
            <div slot="app" title="应用">
                这里是应用内容
            </div>
            <div slot="tag"title="标签">
                <ui-empty></ui-empty>
            </div>
            <div slot="more" title="更多">
                <ui-empty></ui-empty>
            </div>
        </ui-collapse>
    </div>
    :::

    [[[形态]]]

    #### 支持

    |类型|支持|默认|
    |-|-|-|
    |尺寸|不支持|-|
    |色彩|不支持|-|
    |状态|不支持|-|

    <a href="/guide/status.html">查看形态文档</a> / <a href="/design/color.html">查看色彩文档</a>

    [[[配置]]]

    :::vue
    @name:shows
    ---
    #config
    >conf-desc
    需要打开的面板。
    >conf-accept
    `slot`名(面板的KEY)组成的数组
    >conf-type
    Array
    >conf-default
    `[]`
    ---
    #demo
    >desc
    打开单个面板。
    >tpl
    <div style="width: 560px;">
        <ui-collapse :shows="['two']">
            <div slot="one" title="第一个">
                这里是第一个内容
            </div>
            <div slot="two" title="第二个">
                这里是第二个内容
            </div>
            <div slot="three" title="第三个">
                这里是第三个内容
            </div>
        </ui-collapse>
    </div>
    ---
    #demo
    >desc
    打开多个面板。
    >tpl
    <div style="width: 560px;">
        <ui-collapse :shows="['two', 'three']">
            <div slot="one" title="第一个">
                这里是第一个内容
            </div>
            <div slot="two" title="第二个">
                这里是第二个内容
            </div>
            <div slot="three" title="第三个">
                这里是第三个内容
            </div>
        </ui-collapse>
    </div>
    ---
    #demo
    >desc
    无法打开被`disabled-options`禁止的面板。
    >tpl
    <div style="width: 560px;">
        <ui-collapse :shows="['two', 'three']" :disabled-options="['three']">
            <div slot="one" title="第一个">
                这里是第一个内容
            </div>
            <div slot="two" title="第二个">
                这里是第二个内容
            </div>
            <div slot="three" title="第三个">
                这里是第三个内容
            </div>
        </ui-collapse>
    </div>
    :::

    :::vue
    @name:max-show
    ---
    #config
    >conf-desc
    最多同时打开几个面板。
    >conf-accept
    数字
    >conf-type
    Number
    >conf-default
    `Infinity`
    ---
    #demo
    >desc
    设置为`1`可以实现手风琴效果。
    >tpl
    <div style="width: 560px;">
        <ui-collapse :max-show="1">
            <div slot="one" title="第一个">
                这里是第一个内容
            </div>
            <div slot="two" title="第二个">
                这里是第二个内容
            </div>
            <div slot="three" title="第三个">
                这里是第三个内容
            </div>
        </ui-collapse>
    </div>
    ---
    #demo
    >desc
    也可以设为更多，关闭时会按照打开顺序依次关闭。
    >tpl
    <div style="width: 560px;">
        <ui-collapse :max-show="2">
            <div slot="one" title="第一个">
                这里是第一个内容
            </div>
            <div slot="two" title="第二个">
                这里是第二个内容
            </div>
            <div slot="three" title="第三个">
                这里是第三个内容
            </div>
        </ui-collapse>
    </div>
    :::

    :::vue
    @name:disabled-options
    ---
    #config
    >conf-desc
    禁止打开指定的面板<br>被禁止的面板内容不会被渲染。
    >conf-accept
    禁用面板的KEY组成的数组
    >conf-type
    Array
    >conf-default
    `[]`
    ---
    #demo
    >tpl
    <div style="width: 560px;">
        <ui-collapse :disabled-options="['two']">
            <div slot="one" title="第一个">
                这里是第一个内容
            </div>
            <div slot="two" title="第二个">
                这里是第二个内容
            </div>
            <div slot="three" title="第三个">
                这里是第三个内容
            </div>
        </ui-collapse>
    </div>
    :::

    [[[方法]]]

    :::vue
    @name:switch(key)
    ---
    #method
    >method-desc
    切换指定面板的显示状态。
    >method-args
    |key|NO|需要切换显示状态的面板的KEY|面板的KEY，即`slot`的`name`|`String`|`undefined`|
    >method-return
    当前组件VM实例。
    ---
    #demo
    >tpl
    <div>
        <div style="width: 560px;">
            <ui-collapse ref="demo1">
                <div slot="one" title="第一个">
                    这里是第一个内容
                </div>
                <div slot="two" title="第二个">
                    这里是第二个内容
                </div>
                <div slot="three" title="第三个">
                    这里是第三个内容
                </div>
            </ui-collapse>
        </div>
        <br><br> 
        <ui-link js="morning.findVM('demo1').switch('one');">切换第一个的显示状态</ui-link>
        <ui-link js="morning.findVM('demo1').switch('two');">切换第二个的显示状态</ui-link>
    </div>
    :::

    :::vue
    @name:show(key)
    ---
    #method
    >method-desc
    显示指定面板。
    >method-args
    |key|NO|需要显示面板的KEY|面板的KEY，即`slot`的`name`|`String`|`undefined`|
    >method-return
    当前组件VM实例。
    ---
    #demo
    >tpl
    <div>
        <div style="width: 560px;">
            <ui-collapse ref="demo2">
                <div slot="one" title="第一个">
                    这里是第一个内容
                </div>
                <div slot="two" title="第二个">
                    这里是第二个内容
                </div>
                <div slot="three" title="第三个">
                    这里是第三个内容
                </div>
            </ui-collapse>
        </div>
        <br><br> 
        <ui-link js="morning.findVM('demo2').show('one');">显示第一个面板</ui-link>
    </div>
    :::

    :::vue
    @name:hide(key)
    ---
    #method
    >method-desc
    隐藏指定面板。
    >method-args
    |key|NO|需要隐藏面板的KEY|面板的KEY，即`slot`的`name`|`String`|`undefined`|
    >method-return
    当前组件VM实例。
    ---
    #demo
    >tpl
    <div>
        <div style="width: 560px;">
            <ui-collapse ref="demo3" :shows="['one']">
                <div slot="one" title="第一个">
                    这里是第一个内容
                </div>
                <div slot="two" title="第二个">
                    这里是第二个内容
                </div>
                <div slot="three" title="第三个">
                    这里是第三个内容
                </div>
            </ui-collapse>
        </div>
        <br><br> 
        <ui-link js="morning.findVM('demo3').hide('one');">隐藏第一个面板</ui-link>
    </div>
    :::

    [[[事件]]]

    :::vue
    @name:switch
    ---
    #event
    >event-desc
    当有面板显示/隐藏状态变化时触发。
    >event-args
    |key|切换面板的slot值|`String`|
    ---
    #demo
    >tpl
    <div style="width: 560px;">
        <ui-collapse ref="demo4" @switch="echo">
            <div slot="one" title="第一个">
                这里是第一个内容
            </div>
            <div slot="two" title="第二个">
                这里是第二个内容
            </div>
            <div slot="three" title="第三个">
                这里是第三个内容
            </div>
        </ui-collapse>
        <br>
        <p>点击面板触发此事件</p>
    </div>
    >script
    {
        methods : {
            echo : function () {
                console.log('demo4.console1', 'switch event!');
            }
        }
    }
    :::

    :::vue
    @name:show
    ---
    #event
    >event-desc
    当有面板显示时触发。
    >event-args
    |key|显示面板的slot值|`String`|
    ---
    #demo
    >tpl
    <div style="width: 560px;">
        <ui-collapse ref="demo5" @show="echo">
            <div slot="one" title="第一个">
                这里是第一个内容
            </div>
            <div slot="two" title="第二个">
                这里是第二个内容
            </div>
            <div slot="three" title="第三个">
                这里是第三个内容
            </div>
        </ui-collapse>
        <br>
        <p>点击面板触发此事件</p>
    </div>
    >script
    {
        methods : {
            echo : function () {
                console.log('demo5.console1', 'show event!');
            }
        }
    }
    :::

    :::vue
    @name:hide
    ---
    #event
    >event-desc
    当有面板隐藏时触发。
    >event-args
    |key|隐藏面板的slot值|`String`|
    ---
    #demo
    >tpl
    <div style="width: 560px;">
        <ui-collapse ref="demo6" @hide="echo">
            <div slot="one" title="第一个">
                这里是第一个内容
            </div>
            <div slot="two" title="第二个">
                这里是第二个内容
            </div>
            <div slot="three" title="第三个">
                这里是第三个内容
            </div>
        </ui-collapse>
        <br>
        <p>点击面板触发此事件</p>
    </div>
    >script
    {
        methods : {
            echo : function () {
                console.log('demo6.console1', 'hide event!');
            }
        }
    }
    :::

    :::vue
    @layout:lifecycle-event
    ---
    collapse
    折叠面板
    <div slot="one" title="第一个">
        {*text*}
    </div>
    <div slot="two" title="第二个">
        这里是第二个内容
    </div>
    <div slot="three" title="第三个">
        这里是第三个内容
    </div>
    :::

    [[[源码]]]

    <iframe src="/report/coverage/lib/components/collapse/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>
    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'collapse'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
