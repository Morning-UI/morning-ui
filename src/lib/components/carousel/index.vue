<template>
    <mor-carousel
        :_uiid="uiid"
        :class="[moreClass]"

        :toggle-time="toggleTime"
        :toggle-type="toggleType"
        :toggle-btn="toggleBtn"
        :indicator-position="indicatorPosition"
        :indicator-type="indicatorType"
        :trigger="trigger"
        :direction="direction"
    >
    
        <div
            class="carousel-wrap"
        >
            <section class="placeholder"></section>
            <div class="carousel-list">
                <slot name="item"></slot>
            </div>
        </div>

        <div class="control">
            <template v-if="conf.toggleBtn">
                <template v-if="conf.direction === 'horizontal'">
                    <morning-btn
                        class="circle left-btn"
                        color="neutral-3"
                        @emit="prev"
                    >
                        <i class="mo-icon mo-icon-left"></i>
                    </morning-btn>
                    <morning-btn
                        class="circle right-btn"
                        color="neutral-3"
                        @emit="next"
                    >
                        <i class="mo-icon mo-icon-right"></i>
                    </morning-btn>
                </template>
                <template v-else>
                    <morning-btn
                        class="circle up-btn"
                        color="neutral-3"
                        @emit="prev"
                    >
                        <i class="mo-icon mo-icon-up"></i>
                    </morning-btn>
                    <morning-btn
                        class="circle down-btn"
                        color="neutral-3"
                        @emit="next"
                    >
                        <i class="mo-icon mo-icon-down"></i>
                    </morning-btn>
                </template>
            </template>
            <ul class="indicator">
                <template v-if="conf.trigger === 'click'">
                    <li
                        v-for="i in data.num"
                        :class="{
                            current : (+data.current+1) === +i
                        }"
                        :key="i"
                        @click="_switch(i - 1)"
                    >
                        <i></i>
                    </li>
                </template>
                <template v-else-if="conf.trigger === 'hover'">
                    <li
                        v-for="i in data.num"
                        :class="{
                            current : (+data.current+1) === +i
                        }"
                        :key="i"
                        @mouseenter="_switch(i - 1)"
                    >
                        <i></i>
                    </li>
                </template>
            </ul>
        </div>
    
    </mor-carousel>
</template>
 
