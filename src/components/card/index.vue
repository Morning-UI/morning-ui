<template>
    <i-card
        :_uiid="uiid"
        :class="[styleClass]"
    >
        <slot></slot>
    </i-card>
</template>
 
<script>
import UI                           from 'Common/ui';

export default UI.extend({
    name : 'card'
});
</script>

<style lang="less">
@import '~Common/common.less';

i-card{
    width: 100%;
    height: 100%;
    display: block;
    box-sizing: border-box;
    box-shadow: 0 0 @borderRadius rgba(0, 0, 0, 0.2);
    border-radius: @borderRadius;
    padding: 1em;
    position: relative;

    &>header{
        line-height: 1.5em;
        position: absolute;
        height: auto;
        left: 0;
        top: 0;
        right: 0;
        padding: 0.5em 1em;
        border-radius: @borderRadius @borderRadius 0 0;
        font-size: 0.875*@fontSize;
    }

    &.sy-theme{ &>header { background-color: @colorTheme; color: @colorWhite; } }
    &.sy-lightTheme{ &>header { background-color: @colorLightTheme; color: @colorWhite; } }
    &.sy-darkTheme{ &>header { background-color: @colorDarkTheme; color: @colorWhite; } }

    &.sy-success{ &>header { background-color: @colorSuccess; } }
    &.sy-warning{ &>header { background-color: @colorWarning; color: @colorWhite; } }
    &.sy-danger{ &>header { background-color: @colorDanger; color: @colorWhite; } }
    &.sy-primary{ &>header { background-color: @colorPrimary; color: @colorWhite; } }
    &.sy-minor{ &>header { background-color: @colorMinor; color: @colorWhite; } }
    &.sy-info{ &>header { background-color: @colorInfo; color: @colorWhite; } }

    &.sy-black{ &>header { background-color: @colorBlack; color: @colorWhite; } }
    &.sy-lightBlack{ &>header { background-color: @colorLightBlack; color: @colorWhite; } }
    &.sy-extraLightBlack{ &>header { background-color: @colorExtraLightBlack; color: @colorWhite; } }
    &.sy-blue{ &>header { background-color: @colorBlue; color: @colorWhite; } }
    &.sy-lightBlue{ &>header { background-color: @colorLightBlue; color: @colorWhite; } }
    &.sy-extraLightBlue{ &>header { background-color: @colorExtraLightBlue; color: @colorWhite; } }
    &.sy-silver{ &>header { background-color: @colorSilver; color: @colorLightBlack; } }
    &.sy-lightSilver{ &>header { background-color: @colorLightSilver; color: @colorLightBlack; } }
    &.sy-extraLightSilver{ &>header { background-color: @colorExtraLightSilver; color: @colorLightBlack; } }
    &.sy-gray{ &>header { background-color: @colorGray; color: @colorLightBlack; } }
    &.sy-lightGray{ &>header { background-color: @colorLightGray; color: @colorLightBlack; } }
    &.sy-white{ &>header { background-color: @colorWhite; color: @colorLightBlack; } }

    &>div{
        padding: 0;
        box-sizing: border-box;
        width: 100%;
        height: 100%;
    }
    
    &.full,
    &.full>div{
        padding: 0;
    }

    &>header+div{
        padding-top: 2.2em;
    }

    &.full>header+div{
        padding-top: 2.2em;
    }

    // default statement
    &{
        .sy-theme;
    }

}
</style>
