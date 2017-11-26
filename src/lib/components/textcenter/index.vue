<template>
    <mor-textcenter
        :_uiid="uiid"
        :class="[]"
    >
        <slot></slot>
    </mor-textcenter>
</template>
 
<script>
export default {
    origin : 'UI',
    name : 'textcenter'
};
</script>

<style lang="less">
@import '~Common/var.less';

mor-textcenter{
    display: block;
    text-align: center;

    // default status
    &{}
}
</style>
