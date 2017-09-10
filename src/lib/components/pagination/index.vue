<template>
    <i-pagination
        :_uiid="uiid"
        :class="[sizeClass, styleClass]"

        :link="link"
        :locked="locked"
        :new-tab="newTab"

        @click="_onClick"
    >

    <template v-if="conf.state === 'loading'">
        <i class="morningicon">&#xe703;</i>
        <span><slot></slot></span>
    </template>
    <template v-else-if="conf.state === 'processing'">
        <i class="morningicon">&#xe703;</i>
        <span><slot></slot></span>
    </template>
    <template v-else>
        <slot></slot>
    </template>
        
    </i-pagination>
</template>
 
<script>
import UI                           from 'Common/ui';

export default UI.extend({
    name : 'btn',
    props : {
        link : {
            type : String,
            default : ''
        },
        locked : {
            type : [Boolean, Number],
            default : false
        },
        newTab : {
            type : Boolean,
            default : false
        }
    },
    data : function () {

        return {
            conf : {
                link : this.link,
                locked : this.locked,
                newTab : this.newTab
            },
            data : {
                lock : false,
                lastState : null
            }
        };

    },
    methods : {
        _onClick : function (evt) {

            if ( this.state !== 'disabled' &&
                 !this.data.lock ) {

                this.$emit('emit');

            }
    
        },
        unlock : function () {

            this.data.lock = false;
            this.conf.state = this.data.lastState;

        },
        lock : function (time) {

            if (this.data.lock !== true) {
                
                this.data.lastState = this.conf.state;
    
            }

            this.data.lock = true;
            this.conf.state = 'loading';

            if ( time ) {

                setTimeout(() => {

                    if (this.data.lock) {
                    
                        this.unlock();
                    
                    }

                }, +time);

            }

        }
    },
    created : function () {
        
    },
    mounted : function () {

        this.data.lastState = this.conf.state;

        if ( typeof this.locked === 'number' ) {

            this.lock( +this.locked );

        } else if ( this.locked === true ) {

            this.lock();

        }

        this.$on('emit', () => {

            if (this.conf.link) {

                if ( this.conf.newTab ) {

                    window.open(this.conf.link);

                } else {

                    window.location.href = this.conf.link;

                }

            }

        });

    }
});
</script>

<style lang="less">
@import '~Common/var.less';

