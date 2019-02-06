<template>
    <mor-timepicker
        :_uiid="uiid"
        :class="[formClass, stateClass, moreClass]"

        :form-name="formName"
        :form-key="formKey"
        :group="group"
        :hide-name="hideName"
        :clearable="clearable"
        :inside-name="insideName"
        :format="format"
        :align="align"
        :selectable-range="selectableRange"
        :is-range="isRange"
        :separator="separator"
        :separator-type="separatorType"
        :start-name="startName"
        :end-name="endName"
        :is-list="isList"
        :list="list"
        :list-start="listStart"
        :list-end="listEnd"
        :list-step="listStep"
    >
    
    <div class="form-name" v-if="!conf.hideName && !!conf.formName">{{conf.formName}}</div>

    <div class="wrap">
        <div class="input-group-addon" v-if="conf.isRange">
            <i class='mo-icon mo-icon-time-co'></i>
        </div>

        <template v-if="conf.isList">
            <template v-if="conf.isRange">
                <morning-select
                    class="timepicker-select-0"
                    :ref="'ui-timepicker-select-0-'+uiid"
                    :state="conf.state"

                    :inside-name="(conf.startName === false) ? conf.insideName : conf.startName"
                    :align="conf.align"
                    :list="timeList"

                    @value-change="_syncValueFromSelectToRoot"
                >
                </morning-select>

                <div class="separator" :class="conf.separatorType">{{conf.separator}}</div>

                <morning-select
                    class="timepicker-select-1"
                    :ref="'ui-timepicker-select-1-'+uiid"
                    :state="conf.state"

                    :inside-name="(conf.startName === false) ? conf.insideName : conf.startName"
                    :align="conf.align"
                    :list="timeList"

                    @value-change="_syncValueFromSelectToRoot"
                >
                </morning-select>
            </template>

            <template v-else>
                <morning-select
                    :ref="'ui-timepicker-select-0-'+uiid"
                    :state="conf.state"

                    :inside-name="conf.insideName"
                    :init-value="data.value"
                    :align="conf.align"
                    :list="timeList"

                    @value-change="_syncValueFromSelectToRoot"
                >
                </morning-select>
            </template>
        </template>

        <template v-else>
            <template v-if="conf.isRange">
                <morning-private-timepicker
                    class="timepicker-input-0"
                    :ref="'ui-timepicker-input-0-'+uiid"
                    :state="conf.state"

                    :inside-name="(conf.startName === false) ? conf.insideName : conf.startName"
                    :format="conf.format"
                    :align="conf.align"
                    :selectable-range="conf.selectableRange"

                    @value-change="_syncValueFromInputToRoot"
                >
                </morning-private-timepicker>

                <div class="separator" :class="conf.separatorType">{{conf.separator}}</div>

                <morning-private-timepicker
                    class="timepicker-input-1"
                    :ref="'ui-timepicker-input-1-'+uiid"
                    :state="conf.state"
                    
                    :inside-name="(conf.endName === false) ? conf.insideName : conf.endName"
                    :format="conf.format"
                    :align="conf.align"
                    :selectable-range="conf.selectableRange"

                    @value-change="_syncValueFromInputToRoot"
                >
                </morning-private-timepicker>
            </template>

            <template v-else>
                <morning-private-timepicker
                    :ref="'ui-timepicker-input-0-'+uiid"
                    :state="conf.state"

                    :inside-name="conf.insideName"
                    :init-value="data.value"
                    :format="conf.format"
                    :align="conf.align"
                    :selectable-range="conf.selectableRange"

                    @value-change="_syncValueFromInputToRoot"
                >
                </morning-private-timepicker>
            </template>
        </template>
    </div>

    <morning-link v-if="conf.clearable" color="minor" @emit="_clean" class="cleanbtn">清空</morning-link>

    </mor-timepicker>
</template>
 
<script>
import {
    isValid,
    format as formatDate,
    addHours,
    addMinutes,
    addSeconds
}                                   from 'date-fns';
import arrayUniq                    from 'array-uniq';
import extend                       from 'extend';
import sortBy                       from 'lodash.sortby';
import Time                         from 'Utils/Time';

