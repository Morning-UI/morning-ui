<template>
    <mor-header
        :_uiid="uiid"
        :class="[sizeClass, colorClass, moreClass]"

        :mark="mark"
        :underline="underline"
        :show-back="showBack"
    >
        <div class="header-breadcrumbs">
            <slot name="breadcrumbs"></slot>
        </div>
        <div class="header-main">
            <morning-link class="back-link" v-if="conf.showBack" :color="conf.color || 'black'" :size="conf.size" @emit="_emitBack">
                <i class="mo-icon mo-icon-arrow-left"></i>
            </morning-link>
            <div class="main-title"><slot></slot></div>
            <div class="sub-title"><slot name="sub-title"></slot></div>
        </div>
    </mor-header>
</template>
 
<script>
export default {
    origin : 'UI',
    name : 'header',
    props : {
        mark : {
            type : Boolean,
            default : false
        },
        underline : {
            type : Boolean,
            default : false
        },
        showBack : {
            type : Boolean,
            default : false
        }
    },
    computed : {
        _conf : function () {

            return {
                mark : this.mark,
                underline : this.underline,
                showBack : this.showBack
            };

        },
        moreClass : function () {

            let classes = {
                mark : this.conf.mark,
                underline : this.conf.underline
            };

            return classes;

        }
    },
    data : function () {

        return {
            data : {}
        };

    },
    methods : {
        _emitBack : function () {

            this.$emit('back');

        }
    },
    mounted : function () {}
};
</script>
