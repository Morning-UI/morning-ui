<template>
    <mor-datetimepicker
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
        :date-selectable-range="dateSelectableRange"
        :time-selectable-range="timeSelectableRange"
        :is-range="isRange"
        :separator="separator"
        :start-name="startName"
        :end-name="endName"
    >

    <div class="wrap">
        <morning-datepicker
            :ref="'ui-datetimepicker-date-'+uiid"
            :state="conf.state"
            :date="conf.date"
            :format="conf.format"
            :align="conf.align"
            :selectable-range="conf.dateSelectableRange"
            :show-timepicker-box="true"

            @value-change="_syncFromInputToRoot(0)"
            @input-blur="_syncFromInputToRootIsBlur"
        >
            <div slot="timepicker">
                <morning-timepicker
                    :ref="'ui-datetimepicker-time-'+uiid"
                    :align="conf.align"
                    :selectable-range="timeSelectableRangeAll"
    
                    @value-change="_syncFromInputToRoot(1)"
                ></morning-timepicker>
            </div>
        </morning-datepicker>
    </div>

    <morning-link v-if="conf.clearable" color="minor" @emit="_clean" class="cleanbtn">清空</morning-link>

    </mor-datetimepicker>
</template>
 
<script>
// TODO : date-selectable-range配合time-selectable-range使用
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
    isValid,
    isWithinInterval
}                                   from 'date-fns';
import Dates                        from 'Utils/Dates';
import Time                         from 'Utils/Time';

