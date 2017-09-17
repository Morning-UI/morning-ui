<template>
    <i-btn
        :_uiid="uiid"
        :class="[sizeClass, styleClass, stateClass]"

        :link="link"
        :js="js"
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
        
    </i-btn>
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
        js : {
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
                js : this.js,
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

            return this;

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

            return this;

        }
    },
    mounted : function () {

        this.data.lastState = this.conf.state;

        if ( typeof this.locked === 'number' ) {

            this.lock( +this.locked );

        } else if ( this.locked === true ) {

            this.lock();

        }

        this.$on('emit', () => {

            if (this.conf.js) {

                eval(this.conf.js);

            }

            if (this.conf.link) {

                if (this.conf.newTab) {

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
        font-size: @fontSize*1.3;

        .morningicon{
            font-size: @fontSize*1.6;
            transform-origin: @fontSize*0.8 @fontSize*0.78125;
        }
    }

    &.si-xl{
        font-size: @fontSize*1.1;

        .morningicon{
            font-size: @fontSize*1.4;
            transform-origin: @fontSize*0.69375 @fontSize*0.6875;
        }
    }

    &.si-l{
        font-size: @fontSize*1;

        .morningicon{
            font-size: @fontSize*1.3;
            transform-origin: @fontSize*0.65 @fontSize*0.625;
        }
    }

    &.si-m{
        font-size: @fontSize*0.8125;

        .morningicon{
            font-size: @fontSize*1.15;
            transform-origin: @fontSize*0.575 @fontSize*0.5625;
        }
    }

    &.si-s{
        font-size: @fontSize*0.75;
        height: 2.6em;
        line-height: 2.6em;
        padding: 0 0.8em;

        .morningicon{
            font-size: @fontSize*0.9;
            transform-origin: @fontSize*0.45 @fontSize*0.4375;
        }
    }

    &.si-xs{
        font-size: @fontSize*0.75;
        height: 2.2em;
        line-height: 2.2em;
        padding: 0 0.6em;

        .morningicon{
            font-size: @fontSize*0.85;
            transform-origin: @fontSize*0.425 @fontSize*0.40625;
        }
    }

    &.si-xxs{
        font-size: @fontSize*0.75;
        height: 1.8em;
        line-height: 1.8em;
        padding: 0 0.4em;

        .morningicon{
            font-size: @fontSize*0.75;
            transform-origin: @fontSize*0.375 @fontSize*0.375;
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
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.25) inset;
        }

        &.st-disabled{
            color: lighten(@colorTheme, 25%);
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
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.25) inset;
        }

        &.st-disabled{
            color: lighten(@colorLightTheme, 20%);
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
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.25) inset;
        }

        &.st-disabled{
            color: lighten(@colorDarkTheme, 25%);
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
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.25) inset;
        }

        &.st-disabled{
            color: lighten(@colorSuccess, 35%);
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
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.25) inset;
        }

        &.st-disabled{
            color: lighten(@colorWarning, 35%);
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
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.25) inset;
        }

        &.st-disabled{
            color: lighten(@colorDanger, 35%);
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
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.25) inset;
        }

        &.st-disabled{
            color: lighten(@colorPrimary, 35%);
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
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.25) inset;
        }

        &.st-disabled{
            color: lighten(@colorMinor, 25%);
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
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.25) inset;
        }

        &.st-disabled{
            color: lighten(@colorInfo, 20%);
        }
    }
    
    &.sy-black{
        background-color: @colorBlack;
        color: @colorWhite;

        &:not(.st-disabled):hover,
        &.st-hover{
            background-color: lighten(@colorBlack, 5%);
        }

        &:not(.st-disabled):active,
        &.st-active{
            background-color: lighten(@colorBlack, 10%);
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.4) inset;
        }

        &.st-disabled{
            color: lighten(@colorBlack, 40%);
        }
    }
    
    &.sy-lightBlack{
        background-color: @colorLightBlack;
        color: @colorWhite;

        &:not(.st-disabled):hover,
        &.st-hover{
            background-color: lighten(@colorLightBlack, 5%);
        }

        &:not(.st-disabled):active,
        &.st-active{
            background-color: lighten(@colorLightBlack, 10%);
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.4) inset;
        }

        &.st-disabled{
            color: lighten(@colorLightBlack, 40%);
        }
    }
    
    &.sy-extraLightBlack{
        background-color: @colorExtraLightBlack;
        color: @colorWhite;

        &:not(.st-disabled):hover,
        &.st-hover{
            background-color: lighten(@colorExtraLightBlack, 5%);
        }

        &:not(.st-disabled):active,
        &.st-active{
            background-color: lighten(@colorExtraLightBlack, 10%);
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.4) inset;
        }

        &.st-disabled{
            color: lighten(@colorExtraLightBlack, 40%);
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
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.25) inset;
        }

        &.st-disabled{
            color: lighten(@colorBlue, 30%);
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
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.25) inset;
        }

        &.st-disabled{
            color: lighten(@colorLightBlue, 30%);
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
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.25) inset;
        }

        &.st-disabled{
            color: lighten(@colorExtraLightBlue, 20%);
        }
    }
    
    &.sy-silver{
        background-color: @colorSilver;
        color: @colorExtraLightBlack;

        &:not(.st-disabled):hover,
        &.st-hover{
            background-color: darken(@colorSilver, 3%);
        }

        &:not(.st-disabled):active,
        &.st-active{
            background-color: darken(@colorSilver, 6%);
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.25) inset;
        }

        &.st-disabled{
            color: darken(@colorSilver, 30%);
        }
    }
    
    &.sy-lightSilver{
        background-color: @colorLightSilver;
        color: @colorExtraLightBlack;

        &:not(.st-disabled):hover,
        &.st-hover{
            background-color: darken(@colorLightSilver, 3%);
        }

        &:not(.st-disabled):active,
        &.st-active{
            background-color: darken(@colorLightSilver, 6%);
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.25) inset;
        }

        &.st-disabled{
            color: darken(@colorLightSilver, 30%);
        }
    }
    
    &.sy-extraLightSilver{
        background-color: @colorExtraLightSilver;
        color: @colorExtraLightBlack;

        &:not(.st-disabled):hover,
        &.st-hover{
            background-color: darken(@colorExtraLightSilver, 3%);
        }

        &:not(.st-disabled):active,
        &.st-active{
            background-color: darken(@colorExtraLightSilver, 6%);
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.25) inset;
        }

        &.st-disabled{
            color: darken(@colorExtraLightSilver, 30%);
        }
    }
    
    &.sy-gray{
        background-color: @colorGray;
        color: @colorExtraLightBlack;

        &:not(.st-disabled):hover,
        &.st-hover{
            background-color: darken(@colorGray, 3%);
        }

        &:not(.st-disabled):active,
        &.st-active{
            background-color: darken(@colorGray, 6%);
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.25) inset;
        }

        &.st-disabled{
            color: darken(@colorGray, 30%);
        }
    }
    
    &.sy-lightGray{
        background-color: @colorLightGray;
        color: @colorExtraLightBlack;

        &:not(.st-disabled):hover,
        &.st-hover{
            background-color: darken(@colorLightGray, 3%);
        }

        &:not(.st-disabled):active,
        &.st-active{
            background-color: darken(@colorLightGray, 6%);
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.25) inset;
        }

        &.st-disabled{
            color: darken(@colorLightGray, 30%);
        }
    }
    
    &.sy-white{
        background-color: @colorWhite;
        color: @colorExtraLightBlack;

        &:not(.st-disabled):hover,
        &.st-hover{
            background-color: darken(@colorWhite, 3%);
        }

        &:not(.st-disabled):active,
        &.st-active{
            background-color: darken(@colorWhite, 6%);
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.25) inset;
        }

        &.st-disabled{
            color: darken(@colorWhite, 30%);
        }
    }

    &.st-normal{}
    &.st-hover{}
    &.st-active{}
    &.st-disabled{
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.6) inset;
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
            left: ~`'calc( 50% - 0.5em )'`;
            top: ~`'calc( 50% - 0.5em )'`;
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
