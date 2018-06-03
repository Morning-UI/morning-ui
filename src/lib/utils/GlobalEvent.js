import arrayUniq                        from 'array-uniq';

let globalHandler = function (...args) {

    for (let vm of this.vms) {

        vm[this.method](...args);

    }

};

let GlobalEvent = {
    data : function () {

        return {};

    },
    methods : {
        _globalEventAdd : function (evtName, methodName) {

            let morning = this.morning;

            if (morning._globalEventListener[evtName] === undefined) {

                morning._globalEventListener[evtName] = {};

            }

            if (morning._globalEventListener[evtName][`${this.$options.name}.${methodName}`] === undefined) {

                morning._globalEventListener[evtName][`${this.$options.name}.${methodName}`] = {
                    vms : [],
                    method : methodName,
                    handler : null
                };

            }

            let evtNamespace = morning._globalEventListener[evtName][`${this.$options.name}.${methodName}`];

            evtNamespace.vms.push(this);
            evtNamespace.vms = arrayUniq(evtNamespace.vms);

            if (evtNamespace.handler === null) {

                evtNamespace.handler = globalHandler.bind(evtNamespace);

                if (evtName === 'hashchange') {

                    window.addEventListener(evtName, evtNamespace.handler);

                } else {

                    document.addEventListener(evtName, evtNamespace.handler);

                }

            }

            return this;

        },
        _globalEventRemove : function (evtName, methodName) {

            let morning = this.morning;

            if (!morning._globalEventListener[evtName] ||
                !morning._globalEventListener[evtName][`${this.$options.name}.${methodName}`]) {

                return this;

            }

            let evtNamespace = morning._globalEventListener[evtName][`${this.$options.name}.${methodName}`];
            let index = evtNamespace.vms.indexOf(this);

            if (index !== -1) {

                evtNamespace.vms.splice(index, 1);

            }

            if (evtNamespace.vms.length === 0) {

                if (evtName === 'hashchange') {

                    window.removeEventListener(evtName, evtNamespace.handler);

                } else {

                    document.removeEventListener(evtName, evtNamespace.handler);

                }

                delete morning._globalEventListener[evtName];
            
            }

        }
    }
};

export default GlobalEvent;
