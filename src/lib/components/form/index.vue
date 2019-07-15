<template>
    <mor-form
        :_uiid="uiid"
        :class="[formClass, moreClass]"

        :form-name="formName"
        :form-note="formNote"
        :form-key="formKey"
        :group="group"
        :hide-name="hideName"
        :clearable="clearable"
        :label-position="labelPosition"
        :label-width="labelWidth"
        :rules="rules"
    >

        <div class="form-name" v-if="!conf.hideName && !!conf.formName">{{conf.formName}}</div>
        <div class="form-note" v-if="!!conf.formNote">{{conf.formNote}}</div>

        <div class="form-body">
            <slot></slot>
        </div>

        <div class="error-message">{{conf._errorMessage}}</div>
        <morning-link v-if="conf.clearable" color="minor" @emit="_clean" class="cleanbtn">清空</morning-link>

    </mor-form>
</template>
 
<script>
import Schema                       from 'async-validator';

export default {
    origin : 'Form',
    name : 'form',
    props : {
        labelPosition : {
            type : String,
            default : 'center-align',
            validator : (value => ['head-left', 'head-right', 'head-center', 'left-align', 'center-align', 'right-align', 'center'].indexOf(value) !== -1)
        },
        labelWidth : {
            type : String,
            default : '20%'
        },
        rules : {
            type : Object,
            default : (() => ({}))
        }
    },
    computed : {
        _conf : function () {

            return {
                labelPosition : this.labelPosition,
                labelWidth : this.labelWidth,
                rules : this.rules
            };

        },
        moreClass : function () {

            let classes = {};

            classes[`label-pos-${this.conf.labelPosition}`] = true;

            return classes;

        }
    },
    data : function () {

        return {
            data : {
                items : {},
                formKeyUiidMap : {},
                forms : {},
                valueChangeFns : {}
            }
        };

    },
    methods : {
        _valueFilter : function (value) {

            if (value === undefined) {

                return {};

            }

            return value;

        },
        _genValueChangeFn : function (vm) {

            return value => this._formValueChange(value, vm);

        },
        _formValueChange : function (value, vm) {

            let val = this.get() || {};

            this.validator(vm.conf.formKey);
            val[vm.conf.formKey] = value;
            this.set(val);

        },
        _linkChildFormItem : function (formitemVm) {

            this.data.items[formitemVm.uiid] = formitemVm;

        },
        _unlinkChildFormItem : function (formitemVm) {

            delete this.data.items[formitemVm.uiid];

        },
        _linkChildForm : function (formVm) {

            let formKey = formVm.conf.formKey;

            if (!formKey) {

                return;

            }

            if (this.data.formKeyUiidMap[formVm.uiid] &&
                this.data.formKeyUiidMap[formVm.uiid] !== formKey) {

                this._unlinkChildFormKey(formKey);

            }

            this.data.formKeyUiidMap[formVm.uiid] = formKey;
            this.data.forms[formKey] = formVm;

            if (!this.data.valueChangeFns[formKey]) {
               
                this.data.valueChangeFns[formKey] = this._genValueChangeFn(formVm);
                formVm.$on('value-change', this.data.valueChangeFns[formKey]);

            }

        },
        _unlinkChildFormKey : function (formKey) {

            let value = this.get();

            this.data.forms[formKey].$off('value-change', this.data.valueChangeFns[formKey]);

            if (value[formKey] !== undefined) {

                delete value[formKey];
                this.set(value);

            }

            delete this.data.valueChangeFns[formKey];
            delete this.data.forms[formKey];

        },
        _unlinkChildForm : function (formVm) {

            this._unlinkChildFormKey(formVm.conf.formKey);

        },
        _syncLabelWidth : function () {

            for (let itemVm of Object.values(this.data.items)) {

                itemVm._labelWidth = this.conf.labelWidth;

            }

        },
        _syncValue : function (first = false) {

            let value = this.get() || {};

            for (let key in value) {

                let formVm = this.data.forms[key];

                if (formVm) {
                    
                    let formVal = formVm.get();

                    if (JSON.stringify(formVal) !== JSON.stringify(value[key])) {

                        formVm.set(value[key]);

                    }

                }

            }

            for (let formKey in this.data.forms) {

                if (first) {

                    let formVal = this.data.forms[formKey].get();

                    if (formVal !== undefined && value[formKey] === undefined) {

                        value[formKey] = formVal;

                    }

                }

                if (value[formKey] === undefined) {

                    this.data.forms[formKey].set(undefined);

                }

            }

            if (first) {

                this._set(value, true);

            }

        },
        validator : function (formKey) {

            let validator = new Schema(this.conf.rules);
            let value = {};

            if (formKey === undefined) {

                for (let key in this.data.forms) {

                    this.data.forms[key]._errorMessage = '';

                }

                value = this.get() || {};

            } else {

                this.data.forms[formKey]._errorMessage = '';
                value[formKey] = this.data.forms[formKey].get();

            }

            return new Promise((resolve, reject) => {

                let hasErr = false;

                validator.validate(value, errors => {

                    if (!errors) {

                        return resolve(true);

                    }

                    for (let formErr of errors) {

                        if (formKey && formKey === formErr.field && this.data.forms[formErr.field]) {

                            this.data.forms[formErr.field]._errorMessage = formErr.message;
                            hasErr = true;

                        } else if (!formKey && this.data.forms[formErr.field]) {
                        
                            this.data.forms[formErr.field]._errorMessage = formErr.message;
                            hasErr = true;

                        }

                    }

                    if (!hasErr) {

                        resolve(true);

                    } else {

                        reject(new Error('表单验证未通过'));

                    }

                });

            });

        }
    },
    updated : function () {},
    mounted : function () {

        this.$watch('conf.labelWidth', () => {

            this._syncLabelWidth();

        }, {
            immediate : true
        });

        this._syncValue(true);

        this.$watch('data.value', () => {

            this._syncValue();

        }, {
            deep : true
        });

    }
};
</script>
