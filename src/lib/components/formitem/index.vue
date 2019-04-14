<template>
    <mor-formitem
        :_uiid="uiid"
        :class="[]"

        :label="label"
    >
        <div class="form-item-name">
            {{conf.label}}
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
        }
    },
    computed : {
        _conf : function () {

            return {
                label : this.label
            };

        }
    },
    data : function () {

        return {
            data : {
                parentForm : null,
            }
        };

    },
    methods : {
        _linkForm : function (vm) {

            if (vm.$parent.uiname === 'form') {

                this.data.parentForm = vm.$parent;
                vm.$parent._linkFormitem(this);

            } else if (vm.$parent) {

                this._linkForm(vm.$parent);

            } else {

                this.data.parentForm = null;

            }

        }
    },
    updated : function () {

        this._linkForm(this);

    },
    mounted : function () {

        this._linkForm(this);

        this.$watch('data.parentForm')

    }
};
</script>
