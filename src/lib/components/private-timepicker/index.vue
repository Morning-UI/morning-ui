<template>
    <mor-private-timepicker
        :_uiid="uiid"
        :class="[formClass, sizeClass, stateClass]"

        :form-name="formName"
        :form-key="formKey"
        :group="group"
        :hide-name="hideName"
        :clearable="clearable"
        :init-value="initValue"
        :inside-name="insideName"
        :format="format"
        :align="align"
        :selectable-range="selectableRange"
        :relative="relative"
    >

    <morning-textinput
        :ref="'ui-private-timepicker-input-'+uiid"
        :id="'mor-private-timepicker-input-'+uiid"
        :inside-name="conf.insideName"
        :align="conf.align"
        :state="conf.state"
        :size="conf.size"

        prepend="<i class='mo-icon mo-icon-time-co'></i>"

        @blur="_inputBlur"
        @focus="_inputFocus"

        v-model="data.inputValue"
    ></morning-textinput>

    <morning-popover
        :ref="'ui-private-timepicker-popover-'+uiid"
        :class="[
            'mor-private-timepicker-popover',
            sizeClass
        ]"

        :target="'#mor-private-timepicker-input-'+uiid"
        placement="bottom"
        trigger="method"
        :auto-reverse="true"
    >

        <div class="select" @mousedown.stop.prevent="_noop">
            <div class="time-box">
                <ul
                    class="hour"
                    @mouseenter="_focusType('hour')"
                    @mouseleave="_blurType('hour')"
                    @mousewheel="_mousewheel($event, 'hour')"
                    @scroll.stop.prevent="_scrollTime('hour')"
                >
                    <li v-for="i in 24" :key="i" :class="{current : (i - 1) === data.h, block : !_checkSelectable('hour', i - 1)}" @click="_to('hour', i - 1, $event)">
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
                    @mousewheel="_mousewheel($event, 'minute')"
                    @scroll.prevent="_scrollTime('minute')"
                >
                    <li v-for="i in 60" :key="i" :class="{current : (i - 1) === data.m, block : !_checkSelectable('minute', i - 1)}" @click="_to('minute', i - 1, $event)">
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
                    @mousewheel="_mousewheel($event, 'second')"
                    @scroll.stop.prevent="_scrollTime('second')"
                >
                    <li v-for="i in 60" :key="i" :class="{current : (i - 1) === data.s, block : !_checkSelectable('second', i - 1)}" @click="_to('second', i - 1, $event)">
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
        
    </morning-popover>

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
    startOfHour,
    endOfHour,
    startOfMinute,
    endOfMinute,
    closestTo,
    addMilliseconds,
    areIntervalsOverlapping
}                                   from 'date-fns';
import Time                         from 'Utils/Time';
import {formatOptions}              from 'Utils/DateFnsOptions';

