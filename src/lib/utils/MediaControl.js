import GlobalEvent                  from 'Utils/GlobalEvent';

const oneHour = 3600;
const oneMinute = 60;
const maxVolume = 100;
const num10 = 10;

// must has : conf.src / .conf.autoplay / conf.allowFullscreen
let MediaControl = {
    mixins : [GlobalEvent],
    data : function () {

        return {
            data : {
                mcType : 'audio',
                mcPlaying : false,
                mc$media : null,
                mcTotalTime : 1,
                mcLoadedTimes : [],
                mcCurrentTime : 0,
                mcDontSyncCurrentTime : false,
                mcMuted : false,
                mcVolume : maxVolume,
                mcFullscreen : false
            }
        };

    },
    methods : {
        _mcSyncPlay : function () {

            this.data.mcPlaying = !this.data.mc$media.paused;

        },
        _mcSyncTotalTime : function () {

            this.data.mcTotalTime = Math.floor(this.data.mc$media.duration || 0);

        },
        _mcSyncCurrentTime : function () {

            let mediaSlider = this.$refs[`mor-media-slider-${this.uiid}`];

            this.data.mcDontSyncCurrentTime = true;
            this.data.mcCurrentTime = Math.floor(this.data.mc$media.currentTime || 0);

            if (mediaSlider) {
    
                mediaSlider.set(this.data.mcCurrentTime);

            }

            this.Vue.nextTick(() => {
            
                this.data.mcDontSyncCurrentTime = false;
            
            });

        },
        _mcSyncLoadedTime : function () {

            let i = 0;
            let mcLoadedTimes = [];

            while (i < this.data.mc$media.buffered.length) {

                mcLoadedTimes.push([
                    Math.ceil(this.data.mc$media.buffered.start(i)),
                    Math.floor(this.data.mc$media.buffered.end(i))
                ]);

                i++;

            }

            this.data.mcLoadedTimes = mcLoadedTimes;

        },
        _mcSyncVolume : function () {

            this.data.mcVolume = Math.floor(this.data.mc$media.volume * maxVolume);
            this.data.mcMuted = this.data.mc$media.muted;

        },
        _mcSyncFullscreen : function () {

            let fullscreenElement = document.fullscreenElement ||
                document.webkitFullscreenElement ||
                document.mozFullScreenElement;

            if (fullscreenElement === this.data.mc$media) {

                this.data.mcFullscreen = true;

            } else {

                this.data.mcFullscreen = false;

            }

        },
        _mcTimeFormat : function (value) {

            if (!this.conf.src ||
                this.data.mcTotalTime === 0) {

                return '00:00';

            }

            let hours = Math.floor(value / oneHour);
            let minutes = 0;
            let seconds = 0;
            let left = value - (hours * oneHour);

            if (hours) {

                hours += ':';

            } else if (this.data.mcTotalTime > oneHour) {

                hours = '0:';

            } else {

                hours = '';

            }

            minutes = Math.floor(left / oneMinute);
            left = value - (minutes * oneMinute);

            if (minutes) {

                minutes = `0${minutes}`;
                minutes += ':';

            } else if (this.data.mcTotalTime > oneMinute) {

                minutes = '00:';

            } else {

                minutes = '00:';

            }

            seconds = Math.floor(left);

            if (seconds < num10) {

                seconds = `0${seconds}`;

            }

            return `${hours}${minutes}${seconds}`;

        },
        _mcVolumeFormat : function (value) {

            return `${value}%`;

        },
        _mcPlay : function (play) {

            if (play === undefined) {

                play = !this.data.mcPlaying;

            }

            if (!this.conf.src) {

                play = false;

            }

            this.data.mcPlaying = play;

            return this;

        },
        _mcGetInfo : function () {

            let info = {
                totalTime : this.data.mcTotalTime,
                currentTime : this.data.mcCurrentTime,
                src : this.conf.src,
                muted : this.data.mcMuted,
                volume : this.data.mcVolume
            };

            if (this.data.mcType === 'video') {

                info.fullscreen = this.data.mcFullscreen;

            }

            return info;

        },
        _mcTo : function (time) {

            if (time === undefined) {

                time = this.$refs[`mor-media-slider-${this.uiid}`].get();

            }

            if (time > this.data.mcTotalTime) {

                time = this.data.mcTotalTime;

            } else if (time < 0) {

                time = 0;

            }

            this.data.mcCurrentTime = time;

            return this;

        },
        _mcMute : function (toggle) {

            if (toggle === undefined) {

                toggle = !this.data.mcMuted;

            }

            this.data.mcMuted = toggle;

            return this;

        },
        _mcVolume : function (value = 0) {

            if (value > maxVolume) {

                value = maxVolume;

            } else if (value < 0) {

                value = 0;

            }

            this.data.mcVolume = Math.floor(value);

            return this;

        },
        _mcFullscreen : function () {

            if (!this.conf.allowFullscreen) {

                return this;

            }

            this.data.mc$media.webkitRequestFullscreen();
            this.data.mcFullscreen = true;

            return this;

        }
    },
    mounted : function () {

        this.$watch('data.mc$media', () => {

            if (!this.data.mc$media) {

                return;

            }

            if (this.data.mc$media.tagName === 'VIDEO') {

                this.data.mcType = 'video';

            } else {

                this.data.mcType = 'audio';

            }

            this.data.mc$media.addEventListener('play', this._mcSyncPlay);
            this.data.mc$media.addEventListener('durationchange', this._mcSyncTotalTime);
            this.data.mc$media.addEventListener('timeupdate', this._mcSyncCurrentTime);
            this.data.mc$media.addEventListener('progress', this._mcSyncLoadedTime);
            this.data.mc$media.addEventListener('loadeddata', this._mcSyncLoadedTime);
            this.data.mc$media.addEventListener('volumechange', this._mcSyncVolume);

            if (this.data.mcType === 'video') {

                this._globalEventRemove('fullscreenchange', '_mcSyncFullscreen');
                this._globalEventRemove('webkitfullscreenchange', '_mcSyncFullscreen');
                this._globalEventAdd('fullscreenchange', '_mcSyncFullscreen');
                this._globalEventAdd('webkitfullscreenchange', '_mcSyncFullscreen');

            }

        }, {
            immediate : true
        });

        this.$watch('data.mcPlaying', () => {

            if (this.data.mcPlaying) {

                this.data.mc$media.play();
                this.$emit('play');
                this.$emit('play-change');

            } else {

                this.data.mc$media.pause();
                this.$emit('pause');
                this.$emit('play-change');

            }

        });

        this.$watch('data.mcCurrentTime', () => {

            if (!this.data.mcDontSyncCurrentTime) {

                this.data.mc$media.currentTime = this.data.mcCurrentTime;

            }

        });

        this.$watch('data.mcVolume', () => {

            this.data.mc$media.volume = this.data.mcVolume / maxVolume;
            this.$emit('volume-change');

        });

        this.$watch('data.mcMuted', () => {

            this.data.mc$media.muted = this.data.mcMuted;
            this.$emit('mute-change');

        });

        this.$watch('data.mcFullscreen', () => {

            if (this.data.mcType !== 'video') {

                return;

            }

            this.$emit('fullscreen-change');

        });

        this.$watch('conf.src', () => {

            this.data.mcPlaying = false;
            this.data.mc$media.currentTime = 0;
            this._mcSyncCurrentTime();

        });

        this.Vue.nextTick(() => {

            this._mcSyncTotalTime();
            this._mcSyncCurrentTime();

            this.$watch('conf.autoplay', () => {

                this.data.mc$media.autoplay = this.conf.autoplay;

            }, {
                immediate : true
            });

        });

    },
    beforeDestroy : function () {

        this._globalEventRemove('webkitfullscreenchange', '_mcSyncFullscreen');
        this._globalEventRemove('fullscreenchange', '_mcSyncFullscreen');

    }
};

export default MediaControl;
