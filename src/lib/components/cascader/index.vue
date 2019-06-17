<template>
    <mor-cascader
        :_uiid="uiid"
        :class="[formClass, sizeClass, stateClass, moreCLass]"

        :form-name="formName"
        :form-note="formNote"
        :form-key="formKey"
        :group="group"
        :hide-name="hideName"
        :clearable="clearable"
        :_errorMessage="_errorMessage"
        :inside-name="insideName"
        :list="list"
        :submenu-trigger="submenuTrigger"
        :show-last-name="showLastName"
        :change-on-select="changeOnSelect"
        :can-search="canSearch"
    >

    <div class="form-name" v-if="!conf.hideName && !!conf.formName">{{conf.formName}}</div>
    <div class="form-note" v-if="!!conf.formNote">{{conf.formNote}}</div>

    <div class="cascader-wrap form-body">
        <div class="cascader-input" :class="{focus: data.popoverShow}" :id="'mor-cascader-input-'+uiid" @click="_showPopover()">
            <morning-textinput
                v-if="conf.canSearch && (conf.state !== 'readonly' && conf.state !== 'disabled')"
                :id="'mor-cascader-ti-' + uiid"
                :ref="'mor-cascader-ti-'+uiid"
                :class="{
                    'empty-content' : this.data.textinputEmpty
                }"
                :size="conf.size"
                :inside-clearable="false"
                inside-name=""
                @value-change="_search()"
                @focus="_textinputFocus()"
                @blur="_textinputBlur()"
            ></morning-textinput>

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
            class="mor-cascader-search-result"
            :ref="'mor-cascader-search-result-'+uiid"

            :target="'#mor-cascader-input-'+uiid"
            trigger="method"
            placement="bottom"
            align="start"
            :auto-reverse="true"

            @show="_searchPopoverShow"
            @hide="_searchPopoverHide"
        >
    
            <ul>
                <li v-for="(item, index) in data.searchResult" :key="index" v-html="item.name" @click="_pickSearchResult(item.value)"></li>
                <li v-if="data.searchResult.length === 0" class="nomatch">
                    <morning-empty note="无匹配项目"></morning-empty>
                </li>
            </ul>
            
        </morning-popover>

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

    <div class="error-message">{{conf._errorMessage}}</div>
    <morning-link v-if="conf.clearable" color="minor" @emit="_clean" class="cleanbtn">清空</morning-link>

    </mor-cascader>
</template>
 
<script>
import extend                       from 'extend';
import GlobalEvent                  from 'Utils/GlobalEvent';

