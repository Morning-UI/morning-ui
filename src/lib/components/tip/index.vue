<template>
    <i-tip
        :_uiid="uiid"
        :class="[styleClass]"

        :target="target"
        :placement="placement"
        :offset="offset"
        :trigger="trigger"
    >
    
    <div class="tipArrow"></div>
    <div class="tipContent">
        <template v-if="!$slots.default">
            {{data.title}}
        </template>
        <template v-else>
            <slot></slot>
        </template>
    </div>
        
    </i-tip>
</template>
 
<script>
import Tether                       from 'tether';
import UI                           from 'Common/ui';
import PopupManager                 from 'Utils/PopupManager';

export default UI.extend({
    name : 'tip',
    mixins : [PopupManager],
    props : {
        target : {
            type : [String, Object],
            default : null
        },
        placement : {
            type : String,
            default : 'top'
        },
        offset : {
            type : String,
            default : '0 0'
        },
        trigger : {
            type : String,
            default : 'hover'
        }
    },
    data : function () {

        return {
            conf : {
                target : this.target,
                placement : this.placement,
                offset : this.offset,
                trigger : this.trigger
            },
            data : {
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
                // isEnabled : true,
                classPrefix : 'morningTether',
                attachmentMap : {
                    top : 'bottom center',
                    right : 'middle left',
                    bottom : 'top center',
                    left : 'middle right'
                },
                tether : null
            }
        };

    },
    methods : {
        _setListeners : function () {

            let triggers = this.conf.trigger.split(' ');

            for (let trigger of triggers) {

                if (trigger === 'click') {

                    this.data.$target.addEventListener('click', this.toggle);

                } else if (trigger === 'hover') {

                    this.data.$target.addEventListener('mouseenter', this._enter);
                    this.data.$target.addEventListener('mouseleave', this._leave);

                } else if (trigger === 'foucs') {

                    this.data.$target.addEventListener('focusin', this._enter);
                    this.data.$target.addEventListener('focusout', this._leave);

                }

            }

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
        _getAttachment : function (placement) {

            return this.data.attachmentMap[placement];

        },
        _showComplete () {

            let prevHoverState = this.data.hoverState;

            this.data.hoverState = null;

            this.$emit('show');
            this.$emit('emit');

            if (prevHoverState === this.data.hoverStates.out) {

                this._leave();

            }

        },
        _hideComplete : function () {

            this.$emit('hide');
            this.$emit('emit');

            this.data.hoverState = '';

        },
        _cleanupTether : function () {

            if (this.data.tether) {

                this.data.tether.destroy();
                this.data.tether = null;

                this.$el.removeAttribute('style');

                this._removeTetherClasses(this.$el);
                this._removeTetherClasses(this.data.$target);

            }

        },
        _removeTetherClasses : function (ele) {

            let classes = ele.classList.value.split(' ');

            for (let cls of classes) {

                let reg = new RegExp(`^${this.data.classPrefix}\\-`, 'g');

                if (reg.test(cls)) {

                    ele.classList.remove(cls);

                }

            }

        },
        _isWithActiveTrigger : function () {

            return Object.values(this.data.activeTrigger).indexOf(true) !== -1;

        },
        show : function () {

            if (!this._hasContent()) {

                return;

            }

            this._popupShow();

            let attachment = this._getAttachment(this.conf.placement),
                targetOffset = '0 0',
                options = {};

            if (this.conf.placement === 'left') {

                targetOffset = '0 -10px';

            }

            options = {
                attachment,
                element : this.$el,
                target : this.data.$target,
                targetOffset,
                // classes : this.tetherClass,
                classPrefix : this.data.classPrefix,
                offset : this.conf.offset
            };

            this.data.tether = new Tether(options);
            this.data.tether.position();
            // this.data.tether.setOptions(_.extend({}, options, {targetOffset: '0 0'}));

            this.$el.classList.add(this.data.classNames.in);
            this._showComplete();

        },
        hide : function () {

            if (!this._hasContent()) {

                return;

            }

            this.$el.classList.remove(this.data.classNames.in);
            this._popupHide();
            this._cleanupTether();
            this._hideComplete();

        },
        toggle : function () {

            this.data.activeTrigger.click = !this.data.activeTrigger.click;

            if (this._isWithActiveTrigger()) {

                this._enter();

            } else {

                this._leave();

            }

        }
    },
    mounted : function () {

        let $target;

        this.Vue.nextTick(() => {

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

            this._setListeners();

        });

    },
    beforeDestroy : function () {

        clearTimeout(this.data.timeout);

        this._cleanupTether();

        this.data.$target.removeEventListener('click', this.toggle);
        this.data.$target.removeEventListener('mouseenter', this._enter);
        this.data.$target.removeEventListener('mouseleave', this._leave);
        this.data.$target.removeEventListener('focusin', this._enter);
        this.data.$target.removeEventListener('focusout', this._leave);

    }
});
</script>

<style lang="less" src="index.less"></style>
