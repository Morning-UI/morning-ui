<template>
    <i-header
        :_uiid="uiid"
        :class="[sizeClass, styleClass]"
    >
        <slot></slot>
    </i-header>
</template>
 
<script>
import UI                           from 'Common/ui';

export default UI.extend({
    name : 'header'
});
</script>

<style lang="less">
@import '~Common/common.less';

i-header{
    display: block;
    margin: 0.6em 0;
    vertical-align: middle;

    small{
        vertical-align: baseline !important;
    }

    &.si-xxl{ 
        font-size: 3.2*@fontSize; 
        padding-left:1.6*@fontSize;
        border-left-width: 0.7*@fontSize;

        small{
            font-size: 1.8*@fontSize;
            margin-left:1.1*@fontSize;
        }
    }
    &.si-xl{ 
        font-size: 2.88*@fontSize; 
        padding-left:1.4*@fontSize;
        border-left-width: 0.7*@fontSize;

        small{
            font-size: 1.44*@fontSize;
            margin-left:0.9*@fontSize;
        }
    }
    &.si-l{ 
        font-size: 2.16*@fontSize; 
        padding-left:1.2*@fontSize;
        border-left-width: 0.6*@fontSize;

        small{
            font-size: 1.08*@fontSize;
            margin-left:0.7*@fontSize;
        }
    }
    &.si-m{ 
        font-size: 1.8*@fontSize; 
        padding-left:1*@fontSize;
        border-left-width: 0.5*@fontSize;

        small{
            font-size: 0.9*@fontSize;
            margin-left:0.5*@fontSize;
        }
    }
    &.si-s{ 
        font-size: 1.44*@fontSize; 
        padding-left:0.8*@fontSize;
        border-left-width: 0.3*@fontSize;

        small{
            font-size: 0.72*@fontSize;
            margin-left:0.4*@fontSize;
        }
    }
    &.si-xs{ 
        font-size: 1.26*@fontSize; 
        padding-left:0.6*@fontSize;
        border-left-width: 0.2*@fontSize;

        small{
            font-size: 0.63*@fontSize;
            margin-left:0.3*@fontSize;
        }
    }
    &.si-xxs{ 
        font-size: 1*@fontSize; 
        padding-left:0.4*@fontSize;
        border-left-width: 0.15*@fontSize;

        small{
            font-size: 0.5*@fontSize;
            margin-left:0.25*@fontSize;
        }
    }
    
    &.sy-theme{
        color: @colorTheme;

        &.mark{
            border-left-color: @colorTheme;
        }

        &.underline{
            border-bottom-color: @colorTheme;
        }

        small{
            color: lighten(@colorTheme, 15%);
        }
    }
    &.sy-lightTheme{
        color: @colorLightTheme;

        &.mark{
            border-left-color: @colorLightTheme;
        }

        &.underline{
            border-bottom-color: @colorLightTheme;
        }

        small{
            color: lighten(@colorLightTheme, 15%);
        }
    }
    &.sy-darkTheme{
        color: @colorDarkTheme;

        &.mark{
            border-left-color: @colorDarkTheme;
        }

        &.underline{
            border-bottom-color: @colorDarkTheme;
        }

        small{
            color: lighten(@colorDarkTheme, 15%);
        }
    }

    &.sy-success{
        color: @colorSuccess;

        &.mark{
            border-left-color: @colorSuccess;
        }

        &.underline{
            border-bottom-color: @colorSuccess;
        }
        
        small{
            color: darken(@colorSuccess, 5%);
        }
    }
    &.sy-warning{
        color: @colorWarning;

        &.mark{
            border-left-color: @colorWarning;
        }

        &.underline{
            border-bottom-color: @colorWarning;
        }
        
        small{
            color: darken(@colorWarning, 5%);
        }
    }
    &.sy-danger{
        color: @colorDanger;

        &.mark{
            border-left-color: @colorDanger;
        }

        &.underline{
            border-bottom-color: @colorDanger;
        }
        
        small{
            color: darken(@colorDanger, 5%);
        }
    }
    &.sy-primary{
        color: @colorPrimary;

        &.mark{
            border-left-color: @colorPrimary;
        }

        &.underline{
            border-bottom-color: @colorPrimary;
        }
        
        small{
            color: darken(@colorPrimary, 5%);
        }
    }
    &.sy-minor{
        color: @colorMinor;

        &.mark{
            border-left-color: @colorMinor;
        }

        &.underline{
            border-bottom-color: @colorMinor;
        }
        
        small{
            color: lighten(@colorMinor, 15%);
        }
    }
    &.sy-info{
        color: @colorInfo;

        &.mark{
            border-left-color: @colorInfo;
        }

        &.underline{
            border-bottom-color: @colorInfo;
        }
        
        small{
            color: darken(@colorInfo, 5%);
        }
    }

    &.sy-black{
        color: @colorBlack;

        &.mark{
            border-left-color: @colorBlack;
        }

        &.underline{
            border-bottom-color: @colorBlack;
        }
        
        small{
            color: lighten(@colorBlack, 35%)
        }
    }
    &.sy-lightBlack{
        color: @colorLightBlack;

        &.mark{
            border-left-color: @colorLightBlack;
        }

        &.underline{
            border-bottom-color: @colorLightBlack;
        }
        
        small{
            color: lighten(@colorLightBlack, 35%)
        }
    }
    &.sy-extraLightBlack{
        color: @colorExtraLightBlack;

        &.mark{
            border-left-color: @colorExtraLightBlack;
        }

        &.underline{
            border-bottom-color: @colorExtraLightBlack;
        }
        
        small{
            color: lighten(@colorExtraLightBlack, 25%)
        }
    }
    &.sy-blue{
        color: @colorBlue;

        &.mark{
            border-left-color: @colorBlue;
        }

        &.underline{
            border-bottom-color: @colorBlue;
        }
        
        small{
            color: lighten(@colorBlue, 15%)
        }
    }
    &.sy-lightBlue{
        color: @colorLightBlue;

        &.mark{
            border-left-color: @colorLightBlue;
        }

        &.underline{
            border-bottom-color: @colorLightBlue;
        }
        
        small{
            color: lighten(@colorLightBlue, 15%)
        }
    }
    &.sy-extraLightBlue{
        color: @colorExtraLightBlue;

        &.mark{
            border-left-color: @colorExtraLightBlue;
        }

        &.underline{
            border-bottom-color: @colorExtraLightBlue;
        }
        
        small{
            color: lighten(@colorExtraLightBlue, 15%)
        }
    }
    &.sy-silver{
        color: @colorSilver;

        &.mark{
            border-left-color: @colorSilver;
        }

        &.underline{
            border-bottom-color: @colorSilver;
        }
        
        small{
            color: darken(@colorSilver, 5%)
        }
    }
    &.sy-lightSilver{
        color: @colorLightSilver;

        &.mark{
            border-left-color: @colorLightSilver;
        }

        &.underline{
            border-bottom-color: @colorLightSilver;
        }
        
        small{
            color: darken(@colorLightSilver, 5%)
        }
    }
    &.sy-extraLightSilver{
        color: @colorExtraLightSilver;

        &.mark{
            border-left-color: @colorExtraLightSilver;
        }

        &.underline{
            border-bottom-color: @colorExtraLightSilver;
        }
        
        small{
            color: darken(@colorExtraLightSilver, 5%)
        }
    }
    &.sy-gray{
        color: @colorGray;

        &.mark{
            border-left-color: @colorGray;
        }

        &.underline{
            border-bottom-color: @colorGray;
        }
        
        small{
            color: darken(@colorGray, 5%)
        }
    }
    &.sy-lightGray{
        color: @colorLightGray;

        &.mark{
            border-left-color: @colorLightGray;
        }

        &.underline{
            border-bottom-color: @colorLightGray;
        }
        
        small{
            color: darken(@colorLightGray, 10%)
        }
    }
    &.sy-white{
        color: @colorWhite;

        &.mark{
            border-left-color: @colorWhite;
        }

        &.underline{
            border-bottom-color: @colorWhite;
        }
        
        small{
            color: darken(@colorWhite, 10%)
        }
    }

    &.mark{
        border-left-style: solid;
    }

    &.underline{
        border-bottom-width: 1px;
        border-bottom-style: solid;
        padding-bottom: 0.2em;
    }

    // default statement
    &{
        .si-m;
        .sy-black;
    }

}
</style>
