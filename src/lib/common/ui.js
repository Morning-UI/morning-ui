import Vue                          from 'vue';
import extend                       from 'extend';

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

let morning;
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
    methods : {
        _initSize : function () {

            let size = null;

            for (let key of sizeSet) {

                if (this.conf[key] === true) {

                    size = key;
                    break;

                }

            }

            this.conf.size = size;

        },
        _initStyle : function () {

            let style = null;

            for (let key of styleSet) {

                if (this.conf[key] === true) {

                    style = key;
                    break;

                }

            }

            this.conf.style = style;

        },
        _initState : function () {

            let state = null;

            for (let key of stateSet) {

                if (this.conf[key] === true) {

                    state = key;
                    break;

                }

            }

            this.conf.state = state;

        },
        setConf : function (name, value) {

            if (typeof name === 'object') {

                for (let key of Object.keys(name)) {

                    let val = name[key];

                    this.conf[key] = val;

                }

            } else if (typeof name === 'string') {

                this.conf[name] = value;

            }

            return this;

        },
        getConf : function (name) {

            let conf = extend(true, {}, this.conf);

            if (typeof name === 'string') {

                return conf[name];

            }
    
            return conf;

        }
    },
    data : function () {

        let data = {};

        data.uiid = this.morning._uiid++;
        data.conf = {};
        data.data = {};

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
    beforeCreate : function () {

        this.Vue = Vue;
        this.morning = morning;

    },
    created : function () {

        this._initSize();
        this._initStyle();
        this._initState();
        
        this.$emit('created');

    },
    mounted : function () {

        this.morning.map[this.uiid] = this;
        this.$el._vm = this;

        this.$emit('mounted');

    },
    beforeUpdate : function () {

        this.$emit('beforeUpdate');

    },
    updated : function () {

        this.$el._vm = this;
        this.$emit('updated');

    },
    beforeDestroy : function () {

        this.$emit('beforeDestroy');

    },
    destroyed : function () {

        this.$el.remove();
        delete this.morning.map[this.uiid];

        if (this.$vnode &&
            this.$vnode.data &&
            this.$vnode.data.ref) {
        
            delete this.morning._findCache[this.$vnode.data.ref];
        
        }

    }
});

export default UI;

export let injectMorning = _morning => {

    morning = _morning;

};
