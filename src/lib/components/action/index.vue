<template>
    <i-action
        :_uiid="uiid"
        :class="[sizeClass, styleClass]"
    >
        <slot></slot>
    </i-action>
</template>
 
<script>
import UI                           from 'Common/ui';

export default UI.extend({
    name : 'action'
});
</script>

<style lang="less">
@import '~Common/var.less';

i-action{
    display: block;
    margin-top: @fontSize;
    vertical-align: middle;

    &:first-child{
        margin-top: 0;
    }
    >.title{
        width: 60%;
        display: inline-block;
        vertical-align: middle;
        margin-right: -5px;
        h5{
            margin: 0;
            font-weight: 400;
        }
        .note{
            color: lighten(@colorBlack, 60%);
            line-height: 1.4em;
            width: 80%;
        }
    }
    >.action{
        width: 40%;
        display: inline-block;
        vertical-align: middle;
        font-size: @fontSize;
        padding: 0.35em 0;

        &>*{
            margin-right: 0.5em;

            &:last-child{
                margin-right: 0;
            }
        }
    }

    &.vertical{
        display: block;
        >.title{
            width: 100%;
        }
        >.action{
            display: block;
            margin: 0;
            width: 100%;
        }
    }

    &.si-xxl{
        margin-top: @fontSize*1.6;
        
        .title h5{
            font-size: @fontSize*1.6;
        }
        .title .note{
            font-size: @fontSize*1.2;
        }
    }

    &.si-xl{
        margin-top: @fontSize*1.4;
        
        .title h5{
            font-size: @fontSize*1.4;
        }
        .title .note{
            font-size: @fontSize*1.1;
        }
    }

    &.si-l{
        margin-top: @fontSize*1;
        
        .title h5{
            font-size: @fontSize*1.2;
        }
        .title .note{
            font-size: @fontSize*1;
        }
    }

    &.si-m{
        margin-top: @fontSize*0.9;
        
        .title h5{
            font-size: @fontSize*1;
        }
        .title .note{
            font-size: @fontSize*0.8125;
        }
    }

    &.si-s{
        margin-top: @fontSize*0.8;
        
        .title h5{
            font-size: @fontSize*0.8125;
        }
        .title .note{
            font-size: @fontSize*0.75;
        }
    }

    &.si-xs{
        margin-top: @fontSize*0.6;
        
        .title h5{
            font-size: @fontSize*0.75;
        }
        .title .note{
            font-size: @fontSize*0.75;
        }
    }

    &.si-xxs{
        margin-top: @fontSize*0.4;
        
        .title h5{
            font-size: @fontSize*0.75;
        }
        .title .note{
            font-size: @fontSize*0.75;
        }
    }

    &.sy-theme {
        .title h5{
            color: @colorTheme;
        }
    }
    &.sy-lightTheme {
        .title h5{
            color: @colorLightTheme;
        }
    }
    &.sy-darkTheme {
        .title h5{
            color: @colorDarkTheme;
        }
    }

    &.sy-success { .title h5{ color: @colorSuccess; } }
    &.sy-warning { .title h5{ color: @colorWarning; } }
    &.sy-danger { .title h5{ color: @colorDanger; } }
    &.sy-primary { .title h5{ color: @colorPrimary; } }
    &.sy-minor { .title h5{ color: @colorMinor; } }
    &.sy-info { .title h5{ color: @colorInfo; } }
    
    &.sy-black { .title h5{ color: @colorBlack; } }
    &.sy-lightBlack { .title h5{ color: @colorLightBlack; } }
    &.sy-extraLightBlack { .title h5{ color: @colorExtraLightBlack; } }
    &.sy-blue { .title h5{ color: @colorBlue; } }
    &.sy-lightBlue { .title h5{ color: @colorLightBlue; } }
    &.sy-extraLightBlue { .title h5{ color: @colorExtraLightBlue; } }
    &.sy-silver { .title h5{ color: @colorSilver; } }
    &.sy-lightSilver { .title h5{ color: @colorLightSilver; } }
    &.sy-extraLightSilver { .title h5{ color: @colorExtraLightSilver; } }
    &.sy-gray { .title h5{ color: @colorGray; } }
    &.sy-lightGray { .title h5{ color: @colorLightGray; } }
    &.sy-white { .title h5{ color: @colorWhite; } }

    // &[light] .note { color: lighten(@deepColor, 80%); }
    
    // default statement
    &{
        .si-m;
        .sy-black;
    }

}
</style>
