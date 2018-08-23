<template>
    <mor-alert
        :_uiid="uiid"
        :class="[moreClass]"

        :type="type"
        :show-icon="showIcon"
        :can-close="canClose"
        :close-content="closeContent"
        :align="align"
        :title="title"
    >

        <div class="alert-icon" v-if="conf.showIcon">
            <i class="mo-icon" :class="iconClass"></i>
        </div>

        <div class="alert-content">
            <h1 v-if="conf.title.length > 0">
                {{conf.title}}
            </h1>
            <p><slot></slot></p>
        </div>

        <div
            v-if="conf.canClose"
            class="alert-close"
            @click="_onClose"
            v-html="conf.closeContent"
        >
        </div>

    </mor-alert>
</template>
 
<script>
const iconMap = {
    normal : 'info',
    success : 'correct',
    warning : 'warn',
    danger : 'error',
    primary : 'info',
    minor : 'question',
    info : 'info'
};

const iconSuffixMap = {
    0 : {
        normal : 'cf',
        success : 'cf',
        warning : 'f',
        danger : 'cf',
        primary : 'cf',
        minor : 'cf',
        info : 'cf'
    },
    1 : {
        normal : 'co',
        success : 'co',
        warning : 'o',
        danger : 'co',
        primary : 'co',
        minor : 'co',
        info : 'co'
    }
};

export default {
    origin : 'UI',
    name : 'alert',
    props : {
        type : {
            type : String,
            default : 'normal',
            validator : (value => [
                'normal',
                'success',
                'warning',
                'danger',
                'primary',
                'minor',
                'info',
            ].indexOf(value) !== -1)
        },
        showIcon : {
            type : Boolean,
            default : false
        },
        canClose : {
            type : Boolean,
            default : false
        },
        closeContent : {
            type : String,
            default : '<i class="mo-icon mo-icon-close"></i>'
        },
        align : {
            type : String,
            default : 'left',
            validator : (value => [
                'left',
                'center',
                'right'
            ].indexOf(value) !== -1)
        },
        title : {
            type : String,
            default : ''
        }
    },
    computed : {
        _conf : function () {

            return {
                type : this.type,
                showIcon : this.showIcon,
                canClose : this.canClose,
                closeContent : this.closeContent,
                align : this.align,
                title : this.title
            };

        },
        moreClass : function () {

            let classes = {};

            classes[`type-${this.conf.type}`] = true;
            classes[`align-${this.conf.align}`] = true;
            classes['can-close'] = this.conf.canClose;
            classes['has-title'] = (this.conf.title.length > 0);

            return classes;

        },
        iconClass : function () {

            let classes = {};
            let hasTitle = (this.conf.title.length > 0) ? 1 : 0 ;

            classes[`mo-icon-${iconMap[this.conf.type]}-${iconSuffixMap[hasTitle][this.conf.type]}`] = true;

            return classes;

        }
    },
    data : function () {

        return {
            data : {}
        };

    },
    methods : {
        _onClose : function () {

            this.$emit('close');
            this.$destroy();

        },
        close : function () {

            this._onClose();

            return this;

        }
    },
    mounted : function () {}
};
</script>

<style lang="less" src="./index.less"></style>
