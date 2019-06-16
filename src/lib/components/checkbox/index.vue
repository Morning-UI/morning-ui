<template>
    <mor-checkbox
        :_uiid="uiid"
        :class="[formClass, sizeClass, colorClass, stateClass, moreClass]"

        :form-name="formName"
        :form-note="formNote"
        :form-key="formKey"
        :group="group"
        :hide-name="hideName"
        :clearable="clearable"
        :_errorMessage="_errorMessage"
        :accept-html="acceptHtml"
        :list="list"
        :disabled-options="disabledOptions"
        :hidden-options="hiddenOptions"
        :max="max"
        :parent="parent"
        :type="type"
        :indeterminate="indeterminate"
        :checked-state="checkedState"
    >
    
    <div class="form-name" v-if="!conf.hideName && !!conf.formName">{{conf.formName}}</div>
    <div class="form-note" v-if="!!conf.formNote">{{conf.formNote}}</div>

    <div class="il form-body">
        <template v-for="(name, key) in conf.list">

            <template v-if="conf.indeterminate">
                <label
                    :class="{
                        checked : (data.checkedState[key] === 1),
                        'part-checked' : (data.checkedState[key] === 0),
                        disabled : data.disabledOptions[key],
                        hidden : (conf.hiddenOptions.indexOf(key) !== -1)
                    }"
                    :value="key"
                    :key="key"
                    @click="conf.state !== 'readonly' && _toggleCheckedState(key)"
                >
                    <p class="box">
                        <i class="mo-icon part-checked-icon" v-if="data.checkedState[key] === 0"></i>
                        <i class="mo-icon mo-icon-check" v-else></i>
                    </p>
                    <template v-if="conf.acceptHtml">
                        <span v-html="name"></span>
                    </template>
                    <template v-else>
                        <span>{{name}}</span>
                    </template>
                </label>
            </template>

            <template v-else>

                <template v-if="data.value.indexOf(key) !== -1">
                    <label
                        class="checked"
                        :class="{
                            disabled : data.disabledOptions[key],
                            hidden : (conf.hiddenOptions.indexOf(key) !== -1)
                        }"
                        :value="key"
                        :key="key"
                        @click="conf.state !== 'readonly' && toggle(key)"
                    >
                        <p class="box"><i class="mo-icon mo-icon-check"></i></p>
                        <template v-if="conf.acceptHtml">
                            <span v-html="name"></span>
                        </template>
                        <template v-else>
                            <span>{{name}}</span>
                        </template>
                    </label>
                </template>

                <template v-else-if="data.partCheckedKeys.indexOf(key) !== -1">
                    <label
                        class="part-checked"
                        :class="{
                            disabled : data.disabledOptions[key],
                            hidden : (conf.hiddenOptions.indexOf(key) !== -1)
                        }"
                        :value="key"
                        :key="key"
                        @click="conf.state !== 'readonly' && toggle(key)"
                    >
                        <p class="box"><i class="mo-icon part-checked-icon"></i></p>
                        <template v-if="conf.acceptHtml">
                            <span v-html="name"></span>
                        </template>
                        <template v-else>
                            <span>{{name}}</span>
                        </template>
                    </label>
                </template>

                <template v-else>
                    <label
                        :class="{
                            disabled : data.disabledOptions[key],
                            hidden : (conf.hiddenOptions.indexOf(key) !== -1)
                        }"
                        :value="key"
                        :key="key"
                        @click="conf.state !== 'readonly' && toggle(key)"
                    >
                        <p class="box"><i class="mo-icon mo-icon-check"></i></p>
                        <template v-if="conf.acceptHtml">
                            <span v-html="name"></span>
                        </template>
                        <template v-else>
                            <span>{{name}}</span>
                        </template>
                    </label>
                </template>

            </template>

        </template>
    </div>

    <div class="error-message">{{conf._errorMessage}}</div>
    <morning-link v-if="conf.clearable" color="minor" @emit="_clean" class="cleanbtn">清空</morning-link>

    </mor-checkbox>
</template>
 
