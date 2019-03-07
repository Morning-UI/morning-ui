import {
    setHours,
    setMinutes,
    setSeconds,
    isValid,
    parse as parseDate,
    format as formatDate
}                                   from 'date-fns';
import standardDate                 from './standardDate';
import DateTimeCore                 from './DateTimeCore';

let Time = {
    mixins : [DateTimeCore],
    data : function () {

        return {};

    },
    methods : {
        _timeStringToDate : function (str, format, validCheck = true) {

            if (str === null ||
                str === undefined) {

                return this._timeGetStandardDate();

            }

            if (validCheck && !this._timeStringIsValid(str, format)) {

                return this._timeGetStandardDate();

            }

            return parseDate(
                `${standardDate} ${str}`,
                `yyyy-MM-dd ${format}`,
                this._timeGetStandardDate()
            );

        },
        _timeSet : function (type, value, originDate) {

            if (originDate === null ||
                originDate === undefined) {

                originDate = this._timeGetStandardDate();

            }

            if (type === 'hour') {

                originDate = setHours(originDate, value);

            } else if (type === 'minute') {

                originDate = setMinutes(originDate, value);

            } else if (type === 'second') {

                originDate = setSeconds(originDate, value);

            }

            return originDate;

        },
        _timeStringIsValid : function (str, format) {

            let result = false;

            try {

                result = isValid(this._timeStringToDate(str, format, false));

            } catch(e) {}

            return result;

        },
        _timeGetStandardDate : function () {

            return this._dtcoreGetStandardDate();

        },
        _timeParseRelativeTimeToObj : function (val) {

            return this._dtcoreParseRelativeToObj('time', val);

        },
        _timeIsRelativeTime : function (val) {

            return this._dtcoreIsRelative('time', val);

        },
        _timeGetRelativeTime : function (relativeTime) {

            return this._dtcoreGetRelativeObj('time', relativeTime);

        },
        _timeGetRelativeTimeString : function (relativeTime, format) {

            return formatDate(this._timeGetRelativeTime(relativeTime), format);

        }
    }
};

export default Time;
