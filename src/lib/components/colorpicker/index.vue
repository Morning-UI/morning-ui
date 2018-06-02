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
    
    <div class="note" v-if="!conf.hideName">{{conf.formName}}</div>
    
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
                <morning-tip :target="'#mor-colorpicker-copy-'+uiid" color="light-blue" offset="3px 0">
                    {{colorString}}
                </morning-tip>
                <div class="slider-tool">
                    <div class="hsb">
                        <morning-slider 
                            :show-tip="false" 
                            :max="360"
                            :state="inputIsReadonly ? 'readonly' : 'normal'"

                            v-model="hslHReversal"
                            
                            @keydown.native="_hslHSync(true)"
                            @keyup.native="_hslHSync(false)"
                            @value-change="_hslaChangeHBar"
                        ></morning-slider>
                    </div>
                    <div class="alpha">
                        <morning-slider
                            :show-tip="false"
                            :max="255"
                            :state="(inputIsReadonly || !conf.allowAlpha) ? 'readonly' : 'normal'"

                            v-model="data.alpha"

                            @value-change="_alphaChange"
                        ></morning-slider>
                    </div>
                </div>
            </div>
            <div class="values">
                <div class="input">
                    <div class="rgba" v-if="data.showValueType === 'rgba'">
                        <morning-textinput v-model="colorValue.r" :state="inputIsReadonly ? 'readonly' : 'normal'" @value-change="_rgbaChangeR"></morning-textinput>
                        <morning-textinput v-model="colorValue.g" :state="inputIsReadonly ? 'readonly' : 'normal'" @value-change="_rgbaChangeG"></morning-textinput>
                        <morning-textinput v-model="colorValue.b" :state="inputIsReadonly ? 'readonly' : 'normal'" @value-change="_rgbaChangeB"></morning-textinput>
                        <morning-textinput v-model="colorValue.a" :state="(inputIsReadonly || !conf.allowAlpha) ? 'readonly' : 'normal'" @value-change="_alphaChangePer"></morning-textinput>
                        <div class="name">R</div>
                        <div class="name">G</div>
                        <div class="name">B</div>
                        <div class="name">A</div>
                    </div>
                    <div class="hex" v-if="data.showValueType === 'hex'">
                        <morning-textinput v-model="colorValue" :state="inputIsReadonly ? 'readonly' : 'normal'" @value-change="_hexChange"></morning-textinput>
                        <div class="name">HEX</div>
                    </div>
                    <div class="hsla" v-if="data.showValueType === 'hsla'">
                        <morning-textinput v-model="colorValue.h" :state="inputIsReadonly ? 'readonly' : 'normal'" @value-change="_hslChangeH"></morning-textinput>
                        <morning-textinput v-model="colorValue.s" :state="inputIsReadonly ? 'readonly' : 'normal'" @value-change="_hslChangeS"></morning-textinput>
                        <morning-textinput v-model="colorValue.l" :state="inputIsReadonly ? 'readonly' : 'normal'" @value-change="_hslChangeL"></morning-textinput>
                        <morning-textinput v-model="colorValue.a" :state="(inputIsReadonly || !conf.allowAlpha) ? 'readonly' : 'normal'" @value-change="_alphaChangePer"></morning-textinput>
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
import copy                         from 'clipboard-copy';
import GlobalEvent                  from 'Utils/GlobalEvent';
import TipManager                   from 'Utils/TipManager';
import Move                         from 'Utils/Move';

