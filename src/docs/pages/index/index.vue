<template>
    <div>
        <doc-header :category="category"></doc-header>
        <!-- darg icon https://h0.hucdn.com/open/201734/175363ad9c01a51b_200x200.png -->
        <section class="s1">
            <div class="w1k center">
                <img class="mainLogo" src="http://morning-ui-image.test.upcdn.net/logo.png" alt="morning-ui">
                <div class="libdesc">
                    现代、高效、友善的桌面组件库
                </div>
                <div class="quick">
                    <a href="" class="start">起步</a>
                    <a href="https://github.com/Morning-UI/morning-ui">GitHub</a>
                </div>
            </div>
        </section>
        <section class="s1 versioninfo">
            <p>全新Morning UI : </p>
            <a href="/guide/install.html">
                <ui-label color="silver" size="xs">0.11.0</ui-label>
            </a>
            <p>发布于2018年6月18日</p>
        </section>
        <section class="s1 silver">
            <div class="w1k center">
                <div class="title">
                    应有尽有
                    <div class="sub">
                        超过60款组件，几乎包含了构建WEB应用的所有需要。
                    </div>
                </div>
            </div>
        </section>
        <section class="s1">
            <div class="w1k center">
                <div class="title">
                    即刻开始
                    <div class="sub">
                        只需三行代码，即可立即使用。
                    </div>
                </div>
            </div>
        </section>
        <section class="s1 gray">
            <div class="w1k center">
                <div class="title">
                    轻松完成
                    <div class="sub">
                        寻找、复制、粘贴，就好了。
                    </div>
                </div>
            </div>
        </section>
        <section class="s1">
            <div class="w1k col">
                <div class="c31 center">
                    <p class="icon">
                        <i class="iconfont">&#xe617;</i>
                    </p>
                    <h3>贡献者</h3>
                    <p class="desc">感谢以下贡献者：<br><br>
                        <a href="https://github.com/EarlyH">Early He</a><br>
                        <a href="https://github.com/echoZQ">echoZQ</a><br>
                        <a href="https://github.com/CFDylan">CFDylan</a><br>
                    </p>
                </div>
                <div class="c31 center">
                    <p class="icon">
                        <i class="iconfont">&#xe609;</i>
                    </p>
                    <h3>灵感来源</h3>
                    <p class="desc">
                        Morning UI受到以下项目的启发：
                        <br>
                        <a href="https://getbootstrap.com/" target="_blank">Bootstrap</a>、
                        <a href="https://semantic-ui.com/" target="_blank">Semantic UI</a>、
                        <a href="https://ant.design/" target="_blank">Ant Design</a>、
                        <a href="http://element.eleme.io/" target="_blank">Element UI</a>、
                        <a href="https://materializecss.com/" target="_blank">Materialize</a>、
                        <a href="https://www.iviewui.com/" target="_blank">iView</a>、
                        <a href="https://material.angular.io/" target="_blank">Angular Material</a>、
                        <a href="https://getuikit.com/" target="_blank">UIKit</a>
                        <br>
                        在此感谢。
                    </p>
                </div>
                <div class="c31 center">
                    <p class="icon">
                        <i class="iconfont">&#xe602;</i>
                    </p>
                    <h3>一起创造</h3>
                    <p class="desc">Morning UI基于<a href="https://opensource.org/licenses/MIT">MIT协议</a>开源。<br>如果你同样感兴趣，欢迎加入到我们的社区中。<br>与我一起创造它！<br><br><a href="/guide/becontributor.html">贡献者指南</a></p>

                </div>
            </div>
        </section>
        <doc-footer></doc-footer>
    </div>
</template>
 
<script>
import hljs                         from 'highlight.js';
import DocHeader                    from 'Docs/common/DocHeader.vue';
import DocFooter                    from 'Docs/common/DocFooter.vue';

export default {
    data : function () {

        return {
            category : 'home'
        };

    },
    components : {
        'doc-header' : DocHeader,
        'doc-footer' : DocFooter
    },
    mounted : () => {

        hljs.initHighlightingOnLoad();

    }
};
</script>

<style lang="less">
@import '~Docs/common/common.less';
@import '~Npm/highlight.js/styles/hopscotch.css';

.w1k{
    width: 1110px;
    margin: 0 auto;
}
.w900{
    width: 900px;
    margin: 0 auto;
}
.center{
    text-align: center;
}
.s1{
    padding: 50px 0;

    &.versioninfo{
        padding: 5px 0;
        text-align: center;
        border-top: 1px #eee solid;
        font-size: 13px;
        color: #999;

        p{
            display: inline-block;
        }
    }

    .mainLogo {
        width: 260px;
        height: 260px;
        margin: 0 auto;
    }

    .col{
        font-size: 0;
    }

    .c31{
        display: inline-block;
        width: 370px;
        padding: 20px 0;
        border-right: 1px #eee solid;
        box-sizing: border-box;
        vertical-align: top;

        >.icon{
            >.iconfont{
                font-size: 60px;
                color: #444;
            }
        }

        >h3{
            font-size: 20px;
        }

        >.desc{
            font-size: 13px;
            padding: 0 40px;
            text-align: center;
            line-height: 1.4em;
            color: #888;

            a{
                color: #888;
                text-decoration: underline;
            }
        }

        &:last-child{
            border-right: none;
        }
    }

    &.gray{
        background: #EEE;

        .title{
            color: #312e2e;

            .sub{
                color: #7f7c7c;
            }
        }
    }

    &.silver{
        background: #E2E8EE;
    }

    h1 {
        text-align: center;
        font-weight: 400;
        font-size: 54px;
    }
}
.title{
    color: #303C4B;
    font-size: 48px;
    padding: 20px 0;

    .sub{
        font-size: 16px;
        color: #7C8BA0;
        padding: 15px 0;
    }
}
.libdesc{
    padding: 35px 0 22px 0;
    width: 100%;
    font-size: 30px;
}
.quick{
    width: 100%;
    text-align: center;
    padding: 0 0 20px 0;

    > a{
        font-size: 16px;
        text-decoration: none;
        color: #45505C;
        padding: 10px 25px;
        border-radius: 5em;
        border: 1px #45505C solid;
        margin: 0 0.3em;
        display: inline-block;

        &:hover{
            color: #17212D;
            border-color: #17212D;
        }
    }

    .start{
        color: #fff;
        background: #45505C;

        &:hover{
            color: #fff;
            background: #303C4B;
        }
    }
}
.lrBox{
    font-size: 0;
    border-bottom: 1px #e0e0e0 solid;
    padding-bottom: 20px;

    &:last-child{
        border-bottom: none;
    }

    .left,
    .right{
        width: 50%;
        display: inline-block;
        padding: 20px;
        box-sizing: border-box;
        font-size: 14px;
        vertical-align: middle;

        h3{
            font-size: 28px;
            font-weight: 400;
        }

        p{
            font-size: 15px;
            line-height: 1.4em;
        }

        a{
            color: #000;
            padding: 0 5px;
        }

        pre{
            font-size: 13px;
        }
    }
}
</style>
