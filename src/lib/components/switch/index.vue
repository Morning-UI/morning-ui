<template>
    <mor-switch
        :_uiid="uiid"
        :class="[formClass, colorClass, stateClass, moreClass]"

        :form-name="formName"
        :form-key="formKey"
        :group="group"
        :hide-name="hideName"
        :clearable="clearable"
        :open-note="openNote"
        :close-note="closeNote"
        :open-mark="openMark"
        :close-mark="closeMark"
    >

    <div class="form-name" v-if="!conf.hideName && !!conf.formName">{{conf.formName}}</div>
    
    <div class="wrap">
        <div class="close-note" v-if="conf.closeNote" v-html="conf.closeNote"></div>
        <div class="track" @click="conf.state !== 'readonly' && toggle()">
            <div class="open-mark" v-if="conf.openMark" v-html="conf.openMark"></div>
            <div class="point"></div>
            <div class="close-mark" v-if="conf.closeMark" v-html="conf.closeMark"></div>
        </div>
        <div class="open-note" v-if="conf.openNote" v-html="conf.openNote"></div>
    </div>

    <morning-link v-if="conf.clearable" color="minor" @emit="_clean" class="cleanbtn">清空</morning-link>

    </mor-switch>
</template>
 
<script>
export default {
    origin : 'Form',
    name : 'switch',
    props : {
        openNote : {
            type : String,
            default : ''
        },
        closeNote : {
            type : String,
            default : ''
        },
        openMark : {
            type : String,
            default : ''
        },
        closeMark : {
            type : String,
            default : ''
        }
    },
    computed : {
        _conf : function () {

            return {
                openNote : this.openNote,
                closeNote : this.closeNote,
                openMark : this.openMark,
                closeMark : this.closeMark
            };

        },
        moreClass : function () {

            return {
                open : !!this.data.value
            };

        }
    },
    data : function () {

        return {
            data : {}
        };

    },
    methods : {
        _valueFilter : function (value) {

            return !!value;

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
    mounted : function () {}
};
</script>
