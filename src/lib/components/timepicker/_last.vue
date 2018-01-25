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

    <template v-if="conf.isRange">
        <morning-inside-timepicker
            class="timepicker-input-0"

            :ref="'ui-timepicker-input-0-'+uiid"
            :form-name="(conf.startName === false) ? conf.formName : conf.startName"
            :default-value="conf.defaultValue"
            :hide-name="conf.hideName"
            :format="conf.format"
            :clearable="conf.clearable"
            :align="conf.align"
            :selectable-range="conf.selectableRange"

            @value-change="_syncValueFromInput"
        >    
        </morning-inside-timepicker>

        <div class="separator">{{conf.separator}}</div>

        <morning-inside-timepicker
            class="timepicker-input-1"

            :ref="'ui-timepicker-input-1-'+uiid"
            :form-name="(conf.endName === false) ? conf.formName : conf.endName"
            :default-value="conf.defaultValue"
            :hide-name="conf.hideName"
            :format="conf.format"
            :clearable="conf.clearable"
            :align="conf.align"
            :selectable-range="conf.selectableRange"

            @value-change="_syncValueFromInput"
        >    
        </morning-inside-timepicker>
    </template>


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
import arrayUniq                    from 'array-uniq';
import extend                       from 'extend';
import sortBy                       from 'lodash.sortby';
import Time                         from 'Utils/Time';

export default {
    origin : 'Form',
    name : 'timepicker',
    mixins : [Time],
    computed : {
        timeList : function () {

            if (!this.conf.isList) {

                return [];

            }

            let list = extend(true, [], this.conf.list);

            if (this.conf.listStart && this.conf.listEnd && this.conf.listStep) {

                let start = this.conf.listStart;
                let end = this.conf.listEnd;
                let addHour,
                    addMinute,
                    addSecond;

                addHour = this.conf.listStep.split(':')[0];
                addMinute = this.conf.listStep.split(':')[1];
                addSecond = this.conf.listStep.split(':')[2];

                start = parseDate(
                    `00| ${start}`,
                    `YY| ${this.conf.format}`,
                    0
                );

                end = parseDate(
                    `00| ${end}`,
                    `YY| ${this.conf.format}`,
                    0
                );

                while (+start <= +end) {

                    list.push(start);

                    start = addHours(start, addHour);
                    start = addMinutes(start, addMinute);
                    start = addSeconds(start, addSecond);

                }

            }

            for (let i in list) {

                let date = this._timeStandardDate(list[i]);

                list[i] = {
                    date : +date,
                    name : formatDate(date, this.conf.format)
                };

            }

            list = arrayUniq(list);
            list = sortBy(list, v => (v.date));

            return list;

        }
    },
    data : function () {

        return {
            data : {}
        };

    },
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

        },
        _syncValueFromSelect : function () {

            let select0 = this.$refs[`ui-timepicker-select-0-${this.uiid}`];
            let select1 = this.$refs[`ui-timepicker-select-1-${this.uiid}`];
            let start;
            let end;

            if (!this.conf.isRange && select0) {

                let select0Value = select0.get();
                let date = new Date(+select0Value[0]);

                if (isValid(date)) {

                    start = formatDate(date, this.conf.format);

                }

                if (start) {

                    this._set([start], true);

                } else if (this.get().length !== 0) {

                    this._set(undefined, true);

                }

            } else if (this.conf.isRange && select0 && select1) {

                let select0Value = select0.get();
                let select1Value = select1.get();
                let date0 = new Date(+select0Value[0]);
                let date1 = new Date(+select1Value[0]);

                if (isValid(date0)) {

                    start = formatDate(date0, this.conf.format);

                }

                if (isValid(date1)) {

                    end = formatDate(date1, this.conf.format);

                }

                let val = [start, end];

                if (val[1] === undefined) {

                    val.splice(1, 1);

                    if (val[0] === undefined) {

                        val = undefined;

                    }

                }

                if (val === undefined && this.get().length === 0) {

                    return;

                }

                this._set(val, true);

            }

        },
    },
    created : function () {},
    }
};
</script>

<style lang="less" src="./index.less"></style>
