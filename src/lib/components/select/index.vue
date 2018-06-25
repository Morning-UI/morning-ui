<template>
    <mor-select
        :_uiid="uiid"
        :class="[formClass, stateClass, moreClass]"

        :form-name="formName"
        :form-key="formKey"
        :group="group"
        :default-value="defaultValue"
        :hide-name="hideName"
        :clearable="clearable"
        :list="list"
        :dynamic-list="dynamicList"
        :validate="validate"
        :separate-emit="separateEmit"
        :align="align"
        :prepend="prepend"
        :max-show="maxShow"
        :max-show-height="maxShowHeight"
        :auto-close="autoClose"
        :can-search="canSearch"
        :multi-select="multiSelect"
        :can-move="canMove"
        :max="max"
        :auto-reset-search="autoResetSearch"
        :hide-selected="hideSelected"
        :inline-img-size="inlineImgSize"
        :item-tip="itemTip"
        :item-tip-direct="itemTipDirect"
        :list-width="listWidth"
    >

    <template v-if="conf.prepend">
        <div class="input-group-addon" v-html="conf.prepend"></div>
    </template>

    <div
        class="select-area"
        :class="[{
            'mor-select-wrap' : conf.separateEmit,
            'focus-search' : !!data.focusSearch,
            searching : !!data.searching,
            'align-left' : (conf.align === 'left'),
            'align-center' : (conf.align === 'center'),
            'align-right' : (conf.align === 'right'),
            'select-item' : (data.value && data.value.length > 0),
            'is-max' : !!isMax,
            showlist : !!data.showlist,
            'no-animation' : !!data.highPerfMode,
            'input-group' : !!conf.prepend
        }, stateClass]"
    >
        <div
            class="wrap"
            :class="{
                'showwrap' : (conf.separateEmit && !!data.showlist)
            }"
            @click="_wrapClick"
        >

            <template v-if="conf.multiSelect">
                <morning-multiinput
                    :id="'ui-select-mi-' + uiid"
                    :can-move="conf.canMove"
                    :max="conf.max"
                    :form-name="conf.formName"
                    :hide-name="conf.hideName"
                    :state="conf.state"
                    key="multi-can-search"

                    v-if="conf.canSearch"

                    @input-focus="_multiinputFocus()"
                    @value-change="_multiinputValueChange()"
                    @input-value-change="_searchKeyChange()"
                ></morning-multiinput>

                <morning-multiinput
                    :id="'ui-select-mi-' + uiid"
                    :can-move="conf.canMove"
                    :max="conf.max"
                    :form-name="conf.formName"
                    :hide-name="conf.hideName"
                    :state="conf.state"
                    key="multi-no-search"

                    v-else

                    @input-focus="_multiinputFocusNoSearch()"
                    @value-change="_multiinputValueChange()"
                ></morning-multiinput>
            </template>

            <template v-else>
                <template v-if="conf.canSearch">
                    <morning-textinput
                        :id="'ui-select-ti-' + uiid"
                        :align="conf.align"
                        @value-change="_searchKeyChange()"
                        @focus="_textinputFocus()"
                        @blur="_textinputBlur()"
                        key="single-can-search"
                    ></morning-textinput>
                </template>

                <div
                    class="selected"
                    v-if="!conf.multiSelect && data.value && data.value.length === 1"
                    v-html="data.selectedContent"
                >
                </div>

                <div 
                    class="selected"
                    v-else-if="!conf.hideName">
                    {{conf.formName}}
                </div>

                <div 
                    class="selected"
                    v-else>
                    &nbsp;
                </div>
            </template>

            <i class="mo-icon mo-icon-dropdown drop" :class="{'no-animation' : !!data.highPerfMode}"></i>

        </div>
    
        <div
            class="select-list"
            :class="[{
                showlist : !!data.showlist,
                'no-animation' : !!data.highPerfMode,
                'hide-selected' : conf.hideSelected,
                'mor-select-wrap' : !conf.separateEmit
            }, stateClass]"
        >
            <ul
                class="list"
                :style="listStyle"
                @click="_listClick"
            >
                <template v-for="index in showItemList">
                    <li
                        :index="index"
                        :class="{
                            hide : data.itemNomathMap[index]
                        }"
                        class="selected"
                        v-if="data.itemSelectedMap[index]"
                        v-render="{template : data.itemNameMap[index]+'<i class=\'mo-select-selected-icon mo-icon mo-icon-check\'></i>'}"
                    >
                    </li>
                    <li
                        :index="index"
                        :class="{
                            hide : data.itemNomathMap[index]
                        }"
                        v-else
                        v-render="{template : data.itemNameMap[index]}"
                    >
                    </li>
                </template>
                <li class="noitem infoitem" :class="{show : data.noMatch || showItemList.length === 0}">
                    <span v-if="conf.dynamicList && conf.canSearch">无匹配项目</span>
                    <span v-else>无项目</span>
                </li>
                <li class="maxshow infoitem" :class="{show : conf.canSearch && (matchList.length > conf.maxShow)}">
                    <span>请搜索以显示更多</span>
                </li>
            </ul>
        </div>
    </div>

    <morning-link v-if="conf.clearable" color="minor" @emit="_clean" class="cleanbtn">清空</morning-link>

    </mor-select>
