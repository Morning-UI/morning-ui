import Vue                          from 'vue';
import UI                           from 'Common/ui';
import Form                         from 'Common/form';
import components                   from './components';

let morning = {
    version : '0.10.0',
    _origin : {
        UI,
        Form
    },
    _components : components,
    _uiid : 1,
    _findCache : {},
    map : {},
    findVM : function (ref) {

        if (this._findCache[ref]) {
            
            return this._findCache[ref];

        }

        for(let vm of Object.values(this.map)) {

            if (vm.$vnode &&
                vm.$vnode.data &&
                vm.$vnode.data.ref === ref) {

                this._findCache[ref] = vm;
                
                return vm;
            
            }
        }

    }
};

Vue.config.ignoredElements = [];

// register component
for (let name in morning._components) {

    let component = morning._components[name];

    Vue.component(`ui-${component.options.name}`, component);
    Vue.config.ignoredElements.push(`i-${component.options.name}`);

}

window.morning = morning;
