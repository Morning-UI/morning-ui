<template>
    <i-select
        :_uiid="uiid"
        :class="[stateClass, moreClass]"

        :form-name="formName"
        :form-key="formKey"
        :group="group"
        :default-value="defaultValue"
        :hide-name="hideName"
        :max-show="maxShow"
        :auto-close="autoClose"
        :can-search="canSearch"
        :multi-select="multiSelect"
        :can-move="canMove"
        :max="max"
        :clean-btn="cleanBtn"
        :inline-img-size="inlineImgSize"
        :item-tip="itemTip"
        :item-tip-direct="itemTipDirect"
    >

    <div class="wrap" @click="_wrapClick">

        <template v-if="conf.multiSelect">
            <morning-multiinput
                :id="'ui-select-mi-' + uiid"
                :can-move="conf.canMove"
                :max="conf.max"
                :form-name="conf.formName"
                :hide-name="conf.hideName"
                :disabled="conf.state === 'disabled'"

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

                v-else

                @input-focus="_multiinputFocusNoSearch()"
                @value-change="_multiinputValueChange()"
            ></morning-multiinput>
        </template>

        <template v-else>
            <template v-if="conf.canSearch">
                <morning-textinput
                    :id="'ui-select-ti-' + uiid"
                    @value-change="_searchKeyChange()"
                    @focus="_textinputFocus()"
                    @blur="_textinputBlur()"
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
        <i
            class="morningicon clean"
            v-if="conf.cleanBtn"
            @click="_set(undefined, true)"
        >&#xe67c;</i>

    </div>

    <ul
        class="list"
        :style="listStyle"
        @click="_listClick"
    >
        <slot></slot>
        <li class="noitem">无项目</li>
    </ul>

    </i-select>
</template>
 
<script>
import trim                         from 'trim';
import Form                         from 'Common/form';
import GlobalEvent                  from 'Utils/GlobalEvent';
import IndexManager                 from 'Utils/IndexManager';

// action="emit:_refreshShowItems"