i-pagination{
    display: inline-block;
    vertical-align: top !important;
    text-align: center;

    >.pageContent{
        margin-bottom: 1em;
    }

    >.pagination{
        font-size: 0;

        >a{
            display: inline-block;
            vertical-align: middle;
            padding: 0 0.8em;
            background-color: @colorLightGray !important;
            cursor: pointer;
            line-height: 2.4em;
            height: 2.4em;
            color: @colorBlue !important;
            text-decoration: none !important;

            &.ignore{
                cursor: default;
                line-height: 1.8em;
                padding: 0 0.2em;
            }

            .iconfont{
                font-size: 0.8125*@fontSize;
                vertical-align: top !important;
            }

            &.prev,
            &.next{
                padding: 0 0.6em;
            }

            &:not(:first-child){ border-left: none; }

           /* &[disabled]{ opacity: 0; } */

            &:first-child{
                border-top-left-radius: @borderRadius;
                border-bottom-left-radius: @borderRadius;
            } 
            &:last-child{
                border-top-right-radius: @borderRadius;
                border-bottom-right-radius: @borderRadius;
            }

            &:not(.current):not(.ignore):hover{
                text-decoration: none !important;
                background-color: @colorGray !important;
                color: @colorExtraLightBlack !important;
            }

            &:not(.current):not(.ignore):active{
                box-shadow: 0 0 2px rgba(0,0,0,0.15) inset;
                color: @colorLightBlack !important;
            }

            &:not(.ignore).current{
                cursor: default;
            }
        }

        >.pageJump{
            display:inline-block;
            position: relative;
            vertical-align: top !important;
            margin-left: 2px;

            >.pageNum {
                position: relative;
                z-index: 2;
                outline: none;
                -webkit-appearance: none;
                border-top-right-radius: @borderRadius;
                border-bottom-right-radius: @borderRadius;

                &:focus{
                    border-color: @colorBlue;
                    color: @colorBlack !important;
                }

                >input {
                    vertical-align: top !important;
                    border: 1px solid colorLightGray; 
                    padding: 0 0.8em;
                    line-height: 2.4em;
                    height: 2.4em;
                    color: @colorBlack;
                    border-top-left-radius: 0;
                    border-bottom-left-radius: 0;
                }
            }

            >i {     
                position: absolute;
                top: 0;
                right: @borderRadius;
                z-index: 10;    
                width: 24px;
                color: @colorGray;
                cursor: pointer;

                &:hover{
                    color: @colorLightBlack;
                }
            }
        }
    }

// TODO
    &[xl]>.pagination>.pageJump>.pageNum>input{ font-size: 1.2*@fontSize; width: 4.5em; }
    &[l]>.pagination>.pageJump>.pageNum>input{ font-size: 1.1*@fontSize; width: 4.5em; }
    &>.pagination>.pageJump>.pageNum>input,&[m]>.pagination>pageJump>#pageNum>input{ font-size: 1*@fontSize; width: 4.5em; }
    &[s]>.pagination>.pageJump>.pageNum>input{ font-size: 0.875*@fontSize; width: 4.5em; }
    &[xs]>.pagination>.pageJump>.pageNum>input{ font-size: 0.75*@fontSize; padding: 0 0.6em; line-height: 2.2em; height: 2.2em; width: 4.5em; }
    &[xxs]>.pagination>.pageJump>.pageNum>input{ font-size: 0.75*@fontSize; padding: 0 0.4em; line-height: 2em; height: 2em; width: 4.5em; }

    &[xxl]>.pagination>.pageJump>i{ line-height: 50px; font-size: 17px; }
    &[xl]>.pagination>.pageJump>i{ line-height: 46px; font-size: 16px; }
    &>.pagination>.pageJump>i,&[m]>.pagination>.pageJump>i{ line-height: 40px; font-size: 15px; }
    &[s]>.pagination>.pageJump>i{ line-height: 34px; font-size: 13px; }
    &[xs]>.pagination>.pageJump>i{ line-height: 25px; font-size: 12px; }
    &[xxs]>.pagination>.pageJump>i{ line-height: 24px; font-size: 12px; }
// TODO
    &.si-xxl {
        >.pagination{
            >a {
                font-size: 1.3*@fontSize;
            }

            .pageJump{
                .pageNum>input{
                    font-size: 1.3*@fontSize;
                    width: 4.5em;
                }

                >i{
                    // TODO
                }
            }
        }
    }

    &.si-xl {
        >.pagination>a{
            font-size: 1.2*@fontSize;
        }
    }

    &.si-l {
        >.pagination>a{
            font-size: 1.1*@fontSize;
        }
    }

    &.si-m {
        >.pagination>a{
            font-size: 1*@fontSize;
        }
    }

    &.si-s {
        >.pagination>a{
            font-size: 0.875*@fontSize;
        }
    }

    &.si-xs {
        >.pagination>a{
            font-size: 0.75*@fontSize;
            padding: 0 0.6em;
            line-height: 2.2em;
            height: 2.2em;

            &.ignore{
                line-height: 1.6em;
                padding: 0 0.1em;
            }
        }
    }

    &.si-xxs {
        >.pagination>a{
            font-size: 0.75*@fontSize;
            padding: 0 0.4em;
            line-height: 2em;
            height: 2em;

            &.ignore{
                line-height: 1.4em;
                padding: 0 0;
            }
        }
    }

    // TODO
    &>.pagination>a,&[theme]>.pagination>a{ 
        &.current{
            background-color: @themeColor !important;
            color: @themeInvert !important;
        }
    }
    &[success]>.pagination>a{
        &.current{
            background-color: @successColor !important;
            color: @successInvert !important;
        }
    }
    &[warning]>.pagination>a{
        &.current{
            background-color: @warningColor !important;
            color: @warningInvert !important;
        }
    }
    &[danger]>.pagination>a{
        &.current{
            background-color: @dangerColor !important;
            color: @dangerInvert !important;
        }
    }
    &[minor]>.pagination>a{
        &.current{
            background-color: @minorColor !important;
            color: @minorInvert !important;
        }
    }
    &[light]>.pagination>a{
        background-color: @borderColorBlack !important;
        color: @fontColorWhite !important;
        &:not(.current):not(.ignore):active{
            color: @fontColorWhite !important;
        }
        &.current{
            background-color: @lightColor !important;
            color: @lightInvert !important;
        }
    }
    &[deep]>.pagination>a{
        &.current{
            background-color: @deepColor !important;
            color: @deepInvert !important;
            cursor: default;
        }
    }
    &[info]>.pagination>a{
        &.current{
            background-color: @infoColor !important;
            color: @infoInvert !important;
        }
    }

    &[light]>.pagination>.pageJump>.pageNum>input{ 
        border: 1px solid #000;
        color: #000 !important;

        &::-webkit-input-placeholder {
            color: #555 !important;
        }

    }

    &[light]>.pagination>.pageJump>i{ 
        color: #555;
        &:hover{
            color: #000;
        }
    }

    // default statement
    &{
        .si-m;
        .sy-theme;
    }

}
</style>
