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
    
    <div class="form-name" v-if="!conf.hideName && !!conf.formName">{{conf.formName}}</div>
    
    <div class="preview-wrap">
        <div
            class="preview"
            @click="togglePicker(undefined)"
        >
            <div class="alpha-bg-1"></div>
            <div class="alpha-bg-2"></div>
            <div class="alpha-bg-3"></div>
            <div class="alpha-bg-4"></div>
            <div
                class="color"
                :style="{
                    'background-color' : colorHexWithAlpha
                }"
            ></div>
        </div>
    </div>

    <div
        class="mo-colorpicker-wrap"
        :class="{
            show : data.showPicker,
            hide : !data.showPicker && !data.first,
            'not-allow' : inputIsReadonly
        }"
    >
        <div class="picker">
            <div
                class="panel"
                :style="{
                    'background-color' : colorH
                }"

                @mousedown="_pickColor($event);_hslHSync(false)"
                @mouseup="_hslHSync(true)"
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
                    @mouseup.capture="_stopmoveStraw"
                ></div>
            </div>
            <div class="tools">
                <div
                    class="color-copy"
                     :id="'mor-colorpicker-copy-'+uiid"

                    @click="_colorCopy"
                >
                    <div class="alpha-bg-1"></div>
                    <div class="alpha-bg-2"></div>
                    <div class="alpha-bg-3"></div>
                    <div class="alpha-bg-4"></div>
                    <div
                        class="color"
                        :style="{
                            'background-color' : colorHexWithAlpha
                        }"
                    ></div>
                    <div class="copy-mask">
                        <i class="mo-icon mo-icon-copy"></i>
                    </div>
                </div>
                <morning-tip :ref="'mor-colorpicker-copytip-'+uiid" :target="'#mor-colorpicker-copy-'+uiid" color="light-blue" offset="3px 0">
                    {{data.copyNote || colorString}}
                </morning-tip>
                <div class="slider-tool">
                    <div class="hsb">
                        <morning-slider
                            :show-tip="false"
                            :max="360"
                            :step="0.01"
                            :state="inputIsReadonly ? 'readonly' : 'normal'"

                            v-model="data.hslHReversal"
                            
                            @value-change="_hslaChangeHBar"
                        ></morning-slider>
                    </div>
                    <div class="alpha">
                        <morning-slider
                            :show-tip="false"
                            :max="255"
                            :state="(inputIsReadonly || !conf.allowAlpha) ? 'readonly' : 'normal'"

                            v-model="data.alpha"

                            @mousedown="_hslHSync(false)"
                            @mouseup="_hslHSync(true)"
                            @value-change="_alphaChange"
                        ></morning-slider>
                    </div>
                </div>
            </div>
            <div class="values">
                <div class="input">
                    <div class="rgba" v-if="data.showValueType === 'rgba' && typeof data.colorValue === 'object'">
                        <morning-textinput v-model="data.colorValue.r" :state="inputIsReadonly ? 'readonly' : 'normal'" @focus="_hslHSync(true)" @blur="_rgbaChangeR();_hslHSync(false)"></morning-textinput>
                        <morning-textinput v-model="data.colorValue.g" :state="inputIsReadonly ? 'readonly' : 'normal'" @focus="_hslHSync(true)" @blur="_rgbaChangeG();_hslHSync(false)"></morning-textinput>
                        <morning-textinput v-model="data.colorValue.b" :state="inputIsReadonly ? 'readonly' : 'normal'" @focus="_hslHSync(true)" @blur="_rgbaChangeB();_hslHSync(false)"></morning-textinput>
                        <morning-textinput v-model="data.colorValue.a" :state="(inputIsReadonly || !conf.allowAlpha) ? 'readonly' : 'normal'" @blur="_alphaChangePer"></morning-textinput>
                        <div class="name">R</div>
                        <div class="name">G</div>
                        <div class="name">B</div>
                        <div class="name">A</div>
                    </div>
                    <div class="hex" v-if="data.showValueType === 'hex' && typeof data.colorValue === 'string'">
                        <morning-textinput
                            v-model="data.colorValue"
                            :state="inputIsReadonly ? 'readonly' : 'normal'"
                            @value-change="_hexChange"
                            @focus="_hslHSync(true)"
                            @blur="_hslHSync(false)"
                        ></morning-textinput>
                        <div class="name">HEX</div>
                    </div>
                    <div class="hsla" v-if="data.showValueType === 'hsla' && typeof data.colorValue === 'object'">
                        <morning-textinput v-model="data.colorValue.h" :state="inputIsReadonly ? 'readonly' : 'normal'" @focus="_hslHSync(true)" @blur="_hslChangeH();_hslHSync(false)"></morning-textinput>
                        <morning-textinput v-model="data.colorValue.s" :state="inputIsReadonly ? 'readonly' : 'normal'" @blur="_hslChangeS"></morning-textinput>
                        <morning-textinput v-model="data.colorValue.l" :state="inputIsReadonly ? 'readonly' : 'normal'" @blur="_hslChangeL"></morning-textinput>
                        <morning-textinput v-model="data.colorValue.a" :state="(inputIsReadonly || !conf.allowAlpha) ? 'readonly' : 'normal'" @blur="_alphaChangePer"></morning-textinput>
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
import color                        from 'color';
import leftPad                      from 'left-pad';
import copy                         from 'clipboard-copy';
import GlobalEvent                  from 'Utils/GlobalEvent';
import TipManager                   from 'Utils/TipManager';
import Move                         from 'Utils/Move';

