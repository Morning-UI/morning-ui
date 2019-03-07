import {
    isValid,
    parse as parseDate,
    format as formatDate
}                                   from 'date-fns';
import DateTimeCore                 from './DateTimeCore';

let Dates = {
    mixins : [DateTimeCore],
    data : function () {

        return {};

    },
    methods : {
        _dateStringToDate : function (str, format, validCheck = true) {

            if (str === null ||
                str === undefined) {

                return this._dateGetStandardDate();

            }

            if (validCheck && !this._dateStringIsValid(str, format)) {

                return this._dateGetStandardDate();

            }

            return parseDate(
                str,
                format,
                this._dateGetStandardDate()
            );

        },
        _dateStringIsValid : function (str, format) {

            let result = false;

            try {

                result = isValid(this._dateStringToDate(str, format, false));

            } catch (e) {}

            return result;

        },
        _dateGetStandardDate : function () {

            return this._dtcoreGetStandardDate();

        },
        _dateParseRelativeDateToObj : function (val) {

            return this._dtcoreParseRelativeToObj('date', val);

        },
        _dateIsRelativeDate : function (val) {

            return this._dtcoreIsRelative('date', val);

        },
        _dateGetRelativeDate : function (relativeDate) {

            return this._dtcoreGetRelativeObj('date', relativeDate);

        },
        _dateGetRelativeDateString : function (relativeDate, format) {

            return formatDate(this._dateGetRelativeDate(relativeDate), format);

        }
    }
};

export default Dates;
