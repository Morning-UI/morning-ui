import extend                       from 'extend';
import Popper                       from 'Npm/popper.js/dist/popper.min.js';
import PopupManager                 from 'Utils/PopupManager';
import IndexManager                 from 'Utils/IndexManager';
import TriggerManager               from 'Utils/TriggerManager';
import GlobalEvent                  from 'Utils/GlobalEvent';

let TipManager = {
    mixins : [PopupManager, IndexManager, TriggerManager, GlobalEvent],
    data : function () {

        return {
            Tip : {
                $target : null,
                popper : null,
                align : 'middle',
                options : {},
                data : {},
                activeTrigger : {},
                hoverState : '',
                hoverStates : {
                    in : 'in',
                    out : 'out'
                },
                classNames : {
                    in : 'tip-target-hover'
                },
                timeout : null
            }
        };

    },
    methods : {
        _tipOptionsHandler : function (options) {

            options = extend(true, {
                reference : null,
                popper : null,
                options : {
                    placement : 'top',
                    offset : '0 0',
                    onCreate : data => {

                        this.Tip.data = data;
                        this._tipPopperShow();

                    },
                    onUpdate : data => {

                        this.Tip.data = data;
                        this._tipPopperShow(true);

                    },
                    modifiers : {
                        flip : {
                            enabled : false
                        },
                        hide : {
                            true : false
                        },
                        preventOverflow : {
                            enabled : false,
                            boundariesElement : 'viewport'
                        },
                        arrow : {
                            enabled : true,
                            element : this.$el.querySelector('.tip-arrow')
                        },
                        offset : {
                            enabled : true,
                            offset : '0, 0'
                        }
                    }
                }
            }, this.Tip.options, options);

            if (this.Tip.align !== 'middle') {

                options.options.placement = `${options.options.placement}-${this.Tip.align}`;

            }

            if (options.options.modifiers.flip.enabled) {

                options.options.modifiers.preventOverflow.enabled = true;

            }

            this.Tip.options = options;

            return options;

        },
        _tipPopperCreate : function (options) {

            if (this.Tip.popper) {

                this._tipUpdate();

                return;

            }

            this._tipOptionsHandler(options);
            this.Popup.$target = this.Tip.options.popper;
            this._popupShow();
            // this.Tip.options.placement = 'top';
            this._tipPopperHide();

            this.Vue.nextTick(() => {

                this.Tip.popper = new Popper(
                    this.Tip.options.reference,
                    this.Tip.options.popper,
                    this.Tip.options.options
                );

            });

        },
        _tipPopperShow : function (dontUpdate = false) {

            this.Tip.options.popper.style.zIndex = this._indexMax();
            this.Tip.options.popper.style.opacity = 1;
            this.Tip.options.popper.style['pointer-events'] = 'auto';
            this._tipRemoveClasses(this.Tip.options.popper, 'tip-placement-');
            this.Tip.options.popper.classList.add(`tip-placement-${this.Tip.data.placement.split('-')[0]}`);

            if (!dontUpdate) {

                this._tipUpdate();

            }

        },
        _tipPopperHide : function () {

            this.Tip.options.popper.style.zIndex = -1;
            this.Tip.options.popper.style.opacity = 0;
            this.Tip.options.popper.style['pointer-events'] = 'none';
            this._tipRemoveClasses(this.Tip.options.popper, 'tip-placement-');

        },
        _tipUpdate : function () {

            if (this.Tip.popper) {

                this.Tip.popper.update();

            }

        },
        _tipPopperDestroy : function () {

            if (this.Tip.popper) {

                this._tipPopperHide();
                this.Tip.popper.destroy();
                this.Tip.popper = null;

            }

        },
        _tipUpdateOptions : function (options) {

            options = this._tipOptionsHandler(options);

            if (this.Tip.popper) {

                this._tipPopperDestroy();
                this._tipPopperCreate(options);

            }

        },
        _tipRemoveClasses : function ($ele, className) {

            let classes = $ele.classList.value.split(' ');

            for (let cls of classes) {

                let reg = new RegExp(className, 'g');

                if (reg.test(cls)) {

                    $ele.classList.remove(cls);

                }

            }

        },
        _tipBindTarget : function () {
            
            let $target;

            try {

                $target = document.querySelector(this.conf.target);
            
            } catch (e) {}

            if (!$target) {

                return;

            }

            this.Tip.$target = $target;
            this._triggerUnsetListeners();

            if (this.Trigger.triggers.indexOf('hover') !== -1) {

                this.Trigger.$targets = [$target, this.$el];

            } else {

                this.Trigger.$targets = [$target];

            }

            this._triggerSetListeners();
            this.$emit('_tipManagerBindTarget', $target);

        },
        _tipIsEventObj : function (evt) {

            return evt && /Event\]$/.test(evt.toString());

        },
        _tipIsWithActiveTrigger : function () {

            return Object.values(this.Tip.activeTrigger).indexOf(true) !== -1;

        },
        _tipCleanAllActiveTrigger : function () {

            for (let key in this.Tip.activeTrigger) {

                this.Tip.activeTrigger[key] = false;

            }

        },
        _tipCheckArea : function (evt) {

            if (evt.button === 2) {

                return;

            }

            const notFound = -1;

            if ((
                evt.path.indexOf(this.Tip.$target) === notFound &&
                evt.path.indexOf(this.$el) === notFound
            ) &&
                this.conf.trigger.indexOf('click') !== -1 &&
                this.Tip.activeTrigger.click) {

                this.Tip.activeTrigger.click = false;
                this._tipLeave();

                return evt;

            }

            if ((
                evt.path.indexOf(this.Tip.$target) === notFound &&
                evt.path.indexOf(this.$el) === notFound
            ) && this.conf.trigger.indexOf('rclick') !== -1 &&
                this.Tip.activeTrigger.rclick) {

                this.Tip.activeTrigger.rclick = false;
                this._tipLeave();

                return evt;

            }

            return evt;

        },
        _tipShowComplete () {

            let prevHoverState = this.Tip.hoverState;

            this.Tip.hoverState = null;

            if (prevHoverState === this.Tip.hoverStates.out) {

                this._tipLeave();

            }

            this.Vue.nextTick(() => {

                this._globalEventAdd('click', '_tipCheckArea', true);

            });

            this.$emit('_tipManagerShow');

        },
        _tipHideComplete : function () {

            this._tipCleanAllActiveTrigger();
            this.Tip.hoverState = '';
            this._globalEventRemove('click', '_tipCheckArea');
            this.$emit('_tipManagerHide');

        },
        _tipShow : function () {

            this.$emit('_tipManagerWillShow');

            this._tipPopperCreate({
                popper : this.$el,
                reference : this.Tip.$target,
                options : {
                    placement : this.conf.placement,
                    modifiers : {
                        offset : {
                            offset : this.conf.offset
                        },
                        flip : {
                            enabled : this.conf.autoReverse
                        }
                    }
                }
            });

            this.$el.classList.add('tip-target-hover');
            this._tipShowComplete();

        },
        _tipHide : function () {

            this.$el.classList.remove('tip-target-hover');
            this._tipPopperDestroy();
            this._tipHideComplete();

        },
        _tipToggle : function () {

            if (this._tipIsWithActiveTrigger()) {

                this._tipEnter();

            } else {

                this._tipLeave();

            }

        },
        _tipClickToggle : function () {

            this.Tip.activeTrigger.click = !this.Tip.activeTrigger.click;
            this._tipToggle();

        },
        _tipRclickToggle : function () {

            this.Tip.activeTrigger.rclick = !this.Tip.activeTrigger.rclick;
            this._tipToggle();

        },
        _tipEnter : function (evt) {

            if (this._tipIsEventObj(evt)) {

                if (evt.type === 'focusin') {

                    this.Tip.activeTrigger.focus = true;

                } else if (evt.type === 'mouseenter') {

                    this.Tip.activeTrigger.hover = true;

                }

            }

            if (this.$el.classList.value.split(' ').indexOf(this.Tip.classNames.in) !== -1 ||
                this.Tip.hoverState === this.Tip.hoverStates.in) {

                this.Tip.hoverState = this.Tip.hoverStates.in;

                return;

            }

            clearTimeout(this.Tip.timeout);

            this.Tip.hoverState = this.Tip.hoverStates.in;

            this.Tip.timeout = setTimeout(() => {

                if (this.Tip.hoverState === this.Tip.hoverStates.in) {

                    this._tipShow();

                }

            });

        },
        _tipLeave : function (evt) {

            if (this._tipIsEventObj(evt)) {

                if (evt.type === 'focusout') {

                    this.Tip.activeTrigger.focus = false;

                } else if (evt.type === 'mouseleave') {

                    this.Tip.activeTrigger.hover = false;

                }

            }

            if (this._tipIsWithActiveTrigger()) {

                return;

            }

            this.Tip.hoverState = this.Tip.hoverStates.out;

            this.Tip.timeout = setTimeout(() => {

                if (this.Tip.hoverState === this.Tip.hoverStates.out) {
                    
                    this._tipHide();

                }

            });

        },
    },
    mounted : function () {

        this.Trigger.triggers = this.conf.trigger;
        this.$el.style.zIndex = -1;
        this.$el.style.opacity = 0;
        this.$el.style['pointer-events'] = 'none';

        if (this.conf.placement !== undefined) {

            this.$watch('conf.placement', () => {

                this._tipUpdateOptions({
                    options : {
                        placement : this.conf.placement
                    }
                });

            });

        }

        if (this.conf.autoReverse !== undefined) {

            this.$watch('conf.autoReverse', () => {

                this._tipUpdateOptions({
                    options : {
                        modifiers : {
                            flip : {
                                enabled : this.conf.autoReverse
                            }
                        }
                    }
                });

            });

        }

        if (this.conf.align !== undefined) {

            this.Tip.align = this.conf.align;

            this.$watch('conf.align', () => {

                this.Tip.align = this.conf.align;
                
            });

        }

        if (this.conf.offset !== undefined) {

            this.$watch('conf.offset', () => {

                this._tipUpdateOptions({
                    options : {
                        modifiers : {
                            offset : {
                                offset : this.conf.offset
                            }
                        }
                    }
                });

            });

        }

        if (this.conf.triggerInDelay !== undefined) {

            this.$watch('conf.triggerInDelay', () => {

                this.Trigger.handlerMap = {
                    click : [this._tipClickToggle],
                    rclick : [this._tipRclickToggle],
                    hover : {
                        in : [{
                            fn : this._tipEnter,
                            delay : this.conf.triggerInDelay
                        }],
                        out : [this._tipLeave]
                    },
                    focus : {
                        in : [this._tipEnter],
                        out : [this._tipLeave]
                    }
                };

            }, {
                immediate : true
            });

        }

        if (this.conf.trigger !== undefined) {

            this.$watch('conf.trigger', () => {

                this.Tip.activeTrigger = {};
                this._triggerUnsetListeners();
                this.Trigger.triggers = this.conf.trigger;
                this._tipBindTarget();

            });

        }

        if (this.conf.target !== undefined) {

            this.$watch('conf.target', () => {

                this._tipBindTarget();

                if (this.Tip.popper) {
                    
                    this._tipHide();
                    this._tipShow();

                }

            });

        }

        this.Vue.nextTick(() => {

            this._tipBindTarget();

        });

    },
    beforeDestroy : function () {

        this._tipPopperDestroy();
        this._globalEventRemove('click', '_tipCheckArea');
        clearTimeout(this.Tip.timeout);

    }
};

export default TipManager;
