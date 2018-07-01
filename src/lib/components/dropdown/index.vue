<template>
    <mor-dropdown
        :_uiid="uiid"
        :class="[showClass]"
        :auto-close="autoClose"
        :trigger="trigger"
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
        }
    },
    computed : {
        _conf : function () {

            return {
                autoClose : this.autoClose,
                trigger : this.trigger
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

            const notFound = -1;

            this.data.isCheckArea = true;

            let $emitbtn = this.$el.querySelector('[emitbtn]');

            if (
                (evt.path.indexOf($emitbtn) === notFound && evt.path.indexOf(this.data.$wrap) === notFound) ||
                (evt.path.indexOf($emitbtn) !== notFound) ||
                (this.conf.autoClose && evt.path.indexOf($emitbtn) === notFound && evt.path.indexOf(this.data.$wrap) !== notFound)
            ) {

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
                (this.data.$wrap.contains(evt.toElement) ||
                this.$el.contains(evt.toElement))) {

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

                this._tipCreate({
                    placement : 'bottom',
                    element : this.data.$wrap,
                    target : this.$el,
                    offset : '0 0'
                });

                this.$emit('show');

            } else {

                this.$emit('hide');

            }

            return this;

        }
        
    },
    created : function () {

        this.Trigger.handlerMap = {
            click : [this._click],
            rclick : [this._click],
            hover : {
                in : [this._show],
                out : [this._hide]
            },
        };

    },
    mounted : function () {

        let $emitbtn = this.$el.querySelector(`[emitbtn]`);

        this.data.$wrap = this.$el.querySelector('.mor-dropdown-wrap');
        this.data.$arrow = this.$el.querySelector('mor-btn>.mo-icon, mor-link>.mo-icon');

        this.Trigger.$targets = [$emitbtn, this.data.$wrap];
        this.Trigger.triggers = this.conf.trigger;
        this.Tip.autoReverse = false;
        this._triggerSetListeners();

        this.$watch('conf.trigger', () => {

            this._triggerUnsetListeners();
            this.Trigger.triggers = this.conf.trigger;
            this._triggerSetListeners();

        });

        this.$on('show', () => {

            this.data.first = false;
            this.data.show = true;

            setTimeout(() => {

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

<style lang="less" src="./index.less"></style>
