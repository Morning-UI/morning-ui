<template>
    <mor-slider
        :_uiid="uiid"
        :class="[formClass, stateClass, moreClass]"

        :form-name="formName"
        :form-key="formKey"
        :group="group"
        :default-value="defaultValue"
        :hide-name="hideName"
        :clearable="clearable"
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
    <div class="note" v-if="!conf.hideName">{{conf.formName}}</div>

    <div class="prepend" v-if="hasPrepend" v-html="conf.prepend"></div>
    
    <div class="wrap" :class="{'droping' : data.droping}">
        <div
            class="track"

            @click="_trackClick($event)"
        >
            <ul class="points">
                <li
                    v-for="i in data.pointNum"
                    :style="{left : `${i * data.pointWidth}px`}"
                ></li>
            </ul>
            <ul class="marks">
                <li
                    v-for="mark in conf.markRange"
                    v-if="
                        mark instanceof Array &&
                        mark.length === 2 &&
                        typeof mark[0] === 'number' &&
                        typeof mark[1] === 'number' &&
                        mark[1] > mark[0] &&
                        data.$track
                    "
                    :style="{
                        left : `${(mark[0] - conf.min) / range * data.$track.clientWidth}px`,
                        width : `${(mark[1] - mark[0]) / range * data.$track.clientWidth}px`
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
                color="extra-light-blue"
                trigger="method"
                offset="3px 0"
            >{{conf.tipFormatter(data.end)}}</morning-tip>
            <!-- <div class="sub-slider"></div> -->
        </div>

        <div class="counter" v-if="conf.showCounter">
            <morning-counter
                :step="conf.step"
                :max="conf.max"
                :min="conf.min"
                hide-name
                v-model="data.value"
            ></morning-counter>
        </div>

   <!--  <div class="text-bar">
        
    </div> -->

    <!-- <div class="right-point"></div> -->
    </div>

    <div class="append" v-if="hasAppend" v-html="conf.append"></div>

    <morning-link v-if="conf.clearable" color="minor" @emit="_clean" class="cleanbtn">清空</morning-link>

    </mor-slider>
</template>
 
<script>
import getDivisors                  from 'get-divisors/dist/getDivisors.js';
import GlobalEvent                  from 'Utils/GlobalEvent';

const clickTipHideTime = 1000;
const minPointSpacing = 20;
const returnValueFn = value => value;

export default {
    origin : 'Form',
    name : 'slider',
    mixins : [GlobalEvent],
    props : {
        max : {
            type : Number,
            default : 100
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
            
            let fullwidth = this.data.$track.clientWidth;

            return {
                start : ((this.data.start - this.conf.min) / this.range) * fullwidth,
                end : ((this.data.end - this.conf.min) / this.range) * fullwidth
            };

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
                $tip : null
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

        this.$on('value-change', () => {

            if (this.data.droping && this.conf.showTip) {

                this.data.$tip.position();

            }

            if (!this.data.droping) {
        
                this._setPer(((this.get() || this.conf.min) - this.conf.min) / this.range);

            }

        });

    }
};
</script>

<style lang="less" src="./index.less"></style>
