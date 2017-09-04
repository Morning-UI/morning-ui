<template>
    <i-textleft
        :_uiid="uiid"
        :class="[]"
    >
        <slot></slot>
    </i-textleft>
</template>
 
<script>
import UI                           from 'Common/ui';

export default UI.extend({
    name : 'textleft'
});
</script>

<style lang="less">
@import '~Common/var.less';

i-textleft{
    display: block;
    text-align: left;

    // default statement
    &{}

}
</style>
