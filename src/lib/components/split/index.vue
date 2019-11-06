<template>
    <mor-split
        :_uiid="uiid"
        :class="[moreClass]"

        :direction="direction"
        :min="min"
    >
        <div class="split-wrap" :id="'mor-split-wrap-'+uiid">
            <div class="a-container" :style="{'width': data.aContainerWidth, 'height': data.aContainerHeight}">
                <slot name="a"></slot>    
            </div>
            
            <div
                class="split-bar"
                :style="{
                    top : data.splitY,
                    left : data.splitX
                }"
                :id="'mor-split-bar-'+uiid"
                @mousedown="_moveItemRecord(0)"
            >
                <span></span>
                <span></span>
                <span></span>
            </div>

            <div class="split-placeholder"></div>

            <div class="b-container" :style="{'width': data.bContainerWidth, 'height': data.bContainerHeight}">
                <slot name="b"></slot>    
            </div>
        </div>
    </mor-split>
</template>
 
<script>
import Move                         from 'Utils/Move';

const barSize = 6;

export default {
    origin : 'Form',
    name : 'split',
    mixins : [Move],
    props : {
        direction : {
            type : String,
            default : 'horizontal',
            validator : (value => [
                'horizontal',
                'vertical'
            ].indexOf(value) !== -1)
        },
        min : {
            type : Number,
            default : 20
        }
    },
    computed : {
        _conf : function () {

            return {
                direction : this.direction,
                min : this.min
            };

        },
        moreClass : function () {

            return {
                moving : this.Move.moving,
                [`${this.conf.direction}-split`] : true
            }

        }
    },
    data : function () {

        return {
            data : {
                $splitWrap : null,
                $splitBar : null,
                splitX : 0,
                splitY : 0,
                splitXNoUnit : 0,
                splitYNoUnit : 0,
                aContainerWidth : '100%',
                bContainerWidth : '100%',
                aContainerHeight : '100%',
                bContainerHeight : '100%',
                notMove : true
            }
        };

    },
    methods : {
        _initSplitXY : function () {
          
            if (this.conf.direction === 'horizontal') {

                let halfWidth = (this.data.$splitWrap.getBoundingClientRect().width - barSize / 2) / 2;

                this.data.splitX = `${halfWidth}px`;
                this.data.splitY = 0;
                this.data.aContainerHeight = '100%';
                this.data.bContainerHeight = '100%';

            } else {

                let halfHeight = (this.data.$splitWrap.getBoundingClientRect().height - barSize / 2) / 2;

                this.data.splitX = 0;
                this.data.splitY = `${halfHeight}px`;
                this.data.aContainerWidth = '100%';
                this.data.bContainerWidth = '100%';

            }

        },
        _refreshContainerWidthHeight : function () {

            if (this.data.notMove) {

                if (this.conf.direction === 'horizontal') {

                    this.data.aContainerWidth = this.data.splitX;
                    this.data.bContainerWidth = this.data.splitX;

                } else {

                    this.data.aContainerHeight = this.data.splitY;
                    this.data.bContainerHeight = this.data.splitY;

                }

                return;

            }

            let wrapSize;

            if (this.conf.direction === 'horizontal') {
            
                wrapSize = this.data.$splitWrap.getBoundingClientRect().width;

                this.data.aContainerWidth = this.data.splitX;
                this.data.bContainerWidth = `${wrapSize - this.data.splitXNoUnit - barSize}px`;

            } else {
            
                wrapSize = this.data.$splitWrap.getBoundingClientRect().height;

                this.data.aContainerHeight = this.data.splitY;
                this.data.bContainerHeight = `${wrapSize - this.data.splitYNoUnit - barSize}px`;

            }

        },
        _resetMoveOptions : function () {

            if (this.conf.direction === 'horizontal') {

                this.Move.range = [
                    this.conf.min,
                    false,
                    this.data.$splitWrap.getBoundingClientRect().width - this.data.$splitBar.getBoundingClientRect().width - this.conf.min,
                    false
                ];
                this.Move.lockX = false;
                this.Move.lockY = true;

            } else {

                this.Move.range = [
                    false,
                    this.conf.min,
                    false,
                    this.data.$splitWrap.getBoundingClientRect().height - this.data.$splitBar.getBoundingClientRect().height - this.conf.min
                ];
                this.Move.lockX = true;
                this.Move.lockY = false;

            }

        } 
    },
    mounted : function () {

        this.data.$splitWrap = this.$el.querySelector(`#mor-split-wrap-${this.uiid}`);
        this.data.$splitBar = this.$el.querySelector(`#mor-split-bar-${this.uiid}`);

        this.Move.delay = 0;
        this.Move.target = `#mor-split-bar-${this.uiid}`;
        this.Move.container = `#mor-split-wrap-${this.uiid}`;
        this.Move.type = 'absolute';
        this.Move.can = true;

        this.Vue.nextTick(() => {

            this._initSplitXY();
            this._refreshContainerWidthHeight();

        });

        this.$watch('conf.direction', () => {

            this._resetMoveOptions();

        }, {
            immediate : true
        });

        this.$on('_moveStarted', () => {

            this.data.notMove = false;

        });

        this.$on('_moveChange', () => {

            let x = this.Move.current.x;
            let y = this.Move.current.y;

            if (this.conf.direction === 'horizontal') {

                this.data.splitX = `${x}px`;
                this.data.splitXNoUnit = x;

            } else {

                this.data.splitY = `${y}px`;
                this.data.splitYNoUnit = y;

            }
        
            this._refreshContainerWidthHeight();

        });

    }
};
</script>
