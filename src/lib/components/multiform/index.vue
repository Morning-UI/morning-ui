<template>
    <mor-multiform
        :_uiid="uiid"
        :class="[formClass, stateClass, moveClass]"

        :form-name="formName"
        :form-key="formKey"
        :group="group"
        :default-value="defaultValue"
        :hide-name="hideName"
        :clearable="clearable"
        :item-name="itemName"
        :item-filler="itemFiller"
        :item-validator="itemValidator"
        :can-move="canMove"
        :max="max"
        :input-type="inputType"
        :batch-reg="batchReg"
        :batch-filler="batchFiller"
        :batch-uniq="batchUniq"
    >

    <div class="itemlist">
        <p class="name" v-if="!conf.hideName">
            <morning-center class="fill">{{conf.formName}}</morning-center>
        </p>

        <div class="itemwrap" :class="{hidename:conf.hideName}">
        
            <div
                class="item"
                v-for="(item, index) of data.value"
                :class="{'has-img' : (conf.itemFiller(item) && conf.itemFiller(item).thumb)}"
                :key="index"
                @click="_fillItem(index)"
                @mousedown="_moveItemRecord(index)"
            >
                <img
                    class="thumb"
                    v-if="conf.itemFiller(item) && conf.itemFiller(item).thumb"
                    :src="conf.itemFiller(item).thumb" />

                <span v-if="conf.itemFiller(item) && conf.itemFiller(item).title">
                    {{conf.itemName}} : {{conf.itemFiller(item).title}}
                </span>
                <span v-else>
                    {{conf.itemName}}
                </span>

                <i
                    class="morningicon"
                    v-if="conf.state !== 'disabled'"
                    @click.stop="_deleteItem(index)"
                >&#xe62e;</i>
            </div>
            
            <template v-if="conf.state !== 'disabled'">
                <template v-if="conf.max">
                    <a
                        href="javascript:;"
                        class="add item"
                        v-if="data.value.length < conf.max"
                        @click="_addItemDialog"
                        key="set-max"
                    >
                        <span>添加{{conf.itemName}}</span> <i class="morningicon">&#xe698;</i>
                    </a>
                    <span v-else>最多只能输入{{conf.max}}项</span>
                </template>

                <template v-else>
                    <a
                        href="javascript:;"
                        class="add item"
                        @click="_addItemDialog"
                        key="unset-max"
                    >
                        <span>添加{{conf.itemName}}</span> <i class="morningicon">&#xe698;</i>
                    </a>
                </template>
            </template>
        </div>
    </div>

    <morning-dialog
        class="multiform-dialog"
        width="500px"
        height="75%"
        color="gray"
        :ref="'ui-multiform-dialog-'+uiid"
        @show="_showForm"
        @hide="_hideForm"
    >
        <header slot="header">请填写表单</header>
        <slot></slot>
        <footer slot="footer">
            <div>
                <!-- action="emit:toggle" -->
                <morning-link class="margin" color="minor" @emit="_hideDialog">取消</morning-link>
                <morning-btn color="success" @emit="_saveItem">确认</morning-btn>
            </div>
        </footer>
    </morning-dialog>

    <morning-dialog
        class="multiform-batch-dialog"
        width="500px"
        height="240px"
        color="gray"
        v-if="conf.inputType !== 'single'"
        :ref="'ui-multiform-batchdialog-'+uiid"
    >
        <header slot="header">请输入需要添加的项目</header>
        <morning-textarea :ref="'ui-multiform-batchinput-'+uiid"></morning-textarea>
        <footer slot="footer">
            <div>
                <!-- action="emit:toggle" -->
                <morning-link class="margin" color="minor" @emit="_hideBatchDialog">取消</morning-link>
                <morning-btn color="success" :ref="'ui-multiform-batchsave-'+uiid" @emit="_batchInput">确认</morning-btn>
            </div>
        </footer>
    </morning-dialog>

    <morning-link v-if="conf.clearable" color="minor" @emit="_clean" class="cleanbtn">清空</morning-link>

    </mor-multiform>
