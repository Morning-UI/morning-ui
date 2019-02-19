<template>
    <mor-transfer
        :_uiid="uiid"
        :class="[formClass, stateClass, moreClass]"

        :form-name="formName"
        :form-key="formKey"
        :group="group"
        :hide-name="hideName"
        :clearable="clearable"
        :list="list"
        :source-title="sourceTitle"
        :target-title="targetTitle"
        :can-search="canSearch"
        :disabled-options="disabledOptions"
        :checked-options="checkedOptions"
        :source-to-target-text="sourceToTargetText"
        :target-to-source-text="targetToSourceText"
    >

    <div class="form-name" v-if="!conf.hideName && !!conf.formName">{{conf.formName}}</div>

    <div class="transfer-wrap">

        <div class="transfer-source-list">
            <div class="transfer-title">
                <morning-checkbox
                    :list="{all:'All'}"
                    :id="'mor-transfer-source-'+uiid"
                    :state="conf.state"
                    :ref="'mor-transfer-source-'+uiid"
                ></morning-checkbox>
                <p v-html="conf.sourceTitle"></p>
                <span
                    class="transfer-source-count"
                    v-if="data.sourceSelected.length > 0"
                >
                    {{data.sourceSelected.length}}/{{sourceTotalCount}}
                </span>
                <span
                    class="transfer-target-count"
                    v-else
                >{{sourceTotalCount}}</span>
            </div>
            <div class="transfer-list">
                <div
                    class="search-input"
                    v-if="conf.canSearch"
                >
                    <morning-textinput
                        inside-name="请输入搜索内容"
                        :ref="'mor-transfer-source-search-'+uiid"
                        @value-change="_sourceOnSearch"
                    ></morning-textinput>
                </div>
                <morning-checkbox
                    :state="conf.state"
                    :list="sourceList"
                    :parent="'#mor-transfer-source-'+uiid+':all'"
                    :hiddenOptions="data.searchSourceMissKeys"
                    :disabledOptions="data.sourceDisabledOptions"
                    v-model="data.sourceSelected"
                >
                </morning-checkbox>
                <div class="list-is-empty" v-show="Object.keys(sourceList).length === 0">
                    <morning-empty></morning-empty>
                </div>
            </div>
            <div class="transfer-footer">
                <slot name="source-footer"></slot>
            </div>
        </div>

        <div class="transfer-controls">
            <slot name="sourceToTargetBtn">
                <morning-btn
                    :class="{
                        circle : !conf.sourceToTargetText
                    }"
                    color="silver"
                    size="xs"
                    :state="conf.state"
                    @emit="_toTarget"
                >
                    <i class="mo-icon mo-icon-right"></i>
                    <span>{{conf.sourceToTargetText}}</span>
                </morning-btn>
            </slot>
            <morning-btn
                :class="{
                    circle : !conf.targetToSourceText
                }"
                color="silver"
                size="xs"
                :state="conf.state"
                @emit="_toSource"
            >
                <i class="mo-icon mo-icon-left"></i>
                <span>{{conf.targetToSourceText}}</span>
            </morning-btn>
        </div>
        
        <div class="transfer-target-list">
            <div class="transfer-title">
                <morning-checkbox
                    :list="{all:'All'}"
                    :id="'mor-transfer-target-'+uiid"
                    :state="conf.state"
                    :ref="'mor-transfer-target-'+uiid"
                ></morning-checkbox>
                <p v-html="conf.targetTitle"></p>
                <span
                    class="transfer-target-count"
                    v-if="data.targetSelected.length > 0"
                >
                    {{data.targetSelected.length}}/{{targetTotalCount}}
                </span>
                <span
                    class="transfer-target-count"
                    v-else
                >{{targetTotalCount}}</span>
            </div>
            <div class="transfer-list">
                <div
                    class="search-input"
                    v-if="conf.canSearch"
                >
                    <morning-textinput
                        inside-name="请输入搜索内容"
                        :ref="'mor-transfer-target-search-'+uiid"
                        @value-change="_targetOnSearch"
                    ></morning-textinput>
                </div>
                <morning-checkbox
                    :state="conf.state"
                    :list="targetList"
                    :parent="'#mor-transfer-target-'+uiid+':all'"
                    :hiddenOptions="data.searchTargetMissKeys"
                    :disabledOptions="data.targetDisabledOptions"
                    v-model="data.targetSelected"
                >
                </morning-checkbox>
                <div class="list-is-empty" v-show="Object.keys(targetList).length === 0">
                    <morning-empty></morning-empty>
                </div>
            </div>
            <div class="transfer-footer">
                <slot name="target-footer"></slot>
            </div>
        </div>

    </div>

    <morning-link v-if="conf.clearable" color="minor" @emit="_clean" class="cleanbtn">清空</morning-link>

    </mor-transfer>
</template>
 
<script>
import difference                   from 'lodash.difference';
import intersection                 from 'lodash.intersection';
import isPlainObject                from 'lodash.isplainobject';