const num16 = 16;
const num50 = 50;
const num100 = 100;
const num360 = 360;
const maxAlpha = 255;
const maxHex = 255;
const defaultColor = '#000000';
const valueTypes = [
    'hex',
    'rgba',
    'hsla'
];

export default {
    origin : 'Form',
    name : 'colorpicker',
    mixins : [GlobalEvent, TipManager, Move],
    props : {
        valueType : {
            type : String,
            default : 'hex',
            validator : (value => valueTypes.indexOf(value) !== -1)
        },
        allowAlpha : {
            type : Boolean,
            default : true
        }
    },
    computed : {
        _conf : function () {

            return {
                valueType : this.valueType,
                allowAlpha : this.allowAlpha
            };

        },
        inputIsReadonly : function () {

            return (this.conf.state === 'disabled' || this.conf.state === 'readonly');

        },
        colorObj : function () {

            return color({
                h : this.data.hslH,
                s : this.data.hslS,
                l : this.data.hslL
            }).alpha(this.data.alpha / maxAlpha);

        },
        colorString : function () {

            return this._getColorString();

        },
        colorH : function () {

            let hsl = this.colorObj.hsl().object();

            hsl.s = num100;
            hsl.l = num50;

            return color(hsl)
                .alpha(1)
                .string();

        },
        colorHex : function () {

            return this.colorObj.hex();

        },
        colorHexWithAlpha : function () {

            let alpha = Math.round(this.data.alpha);

            return `${this.colorHex}${leftPad(alpha.toString(num16), 2, '0')}`;

        },
        alphaPer : function () {

            return Math.round(this.data.alpha / maxAlpha * num100) / num100;

        }
    },
    data : function () {

        return {
            data : {
                showValueType : valueTypes[0],
                showPicker : false,
                first : true,
                hslHSync : false,
                alpha : maxAlpha,
                hslH : 0,
                hslS : 0,
                hslL : 0,
                // hsvS : -1,
                // hsvV : 0,
                picking : false,
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
                $picker : null,
                toggling : false,
                hslHReversal : null,
                colorValue : null,
                copyNote : null,
                copyNoteTimeout : null
            }
        };

    },
    methods : {
        _valueFilter : function (value) {

            let colorObj;

            value = String(value);

            try {

                colorObj = color(value);

            } catch (e) {}

            if (colorObj === undefined) {

                return this._getColorString(this.conf.valueType, color(defaultColor));

            }
            
            return value;

        },
        _checkArea : function (evt) {

            const notFound = -1;

            if (evt.path.indexOf(this.data.$picker) === notFound) {

                this.togglePicker(false);

            }

            return evt;

        },
        _showPicker : function () {

            this._tipCreate({
                placement : 'bottom',
                element : this.data.$picker,
                target : this.data.$preview,
                offset : '0 0'
            });
            this.data.showPicker = true;
            this.$emit('show-picker');

        },
        _hidePicker : function () {

            this.data.showPicker = false;
            this.$emit('hide-picker');

        },
        _hexChange : function (value) {

            value = value.trim();

            if (value.length !== 7 &&
                value.length !== 9) {

                return;

            }

            try {

                let hsl = color(value)
                    .hsl()
                    .object();

                if (this.data.hslHSync) {

                    this.data.hslH = hsl.h;

                }
                
                this.data.hslS = hsl.s;
                this.data.hslL = hsl.l;

                if (this.conf.allowAlpha) {
                        
                    let alpha = Math.round(hsl.alpha * maxAlpha);

                    if (isNaN(alpha)) {

                        this.data.alpha = maxAlpha;

                    } else {

                        this.data.alpha = alpha;

                    }

                }

            } catch (e) {}

        },
        _rgbaChangeR : function () {

            let red = +this.data.colorValue.r || 0;

            if (red < 0) {

                red = 0;

            } else if (red > maxHex) {

                red = maxHex;

            }

            try {

                let hsl = this.colorObj
                    .red(red)
                    .hsl();

                if (this.data.hslHSync) {
                    
                    this.data.hslH = hsl.object().h;

                }

                this.data.hslS = hsl.object().s;
                this.data.hslL = hsl.object().l;

            } catch (e) {}

        },
        _rgbaChangeG : function () {

            let green = +this.data.colorValue.g || 0;

            if (green < 0) {

                green = 0;

            } else if (green > maxHex) {

                green = maxHex;

            }

            try {

                let hsl = this.colorObj
                    .green(green)
                    .hsl();

                if (this.data.hslHSync) {
                    
                    this.data.hslH = hsl.object().h;

                }

                this.data.hslS = hsl.object().s;
                this.data.hslL = hsl.object().l;

            } catch (e) {}

        },
        _rgbaChangeB : function () {

            let blue = +this.data.colorValue.b || 0;

            if (blue < 0) {

                blue = 0;

            } else if (blue > maxHex) {

                blue = maxHex;

            }

            try {

                let hsl = this.colorObj
                    .blue(blue)
                    .hsl();

                if (this.data.hslHSync) {
                    
                    this.data.hslH = hsl.object().h;

                }

                this.data.hslS = hsl.object().s;
                this.data.hslL = hsl.object().l;

            } catch (e) {}

        },
        _hslChangeH : function () {

            if (!this.data.hslHSync) {

                return;

            }

            let value = +this.data.colorValue.h || 0;

            if (value < 0) {

                value = 0;

            } else if (value > num360) {

                value = num360 - 1;

            }

            try {

                let hslObj = this.colorObj
                    .hsl()
                    .object();

                hslObj.h = value;
                
                this.data.hslH = color(hslObj)
                    .hsl()
                    .object()
                    .h;

            } catch (e) {}

        },
        _hslChangeS : function () {

            let value = +(this.data.colorValue.s.replace('%', '')) || 0;

            if (value < 0) {

                value = 0;

            } else if (value > num100) {

                value = num100;

            }

            try {

                let hslObj = this.colorObj
                    .hsl()
                    .object();

                hslObj.s = value;
               
                this.data.hslS = color(hslObj)
                    .hsl()
                    .object()
                    .s;

            } catch (e) {}

        },
        _hslChangeL : function () {

            let value = +(this.data.colorValue.l.replace('%', '')) || 0;

            if (value < 0) {

                value = 0;

            } else if (value > num100) {

                value = num100;

            }

            try {

                let hslObj = this.colorObj
                    .hsl()
                    .object();

                hslObj.l = value;
               
                this.data.hslL = color(hslObj)
                    .hsl()
                    .object()
                    .l;

            } catch (e) {}

        },
        _alphaChange : function () {

            this.$emit('alpha-slider-change');

        },
        _alphaChangePer : function () {

            if (!this.conf.allowAlpha) {

                return;

            }

            let per = +this.data.colorValue.a || 0;

            if (per < 0) {

                per = 0;

            } else if (per > 1) {

                per = 1;

            }

            this.data.alpha = Math.round(per * maxAlpha);

        },
        _hslaChangeHBar : function (value) {

            if (value === num360) {

                value = 0;

            }

            this.data.hslH = value;
            this.$emit('hue-slider-change');

        },
        _hsvChangeSV : function (s, v) {

            // this.data.hsvS = s;
            // this.data.hsvV = v;

            let hsl = color({
                h : this.data.hslH,
                s : s,
                v : v
            })
                .hsl()
                .object();

            this.data.hslS = hsl.s;
            this.data.hslL = hsl.l;

        },
        _moveStraw : function () {
          
            this.data.dontPickColor = true;
            this._moveItemRecord(0);

        },
        _stopmoveStraw : function () {

            this.data.dontPickColor = false;
            this._moveMouseup();

        },
        _rePositionStrawWithSV : function (s, v) {

            this.Vue.nextTick(() => {

                this.data.straw = {
                    x : (s / num100 * this.data.panel.w) - (this.data.strawSize / 2),
                    y : (v / num100 * this.data.panel.h) - (this.data.strawSize / 2)
                };

            });

        },
        _pickColor : function (evt) {

            if (this.data.dontPickColor ||
                this.conf.state === 'disabled' ||
                this.conf.state === 'readonly') {

                return;

            }

            let x = evt.offsetX - (this.data.strawSize / 2);
            let y = evt.offsetY - (this.data.strawSize / 2);

            this.data.straw = {
                x : x,
                y : y
            };
            this._hsvChangeSV(
                (((+x) + (this.data.strawSize / 2)) / this.data.panel.w) * num100,
                (num100 - ((((+y) + (this.data.strawSize / 2)) / this.data.panel.h) * num100))
            );

            this.Vue.nextTick(() => {
                
                let newEvt = new MouseEvent(evt.type, evt);

                newEvt.__morMoveIgnorePath = true;
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
            this.$emit('input-type-change');

        },
        _hslHSync : function (sync) {

            this.data.hslHSync = sync;

        },
        _getColorValue : function () {

            let colorObj = this.colorObj;
            let type = this.data.showValueType;
            let alpha = this.data.alpha;

            if (type === 'hex') {

                if (alpha === maxAlpha) {

                    return this.colorHex;

                }

                return this.colorHexWithAlpha;

            } else if (type === 'rgba') {

                return {
                    r : Math.round(colorObj.red()),
                    g : Math.round(colorObj.green()),
                    b : Math.round(colorObj.blue()),
                    a : isNaN(this.alphaPer) ? 1 : this.alphaPer
                };

            } else if (type === 'hsla') {

                let hsl = colorObj.hsl().object();

                return {
                    h : Math.round(hsl.h),
                    s : `${Math.round(hsl.s)}%`,
                    l : `${Math.round(hsl.l)}%`,
                    a : isNaN(this.alphaPer) ? 1 : this.alphaPer
                };

            }

            let hslObj = color(defaultColor)
                .hsl()
                .object();

            return {
                h : hslObj.h,
                s : hslObj.s,
                l : hslObj.l,
                a : 1
            };

        },
        _getColorString : function (type = this.data.showValueType, colorObj = this.colorObj) {

            let alpha = this.data.alpha;

            if (type === 'hex') {

                if (alpha === maxAlpha) {

                    return this.colorHex;

                }

                return this.colorHexWithAlpha;

            } else if (type === 'rgba') {

                if (alpha === maxAlpha) {

                    return `rgb(${Math.round(colorObj.red())}, ${Math.round(colorObj.green())}, ${Math.round(colorObj.blue())})`;

                }

                return `rgba(${Math.round(colorObj.red())}, ${Math.round(colorObj.green())}, ${Math.round(colorObj.blue())}, ${this.alphaPer || 1})`;

            } else if (type === 'hsla') {

                let hslObj = colorObj.hsl().object();

                if (alpha === maxAlpha) {

                    return `hsl(${Math.round(hslObj.h)}, ${Math.round(hslObj.s)}%, ${Math.round(hslObj.l)}%)`;

                }

                return `hsla(${Math.round(hslObj.h)}, ${Math.round(hslObj.s)}%, ${Math.round(hslObj.l)}%, ${this.alphaPer || 1})`;

            }

            return defaultColor;

        },
        _syncColorFromValue : function () {

            let hsl = color(this.get() || defaultColor).hsl();

            if (this.data.hslHSync) {
    
                this.data.hslH = hsl.object().h;

            }

            this.data.hslS = hsl.object().s;
            this.data.hslL = hsl.object().l;

            if (this.conf.allowAlpha) {

                this.data.alpha = Math.round(hsl.alpha() * maxAlpha);

            }

        },
        _colorCopy : function () {

            const copyShowtime = 500;

            copy(this.colorString);
            this.data.copyNote = '已复制';
            clearTimeout(this.data.copyNoteTimeout);

            this.Vue.nextTick(() => this.$refs[`mor-colorpicker-copytip-${this.uiid}`].position());

            setTimeout(() => {

                this.data.copyNote = null;
                this.Vue.nextTick(() => this.$refs[`mor-colorpicker-copytip-${this.uiid}`].position());

            }, copyShowtime);

        },
        set : function (value) {

            this._hslHSync(true);

            let result = this._set(value);

            this.Vue.nextTick(() => this._hslHSync(false));

            return result;

        },
        togglePicker : function (show) {

            if (this.data.toggling) {

                return this;

            }

            this.data.first = false;
            this.data.toggling = true;

            if (show === undefined) {

                show = !this.data.showPicker;

            }

            if (show) {

                this._showPicker();

            } else {

                this._hidePicker();

            }

            this.Vue.nextTick(() => {

                this.data.toggling = false;

            });

            return this;

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

        this._hslHSync(true);
        this._syncColorFromValue();
        this._hslHSync(false);

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

        this.$watch('data.hslH', () => {

            this.data.hslHReversal = this.data.hslH;

        }, {
            immediate : true
        });

        this.$watch(() => this._getColorValue(), newValue => {

            this.data.colorValue = newValue;

        }, {
            immediate : true
        });

        this.$watch('inputIsReadonly', () => {

            if (this.inputIsReadonly) {

                this.Move.can = false;

            } else {

                this.Move.can = true;

            }

        }, {
            immediate : true
        });

        window.color = color;

        this.$watch('colorHex', () => {

            let colorObj = this.colorObj;
            let hsv = colorObj.hsv().object();

            if (this.data.$picker) {

                let $track = this.data.$picker.querySelector('.alpha mor-slider .track');

                if ($track) {
                    
                    $track.style.backgroundImage = `-webkit-linear-gradient(left, #fff0, ${colorObj.hex()})`;

                }

            }

            let s = hsv.s;
            let v = num100 - hsv.v;

            this._rePositionStrawWithSV(s, v);

        }, {
            immediate : true
        });

        this.$watch('colorObj', () => {

            this._set(this._getColorString(this.conf.valueType));

        }, {
            deep : true,
            immediate : true
        });

        this.$on('value-change', () => {

            this._syncColorFromValue();

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
                (((+this.Move.current.x) + (this.data.strawSize / 2)) / this.data.panel.w) * num100,
                (num100 - ((((+this.Move.current.y) + (this.data.strawSize / 2)) / this.data.panel.h) * num100))
            );

        });

        this.$on('_moveChange', () => {

            this._hsvChangeSV(
                (((+this.Move.current.x) + (this.data.strawSize / 2)) / this.data.panel.w) * num100,
                (num100 - ((((+this.Move.current.y) + (this.data.strawSize / 2)) / this.data.panel.h) * num100))
            );

        });

    },
    beforeDestroy : function () {

        this._globalEventRemove('click', '_checkArea');

    }
};
</script>

<style lang="less" src="./index.less"></style>
