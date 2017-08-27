<template>
    <i-h
        :_uiid="uiid"
        :class="[sizeClass, styleClass]"
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

    &.si-xxl{ font-size: 3.6*@fontSize; }
    &.si-xl{ font-size: 2.88*@fontSize; }
    &.si-l{ font-size: 2.16*@fontSize; }
    &,&.si-m{ font-size: 1.8*@fontSize; }
    &.si-s{ font-size: 1.44*@fontSize; }
    &.si-xs{ font-size: 1.26*@fontSize; }
    &.si-xxs{ font-size: 1*@fontSize; }
    
    &.sy-theme{ color: @themeColor; }
    &.sy-success{ color: @successColor; }
    &.sy-warning{ color: @warningColor; }
    &.sy-danger{ color: @dangerColor; }
    &.sy-minor{ color: @minorColor; }
    &.sy-light{ color: @lightColor; }
    &,&.sy-deep{ color: @deepColor; }
    &.sy-info{ color: @infoColor; }
}
</style>
