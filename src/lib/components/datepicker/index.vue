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
                :date="data.currentDate"
                :format="conf.format"
                :align="conf.align"
                :selectable-range="conf.selectableRange"
                :auto-refresh-calendar="false"
    
                @value-change="_syncValueFromInputToRoot"
                @input-focus="_inputFocus"
                @input-blur="_inputBlur"
                @date-click="_syncValueFromInputToRootForClick"
                @date-enter="_inputDateEnter"
                @date-change = "_input0DateChange"
            >
            </morning-private-datepicker>

            <div class="separator">{{conf.separator}}</div>

            <morning-private-datepicker
                class="datepicker-input-1"
                :ref="'ui-datepicker-input-1-'+uiid"
                :state="conf.state"
                
                :form-name="(conf.endName === false) ? conf.formName : conf.endName"
                :hide-name="conf.hideName"
                :date="_addMonths(data.currentDate, 1)"
                :format="conf.format"
                :align="conf.align"
                :selectable-range="conf.selectableRange"
                :auto-refresh-calendar="false"
                
                @value-change="_syncValueFromInputToRoot"
                @input-focus="_inputFocus"
                @input-blur="_inputBlur"
                @date-click="_syncValueFromInputToRootForClick"
                @date-enter="_inputDateEnter"
                @date-change = "_input1DateChange"
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
    format as formatDate,
    isValid,
    addDays,
    subDays,
    addMonths,
    subMonths,
    eachDayOfInterval,
    startOfMonth,
    endOfMonth
}                                   from 'date-fns';
import sortBy                       from 'lodash.sortby';
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
            data : {
                currentDate : undefined,
                selected : false
            }
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

                    if (value.length > 1) {

                        let start = this._dateStringToDate(value[0], this.conf.format);
                        let end = this._dateStringToDate(value[1], this.conf.format);

                        if (+start > +end) {

                            let mid = value[0];

                            value[0] = value[1];
                            value[1] = mid;

                        }

                    }

                }

            }

            return value;

        },
        _input0DateChange : function (date) {

            this.data.currentDate = date;

        },
        _input1DateChange : function (date) {

            this.data.currentDate = subMonths(date, 1);

        },
        // _inputDateEnter : function (date) {

        //     let input0 = this.$refs[`ui-datepicker-input-0-${this.uiid}`];
        //     let input0Calendar = input0.$refs[`ui-calendar-${input0.uiid}`];
        //     let value = this.get();

        //     if (value &&
        //         typeof value[0] === 'string') {

        //         let interval = sortBy([
        //             +this._dateStringToDate(value[0], this.conf.format),
        //             +date
        //         ]);
        //         let days = eachDayOfInterval({
        //             start : interval[0],
        //             end : interval[1]
        //         });

        //         input0Calendar.conf.highlightDay = days;

        //     }

        // },
        _inputDateEnter : function (date) {

            if (!this.data.selected) {

                return;

            }

            let value = this.get();

            if (value &&
                typeof value[0] === 'string') {

                this._highlightDate(this._dateStringToDate(value[0], this.conf.format), date);

            }

        },
        _inputFocus : function () {

            if (!this.conf.isRange) {

                return;

            }

            let input0 = this.$refs[`ui-datepicker-input-0-${this.uiid}`];
            let input1 = this.$refs[`ui-datepicker-input-1-${this.uiid}`];
            let $input0DateSelect = input0.$el.querySelector('.date-select');
            let $input1DateSelect = input1.$el.querySelector('.date-select');

            if (!input0.data.inputFocus) {

                input0._inputFocus();

            }

            if (!input1.data.inputFocus) {

                input1._inputFocus();

            }

            if ($input0DateSelect &&
                $input1DateSelect) {

                $input1DateSelect.style.left = `${$input0DateSelect.offsetWidth}px`;

            }

        },
        _inputBlur : function () {

            if (!this.conf.isRange) {

                return;

            }

            let input0 = this.$refs[`ui-datepicker-input-0-${this.uiid}`];
            let input1 = this.$refs[`ui-datepicker-input-1-${this.uiid}`];
            let $input1DateSelect = input1.$el.querySelector('.date-select');

            console.log('_inputBlur');

            if (input0.data.inputFocus) {

                input0._inputBlur();

            }

            if (input1.data.inputFocus) {

                input1._inputBlur();
                
            }

            if ($input1DateSelect) {

                delete $input1DateSelect.style.left;

            }


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
        _highlightDate : function (start, end) {

            console.log('hd', start, end);

            if (end === undefined) {

                end = start;

            }

            start = +start;
            end = +end;

            if (end < start) {

                let mid = start;

                start = end;
                end = mid;

            }

            let input0 = this.$refs[`ui-datepicker-input-0-${this.uiid}`];
            let input0Calendar = input0.$refs[`ui-calendar-${input0.uiid}`];
            let input0CalendarStart = startOfMonth(input0Calendar.getTime());
            let input0CalendarEnd = endOfMonth(input0Calendar.getTime());
            let input1 = this.$refs[`ui-datepicker-input-1-${this.uiid}`];
            let input1Calendar = input1.$refs[`ui-calendar-${input1.uiid}`];
            let input1CalendarStart = startOfMonth(input1Calendar.getTime());
            let input1CalendarEnd = endOfMonth(input1Calendar.getTime());

            // start/end均在左侧日历中
            if (start <= input0CalendarEnd &&
                start >= input0CalendarStart &&
                +end <= input0CalendarEnd &&
                +end >= input0CalendarStart) {

                input0Calendar.conf.highlightDay = eachDayOfInterval({
                    start,
                    end
                });
                input1Calendar.conf.highlightDay = [];

            }

            // start在左侧/end在右侧
            if (start <= input0CalendarEnd &&
                start >= input0CalendarStart &&
                end >= input1CalendarStart &&
                end <= input1CalendarEnd) {

                input0Calendar.conf.highlightDay = eachDayOfInterval({
                    start,
                    end : addDays(+input0CalendarEnd, 1)
                });

                input1Calendar.conf.highlightDay = eachDayOfInterval({
                    start : subDays(+input1CalendarStart, 1),
                    end
                });

            }

            // start/end钧在右侧
            if (start <= input1CalendarEnd &&
                start >= input1CalendarStart &&
                end >= input1CalendarStart &&
                end <= input1CalendarEnd) {

                input0Calendar.conf.highlightDay = [];
                input1Calendar.conf.highlightDay = eachDayOfInterval({
                    start,
                    end
                });;

            }

        },
        _syncValueFromInputToRootForClick : function (date) {

            let val = this.get() || [];
            let input0 = this.$refs[`ui-datepicker-input-0-${this.uiid}`];
            let input0Calendar = input0.$refs[`ui-calendar-${input0.uiid}`];
            let input0CalendarStart = startOfMonth(input0Calendar.getTime());
            let input0CalendarEnd = endOfMonth(input0Calendar.getTime());
            let input1 = this.$refs[`ui-datepicker-input-1-${this.uiid}`];
            let input1Calendar = input1.$refs[`ui-calendar-${input1.uiid}`];
            let input1CalendarStart = startOfMonth(input1Calendar.getTime());
            let input1CalendarEnd = endOfMonth(input1Calendar.getTime());

            if (!this.data.selected) {

                val = [];

            }

            this.data.selected = !this.data.selected;

            if (val[0] === undefined) {

                val[0] = date;

            } else {

                val[1] = date;

            }

            val = sortBy(val);

            if (val[0]) {
    
                val[0] = formatDate(val[0], this.conf.format);

            }

            if (val[1]) {
    
                val[1] = formatDate(val[1], this.conf.format);

            }

            if (val.length === 0) {

                val = undefined;

            }

            // TODO : 验证各种日期选择情况
            // TODO : 验证日期重新选择情况

            this._set(val, true);

        },
        _syncValueFromInputToRoot : function () {

            let input0 = this.$refs[`ui-datepicker-input-0-${this.uiid}`];
            let input1 = this.$refs[`ui-datepicker-input-1-${this.uiid}`];

            if (!this.conf.isRange && input0) {

                let value = input0.get();

                this._set(value, true);

            } else if (this.conf.isRange && input0 && input1) {

                let input0Val = input0.get();
                let input1Val = input1.get();
                let val = [];
                let currentVal = this.get();

                if (currentVal[0] === input0Val &&
                    currentVal[1] === input1Val) {

                    return;

                }

                if (input0Val !== undefined) {

                    input0Val = this._dateStringToDate(input0Val, this.conf.format);

                }

                if (input1Val !== undefined) {

                    input1Val = this._dateStringToDate(input1Val, this.conf.format);

                }

                // TODO : 第二个日期修改后，弹出框不消失问题

                console.log('sync value', input0Val, input1Val);

                if (input0Val === undefined && input1Val) {

                    val = [formatDate(input1Val, this.conf.format)];

                } else if (input1Val === undefined && input0Val) {

                    val = [formatDate(input0Val, this.conf.format)];

                } else {

                    val = [formatDate(input0Val, this.conf.format), formatDate(input1Val, this.conf.format)];

                }

                // if (val === undefined ||
                //     val[0] === undefined) {

                //     if (input0Val) {

                //         val = [input0Val];

                //     }

                //     if (input1Val) {

                //         val = [input1Val];
                    
                //     }

                // } else {

                //     if (input0Val) {

                //         val[1] = input0Val;
                    
                //     } else if (input0Val) {

                //         val[1] = input0Val;

                //     }

                // }

                // if (val[1] === undefined) {

                //     val.splice(1, 1);

                //     if (val[0] === undefined) {

                //         val = undefined;

                //     }

                // }

                this._set(val, true);

            }

        },
        _syncFromRootToChild : function () {

            console.log('_syncFromRootToChild', this.get());

            let input0 = this.$refs[`ui-datepicker-input-0-${this.uiid}`];
            let input1 = this.$refs[`ui-datepicker-input-1-${this.uiid}`];
            let value = this.get();

            if (!this.conf.isRange && input0) {

                input0._set(value, true);

            } else if (this.conf.isRange && input0 && input1) {

                if (value) {

                    if (value[0] !== input0.get()) {

                        input0._set(value[0], true);

                    }

                    if (value[1] !== input1.get()) {
                        
                        input1._set(value[1], true);

                    }

                } else {

                    input0._set(undefined, true);
                    input1._set(undefined, true);

                }

            }

        },
        _addMonths : function (date, amount) {

            return addMonths(date, amount);

        }
    },
    created : function () {},
    mounted : function () {

        this.$watch('conf.date', () => {

            this.data.currentDate = +this.conf.date;

        }, {
            immediate : true
        });

        this.$on('value-change', () => {

            let value = this.get();

            this._syncFromRootToChild();

            if (value[0] && value[1]) {

                this.$nextTick(() => {

                    this._highlightDate(
                        this._dateStringToDate(value[0], this.conf.format),
                        this._dateStringToDate(value[1], this.conf.format)
                    );
                
                });

            } else if (value[0]) {

                this.$nextTick(() => {

                    this._highlightDate(
                        this._dateStringToDate(value[0], this.conf.format)
                    );
                
                });

            }

        });

        this._syncFromRootToChild();

    }
};
</script>

<style lang="less" src="./index.less"></style>
