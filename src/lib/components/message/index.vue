<template>
    <mor-message
        :_uiid="uiid"
        :class="[moreClass]"

        :close-btn="closeBtn"
        :done-time="doneTime"
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
                    <i class="mo-icon mo-icon-close close-btn" v-if="conf.closeBtn" @click="close(msg.id)"></i>
                </div>
            </transition-group>
            
        </div>
    </mor-message>
</template>

<script>
import MessageManger                from 'Utils/MessageManger';

export default {
    origin : 'UI',
    name : 'message',
    mixins : [MessageManger],
    props : {
        showType : {
            default : 'top',
            validator : (value => ['top', 'topleft', 'topright', 'bottom', 'bottomleft', 'bottomright'].indexOf(value) !== -1)
        }
    },
    computed : {
        _conf : function () {

            return {
                closeBtn : this.closeBtn,
                doneTime : this.doneTime,
                showType : this.showType,
                maxShow : this.maxShow
            };

        },
        moreClass : function () {

            let classes = {};

            classes[`pos-${this.data.shortType[this.conf.showType]}`] = true;
            classes['has-close-btn'] = this.conf.closeBtn;

            return classes;

        }
    },
    data : function () {

        return {
            data : {}
        };

    },
    methods : {},
    mounted : function () {

        this.data.messageBoxMarginBottom = 3;
        this.data.messageListOffset = 8;
        this.data.messageDefaultStringKey = 'message';

    }
};
</script>
