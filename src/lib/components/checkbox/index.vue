<template>
    <mor-checkbox
        :_uiid="uiid"
        :class="[formClass, colorClass, stateClass, moreClass]"

        :form-name="formName"
        :form-key="formKey"
        :group="group"
        :default-value="defaultValue"
        :hide-name="hideName"
        :clearable="clearable"
        :accept-html="acceptHtml"
        :list="list"
        :disabled-options="disabledOptions"
        :max="max"
    >

    <div class="note" v-if="!conf.hideName">{{conf.formName}}</div>

    <div class="il">
        <template v-for="(name, key) in conf.list">

            <template v-if="data.value.indexOf(key) !== -1">
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

    </mor-checkbox>
</template>
 
<script>
import extend                       from 'extend';
import arrayUniq                    from 'array-uniq';

export default {
    origin : 'Form',
    name : 'checkbox',
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
        },
        max : {
            type : Number,
            default : Infinity
        }
    },
    computed : {
        _conf : function () {

            return {
                acceptHtml : this.acceptHtml,
                list : this.list,
                disabledOptions : this.disabledOptions,
                max : this.max
            };

        },
        moreClass : function () {

            return {
                'is-max' : this.isMax
            };

        },
        isMax : function () {

            if (this.data.value.length >= this.conf.max) {

                return true;

            }

            return false;

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

            if (typeof value !== 'object' ||
                !(value instanceof Array)) {

                return [];

            }

            // filter not exist value.
            for (let index in value) {

                let val = value[index];

                if (Object.keys(this.conf.list).indexOf(String(val)) === -1) {

                    value.splice(index, 1);

                }

            }

            while (value.length > this.conf.max) {

                value.pop();

            }

            return value;

        },
        _refreshDisabledOptions : function () {

            let list = {};

            for (let key of this.conf.disabledOptions) {

                list[key] = true;

            }

            this.data.disabledOptions = list;

        },
        toggle : function (key, checked) {

            if (this.data.disabledOptions[key]) {

                return this;

            }

            let list = extend(true, [], this.data.value);

            if (checked === undefined) {

                if (list.indexOf(key) !== -1) {
                
                    checked = false;
                
                } else {
                
                    checked = true;
                
                }
            
            }

            checked = !!checked;

            if (list.length === this.conf.max && checked) {

                return this;

            }

            if (checked) {

                list.push(key);
            
            } else if (list.indexOf(key) !== -1) {

                list.splice(list.indexOf(key), 1);
            
            }
            
            this.set(arrayUniq(list));

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
