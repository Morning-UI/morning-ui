import {
//     getYear,
//     getMonth,
//     getDate,
    parse as parseDate,
    setHours,
    setMinutes,
    setSeconds,
    getHours,
    getMinutes,
    getSeconds
}                                   from 'date-fns/esm';

const standardYear = '1971';
const standardMonth = '1';
const standardDay = '1';
const standardDate = `${standardYear}-${standardMonth}-${standardDay}`;

let Time = {
    data : function () {

        return {};

    },
    methods : {
        // _timeIsStandarDate : function (date) {

        //     if (+getYear(date) === +standardYear &&
        //         (+getMonth(date) + 1) === +standardMonth &&
        //         +getDate(date) === +standardDay) {

        //         return true;

        //     }

        //     return false;

        // },
        _timeStringToDate : function (str, format) {

            if (str === null ||
                str === undefined) {

                return this._timeGetStandardDate();

            }

            return parseDate(
                `${standardDate} ${str}`,
                `YYYY-M-D ${format}`,
                this._timeGetStandardDate()
            );

        },
        // _timeStandardDate : function (date) {

        //     let newDate = this._timeGetStandardDate();

        //     if (date === null ||
        //         date === undefined) {

        //         return newDate;

        //     }

        //     newDate = setHours(newDate, getHours(date));
        //     newDate = setMinutes(newDate, getMinutes(date));
        //     newDate = setSeconds(newDate, getSeconds(date));

        //     return newDate;

        // },
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
