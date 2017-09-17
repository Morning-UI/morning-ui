<template>
    <i-strong
        :_uiid="uiid"
        :class="[]"
    >
        <slot></slot>
    </i-strong>
</template>
 
<script>
import UI                           from 'Common/ui';

export default UI.extend({
    name : 'strong'
});
</script>

<style lang="less">
@import '~Common/var.less';

i-strong{
    display: inline;
    font-weight: 700;

    // default statement
    &{}

}
</style>
