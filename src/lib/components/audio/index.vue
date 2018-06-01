<template>
    <mor-audio
        :_uiid="uiid"
        :class="[]"

        :src="src"
        :auto-play="autoPlay"
        :loop-play="loopPlay"
        :hide-time="hideTime"
        :hide-progress="hideProgress"
        :show-tools="mainTools"
        :more-tools="moreTools"
    >
    
    <div class="audio-box">
        <div class="play" @click="toggle()" :class="{'no-audio':!conf.src}">
            <i
                class="mo-icon mo-icon-play"
                v-if="!data.playing"
                :id="'mor-audio-play-'+uiid"
            ></i>
            <i
                class="mo-icon mo-icon-pause"
                v-if="data.playing"
            ></i>
            <morning-tip
                v-if="!conf.src"
                :target="'#mor-audio-play-'+uiid"
                color="extra-light-black"
            >
                无音频
            </morning-tip>
        </div>
        <div class="progress">
            <morning-slider
                :ref="'mor-audio-slider-'+uiid"
                :state="conf.src ? 'normal' : 'readonly'"
                :min="0"
                :max="data.totalTime || 1"
                :step="1"
                :tipFormatter="_timeFormat"

                @value-change="to"
            ></morning-slider>
        </div>
        <div class="time">
            <span :style="{
                width : _timeFormat(data.currentTime).length+'ch'
            }">{{_timeFormat(data.currentTime)}}</span>
            <span>/</span>
            <span :style="{
                width : _timeFormat(data.totalTime).length+'ch'
            }">{{_timeFormat(data.totalTime)}}</span>
        </div>
        <div class="show-tools"></div>
        <div class="more-tools"></div>
    </div>

    <audio>
        <source :src="conf.src">
    </audio>
        
    </mor-audio>
</template>
 
<script>
// TODO : 加载进度
// TODO : 音量(config/tool)
// TODO : 下载(more/tool)
// TODO : 循环播放(more/tool)
// TODO : autoplay(config)
// TODO : 不显示time(config)
// TODO : 不显示process(config)
// TODO : 主工具(config)

const oneHour = 3600;
const oneMinute = 60;

export default {
    origin : 'UI',
    name : 'audio',
    props : {
        src : {
            type : String,
            default : ''
        }
    },
    computed : {
        _conf : function () {

            return {
                src : this.src
            };

        }
    },
    data : function () {

        return {
            data : {
                $audio : null,
                playing : false,
                totalTime : 1,
                loadedTime : 0,
                currentTime : 0,
                dontSyncCurrentTime : false
            }
        };

    },
    methods : {
        _syncTotalTime : function () {

            this.data.totalTime = Math.floor(this.data.$audio.duration || 0);

        },
        _syncCurrentTime : function () {

            this.data.dontSyncCurrentTime = true;
            this.data.currentTime = Math.floor(this.data.$audio.currentTime || 0);
            this.$refs[`mor-audio-slider-${this.uiid}`].set(this.data.currentTime);

            this.Vue.nextTick(() => {
            
                this.data.dontSyncCurrentTime = false;
            
            });

        },
        _syncLoadedTime : function () {

            if (this.data.$audio.buffered.length > 0) {

                this.data.loadedTime = Math.floor(this.data.$audio.buffered.end(0));

            }

            this.data.loadedTime = 0;

        },
        _timeFormat : function (value) {

            if (!this.conf.src ||
                this.data.totalTime === 0) {

                return '00:00';

            }

            let hours = Math.floor(value / oneHour);
            let minutes = 0;
            let seconds = 0;
            let left = value - hours * oneHour;

            if (hours) {

                hours += ':';

            } else if (this.data.totalTime > oneHour) {

                hours = '0:';

            } else {

                hours = '';

            }

            minutes = Math.floor(left / oneMinute);
            left = value - minutes * oneMinute;

            if (minutes) {

                minutes = '0'+ minutes;
                minutes += ':'

            } else if (this.data.totalTime > oneMinute) {

                minutes = '00:';

            } else {

                minutes = '';

            }

            seconds = Math.floor(left);

            if (seconds < 10) {

                seconds = '0' + seconds;

            }

            return `${hours}${minutes}${seconds}`;

        },
        getInfo : function () {

            return {
                totalTime : this.data.totalTime,
                currentTime : this.data.currentTime,
                src : this.conf.src
            }

        },
        to : function (time) {

            if (time === undefined) {

                time = this.$refs[`mor-audio-slider-${this.uiid}`].get();

            }

            this.data.currentTime = time;

            return this;

        },
        toggle : function (play) {

            if (play === undefined) {

                play = !this.data.playing;

            }

            if (!this.conf.src) {

                play = false;

            }

            this.data.playing = play;

            return this;

        }
    },
    created : function () {},
    mounted : function () {

        this.data.$audio = this.$el.querySelector('audio');
        this._syncTotalTime();
        this._syncCurrentTime();

        this.data.$audio.addEventListener('durationchange', this._syncTotalTime);
        this.data.$audio.addEventListener('timeupdate', this._syncCurrentTime);
        this.data.$audio.addEventListener('progress', this._syncLoadedTime);

        this.$watch('conf.src', () => {

            this.data.playing = false;
            this.data.$audio.currentTime = 0;
            this._syncCurrentTime();

        });

        this.$watch('data.playing', () => {

            if (this.data.playing) {

                this.data.$audio.play();

            } else {

                this.data.$audio.pause();

            }

        });

        this.$watch('data.currentTime', () => {

            if (!this.data.dontSyncCurrentTime) {
        
                this.data.$audio.currentTime = this.data.currentTime;

            }

        });

    }
};
</script>

<style lang="less" src="./index.less"></style>
