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
                    class="item checked"
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
                    class="item"
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
        toggle : function (key) {

            let keys = Object.keys(this.conf.list);

            if (keys.indexOf(String(key)) === -1) {

                this.set();

            } else {

                this.set(String(key));

            }
            
        }
    },
    created : function () {

        this.$watch('data.value', newVal => {

            if (newVal === undefined) {

                return;

            }

            if (Object.keys(this.conf.list).indexOf(String(newVal)) === -1) {

                this.data.value = undefined;

            }

        }, {
            immediate : true
        });

    },
    mounted : function () {}
});
</script>

<style lang="less" src="./index.less"></style>
