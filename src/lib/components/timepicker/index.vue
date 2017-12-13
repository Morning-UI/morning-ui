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
    addHours,
    addMinutes,
    addSeconds,
    format as formatDate,
    isValid
}                                   from 'date-fns/esm';
import arrayUniq                    from 'array-uniq';
import extend                       from 'extend';
import sortBy                       from 'lodash.sortby';
import Time                         from 'Utils/Time';

export default {
    origin : 'Form',
    name : 'timepicker',
    mixins : [Time],
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
            type : [Object, Boolean],
            default : false,
            validator : (value => (value instanceof Date))
        },
        listEnd : {
            type : [Object, Boolean],
            default : false,
            validator : (value => (value instanceof Date))
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

            if (this.conf.listStart && this.conf.listEnd && this.conf.listStep) {

                let start = this.conf.listStart;
                let end = this.conf.listEnd;
                let addHour,
                    addMinute,
                    addSecond;

                addHour = this.conf.listStep.split(':')[0];
                addMinute = this.conf.listStep.split(':')[1];
                addSecond = this.conf.listStep.split(':')[2];

                start = this._timeStandardDate(start);
                end = this._timeStandardDate(end);

                while (+start <= +end) {

                    list.push(start);

                    start = addHours(start, addHour);
                    start = addMinutes(start, addMinute);
                    start = addSeconds(start, addSecond);

                }

            }

            for (let i in list) {

                let date = this._timeStandardDate(list[i]);

                list[i] = {
                    date : +date,
                    name : formatDate(date, this.conf.format)
                };

            }

            list = arrayUniq(list);
            list = sortBy(list, v => (v.date));

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

            let value0 = new Date(value[0]);

            if (!isValid(value0)) {

                value[0] = this._timeStandardDate(new Date());

            }

            if (this.conf.isRange) {

                value[1] = new Date(value[1]);

                if (!isValid(value[1])) {

                    value[1] = this._timeStandardDate(new Date());

                }

            }

            if (value &&
                value.length === 2 &&
                !this.conf.isRange) {

                value = [value[0]];

            }

            if (value && value[0]) {

                this._timeStandardDate(value[0]);

            }

            if (value && value[1]) {

                this._timeStandardDate(value[1]);

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

                if (start) {

                    this._set([start], true);

                } else if (this.get().length !== 0) {

                    this._set(undefined, true);

                }

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

                if (val[1] === undefined) {

                    val.splice(1, 1);

                    if (val[0] === undefined) {

                        val = undefined;

                    }

                }

                if (val === undefined && this.get().length === 0) {

                    return;

                }

                this._set(val, true);

            }

        },
        _syncValueFromInput : function () {

            let input0 = this.$refs[`ui-timepicker-input-0-${this.uiid}`];
            let input1 = this.$refs[`ui-timepicker-input-1-${this.uiid}`];

            if (!this.conf.isRange && input0) {

                let value = this._timeStandardDate(input0.get());

                if (value) {

                    this._set([value], true);

                } else if (this.get().length !== 0) {

                    this._set(undefined, true);

                }

            } else if (this.conf.isRange && input0 && input1) {

                let val = [
                    this._timeStandardDate(input0.get()),
                    this._timeStandardDate(input1.get())
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
        _syncFromValue : function () {

            let type = 'input';

            if (this.conf.isList) {

                type = 'select';

            }

            let input0 = this.$refs[`ui-timepicker-${type}-0-${this.uiid}`];
            let input1 = this.$refs[`ui-timepicker-${type}-1-${this.uiid}`];
            let value = this.get();

            if (!this.conf.isRange && input0) {

                if (type === 'select') {

                    let val = +this._timeStandardDate(value[0]);

                    if (val) {

                        input0._set([val], true);

                    } else {

                        input0._set(undefined, true);

                    }

                } else {

                    input0._set(value[0] || undefined, true);

                }

            } else if (this.conf.isRange && input0 && input1) {

                if (type === 'select') {

                    let val0 = +this._timeStandardDate(value[0]);
                    let val1 = +this._timeStandardDate(value[1]);

                    if (val0) {

                        input0._set([val0], true);

                    } else {

                        input0._set(undefined, true);

                    }

                    if (val1) {

                        input1._set([val1], true);

                    } else {

                        input1._set(undefined, true);

                    }

                } else {

                    input0._set(value[0], true);
                    input1._set(value[1], true);

                }

            }

        }
    },
    created : function () {},
    mounted : function () {

        this.$on('value-change', () => {

            this._syncFromValue();

        });

    }
};
</script>

<style lang="less" src="./index.less"></style>