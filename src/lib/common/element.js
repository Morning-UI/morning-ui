import extend                       from 'extend';

export default (Vue, morning) => Vue.extend({
    computed : {
        _conf : function () {

            return {};

        }
    },
    data : function () {

        let data = {};

        data.isElement = true;
        data.uiid = this.morning._uiid++;
        data.data = {};
        data.conf = {};

        return data;

    },
    methods : {
        getConf : function (name) {

            let conf = extend(true, {}, this.conf);

            if (typeof name === 'string') {

                return conf[name];

            }
    
            return conf;

        },
        _getColorShortName : function (name) {

            return morning._colorShortName[name];

        }
    },
    beforeCreate : function () {

        this.Vue = Vue;
        this.morning = morning;

    },
    created : function () {

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

    }
});
