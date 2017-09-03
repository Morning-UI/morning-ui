<template>
    <i-label
        :_uiid="uiid"
        :class="[sizeClass, styleClass, stateClass]"
    >
        <slot></slot>
    </i-label>
</template>
 
<script>
import UI                           from 'Common/ui';

export default UI.extend({
    name : 'label'
});
</script>

<style lang="less">
@import '~Common/common.less';

i-label{
    display: inline-block;
    white-space: nowrap;
    vertical-align: middle;
    height: 1.8em;
    margin:0 0.125*@fontSize;
    overflow: hidden;
    font-size: 0em;

    &.image, &.icon{ padding: 0 !important; }
    &,&>span{ line-height: 1.8em; }
    &>span{ display: inline-block; line-height: 1.8em; height: 1.8em; vertical-align: top!important; }
    &.image img{ vertical-align: top !important; height: 1.8em; width: 1.8em; }
    &.icon>.iconfont{ display: inline-block; vertical-align: top !important;}

    &.si-xxl{ 
        border-radius: 1.6*@borderRadius;
        margin: 0.5*@fontSize;
        &,&>span{ font-size: 1.3*@fontSize; padding:0 1.3*@fontSize;}
        &.image>span:last-child{padding:0 1.4*@fontSize 0 1*@fontSize;}
        &.image>span:first-child{padding:0 1*@fontSize 0 1.4*@fontSize;}
        &.image>img:first-child{ border-radius: 1.6*@borderRadius 0 0 1.6*@borderRadius; }
        &.image>img:last-child{ border-radius: 0 1.6*@borderRadius 1.6*@borderRadius 0; }
        &.icon>.iconfont:first-child{ font-size: 1.4*@fontSize; padding-left: 0.8*@fontSize;}
        &.icon>.iconfont:last-child{ font-size: 1.4*@fontSize; padding-right: 0.8*@fontSize;}
        &.icon>span:last-child{padding:0 1.3*@fontSize 0 0.4*@fontSize;}
        &.icon>span:first-child{padding:0 0.4*@fontSize 0 1.3*@fontSize;}
    }
    &.si-xl{ 
        border-radius: 1.4*@borderRadius;
        margin: 0.3*@fontSize;
        &,&>span{ font-size: 1.2*@fontSize; padding:0 1.2*@fontSize;}
        &.image>span:last-child{padding:0 1.2*@fontSize 0 0.8*@fontSize;}
        &.image>span:first-child{padding:0 0.8*@fontSize 0 1.2*@fontSize;}
        &.image>img:first-child{ border-radius: 1.4*@borderRadius 0 0 1.4*@borderRadius; }
        &.image>img:last-child{ border-radius: 0 1.4*@borderRadius 1.4*@borderRadius 0; }
        &.icon>.iconfont:first-child{ font-size: 1.2*@fontSize; padding-left: 0.75*@fontSize;}
        &.icon>.iconfont:last-child{ font-size: 1.2*@fontSize; padding-right: 0.75*@fontSize;}
        &.icon>span:last-child{padding:0 1.2*@fontSize 0 0.3*@fontSize;}
        &.icon>span:first-child{padding:0 0.3*@fontSize 0 1.2*@fontSize;}
    }
    &.si-l{ 
        border-radius: 1.2*@borderRadius;
        margin: 0.1*@fontSize; 
        &,&>span{ font-size: 1*@fontSize; padding:0 1*@fontSize;}
        &.image>span:last-child{padding:0 1*@fontSize 0 0.7*@fontSize;}
        &.image>span:first-child{padding:0 0.7*@fontSize 0 1*@fontSize;}
        &.image>img:first-child{ border-radius: 1.2*@borderRadius 0 0 1.2*@borderRadius; }
        &.image>img:last-child{ border-radius: 0 1.2*@borderRadius 1.2*@borderRadius 0; }
        &.icon>.iconfont:first-child{ font-size: 1*@fontSize; padding-left: 0.6*@fontSize;}
        &.icon>.iconfont:last-child{ font-size: 1*@fontSize; padding-right: 0.6*@fontSize;}
        &.icon>span:last-child{padding:0 1*@fontSize 0 0.2*@fontSize;}
        &.icon>span:first-child{padding:0 0.2*@fontSize 0 1*@fontSize;}
    }
    &.si-m{ 
        border-radius: @borderRadius;
        &,&>span{ font-size: 0.8*@fontSize; padding:0 0.8*@fontSize 0;}
        &.image>span:last-child{padding:0 0.8*@fontSize 0 0.5*@fontSize;}
        &.image>span:first-child{padding:0 0.5*@fontSize 0 0.8*@fontSize;}
        &.image>img:first-child{ border-radius: @borderRadius 0 0 @borderRadius; }
        &.image>img:last-child{ border-radius: 0 @borderRadius @borderRadius 0; }
        &.icon>.iconfont:first-child{ font-size: 0.8*@fontSize; padding-left: 0.5*@fontSize;}
        &.icon>.iconfont:last-child{ font-size: 0.8*@fontSize; padding-right: 0.5*@fontSize;}
        &.icon>span:last-child{padding:0 0.8*@fontSize 0 0.1*@fontSize;}
        &.icon>span:first-child{padding:0 0.1*@fontSize 0 0.8*@fontSize;}
    }
    &.si-s{
        border-radius: 0.8*@borderRadius;
        &,&>span{ font-size: 0.75*@fontSize; padding:0 0.6*@fontSize 0;}
        &.image>span:last-child{padding:0 0.6*@fontSize 0 0.3*@fontSize;}
        &.image>span:first-child{padding:0 0.3*@fontSize 0 0.6*@fontSize;}
        &.image>img:first-child{ border-radius: 0.8*@borderRadius 0 0 0.8*@borderRadius; }
        &.image>img:last-child{ border-radius: 0 0.8*@borderRadius 0.8*@borderRadius 0; }
        &.icon>.iconfont:first-child{ font-size: 0.8*@fontSize; padding-left: 0.4*@fontSize;}
        &.icon>.iconfont:last-child{ font-size: 0.8*@fontSize; padding-right: 0.4*@fontSize;}
        &.icon>span:last-child{padding:0 0.6*@fontSize 0 0.1*@fontSize;}
        &.icon>span:first-child{padding:0 0.1*@fontSize 0 0.6*@fontSize;}
    }
    &.si-xs{ 
        border-radius: 0.75*@borderRadius;
        &,&>span{ font-size: 0.75*@fontSize; padding:0 0.4*@fontSize 0;}
        &.image>span:last-child{padding:0 0.4*@fontSize 0 0.2*@fontSize;}
        &.image>span:first-child{padding:0 0.2*@fontSize 0 0.4*@fontSize;}
        &.image>img:first-child{ border-radius: 0.75*@borderRadius 0 0 0.75*@borderRadius; }
        &.image>img:last-child{ border-radius: 0 0.75*@borderRadius 0.75*@borderRadius 0; }
        &.icon>.iconfont:first-child{ font-size: 0.8*@fontSize; padding-left: 0.25*@fontSize;}
        &.icon>.iconfont:last-child{ font-size: 0.8*@fontSize; padding-right: 0.25*@fontSize;}
        &.icon>span:last-child{padding:0 0.4*@fontSize 0 0*@fontSize;}
        &.icon>span:first-child{padding:0 0*@fontSize 0 0.4*@fontSize;}
    }
    &.si-xxs{ 
        border-radius: 0.75*@borderRadius;
        transform: scale(0.8);
        &,&>span{ font-size: 0.75*@fontSize; padding:0 0.2*@fontSize 0;}
        &.image>span:last-child{padding:0 0.2*@fontSize 0 0*@fontSize;}
        &.image>span:first-child{padding:0 0*@fontSize 0 0.2*@fontSize;}
        &.image>img:first-child{ border-radius: 0.625*@borderRadius 0 0 0.625*@borderRadius; }
        &.image>img:last-child{ border-radius: 0 0.625*@borderRadius 0.625*@borderRadius 0; }
        &.icon>.iconfont:first-child{ font-size: 0.8*@fontSize; padding-left: 0.2*@fontSize;}
        &.icon>.iconfont:last-child{ font-size: 0.8*@fontSize; padding-right: 0.2*@fontSize;}
        &.icon>span:last-child{padding:0 0.2*@fontSize 0 0*@fontSize;}
        &.icon>span:first-child{padding:0 0*@fontSize 0 0.2*@fontSize;}
    }

    &.sy-theme{ background-color: @colorTheme; color: @colorWhite; }
    &.sy-lightTheme{ background-color: @colorLightTheme; color: @colorWhite; }
    &.sy-darkTheme{ background-color: @colorDarkTheme; color: @colorWhite; }

    &.sy-success{ background-color: @colorSuccess; color: @colorWhite; }
    &.sy-warning{ background-color: @colorWarning; color: @colorWhite; }
    &.sy-danger{ background-color: @colorDanger; color: @colorWhite; }
    &.sy-primary{ background-color: @colorPrimary; color: @colorWhite; }
    &.sy-minor{ background-color: @colorMinor; color: @colorWhite; }
    &.sy-info{ background-color: @colorInfo; color: @colorWhite; }

    &.sy-black{ background-color: @colorBlack; color: @colorWhite; }
    &.sy-lightBlack{ background-color: @colorLightBlack; color: @colorWhite; }
    &.sy-extraLightBlack{ background-color: @colorExtraLightBlack; color: @colorWhite; }
    &.sy-blue{ background-color: @colorBlue; color: @colorWhite; }
    &.sy-lightBlue{ background-color: @colorLightBlue; color: @colorWhite; }
    &.sy-extraLightBlue{ background-color: @colorExtraLightBlue; color: @colorWhite; }
    &.sy-silver{ background-color: @colorSilver; color: @colorLightBlack; }
    &.sy-lightSilver{ background-color: @colorLightSilver; color: @colorLightBlack; }
    &.sy-extraLightSilver{ background-color: @colorExtraLightSilver; color: @colorLightBlack; }
    &.sy-gray{ background-color: @colorGray; color: @colorLightBlack; }
    &.sy-lightGray{ background-color: @colorLightGray; color: @colorLightBlack; }
    &.sy-white{ background-color: @colorWhite; color: @colorLightBlack; }

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
        .sy-theme;
    }

}
</style>
