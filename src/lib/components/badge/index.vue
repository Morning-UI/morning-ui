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
    color:#fff;
    margin:0.125*@fontSize;
    text-align: center;
    vertical-align: middle;
    height: auto;
    line-height: 1.6em;

    &:empty{
        display:none;
    }

    &.si-xxl{ 
        font-size: 1.4*@fontSize;
        padding:0 1*@fontSize;
        margin: 0.5*@fontSize;

        &,
        &.flat{
            border-radius: 1.6*@borderRadius;
        }

        &.circle{
            border-radius: 1.6*@fontSize;
        }
    }
    &.si-xl{ 
        font-size: 1.2*@fontSize; 
        padding:0 0.8*@fontSize; 
        margin: 0.3*@fontSize;

        &,
        &.flat{
            border-radius: 1.4*@borderRadius;
        }

        &.circle{
            border-radius: 1.4*@fontSize;
        } 
    }

    &.si-l{ 
        font-size: 1*@fontSize; 
        padding:0 0.75*@fontSize;  
        margin: 0.1*@fontSize;

        &,
        &.flat{
            border-radius: 1.2*@borderRadius;
        }

        &.circle{
            border-radius: 1.2*@fontSize;
        }
    }
    &.si-m{ 
        font-size: 0.8*@fontSize;
        padding:0 0.65*@fontSize;

        &,
        &.flat{
            border-radius: 1*@borderRadius;
        }
        
        &.circle{
            border-radius: @fontSize;
        }
    }
    &.si-s{ 
        font-size: 0.75*@fontSize; 
        padding:0 0.55*@fontSize;

        &,
        &.flat{
            border-radius: 0.8*@borderRadius;
        }
        
        &.circle{
            border-radius: 0.8*@fontSize;
        }
    }
    &.si-xs{ 
        font-size: 0.75*@fontSize; 
        padding:0 0.3*@fontSize;

        &,
        &.flat{
            border-radius: 0.75*@borderRadius;
        }
        &.circle{
            border-radius: 0.75*@fontSize;
        }
    }
    &.si-xxs{ 
        font-size: 0.75*@fontSize;
        padding:0 0.3125*@fontSize;
        transform: scale(0.8);

        &,
        &.flat{
            border-radius: 0.625*@borderRadius;
        }

        &.circle{
            border-radius: 0.625*@fontSize;
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
        .st-normal;
    }

}
</style>
