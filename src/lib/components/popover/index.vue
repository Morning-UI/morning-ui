<template>
    <mor-popover
        :_uiid="uiid"
        :class="[moreClass, tipClass]"

        :target="target"
        :placement="placement"
        :offset="offset"
        :trigger="trigger"
        :trigger-in-delay="triggerInDelay"
        :auto-reverse="autoReverse"
        :align="align"
    >

    <div class="popover-arrow"></div>
    <div class="popover-con">
        <div class="popover-title" v-if="$slots.title">
            <slot name="title"></slot>
        </div>
        <div class="popover-body">
            <slot></slot>
        </div>
    </div>

    </mor-popover>
</template>
 
<script>
import TipManager                   from 'Utils/TipManager';
import TriggerManager               from 'Utils/TriggerManager';
import GlobalEvent                  from 'Utils/GlobalEvent';

const triggerDelayTime = 200;

export default {
    origin : 'UI',
    name : 'popover',
    mixins : [TipManager, TriggerManager, GlobalEvent],
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
            default : '0 0'
        },
        trigger : {
            type : String,
            default : 'hover',
            validator : (value => ['hover', 'click', 'focus', 'method'].indexOf(value) !== -1)
        },
        triggerInDelay : {
            type : Number,
            default : triggerDelayTime
        },
        autoReverse : {
            type : Boolean,
            default : true,
            validator : (value => (value >= 0))
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

        },
        moreClass : function () {

            let classes = {
                in : this.data.in
            };

            classes[`align-${this.conf.align}`] = true;

            return classes;

        }
    },
    data : function () {

        return {
            data : {
                show : false,
                $target : null,
                activeTrigger : {},
                hoverState : '',
                hoverStates : {
                    in : 'in',
                    out : 'out'
                },
                classNames : {
                    fade : 'fade',
                    in : 'in'
                },
                timeout : null,
                in : false
            }
        };

    },
    methods : {
        _bindTarget : function () {
            
            let $target;

            try {

                $target = document.querySelector(this.conf.target);
            
            } catch (e) {}

            if (!$target) {

                return;

            }

            this.data.$target = $target;
            this._triggerUnsetListeners();

            if (this.conf.trigger.indexOf('hover') !== -1) {

                this.Trigger.$targets = [$target, this.$el];

            } else {

                this.Trigger.$targets = [$target];

            }

            this._setListeners();

        },
        _setListeners : function () {

            this._triggerSetListeners();

        },
        _showComplete () {

            let prevHoverState = this.data.hoverState;

            this.data.hoverState = null;
            this.data.show = true;

            this.$emit('show');
            this.$emit('emit');

            if (prevHoverState === this.data.hoverStates.out) {

                this._leave();

            }

            this.Vue.nextTick(() => {

                this._globalEventAdd('click', '_checkArea', true);

            });

        },
        _hideComplete : function () {

            this.data.show = false;

            this.$emit('hide');
            this.$emit('emit');

            this.data.hoverState = '';

            this._globalEventRemove('click', '_checkArea');

        },
        _enter : function (evt) {

            if (this._isEventObj(evt)) {

                if (evt.type === 'focusin') {

                    this.data.activeTrigger.focus = true;

                } else if (evt.type === 'mouseenter') {

                    this.data.activeTrigger.hover = true;

                }

            }

            if (this.$el.classList.value.split(' ').indexOf(this.data.classNames.in) !== -1 ||
                this.data.hoverState === this.data.hoverStates.in) {

                this.data.hoverState = this.data.hoverStates.in;

                return;

            }

            clearTimeout(this.data.timeout);

            this.data.hoverState = this.data.hoverStates.in;

            this.data.timeout = setTimeout(() => {

                if (this.data.hoverState === this.data.hoverStates.in) {

                    this.show();

                }

            });

        },
        _leave : function (evt) {

            if (this._isEventObj(evt)) {

                if (evt.type === 'focusout') {

                    this.data.activeTrigger.focus = false;

                } else if (evt.type === 'mouseleave') {

                    this.data.activeTrigger.hover = false;

                }

            }

            if (this._isWithActiveTrigger()) {

                return;

            }

            this.data.hoverState = this.data.hoverStates.out;

            this.data.timeout = setTimeout(() => {

                if (this.data.hoverState === this.data.hoverStates.out) {
                    
                    this.hide();

                }

            });

        },
        _isEventObj : function (evt) {

            return evt && /Event\]$/.test(evt.toString());

        },
        _isWithActiveTrigger : function () {

            return Object.values(this.data.activeTrigger).indexOf(true) !== -1;

        },
        _checkArea : function (evt) {

            if (evt.button === 2) {

                return;

            }

            const notFound = -1;

            if ((
                evt.path.indexOf(this.data.$target) === notFound &&
                evt.path.indexOf(this.$el) === notFound
            ) && this.conf.trigger.indexOf('click') !== -1) {

                this.hide();

            }

            return evt;

        },
        _clickToggle : function () {

            this.data.activeTrigger.click = !this.data.activeTrigger.click;
            this.toggle();

        },
        show : function () {

            this._tipCreate({
                placement : this.conf.placement,
                element : this.$el,
                target : this.data.$target,
                offset : this.conf.offset
            });

            this.data.in = true;
            this._showComplete();

            this.Vue.nextTick(() => {

                this._tipUpdate();
    
            });

            return this;

        },
        hide : function () {

            this.data.in = false;
            this._tipDestroy();
            this._hideComplete();

            return this;

        },
        toggle : function () {

            if (this._isWithActiveTrigger()) {

                this._enter();

            } else {

                this._leave();

            }
            
            return this;

        },
        position : function () {

            this._tipUpdate();

            return this;

        }
    },
    mounted : function () {

        this.Trigger.triggers = this.conf.trigger;
        this.Tip.autoReverse = this.conf.autoReverse;
        this.Tip.align = this.conf.align;

        this.$watch('conf.triggerInDelay', () => {

            this.Trigger.handlerMap = {
                click : [this._clickToggle],
                hover : {
                    in : [{
                        fn : this._enter,
                        delay : this.conf.triggerInDelay
                    }],
                    out : [this._leave]
                },
                focus : {
                    in : [this._enter],
                    out : [this._leave]
                }
            };

        }, {
            immediate : true
        });

        this.$watch('conf.target', () => {

            this._bindTarget();

            if (this.data.show) {
                
                this.hide();
                this.show();

            }

        });

        this.$watch('conf.trigger', () => {

            this.data.activeTrigger = {};
            this._triggerUnsetListeners();
            this.Trigger.triggers = this.conf.trigger;
            this._bindTarget();

        });

        this.$watch('conf.placement', () => {

            this._tipUpdate({
                placement : this.conf.placement
            });

        });

        this.$watch('conf.autoReverse', () => {

            this.Tip.autoReverse = this.conf.autoReverse;

        });

        this.$watch('conf.align', () => {

            this.Tip.align = this.conf.align;

        });

        this.$watch('conf.offset', () => {

            this._tipUpdate({
                offset : this.conf.offset
            });

        });
        
        this.Vue.nextTick(() => {

            this._bindTarget();

        });

    },
    beforeDestroy : function () {

        this._globalEventRemove('click', '_checkArea');
        clearTimeout(this.data.timeout);

    }
};
</script>

<style lang="less" src="./index.less"></style>
