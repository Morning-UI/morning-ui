<template>
    <mor-textarea
        :_uiid="uiid"
        :class="[formClass, stateClass]"

        :form-name="formName"
        :form-key="formKey"
        :group="group"
        :default-value="defaultValue"
        :hide-name="hideName"
        :clearable="clearable"
        :rows="rows"
        :auto-size="autoSize"
        :max-rows="maxRows"
    >

    <textarea
        :class="{
            'auto-sizing' : this.conf.autoSize,
            'is-max' : isMaxRows
        }"

        :placeholder="placeholder"
        :disabled="conf.state === 'disabled' || conf.state === 'readonly'"
        :rows="data.rows"

        @focus="_focus()"
        @blur="_blur()"

        :value="data.value"
        @input="$emit('input', $event.target.value)"
    ></textarea>

    <morning-link v-if="conf.clearable" color="minor" @emit="_clean" class="cleanbtn">清空</morning-link>

    </mor-textarea>
</template>
 
<script>
export default {
    origin : 'Form',
    name : 'textarea',
    props : {
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
        }
    },
    computed : {
        _conf : function () {

            return {
                rows : this.rows,
                autoSize : this.autoSize,
                maxRows : this.maxRows
            };

        },
        placeholder : function () {

            if (!this.conf.hideName) {

                return this.conf.formName;

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

                return JSON.stringify(value);

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

            if (rows > this.conf.maxRows) {

                rows = this.conf.maxRows;

            } else if (rows < this.conf.rows) {

                rows = this.conf.rows;

            }

            this.data.rows = rows;

        },
        setRows : function (num) {

            let row = this.conf.rows;

            if (typeof num === 'number') {
                
                row = num;

            } else if (typeof num === 'string') {

                if (/^\+/.test(num)) {

                    row += +num.replace(/^\+/, '');

                } else if (/^-/.test(num)) {

                    row -= +num.replace(/^-/, '');

                }

            }

            if (row) {

                if (row < 1) {
                
                    row = 1;
                
                }
                
                this.conf.rows = row;

            }

            return this;

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

            let rows = this.conf.rows;

            if (this.conf.autoSize) {

                rows = this.data.rows;

            }

            this._setRows(rows);

        }, {
            immediate : true
        });

        this.$on('input', value => {

            this.data.value = value;
            this._resizeArea();

        });

    }
};
</script>

<style lang="less" src="./index.less"></style>
