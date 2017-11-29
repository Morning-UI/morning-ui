<template>
    <mor-calendar
        :_uiid="uiid"
        :class="[]"

        :date="date"
        :highlight-now="highlightNow"
        :highlight-day="highlightDay"
        :pick-year-month="pickYearMonth"
    >

    <header>
        <div class="topbar">
            <i class="morningicon prev" v-show="!data.monthPick" @click="_prev()">&#xe696;</i>
            <div class="yearmonth">
                <span class="year" @click="toggleYearPick()">{{current.year}}年</span>
                <span class="month" @click="toggleMonthPick()">{{current.month + 1}}月</span>
            </div>
            <i class="morningicon next" v-show="!data.monthPick" @click="_next()">&#xe695;</i>
        </div>
        <div class="titlebar">
            <ul class="weekday" v-show="!data.monthPick && !data.yearPick">
                <li>日</li>
                <li>一</li>
                <li>二</li>
                <li>三</li>
                <li>四</li>
                <li>五</li>
                <li>六</li>
            </ul>
            <div class="title" v-show="data.monthPick">
                选择月份
            </div>
            <div class="title" v-show="data.yearPick">
                选择年份 <morning-small>({{pickyears.start}} - {{pickyears.end}})</morning-small>
            </div>
        </div>
    </header>

    <div class="calendar">
        
        <div class="pick-year" v-show="data.yearPick">
            <template v-for="i in pickyears.years">
                <div class="year" @click="set(i, 'year');toggleYearPick(false);">
                    {{i}}
                </div>
            </template>
        </div>
        <div class="pick-month" v-show="data.monthPick">
            <template v-for="i in 12">
                <div class="month" @click="set(i - 1, 'month');toggleMonthPick(false);">
                    {{i}}月
                </div>
            </template>
        </div>
        <div class="pick-day" v-show="!data.monthPick && !data.yearPick">
            <template v-for="item in calendarDay">
                <div
                    class="day"
                    :class="[
                        {
                            'not-current-month' : item.notCurrentMonth
                        },
                        _highlightClass(item)
                    ]"
                >
                    <div class="select-layer">
                        <div class="inner-layer">
                            {{item.date | getDate}}
                        </div>
                    </div>
                </div>
            </template>
        </div>

    </div>

    </mor-calendar>
</template>
 
<script>
import extend                       from 'extend';
import getYear                      from 'date-fns/get_year';
import getMonth                     from 'date-fns/get_month';
import getDate                      from 'date-fns/get_date';
import getDay                       from 'date-fns/get_day';
import startOfMonth                 from 'date-fns/start_of_month';
import lastDayOfMonth               from 'date-fns/last_day_of_month';
import eachDay                      from 'date-fns/each_day';
import isSameDay                    from 'date-fns/is_same_day';
import isWithinRange                from 'date-fns/is_within_range';
import addDays                      from 'date-fns/add_days';
import addMonths                    from 'date-fns/add_months';
import addYears                     from 'date-fns/add_years';
import setMonth                     from 'date-fns/set_month';
import setYear                      from 'date-fns/set_year';

const yearRange = 12;

