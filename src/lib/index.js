import extend                           from 'extend';
import uiClass                          from 'Common/ui';
import formClass                        from 'Common/form';
import components                       from './components';

// TODO
// UMD : https://github.com/umdjs/umd/blob/master/templates/amdWebGlobal.js
((root, factory) => {

    if (typeof define === 'function' && define.amd) {

        // define(() => (root.morning = factory(root)));

    } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {

        // CommonJS
        factory(exports, require('vue'));

    } else {

        // Browser globals
        factory(root, root.vue);

    }

})(window, (export, vue) => {

    let morning = {
        _origin : {},
        _components : {},
        _ignoreElements : [],
        _uiid : 1,
        _findCache : {},
        _popupId : 0,
        _indexMap : {
            regIndex : {},
            vmMap : {},
            useIndex : {}
        },
        _moveListener : [],
        _globalEventListener : {},
        _groupData : {},
        _groupVmMap : {},
        isMorning : true,
        version : '0.10.3',
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
            let key,
                vm;

            if (uiids) {

                for (let uiid of uiids) {

                    vm = this.map[uiid];

                    if (vm) {

                        key = vm.conf.formKey;

                        if (setKeys.indexOf(key) !== -1) {

                            this.map[uiid].set(data[key]);

                        }

                    }

                }

            }

            return this;

        },
        setGroupJson : function (groupName, data) {

            return this.setGroup(groupName, JSON.parse(data));

        }
    };

    let init = function (options) {

        if (typeof vue === 'undefined') {

            throw new Error('can\'t find Vue.js, import Vue.js first please.');

        }

        options = extend(true, {
            prefix : 'ui'
        }, options);

        vue.config.ignoredElements = [];

        this._origin.UI = uiClass(vue, this);
        this._origin.Form = formClass(this._origin.UI);

        // register component
        for (let name in components) {

            let creater = components[name];
            let component;

            if (creater.origin === 'UI') {

                component = this._origin.UI.extend(creater);

            } else if (creater.origin === 'Form') {

                component = this._origin.Form.extend(creater);

            } else {

                return;

            }

            vue.component(`${options.prefix}-${component.options.name}`, component);
            vue.component(`morning-${component.options.name}`, component);
            this._components[name] = component;
            this._ignoreElements.push(`i-${component.options.name}`);
            this._ignoreElements.push(`morning-${component.options.name}`);

        }

        vue.config.ignoredElements = this._ignoreElements;

        return this;

    };

    morning.init = init.bind(morning);

    return morning;

    export.morning = morning;

});
