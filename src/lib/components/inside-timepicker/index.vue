<template>
    <mor-inside-timepicker
        :_uiid="uiid"
        :class="[stateClass, moreClass]"

        :form-name="formName"
        :form-key="formKey"
        :group="group"
        :default-value="defaultValue"
        :hide-name="hideName"
        :format="format"
        :align="align"
        :selectable-range="selectableRange"
        :clearable="clearable"
    >

    <morning-textinput
        :ref="'ui-timepicker-input-'+uiid"
        :form-name="conf.formName"
        :hide-name="conf.hideName"
        :align="conf.align"
        :state="conf.state"
        prepend="<i class='morningicon'>&#xe607;</i>"

        @blur="_inputBlur"
        @focus="_inputFocus"

        v-model="data.inputValue"
    ></morning-textinput>

    <div class="time-select" :class="timeSelectClass" @mousedown.stop.prevent="_noop">
        <div class="time-box">
            <ul
                class="hour"
                @mouseenter="_focusType('hour')"
                @mouseleave="_blurType('hour')"
                @scroll.stop.prevent="_scrollTime('hour')"
            >
                <li v-for="i in 24" :class="{current : (i - 1) === data.h, block : !_checkSelectable('hour', i - 1)}" @click="_to('hour', i - 1, $event)">
                    <template v-if="i < 11">
                        {{`0${i - 1}`}}
                    </template>
                    <template v-else>
                        {{i - 1}}
                    </template>
                </li>
            </ul>
            <ul
                class="minute"
                @mouseenter="_focusType('minute')"
                @mouseleave="_blurType('minute')"
                @scroll.prevent="_scrollTime('minute')"
            >
                <li v-for="i in 60" :class="{current : (i - 1) === data.m, block : !_checkSelectable('minute', i - 1)}" @click="_to('minute', i - 1, $event)">
                    <template v-if="i < 11">
                        {{`0${i - 1}`}}
                    </template>
                    <template v-else>
                        {{i - 1}}
                    </template>
                </li>
            </ul>
            <ul
                class="second"
                @mouseenter="_focusType('second')"
                @mouseleave="_blurType('second')"
                @scroll.stop.prevent="_scrollTime('second')"
            >
                <li v-for="i in 60" :class="{current : (i - 1) === data.s, block : !_checkSelectable('second', i - 1)}" @click="_to('second', i - 1, $event)">
                    <template v-if="i < 11">
                        {{`0${i - 1}`}}
                    </template>
                    <template v-else>
                        {{i - 1}}
                    </template>
                </li>
            </ul>
            <div class="selected">&nbsp;</div>
        </div>
    </div>

    <morning-link v-if="conf.clearable" color="minor" @emit="_set(undefined, true)" class="cleanbtn">清空</morning-link>

    </mor-inside-timepicker>
</template>
 
<script>
import {
    addMilliseconds,
    // getMilliseconds,
    // setMilliseconds,
    setHours,
    setMinutes,
    setSeconds,
    getHours,
    getMinutes,
    getSeconds,
    startOfHour,
    endOfHour,
    startOfMinute,
    endOfMinute,
    parse as parseDate,
    format as formatDate,
    isValid,
    closestTo,
    areIntervalsOverlapping
}                                   from 'date-fns/esm';
import Time                         from 'Utils/Time';

