<template>
    <i-em
        :_uiid="uiid"
        :class="[]"
    >
        <slot></slot>
    </i-em>
</template>
 
<script>
import UI                           from 'Common/ui';

export default UI.extend({
    name : 'em'
});
</script>

<style lang="less">
@import '~Common/var.less';

i-em{
    display: inline;
    font-style: italic;

    // default statement
    &{}

}
</style>
