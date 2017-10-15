import Vue                              from 'vue';
import extend                           from 'extend';
import {default as UI, injectMorning}   from 'Common/ui';
import Form                             from 'Common/form';
import components                       from './components';

// UMD : https://github.com/umdjs/umd/blob/master/templates/amdWebGlobal.js
((root, factory) => {

    if (typeof define === 'function' && define.amd) {

        define(() => {

            // Also create a global in case some scripts
            // that are loaded still are looking for
            // a global even when an AMD loader is in use.
            return (root.morning = factory());

        });

    } else {

        root.morning = factory();

    }

})(window, () => {

    let morning = {
        _origin : {
            UI,
            Form
        },
        _components : components,
        _ignoreElements : [],
        _uiid : 1,
        _findCache : {},
        _popupId : 0,
        _indexGroups : {},
        _moveListener : [],
        _selectClickListener : [],
        _groupData : {},
        _groupVmMap : {},
        version : '0.10.0',
        map : {},
        findVM : function (ref) {

            if (this._findCache[ref]) {
                
                return this._findCache[ref];

            }

            for (let vm of Object.values(this.map)) {

                if (vm.$vnode &&
                    vm.$vnode.data &&
                    vm.$vnode.data.ref === ref) {

                    this._findCache[ref] = vm;
                    
                    return vm;
                
                }

            }

        },
        getGroup : function (groupName) {

            return extend(true, {}, this._groupData[groupName]);

        },
        getGroupJson : function (groupName) {

            return JSON.stringify(this.getGroupData(groupName));

        },
        setGroup : function (groupName, data) {

            let uiids = this._groupVmMap[groupName];
            let setKeys = Object.keys(data);
            let key, vm;

            if (uiids) {

                for (let uiid of uiids) {

                    vm = this.map[uiid];

                    if (!vm) {

                        continue;

                    }

                    key = vm.conf.formKey;

                    if (setKeys.indexOf(key) === -1) {

                        continue;

                    }

                    this.map[uiid].set(data[key]);

                }

            }

            return this;

        },
        setGroupJson : function (groupName, data) {

            console.log(data);

            return this.setGroup(groupName, JSON.parse(data));

        }
    };

    injectMorning(morning);

    Vue.config.ignoredElements = [];

    // register component
    for (let name in morning._components) {

        let component = morning._components[name];

        Vue.component(`ui-${component.options.name}`, component);
        morning._ignoreElements.push(`i-${component.options.name}`);

    }

    Vue.config.ignoredElements = morning._ignoreElements;

    return morning;

});
