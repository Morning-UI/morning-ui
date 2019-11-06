<template>
    <mor-formitem
        :_uiid="uiid"
        :class="[]"

        :label="label"
        :note="note"
        :required="required"
        :_label-width="_labelWidth"
    >
        <div
            class="form-item-name"
            :style="{
                width : conf._labelWidth
            }"
        >
            <span>
                <span class="required" v-if="conf.required">*</span>
                <component
                    :is="{
                        template : ('<span>' + conf.label + '</span>'),
                        data : function () {
                            return {
                                context : this.$parent.$parent.$vnode.context
                            };
                        }
                    }"
                ></component>
            </span>
            <span class="form-item-note" v-html="conf.note"></span>
        </div>

        <div class="form-item-con">
            <slot></slot>
        </div>
    </mor-formitem>
</template>
 
<script>
export default {
    origin : 'UI',
    name : 'formitem',
    props : {
        label : {
            type : String,
            default : ''
        },
        note : {
            type : String,
            default : ''
        },
        required : {
            type : Boolean,
            default : false
        },
        _labelWidth : {
            type : String,
            default : '20%'
        }
    },
    computed : {
        _conf : function () {

            return {
                label : this.label,
                note : this.note,
                required : this.required,
                _labelWidth : this._labelWidth
            };

        }
    },
    data : function () {

        return {
            data : {
                itemParentForm : null
            }
        };

    },
    methods : {
        _linkItemToForm : function (vm) {

            if (vm.$parent && vm.$parent.uiname === 'form') {

                this.data.itemParentForm = vm.$parent;
                vm.$parent._linkChildFormItem(this);

            } else if (vm.$parent) {

                this._linkItemToForm(vm.$parent);

            } else {

                this.data.itemParentForm = null;

            }

        },
        _unlinkItemToForm : function (vm) {

            if (vm.$parent && vm.$parent.uiname === 'form') {

                this.data.itemParentForm = null;
                vm.$parent._unlinkChildFormItem(this);

            } else if (vm.$parent) {

                this._unlinkItemToForm(vm.$parent);

            } else {

                this.data.itemParentForm = null;

            }

        }
    },
    updated : function () {

        if (this.data.itemParentForm) {

            this.data.itemParentForm._syncLabelWidth();

        }

    },
    mounted : function () {

        this._linkItemToForm(this);

    },
    beforeDestroy : function () {

        this._unlinkItemToForm(this);

    }
};
</script>
