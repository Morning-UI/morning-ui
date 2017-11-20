<template>
    <i-textcenter
        :_uiid="uiid"
        :class="[]"
    >
        <slot></slot>
    </i-textcenter>
</template>
 
<script>
export default {
    origin : 'UI',
    name : 'textcenter'
};
</script>

<style lang="less">
@import '~Common/var.less';

i-textcenter{
    display: block;
    text-align: center;

    // default status
    &{}
}
</style>
