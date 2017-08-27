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
        success : Boolean,
        warning : Boolean,
        danger : Boolean,
        minor : Boolean,
        light : Boolean,
        deep : Boolean,
        info : Boolean
    },
    watch : {
        size : function (val, oval) {

            this.sizeClass[`si-${oval}`] = false;
            this.sizeClass[`si-${val}`] = true;

        },
        style : function (val, oval) {

            if (oval !== null) {

                this.styleClass[`sy-${oval}`] = false;

            }

            if (val !== null) {
                
                this.styleClass[`sy-${val}`] = true;
            
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
        success : 'syncStyle',
        warning : 'syncStyle',
        danger : 'syncStyle',
        minor : 'syncStyle',
        light : 'syncStyle',
        deep : 'syncStyle',
        info : 'syncStyle'
    },
    created : function () {

        this.syncSize();
        this.syncStyle();

    },
    mounted : function () {

        window.morning.map[this.uiid] = this;

    },
    destroyed : function () {

        delete window.morning.map[this.uiid];

    },
    methods : {
        syncSize : function () {
            
            let size = 'm';

            if (this.m) {

                size = 'm';
            
            } else if (this.l) {

                size = 'l';
            
            } else if (this.s) {

                size = 's';
            
            } else if (this.xl) {

                size = 'xl';
            
            } else if (this.xs) {

                size = 'xs';
            
            } else if (this.xxl) {

                size = 'xxl';
            
            } else if (this.xxs) {

                size = 'xxs';
            
            }

            this.size = size;

        },
        syncStyle : function () {

            let style = null;

            if (this.theme) {

                style = 'theme';
            
            } else if (this.success) {

                style = 'success';
            
            } else if (this.warning) {

                style = 'warning';
            
            } else if (this.danger) {

                style = 'danger';
            
            } else if (this.minor) {

                style = 'minor';
            
            } else if (this.light) {

                style = 'light';
            
            } else if (this.deep) {

                style = 'deep';
            
            } else if (this.info) {

                style = 'info';
            
            }

            this.style = style;

        }
    },
    data : function () {

        return {
            size : 'm',
            sizeClass : {
                'si-xxl' : false,
                'si-xl' : false,
                'si-l' : false,
                'si-m' : true,
                'si-s' : false,
                'si-xs' : false,
                'si-xxs' : false
            },
            style : 'theme',
            styleClass : {
                'sy-theme' : true,
                'sy-success' : false,
                'sy-warning' : false,
                'sy-danger' : false,
                'sy-minor' : false,
                'sy-light' : false,
                'sy-deep' : false,
                'sy-info' : false
            },
            uiid : window.morning._uiid++
        };

    }
    // watch : {
    //     size : function (val) {
    //         this.$attrs.size = val;
    //     }
    // },
    // props : {
    //     m : String,
    //     l : String
    // },
    // data : function () {

    //     var size = 'm';

    //     console.log('123', this.m, this.l);
                
    //     if ( this.m === '' ) {
    //         size = 'm';
    //     } else if ( this.l === '' ) {
    //         size = 'l';
    //     }
        
    //     return {
    //         uiid : window.morning._uiid++,
    //         // size : size,
    //         size : {
    //             m : 1,
    //             l : 0,
    //             xl : 0
    //         }
    //     };

    // }
});

export default UI;
