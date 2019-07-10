<template>
    <mor-select
        :_uiid="uiid"
        :class="[formClass, sizeClass, stateClass, moreClass]"

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
        :dynamic-list="dynamicList"
        :validate="validate"
        :separate-emit="separateEmit"
        :align="align"
        :prepend="prepend"
        :max-show="maxShow"
        :max-show-height="maxShowHeight"
        :auto-close="autoClose"
        :done-hidden="doneHidden"
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

    <div class="form-name" v-if="!conf.hideName && !!conf.formName && !conf.separateEmit">{{conf.formName}}</div>
    <div class="form-note" v-if="!!conf.formNote">{{conf.formNote}}</div>

    <div class="select-wrap form-body" v-if="!conf.separateEmit">
        <template v-if="conf.prepend">
            <div class="input-group-addon" v-html="conf.prepend"></div>
        </template>

        <select-area
            :ref="'ui-select-area-'+uiid"
            :conf="conf"
            :data="data"
            :sizeClass="sizeClass"
            :stateClass="stateClass"
            :listStyle="listStyle"
            :uiid="uiid"
            :isMax="isMax"
            :_wrapClick="_wrapClick"
            :_multiinputFocus="_multiinputFocus"
            :_multiinputValueChange="_multiinputValueChange"
            :_searchKeyChange="_searchKeyChange"
            :_multiinputFocusNoSearch="_multiinputFocusNoSearch"
            :_textinputFocus="_textinputFocus"
            :_textinputBlur="_textinputBlur"
            :_listClick="_listClick"
            :_itemHover="_itemHover"
            :showItemList="showItemList"
            :set="set"
        ></select-area>
    </div>

    <morning-popover
        v-else
        :ref="'ui-select-popover-'+uiid"
        :class="[
            'mor-select-popover',
            {
                'no-animation' : !!data.highPerfMode
            }
        ]"

        :target="conf.separateEmit"
        placement="bottom"
        trigger="method"
        :auto-reverse="true"
    >
        <div class="select-wrap">
            <select-area
                :ref="'ui-select-area-'+uiid"
                :conf="conf"
                :data="data"
                :sizeClass="sizeClass"
                :stateClass="stateClass"
                :listStyle="listStyle"
                :uiid="uiid"
                :_wrapClick="_wrapClick"
                :_multiinputFocus="_multiinputFocus"
                :_multiinputValueChange="_multiinputValueChange"
                :_searchKeyChange="_searchKeyChange"
                :_multiinputFocusNoSearch="_multiinputFocusNoSearch"
                :_textinputFocus="_textinputFocus"
                :_textinputBlur="_textinputBlur"
                :_listClick="_listClick"
                :_itemHover="_itemHover"
                :showItemList="showItemList"
                :set="set"
            ></select-area>
        </div>
    </morning-popover>

    <div class="error-message">{{conf._errorMessage}}</div>
    <morning-link v-if="conf.clearable" color="minor" @emit="_clean" class="cleanbtn">清空</morning-link>

    </mor-select>
</template>

<!--
DOM with different conf.separateEmit:

v-if="!conf.separateEmit"
    select-wrap
        input-group-addon
        @select-area
            wrap
            morning-popover*
                @select-list
v-else
    morning-popover*
        select-wrap
            @select-wrap
                input-group-addon
                select-area
                    wrap
                    @select-list
-->
 
<script>
import map                          from 'lodash.map';
import GlobalEvent                  from 'Utils/GlobalEvent';
import selectArea                   from './select-area.vue';

let noopFn = () => {};

