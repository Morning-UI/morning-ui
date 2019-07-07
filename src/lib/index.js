import                                  './styles/index.less';

import extend                           from 'extend';
import eleClass                         from 'Common/element';
import uiClass                          from 'Common/ui';
import formClass                        from 'Common/form';
import browserPolyfill                  from './polyfill/index';
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
        useIndex : {},
        maxIndex : 1
    },
    _moveListener : [],
    _globalEventListener : {},
    _groupData : {},
    _groupVmMap : {},
    _options : {},
    _colorShortName : {
        theme : 't',
        'light-theme' : 'lt',
        'dark-theme' : 'dt',
        success : 's',
        warning : 'w',
        danger : 'd',
        primary : 'p',
        minor : 'm',
        info : 'i',

        'neutral-1' : 'n1',
        'neutral-2' : 'n2',
        'neutral-3' : 'n3',
        'neutral-4' : 'n4',
        'neutral-5' : 'n5',
        'neutral-6' : 'n6',
        'neutral-7' : 'n7',
        'neutral-8' : 'n8',
        'neutral-9' : 'n9',
        'neutral-10' : 'n10',
        'neutral-11' : 'n11',
        black : 'bk',
        white : 'wh'
    },
    isMorning : true,
    version : '0.12.48',
    map : {}
};

const defaultZIndex = 100;

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
    let setKeys;
    let key,
        vm;

    if (data !== undefined) {

        setKeys = Object.keys(data);

    }

    if (uiids) {

        for (let uiid of uiids) {

            vm = this.map[uiid];

            if (vm) {

                key = vm.conf.formKey;

                if (setKeys && setKeys.indexOf(key) !== -1) {

                    this.map[uiid].set(data[key]);

                } else if (data === undefined) {

                    this.map[uiid].set(undefined);

                }

            }

        }

    }

    return this;

};

morning.setGroupJson = function (groupName, data) {

    return this.setGroup(groupName, JSON.parse(String(data)));

};

morning.install = function (Vue, options) {

    if (typeof Vue === 'undefined') {

        throw new Error('Can\'t find Vue, import Vue first please.');

    }

    let version = Vue.version.split('-')[0].split('.');

    if (+version[0] < 2 ||
        +version[1] < 5 ||
        (+version[1] === 5 && +version[2] < 3)) {

        throw new Error('Vue version mismatch(version must > 2.5.2), please update Vue.');

    }

    if (options) {

        if (options.prefix === 'mor') {

            throw new Error('prefix can\'t be \'mor\'.');

        }

        if (options.zIndex !== undefined) {

            options.zIndex = Number(options.zIndex);

            if (options.zIndex && isNaN(options.zIndex)) {

                throw new Error('zIndex must be a number.');

            }

            if (options.zIndex <= 0) {

                throw new Error('zIndex must be greater than 0.');

            }

        }

    }

    browserPolyfill();

    options = extend(true, {
        prefix : 'ui',
        uploader : null,
        zIndex : defaultZIndex
    }, options);

    morning._options = options;

    Vue.config.ignoredElements = [];

    this._origin.Elements = eleClass(Vue, this);
    this._origin.UI = uiClass(this._origin.Elements);
    this._origin.Form = formClass(this._origin.UI);

    // register component
    for (let name in components) {

        let creater = components[name];
        let component;

        creater.name = `morning-${creater.name}`;

        if (creater.origin === 'UI') {

            component = this._origin.UI.extend(creater);

        } else if (creater.origin === 'Form') {

            component = this._origin.Form.extend(creater);

        } else if (creater.origin === 'Element') {

            component = this._origin.Elements.extend(creater);

        } else {

            return;

        }

        component = component.extend({
            data : function () {

                return {
                    uiname : name
                };

            }
        });

        if (!component.private) {

            Vue.component(`${options.prefix}-${name}`, component);

        }

        Vue.component(component.options.name, component);

        this._components[name] = component;
        this._ignoreElements.push(`mor-${name}`);
        this._ignoreElements.push(component.options.name);

    }

    Vue.config.ignoredElements = this._ignoreElements;

    return this;

};

export default morning;
