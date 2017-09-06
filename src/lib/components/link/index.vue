<template>
    <i-link
        :_uiid="uiid"
        :class="[sizeClass, styleClass, stateClass]"

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

    </i-link>
</template>
 
<script>
import UI                           from 'Common/ui';

export default UI.extend({
    name : 'link',
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

i-link{
    display: inline-block;
    position: relative;
    line-height: 1.4em;
    height: 1.4em;

    &.margin{
        padding: 0 0.6em;
    }


    &.si-xxl{
        font-size: 1.3*@fontSize;

        .morningicon{
            font-size: 1.6*@fontSize;
            transform-origin: 0.8*@fontSize 0.78125*@fontSize;
        }
    }

    &.si-xl{
        font-size: 1.1*@fontSize;

        .morningicon{
            font-size: 1.4*@fontSize;
            transform-origin: 0.69375*@fontSize 0.6875*@fontSize;
        }
    }

    &.si-l{
        font-size: 1*@fontSize;

        .morningicon{
            font-size: 1.3*@fontSize;
            transform-origin: 0.65*@fontSize 0.625*@fontSize;
        }
    }

    &.si-m{
        font-size: 0.8125*@fontSize;

        .morningicon{
            font-size: 1.15*@fontSize;
            transform-origin: 0.575*@fontSize 0.5625*@fontSize;
        }
    }

    &.si-s{
        font-size: 0.75*@fontSize;

        .morningicon{
            font-size: 0.9*@fontSize;
            transform-origin: 0.45*@fontSize 0.4375*@fontSize;
        }
    }

    &.si-xs{
        font-size: 0.75*@fontSize;

        .morningicon{
            font-size: 0.85*@fontSize;
            transform-origin: 0.425*@fontSize 0.40625*@fontSize;
        }
    }

    &.si-xxs{
        font-size: 0.75*@fontSize;

        .morningicon{
            font-size: 0.75*@fontSize;
            transform-origin: 0.375*@fontSize 0.375*@fontSize;
        }
    }
    
    &.sy-theme{
        color: @colorTheme;

        &:not(.st-disabled):hover,
        &.st-hover{
            color: darken(@colorTheme, 15%);
        }

        &:not(.st-disabled):active,
        &.st-active{
            color: darken(@colorTheme, 25%);
        }

        &.st-disabled{
            color: lighten(@colorTheme, 25%);
        }
    }
    
    &.sy-lightTheme{
        color: @colorLightTheme;

        &:not(.st-disabled):hover,
        &.st-hover{
            color: darken(@colorLightTheme, 25%);
        }

        &:not(.st-disabled):active,
        &.st-active{
            color: darken(@colorLightTheme, 35%);
        }

        &.st-disabled{
            color: lighten(@colorLightTheme, 20%);
        }
    }
    
    &.sy-darkTheme{
        color: @colorDarkTheme;

        &:not(.st-disabled):hover,
        &.st-hover{
            color: darken(@colorDarkTheme, 10%);
        }

        &:not(.st-disabled):active,
        &.st-active{
            color: darken(@colorDarkTheme, 20%);
        }

        &.st-disabled{
            color: lighten(@colorDarkTheme, 25%);
        }
    }

    &.sy-success{
        color: @colorSuccess;

        &:not(.st-disabled):hover,
        &.st-hover{
            color: darken(@colorSuccess, 10%);
        }

        &:not(.st-disabled):active,
        &.st-active{
            color: darken(@colorSuccess, 15%);
        }

        &.st-disabled{
            color: darken(@colorSuccess, 25%);
        }
    }
    
    &.sy-warning{
        color: @colorWarning;

        &:not(.st-disabled):hover,
        &.st-hover{
            color: darken(@colorWarning, 10%);
        }

        &:not(.st-disabled):active,
        &.st-active{
            color: darken(@colorWarning, 15%);
        }

        &.st-disabled{
            color: lighten(@colorWarning, 15%);
        }
    }
    
    &.sy-danger{
        color: @colorDanger;

        &:not(.st-disabled):hover,
        &.st-hover{
            color: darken(@colorDanger, 5%);
        }

        &:not(.st-disabled):active,
        &.st-active{
            color: darken(@colorDanger, 10%);
        }

        &.st-disabled{
            color: lighten(@colorDanger, 25%);
        }
    }
    
    &.sy-primary{
        color: @colorPrimary;

        &:not(.st-disabled):hover,
        &.st-hover{
            color: darken(@colorPrimary, 10%);
        }

        &:not(.st-disabled):active,
        &.st-active{
            color: darken(@colorPrimary, 15%);
        }

        &.st-disabled{
            color: lighten(@colorPrimary, 25%);
        }
    }

    &.sy-minor{
        color: @colorMinor;

        &:not(.st-disabled):hover,
        &.st-hover{
            color: darken(@colorMinor, 10%);
        }

        &:not(.st-disabled):active,
        &.st-active{
            color: darken(@colorMinor, 15%);
        }

        &.st-disabled{
            color: lighten(@colorMinor, 15%);
        }
    }
    
    &.sy-info{
        color: @colorInfo;

        &:not(.st-disabled):hover,
        &.st-hover{
            color: darken(@colorInfo, 10%);
        }

        &:not(.st-disabled):active,
        &.st-active{
            color: darken(@colorInfo, 15%);
        }

        &.st-disabled{
            color: darken(@colorInfo, 25%);
        }
    }
    
    &.sy-black{
        color: @colorBlack;

        &:not(.st-disabled):hover,
        &.st-hover{
            color: lighten(@colorBlack, 15%);
        }

        &:not(.st-disabled):active,
        &.st-active{
            color: lighten(@colorBlack, 30%);
        }

        &.st-disabled{
            color: lighten(@colorBlack, 40%);
        }
    }
    
    &.sy-lightBlack{
        color: @colorLightBlack;

        &:not(.st-disabled):hover,
        &.st-hover{
            color: lighten(@colorLightBlack, 15%);
        }

        &:not(.st-disabled):active,
        &.st-active{
            color: lighten(@colorLightBlack, 25%);
        }

        &.st-disabled{
            color: lighten(@colorLightBlack, 40%);
        }
    }
    
    &.sy-extraLightBlack{
        color: @colorExtraLightBlack;

        &:not(.st-disabled):hover,
        &.st-hover{
            color: lighten(@colorExtraLightBlack, 10%);
        }

        &:not(.st-disabled):active,
        &.st-active{
            color: lighten(@colorExtraLightBlack, 20%);
        }

        &.st-disabled{
            color: lighten(@colorExtraLightBlack, 40%);
        }
    }
    
    &.sy-blue{
        color: @colorBlue;

        &:not(.st-disabled):hover,
        &.st-hover{
            color: darken(@colorBlue, 15%);
        }

        &:not(.st-disabled):active,
        &.st-active{
            color: darken(@colorBlue, 20%);
        }

        &.st-disabled{
            color: lighten(@colorBlue, 20%);
        }
    }
    
    &.sy-lightBlue{
        color: @colorLightBlue;

        &:not(.st-disabled):hover,
        &.st-hover{
            color: darken(@colorLightBlue, 15%);
        }

        &:not(.st-disabled):active,
        &.st-active{
            color: darken(@colorLightBlue, 20%);
        }

        &.st-disabled{
            color: lighten(@colorLightBlue, 20%);
        }
    }
    
    &.sy-extraLightBlue{
        color: @colorExtraLightBlue;

        &:not(.st-disabled):hover,
        &.st-hover{
            color: darken(@colorExtraLightBlue, 15%);
        }

        &:not(.st-disabled):active,
        &.st-active{
            color: darken(@colorExtraLightBlue, 20%);
        }

        &.st-disabled{
            color: lighten(@colorExtraLightBlue, 10%);
        }
    }
    
    &.sy-silver{
        color: @colorSilver;

        &:not(.st-disabled):hover,
        &.st-hover{
            color: darken(@colorSilver, 8%);
        }

        &:not(.st-disabled):active,
        &.st-active{
            color: darken(@colorSilver, 12%);
        }

        &.st-disabled{
            color: darken(@colorSilver, 30%);
        }
    }
    
    &.sy-lightSilver{
        color: @colorLightSilver;

        &:not(.st-disabled):hover,
        &.st-hover{
            color: darken(@colorLightSilver, 8%);
        }

        &:not(.st-disabled):active,
        &.st-active{
            color: darken(@colorLightSilver, 12%);
        }

        &.st-disabled{
            color: darken(@colorLightSilver, 30%);
        }
    }
    
    &.sy-extraLightSilver{
        color: @colorExtraLightSilver;

        &:not(.st-disabled):hover,
        &.st-hover{
            color: darken(@colorExtraLightSilver, 8%);
        }

        &:not(.st-disabled):active,
        &.st-active{
            color: darken(@colorExtraLightSilver, 12%);
        }

        &.st-disabled{
            color: darken(@colorExtraLightSilver, 30%);
        }
    }
    
    &.sy-gray{
        color: @colorGray;

        &:not(.st-disabled):hover,
        &.st-hover{
            color: darken(@colorGray, 8%);
        }

        &:not(.st-disabled):active,
        &.st-active{
            color: darken(@colorGray, 12%);
        }

        &.st-disabled{
            color: darken(@colorGray, 30%);
        }
    }
    
    &.sy-lightGray{
        color: @colorLightGray;

        &:not(.st-disabled):hover,
        &.st-hover{
            color: darken(@colorLightGray, 8%);
        }

        &:not(.st-disabled):active,
        &.st-active{
            color: darken(@colorLightGray, 12%);
        }

        &.st-disabled{
            color: darken(@colorLightGray, 30%);
        }
    }
    
    &.sy-white{
        color: @colorWhite;

        &:not(.st-disabled):hover,
        &.st-hover{
            color: darken(@colorWhite, 8%);
        }

        &:not(.st-disabled):active,
        &.st-active{
            color: darken(@colorWhite, 12%);
        }

        &.st-disabled{
            color: darken(@colorWhite, 30%);
        }
    }

    &.st-normal{}
    &.st-hover{
        cursor: pointer;
    }
    &.st-active{}
    &.st-disabled{
        cursor: not-allowed !important;
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

    &:hover{
        .st-hover;
    }

}
</style>
