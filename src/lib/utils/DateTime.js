import DateTimeCore                 from './DateTimeCore';

let DateTime = {
    mixins : [DateTimeCore],
    data : function () {

        return {};

    },
    methods : {
        _dtParseRelativeDatetimeToObj : function (val) {

            return this._dtcoreParseRelativeToObj('datetime', val);

        },
        _dtIsRelativeDatetime : function (val) {

            return this._dtcoreIsRelative('datetime', val);

        },
        _dtGetRelativeDatetime : function (relativeDate) {

            return this._dtcoreGetRelativeObj('datetime', relativeDate);

        }
    }
};

export default DateTime;
