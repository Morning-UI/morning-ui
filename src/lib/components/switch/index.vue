<template>
    <i-switch
        :_uiid="uiid"
        :class="[styleClass, stateClass, moreClass]"

        :form-name="formName"
        :form-key="formKey"
        :group="group"
        :default-value="defaultValue"
        :hide-name="hideName"
        :auto-hide-name="autoHideName"
    >

    <div class="note">{{conf.formName}}</div>
    <div class="track" @click="toggle()">
        <div class="point"></div>
    </div>

    </i-switch>
</template>
 
<script>
import Form                         from 'Common/form';

export default Form.extend({
    name : 'switch',
    props : {
        autoHideName : {
            type : Boolean,
            default : false
        }
    },
    data : function () {

        return {
            conf : {
                autoHideName : this.autoHideName
            },
            data : {
                nameIsEmpty : false
            }
        };

    },
    computed : {
        moreClass : function () {

            return {
                hideName : !!this.conf.hideName || !!this.data.nameIsEmpty,
                open : !!this.data.value
            };

        }
    },
    methods : {
        toggle : function (open) {

            if (open === undefined) {

                open = !this.data.value;

            }

            this.set(!!open);

            return this;

        }
    },
    created : function () {

        this.$watch('data.value', newVal => {

            this.data.value = !!newVal;

        }, {
            immediate : true
        });
    
    },
    mounted : function () {

        this.$watch('conf.formName', newVal => {

            if (!this.conf.autoHideName) {

                return;

            }

            if (newVal === '' || newVal === undefined) {

                this.data.nameIsEmpty = true;

            } else {

                this.data.nameIsEmpty = false;

            }

        }, {
            immediate : true
        });

    }
});
</script>

<style lang="less" src="./index.less"></style>
