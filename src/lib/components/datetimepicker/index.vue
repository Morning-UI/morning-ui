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
    
                    @value-change="_syncFromInputToRoot(1)"
                ></morning-timepicker>
            </div>
        </morning-datepicker>
    </div>

    <morning-link v-if="conf.clearable" color="minor" @emit="_clean" class="cleanbtn">清空</morning-link>

    </mor-datetimepicker>
</template>
 
<script>
// TODO : date-selectable-range
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
    setMilliseconds
}                                   from 'date-fns';
import Dates                        from 'Utils/Dates';

export default {
    origin : 'Form',
    name : 'datetimepicker',
    mixins : [Dates],
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

        }
    },
    data : function () {

        return {
            data : {}
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
                    
                    this._set(formatDate(fulldate, this.conf.format), true);

                } else {
                    
                    this._set(undefined, true);

                }

            }

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
