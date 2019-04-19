<template>
    <mor-textinput
        :_uiid="uiid"
        :class="[formClass, sizeClass, stateClass, moreClass]"

        :form-name="formName"
        :form-note="formNote"
        :form-key="formKey"
        :group="group"
        :hide-name="hideName"
        :clearable="clearable"
        :_errorMessage="_errorMessage"
        :inside-name="insideName"
        :hide-value="hideValue"
        :prepend="prepend"
        :append="append"
        :append-type="appendType"
        :prepend-type="prependType"
        :align="align"
        :maxlength="maxlength"
    >

    <div class="form-name" v-if="!conf.hideName && !!conf.formName">{{conf.formName}}</div>
    <div class="form-note" v-if="!!conf.formNote">{{conf.formNote}}</div>

    <div class="textinput-wrap form-body">

        <div class="input-group-addon" v-html="conf.prepend" v-show="!!conf.prepend"></div>

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

        <div class="input-group-addon" v-html="conf.append" v-show="!!conf.append"></div>
        
    </div>

    <div class="error-message">{{conf._errorMessage}}</div>
    <morning-link v-if="conf.clearable" color="minor" @emit="_clean" class="cleanbtn">清空</morning-link>

    </mor-textinput>
</template>
 
<script>
export default {
    origin : 'Form',
    name : 'textinput',
    props : {
        insideName : {
            type : String,
            default : ''
        },
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
        prependType : {
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
                insideName : this.insideName,
                hideValue : this.hideValue,
                prepend : this.prepend,
                append : this.append,
                appendType : this.appendType,
                prependType : this.prependType,
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

            if (this.conf.insideName) {

                return this.conf.insideName;

            }

            return false;

        },
        moreClass : function () {

            return {
                'input-group' : !!(this.conf.prepend || this.conf.append),
                'inline-append' : (this.conf.appendType === 'inline'),
                'inline-prepend' : (this.conf.prependType === 'inline'),
                'input-focus' : this.data.inputFocus
            };

        },
        inputClass : function () {

            return {
                'has-append' : !!this.conf.append,
                'has-prepend' : !!this.conf.prepend,
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

            this._set(value);

        });

    }
};
</script>
