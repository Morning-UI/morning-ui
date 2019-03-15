<template>
    <mor-private-menu
        :_uiid="uiid"
        :class="[moreClass]"

        :item-key="itemKey"
        :deep="deep"
        :menu="menu"
        :current-menu="currentMenu"
        :position="position"
        :root-item-show-list="rootItemShowList"
        :side-collapse="sideCollapse"
    >

    <ul
        :class="{
            'root-menu' : conf.deep === 0,
            'sub-menu' : conf.deep > 0
        }"
    >
        <template v-for="(group, name) in (conf.groups || {'__all':false})">

            <template v-if="name !== '__all'">
                <li class="menu-group-title" :key="name">{{name}}</li>
            </template>

            <template v-for="(item, key) in (_getMenuByKey(group) || conf.menu)">
                <li
                    v-if="typeof item === 'string'"
                    :key="key"
                    :class="{
                        'current' : (key === currentMenuList[deep]),
                        'last-current' : (key === currentMenuList[deep] && deep === currentMenuList.length-1),
                        'has-group' : name !== '__all',
                        'show' : !!data.itemShowList['menu-item-'+conf.deep+'-'+key]
                    }"
                >
                    <a href="javascript:;" @click="_itemClick(key, {name : item});_toggleSubmenu('menu-item-'+conf.deep+'-'+key);" v-html="item"></a>
                </li>
                <li
                    v-else
                    :key="key"
                    :class="{
                        'current' : (key === currentMenuList[deep]),
                        'last-current' : (key === currentMenuList[deep] && deep === currentMenuList.length-1),
                        'has-group' : name !== '__all',
                        'is-disable' : item.disable,
                        'show' : !!data.itemShowList['menu-item-'+conf.deep+'-'+key]
                    }"
                >
                    <a
                        v-if="item.children && Object.keys(item.children).length > 0"
                        href="javascript:;"
                        class="has-child-menu"
                        @click="_itemClick(key, item);_toggleSubmenu('menu-item-'+conf.deep+'-'+key);"
                        v-html="item.name"
                    ></a>
                    <a
                        v-else
                        :href="item.link ? item.link : 'javascript:;'"
                        :target="item.newtab ? '_blank' : '_self'"
                        @click="_itemClick(key, item);_toggleSubmenu('menu-item-'+conf.deep+'-'+key);"
                        v-html="item.name"
                    ></a>

                    <i
                        v-if="(conf.deep > 0 && item.children) || (conf.position === 'side' && item.children)"
                        class="mo-icon has-child-menu-icon"
                        :class="{
                            'mo-icon-right' : (conf.position === 'top' || (conf.sideCollapse && conf.position === 'side')),
                            'mo-icon-down' : (conf.position === 'side' && !conf.sideCollapse)
                        }"
                    ></i>

                    <morning-private-menu
                        v-if="item.children && Object.keys(item.children).length > 0"
                        class="sub-menu-wrap"
                        :class="{
                            'deep-submenu' : conf.deep > 0
                        }"
                        :item-key="key"
                        :deep="conf.deep+1"
                        :menu="item.children"
                        :groups="item.groups"
                        :current-menu="conf.currentMenu"
                        :position="conf.position"
                        :root-item-show-list="conf.rootItemShowList"
                        :side-collapse="conf.sideCollapse"

                        @emit="_emit"
                    ></morning-private-menu>
                </li>
            </template>
        </template>
    </ul>

    </mor-private-menu>
</template>
 
<script>
export default {
    origin : 'UI',
    private : true,
    name : 'private-menu',
    props : {
        itemKey : {
            type : String,
            default : ''
        },
        deep : {
            type : Number,
            default : 0
        },
        menu : {
            type : Object,
            default : (() => ({}))
        },
        currentMenu : {
            type : String,
            default : ''
        },
        groups : {
            type : Object,
            default : undefined
        },
        position : {
            type : String,
            default : 'top'
        },
        rootItemShowList : {
            type : Object,
            default : (() => ({}))
        },
        sideCollapse : {
            type : Boolean,
            default : false
        }
    },
    computed : {
        _conf : function () {

            return {
                itemKey : this.itemKey,
                deep : this.deep,
                menu : this.menu,
                currentMenu : this.currentMenu,
                groups : this.groups,
                position : this.position,
                rootItemShowList : this.rootItemShowList,
                sideCollapse : this.sideCollapse
            };

        },
        currentMenuList : function () {

            return this.conf.currentMenu.split('/');

        },
        moreClass : function () {

            return {
                'pos-side-with-collapse' : this.conf.sideCollapse
            };

        }
    },
    data : function () {

        return {
            data : {
                itemShowList : {}
            }
        };

    },
    methods : {
        _getMenuByKey : function (keys) {

            if (keys === false) {

                return false;

            }

            let menu = {};

            for (let key of keys) {

                menu[key] = this.conf.menu[key];

            }

            return menu;

        },
        _emit : function (data) {

            data._path.push(this.conf.itemKey);

            this.$emit('emit', data);

        },
        _itemClick : function (key, item) {

            if (item.disable) {

                return;

            }

            let itemObj = {
                key,
                name : item.name,
                link : item.link || null,
                newtab : item.newtab || false,
                children : item.children || {},
                _path : [key, this.conf.itemKey]
            };
            
            if (typeof item.handler === 'function') {

                item.handler(itemObj);

            }

            this.$emit('emit', itemObj);

        },
        _toggleSubmenu : function (id) {

            if (this.conf.position === 'side') {

                this.data.itemShowList[id] = !this.data.itemShowList[id];
                this.$forceUpdate();

            }

        }
    },
    mounted : function () {

        this.$watch('conf.rootItemShowList', () => {

            this.data.itemShowList = this.conf.rootItemShowList;

        }, {
            immediate : true,
            deep : true
        });
        
    }
};
</script>