export default {
    origin : 'Form',
    name : 'timepicker',
    mixins : [Time],
    props : {
        insideName : {
            type : String,
            default : ''
        },
        format : {
            type : String,
            default : 'HH:mm:ss'
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
        separatorType : {
            type : String,
            default : 'block',
            validator : (value => ['block', 'inline'].indexOf(value) !== -1)
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
                insideName : this.insideName,
                format : this.format,
                align : this.align,
                selectableRange : this.selectableRange,
                isRange : this.isRange,
                separator : this.separator,
                separatorType : this.separatorType,
                startName : this.startName,
                endName : this.endName,
                isList : this.isList,
                list : this.list,
                listStart : this.listStart,
                listEnd : this.listEnd,
                listStep : this.listStep
            };

        },
        moreClass : function () {

            return {
                'inline-separator' : (this.conf.separatorType === 'inline')
            };

        },
        timeList : function () {

            if (!this.conf.isList) {

                return {};

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

                start = this._timeStringToDate(start, this.conf.format);
                end = this._timeStringToDate(end, this.conf.format);

                while (+start <= +end) {

                    list.push(formatDate(start, this.conf.format));

                    start = addHours(start, addHour);
                    start = addMinutes(start, addMinute);
                    start = addSeconds(start, addSecond);

                }

            }

            for (let i in list) {

                if (typeof list[i] === 'string') {

                    let date = this._timeStringToDate(list[i], this.conf.format);

                    if (isValid(date)) {

                        list[i] = formatDate(date, this.conf.format);

                    }

                }

            }

            list = arrayUniq(list);
            list = sortBy(list, v => v);

            let listObj = {};

            for (let item of list) {

                listObj[item] = item;

            }

            return listObj;

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

            let date = this._timeStringToDate(value, this.conf.format);

            if (!isValid(date)) {

                value = this._timeGetStandardDate();

            }

            return value;

        },
        _syncValueFromSelectToRoot : function () {

            let select0 = this.$refs[`ui-timepicker-select-0-${this.uiid}`];
            let select1 = this.$refs[`ui-timepicker-select-1-${this.uiid}`];

            if (!this.conf.isRange && select0) {

                let select0Value = select0.get() || [];

                this._set(select0Value[0], true);

            } else if (this.conf.isRange && select0 && select1) {

                let select0Value = select0.get() || [];
                let select1Value = select1.get() || [];
                let val = [select0Value[0], select1Value[0]];

                if (val[1] === undefined) {

                    val.splice(1, 1);

                    if (val[0] === undefined) {

                        val = undefined;

                    }

                }

                // if (val === undefined && this.get().length === 0) {

                //     return;

                // }

                this._set(val, true);

            }

        },
        _syncValueFromInputToRoot : function () {

            let input0 = this.$refs[`ui-timepicker-input-0-${this.uiid}`];
            let input1 = this.$refs[`ui-timepicker-input-1-${this.uiid}`];

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

            let type = 'input';

            if (this.conf.isList) {

                type = 'select';

            }

            let input0 = this.$refs[`ui-timepicker-${type}-0-${this.uiid}`];
            let input1 = this.$refs[`ui-timepicker-${type}-1-${this.uiid}`];
            let value = this.get();

            if (!this.conf.isRange && input0) {

                if (type === 'select') {

                    if (value) {

                        input0._set([value], true);

                    } else {

                        input0._set(undefined, true);

                    }

                } else {

                    input0._set(value, true);

                }

            } else if (this.conf.isRange && input0 && input1) {

                if (type === 'select') {

                    if (value && value[0]) {

                        input0._set([value[0]], true);

                    } else {

                        input0._set(undefined, true);

                    }

                    if (value && value[1]) {

                        input1._set([value[1]], true);

                    } else {

                        input1._set(undefined, true);

                    }

                } else if (value) {

                    input0._set(value[0], true);
                    input1._set(value[1], true);

                } else {

                    input0._set(undefined, true);
                    input1._set(undefined, true);

                }

            }

        },
        getDate : function () {

            let value = this.get();

            if (typeof value === 'string') {

                return this._timeStringToDate(value, this.conf.format);

            } else if (value instanceof Array) {

                return [
                    this._timeStringToDate(value[0], this.conf.format),
                    this._timeStringToDate(value[1], this.conf.format)
                ];

            }

            return value;

        }
    },
    created : function () {},
    mounted : function () {

        this.$on('value-change', () => {

            this._syncFromRootToChild();

        });

        if (this.conf.isRange) {

            this._syncFromRootToChild();

        }

    }
};
</script>

<style lang="less" src="./index.less"></style>
