<template>
    <div>
        <doc-header :category="category"></doc-header>
        <!-- darg icon https://h0.hucdn.com/open/201734/175363ad9c01a51b_200x200.png -->
        <section class="s1">
            <div class="w1k center">
                <img class="mainLogo" src="https://h0.hucdn.com/open/201734/d693b26dc14f52a0_800x800.png" alt="morning-ui">
                <div class="keywork">
                    <span>Efficiency</span>
                    <span>Modern</span>
                    <span>Friendly</span>
                </div>
            </div>
        </section>
        <section class="s1 versioninfo">
            <p>全新Morning UI : </p>
            <a href="/guide/install.html">
                <ui-label color="silver" size="xs">0.10.31</ui-label>
            </a>
            <p>发布于2018年5月28日</p>
        </section>
        <section class="s1 gray">
            <h1>起步</h1>
            <div class="w900">
                <div class="lrBox">
                    <div class="left">
                        <h3>引入Vue.js及Morning UI</h3>
                        <p>首先获取<a href="https://cn.vuejs.org/v2/guide/installation.html#直接-lt-script-gt-引入" target="_blank">Vue.js</a>及<a href="/guide/install.html" target="_blank">Morning UI</a>，然后通过<code>&lt;script></code>将它们引入到页面中。</p>
                        <p>你也可以通过其它方式引入，详见：<a href="/guide/install.html">开始使用/安装</a></p>
                    </div>
                    <div class="right">
                        <pre>
                        <code class="language-html hljs xml">
&lt;script src="https://cdn.jsdelivr.net/npm/vue">&lt;/script>

&lt;link href="path-to-morning/morning-ui.css" rel="stylesheet">
&lt;script src="path-to-morning/morning-ui.js">&lt;/script>
                        </code>
                        </pre>
                    </div>
                </div>
                <div class="lrBox">
                    <div class="left">
                        <h3>初始化</h3>
                        <p>在使用组件之前需要先初始化Morning UI，可以在初始化时进行配置。</p>
                    </div>
                    <div class="right">
                        <pre>
                        <code class="language-js hljs">
Vue.use(morning);
                        </code>
                        </pre>
                    </div>
                </div>
                <div class="lrBox">
                    <div class="left">
                        <h3>使用组件</h3>
                        <p>Morning UI基于Vue.js的Components，所以你可以像使用原生DOM元素一样使用。</p>
                    </div>
                    <div class="right">
                        <pre>
                        <code class="language-html hljs xml">
&lt;ui-textinput form-name="E-Mail">&lt;/ui-textinput>
&lt;br>
&lt;ui-btn success>提交&lt;/ui-btn> &lt;ui-btn minor>取消&lt;/ui-btn>
                        </code>
                        </pre>
                    </div>
                </div>
                <div class="lrBox">
                    <div class="left">
                        <h3>完成！</h3>
                        <p>使用Morning UI只需简单三步。</p>
                        <p>接下来：
                            <br><a href="/guide/usage.html">了解Morning UI的更多用法</a>
                            <br><a href="/guide/becontributor.html">成为Morning UI的贡献者</a>
                        </p>
                    </div>
                    <div class="right">
                        <ui-textinput form-name="E-Mail"></ui-textinput>
                        <br>
                        <ui-btn success>提交</ui-btn> <ui-btn minor>取消</ui-btn>
                    </div>
                </div>
            </div>
        </section>
        <section class="s1">
            <div class="w1k col">
                <div class="c31 center">
                    <p class="icon">
                        <i class="iconfont">&#xe603;</i>
                    </p>
                    <h3>源于HMP UI</h3>
                    <p class="desc">HMP UI是面向桌面Web的UI库，在过去两年中被用在了各种场景。Morning UI起源于此。</p>
                </div>
                <div class="c31 center">
                    <p class="icon">
                        <i class="iconfont">&#xe641;</i>
                    </p>
                    <h3>60+组件</h3>
                    <p class="desc">Morning UI有超过60个组件，丰富的组件为你构建的应用提供了有力的支持。</p>
                </div>
                <div class="c31 center">
                    <p class="icon">
                        <i class="iconfont">&#xe602;</i>
                    </p>
                    <h3>开源社区</h3>
                    <p class="desc">Morning UI基于MIT协议开源，你可以免费使用它。我们欢迎开发者加入到Morning UI的社区中。</p>
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
            color: #999;
        }

        &:last-child{
            border-right: none;
        }
    }

    &.gray{
        background: #EEE;
    }

    h1 {
        text-align: center;
        font-weight: 400;
        font-size: 54px;
    }
}
.keywork{
    width: 900px;
    font-size: 0;
    padding: 0 100px;
    margin: 50px 0 0;

    span {
        display: inline-block;
        font-size: 36px;
        vertical-align: top;
        width: 30%;
        margin: 0 1.25%;
        color: #000;
        text-align: center;
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
