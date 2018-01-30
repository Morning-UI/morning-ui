<template>
    <mor-timepicker
        :_uiid="uiid"
        :class="[stateClass]"

        :form-name="formName"
        :form-key="formKey"
        :group="group"
        :default-value="defaultValue"
        :hide-name="hideName"
        :format="format"
        :clearable="clearable"
        :align="align"
        :selectable-range="selectableRange"
        :is-range="isRange"
        :separator="separator"
        :start-name="startName"
        :end-name="endName"
        :is-list="isList"
        :list="list"
        :list-start="listStart"
        :list-end="listEnd"
        :list-step="listStep"
    >


    </mor-timepicker>
</template>
 
<script>
import {
    addHours,
    addMinutes,
    addSeconds,
    format as formatDate,
    parse as parseDate,
    isValid
}                                   from 'date-fns/esm';
import Time                         from 'Utils/Time';

export default {
    methods : {
        _valueFilter : function (value) {

            if (typeof value !== 'object' ||
                !(value instanceof Array)) {

                value = [];

            }

            // if (value[0] instanceof Date) {

            //     value[0] = formatDate(value[0], this.conf.format);

            // }

            // value[0] = parseDate(
            //     `00| ${value[0]}`,
            //     `YY| ${this.conf.format}`,
            //     +new Date()
            // );

            // if (this.conf.isRange) {

            //     if (value[1] instanceof Date) {

            //         value[1] = formatDate(value[1], this.conf.format);

            //     }

            //     value[1] = parseDate(
            //         `00| ${value[1]}`,
            //         `YY| ${this.conf.format}`,
            //         +new Date()
            //     );

            // }

            // if (value &&
            //     value.length === 2 &&
            //     !this.conf.isRange) {

            //     value = [value[0]];

            // }

            // if (value && value[0]) {

            //     this._timeStandardDate(value[0]);

            // }

            // if (value && value[1]) {

            //     this._timeStandardDate(value[1]);

            // }

            console.log(value);

            return value;

        }
    },
    created : function () {},
    }
};
</script>

<style lang="less" src="./index.less"></style>
