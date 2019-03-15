<template>
    <mor-datetimepicker
        :_uiid="uiid"
        :class="[formClass, stateClass]"

        :form-name="formName"
        :form-key="formKey"
        :group="group"
        :hide-name="hideName"
        :clearable="clearable"
        :inside-name="insideName"
        :date="date"
        :format="format"
        :align="align"
        :quick-pick="quickPick"
        :date-selectable-range="dateSelectableRange"
        :time-selectable-range="timeSelectableRange"
        :is-range="isRange"
        :range-input-direction="rangeInputDirection"
        :separator="separator"
        :separator-type="separatorType"
        :start-name="startName"
        :end-name="endName"
        :done-hidden="doneHidden"
        :relative="relative"
    >

    <div class="form-name" v-if="!conf.hideName && !!conf.formName">{{conf.formName}}</div>

    <div class="wrap">
        <morning-datepicker
            :ref="'ui-datetimepicker-date-'+uiid"
            :state="conf.state"
            :inside-name="conf.insideName"
            :date="conf.date"
            :format="conf.format"
            :align="conf.align"
            :quick-pick="conf.quickPick"
            :_quick-pick-unit="1000"
            :selectable-range="conf.dateSelectableRange"
            :is-range="conf.isRange"
            :range-input-direction="conf.rangeInputDirection"
            :separator="conf.separator"
            :separator-type="conf.separatorType"
            :start-name="conf.startName"
            :end-name="conf.endName"
            :show-timepicker-box="true"
            :done-hidden="conf.doneHidden"
            :relative="conf.relative"
            :_relative-time="conf.relative"

            @value-change="_syncFromInputToRoot(0)"
            @input-blur="_inputBlur"
            @input-focus="_inputFocus"
            @blur="_blur"
            @focus="_focus"
            @pick-done="_pickDone"
        >
            <div slot="timepicker">
                <morning-timepicker
                    :ref="'ui-datetimepicker-time-'+uiid"
                    inside-name="时间"
                    align="right"
                    :selectable-range="timeSelectableRangeAll"
                    :relative="conf.relative"
                    :state="isRelativeDatetime1 ? 'readonly' : 'normal'"
    
                    @value-change="_syncFromInputToRoot(1)"
                ></morning-timepicker>
            </div>

            <div v-if="conf.isRange" slot="timepicker2">
                <morning-timepicker
                    :ref="'ui-datetimepicker-time2-'+uiid"
                    inside-name="时间"
                    align="right"
                    :selectable-range="timeSelectableRangeAll"
                    :relative="conf.relative"
                    :state="isRelativeDatetime2 ? 'readonly' : 'normal'"

                    @value-change="_syncFromInputToRoot(1)"
                ></morning-timepicker>
            </div>
        </morning-datepicker>
    </div>

    <morning-link v-if="conf.clearable" color="minor" @emit="_clean" class="cleanbtn">清空</morning-link>

    </mor-datetimepicker>
</template>
 
<script>
import {
    format as formatDate,
    getYear,
    getMonth,
    getDate,
    getHours,
    getMinutes,
    getSeconds,
    getMilliseconds,
    setYear,
    setMonth,
    setDate,
    setHours,
    setMinutes,
    setSeconds,
    setMilliseconds,
    isSameDay,
    closestTo,
    isWithinInterval
}                                   from 'date-fns';
import Dates                        from 'Utils/Dates';
import Time                         from 'Utils/Time';
import DateTime                     from 'Utils/DateTime';

