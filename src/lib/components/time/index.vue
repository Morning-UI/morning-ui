<template>
    <mor-time
        :_uiid="uiid"
        :class="[]"

        :time="time"
        :format="format"
        :relative="relative"
        :strict="strict"
        :real-time="realTime"
        :countdown="countdown"
    >
    
        {{timeString}}

    </mor-time>
</template>
 
<script>
import {
    differenceInYears,
    differenceInMonths,
    differenceInDays,
    differenceInHours,
    differenceInMinutes,
    differenceInSeconds,
    subYears,
    subMonths,
    subDays,
    subHours,
    subMinutes,
    formatDistance,
    formatDistanceStrict,
    format as formatDate
}                                   from 'date-fns';
import locale                       from 'date-fns/locale/zh-CN';

const num10 = 10;
const oneSecond = 1000;

export default {
    origin : 'UI',
    name : 'time',
    props : {
        time : {
            type : Date,
            default : new Date()
        },
        format : {
            type : String,
            default : 'YYYY-MM-DD HH:mm:ss'
        },
        relative : {
            type : Boolean,
            default : false
        },
        strict : {
            type : Boolean,
            default : false
        },
        realTime : {
            type : [Boolean, Number],
            default : false
        },
        countdown : {
            type : Date,
            default : undefined
        }
    },
    computed : {
        _conf : function () {

            return {
                time : this.time,
                format : this.format,
                relative : this.relative,
                strict : this.strict,
                realTime : this.realTime,
                countdown : this.countdown
            };

        },
        timeString : function () {

            let date = this.conf.time;

            /* eslint-disable vue/no-side-effects-in-computed-properties */
            this.data.realTimeCounter--;
            /* eslint-enable vue/no-side-effects-in-computed-properties */

            if (this.data.isCountdownMode) {

                let future = this.data.countdownDate;
                let now = new Date();
                let distanceStr = [];
                let years;
                let months;
                let days;
                let hours;
                let minutes;
                let seconds;

                years = differenceInYears(future, now);

                if (years > 0) {

                    future = subYears(future, years);
                    distanceStr.push(`${years}年`);

                }

                months = differenceInMonths(future, now);

                if (months > 0) {

                    future = subMonths(future, months);
                    distanceStr.push(`${months}月`);

                }

                days = differenceInDays(future, now);

                if (days > 0) {

                    future = subDays(future, days);
                    distanceStr.push(`${days}天`);

                }

                hours = differenceInHours(future, now);

                if (hours >= 0) {

                    future = subHours(future, hours);

                    if (hours < num10) {

                        hours = `0${hours}`;

                    }

                    distanceStr.push(`${hours}小时`);

                }

                minutes = differenceInMinutes(future, now);

                if (minutes >= 0) {

                    future = subMinutes(future, minutes);

                    if (minutes < num10) {

                        minutes = `0${minutes}`;

                    }

                    distanceStr.push(`${minutes}分`);

                }

                seconds = differenceInSeconds(future, now);

                if (seconds >= 0) {

                    if (seconds < num10) {

                        seconds = `0${seconds}`;

                    }

                    distanceStr.push(`${seconds}秒`);

                }

                return distanceStr.join(' ');

            }

            if (this.conf.relative) {

                if (this.conf.strict) {

                    return formatDistanceStrict(date, new Date(), {
                        locale,
                        includeSeconds : true,
                        addSuffix : '前'
                    });

                }

                return formatDistance(date, new Date(), {
                    locale,
                    includeSeconds : true,
                    addSuffix : '前'
                });

            }

            if (this.conf.realTime !== undefined &&
                this.conf.realTime !== false) {

                date = new Date() - this.data.timeDiff;

            }

            return formatDate(date, this.conf.format);

        }
    },
    data : function () {

        return {
            data : {
                realTimer : null,
                realTimeCounter : 0,
                timeDiff : 0,
                isCountdownMode : false,
                countdownDate : null
            }
        };

    },
    methods : {},
    mounted : function () {

        this.$watch('conf.countdown', () => {

            if (this.conf.countdown !== undefined) {

                this.data.isCountdownMode = true;
                this.data.countdownDate = this.conf.countdown;

                if (+this.data.countdownDate <= Date.now()) {

                    this.data.countdownDate = new Date();

                }

            } else {

                this.data.isCountdownMode = false;
                this.data.countdownDate = null;

            }

        }, {
            immediate : true
        });

        this.$watch('conf.time', () => {

            this.data.timeDiff = Date.now() - (+this.conf.time);

        }, {
            immediate : true
        });

        this.$watch('conf.realTime', interval => {

            clearInterval(this.data.realTimer);

            if (interval !== undefined &&
                interval !== false) {

                if (interval === true) {

                    interval = oneSecond;

                }

                setInterval(() => {

                    this.data.realTimeCounter++;

                }, interval);

            }

        }, {
            immediate : true
        });

    }
};
</script>
