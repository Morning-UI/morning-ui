<template>
    <mor-timepicker
        :_uiid="uiid"
        :class="[formClass, stateClass]"

        :form-name="formName"
        :form-key="formKey"
        :group="group"
        :default-value="defaultValue"
        :hide-name="hideName"
        :clearable="clearable"
        :format="format"
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

    <template v-if="conf.isList">
        <!-- <morning-select
            :ref="'ui-timepicker-select-0-'+uiid"
            :form-name="conf.formName"
            :default-value="conf.defaultValue"
            :hide-name="conf.hideName"
            :clearable="conf.clearable"
            :align="conf.align"
            prepend="<i class='morningicon'>&#xe607;</i>"

            @value-change="_syncValueFromSelect"
        >
            <li v-for="item in timeList" :value="item.date">{{item.name}}</li>            
        </morning-select> -->
    </template>

    <template v-else>
        <morning-private-timepicker
            :ref="'ui-timepicker-input-0-'+uiid"
            :state="conf.state"

            :form-name="conf.formName"
            :default-value="conf.defaultValue"
            :hide-name="conf.hideName"
            :format="conf.format"
            :align="conf.align"
            :selectable-range="conf.selectableRange"

            @value-change="_syncValueFromInputToRoot"
        >    
        </morning-private-timepicker>
    </template>


    <morning-link v-if="conf.clearable" color="minor" @emit="_clean" class="cleanbtn">清空</morning-link>

    </mor-timepicker>
</template>
 
<script>
// import {
//     format as formatDate,
//     getHours,
//     getMinutes,
//     getSeconds,
//     setHours,
//     setMinutes,
//     setSeconds,
//     isValid,
//     startOfHour,
//     endOfHour,
//     startOfMinute,
//     endOfMinute,
//     closestTo,
//     addMilliseconds,
//     areIntervalsOverlapping
// }                                   from 'date-fns/esm';
// import Time                         from 'Utils/Time';

export default {
    origin : 'Form',
    name : 'timepicker',
    // mixins : [Time],
    props : {
        format : {
            type : String,
            default : 'HH:mm:ss'
        },
        align : {
            type : String,
            default : 'left',
            validator : (value => ['left', 'center', 'right'].indexOf(value) !== -1)
        },
        selectableRange : {
            type : Array,
            default : (() => [])
        },
        isRange : {
            type : Boolean,
            default : false
        },
        separator : {
            type : String,
            default : '至'
        },
        startName : {
            type : String,
            default : '开始时间'
        },
        endName : {
            type : String,
            default : '结束时间'
        },
        isList : {
            type : Boolean,
            default : false
        },
        list : {
            type : Array,
            default : (() => [])
        },
        listStart : {
            type : [String, Boolean],
            default : false
        },
        listEnd : {
            type : [String, Boolean],
            default : false
        },
        listStep : {
            type : String,
            default : '00:30:00'
        }
    },
    computed : {
        _conf : function () {

            return {
                format : this.format,
                align : this.align,
                selectableRange : this.selectableRange,
                isRange : this.isRange,
                separator : this.separator,
                startName : this.startName,
                endName : this.endName,
                isList : this.isList,
                list : this.list,
                listStart : this.listStart,
                listEnd : this.listEnd,
                listStep : this.listStep
            };

        },
    },
    data : function () {

        return {
            data : {}
        };

    },
    methods : {
        _valueFilter : function (value) {

            return value;

        },
        _syncValueFromInputToRoot : function () {

            let input0 = this.$refs[`ui-timepicker-input-0-${this.uiid}`];
            // let input1 = this.$refs[`ui-timepicker-input-1-${this.uiid}`];

            if (!this.conf.isRange && input0) {

                let value = input0.get();

                this._set(value, true);

            }
            //  else if (this.conf.isRange && input0 && input1) {

            //     let val = [
            //         input0.get(),
            //         input1.get()
            //     ];

            //     if (val[1] === undefined) {

            //         val.splice(1, 1);

            //         if (val[0] === undefined) {

            //             val = undefined;

            //         }

            //     }

            //     this._set(val, true);

            // }

        },
        _syncValueToRoot : function () {

            this._syncValueFromInputToRoot();

        },
        _syncFromRootToChild : function () {

            let type = 'input';

            // if (this.conf.isList) {

            //     type = 'select';

            // }

            let input0 = this.$refs[`ui-timepicker-${type}-0-${this.uiid}`];
            // let input1 = this.$refs[`ui-timepicker-${type}-1-${this.uiid}`];
            let value = this.get();

            if (!this.conf.isRange && input0) {

                // if (type === 'select') {

                //     let val = +this._timeStandardDate(value[0]);

                //     if (val) {

                //         input0._set([val], true);

                //     } else {

                //         input0._set(undefined, true);

                //     }

                // } else {

                input0._set(value, true);

                // }

            }
            // else if (this.conf.isRange && input0 && input1) {

            //     if (type === 'select') {

            //         let val0 = +this._timeStandardDate(value[0]);
            //         let val1 = +this._timeStandardDate(value[1]);

            //         if (val0) {

            //             input0._set([val0], true);

            //         } else {

            //             input0._set(undefined, true);

            //         }

            //         if (val1) {

            //             input1._set([val1], true);

            //         } else {

            //             input1._set(undefined, true);

            //         }

            //     } else {

            //         input0._set(value[0], true);
            //         input1._set(value[1], true);

            //     }

            // }

        }
    },
    created : function () {},
    mounted : function () {

        this._syncValueToRoot();

        this.$on('value-change', () => {

            this._syncFromRootToChild();

        });


    }
};
</script>

<style lang="less" src="./index.less"></style>