const defaultColor = '#000000';
const valueTypes = [
    'hex',
    'rgba',
    'hsla'
];

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

            return Color({
                h : this.data.hslH,
                s : this.data.hslS,
                l : this.data.hslL
            })
            .alpha(this.data.alpha / 255);

        },
        colorString : function () {

            return this._getColorString();

        },
        colorValue : function () {

            return this._getColorValue();

        },
        hslHReversal : function () {

            return 360 - Math.floor(this.data.hslH);

        },
        colorH : function () {

            let hsl = this.colorObj.hsl().object();

            hsl.s = 100;
            hsl.l = 50;

            return Color(hsl).alpha(1).string();

        },
        colorHex : function () {

            return this.colorObj.hex();

        },
        colorHexWithAlpha : function () {

            let alpha = Math.round(this.data.alpha);

            return `${this.colorHex}${leftPad(alpha.toString(16), 2, '0')}`;

        },
        alphaPer : function () {

            return Math.round(this.data.alpha / 255 * 100) / 100;

        }
    },
    data : function () {

        return {
            data : {
                showValueType : valueTypes[0],
                showPicker : false,
                first : true,
                hslHSync : false,
                alpha : 255,
                hslH : 0,
                hslS : 0,
                hslL : 0,
                hsvS : -1,
                hsvV : 0,
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
                $picker : null
            }
        };

    },
    methods : {
        _valueFilter : function (value) {

            let color;

            value = String(value);

            try{

                color = Color(value);

            } catch(e) {}

            if (color === undefined) {

                return this._getColorString(this.conf.valueType, Color(defaultColor));

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
            })
            this.data.showPicker = true;
            this.$emit('show-picker');

        },
        _hidePicker : function () {

            this.data.showPicker = false;
            this.$emit('hide-picker');

        },
        _hexChange : function (value) {

            try{

                let hsl = Color(value).hsl().object();

                this.data.hslH = hsl.h;
                this.data.hslS = hsl.s;
                this.data.hslL = hsl.l;

                if (this.conf.allowAlpha) {
                    
                    this.data.alpha = Math.round(hsl.alpha * 255) || 255;

                }

            } catch(e) {}

        },
        _rgbaChangeR : function (value) {

            try{

                let color = this.colorObj.red(value).hsl();
               
                this.data.hslH = color.object().h;
                this.data.hslS = color.object().s;
                this.data.hslL = color.object().l;

            } catch(e) {}

        },
        _rgbaChangeG : function (value) {

            try{

                let color = this.colorObj.green(value).hsl();
               
                this.data.hslH = color.object().h;
                this.data.hslS = color.object().s;
                this.data.hslL = color.object().l;

            } catch(e) {}

        },
        _rgbaChangeB : function (value) {

            try{

                let color = this.colorObj.blue(value).hsl();
               
                this.data.hslH = color.object().h;
                this.data.hslS = color.object().s;
                this.data.hslL = color.object().l;

            } catch(e) {}

        },
        _hslChangeH : function (value) {

            try{

                let color = this.colorObj.hsl().object();

                color.h = value;
               
                this.data.hslH = Color(color).hsl().object().h;

            } catch(e) {}

        },
        _hslChangeS : function (value) {

            try{

                let color = this.colorObj.hsl().object();

                color.s = +value.replace('%', '');
               
                this.data.hslS = Color(color).hsl().object().s;

            } catch(e) {}

        },
        _hslChangeL : function (value) {

            try{

                let color = this.colorObj.hsl().object();

                color.l = +value.replace('%', '');
               
                this.data.hslL = Color(color).hsl().object().l;

            } catch(e) {}

        },
        _alphaChange : function (value) {

            if (isNaN(+value) ||
                !this.conf.allowAlpha) {

                return;

            }

            if (value > 255) {

                value = 255;

            }

            if (value < 0) {

                value = 0;

            }

            this.data.alpha = value;

        },
        _alphaChangePer : function (per) {

            if (!this.conf.allowAlpha) {

                return;

            }

            if (per > 1) {

                per = 1;

            }

            if (per < 0) {

                per = 0;

            }

            this.data.alpha = Math.round(per * 255);

        },
        _hslaChangeHBar : function (value) {

            if (!this.data.hslHSync) {

                return;

            }

            value = 360 - value;

            if (value === 360) {

                value = 0;

            }

            this.data.hslH = value;

        },
        _hsvChangeSV : function (s, v) {

            this.data.hsvS = s;
            this.data.hsvV = v;

            let hsl = Color({
                h : this.data.hslH,
                s : s,
                v : 100 - v
            }).hsl().object();

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
        _hslHSync : function (sync) {

            this.data.hslHSync = sync;

        },
        _getColorValue : function () {

            let color = this.colorObj;
            let type = this.data.showValueType;
            let alpha = this.data.alpha;

            if (type === 'hex') {

                if (alpha === 255) {

                    return this.colorHex;

                } else {

                    return this.colorHexWithAlpha;

                }

            } else if (type === 'rgba') {

                return {
                    r : Math.round(color.red()),
                    g : Math.round(color.green()),
                    b : Math.round(color.blue()),
                    a : this.alphaPer || 1
                }

            } else if (type === 'hsla') {

                let hsl = color.hsl().object();

                return {
                    h : Math.round(hsl.h),
                    s : `${Math.round(hsl.s)}%`,
                    l : `${Math.round(hsl.l)}%`,
                    a : this.alphaPer || 1
                }

            }

        },
        _getColorString : function (type = this.data.showValueType, color = this.colorObj) {

            let alpha = this.data.alpha;

            if (type === 'hex') {

                if (alpha === 255) {

                    return this.colorHex;

                } else {

                    return this.colorHexWithAlpha;

                }

            } else if (type === 'rgba') {

                if (alpha === 255) {

                    return `rgb(${Math.round(color.red())}, ${Math.round(color.green())}, ${Math.round(color.blue())})`;

                } else {

                    return `rgba(${Math.round(color.red())}, ${Math.round(color.green())}, ${Math.round(color.blue())}, ${this.alphaPer || 1})`

                }

            } else if (type === 'hsla') {

                let hsl = color.hsl().object();

                if (alpha === 255) {

                    return `hsl(${Math.round(hsl.h)}, ${Math.round(hsl.s)}%, ${Math.round(hsl.l)}%)`;

                } else {

                    return `hsla(${Math.round(hsl.h)}, ${Math.round(hsl.s)}%, ${Math.round(hsl.l)}%, ${this.alphaPer || 1})`;

                }

            }

        },
        _syncColorFromValue : function () {

            let hsl = Color(this.get() || defaultColor).hsl();

            this.data.hslH = hsl.object().h;
            this.data.hslS = hsl.object().s;
            this.data.hslL = hsl.object().l;

            if (this.conf.allowAlpha) {

                this.data.alpha = Math.round(hsl.alpha() * 255);

            }
        },
        _colorCopy : function () {

            copy(this.colorString);

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

        this._syncColorFromValue();

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

        this.$watch('inputIsReadonly', () => {

            if (this.inputIsReadonly) {

                this.Move.can = false;

            } else {

                this.Move.can = true;

            }

        }, {
            immediate : true
        });

        this.$watch('colorHex', () => {

            let color = this.colorObj;
            let hsv = color.hsv().object();

            if (this.data.$picker) {

                let $track = this.data.$picker.querySelector('.alpha mor-slider .track');

                if ($track) {
                    
                    $track.style.backgroundImage = `-webkit-linear-gradient(left, #fff0, ${color.hex()})`;

                }

            }

            let s = this.data.hsvS;
            let v = this.data.hsvV;

            if (s === -1) {

                s = hsv.s;
                v = 100 - hsv.v;

            }

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
