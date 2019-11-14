<template>
    <mor-timeline
        :_uiid="uiid"
        :class="[]"

        :timeline="timeline"
    >
    
        <div class="timeline-item" v-for="(item, index) in conf.list" :key="index" :class="{'pending' : item.pending}">
            <template v-if="typeof item === 'string'">
                <div class="timeline-line"></div>
                <div class="timeline-point" :class="['point-co-'+(item.pointColor || 'default')]"></div>
                <div class="timeline-content" v-html="item"></div>
            </template>

            <template v-else>
                <div class="timeline-line"></div>
                <div class="timeline-icon" v-if="item.icon" v-html="item.icon" :class="['icon-co-'+(item.pointColor || 'default')]"></div>
                <div class="timeline-point" v-else :class="['point-co-'+(item.pointColor || 'default')]"></div>
                <div class="timeline-content">
                    <p class="timeline-title" v-html="item.title"></p>
                    <p class="timeline-desc" v-html="item.desc"></p>
                </div>
            </template>
        </div>

    </mor-timeline>
</template>
 
<script>
export default {
    origin : 'UI',
    name : 'timeline',
    props : {
        list : {
            type : Array,
            default : (() => [])
        },
    },
    computed : {
        _conf : function () {

            return {
                list : this.list
            };

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
