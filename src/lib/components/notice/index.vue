<template>
    <mor-notice
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
                    :class="[{
                        'has-icon' : msg.icon
                    }, msg.classes]"
                    :key="msg.id"
                >
                    <div class="icon" v-if="msg.icon" v-html="msg.icon"></div>
                    <component
                        v-if="msg.header"
                        :is="{
                            template : ('<header>' + msg.header + '</header>')
                        }"
                    ></component>
                    <component
                        :is="{
                            template : ('<div class=\'body\'>' + msg.body + '</div>')
                        }"
                    ></component>
                    <component
                        v-if="msg.footer"
                        :is="{
                            template : ('<footer>' + msg.footer + '</footer>')
                        }"
                    ></component>
                    <i class="mo-icon mo-icon-close close-btn" v-if="conf.closeBtn" @click="close(msg.id)"></i>
                </div>
            </transition-group>

        </div>
    </mor-notice>
</template>

<script>
import MessageManger                from 'Utils/MessageManger';

const messageListOffset = 16;

export default {
    origin : 'UI',
    name : 'notice',
    mixins : [MessageManger],
    props : {},
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

        return {};

    },
    methods : {},
    mounted : function () {

        this.data.messageBoxMarginBottom = 8;
        this.data.messageListOffset = messageListOffset;
        this.data.messageDefaultStringKey = 'body';

    }
};
</script>
