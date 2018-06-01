<template>
    <mor-colorpicker
        :_uiid="uiid"
        :class="[formClass, stateClass]"

        :form-name="formName"
        :form-key="formKey"
        :group="group"
        :default-value="defaultValue"
        :hide-name="hideName"
        :clearable="clearable"
        :value-type="valueType"
        :allow-alpha="allowAlpha"
    >

    <div
        class="preview"
        @click="togglePicker"
    >
        <div class="alpha-bg-1"></div>
        <div class="alpha-bg-2"></div>
        <div class="alpha-bg-3"></div>
        <div class="alpha-bg-4"></div>
        <div
            class="color"
            :style="{
                'background-color' : '#' + colorWithAlpha
            }"
        ></div>
    </div>

    <div
        class="mo-colorpicker-wrap"
        :class="{
            show : data.showPicker,
            hide : !data.showPicker && !data.first
        }"
    >
        <div class="picker">
            <div
                class="panel"
                :style="{
                    'background-color' : '#' + colorH
                }"
                @mousedown="_pickColor"
            >
                <div class="mask-white"></div>
                <div class="mask-black"></div>
                <div
                    class="straw"
                    :style="{
                        display : (data.picking ? 'none' : 'block'),
                        left : data.straw.x + 'px',
                        top : data.straw.y + 'px'
                    }"
                    @mousedown.capture="_moveStraw"
                ></div>
            </div>
            <div class="tools">
                <div
                    class="color-copy"
                >
                    <div class="alpha-bg-1"></div>
                    <div class="alpha-bg-2"></div>
                    <div class="alpha-bg-3"></div>
                    <div class="alpha-bg-4"></div>
                    <div
                        class="color"
                        :style="{
                            'background-color' : '#' + colorWithAlpha
                        }"
                    ></div>
                </div>
                <div class="slider-tool">
                    <div class="hsb">
                        <morning-slider 
                            :show-tip="false" 
                            :max="360"

                            @value-change="_hslaChangeH"
                        ></morning-slider>
                    </div>
                    <div class="alpha">
                        <morning-slider
                            :default-value="100"
                            :show-tip="false"
                            :max="100"

                            @value-change="_hslaChangeA"
                        ></morning-slider>
                    </div>
                </div>
            </div>
            <div class="values">
                <div class="input">
                    <div class="rgba" v-if="data.showValueType === 'rgba'">
                        <morning-textinput v-model="colorValues.r"></morning-textinput>
                        <morning-textinput v-model="colorValues.g"></morning-textinput>
                        <morning-textinput v-model="colorValues.b"></morning-textinput>
                        <morning-textinput v-model="colorValues.a"></morning-textinput>
                        <div class="name">R</div>
                        <div class="name">G</div>
                        <div class="name">B</div>
                        <div class="name">A</div>
                    </div>
                    <div class="hex" v-if="data.showValueType === 'hex'">
                        <morning-textinput v-model="colorValues"></morning-textinput>
                        <div class="name">HEX</div>
                    </div>
                    <div class="hsla" v-if="data.showValueType === 'hsla'">
                        <morning-textinput v-model="colorValues.h"></morning-textinput>
                        <morning-textinput v-model="colorValues.s"></morning-textinput>
                        <morning-textinput v-model="colorValues.l"></morning-textinput>
                        <morning-textinput v-model="colorValues.a"></morning-textinput>
                        <div class="name">H</div>
                        <div class="name">S</div>
                        <div class="name">L</div>
                        <div class="name">A</div>
                    </div>
                </div>
                <div class="toggle-type" @click="_toggleShowType">
                    <i class="mo-icon mo-icon-sort"></i>
                </div>
            </div>
           <!--  <div class="palettes">
                <ul class="colors">
                    <li></li>
                </ul> 
            </div> -->
        </div>
    </div>

    <morning-link v-if="conf.clearable" color="minor" @emit="_clean" class="cleanbtn">清空</morning-link>

    </mor-colorpicker>
</template>
 
<script>
import Color                        from 'color';
import leftPad                      from 'left-pad';
import GlobalEvent                  from 'Utils/GlobalEvent';
import TipManager                   from 'Utils/TipManager';
import Move                         from 'Utils/Move';

const valueTypes = [
    'hex',
    'rgba',
    'hsla'
];

// TODO : copy 色彩
// TODO : valueType 输出
// TODO : allowAlpha

