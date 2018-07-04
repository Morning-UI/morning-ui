<template>
    <mor-link
        :_uiid="uiid"
        :class="[sizeClass, colorClass, stateClass, moreClass]"

        :link="link"
        :js="js"
        :locked="locked"
        :new-tab="newTab"

        @click="_onClick"
    >

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

    </mor-link>
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

    },
    updated : function () {

        let html = this.$el.innerHTML;
        let shadowHtml = `<style>a{    width: 28px;
    height: 18px;
    position: absolute;
    font-size: 0;}</style>`;

        this.$el.attachShadow({
            mode : 'open'
        });

        if (this.conf.link) {

            if (this.conf.newTab) {
                
                shadowHtml += `<a href="${this.conf.link}" target="_blank">555</a><slot></slot>`;

            } else {
                
                shadowHtml += `<a href="${this.conf.link}" target="_self">555</a><slot></slot>`;

            }

        } else {

            shadowHtml += `<a href="javascript:;">555</a><slot></slot>`;

        }

        this.$el.shadowRoot.innerHTML = shadowHtml;

    }
};
</script>

<style lang="less" src="./index.less"></style>