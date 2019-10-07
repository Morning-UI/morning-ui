<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 趋势标记 `<ui-trend>`
    
    <doc-component-status page="trend"></doc-component-status>
    
    [[[开始]]]

    定义一个趋势标记，用来表示数值的变动趋势，这是一个内联块元素。

    趋势标记组件一般配合`ui-numeral`一起使用，用于趋势标记的内容(`slot`)。

    趋势标记组件也可与`ui-statistic`一起使用。

    :::vue
    @name:使用
    ---
    #demo
    >tpl
    <ui-trend trend="+">
        <ui-numeral format="0.00%" number="0.1645"></ui-numeral>
    </ui-trend>
    :::

    [[[形态]]]

    #### 支持

    |类型|支持|默认|
    |-|-|-|
    |尺寸|全部|`m`|
    |色彩|不支持|-|
    |状态|不支持|-|

    <a href="/guide/status.html">查看形态文档</a> / <a href="/design/color.html">查看色彩文档</a>

    :::vue
    @layout:size
    ---
    <ui-trend size="{$sizeKey}" trend="+">
        <ui-numeral format="0.00%" number="0.1645"></ui-numeral>
    </ui-trend>
    <br><br>
    :::

    [[[配置]]]

    :::vue
    @name:trend
    ---
    #config
    >conf-desc
    趋势的方向。
    >conf-accept
    `'+'` : 向上
    `'-'` : 向下
    >conf-type
    String
    >conf-default
    `'+'`
    ---
    #demo
    >tpl
    <ui-trend trend="+">
        <ui-numeral format="0.00%" number="0.1645"></ui-numeral>
    </ui-trend>
    ---
    #demo
    >tpl
    <ui-trend trend="-">
        <ui-numeral format="0.00%" number="0.1245"></ui-numeral>
    </ui-trend>
    :::

    :::vue
    @name:text-color
    ---
    #config
    >conf-desc
    文本是否按照趋势显示不同色彩。
    >conf-accept
    `true`<br>`false`
    >conf-type
    Boolean
    >conf-default
    `false`
    ---
    #demo
    >tpl
    <div>
        <ui-trend trend="+" text-color>
            <ui-numeral format="0.00%" number="0.1645"></ui-numeral>
        </ui-trend>
        <ui-trend trend="-" text-color>
            <ui-numeral format="0.00%" number="0.1645"></ui-numeral>
        </ui-trend>
    </div>
    :::

    :::vue
    @name:reverse
    ---
    #config
    >conf-desc
    反转趋势色彩(常用于股市)。
    >conf-accept
    `true`<br>`false`
    >conf-type
    Boolean
    >conf-default
    `false`
    ---
    #demo
    >tpl
    <div>
        <ui-trend trend="+" reverse>
            <ui-numeral format="0.00%" number="0.1645"></ui-numeral>
        </ui-trend>
        <ui-trend trend="-" reverse>
            <ui-numeral format="0.00%" number="0.1645"></ui-numeral>
        </ui-trend>
    </div>
    :::

    [[[方法]]]
    
    <h1>暂无</h1>

    [[[事件]]]

    :::vue
    @layout:lifecycle-event
    ---
    trend
    趋势标记
    :::

    [[[源码]]]

    <iframe src="/report/coverage/lib/components/trend/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>

    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                 from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'trend'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