export default Form.extend({
    name : 'select',
    mixins : [GlobalEvent, IndexManager],
    props : {
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
        cleanBtn : {
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
        }
    },
    data : function () {

        return {
            conf : {
                maxShow : this.maxShow,
                autoClose : this.autoClose,
                canSearch : this.canSearch,
                multiSelect : this.multiSelect,
                canMove : this.canMove,
                max : this.max,
                cleanBtn : this.cleanBtn,
                inlineImgSize : this.inlineImgSize,
                itemTip : this.itemTip,
                itemTipDirect : this.itemTipDirect
            },
            data : {
                showlist : false,
                selectedContent : null,
                searching : false,
                focusSearch : false,
                mounted : false,
                isMax : false,
                multiinputLastValue : [],
                selectInput : false,
                itemValueList : []
            },
            listStyle : {}
        };

    },
    computed : {
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
                'is-max' : !!this.data.isMax,
                'has-clean-btn' : !!this.conf.cleanBtn,
                'select-item' : selectItem
            };

        }
    },
    methods : {
        _valueFilter : function (value) {

            if (typeof value !== 'object' ||
                !(value instanceof Array)) {

                return [];

            }

            if (this.conf.multiSelect &&
                this.conf.max &&
                this.data.value.length > this.conf.max) {

                return value.slice(0, this.conf.max);

            }

            if (!this.conf.multiSelect &&
                this.data.value.length > 1) {

                return value.slice(0, 1);

            }

            // filter not exist value.
            for (let index in value) {

                let val = value[index];

                if (this.data.itemValueList.indexOf(String(val)) === -1) {

                    value.splice(index, 1);

                }

            }

            return value;

        },
        _onValueChange : function () {

            let newVal = this.get(false);
            let $items = this.$el.querySelectorAll('.list>li:not(.noitem)');
            let $currentItems = this.$el.querySelectorAll('.list>li.current');
            let $noitem = this.$el.querySelector('.noitem');
            // let $selected = this.$el.querySelector('.selected');
            let searchTextinput;
            let searchMultiinput;
            let multiValue = [];

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

                            multiValue.push(trim($item.textContent));
                        
                        } else {
                            
                            this.data.selectedContent = $item.innerHTML;

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

            if (this.conf.multiSelect &&
                this.data.value.length === this.conf.max) {

                this.data.isMax = true;

            } else {

                this.data.isMax = false;

            }

            if (!this.conf.multiSelect &&
                (this.data.value.length === 0 || this.data.value === undefined)) {

                this.data.selectedContent = this.conf.formName || '';
            
            }

            if (searchMultiinput &&
                searchMultiinput.get() !== JSON.stringify(multiValue)) {

                let inputValue = searchMultiinput.getInput();

                this.data.selectInput = true;
                searchMultiinput._set(multiValue, true);

                this.Vue.nextTick(() => {
                    
                    searchMultiinput.setInput(inputValue);

                });
            
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

        },
        _wrapClick : function (evt) {

            if (this.conf.state === 'disabled') {

                return;
                
            }

            if (this.conf.multiSelect &&
                this.data.value.length === this.conf.max) {

                return;

            }

            let $searchTextinput = this.$el.querySelector('.wrap i-textinput'),
                $searchMultiinput = this.$el.querySelector('.wrap i-multiinput'),
                $cleanBtn = this.$el.querySelector('.wrap .clean'),
                hasTextinput = (evt.path.indexOf($searchTextinput) !== -1),
                hasMultiinput = (evt.path.indexOf($searchMultiinput) !== -1),
                hasCleanBtn = (evt.path.indexOf($cleanBtn) !== -1);
                // searchTextinput = ($(ev.target).is($multiInput) || $multiInput.find($(ev.target)).length),
                // searchMultiinput = $(ev.target).is($searchInput) || $searchInput.has($(ev.target)).length;

            if (!hasTextinput && !hasMultiinput && !hasCleanBtn) {

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

                    value = this.get(false);
                    value.push($clickItem.getAttribute('value'));
               
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

            if (!this.conf.canSearch ||
                !this.data.mounted) {

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
                key = searchTextinput.get(false);
            
            }

            let $items = this.$el.querySelectorAll('.list>li:not(.noitem):not(.selected)');
            let $noitem = this.$el.querySelector('.noitem');

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
            let values = searchMultiinput.get(false);

            if (!this.data.selectInput &&
                this.data.multiinputLastValue.length <= values.length) {

                searchMultiinput._set(this.data.multiinputLastValue, true);

                return;

            }
            
            this.data.selectInput = false;
            this.data.multiinputLastValue = values;
            this._refreshValue(values);

            // if (this.data.value &&
            //     values &&
            //     (this.prop.value.length > values.length)) {
                
            // } else if ( !_.isEqual(this.lastMultiItemSort, values) ) {

            //     this.refreshValue(values);
            //     this.lastMultiItemSort = values;

            // }

        },
        _refreshShowItems : function () {

            if (!this.conf.multiSelect ||
                !this.data.mounted) {

                return;
            
            }
           
            let searchMultiinput = this.$el.querySelector(`#ui-select-mi-${this.uiid}`)._vm;
            let values = searchMultiinput.get(false);
            let $items = this.$el.querySelectorAll('.list>li:not(.noitem)');

            for (let $item of $items) {

                let selected = false;

                for (let value of values) {

                    if (value === trim($item.textContent)) {

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

            let $inlineImgs = this.$el.querySelectorAll('.list>li i-img,.list>li img');

            for (let $img of $inlineImgs.values()) {

                $img.style.width = this.conf.inlineImgSize;
                $img.style.height = this.conf.inlineImgSize;

            }

        },
        _initTips : function () {

            if (!this.conf.itemTip) {

                return;

            }

            let $items = this.$el.querySelectorAll('.list>li:not(.noitem)');
            let $list = this.$el.querySelector('.list');

            for (let index of $items.keys()) {

                let $item = $items[index];
                let $tip = $item.nextElementSibling;

                if ($tip === null ||
                    $tip.classList.value.split(' ').indexOf('item-tip') === -1) {

                    return;

                }

                const random = 1e8;

                let tipContent = $tip.innerHTML;
                let tipId = `select-tip-${Math.floor(Math.random() * random)}`;
                let $newTip = document.createElement('morning-tip');

                $newTip.setAttribute(':minor', true);
                $newTip.setAttribute('target', `#${tipId}`);
                $newTip.setAttribute('placement', this.conf.itemTipDirect);
                $newTip.innerHTML = tipContent;

                let tipVm = new this.Vue({
                    el : $newTip
                });

                $item.setAttribute('id', tipId);
                $tip.remove();
                tipVm.$mount();
                $list.append(tipVm.$el);

            }

        },
        _setListHeight : function () {

            let $item = this.$el.querySelector('.list>li:not(.noitem):not(.current):not(.selected)');

            if (!$item) {

                return;

            }

            let maxHeight = $item.offsetHeight * this.conf.maxShow;

            if (this.listStyle.maxHeight === `${maxHeight}px`) {

                return;

            }

            this.listStyle = {
                maxHeight : `${maxHeight}px`,
            };

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

        }
    },
    created : function () {

        this._indexReg('list.show', 2);
        this._indexReg('list.hide', 1);

    },
    mounted : function () {

        const timeout = 200;

        this.data.mounted = true;

        // this._globalEventAdd('click', '_checkArea');
        this._resizeInlineImg();
        this._initTips();
        this._updateItemValueList();
        this._onValueChange();

        this.$on('value-change', this._onValueChange);

        setTimeout(() => {

            this.$watch('conf.maxShow', this._setListHeight, {
                immediate : true
            });
        
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

    },
    beforeDestroy : function () {

        this._globalEventRemove('click', '_checkArea');

    }
});
</script>

<style lang="less" src="./index.less"></style>
