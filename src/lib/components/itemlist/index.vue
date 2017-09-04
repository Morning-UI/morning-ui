<template>
    <i-itemlist
        :_uiid="uiid"
        :class="[sizeClass]"
    >
        <slot></slot>
    </i-itemlist>
</template>
 
<script>
import UI                           from 'Common/ui';

export default UI.extend({
    name : 'itemlist'
});
</script>

<style lang="less">
@import '~Common/var.less';

i-itemlist{
    display: block;
    vertical-align: middle;

    >i-ul{
        list-style: none;

        >li{
            font-size: 0;

            &:first-child{
                margin-top: 0;
            }

            &:last-child{
                padding-bottom: 0;
            }

            >*:not(.img){
                box-sizing: border-box;
                float: right;
                display: block;
            }

            >*:first-child:not(.img){
                width: 100%;
                ~*{
                    width: 100%;
                }
            }

            >i-img{
                float: left;

                img {
                    width: 100%;
                    height: 100%;
                }
            }

            >.title{
                font-weight: bold;
            }

            >.desc{
                margin: 0.3em 0 0 0 !important;
                color: @colorBlue;
                line-height: 1em;
            }

            >.body{
                color: @colorBlack;
                margin: 0.6em 0 0.8em 0 !important;
                line-height: 1em;
            }

            >.additional{
                color: @colorExtraLightBlue;
                line-height: 1em;
            }

            &::after{
                content:" ";
                height:0;
                display:block;
                clear:both;
            }
        }
    }

    &.underline > i-ul > li{
        border-bottom: 1px @colorGray solid;

        &:last-child{
            border-bottom: none;
        }
    }


    &.si-xxl{
        >i-ul>li{ margin-top: 0.8*@fontSize !important; padding-bottom: 0.8*@fontSize; }
        >i-ul>li>*:not(.img){ width: ~"calc(100% - " 9*@fontSize ~")"; padding: 0 6%; }
        >i-ul>li>i-img{ height: 9*@fontSize; width: 9*@fontSize; }
        >i-ul>li>.title{ font-size: 2.2*@fontSize; }
        >i-ul>li>.desc{ font-size: @fontSize; margin: 0.4em 0 0 0 !important; }
        >i-ul>li>.body{ font-size: 1.2*@fontSize; margin: 1em 0 1.2em 0 !important; }
        >i-ul>li>.additional{ font-size: 0.8125*@fontSize; }
        >i-ul>li>i-img+.title:last-child{ height: 9*@fontSize; font-size: 4.4*@fontSize; padding: 0 9%; }
        >i-ul>li>i-img+.body{ height: 9*@fontSize; font-size: 4*@fontSize; padding: 0 9%; }
    }
    &.si-xl{
        >i-ul>li{ margin-top: 0.8*@fontSize !important; padding-bottom: 0.8*@fontSize; }
        >i-ul>li>*:not(.img){ width: ~"calc(100% - " 8*@fontSize ~")"; padding: 0 5%; }
        >i-ul>li>i-img{ height: 8*@fontSize; width: 8*@fontSize; }
        >i-ul>li>.title{ font-size: 1.8*@fontSize; }
        >i-ul>li>.desc{ font-size: 0.8125*@fontSize; margin: 0.4em 0 0 0 !important; }
        >i-ul>li>.body{ font-size: @fontSize; margin: 0.8em 0 1em 0 !important; }
        >i-ul>li>.additional{ font-size: 0.8125*@fontSize; }
        >i-ul>li>i-img+.title:last-child{ height: 8*@fontSize; font-size: 3.6*@fontSize; padding: 0 8%; }
        >i-ul>li>i-img+.body{ height: 8*@fontSize; font-size: 3.2*@fontSize; padding: 0 8%; }
    }
    &.si-l{
        >i-ul>li{ margin-top: 0.6*@fontSize !important; padding-bottom: 0.6*@fontSize; }
        >i-ul>li>*:not(.img){ width: ~"calc(100% - " 7*@fontSize ~")"; padding: 0 4%; }
        >i-ul>li>i-img{ height: 7*@fontSize; width: 7*@fontSize; }
        >i-ul>li>.title{ font-size: 1.4*@fontSize; }
        >i-ul>li>.desc{ font-size: 0.8125*@fontSize; margin: 0.4em 0 0 0 !important; }
        >i-ul>li>.body{ font-size: 0.8125*@fontSize; margin: 0.8em 0 1em 0 !important; }
        >i-ul>li>.additional{ font-size: 0.8125*@fontSize; }
        >i-ul>li>i-img+.title:last-child{ height: 7*@fontSize; font-size: 3.2*@fontSize; padding: 0 7%; }
        >i-ul>li>i-img+.body{ height: 7*@fontSize; font-size: 2.8*@fontSize; padding: 0 7%; }
    }
    &.si-m{
        >i-ul>li{ margin-top: 0.5*@fontSize !important; padding-bottom: 0.5*@fontSize; }
        >i-ul>li>*:not(.img){ width: ~"calc(100% - " 6*@fontSize ~")"; padding: 0 3.5%; }
        >i-ul>li>i-img{ height: 6*@fontSize; width: 6*@fontSize; }
        >i-ul>li>.title{ font-size: 1*@fontSize; }
        >i-ul>li>.desc{ font-size: 0.75*@fontSize; }
        >i-ul>li>.body{ font-size: 0.75*@fontSize; }
        >i-ul>li>.additional{ font-size: 0.75*@fontSize; }
        >i-ul>li>i-img+.title:last-child{ height: 6*@fontSize; font-size: 2.8*@fontSize; padding: 0 6%; }
        >i-ul>li>i-img+.body{ height: 6*@fontSize; font-size: 2.4*@fontSize; padding: 0 6%; }
    }
    &.si-s{
        >i-ul>li{ margin-top: 0.4*@fontSize !important; padding-bottom: 0.4*@fontSize; }
        >i-ul>li>*:not(.img){ width: ~"calc(100% - " 5*@fontSize ~")"; padding: 0 2.5%; }
        >i-ul>li>i-img{ height: 5*@fontSize; width: 5*@fontSize; }
        >i-ul>li>.title{ font-size: 1*@fontSize; }
        >i-ul>li>.desc{ font-size: 0.75*@fontSize; }
        >i-ul>li>.body{ font-size: 0.75*@fontSize; }
        >i-ul>li>.additional{ font-size: 0.75*@fontSize; }
        >i-ul>li>i-img+.title:last-child{ height: 5*@fontSize; font-size: 2.4*@fontSize; padding: 0 5%; }
        >i-ul>li>i-img+.body{ height: 5*@fontSize; font-size: 2*@fontSize; padding: 0 5%; }
    }   
    &.si-xs{
        >i-ul>li{ margin-top: 0.3*@fontSize !important; padding-bottom: 0.3*@fontSize; }
        >i-ul>li>*:not(.img){ width: ~"calc(100% - " 4*@fontSize ~")"; padding: 0 2%; }
        >i-ul>li>i-img{ height: 4*@fontSize; width: 4*@fontSize; }
        >i-ul>li>.title{ font-size: 0.75*@fontSize; }
        >i-ul>li>.desc{ font-size: 0.75*@fontSize; margin: 0.1em 0 0 0 !important; }
        >i-ul>li>.body{ font-size: 0.75*@fontSize; margin: 0.3em 0 0.4em 0 !important; }
        >i-ul>li>.additional{ font-size: 0.6*@fontSize; }
        >i-ul>li>i-img+.title:last-child{ height: 4*@fontSize; font-size: 2*@fontSize; padding: 0 4%; }
        >i-ul>li>i-img+.body{ height: 4*@fontSize; font-size: 1.6*@fontSize; padding: 0 4%; }
    }   
    &.si-xxs{
        >i-ul>li{ margin-top: 0.2*@fontSize !important; padding-bottom: 0.2*@fontSize; }
        >i-ul>li>*:not(.img){ width: ~"calc(100% - " 3*@fontSize ~")"; padding: 0 1.5%; }
        >i-ul>li>i-img{ height: 3*@fontSize; width: 3*@fontSize; }
        >i-ul>li>.title{ font-size: 0.75*@fontSize; margin-top: -0.3em; }
        >i-ul>li>.desc{ font-size: 0.75*@fontSize; margin: 0 !important; }
        >i-ul>li>.body{ font-size: 0.75*@fontSize; margin: 0.1em 0 0.1em 0 !important; }
        >i-ul>li>.additional{ font-size: 0.75*@fontSize; }
        >i-ul>li>i-img+.title:last-child{ height: 3*@fontSize; font-size: 1.6*@fontSize; padding: 0 3%; }
        >i-ul>li>i-img+.body{ height: 3*@fontSize; font-size: 1.2*@fontSize; padding: 0 3%; }
    }

    &,
    &.si-xxl,
    &.si-xl,
    &.si-l,
    &.si-m,
    &.si-s,
    &.si-xs,
    &.si-xxs{

        >i-ul>li>i-img+.title:last-child{
            display: flex;
            margin: 0 !important;
            align-items: center;
        }
        
        >i-ul>li>i-img+.body{
            display: flex;
            margin: 0 !important;
            align-items: center;
        }

    }

    // default statement
    &{
        .si-m;
    }

}
</style>