<script>
export default {
    origin : 'UI',
    name : 'carousel',
    props : {
        toggleTime : {
            type : Number,
            default : 0
        },
        toggleType : {
            type : String,
            default : 'none',
            validator : (value => [
                'none',
                'fade',
                'move'
            ].indexOf(value) !== -1)
        },
        toggleBtn : {
            type : Boolean,
            default : false
        },
        indicatorPosition : {
            type : String,
            default : 'inside',
            validator : (value => [
                'inside',
                'outside'
            ].indexOf(value) !== -1)
        },
        indicatorType : {
            type : String,
            default : 'dot',
            validator : (value => [
                'dot',
                'line'
            ].indexOf(value) !== -1)
        },
        trigger : {
            type : String,
            default : 'click',
            validator : (value => [
                'click',
                'hover'
            ].indexOf(value) !== -1)
        },
        direction : {
            type : String,
            default : 'horizontal',
            validator : (value => [
                'horizontal',
                'vertical'
            ].indexOf(value) !== -1)
        }
    },
    computed : {
        _conf : function () {

            return {
                toggleTime : this.toggleTime,
                toggleType : this.toggleType,
                toggleBtn : this.toggleBtn,
                indicatorPosition : this.indicatorPosition,
                indicatorType : this.indicatorType,
                trigger : this.trigger,
                direction : this.direction
            };

        },
        moreClass : function () {

            let classes = {};

            classes[`toggle-type-${this.conf.toggleType}`] = true;
            classes[`indicator-pos-${this.conf.indicatorPosition}`] = true;
            classes[`indicator-type-${this.conf.indicatorType}`] = true;
            classes[`direction-${this.conf.direction}`] = true;

            return classes;

        }
    },
    data : function () {

        return {
            data : {
                num : 0,
                current : 0,
                lastchange : 1,
                autoToggleInterval : null,
                slotObserver : null,
                slotObserverCount : 0
            }
        };

    },
    methods : {
        _initAutoToggle : function () {

            clearInterval(this.data.autoToggleInterval);
            
            if (+this.conf.toggleTime > 0) {

                this.data.autoToggleInterval = setInterval(() => {

                    this.next();

                }, +this.conf.toggleTime);

            }

        },
        _toggleItemCurrent : function ($oldCurrent, $current, noAnimate = false) {

            if ($oldCurrent) {
            
                $oldCurrent.classList.remove('next-old');
                $oldCurrent.classList.remove('prev-old');
                $oldCurrent.classList.remove('next-new');
                $oldCurrent.classList.remove('prev-new');
            
            }
            
            if ($current) {

                $current.classList.remove('next-old');
                $current.classList.remove('prev-old');
                $current.classList.remove('next-new');
                $current.classList.remove('prev-new');

            }

            this.Vue.nextTick(() => {
                
                if ($oldCurrent) {
                    
                    $oldCurrent.classList.remove('current');

                    if (!noAnimate) {

                        if (this.data.lastchange === 1) {

                            $oldCurrent.classList.add('next-old');

                        } else {

                            $oldCurrent.classList.add('prev-old');

                        }

                    }

                }
                
                if ($current) {

                    $current.classList.add('current');

                    if (!noAnimate) {

                        if (this.data.lastchange === 1) {
                            
                            $current.classList.add('next-new');

                        } else {

                            $current.classList.add('prev-new');

                        }

                    }

                }

            });

        },
        _slotUpdated : function () {

            if (!this.$slots.item) {

                return;

            }

            this.data.num = this.$slots.item.length;

            if (this.$slots.item && this.$slots.item[0]) {

                let $itemClone = this.$slots.item[0].elm.cloneNode(true);
                let $placeholder = this.$el.querySelector('.placeholder');

                $placeholder.innerHTML = $itemClone.outerHTML;

            }

        },
        _switchItem : function (noAnimate) {

            let $items = this.$el.querySelectorAll('.carousel-list > div');
            let $currentItem = this.$el.querySelector('.carousel-list > div.current');

            this.Vue.nextTick(() => {

                this._toggleItemCurrent($currentItem, $items[this.data.current], noAnimate);

                if (!noAnimate) {

                    this.$emit('emit', this.data.current);

                }

            });

            this._initAutoToggle();

        },
        _switch : function (index) {

            index = +index;

            if (isNaN(index)) {

                index = 0;

            }

            if (index < 0) {

                index = this.data.num - 1;

            }

            if (index > (this.data.num - 1)) {

                index = 0;

            }
            
            if (this.data.current === 0 && index === (this.data.num - 1)) {
                
                this.data.lastchange = -1;

            } else if (this.data.current === (this.data.num - 1) && index === 0) {

                this.data.lastchange = 1;

            } else if (this.data.current > index) {

                this.data.lastchange = -1;

            } else {

                this.data.lastchange = 1;

            }

            this.data.current = index;

            this.Vue.nextTick(() => {

                this._switchItem();

            });

        },
        switch : function (index) {

            this._switch(index);

        },
        next : function () {

            this._switch(this.data.current + 1);
            
        },
        prev : function () {

            this._switch(this.data.current - 1);

        }
    },
    mounted : function () {

        this.data.slotObserver = new MutationObserver(() => {
            
            this.data.slotObserverCount++;

        });

        this.data.slotObserver.observe(
            this.$el.querySelector('.carousel-list'),
            {
                attributes : true,
                childList : true,
                characterData : true,
                subtree : true
            }
        );

        this.$watch('data.slotObserverCount', () => {

            this._slotUpdated();

        });

        this._slotUpdated();
        this._switchItem(true);

    },
    updated : function () {}
};
</script>

