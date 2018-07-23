<template>
    <mor-textinput
        :_uiid="uiid"
        :class="[formClass, stateClass, moreClass]"

        :form-name="formName"
        :form-key="formKey"
        :group="group"
        :default-value="defaultValue"
        :hide-name="hideName"
        :clearable="clearable"
        :hide-value="hideValue"
        :prepend="prepend"
        :append="append"
        :append-type="appendType"
        :align="align"
        :maxlength="maxlength"
    >

    <template v-if="conf.prepend">
        <div class="input-group-addon" v-html="conf.prepend"></div>
    </template>

    <template v-if="inputType === 'text'">
        <input
            type="text"
            key="is-text"

            :class="inputClass"
            :placeholder="placeholder"
            :disabled="conf.state === 'disabled' || conf.state === 'readonly'"
            :maxlength="conf.maxlength"

            @focus="_focus()"
            @blur="_blur()"

            :value="data.value"
            @input="$emit('input', $event.target.value)"
        />
    </template>
    <template v-else>
        <input
            type="password"
            key="is-password"
            
            :class="inputClass"
            :placeholder="placeholder"
            :disabled="conf.state === 'disabled' || conf.state === 'readonly'"
            :maxlength="conf.maxlength"

            @focus="_focus()"
            @blur="_blur()"

            :value="data.value"
            @input="$emit('input', $event.target.value)"
        />
    </template>

    <template v-if="conf.append">
        <div class="input-group-addon" v-html="conf.append"></div>
    </template>

    <morning-link v-if="conf.clearable" color="minor" @emit="_clean" class="cleanbtn">清空</morning-link>

    </mor-textinput>
</template>
 
<script>
export default {
    origin : 'Form',
    name : 'textinput',
    props : {
        hideValue : {
            type : Boolean,
            default : false
        },
        prepend : {
            type : String,
            default : undefined
        },
        append : {
            type : String,
            default : undefined
        },
        appendType : {
            type : String,
            default : 'block',
            validator : (value => ['block', 'inline'].indexOf(value) !== -1)
        },
        align : {
            type : String,
            default : 'left',
            validator : (value => ['left', 'center', 'right'].indexOf(value) !== -1)
        },
        maxlength : {
            type : Number,
            default : Infinity
        }
    },
    computed : {
        _conf : function () {

            return {
                hideValue : this.hideValue,
                prepend : this.prepend,
                append : this.append,
                appendType : this.appendType,
                align : this.align,
                maxlength : this.maxlength
            };

        },
        inputType : function () {

            if (this.conf.hideValue) {

                return 'password';

            }

            return 'text';

        },
        placeholder : function () {

            if (!this.conf.hideName) {

                return this.conf.formName;

            }

            return false;

        },
        moreClass : function () {

            return {
                'input-group' : !!(this.conf.prepend || this.conf.append),
                'inline-append' : (this.conf.appendType === 'inline'),
                'input-focus' : this.data.inputFocus
            };

        },
        inputClass : function () {

            return {
                'has-append' : !!this.conf.append,
                'align-left' : (this.conf.align === 'left'),
                'align-center' : (this.conf.align === 'center'),
                'align-right' : (this.conf.align === 'right')
            };

        }
    },
    data : function () {

        return {
            data : {
                inputFocus : false
            }
        };

    },
    methods : {
        _valueFilter : function (value) {

            if (value === undefined) {

                return '';

            }

            if (typeof value === 'object') {

                return JSON.stringify(value);

            }

            return String(value);

        },
        _focus : function () {

            this.data.inputFocus = true;
            this.$emit('focus');

        },
        _blur : function () {

            this.data.inputFocus = false;
            this.$emit('blur');

        }
    },
    created : function () {},
    mounted : function () {

        this.$on('input', value => {

            this.data.value = value;

        });

    }
};
</script>

<style lang="less" src="./index.less"></style>
