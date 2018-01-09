import extend                           from 'extend';
import uiClass                          from 'Common/ui';
import formClass                        from 'Common/form';
import components                       from './components';

let morning = {
    _origin : {},
    _components : {},
    _ignoreElements : [],
    _uiid : 1,
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
    _options : {},
    isMorning : true,
    version : '0.10.13',
    map : {}
};

morning.findVM = function (ref) {

    for (let vm of Object.values(this.map)) {

        if (vm.$vnode &&
            vm.$vnode.data &&
            vm.$vnode.data.ref === ref) {

            return vm;
        
        }

    }

    return undefined;

};

morning.findAllVM = function (ref) {

    let result = [];

    for (let vm of Object.values(this.map)) {

        if (vm.$vnode &&
            vm.$vnode.data &&
            vm.$vnode.data.ref === ref) {

            result.push(vm);
        
        }

    }

    return result;

};

morning.getGroup = function (groupName) {

    return extend(true, {}, this._groupData[groupName]);

};

morning.getGroupJson = function (groupName) {

    return JSON.stringify(this.getGroup(groupName));

};

morning.cleanGroup = function (groupName) {

    let uiids = this._groupVmMap[groupName];
    let vm;

    if (uiids) {

        for (let uiid of uiids) {

            vm = this.map[uiid];

            if (vm) {

                this.map[uiid].set(undefined);

            }

        }

    }

    return this;

};

morning.setGroup = function (groupName, data) {

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

};

morning.setGroupJson = function (groupName, data) {

    return this.setGroup(groupName, JSON.parse(data));

};

morning.install = function (Vue, options) {

    if (typeof Vue === 'undefined') {

        throw new Error('can\'t find Vue.js, import Vue.js first please.');

    }

    if (options && options.prefix === 'mor') {

        throw new Error('prefix can\'t be \'mor\'.');

    }

    options = extend(true, {
        prefix : 'ui',
        uploader : null
    }, options);

    morning._options = options;

    Vue.config.ignoredElements = [];

    this._origin.UI = uiClass(Vue, this);
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

        if (!creater.inside) {
            
            Vue.component(`${options.prefix}-${component.options.name}`, component);

        }

        console.log(`morning-${component.options.name}`);
        Vue.component(`morning-${component.options.name}`, component);
        this._components[component.options.name] = component;
        this._ignoreElements.push(`mor-${component.options.name}`);
        this._ignoreElements.push(`morning-${component.options.name}`);

    }

    Vue.config.ignoredElements = this._ignoreElements;

    let vueRender = (el, binding) => {

        let tagName = el.tagName;
        let $vue = new Vue({
            template : `<${tagName}>${binding.value.template}</${tagName}>`
        });

        $vue.$mount();

        let $childs = $vue.$el.childNodes;
        let $child;

        el.innerHTML = '';

        while (($child = $childs[0])) {

            el.appendChild($child);

        }

    };

    Vue.directive('render', {
        inserted : vueRender,
        update : vueRender
    });

    return this;

};

export default morning;
