<template>
    <mor-textinput
        :_uiid="uiid"
        :class="[stateClass, moreClass]"

        :form-name="formName"
        :form-key="formKey"
        :group="group"
        :default-value="defaultValue"
        :hide-name="hideName"
        :hide-value="hideValue"
        :prepend="prepend"
        :append="append"
        :align="align"
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
            :disabled="conf.state === 'disabled'"

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
            :disabled="conf.state === 'disabled'"

            @focus="_focus()"
            @blur="_blur()"

            :value="data.value"
            @input="$emit('input', $event.target.value)"
        />
    </template>

    <template v-if="conf.append">
        <div class="input-group-addon" v-html="conf.append"></div>
    </template>

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
        align : {
            type : String,
            default : 'left',
            validator : (value => ['left', 'center', 'right'].indexOf(value) !== -1)
        }
    },
    computed : {
        _conf : function () {

            return {
                hideValue : this.hideValue,
                prepend : this.prepend,
                append : this.append,
                align : this.align
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
                'input-group' : !!(this.conf.prepend || this.conf.append)
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
            data : {}
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

            this.$emit('focus');

        },
        _blur : function () {

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
