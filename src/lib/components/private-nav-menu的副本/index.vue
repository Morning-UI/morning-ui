<template>
    <mor-private-nav-menu
        :_uiid="uiid"
        :class="{
            'root-menu' : conf.deep === 0
        }"

        :list="list"
        :current="current"
        :path="path"
        :deep="deep"
        :submenu-show="submenuShow"
        :_to="_to"
        :_linkTo="_linkTo"
    >
        <div class="nav-menu-wrap" :class="[wrapClass]">
            <ul
                :class="{
                    'root-menu' : (conf.deep === 0),
                    'sub-menu' : conf.deep > 0
                }"
            >
                <nav-item
                    v-for="(item, key) in conf.list"
                    :item="item"
                    :item-key="key"
                    :key="key"
                    :current="conf.current"
                    :path="conf.path"
                    :deep="conf.deep"
                    :morning="morning"
                    :vue="Vue"
                :_to="_to"
                    :_linkTo="_linkTo"
                ></nav-item>
            </ul>
        </div>
    </mor-private-nav-menu>
</template>

<script>
import TipManager                   from 'Utils/TipManager';
import navItem                      from './item.vue';


export default {
    origin : 'UI',
    private : true,
    name : 'private-nav-menu',
    mixins : [TipManager],
    components : {
        'nav-item' : navItem
    },
    props : {
        list : Object,
        current : Array,
        path : {
            type : String,
            default : ''
        },
        deep : {
            type : Number,
            default : 0
        },
        submenuShow : {
            type : Boolean,
            default : false
        },
        _to : Function,
        _linkTo : Function
    },
    computed : {
        _conf : function () {

            return {
                list : this.list,
                current : this.current,
                path : this.path,
                deep : this.deep,
                submenuShow : this.submenuShow,
                _to : this._to,
                _linkTo : this._linkTo
            };

        },
        wrapClass : function () {

            let classes = {};

            if (this.conf.submenuShow) {

                classes.show = true;
                classes.hide = false;

            } else {

                classes.show = false;
                classes.hide = true;

            }

            if (this.deep === 0) {

                classes['root-menu'] = true;

            }

            if (this.deep === 1) {

                classes['second-menu'] = true;

            }

            return classes;

        }
    }
};
</script>

<style lang="less" src="./index.less"></style>
