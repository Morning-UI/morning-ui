<template>
    <mor-counter
        :_uiid="uiid"
        :class="[formClass, stateClass]"

        :form-name="formName"
        :form-key="formKey"
        :group="group"
        :default-value="defaultValue"
        :hide-name="hideName"
        :clearable="clearable"
        :step="step"
        :max="max"
        :min="min"
        :formater="formater"
        :precision="precision"
    >

    <div class="counter-wrap">

        <div
            class="sub-step"
            @mousedown="_change(1, -1, true)"
            @mouseup="_stopContinued()"
        >
            <i class="mo-icon mo-icon-sub"></i>
        </div>

        <input
            type="text"

            :value="conf.formater(_toFiexd(data.value))"
            :disabled="conf.state === 'disabled' || conf.state === 'readonly'"
        />

        <div
            class="add-step"
            @mousedown="_change(1, 1, true)"
            @mouseup="_stopContinued()"
        >
            <i class="mo-icon mo-icon-add"></i>
        </div>
        
    </div>

    </mor-counter>
</template>
 
<script>
const returnValueFn = value => value;

export default {
    origin : 'Form',
    name : 'counter',
    props : {
        step : {
            type : Number,
            default : 1,
            validator : (value => (value > 0))
        },
        max : {
            type : Number,
            default : Infinity
        },
        min : {
            type : Number,
            default : -Infinity
        },
        formater : {
            type : Function,
            default : returnValueFn
        },
        precision : {
            type : [Number, String],
            default : 'auto'
        }
    },
    computed : {
        _conf : function () {

            return {
                step : this.step,
                max : this.max,
                min : this.min,
                formater : this.formater,
                precision : this.precision
            };

        }
    },
    data : function () {

        return {
            data : {
                continueChange : false,
                continueCount : 0,
                continueTimeout : null
            }
        };

    },
    methods : {
        _valueFilter : function (value) {

            value = Number(value) || 0;

            if (value > this.conf.max) {

                value = this.conf.max;

            } else if (value < this.conf.min) {

                value = this.conf.min;

            }
    
            return value;

        },
        _stopContinued : function () {

            this.data.continueCount = 0;
            this.data.continueChange = false;
            clearTimeout(this.data.continueTimeout);

        },
        _toFiexd : function (value) {

            if (this.conf.precision === 'auto') {

                return value;

            } else if (typeof this.conf.precision === 'number') {

                return value.toFixed(+this.conf.precision);

            }

            return value;

        },
        _change : function (steps = 1, add = 1, continued = false, ignoreReadonly = false) {

            if (this.conf.state === 'disabled') {

                return;

            }

            if (!ignoreReadonly && this.conf.state === 'readonly') {

                return;

            }

            if (isNaN(+steps)) {

                return;

            }

            let num = this.data.value + (add * steps * this.conf.step);

            this._set(num);

            if (continued) {

                let nextTime = 400;

                if (!this.data.continueChange) {

                    nextTime = 500;

                }

                if (this.data.continueCount < 80) {

                    nextTime = nextTime / Math.pow(2, Math.ceil(this.data.continueCount / 5));

                    if (nextTime < 50) {

                        nextTime = 50;

                    }

                } else {

                    nextTime = 25;

                }

                this.data.continueChange = true;

                this.data.continueTimeout = setTimeout(() => {

                    this.data.continueCount++;
                    this._change(steps, add, continued);

                }, nextTime);

            }

        },
        add : function (steps) {

            this._change(steps, 1, false, true);

            return this;

        },
        sub : function (steps = 1) {

            this._change(steps, -1, false, true);

            return this;

        }
    },
    created : function () {},
    mounted : function () {}
};
</script>

<style lang="less" src="./index.less"></style>
