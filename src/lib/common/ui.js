export default Elements => Elements.extend({
    props : {
        size : {
            type : String,
            default : undefined,
            validator : value => ([
                'xxl',
                'xl',
                'l',
                'm',
                's',
                'xs',
                'xxs'
            ].indexOf(value) !== -1)
        },
        color : {
            type : String,
            default : undefined,
            validator : value => ([
                'theme',
                'light-theme',
                'dark-theme',
                'success',
                'warning',
                'danger',
                'primary',
                'minor',
                'info',
                'black',
                'light-black',
                'extra-light-black',
                'blue',
                'light-blue',
                'extra-light-blue',
                'silver',
                'light-silver',
                'extra-light-silver',
                'gray',
                'light-gray',
                'white'
            ].indexOf(value) !== -1)
        },
        state : {
            type : String,
            default : undefined,
            validator : value => ([
                'normal',
                'hover',
                'active',
                'disabled',
                'readonly',
                'apparent'
            ].indexOf(value) !== -1)

        }
    },
    data : function () {

        let data = {};

        data.isUI = true;
        data.sizeClass = '';
        data.colorClass = '';
        data.stateClass = '';

        return data;

    },
    created : function () {

        this.$watch('size', val => {

            this.conf.size = val;

            if (val === undefined) {

                this.sizeClass = '';
            
            } else {
                
                this.sizeClass = `si-${val}`;

            }

        }, {
            immediate : true
        });

        this.$watch('color', val => {

            this.conf.color = val;

            if (val === undefined) {

                this.colorClass = '';
            
            } else {
                
                this.colorClass = `co-${this._getColorShortName(val)}`;

            }

        }, {
            immediate : true
        });

        this.$watch('state', val => {

            this.conf.state = val;

            if (val === undefined) {

                this.stateClass = '';
            
            } else {
                
                this.stateClass = `st-${val}`;

            }

        }, {
            immediate : true
        });

    }
});
