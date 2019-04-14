<template>
    <mor-drawer
        :_uiid="uiid"
        :class="[moreClass]"

        :width="width"
        :height="height"
        :auto-close="autoClose"
        :position="position"
        :show-type="showType"
        :show-mask="showMask"

        @click="_onClick"
    >

    <div class="drawer-mask" v-if="conf.showMask"></div>
    <div
        class="drawer-content"
        :style="[
            {
                width: contentWidth,
                height: contentHeight
            },
            moveStyle
        ]"
    >
        
        <header v-show="data.hasHeader">
            <slot name="header"></slot>
        </header>
        <div class="drawer-body"><slot></slot></div>
        <footer v-show="data.hasFooter">
            <slot name="footer"></slot>
        </footer>

    </div>

    </mor-drawer>
</template>
 
<script>
import PopupManager                 from 'Utils/PopupManager';

const moveOffset = 30;
const moveDelayTime = 150;

export default {
    origin : 'UI',
    name : 'drawer',
    mixins : [PopupManager],
    props : {
        width : {
            type : String,
            default : '240px'
        },
        height : {
            type : String,
            default : '200px'
        },
        autoClose : {
            type : Boolean,
            default : true
        },
        position : {
            type : String,
            default : 'right',
            validator : value => ([
                'top',
                'left',
                'right',
                'bottom'
            ].indexOf(value) !== -1)
        },
        showType : {
            type : String,
            default : 'slideout',
            validator : (value => ['slideout', 'no'].indexOf(value) !== -1)
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
                position : this.position,
                showType : this.showType,
                showMask : this.showMask
            };

        },
        moreClass : function () {

            let classes = {
                'has-header' : this.data.hasHeader,
                'has-footer' : this.data.hasFooter,
                show : this.data.show,
                'show-slide-out' : (this.conf.showType === 'slideout'),
                'show-no-animate' : (this.conf.showType === 'no')
            };

            classes[`position-${this.conf.position}`] = true;

            return classes;

        },
        contentWidth : function () {

            if (this.position === 'left' ||
                this.position === 'right') {

                return this.conf.width;

            }

            return '100%';

        },
        contentHeight : function () {

            if (this.position === 'top' ||
                this.position === 'bottom') {

                return this.conf.height;

            }

            return '100%';

        },
        moveStyle : function () {

            let styles = {};

            styles[`margin-${this.conf.position}`] = `${this.data.moveLevel * moveOffset}px`;

            return styles;

        }
    },
    data : function () {

        return {
            data : {
                show : false,
                hasHeader : false,
                hasFooter : false,
                showingTimeout : null,
                moveTimeout : null,
                moveLevel : 0
            }
        };

    },
    methods : {
        _onClick : function (evt) {

            let $content = this.$el.querySelector('.drawer-content');

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
        _moveDrawer : function (move) {

            this.data.moveLevel += move;

            if (this.data.moveLevel < 0) {

                this.data.moveLevel = 0;

            }

            this._moveParentDrawer(move);

        },
        _moveParentDrawer : function (move) {

            if (this.$parent.uiname === 'drawer' && this.$parent.conf.position === this.conf.position) {

                this.$parent._moveDrawer(move);

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

            if (show === undefined) {

                show = !this.data.show;

            }

            clearTimeout(this.data.showingTimeout);

            show = !!show;

            if (show) {

                if (!isShown) {

                    this._popupShow();

                    this.data.showingTimeout = setTimeout(() => {

                        this.data.show = show;
    
                    });

                }

                this.$emit('show');
                this.$emit('emit');
                
            } else {

                if (isShown) {

                    this.data.show = show;

                }

                this.$emit('hide');
                this.$emit('emit');
            
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

        this.$watch('data.show', () => {

            clearTimeout(this.data.moveTimeout);

            if (this.data.show) {

                this.data.moveTimeout = setTimeout(() => {

                    this._moveParentDrawer(1);

                }, moveDelayTime);

            } else {

                this._moveParentDrawer(-1);

            }

        });

    }
};
</script>
