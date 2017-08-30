<template>
    <i-il
        :_uiid="uiid"
        :class="[stateClass]"
    >
        <slot></slot>
    </i-il>
</template>
 
<script>
import UI                           from 'Common/ui';

export default UI.extend({
    name : 'il'
});
</script>

<style lang="less">
@import '~Common/common.less';

i-il{
    display: block;

    li{
        display: inline-block;
        margin: 0 0.4em;
        line-height: 1.4em;
    }

    &.st-normal{}
    &.st-apparent{
        transform-origin: left center;
        animation-name: apparent;
        animation-duration: 1s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
    }
    
    // default statement
    &{
        .st-normal;
    }

}
</style>
