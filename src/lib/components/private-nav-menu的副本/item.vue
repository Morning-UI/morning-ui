<template>
    <li
        :class="{
            current : (itemKey === current[deep]),
            'has-child' : (Object.keys(item.childs || {}).length > 0)
        }"

        @click="_to([itemKey], item)"
        @mouseenter="_toggle(true)"
        @mouseleave="_toggle(false)"
    >
        <p
            v-if="typeof item.link === 'string'"
            @click="_linkTo(item.link, item.newTab)"
        >{{item.name || item}}</p>

        <p
            v-else
        >{{item.name || item}}</p>

        <template v-if="item.childs">
            <morning-private-nav-menu
                v-if="deep === 0"

                :id="'ui-nav-item-'+path.replace(/\//g, '-')+'-'+itemKey"
                :list="item.childs"
                :current="current"
                :deep="deep + 1"
                :path="path + '/' + itemKey"
                :submenu-show="data.submenuShow"
                :_to="_to"
                :_linkTo="_linkTo"
            ></morning-private-nav-menu>
            
            <morning-private-nav-menu
                v-else
                :list="item.childs"
                :current="current"
                :deep="deep + 1"
                :path="path + '/' + itemKey"
                :_to="_to"
                :_linkTo="_linkTo"
            ></morning-private-nav-menu>
        </template>
    </li>
</template>

<script>
import TipManager                   from 'Utils/TipManager';
import TriggerManager               from 'Utils/TriggerManager';

export default {
    mixins : [TipManager, TriggerManager],
    props : {
        item : [Object, String],
        itemKey : String,
        current : Array,
        path : {
            type : String,
            default : ''
        },
        deep : {
            type : Number,
            default : 0
        },
        morning : Object,
        vue : Object,
        _to : Function,
        _linkTo : Function
    },
    data : function () {
        return {
            data : {
                submenuShow : false
            }
        };
    },
    methods : {
        _toggle : function (show) {

            if (show === undefined) {

                show = !this.data.submenuShow;

            }

            this.data.submenuShow = show;

        },
        _show : function () {

            this._toggle(true);

        },
        _hide : function () {

            this._toggle(false);

        }
    },
    mounted : function () {

        if (this.deep === 0 &&
            typeof this.item.childs === 'object' &&
            Object.keys(this.item.childs).length > 0) {

            let $ele = document.querySelector(`#ui-nav-item-${this.path.replace(/\//g, '-')}-${this.itemKey}`);

            this.Trigger.$targets = [this.$el, $ele];
            this.Trigger.triggers = 'hover';
            this.Trigger.handlerMap = {
                hover : {
                    in : [this._show],
                    out : [this._hide]
                }
            };
            this.Tip.autoReverse = false;

            this._tipCreate({
                placement : 'bottom',
                element : $ele,
                target : this.$el,
                offset : '-5px 0'
            });

            this.vue.nextTick(() => this._triggerSetListeners());

        }
            
    }
};
</script>

<style lang="less" src="./index.less"></style>
