<template>
    <i-radio
        :_uiid="uiid"
        :class="[styleClass, stateClass]"

        :form-name="formName"
        :form-key="formKey"
        :group="group"
        :default-value="defaultValue"
        :hide-name="hideName"
        :accept-html="acceptHtml"
        :list="list"
    >

    <div class="note" v-if="!conf.hideName">{{conf.formName}}</div>

    <div class="itemlist">
        <template v-for="(name, key) in conf.list">

            <template v-if="data.value === key">
                <label
                    class="checked"
                    :value="key"
                    @click="toggle(key)"
                >
                    <p class="box"><i class="morningicon">&#xe62d;</i></p>
                    <template v-if="conf.acceptHtml">
                        <span v-html="name"></span>
                    </template>
                    <template v-else>
                        <span>{{name}}</span>
                    </template>
                </label>
            </template>

            <template v-else>
                <label 
                    :value="key"
                    @click="toggle(key)"
                >
                    <p class="box"><i class="morningicon">&#xe62d;</i></p>
                    <template v-if="conf.acceptHtml">
                        <span v-html="name"></span>
                    </template>
                    <template v-else>
                        <span>{{name}}</span>
                    </template>
                </label>
            </template>

        </template>
    </div>

    </i-radio>
</template>
 
<script>
import Form                         from 'Common/form';

export default Form.extend({
    name : 'radio',
    props : {
        acceptHtml : {
            type : Boolean,
            default : false
        },
        list : {
            type : Object,
            default : () => ({})
        }
    },
    data : function () {

        return {
            conf : {
                acceptHtml : this.acceptHtml,
                list : this.list
            },
            data : {}
        };

    },
    computed : {},
    methods : {
        _valueFilter : function (value) {

            // filter not exist value.
            if (Object.keys(this.conf.list).indexOf(String(value)) === -1) {

                return undefined;

            }

            return String(value);

        },
        toggle : function (key) {

            let keys = Object.keys(this.conf.list);

            if (keys.indexOf(String(key)) === -1) {

                this.set();

            } else {

                this.set(String(key));

            }

            return this;
            
        }
    },
    created : function () {},
    mounted : function () {}
});
</script>

<style lang="less" src="./index.less"></style>
