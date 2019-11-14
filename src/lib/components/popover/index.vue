<template>
    <mor-popover
        :_uiid="uiid"
        :class="[]"

        :target="target"
        :placement="placement"
        :offset="offset"
        :trigger="trigger"
        :trigger-in-delay="triggerInDelay"
        :auto-reverse="autoReverse"
        :align="align"
    >
    
    <div class="tip-wrap">
        <div class="popover-arrow tip-arrow"></div>
        <div class="popover-con">
            <div class="popover-title" v-if="$slots.title || data.confirmTitle">
                <b v-if="data.confirmTitle">{{data.confirmTitle}}</b>
                <slot name="title" v-else></slot>
            </div>
            <div class="popover-body">
                <div v-if="data.confirmContent" class="confirm-box">
                    <div class="confirm-content" v-html="data.confirmContent"></div>
                    <div class="operate">
                        <ui-link size="xs" color="minor" @emit="_confirm(false)">{{data.confirmCancelBtn}}</ui-link>
                        <ui-btn size="xs" color="success" @emit="_confirm(true)">{{data.confirmBtn}}</ui-btn>
                    </div>
                </div>
                <slot v-else></slot>
            </div>
        </div>
    </div>
    
    </mor-popover>

</template>
 
<script>
import TipManager                   from 'Utils/TipManager';

const triggerDelayTime = 200;

export default {
    origin : 'UI',
    name : 'popover',
    mixins : [TipManager],
    props : {
        target : {
            type : String,
            default : null
        },
        placement : {
            type : String,
            default : 'top',
            validator : (value => ['top', 'bottom', 'left', 'right'].indexOf(value) !== -1)
        },
        offset : {
            type : String,
            default : '0, 0'
        },
        trigger : {
            type : String,
            default : 'hover',
            validator : value => {

                let items = ['hover', 'click', 'rclick', 'focus', 'method'];
                let values = value.split(' ');

                for (let item of values) {

                    if (items.indexOf(item) === -1) {

                        return false;

                    }

                }

                return true;

            }
        },
        triggerInDelay : {
            type : Number,
            default : triggerDelayTime
        },
        autoReverse : {
            type : Boolean,
            default : true
        },
        align : {
            type : String,
            default : 'middle',
            validator : (value => ['start', 'middle', 'end'].indexOf(value) !== -1)
        }
    },
    computed : {
        _conf : function () {

            return {
                target : this.target,
                placement : this.placement,
                offset : this.offset,
                trigger : this.trigger,
                triggerInDelay : this.triggerInDelay,
                autoReverse : this.autoReverse,
                align : this.align
            };

        }
    },
    data : function () {

        return {
            data : {
                show : false,
                confirmContent : '',
                confirmCancelBtn : '',
                confirmBtn : '',
                confirmTitle : '',
                confirmResolve : null,
                confirmReject : null
            }
        };

    },
    methods : {
        _confirm : function (confirm) {

            if (confirm && typeof this.data.confirmResolve === 'function') {

                this.data.confirmResolve();

            } else if (!confirm && typeof this.data.confirmReject === 'function') {

                this.data.confirmReject();

            }

            this.toggle(false);

        },
        show : function () {

            this._tipShow(true);

            return this;

        },
        hide : function () {

            this._tipHide(true);

            return this;

        },
        toggle : function (show) {

            if (show === undefined) {

                this._tipToggle(true);

            } else if (show === true) {

                this.show();

            } else if (show === false) {

                this.hide();

            }
            
            return this;

        },
        position : function () {

            this._tipUpdate();

            return this;

        },
        confirm : function (content, options) {

            options = Object.assign({
                title : undefined,
                cancelText : '取消',
                confirmText : '确认',
            }, options);

            this.data.confirmContent = content;
            this.data.confirmCancelBtn = options.cancelText;
            this.data.confirmBtn = options.confirmText;
            this.data.confirmTitle = options.title;
            // this._checkHeaderAndFooter();
            this.toggle(true);

            return new Promise((resolve, reject) => {

                this.data.confirmResolve = resolve;
                this.data.confirmReject = reject;

            });

        }
    },
    mounted : function () {

        this.$on('_tipManagerShow', () => {

            this.data.show = true;

            this.$emit('show');
            this.$emit('emit');

        });

        this.$on('_tipManagerAfterShow', () => {

            this.$emit('after-show');

        });

        this.$on('_tipManagerHide', () => {

            this.data.show = false;

            this.$emit('hide');
            this.$emit('emit');

        });

        this.$on('_tipManagerAfterHide', () => {

            this.$emit('after-hide');

        });

    }
};
</script>
