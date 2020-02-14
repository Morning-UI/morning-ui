<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 面板分割 `<ui-split>`
    
    <doc-component-status page="split"></doc-component-status>
    
    [[[开始]]]

    定义一个面板分割，这是一个块级元素。

    :::vue
    @name:使用
    ---
    #demo
    >tpl
    <div style="width:500px;height:100px;border: 1px #e0e0e0 solid">
        <ui-split>
            <template #a>
                <div>左边面板</div>
            </template>
            <template #b>
                <div>右边面板</div>
            </template>
        </ui-split>
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
    @name:direction
    ---
    #config
    >conf-desc
    面板分割的分割方向。
    >conf-accept
    `'horizontal'` : 横向<br>`'vertical'` : 纵向
    >conf-type
    String
    >conf-default
    `'horizontal'`
    ---
    #demo
    >desc
    纵向分割。
    >tpl
    <div style="width:500px;height:100px;border: 1px #e0e0e0 solid">
        <ui-split direction="vertical">
            <template #a>
                <div>上方面板</div>
            </template>
            <template #b>
                <div>下方面板</div>
            </template>
        </ui-split>
    </div>
    ---
    #demo
    >desc
    横向分割配合纵向分割。
    >tpl
    <div style="width:500px;height:180px;border: 1px #e0e0e0 solid">
        <ui-split direction="horizontal">
            <template #a>
                <ui-split direction="vertical">
                    <template #a>
                        <div>左上面板</div>
                    </template>
                    <template #b>
                        <div>左下面板</div>
                    </template>
                </ui-split>
            </template>
            <template #b>
                <div>右边面板</div>
            </template>
        </ui-split>
    </div>
    :::

    :::vue
    @name:min
    ---
    #config
    >conf-desc
    面板容器的最小宽度或高度。
    >conf-accept
    宽度数字(单位px)
    >conf-type
    Number
    >conf-default
    `20`
    ---
    #demo
    >desc
    纵向分割。
    >tpl
    <div style="width:500px;height:100px;border: 1px #e0e0e0 solid">
        <ui-split :min="100">
            <template #a>
                <div>左边面板</div>
            </template>
            <template #b>
                <div>右边面板</div>
            </template>
        </ui-split>
    </div>
    :::

    [[[方法]]]

    <h1>暂无</h1>

    [[[事件]]]

    :::vue
    @layout:lifecycle-event
    ---
    split
    面板分割
    <template #a>
        <div>左边面板{*text*}</div>
    </template>
    <template #b>
        <div>右边面板</div>
    </template>
    :::

    [[[源码]]]

    <iframe src="/report/coverage/lib/components/split/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>

    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                 from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'split'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
