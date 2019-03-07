import {
    setMilliseconds,
    getMilliseconds,
    setSeconds,
    getSeconds,
    setMinutes,
    getMinutes,
    setHours,
    getHours,
    setDate,
    getDate,
    getMonth,
    setMonth,
    getYear,
    setYear,
    addMilliseconds,
    addSeconds,
    addMinutes,
    addHours,
    addDays,
    addWeeks,
    addMonths,
    addQuarters,
    addYears,
    startOfSecond,
    endOfSecond,
    startOfMinute,
    endOfMinute,
    startOfHour,
    endOfHour,
    startOfDay,
    endOfDay,
    startOfWeek,
    endOfWeek,
    startOfMonth,
    endOfMonth,
    startOfQuarter,
    endOfQuarter,
    startOfYear,
    endOfYear
}                                   from 'date-fns';
import standardDate                 from './standardDate';

const operator = [
    '+',
    '-'
];

const leftExpression = {
    common : [
        'now'
    ],
    date : [
        'startOfWeek',
        'endOfWeek',
        'startOfMonth',
        'endOfMonth',
        'startOfQuarter',
        'endOfQuarter',
        'startOfYear',
        'endOfYear'
    ],
    time : [
        'startOfSecond',
        'endOfSecond',
        'startOfMinute',
        'endOfMinute',
        'startOfHour',
        'endOfHour'
    ]
};

const unit = {
    date : [
        'D',
        'W',
        'M',
        'Q',
        'Y'
    ],
    time : [
        'ms',
        's',
        'm',
        'h'
    ]
};

leftExpression.datetime =leftExpression.common
    .concat(leftExpression.time)
    .concat(leftExpression.date)
    .concat(['startOfDay', 'endOfDay']);
leftExpression.date = leftExpression.common.concat(leftExpression.date);
leftExpression.time = leftExpression.common.concat(leftExpression.time);
unit.datetime = unit.date.concat(unit.time);

let DateTimeCore = {
    data : function () {

        return {};

    },
    methods : {
        _dtcoreGetStandardDate : function () {

            return new Date(standardDate);

        },
        _dtcoreParseRelativeToObj : function (type, val) {

            let units = unit[type];
            let expression = leftExpression[type];
            let operatorRegExp = new RegExp(`(\\${operator[0]}|\\${operator[1]})`, 'g');
            let unitRegExp = new RegExp(`^\\d+(${units.join('|')})$`, 'g');
            let relativeObj = {
                relative : false
            };

            if (val === undefined ||
                val === '') {

                return relativeObj;

            }

            val = val.replace(/ /g, '');
            val = val.split(operatorRegExp);

            if (val.length === 3 &&
                expression.indexOf(val[0]) !== -1 &&
                unitRegExp.test(val[2])) {

                relativeObj.relative = true;
                relativeObj.start = val[0];

                if (val[1] === '+') {

                    relativeObj.operator = 1;

                } else {

                    relativeObj.operator = -1;

                }

                relativeObj.unit = val[2].replace(unitRegExp, '$1');
                relativeObj.value = val[2].replace(relativeObj.unit, '');

                return relativeObj;

            }

            if (val.length === 1 && expression.indexOf(val[0]) !== -1) {

                relativeObj.relative = true;
                relativeObj.start = val[0];
                relativeObj.operator = 0;
                relativeObj.value = 0;
                relativeObj.unit = null;

                return relativeObj;

            }

            return relativeObj;

        },
        _dtcoreIsRelative : function (type, val) {

            return this._dtcoreParseRelativeToObj(type, val).relative;

        },
        _dtcoreGetRelativeObj : function (type, relativeObj) {

            let date = this._dtcoreGetStandardDate();
            let now = new Date();
            let dateFn = addDays;
            let startDate;

            if (type.indexOf('date') !== -1) {

                date = setDate(date, getDate(now));
                date = setMonth(date, getMonth(now));
                date = setYear(date, getYear(now));

            }

            if (type.indexOf('time') !== -1) {

                date = setHours(date, getHours(now));
                date = setMinutes(date, getMinutes(now));
                date = setSeconds(date, getSeconds(now));
                date = setMilliseconds(date, getMilliseconds(now));

            }

            if (type.indexOf('date') !== -1) {

                if (relativeObj.start === 'startOfWeek') {

                    date = startOfWeek(date);

                } else if (relativeObj.start === 'endOfWeek') {

                    date = endOfWeek(date);

                } else if (relativeObj.start === 'startOfMonth') {

                    date = startOfMonth(date);

                } else if (relativeObj.start === 'endOfMonth') {

                    date = endOfMonth(date);

                } else if (relativeObj.start === 'startOfQuarter') {

                    date = startOfQuarter(date);

                } else if (relativeObj.start === 'endOfQuarter') {

                    date = endOfQuarter(date);

                } else if (relativeObj.start === 'startOfYear') {

                    date = startOfYear(date);

                } else if (relativeObj.start === 'endOfYear') {

                    date = endOfYear(date);

                }

                if (relativeObj.unit === 'D') {

                    dateFn = addDays;

                } else if (relativeObj.unit === 'W') {

                    dateFn = addWeeks;

                } else if (relativeObj.unit === 'M') {

                    dateFn = addMonths;

                } else if (relativeObj.unit === 'Q') {

                    dateFn = addQuarters;

                } else if (relativeObj.unit === 'Y') {

                    dateFn = addYears;

                }

            }

            if (type.indexOf('time') !== -1) {

                if (relativeObj.start === 'startOfSecond') {

                    date = startOfSecond(date);

                } else if (relativeObj.start === 'endOfSecond') {

                    date = endOfSecond(date);

                } else if (relativeObj.start === 'startOfMinute') {

                    date = startOfMinute(date);

                } else if (relativeObj.start === 'endOfMinute') {

                    date = endOfMinute(date);

                } else if (relativeObj.start === 'startOfHour') {

                    date = startOfHour(date);

                } else if (relativeObj.start === 'endOfHour') {

                    date = endOfHour(date);

                }

                if (relativeObj.unit === 'ms') {

                    dateFn = addMilliseconds;

                } else if (relativeObj.unit === 's') {

                    dateFn = addSeconds;

                } else if (relativeObj.unit === 'm') {

                    dateFn = addMinutes;

                } else if (relativeObj.unit === 'h') {

                    dateFn = addHours;

                }

            }

            if (dateFn) {

                date = dateFn(date, relativeObj.operator * relativeObj.value);

            }

            return date;

        },
    }
};

export default DateTimeCore;
