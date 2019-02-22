<template>
    <mor-dropdown
        :_uiid="uiid"
        :class="[showClass]"
        :auto-close="autoClose"
        :trigger="trigger"
        :trigger-in-delay="triggerInDelay"
        :auto-reverse="autoReverse"
    >
    
    <slot name="showbtn"></slot>

    <div
        class="mor-dropdown-wrap"
        :class="[showClass]"
    >
        <div class="btnlist" ><slot></slot></div>
    </div>
        
    </mor-dropdown>
</template>
 
<script>
import GlobalEvent                  from 'Utils/GlobalEvent';
import TipManager                   from 'Utils/TipManager';
import TriggerManager               from 'Utils/TriggerManager';

const triggerDelayTime = 200;

export default {
    origin : 'UI',
    name : 'dropdown',
    mixins : [GlobalEvent, TipManager, TriggerManager],
    props : {
        autoClose : {
            type : Boolean,
            default : true
        },
        trigger : {
            type : String,
            default : 'click',
            validator : (value => ['hover', 'click', 'rclick'].indexOf(value) !== -1)
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
                autoClose : this.autoClose,
                trigger : this.trigger,
                triggerInDelay : this.triggerInDelay,
                autoReverse : this.autoReverse
            };

        },
        showClass : function () {

            return {
                show : this.data.show,
                hide : !this.data.show && !this.data.first
            };

        }
    },
    data : function () {

        return {
            data : {
                show : false,
                first : true,
                isCheckArea : false,
                $wrap : null,
                $arrow : null
            }
        };

    },
    methods : {
        _checkArea : function (evt) {

            if (evt.button === 2) {

                return;

            }

            const notFound = -1;

            this.data.isCheckArea = true;

            let $emitbtn = this.$el.querySelector('[emitbtn]');

            if ((
                evt.path.indexOf($emitbtn) === notFound && evt.path.indexOf(this.data.$wrap) !== notFound
            ) && this.conf.autoClose) {

                this.toggle();

            }

            if ((
                (evt.path.indexOf($emitbtn) === notFound && evt.path.indexOf(this.data.$wrap) === notFound) ||
                (evt.path.indexOf($emitbtn) !== notFound)
            ) && this.conf.trigger === 'click') {

                this.toggle();

            }

            setTimeout(() => {
        
                this.data.isCheckArea = false;

            });

        },
        _show : function () {

            this.toggle(true);

        },
        _hide : function (evt) {

            if (evt.type === 'mouseleave' &&
                (this.data.$wrap.contains(evt.relatedTarget) ||
                this.$el.contains(evt.relatedTarget))) {

                return;

            }

            this.toggle(false);

        },
        _click : function () {

            if (this.data.isCheckArea) {

                return;

            }

            this.toggle();

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

                if (!this.Tip.tether &&
                    this.data.$arrow) {

                    this.data.$wrap.style.minWidth = `${this.data.$wrap.offsetWidth + this.data.$arrow.offsetWidth}px`;

                }

                this.Vue.nextTick(() => {
                    
                    this._tipCreate({
                        placement : 'bottom',
                        element : this.data.$wrap,
                        target : this.$el,
                        offset : '0 0'
                    });
                    
                });

                this.$emit('show');

            } else {

                this.$emit('hide');

            }

            return this;

        }
        
    },
    mounted : function () {

        let $emitbtn = this.$el.querySelector(`[emitbtn]`);

        this.data.$wrap = this.$el.querySelector('.mor-dropdown-wrap');
        this.data.$arrow = this.$el.querySelector('mor-btn>.mo-icon, mor-link>.mo-icon');

        this.Trigger.$targets = [$emitbtn, this.data.$wrap];
        this.Trigger.triggers = this.conf.trigger;
        this.Tip.autoReverse = this.conf.autoReverse;

        this.$watch('conf.triggerInDelay', () => {

            this.Trigger.handlerMap = {
                click : [this._click],
                rclick : [this._click],
                hover : {
                    in : [{
                        fn : this._show,
                        delay : this.conf.triggerInDelay
                    }],
                    out : [this._hide]
                }
            };

            this.Vue.nextTick(() => this._triggerSetListeners());

        }, {
            immediate : true
        });

        this.$watch('conf.trigger', () => {

            this._triggerUnsetListeners();
            this.Trigger.triggers = this.conf.trigger;
            this._triggerSetListeners();

        });

        this.$on('show', () => {

            this.data.first = false;
            this.data.show = true;

            this.Vue.nextTick(() => {

                this._globalEventAdd('click', '_checkArea', true);

            });
            
            this.$emit('emit');

        });

        this.$on('hide', () => {

            this.data.first = false;
            this.data.show = false;

            this._globalEventRemove('click', '_checkArea');

            this.$emit('emit');

        });

    },
    beforeDestroy : function () {

        this._globalEventRemove('click', '_checkArea');

    }
};
</script>
