import {
    parse as parseDate
}                                   from 'date-fns';
import standardDate                 from './standardDate';

let Dates = {
    data : function () {

        return {};

    },
    methods : {
        _dateStringToDate : function (str, format) {

            if (str === null ||
                str === undefined) {

                return this._dateGetStandardDate();

            }

            return parseDate(
                `${standardDate} ${str}`,
                `YYYY-M-D ${format}`,
                this._dateGetStandardDate()
            );

        },
        _dateGetStandardDate : function () {

            return new Date(standardDate);

        }
    }
};

export default Dates;