</template>
 
<script>
import extend                       from 'extend';
import map                          from 'lodash.map';
import GlobalEvent                  from 'Utils/GlobalEvent';
import TipManager                   from 'Utils/TipManager';

let noopFn = () => {};

export default {
    origin : 'Form',
    name : 'select',
    mixins : [GlobalEvent, TipManager],
    props : {
        list : {
            type : [Object, Array],
            default : (() => {})
        },
        dynamicList : {
            type : Boolean,
            default : false
        },
        validate : {
            type : Function,
            default : noopFn
        },
        separateEmit : {
            type : String,
            default : ''
        },
        align : {
            type : String,
            default : 'left',
            validator : (value => ['left', 'center', 'right'].indexOf(value) !== -1)
        },
        prepend : {
            type : String,
            default : undefined
        },
        maxShow : {
            type : Number,
            default : Infinity
        },
        maxShowHeight : {
            type : Number,
            default : 5
        },
        autoClose : {
            type : Boolean,
            default : true
        },
        canSearch : {
            type : Boolean,
            default : false
        },
        multiSelect : {
            type : Boolean,
            default : false
        },
        canMove : {
            type : Boolean,
            default : false
        },
        max : {
            type : Number,
            default : Infinity
        },
        autoResetSearch : {
            type : Boolean,
            default : false
        },
        hideSelected : {
            type : Boolean,
            default : true
        },
        inlineImgSize : {
            type : String,
            default : '2em'
        },
        itemTip : {
            type : Boolean,
            default : false
        },
        itemTipDirect : {
            type : String,
            default : 'top'
        },
        listWidth : {
            type : [Boolean, Number],
            default : false
        }
    },
    computed : {
        _conf : function () {

            return {
                list : this.list,
                dynamicList : this.dynamicList,
                validate : this.validate,
                separateEmit : this.separateEmit,
                align : this.align,
                prepend : this.prepend,
                maxShow : this.maxShow,
                maxShowHeight : this.maxShowHeight,
                autoClose : this.autoClose,
                canSearch : this.canSearch,
                multiSelect : this.multiSelect,
                canMove : this.canMove,
                max : this.max,
                autoResetSearch : this.autoResetSearch,
                hideSelected : this.hideSelected,
                inlineImgSize : this.inlineImgSize,
                itemTip : this.itemTip,
                itemTipDirect : this.itemTipDirect,
                listWidth : this.listWidth
            };

        },
        moreClass : function () {

            return {
                separate : !!this.conf.separateEmit,
                'input-group' : !!this.conf.prepend
            };

        },
        isMax : function () {

            if (this.conf.multiSelect &&
                this.data.value.length === this.conf.max) {

                return true;

            }

            return false;

        },
        matchList : function () {

            let matchList = [];

            if (this.data.recomputeMatchList) {

                this.data.recomputeMatchList--;

            }

            for (let index in this.data.itemValMap) {

                if (!this.data.itemSelectedMap[index]) {

                    matchList.push(index);

                }

            }

            return matchList;

        },
        showItemList : function () {

            if (this.conf.canSearch) {

                return this.matchList.slice(0, this.conf.maxShow);

            }

            return Object.keys(this.data.itemValMap || []);

        }
    },
    data : function () {

        return {
            data : {
                showlist : false,
                selectedContent : null,
                searching : false,
                searchKey : null,
                focusSearch : false,
                mounted : false,
                isMax : false,
                multiinputLastValue : [],
                selectInput : false,
                dontSetSearchMultiinput : false,
                itemValMap : [],
                itemNameMap : [],
                itemTipMap : [],
                itemSelectedMap : [],
                itemNomathMap : [],
                lastItemHeight : 0,
                tips : [],
                $listWrap : null,
                $list : null,
                $emitTarget : null,
                $selectArea : null,
                $selectList : null,
                highPerfMode : false,
                noMatch : false,
                multiinputNameValMap : {},
                recomputeMatchList : 0,
                itemValueListInit : false
            },
            listStyle : {}
        };

    },
    methods : {
        _valueFilter : function (value) {

            if (typeof value !== 'object' ||
                !(value instanceof Array)) {

                return [];

            }

            value = this._customFilter(value);

            // filter not exist value.
            if (!this.conf.dynamicList && this.data.itemValueListInit) {

                for (let index in value) {

                    let val = value[index];

                    if (this.data.itemValMap.indexOf(String(val)) === -1) {

                        value.splice(index, 1);

                    }

                }

            }

            if (!this.conf.multiSelect &&
                this.data.value.length > 1) {

                return value.slice(0, 1);

            }
            
            this._maxFilter(value);

            return value;

        },
        _maxFilter : function (value) {

            if (this.conf.multiSelect &&
                this.conf.max &&
                value.length > this.conf.max) {

                return value.slice(0, this.conf.max);

            }

            return value;

        },
        _customFilter : function (value) {

            if (this.conf.dynamicList && this.conf.validate) {

                for (let index in value) {

                    if (this.conf.validate(value[index]) === false) {

                        value.splice(index, 1);

                    }

                }

            }

            return value;

        },
        _onValueChange : function () {

            let newVal = this.get();
            let $items = this.data.$list.querySelectorAll('li:not(.infoitem)');
            let searchTextinput;
            let searchMultiinput;
            let multiNames = [];

            if (this.conf.canSearch &&
                !this.conf.multiSelect) {

                searchTextinput = this.data.$selectArea.querySelector(`#ui-select-ti-${this.uiid}`);

                if (searchTextinput) {

                    searchTextinput = searchTextinput._vm;

                }

            } else if (this.conf.multiSelect) {

                searchMultiinput = this.data.$selectArea.querySelector(`#ui-select-mi-${this.uiid}`);

                if (searchMultiinput) {

                    searchMultiinput = searchMultiinput._vm;

                }

            }

            for (let val of newVal) {

                for (let index in this.data.itemValMap) {

                    if (this.data.itemValMap[index] === val) {

                        if (this.conf.multiSelect) {

                            multiNames.push(this.data.itemNameMap[index]);
                            this.data.multiinputNameValMap[this.data.itemNameMap[index]] = this.data.itemValMap[index];

                        } else {

                            this.data.selectedContent = this.data.itemNameMap[index];

                        }

                    }

                }

            }

            if (this.conf.multiSelect &&
                this.data.value.length === $items.length &&
                this.conf.hideSelected) {

                this.data.noMatch = true;

            } else {

                this.data.noMatch = false;

            }

            if (!this.conf.multiSelect &&
                (this.data.value.length === 0 || this.data.value === undefined)) {

                this.data.selectedContent = this.conf.formName || '';

            }

            if (this.conf.canSearch &&
                searchTextinput) {

                searchTextinput._set(undefined, true);

            }

            if (searchMultiinput &&
                searchMultiinput.getJson() !== JSON.stringify(multiNames)) {

                let inputValue = searchMultiinput.getInput();

                this.data.selectInput = true;
                
                if (!this.data.dontSetSearchMultiinput) {
                    
                    searchMultiinput._set(multiNames, true);

                }

                if (!this.conf.autoResetSearch) {
                    
                    this.Vue.nextTick(() => {

                        searchMultiinput.setInput(inputValue);

                    });
        
                } else {
                    
                    this.Vue.nextTick(() => {

                        searchMultiinput.setInput(undefined);

                    });

                }
            
            }

            this._refreshShowItems();

        },
        _updateItemValueList : function () {

            const useHighPrefModeMinItems = 200;

            let list = [];

            if (this.conf.list instanceof Array) {

                for (let item of this.conf.list) {

                    list.push({
                        val : String(item.key),
                        name : item.name,
                        tip : item.tip
                    });

                }

            } else if (typeof this.conf.list === 'object') {

                for (let key of Object.keys(this.conf.list)) {

                    let item = {
                        val : String(key)
                    };

                    if (typeof this.conf.list[key] === 'string') {

                        item.name = this.conf.list[key];

                    } else if (typeof this.conf.list[key] === 'object') {

                        item.name = this.conf.list[key].name;
                        item.tip = this.conf.list[key].tip;

                    }

                    list.push(item);

                }

            }

            for (let index in this.data.itemValMap) {

                for (let key in list) {

                    if (String(list[key].val) === String(this.data.itemValMap[index])) {

                        // extend old status
                        list[key] = extend(item, {
                            val : String(this.data.itemValMap[index]),
                            name : this.data.itemNameMap[index],
                            tip : this.data.itemTipMap[index],
                            _selected : this.data.itemSelectedMap[index] || 0,
                            _nomatch : this.data.itemNomathMap[index] || 0
                        });

                    }

                }

            }

            // uniq same val
            let valList = [];
            let uniqList = [];

            for (let key in list) {

                if (valList.indexOf(list[key].val) === -1) {

                    uniqList.push(list[key]);

                }

                valList.push(list[key].val);

            }

            // 高性能模式，当列表项目大于200后开启
            // 去除了不必要的动画、调整CSS、减少计算频率
            if (uniqList.length > useHighPrefModeMinItems) {

                this.data.highPerfMode = true;

            } else {

                this.data.highPerfMode = false;

            }

            this.data.itemValMap = map(uniqList, 'val');
            this.data.itemNameMap = map(uniqList, 'name');
            this.data.itemTipMap = map(uniqList, 'tip');
            this.data.itemSelectedMap = map(uniqList, '_selected');
            this.data.itemNomathMap = map(uniqList, '_nomatch');

            if (!this.data.itemValueListInit) {

                this.data.itemValueListInit = true;
                this._set(this._valueFilter(this.get()), true);

            }

        },
        _emitClick : function () {

            if (!this.conf.separateEmit) {

                return;

            }

            this.toggle();

        },
        _wrapClick : function (evt) {

            if (this.conf.separateEmit) {

                return;

            }

            let $searchTextinput = this.data.$selectArea.querySelector('.wrap mor-textinput'),
                $searchMultiinput = this.data.$selectArea.querySelector('.wrap mor-multiinput'),
                hasTextinput = (evt.path.indexOf($searchTextinput) !== -1),
                hasMultiinput = (evt.path.indexOf($searchMultiinput) !== -1);

            if (!hasTextinput && !hasMultiinput) {

                this.toggle();

            } else if ((hasTextinput || hasMultiinput) && this.data.showlist === false) {

                this.toggle();

            }

        },
        _listClick : function (evt) {

            if (this.conf.state === 'disabled' || this.conf.state === 'readonly') {

                return;
                
            }

            if (this.conf.multiSelect &&
                this.data.value.length === this.conf.max) {

                return;

            }

            let $noitem = this.data.$list.querySelector('.noitem');
            let $maxshow = this.data.$list.querySelector('.maxshow');

            if (evt.path.indexOf($noitem) !== -1 ||
                evt.path.indexOf($maxshow) !== -1) {

                return;

            }

            let $items = this.data.$list.querySelectorAll('li:not(.infoitem)');
            let $clickItem = false;

            for (let $item of $items.values()) {

                if (evt.path.indexOf($item) !== -1) {

                    $clickItem = $item;
                    break;

                }

            }

            if ($clickItem) {

                let index = $clickItem.getAttribute('index');
                let value = [this.data.itemValMap[index]];

                if (this.conf.multiSelect &&
                    this.data.value !== undefined) {

                    value = this.get();

                    let clickValue = this.data.itemValMap[index];
                    let valIndex = value.indexOf(clickValue);

                    if (valIndex !== -1) {

                        value.splice(valIndex, 1);

                    } else {

                        value.push(clickValue);

                    }
               
                }

                this.set(value);

                if (!this.conf.multiSelect) {

                    this.toggle();
                
                } else if (value.length >= this.conf.max) {

                    this.toggle();
                
                }

            } else {

                this._tipUpdate();

            }

            this._refreshShowItems();

        },
        _textinputFocus : function () {

            this.data.focusSearch = true;

        },
        _textinputBlur : function () {

            this.data.focusSearch = false;

        },
        _searchKeyChange : function () {

            if (!this.data.mounted) {

                return;

            }

            if (!this.conf.canSearch) {

                this.data.searching = false;
                this.data.searchKey = null;
                this.data.noMatch = false;

                for (let index in this.data.itemNomathMap) {

                    this.data.itemNomathMap[index] = 0;

                }
            
                return;

            }
        
            let key;

            if (this.conf.multiSelect) {

                let searchMultiinput = this.data.$selectArea.querySelector(`#ui-select-mi-${this.uiid}`);

                searchMultiinput = searchMultiinput._vm;
                key = searchMultiinput.getInput();

            } else {

                let searchTextinput = this.data.$selectArea.querySelector(`#ui-select-ti-${this.uiid}`);

                searchTextinput = searchTextinput._vm;
                key = searchTextinput.get();
            
            }

            if (key !== '' && key !== undefined) {

                this.data.searching = true;
                this.data.searchKey = key;
            
            } else {

                this.data.searching = false;
                this.data.searchKey = null;

            }

            this._refreshShowItemsWithSearch();
            this.data.recomputeMatchList++;
            this.Vue.nextTick(() => {

                this._tipUpdate();
                
            });

            this.$emit('search', this.data.searchKey);

        },
        _multiinputFocusNoSearch : function () {

            let searchMultiinput = this.data.$selectArea.querySelector(`#ui-select-mi-${this.uiid}`)._vm;

            searchMultiinput._blurInput();
            this._multiinputFocus();

        },
        _multiinputFocus : function () {

            this.toggle(true);

        },
        _multiinputValueChange : function () {

            if (!this.data.mounted) {

                return;

            }

            let searchMultiinput = this.data.$selectArea.querySelector(`#ui-select-mi-${this.uiid}`)._vm;
            let names = searchMultiinput.get();
            let values = [];

            for (let name of names) {

                if (this.data.multiinputNameValMap) {

                    values.push(this.data.multiinputNameValMap[name]);

                }

            }

            this.Vue.nextTick(() => {

                this._tipUpdate();

            });

            if (!searchMultiinput.Move.moving &&
                !this.data.selectInput &&
                this.data.multiinputLastValue.length <= values.length) {

                searchMultiinput._set(this.data.multiinputLastValue, true);

                return;

            }
            
            this.data.selectInput = false;
            this.data.dontSetSearchMultiinput = true;
            this.data.multiinputLastValue = values;

            this._set(values, true);

            this.Vue.nextTick(() => {

                this.data.dontSetSearchMultiinput = false;

            });

        },
        _refreshShowItemsWithSearch : function () {

            let foundNum = 0;

            for (let index in this.data.itemValMap) {

                if (!this.data.searching) {

                    this.data.itemNomathMap[index] = 0;

                } else if (this.data.itemNameMap[index].search(this.data.searchKey) !== -1) {

                    if (!this.data.itemSelectedMap[index]) {

                        foundNum++;

                    }

                    this.data.itemNomathMap[index] = 0;

                } else {

                    this.data.itemNomathMap[index] = 1;

                }

            }

            if (this.data.searching &&
                this.conf.hideSelected &&
                foundNum === 0) {

                this.data.noMatch = true;

            } else {
                
                this.data.noMatch = false;

            }

        },
        _refreshShowItems : function () {

            if (!this.data.mounted) {

                return;

            }
           
            let values = this.get();

            for (let index in this.data.itemValMap) {

                let selected = false;

                for (let value of values) {

                    if (value === this.data.itemValMap[index]) {

                        selected = true;

                        break;

                    }

                }

                this.data.itemSelectedMap[index] = (selected ? 1 : 0);

            }

            this._refreshShowItemsWithSearch();

        },
        _checkArea : function (evt) {

            let $wrap = this.data.$selectArea.querySelector('.wrap');

            if (this.data.showlist &&
                this.conf.autoClose &&
                evt.path.indexOf(this.$el) === -1 &&
                evt.path.indexOf($wrap) === -1) {
                
                this.toggle(false);
            
            }

        },
        _resizeInlineImg : function () {

            if (!this.conf.inlineImgSize) {

                return;

            }

            let $inlineImgs = this.data.$list.querySelectorAll('li mor-img,li img');

            for (let $img of $inlineImgs.values()) {

                $img.style.width = this.conf.inlineImgSize;
                $img.style.height = this.conf.inlineImgSize;

            }

        },
        _refreshTips : function () {

            for (let tipVm of this.data.tips) {

                tipVm.$destroy();

            }

            this.data.tips = [];

            if (!this.conf.itemTip) {

                return;

            }

            let $items = this.data.$list.querySelectorAll('li:not(.infoitem)');

            for (let index of $items.keys()) {

                let $item = $items[index];
                let tip = this.data.itemTipMap[$item.getAttribute('index')].tip;

                if (!tip) {

                    return;

                }

                const random = 1e8;

                let tipId = `select-tip-${Math.floor(Math.random() * random)}`;
                let $newTip = document.createElement('morning-tip');

                $newTip.setAttribute(':minor', true);
                $newTip.setAttribute('target', `#${tipId}`);
                $newTip.setAttribute('placement', this.conf.itemTipDirect);
                $newTip.innerHTML = tip;

                let tipVm = new this.Vue({
                    el : $newTip
                });

                $item.setAttribute('id', tipId);
                tipVm.$mount();
                this.data.$list.append(tipVm.$el);
                this.data.tips.push(tipVm);

            }

        },
        _setListHeight : function () {

            let $item = this.data.$list.querySelector('li:not(.infoitem):not(.selected)');

            if (!$item) {

                return;

            }

            let itemHeight;
            let maxHeight;

            this.Vue.nextTick(() => {

                itemHeight = $item.offsetHeight || this.data.lastItemHeight;
                maxHeight = itemHeight * this.conf.maxShowHeight;

                if (itemHeight) {

                    this.data.lastItemHeight = itemHeight;

                }

                if (this.listStyle.maxHeight === `${maxHeight}px`) {

                    return;

                }

                this.listStyle = {
                    maxHeight : `${maxHeight}px`,
                };

            });

        },
        _resizeSelectArea : function () {

            if (this.conf.prepend !== undefined) {

                let $inputGroupAddon = this.$el.querySelector('.input-group-addon');
                let $selectArea = this.data.$selectArea;
                let width = $inputGroupAddon.clientWidth;

                // 1 is left border width
                $selectArea.style.maxWidth = `calc(100% - ${width + 1}px)`;

            }

        },
        _itemChanged : function () {

            if (JSON.stringify(newVal) !== JSON.stringify(oldVal)) {

                this._refreshTips();

            }

        },
        toggle : function (show) {

            if (show === undefined) {
                
                show = !this.data.showlist;
            
            }

            show = !!show;
           
            let $target;

            if (this.conf.separateEmit) {

                $target = this.data.$emitTarget;

            } else {

                $target = this.data.$selectArea.querySelector('.wrap');

            }

            this.data.$selectArea.style.display = 'block';

            if (show) {

                let $items = this.data.$list.querySelectorAll('li');
                let $selectedItem = this.data.$list.querySelector('li.selected');
                
                this.data.showlist = true;

                if (!this.conf.separateEmit) {

                    this.data.$listWrap.style.width = `${$target.offsetWidth}px`;

                } else if (typeof this.conf.listWidth === 'number') {

                    this.data.$listWrap.style.width = `${this.conf.listWidth}px`;

                } else {

                    this.data.$listWrap.style.width = `${this.$el.offsetWidth || this.data.$listWrap.offsetWidth}px`;

                }

                this._tipCreate({
                    placement : 'bottom',
                    element : this.data.$listWrap,
                    target : $target,
                    offset : '0 0'
                });

                if (this.conf.multiSelect) {
                
                    this._refreshShowItems();
                
                } else if ($selectedItem) {

                    for (let index of $items.keys()) {

                        if ($items[index] === $selectedItem) {

                            this.data.$list.scrollTop = index * $selectedItem.offsetHeight;

                            break;

                        }

                    }
                
                }

                this.$emit('list-show');

            } else {

                if (!this.conf.separateEmit) {

                    this.data.$listWrap.style.width = `${$target.offsetWidth}px`;

                }

                this.data.showlist = false;

                for (let tipVm of this.data.tips) {

                    if (tipVm.$el._vm.data.show) {

                        tipVm.$el._vm.hide();

                    }

                }

                this.$emit('list-hide');

            }

            return this;

        }
    },
    mounted : function () {

        this.data.mounted = true;
        this.data.$list = this.$el.querySelector('.select-list>.list');
        this.data.$selectList = this.$el.querySelector('.select-list');
        this.data.$selectArea = this.$el.querySelector('.select-area');
        this.Tip.autoReverse = false;
        this.Tip.autoOffset = false;

        this.$watch('conf.list', (newVal, oldVal) => {

            if (JSON.stringify(newVal) !== JSON.stringify(oldVal)) {

                this._updateItemValueList();
                this._refreshShowItems();

            }

        }, {
            immediate : true,
            deep : true
        });

        this._onValueChange();
        this._resizeSelectArea();

        this.$on('value-change', this._onValueChange);

        setTimeout(() => {

            this.$watch('conf.maxShowHeight', this._setListHeight, {
                immediate : true
            });

        });

        this.$watch('conf.separateEmit', (newVal, oldVal) => {

            let $oldEmitTarget = document.querySelector(oldVal);

            if (oldVal && $oldEmitTarget) {
                
                $oldEmitTarget.removeEventListener('click', this._emitClick);

            }

            if (newVal) {

                this.data.$listWrap = this.data.$selectArea;

                this.Vue.nextTick(() => {

                    this.data.$emitTarget = document.querySelector(newVal);
                    document.querySelector(newVal).addEventListener('click', this._emitClick);

                });

            } else {

                this.data.$listWrap = this.data.$selectList;

            }

        }, {
            immediate : true
        });

        this.$watch('conf.canSearch', this._searchKeyChange);

        this.$watch('conf.multiSelect', () => {

            let value = this.get();

            if (!this.conf.multiSelect &&
                value.length > 1) {

                value = value.slice(0, 1);

            }

            this._set(value, true);
            this._onValueChange();

        });

        this.$watch('conf.max', () => {

            this._set(this._maxFilter(this.get()), true);

        });

        this.$watch('conf.inlineImgSize', () => {

            this._resizeInlineImg();

        }, {
            immediate : true
        });

        this.$watch('conf.itemTip', () => {

            this.Vue.nextTick(() => {
                
                this._refreshTips();

            });

        }, {
            immediate : true
        });

        this.$watch('conf.itemTipDirect', () => {

            for (let tipVm of this.data.tips) {

                tipVm.$el._vm.conf.placement = this.conf.itemTipDirect;

            }

        }, {
            immediate : true
        });

        this.$watch('data.itemValMap', this._itemChanged);
        this.$watch('data.itemNameMap', this._itemChanged);
        this.$watch('data.itemTipMap', this._itemChanged);
        this.$watch('data.itemSelectedMap', this._itemChanged);
        this.$watch('data.itemNomathMap', this._itemChanged);

        this.$on('list-show', () => {

            setTimeout(() => {

                this._globalEventAdd('click', '_checkArea');

            });

        });

        this.$on('list-hide', () => {

            this._globalEventRemove('click', '_checkArea');

        });

    },
    updated : function () {
        
        // this._refreshShowItems();

        if (!this.data.highPerfMode) {

            this._setListHeight();

        }

        this._resizeInlineImg();
        this._resizeSelectArea();

    },
    beforeDestroy : function () {

        this._globalEventRemove('click', '_checkArea');

    }
};
</script>

<style lang="less" src="./index.less"></style>
