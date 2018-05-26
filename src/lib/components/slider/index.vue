<template>
    <mor-slider
        :_uiid="uiid"
        :class="[formClass, stateClass]"

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
        :is-range="isRange"
        :show-input="showInput"
        :start-end-text="startEndText"
        :tip-formatter="tipFormatter"
        :show-point="showPoint"
        :marks="marks"
        :vertical="vertical"
    >

    <!-- <div class="left-point"></div> -->
    <div class="note" v-if="!conf.hideName">{{conf.formName}}</div>
    
    <div class="wrap" :class="{'droping' : data.droping}">
        <div
            class="track"

            @click="_trackClick($event)"
        >
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
                :style="{
                    'left' : `${startEndReal.end}px`
                }"

                @mousedown="_sliderMousedown(true, $event)"
            ></div>
            <!-- <div class="sub-slider"></div> -->
        </div>

   <!--  <div class="text-bar">
        
    </div> -->

    <!-- <div class="right-point"></div> -->
    </div>

    <morning-link v-if="conf.clearable" color="minor" @emit="_clean" class="cleanbtn">清空</morning-link>

    </mor-slider>
</template>
 
<script>
import GlobalEvent                  from 'Utils/GlobalEvent';

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
            default : 1
        }
    },
    computed : {
        _conf : function () {

            return {
                max : this.max,
                min : this.min,
                step : this.step
            };

        },
        startEndReal : function () {

            if (!this.data.$track) {

                return {
                    start : 0,
                    end : 0
                };

            }
            
            let fullval = this.data.$track.clientWidth;

            return {
                start : (this.data.start / this.conf.max) * fullval,
                end : (this.data.end / this.conf.max) * fullval
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
                $track : null
            }
        };

    },
    methods : {
        _valueFilter : function (value) {

            return value;

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

            let rval = ((this.conf.max - this.conf.min) * this.data.per);
            let rleft = rval % this.conf.step;

            this.data.start = 0;

            if (rleft < (this.conf.step / 2)) {
            
                rval = rval - rval % this.conf.step;

            } else {

                rval = rval + (this.conf.step - rval % this.conf.step);

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

            let curval = evt.layerX;
            let fullval = this.data.$track.clientWidth;

            this._setPer(curval / fullval);

        },
        _sliderMousedown : function (main, evt) {

            if (this.conf.state === 'disabled' ||
                this.conf.state === 'readonly') {

                return;

            }

            if (this.data.droping) {

                return;

            }

            this.data.droping = true;
            this.data.dropMain = main;
            this.data.lastDropX = evt.pageX;
            this._globalEventAdd('mousemove', '_sliderMousemove');
            this._globalEventAdd('mouseup', '_sliderMouseup');

        },
        _sliderMousemove : function (evt) {

            let moveX = evt.pageX - this.data.lastDropX;
            let fullval = this.data.$track.clientWidth;
            let offset = moveX / fullval;

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
        _sliderMouseup : function (evt) {

            this._globalEventRemove('mousemove', '_sliderMousemove');
            this._globalEventRemove('mouseup', '_sliderMouseup');

            setTimeout(() => {
    
                this.data.droping = false;

            });

        }
    },
    created : function () {},
    mounted : function () {

        this.data.per = ((this.data.end - this.data.start) / this.conf.max);
        this.data.$track = this.$el.querySelector('.track');
        this._setPer((this.get() || 0) / this.conf.max);

        this.$watch('data.end', () => {

            this._set(this.data.end);

        });

        this.$on('value-change', () => {

            this._setPer((this.get() || 0) / this.conf.max);

        });


    }
};
</script>

<style lang="less" src="./index.less"></style>
