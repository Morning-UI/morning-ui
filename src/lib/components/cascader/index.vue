<template>
    <mor-cascader
        :_uiid="uiid"
        :class="[formClass, stateClass, moreCLass]"

        :form-name="formName"
        :form-key="formKey"
        :group="group"
        :hide-name="hideName"
        :clearable="clearable"
        :inside-name="insideName"
        :list="list"
        :submenu-trigger="submenuTrigger"
        :show-last-name="showLastName"
        :change-on-select="changeOnSelect"
    >

    <div class="form-name" v-if="!conf.hideName && !!conf.formName">{{conf.formName}}</div>

    <div class="cascader-wrap">
        <div class="cascader-input" :id="'mor-cascader-input-'+uiid">
            <span
                class="note"
                v-if="data.value.length === 0"
            >{{conf.insideName}}</span>
            <span
                class="note has-selected"
                v-else
            >{{data.valueName}}</span>
            <i class="mo-icon mo-icon-dropdown"></i>
        </div>

        <morning-popover
            class="mor-cascader-popover"
            :ref="'mor-cascader-popover-'+uiid"

            :target="'#mor-cascader-input-'+uiid"
            :trigger="popoverTrigger"
            placement="bottom"
            align="start"
            :auto-reverse="true"

            @show="_popoverShow"
            @hide="_popoverHide"
        >
            <template v-for="level in (data.currentLevel + 1)">
                <div class="cascader-menu" :key="level">
                    <ul>
                        <template v-for="(item, key) in data.menuList[level - 1]">
                            <li
                                v-if="typeof item === 'string' && key !== '__parentKey'"
                                :key="key"
                                :class="{
                                    current : (data.value[level - 1] === key && data.menuList[level - 1].__parentKey === data.value[level - 2]),
                                    'last-current' : (data.value[level - 1] === key && data.menuList[level - 1].__parentKey === data.value[level - 2] && level === data.value.length)
                                }"
                                @click="_selected(level - 1, key)"
                                @mouseenter="_inMenu(level - 1, key)"
                            >
                                {{item}}
                            </li>
                            <li
                                v-else-if="key !== '__parentKey' && !item.disable"
                                :key="key"
                                :class="{
                                    current : (data.value[level - 1] === key && data.menuList[level - 1].__parentKey === data.value[level - 2]),
                                    'last-current' : (data.value[level - 1] === key && data.menuList[level - 1].__parentKey === data.value[level - 2] && level === data.value.length)
                                }"
                                @click="_selected(level - 1, key)"
                                @mouseenter="_inMenu(level - 1, key)"
                            >
                               {{item.name}}
                            </li>
                            <li
                                v-else-if="key !== '__parentKey' && item.disable"
                                :key="key"
                                :class="{
                                    current : (data.value[level - 1] === key && data.menuList[level - 1].__parentKey === data.value[level - 2]),
                                    'last-current' : (data.value[level - 1] === key && data.menuList[level - 1].__parentKey === data.value[level - 2] && level === data.value.length)
                                }"
                                class="disabled"
                            >
                               {{item.name}}
                            </li>
                        </template>
                    </ul>
                </div>
            </template>
        </morning-popover>
    </div>

    <morning-link v-if="conf.clearable" color="minor" @emit="_clean" class="cleanbtn">清空</morning-link>

    </mor-cascader>
</template>
 
<script>
import extend                       from 'extend';

