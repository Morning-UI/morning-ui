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
        :align="align"
        :prepend="prepend"
        :max-show="maxShow"
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
    >

    <template v-if="conf.prepend">
        <div class="input-group-addon" v-html="conf.prepend"></div>
    </template>

    <div class="select-area">
        <div class="wrap" @click="_wrapClick">

            <template v-if="conf.multiSelect">
                <morning-multiinput
                    :id="'ui-select-mi-' + uiid"
                    :can-move="conf.canMove"
                    :max="conf.max"
                    :form-name="conf.formName"
                    :hide-name="conf.hideName"
                    :disabled="conf.state === 'disabled'"
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
                    :disabled="conf.state === 'disabled'"
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

            <i class="morningicon drop">&#xe6b1;</i>

        </div>

        <ul
            class="list"
            :style="listStyle"
            @click="_listClick"
        >
            <slot></slot>
            <li class="noitem">无项目</li>
        </ul>
    </div>

    <morning-link v-if="conf.clearable" color="minor" @emit="_clean" class="cleanbtn">清空</morning-link>

    </mor-select>
</template>
 
<script>
import trim                         from 'trim';
import GlobalEvent                  from 'Utils/GlobalEvent';
import IndexManager                 from 'Utils/IndexManager';

export default {
    origin : 'Form',
    name : 'select',
    mixins : [GlobalEvent, IndexManager],
    props : {
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
        }
    },
    computed : {
        _conf : function () {

            return {
                align : this.align,
                prepend : this.prepend,
                maxShow : this.maxShow,
                autoClose : this.autoClose,
                canSearch : this.canSearch,
                multiSelect : this.multiSelect,
                canMove : this.canMove,
                max : this.max,
                autoResetSearch : this.autoResetSearch,
                hideSelected : this.hideSelected,
                inlineImgSize : this.inlineImgSize,
                itemTip : this.itemTip,
                itemTipDirect : this.itemTipDirect
            };

        },
        moreClass : function () {

            let selectItem = false;

            if (this.data.value &&
                this.data.value.length > 0) {

                selectItem = true;

            }

            return {
                showlist : !!this.data.showlist,
                searching : !!this.data.searching,
                'focus-search' : !!this.data.focusSearch,
                'is-max' : !!this.isMax,
                'select-item' : selectItem,
                'align-left' : (this.conf.align === 'left'),
                'align-center' : (this.conf.align === 'center'),
                'align-right' : (this.conf.align === 'right'),
                'input-group' : !!this.conf.prepend,
                'hide-selected' : this.conf.hideSelected
            };

        },
        isMax : function () {

            if (this.conf.multiSelect &&
                this.data.value.length === this.conf.max) {

                return true;

            }

            return false;

        }
    },
    data : function () {

        return {
            data : {
                showlist : false,
                selectedContent : null,
                searching : false,
                focusSearch : false,
                mounted : false,
                isMax : false,
                multiinputLastValue : [],
                selectInput : false,
                itemValueList : [],
                filterNotExist : false,
                lastItemHeight : 0,
                tipsContent : [],
                tips : []
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

            this._maxFilter(value);

            if (!this.conf.multiSelect &&
                this.data.value.length > 1) {

                return value.slice(0, 1);

            }

            // filter not exist value.
            if (this.data.filterNotExist) {

                for (let index in value) {

                    let val = value[index];

                    if (this.data.itemValueList.indexOf(String(val)) === -1) {

                        value.splice(index, 1);

                    }

                }

            }

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
        _onValueChange : function () {

            let newVal = this.get();
            let $items = this.$el.querySelectorAll('.list>li:not(.noitem)');
            let $currentItems = this.$el.querySelectorAll('.list>li.current');
            let $noitem = this.$el.querySelector('.noitem');
            // let $selected = this.$el.querySelector('.selected');
            let searchTextinput;
            let searchMultiinput;
            let multiNames = [];

            for (let $item of $currentItems.values()) {

                $item.classList.remove('current');

            }

            if (this.conf.canSearch &&
                !this.conf.multiSelect) {

                searchTextinput = this.$el.querySelector(`#ui-select-ti-${this.uiid}`);

                if (searchTextinput) {

                    searchTextinput = searchTextinput._vm;

                }

            } else if (this.conf.multiSelect) {

                searchMultiinput = this.$el.querySelector(`#ui-select-mi-${this.uiid}`);

                if (searchMultiinput) {

                    searchMultiinput = searchMultiinput._vm;

                }

            }

            for (let val of newVal) {

                for (let $item of $items.values()) {

                    if ($item.getAttribute('value') === val) {

                        $item.classList.add('current');

                        if (this.conf.canSearch) {

                            if (searchTextinput) {

                                searchTextinput._set(undefined, true);

                            }

                        }

                        if (this.conf.multiSelect) {

                            multiNames.push(trim($item.textContent));
                        
                        } else {
                            
                            this.data.selectedContent = $item.textContent;

                        }
                    
                    }

                }

            }

            if (this.conf.multiSelect &&
                this.data.value.length === $items.length) {

                $noitem.classList.add('show');

            } else {
                
                $noitem.classList.remove('show');

            }

            if (!this.conf.multiSelect &&
                (this.data.value.length === 0 || this.data.value === undefined)) {

                this.data.selectedContent = this.conf.formName || '';
            
            }

            if (searchMultiinput &&
                searchMultiinput.getJson() !== JSON.stringify(multiNames)) {

                let inputValue = searchMultiinput.getInput();

                this.data.selectInput = true;
                searchMultiinput._set(multiNames, true);
                    
                if (!this.conf.autoResetSearch) {
                    
                    this.Vue.nextTick(() => {

                        searchMultiinput.setInput(inputValue);

                    });
        
                }
            
            }

            this._refreshShowItems();

        },
        _updateItemValueList : function () {

            let $items = this.$el.querySelectorAll('.list>li:not(.noitem)');
            let list = [];

            for (let $item of $items.values()) {

                list.push($item.getAttribute('value'));

            }

            this.data.itemValueList = list;

            if (this.data.filterNotExist === false) {

                this.data.filterNotExist = true;
                this.set(this._valueFilter(this.get()));
            
            }

        },
        _wrapClick : function (evt) {

            if (this.conf.state === 'disabled') {

                return;
                
            }

            if (this.conf.multiSelect &&
                this.data.value.length === this.conf.max) {

                return;

            }

            let $searchTextinput = this.$el.querySelector('.wrap mor-textinput'),
                $searchMultiinput = this.$el.querySelector('.wrap mor-multiinput'),
                hasTextinput = (evt.path.indexOf($searchTextinput) !== -1),
                hasMultiinput = (evt.path.indexOf($searchMultiinput) !== -1);

            if (!hasTextinput && !hasMultiinput) {

                this.toggle();

            } else if ((hasTextinput || hasMultiinput) && this.data.showlist === false) {

                this.toggle();

            }

            // this.toggle();

        },
        _listClick : function (evt) {

            let $items = this.$el.querySelectorAll('.list>li:not(.noitem)');
            let $clickItem = false;

            for (let $item of $items.values()) {

                if (evt.path.indexOf($item) !== -1) {

                    $clickItem = $item;
                    break;

                }

            }

            if ($clickItem) {

                let value = [$clickItem.getAttribute('value')];

                if (this.conf.multiSelect &&
                    this.data.value !== undefined) {

                    value = this.get();

                    let clickValue = $clickItem.getAttribute('value');
                    let index = value.indexOf(clickValue);

                    if (index !== -1) {

                        value.splice(index, 1);

                    } else {

                        value.push(clickValue);

                    }
               
                }

                this.set(value);

                if (!this.conf.multiSelect) {

                    this.toggle();
                
                } else if (value.length >= this.conf.max) {

                    // $(ev.currentTarget).hide();
                    this.toggle();
                
                }

            }

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

            let $items = this.$el.querySelectorAll('.list>li:not(.noitem):not(.selected)');
            let $noitem = this.$el.querySelector('.noitem');

            if (!this.conf.canSearch) {

                this.data.searching = false;

                for (let $item of $items.values()) {

                    $item.classList.remove('hide');
                    $noitem.classList.remove('show');

                }

                return;

            }
        
            let key;

            if (this.conf.multiSelect) {

                let searchMultiinput = this.$el.querySelector(`#ui-select-mi-${this.uiid}`);

                searchMultiinput = searchMultiinput._vm;
                key = searchMultiinput.getInput();

            } else {

                let searchTextinput = this.$el.querySelector(`#ui-select-ti-${this.uiid}`);

                searchTextinput = searchTextinput._vm;
                key = searchTextinput.get();
            
            }

            if (key !== '' && key !== undefined) {

                this.data.searching = true;
            
            } else {

                this.data.searching = false;

            }

            let foundNum = 0;

            for (let $item of $items.values()) {

                if (!this.data.searching) {

                    $item.classList.remove('hide');

                } else if (this.data.showlist && trim($item.textContent).search(key) !== -1) {

                    foundNum++;
                    $item.classList.remove('hide');

                } else if (this.data.showlist) {

                    $item.classList.add('hide');

                }

            }
            
            if (this.data.searching &&
                foundNum === 0) {
                
                $noitem.classList.add('show');

            } else {
                
                $noitem.classList.remove('show');

            }

        },
        _multiinputFocusNoSearch : function () {

            let searchMultiinput = this.$el.querySelector(`#ui-select-mi-${this.uiid}`)._vm;

            searchMultiinput._blurInput();
            this._multiinputFocus();

        },
        _multiinputFocus : function () {

            this.toggle(true);

        },
        _refreshValue : function (values) {

            let setValue = [];
            let $items = this.$el.querySelectorAll('.list>li:not(.noitem)');

            for (let value of values) {

                for (let $item of $items.values()) {

                    if (trim($item.textContent) === value) {

                        setValue.push($item.getAttribute('value'));

                        break;

                    }

                }

            }

            this.set(setValue);

        },
        _multiinputValueChange : function () {

            if (!this.data.mounted) {

                return;

            }

            let searchMultiinput = this.$el.querySelector(`#ui-select-mi-${this.uiid}`)._vm;
            let values = searchMultiinput.get();

            if (!searchMultiinput.Move.moving &&
                !this.data.selectInput &&
                this.data.multiinputLastValue.length <= values.length) {

                searchMultiinput._set(this.data.multiinputLastValue, true);

                return;

            }
            
            this.data.selectInput = false;
            this.data.multiinputLastValue = values;
            this._refreshValue(values);

        },
        _refreshShowItems : function () {

            if (!this.data.mounted) {

                return;

            }
           
            let values = this.get();
            let $items = this.$el.querySelectorAll('.list>li:not(.noitem)');

            for (let $item of $items) {

                let selected = false;

                for (let value of values) {

                    if (value === $item.getAttribute('value')) {

                        selected = true;

                        break;

                    }

                }

                if (selected) {

                    $item.classList.add('selected');

                } else {

                    $item.classList.remove('selected');

                }

            }

        },
        _checkArea : function (evt) {

            if (this.data.showlist &&
                this.conf.autoClose &&
                evt.path.indexOf(this.$el) === -1) {
                
                this.toggle(false);
            
            }

        },
        _resizeInlineImg : function () {

            if (!this.conf.inlineImgSize) {

                return;

            }

            let $inlineImgs = this.$el.querySelectorAll('.list>li mor-img,.list>li img');

            for (let $img of $inlineImgs.values()) {

                $img.style.width = this.conf.inlineImgSize;
                $img.style.height = this.conf.inlineImgSize;

            }

        },
        _refreshTips : function () {

            if (!this.conf.itemTip) {

                for (let tipVm of this.data.tips) {

                    tipVm.$destroy();

                }

                this.data.tips = [];

                return;

            }

            let $items = this.$el.querySelectorAll('.list>li:not(.noitem)');
            let $list = this.$el.querySelector('.list');

            for (let index of $items.keys()) {

                let $item = $items[index];
                let $tip = $item.nextElementSibling;

                if (!this.data.tipsContent[index] &&
                    ($tip === null ||
                    $tip.classList.value.split(' ').indexOf('item-tip') === -1)) {

                    return;

                }

                if (!this.data.tipsContent[index]) {
                
                    this.data.tipsContent[index] = $tip.innerHTML;
                    $tip.remove();

                }

                const random = 1e8;

                let tipId = `select-tip-${Math.floor(Math.random() * random)}`;
                let $newTip = document.createElement('morning-tip');

                $newTip.setAttribute(':minor', true);
                $newTip.setAttribute('target', `#${tipId}`);
                $newTip.setAttribute('placement', this.conf.itemTipDirect);
                $newTip.innerHTML = this.data.tipsContent[index];

                let tipVm = new this.Vue({
                    el : $newTip
                });

                $item.setAttribute('id', tipId);
                tipVm.$mount();
                $list.append(tipVm.$el);
                this.data.tips.push(tipVm);

            }

        },
        _setListHeight : function () {

            let $item = this.$el.querySelector('.list>li:not(.noitem):not(.current):not(.selected)');

            if (!$item) {

                return;

            }

            let itemHeight = $item.offsetHeight || this.data.lastItemHeight;
            let maxHeight = itemHeight * this.conf.maxShow;

            if (itemHeight) {

                this.data.lastItemHeight = itemHeight;

            }

            if (this.listStyle.maxHeight === `${maxHeight}px`) {

                return;

            }

            this.listStyle = {
                maxHeight : `${maxHeight}px`,
            };

        },
        _resizeSelectArea : function () {

            if (this.conf.prepend !== undefined) {

                let $inputGroupAddon = this.$el.querySelector('.input-group-addon');
                let $selectArea = this.$el.querySelector('.select-area');
                let width = $inputGroupAddon.clientWidth;

                // 1 is left border width
                $selectArea.style.maxWidth = `calc(100% - ${width + 1}px)`;

            }

        },
        toggle : function (show) {

            if (show === undefined) {
                
                show = !this.data.showlist;
            
            }

            show = !!show;

            if (show) {

                // this.$items.hide().not('.noresult,.selected').show();

                let $items = this.$el.querySelectorAll('.list>li');
                let $currentItem = this.$el.querySelector('.list>li.current');
                let $list = this.$el.querySelector('.list');
                
                if (this.conf.multiSelect) {
                
                    this._refreshShowItems();
                
                } else if ($currentItem) {

                    for (let index of $items.keys()) {

                        if ($items[index] === $currentItem) {

                            $list.scrollTop = index * $currentItem.offsetHeight;

                            break;

                        }

                    }
                
                }
                
                // this._searchKeyChange();
                this.data.showlist = true;
                this.$emit('list-show');

            } else {

                this.data.showlist = false;
                this.$emit('list-hide');

            }

            return this;

        }
    },
    created : function () {

        this._indexReg('list.show', 2);
        this._indexReg('list.hide', 1);

    },
    mounted : function () {

        const timeout = 200;

        this.data.mounted = true;

        this._updateItemValueList();
        this._onValueChange();
        this._resizeSelectArea();
        
        this.$on('value-change', this._onValueChange);

        setTimeout(() => {

            this.$watch('conf.maxShow', this._setListHeight, {
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

        this.$watch('conf.itemTip', () => {

            this._refreshTips();

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

        this.$on('list-show', () => {

            this.$el.style.zIndex = this._indexGet('list.show');

            setTimeout(() => {

                this._globalEventAdd('click', '_checkArea');

            });

        });

        this.$on('list-hide', () => {

            this._globalEventRemove('click', '_checkArea');

            setTimeout(() => {

                this.$el.style.zIndex = this._indexGet('list.hide');

            }, timeout);

        });

    },
    updated : function () {

        this._setListHeight();
        this._resizeInlineImg();
        this._updateItemValueList();
        this._resizeSelectArea();

    },
    beforeDestroy : function () {

        this._globalEventRemove('click', '_checkArea');

    }
};
</script>

<style lang="less" src="./index.less"></style>