export default {
    origin : 'Form',
    name : 'cascader',
    mixins : [GlobalEvent],
    props : {
        insideName : {
            type : String,
            default : '请选择'
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
        },
        canSearch : {
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
                changeOnSelect : this.changeOnSelect,
                canSearch : this.canSearch
            };

        },
        moreCLass : function () {

            return {
                'popover-show' : this.data.popoverShow || this.data.searchPopoverShow
            };

        },
        popoverTrigger : function () {

            return 'method';

        },
        searchMap : function () {

            let searchMap = [];
            let genMap = (list, item) => {

                for (let key in list) {

                    let curItem;

                    if (item === undefined) {

                        curItem = {
                            value : [key],
                            name : []
                        };

                        if (typeof list[key] === 'string') {

                            curItem.name.push(list[key]);

                        } else {

                            curItem.name.push(list[key].name);

                        }

                    } else {

                        curItem = extend(true, {}, item);

                        curItem.value.push(key);

                        if (typeof list[key] === 'string') {

                            curItem.name.push(list[key]);

                        } else {

                            curItem.name.push(list[key].name);

                        }

                    }

                    if (list[key].children) {

                        genMap(list[key].children, curItem);

                    } else {

                        curItem.name = curItem.name.join(' / ');
                        searchMap.push(curItem);

                    }

                }

            };

            genMap(this.conf.list);

            return searchMap;

        }
    },
    data : function () {

        return {
            data : {
                currentLevel : 0,
                menuList : [],
                menuSelected : [],
                popoverShow : false,
                searchPopoverShow : false,
                hoverMenuKeys : [],
                valueName : '',
                searchResult : [],
                textinputEmpty : true,
                textinputFocus : false,
                focus : false
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
        _searchPopoverShow : function () {

            this.data.searchPopoverShow = true;

        },
        _searchPopoverHide : function () {

            this.data.searchPopoverShow = false;

        },
        _showPopover : function () {

            if (this.conf.state === 'readonly' ||
                this.conf.state === 'disabled') {

                return;

            }

            if (this.data.searchPopoverShow) {

                return;

            }

            this.$refs[`mor-cascader-popover-${this.uiid}`].toggle(true);
            this._globalEventRemove('click', '_checkArea');
            this._globalEventAdd('click', '_checkArea');

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

        },
        _textinputFocus : function () {

            this.data.textinputFocus = true;

        },
        _textinputBlur : function () {

            this.data.textinputFocus = false;

        },
        _refreshSearchPopoverWidth : function () {

            if (this.$refs[`mor-cascader-search-result-${this.uiid}`]) {

                let $body = this.$refs[`mor-cascader-search-result-${this.uiid}`].$el.querySelector('.popover-body');

                if ($body) {

                    $body.style.width = `${this.$el.clientWidth}px`;

                }

            }

        },
        _checkArea : function (evt) {

            if (
                (
                    this.data.popoverShow ||
                    this.data.searchPopoverShow
                ) &&
                evt.path.indexOf(this.$el) === -1 &&
                evt.path.indexOf(this.$refs[`mor-cascader-popover-${this.uiid}`].$el) === -1 &&
                evt.path.indexOf(this.$refs[`mor-cascader-search-result-${this.uiid}`].$el) === -1
            ) {

                this.$refs[`mor-cascader-popover-${this.uiid}`].toggle(false);

                if (this.$refs[`mor-cascader-ti-${this.uiid}`]) {
                    
                    this.$refs[`mor-cascader-ti-${this.uiid}`].set(undefined);

                }
            
            }

        },
        _search : function () {

            if (this.conf.state === 'readonly' ||
                this.conf.state === 'disabled') {

                return;

            }

            if (!this.conf.canSearch) {

                return;

            }

            this.$refs[`mor-cascader-popover-${this.uiid}`].toggle(false);

            let results = [];
            let keyword = this.$refs[`mor-cascader-ti-${this.uiid}`].get();

            if (keyword) {

                this.data.textinputEmpty = false;

            } else {

                this.data.textinputEmpty = true;
                this.$refs[`mor-cascader-search-result-${this.uiid}`].toggle(false);

                if (this.data.textinputFocus) {

                    this.$refs[`mor-cascader-popover-${this.uiid}`].toggle(true);

                }

                return results;

            }

            for (let item of this.searchMap) {

                let regexp = null;
                let result = {
                    match : false,
                    pos : [],
                    name : null,
                    value : null
                };
                let res;

                try {

                    regexp = new RegExp(keyword, 'g');

                } catch (e) {}

                if (!regexp) {

                    return;

                }

                res = regexp.exec(item.name);

                while (res) {

                    result.match = true;
                    result.pos.push({
                        index : res.index,
                        len : res[0].length
                    });
                    result.name = item.name;
                    result.value = item.value;
                    res = regexp.exec(item.name);

                }

                if (result.match) {

                    let offset = 0;

                    for (let pos of result.pos) {

                        result.name = `${result.name.slice(0, pos.index + offset)}<b>${keyword}</b>${result.name.slice(pos.index + offset + pos.len)}`;
                        offset += (pos.len + 6);

                    }

                    results.push(result);

                }

            }

            this.data.searchResult = results;
            this.$refs[`mor-cascader-search-result-${this.uiid}`].toggle(true);

            return results;

        },
        _pickSearchResult : function (value) {

            this.set(value);
            this.$refs[`mor-cascader-search-result-${this.uiid}`].toggle(false);
            this.$refs[`mor-cascader-ti-${this.uiid}`].set(undefined);
            this.data.searchResult = [];

        }
    },
    updated : function () {

        this._refreshSearchPopoverWidth();

    },
    mounted : function () {

        this._refreshSearchPopoverWidth();
        this.data.menuSelected = this.get();

        if (this.conf.submenuTrigger === 'hover') {

            this.data.hoverMenuKeys = this.get();

        }

        this._computedMenuList();

        this.$watch('conf.list', () => {

            this._computedMenuList();

        }, {
            immediate : true
        });

        this._refreshValueName();

        this.$watch('data.menuSelected', () => {

            this._computedMenuList();

        });

        this.$on('value-change', () => {

            this.data.menuSelected = this.get();
            this.Vue.nextTick(this._refreshValueName);

        });

    },
    beforeDestroy : function () {

        this._globalEventRemove('click', '_checkArea');

    }
};
</script>
