<template>
    <mor-numeral
        :_uiid="uiid"
        :class="[]"

        :number="number"
        :format="format"
        :currency="currency"
        :abbreviations="abbreviations"
    >
    
        {{numberString}}

    </mor-numeral>
</template>
 
<script>
import numeral                      from 'numeral';

const defaultAbbreviations = {
    thousand: 'k',
    million: 'm',
    billion: 'b',
    trillion: 't'
};

export default {
    origin : 'UI',
    name : 'numeral',
    props : {
        number : {
            type : [String, Number],
            default : 0
        },
        format : {
            type : String,
            default : '0,0'
        },
        currency : {
            type : String,
            default : '¥'
        },
        abbreviations : {
            type : Object,
            default : () => (Object.assign({}, defaultAbbreviations))
        }
    },
    computed : {
        _conf : function () {

            return {
                number : this.number,
                format : this.format,
                currency : this.currency,
                abbreviations : this.abbreviations
            };

        },
        numberString : function () {

            if (typeof this.data.number !== 'object') {

                return 0;

            }

            return this.data.number.format(this.conf.format);

        }
    },
    data : function () {

        return {
            data : {
                localeId : 0,
                number : 0
            }
        };

    },
    methods : {
        _refreshLocale : function () {

            this.data.localeId++;

            numeral.register('locale', `custom-${this.uiid}-${this.data.localeId}`, {
                delimiters: {
                    thousands: ',',
                    decimal: '.'
                },
                abbreviations: Object.assign({}, defaultAbbreviations, this.conf.abbreviations),
                currency: {
                    symbol: this.conf.currency
                }
            });

            numeral.locale(`custom-${this.uiid}-${this.data.localeId}`);
            this.data.number = numeral(this.conf.number);

        }
    },
    mounted : function () {

        this._refreshLocale();
        this.$watch('conf.currency', this._refreshLocale);
        this.$watch('conf.abbreviations', this._refreshLocale);

    }
};
</script>
