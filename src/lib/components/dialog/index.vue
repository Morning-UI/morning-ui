<template>
    <i-dialog
        :_uiid="uiid"
        :class="[colorClass, moreClass]"

        :width="width"
        :height="height"
        :auto-close="autoClose"
        :show-type="showType"
        :show-mask="showMask"

        @click="_onClick"
    >

    <div class="mask" v-if="conf.showMask"></div>
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
import PopupManager                 from 'Utils/PopupManager';

const rmIndexTimeout = 120;

export default {
    origin : 'UI',
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
            default : 'top',
            validator : (value => ['top', 'center', 'no'].indexOf(value) !== -1)
        },
        showMask : {
            type : Boolean,
            default : true
        }
    },
    computed : {
        _conf : function () {

            return {
                width : this.width,
                height : this.height,
                autoClose : this.autoClose,
                showType : this.showType,
                showMask : this.showMask
            };

        },
        moreClass : function () {

            return {
                'has-header' : this.data.hasHeader,
                'has-footer' : this.data.hasFooter,
                'show-top' : (this.conf.showType === 'top'),
                'show-center' : (this.conf.showType === 'center'),
                'show-no-animate' : (this.conf.showType === 'no'),
                show : this.data.show
            };

        }
    },
    data : function () {

        return {
            data : {
                show : false,
                hasHeader : false,
                hasFooter : false
            }
        };

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

            if (show === undefined) {

                show = !this.data.show;

            }

            show = !!show;

            if (show) {

                if (!isShown) {

                    this._popupShow();

                    setTimeout(() => {

                        this.data.show = show;

                    });

                }

                this.$emit('show');
                this.$emit('emit');
                
            } else {

                if (isShown) {

                    this.data.show = show;

                    setTimeout(() => {

                        this._popupHide();

                    }, rmIndexTimeout);

                }

                this.$emit('hide');
                this.$emit('emit');
            
            }

            return this;

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
};
</script>

<style lang="less" src="./index.less"></style>
