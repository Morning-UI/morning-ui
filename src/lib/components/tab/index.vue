<template>
    <mor-tab
        :_uiid="uiid"
        :class="[moreClass]"

        :tab="tab"
        :prepend="prepend"
        :append="append"
        :anchor-target="anchorTarget"
        :position="position"
        :disabled-options="disabledOptions"
    >

        <template v-if="conf.position === 'left' || conf.position === 'top'">
            <ul>
                <li
                    v-for="item in data.namelist"
                    :name="item.name"
                    :key="item.name"
                    :class="{
                        disabled : (conf.disabledOptions.indexOf(item.name) !== -1)
                    }"
                    v-html="item.html"
                    @click="_onClick(item.name)"
                ></li>
            </ul>
        </template>
        
        <div
            class="contents"
            :style="{
                width : data.contentWidth,
                'min-height' : data.contentMinHeight
            }"
        >
            <template v-for="(item, name) in $slots">
                <div class="tab-item mor-tab-item" :name="name" :key="name">
                    <slot :name="name"></slot>
                </div>
            </template>
        </div>

        <template v-if="conf.position === 'right' || conf.position === 'bottom'">
            <ul>
                <li
                    v-for="item in data.namelist"
                    :name="item.name"
                    :key="item.name"
                    :class="{
                        disabled : (conf.disabledOptions.indexOf(item.name) !== -1)
                    }"
                    v-html="item.html"
                    @click="_onClick(item.name)"
                ></li>
            </ul>
        </template>

    </mor-tab>
</template>
 
<script>
import GlobalEvent                  from 'Utils/GlobalEvent';

