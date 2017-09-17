<template>
    <i-textarea
        :_uiid="uiid"
        :class="[stateClass]"

        :form-name="formName"
        :form-key="formKey"
        :group="group"
        :default-value="defaultValue"
        :hide-name="hideName"
        :rows="rows"
    >

    <textarea
        :placeholder="placeholder"
        :disabled="conf.state === 'disabled'"
        :rows="conf.rows"

        v-model="data.value"
    ></textarea>

    </i-textarea>
</template>
 
<script>
import Form                         from 'Common/form';

export default Form.extend({
    name : 'textarea',
    props : {
        rows : {
            type : Number,
            default : 4
        }
    },
    data : function () {

        return {
            conf : {
                rows : this.rows
            },
            data : {}
        };

    },
    computed : {
        placeholder : function () {

            if (!this.conf.hideName) {

                return this.conf.formName;

            }

            return false;

        }
    },
    methods : {
        setRows : function (num) {

            let row = this.conf.rows;

            if (typeof num === 'number') {
                
                row = num;

            } else if (typeof num === 'string') {

                if (/^\+/.test(num)) {

                    row += +num.replace(/^\+/, '');

                } else if (/^-/.test(num)) {

                    row -= +num.replace(/^-/, '');

                }

            }

            if (row) {

                if (row < 1) {
                
                    row = 1;
                
                }
                
                this.conf.rows = row;

            }

        }
    },
    created : function () {

        this.$watch('data.value', (newVal) => {

            if (newVal === undefined) {

                this.data.value = '';

                return;

            }

            this.data.value = String(newVal);

        }, {
            immediate : true
        });

    },
    mounted : function () {}
});
</script>

<style lang="less">
@import '~Common/var.less';

i-textarea{
    position: relative;
    z-index: 1;
    display: block;
    width: 100%;
    box-sizing: border-box;
    vertical-align: top;

    textarea{
        box-sizing: border-box;
        z-index: 2;
        font-size: 14px;
        padding: 0.8em;
        width: 100%;
        background: @colorWhite;
        border: 1px @colorGray solid;
        border-radius: @borderRadius;
        line-height: 1.4em;
        color: darken(@colorGray, 20%) !important;
        outline: none;
        -webkit-appearance: none;
        resize: none;
        transition: height 0.2s;

        &:focus{
            border-color: @colorLightBlue;
            color: @colorBlack !important;
        }

        &::-webkit-scrollbar{
            width: 8px;
            background-color: rgba(0, 0, 0, 0.05);
        }

        &::-webkit-scrollbar-thumb{
            width: 8px;
            background: rgba(0, 0, 0, 0.1);
            border-radius: 4px;
        }
    }

    &.st-normal{}
    &.st-disabled{
        textarea{
            border: 1px darken(@colorGray, 25%) solid;
            background-color: @colorGray;
            -webkit-user-select: none;
            cursor: not-allowed !important;
            color: darken(@colorGray, 35%) !important;
        }
    }

    // default statement
    &{
        .st-normal;
    }

}
</style>
