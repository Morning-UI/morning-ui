<template>
    <i-multiform
        :_uiid="uiid"
        :class="[stateClass, moreClass, moveClass]"

        :form-name="formName"
        :form-key="formKey"
        :group="group"
        :default-value="defaultValue"
        :hide-name="hideName"
        :item-name="itemName"
        :item-title-key="itemTitleKey"
        :can-move="canMove"
        :max="max"
    >

    <div class="itemlist">
        <p class="name" v-if="!conf.hideName">
            <morning-center class="fill">{{conf.formName}}</morning-center>
        </p>

        <div class="itemwrap" :class="{hidename:conf.hideName}">
        
            <div
                class="item"
                v-for="(item, index) of data.value"
                @click="_fillItem(index)"
                @mousedown="_moveItemRecord(index)"
            >
                <span v-if="conf.itemTitleKey">
                    {{conf.itemName}} : {{item[conf.itemTitleKey]}}
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
                        @click="_showDialog"
                    >
                        <span>添加{{conf.itemName}}</span> <i class="morningicon">&#xe698;</i>
                    </a>
                    <span v-else>最多只能输入{{conf.max}}项</span>
                </template>

                <template v-else>
                    <a
                        href="javascript:;"
                        class="add item"
                        @click="_showDialog"
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
        gray
        :ref="'ui-multiform-dialog-'+uiid"
        @show="_showForm"
        @hide="_hideForm"
    >
        <header slot="header">请填写表单</header>
        <slot></slot>
        <footer slot="footer">
            <div>
                <!-- action="emit:toggle" -->
                <morning-link class="margin" minor @emit="_hideDialog">取消</morning-link>
                <morning-btn success @emit="_saveItem">确认</morning-btn>
            </div>
        </footer>
    </morning-dialog>

    </i-multiform>
</template>
 
<script>
import Move                         from 'Utils/Move';

export default {
    origin : 'Form',
    name : 'multiform',
    mixins : [Move],
    props : {
        itemName : {
            type : String,
            default : '项目'
        },
        itemTitleKey : {
            type : String,
            default : undefined
        },
        canMove : {
            type : Boolean,
            default : false
        },
        max : {
            type : Number,
            default : undefined
        }
    },
    computed : {
        moreClass : function () {

            return {};

        }
    },
    data : function () {

        return {
            conf : {
                itemName : this.itemName,
                itemTitleKey : this.itemTitleKey,
                canMove : this.canMove,
                max : this.max
            },
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

            if (this.conf.max &&
                this.data.value.length > this.conf.max) {

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

                vm.set(undefined);

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

            this._findDialogFormOnce(forms, dialogVm);

            return forms;

        },
        _showDialog : function () {

            this.$refs[`ui-multiform-dialog-${this.uiid}`].toggle(true);

        },
        _hideDialog : function () {

            this.$refs[`ui-multiform-dialog-${this.uiid}`].toggle(false);

        },
        _saveItem : function () {

            let value = {};
            let formVm = this._findDialogForm();

            for (let vm of formVm) {

                value[vm.conf.formKey] = vm.get();

            }
            
            if (this.data.modifyIndex === null) {
            
                this._addItem(value);
            
            } else {
            
                this._updateItem(value, this.data.modifyIndex);
            
            }
            
            this._hideDialog();

        },
        _addItem : function (value, index) {

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

        },
        _updateItem : function (value, index) {

            let list = this.get();

            list.splice(index, 1, value || {});
            
            this.set(list);

        },
        _deleteItem : function (index) {

            let list = this.get();

            list.splice(index, 1);
            
            this.set(list);

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
        _moveItem : function (from, to, valueChange) {

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
        add : function (value, index) {

            this._addItem(value, index);

        },
        del : function (index) {

            this._deleteItem(index);

        },
        update : function (value, index) {

            this._updateItem(value, index);

        },
        move : function (from, to) {

            this._moveItem(from, to);

        }
    },
    created : function () {},
    mounted : function () {

        const moveDelayTime = 200;

        this.$watch('conf.canMove', newVal => {

            this.Move.target = '.item:not(.add)';
            this.Move.container = '.itemwrap';
            this.Move.delay = moveDelayTime;
            this.Move.can = !!newVal;

        }, {
            immediate : true
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