export default {
    origin : 'Form',
    name : 'datetimepicker',
    mixins : [Dates, Time],
    props : {
        date : {
            type : Number,
            default : +new Date()
        },
        format : {
            type : String,
            default : 'YYYY-MM-DD HH:mm:ss'
        },
        align : {
            type : String,
            default : 'left',
            validator : (value => ['left', 'center', 'right'].indexOf(value) !== -1)
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
                dateSelectableRange : this.dateSelectableRange,
                timeSelectableRange : this.timeSelectableRange,
                isRange : this.isRange,
                separator : this.separator,
                startName : this.startName,
                endName : this.endName
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

            return value;

        },
        _syncFromRootToChild : function () {

            let $date = this.$refs[`ui-datetimepicker-date-${this.uiid}`];
            let $time = this.$refs[`ui-datetimepicker-time-${this.uiid}`];
            let value = this.get();

            this._refreshTimeSelectable();

            if ($date) {

                $date._set(value, true);

            }

            if ($time && $date) {

                if (value) {

                    let timeDate = this._dateStringToDate(value, $date.conf.format);

                    $time._set(formatDate(timeDate, $time.conf.format), true);

                } else {

                    $time._set(value, true);

                }

            }

        },
        _syncFromInputToRootIsBlur : function () {

            this.Vue.nextTick(() => this._syncFromInputToRoot(2));

        },
        _syncFromInputToRoot : function (type = 0) {

            // type 0 is datepicker value-change
            // type 1 is timepicker value-change
            // type 2 is datepicker blur

            let $date = this.$refs[`ui-datetimepicker-date-${this.uiid}`];
            let $time = this.$refs[`ui-datetimepicker-time-${this.uiid}`];

            this._refreshTimeSelectable();

            if ($date && $time) {

                let date = $date.getDate();
                let time = $time.getDate();
                let fulldate = this._dateGetStandardDate();
                let now = new Date();
                let isSet = false;

                fulldate = setYear(fulldate, getYear(now));
                fulldate = setMonth(fulldate, getMonth(now));
                fulldate = setDate(fulldate, getDate(now));

                if (date) {

                    isSet = true;
                    fulldate = setYear(fulldate, getYear(date));
                    fulldate = setMonth(fulldate, getMonth(date));
                    fulldate = setDate(fulldate, getDate(date));

                }

                if ((type === 2 && date) ||
                    (type === 0 && date && !time)) {

                    let inputTimeDate = this._dateStringToDate(date, $date.conf.format);

                    isSet = true;

                    if (formatDate(inputTimeDate, $time.conf.format) !== $time.get()) {

                        fulldate = setHours(fulldate, getHours(date));
                        fulldate = setMinutes(fulldate, getMinutes(date));
                        fulldate = setSeconds(fulldate, getSeconds(date));
                        fulldate = setMilliseconds(fulldate, getMilliseconds(date));

                    }

                } else if ((type === 1 && time) ||
                           (time && date)) {

                    isSet = true;
                    fulldate = setHours(fulldate, getHours(time));
                    fulldate = setMinutes(fulldate, getMinutes(time));
                    fulldate = setSeconds(fulldate, getSeconds(time));
                    fulldate = setMilliseconds(fulldate, getMilliseconds(time));

                }

                if (isSet) {

                    if (!this._checkSelectable(fulldate)) {

                        fulldate = this._getClosestDate(fulldate);

                    }
                    
                    this._set(formatDate(fulldate, this.conf.format), true);

                } else {
                    
                    this._set(undefined, true);

                }

            }

        },
        // _setTimeSelectableRange : function (limitTimeRange) {

        //     let timeRanges = this.conf.timeSelectableRange;
        //     let $time = this.$refs[`ui-datetimepicker-time-${this.uiid}`];

        //     if ($time) {

        //         return;

        //     }

        //     if (timeRanges &&
        //         timeRanges instanceof Array &&
        //         timeRanges.length === 2 &&
        //         typeof timeRanges[0] === 'string' &&
        //         typeof timeRanges[1] === 'string') {

        //         let timeRangeStart = this._timeStringToDate(timeRanges[0], $time.conf.format);
        //         let timeRangeEnd = this._timeStringToDate(timeRanges[1], $time.conf.format);
        //         let currentStart = limitTimeRange[0];
        //         let currentEnd = limitTimeRange[1];

        //         if (isValid(timeRangeStart) &&
        //             +currentStart < +timeRangeStart) {

        //             limitTimeRange[0] = timeRangeStart;

        //         }

        //         if (isValid(timeRangeEnd) &&
        //             +currentEnd > +timeRangeEnd) {

        //             limitTimeRange[1] = timeRangeEnd;

        //         }

        //     } else if (timeRanges instanceof Array) {

        //         for (let range of timeRanges) {

        //             if (range instanceof Array &&
        //                 range.length === 2 &&
        //                 typeof range[0] === 'string' &&
        //                 typeof range[1] === 'string') {

        //                 let timeRangeStart = this._timeStringToDate(range[0], $time.conf.format);
        //                 let timeRangeEnd = this._timeStringToDate(range[1], $time.conf.format);
        //                 let currentStart = limitTimeRange[0];
        //                 let currentEnd = limitTimeRange[1];

        //                 if (isValid(timeRangeStart) &&
        //                     +currentStart < +timeRangeStart) {

        //                     limitTimeRange[0] = timeRangeStart;

        //                 }

        //                 if (isValid(timeRangeEnd) &&
        //                     +currentEnd > +timeRangeEnd) {

        //                     limitTimeRange[1] = timeRangeEnd;

        //                 }

        //             }

        //         }

        //     }

        //     return limitTimeRange;

        // },
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

                    limitTimeRange[0] = start

                }

                if (isSameDay(end, valueDate)) {

                    limitTimeRange[1] = end

                }

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

                        selectableDates.push(limitTimeRange[0]);
                        selectableDates.push(limitTimeRange[1]);

                    }

                }

            }

            limitTimeRange[0] = formatDate(limitTimeRange[0], $time.conf.format);
            limitTimeRange[1] = formatDate(limitTimeRange[1], $time.conf.format);

            this.data.timeSelectableRange = limitTimeRange;
            this.data.selectableDates = selectableDates;

        },
        _getClosestDate : function (date) {

            date = closestTo(date, this.data.selectableDates);

            return date;

        },
        _checkSelectable : function (date) {

            let ranges = this.conf.dateSelectableRange;

            if (!(ranges instanceof Array) ||
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

                if (isValid(start) &&
                    isValid(end) &&
                    isWithinInterval(date, {
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

                        if (isValid(start) &&
                            isValid(end) &&
                            isWithinInterval(date, {
                                start,
                                end
                            })) {

                            found = true;

                        }

                    }

                }

            }

            return found;

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
