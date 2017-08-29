import Vue                          from 'vue';

let UI = Vue.extend({
    props : {
        xxl : Boolean,
        xl : Boolean,
        l : Boolean,
        m : Boolean,
        s : Boolean,
        xs : Boolean,
        xxs : Boolean,
        theme : Boolean,
        lightTheme : Boolean,
        darkTheme : Boolean,
        success : Boolean,
        warning : Boolean,
        danger : Boolean,
        primary : Boolean,
        minor : Boolean,
        info : Boolean,
        black : Boolean,
        lightBlack : Boolean,
        extraLightBlack : Boolean,
        blue : Boolean,
        lightBlue : Boolean,
        extraLightBlue : Boolean,
        silver : Boolean,
        lightSilver : Boolean,
        extraLightSilver : Boolean,
        gray : Boolean,
        lightGray : Boolean,
        white : Boolean,
        normal : Boolean,
        hover : Boolean,
        active : Boolean,
        disabled : Boolean,
        apparent : Boolean,
        loading : Boolean,
        processing : Boolean
    },
    watch : {
        size : function (val) {

            if (val === null) {

                this.sizeClass = '';
            
            } else {
                
                this.sizeClass = `si-${val}`;

            }

        },
        style : function (val) {

            if (val === null) {

                this.styleClass = '';
            
            } else {
                
                this.styleClass = `sy-${val}`;

            }

        },
        state : function (val) {

            if (val === null) {

                this.stateClass = '';
            
            } else {
                
                this.stateClass = `st-${val}`;

            }

        },
        xxl : 'syncSize',
        xl : 'syncSize',
        l : 'syncSize',
        m : 'syncSize',
        s : 'syncSize',
        xs : 'syncSize',
        xxs : 'syncSize',
        theme : 'syncStyle',
        lightTheme : 'syncStyle',
        darkTheme : 'syncStyle',
        success : 'syncStyle',
        warning : 'syncStyle',
        danger : 'syncStyle',
        primary : 'syncStyle',
        minor : 'syncStyle',
        info : 'syncStyle',
        black : 'syncStyle',
        lightBlack : 'syncStyle',
        extraLightBlack : 'syncStyle',
        blue : 'syncStyle',
        lightBlue : 'syncStyle',
        extraLightBlue : 'syncStyle',
        silver : 'syncStyle',
        lightSilver : 'syncStyle',
        extraLightSilver : 'syncStyle',
        gray : 'syncStyle',
        lightGray : 'syncStyle',
        white : 'syncStyle',
        normal : 'syncState',
        hover : 'syncState',
        active : 'syncState',
        disabled : 'syncState',
        apparent : 'syncState',
        loading : 'syncState',
        processing : 'syncState'
    },
    created : function () {

        this.syncSize();
        this.syncStyle();
        this.syncState();

    },
    mounted : function () {

        window.morning.map[this.uiid] = this;

    },
    destroyed : function () {

        delete window.morning.map[this.uiid];

    },
    methods : {
        syncSize : function () {

            let size = null;
            let set = [
                'm',
                'l',
                's',
                'xl',
                'xs',
                'xxl',
                'xxs'
            ];

            for (let val of set) {

                if (this[val]) {

                    size = val;
                    break;

                }

            }

            this.size = size;

        },
        syncStyle : function () {

            let style = null;
            let set = [
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

            for (let val of set) {

                if (this[val]) {

                    style = val;
                    break;

                }

            }

            this.style = style;

        },
        syncState : function () {

            let state = null;
            let set = [
                'normal',
                'hover',
                'active',
                'disabled',
                'apparent',
                'loading',
                'processing'
            ];

            for (let val of set) {

                if (this[val]) {

                    state = val;
                    break;

                }

            }

            this.state = state;

        }
    },
    data : function () {

        return {
            size : null,
            sizeClass : '',
            style : null,
            styleClass : '',
            state : null,
            stateClass : '',
            uiid : window.morning._uiid++
        };

    }
});

export default UI;
