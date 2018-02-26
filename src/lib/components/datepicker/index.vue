<template>
    <mor-datepicker
        :_uiid="uiid"
        :class="[formClass, stateClass]"

        :form-name="formName"
        :form-key="formKey"
        :group="group"
        :default-value="defaultValue"
        :hide-name="hideName"
        :clearable="clearable"
        :date="date"
        :format="format"
        :align="align"
        :selectable-range="selectableRange"
        :is-range="isRange"
        :separator="separator"
        :start-name="startName"
        :end-name="endName"
    >

    <div class="wrap">
        <div class="input-group-addon" v-if="conf.isRange">
            <i class='morningicon'>&#xe602;</i>
        </div>
    
        <template v-if="conf.isRange">
            <morning-private-datepicker
                class="datepicker-input-0"
                :ref="'ui-datepicker-input-0-'+uiid"
                :state="conf.state"

                :form-name="(conf.startName === false) ? conf.formName : conf.startName"
                :hide-name="conf.hideName"
                :date="date"
                :format="conf.format"
                :align="conf.align"
                :selectable-range="conf.selectableRange"

                @value-change="_syncValueFromInputToRoot"
            >    
            </morning-private-datepicker>

            <div class="separator">{{conf.separator}}</div>

            <morning-private-datepicker
                class="datepicker-input-1"
                :ref="'ui-datepicker-input-1-'+uiid"
                :state="conf.state"
                
                :form-name="(conf.endName === false) ? conf.formName : conf.endName"
                :hide-name="conf.hideName"
                :date="date"
                :format="conf.format"
                :align="conf.align"
                :selectable-range="conf.selectableRange"

                @value-change="_syncValueFromInputToRoot"
            >    
            </morning-private-datepicker>
        </template>

        <template v-else>
            <morning-private-datepicker
                :ref="'ui-datepicker-input-0-'+uiid"
                :state="conf.state"

                :form-name="conf.formName"
                :default-value="conf.defaultValue"
                :hide-name="conf.hideName"
                :date="date"
                :format="conf.format"
                :align="conf.align"
                :selectable-range="conf.selectableRange"

                @value-change="_syncValueFromInputToRoot"
            >    
            </morning-private-datepicker>
        </template>

    </div>

    <morning-link v-if="conf.clearable" color="minor" @emit="_clean" class="cleanbtn">清空</morning-link>

    </mor-datepicker>
</template>
 
<script>
import {
    isValid
}                                   from 'date-fns';
import Dates                        from 'Utils/Dates';

export default {
    origin : 'Form',
    name : 'datepicker',
    mixins : [Dates],
    props : {
        date : {
            type : Number,
            default : +new Date()
        },
        format : {
            type : String,
            default : 'YYYY-MM-DD'
        },
        align : {
            type : String,
            default : 'left',
            validator : (value => ['left', 'center', 'right'].indexOf(value) !== -1)
        },
        selectableRange : {
            type : Array,
            default : (() => [])
        },
        isRange : {
            type : Boolean,
            default : false
        },
        separator : {
            type : String,
            default : '至'
        },
        startName : {
            type : String,
            default : '开始时间'
        },
        endName : {
            type : String,
            default : '结束时间'
        }
    },
    computed : {
        _conf : function () {

            return {
                date : this.date,
                format : this.format,
                align : this.align,
                selectableRange : this.selectableRange,
                isRange : this.isRange,
                separator : this.separator,
                startName : this.startName,
                endName : this.endName,
            };

        }
    },
    data : function () {

        return {
            data : {}
        };

    },
    methods : {
        _valueFilter : function (value) {

            if (this.conf.isRange && typeof value === 'string') {

                value = [value];

            } else if (!this.conf.isRange && typeof value === 'object' && value instanceof Array) {

                value = value[0];

            }

            if (typeof value === 'string') {

                value = this._filterDateString(value);

            } else if (typeof value === 'object' && value instanceof Array) {

                if (value.length === 0) {

                    value = undefined;

                } else {

                    if (value.length > 2) {

                        value.splice(0, 2);

                    }

                    for (let k in value) {

                        value[k] = this._filterDateString(value[k]);

                    }

                }

            }

            return value;

        },
        _filterDateString : function (value) {

            if (value === undefined) {

                return value;

            }

            let date = this._dateStringToDate(value, this.conf.format);

            if (!isValid(date)) {

                value = this._dateGetStandardDate();

            }

            return value;

        },
        _syncValueFromInputToRoot : function () {

            let input0 = this.$refs[`ui-datepicker-input-0-${this.uiid}`];
            let input1 = this.$refs[`ui-datepicker-input-1-${this.uiid}`];

            if (!this.conf.isRange && input0) {

                let value = input0.get();

                this._set(value, true);

            } else if (this.conf.isRange && input0 && input1) {

                let val = [
                    input0.get(),
                    input1.get()
                ];

                if (val[1] === undefined) {

                    val.splice(1, 1);

                    if (val[0] === undefined) {

                        val = undefined;

                    }

                }

                this._set(val, true);

            }

        },
        _syncFromRootToChild : function () {

            let input0 = this.$refs[`ui-datepicker-input-0-${this.uiid}`];
            let input1 = this.$refs[`ui-datepicker-input-1-${this.uiid}`];
            let value = this.get();

            if (!this.conf.isRange && input0) {

                input0._set(value, true);

            } else if (this.conf.isRange && input0 && input1) {

                if (value) {

                    input0._set(value[0], true);
                    input1._set(value[1], true);

                } else {

                    input0._set(undefined, true);
                    input1._set(undefined, true);

                }

            }

        }
    },
    created : function () {},
    mounted : function () {

        this.$on('value-change', () => {

            this._syncFromRootToChild();

        });

        this._syncFromRootToChild();

    }
};
</script>

<style lang="less" src="./index.less"></style>
