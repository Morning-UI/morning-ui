<template>
    <mor-progress
        :_uiid="uiid"
        :class="[colorClass, moreClass]"
        :percent="percent"
        :progressing="progressing"
        :type="type"
        :failed="failed"
    >

    <div class="progress-wrap">
        <template v-if="conf.type === 'line'">
            <div class="line-track">
                <div
                    class="main"
                    :class="{
                        done : data.mainProgress === 1,
                        fail : conf.failed
                    }"
                    :style="{
                        width : data.mainProgress*100 + '%'
                    }"
                >
                        
                    <div class="progressing" v-if="conf.progressing && data.mainProgress !== 1 && !conf.failed"></div>
            
                </div>
            </div>
            <div class="note" v-html="progressNote"></div>
        </template>

        <template v-if="conf.type === 'ring'">
            <div
                class="ring-track"
            >
                <svg viewBox="0 0 100 100">
                    <path
                        d="M 50,5 a 45,45 0 1 1 0,90 a 45,45 0 1 1 0,-90"
                        class="track-bg"
                    ></path>
                    <path
                        d="M 50,5 a 45,45 0 1 1 0,90 a 45,45 0 1 1 0,-90"
                        class="main"
                        :class="{
                            done : data.mainProgress === 1,
                            fail : conf.failed
                        }"
                        :style="{
                            'stroke-dasharray' : ringPer,
                            'stroke-opacity' : data.mainProgress ? 1 : 0
                        }"
                    ></path>
                    <defs>
                        <linearGradient
                            id="ring-progressing"
                            x1="0%"
                            y1="50%"
                            x2="100%"
                            y2="50%"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset="0%" stop-color="#fff1"/>
                            <stop offset="80%" stop-color="#fffa"/>
                            <stop offset="100%" stop-color="#fffe"/>
                        </linearGradient>
                    </defs>
                    <path
                        d="M 50,5 a 45,45 0 1 1 0,90 a 45,45 0 1 1 0,-90"
                        class="progressing"
                        style="stroke: url(#ring-progressing)"
                        :style="{
                            'stroke-dasharray' : ringPer
                        }"
                        v-if="conf.progressing && data.mainProgress !== 1 && !conf.failed"
                    ></path>
                </svg>
            </div>
            <div class="note" v-html="progressNote"></div>
        </template>

    </div>
    
    </mor-progress>
</template>
 
<script>
const num100 = 100;
const ringDiameter = 90;

export default {
    origin : 'UI',
    name : 'progress',
    props : {
        percent : {
            type : Number,
            default : 0
        },
        progressing : {
            type : Boolean,
            default : false
        },
        type : {
            type : String,
            default : 'line',
            validator : (value => ['line', 'ring'].indexOf(value) !== -1)
        },
        failed : {
            type : Boolean,
            default : false
        }
    },
    computed : {
        _conf : function () {

            return {
                percent : this.percent,
                progressing : this.progressing,
                type : this.type,
                failed : this.failed
            };

        },
        moreClass : function () {

            return {
                'type-line' : this.conf.type === 'line',
                'type-ring' : this.conf.type === 'ring'
            };

        },
        progressNote : function () {

            if (this.conf.failed) {

                return '<i class="mo-icon mo-icon-error-cf"></i>';

            } else if (this.data.mainProgress === 1) {

                return '<i class="mo-icon mo-icon-correct-cf"></i>';

            }

            return `${Math.floor(this.data.mainProgress * num100)}%`;

        },
        ringPer : function () {

            return `${Math.PI * ringDiameter * this.data.mainProgress}, ${Math.PI * ringDiameter}`;

        }
    },
    data : function () {

        return {
            data : {
                mainProgress : 0
            }
        };

    },
    methods : {
        _to : function (per = 0) {

            per = Number(per) || 0;

            if (per < 0) {

                per = 0;

            }

            if (per > 1) {

                per = 1;

            }

            this.data.mainProgress = per;

        }
    },
    mounted : function () {

        this.$watch('percent', () => {

            this._to(this.conf.percent / num100);
            this.$emit('emit');

        }, {
            immediate : true
        });

    }
};
</script>

<style lang="less" src="./index.less"></style>
