<template>
    <mor-multiinput
        :_uiid="uiid"
        :class="[formClass, stateClass, moreClass, moveClass]"

        :form-name="formName"
        :form-key="formKey"
        :group="group"
        :default-value="defaultValue"
        :hide-name="hideName"
        :clearable="clearable"
        :inside-name="insideName"
        :can-move="canMove"
        :max="max"

        @keydown.enter="_enterInput"
        @click="_focusInput"
    >

    <div class="form-name" v-if="!conf.hideName && !!conf.formName">{{conf.formName}}</div>

    <div class="itemlist">

        <div
            class="item"
            v-for="(value, index) in data.value"
            :key="index"
            @mousedown="_moveItemRecord(index)"
        >
            <span :title="value">{{value}}</span>
            <i
                class="mo-icon mo-icon-error-cf"
                v-if="conf.state !== 'disabled' && conf.state !== 'readonly'"
                @click="_deleteItem(index)"
            ></i>
        </div>

        <template v-if="conf.state !== 'disabled' && conf.state !== 'readonly'">
            <template v-if="conf.max">
                <template v-if="data.value.length < conf.max">
                    <input
                        type="text"
                        v-if="!!conf.insideName"
                        @focus="_focusInput"
                        @blur="_blurInput"
                        :style="{width: data.inputWidth}"
                        :placeholder="conf.insideName"
                        key="set-max-show-name"

                        :value="data.inputValue"
                        @input="$emit('input', $event.target.value)"
                    />

                    <input
                        type="text"
                        v-else
                        @focus="_focusInput"
                        @blur="_blurInput"
                        :style="{width: data.inputWidth}"
                        key="set-max-hide-name"

                        :value="data.inputValue"
                        @input="$emit('input', $event.target.value)"
                    />
                </template>
                <template v-else>
                    <span>最多只能输入{{conf.max}}项</span>
                </template>
            </template>
            <template v-else>
                    <input
                        type="text"
                        v-if="!!conf.insideName"
                        @focus="_focusInput"
                        @blur="_blurInput"
                        :style="{width: data.inputWidth}"
                        :placeholder="conf.insideName"
                        key="unset-max-show-name"

                        :value="data.inputValue"
                        @input="$emit('input', $event.target.value)"
                    />

                    <input
                        type="text"
                        v-else
                        @focus="_focusInput"
                        @blur="_blurInput"
                        :style="{width: data.inputWidth}"
                        key="unset-max-hide-name"

                        :value="data.inputValue"
                        @input="$emit('input', $event.target.value)"
                    />
            </template>
        </template>
        
    </div>

    <morning-link v-if="conf.clearable" color="minor" @emit="_clean" class="cleanbtn">清空</morning-link>

    </mor-multiinput>
</template>
 
<script>
import Move                         from 'Utils/Move';

export default {
    origin : 'Form',
    name : 'multiinput',
    mixins : [Move],
    props : {
        insideName : {
            type : String,
            default : ''
        },
        canMove : {
            type : Boolean,
            default : false
        },
        max : {
            type : [Number, Boolean],
            default : false
        }
    },
    computed : {
        _conf : function () {

            return {
                insideName : this.insideName,
                canMove : this.canMove,
                max : this.max
            };

        },
        moreClass : function () {

            return {
                focus : this.data.focus
            };

        }
    },
    data : function () {

        return {
            data : {
                inputValue : '',
                inputWidth : '0em',
                focus : false
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
        _focusInput : function () {

            // this.data.moving === false
            if (this.data.focus === false) {

                let $input = this.$el.querySelector('input');

                if ($input) {

                    this.data.focus = true;
                    $input.focus();
                    this.$emit('input-focus');

                }

            }

        },
        _blurInput : function () {

            if (this.data.focus === true) {

                let $input = this.$el.querySelector('input');

                this.data.focus = false;
                $input.blur();
                this.$emit('input-blur');

            }

        },
        _enterInput : function () {

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

            } else if (this.conf.insideName) {

                this.data.inputWidth = `${this.conf.insideName.length * valueWidth}em`;
            
            }

        },
        _updateItem : function (value, index) {

            let list = this.get();

            list.splice(index, 1, value || {});
            
            this.set(list);

        },
        _deleteItem : function (index) {

            let value = this.get();

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

            let value = this.get();

            if (this.Move.movedIndex !== -1) {
            
                this.Move.movedIndex = to;

            }
            
            value.splice(to, 0, value.splice(from, 1)[0]);
            this.set(value);
                
        },
        add : function (item, index) {

            let value = this.get();

            if (this.conf.max &&
                this.conf.max <= value.length) {
            
                return this;
            
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
        update : function (item, index) {

            this._updateItem(item, index);

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

        this.$watch('data.inputValue', () => {

            this._resetInputWidth();
            this.$emit('input-value-change');

        }, {
            immediate : true
        });
        
    },
    mounted : function () {

        this.$on('input', value => {

            this.data.inputValue = value;

        });

        this.$watch('conf.canMove', newVal => {

            this.Move.target = '.item';
            this.Move.container = '.itemlist';
            this.Move.can = !!newVal;

        }, {
            immediate : true
        });

        this.$watch('conf.max', () => {

            this._set(this._maxFilter(this.get()), true);

        });

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
};
</script>

<style lang="less" src="./index.less"></style>
