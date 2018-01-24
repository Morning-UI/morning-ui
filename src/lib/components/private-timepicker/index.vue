<template>
    <mor-private-timepicker
        :_uiid="uiid"
        :class="[formClass, stateClass]"

        :form-name="formName"
        :form-key="formKey"
        :group="group"
        :default-value="defaultValue"
        :hide-name="hideName"
        :clearable="clearable"
        :format="format"
        :align="align"
        :selectable-range="selectableRange"
    >

    <morning-textinput
        :ref="'ui-private-timepicker-input-'+uiid"
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

    <morning-link v-if="conf.clearable" color="minor" @emit="_clean" class="cleanbtn">清空</morning-link>

    </mor-private-timepicker>
</template>
 
<script>
import {
    format as formatDate,
    getHours,
    getMinutes,
    getSeconds,
    setHours,
    setMinutes,
    setSeconds,
    isValid,
    startOfHour,
    endOfHour,
    startOfMinute,
    endOfMinute,
    closestTo,
    addMilliseconds,
    areIntervalsOverlapping
}                                   from 'date-fns/esm';
import Time                         from 'Utils/Time';

export default {
    origin : 'Form',
    private : true,
    name : 'private-timepicker',
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
        }
    },
    computed : {
        _conf : function () {

            return {
                format : this.format,
                align : this.align,
                selectableRange : this.selectableRange
            };

        },
        timeSelectClass : function () {

            let classes = {};

            classes.show = (this.data.inputFocus && (this.data.state !== 'disabled'));
            classes[`align-${this.conf.align}`] = true;

            return classes;

        }
    },
    data : function () {

        return {
            data : {
                h : 0,
                m : 0,
                s : 0,
                inputValue : '',
                inputFocus : false,
                stopScrollHandler : {},
                stopScrollTimeout : {},
                scrolling : {},
                selectableTimes : [],
                focusType : null,
            }
        };

    },
    methods : {
        _valueFilter : function (value) {

            if (value === undefined) {

                return value;

            }

            let date = this._timeStringToDate(value, this.conf.format);

            return formatDate(date, this.conf.format);

        },
        _noop : function () {},
        _inputBlur : function () {

            this.data.inputFocus = false;

            if (this.data.inputValue === undefined ||
                this.data.inputValue === '') {

                this._set(undefined, true);

            } else {

                let date = this._timeStringToDate(this.data.inputValue, this.conf.format);

                if (!this._checkSelectable('all')) {

                    date = this._getClosestTime(date);

                }

                if (+date === +this._timeStringToDate(this.data.value, this.conf.format)) {

                    this._refreshInputValue();

                } else {

                    this._set(formatDate(date, this.conf.format), true);

                }

            }

        },
        _inputFocus : function () {

            this.data.inputFocus = true;

        },
        _focusType : function (type) {

            let date = this._timeStringToDate(this.data.value, this.conf.format);
            let $input = this.$el.querySelector('input');
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

            this.data.focusType = type;

            $input.focus();

        },
        _blurType : function (type) {

            let $input = this.$el.querySelector('input');

            $input.selectionDirection = 'none';
            $input.selectionEnd = $input.selectionStart;

            this.data.scrolling[type] = false;
            this.data.focusType = null;
            this._scrollToTime();

        },
        _scrollTime : function (type) {

            if (this.data.stopScrollHandler[type]) {

                this.data.stopScrollHandler[type] = false;

                return;

            }

            let $ul = this.$el.querySelector(`ul.${type}`);
            let $li = this.$el.querySelector(`ul.${type} li`);
            let ih = $li.clientHeight;
            let ust = $ul.scrollTop;
            let i = Math.round(ust / ih);

            const scrollStopWait = 100;

            clearTimeout(this.data.stopScrollTimeout[type]);

            this.data.scrolling[type] = true;
            this.data.stopScrollTimeout[type] = setTimeout(() => {

                this.data.scrolling[type] = false;

            }, scrollStopWait);

            let time = this._timeSet(type, i, this._timeStringToDate(this.data.value, this.conf.format));

            this._set(formatDate(time, this.conf.format), true);

            this.Vue.nextTick(() => {

                if (this.data.inputFocus && this.data.focusType === type) {

                    this._focusType(type);

                }
    
            });

        },
        _updateTime : function () {

            let date = this._timeStringToDate(this.data.value, this.conf.format);

            this.data.h = getHours(date);
            this.data.m = getMinutes(date);
            this.data.s = getSeconds(date);

            this._scrollToTime();
            this._refreshInputValue();

        },
        _scrollToTime : function () {

            let types = ['hour', 'minute', 'second'];
            let $li = this.$el.querySelector(`ul.hour li`);

            for (let type of types) {

                if (!this.data.scrolling[type]) {

                    let $ul = this.$el.querySelector(`ul.${type}`);
                    let num = this.data[type[0]];

                    if ($ul.scrollTop !== (num * $li.clientHeight)) {

                        this.data.stopScrollHandler[type] = true;

                    }

                    $ul.scrollTop = num * $li.clientHeight;

                }

            }

        },
        _refreshInputValue : function () {

            let timeString;

            if (this.data.value !== undefined) {

                timeString = formatDate(this._timeStringToDate(this.data.value, this.conf.format), this.conf.format);

            }

            this.$refs[`ui-private-timepicker-input-${this.uiid}`]._set(timeString, true);

        },
        _checkSelectable : function (type, num) {

            if (!this.conf.selectableRange ||
                this.data.selectableTimes.length === 0) {

                return true;

            }

            let checkDateLeft = this._timeGetStandardDate();
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

            let time = this._timeSet(type, +value, this._timeStringToDate(this.data.value, this.conf.format));

            this._set(formatDate(time, this.conf.format), true);

            return this;

        },
        _initSelectableTime : function (range, selectableTimes) {

            let start = this._timeGetStandardDate();
            let end = this._timeGetStandardDate();

            range[0] = this._timeStringToDate(range[0], this.conf.format);
            range[1] = this._timeStringToDate(range[1], this.conf.format);

            start = setHours(start, getHours(range[0]));
            start = setMinutes(start, getMinutes(range[0]));
            start = setSeconds(start, getSeconds(range[0]));
            end = setHours(end, getHours(range[1]));
            end = setMinutes(end, getMinutes(range[1]));
            end = setSeconds(end, getSeconds(range[1]));

            selectableTimes.push([start, end]);

        },
        _refreshSelectable : function () {

            let ranges = this.conf.selectableRange;
            let selectableTimes = [];

            if (ranges instanceof Array &&
                ranges.length === 2 &&
                typeof ranges[0] === 'string' &&
                typeof ranges[1] === 'string' &&
                isValid(this._timeStringToDate(ranges[0], this.conf.format)) &&
                isValid(this._timeStringToDate(ranges[1], this.conf.format))) {

                this._initSelectableTime(ranges, selectableTimes);
                
            } else {

                for (let range of ranges) {

                    if (range instanceof Array &&
                        range.length === 2 &&
                        typeof range[0] === 'string' &&
                        typeof range[1] === 'string' &&
                        isValid(this._timeStringToDate(range[0], this.conf.format)) &&
                        isValid(this._timeStringToDate(range[1], this.conf.format))) {

                        this._initSelectableTime(range, selectableTimes);

                    }

                }

            }

            this.data.selectableTimes = selectableTimes;

        },
        _getClosestTime : function (date) {

            let list = [];

            for (let time of this.data.selectableTimes) {

                list.push(time[0]);
                list.push(time[1]);

            }

            date = closestTo(date, list);

            return date;

        }
    },
    created : function () {},
    mounted : function () {

        this._updateTime();
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
