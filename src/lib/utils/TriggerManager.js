import arrayUniq                    from 'array-uniq';

let TriggerManager = {
    data : function () {

        return {
            Trigger : {
                $targets : null,
                triggers : '',
                handleMap : {},
                using : []
            }
        };

    },
    methods : {
        _triggerChangeListeners : function ($targets, evt, handleMap = [], isAdd = true) {

            for (let handle of handleMap) {

                for (let $target of $targets) {

                    if (isAdd) {
                        
                        $target.addEventListener(evt, handle);

                    } else {

                        $target.removeEventListener(evt, handle);

                    }

                }

            }

        },
        _triggerHandleListeners : function ($targets, triggers, isAdd = true) {

            let handleMap = this.Trigger.handleMap;

            for (let trigger of triggers) {

                if (trigger === 'click' &&
                    handleMap.click instanceof Array &&
                    handleMap.click.length > 0) {

                    this._triggerChangeListeners($targets, 'click', handleMap.click, isAdd);

                } else if (trigger === 'hover' && handleMap.hover) {

                    if (handleMap.hover.mouseenter instanceof Array &&
                        handleMap.hover.mouseenter.length > 0) {

                        this._triggerChangeListeners($targets, 'mouseenter', handleMap.hover.mouseenter, isAdd);

                    }

                    if (handleMap.hover.mouseleave instanceof Array &&
                        handleMap.hover.mouseleave.length > 0) {

                        this._triggerChangeListeners($targets, 'mouseleave', handleMap.hover.mouseleave, isAdd);

                    }

                } else if (trigger === 'foucs' && handleMap.foucs) {

                    if (handleMap.foucs.focusin instanceof Array &&
                        handleMap.foucs.focusin.length > 0) {

                        this._triggerChangeListeners($targets, 'focusin', handleMap.foucs.focusin, isAdd);

                    }

                    if (handleMap.foucs.focusout instanceof Array &&
                        handleMap.foucs.focusout.length > 0) {

                        this._triggerChangeListeners($targets, 'focusout', handleMap.foucs.focusout, isAdd);

                    }

                }

                if (isAdd) {

                    this.Trigger.using.push(trigger);

                } else if (this.Trigger.using.indexOf(trigger) > -1) {

                    this.Trigger.using.splice(this.Trigger.using.indexOf(trigger), 1);

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
    beforeDestroy : function () {

        this._triggerUnsetListeners();

    }
};

export default TriggerManager;
