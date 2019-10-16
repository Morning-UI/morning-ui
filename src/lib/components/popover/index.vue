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
            <div class="popover-title" v-if="$slots.title">
                <slot name="title"></slot>
            </div>
            <div class="popover-body">
                <slot></slot>
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
                show : false
            }
        };

    },
    methods : {
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
