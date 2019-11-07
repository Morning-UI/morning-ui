<template>
    <mor-slider
        :_uiid="uiid"
        :class="[formClass, sizeClass, stateClass, moreClass]"

        :form-name="formName"
        :form-note="formNote"
        :form-key="formKey"
        :group="group"
        :hide-name="hideName"
        :clearable="clearable"
        :_errorMessage="_errorMessage"
        :max="max"
        :min="min"
        :step="step"
        :show-tip="showTip"
        :tip-formatter="tipFormatter"
        :prepend="prepend"
        :append="append"
        :show-point="showPoint"
        :mark-range="markRange"
        :show-counter="showCounter"
    >

    <!-- <div class="left-point"></div> -->
    <div class="form-name" v-if="!conf.hideName && !!conf.formName">{{conf.formName}}</div>
    <div class="form-note" v-if="!!conf.formNote">{{conf.formNote}}</div>

    <div class="form-body">
        <div class="prepend" v-if="hasPrepend" v-html="conf.prepend"></div>
        
        <div class="wrap" :class="{'droping' : data.droping}">
            <div
                class="track"

                @click="_trackClick($event)"
            >
                <ul class="points">
                    <li
                        v-for="(i, index) in data.pointNum"
                        :key="index"
                        :style="{left : `${i * data.pointWidth}px`}"
                    ></li>
                </ul>
                <ul class="marks">
                    <li
                        v-for="(mark, index) in marks"
                        :key="index"
                        :style="[{
                            left : `${(mark.start - conf.min) / range * data.$track.clientWidth}px`,
                            width : `${(mark.end - mark.start) / range * data.$track.clientWidth}px`
                        }, _genMarkBackground(mark.color)]"
                        :class="{
                            [`co-${morning._colorShortName[mark.color]}`] : true
                        }"
                    ></li>
                </ul>
                <div
                    class="selected-line"
                    :style="{
                        'left' : `${startEndReal.start}px`,
                        'width' : `${startEndReal.end - startEndReal.start}px`
                    }"
                >

                </div>
                <div
                    class="main-slider"
                    :id="'ui-slider-tip-'+this.uiid"
                    :style="{
                        'left' : `${startEndReal.end}px`
                    }"

                    @mousedown="_sliderMousedown(true, $event)"
                ></div>
                <morning-tip
                    :target="'#ui-slider-tip-'+this.uiid"
                    :ref="'ui-slider-tip-'+this.uiid"
                    color="neutral-10"
                    trigger="method"
                    offset="0, 0"
                >{{conf.tipFormatter(data.end)}}</morning-tip>
                <!-- <div class="sub-slider"></div> -->
            </div>

            <div class="counter" v-if="conf.showCounter">
                <morning-counter
                    :step="conf.step"
                    :max="conf.max"
                    :min="conf.min"
                    v-model="data.value"
                ></morning-counter>
            </div>

       <!--  <div class="text-bar">
            
        </div> -->

        <!-- <div class="right-point"></div> -->
        </div>

        <div class="append" v-if="hasAppend" v-html="conf.append"></div>
    </div>

    <div class="error-message">{{conf._errorMessage}}</div>
    <morning-link v-if="conf.clearable" color="minor" @emit="_clean" class="cleanbtn">清空</morning-link>

    </mor-slider>
</template>
 
<script>
import color                        from 'color';
import getDivisors                  from 'get-divisors/dist/getDivisors.js';
import GlobalEvent                  from 'Utils/GlobalEvent';

const clickTipHideTime = 1000;
const minPointSpacing = 20;
const defaultMax = 100;
const returnValueFn = value => value;

