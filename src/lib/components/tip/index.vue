<template>
    <mor-tip
        :_uiid="uiid"
        :class="[colorClass, moreClass]"

        :target="target"
        :placement="placement"
        :offset="offset"
        :trigger="trigger"
        :trigger-in-delay="triggerInDelay"
        :auto-reverse="autoReverse"
        :align="align"
    >

    <div class="tip-wrap">
        <div class="arrow tip-arrow"></div>
        <div class="con">
            <template v-if="!$slots.default">
                {{data.title}}
            </template>
            <template v-else>
                <slot></slot>
            </template>
        </div>
    </div>

    </mor-tip>
</template>
 
<script>
import TipManager                   from 'Utils/TipManager';

const triggerDelayTime = 200;

export default {
    origin : 'UI',
    name : 'tip',
    mixins : [TipManager],
    props : {
        target : {
            type : String,
            default : null
        },
        placement : {
            type : String,
            default : 'top',
            validator : (value => ['top', 'bottom', 'left', 'right'].indexOf(value) !== -1)
        },
        offset : {
            type : String,
            default : '0, 0'
        },
        trigger : {
            type : String,
            default : 'hover',
            validator : (value => ['hover', 'click', 'rclick', 'focus', 'method'].indexOf(value) !== -1)
        },
        triggerInDelay : {
            type : Number,
            default : triggerDelayTime
        },
        autoReverse : {
            type : Boolean,
            default : true
        },
        align : {
            type : String,
            default : 'middle',
            validator : (value => ['start', 'middle', 'end'].indexOf(value) !== -1)
        }
    },
    computed : {
        _conf : function () {

            return {
                target : this.target,
                placement : this.placement,
                offset : this.offset,
                trigger : this.trigger,
                triggerInDelay : this.triggerInDelay,
                autoReverse : this.autoReverse,
                align : this.align
            };

        },
        moreClass : function () {

            let classes = {
                'only-has-text' : this.data.onlyHasText,
                'has-content' : this.data.hasContent
            };

            return classes;

        }
    },
    data : function () {

        return {
            data : {
                show : false,
                title : null,
                onlyHasText : false,
                hasContent : false
            }
        };

    },
    methods : {
        _checkOnlyHasText : function () {

            if (
                (
                    !this.$slots.default &&
                    this.data.title
                ) || (
                    this.$slots.default &&
                    this.$slots.default.length === 1 &&
                    this.$slots.default[0].tag === undefined &&
                    this.$slots.default[0].text
                )
            ) {

                this.data.onlyHasText = true;

            } else {

                this.data.onlyHasText = false;

            }

        },
        _tipHasContent : function () {

            if (this.data.title) {

                return true;

            }

            if (!this.$slots ||
                !this.$slots.default ||
                !this.$slots.default[0]) {

                return false;

            }

            let hasContent = !(
                this.$slots.default.length === 1 &&
                this.$slots.default[0].tag === undefined &&
                !this.$slots.default[0].text
            );

            return hasContent;

        },
        show : function () {

            this._tipShow(true);

            return this;

        },
        hide : function () {

            this._tipHide(true);

            return this;

        },
        toggle : function (show) {

            if (show === undefined) {

                this._tipToggle(true);

            } else if (show === true) {

                this.show();

            } else if (show === false) {

                this.hide();

            }
            
            return this;

        },
        position : function () {

            this._tipUpdate();

            return this;

        }
    },
    mounted : function () {

        this.$on('_tipManagerBindTarget', $target => {

            if ($target.attributes.title) {

                this.data.title = $target.getAttribute('title');

            }

        });

        this.$on('_tipManagerWillShow', () => {

            this._checkOnlyHasText();
            this.data.hasContent = this._tipHasContent();

        });

        this.$on('_tipManagerShow', () => {

            this.data.show = true;

            this.$emit('show');
            this.$emit('emit');

        });

        this.$on('_tipManagerHide', () => {

            this.data.show = false;

            this.$emit('hide');
            this.$emit('emit');

        });

    }
};
</script>