export default {
    origin : 'Form',
    name : 'datetimepicker',
    mixins : [Dates, Time, DateTime],
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
            default : 'yyyy-MM-dd HH:mm:ss'
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
        dateSelectableRange : {
            type : Array,
            default : (() => [])
        },
        timeSelectableRange : {
            type : Array,
            default : (() => [])
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
            default : '开始日期时间'
        },
        endName : {
            type : String,
            default : '结束日期时间'
        },
        doneHidden : {
            type : Boolean,
            default : false
        },
        relative : {
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
                dateSelectableRange : this.dateSelectableRange,
                timeSelectableRange : this.timeSelectableRange,
                isRange : this.isRange,
                rangeInputDirection : this.rangeInputDirection,
                separator : this.separator,
                separatorType : this.separatorType,
                startName : this.startName,
                endName : this.endName,
                doneHidden : this.doneHidden,
                relative : this.relative
            };

        },
        timeSelectableRangeAll : function () {

            let all = [];
            let confRange = this.conf.timeSelectableRange;
            let dateRange = this.data.timeSelectableRange;

            if (confRange[0] > dateRange[0]) {

                all[0] = confRange[0];

            } else {

                all[0] = dateRange[0];

            }

            if (confRange[1] < dateRange[1]) {

                all[1] = confRange[1];

            } else {

                all[1] = dateRange[1];

            }

            return all;

        },
        isRelativeDatetime1 : function () {

            if (this.data.value === undefined ||
                typeof this.data.value === 'string') {

                return this._dtIsRelativeDatetime(this.data.value);

            }

            return this._dtIsRelativeDatetime(this.data.value[0]);

        },
        isRelativeDatetime2 : function () {

            if (this.data.value === undefined ||
                typeof this.data.value === 'string') {

                return false;

            }

            return this._dtIsRelativeDatetime(this.data.value[1]);

        }
    },
    data : function () {

        return {
            data : {
                timeSelectableRange : [],
                selectableDates : []
            }
        };

    },
    methods : {
        _valueFilter : function (value) {

            if (value === undefined) {

                return value;

            }

            if (this.conf.isRange && typeof value === 'string') {

                value = [value];

            } else if (!this.conf.isRange && typeof value === 'object' && value instanceof Array) {

                value = value[0];

            }

            if (typeof value === 'string') {

                if (!this.conf.relative ||
                    (this.conf.relative && !this._dtIsRelativeDatetime(value))) {

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
                            (this.conf.relative && !this._dtIsRelativeDatetime(value[k]))) {

                            value[k] = this._filterDateString(value[k]);

                        }

                    }

                    if (value.length > 1) {

                        let start;
                        let end;

                        if (this.conf.relative && this._dtIsRelativeDatetime(value[0])) {

                            start = this._getDate(value[0]);

                        } else {

                            start = this._dateStringToDate(value[0], this.conf.format);

                        }

                        if (this.conf.relative && this._dtIsRelativeDatetime(value[1])) {

                            start = this._getDate(value[1]);

                        } else {

                            start = this._dateStringToDate(value[1], this.conf.format);

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
        _filterDateString : function (value) {

            if (value === undefined) {

                return value;

            }

            let date = this._dateStringToDate(value, this.conf.format);

            if (!this._dateStringIsValid(value, this.conf.format)) {

                date = this._dateGetStandardDate();

            }

            if (!this._checkSelectable(formatDate(date, this.conf.format))) {
 
                date = this._getClosestDate(date);
 
            }

            return formatDate(date, this.conf.format);

        },
        _syncFromRootToChild : function () {

            let $date = this.$refs[`ui-datetimepicker-date-${this.uiid}`];
            let $time = this.$refs[`ui-datetimepicker-time-${this.uiid}`];
            let $time2 = this.$refs[`ui-datetimepicker-time2-${this.uiid}`];
            let value = this.get();

            this._refreshTimeSelectable();

            this.Vue.nextTick(() => {

                if ($date &&
                    JSON.stringify(value) !== JSON.stringify($date.get())) {

                    $date._set(value, true);

                }

                if ($time && $date) {

                    if (value) {

                        let timeDate;
                        let timeDate2;

                        if (this.conf.isRange) {

                            if (value[0]) {

                                if (this.conf.relative && this._dtIsRelativeDatetime(value[0])) {

                                    $time._set(undefined, true);
                                 
                                } else {

                                    timeDate = this._dateStringToDate(value[0], $date.conf.format);
                                    $time._set(formatDate(timeDate, $time.conf.format), true);

                                }
    
                            }
    
                            if (value[1]) {

                                if (this.conf.relative && this._dtIsRelativeDatetime(value[1])) {

                                    $time2._set(undefined, true);

                                } else {
                                
                                    timeDate2 = this._dateStringToDate(value[1], $date.conf.format);
                                    $time2._set(formatDate(timeDate2, $time2.conf.format), true);

                                }

                            }

                        } else if (this.conf.relative && this._dtIsRelativeDatetime(value)) {

                            $time._set(undefined, true);

                        } else {

                            timeDate = this._dateStringToDate(value, $date.conf.format);
                            $time._set(formatDate(timeDate, $time.conf.format), true);

                        }

                    } else if (this.conf.isRange) {

                        $time._set(value, true);
                        $time2._set(value, true);

                    } else {

                        $time._set(value, true);

                    }

                }

            });

        },
        _syncFromInputToRootIsBlur : function () {

            this.Vue.nextTick(() => this._syncFromInputToRoot(2));

        },
        _getFulldate : function ({
            $date,
            $time,
            date,
            time,
            type
        }) {

            let fulldate = this._dateGetStandardDate();
            let now = new Date();
            let isSet = false;
            let dateObj;
            let timeObj;

            fulldate = setYear(fulldate, getYear(now));
            fulldate = setMonth(fulldate, getMonth(now));
            fulldate = setDate(fulldate, getDate(now));

            if (date) {

                dateObj = this._dateStringToDate(date, this.conf.format);

            }

            if (time) {

                timeObj = this._timeStringToDate(time, $time.conf.format);

            }

            if (dateObj) {

                isSet = true;
                fulldate = setYear(fulldate, getYear(dateObj));
                fulldate = setMonth(fulldate, getMonth(dateObj));
                fulldate = setDate(fulldate, getDate(dateObj));

            }

            if ($date && $time) {

                if ((type === 2 && dateObj) ||
                    (type === 0 && dateObj && !time)) {

                    isSet = true;
                    fulldate = setHours(fulldate, getHours(dateObj));
                    fulldate = setMinutes(fulldate, getMinutes(dateObj));
                    fulldate = setSeconds(fulldate, getSeconds(dateObj));
                    fulldate = setMilliseconds(fulldate, getMilliseconds(dateObj));

                } else if ((type === 1 && timeObj) ||
                           (timeObj && dateObj)) {

                    isSet = true;
                    fulldate = setHours(fulldate, getHours(timeObj));
                    fulldate = setMinutes(fulldate, getMinutes(timeObj));
                    fulldate = setSeconds(fulldate, getSeconds(timeObj));
                    fulldate = setMilliseconds(fulldate, getMilliseconds(timeObj));

                }

            }

            if (!this._checkSelectable(fulldate)) {

                fulldate = this._getClosestDate(fulldate);

            }

            return {
                isSet,
                date : fulldate
            };

        },
        _setValue : function (date, isSet) {

            if (isSet) {

                if (date instanceof Date) {

                    if (this.conf.relative && this._dtIsRelativeDatetime(date)) {
    
                        this._set(date, true);

                    } else {
    
                        this._set(formatDate(date, this.conf.format), true);

                    }

                } else if (date instanceof Array) {

                    if (date.length === 1) {

                        if (this.conf.relative && this._dtIsRelativeDatetime(date[0])) {
        
                            this._set(date[0], true);

                        } else {

                            this._set(
                                [
                                    formatDate(date[0], this.conf.format)
                                ],
                                true
                            );

                        }

                    } else {

                        let value = [];

                        if (this.conf.relative && this._dtIsRelativeDatetime(date[0])) {
        
                            value[0] = date[0];

                        } else {

                            value[0] = formatDate(date[0], this.conf.format);

                        }

                        if (this.conf.relative && this._dtIsRelativeDatetime(date[1])) {
        
                            value[1] = date[1];

                        } else {

                            value[1] = formatDate(date[1], this.conf.format);

                        }

                        this._set(value, true);

                    }

                }

            } else {
                
                this._set(undefined, true);

            }

        },
        _syncFromInputToRoot : function (type = 0) {

            // type 0 is datepicker value-change
            // type 1 is timepicker value-change
            // type 2 is datepicker blur

            let $date = this.$refs[`ui-datetimepicker-date-${this.uiid}`];
            let $time = this.$refs[`ui-datetimepicker-time-${this.uiid}`];
            let $time2 = this.$refs[`ui-datetimepicker-time2-${this.uiid}`];
            let fulldate0 = {};
            let fulldate1 = {};

            this._refreshTimeSelectable();

            this.Vue.nextTick(() => {

                if ($date && $time) {

                    let dateValue = $date.get();
                    let timeValue = $time.get();
                    let timeValue2;

                    if ($time2) {

                        timeValue2 = $time2.get();

                    }

                    if (!this.conf.isRange) {

                        if (this.conf.relative && this._dtIsRelativeDatetime(dateValue)) {

                            this._set(dateValue, true);

                        } else {
                    
                            fulldate0 = this._getFulldate({
                                $date,
                                $time,
                                date : dateValue,
                                time : timeValue,
                                type
                            });

                            this._setValue(fulldate0.date, fulldate0.isSet);

                        }
                    
                    } else if (dateValue && dateValue.length === 1) {

                        if (this.conf.relative && this._dtIsRelativeDatetime(dateValue[0])) {

                            this._set([dateValue[0]], true);

                        } else {

                            fulldate0 = this._getFulldate({
                                $date,
                                $time,
                                date : dateValue[0],
                                time : timeValue,
                                type
                            });

                            this._setValue(
                                [
                                    fulldate0.date
                                ],
                                fulldate0.isSet
                            );

                        }

                    } else if (dateValue && dateValue.length === 2) {

                        if (this.conf.relative && this._dtIsRelativeDatetime(dateValue[0])) {

                            fulldate0 = {
                                date : dateValue[0],
                                isSet : true
                            };

                        } else {

                            fulldate0 = this._getFulldate({
                                $date,
                                $time,
                                date : dateValue[0],
                                time : timeValue,
                                type
                            });

                        }

                        if (this.conf.relative && this._dtIsRelativeDatetime(dateValue[1])) {

                            fulldate1 = {
                                date : dateValue[1],
                                isSet : true
                            };

                        } else {

                            fulldate1 = this._getFulldate({
                                $date,
                                $time : $time2,
                                date : dateValue[1],
                                time : timeValue2,
                                type
                            });

                        }

                        this._setValue(
                            [
                                fulldate0.date,
                                fulldate1.date
                            ],
                            (
                                fulldate0.isSet ||
                                fulldate1.isSet
                            )
                        );

                    }

                }

            });

        },
        _refreshTimeSelectable : function () {

            if (!this.conf.dateSelectableRange) {

                return;

            }

            let dateRanges = this.conf.dateSelectableRange;
            let value = this.get();
            let valueDate = this._dateStringToDate(value, this.conf.format);
            let $time = this.$refs[`ui-datetimepicker-time-${this.uiid}`];
            let selectableDates = [];

            if (!$time) {

                return;

            }

            let limitTimeRange = [
                this._timeStringToDate('00:00:00', $time.conf.format),
                this._timeStringToDate('23:59:59', $time.conf.format)
            ];

            if (dateRanges &&
                dateRanges instanceof Array &&
                dateRanges.length === 2 &&
                typeof dateRanges[0] === 'string' &&
                typeof dateRanges[1] === 'string') {

                let start = this._dateStringToDate(dateRanges[0], this.conf.format);
                let end = this._dateStringToDate(dateRanges[1], this.conf.format);

                if (isSameDay(start, valueDate)) {

                    limitTimeRange[0] = start;

                }

                if (isSameDay(end, valueDate)) {

                    limitTimeRange[1] = end;

                }

                selectableDates = [start, end];

                // this._setTimeSelectableRange(limitTimeRange);

            } else if (dateRanges instanceof Array) {

                for (let range of dateRanges) {

                    if (range instanceof Array &&
                        range.length === 2 &&
                        typeof range[0] === 'string' &&
                        typeof range[1] === 'string') {

                        let start = this._dateStringToDate(range[0], this.conf.format);
                        let end = this._dateStringToDate(range[1], this.conf.format);

                        if (isSameDay(start, valueDate)) {

                            limitTimeRange[0] = start;

                        }

                        if (isSameDay(end, valueDate)) {

                            limitTimeRange[1] = end;

                        }

                        // this._setTimeSelectableRange(limitTimeRange);

                        selectableDates.push(start);
                        selectableDates.push(end);

                    }

                }

            }

            limitTimeRange[0] = formatDate(limitTimeRange[0], $time.conf.format);
            limitTimeRange[1] = formatDate(limitTimeRange[1], $time.conf.format);

            this.data.timeSelectableRange = limitTimeRange;
            this.data.selectableDates = selectableDates;

        },
        _getClosestDate : function (date) {

            date = closestTo(date, this.data.selectableDates) || date;

            return date;

        },
        _checkSelectable : function (date) {

            let ranges = this.conf.dateSelectableRange;

            if (!(ranges instanceof Array) ||
                this.conf.relative ||
                ranges.length === 0) {

                return true;

            }

            let found = false;

            if (ranges instanceof Array &&
                ranges.length === 2 &&
                typeof ranges[0] === 'string' &&
                typeof ranges[1] === 'string') {

                let start = this._dateStringToDate(ranges[0], this.conf.format);
                let end = this._dateStringToDate(ranges[1], this.conf.format);

                if (isWithinInterval(this._dateStringToDate(date), {
                    start,
                    end
                })) {
                
                    found = true;

                }

            } else if (ranges instanceof Array) {

                for (let range of ranges) {

                    if (range instanceof Array &&
                        range.length === 2 &&
                        typeof range[0] === 'string' &&
                        typeof range[1] === 'string') {

                        let start = this._dateStringToDate(range[0], this.conf.format);
                        let end = this._dateStringToDate(range[1], this.conf.format);

                        if (isWithinInterval(this._dateStringToDate(date), {
                            start,
                            end
                        })) {

                            found = true;

                        }

                    }

                }

            }

            return found;

        },
        _getDate : function (value) {

            let relativeDate;

            if (typeof value === 'string') {

                if (this.conf.relative) {

                    relativeDate = this._dtParseRelativeDatetimeToObj(value);

                }

                if (this.conf.relative && relativeDate.relative) {

                    return this._dtGetRelativeDatetime(relativeDate);

                }
                
                return this._dateStringToDate(value, this.conf.format);

            } else if (value instanceof Array) {

                let result = [];

                if (this.conf.relative) {

                    relativeDate = [
                        this._dtParseRelativeDatetimeToObj(value[0]),
                        this._dtParseRelativeDatetimeToObj(value[1])
                    ];

                }

                if (this.conf.relative && relativeDate[0].relative) {

                    result[0] = this._dtGetRelativeDatetime(relativeDate[0]);

                } else {

                    result[0] = this._dateStringToDate(value[0], this.conf.format);

                }

                if (this.conf.relative && relativeDate[1].relative) {

                    result[1] = this._dtGetRelativeDatetime(relativeDate[1]);

                } else {

                    result[1] = this._dateStringToDate(value[1], this.conf.format);

                }

                return result;

            }

            return value;

        },
        _inputFocus : function () {

            this.$emit('input-focus');

        },
        _inputBlur : function (evt) {
            
            this._syncFromInputToRootIsBlur(evt);
            this.$emit('input-blur');

        },
        _focus : function () {

            this.$emit('focus');

        },
        _blur : function () {

            this.$emit('blur');

        },
        _pickDone : function () {

            this.$emit('pick-done');

        },
        getDate : function () {

            return this._getDate(this.get());

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
