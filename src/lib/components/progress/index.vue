<template>
    <mor-progress
        :_uiid="uiid"
        :class="[moreClass]"
        :progressing="progressing"
        :type="type"
    >

    <div class="progress-wrap">
        <template v-if="conf.type === 'line'">
            <div class="line-track">
                <div
                    class="main"
                    :class="{
                        done : data.mainProgress === 1,
                        fail : data.failed
                    }"
                    :style="{
                        width : data.mainProgress*100 + '%'
                    }"
                >
                        
                    <div class="progressing" v-if="conf.progressing && data.mainProgress !== 1"></div>
            
                </div>
            </div>
            <div class="note" v-html="progressNote"></div>
        </template>

        <template v-if="conf.type === 'ring'">
            <div class="ring-track">
                <svg viewBox="0 0 100 100">
                    <path
                        d="M 50,5 a 45,45 0 1 1 0,90 a 45,45 0 1 1 0,-90"
                        class="track-bg"
                    ></path>
                    <path
                        d="M 50,5 a 45,45 0 1 1 0,90 a 45,45 0 1 1 0,-90"
                        class="main"
                        :style="{
                            'stroke-dasharray' : ringPer,
                            'stroke-opacity' : data.mainProgress ? 1 : 0
                        }"
                    ></path>
                </svg>
            </div>
            <div class="note" v-html="progressNote"></div>
        </template>

    </div>
    
    </mor-progress>
</template>
 
<script>
export default {
    origin : 'UI',
    name : 'progress',
    props : {
        progressing : {
            type : Boolean,
            default : false
        },
        type : {
            type : String,
            default : 'line',
            validator : (value => ['line', 'ring'].indexOf(value) !== -1)
        }
    },
    computed : {
        _conf : function () {

            return {
                progressing : this.progressing,
                type : this.type
            };

        },
        moreClass : function () {

            return {
                'type-line' : this.conf.type === 'line',
                'type-ring' : this.conf.type === 'ring'
            };

        },
        progressNote : function () {

            if (this.data.failed) {

                return '<i class="mo-icon mo-icon-error-cf"></i>';

            } else if (this.data.mainProgress === 1) {

                return '<i class="mo-icon mo-icon-correct-cf"></i>';

            } else {

                return `${Math.floor(this.data.mainProgress*100)}%`;

            }

        },
        ringPer : function () {

            return `${Math.PI * 90 * this.data.mainProgress}, ${Math.PI * 90}`

        }
    },
    data : function () {

        return {
            data : {
                mainProgress : 0,
                failed : false
            }
        };

    },
    methods : {
        to : function (per = 0) {

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

    }
};
</script>

<style lang="less" src="./index.less"></style>
