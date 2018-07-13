<template>
    <mor-tip
        :_uiid="uiid"
        :class="[colorClass, moreClass]"

        :target="target"
        :placement="placement"
        :offset="offset"
        :trigger="trigger"
        :trigger-in-delay="triggerInDelay"
        :auto-reverse="autoReverse"
    >

    <div class="arrow"></div>
    <div class="con">
        <template v-if="!$slots.default">
            {{data.title}}
        </template>
        <template v-else>
            <slot></slot>
        </template>
    </div>

    </mor-tip>
</template>
 
<script>
import TipManager                   from 'Utils/TipManager';
import TriggerManager               from 'Utils/TriggerManager';

export default {
    origin : 'UI',
    name : 'tip',
    mixins : [TipManager, TriggerManager],
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
            default : 200
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
                target : this.target,
                placement : this.placement,
                offset : this.offset,
                trigger : this.trigger,
                triggerInDelay : this.triggerInDelay,
                autoReverse : this.autoReverse
            };

        },
        moreClass : function () {

            return {
                'only-has-text' : this.data.onlyHasText,
                in : this.data.in
            };

        }
    },
    data : function () {

        return {
            data : {
                show : false,
                title : null,
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
                onlyHasText : false,
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

            if ($target.attributes.title) {

                this.data.title = $target.getAttribute('title');

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
        _unsetListeners : function () {

            this._triggerUnsetListeners();

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
        _checkOnlyHasText : function () {

            if (
                (
                    !this.$slots.default &&
                    this.data.title
                ) || (
                    this.$slots.default &&
                    this.$slots.default.length === 1 &&
                    this.$slots.default[0].tag === undefined &&
                    this.$slots.default[0].text
                )
            ) {

                this.data.onlyHasText = true;

            } else {

                this.data.onlyHasText = false;

            }

        },
        _hasContent : function () {

            if (this.data.title) {

                return true;

            }

            if (!this.$slots ||
                !this.$slots.default ||
                !this.$slots.default[0]) {

                return false;

            }

            let hasContent = !(
                this.$slots.default.length === 1 &&
                this.$slots.default[0].tag === undefined &&
                !this.$slots.default[0].text
            );

            return hasContent;

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

        },
        _hideComplete : function () {

            this.data.show = false;

            this.$emit('hide');
            this.$emit('emit');

            this.data.hoverState = '';

        },
        _isWithActiveTrigger : function () {

            return Object.values(this.data.activeTrigger).indexOf(true) !== -1;

        },
        show : function () {

            if (!this._hasContent()) {

                return this;

            }

            this._checkOnlyHasText();

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

            if (!this._hasContent()) {

                return this;

            }

            this.data.in = false;
            this._tipDestroy();
            this._hideComplete();

            return this;

        },
        toggle : function () {

            this.data.activeTrigger.click = !this.data.activeTrigger.click;

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

        this.$watch('conf.triggerInDelay', () => {

            this.Trigger.handlerMap = {
                click : [this.toggle],
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

        clearTimeout(this.data.timeout);

    }
};
</script>

<style lang="less" src="./index.less"></style>
