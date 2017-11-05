<template>
    <i-textinput
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
    >

    <template v-if="conf.prepend">
        <div class="input-group-addon">{{conf.prepend}}</div>
    </template>
    
    <template v-if="inputType === 'text'">
        <input
            type="text"
            :class="inputClass"
            
            :placeholder="placeholder"
            :disabled="conf.state === 'disabled'"

            @focus="_focus()"
            @blur="_blur()"

            v-model="data.value"
        />
    </template>
    <template v-else>
        <input
            type="password"
            
            :placeholder="placeholder"
            :disabled="conf.state === 'disabled'"

            @focus="_focus()"
            @blur="_blur()"

            v-model="data.value"
        />
    </template>

    <template v-if="conf.append">
        <div class="input-group-addon">{{conf.append}}</div>
    </template>

    </i-textinput>
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
        }
    },
    data : function () {

        return {
            conf : {
                hideValue : this.hideValue,
                prepend : this.prepend,
                append : this.append
            },
            data : {}
        };

    },
    computed : {
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
                'has-append' : !!this.conf.append
            };

        }
    },
    methods : {
        _valueFilter : function (value) {

            if (value === undefined) {

                return '';

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
    mounted : function () {}
};
</script>

<style lang="less" src="./index.less"></style>
