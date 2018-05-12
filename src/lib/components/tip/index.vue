<template>
    <mor-tip
        :_uiid="uiid"
        :class="[colorClass]"

        :target="target"
        :placement="placement"
        :offset="offset"
        :trigger="trigger"
    >
    
    <div class="tip-arrow"></div>
    <div class="tip-content">
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
            validator : (value => ['hover', 'click', 'focus'].indexOf(value) !== -1)
        }
    },
    computed : {
        _conf : function () {

            return {
                target : this.target,
                placement : this.placement,
                offset : this.offset,
                trigger : this.trigger
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
            this.Trigger.$targets = [$target];
            this._triggerSetListeners();

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

            clearTimeout(this.data.timeout);

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
        _hasContent : function () {

            if (this.data.title) {

                return true;

            }

            if (!this.$slots ||
                !this.$slots.default ||
                !this.$slots.default[0]) {

                return false;

            }

            return !!this.$slots.default[0].text ||
                (this.$slots.default[0].children && !!this.$slots.default[0].children.length);

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

            this._tipCreate({
                placement : this.conf.placement,
                element : this.$el,
                target : this.data.$target,
                offset : this.conf.offset
            });

            this.$el.classList.add(this.data.classNames.in);
            this._showComplete();

            return this;

        },
        hide : function () {

            if (!this._hasContent()) {

                return this;

            }

            this.$el.classList.remove(this.data.classNames.in);
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

        }
    },
    mounted : function () {

        this.Trigger.handleMap = {
            click : [this.toggle],
            hover : {
                mouseenter : [this._enter],
                mouseleave : [this._leave]
            },
            focus : {
                focusin : [this._enter],
                focusout : [this._leave]
            }
        };
        this.Trigger.triggers = this.conf.trigger;

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
            this._triggerSetListeners();

        });

        this.$watch('conf.placement', () => {

            this._tipUpdate({
                placement : this.conf.placement
            });

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
