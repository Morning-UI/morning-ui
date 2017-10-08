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
        <div class="inputGroupAddon">{{conf.prepend}}</div>
    </template>
    
    <template v-if="inputType === 'text'">
        <input
            type="text"
            
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
        <div class="inputGroupAddon">{{conf.append}}</div>
    </template>

    </i-textinput>
</template>
 
<script>
import Form                         from 'Common/form';

export default Form.extend({
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
                inputGroup : !!(this.conf.prepend || this.conf.append)
            };

        }
    },
    methods : {
        _focus : function () {

            this.$emit('focus');

        },
        _blur : function () {

            this.$emit('blur');

        }
    },
    created : function () {},
    mounted : function () {

        this.$watch('data.value', newVal => {

            if (newVal === undefined) {

                this.data.value = '';

                return;

            }

            this.data.value = String(newVal);

        }, {
            immediate : true
        });

    }
});
</script>

<style lang="less" src="./index.less"></style>
