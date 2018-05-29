<template>
    <mor-private-datepicker
        :_uiid="uiid"
        :class="[formClass, stateClass]"

        :form-name="formName"
        :form-key="formKey"
        :group="group"
        :default-value="defaultValue"
        :hide-name="hideName"
        :clearable="clearable"
        :date="date"
        :type="type"
        :format="format"
        :align="align"
        :selectable-range="selectableRange"
        :auto-refresh-calendar="autoRefreshCalendar"
        :show-timepicker-box="showTimepickerBox"
        :highlight-days="highlightDays"
        :date-select-add-class="dateSelectAddClass"
        :has-quick-pick="hasQuickPick"
    >

    <morning-textinput
        :ref="'ui-private-datepicker-input-'+uiid"
        :form-name="conf.formName"
        :hide-name="conf.hideName"
        :align="conf.align"
        :state="conf.state"
        prepend="<i class='mo-icon mo-icon-date'></i>"

        @focus="_inputFocus"
        @blur="_inputBlur"

        v-model="data.inputValue"
    ></morning-textinput>

    <div class="mor-date-wrap" :class="[dateSelectClass, conf.dateSelectAddClass]">
        <div class="date-select" :class="conf.dateSelectAddClass">

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

                @date-click="_clickDate"
                @month-change="_refreshSelectable"
                @year-change="_refreshSelectable"
                @date-enter="_dateEnter"
            ></morning-calendar>

        </div>
    </div>

    <morning-link v-if="conf.clearable" color="minor" @emit="_clean" class="cleanbtn">清空</morning-link>

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
import TipManager                   from 'Utils/TipManager';

export default {
    origin : 'Form',
    private : true,
    name : 'private-datepicker',
    mixins : [Dates, TipManager],
    props : {
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
        dateSelectAddClass : {
            type : String,
            default : ''
        },
        hasQuickPick : {
            type : Boolean,
            default : false
        }
    },
    computed : {
        _conf : function () {

            return {
                date : this.date,
                type : this.type,
                format : this.format,
                align : this.align,
                selectableRange : this.selectableRange,
                autoRefreshCalendar : this.autoRefreshCalendar,
                showTimepickerBox : this.showTimepickerBox,
                highlightDays : this.highlightDays,
                dateSelectAddClass : this.dateSelectAddClass,
                hasQuickPick : this.hasQuickPick
            };

        },
        dateSelectClass : function () {

            let classes = {};

            classes.show = (this.data.inputFocus && (this.data.state !== 'disabled'));
            classes[`align-${this.conf.align}`] = true;
            classes['has-quick-pick'] = this.conf.hasQuickPick;

            return classes;

        },
        getHighlightDays : function () {

            let days = Object.assign([], this.conf.highlightDays);

            days.push(this._dateStringToDate(this.get(), this.conf.format));

            return days;

        },
        backgroundMark : function () {

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
                $dateWrap : null
            }
        };

    },
    methods : {
        _valueFilter : function (value) {

            if (value === undefined) {

                return value;

            }

            let date = this._dateStringToDate(value, this.conf.format);

            if (!isValid(date)) {

                date = this._dateGetStandardDate();

            }

            if (!this._checkSelectable(formatDate(date, this.conf.format))) {

                date = this._getClosestDate(date);

            }

            return formatDate(date, this.conf.format);

        },
        _toggleSelector : function () {

            if (this.data.inputFocus && (this.data.state !== 'disabled')) {

                let $input = this.$refs[`ui-private-datepicker-input-${this.uiid}`].$el;

                this.data.$dateWrap.style.width = `${$input.offsetWidth}px`;

                this._tipCreate({
                    placement : 'bottom',
                    element : this.data.$dateWrap,
                    target : $input,
                    offset : '0 0'
                });

            } else {

                setTimeout(() => {

                    this._tipDestroy();

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

            if (this.data.inputValue === undefined ||
                this.data.inputValue === '') {

                this._set(undefined, true);

            } else {

                let date = this._dateStringToDate(this.data.inputValue, this.conf.format);

                if (!isValid(date)) {

                    this._refreshInputValue();

                } else {
                
                    if (!this._checkSelectable(this.data.inputValue)) {

                        date = this._getClosestDate(date);

                    }

                    if (+date === +this._dateStringToDate(this.data.value, this.conf.format)) {

                        this._refreshInputValue();

                    } else {

                        this._set(formatDate(date, this.conf.format), true);

                    }

                }

            }

            this.$emit('input-blur');

        },
        _blur : function (evt) {

            if (evt &&
                evt.path &&
                (
                    evt.path.indexOf(this.$el) !== -1 ||
                    evt.path.indexOf(this.data.$dateWrap) !== -1 ||
                    evt.path.indexOf(this.data.blurIgnoreElement1) !== -1 ||
                    evt.path.indexOf(this.data.blurIgnoreElement2) !== -1
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

            let value = formatDate(date, this.conf.format);
            let selectable = this._checkSelectable(value);

            if (!selectable) {

                return;

            }

            this._set(value);
            this.$emit('date-click', date);

        },
        _refreshInputValue : function () {

            let dateString;

            if (this.data.value !== undefined) {

                dateString = formatDate(this._dateStringToDate(this.data.value, this.conf.format), this.conf.format);

            }

            this.$refs[`ui-private-datepicker-input-${this.uiid}`]._set(dateString, true);

        },
        _checkSelectable : function (value) {

            let ranges = this.conf.selectableRange;

            if (!(ranges instanceof Array) ||
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

                        // set to day start and day end
                        start = startOfDay(start);
                        end = endOfDay(end);

                        if (isValid(start) &&
                            isValid(end) &&
                            isWithinInterval(date, {
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
                
                valueDate = this._dateStringToDate(value, this.conf.format);

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
    created : function () {},
    mounted : function () {

        this.data.$dateWrap = this.$el.querySelector('.mor-date-wrap');
        this.Tip.autoReverse = false;
        this.Tip.autoOffset = true;

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

    },
    beforeDestory : function () {

        document.body.removeEventListener('mouseup', this._blur);

    }
};
</script>

<style lang="less" src="./index.less"></style>
