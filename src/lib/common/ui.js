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
                'neutral-1',
                'neutral-2',
                'neutral-3',
                'neutral-4',
                'neutral-5',
                'neutral-6',
                'neutral-7',
                'neutral-8',
                'neutral-9',
                'neutral-10',
                'neutral-11',
                'black',
                'white',
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

            this.conf = Object.assign({}, this.conf, {
                size : val
            });

            if (val === undefined) {

                this.sizeClass = '';
            
            } else {
                
                this.sizeClass = `si-${val}`;

            }

        }, {
            immediate : true
        });

        this.$watch('color', val => {

            this.conf = Object.assign({}, this.conf, {
                color : val
            });

            if (val === undefined) {

                this.colorClass = '';
            
            } else {
                
                this.colorClass = `co-${this._getColorShortName(val)}`;

            }

        }, {
            immediate : true
        });

        this.$watch('state', val => {

            this.conf = Object.assign({}, this.conf, {
                state : val
            });

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
