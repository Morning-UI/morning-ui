<template>
    <mor-dropdown
        :_uiid="uiid"
        :class="[showClass]"
        :id="'mor-dropdown-'+uiid"

        :done-hidden="doneHidden"
        :trigger="trigger"
        :trigger-in-delay="triggerInDelay"
        :auto-reverse="autoReverse"
    >
    
    <slot name="showbtn"></slot>
    
    <morning-popover
        :ref="'ui-dropdown-popover-'+uiid"
        class="mor-dropdown-popover"
    
        :target="'#mor-dropdown-'+uiid+' [emitbtn]'"
        placement="bottom"
        :trigger="conf.trigger + ' method'"
        :trigger-in-delay="conf.triggerInDelay"
        :auto-reverse="conf.autoReverse"
    >
        <div class="btnlist" @click="_onBtnClick"><slot></slot></div>
    </morning-popover>
        
    </mor-dropdown>
</template>
 
<script>
const triggerDelayTime = 200;

export default {
    origin : 'UI',
    name : 'dropdown',
    props : {
        doneHidden : {
            type : Boolean,
            default : true
        },
        trigger : {
            type : String,
            default : 'click',
            validator : (value => ['hover', 'click', 'rclick', 'method'].indexOf(value) !== -1)
        },
        triggerInDelay : {
            type : Number,
            default : triggerDelayTime
        },
        autoReverse : {
            type : Boolean,
            default : true,
            validator : (value => (value >= 0))
        }
    },
    computed : {
        _conf : function () {

            return {
                doneHidden : this.doneHidden,
                trigger : this.trigger,
                triggerInDelay : this.triggerInDelay,
                autoReverse : this.autoReverse
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
        _onBtnClick : function () {

            if (this.conf.doneHidden) {

                this.toggle(false);

            }

        },
        toggle : function (show) {

            if (show === undefined) {

                show = !this.data.show;

            }

            show = !!show;

            if (show === this.data.show) {

                return this;

            }

            this.data.show = show;

            if (this.data.show) {

                this.Vue.nextTick(() => {

                    this.$refs[`ui-dropdown-popover-${this.uiid}`].show();
                    
                });

            } else {

                this.$refs[`ui-dropdown-popover-${this.uiid}`].hide();

            }

            return this;

        }
        
    },
    mounted : function () {

        this.data.$popperCon = this.$refs[`ui-dropdown-popover-${this.uiid}`].$el.querySelector('.popover-con');

        this.$refs[`ui-dropdown-popover-${this.uiid}`].$on('show', () => {

            this.data.show = true;
            this.$emit('emit');
            this.$emit('show');

        });

        this.$refs[`ui-dropdown-popover-${this.uiid}`].$on('hide', () => {

            this.data.show = false;
            this.$emit('emit');
            this.$emit('hide');

        });

    }
};
</script>
