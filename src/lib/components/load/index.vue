<template>
    <mor-load
        :_uiid="uiid"
        :class="[sizeClass]"

        :done-time="doneTime"
        :note="note"
    >

    <template v-if="data.loaded">
        <template v-if="data.fail">
            <morning-center class="fill loadfail"><i class="mo-icon mo-icon-warn-o"></i>&nbsp;加载失败</morning-center>
        </template>
        <template v-else>
            <slot></slot>
        </template>
    </template>
    <template v-else>

        <morning-center class="fill">
            <div class="loading">
                <div class="mo-loader">
                    <svg class="mo-loader-circular" viewBox="25 25 50 50">
                        <circle class="mo-loader-path" cx="50" cy="50" r="20" fill="none" stroke-width="4" stroke-miterlimit="10"/>
                    </svg>
                </div>
                <p>
                    {{conf.note}}
                </p>
            </div>
        </morning-center>
    </template>
        
    </mor-load>
</template>
 
<script>
const defaultDoneTime = 200;

export default {
    origin : 'UI',
    name : 'load',
    props : {
        doneTime : {
            type : [Boolean, Number],
            default : defaultDoneTime
        },
        note : {
            type : String,
            default : ''
        }
    },
    computed : {
        _conf : function () {

            return {
                doneTime : this.doneTime,
                note : this.note
            };

        }
    },
    data : function () {

        return {
            data : {
                loading : false,
                loaded : false,
                fail : false,
                loadPromise : null,
                loadResolve : null,
                loadReject : null
            }
        };

    },
    methods : {
        resolve : function () {

            this.loadResolve();

            return this;

        },
        reject : function () {

            this.loadReject();

            return this;

        },
        reload : function () {

            if (this.data.loading) {

                return this;

            }

            this.data.loading = true;
            this.data.loaded = false;
            this.data.fail = false;

            this.loadPromise = new Promise((resolve, reject) => {

                this.loadResolve = resolve;
                this.loadReject = reject;

            });

            this.loadPromise
                .then(() => {

                    this.data.loading = false;
                    this.data.loaded = true;

                }, () => {

                    this.data.loading = false;
                    this.data.fail = true;
                    this.data.loaded = true;

                });

            if (this.conf.doneTime) {

                setTimeout(() => {

                    this.data.loading = false;
                    this.data.loaded = true;

                }, this.conf.doneTime);

            }

            return this;

        }
    },
    created : function () {},
    mounted : function () {

        this.$watch('data.loaded', () => {

            this.$emit('emit');

            if (this.data.fail) {

                this.$emit('fail');

            } else {

                this.$emit('done');

            }

        });

        this.reload();

    }
};
</script>
