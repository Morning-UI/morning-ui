<template>
    <mor-backtop
        :_uiid="uiid"
        :class="[moreClass]"
    
        :fixed="fixed"
        :right="right"
        :bottom="bottom"
        :scroll-height="scrollHeight"

        @click="_onClick"

        :style="{
            right : conf.fixed ? conf.right : 'inherit',
            bottom : conf.fixed ? conf.bottom : 'inherit'
        }"
    >

    <slot>
        <i class="mo-icon mo-icon-up"></i>
    </slot>
        
    </mor-backtop>
</template>
 
<script>
import PopupManager                 from 'Utils/PopupManager';
import GlobalEvent                  from 'Utils/GlobalEvent';

export default {
    origin : 'UI',
    name : 'backtop',
    mixins : [PopupManager, GlobalEvent],
    props : {
        fixed : {
            type : Boolean,
            default : false
        },
        right : {
            type : String,
            default : '40px'
        },
        bottom : {
            type : String,
            default : '40px'
        },
        scrollHeight : {
            type : Number,
            default : 0
        }
    },
    computed : {
        _conf : function () {

            return {
                fixed : this.fixed,
                right : this.right,
                bottom : this.bottom,
                scrollHeight : this.scrollHeight
            };

        },
        moreClass : function () {

            return {
                fixed : this.conf.fixed,
                show : this.data.show
            };

        }
    },
    data : function () {

        return {
            data : {
                show : true
            }
        };

    },
    methods : {
        _onClick : function () {

            document.body.scrollIntoView({
                behavior : 'smooth',
                block : 'start'
            });

            this.$emit('emit');

        },
        _checkScroll : function () {

            if (this.conf.scrollHeight <= document.documentElement.scrollTop) {

                this.data.show = true;

            } else {

                this.data.show = false;

            }

        }
    },
    created : function () {},
    mounted : function () {

        this._checkScroll();
        this._globalEventAdd('scroll', '_checkScroll');

        this.$watch('conf.fixed', () => {

            if (this.conf.fixed) {

                this._popupShow();

            } else {

                this._popupHide();

            }

        }, {
            immediate : true
        });

    },
    beforeDestroy : function () {

        this._globalEventRemove('scroll', '_checkScroll');

    }
};
</script>
