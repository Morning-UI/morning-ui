<template>
    <div
        :_uiid="uiid"
        :class="[moreClass]"
        :style="[data.colStyles]"

        :span="span"
        :offset="offset"
        :push="push"
        :pull="pull"
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
import GlobalEvent                  from 'Utils/GlobalEvent';

/* eslint-disable no-magic-numbers */
const colNum = 24;
const gutterSizeMap = {
    xs : 4,
    s : 8,
    m : 16,
    l : 24,
    xl : 36,
    none : 0
};
const screenWidthMap = {
    xs : [-Infinity, 575.98],
    s : [576, 767.98],
    m : [768, 991.98],
    l : [992, 1199.98],
    xl : [1200, Infinity]
};
/* eslint-enable no-magic-numbers */

export default {
    origin : 'Element',
    name : 'col',
    mixins : [GlobalEvent],
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

            this._responsiveClasses('xs', this.conf.xs, classes);
            this._responsiveClasses('s', this.conf.s, classes);
            this._responsiveClasses('m', this.conf.m, classes);
            this._responsiveClasses('l', this.conf.l, classes);
            this._responsiveClasses('xl', this.conf.xl, classes);

            return classes;

        }
    },
    data : function () {

        return {
            data : {
                colStyles : {},
                parentGridOffWatch : null,
                windowSize : 'm'
            }
        };

    },
    methods : {
        _responsiveClasses : function (size, options, classes) {

            let attrs = [
                'span',
                'offset'
            ];
            let attrMap = {
                span : 'col',
                offset : 'offset'
            };

            for (let key in options) {

                if (attrs.indexOf(key) !== -1) {

                    classes[`${size}-${attrMap[key]}-${options[key]}`] = true;

                }

            }

        },
        _responsiveStyles : function (size, options, styles) {

            let parentGrid = this.$parent.$parent;

            if (parentGrid && parentGrid.uiname === 'grid' && this.data.windowSize === size) {

                for (let key in options) {

                    if (key === 'push' && options.push) {

                        styles.left = `calc((100% + ${gutterSizeMap[parentGrid.conf.gutterSize]}px) / ${options.span} * ${options.push})`;

                    }

                    if (key === 'pull' && options.pull) {

                        styles.left = `calc((100% + ${gutterSizeMap[parentGrid.conf.gutterSize]}px) / ${options.span} * -${options.pull})`;

                    }

                }

            }

        },
        _refreshCurrentWindowSize : function () {

            let screenWidth = window.innerWidth;
            let currentSize = 'm';

            for (let key in screenWidthMap) {

                let screenMinMax = screenWidthMap[key];

                if (screenMinMax[0] <= screenWidth && screenWidth <= screenMinMax[1]) {

                    currentSize = key;

                }

            }

            this.data.windowSize = currentSize;

        },
        _computeStyle : function () {

            let styles = {};
            let parentGrid = this.$parent.$parent;

            if (parentGrid && parentGrid.uiname === 'grid') {

                if (this.conf.push) {

                    styles.left = `calc((100% + ${gutterSizeMap[parentGrid.conf.gutterSize]}px) / ${this.conf.span} * ${this.conf.push})`;

                }

                if (this.conf.pull) {

                    styles.left = `calc((100% + ${gutterSizeMap[parentGrid.conf.gutterSize]}px) / ${this.conf.span} * -${this.conf.pull})`;

                }

            }

            this._refreshCurrentWindowSize();
            this._responsiveStyles('xs', this.conf.xs, styles);
            this._responsiveStyles('s', this.conf.s, styles);
            this._responsiveStyles('m', this.conf.m, styles);
            this._responsiveStyles('l', this.conf.l, styles);
            this._responsiveStyles('xl', this.conf.xl, styles);

            this.data.colStyles = styles;

        }
    },
    created : function () {},
    mounted : function () {

        let parentGrid = this.$parent.$parent;

        this._globalEventAdd('resize', '_computeStyle');
        this.$watch('conf.push', this._computeStyle);
        this.$watch('conf.pull', this._computeStyle);
        this._computeStyle();

        if (parentGrid && parentGrid.uiname === 'grid') {

            this.data.parentGridOffWatch = parentGrid.$watch('conf.gutterSize', this._computeStyle);

        }

    },
    destroyed : function () {

        this._globalEventRemove('resize', '_computeStyle');

        if (this.data.parentGridOffWatch) {
    
            this.data.parentGridOffWatch();

        }

    }
};
</script>
