<template>
    <i-textright
        :_uiid="uiid"
        :class="[]"
    >
        <slot></slot>
    </i-textright>
</template>
 
<script>
import UI                           from 'Common/ui';

export default UI.extend({
    name : 'textright'
});
</script>

<style lang="less">
@import '~Common/var.less';

i-textright{
    display: block;
    text-align: right;

    // default statement
    &{}

}
</style>
