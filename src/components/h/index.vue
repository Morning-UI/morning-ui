<template>
    <i-h
        :_uiid="uiid"
        :class="[sizeClass, styleClass, stateClass]"
    >
        <slot></slot>
    </i-h>
</template>
 
<script>
import UI                           from 'Common/ui';

export default UI.extend({
    name : 'h'
});
</script>

<style lang="less">
@import '~Common/common.less';

i-h{
    display: block;
    line-height: 1.6em;
    vertical-align: middle;
    margin: 0.65em 0;

    &.si-xxl{ font-size: 3.6*@fontSize; }
    &.si-xl{ font-size: 2.88*@fontSize; }
    &.si-l{ font-size: 2.16*@fontSize; }
    &.si-m{ font-size: 1.8*@fontSize; }
    &.si-s{ font-size: 1.44*@fontSize; }
    &.si-xs{ font-size: 1.26*@fontSize; }
    &.si-xxs{ font-size: 1*@fontSize; }

    .setup-font-color-theme();
    .setup-font-color-feature();
    .setup-font-color-misc();

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
        .si-m;
        .sy-black;
        .st-normal;
    }

}
</style>
