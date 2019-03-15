<template>
    <mor-menu
        :_uiid="uiid"
        :class="[sizeClass, colorClass, moreClass]"

        :menu="menu"
        :current-menu="currentMenu"
        :position="position"
        :auto-toggle-current="autoToggleCurrent"
        :position-current="positionCurrent"
        :side-expand="sideExpand"
        :side-collapse="sideCollapse"

        @mousemove="_mousemoveInMenu"
    >

    <morning-private-menu
        :class="rootMenuMoreClass"

        :deep="0"
        :menu="conf.menu"
        :current-menu="data.currentMenu"
        :position="conf.position"
        :root-item-show-list="data.rootItemShowList"
        :side-collapse="conf.sideCollapse"

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
        },
        positionCurrent : {
            type : Boolean,
            default : false
        },
        sideExpand : {
            type : Boolean,
            default : false
        },
        sideCollapse : {
            type : Boolean,
            default : false
        }
    },
    computed : {
        _conf : function () {

            return {
                menu : this.menu,
                currentMenu : this.currentMenu,
                position : this.position,
                autoToggleCurrent : this.autoToggleCurrent,
                positionCurrent : this.positionCurrent,
                sideExpand : this.sideExpand,
                sideCollapse : this.sideCollapse
            };

        },
        moreClass : function () {

            return {
                expand : this.isSideExpand,
                collapse : this.isSideCollapse
            };

        },
        rootMenuMoreClass : function () {

            let classes = {};

            classes[`pos-${this.conf.position}`] = true;

            return classes;

        },
        isSideExpand : function () {

            return this.conf.sideExpand && (this.conf.position === 'side');

        },
        isSideCollapse : function () {

            return this.conf.sideCollapse && (this.conf.position === 'side');

        }
    },
    data : function () {

        return {
            data : {
                currentMenu : '',
                rootItemShowList : {}
            }
        };

    },
    methods : {
        _emit : function (data) {

            if (!data.children || Object.keys(data.children).length > 0) {

                return;

            }

            data._path.pop();
            data._path.reverse();

            if (this.conf.autoToggleCurrent) {

                this.data.currentMenu = data._path.join('/');

            }
            
            delete data._path;

            this.$emit('emit', data);

        },
        _mousemoveInMenu : function () {

            if (this.data.isPositionCurrent && this.conf.position !== 'side') {

                this.data.rootItemShowList = {};
                this.data.isPositionCurrent = false;

            }

        }
    },
    mounted : function () {

        this.$watch('conf.currentMenu', () => {

            this.data.currentMenu = this.conf.currentMenu;

            if (this.conf.positionCurrent) {

                let list = this.data.currentMenu.split('/');
                let showList = {};

                for (let deep in list) {

                    if (list[deep] !== '') {

                        showList[`menu-item-${deep}-${list[deep]}`] = true;

                    }

                }

                this.data.isPositionCurrent = true;
                this.data.rootItemShowList = showList;

            }

        }, {
            immediate : true,
            deep : true
        });

        this.$watch('conf.sideCollapse', () => {

            this.data.rootItemShowList = {};

        });

    }
};
</script>