export default {
    origin : 'Form',
    name : 'slider',
    mixins : [GlobalEvent],
    props : {
        max : {
            type : Number,
            default : defaultMax
        },
        min : {
            type : Number,
            default : 0
        },
        step : {
            type : Number,
            default : 1,
            validator : (value => (value > 0))
        },
        showTip : {
            type : Boolean,
            default : true
        },
        tipFormatter : {
            type : Function,
            default : returnValueFn
        },
        prepend : {
            type : String,
            default : ''
        },
        append : {
            type : String,
            default : ''
        },
        showPoint : {
            type : Boolean,
            default : false
        },
        markRange : {
            type : Array,
            default : (() => [])
        },
        showCounter : {
            type : Boolean,
            default : false
        }
    },
    computed : {
        _conf : function () {

            return {
                max : this.max,
                min : this.min,
                step : this.step,
                showTip : this.showTip,
                tipFormatter : this.tipFormatter,
                prepend : this.prepend,
                append : this.append,
                showPoint : this.showPoint,
                markRange : this.markRange,
                showCounter : this.showCounter
            };

        },
        hasPrepend : function () {

            return (this.conf.prepend.length > 0);

        },
        hasAppend : function () {

            return (this.conf.append.length > 0);

        },
        moreClass : function () {

            return {
                'has-prepend' : this.hasPrepend,
                'has-append' : this.hasAppend,
                'hide-part-points' : this.data.hidePartPoints,
                'has-counter' : this.conf.showCounter
            };

        },
        range : function () {

            return this.conf.max - this.conf.min;

        },
        startEndReal : function () {

            if (!this.data.$track) {

                return {
                    start : 0,
                    end : 0
                };

            }

            if (!this.data.forceUpdateEmiter) {

                return {};

            }

            let fullwidth = this.data.$track.clientWidth;

            return {
                start : ((this.data.start - this.conf.min) / this.range) * fullwidth,
                end : ((this.data.end - this.conf.min) / this.range) * fullwidth
            };

        },
        marks : function () {

            if (!this.data.$track) {

                return [];

            }

            let marks = [];
            let defaultMark = {
                start : 0,
                end : 0,
                color : 'neutral-4'
            };

            for (let mark of this.conf.markRange) {

                if (mark instanceof Array &&
                    mark.length === 2 &&
                    typeof mark[0] === 'number' &&
                    typeof mark[1] === 'number' &&
                    mark[1] > mark[0]) {

                    if (mark[1] > this.conf.max) {

                        mark[1] = this.conf.max;

                    }

                    if (mark[0] < this.conf.min) {

                        mark[0] = this.conf.min;

                    }

                    marks.push(Object.assign({}, defaultMark, {
                        start : mark[0],
                        end : mark[1]
                    }));

                } else if (typeof mark === 'object' &&
                    typeof mark.start === 'number' &&
                    typeof mark.end === 'number' &&
                    mark.end > mark.start
                ) {

                    if (mark.end > this.conf.max) {

                        mark.end = this.conf.max;

                    }

                    if (mark.start < this.conf.min) {

                        mark.start = this.conf.min;

                    }

                    marks.push(Object.assign({}, defaultMark, mark));

                }

            }

            return marks;

        }
    },
    data : function () {

        return {
            data : {
                start : 0,
                end : 0,
                per : 0,
                droping : false,
                dropMain : false,
                lastDropX : 0,
                overMaxX : -1,
                overMinX : -1,
                clickTipHideTimeout : null,
                pointNum : 0,
                pointWidth : 0,
                hidePartPoints : false,
                $track : null,
                $tip : null,
                forceUpdateEmiter : 1
            }
        };

    },
    methods : {
        _valueFilter : function (value) {

            value = Number(value);

            if (isNaN(value)) {

                value = this.conf.min;

            }

            if (value < this.conf.min) {

                value = this.conf.min;

            }

            if (value > this.conf.max) {

                value = this.conf.max;

            }

            return value;

        },
        _refreshPoints : function () {

            if (!this.conf.showPoint) {

                this.data.pointNum = 0;
                this.data.pointWidth = 0;

                return;

            }

            let fullwidth = this.data.$track.clientWidth;
            let pointNum = this.range / this.conf.step;
            let maxPoints = Math.floor(this.data.$track.clientWidth / minPointSpacing);

            if (pointNum > maxPoints) {

                pointNum = getDivisors(pointNum);

                while (pointNum[pointNum.length - 1] > maxPoints) {

                    pointNum.pop();

                }

                pointNum = pointNum.pop();

                this.data.hidePartPoints = true;

            } else {

                this.data.hidePartPoints = false;

            }

            // 若pointNum为1不显示
            if (this.data.hidePartPoints &&
                pointNum < 1) {

                this.data.pointWidth = 0;
                this.data.pointNum = 0;

                return;

            }

            this.data.pointWidth = fullwidth / pointNum;
            this.data.pointNum = pointNum - 1;

        },
        _genMarkBackground : function (colorString) {

            let isVaild = false;

            try {

                color(colorString);
                isVaild = true;

            } catch (e) {}

            return isVaild ? {
                background : colorString
            } : {};
        
        },
        _setPer : function (per, offset = false) {

            if (offset) {

                this.data.per += per;

            } else {

                this.data.per = per;

            }

            if (this.data.per > 1) {

                this.data.per = 1;

            } else if (this.data.per < 0) {

                this.data.per = 0;

            }

            let rval = (this.range * this.data.per) + (+this.conf.min);
            let rleft = rval % this.conf.step;

            this.data.start = this.conf.min;

            if (rleft < (this.conf.step / 2)) {

                rval -= (rval % this.conf.step);

            } else {

                rval += (this.conf.step - (rval % this.conf.step));

            }

            if (rval > this.conf.max) {

                rval = this.conf.max;

            } else if (rval < this.conf.min) {

                rval = this.conf.min;

            }

            this.data.end = rval;

        },
        _trackClick : function (evt) {

            if (this.conf.state === 'disabled' ||
                this.conf.state === 'readonly') {

                return;

            }

            if (this.data.droping) {

                return;

            }

            let curval = evt.offsetX;
            let fullwidth = this.data.$track.clientWidth;

            this._setPer(curval / fullwidth);

            if (this.conf.showTip) {
                
                this.data.$tip.show();

                this.Vue.nextTick(() => {

                    this.data.$tip.position();
    
                });

                clearTimeout(this.data.clickTipHideTimeout);
                this.data.clickTipHideTimeout = setTimeout(() => {

                    this.data.$tip.hide();

                }, clickTipHideTime);

            }

        },
        _sliderMousedown : function (main, evt) {

            if (this.conf.state === 'disabled' ||
                this.conf.state === 'readonly') {

                return;

            }

            if (this.data.droping) {

                return;

            }

            if (this.conf.showTip) {
                
                this.data.$tip.show();

            }

            this.data.droping = true;
            this.data.dropMain = main;
            this.data.lastDropX = evt.pageX;
            this._globalEventAdd('mousemove', '_sliderMousemove');
            this._globalEventAdd('mouseup', '_sliderMouseup');

        },
        _sliderMousemove : function (evt) {

            let moveX = evt.pageX - this.data.lastDropX;
            let fullwidth = this.data.$track.clientWidth;
            let offset = moveX / fullwidth;

            if (this.data.overMaxX > -1 && evt.pageX > this.data.overMaxX) {

                return;

            }

            if (this.data.overMinX > -1 && evt.pageX < this.data.overMinX) {

                return;

            }

            this.data.lastDropX = evt.pageX;
            this._setPer(offset, true);

            if (this.data.per === 1) {

                this.data.overMaxX = evt.pageX;

            } else if (this.data.per === 0) {

                this.data.overMinX = evt.pageX;

            } else {

                this.data.overMaxX = -1;
                this.data.overMinX = -1;

            }

        },
        _sliderMouseup : function () {

            this._globalEventRemove('mousemove', '_sliderMousemove');
            this._globalEventRemove('mouseup', '_sliderMouseup');

            if (this.conf.showTip) {
                
                this.data.$tip.hide();

            }

            setTimeout(() => {
    
                this.data.droping = false;

            });

        },
        _forceUpdate : function () {

            this.data.forceUpdateEmiter++;

        },
        _updatePer : function () {

            if (this.data.droping && this.conf.showTip) {

                this.data.$tip.position();

            }

            if (!this.data.droping) {
                
                this._setPer(((this.get() || this.conf.min) - this.conf.min) / this.range);

            }

        }
    },
    created : function () {},
    mounted : function () {

        this.$watch('conf.min', () => {

            if (this.data.start < this.conf.min) {

                this.data.start = this.conf.min;

            }

            if (this.data.end < this.conf.min) {

                this.data.end = this.conf.min;

            }

            this._updatePer();

        }, {
            immediate : true
        });

        this.$watch('conf.max', () => {

            if (this.data.start > this.conf.max) {

                this.data.start = this.conf.max;

            }

            if (this.data.end > this.conf.max) {

                this.data.end = this.conf.max;

            }

            this._updatePer();

        }, {
            immediate : true
        });

        this.data.$tip = this.$refs[`ui-slider-tip-${this.uiid}`];
        this.data.per = ((this.data.end - this.data.start) / this.range);
        this.data.$track = this.$el.querySelector('.track');
        this._setPer(((this.get() || this.conf.min) - this.conf.min) / this.range);

        this.$watch('data.end', () => {

            this._set(this.data.end);

        });

        this.$watch('conf.showPoint', () => {

            this.Vue.nextTick(() => {

                this._refreshPoints();

            });

        }, {
            immediate : true
        });

        this.$on('value-change', this._updatePer);

    }
};
</script>
