<template>
    <mor-textscroll
        :_uiid="uiid"
        :class="[colorClass]"

        :list="list"
        :height="height"
        :direction="direction"
        :interval="interval"
        :animate-time="animateTime"
    >
        <div class="tc-container" :style="{height : conf.height}">
            <div
                class="tc-item"
                v-for="(text, index) in textList"
                :key="index"
                :style="{
                    top : (data.currentIndex === index) ? 0 : (conf.direction === 'up' ? ('-' + conf.height) : (conf.height)),
                    transition : 'top ' + (conf.animateTime / 1000) + 's',
                    transitionTimingFunction : (conf.interval === 0) ? 'linear' : 'ease'
                }"
            >
                <component
                    :is="{
                        template : ('<span>' + text + '</span>'),
                        data : function () {
                            return {
                                context : this.$parent.$vnode.context
                            };
                        }
                    }"
                ></component>
            </div>
        </div>
    </mor-textscroll>
</template>
 
<script>
const defaultAnimateTime = 200;
const defaultInterval = 2000;

export default {
    origin : 'UI',
    name : 'textscroll',
    props : {
        list : {
            type : Array,
            default : (() => ([]))
        },
        height : {
            type : String,
            default : '21px'
        },
        direction : {
            type : String,
            default : 'up',
            validator : (value => [
                'up',
                'down'
            ].indexOf(value) !== -1)
        },
        interval : {
            type : Number,
            default : defaultInterval
        },
        animateTime : {
            type : Number,
            default : defaultAnimateTime
        }
    },
    computed : {
        _conf : function () {

            return {
                list : this.list,
                height : this.height,
                direction : this.direction,
                interval : this.interval,
                animateTime : this.animateTime
            };

        },
        textList : function () {

            if (this.conf.list && this.conf.list.length === 0) {

                return [this.conf.list[0], this.conf.list[0]];

            }

            return this.conf.list;

        }
    },
    data : function () {

        return {
            data : {
                currentIndex : 0,
                nextTimer : null,
                toTimer : null,
                $container : null
            }
        };

    },
    methods : {
        _setNextTimer : function () {

            if (this.conf.interval === 0) {

                this.next();

            } else {

                clearTimeout(this.data.nextTimer);
                this.data.nextTimer = setTimeout(() => {
                    
                    this.next();

                }, this.conf.interval);

            }

        },
        _resetTextPos : function () {

            let $items = this.data.$container.querySelectorAll('.tc-item');
            let first = true;

            for (let $item of $items) {

                if (first) {

                    first = false;

                } else if (this.conf.direction === 'up') {
                        
                    $item.style.top = this.conf.height;

                } else if (this.conf.direction === 'down') {
                    
                    $item.style.top = `-${this.conf.height}`;

                }

            }

        },
        _to : function (index) {

            let maxLen = this.textList.length - 1;
            let lastIndex = this.data.currentIndex;

            if (index < 0) {

                index = maxLen - 1;

            }

            if (index > maxLen) {

                index = 0;

            }

            let $lastItem = this.data.$container.querySelectorAll('.tc-item')[lastIndex];
            let $currentItem = this.data.$container.querySelectorAll('.tc-item')[index];

            $currentItem.style.opacity = 1;
            this.data.currentIndex = index;
            this.$emit('emit', index);
            clearTimeout(this.data.toTimer);
            this.data.toTimer = setTimeout(() => {

                // let saveTransition = $lastItem.style.transition;

                $lastItem.style.opacity = 0;
                // $lastItem.style.transition = 'none';

                if (this.conf.direction === 'up') {

                    $lastItem.style.top = this.conf.height;
                
                } else if (this.conf.direction === 'down') {

                    $lastItem.style.top = `-${this.conf.height}`;

                }

                // $lastItem.style.transition = saveTransition;
                this._setNextTimer();

            }, this.conf.animateTime);

            return this;

        },
        next : function () {

            return this._to(this.data.currentIndex + 1);

        }
    },
    mounted : function () {

        this.data.$container = this.$el.querySelector('.tc-container');

        this._resetTextPos();
        this._setNextTimer();
        // this.$watch('conf.interval', () => {

        //     this._setInterval();

        // }, {
        //     immediate : true
        // });

    }
};
</script>
