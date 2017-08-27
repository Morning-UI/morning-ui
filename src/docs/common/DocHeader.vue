<template>
    <header>
        <div class="nav">
            <div class="logo">
                <img src="http://h0.hucdn.com/open/201734/8f299e45f6693260_200x200.png" alt="morning-ui">
            </div>
            <div class="name">Morning UI</div>
            <ul class="menu">

                <li><a :class="{current:isIndex}" href="index.html">HOME</a></li>
                <li><a :class="{current:isGuide}" href="guide.html">GUIDE</a></li>
                <li><a :class="{current:isComponent}" href="component.html">COMPONENT</a></li>
            </ul>
        </div>
    </header>
</template>

<script>
export default {
    props : {
        menu : String
    },
    computed : {
        isIndex : function () {
            return this.menu === 'home';
        },
        isGuide : function () {
            return this.menu === 'guide';
        },
        isComponent : function () {
            return this.menu === 'component';
        }
    }
};
</script>

<style lang="less">
header {
    width: 100%;
    background: #f1545f;
    height: 80px;
    font-family: PingFangSC-Thin, sans-serif;

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
        color: #fff;
        line-height: 80px;
        margin-left: 0px;
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
                color: #fff;
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
        }
    }
}
</style>
