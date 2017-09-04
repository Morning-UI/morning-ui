import Vue                          from 'vue';

let sizeSet = [
    'xxl',
    'xl',
    'l',
    'm',
    's',
    'xs',
    'xxs'
];

let styleSet = [
    'theme',
    'lightTheme',
    'darkTheme',
    'success',
    'warning',
    'danger',
    'primary',
    'minor',
    'info',
    'black',
    'lightBlack',
    'extraLightBlack',
    'blue',
    'lightBlue',
    'extraLightBlue',
    'silver',
    'lightSilver',
    'extraLightSilver',
    'gray',
    'lightGray',
    'white'
];

let stateSet = [
    'normal',
    'hover',
    'active',
    'disabled',
    'apparent',
    'loading',
    'processing'
];

let props = {};

for (let key of [...sizeSet, ...styleSet, ...stateSet]) {

    props[key] = {
        type : Boolean,
        default : false
    };

}

let UI = Vue.extend({
    props : props,
    watch : {
        'conf.size' : function (val) {

            if (val === null) {

                this.sizeClass = '';
            
            } else {
                
                this.sizeClass = `si-${val}`;

            }

        },
        'conf.style' : function (val) {

            if (val === null) {

                this.styleClass = '';
            
            } else {
                
                this.styleClass = `sy-${val}`;

            }

        },
        'conf.state' : function (val) {

            if (val === null) {

                this.stateClass = '';
            
            } else {
                
                this.stateClass = `st-${val}`;

            }

        }
    },
    created : function () {

        this.initSize();
        this.initStyle();
        this.initState();

    },
    methods : {
        initSize : function () {

            let size = null;

            for (let key of sizeSet) {

                if (this.conf[key] === true) {

                    size = key;
                    break;

                }

            }

            this.conf.size = size;

        },
        initStyle : function () {

            let style = null;

            for (let key of styleSet) {

                if (this.conf[key] === true) {

                    style = key;
                    break;

                }

            }

            this.conf.style = style;

        },
        initState : function () {

            let state = null;

            for (let key of stateSet) {

                if (this.conf[key] === true) {

                    state = key;
                    break;

                }

            }

            this.conf.state = state;

        }
    },
    data : function () {

        let data = {};

        data.uiid = window.morning._uiid++;
        data.conf = {};

        for (let key of [...sizeSet, ...styleSet, ...stateSet]) {

            data.conf[key] = this[key];

        }

        data.conf.size = null;
        data.conf.style = null;
        data.conf.state = null;

        data.sizeClass = '';
        data.styleClass = '';
        data.stateClass = '';

        return data;

    },
    mounted : function () {

        window.morning.map[this.uiid] = this;

    },
    destroyed : function () {

        delete window.morning.map[this.uiid];

    }
});

export default UI;
