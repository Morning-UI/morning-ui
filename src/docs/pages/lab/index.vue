<template>
    <div>
        <doc-header :category="category"></doc-header>
        <!-- darg icon https://h0.hucdn.com/open/201734/175363ad9c01a51b_200x200.png -->
        <div class="lab">
            <h1><i class="iconfont">&#xe615;</i>Morning Laboratory</h1>
            <div class="area">

            <span id="demo1" style="position: absolute;bottom: -585px;left: 20px;z-index: 9999;" >鼠标悬浮显示小提示</span>
            <ui-tip target="#demo1" placement='left'>鼠标悬浮显示小提示鼠标悬浮显示小提示鼠标悬浮显示小提示鼠标悬浮显示小提示</ui-tip>
                
                <ui-dropdown >
                    <ui-btngroup slot="showbtn">
                        <ui-btn color="success">立即购买</ui-btn>
                        <!-- 这里的morningicon组件附带，可直接使用 -->
                        <ui-btn color="minor" emitbtn><i class="morningicon">&#xe6b1;</i></ui-btn>
                    </ui-btngroup>
                    <ui-btn color="info">加入购物车加入购物车加入购物车加入购物车</ui-btn>
                    <!-- 这里的iconfont组件不附带 -->
                    <ui-btn color="white"><i class="iconfont">&#xe6e2;</i> 收藏</ui-btn>
                    <ui-btn color="white"><i class="iconfont">&#xe70a;</i> 分享</ui-btn>
                </ui-dropdown>

            </div>
        </div>
        <doc-footer></doc-footer>
    </div>
</template>
 
<script>
import DocHeader                    from 'Docs/common/DocHeader.vue';
import DocFooter                    from 'Docs/common/DocFooter.vue';

export default {
    data : function () {

        return {};

    },
    components : {
        'doc-header' : DocHeader,
        'doc-footer' : DocFooter
    },
    mounted : () => {}
};
</script>

<style lang="less">
@import '~Docs/common/common.less';

.lab{
    width: 1000px;
    padding: 20px;
    margin: 0 auto;
    border-left: 1px #eee solid;
    border-right: 1px #eee solid;

    .area{
        display: block;
        padding-top: 20px;
        min-height: 800px;
    }

    > h1{
        margin: 0;
        background: #efefef;
        font-weight: 400;
        vertical-align: middle;
        font-size: 14px;
        display: inline-block;
        padding-right: 10px;

        .iconfont{
            font-size: 30px;
            vertical-align: middle;
            display: inline-block;
            background: #f24b64;
            color: #fff;
            padding: 2px 5px;
            margin-right: 10px;
        }
    }
}
</style>