export default {
    origin : 'Form',
    name : 'select',
    mixins : [GlobalEvent],
    components : {
        'select-area' : selectArea
    },
    props : {
        insideName : {
            type : String,
            default : '请选择'
        },
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
        doneHidden : {
            type : [Boolean, String],
            default : 'auto'
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
            default : false
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
                insideName : this.insideName,
                list : this.list,
                dynamicList : this.dynamicList,
                validate : this.validate,
                separateEmit : this.separateEmit,
                align : this.align,
                prepend : this.prepend,
                maxShow : this.maxShow,
                maxShowHeight : this.maxShowHeight,
                autoClose : this.autoClose,
                doneHidden : this.doneHidden,
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
        showItemList : function () {

            if (this.conf.canSearch) {

                return this.data.matchList.slice(0, this.conf.maxShow);

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
                searchKey : '',
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
                $listWrap : null,
                $list : null,
                $emitTarget : null,
                $selectArea : null,
                $selectList : null,
                highPerfMode : false,
                noMatch : false,
                multiinputNameValMap : {},
                itemValMapInit : false,
                matchList : [],
                selectedAll : false,
                hoverIndex : 0,
                mouseenterHoverLock : false,
                popoverVm : null
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
            if (!this.conf.dynamicList && this.data.itemValMapInit) {

                for (let index in value) {

                    let val = value[index];

                    if (this.data.itemValMap.indexOf(val) === -1) {

                        value.splice(index, 1);

                    }

                }

            }

            if (!this.conf.multiSelect &&
                this.data.value &&
                this.data.value.length > 1) {

                return value.slice(0, 1);

            }
            
            this._maxFilter(value);

            return value;

        },
        _maxFilter : function (value) {

            if (this.conf.multiSelect &&
                this.conf.max &&
                value &&
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
            let valMapVals = Object.values(this.data.itemValMap);

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

                for (let index in valMapVals) {

                    if (valMapVals[index] === val) {

                        if (this.conf.multiSelect) {

                            multiNames.push(this.data.itemNameMap[index]);
                            this.data.multiinputNameValMap[this.data.itemNameMap[index]] = valMapVals[index];

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

                this.data.selectedContent = this.conf.insideName || '';

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
        _refreshMatchList : function () {

            let matchList = [];
            let valMapValues = Object.values(this.data.itemValMap);

            for (let index in valMapValues) {

                if (!this.data.itemNomathMap[index]) {

                    matchList.push(index);

                }

            }

            this.data.matchList = matchList;

        },
        _updateItemValueList : function () {

            const useHighPrefModeMinItems = 200;

            let confList = this.conf.list;
            let valMapVals = this.data.itemValMap;
            let list = [];

            if (confList instanceof Array) {

                for (let item of confList) {

                    list.push({
                        val : item.key,
                        name : item.name,
                        tip : item.tip
                    });

                }

            } else if (typeof confList === 'object') {

                for (let key of Object.keys(confList)) {

                    let item = {
                        val : key
                    };

                    if (typeof confList[key] === 'string') {

                        item.name = confList[key];

                    } else if (typeof confList[key] === 'object') {

                        item.name = confList[key].name;
                        item.tip = confList[key].tip;

                    }

                    list.push(item);

                }

            }

            for (let index in valMapVals) {

                for (let key in list) {

                    if (list[key].val === valMapVals[index]) {

                        // extend old status
                        list[key] = {
                            val : list[key].val || valMapVals[index],
                            name : list[key].name || this.data.itemNameMap[index],
                            tip : list[key].tip || this.data.itemTipMap[index],
                            _selected : list[key]._selected || this.data.itemSelectedMap[index] || 0,
                            _nomatch : list[key]._nomatch || this.data.itemNomathMap[index] || 0
                        };

                    }

                }

            }

            // uniq same val
            let keyList = {};
            let uniqList = [];

            for (let key in list) {

                if (!keyList[key]) {

                    uniqList.push(list[key]);

                }

                keyList[key] = 1;

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

            if (!this.data.itemValMapInit) {

                this.data.itemValMapInit = true;
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

            if (this.conf.state === 'readonly' ||
                this.conf.state === 'disabled') {

                return;

            }

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

                this._inputRefocus();
                this.set(value);

                if (this.conf.doneHidden === 'auto') {

                    if (!this.conf.multiSelect) {

                        this.toggle();
                    
                    } else if (value.length >= this.conf.max) {

                        this.toggle();
                    
                    }

                } else if (this.conf.doneHidden) {

                    this.toggle();

                }

            } else {

                this.popoverVm.position();

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
                this.data.searchKey = '';
                this.data.noMatch = false;

                let itemNomathMap = [];

                for (let index of Object.keys(this.data.itemNomathMap)) {

                    itemNomathMap[index] = 0;

                }

                this.data.itemNomathMap = itemNomathMap;
            
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

            if (this.data.searchKey === key) {

                return;

            }

            if (key !== '' && key !== undefined) {

                this.data.searching = true;
                this.data.searchKey = key;
            
            } else {

                this.data.searching = false;
                this.data.searchKey = '';

            }

            this._refreshShowItemsWithSearch();
            this.Vue.nextTick(() => {

                this._updateHoverIndex(null, 0);
                this.popoverVm.position();
                
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

                this.popoverVm.position();

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
            let itemNomathMap = [];
            let valMapVals = Object.values(this.data.itemValMap);

            for (let index in valMapVals) {

                if (!this.data.searching) {

                    itemNomathMap[index] = 0;

                } else if (this.data.itemNameMap[index].search(this.data.searchKey) !== -1) {

                    if (!this.data.itemSelectedMap[index]) {

                        foundNum++;

                    }

                    itemNomathMap[index] = 0;

                } else {

                    itemNomathMap[index] = 1;

                }

            }

            this.data.itemNomathMap = itemNomathMap;

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
            let itemSelectedMap = [];
            let valMapVals = Object.values(this.data.itemValMap);

            for (let index in valMapVals) {

                if (values.indexOf(valMapVals[index]) !== -1) {

                    itemSelectedMap[index] = 1;

                } else {

                    itemSelectedMap[index] = 0;

                }

            }

            this.data.itemSelectedMap = itemSelectedMap;
            this.data.selectedAll = true;

            for (let selected of itemSelectedMap) {

                if (!selected) {

                    this.data.selectedAll = false;

                    break;

                }

            }

            this._refreshShowItemsWithSearch();

        },
        _checkArea : function (evt) {

            let $wrap = this.data.$selectArea.querySelector('.wrap');
            let popoverVm;

            if (this.conf.separateEmit) {

                popoverVm = this.$refs[`ui-select-popover-${this.uiid}`];

            } else {

                popoverVm = this.$refs[`ui-select-area-${this.uiid}`].$refs[`ui-select-popover-${this.uiid}`];

            }

            if (this.data.showlist &&
                this.conf.autoClose &&
                evt.path.indexOf(this.$el) === -1 &&
                evt.path.indexOf($wrap) === -1 &&
                evt.path.indexOf(popoverVm.$el) === -1 &&
                (
                    (this.conf.separateEmit && evt.path.indexOf(this.data.$emitTarget) === -1) ||
                    !this.conf.separateEmit
                )) {

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

            if (this.conf.prepend !== undefined && !this.conf.separateEmit) {

                let $inputGroupAddon = this.$el.querySelector('.input-group-addon');
                let $selectArea = this.data.$selectArea;
                let width = $inputGroupAddon.clientWidth;

                // 1 is left border width
                $selectArea.style.maxWidth = `calc(100% - ${width + 1}px)`;

            }

        },
        _scrollViewToHover : function () {

            let $hoverItem = this.data.$list.querySelector('.hover');

            if (!$hoverItem) {

                return;

            }

            let itemTop = $hoverItem.offsetTop;
            let itemHeight = $hoverItem.offsetHeight;
            let listHeight = this.data.$list.clientHeight;
            let listTop = this.data.$list.scrollTop;
            let disFromBottom = itemTop + itemHeight - listHeight - listTop;
            let disFromTop = itemTop - listTop;

            if (disFromBottom > 0) {

                this.data.$list.scrollTop += Math.ceil(disFromBottom / itemHeight) * itemHeight;

            } else if (disFromTop < 0) {

                this.data.$list.scrollTop -= Math.ceil(-disFromTop / itemHeight) * itemHeight;

            }

        },
        _getNotHiddenItemIndex : function (index, next = true) {

            if (this.conf.hideSelected) {

                let valIndexs = [];
                let value = this.get() || [];
                let showValueList = [];

                for (let i of this.showItemList) {

                    showValueList.push(this.data.itemValMap[i]);

                }

                for (let val of value) {

                    valIndexs.push(showValueList.indexOf(val));

                }

                if (valIndexs.indexOf(index) !== -1 &&
                    valIndexs.length !== showValueList.length) {

                    if (next) {

                        if (index > (this.showItemList.length - 2) && index > 0) {

                            index--;
                            next = false;

                        } else {

                            index++;

                        }

                    } else if (index < 1) {

                        index++;
                        next = true;

                    } else {

                        index--;

                    }

                    return this._getNotHiddenItemIndex(index, next);

                }

                return index;

            }

            return index;

        },
        _updateHoverIndex : function (step, to) {

            let index = this.data.hoverIndex;

            if (to === undefined) {

                index += step;

            } else {

                index = to;

            }

            if (index < 0) {

                index = 0;

            } else if (index > (this.showItemList.length - 1)) {

                index = this.showItemList.length - 1;

            }

            if (index >= 0) {

                index = this._getNotHiddenItemIndex(index, (step >= 0 || to >= 0));

            }

            this.data.hoverIndex = index;

            this.Vue.nextTick(() => {

                this._scrollViewToHover();

            });

        },
        _keyDownUp : function (evt) {

            this.data.mouseenterHoverLock = true;

            if (evt.code === 'ArrowDown') {

                this._updateHoverIndex(1);

            } else if (evt.code === 'ArrowUp') {

                this._updateHoverIndex(-1);

            }

        },
        _keyHandler : function (evt) {

            if (evt.code === 'ArrowDown' ||
                evt.code === 'ArrowUp') {

                this._keyDownUp(evt);

                evt.preventDefault();
                evt.stopPropagation();

            } else if (evt.code === 'Enter') {

                let value = this.get() || [];
                let selectValue = this.data.itemValMap[this.showItemList[this.data.hoverIndex]];

                this._inputRefocus();

                if (value.indexOf(selectValue) !== -1) {

                    value.splice(value.indexOf(selectValue), 1);

                    this._set(value);

                } else if (this.conf.multiSelect) {

                    value.push(selectValue);

                    this._set(value);

                } else {
    
                    this._set([selectValue]);

                }

                if (this.conf.hideSelected) {
                    
                    this._updateHoverIndex(1);

                }
            
                evt.preventDefault();
                evt.stopPropagation();

            }

        },
        _itemHover : function (index) {

            if (this.data.mouseenterHoverLock) {

                return true;

            }

            this.data.hoverIndex = +index;

        },
        _unlockMouseenterLock : function () {

            this.data.mouseenterHoverLock = false;

        },
        _inputRefocus : function () {

            let $searchMultiinput = this.data.$selectArea.querySelector(`#ui-select-mi-${this.uiid}`);

            if ($searchMultiinput && $searchMultiinput._vm) {
    
                $searchMultiinput._vm.focusInput();

            }

        },
        toggle : function (show) {

            if (show === undefined) {
                
                show = !this.data.showlist;
            
            }

            show = !!show;
            this._setListHeight();
           
            let $target;

            if (this.conf.separateEmit) {

                $target = this.data.$emitTarget;

            } else {

                $target = this.data.$selectArea.querySelector('.wrap');

            }

            this.data.$selectArea.style.display = 'block';

            if (show) {

                if (typeof this.conf.listWidth === 'number') {

                    this.data.$listWrap.style.width = `${this.conf.listWidth}px`;

                } else if (!this.conf.separateEmit) {
                    
                    this.data.$listWrap.style.width = `${$target.offsetWidth}px`;

                } else {

                    this.data.$listWrap.style.width = `${this.$el.offsetWidth || this.data.$listWrap.offsetWidth}px`;

                }

                this.popoverVm.show();

            } else {

                if (!this.conf.separateEmit) {

                    if (typeof this.conf.listWidth === 'number') {

                        this.data.$listWrap.style.width = `${this.conf.listWidth}px`;

                    } else {

                        this.data.$listWrap.style.width = `${$target.offsetWidth}px`;

                    }

                }

                this.popoverVm.hide();

            }

            return this;

        }
    },
    mounted : function () {

        this.data.mounted = true;
        this.data.$list = this.$el.querySelector('.select-list>.list');
        this.data.$selectList = this.$el.querySelector('.select-list');
        this.data.$selectArea = this.$el.querySelector('.select-area');

        this.$watch(() => JSON.stringify(this.conf.list), () => {

            this._updateItemValueList();

        }, {
            immediate : true
        });

        // this._refreshShowItems don't need immediate, cause _onValueChange() will exec it.
        this.$watch(() => JSON.stringify(this.conf.list), () => {

            this._refreshShowItems();

        });

        this._onValueChange();
        this._resizeSelectArea();
        this._refreshMatchList();

        this.$on('value-change', this._onValueChange);

        this.$watch('conf.separateEmit', (newVal, oldVal) => {

            let $oldEmitTarget = document.querySelector(oldVal);

            if (oldVal && $oldEmitTarget) {
                
                $oldEmitTarget.removeEventListener('click', this._emitClick);

            }

            if (newVal) {

                this.popoverVm = this.$refs[`ui-select-popover-${this.uiid}`];
                this.data.$listWrap = this.data.$selectArea;
                this.data.$selectArea = this.popoverVm.$el.querySelector('.select-area');

                this.Vue.nextTick(() => {

                    this.data.$emitTarget = document.querySelector(newVal);
                    document.querySelector(newVal).addEventListener('click', this._emitClick);

                });

            } else {

                this.popoverVm = this.$refs[`ui-select-area-${this.uiid}`].$refs[`ui-select-popover-${this.uiid}`];
                this.data.$listWrap = this.data.$selectList;
                this.data.$selectArea = this.$el.querySelector('.select-area');

            }

            this.data.$list = this.popoverVm.$el.querySelector('.select-list>.list');
            this.data.$selectList = this.popoverVm.$el.querySelector('.select-list');

            this.popoverVm.$on('show', () => {

                let $items = this.data.$list.querySelectorAll('li');
                let $selectedItem = this.data.$list.querySelector('li.selected');
                    
                this.data.showlist = true;

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

            });

            this.popoverVm.$on('hide', () => {

                let $tips = this.data.$list.querySelectorAll('.tips');
                
                this.data.showlist = false;

                for (let $tip of $tips.values()) {

                    if ($tip._vm) {

                        if ($tip._vm.data.show) {

                            $tip._vm.hide();

                        }

                    }

                }

                this.$emit('list-hide');

            });

        }, {
            immediate : true
        });

        setTimeout(() => {

            this.$watch('conf.maxShowHeight', this._setListHeight, {
                immediate : true
            });

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

        this.$watch('data.itemValMap', () => {

            this._refreshMatchList();

        });

        this.$watch('data.itemNomathMap', () => {

            this._refreshMatchList();

        });

        this.$on('list-show', () => {

            setTimeout(() => {

                this._globalEventAdd('click', '_checkArea');
                this._globalEventAdd('keydown', '_keyHandler');
                this._globalEventAdd('mousemove', '_unlockMouseenterLock');

            });

        });

        this.$on('list-hide', () => {

            this._globalEventRemove('click', '_checkArea');
            this._globalEventRemove('keydown', '_keyHandler');
            this._globalEventRemove('mousemove', '_unlockMouseenterLock');

        });

    },
    updated : function () {
        
        this._setListHeight();
        this._resizeInlineImg();
        this._resizeSelectArea();

    },
    beforeDestroy : function () {

        this._globalEventRemove('click', '_checkArea');
        this._globalEventRemove('keydown', '_keyHandler');
        this._globalEventRemove('mousemove', '_unlockMouseenterLock');

    }
};
</script>
