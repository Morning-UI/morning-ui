<template>
    <mor-sticky
        :_uiid="uiid"
        :class="[moreClass]"
        :style="{
            width : data.stickyW,
            height : data.stickyH,
            top : (data.sticky && conf.top !== undefined && conf.bottom === undefined) ? `${conf.top}px` : 'auto',
            bottom : (data.sticky && conf.bottom !== undefined) ? `${conf.bottom}px` : 'auto'
        }"

        :position="position"
        :top="top"
        :bottom="bottom"
    >

        <div
            class="sticky-box"
            :class="boxClass"
            :style="boxStyle"
        >
            <slot></slot>
        </div>

    </mor-sticky>
</template>x
 
<script>
import Stickyfill                   from 'stickyfilljs/dist/stickyfill.min.js';
import GlobalEvent                  from 'Utils/GlobalEvent';

export default {
    origin : 'UI',
    name : 'sticky',
    mixins : [GlobalEvent],
    props : {
        position : {
            type : String,
            default : 'viewport',
            validator : (value => ['viewport', 'parent'].indexOf(value) !== -1)
        },
        top : {
            type : Number,
            default : 0
        },
        bottom : {
            type : Number,
            default : undefined
        }
    },
    computed : {
        _conf : function () {

            return {
                position : this.position,
                top : this.top,
                bottom : this.bottom
            };

        },
        moreClass : function () {

            return {
                sticky : this.conf.position === 'parent'
            };

        },
        boxClass : function () {

            return {
                fixed : this.data.fixed && (this.conf.position === 'viewport'),
            };

        },
        boxStyle : function () {

            if (this.data.fixed && (this.conf.position === 'viewport')) {

                return {
                    top : `${this.data.fixedY}px`,
                    left : `${this.data.fixedX}px`
                };

            }

        }
    },
    data : function () {

        return {
            data : {
                stickyObj : null,
                sticky : false,
                fixed : false,
                fixedX : 0,
                fixedY : 0,
                stickyH : 'auto',
                stickyW : 'auto'
            }
        };

    },
    methods : {
        _checkScroll : function () {

            let elRect = this.$el.getBoundingClientRect();
            let elY = elRect.y;

            if (this.conf.bottom !== undefined &&
                (elY + elRect.height) >= (window.innerHeight - this.conf.bottom)) {

                this.data.fixed = true;
                this.data.fixedX = elRect.x;
                this.data.fixedY = window.innerHeight - this.conf.bottom - elRect.height;

            } else if (this.conf.bottom === undefined && elY <= this.conf.top) {

                this.data.fixed = true;
                this.data.fixedX = elRect.x;
                this.data.fixedY = this.conf.top;

            } else {

                this.data.fixed = false;

            }

        }
    },
    mounted : function () {

        this.$watch('conf.position', () => {

            if (this.conf.position === 'viewport') {

                window.addEventListener('scroll', this._checkScroll);

            } else {

                window.removeEventListener('scroll', this._checkScroll);

            }

            if (this.conf.position === 'parent') {

                this.data.stickyObj = new Stickyfill.Sticky(this.$el);
                this.data.sticky = true;

            } else {

                this.data.sticky = false;

                if (this.data.stickyObj) {

                    this.data.stickyObj.remove();
                    this.data.stickyObj = null;

                }

            }

        }, {
            immediate : true
        });

    },
    updated : function () {
            
        let $box = this.$el.querySelector('.sticky-box');
        let boxRect = $box.getBoundingClientRect();

        this.data.stickyH = `${boxRect.height}px`;
        this.data.stickyW = `${boxRect.width}px`;

        if (this.data.stickyObj) {

            this.data.stickyObj.refresh();

        }

    },
    beforeDestroy : function () {

        window.removeEventListener('scroll', this._checkScroll);

        if (this.data.stickyObj) {
    
            this.data.stickyObj.remove();

        }

    }
};
</script>

<style lang="less" src="./index.less"></style>
