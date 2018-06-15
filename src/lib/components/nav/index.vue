<template>
    <mor-nav
        :_uiid="uiid"
        :class="[moreClass]"
    
        :list="list"
        :position="position"
    >

    <div class="nav-wrap">
        <nav-menu
            :list="list"
            :current="data.current"
            :to="to"
            :_linkTo="_linkTo"
        >
            <template slot-scope="{
                item,
                current,
                deep,
                path,
                to,
                _linkTo
            }">
                <nav-menu
                    :list="item.childs"
                    :current="current"
                    :deep="deep"
                    :path="path"
                    :to="to"
                    :_linkTo="_linkTo"
                ></nav-menu>
            </template>
        </nav-menu>
    </div>

    </mor-nav>
</template>

<script>
import navMenu                      from './nav-menu.vue';

export default {
    origin : 'UI',
    name : 'nav',
    components : {
        'nav-menu' : navMenu
    },
    props : {
        list : {
            type : Object,
            default : (() => {})
        },
        position : {
            type : String,
            default : 'top',
            validator : (value => ['top', 'side', 'bottom'].indexOf(value) !== -1)
        }
    },
    computed : {
        _conf : function () {

            return {
                list : this.list,
                position : this.position
            };

        },
        moreClass : function () {

            let classes = {};

            classes[`pos-${this.conf.position}`] = true;

            return classes;

        },
        menuKeysByLevel : function () {

            let menu = {};

            menu[0] = Object.keys(this.conf.list);

            return menu;

        }
    },
    data : function () {

        return {
            data : {
                current : []
            }
        };

    },
    methods : {
        _linkTo : function (link, newTab) {

            if (newTab) {

                window.open(link);

            } else {

                window.location.href = link;

            }

        },
        to : function (keys) {

            let level = 0;

            while (keys[level]) {

                if (this.menuKeysByLevel[level].indexOf(keys[level]) !== -1) {

                    if (level === 0) {

                        this.data.current.splice(0, this.data.current.length);

                    }

                    this.data.current.push(keys[level]);

                }

                level++;

            }

            return this;

        }
    },
    mounted : function () {

        this.data.current.push(this.menuKeysByLevel[0][0]);

        // this.$watch('conf.list', () => {

        // }, {
        //     deep : true,
        //     immediate : true
        // });

    }
};
</script>

<style lang="less" src="./index.less"></style>
