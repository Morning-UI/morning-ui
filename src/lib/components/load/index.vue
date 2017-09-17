<template>
    <i-load
        :_uiid="uiid"
        :class="[sizeClass]"

        :time="time"
        :note="note"
    >

    <template v-if="data.loaded">
        <template v-if="data.fail">
            <ui-center class="fill loadfail"><i class="morningicon">&#xe6ac; </i>&nbsp;加载失败</ui-center>
        </template>
        <template v-else>
            <slot></slot>
        </template>
    </template>
    <template v-else>
        <ui-center class="fill"><p class="loading"><i class="morningicon">&#xe703;</i><br/>{{conf.note}}</p></ui-center>
    </template>
        
    </i-load>
</template>
 
<script>
import UI                           from 'Common/ui';

const defaultTime = 200;

export default UI.extend({
    name : 'load',
    props : {
        time : {
            type : [Boolean, Number],
            default : defaultTime
        },
        note : {
            type : String,
            default : ''
        }
    },
    data : function () {

        return {
            conf : {
                time : this.time,
                note : this.note
            },
            data : {
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

            this.data.loaded = false;
            this.data.fail = false;

            this.loadPromise = new Promise((resolve, reject) => {

                this.loadResolve = resolve;
                this.loadReject = reject;

            });

            this.loadPromise
            .then(() => {

                this.data.loaded = true;

            }, () => {

                this.data.fail = true;
                this.data.loaded = true;

            });

            if (this.conf.time) {

                setTimeout(()=>{

                    this.data.loaded = true;

                }, this.conf.time);

            }

            return this;

        }
    },
    created : function () {

        this.$watch('data.loaded', () => {

            this.$emit('emit');

            if (this.data.fail) {

                this.$emit('fail');

            } else {

                this.$emit('done');

            }

        });
        
    },
    mounted : function () {

        this.reload();

    }
});
</script>

<style lang="less">
@import '~Common/var.less';

i-load{

    .loadfail{
        color: @colorLightBlue;
        .iconfont{
            font-size: inherit;
        }
    }

    .loading{

        margin: 0;
        text-align: center;
        color: @colorLightBlue;

        .morningicon{
            vertical-align: 1px;
            line-height: 1em;
            animation-name: rotation;
            animation-duration: 1s;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
            display: inline-block;
            color: @colorLightBlue;
        }

    }

    &.si-xxl {
        .loading {
            .morningicon{
                font-size: @fontSize*2.8;
            }
        }

        .loading,
        .loadfail{
            font-size: @fontSize*1.6;
        }
    }

    &.si-xl {
        .loading {
            .morningicon{
                font-size: @fontSize*2;
            }
        }

        .loading,
        .loadfail{
            font-size: @fontSize*1.3
        }
    }

    &.si-l {
        .loading {
            .morningicon{
                font-size: @fontSize*1.6;
            }
        }

        .loading,
        .loadfail{
            font-size: @fontSize*1;
        }
    }

    &.si-m {
        .loading {
            .morningicon{
                font-size: @fontSize*1;
            }
        }

        .loading,
        .loadfail{
            font-size: @fontSize*0.875;
        }
    }

    &.si-s {
        .loading {
            .morningicon{
                font-size: @fontSize*0.875;
            }
        }

        .loading,
        .loadfail{
            font-size: @fontSize*0.875;
        }
    }

    &.si-xs {
        .loading {
            .morningicon{
                font-size: @fontSize*0.8125;
            }
        }

        .loading,
        .loadfail{
            font-size: @fontSize*0.8125;
        }
    }

    &.si-xxs {
        .loading {
            .morningicon{
                font-size: @fontSize*0.75;
            }
        }

        .loading,
        .loadfail{
            font-size: @fontSize*0.75;
        }
    }

    // default statement
    &{
        .si-m;
    }

}
</style>
