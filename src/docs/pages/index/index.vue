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
                    <a href="/guide/introduction.html" class="start">起步</a>
                    <a href="https://github.com/Morning-UI/morning-ui">GitHub</a>
                </div>
            </div>
        </section>
        <section class="s1 versioninfo">
            <p>全新Morning UI : </p>
            <a href="/guide/install.html">
                <ui-label color="silver" size="xs">0.12.14</ui-label>
            </a>
            <p>发布于2019年3月29日</p>
        </section>
        <section class="s1 silver">
            <div class="w1k center">
                <div class="title">
                    应有尽有
                    <div class="sub">
                        超过80款组件，几乎包含了构建WEB应用的所有需要。
                    </div>
                </div>
                <div class="vs">
                    <div class="logo">
                        <img src="http://morning-ui-image.test.upcdn.net/bootstrap-stack.png" width="240" alt="">
                    </div>
                    <h2 class="vsname">
                        对比Bootstrap
                    </h2>
                    <p class="vsdesc">
                        内置丰富的交互组件，搭建应用时无需挑选额外的扩展。<br>使应用更一致，组件之间协作更顺畅。
                    </p>
                    <div class="bars">
                        <div class="bar">
                            <h3>Morning UI</h3>
                            <div class="bar-box">
                                <div class="bar-same" style="width:calc(350 / 83 * 42px)"></div>
                                <div class="bar-more morning" style="width:calc(350 / 83 * 41px)"></div>
                            </div>
                        </div>
                        <div class="bar">
                            <h3>Bootstrap</h3>
                            <div class="bar-box">
                                <div class="bar-same" style="width:calc(350 / 83 * 42px)"></div>
                                <div class="bar-more bootstrap" style="width:calc(350 / 83 * 8px)"></div>
                            </div>
                        </div>
                        <div class="label">
                            <p>
                                <i class="same"></i>
                                <span>均有组件</span>
                            </p>
                            <p>
                                <i class="morning"></i>
                                <span>Morning专有组件</span>
                            </p>
                            <p>
                                <i class="bootstrap"></i>
                                <span>Bootstrap专有组件</span>
                            </p>
                        </div>
                    </div>
                </div>

                <div class="vs">
                    <div class="logo">
                        <img src="http://morning-ui-image.test.upcdn.net/semantic-ui-logo-png-transparent.png" width="200" alt="">
                    </div>
                    <h2 class="vsname">
                        对比Semantic UI
                    </h2>
                    <p class="vsdesc">
                        一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的桌面端组件库。
                    </p>
                    <div class="bars">
                        <div class="bar">
                            <h3>Morning UI</h3>
                            <div class="bar-box">
                                <div class="bar-same" style="width:calc(350 / 83 * 33px)"></div>
                                <div class="bar-more morning" style="width:calc(350 / 83 * 50px)"></div>
                            </div>
                        </div>
                        <div class="bar">
                            <h3>Semantic UI</h3>
                            <div class="bar-box">
                                <div class="bar-same" style="width:calc(350 / 83 * 33px)"></div>
                                <div class="bar-more semantic" style="width:calc(350 / 83 * 11px)"></div>
                            </div>
                        </div>
                        <div class="label">
                            <p>
                                <i class="same"></i>
                                <span>均有组件</span>
                            </p>
                            <p>
                                <i class="morning"></i>
                                <span>Morning专有组件</span>
                            </p>
                            <p>
                                <i class="semantic"></i>
                                <span>Semantic UI专有组件</span>
                            </p>
                        </div>
                    </div>
                </div>

                <div class="vs">
                    <div class="logo">
                        <img src="https://cdn.worldvectorlogo.com/logos/element-ui-1.svg" width="190" alt="">
                    </div>
                    <h2 class="vsname">
                        对比Element UI
                    </h2>
                    <p class="vsdesc">
                        包含众多的纯样式的布局组件，快速搭建页面原型。
                    </p>
                    <div class="bars">
                        <div class="bar">
                            <h3>Morning UI</h3>
                            <div class="bar-box">
                                <div class="bar-same" style="width:calc(350 / 83 * 44px)"></div>
                                <div class="bar-more morning" style="width:calc(350 / 83 * 39px)"></div>
                            </div>
                        </div>
                        <div class="bar">
                            <h3>Element UI</h3>
                            <div class="bar-box">
                                <div class="bar-same" style="width:calc(350 / 83 * 44px)"></div>
                                <div class="bar-more element" style="width:calc(350 / 83 * 2px)"></div>
                            </div>
                        </div>
                        <div class="label">
                            <p>
                                <i class="same"></i>
                                <span>均有组件</span>
                            </p>
                            <p>
                                <i class="morning"></i>
                                <span>Morning专有组件</span>
                            </p>
                            <p>
                                <i class="element"></i>
                                <span>Element UI专有组件</span>
                            </p>
                        </div>
                    </div>
                </div>

                <div class="vs">
                    <div class="logo">
                        <img src="https://static.oschina.net/uploads/logo/iview-admin_kz5oX.svg" width="220" alt="">
                    </div>
                    <h2 class="vsname">
                        对比iView UI
                    </h2>
                    <p class="vsdesc">
                        iView 是一套基于 Vue.js 的开源 UI 组件库，主要服务于 PC 界面的中后台产品。
                    </p>
                    <div class="bars">
                        <div class="bar">
                            <h3>Morning UI</h3>
                            <div class="bar-box">
                                <div class="bar-same" style="width:calc(350 / 83 * 47px)"></div>
                                <div class="bar-more morning" style="width:calc(350 / 83 * 36px)"></div>
                            </div>
                        </div>
                        <div class="bar">
                            <h3>iView UI</h3>
                            <div class="bar-box">
                                <div class="bar-same" style="width:calc(350 / 83 * 47px)"></div>
                                <div class="bar-more iview" style="width:calc(350 / 83 * 7px)"></div>
                            </div>
                        </div>
                        <div class="label">
                            <p>
                                <i class="same"></i>
                                <span>均有组件</span>
                            </p>
                            <p>
                                <i class="morning"></i>
                                <span>Morning专有组件</span>
                            </p>
                            <p>
                                <i class="iview"></i>
                                <span>iView UI专有组件</span>
                            </p>
                        </div>
                    </div>
                </div>

                <div class="vs">
                    <div class="logo">
                        <img src="http://morning-ui-image.test.upcdn.net/antd.svg" width="210" alt="">
                    </div>
                    <h2 class="vsname">
                        对比Ant Design
                    </h2>
                    <p class="vsdesc">
                        包含众多的纯样式的布局组件，快速搭建页面原型。
                    </p>
                    <div class="bars">
                        <div class="bar">
                            <h3>Morning UI</h3>
                            <div class="bar-box">
                                <div class="bar-same" style="width:calc(350 / 83 * 55px)"></div>
                                <div class="bar-more morning" style="width:calc(350 / 83 * 28px)"></div>
                            </div>
                        </div>
                        <div class="bar">
                            <h3>Ant Design</h3>
                            <div class="bar-box">
                                <div class="bar-same" style="width:calc(350 / 83 * 55px)"></div>
                                <div class="bar-more antd" style="width:calc(350 / 83 * 8px)"></div>
                            </div>
                        </div>
                        <div class="label">
                            <p>
                                <i class="same"></i>
                                <span>均有组件</span>
                            </p>
                            <p>
                                <i class="morning"></i>
                                <span>Morning专有组件</span>
                            </p>
                            <p>
                                <i class="antd"></i>
                                <span>Ant Design专有组件</span>
                            </p>
                        </div>
                    </div>
                </div>

                <a href="/guide/comparison.html" class="comparison">查看完整对比</a>
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
                        <!-- <p>完成上述步骤后即可看到如同右侧的组件。</p> -->
                    </div>
                    <div class="right">
                        <div style="width: 320px;text-align:center;margin: 0 auto;">
                            <ui-textinput form-name="E-Mail"></ui-textinput>
                            <br>
                            <ui-btn color="success">提交</ui-btn> <ui-btn color="minor">取消</ui-btn>
                        </div>
                    </div>
                </div>
                <div class="more">
                    <a href="/guide/usage.html" class="usage">了解更多用法</a><br>
                    <a href="/guide/becontributor.html" class="becontributor">成为贡献者</a>
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

                <a href="/component/index.html" class="component">查看组件文档</a>
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

        let $bars = document.querySelectorAll('.bars');

        window.addEventListener('scroll', () => {

            for (let $bar of $bars.values()) {

                if ($bar.className.indexOf('show') === -1 &&
                    $bar.getBoundingClientRect().top < (window.innerHeight)) {

                    setTimeout(() => {
                        
                        $bar.classList.add('show');

                    }, 400);

                }

            }

        });

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

        *:not(mor-btn) > a{
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
.vs{
    width: 100%;
    height: 360px;
    position: relative;

    &:nth-child(2){
        margin: 70px 0 0 0;
    }

    .logo{    
        position: absolute;
        top: 40px;
        left: 110px;
        width: 300px;
        text-align: center;
    }

    .vsname,
    .bars{
        right: 40px;
    }

    .vsname{    
        position: absolute;
        top: 50px;
        width: 570px;
        font-weight: 400;
        font-size: 40px;
        text-align: left;
        margin: 0;
        padding: 0 0 10px 0;
        border-bottom: 1px #333 solid;
    }

    .vsdesc{
        position: absolute;
        top: 110px;
        width: 610px;
        right: 0;
        padding-right: 50px;
        text-align: left;
        font-size: 14px;
        box-sizing: border-box;
        line-height: 1.6em;
    }

    .bars{
        position: absolute;
        top: 190px;
        width: 600px;
        text-align: left;

        .bar{
            width: 100%;
            padding: 6px 0;
            font-size: 0;

            h3{
                display: inline-block;
                width: 120px;
                font-size: 16px;
                font-weight: 400;
                text-align: right;
                margin: 0;
            }

            .bar-box{
                height: 16px;
                display: inline-block;
                left: 150px;
                width: 30px;
                vertical-align: top;
                padding-left: 30px;
                box-sizing: border-box;
                white-space: nowrap;
                transition: 0.65s;
                overflow: hidden;
                margin: 1px 0;
                transition-timing-function: cubic-bezier(0.36, 0.02, 0, 1.04);

                .bar-same{
                    background: #c1cdd8;
                    height: 100%;
                    width: 50%;
                    display: inline-block;
                }

                .bar-more{
                    height: 100%;
                    width: 50%;
                    display: inline-block;

                    &.morning{
                        background: #f14865;
                    }

                    &.bootstrap{
                        background: #844fd1;
                    }

                    &.antd{
                        background: #1286ff;
                    }

                    &.semantic{
                        background: #34bdb2;
                    }

                    &.element{
                        background: #20a0ff;
                    }

                    &.iview{
                        background: #0c9;
                    }
                }
            }
        }

        &.show{
            .bar-box{
                width: 380px;
            }
        }
    }

    .label{
        font-size: 0;
        margin-top: 30px;
        text-align: center;

        p{    
            margin: 0 10px;
            font-size: 0;
            display: inline-block;
            vertical-align: top;

            i{
                width: 24px;
                height: 10px;
                background: #c1cdd8;
                display: inline-block;
                vertical-align: top;
                margin: 2px 6px 0 2px;

                &.morning{
                    background: #f14865;
                }

                &.bootstrap{
                    background: #844fd1;
                }

                &.antd{
                    background: #1286ff;
                }

                &.semantic{
                    background: #34bdb2;
                }

                &.element{
                    background: #20a0ff;
                }

                &.iview{
                    background: #0c9;
                }
            }

            span{
                font-size: 12px;
                color: #333;
                display: inline-block;
            }
        }
    }
}

.more{
    padding: 80px 0 30px 0;
    width: 100%;
}

.comparison,
.component,
.usage{
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

.usage{
    color: #fff;
    background: #45505C;

    &:hover{
        color: #fff;
        background: #303C4B;
    }
}

.becontributor{
    font-size: 13px;
    text-decoration: none;
    color: #45505C;
    margin: 0.5em 0 0 0;
    display: inline-block;

    &:hover{
        color: #17212D;
    }
}
</style>
