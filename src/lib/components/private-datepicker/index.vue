<template>
    <mor-private-datepicker
        :_uiid="uiid"
        :class="[formClass, sizeClass, stateClass]"

        :form-name="formName"
        :form-key="formKey"
        :group="group"
        :hide-name="hideName"
        :clearable="clearable"
        :init-value="initValue"
        :inside-name="insideName"
        :date="date"
        :type="type"
        :format="format"
        :align="align"
        :selectable-range="selectableRange"
        :auto-refresh-calendar="autoRefreshCalendar"
        :show-timepicker-box="showTimepickerBox"
        :highlight-days="highlightDays"
        :has-quick-pick="hasQuickPick"
        :relative="relative"
        :month-pick="monthPick"
        :hiddenIcon="hiddenIcon"
        :_date-popover-add-class="_datePopoverAddClass"
        :_relative-time="_relativeTime"
        :_range-input-direction="_rangeInputDirection"
    >

    <morning-textinput
        :ref="'ui-private-datepicker-input-'+uiid"
        :id="'mor-private-datepicker-input-'+uiid"
        :inside-name="conf.insideName"
        :align="conf.align"
        :state="conf.state"
        :size="conf.size"
        :prepend="conf.hiddenIcon ? undefined : '<i class=\'mo-icon mo-icon-date\'></i>'"

        @focus="_inputFocus"
        @blur="_inputBlur"

        v-model="data.inputValue"
    ></morning-textinput>

    <morning-popover
        :ref="'ui-private-datepicker-popover-'+uiid"
        :class="[
            'mor-private-datepicker-popover',
            dateSelectClass,
            conf._datePopoverAddClass,
            sizeClass
        ]"

        :target="'#mor-private-datepicker-input-'+uiid"
        placement="bottom"
        trigger="method"
        :auto-reverse="!conf._rangeInputDirection"
        :offset="(conf._rangeInputDirection && conf._datePopoverAddClass === 'date-select-0') ? '0, 41px' : '0, 0'"
    >

        <div class="date-select">

            <div class="timepicker" v-if="conf.showTimepickerBox">
                <slot name="timepicker"></slot>
            </div>

            <slot name="quickpick"></slot>

            <morning-calendar
                :ref="'ui-calendar-'+uiid"
                :date="data.currentDate || conf.date"
                :highlight-day="getHighlightDays"
                :highlight-now="true"
                :highlight-hover="true"
                :background-mark="backgroundMark"
                :mode="conf.monthPick ? 'month' : 'day'"

                @date-click="_clickDate"
                @month-change="_refreshSelectable"
                @year-change="_refreshSelectable"
                @date-enter="_dateEnter"
            ></morning-calendar>

        </div>

        <div class="date-select-footer">
            <slot name="footer"></slot>
        </div>

    </morning-popover>

    <morning-link v-if="conf.clearable" color="minor" @emit="_cleanDatepicker" class="cleanbtn">清空</morning-link>

    </mor-private-datepicker>
</template>
 
<script>
import {
    format as formatDate,
    closestTo,
    isValid,
    isWithinInterval,
    areIntervalsOverlapping,
    startOfMonth,
    endOfMonth,
    startOfDay,
    endOfDay,
    subDays,
    addDays
}                                   from 'date-fns';
import without                      from 'lodash.without';
import Dates                        from 'Utils/Dates';
import DateTime                     from 'Utils/DateTime';
import {formatOptions}              from 'Utils/DateFnsOptions';

