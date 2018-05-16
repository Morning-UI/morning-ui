<template>
    <mor-datepicker
        :_uiid="uiid"
        :class="[formClass, stateClass, moreClass]"

        :form-name="formName"
        :form-key="formKey"
        :group="group"
        :default-value="defaultValue"
        :hide-name="hideName"
        :clearable="clearable"
        :date="date"
        :format="format"
        :align="align"
        :quick-pick="quickPick"
        :quick-pick-unit="quickPickUnit"
        :selectable-range="selectableRange"
        :show-timepicker-box="showTimepickerBox"
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
                class="datepicker-input-0 datepicker-input-first"
                :ref="'ui-datepicker-input-0-'+uiid"
                :state="conf.state"

                :form-name="(conf.startName === false) ? conf.formName : conf.startName"
                :hide-name="conf.hideName"
                :date="data.currentDate"
                :format="conf.format"
                :align="conf.align"
                :selectable-range="conf.selectableRange"
                :show-timepicker-box="conf.showTimepickerBox"
                :auto-refresh-calendar="false"
                :highlight-days="data.input0HighlightDays"
    
                @value-change="_syncValueFromInputToRoot"
                @focus="_focus"
                @blur="_blur"
                @input-focus="_inputFocus"
                @input-blur="_inputBlur"
                @date-click="_syncValueFromInputToRootForClick"
                @date-enter="_inputDateEnter"
                @date-change = "_input0DateChange"
            >
                <slot name="timepicker" slot="timepicker"></slot>

                <div class="quickpick" slot="quickpick" v-if="conf.quickPick.length > 0">
                    <ul>
                        <template v-for="(pick, name) in conf.quickPick">
                            <li
                                v-if="pick === '本周'"
                                @click="_pickDate([_startOfWeek(new Date()), _endOfWeek(new Date())])"
                            >{{pick}}</li>
                            <li
                                v-if="pick === '本月'"
                                @click="_pickDate([_startOfMonth(new Date()), _endOfMonth(new Date())])"
                            >{{pick}}</li>
                            <li
                                v-if="pick === '今年'"
                                @click="_pickDate([_startOfYear(new Date()), _endOfYear(new Date())])"
                            >{{pick}}</li>
                            <li
                                v-if="/^最近 \d+ 秒$/.test(pick)"
                                @click="_pickDate([_addSeconds(new Date(), -pick.replace(/(最近 | 秒)/g, '')), new Date()])"
                            >{{pick}}</li>
                            <li
                                v-if="/^最近 \d+ 分钟$/.test(pick)"
                                @click="_pickDate([_addMinutes(new Date(), -pick.replace(/(最近 | 分钟)/g, '')), new Date()])"
                            >{{pick}}</li>
                            <li
                                v-if="/^最近 \d+ 小时$/.test(pick)"
                                @click="_pickDate([_addHours(new Date(), -pick.replace(/(最近 | 小时)/g, '')), new Date()])"
                            >{{pick}}</li>
                            <li
                                v-if="/^最近 \d+ 天$/.test(pick)"
                                @click="_pickDate([_addDays(new Date(), -pick.replace(/(最近 | 天)/g, '')), new Date()])"
                            >{{pick}}</li>
                            <li
                                v-if="/^最近 \d+ 周$/.test(pick)"
                                @click="_pickDate([_addWeeks(new Date(), -pick.replace(/(最近 | 周)/g, '')), new Date()])"
                            >{{pick}}</li>
                            <li
                                v-if="/^最近 \d+ 月$/.test(pick)"
                                @click="_pickDate([_addMonths(new Date(), -pick.replace(/(最近 | 月)/g, '')), new Date()])"
                            >{{pick}}</li>
                            <li
                                v-if="/^最近 \d+ 年$/.test(pick)"
                                @click="_pickDate([_addYears(new Date(), -pick.replace(/(最近 | 年)/g, '')), new Date()])"
                            >{{pick}}</li>

                            <li
                                v-if="/^未来 \d+ 秒$/.test(pick)"
                                @click="_pickDate([new Date(), _addSeconds(new Date(), pick.replace(/(未来 | 秒)/g, ''))])"
                            >{{pick}}</li>
                            <li
                                v-if="/^未来 \d+ 分钟$/.test(pick)"
                                @click="_pickDate([new Date(), _addMinutes(new Date(), pick.replace(/(未来 | 分钟)/g, ''))])"
                            >{{pick}}</li>
                            <li
                                v-if="/^未来 \d+ 小时$/.test(pick)"
                                @click="_pickDate([new Date(), _addHours(new Date(), pick.replace(/(未来 | 小时)/g, ''))])"
                            >{{pick}}</li>
                            <li
                                v-if="/^未来 \d+ 天$/.test(pick)"
                                @click="_pickDate([new Date(), _addDays(new Date(), pick.replace(/(未来 | 天)/g, ''))])"
                            >{{pick}}</li>
                            <li
                                v-if="/^未来 \d+ 周$/.test(pick)"
                                @click="_pickDate([new Date(), _addWeeks(new Date(), pick.replace(/(未来 | 周)/g, ''))])"
                            >{{pick}}</li>
                            <li
                                v-if="/^未来 \d+ 月$/.test(pick)"
                                @click="_pickDate([new Date(), _addMonths(new Date(), pick.replace(/(未来 | 月)/g, ''))])"
                            >{{pick}}</li>
                            <li
                                v-if="/^未来 \d+ 年$/.test(pick)"
                                @click="_pickDate([new Date(), _addYears(new Date(), pick.replace(/(未来 | 年)/g, ''))])"
                            >{{pick}}</li>
                            <li
                                v-if="typeof pick === 'object' && pick.start instanceof Date && pick.end instanceof Date"
                                @click="_pickDate([pick.start, pick.end])"
                            >{{pick.name}}</li>
                        </template>
                    </ul>
                </div>
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
                :show-timepicker-box="conf.showTimepickerBox"
                :auto-refresh-calendar="false"
                :highlight-days="data.input1HighlightDays"

                @value-change="_syncValueFromInputToRoot"
                @focus="_focus"
                @blur="_blur"
                @input-focus="_inputFocus"
                @input-blur="_inputBlur"
                @date-click="_syncValueFromInputToRootForClick"
                @date-enter="_inputDateEnter"
                @date-change = "_input1DateChange"
            >
                <slot name="timepicker2" slot="timepicker"></slot>
            </morning-private-datepicker>
        </template>

        <template v-else>
            <morning-private-datepicker
                class="datepicker-input-first"
                :ref="'ui-datepicker-input-0-'+uiid"
                :state="conf.state"

                :form-name="conf.formName"
                :default-value="conf.defaultValue"
                :hide-name="conf.hideName"
                :date="date"
                :format="conf.format"
                :align="conf.align"
                :selectable-range="conf.selectableRange"
                :show-timepicker-box="conf.showTimepickerBox"

                @value-change="_syncValueFromInputToRoot"
                @input-focus="_inputFocus"
                @input-blur="_inputBlur"
                @focus="_focus"
                @blur="_blur"
            >
                <slot name="timepicker" slot="timepicker"></slot>

                <div class="quickpick" slot="quickpick" v-if="conf.quickPick.length > 0">
                    <ul>
                        <template v-for="(pick, name) in conf.quickPick">
                            <li
                                v-if="pick === '今天'"
                                @click="_pickDate(new Date())"
                            >{{pick}}</li>
                            <li
                                v-if="pick === '昨天'"
                                @click="_pickDate(_addDays(new Date(), -1))"
                            >{{pick}}</li>
                            <li
                                v-if="pick === '明天'"
                                @click="_pickDate(_addDays(new Date(), 1))"
                            >{{pick}}</li>
                            
                            <li
                                v-if="/^\d+ 秒前$/.test(pick)"
                                @click="_pickDate(_addSeconds(new Date(), -pick.replace(' 秒前', '')))"
                            >{{pick}}</li>
                            <li
                                v-if="/^\d+ 分钟前$/.test(pick)"
                                @click="_pickDate(_addMinutes(new Date(), -pick.replace(' 分钟前', '')))"
                            >{{pick}}</li>
                            <li
                                v-if="/^\d+ 小时前$/.test(pick)"
                                @click="_pickDate(_addHours(new Date(), -pick.replace(' 小时前', '')))"
                            >{{pick}}</li>
                            <li
                                v-if="/^\d+ 天前$/.test(pick)"
                                @click="_pickDate(_addDays(new Date(), -pick.replace(' 天前', '')))"
                            >{{pick}}</li>
                            <li
                                v-if="/^\d+ 周前$/.test(pick)"
                                @click="_pickDate(_addWeeks(new Date(), -pick.replace(' 周前', '')))"
                            >{{pick}}</li>
                            <li
                                v-if="/^\d+ 月前$/.test(pick)"
                                @click="_pickDate(_addMonths(new Date(), -pick.replace(' 月前', '')))"
                            >{{pick}}</li>
                            <li
                                v-if="/^\d+ 年前$/.test(pick)"
                                @click="_pickDate(_addYears(new Date(), -pick.replace(' 年前', '')))"
                            >{{pick}}</li>

                            <li
                                v-if="/^\d+ 秒后$/.test(pick)"
                                @click="_pickDate(_addSeconds(new Date(), pick.replace(' 秒后', '')))"
                            >{{pick}}</li>
                            <li
                                v-if="/^\d+ 分钟后$/.test(pick)"
                                @click="_pickDate(_addMinutes(new Date(), pick.replace(' 分钟后', '')))"
                            >{{pick}}</li>
                            <li
                                v-if="/^\d+ 小时后$/.test(pick)"
                                @click="_pickDate(_addHours(new Date(), pick.replace(' 小时后', '')))"
                            >{{pick}}</li>
                            <li
                                v-if="/^\d+ 天后$/.test(pick)"
                                @click="_pickDate(_addDays(new Date(), pick.replace(' 天后', '')))"
                            >{{pick}}</li>
                            <li
                                v-if="/^\d+ 周后$/.test(pick)"
                                @click="_pickDate(_addWeeks(new Date(), pick.replace(' 周后', '')))"
                            >{{pick}}</li>
                            <li
                                v-if="/^\d+ 月后$/.test(pick)"
                                @click="_pickDate(_addMonths(new Date(), pick.replace(' 月后', '')))"
                            >{{pick}}</li>
                            <li
                                v-if="/^\d+ 年后$/.test(pick)"
                                @click="_pickDate(_addYears(new Date(), pick.replace(' 年后', '')))"
                            >{{pick}}</li>

                            <li
                                v-if="typeof pick === 'object' && typeof pick.pick === 'number'"
                                @click="_pickDate(_addMilliseconds(new Date(), pick.pick * conf.quickPickUnit))"
                            >{{pick.name}}</li>

                            <li
                                v-if="typeof pick === 'object' && pick.pick instanceof Date"
                                @click="_pickDate(pick.pick)"
                            >{{pick.name}}</li>
                        </template>
                    </ul>
                </div>

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
    endOfMonth,
    addWeeks,
    startOfWeek,
    endOfWeek,
    addYears,
    startOfYear,
    endOfYear,
    addHours,
    addMinutes,
    addSeconds,
    addMilliseconds
}                                   from 'date-fns';

