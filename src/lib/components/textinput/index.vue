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

            v-model="data.value"
        />
    </template>
    <template v-else>
        <input
            type="password"
            
            :placeholder="placeholder"
            :disabled="conf.state === 'disabled'"

            v-model="data.value"
        />
    </template>

    <template v-if="conf.append">
        <div class="inputGroupAddon">{{conf.append}}</div>
    </template>

    <span class="tips"></span>
        
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
    methods : {},
    created : function () {

        this.$watch('data.value', (newVal) => {

            if (newVal === undefined) {

                this.data.value = '';

                return;

            }

            this.data.value = String(newVal);

        }, {
            immediate : true
        });

    },
    mounted : function () {}
});
</script>

<style lang="less">
@import '~Common/var.less';

i-textinput{
    position: relative;
    z-index: 1;
    display: block;
    width: 100%;
    box-sizing: border-box;
    vertical-align: middle;

    input{
        box-sizing: border-box;
        z-index: 2;
        font-size: 0.875*@fontSize;
        padding: 0 1em;
        width: 100%;
        background: @colorWhite;
        border: 1px @colorGray solid;
        border-radius: @borderRadius;
        height: @formHeight;
        line-height: @formHeight;
        color: darken(@colorGray, 20%) !important;
        outline: none;
        -webkit-appearance: none;

        &:focus{
            border-color: @colorLightBlue;
            color: @colorBlack !important;
        }

    }

    &.inputGroup {
        display: flex;
        vertical-align: middle;

        .inputGroupAddon {
            padding: 0.375*@fontSize 0.75*@fontSize;
            font-size: 0.875rem;
            color: @colorBlue;
            text-align: center;
            background-color: @colorLightGray;
            border: 1px solid @colorGray;
            white-space: nowrap;
            border-radius: @borderRadius;

            display: flex;
            box-align: center;
            align-items: center;
            box-pack: center;
            justify-content: center;

            &:first-child {
                border-right: 0;
            }
        }

        .inputGroupAddon,
        input {
            vertical-align: middle;
            margin: 0;

            &:first-child {
                border-top-right-radius: 0;
                border-bottom-right-radius: 0;
            }

            &:nth-child(2) {
                border-top-left-radius: 0;
                border-bottom-left-radius: 0;           
            }           
        }

        input+.inputGroupAddon {
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;       
            border-left: 0;    
        }
        
        .inputGroupAddon+input {
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;  
        }
    }
    
    &.st-normal{}
    &.st-disabled{
        input[disabled] {
            border: 1px darken(@colorGray, 25%) solid;
            background-color: @colorGray;
            -webkit-user-select: none;
            cursor: not-allowed !important;
            color: darken(@colorGray, 35%) !important;
        }
    }

    // default statement
    &{
        .st-normal;
    }

}
</style>
