<template>
    <i-ol
        :_uiid="uiid"
        :class="[stateClass]"
    >
        <slot></slot>
    </i-ol>
</template>
 
<script>
import UI                           from 'Common/ui';

export default UI.extend({
    name : 'ol'
});
</script>

<style lang="less">
@import '~Common/common.less';

i-ol{
    display: block;
    list-style-type: decimal;

    i-ol{
        list-style-type: lower-roman;
        margin-left: 1em;
        i-ol{
            list-style-type: lower-latin;
        }
    }
    
    li{
        line-height: 1.4em;
    }

    &.st-normal{}
    &.st-apparent{
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
