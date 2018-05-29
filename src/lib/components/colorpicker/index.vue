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
        :color-palettes="colorPalettes"
    >

    <div
        class="preview"
        @click="toggle()"
    >
        <div class="color"></div>
    </div>

    <div
        class="mo-colorpicker-wrap"
        :class="{
            show : data.showPicker,
            hide : !data.showPicker && !data.first
        }"
    >
    <!-- TODO : 实现picker效果 -->
        <div class="picker">
            <div class="panel">
                <div class="mask1"></div>
                <div class="mask2"></div>
                <div class="straw"></div>
            </div>
            <div class="tools">
                <div class="color-copy"></div>
                <div class="slider-tool">
                    <div class="hsb"></div>
                    <div class="alpha"></div>
                </div>
            </div>
            <div class="values">
                <div class="input"></div>
                <div class="name"></div>
                <div class="toggle-type"></div>
            </div>
            <div class="palettes">
                <ul class="colors">
                    <li></li>
                </ul> 
            </div>
        </div>
    </div>

    </mor-colorpicker>
</template>
 
<script>
import color                        from 'color';
import GlobalEvent                  from 'Utils/GlobalEvent';
import TipManager                   from 'Utils/TipManager';

export default {
    origin : 'Form',
    name : 'colorpicker',
    mixins : [GlobalEvent, TipManager],
    props : {},
    computed : {
        _conf : function () {

            return {};

        }
    },
    data : function () {

        return {
            data : {
                showPicker : false,
                first : true,
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

                this.toggle();

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
        toggle : function (show) {

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

        this.$on('show-picker', () => {

            setTimeout(() => {

                this._globalEventAdd('click', '_checkArea');

            });

        });

        this.$on('hide-picker', () => {

            this._globalEventRemove('click', '_checkArea');

        });

    },
    beforeDestroy : function () {

        this._globalEventRemove('click', '_checkArea');

    }
};
</script>

<style lang="less" src="./index.less"></style>
