import extend                       from 'extend';
import UI                           from './ui';

let Form = UI.extend({
    props : {
        formName : {
            type : String,
            default : undefined
        },
        formKey : {
            type : String,
            default : undefined
        },
        group : {
            type : [Array, String],
            default : () => ([])
        },
        defaultValue : {
            default : undefined
        },
        hideName : {
            type : Boolean,
            default : false
        }
    },
    data : function () {

        let groups = [];

        if (typeof this.group === 'string') {
            
            groups.push(this.group);

        } else if (typeof this.group === 'object') {

            groups = groups.concat(this.group);

        }

        return {
            conf : {
                formName : this.formName,
                formKey : this.formKey,
                group : groups,
                defaultValue : this.defaultValue,
                hideName : this.hideName
            },
            data : {
                value : undefined
            }
        };

    },
    methods : {
        _syncGroup : function (remove = false) {

            let morning = this.morning;
    
            if (this.conf.group &&
                this.conf.group.length > 0) {

                for (let gname of this.conf.group) {

                    if (remove &&
                        morning._groupData[gname] &&
                        morning._groupData[gname][this.conf.formKey] !== undefined) {

                        delete morning._groupData[gname][this.conf.formKey];

                        return;

                    }

                    if (morning._groupData[gname] === undefined) {

                        morning._groupData[gname] = {};

                    }

                    if (this.conf.formKey !== undefined) {

                        morning._groupData[gname][this.conf.formKey] = this.get(false);

                    }

                }

            }

        },
        _syncGroupVm : function (newGroup, oldGroup) {

            if (oldGroup) {

                for (let name of oldGroup) {

                    if (this.morning._groupVmMap[name] === undefined) {

                        break;

                    }

                    let index = this.morning._groupVmMap[name].indexOf(this.uiid);

                    if (index !== -1) {

                        this.morning._groupVmMap[name].splice(index, 1);

                    }

                }

            }

            if (newGroup) {

                for (let name of newGroup) {

                    if (this.morning._groupVmMap[name] === undefined) {

                        this.morning._groupVmMap[name] = [];

                    }

                    if (this.morning._groupVmMap[name].indexOf(this.uiid) === -1) {

                        this.morning._groupVmMap[name].push(this.uiid);

                    }

                }

            }

        },
        _set : function (value, ignoreDisable = false) {

            if (this.conf.state === 'disabled' && !ignoreDisable) {

                return this;

            }

            let val;

            try {

                val = JSON.parse(value);

            } catch (e) {

                val = value;

            }

            if (typeof val === 'object') {

                if (JSON.stringify(val) !== JSON.stringify(this.data.value)) {

                    this.data.value = val;

                }

            } else {

                this.data.value = value;

            }

            return this;

        },
        _valueFilter : function (value) {

            return value;

        },
        set : function (value) {

            return this._set(value);

        },
        get : function (json = true) {

            let result;

            if (typeof this.data.value === 'object') {

                if (this.data.value instanceof Array) {

                    result = extend(true, [], this.data.value);

                } else if (this.data.value === null) {

                    result = null;

                } else {
                
                    result = extend(true, {}, this.data.value);

                }

            } else {

                result = this.data.value;

            }

            if (json) {

                return JSON.stringify(result);

            }

            return result;

        },
        setName : function (name = '') {

            return this.setConf('formName', name);

        },
        getName : function () {

            return this.getConf('formName');

        },
        setKey : function (key) {

            return this.setConf('formKey', key);

        },
        getKey : function () {

            return this.getConf('formKey');

        },
        setGroup : function (group = []) {

            let groups = [];

            if (typeof group === 'string') {
                
                groups.push(group);

            } else if (typeof group === 'object') {

                groups = groups.concat(group);

            }

            return this.setConf('group', groups);

        },
        getGroup : function () {

            return this.getConf('group');

        },
        addGroup : function (group) {

            let groups = this.getConf('group');

            if (typeof group === 'string') {

                let uniqGroups = {};

                groups.push(group);

                for (let key of groups) {

                    uniqGroups[key] = 0;

                }

                uniqGroups = Object.keys(uniqGroups);

                return this.setConf('group', uniqGroups);

            }

            return this;

        },
        removeGroup : function (group) {

            let groups = this.getConf('group');

            for (let index in groups) {

                if (group === groups[index]) {

                    groups.splice(index, 1);
                    this.setConf('group', groups);

                    break;

                }

            }

            return this;

        }
    },
    created : function () {

        this.data.value = this.conf.defaultValue;
        this._syncGroup();

        this.$watch('data.value', newValue => {

            let filteredValue = this._valueFilter(newValue);

            if ((typeof newValue === 'object' &&
                typeof filteredValue === 'object' &&
                JSON.stringify(newValue) !== JSON.stringify(filteredValue)) ||
                newValue !== filteredValue) {

                this.data.value = filteredValue;

                return;

            }

            this._syncGroup();
            this.$emit('value-change');

        }, {
            deep : true,
            immediate : true
        });

        this.$watch('conf.group', (newVal, oldVal) => {

            this._syncGroupVm(newVal, oldVal);

        }, {
            immediate : true
        });

    },
    beforeDestroy : function () {

        this._syncGroup(true);
        this._syncGroupVm([], this.conf.group);

    }
});

export default Form;
