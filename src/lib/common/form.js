import extend                       from 'extend';

export default UI => UI.extend({
    model : {
        prop : 'modelValue',
        event : 'value-change'
    },
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
        },
        modelValue : {
            default : undefined
        },
        clearable : {
            type : Boolean,
            default : false
        }
    },
    computed : {
        _formConf : function () {

            return {
                formName : this.formName,
                formKey : this.formKey,
                group : this.group,
                defaultValue : this.defaultValue,
                hideName : this.hideName,
                clearable : this.clearable
            };

        },
        formClass : function () {
    
            return {
                'has-cleanbtn' : this.conf.clearable
            };

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
            isForm : true,
            data : {
                value : undefined
            }
        };

    },
    methods : {
        _syncGroup : function (remove = false, changeKey = false, changeGroup = false) {

            let morning = this.morning;

            if (changeGroup) {

                changeGroup = [].concat(changeGroup);

                for (let gname of changeGroup) {

                    if (morning._groupData[gname] &&
                        morning._groupData[gname][this.conf.formKey]) {

                        delete morning._groupData[gname][this.conf.formKey];

                    }

                }

            }
    
            if (this.conf.group &&
                this.conf.group.length > 0) {

                for (let gname of this.conf.group) {

                    if (morning._groupData[gname] &&
                        morning._groupData[gname][this.conf.formKey] !== undefined &&
                        remove === true) {

                        delete morning._groupData[gname][this.conf.formKey];

                        return;

                    }

                    if (changeKey &&
                        morning._groupData[gname] &&
                        morning._groupData[gname][changeKey]) {

                        delete morning._groupData[gname][changeKey];

                    }

                    if (morning._groupData[gname] === undefined) {

                        morning._groupData[gname] = {};

                    }

                    if (this.conf.formKey !== undefined) {

                        morning._groupData[gname][this.conf.formKey] = this.get();

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
        _clean : function () {

            this.set(undefined);

        },
        set : function (value) {

            return this._set(value);

        },
        get : function () {

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

            return result;

        },
        getJson : function () {

            return JSON.stringify(this.get());

        },
        setName : function (name = '') {

            return (this.formName = name);

        },
        getName : function () {

            return this.conf.formName;

        },
        setKey : function (key) {

            return (this.formKey = key);

        },
        getKey : function () {

            return this.conf.formKey;

        },
        setGroup : function (group = []) {

            let groups = [];

            if (typeof group === 'string') {
                
                groups.push(group);

            } else if (typeof group === 'object') {

                groups = groups.concat(group);

            }

            return (this.group = groups);

        },
        getGroup : function () {

            return extend(true, [], this.conf.group);

        },
        addGroup : function (group) {

            let groups = this.getGroup();

            if (typeof group === 'string') {

                let uniqGroups = {};

                groups.push(group);

                for (let key of groups) {

                    uniqGroups[key] = 0;

                }

                uniqGroups = Object.keys(uniqGroups);

                return (this.group = uniqGroups);

            }

            return this;

        },
        removeGroup : function (group) {

            let groups = this.getGroup();

            for (let index in groups) {

                if (group === groups[index]) {

                    groups.splice(index, 1);

                    this.group = groups;

                    break;

                }

            }

            return this;

        }
    },
    created : function () {

        this.$watch('_formConf', val => {

            if (typeof val.group === 'string') {

                val.group = [val.group];

            }

            this.conf = Object.assign({}, this.conf, val);

        }, {
            immediate : true,
            deep : true
        });

        this.data.value = this.conf.defaultValue;
        this._syncGroup();

        this.$watch('modelValue', newValue => {

            this._set(newValue);

        });

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
            this.$emit('value-change', newValue);

        }, {
            deep : true,
            immediate : true
        });

        this.$watch('conf.formKey', (newVal, oldVal) => {

            this._syncGroup(false, oldVal);

        });

        this.$watch('conf.group', (newVal, oldVal) => {

            this._syncGroup(false, false, oldVal);
            this._syncGroupVm(newVal, oldVal);

        }, {
            immediate : true,
            deep : true
        });

    },
    beforeDestroy : function () {

        this._syncGroup(true);
        this._syncGroupVm([], this.conf.group);

    }
});