export default {
    origin : 'Form',
    private : true,
    name : 'private-timepicker',
    mixins : [Time],
    props : {
        initValue : {
            type : String,
            default : undefined
        },
        insideName : {
            type : String,
            default : ''
        },
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
        relative : {
            type : Boolean,
            default : false
        }
    },
    computed : {
        _conf : function () {

            return {
                initValue : this.initValue,
                insideName : this.insideName,
                format : this.format,
                align : this.align,
                selectableRange : this.selectableRange,
                relative : this.relative
            };

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
                $timeWrap : null
            }
        };

    },
    methods : {
        _valueFilter : function (value) {

            if (value === undefined) {

                return value;

            }

            if (this.conf.relative && this._timeIsRelativeTime(value)) {

                return value;

            }

            let date = this._timeStringToDate(value, this.conf.format);

            if (date) {

                let h = getHours(date);
                let m = getMinutes(date);
                let s = getSeconds(date);

                if (!this.data.inputFocus && (
                    !this._checkSelectable('hour', h) ||
                    !this._checkSelectable('minute', m) ||
                    !this._checkSelectable('second', s)
                )) {

                    date = this._getClosestTime(date);

                }

            }

            return formatDate(date, this.conf.format, formatOptions);

        },
        _noop : function () {},
        _toggleSelector : function (show) {

            if (this.$refs[`ui-private-timepicker-popover-${this.uiid}`] === undefined) {

                return;

            }

            if (show === true && (this.data.state !== 'disabled')) {

                this.$refs[`ui-private-timepicker-popover-${this.uiid}`].show();

            } else if (show === false && (this.data.state !== 'disabled')) {

                this.$refs[`ui-private-timepicker-popover-${this.uiid}`].hide();

            } else if (this.data.inputFocus && (this.data.state !== 'disabled')) {

                this.$refs[`ui-private-timepicker-popover-${this.uiid}`].show();

            } else {

                this.$refs[`ui-private-timepicker-popover-${this.uiid}`].hide();

            }

        },
        _inputBlur : function () {

            this.data.inputFocus = false;
            this._syncInputValue();
            this.$emit('blur');

        },
        _inputFocus : function () {

            this.data.inputFocus = true;
            this.$emit('focus');

        },
        _syncInputValue : function () {

            if (this.data.inputValue === undefined ||
                this.data.inputValue === '') {

                this._set(undefined, true);

            } else if (this.conf.relative && this._timeIsRelativeTime(this.data.inputValue)) {

                this._set(this.data.inputValue, true);

            } else {

                let date = this._timeStringToDate(this.data.inputValue, this.conf.format);

                if (!this._checkSelectable('all')) {

                    date = this._getClosestTime(date);

                }

                if (+date === +this._timeStringToDate(this.data.value, this.conf.format)) {

                    this._refreshInputValue();

                } else {

                    this._set(formatDate(date, this.conf.format, formatOptions), true);

                }

            }

        },
        _focusType : function (type) {

            if (this.conf.relative && this._timeIsRelativeTime(this.data.value)) {

                return;

            }

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
            let leftString = formatDate(date, `${this.conf.format.slice(0, result.index) || ' '}`, formatOptions);
            let selfString = formatDate(date, `${this.conf.format.slice(result.index, result.index + result[0].length)}`, formatOptions);

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

            if (this.conf.relative && this._timeIsRelativeTime(this.data.value)) {

                this._set(undefined, true);

            }

            let $ul = this.data.$timeWrap.querySelector(`ul.${type}`);
            let $li = this.data.$timeWrap.querySelector(`ul.${type} li`);
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

            this._set(formatDate(time, this.conf.format, formatOptions), true);

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
            let $li = this.data.$timeWrap.querySelector(`ul.hour li`);

            for (let type of types) {

                if (!this.data.scrolling[type]) {

                    let $ul = this.data.$timeWrap.querySelector(`ul.${type}`);
                    let num = this.data[type[0]];

                    if ($ul.scrollTop !== (num * $li.clientHeight)) {

                        this.data.stopScrollHandler[type] = true;

                    }

                    $ul.scrollTop = num * $li.clientHeight;

                }

            }

        },
        _refreshInputValue : function () {

            if (this.$refs[`ui-private-timepicker-input-${this.uiid}`] === undefined) {

                return;

            }

            let timeString;

            if (this.data.value !== undefined) {

                if (this.conf.relative && this._timeIsRelativeTime(this.data.value)) {

                    timeString = this.data.value;

                } else {

                    timeString = formatDate(this._timeStringToDate(this.data.value, this.conf.format), this.conf.format, formatOptions);

                }

            }

            this.$refs[`ui-private-timepicker-input-${this.uiid}`]._set(timeString, true);

        },
        _checkSelectable : function (type, num) {

            if (!this.conf.selectableRange ||
                this.conf.relative ||
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

            this._set(formatDate(time, this.conf.format, formatOptions), true);

            return this;

        },
        _initSelectableTime : function (range, selectableTimes) {

            let start = this._timeGetStandardDate();
            let end = this._timeGetStandardDate();
            let rangeStart = this._timeStringToDate(range[0], this.conf.format);
            let rangeEnd = this._timeStringToDate(range[1], this.conf.format);

            start = setHours(start, getHours(rangeStart));
            start = setMinutes(start, getMinutes(rangeStart));
            start = setSeconds(start, getSeconds(rangeStart));
            end = setHours(end, getHours(rangeEnd));
            end = setMinutes(end, getMinutes(rangeEnd));
            end = setSeconds(end, getSeconds(rangeEnd));

            selectableTimes.push([start, end]);

        },
        _refreshSelectable : function () {

            let ranges = this.conf.selectableRange;
            let selectableTimes = [];

            if (ranges instanceof Array &&
                ranges.length === 2 &&
                typeof ranges[0] === 'string' &&
                typeof ranges[1] === 'string' &&
                this._timeStringIsValid(ranges[0], this.conf.format) &&
                this._timeStringIsValid(ranges[1], this.conf.format)) {

                this._initSelectableTime(ranges, selectableTimes);
                
            } else if (ranges instanceof Array) {

                for (let range of ranges) {

                    if (range instanceof Array &&
                        range.length === 2 &&
                        typeof range[0] === 'string' &&
                        typeof range[1] === 'string' &&
                        this._timeStringIsValid(ranges[0], this.conf.format) &&
                        this._timeStringIsValid(ranges[1], this.conf.format)) {

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

            date = closestTo(date, list) || date;

            return date;

        },
        _mousewheel : function (evt, type) {

            let $ul = this.data.$timeWrap.querySelector(`.time-box .${type}`);

            if (!$ul || evt.type !== 'mousewheel') {

                return;

            }

            if (evt.wheelDeltaY < 0 &&
                ($ul.scrollTop + $ul.clientHeight) >= $ul.scrollHeight) {

                evt.preventDefault();

            }

            if (evt.wheelDeltaY > 0 && $ul.scrollTop <= 0) {

                evt.preventDefault();

            }

        }
    },
    created : function () {

        this._set(this.conf.initValue, true);

    },
    mounted : function () {

        this.data.$timeWrap = this.$el.querySelector('.mor-private-timepicker-popover');

        this.$nextTick(() => {

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

    }
};
</script>