export default {
    origin : 'Form',
    private : true,
    name : 'private-datepicker',
    mixins : [Dates, DateTime],
    props : {
        initValue : {
            type : String,
            default : undefined
        },
        insideName : {
            type : String,
            default : ''
        },
        date : {
            type : Number,
            default : +new Date()
        },
        type : {
            type : String,
            default : 'day',
            validator : (value => ['day'].indexOf(value) !== -1)
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
        selectableRange : {
            type : Array,
            default : (() => [])
        },
        autoRefreshCalendar : {
            type : Boolean,
            default : true
        },
        showTimepickerBox : {
            type : Boolean,
            default : false
        },
        highlightDays : {
            type : Array,
            default : (() => [])
        },
        hasQuickPick : {
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
        hiddenIcon : {
            type : Boolean,
            default : false
        },
        _datePopoverAddClass : {
            type : String,
            default : ''
        },
        _relativeTime : {
            type : Boolean,
            default : false
        },
        _rangeInputDirection : {
            type : Boolean,
            default : false
        }
    },
    computed : {
        _conf : function () {

            return {
                initValue : this.initValue,
                insideName : this.insideName,
                date : this.date,
                type : this.type,
                format : this.format,
                align : this.align,
                selectableRange : this.selectableRange,
                autoRefreshCalendar : this.autoRefreshCalendar,
                showTimepickerBox : this.showTimepickerBox,
                highlightDays : this.highlightDays,
                hasQuickPick : this.hasQuickPick,
                relative : this.relative,
                monthPick : this.monthPick,
                hiddenIcon : this.hiddenIcon,
                _datePopoverAddClass : this._datePopoverAddClass,
                _relativeTime : this._relativeTime,
                _rangeInputDirection : this._rangeInputDirection
            };

        },
        dateSelectClass : function () {

            let classes = {};

            classes[`align-${this.conf.align}`] = true;
            classes['has-quick-pick'] = this.conf.hasQuickPick;

            return classes;

        },
        getHighlightDays : function () {

            let days = Object.assign([], this.conf.highlightDays);
            let val = this.get();

            if (!(val === undefined ||
                (val instanceof Array && val.length === 0))) {

                days.push(this._dateStringToDate(this.get(), this.conf.format));

            }

            return days;

        },
        backgroundMark : function () {

            if (this.conf.relative) {

                return;

            }

            let marks = [];

            for (let range of this.data.disabledRange) {

                if (range !== null) {

                    marks.push({
                        start : range.start,
                        end : range.end,
                        disabled : true
                    });

                }

            }

            return marks;

        }
    },
    data : function () {

        return {
            data : {
                inputFocus : false,
                inputValue : '',
                disabledRange : [],
                selectableDates : [],
                currentDate : undefined,
                keepInputFocus : false,
                blurIgnoreElement1 : undefined,
                blurIgnoreElement2 : undefined,
                blurIgnoreElement3 : undefined,
                blurIgnoreElement4 : undefined,
                $dateWrap : null
            }
        };

    },
    methods : {
        _valueFilter : function (value) {

            if (value === undefined) {

                return value;

            }

            if (this.conf.relative && this._isRelativeDate(value)) {

                return value;

            }

            let date = this._dateStringToDate(value, this.conf.format);

            if (!this._checkSelectable(formatDate(date, this.conf.format, formatOptions))) {

                date = this._getClosestDate(date);

            }

            return formatDate(date, this.conf.format, formatOptions);

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
        _toggleSelector : function (show) {

            if (this.$refs[`ui-private-datepicker-popover-${this.uiid}`] === undefined) {

                return;

            }

            if (show === true && (this.data.state !== 'disabled')) {

                this.$refs[`ui-private-datepicker-popover-${this.uiid}`].show();

            } else if (show === false && (this.data.state !== 'disabled')) {

                this._blur();
                this.$refs[`ui-private-datepicker-popover-${this.uiid}`].hide();

            } else if (this.data.inputFocus && (this.data.state !== 'disabled')) {

                let $input = this.$refs[`ui-private-datepicker-input-${this.uiid}`].$el;

                this.data.$dateWrap.style.width = `${$input.offsetWidth}px`;
                this.$refs[`ui-private-datepicker-popover-${this.uiid}`].show();

            } else {

                setTimeout(() => {

                    this._blur();
                    this.$refs[`ui-private-datepicker-popover-${this.uiid}`].hide();

                });

            }

        },
        _dateEnter : function (date) {

            this.$emit('date-enter', date);

        },
        _inputFocus : function () {

            this.$emit('input-focus');
            this._focus();

        },
        _inputBlur : function () {

            this._syncInputValue();
            this.$emit('input-blur');

        },
        _cleanDatepicker : function () {

            this._clean();
            this._syncInputValue();

        },
        _syncInputValue : function () {

            if (this.data.inputValue === undefined ||
                this.data.inputValue === '') {

                this._set(undefined, true);

            } else if (this.conf.relative && this._isRelativeDate(this.data.inputValue)) {

                this._set(this.data.inputValue, true);

            } else {

                let date = this._dateStringToDate(this.data.inputValue, this.conf.format);

                if (!this._dateStringIsValid(this.data.inputValue, this.conf.format)) {

                    this._refreshInputValue();

                } else {
                
                    if (!this._checkSelectable(this.data.inputValue)) {

                        date = this._getClosestDate(date);

                    }

                    if (+date === +this._dateStringToDate(this.data.value, this.conf.format)) {

                        this._refreshInputValue();

                    } else {

                        this._set(formatDate(date, this.conf.format, formatOptions), true);

                    }

                }

            }

        },
        _blur : function (evt) {

            // let $timepickerPopover = [];
            // let popoverChildren = this.$refs[`ui-private-datepicker-popover-${this.uiid}`].$children;

            // for (let vm of popoverChildren) {

            //     if (vm.isUI && vm.uiname === 'timepicker') {

            //         for (let svm of vm.$children) {

            //             if (svm.isUI && svm.uiname === 'private-timepicker') {

            //                 for (let tvm of svm.$children) {

            //                     if (tvm.isUI && tvm.uiname === 'popover') {

            //                         $timepickerPopover.push(tvm.$el);

            //                     }

            //                 }

            //             }

            //         }

            //     }

            // }

            // console.log($timepickerPopover, evt.path);

            if (evt &&
                evt.path &&
                (
                    evt.path.indexOf(this.$el) !== -1 ||
                    evt.path.indexOf(this.data.$dateWrap) !== -1 ||
                    evt.path.indexOf(this.data.blurIgnoreElement1) !== -1 ||
                    evt.path.indexOf(this.data.blurIgnoreElement2) !== -1 ||
                    evt.path.indexOf(this.data.blurIgnoreElement3) !== -1 ||
                    evt.path.indexOf(this.data.blurIgnoreElement4) !== -1
                    // ($timepickerPopover && evt.path.indexOf($timepickerPopover[0])) !== -1 ||
                    // ($timepickerPopover && evt.path.indexOf($timepickerPopover[1])) !== -1
                )) {

                return;

            }
                
            this.data.inputFocus = false;
            document.body.removeEventListener('mouseup', this._blur);

            this.$emit('blur');

        },
        _focus : function () {

            this.data.inputFocus = true;
            document.body.addEventListener('mouseup', this._blur);
            this.$emit('focus');

        },
        _clickDate : function (date) {

            let value = formatDate(date, this.conf.format, formatOptions);
            let selectable = this._checkSelectable(value);

            if (!selectable) {

                return;

            }

            this._set(value);
            this.$emit('date-click', date);

        },
        _refreshInputValue : function () {

            if (this.$refs[`ui-private-datepicker-input-${this.uiid}`] === undefined) {

                return;

            }

            let dateString;

            if (this.data.value !== undefined) {

                if (this.conf.relative && this._isRelativeDate(this.data.value)) {

                    dateString = this.data.value;

                } else {

                    dateString = formatDate(this._dateStringToDate(this.data.value, this.conf.format), this.conf.format, formatOptions);

                }

            }

            this.$refs[`ui-private-datepicker-input-${this.uiid}`]._set(dateString, true);

        },
        _checkSelectable : function (value) {

            let ranges = this.conf.selectableRange;

            if (!(ranges instanceof Array) ||
                this.conf.relative ||
                ranges.length === 0) {

                return true;

            }

            let date = this._dateStringToDate(value, this.conf.format);
            let found = false;

            if (ranges instanceof Array &&
                ranges.length === 2 &&
                typeof ranges[0] === 'string' &&
                typeof ranges[1] === 'string') {

                let start = this._dateStringToDate(ranges[0], this.conf.format);
                let end = this._dateStringToDate(ranges[1], this.conf.format);

                // set to day start and day end
                start = startOfDay(start);
                end = endOfDay(end);

                if (isWithinInterval(date, {
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

                        // set to day start and day end
                        start = startOfDay(start);
                        end = endOfDay(end);

                        if (isWithinInterval(date, {
                            start,
                            end
                        })) {
                            
                            found = true;

                            break;

                        }

                    }

                }

            }

            return found;

        },
        _refreshSelectable : function () {
            
            if (!this.conf.selectableRange) {

                this.data.disabledRange = [];

                return;

            }

            let ranges = this.conf.selectableRange;
            let disabledRange = [];
            let calendarVm = this.$refs[`ui-calendar-${this.uiid}`];
            let monthStart = startOfMonth(calendarVm.getTime());
            let monthEnd = endOfMonth(calendarVm.getTime());
            let calendarStart = subDays(monthStart, calendarVm.prependDay.length);
            let calendarEnd = addDays(monthEnd, calendarVm.appendDay.length);
            let selectableDates = [];

            if (ranges instanceof Array &&
                ranges.length === 2 &&
                typeof ranges[0] === 'string' &&
                typeof ranges[1] === 'string') {

                let start = subDays(startOfDay(this._dateStringToDate(ranges[0], this.conf.format)), 1);
                let end = addDays(startOfDay(this._dateStringToDate(ranges[1], this.conf.format)), 1);

                if (isValid(start) && start >= calendarStart) {

                    disabledRange.push({
                        start : calendarStart,
                        end : start
                    });

                }

                if (isValid(end) && end <= calendarEnd) {

                    disabledRange.push({
                        start : end,
                        end : calendarEnd
                    });

                }

                selectableDates = [addDays(start, 1), subDays(end, 1)];

            } else if (ranges instanceof Array) {

                for (let range of ranges) {

                    if (range instanceof Array &&
                        range.length === 2 &&
                        typeof range[0] === 'string' &&
                        typeof range[1] === 'string') {

                        let start = subDays(startOfDay(this._dateStringToDate(range[0], this.conf.format)), 1);
                        let end = addDays(startOfDay(this._dateStringToDate(range[1], this.conf.format)), 1);

                        if (disabledRange.length === 0) {

                            if (isValid(start) && start >= calendarStart) {

                                disabledRange.push({
                                    start : calendarStart,
                                    end : start
                                });

                            }

                            if (isValid(end) && end <= calendarEnd) {

                                disabledRange.push({
                                    start : end,
                                    end : calendarEnd
                                });

                            }

                        } else {

                            for (let di in disabledRange) {

                                let drange = disabledRange[di];

                                if (drange && areIntervalsOverlapping(drange, {
                                    start,
                                    end
                                })) {

                                    if (+drange.start >= +start &&
                                        +drange.end > +end) {

                                        drange.start = end;

                                    }

                                    if (+drange.start < +start &&
                                        +drange.end > +end) {

                                        disabledRange.push({
                                            start : end,
                                            end : drange.end
                                        });
                                        drange.end = start;

                                    }

                                    if (+drange.start < +start &&
                                        +drange.end <= +end) {

                                        drange.end = start;

                                    }

                                    if (+drange.start >= +start &&
                                        +drange.end <= +end) {

                                        disabledRange[di] = null;

                                    }

                                }

                            }

                        }

                        selectableDates.push(addDays(start, 1));
                        selectableDates.push(subDays(end, 1));

                    }

                }

            }

            this.data.selectableDates = selectableDates;
            this.data.disabledRange = without(disabledRange, null);
            this.data.currentDate = calendarVm.getTime();

        },
        _refreshCurrentDate : function () {

            let value = this.get();
            let valueDate = this.conf.date;

            if (value !== undefined) {

                if (this.conf.relative && this._isRelativeDate(value)) {

                    valueDate = this._getRelativeDate(this._dateParseRelativeDateToObj(value));

                } else {

                    valueDate = this._dateStringToDate(value, this.conf.format);
                
                }

            }

            this.data.currentDate = +valueDate;

        },
        _getClosestDate : function (date) {

            date = closestTo(date, this.data.selectableDates) || date;

            return date;

        },
        _updateDate : function () {

            this._refreshInputValue();

            if (this.conf.autoRefreshCalendar) {
    
                this._refreshCurrentDate();

            }

        }
    },
    created : function () {

        this._set(this.conf.initValue, true);

    },
    mounted : function () {

        this.data.$dateWrap = this.$el.querySelector('.mor-private-datepicker-popover');

        this.$nextTick(() => {

            this._updateDate();

        });

        this.$on('value-change', () => {

            this._updateDate();

        });

        this.$watch('conf.date', () => {

            this.data.currentDate = +this.conf.date;

        }, {
            immediate : true
        });
        this.$watch('conf.format', this._refreshInputValue);
        this.$watch('conf.selectableRange', this._refreshSelectable, {
            deep : true,
            immediate : true
        });
        this.$watch('data.currentDate', () => {

            this.$emit('date-change', this.data.currentDate);

        });
        this.$watch('data.state', this._toggleSelector, {
            immediate : true
        });
        this.$watch('data.inputFocus', this._toggleSelector, {
            immediate : true
        });
        this.$watch('data.inputValue', value => {

            // 不需要实时同步输入内容，仅在失焦或数值为空时同步
            if (value === undefined || value === '') {
            
                this._syncInputValue();

            }

        });

    },
    beforeDestory : function () {

        document.body.removeEventListener('mouseup', this._blur);

    }
};
</script>
