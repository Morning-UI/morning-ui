<template>
    <mor-split
        :_uiid="uiid"
        :class="[moreClass]"
    >
        <div class="split-wrap">
            <div class="a-container" :style="{'width': data.aContainerWidth}">
                <slot name="a"></slot>    
            </div>
            
            <div
                class="split-bar"
                :style="{
                    top : data.splitY,
                    left : data.splitX
                }"
                @mousedown="_moveItemRecord(0)"
            >
                <span></span>
                <span></span>
                <span></span>
            </div>

            <div class="split-placeholder"></div>

            <div class="b-container" :style="{'width': data.bContainerWidth}">
                <slot name="b"></slot>    
            </div>
        </div>
    </mor-split>
</template>
 
<script>
import Move                         from 'Utils/Move';

const barWidth = 6;
const containerMinWidth = 20;

export default {
    origin : 'Form',
    name : 'split',
    mixins : [Move],
    props : {},
    computed : {
        _conf : function () {

            return {};

        },
        moreClass : function () {

            return {
                moving : this.Move.moving
            }

        }
    },
    data : function () {

        return {
            data : {
                splitX : `calc(50% - ${barWidth / 2}px)`,
                splitY : 0,
                splitXNoUnit : 0,
                splitYNoUnit : 0,
                aContainerWidth : 0,
                bContainerWidth : 0,
                notMove : true
            }
        };

    },
    methods : {
        _refreshContainerWidth : function () {

            if (this.data.notMove) {

                this.data.aContainerWidth = this.data.splitX;
                this.data.bContainerWidth = this.data.splitX;

                return;

            }
            
            let width = this.data.$splitWrap.getBoundingClientRect().width;

            this.data.aContainerWidth = this.data.splitX;
            this.data.bContainerWidth = `${width - this.data.splitXNoUnit - barWidth}px`;

        }
    },
    mounted : function () {

        this.data.$splitWrap = this.$el.querySelector('.split-wrap');
        this.data.$splitBar = this.$el.querySelector('.split-bar');
        // this.data.$AContainer = this.$el.querySelector('.a-container');
        // this.data.$BContainer = this.$el.querySelector('.b-container');

        this.Move.delay = 0;
        this.Move.target = '.split-bar';
        this.Move.container = '.split-wrap';
        this.Move.type = 'absolute';
        this.Move.range = [
            containerMinWidth,
            false,
            this.data.$splitWrap.getBoundingClientRect().width - this.data.$splitBar.getBoundingClientRect().width - containerMinWidth,
            false
        ];
        this.Move.lockY = true;
        this.Move.can = true;

        this._refreshContainerWidth();

        this.$on('_moveStarted', () => {

            this.data.notMove = false;

        });

        this.$on('_moveChange', () => {

            let x = this.Move.current.x;
            let y = this.Move.current.y;

            this.data.splitX = `${x}px`;
            // this.data.splitY = `${y}px`;
            this.data.splitXNoUnit = x;
            // this.data.splitYNoUnit = y;
            this._refreshContainerWidth();

        });

    }
};
</script>
