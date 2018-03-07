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
                currentDate : undefined
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

            let input0 = this.$refs[`ui-datepicker-input-0-${this.uiid}`];
            let input0Calendar = input0.$refs[`ui-calendar-${input0.uiid}`];
            let input0CalendarStart = startOfMonth(input0Calendar.getTime());
            let input0CalendarEnd = endOfMonth(input0Calendar.getTime());
            let input1 = this.$refs[`ui-datepicker-input-1-${this.uiid}`];
            let input1Calendar = input1.$refs[`ui-calendar-${input1.uiid}`];
            let input1CalendarStart = startOfMonth(input1Calendar.getTime());
            let input1CalendarEnd = endOfMonth(input1Calendar.getTime());
            let value = this.get();

            if (value &&
                typeof value[0] === 'string') {
                
                let valueStart = this._dateStringToDate(value[0], this.conf.format);

                // 开始日期在选择区域左侧日历中
                // 并且选择日期在左侧日历中
                if (valueStart <= input0CalendarEnd &&
                    valueStart >= input0CalendarStart &&
                    +date <= input0CalendarEnd &&
                    +date >= input0CalendarStart) {

                    let interval = sortBy([
                        +this._dateStringToDate(value[0], this.conf.format),
                        +date
                    ]);
                    let days = eachDayOfInterval({
                        start : interval[0],
                        end : interval[1]
                    });

                    input0Calendar.conf.highlightDay = days;
                    input1Calendar.conf.highlightDay = [];

                }

                // 开始日期在选择区域左侧日历中
                // 并且选择日期在右侧日历中
                if (valueStart <= input0CalendarEnd &&
                    valueStart >= input0CalendarStart &&
                    +date >= input1CalendarStart &&
                    +date <= input1CalendarEnd) {

                    input0Calendar.conf.highlightDay = eachDayOfInterval({
                        start : +valueStart,
                        end : addDays(+input0CalendarEnd, 1)
                    });

                    input1Calendar.conf.highlightDay = eachDayOfInterval({
                        start : subDays(+input1CalendarStart, 1),
                        end : +date
                    });

                }

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
        _syncValueFromInputToRootForClick : function (date) {

            let input0 = this.$refs[`ui-datepicker-input-0-${this.uiid}`];
            let input0Calendar = input0.$refs[`ui-calendar-${input0.uiid}`];
            let input0CalendarStart = startOfMonth(input0Calendar.getTime());
            let input0CalendarEnd = endOfMonth(input0Calendar.getTime());
            let input1 = this.$refs[`ui-datepicker-input-1-${this.uiid}`];
            let input1Calendar = input1.$refs[`ui-calendar-${input1.uiid}`];
            let input1CalendarStart = startOfMonth(input1Calendar.getTime());
            let input1CalendarEnd = endOfMonth(input1Calendar.getTime());
            let val = this.get() || [];

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
            // TODO : 同步日期高亮，去掉private-datepicker中本身的input和calender关联(可能要做成配置项)

            this._set(val, true);

        },
        _syncValueFromInputToRoot : function () {

            let input0 = this.$refs[`ui-datepicker-input-0-${this.uiid}`];
            let input1 = this.$refs[`ui-datepicker-input-1-${this.uiid}`];

            if (!this.conf.isRange && input0) {

                let value = input0.get();

                this._set(value, true);

            }
            // else if (this.conf.isRange && input0 && input1) {

                // let input0Val = input0.get();
                // let input1Val = input1.get();
                // let val = this.get();

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

                // this._set(val, true);

            // }

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

            this._syncFromRootToChild();

        });

        this._syncFromRootToChild();

    }
};
</script>

<style lang="less" src="./index.less"></style>