</template>
 
<script>
import arrayUniq                    from 'array-uniq';
import Move                         from 'Utils/Move';

const returnValueFn = value => value;

let noopFn = () => {};

export default {
    origin : 'Form',
    name : 'multiform',
    mixins : [Move],
    props : {
        itemName : {
            type : String,
            default : '项目'
        },
        itemFiller : {
            type : Function,
            default : noopFn
        },
        itemValidator : {
            type : Function,
            default : (value => value)
        },
        canMove : {
            type : Boolean,
            default : false
        },
        max : {
            type : Number,
            default : undefined
        },
        inputType : {
            type : String,
            default : 'single',
            validator : (value => ['single', 'batch-separate', 'batch-pluck'].indexOf(value) !== -1)
        },
        batchReg : {
            type : String,
            default : ','
        },
        batchFiller : {
            type : Function,
            default : returnValueFn
        },
        batchUniq : {
            type : Boolean,
            default : false
        }
    },
    computed : {
        _conf : function () {

            return {
                itemName : this.itemName,
                itemFiller : this.itemFiller,
                itemValidator : this.itemValidator,
                canMove : this.canMove,
                max : this.max,
                inputType : this.inputType,
                batchReg : this.batchReg,
                batchFiller : this.batchFiller,
                batchUniq : this.batchUniq
            };

        }
    },
    data : function () {

        return {
            data : {
                modifyIndex : null
            }
        };

    },
    methods : {
        _valueFilter : function (value) {

            if (typeof value !== 'object' ||
                !(value instanceof Array)) {

                return [];

            }

            value = this._maxFilter(value);

            return value;

        },
        _maxFilter : function (value) {

            if (this.conf.max &&
                value.length > this.conf.max) {

                return value.slice(0, this.conf.max);

            }

            return value;

        },
        _hideForm : function () {

            this._resetForm();
            this.$emit('hide');

        },
        _showForm : function () {

            this.$emit('show');

        },
        _resetForm : function () {
            
            let formVm = this._findDialogForm();

            this.data.modifyIndex = null;

            for (let vm of formVm) {

                vm.set(vm.conf.defaultValue || undefined);

            }

        },
        _findDialogFormOnce : function (forms, vm) {

            for (let child of vm.$children) {

                if (child._isVue) {

                    if (child.isForm) {

                        forms.push(child);

                    } else {

                        this._findDialogFormOnce(forms, child);

                    }

                }

            }

        },
        _findDialogForm : function () {

            let dialogVm = this.$refs[`ui-multiform-dialog-${this.uiid}`];
            let forms = [];

            if (dialogVm) {

                this._findDialogFormOnce(forms, dialogVm);
            
            }

            return forms;

        },
        _addItemDialog : function () {

            if (this.conf.inputType === 'single') {

                this._showDialog();

            } else {

                this._showBatchDialog();

            }

        },
        _showDialog : function () {

            this.$refs[`ui-multiform-dialog-${this.uiid}`].toggle(true);

        },
        _hideDialog : function () {

            this.$refs[`ui-multiform-dialog-${this.uiid}`].toggle(false);

        },
        _showBatchDialog : function () {

            this.$refs[`ui-multiform-batchdialog-${this.uiid}`].toggle(true);

        },
        _hideBatchDialog : function () {

            this.$refs[`ui-multiform-batchdialog-${this.uiid}`].toggle(false);

        },
        _saveItem : function () {

            let value = {};
            let formVm = this._findDialogForm();
            let result;

            for (let vm of formVm) {

                value[vm.conf.formKey] = vm.get();

            }

            if (this.data.modifyIndex === null) {
            
                result = this._addItem(value);
            
            } else {
            
                result = this._updateItem(value, this.data.modifyIndex);
            
            }

            if (result) {

                this._hideDialog();

            }

        },
        _addItem : function (value, index) {

            if (this.conf.itemValidator(value) === false) {

                return false;

            }

            let list = this.get();

            if (this.conf.max &&
                this.conf.max === list.length) {

                return;

            }

            if (index >= 0) {

                list.splice(index, 0, value);

            } else if (index === undefined) {

                list.push(value);

            }

            this.set(list);

            return true;

        },
        _updateItem : function (value, index) {

            if (this.conf.itemValidator(value) === false) {

                return false;

            }

            let list = this.get();

            list.splice(index, 1, value || {});
            
            this.set(list);

            return true;

        },
        _deleteItem : function (index) {

            let list = this.get();

            list.splice(index, 1);
            
            this.set(list);

            return true;

        },
        _cleanAllItems : function () {

            this.set(undefined);

        },
        _fillItem : function (index) {

            if (this.conf.state === 'disabled') {

                return;

            }

            let value = this.get();
            let formVm = this._findDialogForm();

            for (let vm of formVm) {

                vm.set(value[index][vm.conf.formKey]);

            }

            this.data.modifyIndex = index;
            this._showDialog();

        },
        _moveItem : function (from, to) {

            if (from >= this.data.value.length ||
                from < 0 ||
                to >= this.data.value.length ||
                to < 0) {

                return;

            }

            let value = this.get();

            if (this.Move.movedIndex !== -1) {
            
                this.Move.movedIndex = to;

            }

            value.splice(to, 0, value.splice(from, 1)[0]);

            this.set(value);
                
        },
        _batchInput : function () {

            let inputVm = this.$refs[`ui-multiform-batchinput-${this.uiid}`];
            let saveBtnVm = this.$refs[`ui-multiform-batchsave-${this.uiid}`];
            let inputStr = inputVm.get();
            let ids = [];

            saveBtnVm.lock();

            if (this.conf.inputType === 'batch-separate') {

                ids = inputStr.split(new RegExp(this.conf.batchReg, 'g'));

            } else if (this.conf.inputType === 'batch-pluck') {

                let pluckReg = new RegExp(this.conf.batchReg, 'g');
                let result;

                while ((result = pluckReg.exec(inputStr)) !== null) {

                    ids.push(result[0]);

                }

            }

            if (this.conf.batchUniq) {

                ids = arrayUniq(ids);

            }

            Promise
                .resolve(this.conf.batchFiller.call(this, ids))
                .then(items => {

                    for (let item of items) {

                        if (typeof item === 'object') {
                        
                            this._addItem(item);

                        }

                    }

                    inputVm.set(undefined);
                    saveBtnVm.unlock();
                    this._hideBatchDialog();

                });

        },
        add : function (value, index) {

            this._addItem(value, index);

            return this;

        },
        del : function (index) {

            this._deleteItem(index);

            return this;

        },
        update : function (value, index) {

            this._updateItem(value, index);

            return this;

        },
        move : function (from, to) {

            this._moveItem(from, to);

            return this;

        }
    },
    created : function () {},
    mounted : function () {

        this.$watch('conf.canMove', newVal => {

            this.Move.target = '.item:not(.add)';
            this.Move.container = '.itemwrap';
            this.Move.can = !!newVal;

        }, {
            immediate : true
        });

        this.$watch('conf.max', () => {

            this._set(this._maxFilter(this.get()), true);

        });

        let movingReg = /(^| )move-moving($| )/g;
        
        this.$on('_moveChange', () => {

            const maxDistance = 20;

            let $items = this.$el.querySelectorAll('.item:not(.add)');

            for (let item of $items.entries()) {

                let index = item[0];
                let $item = item[1];

                if (!movingReg.test($item.className)) {

                    let {x, y} = this._moveElementXy($item);
                    let distance = Math.sqrt(Math.pow(Math.abs(this.Move.current.x - x), 2) +
                                   Math.pow(Math.abs(this.Move.current.y - y), 2));

                    if (distance < maxDistance) {
                        
                        this.move(this.Move.movedIndex, index);

                        break;

                    }

                }

            }

        });

    }
};
</script>

<style lang="less" src="./index.less"></style>
