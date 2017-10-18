<template>
    <i-link
        :_uiid="uiid"
        :class="[sizeClass, styleClass, stateClass]"

        :link="link"
        :locked="locked"
        :new-tab="newTab"

        @click="_onClick"
    >

    <template v-if="conf.state === 'loading'">
        <i class="morningicon">&#xe703;</i>
        <span><slot></slot></span>
    </template>
    <template v-else-if="conf.state === 'processing'">
        <i class="morningicon">&#xe703;</i>
        <span><slot></slot></span>
    </template>
    <template v-else>
        <slot></slot>
    </template>

    </i-link>
</template>
 
<script>
import UI                           from 'Common/ui';

export default UI.extend({
    name : 'link',
    props : {
        link : {
            type : String,
            default : ''
        },
        js : {
            type : String,
            default : ''
        },
        locked : {
            type : [Boolean, Number],
            default : false
        },
        newTab : {
            type : Boolean,
            default : false
        }
    },
    data : function () {

        return {
            conf : {
                link : this.link,
                js : this.js,
                locked : this.locked,
                newTab : this.newTab
            },
            data : {
                lock : false,
                lastState : null
            }
        };

    },
    methods : {
        _onClick : function () {

            if (this.state !== 'disabled' &&
                 !this.data.lock) {

                this.$emit('emit');

            }
    
        },
        unlock : function () {

            this.data.lock = false;
            this.conf.state = this.data.lastState;

            return this;

        },
        lock : function (time) {

            if (this.data.lock !== true) {
                
                this.data.lastState = this.conf.state;
    
            }

            this.data.lock = true;
            this.conf.state = 'loading';

            if (time) {

                setTimeout(() => {

                    if (this.data.lock) {
                    
                        this.unlock();
                    
                    }

                }, +time);

            }

            return this;

        }
    },
    mounted : function () {

        this.data.lastState = this.conf.state;

        if (typeof this.locked === 'number') {

            this.lock(+this.locked);

        } else if (this.locked === true) {

            this.lock();

        }

        this.$on('emit', () => {

            if (this.conf.js) {

                eval(this.conf.js);

            }

            if (this.conf.link) {

                if (this.conf.newTab) {

                    window.open(this.conf.link);

                } else {

                    window.location.href = this.conf.link;

                }

            }

        });

    }
});
</script>

<style lang="less" src="./index.less"></style>
