<template>
    <mor-message
        :_uiid="uiid"
        :class="[moreClass]"

        :close-btn="closeBtn"
        :close-time="closeTime"
        :show-type="showType"
        :max-show="maxShow"
    >
        <div class="list">

            <transition-group name="msg" tag="div">
                <div
                    v-for="msg in data.list"

                    class="msg"
                    :class="'msg-co-' + _getColorShortName(msg.color)"
                    :key="msg.id"
                >
                    <h1 class="title bo-ti">{{msg.title}}</h1>
                    <div class="body bo-ti" v-html="msg.message"></div>
                    <i class="morningicon close-btn" v-if="conf.closeBtn" @click="close(msg.id)">&#xe62e;</i>
                </div>
            </transition-group>
            
        </div>
    </mor-message>
</template>

<script>
import PopupManager                 from 'Utils/PopupManager';
import IndexManager                 from 'Utils/IndexManager';

const defaultCloseTime = 4000;

export default {
    origin : 'UI',
    name : 'message',
    mixins : [PopupManager, IndexManager],
    props : {
        closeBtn : {
            type : Boolean,
            default : false
        },
        closeTime : {
            type : [Number, Boolean],
            default : defaultCloseTime
        },
        showType : {
            type : String,
            default : 'top',
            validator : (value => ['top', 'topleft', 'topright', 'bottom', 'bottomleft', 'bottomright'].indexOf(value) !== -1)
        },
        maxShow : {
            type : [Number, Boolean],
            default : 2
        }
    },
    computed : {
        _conf : function () {

            return {
                closeBtn : this.closeBtn,
                closeTime : this.closeTime,
                showType : this.showType,
                maxShow : this.maxShow
            };

        },
        moreClass : function () {

            let classes = {};

            classes[`pos-${this.data.shortType[this.conf.showType]}`] = true;

            return classes;

        }
    },
    data : function () {

        return {
            data : {
                messageId : 0,
                list : [],
                shortType : {
                    top : 't',
                    topleft : 'tl',
                    topright : 'tr',
                    bottom : 'b',
                    bottomleft : 'bl',
                    bottomright : 'br'
                }
            }
        };

    },
    methods : {
        _resizeList : function () {

            if (this.conf.maxShow &&
                this.data.list.length > +this.conf.maxShow) {

                let height = 0;
                let $messages = this.$el.querySelectorAll('.list .msg');

                const messageMarginBottom = 3.2;
                const messageListOffset = 8;

                $messages = Object.values($messages).slice(0, +this.conf.maxShow);

                for (let $message of $messages) {

                    height += $message.clientHeight + messageMarginBottom;

                }

                // 没有使用data绑定style因为会影响transition
                this.$el.querySelector('.list').style.height = `${height + messageListOffset}px`;

            }

        },
        push : function (options) {

            let defaultOptions = {
                id : this.data.messageId++,
                title : undefined,
                message : '',
                color : 'theme'
            };
            let list = Object.assign([], this.data.list);

            if (typeof options === 'string') {

                options = Object.assign(defaultOptions, {
                    message : options
                });

            } else {

                options = Object.assign(defaultOptions, options);

            }

            if (this.conf.showType[0] === 'b') {

                list.push(options);

            } else {

                list.unshift(options);

            }

            this.$el.style.zIndex = this._indexMax();
            this.data.list = list;

            if (this.conf.closeTime !== false) {

                setTimeout(() => {

                    this.close(options.id);

                }, this.conf.closeTime);

            }

            this.$emit('push');

            return options.id;

        },
        close : function (id) {

            for (let index in this.data.list) {

                if (id === this.data.list[index].id) {

                    this.data.list.splice(index, 1);

                    this.$emit('close');

                }

            }

            return this;

        }
    },
    mounted : function () {

        this._popupShow();

        this.$watch('data.list', () => {

            this._resizeList();

        }, {
            immediate : true,
            deep : true
        });

        this.$watch('conf.maxShow', () => {

            this._resizeList();

        });

        this.$watch('conf.showType', (newValue, oldValue) => {

            if (newValue[0] !== oldValue[0]) {

                this.data.list.reverse();

            }

            this._resizeList();

        });

    }
};
</script>

<style lang="less" src="./index.less"></style>
