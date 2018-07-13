<template>
    <mor-nav
        :_uiid="uiid"
        :class="[moreClass]"
    
        :list="list"
        :position="position"
    >

    <div class="nav-wrap">
        <morning-private-nav-menu
            :list="list"
            :current="data.current"
            :deep="0"
            path=""
            :_to="_to"
            :_linkTo="_linkTo"
        ></morning-private-nav-menu>
    </div>

    </mor-nav>
</template>

<script>
export default {
    origin : 'UI',
    name : 'nav',
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
        _to : function (keys, item) {

            if (item.childs && item.childs.length > 0) {

                return this;

            }

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
