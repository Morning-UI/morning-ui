<template>
    <mor-audio
        :_uiid="uiid"
        :class="[]"

        :src="src"
        :auto-play="autoPlay"
        :loop-play="loopPlay"
        :hide-time="hideTime"
        :hide-progress="hideProgress"
        :autoplay="autoplay"
    >
    
    <div class="audio-box">
        <div class="play" @click="play()" :class="{'no-audio':!conf.src}">
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
        <div class="progress" v-show="!conf.hideProgress">
            <morning-slider
                :ref="'mor-audio-slider-'+uiid"
                :state="conf.src ? 'normal' : 'readonly'"
                :min="0"
                :max="data.totalTime || 1"
                :step="1"
                :mark-range="data.loadedTimes"
                :tipFormatter="_timeFormat"

                @value-change="to"
            ></morning-slider>
        </div>
        <div class="time" v-show="!conf.hideTime">
            <span :style="{
                width : _timeFormat(data.currentTime).length+'ch'
            }">{{_timeFormat(data.currentTime)}}</span>
            <span>/</span>
            <span :style="{
                width : _timeFormat(data.totalTime).length+'ch'
            }">{{_timeFormat(data.totalTime)}}</span>
        </div>
        <div class="volume" :id="'mor-audio-volume-'+uiid" @click="mute(undefined)">
            <i class="mo-icon mo-icon-volume-off" v-if="data.volume === 0 || data.muted"></i>
            <i class="mo-icon mo-icon-volume-1" v-if="!data.muted && data.volume > 0 && data.volume < 50"></i>
            <i class="mo-icon mo-icon-volume-2" v-if="!data.muted && data.volume >= 50 && data.volume < 100"></i>
            <i class="mo-icon mo-icon-volume-3" v-if="!data.muted && data.volume === 100"></i>
        </div>
        <morning-tip
            class="mor-audio-volume"
            :ref="'mor-audio-volumetip-'+uiid"
            :target="'#mor-audio-volume-'+uiid"
            @hide="_volumeTipHide"
        >
            <div class="slider">
                <morning-slider
                    :ref="'mor-audio-volume-slider-'+uiid"
                    :state="(conf.src && !data.muted) ? 'normal' : 'readonly'"
                    :min="0"
                    :max="100"
                    :step="1"
                    :tipFormatter="_volumeFormat"
                    v-model="data.volume"
                ></morning-slider>
            </div>
        </morning-tip>
      <!--   <div class="more-tools" :id="'mor-moretools-'+uiid" emitbtn>
            <i class="mo-icon mo-icon-more"></i>
        </div> -->
    </div>

    <audio>
        <source :src="conf.src">
    </audio>
        
    </mor-audio>
</template>
 
<script>
const oneHour = 3600;
const oneMinute = 60;
const maxVolume = 100;
const num10 = 10;

export default {
    origin : 'UI',
    name : 'audio',
    props : {
        src : {
            type : String,
            default : ''
        },
        hideTime : {
            type : Boolean,
            defualt : false
        },
        hideProgress : {
            type : Boolean,
            defualt : false
        },
        autoplay : {
            type : Boolean,
            default : false
        }
    },
    computed : {
        _conf : function () {

            return {
                src : this.src,
                hideTime : this.hideTime,
                hideProgress : this.hideProgress,
                autoplay : this.autoplay
            };

        }
    },
    data : function () {

        return {
            data : {
                $audio : null,
                playing : false,
                totalTime : 1,
                loadedTimes : [],
                currentTime : 0,
                volume : maxVolume,
                muted : false,
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

            let i = 0;
            let loadedTimes = [];

            while (i < this.data.$audio.buffered.length) {

                loadedTimes.push([
                    Math.ceil(this.data.$audio.buffered.start(i)),
                    Math.floor(this.data.$audio.buffered.end(i))
                ]);

                i++;

            }

            this.data.loadedTimes = loadedTimes;

        },
        _syncVolume : function () {

            this.data.volume = Math.floor(this.data.$audio.volume * maxVolume);
            this.data.muted = this.data.$audio.muted;

        },
        _syncPlay : function () {

            this.data.playing = !this.data.$audio.paused;

        },
        _volumeFormat : function (value) {

            return `${value}%`;

        },
        _timeFormat : function (value) {

            if (!this.conf.src ||
                this.data.totalTime === 0) {

                return '00:00';

            }

            let hours = Math.floor(value / oneHour);
            let minutes = 0;
            let seconds = 0;
            let left = value - (hours * oneHour);

            if (hours) {

                hours += ':';

            } else if (this.data.totalTime > oneHour) {

                hours = '0:';

            } else {

                hours = '';

            }

            minutes = Math.floor(left / oneMinute);
            left = value - (minutes * oneMinute);

            if (minutes) {

                minutes = `0${minutes}`;
                minutes += ':';

            } else if (this.data.totalTime > oneMinute) {

                minutes = '00:';

            } else {

                minutes = '';

            }

            seconds = Math.floor(left);

            if (seconds < num10) {

                seconds = `0${seconds}`;

            }

            return `${hours}${minutes}${seconds}`;

        },
        volume : function (value = 0) {

            if (value > maxVolume) {

                value = maxVolume;

            } else if (value < 0) {

                value = 0;

            }

            this.data.volume = Math.floor(value);

            return this;

        },
        getInfo : function () {

            return {
                totalTime : this.data.totalTime,
                currentTime : this.data.currentTime,
                src : this.conf.src,
                muted : this.data.muted,
                volume : this.data.volume
            };

        },
        mute : function (toggle) {

            if (toggle === undefined) {

                toggle = !this.data.muted;

            }

            this.data.muted = toggle;

            return this;

        },
        to : function (time) {

            if (time === undefined) {

                time = this.$refs[`mor-audio-slider-${this.uiid}`].get();

            }

            if (time > this.data.totalTime) {

                time = this.data.totalTime;

            } else if (time < 0) {

                time = 0;

            }

            this.data.currentTime = time;

            return this;

        },
        play : function (play) {

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
        this.data.$audio.addEventListener('loadeddata', this._syncLoadedTime);
        this.data.$audio.addEventListener('volumechange', this._syncVolume);
        this.data.$audio.addEventListener('play', this._syncPlay);

        this.$watch('conf.autoplay', () => {

            this.data.$audio.autoplay = this.conf.autoplay;

        }, {
            immediate : true
        });

        this.$watch('data.muted', () => {

            this.data.$audio.muted = this.data.muted;
            this.$emit('mute-change');

        });

        this.$watch('data.volume', () => {

            this.data.$audio.volume = this.data.volume / maxVolume;
            this.$emit('volume-change');

        });

        this.$watch('conf.src', () => {

            this.data.playing = false;
            this.data.$audio.currentTime = 0;
            this._syncCurrentTime();

        });

        this.$watch('data.playing', () => {

            if (this.data.playing) {

                this.data.$audio.play();
                this.$emit('play');
                this.$emit('play-change');

            } else {

                this.data.$audio.pause();
                this.$emit('pause');
                this.$emit('play-change');

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
