import {
    parse as parseDate,
    setHours,
    setMinutes,
    setSeconds
}                                   from 'date-fns';
import standardDate                 from './standardDate';

let Time = {
    data : function () {

        return {};

    },
    methods : {
        _timeStringToDate : function (str, format) {

            if (str === null ||
                str === undefined) {

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
        _timeGetStandardDate : function () {

            return new Date(standardDate);

        }
    }
};

export default Time;
