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
        _syncGroup : function () {

            let morning = window.morning;
    
            if (this.conf.group &&
                this.conf.group.length > 0) {

                for (let gname of this.conf.group) {

                    if (morning.groupData[gname] === undefined) {

                        morning.groupData[gname] = {};

                    }

                    if (this.conf.formKey !== undefined) {

                        morning.groupData[gname][this.conf.formKey] = this.get(false);

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

            } else {

                return result;

            }

        },
        setName : function (name = '') {

            return this.setConf('formName', name);

        },
        getName : function () {

            return this.getConf('formName');

        },
        setKey : function (key) {

            // TODO remove group data this key

            return this.setConf('formKey', key);

        },
        getKey : function () {

            return this.getConf('formKey');

        },
        setGroup : function (group = []) {

            // TODO remove group data this key

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

        this.$watch('data.value', () => {

            this._syncGroup();
            this.$emit('valueChange');

        }, {
            deep : true
        });

    }
});

export default Form;
