<template>
    <mor-steps
        :_uiid="uiid"
        :class="[moreClass]"

        :list="list"
        :done-step="doneStep"
        :mark-current="markCurrent"
        :current-type="currentType"
        :done-type="doneType"
        :show-icon="showIcon"
        :align="align"
        :failed="failed"
    >

    <ul class="steps-list">
        <template v-for="(item, index) in conf.list">
            <template v-if="index < conf.list.length - 1">
                <li
                    class="step"
                    :key="index"
                    :class="{
                        first: index === 0,
                        done : index <= conf.doneStep,
                        current : conf.markCurrent && (index === (conf.doneStep + 1)),
                        [`current-type-${conf.currentType}`] : true,
                        [`done-type-${conf.doneType}`] : true,
                        failed : conf.failed.indexOf(index) !== -1
                    }"
                >
                    <div class="bg"></div>
                    <div class="mark">
                        <template v-if="conf.currentType === 'progress' && index === (conf.doneStep + 1)">
                            <morning-load :done-time="false"></morning-load>
                        </template>
                        <template v-else-if="conf.showIcon && index <= conf.doneStep">
                            <i class="mo-icon mo-icon-close" v-if="conf.failed.indexOf(index) !== -1"></i>
                            <i class="mo-icon mo-icon-check" v-else></i>
                        </template>
                        <template v-else-if="typeof item.icon === 'string'">
                            <div class="custom-icon" v-html="item.icon"></div>
                        </template>
                        <template v-else>{{index + 1}}</template>
                    </div>
                    <div class="title">{{typeof item === 'string' ? item : (item.title || '')}}</div>
                    <div class="desc" v-if="item.desc">{{item.desc}}</div>
                </li>
                <li class="link" :key="index"></li>
            </template>
            <template v-else>
                <li
                    class="step last"
                    :key="index"
                    :class="{
                        done : index === conf.doneStep,
                        current : conf.markCurrent && index === (conf.doneStep + 1),
                        [`current-type-${conf.currentType}`] : index === (conf.doneStep + 1),
                        [`done-type-${conf.doneType}`] : index === (conf.doneStep + 1),
                        failed : conf.failed.indexOf(index) !== -1
                    }"
                >
                    <div class="bg"></div>
                    <div class="mark">
                        <template v-if="conf.currentType === 'progress' && index === (conf.doneStep + 1)">
                            <morning-load :done-time="false"></morning-load>
                        </template>
                        <template v-else-if="conf.showIcon && index <= conf.doneStep">
                            <i class="mo-icon mo-icon-close" v-if="conf.failed.indexOf(index) !== -1"></i>
                            <i class="mo-icon mo-icon-check" v-else></i>
                        </template>
                        <template v-else-if="typeof item.icon === 'string'">
                            <div class="custom-icon" v-html="item.icon"></div>
                        </template>
                        <template v-else>{{index + 1}}</template>
                    </div>
                    <div class="title">{{typeof item === 'string' ? item : (item.title || '')}}</div>
                    <div class="desc" v-if="item.desc">{{item.desc}}</div>
                </li>
            </template>
        </template>
    </ul>
        
    </mor-steps>
</template>
 
<script>
export default {
    origin : 'UI',
    name : 'steps',
    props : {
        list : {
            type : Array,
            default : (() => [])
        },
        doneStep : {
            type : Number,
            default : -1
        },
        markCurrent : {
            type : Boolean,
            default : false
        },
        currentType : {
            type : String,
            default : 'highlight',
            validator : (value => ['highlight', 'progress', 'hollow'].indexOf(value) !== -1)
        },
        doneType : {
            type : String,
            default : 'hollow',
            validator : (value => ['highlight', 'hollow'].indexOf(value) !== -1)
        },
        showIcon : {
            type : Boolean,
            default : false
        },
        align : {
            type : String,
            default : 'center',
            validator : (value => ['center', 'left'].indexOf(value) !== -1)
        },
        failed : {
            type : Array,
            default : (() => [])
        }
    },
    computed : {
        _conf : function () {

            return {
                list : this.list,
                doneStep : this.doneStep,
                markCurrent : this.markCurrent,
                currentType : this.currentType,
                doneType : this.doneType,
                showIcon : this.showIcon,
                align : this.align,
                failed : this.failed
            };

        },
        moreClass : function () {

            let classes = {};

            classes[`align-${this.conf.align}`] = true;

            return classes;

        }
    },
    data : function () {

        return {
            data : {}
        };

    },
    methods : {},
    mounted : function () {}
};
</script>
