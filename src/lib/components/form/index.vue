<template>
    <mor-form
        :_uiid="uiid"
        :class="[moreClass]"

        :label-position="labelPosition"
        :rules="rules"
    >

        <slot></slot>

    </mor-form>
</template>
 
<script>
import schema                       from 'async-validator';

export default {
    origin : 'UI',
    name : 'form',
    props : {
        labelPosition : {
            type : String,
            default : 'head-left',
            validator : (value => ['head-left', 'head-right', 'head-center', 'left-align', 'center-align', 'right-align', 'center'].indexOf(value) !== -1)
        },
        rules : {
            type : Object,
            default : (() => ({
                name : {
                    type : 'number',
                    required : true,
                    message : '此项必填'
                }
            }))
        }
    },
    computed : {
        _conf : function () {

            return {
                labelPosition : this.labelPosition,
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
                itemFormKeyMap : {},
                forms : {}
            }
        };

    },
    methods : {
        _linkFormitem : function (formitemVm) {

            this.data.items[formitemVm.uiid] = formitemVm;

            if (this.data.itemFormKeyMap[formitemVm.uiid]) {

                for (let key of this.data.itemFormKeyMap[formitemVm.uiid]) {

                    delete this.data.forms[key];

                }

            }

            this.data.itemFormKeyMap[formitemVm.uiid] = [];

            for (let formVm of Object.values(formitemVm.$children)) {

                this.data.itemFormKeyMap[formitemVm.uiid].push(formVm.conf.formKey);
                this.data.forms[formVm.conf.formKey] = formVm;

            }

        },
        get : function () {

            let data = {};

            for (let formKey in this.data.forms) {

                data[formKey] = this.data.forms[formKey].get();

            }

            return data;

        },
        validator : function () {

            let validator = new schema(this.conf.rules);
            let value = this.get();

            validator.validate(value, (errors, fields) => {

                for (let formErr of errors) {
                    
                    this.data.forms[formErr.field].conf._errorMessage = formErr.message;

                }

            });

        }
    },
    updated : function () {

    },
    mounted : function () {}
};
</script>
