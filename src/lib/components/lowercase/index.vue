<template>
    <i-lowercase
        :_uiid="uiid"
        :class="[]"
    >
        <slot></slot>
    </i-lowercase>
</template>
 
<script>
import UI                           from 'Common/ui';

export default UI.extend({
    name : 'lowercase'
});
</script>

<style lang="less">
@import '~Common/common.less';

i-lowercase{
    display: inline;
    text-transform: lowercase;

    // default statement
    &{}

}
</style>
