<template>
    <div>
        <doc-header :category="category"></doc-header>
        <!-- darg icon https://h0.hucdn.com/open/201734/175363ad9c01a51b_200x200.png -->
        <div class="lab" style="width:1130px">
            <h1><i class="iconfont">&#xe615;</i>Morning Laboratory</h1>
            <div class="area">
                <div style="width:600px;height:60px;">
                    <ui-tab>
                        <div slot="key">
                            <ui-table :list="list"></ui-table>
                        </div>
                    </ui-tab>
                </div>
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
    
        return {
            btntext : '发送',
            list : [
                {name : 'Tim Boelaars', age : 20, gender : 'male', action : '<ui-btn color="success" size="xs">{{context.btntext}}</ui-btn> <ui-link color="minor" size="xs">详情</ui-link>'},
                {name : 'Andrew Colin Beck', age : 41, gender : 'female', action : '<ui-btn color="success" size="xs">{{context.btntext}}</ui-btn> <ui-link color="minor" size="xs">详情</ui-link>'},
                {name : 'Gustavo Zambelli', age : 23, gender : 'male', action : '<ui-btn color="success" size="xs">{{context.btntext}}</ui-btn> <ui-link color="minor" size="xs">详情</ui-link>'}
            ]
        };

    },
    components : {
        'doc-header' : DocHeader,
        'doc-footer' : DocFooter
    },
    methods : {
        echo : function (text) {
            alert(text);
        }
    },
    mounted : function () {
    }
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
