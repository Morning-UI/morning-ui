<template>
    <i-dialog
        :_uiid="uiid"
        :class="[styleClass, moreClass]"

        :width="width"
        :height="height"
        :auto-close="autoClose"
        :show-type="showType"

        @click="_onClick"
    >

    <div class="mask"></div>
    <div
        class="content"
        :style="{width: conf.width, height: conf.height}"
    >
        <slot name="header"></slot>
        <div class="body"><slot></slot></div>
        <slot name="footer"></slot>
    </div>
        
    </i-dialog>
</template>
 
<script>
import UI                           from 'Common/ui';
import PopupManager                 from 'Utils/PopupManager';

const rmIndexTimeout = 120;

export default UI.extend({
    name : 'dialog',
    mixins : [PopupManager],
    props : {
        width : {
            type : String,
            default : '50%'
        },
        height : {
            type : String,
            default : '50%'
        },
        autoClose : {
            type : Boolean,
            default : true
        },
        showType : {
            type : String,
            default : 'top'
        }
    },
    data : function () {

        return {
            conf : {
                width : this.width,
                height : this.height,
                autoClose : this.autoClose,
                showType : this.showType
            },
            data : {
                show : false,
                hasHeader : false,
                hasFooter : false
            }
        };

    },
    computed : {
        moreClass : function () {

            return {
                hasHeader : this.data.hasHeader,
                hasFooter : this.data.hasFooter,
                showTop : (this.conf.showType === 'top'),
                showCenter : (this.conf.showType === 'center'),
                showNoAnimate : (this.conf.showType === 'no')
            };

        }
    },
    methods : {
        _onClick : function (evt) {

            let $content = this.$el.querySelector('.content');

            if (this.conf.autoClose &&
                evt.path.indexOf($content) === -1) {

                this.toggle();

            }

        },
        _isShown : function () {

            return (this.$el.classList.value.split(' ').indexOf('show') !== -1);

        },
        toggle : function (show) {

            let isShown = this._isShown();

            if ( show === undefined ) {

                show = !this.data.show;

            }

            this.data.show = !!show;

            if ( this.data.show ) {

                if (!isShown) {

                    this._popupShow();

                    setTimeout(() =>{

                        this.$el.classList.add('show');

                    });

                }

                this.$emit('show');
                this.$emit('emit');
                
            } else {

                if (isShown) {

                    this.$el.classList.remove('show');

                    setTimeout(() => {

                        this._popupHide();

                    }, rmIndexTimeout);

                }

                this.$emit('hide');
                this.$emit('emit');
            
            }

        }

    },
    mounted : function () {

        if (this.$slots.header) {

            this.data.hasHeader = true;

        }

        if (this.$slots.footer) {

            this.data.hasFooter = true;

        }

    }
});
</script>

<style lang="less">
@import '~Common/var.less';

@footerHeight: 50px;
@headerHeight: 50px;

