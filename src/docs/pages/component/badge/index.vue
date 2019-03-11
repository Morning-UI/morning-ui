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
    @name:附着在父辈元素
    ---
    #demo
    >desc
    徽标可以附着在父辈元素的四个角上，详见：[配置/attach](#attach)
    >tpl
    <div style="display:inline-block;width:50px;height:50px;border-radius:3px;background:#E2E8EE;position: relative;">
        <ui-badge type="normal" size="xs" attach="right-top" class="circle">New</ui-badge>
    </div>
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
    - `icon` : 图标模式，请在`slot`中填写`<i>`作为字体图标

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
    <div>
        <ui-badge type="normal">这里是内容</ui-badge>
        <ui-badge type="normal" class="plain">这里是内容</ui-badge>
    </div>
    ---
    #demo
    >desc
    计数器模式，仅显示`count`的数字。
    >tpl
    <div>
        <ui-badge type="counter" :count="36">这里是内容</ui-badge>
        <ui-badge type="counter" :count="36" class="plain">这里是内容</ui-badge>
    </div>
    ---
    #demo
    >desc
    小圆点模式，不显示任何内容。
    >tpl
    <div>
        <ui-badge type="point">这里是内容</ui-badge>
        <ui-badge type="point" class="plain">这里是内容</ui-badge>
    </div>
    ---
    #demo
    >desc
    图标模式，在配合`.plain`样式使用时，图标会放大1.2倍。
    >tpl
    <div>
        <ui-badge type="icon">
            <i class="mo-icon mo-icon-time-co"></i>
        </ui-badge>
        <ui-badge type="icon" class="plain">
            <i class="mo-icon mo-icon-time-co"></i>
        </ui-badge>
    </div>
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

    :::vue
    @name:attach
    ---
    #config
    >conf-desc
    徽标可以附着在父辈元素的四个角上（被附着的父辈元素`position`不能为`static`）。
    >conf-accept
    `false` : 不附着<br>`'left-top'` : 附着在左上角<br>`'left-bottom'` : 附着在左下角<br>`'right-top'` : 附着在右上角<br>`'right-bottom'` : 附着在右下角
    >conf-type
    Boolean<br>String
    >conf-default
    `false`
    ---
    #demo
    >desc
    分别附着在父辈元素的四个角上（建议使用`xs`尺寸）。
    >tpl
    <div>
        <div style="display:inline-block;width:50px;height:50px;border-radius:3px;background:#E2E8EE;position: relative;">
            <ui-badge type="counter" size="xs" :count="6" attach="left-top"></ui-badge>
        </div>
        <div style="display:inline-block;width:50px;height:50px;border-radius:3px;background:#E2E8EE;position: relative;">
            <ui-badge type="counter" size="xs" :count="6" attach="left-bottom"></ui-badge>
        </div>
        <div style="display:inline-block;width:50px;height:50px;border-radius:3px;background:#E2E8EE;position: relative;">
            <ui-badge type="counter" size="xs" :count="6" attach="right-top"></ui-badge>
        </div>
        <div style="display:inline-block;width:50px;height:50px;border-radius:3px;background:#E2E8EE;position: relative;">
            <ui-badge type="counter" size="xs" :count="6" attach="right-bottom"></ui-badge>
        </div>
    </div>
    ---
    #demo
    >desc
    配合`.circle`一起使用。
    >tpl
    <div>
        <div style="display:inline-block;width:50px;height:50px;border-radius:3px;background:#E2E8EE;position: relative;">
            <ui-badge type="normal" size="xs" attach="left-top" class="circle">New</ui-badge>
        </div>
        <div style="display:inline-block;width:50px;height:50px;border-radius:3px;background:#E2E8EE;position: relative;">
            <ui-badge type="normal" size="xs" attach="left-bottom" class="circle">New</ui-badge>
        </div>
        <div style="display:inline-block;width:50px;height:50px;border-radius:3px;background:#E2E8EE;position: relative;">
            <ui-badge type="normal" size="xs" attach="right-top" class="circle">New</ui-badge>
        </div>
        <div style="display:inline-block;width:50px;height:50px;border-radius:3px;background:#E2E8EE;position: relative;">
            <ui-badge type="normal" size="xs" attach="right-bottom" class="circle">New</ui-badge>
        </div>
    </div>
    ---
    #demo
    >desc
    配合`.plain`和`.circle`一起使用。
    >tpl
    <div>
        <div style="display:inline-block;width:50px;height:50px;border-radius:3px;background:#E2E8EE;position: relative;">
            <ui-badge type="counter" size="xs" :count="6" attach="left-top" class="circle plain"></ui-badge>
        </div>
        <div style="display:inline-block;width:50px;height:50px;border-radius:3px;background:#E2E8EE;position: relative;">
            <ui-badge type="counter" size="xs" :count="6" attach="left-bottom" class="circle plain"></ui-badge>
        </div>
        <div style="display:inline-block;width:50px;height:50px;border-radius:3px;background:#E2E8EE;position: relative;">
            <ui-badge type="counter" size="xs" :count="6" attach="right-top" class="circle plain"></ui-badge>
        </div>
        <div style="display:inline-block;width:50px;height:50px;border-radius:3px;background:#E2E8EE;position: relative;">
            <ui-badge type="counter" size="xs" :count="6" attach="right-bottom" class="circle plain"></ui-badge>
        </div>
    </div>
    ---
    #demo
    >desc
    配合`type`为`point`一起使用（建议使用`m`尺寸）。
    >tpl
    <div>
        <div style="display:inline-block;width:50px;height:50px;border-radius:3px;background:#E2E8EE;position: relative;">
            <ui-badge type="point" attach="left-top"></ui-badge>
        </div>
        <div style="display:inline-block;width:50px;height:50px;border-radius:3px;background:#E2E8EE;position: relative;">
            <ui-badge type="point" attach="left-bottom"></ui-badge>
        </div>
        <div style="display:inline-block;width:50px;height:50px;border-radius:3px;background:#E2E8EE;position: relative;">
            <ui-badge type="point" attach="right-top"></ui-badge>
        </div>
        <div style="display:inline-block;width:50px;height:50px;border-radius:3px;background:#E2E8EE;position: relative;">
            <ui-badge type="point" attach="right-bottom"></ui-badge>
        </div>
    </div>
    ---
    #demo
    >desc
    配合`type`为`icon`及`.plain`一起使用（建议使用`l`尺寸）。
    >tpl
    <div>
        <div style="display:inline-block;width:50px;height:50px;border-radius:3px;background:#E2E8EE;position: relative;">
            <ui-badge type="icon" size="l" class="plain" attach="left-top">
                <i class="mo-icon mo-icon-time-co"></i>
            </ui-badge>
        </div>
        <div style="display:inline-block;width:50px;height:50px;border-radius:3px;background:#E2E8EE;position: relative;">
            <ui-badge type="icon" size="l" class="plain" attach="left-bottom">
                <i class="mo-icon mo-icon-time-co"></i>
            </ui-badge>
        </div>
        <div style="display:inline-block;width:50px;height:50px;border-radius:3px;background:#E2E8EE;position: relative;">
            <ui-badge type="icon" size="l" class="plain" attach="right-top">
                <i class="mo-icon mo-icon-time-co"></i>
            </ui-badge>
        </div>
        <div style="display:inline-block;width:50px;height:50px;border-radius:3px;background:#E2E8EE;position: relative;">
            <ui-badge type="icon" size="l" class="plain" attach="right-bottom">
                <i class="mo-icon mo-icon-time-co"></i>
            </ui-badge>
        </div>
    </div>
    :::

    [[[方法]]]
    
    <h1>暂无</h1>

    [[[事件]]]

    :::vue
    @layout:lifecycle-event
    ---
    empty
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
