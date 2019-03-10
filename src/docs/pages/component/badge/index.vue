<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 徽标 `<ui-badge>`
    
    <doc-component-status page="badge"></doc-component-status>

    [[[开始]]]

    定义一个徽标，徽标一般跟在内容后面，来标记一些特殊的内容(通常是数字)，这是一个内联块元素。

    徽标内部只能包含文本内容。

    :::vue
    @name:使用
    ---
    #demo
    >tpl
    <ui-badge>24</ui-badge>
    :::

    :::vue
    @name:扁平徽标
    ---
    #demo
    >tpl
    <ui-badge class="flat">24</ui-badge>
    :::
    
    :::vue
    @name:圆形徽标
    ---
    #demo
    >tpl
    <ui-badge class="circle">圆形徽标</ui-badge>
    :::
    
    :::vue
    @name:朴素徽标
    ---
    #demo
    >tpl
    <ui-badge class="plain">朴素徽标</ui-badge>
    :::

    :::vue
    @name:无内容隐藏
    ---
    #demo
    >desc
    当徽标内没有内容时，会自动隐藏。
    >tpl
    <ui-badge></ui-badge>
    :::

    [[[形态]]]

    #### 支持

    |类型|支持|默认|
    |-|-|-|
    |尺寸|全部|`m`|
    |色彩|全部|`theme`|
    |状态|`normal`<br/>`apparent`|`normal`|

    <a href="/guide/status.html">查看形态文档</a>

    :::vue
    @name:尺寸
    ---
    #renderer
    >name
    size-repeat
    >tpl
    <ui-badge size="{$sizeKey}">{$&sizeName}</ui-badge>
    ---
    #renderer
    >name
    size-repeat
    >desc
    尺寸配合`circle`样式类一起使用。
    >tpl
    <ui-badge class="circle" size="{$sizeKey}">{$&sizeName}</ui-badge>
    ---
    #renderer
    >name
    size-repeat
    >desc
    尺寸配合`circle`和`plain`样式类一起使用。
    >tpl
    <ui-badge class="circle plain" size="{$sizeKey}">{$&sizeName}</ui-badge>
    ---
    #renderer
    >name
    size-repeat
    >desc
    小圆点模式的徽标。
    >tpl
    <ui-badge type="point" size="{$sizeKey}">{$&sizeName}</ui-badge>
    :::

    :::vue
    @layout:color
    ---
    <ui-badge color="{$colorKey}">{$&colorName}</ui-badge>
    <ui-badge color="{$colorKey}" class="plain">{$&colorName}</ui-badge>
    <ui-badge color="{$colorKey}" class="circle">{$&colorName}</ui-badge>
    <ui-badge color="{$colorKey}" class="plain circle">{$&colorName}</ui-badge>
    <br><br>
    :::

    :::vue
    @layout:state-na
    ---
    <ui-badge state="{$stateKey}">{$&stateName}</ui-badge>
    :::

    [[[配置]]]

    :::vue
    @name:type
    ---
    #config
    >conf-desc
    徽标的显示模式：

    - `normal` : 默认模式，支持显示纯文本的徽标（通过`slot`）
    - `counter` : 计数器模式，配合`count`和`max-show`配置一起使用，仅展现`count`的数字不会显示`slot`内容
    - `point` : 小圆点模式，不显示任何内容

    >conf-accept
    `'normal'`<br>`'counter'`<br>`'point'`
    >conf-type
    String
    >conf-default
    `'normal'`
    ---
    #demo
    >desc
    正常模式，可以显示`slot`的内容。
    >tpl
    <ui-badge type="normal">这里是内容</ui-badge>
    <ui-badge type="normal" class="plain">这里是内容</ui-badge>
    ---
    #demo
    >desc
    计数器模式，仅显示`count`的数字。
    >tpl
    <ui-badge type="counter" :count="36">这里是内容</ui-badge>
    <ui-badge type="counter" :count="36" class="plain">这里是内容</ui-badge>
    ---
    #demo
    >desc
    小圆点模式，不显示任何内容。
    >tpl
    <ui-badge type="point">这里是内容</ui-badge>
    <ui-badge type="point" class="plain">这里是内容</ui-badge>
    :::

    :::vue
    @name:count
    ---
    #config
    >conf-desc
    徽标的计数，仅在`type`为`counter`时有效。计数将显示在徽标上，若计数大于`max-show`配置，则会显示`max-show`的数值加上`+`。
    >conf-accept
    数字
    >conf-type
    Number
    >conf-default
    `0`
    ---
    #demo
    >tpl
    <div>
        <ui-badge type="counter" :count="count"></ui-badge>
        <ui-badge color="primary" class="circle" type="counter" :count="count"></ui-badge>
        <ui-badge color="blue" class="plain" type="counter" :count="count"></ui-badge>
        <br>
        <ui-link js="this.count++">计数+1</ui-link>
    </div>
    >script
    {
        data : {
            count : 5
        }
    }
    ---
    #demo
    >desc
    配合`max-show`一起使用。
    >tpl
    <ui-badge type="counter" :count="103" :max-show="99"></ui-badge>
    :::

    :::vue
    @name:max-show
    ---
    #config
    >conf-desc
    徽标的最大计数，仅在`type`为`counter`时有效。当`count`配置的数字大于`max-show`时，会显示`max-show`的数值加上`+`。
    >conf-accept
    数字
    >conf-type
    Number
    >conf-default
    `99`
    ---
    #demo
    >tpl
    <ui-badge type="counter" :count="103" :max-show="99"></ui-badge>
    :::

    [[[源码]]]

    <iframe src="/report/coverage/lib/components/badge/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>
    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'badge'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
