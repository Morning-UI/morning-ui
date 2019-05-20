<template>
    <mor-datepicker
        :_uiid="uiid"
        :class="[formClass, sizeClass, stateClass, moreClass]"

        :form-name="formName"
        :form-note="formNote"
        :form-key="formKey"
        :group="group"
        :hide-name="hideName"
        :clearable="clearable"
        :_errorMessage="_errorMessage"
        :inside-name="insideName"
        :date="date"
        :format="format"
        :align="align"
        :quick-pick="quickPick"
        :selectable-range="selectableRange"
        :show-timepicker-box="showTimepickerBox"
        :is-range="isRange"
        :range-input-direction="rangeInputDirection"
        :separator="separator"
        :separator-type="separatorType"
        :start-name="startName"
        :end-name="endName"
        :done-hidden="doneHidden"
        :relative="relative"
        :month-pick="monthPick"
        :_quick-pick-unit="_quickPickUnit"
        :_relative-time="_relativeTime"
    >

    <div class="form-name" v-if="!conf.hideName && !!conf.formName">{{conf.formName}}</div>
    <div class="form-note" v-if="!!conf.formNote">{{conf.formNote}}</div>

    <div class="wrap form-body">
        <div class="input-group-addon" v-if="conf.isRange">
            <i class='mo-icon mo-icon-date'></i>
        </div>

        <div class="input-box">
            <template v-if="conf.isRange">
                <morning-private-datepicker
                    class="datepicker-input-0 datepicker-input-first"
                    :ref="'ui-datepicker-input-0-'+uiid"
                    :state="conf.state"
                    :size="conf.size"

                    :inside-name="(conf.startName === false) ? conf.insideName : conf.startName"
                    :date="+data.currentDate || undefined"
                    :format="conf.format"
                    :align="conf.align"
                    :selectable-range="conf.selectableRange"
                    :show-timepicker-box="conf.showTimepickerBox"
                    :auto-refresh-calendar="false"
                    :highlight-days="data.input0HighlightDays"
                    :has-quick-pick="(this.conf.quickPick.length > 0)"
                    :relative="conf.relative"
                    :month-pick="conf.monthPick"
                    :_date-popover-add-class="'date-select-0'"
                    :_relative-time="conf._relativeTime"
                    :_range-input-direction="conf.rangeInputDirection === 'vertical'"

                    @value-change="_syncValueFromInputToRoot"
                    @focus="_focus();_emitFocus()"
                    @blur="_blur();_emitBlur()"
                    @input-focus="_inputFocus"
                    @input-blur="_inputBlur"
                    @date-click="_syncValueFromInputToRootForClick"
                    @date-enter="_inputDateEnter"
                    @date-change = "_input0DateChange"
                >
                    <slot name="timepicker" slot="timepicker"></slot>

                    <div
                        class="quickpick"
                        slot="quickpick"
                        v-if="conf.quickPick.length > 0"
                    >
                        <ul>
                            <template v-for="(pick, index) in conf.quickPick">
                                <li
                                    v-if="pick === '本周'"
                                    :key="index"
                                    @click="_quickPickDate([_startOfWeek(new Date()), _endOfWeek(new Date())])"
                                >{{pick}}</li>
                                <li
                                    v-if="pick === '本月'"
                                    :key="index"
                                    @click="_quickPickDate([_startOfMonth(new Date()), _endOfMonth(new Date())])"
                                >{{pick}}</li>
                                <li
                                    v-if="pick === '今年'"
                                    :key="index"
                                    @click="_quickPickDate([_startOfYear(new Date()), _endOfYear(new Date())])"
                                >{{pick}}</li>
                                <li
                                    v-if="/^最近 \d+ 秒$/.test(pick)"
                                    :key="index"
                                    @click="_quickPickDate([_addSeconds(new Date(), -pick.replace(/(最近 | 秒)/g, '')), new Date()])"
                                >{{pick}}</li>
                                <li
                                    v-if="/^最近 \d+ 分钟$/.test(pick)"
                                    :key="index"
                                    @click="_quickPickDate([_addMinutes(new Date(), -pick.replace(/(最近 | 分钟)/g, '')), new Date()])"
                                >{{pick}}</li>
                                <li
                                    v-if="/^最近 \d+ 小时$/.test(pick)"
                                    :key="index"
                                    @click="_quickPickDate([_addHours(new Date(), -pick.replace(/(最近 | 小时)/g, '')), new Date()])"
                                >{{pick}}</li>
                                <li
                                    v-if="/^最近 \d+ 天$/.test(pick)"
                                    :key="index"
                                    @click="_quickPickDate([_addDays(new Date(), -pick.replace(/(最近 | 天)/g, '')), new Date()])"
                                >{{pick}}</li>
                                <li
                                    v-if="/^最近 \d+ 周$/.test(pick)"
                                    :key="index"
                                    @click="_quickPickDate([_addWeeks(new Date(), -pick.replace(/(最近 | 周)/g, '')), new Date()])"
                                >{{pick}}</li>
                                <li
                                    v-if="/^最近 \d+ 月$/.test(pick)"
                                    :key="index"
                                    @click="_quickPickDate([_addMonths(new Date(), -pick.replace(/(最近 | 月)/g, '')), new Date()])"
                                >{{pick}}</li>
                                <li
                                    v-if="/^最近 \d+ 年$/.test(pick)"
                                    :key="index"
                                    @click="_quickPickDate([_addYears(new Date(), -pick.replace(/(最近 | 年)/g, '')), new Date()])"
                                >{{pick}}</li>

                                <li
                                    v-if="/^未来 \d+ 秒$/.test(pick)"
                                    :key="index"
                                    @click="_quickPickDate([new Date(), _addSeconds(new Date(), pick.replace(/(未来 | 秒)/g, ''))])"
                                >{{pick}}</li>
                                <li
                                    v-if="/^未来 \d+ 分钟$/.test(pick)"
                                    :key="index"
                                    @click="_quickPickDate([new Date(), _addMinutes(new Date(), pick.replace(/(未来 | 分钟)/g, ''))])"
                                >{{pick}}</li>
                                <li
                                    v-if="/^未来 \d+ 小时$/.test(pick)"
                                    :key="index"
                                    @click="_quickPickDate([new Date(), _addHours(new Date(), pick.replace(/(未来 | 小时)/g, ''))])"
                                >{{pick}}</li>
                                <li
                                    v-if="/^未来 \d+ 天$/.test(pick)"
                                    :key="index"
                                    @click="_quickPickDate([new Date(), _addDays(new Date(), pick.replace(/(未来 | 天)/g, ''))])"
                                >{{pick}}</li>
                                <li
                                    v-if="/^未来 \d+ 周$/.test(pick)"
                                    :key="index"
                                    @click="_quickPickDate([new Date(), _addWeeks(new Date(), pick.replace(/(未来 | 周)/g, ''))])"
                                >{{pick}}</li>
                                <li
                                    v-if="/^未来 \d+ 月$/.test(pick)"
                                    :key="index"
                                    @click="_quickPickDate([new Date(), _addMonths(new Date(), pick.replace(/(未来 | 月)/g, ''))])"
                                >{{pick}}</li>
                                <li
                                    v-if="/^未来 \d+ 年$/.test(pick)"
                                    :key="index"
                                    @click="_quickPickDate([new Date(), _addYears(new Date(), pick.replace(/(未来 | 年)/g, ''))])"
                                >{{pick}}</li>

                                <li
                                    v-if="typeof pick === 'object'"
                                    :key="index"
                                    @click="_quickPickDate([pick.start, pick.end])"
                                >{{pick.name}}</li>
                            </template>
                        </ul>
                    </div>
                </morning-private-datepicker>

                <div class="separator" :class="conf.separatorType">{{conf.separator}}</div>

                <morning-private-datepicker
                    class="datepicker-input-1"
                    :ref="'ui-datepicker-input-1-'+uiid"
                    :state="conf.state"
                    :size="conf.size"
                    
                    :inside-name="(conf.endName === false) ? conf.insideName : conf.endName"
                    :date="input1Date"
                    :format="conf.format"
                    :align="conf.align"
                    :selectable-range="conf.selectableRange"
                    :show-timepicker-box="conf.showTimepickerBox"
                    :auto-refresh-calendar="false"
                    :highlight-days="data.input1HighlightDays"
                    :relative="conf.relative"
                    :month-pick="conf.monthPick"
                    :_date-popover-add-class="'date-select-1'"
                    :_relative-time="conf._relativeTime"
                    :_range-input-direction="conf.rangeInputDirection === 'vertical'"

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
                    :size="conf.size"

                    :inside-name="conf.insideName"
                    :init-value="data.value"
                    :date="+date"
                    :format="conf.format"
                    :align="conf.align"
                    :selectable-range="conf.selectableRange"
                    :show-timepicker-box="conf.showTimepickerBox"
                    :has-quick-pick="(this.conf.quickPick.length > 0)"
                    :relative="conf.relative"
                    :month-pick="conf.monthPick"
                    :_relative-time="conf._relativeTime"

                    @value-change="_syncValueFromInputToRoot"
                    @input-focus="_inputFocus"
                    @input-blur="_inputBlur"
                    @focus="_focus"
                    @blur="_blur"
                    @date-click="_dateClick"
                >
                    <slot name="timepicker" slot="timepicker"></slot>

                    <div
                        class="quickpick"
                        slot="quickpick"
                        v-if="conf.quickPick.length > 0"
                    >
                        <ul>
                            <template v-for="(pick, index) in conf.quickPick">
                                <li
                                    v-if="pick === '今天'"
                                    :key="index"
                                    @click="_quickPickDate(new Date())"
                                >{{pick}}</li>
                                <li
                                    v-if="pick === '昨天'"
                                    :key="index"
                                    @click="_quickPickDate(_addDays(new Date(), -1))"
                                >{{pick}}</li>
                                <li
                                    v-if="pick === '明天'"
                                    :key="index"
                                    @click="_quickPickDate(_addDays(new Date(), 1))"
                                >{{pick}}</li>
                                
                                <li
                                    v-if="/^\d+ 秒前$/.test(pick)"
                                    :key="index"
                                    @click="_quickPickDate(_addSeconds(new Date(), -pick.replace(' 秒前', '')))"
                                >{{pick}}</li>
                                <li
                                    v-if="/^\d+ 分钟前$/.test(pick)"
                                    :key="index"
                                    @click="_quickPickDate(_addMinutes(new Date(), -pick.replace(' 分钟前', '')))"
                                >{{pick}}</li>
                                <li
                                    v-if="/^\d+ 小时前$/.test(pick)"
                                    :key="index"
                                    @click="_quickPickDate(_addHours(new Date(), -pick.replace(' 小时前', '')))"
                                >{{pick}}</li>
                                <li
                                    v-if="/^\d+ 天前$/.test(pick)"
                                    :key="index"
                                    @click="_quickPickDate(_addDays(new Date(), -pick.replace(' 天前', '')))"
                                >{{pick}}</li>
                                <li
                                    v-if="/^\d+ 周前$/.test(pick)"
                                    :key="index"
                                    @click="_quickPickDate(_addWeeks(new Date(), -pick.replace(' 周前', '')))"
                                >{{pick}}</li>
                                <li
                                    v-if="/^\d+ 月前$/.test(pick)"
                                    :key="index"
                                    @click="_quickPickDate(_addMonths(new Date(), -pick.replace(' 月前', '')))"
                                >{{pick}}</li>
                                <li
                                    v-if="/^\d+ 年前$/.test(pick)"
                                    :key="index"
                                    @click="_quickPickDate(_addYears(new Date(), -pick.replace(' 年前', '')))"
                                >{{pick}}</li>

                                <li
                                    v-if="/^\d+ 秒后$/.test(pick)"
                                    :key="index"
                                    @click="_quickPickDate(_addSeconds(new Date(), pick.replace(' 秒后', '')))"
                                >{{pick}}</li>
                                <li
                                    v-if="/^\d+ 分钟后$/.test(pick)"
                                    :key="index"
                                    @click="_quickPickDate(_addMinutes(new Date(), pick.replace(' 分钟后', '')))"
                                >{{pick}}</li>
                                <li
                                    v-if="/^\d+ 小时后$/.test(pick)"
                                    :key="index"
                                    @click="_quickPickDate(_addHours(new Date(), pick.replace(' 小时后', '')))"
                                >{{pick}}</li>
                                <li
                                    v-if="/^\d+ 天后$/.test(pick)"
                                    :key="index"
                                    @click="_quickPickDate(_addDays(new Date(), pick.replace(' 天后', '')))"
                                >{{pick}}</li>
                                <li
                                    v-if="/^\d+ 周后$/.test(pick)"
                                    :key="index"
                                    @click="_quickPickDate(_addWeeks(new Date(), pick.replace(' 周后', '')))"
                                >{{pick}}</li>
                                <li
                                    v-if="/^\d+ 月后$/.test(pick)"
                                    :key="index"
                                    @click="_quickPickDate(_addMonths(new Date(), pick.replace(' 月后', '')))"
                                >{{pick}}</li>
                                <li
                                    v-if="/^\d+ 年后$/.test(pick)"
                                    :key="index"
                                    @click="_quickPickDate(_addYears(new Date(), pick.replace(' 年后', '')))"
                                >{{pick}}</li>

                                <li
                                    v-if="typeof pick === 'object'"
                                    :key="index"
                                    @click="_quickPickDate(pick.pick)"
                                >{{pick.name}}</li>
                            </template>
                        </ul>
                    </div>

                </morning-private-datepicker>
            </template>
        </div>

    </div>

    <div class="error-message">{{conf._errorMessage}}</div>
    <morning-link v-if="conf.clearable" color="minor" @emit="_clean" class="cleanbtn">清空</morning-link>

    </mor-datepicker>
