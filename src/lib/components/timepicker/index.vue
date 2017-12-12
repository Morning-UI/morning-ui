<template>
    <mor-timepicker
        :_uiid="uiid"
        :class="[stateClass, moreClass]"

        :form-name="formName"
        :form-key="formKey"
        :group="group"
        :default-value="defaultValue"
        :hide-name="hideName"
        :format="format"
        :clearable="clearable"
        :align="align"
        :selectable-range="selectableRange"
        :is-range="isRange"
        :separator="separator"
        :start-name="startName"
        :end-name="endName"
        :is-list="isList"
        :list="list"
        :list-start="listStart"
        :list-end="listEnd"
        :list-step="listStep"
    >

    <template v-if="conf.isRange">
        <morning-inside-timepicker
            class="timepicker-input-0"

            :ref="'ui-timepicker-input-0-'+uiid"
            :form-name="(conf.startName === false) ? conf.formName : conf.startName"
            :default-value="conf.defaultValue"
            :hide-name="conf.hideName"
            :format="conf.format"
            :clearable="conf.clearable"
            :align="conf.align"
            :selectable-range="conf.selectableRange"

            @value-change="_syncValueFromInput"
        >    
        </morning-inside-timepicker>

        <div class="separator">{{conf.separator}}</div>

        <morning-inside-timepicker
            class="timepicker-input-1"

            :ref="'ui-timepicker-input-1-'+uiid"
            :form-name="(conf.endName === false) ? conf.formName : conf.endName"
            :default-value="conf.defaultValue"
            :hide-name="conf.hideName"
            :format="conf.format"
            :clearable="conf.clearable"
            :align="conf.align"
            :selectable-range="conf.selectableRange"

            @value-change="_syncValueFromInput"
        >    
        </morning-inside-timepicker>
    </template>

    <template v-else>
        <template v-if="conf.isList">
            <morning-select
                :ref="'ui-timepicker-select-0-'+uiid"
                :form-name="conf.formName"
                :default-value="conf.defaultValue"
                :hide-name="conf.hideName"
                :clearable="conf.clearable"
                :align="conf.align"
                prepend="<i class='morningicon'>&#xe607;</i>"

                @value-change="_syncValueFromSelect"
            >
                <li v-for="item in timeList" :value="item.date">{{item.name}}</li>            
            </morning-select>
        </template>

        <template v-else>
            <morning-inside-timepicker
                :ref="'ui-timepicker-input-0-'+uiid"
                :form-name="conf.formName"
                :default-value="conf.defaultValue"
                :hide-name="conf.hideName"
                :format="conf.format"
                :clearable="conf.clearable"
                :align="conf.align"
                :selectable-range="conf.selectableRange"

                @value-change="_syncValueFromInput"
            >    
            </morning-inside-timepicker>
        </template>
    </template>

    </mor-timepicker>
</template>

<!-- TODO z-index doc中的问题 -->
<script>
import {
    addSeconds,
    format as formatDate,
    isValid
}                                   from 'date-fns/esm';
import arrayUniq                    from 'array-uniq';
import extend                       from 'extend';

export default {
    origin : 'Form',
    name : 'timepicker',
    props : {
        format : {
            type : String,
            default : 'HH:mm:ss'
        },
        clearable : {
            type : Boolean,
            default : false
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
        },
        isList : {
            type : Boolean,
            default : false
        },
        list : {
            type : Array,
            default : (() => [])
        },
        listStart : {
            type : [String, Boolean],
            default : false
        },
        listEnd : {
            type : [String, Boolean],
            default : false
        },
        listStep : {
            type : String,
            default : '00:30:00'
        }
    },
    computed : {
        _conf : function () {

            return {
                format : this.format,
                clearable : this.clearable,
                align : this.align,
                selectableRange : this.selectableRange,
                isRange : this.isRange,
                separator : this.separator,
                startName : this.startName,
                endName : this.endName,
                isList : this.isList,
                list : this.list,
                listStart : this.listStart,
                listEnd : this.listEnd,
                listStep : this.listStep
            };

        },
        timeList : function () {

            if (!this.conf.isList) {

                return [];

            }

            let list = extend(true, [], this.conf.list);

            for (let i in list) {

                list[i] = {
                    date : +list[i],
                    name : formatDate(list[i], this.conf.format)
                };

            }

            list = arrayUniq(list);

            return list;

        }
    },
    data : function () {

        return {};

    },
    methods : {
        _valueFilter : function (value) {

            if (typeof value !== 'object' ||
                !(value instanceof Array)) {

                value = [];

            }

            if (value[0] !== undefined &&
                value[0] !== null &&
                (!(value[0] instanceof Date) || !isValid(value[0]))) {

                value[0] = new Date();

            }

            if (value[1] !== undefined &&
                value[1] !== null &&
                (!(value[1] instanceof Date) || !isValid(value[1]))) {

                value[1] = addSeconds(new Date(), 1);

            }

            return value;

        },
        _syncValueFromSelect : function () {

            let select0 = this.$refs[`ui-timepicker-select-0-${this.uiid}`];
            let select1 = this.$refs[`ui-timepicker-select-1-${this.uiid}`];
            let start;
            let end;

            if (!this.conf.isRange && select0) {

                let select0Value = select0.get();
                let date = new Date(+select0Value[0]);

                if (isValid(date)) {

                    start = date;

                }

                this._set([start], true);

            } else if (this.conf.isRange && select0 && select1) {

                let select0Value = select0.get();
                let select1Value = select1.get();
                let date0 = new Date(+select0Value[0]);
                let date1 = new Date(+select1Value[0]);

                if (isValid(date0)) {

                    start = date0;

                }

                if (isValid(date1)) {

                    end = date1;

                }

                let val = [start, end];

                if (val[1] === null) {

                    val.splice(1, 1);

                    if (val[0] === null) {

                        val = [];

                    }

                }

                this._set(val, true);

            }

        },
        _syncValueFromInput : function () {

            let input0 = this.$refs[`ui-timepicker-input-0-${this.uiid}`];
            let input1 = this.$refs[`ui-timepicker-input-1-${this.uiid}`];

            if (!this.conf.isRange && input0) {

                this._set([
                    input0.get()
                ], true);

            } else if (this.conf.isRange && input0 && input1) {

                let val = [
                    input0.get() || null,
                    input1.get() || null
                ];

                if (val[1] === null) {

                    val.splice(1, 1);

                    if (val[0] === null) {

                        val = [];

                    }

                }

                this._set(val, true);

            }

        },
        _syncInputFromValue : function () {

            let input0 = this.$refs[`ui-timepicker-input-0-${this.uiid}`];
            let input1 = this.$refs[`ui-timepicker-input-1-${this.uiid}`];
            let value = this.get();

            if (value[0] === null) {

                value[0] = undefined;

            }

            if (value[1] === null) {

                value[1] = undefined;
                
            }

            if (!this.conf.isRange && input0) {

                input0._set(value[0], true);

            } else if (this.conf.isRange && input0 && input1) {

                input0._set(value[0], true);
                input1._set(value[1], true);

            }

        }
    },
    created : function () {},
    mounted : function () {

        this.$on('value-change', () => {

            this._syncInputFromValue();

        });

    }
};
</script>

<style lang="less" src="./index.less"></style>