export default {
    origin : 'Form',
    inside : true,
    name : 'inside-timepicker',
    mixins : [Time],
    props : {
        format : {
            type : String,
            default : 'HH:mm:ss'
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
        clearable : {
            type : Boolean,
            default : false
        }
    },
    computed : {
        _conf : function () {

            return {
                format : this.format,
                align : this.align,
                selectableRange : this.selectableRange,
                clearable : this.clearable
            };

        },
        timeSelectClass : function () {

            let classes = {};

            classes.show = (this.data.inputFocus && (this.data.state !== 'disabled'));
            classes[`align-${this.conf.align}`] = true;

            return classes;

        },
        moreClass : function () {

            return {
                'has-cleanbtn' : this.conf.clearable
            };

        }
    },
    data : function () {

        return {
            data : {
                inputValue : '',
                inputFocus : false,
                h : 0,
                m : 0,
                s : 0,
                hourStopScroll : null,
                minuteStopScroll : null,
                secondStopScroll : null,
                hourScrolling : false,
                minuteScrolling : false,
                secondScrolling : false,
                hourStopScrollHandler : null,
                minuteStopScrollHandler : null,
                secondStopScrollHandler : null,
                focusType : null,
                selectableTimes : []
            }
        };

    },
    methods : {
        _valueFilter : function (value) {

            if (value === undefined) {

                return value;

            }

            let date = parseDate(
                `${this._timeGetStandarDateString()} ${value}`,
                `YYYY-M-D ${this.conf.format}`,
                new Date('1-1 00:00:00')
            );

            if (!isValid(date)) {

                date = new Date('1-1 00:00:00');

            }

            return formatDate(date, this.conf.format);

        },
        _noop : function () {},
        _valueToDate : function (value) {

            if (value === undefined) {

                return value;

            }

            return parseDate(
                `${this._timeGetStandarDateString()} ${value}`,
                `YYYY-M-D ${this.conf.format}`,
                0
            );

        },
        _inputFocus : function () {

            this.data.inputFocus = true;

        },
        _inputBlur : function () {

            this.data.inputFocus = false;

            if (this.data.inputValue === undefined ||
                this.data.inputValue === '') {

                this._set(undefined, true);

            } else {

                let date = parseDate(
                    `00| ${this.data.inputValue}`,
                    `YY| ${this.conf.format}`,
                    this._valueToDate(this.data.value) || this._timeGetZero()
                );

                if (!this._checkSelectable('all')) {

                    date = this._getClosestTime(date);

                }

                if (date === this.data.value) {

                    this._refreshInputValue();

                } else {

                    this._set(formatDate(date, this.conf.format), true);

                }

            }

        },
        _getClosestTime : function (date) {

            let list = [];

            for (let time of this.data.selectableTimes) {

                list.push(time[0]);
                list.push(time[1]);

            }

            date = closestTo(date, list);

            return date;

        },
        _setDate : function (type, value) {

            let date = this._timeStandardDate(this._valueToDate(this.data.value) || this._timeGetZero());

            if (type === 'hour') {

                date = setHours(date, value);

            } else if (type === 'minute') {

                date = setMinutes(date, value);

            } else if (type === 'second') {

                date = setSeconds(date, value);

            }

            this._set(formatDate(date, this.conf.format), true);

        },
        _focusType : function (type) {

            let date = this._valueToDate(this.data.value);
            let $input = this.$el.querySelector('input');

            // if (+date !== 0) {

            let start = 0;
            let end = 0;
            let map = {
                hour : '(HH|H|h|hh)',
                minute : '(mm|m)',
                second : '(ss|s)'
            };
            let result = this.conf.format.match(map[type]);
            let leftString = formatDate(date, `${this.conf.format.slice(0, result.index)}`);
            let selfString = formatDate(date, `${this.conf.format.slice(result.index, result.index + result[0].length)}`);

            if (leftString === ' ' && result.index === 0) {

                leftString = '';

            }

            start = leftString.length;
            end = start + selfString.length;

            $input.selectionDirection = 'forward';
            $input.selectionEnd = end;
            $input.selectionStart = start;

            // }

            this.data.focusType = type;

            $input.focus();

        },
        _blurType : function (type) {

            let $input = this.$el.querySelector('input');

            $input.selectionDirection = 'none';
            $input.selectionEnd = $input.selectionStart;

            this.data[`${type}Scrolling`] = false;
            this.data.focusType = null;
            this._scrollToTime();

        },
        _scrollTime : function (type) {

            if (this.data[`${type}StopScrollHandler`]) {

                this.data[`${type}StopScrollHandler`] = false;

                return;

            }

            let $ul = this.$el.querySelector(`ul.${type}`);
            let $li = this.$el.querySelector(`ul.${type} li`);
            let ih = $li.clientHeight;
            let ust = $ul.scrollTop;
            let i = Math.round(ust / ih);

            const scrollStopWait = 100;

            clearTimeout(this.data[`${type}StopScroll`]);

            this.data[`${type}Scrolling`] = true;
            this.data[`${type}StopScroll`] = setTimeout(() => {

                this.data[`${type}Scrolling`] = false;

            }, scrollStopWait);

            this._setDate(type, i);

            this.Vue.nextTick(() => {

                if (this.data.inputFocus && this.data.focusType === type) {

                    this._focusType(type);

                }
    
            });

        },
        _scrollToTime : function () {

            let types = ['hour', 'minute', 'second'];
            let $li = this.$el.querySelector(`ul.hour li`);

            for (let type of types) {

                if (!this.data[`${type}Scrolling`]) {

                    let $ul = this.$el.querySelector(`ul.${type}`);
                    let num = this.data[type[0]];

                    if ($ul.scrollTop !== (num * $li.clientHeight)) {

                        this.data[`${type}StopScrollHandler`] = true;

                    }

                    $ul.scrollTop = num * $li.clientHeight;

                }

            }

        },
        _refreshInputValue : function () {

            let timeString;

            if (this.data.value !== undefined) {

                timeString = formatDate(new Date(`1 ${this.data.h}:${this.data.m}:${this.data.s}`), this.conf.format);

            }

            this.$refs[`ui-timepicker-input-${this.uiid}`]._set(timeString, true);

        },
        _updateTime : function () {

            let date = this._valueToDate(this.data.value);

            this.data.h = getHours(date);
            this.data.m = getMinutes(date);
            this.data.s = getSeconds(date);

            this._scrollToTime();
            this._refreshInputValue();

        },
        _addselectableTime : function (time, selectableTimes) {

            let start = this._timeGetZero();
            let end = this._timeGetZero();

            start = setHours(start, getHours(time[0]));
            start = setMinutes(start, getMinutes(time[0]));
            start = setSeconds(start, getSeconds(time[0]));
            end = setHours(end, getHours(time[1]));
            end = setMinutes(end, getMinutes(time[1]));
            end = setSeconds(end, getSeconds(time[1]));

            selectableTimes.push([start, end]);

        },
        _refreshSelectable : function () {

            let ranges = this.conf.selectableRange;
            let selectableTimes = [];

            if (ranges instanceof Array &&
                ranges.length === 2 &&
                isValid(ranges[0]) &&
                isValid(ranges[1])) {

                this._addselectableTime(ranges, selectableTimes);
                
            } else {

                for (let range of ranges) {

                    if (range instanceof Array &&
                        range.length === 2 &&
                        isValid(range[0]) &&
                        isValid(range[1])) {

                        this._addselectableTime(range, selectableTimes);

                    }

                }

            }

            this.data.selectableTimes = selectableTimes;

        },
        _checkSelectable : function (type, num) {

            if (!this.conf.selectableRange ||
                this.data.selectableTimes.length === 0) {

                return true;

            }

            let checkDateLeft = this._timeGetZero();
            let checkDateRight;
            let selectable = false;

            if (type === 'hour') {

                checkDateLeft = setHours(checkDateLeft, num);
                checkDateLeft = startOfHour(checkDateLeft);
                checkDateRight = endOfHour(checkDateLeft);

            } else if (type === 'minute') {

                checkDateLeft = setHours(checkDateLeft, this.data.h);
                checkDateLeft = setMinutes(checkDateLeft, num);
                checkDateLeft = startOfMinute(checkDateLeft);
                checkDateRight = endOfMinute(checkDateLeft);

            } else if (type === 'second') {

                checkDateLeft = setHours(checkDateLeft, this.data.h);
                checkDateLeft = setMinutes(checkDateLeft, this.data.m);
                checkDateLeft = setSeconds(checkDateLeft, num);
                checkDateRight = checkDateLeft;

            } else if (type === 'all') {

                checkDateLeft = setHours(checkDateLeft, this.data.h);
                checkDateLeft = setMinutes(checkDateLeft, this.data.m);
                checkDateLeft = setSeconds(checkDateLeft, this.data.s);
                checkDateRight = checkDateLeft;

            }

            checkDateLeft = addMilliseconds(checkDateLeft, -1);
            checkDateRight = addMilliseconds(checkDateRight, 1);

            let checkInterval = {
                start : checkDateLeft,
                end : checkDateRight
            };

            for (let time of this.data.selectableTimes) {

                let timeInterval = {
                    start : time[0],
                    end : time[1]
                };

                if (areIntervalsOverlapping(checkInterval, timeInterval)) {

                    selectable = true;

                    break;

                }

            }

            return selectable;

        },
        _to : function (type, value, evt) {

            this._focusType(type);

            const maxHour = 23;
            const maxMinuteSecond = 59;

            if (evt.target.classList.value.split(' ').indexOf('block') !== -1) {

                return;

            }

            if (type === 'hour' && value > maxHour) {

                value = maxHour;

            }

            if ((type === 'minute' || type === 'second') && value > maxMinuteSecond) {

                value = maxMinuteSecond;

            }

            this._setDate(type, +value);

            return this;

        }
    },
    created : function () {},
    mounted : function () {

        this.Vue.nextTick(() => {

            this._updateTime();

        });

        this.$on('value-change', () => {

            this._updateTime();

        });

        this.$watch('conf.format', this._refreshInputValue);
        this.$watch('conf.selectableRange', this._refreshSelectable, {
            deep : true,
            immediate : true
        });

    }
};
</script>

<style lang="less" src="./index.less"></style>
