<template>
    <mor-btn
        :_uiid="uiid"
        :class="[sizeClass, colorClass, stateClass, moreClass]"

        :link="link"
        :js="js"
        :locked="locked"
        :new-tab="newTab"

        @click="_onClick"
    >

    <a :href="href" :target="conf.newTab ? '_blank' : '_self'">
        <template v-if="data.lock">
            <div class="mo-loader">
                <svg class="mo-loader-circular" viewBox="25 25 50 50">
                    <circle class="mo-loader-path" cx="50" cy="50" r="20" fill="none" stroke-width="4" stroke-miterlimit="10"/>
                </svg>
            </div>
            <span><slot></slot></span>
        </template>

        <template v-else>
            <slot></slot>
        </template>
    </a>
        
    </mor-btn>
</template>
 
<script>
export default {
    origin : 'UI',
    name : 'btn',
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

        },
        href : function () {

            if (this.conf.link) {

                return this.conf.link;

            }

            return 'javascript:;';

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

                this.lock(+this.conf.locked);

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

        });

    }
};
</script>

<style lang="less" src="./index.less"></style>
