<template>
    <mor-rate
        :_uiid="uiid"
        :class="[formClass, sizeClass, stateClass]"

        :form-name="formName"
        :form-note="formNote"
        :form-key="formKey"
        :group="group"
        :hide-name="hideName"
        :clearable="clearable"
        :_errorMessage="_errorMessage"
        :max="max"
        :allow-half="allowHalf"
        :show-note="showNote"
        :formater="formater"
        :icon="icon"
    >

    <div class="form-name" v-if="!conf.hideName && !!conf.formName">{{conf.formName}}</div>
    <div class="form-note" v-if="!!conf.formNote">{{conf.formNote}}</div>

    <div class="rate-wrap form-body">
        <ul
            class="rate-list"
            :class="{
                'in-hover' : inHover
            }"
            @mouseleave="_hover(0)"
        >
            <li
                v-for="i in conf.max"
                v-html="conf.icon"
                :key="i"
                :class="{
                    'hover' : (i <= (data.hoverRate + 0.5)),
                    'last-hover' : (i - Math.ceil(data.hoverRate) === 0),
                    'half-hover' : (i === data.hoverRate + 0.5),
                    'current' : (i <= (+data.value || 0)),
                    'half-current' : (i === ((+data.value || 0) + 0.5))
                }"
                @mousemove.capture="_hover(i, $event)"
                @mouseleave="_unlockHover"
                @click="_clickTo(data.hoverRate)"
            >
            </li>
        </ul>

        <div class="note" v-if="conf.showNote">
            {{conf.formater(data.hoverRate || data.value)}}
        </div>
    </div>

    <div class="error-message">{{conf._errorMessage}}</div>
    <morning-link v-if="conf.clearable" color="minor" @emit="_clean" class="cleanbtn">清空</morning-link>

    </mor-rate>
</template>
 
<script>
const defaultFormater = rate => (`${rate}星`);

const half = 0.5;

export default {
    origin : 'Form',
    name : 'rate',
    props : {
        max : {
            type : Number,
            default : 5,
            validator : (value => (value > 0 && (value % 1 === 0)))
        },
        allowHalf : {
            type : Boolean,
            default : false
        },
        icon : {
            type : String,
            default : '<i class="mo-icon mo-icon-star-f"></i>'
        },
        showNote : {
            type : Boolean,
            default : false
        },
        formater : {
            type : Function,
            default : defaultFormater
        }
    },
    computed : {
        _conf : function () {

            return {
                max : this.max,
                allowHalf : this.allowHalf,
                icon : this.icon,
                showNote : this.showNote,
                formater : this.formater
            };

        },
        inHover : function () {

            return !!this.data.hoverRate;

        }
    },
    data : function () {

        return {
            data : {
                hoverRate : 0,
                rateHoverLock : false
            }
        };

    },
    methods : {
        _valueFilter : function (value) {

            value = Number(value);

            if (isNaN(value)) {

                value = 0;

            }

            if (value < 0) {

                value = 0;

            }

            if (value > this.conf.max) {

                value = this.conf.max;

            }

            return value;

        },
        _unlockHover : function () {

            this.data.rateHoverLock = false;

        },
        _hover : function (rate, evt) {

            if (this.data.rateHoverLock) {

                return;

            }

            rate = Number(rate);

            if (!this.conf.allowHalf && rate === this.data.hoverRate) {

                return;

            }

            if (this.conf.allowHalf && evt) {

                let left = evt.offsetX;
                let maxLeft = evt.target.offsetWidth;

                if ((left / maxLeft) < half) {

                    rate -= half;

                }

            }

            this.data.hoverRate = rate;
            this.$emit('rating', rate);

        },
        _clickTo : function (rate) {

            this.data.rateHoverLock = true;
            this.data.hoverRate = 0;
            this._set(rate);

        }
    },
    created : function () {},
    mounted : function () {}
};
</script>
