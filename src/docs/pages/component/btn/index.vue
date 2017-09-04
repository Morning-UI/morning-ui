<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 按钮 `<ui-btn>`

    #### link

    ````html
    <ui-btn :link="'http://www.google.com'">链接</ui-btn>
    ````

    #### locked

    ````html
    <ui-btn :locked="5000">5秒后自动解锁</ui-btn>
    ````



    ### 方法

    ### 方法

    ### 事件

    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'btn'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
