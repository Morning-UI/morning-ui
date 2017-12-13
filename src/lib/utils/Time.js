import {
    getYear,
    getMonth,
    getDate,
    setHours,
    setMinutes,
    setSeconds,
    getHours,
    getMinutes,
    getSeconds
}                                   from 'date-fns/esm';

const standardYear = '2000';
const standardMonth = '1';
const standardDay = '1';
const standardDate = `${standardYear}-${standardMonth}-${standardDay}`;

let Time = {
    data : function () {

        return {};

    },
    methods : {
        _timeIsStandarDate : function (date) {

            if (+getYear(date) === +standardYear &&
                (+getMonth(date) + 1) === +standardMonth &&
                +getDate(date) === +standardDay) {

                return true;

            }

            return false;

        },
        _timeStandardDate : function (date) {

            if (date === null ||
                date === undefined) {

                return date;

            }

            let newDate = new Date(standardDate);

            newDate = setHours(newDate, getHours(date));
            newDate = setMinutes(newDate, getMinutes(date));
            newDate = setSeconds(newDate, getSeconds(date));

            return newDate;

        },
        _timeGetZero : function () {

            return this._timeStandardDate(new Date('1-1 00:00:00'));

        }
    }
};

export default Time;
