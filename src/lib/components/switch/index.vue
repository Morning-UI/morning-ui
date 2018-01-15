<template>
    <mor-switch
        :_uiid="uiid"
        :class="[formClass, colorClass, stateClass, moreClass]"

        :form-name="formName"
        :form-key="formKey"
        :group="group"
        :default-value="defaultValue"
        :hide-name="hideName"
        :clearable="clearable"
        :auto-hide-name="autoHideName"
    >

    <div class="note">{{conf.formName}}</div>
    <div class="track" @click="toggle()">
        <div class="point"></div>
    </div>

    <morning-link v-if="conf.clearable" color="minor" @emit="_clean" class="cleanbtn">清空</morning-link>

    </mor-switch>
</template>
 
<script>
export default {
    origin : 'Form',
    name : 'switch',
    props : {
        autoHideName : {
            type : Boolean,
            default : false
        }
    },
    computed : {
        _conf : function () {

            return {
                autoHideName : this.autoHideName
            };

        },
        moreClass : function () {

            return {
                'hide-name' : !!this.conf.hideName || !!this.data.nameIsEmpty,
                open : !!this.data.value
            };

        }
    },
    data : function () {

        return {
            data : {
                nameIsEmpty : false
            }
        };

    },
    methods : {
        _valueFilter : function (value) {

            return !!value;

        },
        _setNameIsEmpty : function () {

            if (!this.conf.autoHideName) {

                this.data.nameIsEmpty = false;

                return;

            }

            if (this.conf.formName === '' || this.conf.formName === undefined) {

                this.data.nameIsEmpty = true;

            } else {

                this.data.nameIsEmpty = false;

            }

        },
        toggle : function (open) {

            if (open === undefined) {

                open = !this.data.value;

            }

            this.set(!!open);

            return this;

        }
    },
    created : function () {},
    mounted : function () {

        this.$watch('conf.formName', () => {

            this._setNameIsEmpty();

        }, {
            immediate : true
        });

        this.$watch('conf.autoHideName', () => {

            this._setNameIsEmpty();

        });

    }
};
</script>

<style lang="less" src="./index.less"></style>