export default {
    origin : 'Form',
    name : 'cascader',
    props : {
        insideName : {
            type : String,
            default : '选择'
        },
        list : {
            type : Object,
            default : (() => ({}))
        },
        submenuTrigger : {
            type : String,
            default : 'click',
            validator : (value => ['hover', 'click'].indexOf(value) !== -1)
        },
        showLastName : {
            type : Boolean,
            default : false
        },
        changeOnSelect : {
            type : Boolean,
            default : false
        }
    },
    computed : {
        _conf : function () {

            return {
                insideName : this.insideName,
                list : this.list,
                submenuTrigger : this.submenuTrigger,
                showLastName : this.showLastName,
                changeOnSelect : this.changeOnSelect
            };

        },
        moreCLass : function () {

            return {
                'popover-show' : this.data.popoverShow
            };

        },
        popoverTrigger : function () {

            if (this.conf.state === 'readonly' || this.conf.state === 'disabled') {

                return 'method';

            }

            return 'click';

        }
    },
    data : function () {

        return {
            data : {
                currentLevel : 0,
                menuList : [],
                menuSelected : [],
                popoverShow : false,
                hoverMenuKeys : [],
                valueName : ''
            }
        };

    },
    methods : {
        _valueFilter : function (value) {

            if (!Array.isArray(value)) {

                value = [];

            }

            let key;
            let currentMenu = this.conf.list;

            for (let index in value) {

                key = value[index];

                if (currentMenu[key] === undefined) {

                    value = value.slice(0, index);

                    break;

                }

                currentMenu = currentMenu[key].children || {};

            }

            return value;

        },
        _getCurrentList : function () {

            if (this.conf.submenuTrigger === 'hover') {

                return extend(true, [], this.data.hoverMenuKeys);

            }

            return extend(true, [], this.data.menuSelected);

        },
        _refreshValueName : function () {

            let name = [];
            let value = this.get();

            for (let level in value) {

                if (this.data.menuList.length > level) {

                    let item = this.data.menuList[level][value[level]];

                    if (typeof item === 'string') {

                        name.push(item);

                    } else {

                        name.push(item.name);

                    }

                }

            }

            if (this.conf.showLastName) {

                this.data.valueName = name[name.length - 1];

            } else {

                this.data.valueName = name.join(' / ');

            }

        },
        _selected : function (level, key) {

            let value = this._getCurrentList();

            value.splice(level, value.length - level);
            value[level] = key;
            this.data.menuSelected = value;

            if (this.conf.changeOnSelect) {

                this._set(value, true);

            }

            // is last level, auto close popover
            if (!this.data.menuList[level][key].children) {

                if (!this.conf.changeOnSelect) {

                    this._set(value, true);

                }

                this.$refs[`mor-cascader-popover-${this.uiid}`].hide();

            }

        },
        _computedMenuList : function () {

            let value = this._getCurrentList();
            let currentList = extend(true, {}, this.conf.list);
            let list = [currentList];
            let level = 0;

            currentList.__parentKey = undefined;

            for (let key of value) {

                let item = currentList[key];

                if (item && item.children) {

                    item.children.__parentKey = key;
                    list.push(item.children);
                    currentList = item.children;
                    level += 1;

                }

            }

            this.data.currentLevel = level;
            this.data.menuList = list;

            this.Vue.nextTick(() => {

                this.$refs[`mor-cascader-popover-${this.uiid}`].position();
    
            });

        },
        _popoverShow : function () {

            this.data.popoverShow = true;
            this.data.hoverMenuKeys = this.get();

        },
        _popoverHide : function () {

            this.data.popoverShow = false;

        },
        _inMenu : function (level, key) {

            if (this.conf.submenuTrigger === 'hover') {
    
                let list = this.data.hoverMenuKeys;

                list.splice(level, list.length - level);
                list[level] = key;
                this.data.hoverMenuKeys = list;
                this._computedMenuList();

            }

        }
    },
    created : function () {},
    mounted : function () {

        this.data.menuSelected = this.get();

        if (this.conf.submenuTrigger === 'hover') {

            this.data.hoverMenuKeys = this.get();

        }

        this._computedMenuList();
        this._refreshValueName();

        this.$watch('data.menuSelected', () => {

            this._computedMenuList();

        });

        this.$on('value-change', () => {

            this.data.menuSelected = this.get();
            this.Vue.nextTick(this._refreshValueName);

        });

    }
};
</script>
