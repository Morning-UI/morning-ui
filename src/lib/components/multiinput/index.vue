<template>
    <i-multiinput
        :_uiid="uiid"
        :class="[stateClass, moreClass, moveClass]"

        :form-name="formName"
        :form-key="formKey"
        :group="group"
        :default-value="defaultValue"
        :hide-name="hideName"
        :can-move="canMove"
        :max="max"

        @keydown.enter="_enterInput"
        @click="_focusInput"
    >

    <div class="itemlist">

        <div class="item" v-for="(value, index) in data.value">
            <span :title="value">{{value}}</span>
            <i
                class="morningicon"
                v-if="conf.state !== 'disabled'"
                @click="_deleteItem(index)"
            >&#xe62e;</i>
        </div>

        <template v-if="conf.state !== 'disabled'">
            <template v-if="conf.max">
                <template v-if="data.value.length < conf.max">
                    <input
                        type="text"
                        v-if="!conf.hideName"
                        @focus="_focusInput"
                        @blur="_blurInput"
                        :style="{width: data.inputWidth}"
                        :placeholder="conf.formName"
                        v-model="data.inputValue" />

                    <input
                        type="text"
                        v-else
                        @focus="_focusInput"
                        @blur="_blurInput"
                        :style="{width: data.inputWidth}"
                        v-model="data.inputValue" />
                </template>
                <template v-else>
                    <span>最多只能输入{{conf.max}}项</span>
                </template>
            </template>
            <template v-else>
                    <input
                        type="text"
                        v-if="!conf.hideName"
                        @focus="_focusInput"
                        @blur="_blurInput"
                        :style="{width: data.inputWidth}"
                        :placeholder="conf.formName"
                        v-model="data.inputValue" />

                    <input
                        type="text"
                        v-else
                        @focus="_focusInput"
                        @blur="_blurInput"
                        :style="{width: data.inputWidth}"
                        v-model="data.inputValue" />
            </template>
        </template>
        
    </div>

    </i-multiinput>
</template>
 
<script>
import Form                         from 'Common/form';
import Move                         from 'Utils/Move';

export default Form.extend({
    name : 'multiinput',
    mixins : [Move],
    props : {
        canMove : {
            type : Boolean,
            default : false
        },
        max : {
            type : [Number, Boolean],
            default : false
        }
    },
    data : function () {

        return {
            conf : {
                canMove : this.canMove,
                max : this.max
            },
            data : {
                inputValue : '',
                inputWidth : '0em',
                focus : false
            }
        };

    },
    computed : {
        moreClass : function () {

            return {
                focus : this.data.focus
            };

        }
    },
    methods : {
        _focusInput : function () {

            let $input = this.$el.querySelector('input');

            // this.data.moving === false
            if (this.data.focus === false) {

                let $input = this.$el.querySelector('input');

                this.data.focus = true;
                $input.focus();
                this.$emit('inputFocus');

            }

        },
        _blurInput : function () {

            if (this.data.focus === true) {

                this.data.focus = false;
                this.$emit('inputBlur');

            }

        },
        _enterInput : function () {

            // this.conf.allowInput
            if (this.data.focus) {

                let $input = this.$el.querySelector('input');

                this.add($input.value);
                this._blurInput();

                setTimeout(() => {

                    this._focusInput();

                });

            }

        },
        _resetInputWidth : function () {

            const valueWidth = 1.5;

            if (this.data.inputValue !== '') {

                this.data.inputWidth = `${this.data.inputValue.length * valueWidth}em`;

            } else if (this.conf.formName) {

                this.data.inputWidth = `${this.conf.formName.length * valueWidth}em`;
            
            }

        },
        _deleteItem : function (index) {

            let value = this.get(false);

            value.splice(index, 1);

            this.set(value);

        },
        _moveItem (from, to) {

            if (from >= this.data.value.length ||
                from < 0 ||
                to >= this.data.value.length ||
                to < 0) {

                return;

            }

            // if ( valueChange ) {
            //     var list = this.clone(this.prop.value);
            //     var copy = list.splice(index, 1)[0];
            //     list.splice(to, 0, copy);
            //     this.set(list);
            // } else {

            let value = this.get(false);
            
            value.splice(to, 0, value.splice(from, 1));
            this.set(value);
                
        },
        add : function (item, index) {

            let value = this.get(false);

            if (this.conf.max &&
                this.conf.max <= value.length) {
            
                return;
            
            }
            
            if (index >= 0) {

                value.splice(index, 0, item);

            } else if (index === undefined) {

                value.push(item);

            }

            this.set(value);
            this.data.inputValue = '';
        
        },
        del : function (index) {

            this._deleteItem(index);

        },
        move : function (from, to) {

            this._moveItem(from, to);

        }
    },
    created : function () {},
    mounted : function () {

        this.$watch('conf.canMove', newVal => {

            this.Move.$target = this.$el.querySelectorAll('.item');
            this.Move.$container = this.$el;
            this.Move.can = !!newVal;

        }, {
            immediate : true
        });

        this.$watch('data.inputValue', () => {

            this._resetInputWidth();
            this.$emit('inputValueChange');

        }, {
            immediate : true
        });

        this.$watch('data.value', newVal => {

            if (typeof newVal !== 'object' ||
                !(newVal instanceof Array)) {

                this.data.value = [];

            }

            if (this.conf.max &&
                this.data.value.length > this.conf.max) {

                this.set(newVal.slice(0, this.conf.max));

            }

            this.data.inputValue = '';

        }, {
            immediate : true
        });

    }
});
</script>

<style lang="less" src="./index.less"></style>
