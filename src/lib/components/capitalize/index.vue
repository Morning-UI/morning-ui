<template>
    <i-capitalize
        :_uiid="uiid"
        :class="[]"
    >
        <slot></slot>
    </i-capitalize>
</template>
 
<script>
import UI                           from 'Common/ui';

export default UI.extend({
    name : 'capitalize'
});
</script>

<style lang="less">
@import '~Common/var.less';

i-capitalize{
    display: inline;
    text-transform: capitalize;

    // default statement
    &{}

}
</style>
