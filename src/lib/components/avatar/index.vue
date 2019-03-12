<template>
    <mor-avatar
        :_uiid="uiid"
        :class="[sizeClass, colorClass, stateClass, moreClass]"
    >
        <div class="wrap">
            <span class="avatar-string" v-if="data.type === 'string'">
                <slot></slot>
            </span>
            <slot v-else></slot>
        </div>
    </mor-avatar>
</template>
 
<script>
export default {
    origin : 'UI',
    name : 'avatar',
    props : {},
    computed : {
        _conf : function () {

            return {};

        },
        moreClass : function () {

            return {
                'avatar-image' : (this.data.type === 'image')
            };

        }
    },
    data : function () {

        return {
            data : {
                type : 'string',
                $wrap : null
            }
        };

    },
    methods : {},
    updated : function () {

        if (this.data.type === 'string') {

            let $wrap = this.data.$wrap;
            let $string = this.data.$wrap.querySelector('.avatar-string');
            let padding = $wrap.clientWidth / 5;

            if ($wrap.clientWidth < ($string.clientWidth + padding)) {

                $string.style.transform = `translateX(-50%) scale(${$wrap.clientWidth / ($string.clientWidth + padding)})`;
                $string.style.left = '50%';
                $string.style.position = 'relative';

            } else {

                $string.style.transform = 'unset';
                $string.style.left = 'unset';
                $string.style.position = 'unset';

            }

        }

    },
    mounted : function () {

        this.data.$wrap = this.$el.querySelector('.wrap');

        this.$watch('$slots.default[0]', () => {

            let $el = this.$slots.default[0].elm;

            if ($el.nodeName === '#text') {

                this.data.type = 'string';

            } else if ($el.nodeName === 'I') {

                this.data.type = 'icon';

            } else {

                this.data.type = 'image';

            }

        }, {
            immediate : true
        });

    }
};
</script>