</template>
 
<script>
import {
    format as formatDate,
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
    subYears,
    startOfYear,
    endOfYear,
    addHours,
    addMinutes,
    addSeconds,
    addMilliseconds
}                                   from 'date-fns';

import sortBy                       from 'lodash.sortby';
import Dates                        from 'Utils/Dates';
import DateTime                     from 'Utils/DateTime';

const NUM_60 = 60;
const NUM_1K = 1000;

export default {
    origin : 'Form',
    name : 'datepicker',
    mixins : [Dates, DateTime],
    props : {
        insideName : {
            type : String,
            default : ''
        },
        date : {
            type : Number,
            default : +new Date()
        },
        format : {
            type : String,
            default : 'yyyy-MM-dd'
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
        _quickPickUnit : {
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
        rangeInputDirection : {
            type : String,
            default : 'horizontal',
            validator : (value => ['horizontal', 'vertical'].indexOf(value) !== -1)
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
            default : '开始日期'
        },
        endName : {
            type : String,
            default : '结束日期'
        },
        doneHidden : {
            type : Boolean,
            default : false
        },
        relative : {
            type : Boolean,
            default : false
        },
        monthPick : {
            type : Boolean,
            default : false
        },
        _relativeTime : {
            type : Boolean,
            default : false
        }
    },
    computed : {
        _conf : function () {

            return {
                insideName : this.insideName,
                date : this.date,
                format : this.format,
                align : this.align,
                quickPick : this.quickPick,
                selectableRange : this.selectableRange,
                showTimepickerBox : this.showTimepickerBox,
                isRange : this.isRange,
                rangeInputDirection : this.rangeInputDirection,
                separator : this.separator,
                separatorType : this.separatorType,
                startName : this.startName,
                endName : this.endName,
                doneHidden : this.doneHidden,
                relative : this.relative,
                monthPick : this.monthPick,
                _quickPickUnit : this._quickPickUnit,
                _relativeTime : this._relativeTime
            };

        },
        input1Date : function () {

            if (this.data.currentDate === undefined) {

                return undefined;

            }

            if (this.conf.monthPick) {

                return +addYears(this.data.currentDate, 1);

            }

            return +addMonths(this.data.currentDate, 1);

        },
        moreClass : function () {

            return {
                'has-quick-pick' : (this.conf.quickPick.length > 0),
                'inline-separator' : (this.conf.separatorType === 'inline'),
                'range-input-vertical' : (this.conf.rangeInputDirection === 'vertical')
            };

        }
    },
    data : function () {

        return {
            data : {
                currentDate : undefined,
                selected : false,
                input0HighlightDays : [],
                input1HighlightDays : [],
                lastComponentFocusStatus : false
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

                if (!this.conf.relative ||
                    (this.conf.relative && !this._isRelativeDate(value))) {

                    value = this._filterDateString(value);

                }

            } else if (typeof value === 'object' && value instanceof Array) {

                if (value.length === 0) {

                    value = undefined;

                } else {

                    if (value.length > 2) {

                        value.splice(0, 2);

                    }

                    for (let k in value) {

                        if (!this.conf.relative ||
                            (this.conf.relative && !this._isRelativeDate(value[k]))) {

                            value[k] = this._filterDateString(value[k]);

                        }

                    }

                    if (value.length > 1) {

                        let start;
                        let end;

                        if (this.conf.relative && this._isRelativeDate(value[0])) {

                            start = this._getDate(value[0]);

                        } else {

                            start = this._dateStringToDate(value[0], this.conf.format);

                        }

                        if (this.conf.relative && this._isRelativeDate(value[1])) {

                            end = this._getDate(value[1]);
                            
                        } else {

                            end = this._dateStringToDate(value[1], this.conf.format);

                        }

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
        _isRelativeDate : function (value) {

            if (this.conf._relativeTime) {

                return this._dtIsRelativeDatetime(value);

            }

            return this._dateIsRelativeDate(value);

        },
        _getRelativeDate : function (relativeObj) {

            if (this.conf._relativeTime) {

                return this._dtGetRelativeDatetime(relativeObj);

            }

            return this._dateGetRelativeDate(relativeObj);

        },
        _parseRelativeDateToObj : function (value) {

            if (this.conf._relativeTime) {

                return this._dtParseRelativeDatetimeToObj(value);

            }

            return this._dateParseRelativeDateToObj(value);

        },
        _input0DateChange : function (date) {

            this.data.currentDate = date;
            this.$nextTick(() => this._highlightDateFromValue());

        },
        _input1DateChange : function (date) {

            if (this.conf.monthPick) {

                this.data.currentDate = subYears(date, 1);

            } else {

                this.data.currentDate = subMonths(date, 1);

            }
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
                let $input0DateSelect = input0.data.$dateWrap;
                let $input1DateSelect = input1.data.$dateWrap;
                let timepicker0;
                let timepicker1;
                let value = this.get();

                if (this.$parent &&
                    this.$parent.isUI &&
                    this.$parent.uiname === 'datetimepicker') {

                    timepicker0 = this.$parent.$refs[`ui-datetimepicker-time-${this.$parent.uiid}`];
                    timepicker1 = this.$parent.$refs[`ui-datetimepicker-time2-${this.$parent.uiid}`];

                    if (timepicker0) {
                        
                        let privateTimepicker;

                        for (let vm of timepicker0.$children) {

                            if (vm.isUI && vm.uiname === 'private-timepicker') {

                                privateTimepicker = vm;

                            }

                        }

                        if (privateTimepicker) {

                            input0.data.blurIgnoreElement3 = privateTimepicker.$refs[`ui-private-timepicker-popover-${privateTimepicker.uiid}`].$el;
                            input1.data.blurIgnoreElement3 = privateTimepicker.$refs[`ui-private-timepicker-popover-${privateTimepicker.uiid}`].$el;

                        }

                    }

                    if (timepicker1) {
                        
                        let privateTimepicker;

                        for (let vm of timepicker1.$children) {

                            if (vm.isUI && vm.uiname === 'private-timepicker') {

                                privateTimepicker = vm;

                            }

                        }

                        if (privateTimepicker) {

                            input0.data.blurIgnoreElement4 = privateTimepicker.$refs[`ui-private-timepicker-popover-${privateTimepicker.uiid}`].$el;
                            input1.data.blurIgnoreElement4 = privateTimepicker.$refs[`ui-private-timepicker-popover-${privateTimepicker.uiid}`].$el;

                        }

                    }

                }

                input0.data.keepInputFocus = true;
                input1.data.keepInputFocus = true;
                input0.data.blurIgnoreElement1 = input1.$el;
                input0.data.blurIgnoreElement2 = $input1DateSelect;
                input1.data.blurIgnoreElement1 = input0.$el;
                input1.data.blurIgnoreElement2 = $input0DateSelect;

                if (!input0.data.inputFocus) {

                    input0._focus();

                }

                if (!input1.data.inputFocus) {

                    input1._focus();

                }

                if ($input0DateSelect &&
                    $input1DateSelect) {

                    this.Vue.nextTick(() => {

                        let input0x = $input0DateSelect.getBoundingClientRect().left;
                        let input1Rect = $input1DateSelect.getBoundingClientRect();
                        let input1x = input1Rect.left;
                        // let input1w = input1Rect.width;
                        let offset = ($input0DateSelect.offsetWidth - (input1x - input0x)) / 2;

                        offset = Math.round(offset * NUM_1K) / NUM_1K;

                        if (offset === 0) {

                            return;

                        }

                        setTimeout(() => {

                            let popover0 = input0.$refs[`ui-private-datepicker-popover-${input0.uiid}`];
                            let popover1 = input1.$refs[`ui-private-datepicker-popover-${input1.uiid}`];
                            let offsets0 = popover0.Tip.data.offsets;
                            let offsets1 = popover1.Tip.data.offsets;
                            let offsetFixed = 0;
                            let popover0OriginOffsetY = popover0
                                .Tip
                                .data
                                .instance
                                .options
                                .modifiers
                                .offset
                                .offset
                                .split(' ')[1].replace(/(px|,)/g, '');
                            let popover0OriginOffsetX = popover0
                                .Tip
                                .data
                                .instance
                                .options
                                .modifiers
                                .offset
                                .offset
                                .split(' ')[0].replace(/(px|,)/g, '');
                            let popover1OriginOffsetY = popover1
                                .Tip
                                .data
                                .instance
                                .options
                                .modifiers
                                .offset
                                .offset
                                .split(' ')[1].replace(/(px|,)/g, '');
                            let popover1OriginOffsetX = popover1
                                .Tip
                                .data
                                .instance
                                .options
                                .modifiers
                                .offset
                                .offset
                                .split(' ')[0].replace(/(px|,)/g, '');

                            if ((offsets0.popper.width + offsets0.popper.left) > offsets1.popper.left) {

                                offsetFixed = (offsets0.popper.width + offsets0.popper.left - offsets1.popper.left) / 2;

                                // case 5 is minimum
                                if (offsets0.popper.left === 5) {

                                    popover1._tipUpdateOptions({
                                        options : {
                                            modifiers : {
                                                offset : {
                                                    offset : `${(offsetFixed * 2) + Number(popover1OriginOffsetX)}px, ${popover1OriginOffsetY}`
                                                }
                                            }
                                        }
                                    });

                                } else if ((document.body.clientWidth - offsets1.popper.right) < 5) {

                                    popover0._tipUpdateOptions({
                                        options : {
                                            modifiers : {
                                                offset : {
                                                    offset : `${(-offsetFixed * 2) + Number(popover0OriginOffsetX)}px, ${popover1OriginOffsetY}`
                                                }
                                            }
                                        }
                                    });

                                } else {

                                    popover0._tipUpdateOptions({
                                        options : {
                                            modifiers : {
                                                offset : {
                                                    offset : `${-offsetFixed + Number(popover0OriginOffsetX)}px, ${popover0OriginOffsetY}`
                                                }
                                            }
                                        }
                                    });

                                    popover1._tipUpdateOptions({
                                        options : {
                                            modifiers : {
                                                offset : {
                                                    offset : `${offsetFixed + Number(popover1OriginOffsetX)}px, ${popover1OriginOffsetY}`
                                                }
                                            }
                                        }
                                    });

                                }

                            }

                        });

                    });

                }

                if (value && value[0]) {

                    if (this.conf.relative && this._isRelativeDate(value[0])) {

                        this.data.currentDate = +this._getRelativeDate(this._parseRelativeDateToObj(value[0]));

                    } else {

                        this.data.currentDate = +this._dateStringToDate(value[0], this.conf.format);

                    }

                }

                this.$nextTick(() => this._highlightDateFromValue());

            } else {

                let input0 = this.$refs[`ui-datepicker-input-0-${this.uiid}`];
                let timepicker0;

                if (this.$parent &&
                    this.$parent.isUI &&
                    this.$parent.uiname === 'datetimepicker') {

                    timepicker0 = this.$parent.$refs[`ui-datetimepicker-time-${this.$parent.uiid}`];

                    if (timepicker0) {
                        
                        let privateTimepicker;

                        for (let vm of timepicker0.$children) {

                            if (vm.isUI && vm.uiname === 'private-timepicker') {

                                privateTimepicker = vm;

                            }

                        }

                        if (privateTimepicker) {

                            input0.data.blurIgnoreElement3 = privateTimepicker.$refs[`ui-private-timepicker-popover-${privateTimepicker.uiid}`].$el;

                        }

                    }

                }

            }

        },
        _blur : function () {

            if (this.conf.isRange) {

                let input0 = this.$refs[`ui-datepicker-input-0-${this.uiid}`];
                let input1 = this.$refs[`ui-datepicker-input-1-${this.uiid}`];
                let $input1DateSelect = input1.data.$dateWrap.querySelector('.date-select');
                
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

        },
        _emitFocus : function () {

            if (!this.data.lastComponentFocusStatus) {
                
                this.$emit('focus');
                this.data.lastComponentFocusStatus = true;

            }

        },
        _emitBlur : function () {
           
            this.$emit('blur');
            this.data.lastComponentFocusStatus = false;

        },
        _filterDateString : function (value) {

            if (value === undefined) {

                return value;

            }

            if (!this._dateStringIsValid(value, this.conf.format)) {

                value = formatDate(this._dateGetStandardDate(), this.conf.format);

            }

            return value;

        },
        _highlightDateFromValue : function () {

            let value = this.get();
            let start;
            let end;

            if (!value || (value instanceof Array && value.length === 0)) {

                this._highlightDate();

                return;

            }

            if (value[0]) {

                if (this.conf.relative && this._isRelativeDate(value[0])) {

                    start = this._getRelativeDate(this._parseRelativeDateToObj(value[0]));

                } else {

                    start = this._dateStringToDate(value[0], this.conf.format);
                
                }

            }

            if (value[1]) {

                if (this.conf.relative && this._isRelativeDate(value[1])) {

                    end = this._getRelativeDate(this._parseRelativeDateToObj(value[1]));

                } else {

                    end = this._dateStringToDate(value[1], this.conf.format);
                
                }

            }

            if (value[0] && value[1]) {

                this._highlightDate(start, end);
                
            } else if (value[0]) {

                this._highlightDate(start);

            }

        },
        _highlightDate : function (start, end) {

            const dayStep = 26;

            if (!this.conf.isRange) {

                return;

            }

            if (start === undefined && end === undefined) {

                this.data.input0HighlightDays = [];
                this.data.input1HighlightDays = [];

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

            if (this.conf.monthPick) {

                start = startOfMonth(start);
                end = endOfMonth(end);

            }

            let input0 = this.$refs[`ui-datepicker-input-0-${this.uiid}`];
            let input1 = this.$refs[`ui-datepicker-input-1-${this.uiid}`];
            let input0Calendar = input0.$refs[`ui-calendar-${input0.uiid}`];
            let input0CalendarStart = input0Calendar.getTime();
            let input0CalendarEnd = input0Calendar.getTime();
            let input1Calendar = input1.$refs[`ui-calendar-${input1.uiid}`];
            let input1CalendarStart = input1Calendar.getTime();
            let input1CalendarEnd = input1Calendar.getTime();
            let input0HighlightDays;
            let input1HighlightDays;

            if (this.conf.monthPick) {

                input0CalendarStart = startOfYear(input0CalendarStart);
                input0CalendarEnd = endOfYear(input0CalendarEnd);
                input1CalendarStart = startOfYear(input1CalendarStart);
                input1CalendarEnd = endOfYear(input1CalendarEnd);

            } else {

                input0CalendarStart = startOfMonth(input0CalendarStart);
                input0CalendarEnd = endOfMonth(input0CalendarEnd);
                input1CalendarStart = startOfMonth(input1CalendarStart);
                input1CalendarEnd = endOfMonth(input1CalendarEnd);

            }

            // start超过左侧日历/end在左侧日历
            if (start < input0CalendarStart &&
                end >= input0CalendarStart &&
                end <= input0CalendarEnd) {

                start = subDays(+input0CalendarStart, 1);

                if (this.conf.monthPick) {

                    start = startOfMonth(start);

                }

                input0HighlightDays = eachDayOfInterval({
                    start,
                    end
                }, {
                    step : (this.conf.monthPick ? dayStep : 1)
                });
                input1HighlightDays = [];

            }

            // start超过左侧日历/end在右侧日历
            if (start < input0CalendarStart &&
                end >= input1CalendarStart &&
                end <= input1CalendarEnd) {

                let start0 = subDays(+input0CalendarStart, 1);
                let start1 = subDays(+input1CalendarStart, 1);
                let end0 = addDays(+input0CalendarEnd, 1);

                if (this.conf.monthPick) {

                    start0 = startOfMonth(start0);
                    start1 = startOfMonth(start1);
                    end0 = endOfMonth(end0);

                }

                input0HighlightDays = eachDayOfInterval({
                    start : start0,
                    end : end0
                }, {
                    step : (this.conf.monthPick ? dayStep : 1)
                });
                input1HighlightDays = eachDayOfInterval({
                    start : start1,
                    end
                }, {
                    step : (this.conf.monthPick ? dayStep : 1)
                });

            }

            // start在左侧日历/end超过右侧日历
            if (start >= input0CalendarStart &&
                start <= input0CalendarEnd &&
                end > input1CalendarEnd) {

                let end0 = addDays(+input0CalendarEnd, 1);
                let start1 = subDays(+input1CalendarStart, 1);
                let end1 = addDays(+input1CalendarEnd, 1);

                if (this.conf.monthPick) {

                    end0 = endOfMonth(end0);
                    start1 = startOfMonth(start1);
                    end1 = endOfMonth(end1);

                }

                input0HighlightDays = eachDayOfInterval({
                    start,
                    end : end0
                }, {
                    step : (this.conf.monthPick ? dayStep : 1)
                });
                input1HighlightDays = eachDayOfInterval({
                    start : start1,
                    end : end1
                }, {
                    step : (this.conf.monthPick ? dayStep : 1)
                });

            }

            // start在右侧日历/end超过右侧日历
            if (start >= input1CalendarStart &&
                start <= input1CalendarEnd &&
                end > input1CalendarEnd) {

                let end0 = addDays(+input1CalendarEnd, 1);

                if (this.conf.monthPick) {

                    end0 = endOfMonth(end0);

                }

                input0HighlightDays = [];
                input1HighlightDays = eachDayOfInterval({
                    start,
                    end : end0
                }, {
                    step : (this.conf.monthPick ? dayStep : 1)
                });

            }

            // start超过左侧日历/end超过右侧日历
            if (start < input0CalendarStart &&
                end > input1CalendarEnd) {

                let start0 = subDays(+input0CalendarStart, 1);
                let end0 = addDays(+input0CalendarEnd, 1);
                let start1 = subDays(+input1CalendarStart, 1);
                let end1 = addDays(+input1CalendarEnd, 1);

                if (this.conf.monthPick) {

                    start0 = startOfMonth(start0);
                    end0 = endOfMonth(end0);
                    start1 = startOfMonth(start1);
                    end1 = endOfMonth(end1);

                }

                input0HighlightDays = eachDayOfInterval({
                    start : start0,
                    end : end0
                }, {
                    step : (this.conf.monthPick ? dayStep : 1)
                });
                input1HighlightDays = eachDayOfInterval({
                    start : start1,
                    end : end1
                }, {
                    step : (this.conf.monthPick ? dayStep : 1)
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
                }, {
                    step : (this.conf.monthPick ? dayStep : 1)
                });
                input1HighlightDays = [];

            }

            // start在左侧/end在右侧
            if (start <= input0CalendarEnd &&
                start >= input0CalendarStart &&
                end >= input1CalendarStart &&
                end <= input1CalendarEnd) {

                let end0 = addDays(+input0CalendarEnd, 1);
                let start1 = subDays(+input1CalendarStart, 1);

                if (this.conf.monthPick) {

                    end0 = endOfMonth(end0);
                    start1 = startOfMonth(start1);

                }

                input0HighlightDays = eachDayOfInterval({
                    start,
                    end : end0
                }, {
                    step : (this.conf.monthPick ? dayStep : 1)
                });

                input1HighlightDays = eachDayOfInterval({
                    start : start1,
                    end
                }, {
                    step : (this.conf.monthPick ? dayStep : 1)
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
                }, {
                    step : (this.conf.monthPick ? dayStep : 1)
                });

            }

            this.data.input0HighlightDays = input0HighlightDays;
            this.data.input1HighlightDays = input1HighlightDays;

        },
        _syncValueFromInputToRootForClick : function (date) {

            let val = this.getDate() || [];

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

            this.Vue.nextTick(() => {

                this._dateClick();

            });

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

                if (currentVal &&
                    currentVal[0] === input0Val &&
                    currentVal[1] === input1Val) {

                    return;

                }

                if (input0Val !== undefined &&
                    !(this.conf.relative && this._isRelativeDate(input0Val))) {

                    input0Val = this._dateStringToDate(input0Val, this.conf.format);

                }

                if (input1Val !== undefined &&
                    !(this.conf.relative && this._isRelativeDate(input0Val))) {

                    input1Val = this._dateStringToDate(input1Val, this.conf.format);

                }

                if (input0Val === undefined && input1Val === undefined) {

                    val = undefined;

                } else if (input0Val === undefined && input1Val) {

                    if (this.conf.relative && this._isRelativeDate(input1Val)) {

                        val = [input1Val];

                    } else {
                        
                        val = [formatDate(input1Val, this.conf.format)];

                    }

                } else if (input1Val === undefined && input0Val) {

                    if (this.conf.relative && this._isRelativeDate(input0Val)) {

                        val = [input0Val];

                    } else {

                        val = [formatDate(input0Val, this.conf.format)];

                    }

                } else {

                    val = [];

                    if (this.conf.relative && this._isRelativeDate(input0Val)) {

                        val[0] = input0Val;

                    } else {

                        val[0] = formatDate(input0Val, this.conf.format);

                    }

                    if (this.conf.relative && this._isRelativeDate(input1Val)) {

                        val[1] = input1Val;

                    } else {

                        val[1] = formatDate(input1Val, this.conf.format);

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
        _dateClick : function () {

            let input0 = this.$refs[`ui-datepicker-input-0-${this.uiid}`];

            if (this.conf.isRange &&
                this.get().length === 2 &&
                this.conf.doneHidden) {

                input0._blur();

            } else if (!this.conf.isRange && this.conf.doneHidden) {

                input0._blur();

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
        _quickPickDate : function (date) {

            if (!this.conf.isRange) {

                if (this.conf.relative &&
                    typeof date === 'string' &&
                    this._isRelativeDate(date)) {

                    this._set(date);

                    return;

                }

                if (typeof date === 'number') {

                    date = addMilliseconds(new Date(), date * this.conf._quickPickUnit);

                }

                if (date instanceof Date) {

                    if (this.$slots.timepicker &&
                        this.$slots.timepicker[0] &&
                        this.$slots.timepicker[0].children &&
                        this.$slots.timepicker[0].children[0]) {

                        let $timepicker = this.$slots.timepicker[0].children[0].componentInstance;

                        $timepicker._set(formatDate(date, $timepicker.conf.format));

                    }

                    this._set(formatDate(date, this.conf.format));

                }

            } else if (date instanceof Array) {

                let value = [];
                let value1IsRelative = false;
                let value2IsRelative = false;

                if (this.conf.relative &&
                    typeof date[0] === 'string' &&
                    this._isRelativeDate(date[0])) {

                    value[0] = date[0];
                    value1IsRelative = true;

                } else {

                    if (typeof date[0] === 'number') {

                        date[0] = addMilliseconds(new Date(), date[0] * this.conf._quickPickUnit);

                    }

                    if (date[0] instanceof Date) {

                        value[0] = formatDate(date[0], this.conf.format);

                    }

                }

                if (this.conf.relative &&
                    typeof date[1] === 'string' &&
                    this._isRelativeDate(date[1])) {

                    value[1] = date[1];
                    value2IsRelative = true;

                } else {

                    if (typeof date[1] === 'number') {

                        date[1] = addMilliseconds(new Date(), date[1] * this.conf._quickPickUnit);

                    }

                    if (date[1] instanceof Date) {

                        value[1] = formatDate(date[1], this.conf.format);

                    }

                }

                this._set(value);

                if (!value1IsRelative &&
                    this.$slots.timepicker &&
                    this.$slots.timepicker[0] &&
                    this.$slots.timepicker[0].children &&
                    this.$slots.timepicker[0].children[0]) {

                    let $timepicker = this.$slots.timepicker[0].children[0].componentInstance;

                    $timepicker._set(formatDate(date[0], $timepicker.conf.format));

                }

                if (!value2IsRelative &&
                    this.$slots.timepicker2 &&
                    this.$slots.timepicker2[0] &&
                    this.$slots.timepicker2[0].children &&
                    this.$slots.timepicker2[0].children[0]) {

                    let $timepicker = this.$slots.timepicker2[0].children[0].componentInstance;

                    $timepicker._set(formatDate(date[1], $timepicker.conf.format));

                }

            }

            if (this.conf.doneHidden) {

                let input0 = this.$refs[`ui-datepicker-input-0-${this.uiid}`];

                input0._blur();

            }

        },
        _getDate : function (value) {

            let relativeDate;

            if (typeof value === 'string') {

                if (this.conf.relative) {

                    relativeDate = this._parseRelativeDateToObj(value);

                }

                if (this.conf.relative && relativeDate.relative) {

                    return this._getRelativeDate(relativeDate);

                }

                return this._dateStringToDate(value, this.conf.format);

            } else if (value instanceof Array) {

                let result = [];

                if (this.conf.relative) {

                    if (value[1] === undefined) {

                        relativeDate = [this._parseRelativeDateToObj(value[0])];

                    } else {

                        relativeDate = [
                            this._parseRelativeDateToObj(value[0]),
                            this._parseRelativeDateToObj(value[1])
                        ];

                    }

                }

                if (this.conf.relative && relativeDate[0].relative) {

                    result[0] = this._getRelativeDate(relativeDate[0]);

                } else {

                    result[0] = this._dateStringToDate(value[0], this.conf.format);

                }

                if (this.conf.relative && relativeDate[1] && relativeDate[1].relative) {

                    result[1] = this._getRelativeDate(relativeDate[1]);

                } else if (value[1]) {

                    result[1] = this._dateStringToDate(value[1], this.conf.format);

                }

                return result;

            }

            return value;

        },
        getDate : function () {

            return this._getDate(this.get());

        },
        getInputValue : function () {

            let input0 = this.$refs[`ui-datepicker-input-0-${this.uiid}`];
            let input1 = this.$refs[`ui-datepicker-input-1-${this.uiid}`];

            if (!this.conf.isRange) {

                return input0.data.inputValue;

            }

            return [input0.data.inputValue, input1.data.inputValue];

        },
        togglePicker : function (show) {
            
            let input0;
            let input1;
                
            input0 = this.$refs[`ui-datepicker-input-0-${this.uiid}`];
            input1 = this.$refs[`ui-datepicker-input-1-${this.uiid}`];

            if (input0) {
                
                input0._toggleSelector(show);

            }

            if (input1 && !show) {
                
                input1._toggleSelector(show);

            }

            if (show) {
    
                this._focus();

            } else {

                this._blur();

            }

            return this;

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

            if (this.conf.isRange) {

                if (this.data.value !== undefined &&
                    this.data.value.length === 2) {

                    this.$emit('pick-done');

                }

            } else {

                this.$emit('pick-done');

            }
            
        });

        this._syncFromRootToChild();

    }
};
</script>
