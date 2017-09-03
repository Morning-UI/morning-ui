<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 行动栏 `<ui-action>`

    ### 基础

    定义一个包含多个操作的行动栏。

    行动栏可包含：
    
    - 名称 .title
    - 说明 .note
    - 行动区域 .action

    #### 使用

    ````html
    <div style="width:400px">
        <ui-action>
            <div class="title">
                <h5>行动名称</h5>
                <span class="note">行动说明</span>
            </div>
            <div class="action">
                <ui-btn>行动按钮</ui-btn>
            </div>
        </ui-action>
    </div>
    ````

    ### 声明

    #### 支持

    |类型|支持|默认|
    |-|-|-|
    |尺寸|不支持|-|
    |色彩|不支持|-|
    |状态|不支持|-|

    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'em'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