import sortBy                       from 'lodash.sortby';
import Dates                        from 'Utils/Dates';

const NUM_60 = 60;
const NUM_1K = 1000;

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
        quickPick : {
            type : Array,
            default : (() => [])
        },
        quickPickUnit : {
            type : Number,
            default : (NUM_60 * NUM_60 * NUM_1K)
        },
        selectableRange : {
            type : Array,
            default : (() => [])
        },
        // WARN : 此配置项不对使用者开放，仅用于datetimepicker
        showTimepickerBox : {
            type : Boolean,
            defualt : false
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
            default : '开始日期'
        },
        endName : {
            type : String,
            default : '结束日期'
        }
    },
    computed : {
        _conf : function () {

            return {
                date : this.date,
                format : this.format,
                align : this.align,
                quickPick : this.quickPick,
                quickPickUnit : this.quickPickUnit,
                selectableRange : this.selectableRange,
                showTimepickerBox : this.showTimepickerBox,
                isRange : this.isRange,
                separator : this.separator,
                startName : this.startName,
                endName : this.endName
            };

        },
        moreClass : function () {

            return {
                'has-quick-pick' : (this.conf.quickPick.length > 0)
            };

        }
    },
    data : function () {

        return {
            data : {
                currentDate : undefined,
                selected : false,
                input0HighlightDays : [],
                input1HighlightDays : []
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
            this.$nextTick(() => this._highlightDateFromValue());

        },
        _input1DateChange : function (date) {

            this.data.currentDate = subMonths(date, 1);
            this.$nextTick(() => this._highlightDateFromValue());

        },
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

            this.$emit('input-focus');

        },
        _inputBlur : function () {

            this.$emit('input-blur');

        },
        _focus : function () {

            if (this.conf.isRange) {

                let input0 = this.$refs[`ui-datepicker-input-0-${this.uiid}`];
                let input1 = this.$refs[`ui-datepicker-input-1-${this.uiid}`];
                let $input0DateSelect = input0.$el.querySelector('.date-select');
                let $input1DateSelect = input1.$el.querySelector('.date-select');
                let value = this.get();

                input0.data.keepInputFocus = true;
                input1.data.keepInputFocus = true;
                input0.data.blurIgnoreElement = input1.$el;
                input1.data.blurIgnoreElement = input0.$el;

                if (!input0.data.inputFocus) {

                    input0._focus();

                }

                if (!input1.data.inputFocus) {

                    input1._focus();

                }

                if ($input0DateSelect &&
                    $input1DateSelect) {

                    $input1DateSelect.style.left = `${$input0DateSelect.offsetWidth}px`;

                }

                if (value && value[0]) {

                    this.data.currentDate = +this._dateStringToDate(value[0], this.conf.format);

                }

                this.$nextTick(() => this._highlightDateFromValue());

            }

            this.$emit('focus');

        },
        _blur : function () {

            if (this.conf.isRange) {

                let input0 = this.$refs[`ui-datepicker-input-0-${this.uiid}`];
                let input1 = this.$refs[`ui-datepicker-input-1-${this.uiid}`];
                let $input1DateSelect = input1.$el.querySelector('.date-select');
                
                input0.data.keepInputFocus = false;
                input1.data.keepInputFocus = false;
                input0.data.blurIgnoreElement = undefined;
                input1.data.blurIgnoreElement = undefined;

                if (input0.data.inputFocus) {

                    input0._blur();

                }

                if (input1.data.inputFocus) {

                    input1._blur();

                }

                if ($input1DateSelect) {

                    delete $input1DateSelect.style.left;

                }

            }

            this.$emit('blur');

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
        _highlightDateFromValue : function () {

            let value = this.get();

            if (!value) {

                return;

            }

            if (value[0] && value[1]) {

                this._highlightDate(
                    this._dateStringToDate(value[0], this.conf.format),
                    this._dateStringToDate(value[1], this.conf.format)
                );
                
            } else if (value[0]) {

                this._highlightDate(
                    this._dateStringToDate(value[0], this.conf.format)
                );

            }

        },
        _highlightDate : function (start, end) {

            if (!this.conf.isRange) {

                return;

            }

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
            let input1 = this.$refs[`ui-datepicker-input-1-${this.uiid}`];
            let input0Calendar = input0.$refs[`ui-calendar-${input0.uiid}`];
            let input0CalendarStart = startOfMonth(input0Calendar.getTime());
            let input0CalendarEnd = endOfMonth(input0Calendar.getTime());
            let input1Calendar = input1.$refs[`ui-calendar-${input1.uiid}`];
            let input1CalendarStart = startOfMonth(input1Calendar.getTime());
            let input1CalendarEnd = endOfMonth(input1Calendar.getTime());
            let input0HighlightDays;
            let input1HighlightDays;

            // start超过左侧日历/end在左侧日历
            if (start <= input0CalendarStart &&
                end >= input0CalendarStart &&
                end <= input0CalendarEnd) {

                input0HighlightDays = eachDayOfInterval({
                    start : subDays(+input0CalendarStart, 1),
                    end
                });
                input1HighlightDays = [];

            }

            // start超过左侧日历/end在右侧日历
            if (start <= input0CalendarStart &&
                end >= input1CalendarStart &&
                end <= input1CalendarEnd) {

                input0HighlightDays = eachDayOfInterval({
                    start : subDays(+input0CalendarStart, 1),
                    end : addDays(+input0CalendarEnd, 1)
                });
                input1HighlightDays = eachDayOfInterval({
                    start : subDays(+input1CalendarStart, 1),
                    end
                });

            }

            // start在左侧日历/end超过右侧日历
            if (start >= input0CalendarStart &&
                start <= input0CalendarEnd &&
                end >= input1CalendarEnd) {

                input0HighlightDays = eachDayOfInterval({
                    start,
                    end : addDays(+input0CalendarEnd, 1)
                });
                input1HighlightDays = eachDayOfInterval({
                    start : subDays(+input1CalendarStart, 1),
                    end : addDays(+input1CalendarEnd, 1)
                });

            }

            // start在右侧日历/end超过右侧日历
            if (start >= input1CalendarStart &&
                start <= input1CalendarEnd &&
                end >= input1CalendarEnd) {

                input0HighlightDays = [];
                input1HighlightDays = eachDayOfInterval({
                    start,
                    end : addDays(+input1CalendarEnd, 1)
                });

            }

            // start超过左侧日历/end超过右侧日历
            if (start <= input0CalendarStart &&
                end >= input1CalendarEnd) {

                input0HighlightDays = eachDayOfInterval({
                    start : subDays(+input0CalendarStart, 1),
                    end : addDays(+input0CalendarEnd, 1)
                });
                input1HighlightDays = eachDayOfInterval({
                    start : subDays(+input1CalendarStart, 1),
                    end : addDays(+input1CalendarEnd, 1)
                });

            }

            // start/end均在左侧日历中
            if (start <= input0CalendarEnd &&
                start >= input0CalendarStart &&
                +end <= input0CalendarEnd &&
                +end >= input0CalendarStart) {

                input0HighlightDays = eachDayOfInterval({
                    start,
                    end
                });
                input1HighlightDays = [];

            }

            // start在左侧/end在右侧
            if (start <= input0CalendarEnd &&
                start >= input0CalendarStart &&
                end >= input1CalendarStart &&
                end <= input1CalendarEnd) {

                input0HighlightDays = eachDayOfInterval({
                    start,
                    end : addDays(+input0CalendarEnd, 1)
                });

                input1HighlightDays = eachDayOfInterval({
                    start : subDays(+input1CalendarStart, 1),
                    end
                });

            }

            // start/end钧在右侧
            if (start <= input1CalendarEnd &&
                start >= input1CalendarStart &&
                end >= input1CalendarStart &&
                end <= input1CalendarEnd) {

                input0HighlightDays = [];
                input1HighlightDays = eachDayOfInterval({
                    start,
                    end
                });

            }

            this.data.input0HighlightDays = input0HighlightDays;
            this.data.input1HighlightDays = input1HighlightDays;

        },
        _syncValueFromInputToRootForClick : function (date) {

            let val = this.get() || [];

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

                if (input0Val === undefined && input1Val) {

                    val = [formatDate(input1Val, this.conf.format)];

                } else if (input1Val === undefined && input0Val) {

                    val = [formatDate(input0Val, this.conf.format)];

                } else {

                    val = [formatDate(input0Val, this.conf.format), formatDate(input1Val, this.conf.format)];

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
        _addMonths : function (...arg) {

            return addMonths.apply(this, arg);

        },
        _addDays : function (...arg) {

            return addDays.apply(this, arg);

        },
        _addWeeks : function (...arg) {

            return addWeeks.apply(this, arg);

        },
        _addYears : function (...arg) {

            return addYears.apply(this, arg);

        },
        _addHours : function (...arg) {

            return addHours.apply(this, arg);

        },
        _addMinutes : function (...arg) {

            return addMinutes.apply(this, arg);

        },
        _addSeconds : function (...arg) {

            return addSeconds.apply(this, arg);

        },
        _addMilliseconds : function (...arg) {

            return addMilliseconds.apply(this, arg);

        },
        _startOfWeek : function (...arg) {

            return startOfWeek.apply(this, arg);

        },
        _endOfWeek : function (...arg) {

            return endOfWeek.apply(this, arg);

        },
        _startOfMonth : function (...arg) {

            return startOfMonth.apply(this, arg);

        },
        _endOfMonth : function (...arg) {

            return endOfMonth.apply(this, arg);

        },
        _startOfYear : function (...arg) {

            return startOfYear.apply(this, arg);

        },
        _endOfYear : function (...arg) {

            return endOfYear.apply(this, arg);

        },
        _pickDate : function (date) {

            if (date instanceof Date &&
                !this.conf.isRange) {

                this._set(formatDate(date, this.conf.format));

                if (this.$slots.timepicker &&
                    this.$slots.timepicker[0] &&
                    this.$slots.timepicker[0].children &&
                    this.$slots.timepicker[0].children[0]) {

                    let $timepicker = this.$slots.timepicker[0].children[0].componentInstance;

                    $timepicker._set(formatDate(date, $timepicker.conf.format));

                }

            }

            if (date instanceof Array &&
                date[0] instanceof Date &&
                date[1] instanceof Date &&
                this.conf.isRange) {

                this._set([
                    formatDate(date[0], this.conf.format),
                    formatDate(date[1], this.conf.format)
                ]);

                if (this.$slots.timepicker &&
                    this.$slots.timepicker[0] &&
                    this.$slots.timepicker[0].children &&
                    this.$slots.timepicker[0].children[0]) {

                    let $timepicker = this.$slots.timepicker[0].children[0].componentInstance;

                    $timepicker._set(formatDate(date[0], $timepicker.conf.format));

                }

                if (this.$slots.timepicker2 &&
                    this.$slots.timepicker2[0] &&
                    this.$slots.timepicker2[0].children &&
                    this.$slots.timepicker2[0].children[0]) {

                    let $timepicker = this.$slots.timepicker2[0].children[0].componentInstance;

                    $timepicker._set(formatDate(date[1], $timepicker.conf.format));

                }

            }

        },
        getDate : function () {

            let value = this.get();

            if (typeof value === 'string') {

                return this._dateStringToDate(value, this.conf.format);

            } else if (value instanceof Array) {

                return [
                    this._dateStringToDate(value[0], this.conf.format),
                    this._dateStringToDate(value[1], this.conf.format)
                ];

            }

            return value;

        },
        getInputValue : function () {

            let input0 = this.$refs[`ui-datepicker-input-0-${this.uiid}`];
            let input1 = this.$refs[`ui-datepicker-input-1-${this.uiid}`];

            if (!this.conf.isRange) {

                return input0.data.inputValue;

            }

            return [input0.data.inputValue, input1.data.inputValue];

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
            this.$nextTick(() => this._highlightDateFromValue());
            
        });

        this._syncFromRootToChild();

    }
};
</script>

<style lang="less" src="./index.less"></style>
