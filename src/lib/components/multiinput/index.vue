<template>
    <i-multiinput
        :_uiid="uiid"
        :class="[stateClass, moreClass, Move.moveClass]"

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

        <div
            class="item"
            v-for="(value, index) in data.value"
            @mousedown="_moveItemRecord(index)">
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
        _moveItem : function (from, to) {

            if (from >= this.data.value.length ||
                from < 0 ||
                to >= this.data.value.length ||
                to < 0) {

                return;

            }

            let value = this.get(false);

            if (this.Move.movedIndex !== -1) {
            
                this.Move.movedIndex = to;

            }
            
            value.splice(to, 0, value.splice(from, 1)[0]);
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

            return this;
        
        },
        del : function (index) {

            this._deleteItem(index);

            return this;

        },
        move : function (from, to) {

            this._moveItem(from, to);

            return this;

        },
        setInput : function (value) {

            this.data.inputValue = String(value || '');

            return this;

        },
        getInput : function () {

            return this.data.inputValue;

        }
    },
    created : function () {

        this.$watch('conf.canMove', newVal => {

            this.Move.target = '.item';
            this.Move.container = '.itemlist';
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

        this.$watch('data.value', (newVal) => {

            if (typeof newVal !== 'object' ||
                !(newVal instanceof Array)) {

                this.data.value = [];

                return;

            }

            if (this.conf.max &&
                this.data.value.length > this.conf.max) {

                this.data.value = newVal.slice(0, this.conf.max);
            
                return;

            }

            if (!this.Move.moving) {

                this.data.inputValue = '';
            
            }

        }, {
            immediate : true
        });
        
    },
    mounted : function () {

        this.$on('_moveStarted', () => {

            this._blurInput();

        });

        let movingReg = /(^| )move-moving($| )/g;
        
        this.$on('_moveChange', () => {

            const maxDistance = 20;

            let $items = this.$el.querySelectorAll('.item');

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
});
</script>

<style lang="less" src="./index.less"></style>
