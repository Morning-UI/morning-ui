<template>
    <mor-dialog
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
        
        <header v-show="data.hasHeader">
            <slot name="header"></slot>
        </header>
        <div class="body"><slot></slot></div>
        <footer v-show="data.hasFooter">
            <slot name="footer"></slot>
        </footer>

    </div>
        
    </mor-dialog>
</template>
 
<script>
import PopupManager                 from 'Utils/PopupManager';

const toggleTopTime = 200;
const toggleCenterTime = 260;

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
                hasFooter : false,
                showingTimeout : null,
                toggleTimeout : null
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
        _checkHeaderAndFooter : function () {

            if (this.$slots.header &&
                this.$slots.header[0] &&
                this.$slots.header[0].elm &&
                this.$slots.header[0].elm.innerHTML !== '') {

                this.data.hasHeader = true;

            } else {

                this.data.hasHeader = false;

            }

            if (this.$slots.footer &&
                this.$slots.footer[0] &&
                this.$slots.footer[0].elm &&
                this.$slots.footer[0].elm.innerHTML !== '') {

                this.data.hasFooter = true;

            } else {

                this.data.hasFooter = false;

            }

        },
        show : function () {

            return this.toggle(true);

        },
        hide : function () {

            return this.toggle(false);

        },
        toggle : function (show) {

            let isShown = this._isShown();
            let toggleTimeoutTime = 0;

            if (show === undefined) {

                show = !this.data.show;

            }

            if (this.conf.showType === 'top') {

                toggleTimeoutTime = toggleTopTime;

            } else if (this.conf.showType === 'center') {

                toggleTimeoutTime = toggleCenterTime;

            }

            clearTimeout(this.data.showingTimeout);

            show = !!show;

            if (show) {

                if (!isShown) {

                    this._popupShow();

                    this.data.showingTimeout = setTimeout(() => {

                        this.Vue.nextTick(() => {

                            this.data.show = show;
                        
                        });

                    });

                }

                this.$emit('show');
                this.$emit('emit');

                clearTimeout(this.data.toggleTimeout);
                this.data.toggleTimeout = setTimeout(() => {

                    this.$emit('after-show');

                }, toggleTimeoutTime);
                
            } else {

                if (isShown) {

                    this.data.show = show;

                }

                this.$emit('hide');
                this.$emit('emit');

                clearTimeout(this.data.toggleTimeout);
                this.data.toggleTimeout = setTimeout(() => {

                    this.$emit('after-hide');

                }, toggleTimeoutTime);
            
            }

            return this;

        }
    },
    updated : function () {

        this._checkHeaderAndFooter();

    },
    mounted : function () {

        this._checkHeaderAndFooter();
        this._popupShow();

    }
};
</script>
