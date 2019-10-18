<template>
    <mor-label
        :_uiid="uiid"
        :class="[sizeClass, colorClass, stateClass, moreClass]"

        :closable="closable"
    >
        <slot></slot>
        <i
            class="mo-icon mo-icon-close close-icon"
            v-if="conf.closable"
            @click="close(index)"
        ></i>
    </mor-label>
</template>
 
<script>
export default {
    origin : 'UI',
    name : 'label',
    props : {
        closable : {
            type : Boolean,
            default : false
        }
    },
    computed : {
        _conf : function () {

            return {
                closable : this.closable
            };

        },
        moreClass : function () {

            let classes = {};

            classes.image = this.data.hasImage;
            classes.icon = this.data.hasIcon;

            return classes;

        }
    },
    data : function () {

        return {
            data : {
                hasImage : false,
                hasIcon : false
            }
        };

    },
    methods : {
        close : function () {

            this.$emit('close');
            this.$destroy();

            return this;

        },
        _checkImage : function () {

            let $slots = this.$slots.default;
            let hasImage = false;

            for (let $slot of $slots) {

                if ($slot.tag === 'img') {

                    hasImage = true;

                }

            }

            this.data.hasImage = hasImage;

        },
        _checkIcon : function () {

            let $slots = this.$slots.default;
            let hasIcon = false;

            for (let $slot of $slots) {

                if ($slot.tag === 'i') {

                    hasIcon = true;

                }

            }

            this.data.hasIcon = hasIcon;

        }
    },
    mounted : function () {

        this._checkImage();
        this._checkIcon();

    },
    updated : function () {

        this._checkImage();
        this._checkIcon();

    }
};
</script>
