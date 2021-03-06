<template>
    <mor-textarea
        :_uiid="uiid"
        :class="[formClass, sizeClass, stateClass, moreClass]"

        :form-name="formName"
        :form-note="formNote"
        :form-key="formKey"
        :group="group"
        :hide-name="hideName"
        :clearable="clearable"
        :_errorMessage="_errorMessage"
        :inside-name="insideName"
        :rows="rows"
        :auto-size="autoSize"
        :max-rows="maxRows"
        :maxlength="maxlength"
        :resize="resize"
    >

    <div class="form-name" v-if="!conf.hideName && !!conf.formName">{{conf.formName}}</div>
    <div class="form-note" v-if="!!conf.formNote">{{conf.formNote}}</div>

    <div class="textarea-wrap form-body">

        <textarea
            :class="{
                'auto-sizing' : this.conf.autoSize,
                'is-max' : isMaxRows
            }"

            :placeholder="placeholder"
            :disabled="conf.state === 'disabled' || conf.state === 'readonly'"
            :rows="data.rows"
            :maxlength="conf.maxlength"

            @focus="_focus()"
            @blur="_blur()"

            :value="data.value"
            @input="$emit('input', $event.target.value)"
        ></textarea>

        <div class="maxlength" v-if="conf.maxlength !== Infinity">
            <span
                :class="{
                    'has-content':((data.value || '').length > 0),
                    'is-maxlen' : ((data.value || '').length === conf.maxlength)
                }"
            >{{(data.value || '').length}}</span> / {{conf.maxlength}}
        </div>
        
    </div>

    <div class="error-message">{{conf._errorMessage}}</div>
    <morning-link v-if="conf.clearable" color="minor" @emit="_clean" class="cleanbtn">清空</morning-link>

    </mor-textarea>
</template>

<script>
export default {
    origin : 'Form',
    name : 'textarea',
    props : {
        insideName : {
            type : String,
            default : '请输入'
        },
        rows : {
            type : Number,
            default : 4
        },
        autoSize : {
            type : Boolean,
            default : false
        },
        maxRows : {
            type : Number,
            default : Infinity
        },
        maxlength : {
            type : Number,
            default : Infinity
        },
        resize : {
            type : String,
            default : 'none',
            validator : (value => ['none', 'both', 'vertical', 'horizontal'].indexOf(value) !== -1)
        }
    },
    computed : {
        _conf : function () {

            return {
                insideName : this.insideName,
                rows : this.rows,
                autoSize : this.autoSize,
                maxRows : this.maxRows,
                maxlength : this.maxlength,
                resize : this.resize
            };

        },
        moreClass : function () {

            let classes = {};

            classes = {
                'has-maxlength' : this.conf.maxlength !== Infinity
            };

            if (this.conf.resize !== 'none') {

                classes[`can-resize-${this.conf.resize}`] = true;

            }

            return classes;

        },
        placeholder : function () {

            if (this.conf.insideName) {

                return this.conf.insideName;

            }

            return false;

        },
        isMaxRows : function () {

            return (this.data.rows >= this.conf.maxRows);

        }
    },
    data : function () {

        return {
            data : {
                rows : 0
            }
        };

    },
    methods : {
        _valueFilter : function (value) {

            if (value === undefined) {

                return '';

            }

            if (typeof value === 'object') {

                value = JSON.stringify(value);

            }

            if (value.length > this.conf.maxlength) {

                value = value.slice(0, this.conf.maxlength);

            }

            return String(value);

        },
        _focus : function () {

            this.$emit('focus');

        },
        _blur : function () {

            this.$emit('blur');

        },
        _resizeArea : function () {

            if (!this.conf.autoSize) {

                return;

            }

            let $textarea = this.data.$textarea;
            let $text = $textarea.cloneNode(true);
            let computedStyle = $textarea.ownerDocument.defaultView.getComputedStyle($textarea, null);
            let textHeight;
            let lineHeight = +computedStyle['line-height'].replace(/px$/, '');
            let rows = this.data.rows;

            $text.removeAttribute('rows');
            $text.style.cssText = computedStyle.cssText;
            $text.style.height = 'auto';
            $text.style.overflow = 'auto';

            document.body.append($text);
            textHeight = $text.scrollHeight;
            $text.remove();

            if (textHeight > $textarea.clientHeight &&
                this.data.rows < this.conf.maxRows) {

                rows += Math.ceil((textHeight - $textarea.clientHeight) / lineHeight);

            } else if (textHeight < $textarea.clientHeight &&
                this.data.rows > this.conf.rows) {

                rows -= Math.ceil(($textarea.clientHeight - textHeight) / lineHeight);

            }

            this._setRows(rows);

        },
        _setRows : function (rows) {

            if (rows < this.conf.rows) {

                rows = this.conf.rows;

            }

            if (rows > this.conf.maxRows) {

                rows = this.conf.maxRows;

            }

            this.data.rows = rows;

        }
    },
    created : function () {},
    mounted : function () {

        this.data.$textarea = this.$el.querySelector('textarea');

        this.$watch('conf.maxRows', () => {

            this._setRows(this.data.rows);

        }, {
            immediate : true
        });

        this.$watch('conf.rows', () => {

            if (this.conf.autoSize) {

                this._setRows(this.conf.rows);

                this.Vue.nextTick(() => {

                    this._resizeArea();

                });

            } else {

                this._setRows(this.conf.rows);

            }

        }, {
            immediate : true
        });

        this.$on('input', value => {

            this._set(value);
            this._resizeArea();

        });

    }
};
</script>
