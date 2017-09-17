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
@import '~Common/var.less';

i-h{
    display: block;
    line-height: 1.6em;
    vertical-align: middle;
    margin: 0.65em 0;

    &.si-xxl{ font-size: @fontSize*3.6; }
    &.si-xl{ font-size: @fontSize*2.88; }
    &.si-l{ font-size: @fontSize*2.16; }
    &.si-m{ font-size: @fontSize*1.8; }
    &.si-s{ font-size: @fontSize*1.44; }
    &.si-xs{ font-size: @fontSize*1.26; }
    &.si-xxs{ font-size: @fontSize*1; }

    .setup-font-color-theme();
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
        .si-m;
        .sy-black;
        .st-normal;
    }

}
</style>