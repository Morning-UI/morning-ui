<template>
    <mor-img
        :_uiid="uiid"
        :class="[moreClass]"

        :src="src"
        :width="width"
        :height="height"
        :alt="alt"
        :title="title"
        :preview="preview"
    >
        <img
            :src="conf.src"
            :width="conf.width"
            :height="conf.height"
            :alt="conf.alt"
            :title="conf.title"
        />

        <div
            v-if="conf.preview"
            class="preview-note"
            @click="_onClick"
        >
            <i class="mo-icon mo-icon-fullscreen"></i>
        </div>

        <p class="note">
            <slot></slot>
        </p>

        <morning-dialog
            :ref="'ui-dialog-preview-'+uiid"
            class="ui-dialog-preview"
            :width="'auto'"
            :height="'auto'"
            show-type="center"
            v-if="conf.preview"

            @hide="_previewHide"
        >

            <img
                :src="conf.src"
                :alt="conf.alt"
                :title="conf.title"
            />

        </morning-dialog>
    </mor-img>
</template>
 
<script>
export default {
    origin : 'UI',
    name : 'img',
    props : {
        src : {
            type : String,
            default : undefined
        },
        width : {
            type : String,
            default : 'auto'
        },
        height : {
            type : String,
            default : 'auto'
        },
        alt : {
            type : String,
            default : undefined
        },
        title : {
            type : String,
            default : undefined
        },
        preview : {
            type : Boolean,
            default : false
        }
    },
    computed : {
        _conf : function () {

            return {
                src : this.src,
                width : this.width,
                height : this.height,
                alt : this.alt,
                title : this.title,
                preview : this.preview
            };

        },
        moreClass : function () {

            let classes = {};

            return classes;

        }
    },
    data : function () {

        return {
            data : {
                showPreview : false
            }
        };

    },
    methods : {
        _onClick : function () {

            if (this.conf.preview === false) {

                return;

            }

            this.data.showPreview = !this.data.showPreview;

        },
        _previewHide : function () {

            this.data.showPreview = false;

        },
        togglePreview : function (show) {

            if (this.conf.preview === false) {

                return this;

            }

            if (show === undefined) {

                show = !this.data.showPreview;

            }

            this.data.showPreview = !!show;

            return this;

        }
    },
    mounted : function () {

        this.$watch('data.showPreview', () => {

            let $dialog = this.$refs[`ui-dialog-preview-${this.uiid}`];

            if (this.data.showPreview) {

                $dialog.toggle(true);
                this.$emit('show-preview');

            } else {

                $dialog.toggle(false);
                this.$emit('hide-preview');

            }

        });

    }
};
</script>
