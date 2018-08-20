<template>
    <mor-carousel
        :_uiid="uiid"
        :class="[]"
    >
    
        <div class="carousel-wrap">
            <slot name="item"></slot>
        </div>

        <div class="control">
            <ul class="switch">
                <li
                    v-for="i in data.num"
                    :class="{
                        current : (+data.current+1) === +i
                    }"
                >
                    
                </li>
            </ul>
        </div>
    
    </mor-carousel>
</template>
 
<script>
export default {
    origin : 'UI',
    name : 'carousel',
    props : {},
    computed : {
        _conf : function () {

            return {};

        }
    },
    data : function () {

        return {
            data : {
                num : 0,
                current : 0
            }
        };

    },
    methods : {
        _slotUpdated : function () {

            this.data.num = this.$slots.item.length;

            let $items = this.$el.querySelectorAll('.carousel-wrap > div');
            let $currentItem = this.$el.querySelector('.carousel-wrap > div.current');

            if ($currentItem) {

                $currentItem.classList.remove('current');

            }

            if ($items && $items[this.data.current]) {
            
                $items[this.data.current].classList.add('current');

            }

        },
        _next : function () {},
        _prev : function () {}
    },
    mounted : function () {

        this._slotUpdated();

    },
    updated : function () {

        this._slotUpdated();

    }
};
</script>

<style lang="less" src="./index.less"></style>

