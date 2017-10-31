<template>
    <i-textcenter
        :_uiid="uiid"
        :class="[]"
    >
        <slot></slot>
    </i-textcenter>
</template>
 
<script>
import UI                           from 'Common/ui';

export default UI.extend({
    name : 'textcenter'
});
</script>

<style lang="less">
@import '~Common/var.less';

i-textcenter{
    display: block;
    text-align: center;

    // default statement
    &{}
}
</style>
