<template>
    <header :class="{index:isIndex}">
        <div class="nav">
            <div class="logo">
                <img src="http://h0.hucdn.com/open/201734/8f299e45f6693260_200x200.png" alt="morning-ui">
            </div>
            <div class="name">Morning UI</div>
            <ul class="menu">
                <li><a :class="{current:isIndex}" href="/index.html">HOME</a></li>
                <li><a :class="{current:isGuide}" href="/guide/introduction.html">GUIDE</a></li>
                <li><a :class="{current:isComponent}" href="/component/h.html">COMPONENT</a></li>
                <li><a target="_blank" href="https://github.com/Morning-UI/morning-ui">
                    <img v-if="isIndex" src="http://h0.hucdn.com/open/201744/f87561b8bb354ef8_32x32.png" class="githublogo" alt="GitHub">
                    <img v-else src="http://h0.hucdn.com/open/201744/d56df49a807a9fd0_32x32.png" class="githublogo" alt="GitHub">
                    GitHub
                </a></li>
                <!-- <li><a :class="{current:isCustom}" href="/custom.html">CUSTOM</a></li> -->
            </ul>
        </div>
    </header>
</template>

<script>
export default {
    props : {
        category : String
    },
    computed : {
        isIndex : function () {
            return this.category === 'home';
        },
        isGuide : function () {
            return this.category === 'guide';
        },
        isComponent : function () {
            return this.category === 'component';
        },
        isCustom : function () {
            return this.category === 'custom';
        }
    }
};
</script>

<style lang="less">
header {
    width: 100%;
    background: #333;
    height: 80px;

    .nav {
        width: 1000px;
        margin: 0 auto;
        position: relative;
    }

    .logo {
        display: inline-block;
        vertical-align: top;
        opacity: 0.8;

        img {
            width: 50px;
            height: 50px;
            margin-top: 15px;
            display: inline-block;
        }
    }

    .name {
        display: inline-block;
        vertical-align: top;
        color: #FFF;
        line-height: 80px;
        margin-left: 0;
        font-size: 26px;
        opacity: 0.8;
    }

    .menu{
        margin: 0;
        padding: 0;
        list-style: none;
        display: inline-block;
        position: absolute;
        right: 0;
        top: 0;

        li{
            display: inline-block;
            vertical-align: top;
            margin: 15px 10px;
            height: 50px;

            a {
                height: 50px;
                line-height: 50px;
                color: #FFF;
                opacity: 0.7;
                font-size: 13px;
                text-decoration: none;

                &:hover {
                    opacity: 0.8;
                }

                &.current {
                    opacity: 1;
                    font-weight: 600;
                }
            }

            .githublogo{
                vertical-align: text-bottom;
                width: 16px;
            }
        }
    }

    &.index{
        background: #FFF;

        .logo img{
            display: none;
        }

        .name {
            color: #000;
            font-size: 28px;
        }

        .menu li a {
            color: #333;
        }
    }
}
</style>
