<template>
    <i-box
        :_uiid="uiid"
        :class="[]"
    >
        <slot></slot>
    </i-box>
</template>
 
<script>
import UI                           from 'Common/ui';

export default UI.extend({
    name : 'box'
});
</script>

<style lang="less">
@import '~Common/var.less';

i-box{
    display:block;
    
    &.fill{
        height: 100%;
    }
    &.margin{
        margin:@fontSize*2;
    }
    &.margin.fill{
        height: ~'calc(100% - ' @fontSize*2 ~')';
    }

    // default statement
    &{}

}
</style>
