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

            :value="data.value"
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
export default {
    origin : 'Form',
    name : 'counter',
    props : {
        step : {
            type : Number,
            default : 1
        }
    },
    computed : {
        _conf : function () {

            return {
                step : this.step
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
    
            return Number(value) || 0;

        },
        _stopContinued : function () {

            this.data.continueCount = 0;
            this.data.continueChange = false;
            clearTimeout(this.data.continueTimeout);

        },
        _change : function (steps = 1, add = 1, continued = false) {

            if (isNaN(+steps)) {

                return;

            }

            this._set(this.data.value + (add * steps * this.conf.step));

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

                console.log(nextTime);

                this.data.continueChange = true;

                this.data.continueTimeout = setTimeout(() => {

                    this.data.continueCount++;
                    this._change(steps, add, continued);

                }, nextTime);

            }

        },
        add : function (steps) {

            this._change(steps, 1);

            return this;

        },
        sub : function (steps = 1) {

            this._change(steps, -1);

            return this;

        }
    },
    created : function () {},
    mounted : function () {}
};
</script>

<style lang="less" src="./index.less"></style>
