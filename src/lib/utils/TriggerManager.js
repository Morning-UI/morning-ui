import arrayUniq                    from 'array-uniq';
import extend                       from 'extend';

let TriggerManager = {
    data : function () {

        return {
            Trigger : {
                $targets : null,
                triggers : '',
                triggerTimeouts : {},
                handlerMap : {},
                handlerInvoke : {},
                triggerEvtMap : {
                    click : ['click'],
                    rclick : ['mousedown'],
                    hover : ['mouseenter', 'mouseleave'],
                    foucs : ['focusin', 'focusout']
                },
                using : []
            }
        };

    },
    methods : {
        _triggerBlockContextmenu : function (evt) {

            evt.preventDefault();

        },
        _triggerCreateHandler : function (handler, trigger, delay) {

            return evt => {

                if (trigger === 'rclick') {

                    if (+evt.button !== 2) {

                        return;

                    }

                    evt.target.addEventListener('contextmenu', this._triggerBlockContextmenu);

                    setTimeout(() => {

                        evt.target.removeEventListener('contextmenu', this._triggerBlockContextmenu);
                    
                    });

                }
               
                if (this.Trigger.triggerTimeouts[trigger]) {

                    clearTimeout(this.Trigger.triggerTimeouts[trigger]);

                }

                // mouse leave target element to other target element not emit leave, when use hover
                if (trigger === 'hover' &&
                    evt.type === 'mouseleave' &&
                    (
                        this.Trigger.$targets.indexOf(evt.toElement) !== -1 ||
                        (
                            evt.toElement &&
                            evt.toElement.parentElement &&
                            this.Trigger.$targets.indexOf(evt.toElement.parentElement) !== -1
                        )
                    )
                ) {

                    return;

                }

                // only trigger is hover, delay is worked.
                if (trigger === 'hover' && delay > 0) {

                    this.Trigger.triggerTimeouts[trigger] = setTimeout(() => {

                        handler.call(this, evt);

                    }, delay);

                } else {

                    handler.call(this, evt);

                }

            };

        },
        _triggerChangeListeners : function ({
            $targets,
            evt,
            handlerInvoke = [],
            isAdd = true
        }) {

            for (let handler of handlerInvoke) {

                for (let $target of $targets) {

                    if (!$target) {

                        return;

                    }

                    if (isAdd) {
                        
                        $target.addEventListener(evt, handler);

                    } else {

                        $target.removeEventListener(evt, handler);

                    }

                }

            }

        },
        _triggerHandleListeners : function ($targets, triggers, isAdd = true) {

            let handlerInvoke = this.Trigger.handlerInvoke;

            for (let trigger of triggers) {

                if (trigger === 'click' ||
                    trigger === 'rclick') {

                    if (handlerInvoke[trigger] instanceof Array &&
                        handlerInvoke[trigger].length > 0) {

                        this._triggerChangeListeners({
                            $targets,
                            evt : this.Trigger.triggerEvtMap[trigger][0],
                            handlerInvoke : handlerInvoke[trigger],
                            isAdd
                        });

                        if (isAdd) {

                            this.Trigger.using.push(trigger);
                        
                        }

                    }

                } else if (trigger === 'hover' ||
                           trigger === 'foucs') {

                    if (handlerInvoke[trigger].in instanceof Array &&
                        handlerInvoke[trigger].in.length > 0) {

                        this._triggerChangeListeners({
                            $targets,
                            evt : this.Trigger.triggerEvtMap[trigger][0],
                            handlerInvoke : handlerInvoke[trigger].in,
                            isAdd
                        });

                        if (isAdd) {

                            this.Trigger.using.push(trigger);
                        
                        }

                    }

                    if (handlerInvoke[trigger].out instanceof Array &&
                        handlerInvoke[trigger].out.length > 0) {

                        this._triggerChangeListeners({
                            $targets,
                            evt : this.Trigger.triggerEvtMap[trigger][1],
                            handlerInvoke : handlerInvoke[trigger].out,
                            isAdd
                        });

                        if (isAdd) {

                            this.Trigger.using.push(trigger);
                        
                        }

                    }

                }
             
            }

            this.Trigger.using = arrayUniq(this.Trigger.using);

        },
        _triggerSetListeners : function () {

            if (!this.Trigger.$targets) {

                return;

            }

            let triggers = this.Trigger.triggers.split(' ');
            let $targets = this.Trigger.$targets;

            this._triggerHandleListeners($targets, triggers, true);

        },
        _triggerUnsetListeners : function () {

            if (!this.Trigger.$targets) {

                return;

            }

            let triggers = this.Trigger.using;
            let $targets = this.Trigger.$targets;

            this._triggerHandleListeners($targets, triggers, false);

        }
    },
    mounted : function () {

        this.$watch('Trigger.handlerMap', () => {

            let handlerInvoke = extend(true, {}, this.Trigger.handlerMap);
            let transformer = (obj, trigger) => {

                for (let key in obj) {

                    let val = obj[key];

                    if (typeof val === 'object' && val instanceof Array) {

                        for (let index in val) {

                            let handler = val[index];
                            let fn = handler;
                            let delay = 0;

                            if (handler.fn) {

                                fn = handler.fn;

                            }

                            if (+handler.delay > 0) {

                                delay = +handler.delay;

                            }

                            if (trigger === true) {

                                obj[key][index] = this._triggerCreateHandler(fn, key, delay);

                            } else {
                                
                                obj[key][index] = this._triggerCreateHandler(fn, trigger, delay);

                            }

                        }

                    } else if (trigger === true) {
                    
                        transformer(val, key);

                    } else {

                        transformer(val, trigger);

                    }

                }

            };

            transformer(handlerInvoke, true);

            this.Trigger.handlerInvoke = handlerInvoke;

        }, {
            deep : true,
            immediate : true
        });

    },
    beforeDestroy : function () {

        this._triggerUnsetListeners();

    }
};

export default TriggerManager;
