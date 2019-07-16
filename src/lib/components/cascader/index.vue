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
        :inside-clearable="insideClearable"
        :_errorMessage="_errorMessage"
        :inside-name="insideName"
        :list="list"
        :submenu-trigger="submenuTrigger"
        :show-last-name="showLastName"
        :change-on-select="changeOnSelect"
        :can-search="canSearch"
        :list-width="listWidth"
        :multi-select="multiSelect"
        :select-leaf-node="selectLeafNode"
        :collapse-limit="collapseLimit"
    >

    <div class="form-name" v-if="!conf.hideName && !!conf.formName">{{conf.formName}}</div>
    <div class="form-note" v-if="!!conf.formNote">{{conf.formNote}}</div>

    <div class="cascader-wrap form-body">
        <div class="cascader-input" :class="{focus: data.popoverShow}" :id="'mor-cascader-input-'+uiid" @click="_showPopover()">

            <template v-if="conf.multiSelect">
                <morning-multiinput
                    :ref="'mor-cascader-mi-' + uiid"
                    :inside-name="conf.insideName"
                    :hide-name="conf.hideName"
                    :state="conf.state"
                    :size="conf.size"
                    :collapse-limit="conf.multiSelect ? conf.collapseLimit : Infinity"
                    key="multi-can-search"

                    v-if="conf.canSearch"

                    @value-change="_multiinputValueChange()"
                    @input-value-change="_searchKeyChange()"
                ></morning-multiinput>

                <morning-multiinput
                    :ref="'mor-cascader-mi-' + uiid"
                    :inside-name="conf.insideName"
                    :hide-name="conf.hideName"
                    :state="conf.state"
                    :size="conf.size"
                    :collapse-limit="conf.multiSelect ? conf.collapseLimit : Infinity"
                    key="multi-no-search"

                    v-else

                    @input-focus="_multiinputFocusNoSearch()"
                    @value-change="_multiinputValueChange()"
                ></morning-multiinput>
            </template>

            <template v-else>
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
            </template>

            <i class="mo-icon mo-icon-error-cf cleanicon" v-show="(conf.state !== 'readonly' && conf.state !== 'disabled') && conf.insideClearable && data.value !== undefined && data.value.length > 0" @click.stop="set(undefined)"></i>
            <i class="mo-icon mo-icon-dropdown drop"></i>
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
                <template v-for="(item, index) in data.searchResult">
                    <li
                        v-if="_valueHasItem(item.value)"
                        class="selected"
                        :key="index"
                    >
                        <span v-html="item.name"></span>
                        <i class="mo-cascader-selected-icon mo-icon mo-icon-check"></i>
                    </li>
                    <li
                        v-else
                        :key="index"
                        @click="_pickSearchResult(item.value)"
                    >
                        <span v-html="item.name"></span>
                    </li>
                </template>
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
                                @click="_selected($event, level - 1, key)"
                                @mouseenter="_inMenu(level - 1, key)"
                            >
                                <morning-checkbox
                                    size="xs"
                                    :list="{checked:''}"
                                    :ref="'mor-cascader-node-'+uiid+'-'+_getNodePath(key, level - 1, '-')"
                                    :indeterminate="true"
                                    :checked-state="data.checkedState[_getNodePath(key, level - 1, '-')]"

                                    @checked-state-change="_checkedStateChange(arguments[0], _getNodePath(key, level - 1, '-'))"
                                ></morning-checkbox>
                                <span>{{item}}</span>
                            </li>
                            <li
                                v-else-if="key !== '__parentKey' && !item.disable"
                                :key="key"
                                :class="{
                                    current : (data.value[level - 1] === key && data.menuList[level - 1].__parentKey === data.value[level - 2]),
                                    'last-current' : (data.value[level - 1] === key && data.menuList[level - 1].__parentKey === data.value[level - 2] && level === data.value.length)
                                }"
                                @click="_selected($event, level - 1, key)"
                                @mouseenter="_inMenu(level - 1, key)"
                            >
                                <morning-checkbox
                                    size="xs"
                                    :list="{checked:''}"
                                    :ref="'mor-cascader-node-'+uiid+'-'+_getNodePath(key, level - 1, '-')"
                                    :indeterminate="true"
                                    :checked-state="data.checkedState[_getNodePath(key, level - 1, '-')]"

                                    @checked-state-change="_checkedStateChange(arguments[0], _getNodePath(key, level - 1, '-'))"
                                ></morning-checkbox>
                                <span>{{item.name}}</span>
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
                                <morning-checkbox
                                    size="xs"
                                    :list="{checked:''}"
                                    :ref="'mor-cascader-node-'+uiid+'-'+_getNodePath(key, level - 1, '-')"
                                    :indeterminate="true"
                                    :checked-state="data.checkedState[_getNodePath(key, level - 1, '-')]"

                                    @checked-state-change="_checkedStateChange(arguments[0], _getNodePath(key, level - 1, '-'))"
                                ></morning-checkbox>
                                <span>{{item.name}}</span>
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
import arrayUniq                    from 'array-uniq';
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
        },
        listWidth : {
            type : [Boolean, Number],
            default : false
        },
        multiSelect : {
            type : Boolean,
            default : false
        },
        selectLeafNode : {
            type : Boolean,
            default : true
        },
        collapseLimit : {
            type : Number,
            default : Infinity
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
                canSearch : this.canSearch,
                listWidth : this.listWidth,
                multiSelect : this.multiSelect,
                selectLeafNode : this.selectLeafNode,
                collapseLimit : this.collapseLimit
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
                focus : false,
                checkedState : {},
                checkedStateTree : {},
                checkedNameMap : {},
                checkedFullNameMap : {}
            }
        };

    },
    methods : {
        _valueFilter : function (value) {

            if (!Array.isArray(value)) {

                value = [];

            }

            if (!this.conf.multiSelect) {

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

            }

            return value;

        },
        _valueHasItem : function (itemValue) {

            let found = false;

            for (let item of this.data.value) {

                if (item.join('/') === itemValue.join('/')) {

                    found = true;

                    break;

                }

            }

            return found;

        },
        _multiinputValueChange : function () {

            let names = this.$refs[`mor-cascader-mi-${this.uiid}`].get();
            let values = [];
            let nodePaths = [];
            let nameMap;

            if (this.conf.selectLeafNode) {

                nameMap = this.data.checkedFullNameMap;

            } else {

                nameMap = this.data.checkedNameMap;

            }

            for (let name of names) {

                for (let key in nameMap) {

                    let itemName = nameMap[key];

                    if (itemName === name) {

                        values.push(extend(true, [], key.split('-')));
                        nodePaths.push(key);

                        break;

                    }

                }

            }

            // +++
            for (let item of nodePaths) {

                for (let key in this.data.checkedState) {

                    let checkedItem = this.data.checkedState[key];

                    if (key === item &&
                        checkedItem.checked === -1) {

                        if (this.conf.selectLeafNode && this._isLeafNode(key)) {

                            this._checkedStateChange({
                                checked : 1
                            }, key);

                        } else if (!this.conf.selectLeafNode) {

                            this._checkedStateChange({
                                checked : 1
                            }, key);

                        }

                    }

                }

            }

            // ---
            for (let key in this.data.checkedState) {
                
                let checkedItem = this.data.checkedState[key];

                if (nodePaths.indexOf(key) === -1 &&
                    checkedItem.checked === 1) {

                    if (this.conf.selectLeafNode && this._isLeafNode(key)) {

                        this._checkedStateChange({
                            checked : -1
                        }, key);

                    } else if (!this.conf.selectLeafNode) {

                        this._checkedStateChange({
                            checked : -1
                        }, key);

                    }

                }

            }

            this._set(values, true);
            this.$refs[`mor-cascader-popover-${this.uiid}`].position();

            if (values.length === 0) {
    
                this.$forceUpdate();

            }

        },
        _multiinputFocusNoSearch : function () {

            let searchMultiinput = this.$refs[`mor-cascader-mi-${this.uiid}`];

            searchMultiinput._blurInput();
            // this._multiinputFocus();

        },
        // _multiinputFocus : function () {

        //     this.toggle(true);

        // },
        _onMultiValueChange : function () {

            if (!this.conf.multiSelect) {

                return;

            }

            let searchMultiinput = this.$refs[`mor-cascader-mi-${this.uiid}`];
            let names = this._getCurrentCheckedNodeName();

            searchMultiinput._set(names, true);

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
        _genCheckedStateTree : function () {

            let tree = {};
            let nameMap = {};
            let fullNameMap = {};
            let item;
            let paths;
            let genFn = (list, parentNodePaths, parentNodeNames, parentTree) => {

                for (let key in list) {

                    let treeItem = {};

                    item = list[key];
                    paths = parentNodePaths.concat([key]);
                    
                    if (this.data.checkedState[paths.join('-')] === undefined) {

                        this.data.checkedState[paths.join('-')] = {
                            checked : -1
                        };

                    }

                    if (typeof item === 'string') {

                        treeItem.name = item;

                    } else {

                        treeItem.name = item.name;

                    }
                    
                    parentNodeNames = parentNodeNames.concat([treeItem.name]);
                    treeItem.nodePath = paths.join('-');
                    treeItem.parentNodePath = parentNodePaths.join('-');
                    nameMap[paths.join('-')] = treeItem.name;
                    fullNameMap[paths.join('-')] = parentNodeNames.join(' / ');
                    parentTree[key] = treeItem;

                    if (item.children) {

                        treeItem.children = {};
                        genFn(item.children, paths, parentNodeNames, treeItem.children);

                    }

                }

            };

            genFn(this.conf.list, [], [], tree);

            this.data.checkedStateTree = tree;
            this.data.checkedNameMap = nameMap;
            this.data.checkedFullNameMap = fullNameMap;

        },
        _setAllChildNodeCheckedState : function (children, state) {

            if (children) {
                        
                for (let key in children) {

                    let item = children[key];

                    this.data.checkedState[item.nodePath] = {
                        checked : state
                    };

                }

            }

        },
        _refreshCheckedState : function (nodePath) {

            if (!this.conf.multiSelect || !this.conf.selectLeafNode) {

                return;

            }

            let oldState = JSON.stringify(this.data.checkedState);
            let walkTree = (currentTree, parentItem) => {

                let siblings = [];

                for (let key in currentTree) {

                    let item = currentTree[key];
                    let currentNodePath = item.nodePath;

                    // hanlde child checkbox
                    if (currentNodePath.indexOf(nodePath) === 0 && this.data.checkedState[currentNodePath].checked === 1) {

                        // all child checked
                        this._setAllChildNodeCheckedState(item.children, 1);

                    } else if (currentNodePath.indexOf(nodePath) === 0 && this.data.checkedState[currentNodePath].checked === -1) {

                        // all child uncheck
                        this._setAllChildNodeCheckedState(item.children, -1);

                    }

                    if (item.children) {

                        walkTree(item.children, item);

                    }

                    siblings.push(this.data.checkedState[currentNodePath].checked);

                }

                siblings = arrayUniq(siblings);

                if (parentItem && siblings.length === 1 && siblings[0] === 1) {

                    this.data.checkedState[parentItem.nodePath] = {
                        checked : 1
                    };

                } else if (parentItem && siblings.length === 1 && siblings[0] === -1) {

                    this.data.checkedState[parentItem.nodePath] = {
                        checked : -1
                    };

                } else if (parentItem) {

                    this.data.checkedState[parentItem.nodePath] = {
                        checked : 0
                    };

                }

            };

            walkTree(this.data.checkedStateTree);

            if (oldState !== JSON.stringify(this.data.checkedState)) {

                this._refreshCheckedState();

            }

        },
        _getNodePath : function (key, level, separator = '/') {

            let currentList = this._getCurrentList();

            currentList.splice(level);
            currentList.push(key);
            currentList = currentList.join(separator);

            return currentList;

        },
        _checkedStateChange : function (state, nodePath) {

            this.data.checkedState[nodePath] = state;
            this._refreshCheckedState(nodePath);

        },
        _isLeafNode : function (nodePath) {

            let found = false;

            for (let item of this.searchMap) {

                if (item.value.join('-') === nodePath) {

                    found = true;

                    break;

                }

            }

            return found;

        },
        _getAllCheckedNode : function () {

            let values = [];

            for (let key in this.data.checkedState) {

                if (this.data.checkedState[key].checked === 1) {

                    if (this.conf.selectLeafNode && this._isLeafNode(key)) {

                        values.push(key.split('-'));

                    } else if (!this.conf.selectLeafNode) {

                        values.push(key.split('-'));

                    }

                }

            }

            return values;

        },
        _getCurrentCheckedNodeName : function () {

            let values = this.get();
            let names = [];
            let nameMap;

            if (this.conf.selectLeafNode) {

                nameMap = this.data.checkedFullNameMap;

            } else {

                nameMap = this.data.checkedNameMap;

            }

            for (let item of values) {

                item = item.join('-');

                for (let key in nameMap) {

                    if (key === item) {

                        names.push(nameMap[key]);

                        break;

                    }

                }

            }

            return names;

        },
        _selected : function (evt, level, key) {

            let value = this._getCurrentList();
            let formCheckbox = false;
            let $checkbox = this.$refs[`mor-cascader-node-${this.uiid}-${this._getNodePath(key, level, '-')}`][0];

            if (evt.path.indexOf($checkbox.$el) !== -1) {

                let nodePath = this._getNodePath(key, level, '-');
                let state = (this.data.checkedState[nodePath].checked < 1) ? 1 : -1;

                formCheckbox = true;
                this._checkedStateChange({
                    checked : state
                }, nodePath);

            }

            value.splice(level, value.length - level);
            value[level] = key;
            this.data.menuSelected = value;

            if (this.conf.multiSelect && formCheckbox) {

                this._set(this._getAllCheckedNode(), true);

            } else if (!this.conf.multiSelect) {

                if (this.conf.changeOnSelect) {

                    this._set(value, true);

                }

                if (!this.data.menuList[level][key].children) {

                    // is last level, auto close popover
                    if (!this.conf.changeOnSelect) {

                        this._set(value, true);

                    }

                    this.$refs[`mor-cascader-popover-${this.uiid}`].hide();

                }

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

                let $popover = this.$refs[`mor-cascader-popover-${this.uiid}`];

                if ($popover) {

                    $popover.position();

                }
    
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

                if (typeof this.conf.listWidth === 'number') {

                    $body.style.width = `${this.conf.listWidth}px`;

                } else if ($body) {

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
        _searchKeyChange : function () {

            let multiinput = this.$refs[`mor-cascader-mi-${this.uiid}`];

            if (multiinput) {
    
                this._search(multiinput.getInput(), true);

            }

        },
        _search : function (keyword, inMultiSelect = false) {

            if (this.conf.state === 'readonly' ||
                this.conf.state === 'disabled') {

                return;

            }

            if (!this.conf.canSearch) {

                return;

            }

            this.$refs[`mor-cascader-popover-${this.uiid}`].toggle(false);

            let results = [];

            if (!inMultiSelect) {

                keyword = this.$refs[`mor-cascader-ti-${this.uiid}`].get();

            }

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

            if (this.conf.multiSelect) {

                let currentValue = this.get();

                currentValue.push(value);
                this.set(currentValue);
                this.$refs[`mor-cascader-mi-${this.uiid}`].setInput(undefined);

            } else {
                
                this.set(value);
                this.$refs[`mor-cascader-ti-${this.uiid}`].set(undefined);

            }

            this.$refs[`mor-cascader-search-result-${this.uiid}`].toggle(false);
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
            this._genCheckedStateTree();

        }, {
            immediate : true
        });

        this.$watch('conf.selectLeafNode', () => {

            this._set(undefined, true);

        });

        this._refreshValueName();

        this.$watch('data.menuSelected', () => {

            this._computedMenuList();

        });

        this.$on('value-change', () => {

            if (this.conf.multiSelect) {

                this._onMultiValueChange();
                this._refreshCheckedState();

            } else {

                this.data.menuSelected = this.get();
                this.Vue.nextTick(this._refreshValueName);

            }

        });

    },
    beforeDestroy : function () {

        this._globalEventRemove('click', '_checkArea');

    }
};
</script>
