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
        :disabled-options="disabledOptions"
    >

    <div class="form-name" v-if="!conf.hideName && !!conf.formName">{{conf.formName}}</div>

    <div class="il">
        <template v-for="(name, key) in conf.list">

            <template v-if="data.value === key">
                <label
                    class="checked"
                    :class="{
                        disabled : data.disabledOptions[key]
                    }"
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
                    :class="{
                        disabled : data.disabledOptions[key]
                    }"
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
        },
        disabledOptions : {
            type : Array,
            default : () => ([])
        }
    },
    computed : {
        _conf : function () {

            return {
                acceptHtml : this.acceptHtml,
                list : this.list,
                disabledOptions : this.disabledOptions
            };

        }
    },
    data : function () {

        return {
            data : {
                disabledOptions : {}
            }
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
        _refreshDisabledOptions : function () {

            let list = {};

            for (let key of this.conf.disabledOptions) {

                list[key] = true;

            }

            this.data.disabledOptions = list;

            if (this.data.disabledOptions[this.get()]) {

                this.set(undefined);

            }

        },
        toggle : function (key) {

            if (this.data.disabledOptions[key]) {

                return this;

            }

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
    mounted : function () {

        this.$watch('conf.disabledOptions', () => {

            this._refreshDisabledOptions();

        }, {
            deep : true,
            immediate : true
        });

    }
};
</script>

<style lang="less" src="./index.less"></style>
