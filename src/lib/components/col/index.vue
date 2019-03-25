<template>
    <div
        :_uiid="uiid"
        :class="[moreClass]"

        :span="span"
        :offset="offset"
        :xs="xs"
        :s="s"
        :m="m"
        :l="l"
        :xl="xl"
    >
        <slot></slot>
    </div>
</template>
 
<script>
const colNum = 24;

export default {
    origin : 'Element',
    name : 'col',
    props : {
        span : {
            type : Number,
            default : 0,
            validator : (value => (value >= 0 && value <= colNum))
        },
        offset : {
            type : Number,
            default : 0,
            validator : (value => (value >= 0 && value < colNum))
        },
        push : {
            type : Number,
            default : 0,
            validator : (value => (value >= 0 && value < colNum))
        },
        pull : {
            type : Number,
            default : 0,
            validator : (value => (value >= 0 && value < colNum))
        },
        xs : {
            type : Object,
            default : (() => ({}))
        },
        s : {
            type : Object,
            default : (() => ({}))
        },
        m : {
            type : Object,
            default : (() => ({}))
        },
        l : {
            type : Object,
            default : (() => ({}))
        },
        xl : {
            type : Object,
            default : (() => ({}))
        }
    },
    computed : {
        _conf : function () {

            return {
                span : this.span,
                offset : this.offset,
                push : this.push,
                pull : this.pull,
                xs : this.xs,
                s : this.s,
                m : this.m,
                l : this.l,
                xl : this.xl
            };

        },
        moreClass : function () {

            let classes = {};

            if (Object.keys(this.conf.xs).length === 0 &&
                Object.keys(this.conf.s).length === 0 &&
                Object.keys(this.conf.m).length === 0 &&
                Object.keys(this.conf.l).length === 0 &&
                Object.keys(this.conf.xl).length === 0) {

                if (this.conf.span === 0) {

                    classes.col = true;

                } else {

                    classes[`col-${this.conf.span}`] = true;

                }

            }

            if (this.conf.offset > 0) {

                classes[`offset-${this.conf.offset}`] = true;

            }

            if (this.conf.push > 0) {

                classes[`push-${this.conf.push}`] = true;

            }

            if (this.conf.pull > 0) {

                classes[`pull-${this.conf.pull}`] = true;

            }

            this._responsive('xs', this.conf.xs, classes);
            this._responsive('s', this.conf.s, classes);
            this._responsive('m', this.conf.m, classes);
            this._responsive('l', this.conf.l, classes);
            this._responsive('xl', this.conf.xl, classes);

            return classes;

        }
    },
    data : function () {

        return {
            data : {}
        };

    },
    methods : {
        _responsive : function (size, options, classes) {

            let attrs = [
                'span',
                'offset',
                'push',
                'pull'
            ];
            let attrMap = {
                span : 'col',
                offset : 'offset',
                push : 'push',
                pull : 'pull'
            };

            for (let key in options) {

                if (attrs.indexOf(key) !== -1) {

                    classes[`${size}-${attrMap[key]}-${options[key]}`] = true;

                }

            }

        }
    },
    created : function () {},
    mounted : function () {},
    destroyed : function () {}
};
</script>
