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
    >

    <div class="wrap">
        <morning-datepicker
            :ref="'ui-datetimepicker-date-'+uiid"
            :date="conf.date"
            :format="conf.format"
            :align="conf.align"
            :show-timepicker-box="true"

            @value-change="_syncValueFromInputToRoot"
        >
            <div slot="timepicker">
                <morning-timepicker
                    :ref="'ui-datetimepicker-time-'+uiid"
                    :align="conf.align"
    
                    @value-change="_syncValueFromInputToRoot"
                ></morning-timepicker>
            </div>
        </morning-datepicker>
    </div>

    <morning-link v-if="conf.clearable" color="minor" @emit="_clean" class="cleanbtn">清空</morning-link>

    </mor-datetimepicker>
</template>
 
<script>
// TODO : config
// TODO : sync value to input form value
// TODO : date input time is 0:0:0
import {
    format as formatDate,
    getYear,
    getMonth,
    getDay,
    getHours,
    getMinutes,
    getSeconds,
    getMilliseconds,
    setYear,
    setMonth,
    setDay,
    setHours,
    setMinutes,
    setSeconds,
    setMilliseconds
}                                   from 'date-fns';

export default {
    origin : 'Form',
    name : 'datetimepicker',
    mixins : [],
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
        }
    },
    computed : {
        _conf : function () {

            return {
                date : this.date,
                format : this.format,
                align : this.align
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
        _syncValueFromInputToRoot : function () {

            let $date = this.$refs[`ui-datetimepicker-date-${this.uiid}`];
            let $time = this.$refs[`ui-datetimepicker-time-${this.uiid}`];

            if ($date && $time) {

                let date = $date.getDate();
                let time = $time.getDate();
                let fulldate = new Date();

                if (date) {

                    fulldate = setYear(fulldate, getYear(date));
                    fulldate = setMonth(fulldate, getMonth(date));
                    fulldate = setDay(fulldate, getDay(date));
                    fulldate = setHours(fulldate, getHours(time));
                    fulldate = setMinutes(fulldate, getMinutes(time));
                    fulldate = setSeconds(fulldate, getSeconds(time));
                    fulldate = setMilliseconds(fulldate, getMilliseconds(time));

                }

                this._set(formatDate(fulldate, this.conf.format), true);

            }

        }
    },
    created : function () {},
    mounted : function () {}
};
</script>

<style lang="less" src="./index.less"></style>
