<template>
    <mor-anchor
        :_uiid="uiid"
        :class="[]"

        :show-point="showPoint"
        :sticky="sticky"
        :top="top"
    >
        <div class="content-wrap">
            <slot></slot>
        </div>

        <div class="nav-wrap">

            <morning-sticky
                v-if="conf.sticky"
                position="parent"
                :top="conf.top"
            >
                <div class="anchor-nav">
                    <div class="line"></div>
                    <div
                        v-if="conf.showPoint"

                        class="current-point"
                        :style="{
                            top : data.pointOffset + 'px'
                        }"
                    ></div>
                    <ul class="menu">
                        <li
                            v-for="(item, index) in data.list"
                            :key="index"
                            :class="{
                                current : index === data.current
                            }"
                            :style="{
                                'text-indent' : (item.level - 1) + 'em'
                            }"

                            @click="_onClick(index)"
                        >
                            {{item.title}}
                        </li>
                    </ul>
                </div>
            </morning-sticky>

            <div v-else class="anchor-nav">
                <div class="line"></div>
                <div
                    v-if="conf.showPoint"

                    class="current-point"
                    :style="{
                        top : data.pointOffset + 'px'
                    }"
                ></div>
                <ul class="menu">
                    <li
                        v-for="(item, index) in data.list"
                        :key="index"
                        :class="{
                            current : index === data.current
                        }"
                        :style="{
                            'text-indent' : (item.level - 1) + 'em'
                        }"

                        @click="_onClick(index)"
                    >
                        {{item.title}}
                    </li>
                </ul>
            </div>

        </div>
    </mor-anchor>
</template>
 
<script>
import GlobalEvent                  from 'Utils/GlobalEvent';

export default {
    origin : 'UI',
    name : 'anchor',
    mixins : [GlobalEvent],
    props : {
        showPoint : {
            type : Boolean,
            default : true
        },
        sticky : {
            type : Boolean,
            default : true
        },
        top : {
            type : Number,
            default : 0
        }
    },
    computed : {
        _conf : function () {

            return {
                showPoint : this.showPoint,
                sticky : this.sticky,
                top : this.top
            };

        }
    },
    data : function () {

        return {
            data : {
                list : [],
                current : 0,
                pointOffset : 0
            }
        };

    },
    methods : {
        _resetPoint : function () {

            if (!this.conf.showPoint) {

                return;

            }

            let $li = this.$el.querySelectorAll('.menu > li')[this.data.current];
            let $point = this.$el.querySelector('.current-point');

            if (!$li || !$point) {

                return;

            }

            // 4 is item margin
            this.data.pointOffset = $li.offsetTop + (($li.clientHeight - $point.offsetHeight) / 2) - 1;

        },
        _getAnchors : function () {

            let list = [];
            let $anchors = this.$el.querySelectorAll('[is-anchor]');
            let $otherAnchors = this.$el.querySelectorAll(':scope mor-anchor [is-anchor]');

            $otherAnchors = Array.from($otherAnchors);

            for (let $anchor of $anchors) {

                if ($otherAnchors.indexOf($anchor) === -1) {

                    list.push({
                        title : $anchor.getAttribute('title'),
                        anchor : $anchor.getAttribute('id'),
                        level : $anchor.getAttribute('is-anchor') || 1,
                        $anchor
                    });

                }

            }

            if (JSON.stringify(list) !== JSON.stringify(this.data.list)) {

                this.data.list = list;

            }

        },
        _onClick : function (index) {

            if (index !== this.data.current) {

                this.data.current = index;
                this._anchorTo();

            } else {

                this._anchorTo();

            }

        },
        _currentChange : function () {

            this._resetPoint();
            this.$emit('switch');

        },
        _anchorTo : function (changeHash = true) {

            this.data.list[this.data.current].$anchor.scrollIntoView({
                behavior : 'instant',
                block : 'start'
            });

            if (changeHash) {

                window.location.hash = `#${this.data.list[this.data.current].anchor}`;

            }

        },
        _updateCurrentFromHash : function () {

            let hash = window.location.hash.replace(/^#/, '');

            for (let index in this.data.list) {

                let anchor = this.data.list[index];

                if (anchor.anchor === hash) {

                    this.data.current = +index;

                    break;

                }

            }

        },
        _checkScroll : function () {

            for (let index in this.data.list) {

                let anchor = this.data.list[index];

                if (anchor.$anchor.getBoundingClientRect().y > 0) {

                    this.data.current = (+index < 1) ? 0 : (+index - 1);

                    return;

                }

            }

            this.data.current = this.data.list.length - 1;

        },
        _anchorToOnload : function () {

            this._anchorTo(false);

        },
        to : function (index) {

            if (typeof index === 'number') {

                this.data.current = +index;
                this._anchorTo();

            } else {

                for (let i in this.data.list) {

                    let anchor = this.data.list[i];

                    if (anchor.anchor === String(index)) {

                        this.data.current = +i;
                        this._anchorTo();

                        break;

                    }

                }

            }

            return this;

        },
        getIndex : function () {

            return +this.data.current;

        },
        getId : function () {

            return this.data.list[this.data.current].anchor;

        },
        getTitle : function () {

            return this.data.list[this.data.current].title;

        }
    },
    created : function () {},
    mounted : function () {

        this._getAnchors();
        this._updateCurrentFromHash();

        this.Vue.nextTick(() => {

            this.$watch('data.current', this._currentChange);
            this._resetPoint();
            this._globalEventAdd('scroll', '_checkScroll');
            this._globalEventAdd('hashchange', '_updateCurrentFromHash');

            if (window.location.hash) {

                this._globalEventAdd('DOMContentLoaded', '_anchorToOnload');

            }

        });

    },
    updated : function () {

        this._getAnchors();

    },
    beforeDestroy : function () {

        this._globalEventRemove('scroll', '_checkScroll');
        this._globalEventRemove('DOMContentLoaded', '_anchorToOnload');
        this._globalEventRemove('hashchange', '_updateCurrentFromHash');

    }
};
</script>

<style lang="less" src="./index.less"></style>
