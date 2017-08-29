<template>
    <i-lead
        :_uiid="uiid"
        :class="[styleClass, stateClass]"
    >
        <slot></slot>
    </i-lead>
</template>
 
<script>
import UI                           from 'Common/ui';

export default UI.extend({
    name : 'lead'
});
</script>

<style lang="less">
@import '~Common/common.less';

i-lead{
    display: block;
    line-height: 1.428em;
    margin: 0.672em 0;
    font-size: 1.2*@fontSize;

    .setup-font-color-thmem();
    .setup-font-color-feature();
    .setup-font-color-misc();

    &.st-normal{}
    &.st-apparent{
        animation-name: apparent;
        animation-duration: 1s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
    }
    
    // default statement
    &{
        .sy-black;
        .st-normal;
    }

}
</style>
