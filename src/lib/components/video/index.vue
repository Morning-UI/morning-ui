<template>
    <mor-video
        :_uiid="uiid"
        :class="[]"

        :src="src"
        :poster="poster"
        :hide-time="hideTime"
        :hide-progress="hideProgress"
        :autoplay="autoplay"
        :allow-fullscreen="allowFullscreen"
    >
        <video
            :src="conf.src"
            :poster="conf.poster"

            @click="_mcPlay()"
        ></video>

        <div class="mo-media-control">
            <div class="play" @click="_mcPlay()" :class="{'no-media':!conf.src}">
                <i
                    class="mo-icon mo-icon-play"
                    v-if="!data.mcPlaying"
                    :id="'mor-media-play-'+uiid"
                ></i>
                <i
                    class="mo-icon mo-icon-pause"
                    v-if="data.mcPlaying"
                ></i>
                <morning-tip
                    v-if="!conf.src"
                    :target="'#mor-media-play-'+uiid"
                    color="extra-light-black"
                >
                    无视频
                </morning-tip>
            </div>

            <div class="progress" v-show="!conf.hideProgress">
                <morning-slider
                    :ref="'mor-media-slider-'+uiid"
                    :state="conf.src ? 'normal' : 'readonly'"
                    :min="0"
                    :max="data.mcTotalTime || 1"
                    :step="1"
                    :mark-range="data.mcLoadedTimes"
                    :tipFormatter="_mcTimeFormat"

                    @value-change="to"
                ></morning-slider>
            </div>

            <div class="time" v-show="!conf.hideTime">
                <span :style="{
                    width : _mcTimeFormat(data.mcCurrentTime).length+'ch'
                }">{{_mcTimeFormat(data.mcCurrentTime)}}</span>
                <span>/</span>
                <span :style="{
                    width : _mcTimeFormat(data.mcTotalTime).length+'ch'
                }">{{_mcTimeFormat(data.mcTotalTime)}}</span>
            </div>

            <div class="fullscreen tools" @click="_mcFullscreen" v-if="conf.allowFullscreen">
                <i class="mo-icon mo-icon-fullscreen"></i>
            </div>

            <div class="volume tools" :id="'mor-media-volume-'+uiid" @click="_mcMute(undefined)">
                <i class="mo-icon mo-icon-volume-off" v-if="data.mcVolume === 0 || data.mcMuted"></i>
                <i class="mo-icon mo-icon-volume-1" v-if="!data.mcMuted && data.mcVolume > 0 && data.mcVolume < 50"></i>
                <i class="mo-icon mo-icon-volume-2" v-if="!data.mcMuted && data.mcVolume >= 50 && data.mcVolume < 100"></i>
                <i class="mo-icon mo-icon-volume-3" v-if="!data.mcMuted && data.mcVolume === 100"></i>
            </div>

            <morning-tip
                class="mor-media-volume"
                :ref="'mor-media-volumetip-'+uiid"
                :target="'#mor-media-volume-'+uiid"
            >
                <div class="slider">
                    <morning-slider
                        :ref="'mor-media-volume-slider-'+uiid"
                        :state="(conf.src && !data.mcMuted) ? 'normal' : 'readonly'"
                        :min="0"
                        :max="100"
                        :step="1"
                        :tipFormatter="_mcVolumeFormat"
                        v-model="data.mcVolume"
                    ></morning-slider>
                </div>
            </morning-tip>
        </div>
    </mor-video>
</template>
 
<script>
import MediaControl                 from 'Utils/MediaControl';

export default {
    origin : 'UI',
    name : 'video',
    mixins : [MediaControl],
    props : {
        src : {
            type : String,
            default : ''
        },
        poster : {
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
        },
        allowFullscreen : {
            type : Boolean,
            default : true
        }
    },
    computed : {
        _conf : function () {

            return {
                src : this.src,
                poster : this.poster,
                hideTime : this.hideTime,
                hideProgress : this.hideProgress,
                autoplay : this.autoplay,
                allowFullscreen : this.allowFullscreen
            };

        }
    },
    data : function () {

        return {
            data : {}
        };

    },
    methods : {
        volume : function (...args) {

            return this._mcVolume(...args);

        },
        getInfo : function (...args) {

            return this._mcGetInfo(...args);

        },
        mute : function (...args) {

            return this._mcMute(...args);

        },
        to : function (...args) {

            return this._mcTo(...args);

        },
        play : function (...args) {

            return this._mcPlay(...args);

        }
    },
    created : function () {},
    mounted : function () {

        this.data.mc$media = this.$el.querySelector('video');

    }
};
</script>