export default {
    origin : 'UI',
    name : 'tab',
    mixins : [GlobalEvent],
    props : {
        tab : {
            type : String,
            default : undefined
        },
        prepend : {
            type : Object,
            default : () => ({})
        },
        append : {
            type : Object,
            default : () => ({})
        },
        anchorTarget : {
            type : Boolean,
            default : false
        },
        position : {
            type : String,
            default : 'top',
            validator : value => ([
                'top',
                'left',
                'right',
                'bottom'
            ].indexOf(value) !== -1)
        },
        disabledOptions : {
            type : Array,
            default : (() => [])
        }
    },
    computed : {
        _conf : function () {

            return {
                tab : this.tab,
                prepend : this.prepend,
                append : this.append,
                anchorTarget : this.anchorTarget,
                position : this.position,
                disabledOptions : this.disabledOptions
            };

        },
        moreClass : function () {

            return {
                'position-top' : (this.conf.position === 'top'),
                'position-left' : (this.conf.position === 'left'),
                'position-right' : (this.conf.position === 'right'),
                'position-bottom' : (this.conf.position === 'bottom'),
            };

        }
    },
    data : function () {

        return {
            data : {
                tabs : [],
                selectTab : null,
                namelist : [],
                contentWidth : '100%',
                contentMinHeight : '0'
            }
        };

    },
    methods : {
        _onClick : function (name) {

            if (this.conf.disabledOptions.indexOf(name) !== -1) {

                return;

            }

            this.switch(name);

        },
        _getNamelist : function () {

            let names = Object.keys(this.$slots);
            let list = [];

            for (let name of names) {

                let prepend = this.conf.prepend[name];
                let append = this.conf.append[name];

                list.push({
                    name : name,
                    html : `${prepend || ''}${name}${append || ''}`
                });

            }

            this.data.namelist = list;

        },
        _setSticky : function ($con, show) {

            // hidden ui-sticky in tab
            let $stickys = $con.querySelectorAll('mor-sticky');

            for (let $sticky of Array.from($stickys)) {

                if (!show) {
    
                    $sticky.classList.add('mo-in-tab-hidden');

                } else {

                    $sticky.classList.remove('mo-in-tab-hidden');

                }

            }

        },
        _initTabs : function () {

            this._getNamelist();
            this.data.tabs = Object.keys(this.$slots);
            this._initSelectTab();

        },
        _getClosestCanSelectTab : function (name) {

            if (this.conf.disabledOptions.indexOf(name) !== -1) {

                if (this.data.tabs.indexOf(name) < (this.data.tabs.length - 1)) {

                    return this.data.tabs[this.data.tabs.indexOf(name) + 1];

                } else if (this.data.tabs.indexOf(name) === (this.data.tabs.length - 1)) {

                    return this.data.tabs[0];

                }

                return null;

            }

            return name;

        },
        _initSelectTab : function () {

            this.Vue.nextTick(() => {

                // clean old status
                let $currentTabEl = this.$el.querySelector('ul').children;
                let $currentConEl = this.$el.querySelector('.contents').children;

                if ($currentTabEl) {

                    for (let $el of Array.from($currentTabEl)) {

                        $el.classList.remove('current');

                    }

                }

                if ($currentConEl) {

                    for (let $el of Array.from($currentConEl)) {

                        $el.classList.remove('current');
                        this._setSticky($el, false);

                    }

                }

                this.data.selectTab = null;

                // init new select tab
                if (this.conf.tab) {

                    this.switch(this._getClosestCanSelectTab(this.conf.tab));

                } else {

                    this.switch(this._getClosestCanSelectTab(this.data.tabs[0]));

                }

            });

        },
        _findParentTab : function ($el, $originEl) {

            let $closestTabItem = $el.closest('.mor-tab-item');

            if ($closestTabItem) {

                let $closestTab = $closestTabItem.closest('mor-tab');

                if ($closestTab) {

                    let name = $closestTabItem.getAttribute('name');

                    if ($closestTab._vm.conf.anchorTarget) {

                        $closestTab._vm.switch(name);

                    }
    
                    this._findParentTab($closestTab, $originEl);

                }

            } else {

                this.Vue.nextTick(() => {

                    $originEl.scrollIntoView();

                });

            }

        },
        _setContentWidth : function () {

            if (this.conf.position === 'top' ||
                this.conf.position === 'bottom') {

                this.data.contentWidth = '100%';

            } else {

                this.data.contentWidth = `calc(100% - ${this.$el.querySelector('ul').clientWidth}px)`;

                if (this.$el.classList.value.split(' ').indexOf('btn') !== -1) {

                    this.data.contentWidth = `calc(100% - ${this.$el.querySelector('ul').clientWidth + 8}px)`;

                }

            }

        },
        _setContentMinHeight : function () {

            if (this.conf.position === 'top' ||
                this.conf.position === 'bottom') {

                this.data.contentMinHeight = '0';

            } else {

                this.data.contentMinHeight = `${this.$el.querySelector('ul').clientHeight}px`;

            }

        },
        _targetAnchorPoint : function () {

            if (!this.conf.anchorTarget) {

                return;

            }

            let anchor = window.location.hash.replace(/^#/, '');
            let $targetEl;

            anchor = decodeURI(anchor);

            if (anchor) {

                // 使用try/catch因为anchor可能不是一个合法的选择器
                try {

                    $targetEl = this.$el.querySelector(`#${anchor}`);
                    
                    if (!$targetEl) {

                        $targetEl = this.$el.querySelector(`a[name="${anchor}"]`);

                    }

                } catch (e) {}

                if ($targetEl) {

                    this._findParentTab($targetEl, $targetEl);

                }

            }

        },
        switch : function (name) {

            if (name === this.data.selectTab) {

                return this;

            }

            let old = this.data.tabs.indexOf(this.data.selectTab);

            if (old !== -1) {

                let conEl = this.$el.querySelector('.contents').children[old];
                let tabEl = this.$el.querySelector('ul').children[old];

                conEl.classList.remove('current');
                tabEl.classList.remove('current');

                // hidden ui-sticky in tab
                this._setSticky(conEl, false);

            }

            let current = this.data.tabs.indexOf(name);

            if (current !== -1) {

                let conEl = this.$el.querySelector('.contents').children[current];
                let tabEl = this.$el.querySelector('ul').children[current];

                conEl.classList.add('current');
                tabEl.classList.add('current');

                // show ui-sticky in tab
                this._setSticky(conEl, true);

            }

            this.data.selectTab = name;

            this.$emit('switch');

            return this;

        },
        next : function () {

            let index = this.data.tabs.indexOf(this.data.selectTab);

            index++;

            if (index < this.data.tabs.length) {
        
                this.switch(this.data.tabs[index]);

            } else {

                this.switch(this.data.tabs[0]);

            }

            return this;

        },
        prev : function () {

            let index = this.data.tabs.indexOf(this.data.selectTab);

            index--;

            if (index >= 0) {
        
                this.switch(this.data.tabs[index]);

            } else {
        
                this.switch(this.data.tabs[this.data.tabs.length - 1]);
        
            }

            return this;

        }
    },
    created : function () {},
    mounted : function () {

        this.$watch(() => ((JSON.stringify(this.conf.prepend) + JSON.stringify(this.conf.append))), this._getNamelist, {
            deep : true,
            immediate : true
        });

        this._initTabs();

        this.Vue.nextTick(() => {

            this._targetAnchorPoint();
            this._globalEventAdd('hashchange', '_targetAnchorPoint');

        });

        this.$watch(() => (`${JSON.stringify(this.conf.disabledOptions)}||${this.conf.tab}`), () => {

            this._initSelectTab();

            this.Vue.nextTick(() => {
    
                this._setContentWidth();
                this._setContentMinHeight();

            });

        });

        this.$watch('conf.position', () => {

            this.Vue.nextTick(() => {
    
                this._setContentWidth();
                this._setContentMinHeight();

            });

        }, {
            immediate : true
        });

    },
    updated : function () {

        if (this.data.tabs.join(',') !== Object.keys(this.$slots).join(',')) {

            this._initTabs();

        }

    },
    beforeDestroy : function () {

        this._globalEventRemove('hashchange', '_targetAnchorPoint');

    }
};
</script>
