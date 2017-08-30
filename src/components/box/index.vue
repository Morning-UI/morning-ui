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
@import '~Common/common.less';

i-box{
    display:block;
    
    &.fill{
        height: 100%;
    }
    &.margin{
        margin:2*@fontSize;
    }
    &.margin.fill{
        height: ~"calc(100% - " 2*@fontSize ~")";
    }

    // default statement
    &{}

}
</style>
