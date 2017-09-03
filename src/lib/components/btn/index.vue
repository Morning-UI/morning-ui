<template>
    <i-btn
        :_uiid="uiid"
        :class="[sizeClass, styleClass, stateClass]"
        :route="route"
        :link="link"
        :locked="locked"
        :newTab="newTab"
    >

    <template v-if="loading">
        <i class="morningicon">&#xe703;</i>
        <span><slot></slot></span>
    </template>
    <template v-else-if="processing">
        <i class="morningicon">&#xe703;</i>
        <span><slot></slot></span>
    </template>
    <template v-else>
        <slot></slot>
    </template>
        
    </i-btn>
</template>
 
<script>
import UI                           from 'Common/ui';

export default UI.extend({
    name : 'btn',
    props : {
        route : String,
        link : String,
        locked : Boolean,
        newTab : Boolean
    },
    methods : {
        unlock : function () {

        },
        lock : function () {

        }
    }
});
</script>

<style lang="less">
@import '~Common/common.less';

i-btn{
    display: inline-block;
    padding: 0 1.1em;
    border-radius: 0.3em;
    position: relative;
    height: 2.8em;
    line-height: 2.8em;

    &:hover{
        cursor: pointer;
    }

    &.si-xxl{
        font-size: 1.3*@fontSize;

        .morningicon{
            font-size: 1.6*@fontSize;
        }
    }

    &.si-xl{
        font-size: 1.1*@fontSize;

        .morningicon{
            font-size: 1.4*@fontSize;
        }
    }

    &.si-l{
        font-size: 1*@fontSize;

        .morningicon{
            font-size: 1.3*@fontSize;
        }
    }

    &.si-m{
        font-size: 0.8125*@fontSize;

        .morningicon{
            font-size: 1.15*@fontSize;
        }
    }

    &.si-s{
        font-size: 0.75*@fontSize;
        height: 2.6em;
        line-height: 2.6em;
        padding: 0 0.8em;

        .morningicon{
            font-size: 0.9*@fontSize;
        }
    }

    &.si-xs{
        font-size: 0.75*@fontSize;
        height: 2.2em;
        line-height: 2.2em;
        padding: 0 0.6em;

        .morningicon{
            font-size: 0.85*@fontSize;
        }
    }

    &.si-xxs{
        font-size: 0.75*@fontSize;
        height: 1.8em;
        line-height: 1.8em;
        padding: 0 0.4em;

        .morningicon{
            font-size: 0.75*@fontSize;
        }
    }
    
    &.sy-theme{
        background-color: @colorTheme;
        color: @colorWhite;

        &:not(.st-disabled):hover,
        &.st-hover{
            background-color: darken(@colorTheme, 5%);
        }

        &:not(.st-disabled):active,
        &.st-active{
            background-color: darken(@colorTheme, 10%);
            box-shadow: 0 0 5px rgba(0,0,0,0.25) inset;
        }

        &.st-disabled{
            color: lighten(@colorTheme, 30%);
        }
    }
    
    &.sy-lightTheme{
        background-color: @colorLightTheme;
        color: @colorWhite;

        &:not(.st-disabled):hover,
        &.st-hover{
            background-color: darken(@colorLightTheme, 5%);
        }

        &:not(.st-disabled):active,
        &.st-active{
            background-color: darken(@colorLightTheme, 10%);
            box-shadow: 0 0 5px rgba(0,0,0,0.25) inset;
        }
    }
    
    &.sy-darkTheme{
        background-color: @colorDarkTheme;
        color: @colorWhite;

        &:not(.st-disabled):hover,
        &.st-hover{
            background-color: darken(@colorDarkTheme, 5%);
        }

        &:not(.st-disabled):active,
        &.st-active{
            background-color: darken(@colorDarkTheme, 10%);
            box-shadow: 0 0 5px rgba(0,0,0,0.25) inset;
        }
    }

    &.sy-success{
        background-color: @colorSuccess;
        color: @colorWhite;

        &:not(.st-disabled):hover,
        &.st-hover{
            background-color: darken(@colorSuccess, 5%);
        }

        &:not(.st-disabled):active,
        &.st-active{
            background-color: darken(@colorSuccess, 10%);
            box-shadow: 0 0 5px rgba(0,0,0,0.25) inset;
        }
    }
    
    &.sy-warning{
        background-color: @colorWarning;
        color: @colorWhite;

        &:not(.st-disabled):hover,
        &.st-hover{
            background-color: darken(@colorWarning, 5%);
        }

        &:not(.st-disabled):active,
        &.st-active{
            background-color: darken(@colorWarning, 10%);
            box-shadow: 0 0 5px rgba(0,0,0,0.25) inset;
        }
    }
    
    &.sy-danger{
        background-color: @colorDanger;
        color: @colorWhite;

        &:not(.st-disabled):hover,
        &.st-hover{
            background-color: darken(@colorDanger, 5%);
        }

        &:not(.st-disabled):active,
        &.st-active{
            background-color: darken(@colorDanger, 10%);
            box-shadow: 0 0 5px rgba(0,0,0,0.25) inset;
        }
    }
    
    &.sy-primary{
        background-color: @colorPrimary;
        color: @colorWhite;

        &:not(.st-disabled):hover,
        &.st-hover{
            background-color: darken(@colorPrimary, 5%);
        }

        &:not(.st-disabled):active,
        &.st-active{
            background-color: darken(@colorPrimary, 10%);
            box-shadow: 0 0 5px rgba(0,0,0,0.25) inset;
        }
    }

    &.sy-minor{
        background-color: @colorMinor;
        color: @colorWhite;

        &:not(.st-disabled):hover,
        &.st-hover{
            background-color: darken(@colorMinor, 5%);
        }

        &:not(.st-disabled):active,
        &.st-active{
            background-color: darken(@colorMinor, 10%);
            box-shadow: 0 0 5px rgba(0,0,0,0.25) inset;
        }
    }
    
    &.sy-info{
        background-color: @colorInfo;
        color: @colorWhite;

        &:not(.st-disabled):hover,
        &.st-hover{
            background-color: darken(@colorInfo, 5%);
        }

        &:not(.st-disabled):active,
        &.st-active{
            background-color: darken(@colorInfo, 10%);
            box-shadow: 0 0 5px rgba(0,0,0,0.25) inset;
        }
    }
    
    &.sy-black{
        background-color: @colorBlack;
        color: @colorWhite;

        &:not(.st-disabled):hover,
        &.st-hover{
            background-color: darken(@colorBlack, 5%);
        }

        &:not(.st-disabled):active,
        &.st-active{
            background-color: darken(@colorBlack, 10%);
            box-shadow: 0 0 5px rgba(0,0,0,0.25) inset;
        }
    }
    
    &.sy-lightBlack{
        background-color: @colorLightBlack;
        color: @colorWhite;

        &:not(.st-disabled):hover,
        &.st-hover{
            background-color: darken(@colorLightBlack, 5%);
        }

        &:not(.st-disabled):active,
        &.st-active{
            background-color: darken(@colorLightBlack, 10%);
            box-shadow: 0 0 5px rgba(0,0,0,0.25) inset;
        }
    }
    
    &.sy-extraLightBlack{
        background-color: @colorExtraLightBlack;
        color: @colorWhite;

        &:not(.st-disabled):hover,
        &.st-hover{
            background-color: darken(@colorExtraLightBlack, 5%);
        }

        &:not(.st-disabled):active,
        &.st-active{
            background-color: darken(@colorExtraLightBlack, 10%);
            box-shadow: 0 0 5px rgba(0,0,0,0.25) inset;
        }
    }
    
    &.sy-blue{
        background-color: @colorBlue;
        color: @colorWhite;

        &:not(.st-disabled):hover,
        &.st-hover{
            background-color: darken(@colorBlue, 5%);
        }

        &:not(.st-disabled):active,
        &.st-active{
            background-color: darken(@colorBlue, 10%);
            box-shadow: 0 0 5px rgba(0,0,0,0.25) inset;
        }
    }
    
    &.sy-lightBlue{
        background-color: @colorLightBlue;
        color: @colorWhite;

        &:not(.st-disabled):hover,
        &.st-hover{
            background-color: darken(@colorLightBlue, 5%);
        }

        &:not(.st-disabled):active,
        &.st-active{
            background-color: darken(@colorLightBlue, 10%);
            box-shadow: 0 0 5px rgba(0,0,0,0.25) inset;
        }
    }
    
    &.sy-extraLightBlue{
        background-color: @colorExtraLightBlue;
        color: @colorWhite;

        &:not(.st-disabled):hover,
        &.st-hover{
            background-color: darken(@colorExtraLightBlue, 5%);
        }

        &:not(.st-disabled):active,
        &.st-active{
            background-color: darken(@colorExtraLightBlue, 10%);
            box-shadow: 0 0 5px rgba(0,0,0,0.25) inset;
        }
    }
    
    &.sy-silver{
        background-color: @colorSilver;
        color: @colorBlack;

        &:not(.st-disabled):hover,
        &.st-hover{
            background-color: darken(@colorSilver, 5%);
        }

        &:not(.st-disabled):active,
        &.st-active{
            background-color: darken(@colorSilver, 10%);
            box-shadow: 0 0 5px rgba(0,0,0,0.25) inset;
        }
    }
    
    &.sy-lightSilver{
        background-color: @colorLightSilver;
        color: @colorBlack;

        &:not(.st-disabled):hover,
        &.st-hover{
            background-color: darken(@colorLightSilver, 5%);
        }

        &:not(.st-disabled):active,
        &.st-active{
            background-color: darken(@colorLightSilver, 10%);
            box-shadow: 0 0 5px rgba(0,0,0,0.25) inset;
        }
    }
    
    &.sy-extraLightSilver{
        background-color: @colorExtraLightSilver;
        color: @colorBlack;

        &:not(.st-disabled):hover,
        &.st-hover{
            background-color: darken(@colorExtraLightSilver, 5%);
        }

        &:not(.st-disabled):active,
        &.st-active{
            background-color: darken(@colorExtraLightSilver, 10%);
            box-shadow: 0 0 5px rgba(0,0,0,0.25) inset;
        }
    }
    
    &.sy-gray{
        background-color: @colorGray;
        color: @colorBlack;

        &:not(.st-disabled):hover,
        &.st-hover{
            background-color: darken(@colorGray, 5%);
        }

        &:not(.st-disabled):active,
        &.st-active{
            background-color: darken(@colorGray, 10%);
            box-shadow: 0 0 5px rgba(0,0,0,0.25) inset;
        }
    }
    
    &.sy-lightGray{
        background-color: @colorLightGray;
        color: @colorBlack;

        &:not(.st-disabled):hover,
        &.st-hover{
            background-color: darken(@colorLightGray, 5%);
        }

        &:not(.st-disabled):active,
        &.st-active{
            background-color: darken(@colorLightGray, 10%);
            box-shadow: 0 0 5px rgba(0,0,0,0.25) inset;
        }
    }
    
    &.sy-white{
        background-color: @colorWhite;
        color: @colorBlack;

        &:not(.st-disabled):hover,
        &.st-hover{
            background-color: darken(@colorWhite, 5%);
        }

        &:not(.st-disabled):active,
        &.st-active{
            background-color: darken(@colorWhite, 10%);
            box-shadow: 0 0 5px rgba(0,0,0,0.25) inset;
        }
    }

    &.st-normal{}
    &.st-hover{}
    &.st-active{}
    &.st-disabled{
        box-shadow: 0 0 5px rgba(0,0,0,0.8) inset;
        cursor: not-allowed;
    }
    &.st-apparent{
        animation-name: apparent;
        animation-duration: 1s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;

        &:hover{
            animation-name: none;
        }
    }
    &.st-loading{
        .morningicon{
            position: absolute;
            left: ~`"calc( 50% - 0.5em )"`;
            top: ~`"calc( 50% - 0.5em )"`;
            line-height: 1em;
            animation-name: rotation;
            animation-duration: 1s;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
        }
        span{ opacity: 0; }
        &:hover{ cursor: default; }
    }
    &.st-processing{
        .st-loading;
        .morningicon{
            animation-name: rotationContrast;
        }
    }

    // default statement
    &{
        .si-m;
        .sy-theme;
        .st-normal;
    }

}
</style>
