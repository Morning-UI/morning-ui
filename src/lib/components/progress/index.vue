<template>
    <mor-progress
        :_uiid="uiid"
        :class="[colorClass, moreClass]"
        :percent="percent"
        :progressing="progressing"
        :type="type"
        :failed="failed"
        :status="status"
        :format="format"
        :mark-range="markRange"
        :note-position="notePosition"
    >

    <div class="progress-wrap">
        <template v-if="conf.type === 'line'">
            <div class="note" v-html="progressNote" v-if="conf.notePosition === 'left'"></div>
            <div class="line-track track">
                <ul class="marks">
                    <li
                        v-for="(mark, index) in marks"
                        :key="index"
                        :style="[{
                            left : `${(mark.start) / 100 * data.$track.clientWidth}px`,
                            width : `${(mark.end - mark.start) / 100 * data.$track.clientWidth}px`
                        }, _genMarkBackground(mark.color)]"
                        :class="{
                            [`co-${morning._colorShortName[mark.color]}`] : true
                        }"
                    ></li>
                </ul>
                <div
                    class="main"
                    :class="{
                        done : data.mainProgress === 1,
                        fail : conf.failed,
                        [`status-${conf.status}`] : true
                    }"
                    :style="{
                        width : data.mainProgress*100 + '%'
                    }"
                >
                        
                    <div class="progressing" v-if="conf.progressing && data.mainProgress !== 1 && !conf.failed"></div>
            
                </div>
            </div>
            <div class="note" v-html="progressNote" v-if="conf.notePosition === 'right'"></div>
        </template>

        <template v-if="conf.type === 'ring'">
            <div
                class="ring-track track"
            >
                <svg viewBox="0 0 100 100">
                    <path
                        d="M 50,5 a 45,45 0 1 1 0,90 a 45,45 0 1 1 0,-90"
                        class="track-bg"
                    ></path>
                    <path
                        d="M 50,5 a 45,45 0 1 1 0,90 a 45,45 0 1 1 0,-90"
                        v-for="(mark, index) in marks"
                        :key="index"
                        :style="[{
                            'stroke-dasharray' : `${Math.PI * 90 * ((mark.end - mark.start) / 100)}, ${Math.PI * 90}`,
                            'stroke-dashoffset' : -(Math.PI * 90 * mark.start / 100),
                            'stroke-opacity' : 1
                        }, _genMarkBackground(mark.color)]"
                    ></path>
                    <path
                        d="M 50,5 a 45,45 0 1 1 0,90 a 45,45 0 1 1 0,-90"
                        class="main"
                        :class="{
                            done : data.mainProgress === 1,
                            fail : conf.failed,
                            [`status-${conf.status}`] : true
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
import color                        from 'color';

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
        },
        status : {
            type : String,
            default : 'normal',
            validator : (value => ['normal', 'success', 'failed', 'warning'].indexOf(value) !== -1)
        },
        format : {
            type : Function,
            default : (percent => (`${percent}%`))
        },
        markRange : {
            type : Array,
            default : (() => [])
        },
        notePosition : {
            type : String,
            default : 'right',
            validator : (value => ['left', 'right'].indexOf(value) !== -1)
        }
    },
    computed : {
        _conf : function () {

            return {
                percent : this.percent,
                progressing : this.progressing,
                type : this.type,
                failed : this.failed,
                status : this.status,
                format : this.format,
                markRange : this.markRange,
                notePosition : this.notePosition
            };

        },
        moreClass : function () {

            return {
                'type-line' : this.conf.type === 'line',
                'type-ring' : this.conf.type === 'ring',
                'note-in-left' : this.conf.notePosition === 'left'
            };

        },
        progressNote : function () {

            if (this.conf.failed) {

                return '<i class="mo-icon mo-icon-error-cf"></i>';

            } else if (this.conf.status === 'failed') {

                return '<i class="mo-icon mo-icon-error-cf"></i>';

            } else if (this.conf.status === 'success') {

                return '<i class="mo-icon mo-icon-correct-cf"></i>';

            } else if (this.conf.status === 'warning') {

                return '<i class="mo-icon mo-icon-warn-f"></i>';

            }

            return this.conf.format(Math.floor(this.data.mainProgress * num100));

        },
        ringPer : function () {

            return `${Math.PI * ringDiameter * this.data.mainProgress}, ${Math.PI * ringDiameter}`;

        },
        marks : function () {

            if (!this.data.$track) {

                return [];

            }

            let marks = [];
            let defaultMark = {
                start : 0,
                end : 0,
                color : 'neutral-4'
            };

            for (let mark of this.conf.markRange) {

                if (mark instanceof Array &&
                    mark.length === 2 &&
                    typeof mark[0] === 'number' &&
                    typeof mark[1] === 'number' &&
                    mark[1] > mark[0] &&
                    mark[1] <= num100) {

                    marks.push(Object.assign({}, defaultMark, {
                        start : mark[0],
                        end : mark[1]
                    }));

                } else if (typeof mark === 'object' &&
                    typeof mark.start === 'number' &&
                    typeof mark.end === 'number' &&
                    mark.end > mark.start &&
                    mark.end <= num100
                ) {

                    marks.push(Object.assign({}, defaultMark, mark));

                }

            }

            return marks;

        }
    },
    data : function () {

        return {
            data : {
                mainProgress : 0,
                $track : null
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

        },
        _genMarkBackground : function (colorString) {

            let isVaild = false;

            try {

                color(colorString);
                isVaild = true;

            } catch (e) {}

            return isVaild ? {
                background : colorString,
                stroke : colorString
            } : {};
        
        }
    },
    mounted : function () {

        this.$watch('type', () => {
    
            this.data.$track = this.$el.querySelector('.track');

        }, {
            immediate : true
        });

        this.$watch('percent', () => {

            this._to(this.conf.percent / num100);
            this.$emit('emit');

        }, {
            immediate : true
        });

    }
};
</script>