i-dialog{
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    position: fixed;
    z-index: 999;
    overflow: hidden;
    pointer-events: none;
    visibility: hidden;
    transition: 0.3s;

    >.mask{
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        background-color: rgba(0,0,0,0.7);
        opacity: 0;
        transition: 0.2s;
        pointer-events: none;
    }


    >.content{
        width: 50%;
        height: 50%;
        position: absolute;
        left: 50%;
        background-color: #fff;
        box-sizing: border-box;

        >.body{
            position: absolute;
            overflow: auto;
            top: 0;
            bottom: 0;
            width: 100%;
            box-sizing: border-box;
            padding: @fontSize;
        }

        >header{
            font-size: @fontSize;
            line-height: @headerHeight;
            height: @headerHeight;
            width: 100%;
            padding: 0 1.5em;
            box-sizing: border-box;
            position: relative;

            &:empty{
                display: none;
            }
            
            >h1{
                font-size: @fontSize;
                margin: 0;
                padding: 0;
                font-weight: normal;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
            }

            >i-link{
                position: absolute;
                top: 0;
                right: 1.5em;
                line-height: 3em;
                height: 3em;
                font-size: initial;
            }

            >i-link>.iconfont{
                font-size: initial;
            }
        }

        >footer{
            font-size: 0.8125*@fontSize;
            line-height: @footerHeight;;
            height: @footerHeight;;
            width: 100%;
            background: @colorExtraLightSilver;
            color: @colorBlue;
            padding: 0 1.5em;
            box-sizing: border-box;
            position: absolute;
            bottom: 0;

            &:empty{
                display: none;
            }
            
            >div{
                position: absolute;
                right: 1em;
                top: 0;

                >*{
                    margin-left: 0.2em;
                }
            }
        }
    }

    &.hasFooter>.content>.body{
        bottom: @footerHeight;
    }
    &.hasHeader>.content>.body{
        top: @headerHeight;
    }

    &.showTop{
        >.content{
            top: 0;
            transform: translateX(-50%) translateY(-100%) scale(1);
            opacity: 1;
            height: 200px;
            transition: 0.2s;
        }

        &.show{
            >.content{
                top: 3%;
                transform: translateX(-50%) translateY(0%) scale(1);
            }
        }
    }

    &.showCenter{
        >.content{
            top: 50%;
            transform: translateX(-50%) translateY(-50%) scale(0.3);
            opacity: 0;
            transition: 0.26s;
        }

        &.show{
            >.content{
                transform: translateX(-50%) translateY(-50%) scale(1);
                opacity: 1;
            }
        }
    }

    &.showNoAnimate{
        >.mask{
            transition: 0s;
        }
        
        >.content{
            top: 50%;
            transform: translateX(-50%) translateY(-50%);
            opacity: 0;
            transition: 0s;
        }

        &.show{
            >.content{
                opacity: 1;
            }
        }
    }

    &.show{
        pointer-events: auto;
        visibility: visible;

        >.mask{
            opacity: 1;
        }
    }

    &.sy-theme {
        >.content>header{
            background-color: @colorTheme;
            color: @colorWhite;
        }
    }
    &.sy-lightTheme {
        >.content>header{
            background-color: @colorLightTheme;
            color: @colorWhite;
        }
    }
    &.sy-darkTheme {
        >.content>header{
            background-color: @colorDarkTheme;
            color: @colorWhite;
        }
    }

    &.sy-success {
        >.content>header{
            background-color: @colorSuccess;
            color: @colorWhite;
        }
    }
    &.sy-warning {
        >.content>header{
            background-color: @colorWarning;
            color: @colorWhite;
        }
    }
    &.sy-danger {
        >.content>header{
            background-color: @colorDanger;
            color: @colorWhite;
        }
    }
    &.sy-primary {
        >.content>header{
            background-color: @colorPrimary;
            color: @colorWhite;
        }
    }
    &.sy-minor {
        >.content>header{
            background-color: @colorMinor;
            color: @colorWhite;
        }
    }
    &.sy-info {
        >.content>header{
            background-color: @colorInfo;
            color: @colorWhite;
        }
    }

    &.sy-black {
        >.content>header{
            background-color: @colorBlack;
            color: @colorWhite;
        }
    }
    &.sy-lightBlack {
        >.content>header{
            background-color: @colorLightBlack;
            color: @colorWhite;
        }
    }
    &.sy-extraLightBlack {
        >.content>header{
            background-color: @colorExtraLightBlack;
            color: @colorWhite;
        }
    }
    &.sy-blue {
        >.content>header{
            background-color: @colorBlue;
            color: @colorWhite;
        }
    }
    &.sy-lightBlue {
        >.content>header{
            background-color: @colorLightBlue;
            color: @colorWhite;
        }
    }
    &.sy-extraLightBlue {
        >.content>header{
            background-color: @colorExtraLightBlue;
            color: @colorWhite;
        }
    }
    &.sy-silver {
        >.content>header{
            background-color: @colorSilver;
            color: @colorLightBlack;
        }
    }
    &.sy-lightSilver {
        >.content>header{
            background-color: @colorLightSilver;
            color: @colorLightBlack;
        }
    }
    &.sy-extraLightSilver {
        >.content>header{
            background-color: @colorExtraLightSilver;
            color: @colorLightBlack;
        }
    }
    &.sy-gray {
        >.content>header{
            background-color: @colorGray;
            color: @colorLightBlack;
        }
        >.content>footer{
            background-color: @colorLightGray;
        }
    }
    &.sy-lightGray {
        >.content>header{
            background-color: @colorLightGray;
            color: @colorLightBlack;
        }
        >.content>footer{
            background-color: @colorLightGray;
        }
    }
    &.sy-white {
        >.content>header{
            background-color: @colorWhite;
            color: @colorLightBlack;
        }
        >.content>footer{
            background-color: @colorLightGray;
        }
    }

    // default statement
    &{
        .sy-theme;
    }

}
</style>
