<template>
    <mor-datetimepicker
        :_uiid="uiid"
        :class="[formClass, stateClass]"

        :form-name="formName"
        :form-key="formKey"
        :group="group"
        :default-value="defaultValue"
        :hide-name="hideName"
        :clearable="clearable"
    >

    <div class="wrap">
        datetimepicker
    </div>

    <morning-link v-if="conf.clearable" color="minor" @emit="_clean" class="cleanbtn">清空</morning-link>

    </mor-datetimepicker>
</template>
 
<script>
import {
    format as formatDate
}                                   from 'date-fns';

export default {
    origin : 'Form',
    name : 'datetimepicker',
    mixins : [],
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
