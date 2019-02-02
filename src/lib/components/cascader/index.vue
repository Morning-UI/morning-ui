<template>
    <mor-cascader
        :_uiid="uiid"
        :class="[formClass, stateClass]"

        :form-name="formName"
        :form-key="formKey"
        :group="group"
        :default-value="defaultValue"
        :hide-name="hideName"
        :clearable="clearable"
    >

    <div class="form-name" v-if="!conf.hideName && !!conf.formName">{{conf.formName}}</div>

    <div class="cascader-wrap">
        <div class="cascader-input">
            <span class="note">选择</span>
            <i class="mo-icon mo-icon-dropdown"></i>
        </div>
    </div>

    <morning-link v-if="conf.clearable" color="minor" @emit="_clean" class="cleanbtn">清空</morning-link>

    </mor-cascader>
</template>
 
<script>
export default {
    origin : 'Form',
    name : 'cascader',
    props : {},
    computed : {
        _conf : function () {

            return {};

        }
    },
    data : function () {

        return {
            data : {}
        };

    },
    methods : {
        _valueFilter : function (value) {

            return value;

        }
    },
    created : function () {},
    mounted : function () {}
};
</script>

<style lang="less" src="./index.less"></style>