export default {
    origin : 'UI',
    name : 'calendar',
    props : {
        date : {
            type : Number,
            default : +new Date()
        },
        highlightNow : {
            type : Boolean,
            default : true
        },
        highlightDay : {
            type : Array,
            default : (() => [])
        },
        pickYearMonth : {
            type : Boolean,
            default : false
        }
    },
    computed : {
        _conf : function () {

            return {
                date : this.date,
                highlightNow : this.highlightNow,
                highlightDay : this.highlightDay,
                pickYearMonth : this.pickYearMonth
            };

        },
        current : function () {

            return {
                time : +this.data.current,
                year : getYear(this.data.current),
                month : getMonth(this.data.current),
                date : getDate(this.data.current)
            };

        },
        prependDay : function () {

            let monthStart = startOfMonth(this.data.current);
            let weekday = getDay(monthStart);
            let prependDay = weekday;
            let prepend = [];

            while (prependDay--) {
    
                prepend.push({
                    notCurrentMonth : true,
                    date : addDays(monthStart, -(prependDay + 1))
                });

            }

            return prepend;

        },
        monthDay : function () {

            let monthStart = startOfMonth(this.data.current);
            let monthEnd = lastDayOfMonth(this.data.current);
            let month = [];

            for (let date of eachDay(monthStart, monthEnd)) {

                month.push({
                    notCurrentMonth : false,
                    date : date
                });

            }

            return month;

        },
        appendDay : function () {

            let monthEnd = lastDayOfMonth(this.data.current);
            let weekday = getDay(monthEnd);
            let appendDay = 6 - weekday;
            let append = [];

            const totalDay = 42;

            if ((this.monthDay.length + this.prependDay.length) <= (totalDay - 7)) {

                appendDay += 7;

            }

            while (appendDay--) {

                append.unshift({
                    notCurrentMonth : true,
                    date : addDays(monthEnd, appendDay + 1)
                });

            }

            return append;

        },
        calendarDay : function () {

            let days = [].concat(this.prependDay, this.monthDay, this.appendDay);

            for (let index in days) {

                if (index > 0) {

                    days[index].prev = days[index - 1];

                }

                if (index < days.length - 1) {

                    days[index].next = days[(+index) + 1];

                }

            }

            return days;

        },
        pickyears : function () {

            let year = getYear(this.data.current) + this.data.yearPickOffset;
            let start = year - yearRange;
            let end = year + yearRange;
            let years = [];
            let i = start;

            while (i++ <= end) {

                years.push(i - 1);

            }

            return {
                years,
                start,
                end
            };

        }
    },
    data : function () {

        return {
            data : {
                current : new Date(),
                monthPick : false,
                yearPick : false,
                yearPickOffset : 0,
                highlightDay : []
            }
        };

    },
    methods : {
        _isHighlight : function (date) {
            
            let result = false;

            if (this.conf.highlightNow && isSameDay(date, new Date())) {

                console.log('highlightNow', true);
                result = true;

            }

            if (result === false) {

                for (let item of this.data.highlightDay) {

                    if (item instanceof Array &&
                        isWithinRange(date, item[0], item[1])) {

                        result = true;

                    } else if (isSameDay(date, item)) {

                        result = true;

                    }

                    if (result) {

                        break;

                    }

                }

            }

            return result;

        },
        _highlightClass : function (item) {

            if (item.notCurrentMonth) {

                return {};

            }

            let currentDate = item.date;
            let nextDate;
            let prevDate;
            let currentHighlight = false;
            let nextHighlight = false;
            let prevHighlight = false;
            let result = {};

            currentHighlight = this._isHighlight(currentDate);

            if (item.next) {

                nextDate = item.next.date;
                nextHighlight = this._isHighlight(nextDate);

            } else {

                nextHighlight = this._isHighlight(addDays(currentDate, 1));

            }

            if (item.prev) {

                prevDate = item.prev.date;
                prevHighlight = this._isHighlight(prevDate);

            } else {

                prevHighlight = this._isHighlight(addDays(currentDate, -1));

            }

            if (
                currentHighlight &&
                prevHighlight &&
                nextHighlight
            ) {

                result.middle = true;

            } else if (
                currentHighlight &&
                !prevHighlight &&
                !nextHighlight
            ) {

                result.highlight = true;

            } else if (
                currentHighlight &&
                !prevHighlight &&
                nextHighlight
            ) {

                result.start = true;

            } else if (
                currentHighlight &&
                prevHighlight &&
                !nextHighlight
            ) {

                result.end = true;

            }

            return result;

        },
        _prev : function () {

            if (this.data.yearPick) {

                this.data.yearPickOffset -= ((yearRange * 2) + 1);

            } else {

                this.sub();

            }

        },
        _next : function () {

            if (this.data.yearPick) {

                this.data.yearPickOffset += ((yearRange * 2) + 1);

            } else {

                this.add();

            }

        },
        toggleYearPick : function (show) {

            if (show === this.data.yearPick) {

                return;

            }
  
            this.toggleMonthPick(false);

            if (show === undefined) {

                show = !this.data.yearPick;

            }

            this.data.yearPick = !!show;
            this.data.yearPickOffset = 0;

            if (!!show === false) {

                this.toggleMonthPick(true);

            }

        },
        toggleMonthPick : function (show) {

            if (show === this.data.monthPick) {

                return;

            }

            this.toggleYearPick(false);

            if (show === undefined) {

                show = !this.data.monthPick;

            }

            this.data.monthPick = !!show;

        },
        getDate : function (format) {},
        getTime : function () {},
        setTime : function (timestrap) {

            this.data.current = +timestrap;

            return this;

        },
        set : function (value, unit = 'month') {

            if ([
                'month',
                'year'
            ].indexOf(unit) === -1) {

                unit = 'month';

            }

            switch (unit) {

                case 'month' :
                    this.data.current = setMonth(this.data.current, value);

                    break;

                case 'year' :
                    this.data.current = setYear(this.data.current, value);

                    break;

            }

            return this;

        },
        add : function (amount = 1, unit = 'month') {

            if ([
                'day',
                'month',
                'year'
            ].indexOf(unit) === -1) {

                unit = 'month';

            }

            switch (unit) {

                case 'day' :
                    this.data.current = addDays(this.data.current, amount);

                    break;

                case 'month' :
                    this.data.current = addMonths(this.data.current, amount);

                    break;

                case 'year' :
                    this.data.current = addYears(this.data.current, amount);

                    break;

            }

            return this;

        },
        sub : function (amount = 1, unit = 'month') {

            this.add(-amount, unit);

            return this;

        },
        getHighlight : function (includeCurrent = false) {},
        setHighlight : function (list) {

            this.data.highlightDay = list;

        },
        addHighlight : function (list) {},
        removeHighlight : function (list) {}
    },
    filters : {
        getDate : function (val) {

            return getDate(val);

        }
    },
    mounted : function () {

        this.$watch('conf.date', () => {

            this.data.current = this.conf.date;

        }, {
            immediate : true
        });

        this.$watch('conf.highlightDay', () => {

            this.setHighlight(this.conf.highlightDay);

        }, {
            immediate : true,
            deep : true
        });

    }
};
</script>

<style lang="less" src="./index.less"></style>
