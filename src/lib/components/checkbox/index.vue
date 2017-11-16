<template>
    <i-checkbox
        :_uiid="uiid"
        :class="[colorClass, stateClass]"

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

            <template v-if="data.value.indexOf(key) !== -1">
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

    </i-checkbox>
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

            return value;

        },
        toggle : function (key, checked) {

            let list = extend(true, [], this.data.value);

            if (checked === undefined) {

                if (list.indexOf(key) !== -1) {
                
                    checked = false;
                
                } else {
                
                    checked = true;
                
                }
            
            }

            checked = !!checked;

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
    mounted : function () {}
};
</script>

<style lang="less" src="./index.less"></style>
