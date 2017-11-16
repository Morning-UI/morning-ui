<template>
    <i-link
        :_uiid="uiid"
        :class="[sizeClass, colorClass, stateClass, moreClass]"

        :link="link"
        :js="js"
        :locked="locked"
        :new-tab="newTab"

        @click="_onClick"
    >

    <template v-if="data.lock">
        <i class="morningicon">&#xe703;</i>
        <span><slot></slot></span>
    </template>

    <template v-else>
        <slot></slot>
    </template>

    </i-link>
</template>
 
<script>
export default {
    origin : 'UI',
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
    computed : {
        _conf : function () {

            return {
                link : this.link,
                js : this.js,
                locked : this.locked,
                newTab : this.newTab
            };

        },
        moreClass : function () {

            return {
                loading : this.data.lock
            };

        }
    },
    data : function () {

        return {
            data : {
                lock : false
            }
        };

    },
    methods : {
        _onClick : function () {

            if (this.conf.state !== 'disabled' &&
                 !this.data.lock) {

                this.$emit('emit');

            }
    
        },
        _emitLock : function () {

            if (typeof this.conf.locked === 'number') {

                this.lock(+this.locked);

            } else if (this.conf.locked === true) {

                this.lock();

            }

        },
        unlock : function () {

            this.data.lock = false;

            return this;

        },
        lock : function (time) {

            this.data.lock = true;

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

        this._emitLock();

        this.$on('emit', () => {

            this._emitLock();

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
};
</script>

<style lang="less" src="./index.less"></style>
