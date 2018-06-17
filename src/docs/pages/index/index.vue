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
                        只需四行代码，即可立即使用。
                    </div>
                </div>
                <div class="lrBox">
                    <div class="left">
                        <h3>引入</h3>
                        <p>在页面中引入Vue.js及Morning UI<br>你也可以通过其它方式引入，详见：<a href="/guide/install.html">开始使用/安装</a></p>
                    </div>
                    <div class="right">
                        <pre>
                        <code class="language-html hljs xml">
&lt;script src="https://cdn.jsdelivr.net/npm/vue">&lt;/script>

&lt;link href="https://cdn.jsdelivr.net/npm/morning-ui/dist/morning-ui.min.css" rel="stylesheet">
&lt;script src="https://cdn.jsdelivr.net/npm/morning-ui/dist/morning-ui.min.js">&lt;/script>
                        </code>
                        </pre>
                    </div>
                </div>
                <div class="lrBox">
                    <div class="left">
                        <h3>初始化</h3>
                        <p>在使用组件之前需要先初始化Morning UI<br>在初始化时可以进行配置，详见：<a href="/guide/init.html">基础/初始化</a></p>
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
                        <h3>使用</h3>
                        <p>Morning UI基于Vue.js的Components，所以你可以像使用原生DOM元素一样使用。</p>
                    </div>
                    <div class="right">
                        <pre>
                        <code class="language-html hljs xml">
&lt;div style="width: 320px;text-align:center;margin: 0 auto;">
    &lt;ui-textinput form-name="E-Mail">&lt;/ui-textinput>
    &lt;br>
    &lt;ui-btn color="success">提交&lt;/ui-btn> &lt;ui-btn color="minor">取消&lt;/ui-btn>
&lt;/div>
                        </code>
                        </pre>
                    </div>
                </div>
                <div class="lrBox">
                    <div class="left">
                        <h3>完成！</h3>
                        <p>完成上述步骤后即可看到如同右侧的组件。<br><br>接下来：<br><a href="/guide/usage.html">了解Morning UI的更多用法</a>
                            <br><a href="/guide/becontributor.html">成为Morning UI的贡献者</a></p>
                    </div>
                    <div class="right">
                        <div style="width: 320px;text-align:center;margin: 0 auto;">
                            <ui-textinput form-name="E-Mail"></ui-textinput>
                            <br>
                            <ui-btn color="success">提交</ui-btn> <ui-btn color="minor">取消</ui-btn>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="s1 gray">
            <div class="w1k center">
                <div class="title">
                    轻松完成
                    <div class="sub">
                        寻找、复制、微调，就好了。
                    </div>
                </div>
                <div class="img-slider">
                    <div class="imgs">
                        <img src="http://morning-ui-image.test.upcdn.net/5.png" :class="{show: (index === 0)}">
                        <img src="http://morning-ui-image.test.upcdn.net/2.png" :class="{show: (index === 1)}">
                        <img src="http://morning-ui-image.test.upcdn.net/4.png" :class="{show: (index === 2)}">
                    </div>
                    <div class="switch">
                        <i :class="{current : (index === 0)}" @click="next"></i>
                        <i :class="{current : (index === 1)}" @click="next"></i>
                        <i :class="{current : (index === 2)}" @click="next"></i>
                    </div>
                </div>
                <p class="img-note">
                    Morning UI的文档中包含了大量的示例，找到你想要的，复制到你的项目中，稍作微调，就可以用了！
                </p>
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
            category : 'home',
            index : 0,
            sliderTimer : null
        };

    },
    components : {
        'doc-header' : DocHeader,
        'doc-footer' : DocFooter
    },
    methods : {
        next : function () {

            let index = this.index + 1;

            if (index > 2) {

                index = 0;

            }

            this.index = index;

            clearTimeout(this.sliderTimer);
            this.sliderTimer = setTimeout(() => {

                this.next();

            }, 3600);

        }
    },
    mounted : function () {

        hljs.initHighlightingOnLoad();

        this.sliderTimer = setTimeout(() => {

            this.next();

        }, 3600);

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
    padding: 50px 20px;
    text-align: left;
    position: relative;

    &:last-child{
        border-bottom: none;
    }

    .right{
        position: relative;
        left: 40%;
    }

    .left,
    .right{
        width: 60%;
        display: inline-block;
        padding: 20px;
        box-sizing: border-box;
        font-size: 14px;
        vertical-align: middle;

        h3{
            font-size: 32px;
            font-weight: 400;
        }

        p{
            line-height: 1.4em;
            color: #888;
            margin: 20px 0 0 0;
            text-align: center;
            font-size: 13px;
            padding: 0 20px;
        }

        a{
            color: #000;
            padding: 0 5px;
        }

        pre{
            font-size: 13px;
            margin: 0;
            padding: 0;
            vertical-align: top;
            font-size: 0;

            code{
                font-size: 13px;
            }
        }
    }

    .left{
        width: 40%;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);

        h3{
            margin: 0;
            text-align: center;
        }
    }
}
.img-slider{
    .switch{
        padding: 20px 0;
        text-align: center;

        i{
            position: relative;
            display: inline-block;
            background: #cdd3da;
            height: 10px;
            width: 10px;
            border-radius: 10px;
            cursor: pointer;
            transition: 0.2s;
            

            &:hover{
                background: #A8B3C2;
            }
        }

        i.current{
            width: 20px;
            background: #f14865;
        }
    }
}
.imgs{
    padding: 2px;
    width: 640px;
    background: #fff;
    margin: 0 auto;
    border: 1px #eee solid;
    border-radius: 5px;
    height: 580px;
    position: relative;

    img{
        position: absolute;
        width: 640px;
        left: 2px;
        top: 50%;
        transform: translateY(-50%);
        opacity: 0;
        transition: 0.2s;

        &.show{
            opacity: 1;
        }
    }
}
.img-note{
    font-size: 18px;
    margin: 0;
    padding: 50px 100px 50px 100px;
}
</style>
