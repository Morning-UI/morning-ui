<template>
    <i-checkbox
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

            <template v-if="data.value.indexOf(key) !== -1">
                <label
                    class="item checked"
                    :value="key"
                    @click="toggle(key)"
                >
                    <p class="box"><i class="iconfont">&#xe62d;</i></p>
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
                    <p class="box"><i class="iconfont">&#xe62d;</i></p>
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
import Form                         from 'Common/form';

export default Form.extend({
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

        }
    },
    created : function () {

        this.$watch('data.value', newVal => {

            if (typeof newVal !== 'object' ||
                !(newVal instanceof Array)) {

                this.data.value = [];

            }

        }, {
            immediate : true
        });

    },
    mounted : function () {}
});
</script>

<style lang="less" src="./index.less"></style>
