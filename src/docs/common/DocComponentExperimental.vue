<template>
    <div>
        <ui-alert title="实验性" type="primary" show-icon can-close>
            注意：此组件仍处于实验阶段，实现及接口有可能会更改，且文档仍不完整。请谨慎使用。
        </ui-alert>
        <br>
    </div>
</template>
 
<script>
export default {
    props : {
        date : String,
        plan : String
    },
    data : function () {

        return {};

    },
    mounted : function () {}
};
</script>

<style lang="less">
</style>
