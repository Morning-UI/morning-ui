<template>
    <doc-guide
        :page="page"
        :hasPadding="true" 
    >
    <script type="text/markdown">
    # 路线图

    ## 版本规范

    Morning UI采用[语义化版本控制规范](http://semver.org/lang/zh-CN/)。

    同时采用以下三种标记标示不同的版本：
    
    |标记|名称|说明|
    |-|-|-|-|-|
    |<ui-badge class="circle ver-stable" size="s" color="theme">Stable</ui-badge>|稳定版本|此版本中的各个功能都经过一段时间的测试及使用，非常稳定|
    |<ui-badge class="circle ver-beta" size="s" color="neutral-9">Beta</ui-badge>|公开测试版本|包含了一些新的特性，并且修复了大部分问题的版本，相对较为稳定|
    |<ui-badge class="circle ver-canary" size="s">Canary</ui-badge>|金丝雀版本|包含大量新特性的版本，这个版本是实验性的，可能存在较多的问题<br><ui-small><ui-textcolor color="neutral-6">为开发者及早期用户设计的版本</ui-textcolor></ui-small>|

    版本发布情况请查看：[更新日志](/guide/logs.html)。

    ## 更新日志规范

    更新日志包含了单个版本的变动，按变动类型分为：

    - 新特性
    - 改进
    - 修复
    - 废弃
    - 其他(包含文档、测试等变动)

    若是某个组件变动，需要写明组件的名字，如`ui-btn`。

    如果变动中包含了不兼容的变动，需要增加`升级注意事项`来写清楚变动情况及替代方案。

    ## 版本说明

    - `0.10.0` : <ui-badge size="xxs" color="warning">OUTDATE</ui-badge>Morning UI的首个版本
    - `0.11.0` : <ui-badge size="xxs" color="warning">OUTDATE</ui-badge>对标HMP的所有组件，已于2018年春季发布
    - `0.12.0` : <ui-badge size="xxs" color="success">CURRENT</ui-badge>对标Element UI组件，已于2019年初发布
    - `0.13.0` : <ui-badge size="xxs" color="neutral-9">DEVELOP</ui-badge>对标iView组件，更好的支持Admin系统，计划2019年冬季发布
    - `0.14.0` : <ui-badge size="xxs" color="neutral-2">PLAN</ui-badge>对标AntD组件，计划2020年春季发布
    - `1.0.0` : <ui-badge size="xxs" color="neutral-2">PLAN</ui-badge>支持Vue3，计划2020年夏季发布
    - `1.1.0` : <ui-badge size="xxs" color="neutral-2">PLAN</ui-badge>组件性能提升，计划2021年春季发布
    - `1.2.0` : <ui-badge size="xxs" color="neutral-2">PLAN</ui-badge>对标Semantic UI组件，计划2021年冬季发布
    - `1.3.0` : <ui-badge size="xxs" color="neutral-2">PLAN</ui-badge>支持在线定制主题
    - `1.4.0` : <ui-badge size="xxs" color="neutral-2">PLAN</ui-badge>对标Material UI
    
    ## 路线图

    <div class="roadmap">
        <div class="timeline">
            <div class="timepoint">
                <p>Dec 2019</p>
            </div>
            <div class="timepoint">
                <p>Mar 2020</p>
            </div>
            <div class="timepoint">
                <p>Jun 2020</p>
            </div>
            <div class="timepoint">
                <p>Sep 2020</p>
            </div>
            <div class="timepoint">
                <p>Dec 2020</p>
            </div>
            <div class="timepoint">
                <p>Mar 2021</p>
            </div>
            <div class="timepoint">
                <p>Jun 2021</p>
            </div>
            <div class="timepoint">
                <p>Sep 2021</p>
            </div>
        </div>
        <div class="versions">
            <div class="version">
                <p class="ver-title">0.12.0</p>
                <div class="ver-bar">
                    <div class="bar-dev noname" style="width:0px"></div>
                    <div class="bar-current" style="width:calc(81.25px / 3 * 2)"></div>
                    <div class="bar-maintenance" style="width:calc(81.25px / 3 * 3)"></div>
                </div>
            </div>
            <div class="version">
                <p class="ver-title">0.13.0</p>
                <div class="ver-bar">
                    <div class="bar-dev" style="width:calc(81.25px / 3 * 2)"></div>
                    <div class="bar-current" style="width:calc(81.25px / 3 * 5)"></div>
                    <div class="bar-maintenance" style="width:calc(81.25px / 3 * 3)"></div>
                </div>
            </div>
            <div class="version">
                <p class="ver-title">0.14.0</p>
                <div class="ver-bar">
                    <div class="bar-dev" style="margin-left:calc(81.25px / 3 * 4);width:calc(81.25px / 3 * 3)"></div>
                    <div class="bar-current" style="width:calc(81.25px / 3 * 4)"></div>
                    <div class="bar-maintenance" style="width:calc(81.25px / 3 * 9)"></div>
                </div>
            </div>
            <div class="version">
                <p class="ver-title">1.0.0</p>
                <div class="ver-bar">
                    <div class="bar-dev" style="margin-left:calc(81.25px / 3 * 6);width:calc(81.25px / 3 * 5)"></div>
                    <div class="bar-current" style="width:calc(81.25px / 3 * 9)"></div>
                    <div class="bar-maintenance" style="width:calc(81.25px / 3 * 3)"></div>
                </div>
            </div>
            <div class="version">
                <p class="ver-title">1.1.0</p>
                <div class="ver-bar">
                    <div class="bar-dev" style="margin-left:calc(81.25px / 3 * 17);width:calc(81.25px / 3 * 3)"></div>
                    <div class="bar-current" style="width:calc(81.25px / 3 * 4)"></div>
                </div>
            </div>
        </div>
    </div>


    </script>
    </doc-guide>
</template>
 
<script>
import DocGuide                    from 'Docs/common/DocGuide.vue';

export default {
    data : function () {

        return {
            page : 'roadmap'
        };

    },
    components : {
        'doc-guide' : DocGuide
    }
};
</script>

<style lang="less">
.ver-canary{
    background: #f5ab27 !important;
    border-color: #f5ab27 !important;
}
.roadmap{
    width: 100%;
    height: 310px;
    background: #e0e8ef;
    position: relative;

    .timeline{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: flex-end;
        padding-left: 100px;
        padding-right: 50px;
            
        .timepoint{
            display: flex;
            border-right: 1px #c1cad2 dashed;
            position: relative;
            width: 200px;

            > p{
                font-size: 12px;
                margin: 0;
                position: absolute;
                background: #e0e8ef;
                left: 100%;
                transform: translateX(-50%);
                width: 100px;
                text-align: center;
                padding: 0.5em 0;
                color: #666e75;
            }
        }
    }

    .versions{    
        position: absolute;
        width: 100%;
        height: calc(100% - 80px);
        top: 50px;
        left: 0;

        .version{
            width: 100%;
            height: 50px;
            align-items: center;
            display: flex;

            .ver-title{
                font-size: 16px;
                margin: 0;
                width: 80px;
                display: flex;
                justify-content: flex-end;
                align-items: center;
                color: #3e566b;
                padding-right: 5px;
            }

            .ver-bar{
                font-size: 14px;
                width: calc(100% - 80px);
                padding-left: 20px;
                height: 32px;
                display: flex;

                .bar-dev,
                .bar-current,
                .bar-maintenance{
                    height: 100%;


                    &:first-child{
                        border-left: none;
                    }

                    &:after{
                        content: 'current';
                        font-size: 12px;
                        transform: scale(0.8);
                        transform-origin: left;
                        display: block;
                        color: #fff;
                        text-transform: uppercase;
                        text-align: left;
                        white-space: nowrap;
                        margin-left: 5px;
                        line-height: 32px;
                        font-weight: 200; 
                    }

                    &.noname:after{
                        content: '';
                    }
                }

                .bar-dev{
                    background: #c3cbd2;

                    &:after{
                        content : 'develop'
                    }
                }

                .bar-current{
                    background: #56b151;
                    border-left: 1px #fff solid;

                    &:after{
                        content : 'current'
                    }
                }

                .bar-maintenance{
                    background: #f1a23b;
                    border-left: 1px #fff solid;

                    &:after{
                        content : 'maintenance'
                    }
                }
            }
        }
        
    }
}
</style>
