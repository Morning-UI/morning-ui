<template>
    <i-badge
        :_uiid="uiid"
        :class="[sizeClass, styleClass, stateClass]"
    >
        <slot></slot>
    </i-badge>
</template>
 
<script>
import UI                           from 'Common/ui';

export default UI.extend({
    name : 'badge'
});
</script>

<style lang="less">
@import '~Common/var.less';

i-badge{
    display: inline-block;
    color:#FFF;
    margin:@fontSize*0.125;
    text-align: center;
    vertical-align: middle;
    height: auto;
    line-height: 1.6em;

    &:empty{
        display:none;
    }

    &.si-xxl{ 
        font-size: @fontSize*1.4;
        padding:0 @fontSize*1;
        margin: @fontSize*0.5;

        &,
        &.flat{
            border-radius: @borderRadius*1.6;
        }

        &.circle{
            border-radius: @fontSize*1.6;
        }
    }
    &.si-xl{ 
        font-size: @fontSize*1.2; 
        padding:0 @fontSize*0.8; 
        margin: @fontSize*0.3;

        &,
        &.flat{
            border-radius: @borderRadius*1.4;
        }

        &.circle{
            border-radius: @fontSize*1.4;
        } 
    }

    &.si-l{ 
        font-size: @fontSize*1; 
        padding:0 @fontSize*0.75;  
        margin: @fontSize*0.1;

        &,
        &.flat{
            border-radius: @borderRadius*1.2;
        }

        &.circle{
            border-radius: @fontSize*1.2;
        }
    }
    &.si-m{ 
        font-size: @fontSize*0.8;
        padding:0 @fontSize*0.65;

        &,
        &.flat{
            border-radius: @borderRadius*1;
        }
        
        &.circle{
            border-radius: @fontSize;
        }
    }
    &.si-s{ 
        font-size: @fontSize*0.75; 
        padding:0 @fontSize*0.55;

        &,
        &.flat{
            border-radius: @borderRadius*0.8;
        }
        
        &.circle{
            border-radius: @fontSize*0.8;
        }
    }
    &.si-xs{ 
        font-size: @fontSize*0.75; 
        padding:0 @fontSize*0.3;

        &,
        &.flat{
            border-radius: @borderRadius*0.75;
        }
        &.circle{
            border-radius: @fontSize*0.75;
        }
    }
    &.si-xxs{ 
        font-size: @fontSize*0.75;
        padding:0 @fontSize*0.3125;
        transform: scale(0.8);

        &,
        &.flat{
            border-radius: @borderRadius*0.625;
        }

        &.circle{
            border-radius: @fontSize*0.625;
        }
    }
    
    &.sy-theme{ background-color: @colorTheme; }
    &.sy-lightTheme{ background-color: @colorLightTheme; }
    &.sy-darkTheme{ background-color: @colorDarkTheme; }

    &.sy-success{ background-color: @colorSuccess; }
    &.sy-warning{ background-color: @colorWarning; }
    &.sy-danger{ background-color: @colorDanger; }
    &.sy-primary{ background-color: @colorPrimary; }
    &.sy-minor{ background-color: @colorMinor; }
    &.sy-info{ background-color: @colorInfo; }

    &.sy-black{ background-color: @colorBlack; }
    &.sy-lightBlack{ background-color: @colorLightBlack; }
    &.sy-extraLightBlack{ background-color: @colorExtraLightBlack; }
    &.sy-blue{ background-color: @colorBlue; }
    &.sy-lightBlue{ background-color: @colorLightBlue; }
    &.sy-extraLightBlue{ background-color: @colorExtraLightBlue; }
    &.sy-silver{
        background-color: @colorSilver;
        color: @colorLightBlack;
    }
    &.sy-lightSilver{
        background-color: @colorLightSilver;
        color: @colorLightBlack;
    }
    &.sy-extraLightSilver{
        background-color: @colorExtraLightSilver;
        color: @colorLightBlack;
    }
    &.sy-gray{
        background-color: @colorGray;
        color: @colorLightBlack;
    }
    &.sy-lightGray{
        background-color: @colorLightGray;
        color: @colorLightBlack;
    }
    &.sy-white{
        background-color: @colorWhite;
        color: @colorLightBlack;
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
        .sy-theme;
        .st-normal;
    }

}
</style>
