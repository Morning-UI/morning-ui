<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 吸附 `<ui-sticky>`
    
    <doc-component-status page="sticky"></doc-component-status>
    
    [[[开始]]]

    定义一个吸附，这是一个内联块元素。吸附默认根据视窗滚动进行吸附，吸附仅支持Y轴。

    吸附组件的`z-index`默认为Morning UI全局`z-index`的初始值减1（[查看如何调整全局`z-index`](/guide/init.html#配置初始z-index值)），这在大部分场景下都会使吸附处于最前面。但是由于Morning UI并不知道实际场景中最大的`z-index`是多少，所以仍然存在被吸附元素被遮挡的情况，这种情况下你可以为吸附指定更大的`z-index`来解决。

    注意：`ui-sticky`和`ui-tab`一起工作时存在一些问题。

    :::vue
    @name:使用
    ---
    #demo
    >tpl
    <div>
        <ui-sticky>
            <ui-btn>吸附在视窗顶部的跟随</ui-btn>
        </ui-sticky>
    </div>
    :::

    :::vue
    @name:指定吸附位置
    ---
    #demo
    >desc
    吸附相对位置单位是`px`。
    >tpl
    <div>
        <ui-sticky :top="40">
            <ui-btn>吸附在距离视窗顶部40px的位置</ui-btn>
        </ui-sticky>
    </div>
    ---
    #demo
    >desc
    也可以指定相对于底部的位置。
    >tpl
    <div>
        <ui-sticky :bottom="10">
            <ui-btn>吸附在距离视窗底部10px的位置</ui-btn>
        </ui-sticky>
    </div>
    ---
    #demo
    >desc
    若同时设置了`top`和`bottom`，则`bottom`优先级更高。
    >tpl
    <div>
        <ui-sticky :bottom="80" :top="80">
            <ui-btn>吸附在距离视窗底部80px的位置</ui-btn>
        </ui-sticky>
    </div>
    :::

    :::vue
    @name:吸附于父辈容器
    ---
    #demo
    >desc
    在`position`配置为`parent`时，则吸附相对父辈元素吸附，而不会相对视窗定位
    <br><br>
    父辈元素必须设置为`position:relative | absolute | fixed`，且吸附在吸附时不会超出父辈容器的。
    >tpl
    <div style="position:relative;height:300px;padding: 0 200px;">
        <ui-sticky position="parent" :top="10">
            <ui-btn color="blue">吸附在父节点顶部的跟随</ui-btn>
        </ui-sticky>
        <div style="height: 228px;"></div>
        <ui-sticky style="margin-left: 180px;" position="parent" :bottom="10">
            <ui-btn color="blue">吸附在父节点底部的跟随</ui-btn>
        </ui-sticky>
    </div>
    ---
    #demo
    >desc
    若父辈容器可滚动。
    >tpl
    <div style="height:300px;overflow-y: auto;">
        <div style="position:relative;height:600px;padding: 0 200px;">
            <ui-sticky position="parent" :top="10">
                <ui-btn color="blue">吸附在父节点顶部的跟随</ui-btn>
            </ui-sticky>
            <div style="height: 528px;"></div>
            <ui-sticky style="margin-left: 180px;" position="parent" :bottom="10">
                <ui-btn color="blue">吸附在父节点底部的跟随</ui-btn>
            </ui-sticky>
        </div>
    </div>
    :::

    [[[形态]]]

    #### 支持

    |类型|支持|默认|
    |-|-|-|
    |尺寸|不支持|-|
    |色彩|不支持|-|
    |状态|不支持|-|

    [[[配置]]]

    :::vue
    @name:position
    ---
    #config
    >conf-desc
    吸附模式，支持两种：<br>`viewport`：相对于浏览器视窗吸附<br>`parent`：根据父辈容器吸附(父辈元素必须设置为`position:relative | absolute | fixed`)，切吸附不会超出父辈容器范围。
    >conf-accept
    `'viewport'`<br>`'parent'`
    >conf-type
    String
    >conf-default
    `'viewport'`
    ---
    #demo
    >desc
    `position`为`viewport`的吸附。
    >tpl
    <div>
        <ui-sticky style="margin-left: 400px;">
            <ui-btn color="silver">position为viewport的吸附</ui-btn>
        </ui-sticky>
    </div>
    ---
    #demo
    >desc
    `position`为`parent`的吸附。
    >tpl
    <div style="position:relative;height:300px;padding: 0 200px;">
        <ui-sticky position="parent" top="40" style="margin-left: 200px;">
            <ui-btn color="silver">position为parent的吸附</ui-btn>
        </ui-sticky>
    </div>
    :::

    :::vue
    @name:top
    ---
    #config
    >conf-desc
    吸附位置相对顶部距离。
    >conf-accept
    距离(px)
    >conf-type
    Number
    >conf-default
    `0`
    ---
    #demo
    >tpl
    <div>
        <ui-sticky :top="70" style="margin-left: 400px;">
            <ui-btn color="silver">吸附在距离视窗底部70px的位置</ui-btn>
        </ui-sticky>
    </div>
    :::

    :::vue
    @name:bottom
    ---
    #config
    >conf-desc
    吸附位置相对底部距离，当`bottom`和`top`同时设置时，优先采用`top`。
    >conf-accept
    距离(px)
    >conf-type
    Number
    >conf-default
    `undefined`
    ---
    #demo
    >tpl
    <div>
        <ui-sticky :bottom="40" style="margin-left: 400px;">
            <ui-btn color="silver">吸附在距离视窗底部40px的位置</ui-btn>
        </ui-sticky>
    </div>
    :::

    [[[方法]]]
    
    <h1>暂无</h1>

    [[[事件]]]

    :::vue
    @layout:lifecycle-event
    ---
    sticky
    吸附
    :::

    [[[源码]]]

    <iframe src="/report/coverage/lib/components/sticky/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>

    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                 from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'sticky'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
