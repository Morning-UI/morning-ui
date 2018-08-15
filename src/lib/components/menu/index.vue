<template>
    <mor-menu
        :_uiid="uiid"
        :class="[]"

        :menu="menu"
        :current-menu="currentMenu"
        :position="position"
        :auto-toggle-current="autoToggleCurrent"
    >

    <morning-private-menu
        :class="rootMenuMoreClass"

        :deep="0"
        :menu="conf.menu"
        :current-menu="data.currentMenu"
        :position="conf.position"

        @emit="_emit"
    ></morning-private-menu>

    </mor-menu>
</template>
 
<script>
// import extend                       from 'extend';
export default {
    origin : 'UI',
    name : 'menu',
    props : {
        menu : {
            type : Object,
            default : (() => ({}))
        },
        currentMenu : {
            type : String,
            default : ''
        },
        position : {
            type : String,
            default : 'top',
            validator : (value => ['top', 'side'].indexOf(value) !== -1)
        },
        autoToggleCurrent : {
            type : Boolean,
            default : true
        }
    },
    computed : {
        _conf : function () {

            return {
                menu : this.menu,
                currentMenu : this.currentMenu,
                position : this.position,
                autoToggleCurrent : this.autoToggleCurrent
            };

        },
        rootMenuMoreClass : function () {

            let classes = {};

            classes[`pos-${this.conf.position}`] = true;

            return classes;

        }
    },
    data : function () {

        return {
            data : {
                currentMenu : ''
            }
        };

    },
    methods : {
        _emit : function (data) {

            if (!data.childs || Object.keys(data.childs).length > 0) {

                return;

            }

            data._path.pop();
            data._path.reverse();

            if (this.conf.autoToggleCurrent) {

                this.data.currentMenu = data._path.join('/');

            }
            
            delete data._path;

            this.$emit('emit', data);

        }
    },
    mounted : function () {

        this.$watch('conf.currentMenu', () => {

            this.data.currentMenu = this.conf.currentMenu;

        }, {
            immediate : true
        });

    }
};
</script>

<style lang="less" src="./index.less"></style>
