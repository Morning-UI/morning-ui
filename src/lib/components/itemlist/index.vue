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
                font-weight: 700;
            }

            >.desc{
                margin: 0.3em 0 0 !important;
                color: @colorBlue;
                line-height: 1em;
            }

            >.body{
                color: @colorBlack;
                margin: 0.6em 0 0.8em !important;
                line-height: 1em;
            }

            >.additional{
                color: @colorExtraLightBlue;
                line-height: 1em;
            }

            &::after{
                content:' ';
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
        >i-ul>li{
			margin-top: @fontSize*0.8 !important;
			padding-bottom: @fontSize*0.8;
        }
        >i-ul>li>*:not(.img){
			width: ~'calc(100% - ' @fontSize*9 ~')';
            padding: 0 6%;
        }
        >i-ul>li>i-img{
            height: @fontSize*9;
            width: @fontSize*9;
        }
        >i-ul>li>.title{
            font-size: @fontSize*2.2;
        }
        >i-ul>li>.desc{
            font-size: @fontSize;
            margin: 0.4em 0 0 !important; 
        }
        >i-ul>li>.body{
            font-size: @fontSize*1.2;
            margin: 1em 0 1.2em !important; 
        }
        >i-ul>li>.additional{
            font-size: @fontSize*0.8125; 
        }
        >i-ul>li>i-img+.title:last-child{
            height: @fontSize*9;
            font-size: @fontSize*4.4;
            padding: 0 9%; 
        }
        >i-ul>li>i-img+.body{
            height: @fontSize*9;
            font-size: @fontSize*4;
            padding: 0 9%; 
        }
    }
    &.si-xl{
        >i-ul>li{
			margin-top: @fontSize*0.8 !important;
			padding-bottom: @fontSize*0.8;
        }
        >i-ul>li>*:not(.img){
			width: ~'calc(100% - ' @fontSize*8 ~')'; 
            padding: 0 5%;
        }
        >i-ul>li>i-img{
			height: @fontSize*8; 
            width: @fontSize*8;
        }
        >i-ul>li>.title{ 
            font-size: @fontSize*1.8;
        }
        >i-ul>li>.desc{ 
            font-size: @fontSize*0.8125; 
            margin: 0.4em 0 0 !important;
        }
        >i-ul>li>.body{ 
            font-size: @fontSize; 
            margin: 0.8em 0 1em !important;
        }
        >i-ul>li>.additional{ 
            font-size: @fontSize*0.8125;
        }
        >i-ul>li>i-img+.title:last-child{ 
            height: @fontSize*8; 
            font-size: @fontSize*3.6; 
            padding: 0 8%;
        }
        >i-ul>li>i-img+.body{ 
            height: @fontSize*8; 
            font-size: @fontSize*3.2; 
            padding: 0 8%;
        }
    }
    &.si-l{
        >i-ul>li{
			margin-top: @fontSize*0.6 !important;
			padding-bottom: @fontSize*0.6;
        }
        >i-ul>li>*:not(.img){
			width: ~'calc(100% - ' @fontSize*7 ~')';
            padding: 0 4%;
        }
        >i-ul>li>i-img{
            height: @fontSize*7;
            width: @fontSize*7;
        }
        >i-ul>li>.title{
            font-size: @fontSize*1.4;
        }
        >i-ul>li>.desc{
            font-size: @fontSize*0.8125;
            margin: 0.4em 0 0 !important;
        }
        >i-ul>li>.body{
            font-size: @fontSize*0.8125;
            margin: 0.8em 0 1em !important;
        }
        >i-ul>li>.additional{
            font-size: @fontSize*0.8125; 
        }
        >i-ul>li>i-img+.title:last-child{
            height: @fontSize*7;
            font-size: @fontSize*3.2;
            padding: 0 7%; 
        }
        >i-ul>li>i-img+.body{
            height: @fontSize*7;
            font-size: @fontSize*2.8;
            padding: 0 7%; 
        }
    }
    &.si-m{
        >i-ul>li{
			margin-top: @fontSize*0.5 !important;
			padding-bottom: @fontSize*0.5;
        }
        >i-ul>li>*:not(.img){
			width: ~'calc(100% - ' @fontSize*6 ~')';
            padding: 0 3.5%;
        }
        >i-ul>li>i-img{
            height: @fontSize*6;
            width: @fontSize*6;
        }
        >i-ul>li>.title{
            font-size: @fontSize*1;
        }
        >i-ul>li>.desc{
            font-size: @fontSize*0.75;
        }
        >i-ul>li>.body{
            font-size: @fontSize*0.75;
        }
        >i-ul>li>.additional{
			font-size: @fontSize*0.75;
        }
        >i-ul>li>i-img+.title:last-child{
            height: @fontSize*6;
            font-size: @fontSize*2.8;
            padding: 0 6%;
        }
        >i-ul>li>i-img+.body{
            height: @fontSize*6;
            font-size: @fontSize*2.4;
            padding: 0 6%;
        }
    }
    &.si-s{
        >i-ul>li{
			margin-top: @fontSize*0.4 !important;
			padding-bottom: @fontSize*0.4;
        }
        >i-ul>li>*:not(.img){
			width: ~'calc(100% - ' @fontSize*5 ~')';
            padding: 0 2.5%;
        }
        >i-ul>li>i-img{
			height: @fontSize*5;
            width: @fontSize*5;
        }
        >i-ul>li>.title{
			font-size: @fontSize*1;
        }
        >i-ul>li>.desc{
			font-size: @fontSize*0.75;
        }
        >i-ul>li>.body{
			font-size: @fontSize*0.75;
        }
        >i-ul>li>.additional{
			font-size: @fontSize*0.75;
        }
        >i-ul>li>i-img+.title:last-child{
			height: @fontSize*5;
            font-size: @fontSize*2.4;
            padding: 0 5%;
        }
        >i-ul>li>i-img+.body{
			height: @fontSize*5;
            font-size: @fontSize*2;
            padding: 0 5%;
        }
    }   
    &.si-xs{
        >i-ul>li{
			margin-top: @fontSize*0.3 !important;
			padding-bottom: @fontSize*0.3;
        }
        >i-ul>li>*:not(.img){
			width: ~'calc(100% - ' @fontSize*4 ~')';
            padding: 0 2%;
        }
        >i-ul>li>i-img{
			height: @fontSize*4;
            width: @fontSize*4;
        }
        >i-ul>li>.title{
			font-size: @fontSize*0.75;
        }
        >i-ul>li>.desc{
			font-size: @fontSize*0.75;
            margin: 0.1em 0 0 !important;
        }
        >i-ul>li>.body{
			font-size: @fontSize*0.75;
            margin: 0.3em 0 0.4em !important;
        }
        >i-ul>li>.additional{
			font-size: @fontSize*0.6; }
        >i-ul>li>i-img+.title:last-child{
			height: @fontSize*4;
            font-size: @fontSize*2;
            padding: 0 4%;
        }
        >i-ul>li>i-img+.body{
			height: @fontSize*4;
            font-size: @fontSize*1.6;
            padding: 0 4%;
        }
    }   
    &.si-xxs{
        >i-ul>li{
			margin-top: @fontSize*0.2 !important;
			padding-bottom: @fontSize*0.2;
        }
        >i-ul>li>*:not(.img){
			width: ~'calc(100% - ' @fontSize*3 ~')';
            padding: 0 1.5%;
        }
        >i-ul>li>i-img{
			height: @fontSize*3;
            width: @fontSize*3;
        }
        >i-ul>li>.title{
			font-size: @fontSize*0.75;
            margin-top: -0.3em;
        }
        >i-ul>li>.desc{
			font-size: @fontSize*0.75;
            margin: 0 !important;
        }
        >i-ul>li>.body{
			font-size: @fontSize*0.75;
            margin: 0.1em 0 !important;
        }
        >i-ul>li>.additional{
			font-size: @fontSize*0.75;
        }
        >i-ul>li>i-img+.title:last-child{
			height: @fontSize*3;
            font-size: @fontSize*1.6; padding: 0 3%;
        }
        >i-ul>li>i-img+.body{
			height: @fontSize*3;
            font-size: @fontSize*1.2; padding: 0 3%;
        }
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
