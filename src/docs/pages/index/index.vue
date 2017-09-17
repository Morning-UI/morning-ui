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
            <h1>How to use</h1>
        </section>
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
    width: 1100px;
    margin: 0 auto;
}
.center{
    text-align: center;
}
.s1{
    padding: 50px 0;

    .mainLogo {
        width: 300px;
        height: 300px;
        margin: 0 auto;
    }

    &.gray{
        background: #EEE;
    }

    h1 {
        text-align: center;
        font-weight: 400;
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
</style>
