<template>
    <i-ul
        :_uiid="uiid"
        :class="[stateClass]"
    >
        <slot></slot>
    </i-ul>
</template>
 
<script>
import UI                           from 'Common/ui';

export default UI.extend({
    name : 'ul'
});
</script>

<style lang="less">
@import '~Common/var.less';

i-ul{
    display: block;
    list-style-type: disc;
    
    i-ul{
        list-style-type: circle;
        margin-left: 1em;
        
        i-ul{
            list-style-type: square;
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
