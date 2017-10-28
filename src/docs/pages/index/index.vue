<template>
    <div>
        <doc-header :category="category"></doc-header>
        <!-- darg icon http://h0.hucdn.com/open/201734/175363ad9c01a51b_200x200.png -->
        <section class="s1">
            <div class="w1k center">
                <img class="mainLogo" src="http://h0.hucdn.com/open/201734/d693b26dc14f52a0_800x800.png" alt="morning-ui">
                <div class="keywork">
                    <span>Efficiency</span>
                    <span>Modern</span>
                    <span>Friendly</span>
                </div>
            </div>
        </section>
        <section class="s1 gray">
            <h1>起步</h1>
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
                    <h3>50+组件</h3>
                    <p class="desc">Morning UI有超过50个组件，丰富的组件为你构建的应用提供了有力的支持。</p>
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
        <footer>
            Under <a href="https://opensource.org/licenses/MIT" target="_blank">MIT Licence</a>
            <br>
            Copyright © 2015-2017 Early He
        </footer>
    </div>
</template>
 
<script>
import DocHeader                    from 'Docs/common/DocHeader.vue';

export default {
    data : function () {

        return {
            category : 'home'
        };

    },
    components : {
        'doc-header' : DocHeader
    }
};
</script>

<style lang="less">
@import '~Docs/common/common.less';

.w1k{
    width: 1110px;
    margin: 0 auto;
}
.center{
    text-align: center;
}
.s1{
    padding: 50px 0;

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
footer{
    font-size: 13px;
    color: #D6DDE5;
    padding: 30px 0;
    text-align: center;
    background: #303C4B;
    line-height: 1.4em;

    a,
    a:hover {
        color: #D6DDE5;
    }
}
</style>