<script>
import extend                       from 'extend';
import arrayUniq                    from 'array-uniq';

export default {
    origin : 'Form',
    name : 'checkbox',
    props : {
        acceptHtml : {
            type : Boolean,
            default : false
        },
        list : {
            type : Object,
            default : () => ({})
        },
        disabledOptions : {
            type : Array,
            default : () => ([])
        },
        hiddenOptions : {
            type : Array,
            default : () => ([])
        },
        max : {
            type : Number,
            default : Infinity
        },
        parent : {
            type : String,
            default : ''
        },
        type : {
            type : String,
            default : 'check',
            validator : (value => ['check', 'button'].indexOf(value) !== -1)
        },
        indeterminate : {
            type : Boolean,
            default : false
        },
        checkedState : {
            type : Object,
            default : (() => ({}))
        }
    },
    computed : {
        _conf : function () {

            return {
                acceptHtml : this.acceptHtml,
                list : this.list,
                disabledOptions : this.disabledOptions,
                hiddenOptions : this.hiddenOptions,
                max : this.max,
                parent : this.parent,
                type : this.type,
                indeterminate : this.indeterminate,
                checkedState : this.checkedState
            };

        },
        moreClass : function () {

            return {
                'is-max' : this.isMax,
                'type-button' : (this.conf.type === 'button')
            };

        },
        isMax : function () {

            if (this.data.value.length >= this.conf.max) {

                return true;

            }

            return false;

        },
        checkedStatus : function () {

            let value = this.get();
            let lastCheckNum = Object.keys(this.conf.list).length - this.conf.disabledOptions.length - value.length;
            let status = 0;

            if (value &&
                value.length > 0 &&
                (
                    lastCheckNum <= 0 ||
                    value.length === this.conf.max
                )
            ) {

                // all checked
                status = 1;

            } else if (value && value.length > 0) {

                // something checked
                status = 0;

            } else if (lastCheckNum <= 0) {

                // nothing can check
                status = -2;

            } else {

                // no checked
                status = -1;

            }

            return status;

        }
    },
    data : function () {

        return {
            data : {
                disabledOptions : {},
                $parentVm : null,
                parentKey : null,
                linkedVm : {},
                linkedVmKeyMap : {},
                partCheckedKeys : [],
                checkedState : {}
            }
        };

    },
    methods : {
        _valueFilter : function (value) {

            if (typeof value !== 'object' ||
                !(value instanceof Array)) {

                return [];

            }

            // filter not exist value.
            for (let index in value) {

                let val = value[index];

                if (Object.keys(this.conf.list).indexOf(String(val)) === -1) {

                    value.splice(index, 1);

                }

            }

            while (value.length > this.conf.max) {

                value.pop();

            }

            return value;

        },
        _refreshDisabledOptions : function () {

            let list = {};

            for (let key of this.conf.disabledOptions) {

                list[key] = true;

            }

            this.data.disabledOptions = list;

        },
        _syncLinkedCheckedStatus : function (key) {

            if (key) {

                let childStatus = [];
                let index = this.data.partCheckedKeys.indexOf(key);

                if (index > -1) {

                    this.data.partCheckedKeys.splice(index, 1);

                }

                for (let linkKey of Object.keys(this.data.linkedVm)) {

                    if (linkKey.search(`${key}:`) === 0) {

                        childStatus.push(this.data.linkedVm[linkKey].checkedStatus);

                    }

                }

                childStatus = arrayUniq(childStatus);
                childStatus = childStatus.sort();

                if (
                    (childStatus.length === 1 && childStatus[0] === -1) ||
                    (childStatus.length === 1 && childStatus[0] === -2) ||
                    (
                        childStatus.length === 2 &&
                        childStatus[0] === -1 &&
                        childStatus[1] === -2
                    )
                ) {

                    // all uncheck
                    this.toggle(key, false);

                } else if (
                    (childStatus.length === 1 && childStatus[0] === 1) ||
                    (
                        childStatus.length === 2 &&
                        childStatus[0] === -2 &&
                        childStatus[1] === 1
                    )
                ) {

                    // all checked
                    this.toggle(key, true);

                } else {

                    // part checked
                    this.toggle(key, false);
                    this.data.partCheckedKeys.push(key);

                }

            }

        },
        _syncLinkedChild : function () {

            if (this.data.linkedVm) {

                let value = this.get();

                for (let childKey of Object.keys(this.data.linkedVm)) {

                    let vm = this.data.linkedVm[childKey];
                    let key = childKey.split(':')[0];

                    if (value.indexOf(key) !== -1) {

                        vm._toggleAll(true);

                    } else if (this.data.partCheckedKeys.indexOf(key) === -1) {

                        vm._toggleAll(false);

                    }

                }

            }

        },
        _toggleAll : function (checked) {

            for (let key of Object.keys(this.conf.list)) {

                this.toggle(key, checked);

            }

        },
        _toggleCheckedState : function (key) {

            let state = this.data.checkedState[key];

            if (state === undefined) {

                state = 1;

            } else if (state === 1) {

                state = -1;

            } else if (state === -1 || state === 0) {

                state = 1;

            }

            this.data.checkedState[key] = state;
            this.$forceUpdate();

        },
        toggle : function (key, checked) {

            if (this.conf.indeterminate) {

                return this;

            }

            if (this.data.disabledOptions[key]) {

                return this;

            }

            let list = extend(true, [], this.data.value);

            if (checked === undefined) {

                if (list.indexOf(key) !== -1) {
                
                    checked = false;
                
                } else {
                
                    checked = true;
                
                }
            
            }

            checked = !!checked;

            if (list.length === this.conf.max && checked) {

                return this;

            }

            if (checked) {

                list.push(key);
            
            } else if (list.indexOf(key) !== -1) {

                list.splice(list.indexOf(key), 1);
            
            }

            this.set(arrayUniq(list));

            return this;

        },
        getCheckedState : function () {

            return extend({}, this.data.checkedState);

        }
    },
    created : function () {},
    mounted : function () {

        this.$watch('conf.parent', () => {

            this.Vue.nextTick(() => {

                if (this.conf.parent) {

                    let parent = this.conf.parent.split(':');
                    let key = parent.pop();
                    let selector = parent.join(':');
                    let $parent = document.querySelector(selector);

                    if ($parent &&
                        $parent._vm &&
                        $parent._vm.isUI &&
                        $parent._vm.uiname === 'checkbox') {

                        this.data.$parentVm = $parent._vm;
                        this.data.parentKey = key;
                        $parent._vm.data.linkedVm[`${key}:${this.uiid}`] = this;
                        // $parent._vm.data.linkedVmKeyMap[key] = this.uiid;
                        $parent._vm._syncLinkedCheckedStatus(key, this.uiid);

                    }

                }

            });

        }, {
            immediate : true
        });

        this.$watch('conf.disabledOptions', () => {

            this._refreshDisabledOptions();
    
            if (this.data.$parentVm) {
    
                this.data.$parentVm._syncLinkedCheckedStatus(this.data.parentKey, this.uiid);

            }
        
            this._syncLinkedChild();

        }, {
            deep : true,
            immediate : true
        });

        this.$watch('conf.list', () => {

            if (this.data.$parentVm) {
                
                this.data.$parentVm._syncLinkedCheckedStatus(this.data.parentKey, this.uiid);

            }

        });

        this.$watch('conf.checkedState', () => {

            for (let key in this.conf.checkedState) {

                this.data.checkedState[key] = this.conf.checkedState[key];

            }

        }, {
            deep : true,
            immediate : true
        });

        this.$on('value-change', () => {

            if (this.data.$parentVm) {
                
                this.data.$parentVm._syncLinkedCheckedStatus(this.data.parentKey, this.uiid);

            }

            this._syncLinkedChild();

        });

    },
    destroyed : function () {

        // unlink parent
        if (this.data.$parentVm) {

            delete this.data.$parentVm.data.linkedVm[`${this.data.parentKey}:${this.uiid}`];

        }

    }
};
</script>
