<template>
    <mor-multiinput
        :_uiid="uiid"
        :class="[formClass, sizeClass, stateClass, moreClass, moveClass]"

        :form-name="formName"
        :form-note="formNote"
        :form-key="formKey"
        :group="group"
        :hide-name="hideName"
        :clearable="clearable"
        :inside-clearable="insideClearable"
        :_errorMessage="_errorMessage"
        :inside-name="insideName"
        :can-move="canMove"
        :max="max"
        :collapse-limit="collapseLimit"
    >

    <div class="form-name" v-if="!conf.hideName && !!conf.formName">{{conf.formName}}</div>
    <div class="form-note" v-if="!!conf.formNote">{{conf.formNote}}</div>

    <div
        class="form-body"
        :class="{
            focus : data.focus
        }"
    >

        <div
            class="multiinput-itemlist"

            @keydown.enter="_enterInput"
            @keydown.backspace="_backspace()"
            @click="_focusInput"
        >
            <template
                v-for="(value, index) in data.value"
            >
                <div
                    class="multiinput-item"
                    :class="{
                        'will-delete' : (data.backspace > 0 && index === (data.value.length - 1))
                    }"

                    v-if="index < conf.collapseLimit"
                    :key="index"
                    @mousedown="_moveItemRecord(index)"
                >
                    <span :title="value">{{value}}</span>
                    <i
                        class="mo-icon mo-icon-close"
                        v-if="conf.state !== 'disabled' && conf.state !== 'readonly'"
                        @click="_deleteItem(index)"
                    ></i>
                </div>
            </template>

            <div
                id="mor-multiinput-collapse"
                class="multiinput-item collapse-count"
                :class="{
                    'will-delete' : (data.backspace > 0 && (data.value.length - 1) >= conf.collapseLimit)
                }"

                v-if="data.value.length > conf.collapseLimit"
            >
                <span>+{{data.value.length - conf.collapseLimit}}</span>
            </div>

            <morning-tip
                v-if="data.value.length > conf.collapseLimit"
                class="mor-multiinput-tip-collapse"
                color="neutral-9"

                target="#mor-multiinput-collapse"
            >
                <template v-for="(value, index) in data.value">
                    <span
                        v-if="index >= conf.collapseLimit"
                        :key="index"
                    >
                        {{value}}
                    </span>
                </template>
            </morning-tip>

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
                            :ref="'ui-multiinput-input'+uiid"

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
                            :ref="'ui-multiinput-input'+uiid"

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
                            :ref="'ui-multiinput-input'+uiid"

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
                            :ref="'ui-multiinput-input'+uiid"

                            :value="data.inputValue"
                            @input="$emit('input', $event.target.value)"
                        />
                </template>
            </template>

            <input class="disabled-placeholder" />
        </div>

        <i class="mo-icon mo-icon-error-cf cleanicon" v-show="(conf.state !== 'readonly' && conf.state !== 'disabled') && conf.insideClearable && data.value && data.value.length > 0" @click.stop="set(undefined)"></i>
    </div>

    <div class="error-message">{{conf._errorMessage}}</div>
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
            default : '请输入'
        },
        canMove : {
            type : Boolean,
            default : false
        },
        max : {
            type : [Number, Boolean],
            default : false
        },
        collapseLimit : {
            type : Number,
            default : Infinity
        }
    },
    computed : {
        _conf : function () {

            return {
                insideName : this.insideName,
                canMove : this.canMove,
                max : this.max,
                collapseLimit : this.collapseLimit
            };

        },
        moreClass : function () {

            return {};

        }
    },
    data : function () {

        return {
            data : {
                inputValue : '',
                inputWidth : '0em',
                focus : false,
                backspace : 0
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
        _focusInput : function (evt) {
            
            // 点击删除按钮不触发focus事件
            if (evt && evt.type === 'click' && evt.path[0].classList.value.split(' ').indexOf('mo-icon-close') !== -1) {
                
                return;

            }

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

                if ($input.value) {

                    this.add($input.value);
                    this._blurInput();

                    setTimeout(() => {

                        this._focusInput();

                    });

                }

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
        _backspace : function () {

            if (this.data.inputValue === '') {

                if (this.data.backspace > 0) {

                    this.data.backspace = 0;
                    this._deleteItem(this.data.value.length - 1);

                } else {
    
                    this.data.backspace++;

                }

            }

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

        },
        focusInput : function () {

            let $input = this.$refs[`ui-multiinput-input${this.uiid}`];

            if ($input) {

                $input.focus();

            }

            return this;

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

        this.$on('value-change', () => {

            this.data.backspace = 0;

        });

        this.$on('input-blur', () => {

            this.data.backspace = 0;

        });

        this.$watch('data.inputValue', () => {

            this.data.backspace = 0;

        });

        this.$watch('conf.canMove', newVal => {

            if (this.conf.collapseLimit !== Infinity) {

                return;

            }

            this.Move.target = '.multiinput-item';
            this.Move.container = '.multiinput-itemlist';
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

            let $items = this.$el.querySelectorAll('.multiinput-item');

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
