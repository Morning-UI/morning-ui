// import extend                       from 'extend';
export default (Vue, morning) => Vue.extend({
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
                'apparent'
            ].indexOf(value) !== -1)

        }
    },
    computed : {
        _conf : function () {

            return {};

        }
    },
    data : function () {

        let data = {};

        data.isUI = true;
        data.uiid = this.morning._uiid++;
        data.data = {};
        data.conf = {};

        data.sizeClass = '';
        data.colorClass = '';
        data.stateClass = '';

        return data;

    },
    methods : {
        getConf : function (name) {

            let conf = extend(true, {}, this.conf);

            if (typeof name === 'string') {

                return conf[name];

            }
    
            return conf;

        }
    },
    beforeCreate : function () {

        this.Vue = Vue;
        this.morning = morning;

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
                
                this.colorClass = `co-${val}`;

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

        this.$watch('_conf', val => {

            this.conf = Object.assign({}, this.conf, val);

        }, {
            immediate : true,
            deep : true
        });

        this.$emit('created');

    },
    mounted : function () {

        this.morning.map[this.uiid] = this;
        this.$el._vm = this;

        this.$emit('mounted');

    },
    beforeUpdate : function () {

        this.$emit('before-update');

    },
    updated : function () {

        this.$el._vm = this;
        this.$emit('updated');

    },
    beforeDestroy : function () {

        this.$emit('before-destroy');

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