export default {
    origin : 'Form',
    name : 'colorpicker',
    mixins : [GlobalEvent, TipManager, Move],
    props : {
        valueType : {
            type : String,
            default : 'hex',
            validator : (value => ['hex', 'rgba'].indexOf(value) !== -1)
        }
    },
    computed : {
        _conf : function () {

            return {
                valueType : this.valueType
            };

        },
        colorObj : function () {

            return Color(`#${this.colorWithAlpha}`);

        },
        colorValues : function () {

            if (this.data.showValueType === 'hex') {

                if (this.data.alpha === 1) {

                    return `#${leftPad(this.colorObj.rgbNumber().toString(16), 6, '0')}`;

                } else {

                    return `#${leftPad(this.colorObj.rgbNumber().toString(16), 6, '0')}${leftPad(Math.round(255*this.data.alpha).toString(16), 2, '0')}`;

                }

            } else if (this.data.showValueType === 'rgba') {

                return {
                    r : this.colorObj.red(),
                    g : this.colorObj.green(),
                    b : this.colorObj.blue(),
                    a : Math.round(255 * this.colorObj.alpha())
                }

            } else if (this.data.showValueType === 'hsla') {

                return {
                    h : Math.round(this.colorObj.hsl().object().h),
                    s : `${Math.round(this.colorObj.hsl().object().s)}%`,
                    l : `${Math.round(this.colorObj.hsl().object().l)}%`,
                    a : Math.round(255 * this.colorObj.hsl().alpha())
                }

            }

        },
        colorH : function () {

            let s = this.data.hsvS;
            let v = this.data.hsvV;

            if (s === -1) {

                s = 100;

            }

            let hsl = Color({
                h : this.data.hslH,
                s : this.data.hsvS,
                v : this.data.hsvV
            }).hsl().object();

            hsl.s = 100;
            hsl.l = 50;

            return leftPad(Color(hsl).rgbNumber().toString(16), 6, '0');

        },
        color : function () {

            let color = Color({
                h: this.data.hslH,
                s: this.data.hslS,
                l: this.data.hslL
            });
            let rgb = color.rgbNumber();
            let rgbString = leftPad(rgb.toString(16), 6, '0');

            return rgbString;

        },
        colorWithAlpha : function () {

            let alpha = Math.round(255 * this.data.alpha);

            return `${this.color}${leftPad(alpha.toString(16), 2, '0')}`;

        }
    },
    data : function () {

        return {
            data : {
                showValueType : valueTypes[0],
                showPicker : false,
                first : true,
                alpha : 1,
                hslH : 0,
                hslS : 100,
                hslL : 50,
                picking : false,
                hsvS : -1,
                hsvV : 0,
                panel : {
                    w : 0,
                    h : 0
                },
                straw : {
                    x : 0,
                    y : 0
                },
                strawSize : 0,
                dontPickColor : false,
                $preview : null,
                $picker : null
            }
        };

    },
    methods : {
        _valueFilter : function (value) {

            return value;

        },
        _checkArea : function (evt) {

            const notFound = -1;

            if (evt.path.indexOf(this.data.$picker) === notFound) {

                this.togglePicker();

            }

        },
        _showPicker : function () {

            this._tipCreate({
                placement : 'bottom',
                element : this.data.$picker,
                target : this.data.$preview,
                offset : '0 0'
            })
            this.data.showPicker = true;
            this.$emit('show-picker');

        },
        _hidePicker : function () {

            this.data.showPicker = false;
            this.$emit('hide-picker');

        },
        _hslaChangeH : function (value) {

            value = 360 - value;

            if (value === 360) {

                value = 0;

            }

            this.data.hslH = value;

        },
        _hslaChangeA : function (value) {

            this.data.alpha = value / 100;

        },
        _hsvChangeSV : function (s, v) {

            this.data.hsvS = s;
            this.data.hsvV = v;

            let color = Color({
                h : this.data.hslH,
                s : Math.round(s),
                v : 100 - Math.round(v)
            });
            let hsl = color.hsl().object();

            this.data.hslS = hsl.s;
            this.data.hslL = hsl.l;

        },
        _moveStraw : function () {
          
            this.data.dontPickColor = true;
            this._moveItemRecord(0);

        },
        _rePositionStrawWithSV : function (s, v) {

            this.Vue.nextTick(() => {

                this.data.straw = {
                    x : (s / 100 * this.data.panel.w) - (this.data.strawSize / 2),
                    y : (v / 100 * this.data.panel.h) - (this.data.strawSize / 2)
                };

            });

        },
        _pickColor : function (evt) {

            if (this.data.dontPickColor) {

                return;

            } 

            let x = evt.offsetX - (this.data.strawSize / 2);
            let y = evt.offsetY - (this.data.strawSize / 2);

            this.data.straw = {
                x : x,
                y : y
            };
            this._hsvChangeSV(
                (((+x) + (this.data.strawSize / 2)) / this.data.panel.w) * 100,
                (((+y) + (this.data.strawSize / 2)) / this.data.panel.h) * 100
            );

            this.Vue.nextTick(() => {
                
                let newEvt = new MouseEvent(evt.type, evt);

                newEvt._mor_move_ignore_path = true;
                this._moveStraw();
                this._moveMousedown(newEvt);

            });

        },
        _toggleShowType : function () {

            let index = valueTypes.indexOf(this.data.showValueType) + 1;

            if (index >= valueTypes.length) {

                index = 0;

            }

            this.data.showValueType = valueTypes[index];

        },
        togglePicker : function (show) {

            this.data.first = false;

            if (show === undefined) {

                show = !this.data.showPicker;

            }

            if (show) {

                this._showPicker();

            } else {

                this._hidePicker();

            }

        }
    },
    created : function () {},
    mounted : function () {

        this.data.$preview = this.$el.querySelector('.preview');
        this.data.$picker = this.$el.querySelector('.mo-colorpicker-wrap');

        let $container = this.data.$picker.querySelector('.panel');

        this.Move.delay = 0;
        this.Move.$root = this.data.$picker;
        this.Move.target = '.straw';
        this.Move.container = '.panel';
        this.Move.can = true;

        this.Vue.nextTick(() => {

            this.data.panel.w = $container.clientWidth;
            this.data.panel.h = $container.clientHeight;
            this.data.strawSize = this.data.$picker.querySelector('.straw').offsetWidth;
            this.Move.range = [
                -this.data.strawSize / 2,
                -this.data.strawSize / 2,
                $container.clientWidth + (this.data.strawSize / 2),
                $container.clientHeight + (this.data.strawSize / 2)
            ];

        });

        this.$watch('color', () => {

            let color = Color({
                h: this.data.hslH,
                s: this.data.hslS,
                l: this.data.hslL
            });
            let rgb = color.rgbNumber();
            let rgbString = leftPad(rgb.toString(16), 6, '0');
            let hsv = color.hsv().object();

            if (this.data.$picker) {

                let $track = this.data.$picker.querySelector('.alpha mor-slider .track');

                if ($track) {
                    
                    $track.style.backgroundImage = `-webkit-linear-gradient(left, #fff0, #${rgbString})`;

                }

            }

            let s = this.data.hsvS;
            let v = this.data.hsvV;

            if (s === -1) {

                s = Math.round(hsv.s);
                v = 100 - Math.round(hsv.v);

            }

            this._rePositionStrawWithSV(s, v);

        }, {
            immediate : true
        });

        this.$on('show-picker', () => {

            setTimeout(() => {

                this._globalEventAdd('click', '_checkArea');

            });

        });

        this.$on('hide-picker', () => {

            this._globalEventRemove('click', '_checkArea');

        });

        this.$on('_moveStarted', () => {

            this.data.picking = true;

        });

        this.$on('_moveEnded', () => {

            this.data.straw = {
                x : this.Move.current.x,
                y : this.Move.current.y
            };
            this.data.picking = false;
            this.data.dontPickColor = false;
            this._hsvChangeSV(
                (((+this.Move.current.x) + (this.data.strawSize / 2)) / this.data.panel.w) * 100,
                (((+this.Move.current.y) + (this.data.strawSize / 2)) / this.data.panel.h) * 100
            );

        });

        this.$on('_moveChange', () => {

            this._hsvChangeSV(
                (((+this.Move.current.x) + (this.data.strawSize / 2)) / this.data.panel.w) * 100,
                (((+this.Move.current.y) + (this.data.strawSize / 2)) / this.data.panel.h) * 100
            );

        });

    },
    beforeDestroy : function () {

        this._globalEventRemove('click', '_checkArea');

    }
};
</script>

<style lang="less" src="./index.less"></style>
