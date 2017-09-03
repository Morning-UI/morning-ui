<template>
    <i-statistic
        :_uiid="uiid"
        :class="[sizeClass, styleClass, stateClass]"
    >
        <slot></slot>
    </i-statistic>
</template>
 
<script>
import UI                           from 'Common/ui';

export default UI.extend({
    name : 'statistic'
});
</script>

<style lang="less">
@import '~Common/common.less';

i-statistic{
    display: inline-block;
    padding: 0 0.4em;
    text-align: center;
    vertical-align: middle;
    
    .value+.label{ margin-top: 0.3em; }
    .label+.value{ margin-top: 0.3em; }

    .value,
    .value>span{ line-height: 1em; height: 1em;  }
    .value>span{ display: inline-block; vertical-align: top !important; }
    .value i{ font-size: inherit; vertical-align: top !important; line-height: 1em; height: 1em; margin-right: 0.1em; }
    .value img{ vertical-align: baseline !important; margin-right: 0.25em; }

    &.horizon .label,
    &.horizon .value{
        display:inline-block;
    }

    &.horizon{
        .label:last-child{
            margin-top: 0;
            margin-left: 0.2em;
        }
        .value{
            margin-top: 0;
        }
    }

    &.horizon {
        .label:first-child{
            margin-top: 0.2em;
            margin-left: 0;
        }
        .value{
            margin-top: 0;
        }
    }
    
    &.si-xxl {
        .value{
            font-size: 3*@fontSize;

            img {
                height: 3*@fontSize;
            }
        }
        .label{
            font-size: 1.4*@fontSize;
        }
    }
    &.si-xl {
        .value{
            font-size: 2.4*@fontSize;

            img {
                height: 2.4*@fontSize;
            }
        }
        .label{
            font-size: 1.3*@fontSize;
        }
    }
    &.si-l {
        .value{
            font-size: 2*@fontSize;

            img {
                height: 2*@fontSize;
            }
        }
        .label{
            font-size: 1*@fontSize;
        }
    }
    &.si-m {
        .value{
            font-size: 1.8*@fontSize;

            img {
                height: 1.8*@fontSize;
            }
        }
        .label{
            font-size: 0.8125*@fontSize;
        }
    }
    &.si-s {
        .value{
            font-size: 1.6*@fontSize;

            img {
                height: 1.6*@fontSize;
            }
        }
        .label{
            font-size: 0.8125*@fontSize;
        }
    }
    &.si-xs {
        .value{
            font-size: 1.4*@fontSize;

            img {
                height: 1.4*@fontSize;
            }
        }
        .label{
            font-size: 0.75*@fontSize;
        }
    }
    &.si-xxs {
        .value{
            font-size: 1.2*@fontSize;

            img {
                height: 1.2*@fontSize;
            }
        }
        .label{
            font-size: 0.75*@fontSize;
        }
    }

    &.sy-theme{ 
        .value{ color: @colorTheme; }
        .label{ color: lighten(@colorTheme, 10%); }
    }
    &.sy-lightTheme{ 
        .value{ color: @colorLightTheme; }
        .label{ color: lighten(@colorLightTheme, 10%); }
    }
    &.sy-darkTheme{ 
        .value{ color: @colorDarkTheme; }
        .label{ color: lighten(@colorDarkTheme, 10%); }
    }

    &.sy-success{ 
        .value{ color: @colorSuccess; }
        .label{ color: darken(@colorSuccess, 6%); }
    }
    &.sy-warning{ 
        .value{ color: @colorWarning; }
        .label{ color: darken(@colorWarning, 6%); }
    }
    &.sy-danger{ 
        .value{ color: @colorDanger; }
        .label{ color: darken(@colorDanger, 6%); }
    }
    &.sy-primary{ 
        .value{ color: @colorPrimary; }
        .label{ color: darken(@colorPrimary, 6%); }
    }
    &.sy-minor{ 
        .value{ color: @colorMinor; }
        .label{ color: darken(@colorMinor, 6%); }
    }
    &.sy-info{ 
        .value{ color: @colorInfo; }
        .label{ color: darken(@colorInfo, 6%); }
    }

    &.sy-black{ 
        .value{ color: @colorBlack; }
        .label{ color: lighten(@colorBlack, 30%); }
    }
    &.sy-lightBlack{ 
        .value{ color: @colorLightBlack; }
        .label{ color: lighten(@colorLightBlack, 30%); }
    }
    &.sy-extraLightBlack{ 
        .value{ color: @colorExtraLightBlack; }
        .label{ color: lighten(@colorExtraLightBlack, 30%); }
    }
    &.sy-blue{ 
        .value{ color: @colorBlue; }
        .label{ color: lighten(@colorBlue, 20%); }
    }
    &.sy-lightBlue{ 
        .value{ color: @colorLightBlue; }
        .label{ color: lighten(@colorLightBlue, 20%); }
    }
    &.sy-extraLightBlue{ 
        .value{ color: @colorExtraLightBlue; }
        .label{ color: lighten(@colorExtraLightBlue, 20%); }
    }
    &.sy-silver{ 
        .value{ color: @colorSilver; }
        .label{ color: darken(@colorSilver, 5%); }
    }
    &.sy-lightSilver{ 
        .value{ color: @colorLightSilver; }
        .label{ color: darken(@colorLightSilver, 5%); }
    }
    &.sy-extraLightSilver{ 
        .value{ color: @colorExtraLightSilver; }
        .label{ color: darken(@colorExtraLightSilver, 5%); }
    }
    &.sy-gray{ 
        .value{ color: @colorGray; }
        .label{ color: darken(@colorGray, 5%); }
    }
    &.sy-lightGray{ 
        .value{ color: @colorLightGray; }
        .label{ color: darken(@colorLightGray, 5%); }
    }
    &.sy-white{ 
        .value{ color: @colorWhite; }
        .label{ color: darken(@colorWhite, 5%); }
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
        .si-m;
        .sy-black;
        .st-normal;
    }

}
</style>
