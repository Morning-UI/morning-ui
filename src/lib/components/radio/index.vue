<template>
    <mor-radio
        :_uiid="uiid"
        :class="[formClass, colorClass, stateClass]"

        :form-name="formName"
        :form-key="formKey"
        :group="group"
        :default-value="defaultValue"
        :hide-name="hideName"
        :clearable="clearable"
        :accept-html="acceptHtml"
        :list="list"
    >

    <div class="note" v-if="!conf.hideName">{{conf.formName}}</div>

    <div class="il">
        <template v-for="(name, key) in conf.list">

            <template v-if="data.value === key">
                <label
                    class="checked"
                    :value="key"
                    :key="key"
                    @click="conf.state !== 'readonly' && toggle(key)"
                >
                    <p class="box"><i class="mo-icon mo-icon-check"></i></p>
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
                    :key="key"
                    @click="conf.state !== 'readonly' && toggle(key)"
                >
                    <p class="box"><i class="mo-icon mo-icon-check"></i></p>
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

    <morning-link v-if="conf.clearable" color="minor" @emit="_clean" class="cleanbtn">清空</morning-link>

    </mor-radio>
</template>
 
<script>
export default {
    origin : 'Form',
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
    computed : {
        _conf : function () {

            return {
                acceptHtml : this.acceptHtml,
                list : this.list
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
};
</script>

<style lang="less" src="./index.less"></style>
