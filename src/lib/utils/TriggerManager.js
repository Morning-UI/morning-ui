import arrayUniq                    from 'array-uniq';
import extend                       from 'extend';

let TriggerManager = {
    data : function () {

        return {
            Trigger : {
                $targets : null,
                triggers : '',
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
        _triggerCreateHandler : function (handler, trigger) {

            return (evt) => {

                if (trigger === 'rclick') {

                    if (+evt.button !== 2) {

                        return;

                    }

                    evt.target.addEventListener('contextmenu', this._triggerBlockContextmenu);

                    setTimeout(() => {

                        evt.target.removeEventListener('contextmenu', this._triggerBlockContextmenu);
                    
                    });

                }

                handler.call(this, evt);


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

                            if (trigger === true) {

                                obj[key][index] = this._triggerCreateHandler(handler, key);

                            } else {
                                
                                obj[key][index] = this._triggerCreateHandler(handler, trigger);

                            }

                        }

                    } else {

                        if (trigger === true) {
                        
                            transformer(val, key);

                        } else {

                            transformer(val, trigger);

                        }

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
