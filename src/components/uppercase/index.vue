<template>
    <i-uppercase
        :_uiid="uiid"
        :class="[]"
    >
        <slot></slot>
    </i-uppercase>
</template>
 
<script>
import UI                           from 'Common/ui';

export default UI.extend({
    name : 'uppercase'
});
</script>

<style lang="less">
@import '~Common/common.less';

i-uppercase{
    display: inline;
    text-transform: uppercase;

    // default statement
    &{}

}
</style>
