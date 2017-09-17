<template>
    <i-center
        :_uiid="uiid"
        :class="[]"
    >
        <slot></slot>
    </i-center>
</template>
 
<script>
import UI                           from 'Common/ui';

export default UI.extend({
    name : 'center'
});
</script>

<style lang="less">
@import '~Common/var.less';

i-center{
    display:flex;
    align-items:center;
    justify-content:center;

    &.fill{
        width: 100%;
        height: 100%;
    }

    // default statement
    &{}

}
</style>
