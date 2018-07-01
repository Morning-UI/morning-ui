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

    使用`slot`属性标记内容对应的折叠面板的KEY，面板的KEY是唯一索引，所以`slot`不能重复。

    折叠面板支持多种样式，通过不同的样式类来区分。

    #### 使用

    :::democode/html
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

    #### 使用HTML标题

    标题支持使用HTML，但不支持使用Morning或VUE组件。

    :::democode/html
    <div style="width: 560px;">
        <ui-collapse>
            <div slot="app" :title="'<i class=\'iconfont\'>&#xe601;</i>应用'">
                这里是应用内容
            </div>
            <div slot="tag" :title="'<i class=\'iconfont\'>&#xe815;</i>标签'">
                这里是标签内容
            </div>
            <div slot="more" title="更多">
                这里是更多内容
            </div>
        </ui-collapse>
    </div>
    :::

    #### 手风琴效果

    通过将`max-show`配置设为`1`可以实现手风琴效果：

    :::democode/html
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

    #### 线条风格的折叠面板

    通过`line`样式类可以显示线条风格的折叠面板：

    :::democode/html
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

    #### 区块风格的折叠面板

    通过`block`样式类可以显示区块风格的折叠面板：

    :::democode/html
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

    #### 不显示右侧箭头

    通过`no-arrow`样式类可以不显示右侧箭头：

    :::democode/html
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

    [[[形态]]]

    #### 支持

    |类型|支持|默认|
    |-|-|-|
    |尺寸|不支持|-|
    |色彩|不支持|-|
    |状态|不支持|-|

    <a href="/guide/status.html">查看形态文档</a>

    [[[配置]]]

    |KEY|描述|接受值|值类型|默认值|
    |-|-|-|-|-|
    |[shows](#shows)|需要打开的面板|`slot`名(面板的KEY)组成的数组|Array|`[]`|
    |[max-show](#max-show)|最多同时打开几个面板|数字|Number|`Infinity`|

    #### shows

    打开单个面板：

    :::democode/html
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
    :::

    打开多个面板：

    :::democode/html
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
    :::

    #### max-show

    设置为`1`可以实现手风琴效果：

    :::democode/html
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

    也可以设为更多，关闭时会按照打开顺序依次关闭：

    :::democode/html
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
