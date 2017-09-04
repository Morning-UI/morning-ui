<template>
    <i-small
        :_uiid="uiid"
        :class="[]"
    >
        <slot></slot>
    </i-small>
</template>
 
<script>
import UI                           from 'Common/ui';

export default UI.extend({
    name : 'small'
});
</script>

<style lang="less">
@import '~Common/var.less';

i-small{
    display: inline;
    font-size: smaller;
    
    // default statement
    &{}

}
</style>
