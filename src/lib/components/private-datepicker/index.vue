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
    >

    <morning-textinput
        :ref="'ui-private-datepicker-input-'+uiid"
        :form-name="conf.formName"
        :hide-name="conf.hideName"
        :align="conf.align"
        :state="conf.state"
        prepend="<i class='morningicon'>&#xe602;</i>"

        @blur="_inputBlur"
        @focus="_inputFocus"

        v-model="data.inputValue"
    ></morning-textinput>

    <div class="date-select" :class="dateSelectClass" @mousedown.stop.prevent="_noop">

        <morning-calendar
            :ref="'ui-calendar-'+uiid"
            :date="data.currentDate"
            :highlight-day="highlightDays"
            :highlight-now="false"
            :highlight-hover="true"
            :background-mark="backgroundMark"

            @date-click="_clickDate"
            @month-change="_refreshSelectable"
            @year-change="_refreshSelectable"
        ></morning-calendar>

    </div>

    <morning-link v-if="conf.clearable" color="minor" @emit="_clean" class="cleanbtn">清空</morning-link>

    </mor-private-datepicker>
</template>
 
<script>
import {
    format as formatDate,
    isValid,
    isWithinInterval,
    areIntervalsOverlapping,
    startOfMonth,
    endOfMonth,
    subDays,
    addDays
}                                   from 'date-fns';
import Dates                        from 'Utils/Dates';

export default {
    origin : 'Form',
    private : true,
    name : 'private-datepicker',
    mixins : [Dates],
    props : {
        date : {
            type : Number,
            default : +new Date()
        },
        type : {
            type : String,
            default : 'day',
            validator : (value => ['day'].indexOf(value) !== -1)
        }
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
        }
    },
    computed : {
        _conf : function () {

            return {
                date : this.date,
                type : this.type,
                format : this.format,
                align : this.align,
                selectableRange : this.selectableRange
            };

        },
        dateSelectClass : function () {

            let classes = {};

            classes.show = (this.data.inputFocus && (this.data.state !== 'disabled'));
            classes[`align-${this.conf.align}`] = true;

            return classes;

        },
        highlightDays : function () {

            let days = [];

            days.push(this._dateStringToDate(this.get(), this.conf.format));

            return days;

        },
        backgroundMark : function () {

            let marks = [];

            for (let range of this.data.disabledRange) {

                marks.push({
                    start : range.start,
                    end : range.end,
                    disabled : true
                });

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
                currentDate : undefined
            }
        };

    },
    methods : {
        _valueFilter : function (value) {

            return value;

        },
        _noop : function () {},
        _inputBlur : function () {

            this.data.inputFocus = false;

        },
        _inputFocus : function () {

            this.data.inputFocus = true;

        },
        _clickDate : function (date) {

            let value = formatDate(date, this.conf.format);
            let selectable = this._checkSelectable(value);

            if (!selectable) {

                return;

            }

            this._set(value);

        },
        _refreshInputValue : function () {

            let dateString;

            if (this.data.value !== undefined) {

                dateString = formatDate(this._dateStringToDate(this.data.value, this.conf.format), this.conf.format);

            }

            this.$refs[`ui-private-datepicker-input-${this.uiid}`]._set(dateString, true);

        },
        _checkSelectable : function (value) {

            if (!this.conf.selectableRange) {

                return true;

            }

            let date = this._dateStringToDate(value, this.conf.format);
            let ranges = this.conf.selectableRange;
            let found = false;

            if (ranges instanceof Array &&
                ranges.length === 2 &&
                typeof ranges[0] === 'string' &&
                typeof ranges[1] === 'string') {

                let start = this._dateStringToDate(ranges[0], this.conf.format);
                let end = this._dateStringToDate(ranges[1], this.conf.format);

                if (isValid(start) &&
                    isValid(end) &&
                    !isWithinInterval(date, {
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

            if (ranges instanceof Array &&
                ranges.length === 2 &&
                typeof ranges[0] === 'string' &&
                typeof ranges[1] === 'string') {

                let start = subDays(this._dateStringToDate(ranges[0], this.conf.format), 1);
                let end = addDays(this._dateStringToDate(ranges[1], this.conf.format), 1);

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

            } else if (ranges instanceof Array) {

                for (let range of ranges) {

                    if (range instanceof Array &&
                        range.length === 2 &&
                        typeof range[0] === 'string' &&
                        typeof range[1] === 'string') {

                        let start = subDays(this._dateStringToDate(range[0], this.conf.format), 1);
                        let end = addDays(this._dateStringToDate(range[1], this.conf.format), 1);

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
                                        +drange.end < +end) {

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

                                    if (+drange.start === +start &&
                                        +drange.end === +end) {

                                        disabledRange[di] = null;

                                    }

                                    if (+drange.start < +start &&
                                        +drange.end <= +end) {

                                        drange.end = start;

                                    }

                                }

                            }

                        }

                    }

                }

            }

            this.data.disabledRange = disabledRange;

        },
        _refreshCurrentDate : function () {

            let value = this.get();
            let valueDate = this.conf.date;

            if (value !== undefined) {
                
                valueDate = this._dateStringToDate(value, this.conf.format);

            }

            this.data.currentDate = +valueDate;

        }
    },
    created : function () {},
    mounted : function () {

        this._refreshCurrentDate();

        this.$on('value-change', () => {

            this._refreshInputValue();
            this._refreshCurrentDate();

        });

        this.$watch('conf.selectableRange', this._refreshSelectable, {
            deep : true,
            immediate : true
        });

    }
};
</script>

<style lang="less" src="./index.less"></style>