export default {
    origin : 'Form',
    name : 'transfer',
    props : {
        list : {
            type : Object,
            default : (() => ({}))
        },
        sourceTitle : {
            type : String,
            default : '待选'
        },
        targetTitle : {
            type : String,
            default : '选中'
        },
        canSearch : {
            type : Boolean,
            default : false
        },
        disabledOptions : {
            type : Array,
            default : (() => ([]))
        },
        checkedOptions : {
            type : Array,
            default : (() => ([]))
        },
        sourceToTargetText : {
            type : String,
            default : undefined
        },
        targetToSourceText : {
            type : String,
            default : undefined
        }
    },
    computed : {
        _conf : function () {

            return {
                list : this.list,
                sourceTitle : this.sourceTitle,
                targetTitle : this.targetTitle,
                canSearch : this.canSearch,
                disabledOptions : this.disabledOptions,
                checkedOptions : this.checkedOptions,
                sourceToTargetText : this.sourceToTargetText,
                targetToSourceText : this.targetToSourceText
            };

        },
        moreClass : function () {

            return {
                'has-form-name' : !!this.conf.formName
            };

        },
        sourceList : function () {

            let list = {};

            for (let key in this.conf.list) {

                if (this.data.value.source.indexOf(key) !== -1) {

                    list[key] = this.conf.list[key];

                }

            }

            return list;

        },
        targetList : function () {

            let list = {};

            for (let key in this.conf.list) {

                if (this.data.value.target.indexOf(key) !== -1) {

                    list[key] = this.conf.list[key];

                }

            }

            return list;

        },
        sourceTotalCount : function () {

            return Object.keys(this.sourceList).length;

        },
        targetTotalCount : function () {

            return Object.keys(this.targetList).length;

        }
    },
    data : function () {

        return {
            data : {
                sourceSelected : [],
                targetSelected : [],
                searchSourceMissKeys : [],
                searchTargetMissKeys : [],
                sourceDisabledOptions : [],
                targetDisabledOptions : []
            }
        };

    },
    methods : {
        _valueFilter : function (value) {

            let listKeys = Object.keys(this.conf.list);

            if (!isPlainObject(value)) {

                value = {
                    source : listKeys,
                    target : []
                };

            }

            if (!Array.isArray(value.target)) {

                value.target = [];

            }

            if (!Array.isArray(value.source)) {

                value.source = difference(listKeys, value.target);

            }

            return value;

        },
        _toTarget : function () {

            let source = this.data.sourceSelected;
            let value = this.get();

            value.source = difference(value.source, source);
            value.target = value.target.concat(source);

            this._set(value, true);

            this.data.sourceSelected = [];

        },
        _toSource : function () {

            let target = this.data.targetSelected;
            let value = this.get();

            value.target = difference(value.target, target);
            value.source = value.source.concat(target);

            this._set(value, true);

            this.data.targetSelected = [];

        },
        _sourceOnSearch : function () {

            let hitKeys = [];
            let searchKey = this.$refs[`mor-transfer-source-search-${this.uiid}`].get();

            for (let key in this.conf.list) {

                if (this.conf.list[key].search(searchKey) !== -1) {

                    hitKeys.push(key);

                }

            }

            this.data.searchSourceMissKeys = difference(Object.keys(this.conf.list), hitKeys);

        },
        _targetOnSearch : function () {

            let hitKeys = [];
            let searchKey = this.$refs[`mor-transfer-target-search-${this.uiid}`].get();

            for (let key in this.conf.list) {

                if (this.conf.list[key].search(searchKey) !== -1) {

                    hitKeys.push(key);

                }

            }

            this.data.searchTargetMissKeys = difference(Object.keys(this.conf.list), hitKeys);

        },
        toggle : function (key, checked) {

            if (this.conf.disabledOptions[key]) {

                return this;

            }

            let list = this.get();
            let pos = 'source';

            if (list.target.indexOf(key) !== -1) {

                pos = 'target';

            }
            
            let index = this.data[`${pos}Selected`].indexOf(key);

            if (checked === undefined) {

                if (index !== -1) {

                    this.data[`${pos}Selected`].splice(index, 1);

                } else {

                    this.data[`${pos}Selected`].push(key);

                }
            
            } else if (checked && index === -1) {

                this.data[`${pos}Selected`].push(key);

            } else if (!checked && index !== -1) {

                this.data[`${pos}Selected`].splice(index, 1);

            }

            return this;

        }
    },
    created : function () {},
    mounted : function () {

        this.$watch('sourceList', () => {

            if (Object.keys(this.sourceList).length === 0) {

                this.Vue.nextTick(() => {
                
                    this.$refs[`mor-transfer-source-${this.uiid}`].set();

                });

            }

        }, {
            immediate : true
        });

        this.$watch('targetList', () => {

            if (Object.keys(this.targetList).length === 0) {

                this.Vue.nextTick(() => {
                
                    this.$refs[`mor-transfer-target-${this.uiid}`].set();

                });

            }

        }, {
            immediate : true
        });

        this.$watch('conf.checkedOptions', () => {

            let value = this.get();

            this.data.sourceSelected = intersection(value.source, this.conf.checkedOptions);
            this.data.targetSelected = intersection(value.target, this.conf.checkedOptions);

        }, {
            immediate : true
        });

        this.$watch('conf.disabledOptions', () => {

            let value = this.get();

            this.data.sourceDisabledOptions = intersection(value.source, this.conf.disabledOptions);
            this.data.targetDisabledOptions = intersection(value.target, this.conf.disabledOptions);

        }, {
            immediate : true
        });

    }
};
</script>

<style lang="less" src="./index.less"></style>
