<template>
    <div>
        <doc-header :category="category"></doc-header>
        <!-- darg icon https://h0.hucdn.com/open/201734/175363ad9c01a51b_200x200.png -->
        <div class="lab" style="width:1130px">
            <h1><i class="iconfont">&#xe615;</i>Morning Laboratory</h1>
            <div class="area">

                <ui-select
                    multi-select
                    group="filter"
                    :default-value="filterValue"
                    :list="list"
                    v-model="filterUrls"
                    @value-change="changeUrls" 
                    can-search
                    :hidden-selected="false"
                >
                </ui-select>

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
            filterUrls : ["all"],
            filterValue : ["util.js"],
            list : {
                'util.js': {
                    name: 'util.js',
                    tip: 'util.js'
                },
                '/data/webroot/beidian_m/app/controllers/shop.js': {
                    name: '/data/webroot/beidian_m/app/controllers/shop.js',
                    tip: '/data/webroot/beidian_m/app/controllers/shop.js'
                },
                'all': {
                    name: '全部',
                    tip: '全部'
                },
                '/data/webroot/beidian_m/app/controllers/trade/similar-product.js': {
                    name: '/data/webroot/beidian_m/app/controllers/trade/similar-product.js',
                    tip: '/data/webroot/beidian_m/app/controllers/trade/similar-product.js'
                },
                '/data/webroot/beidian_m/app/helpers/middleware.js': {
                    name: '/data/webroot/beidian_m/app/helpers/middleware.js',
                    tip: '/data/webroot/beidian_m/app/helpers/middleware.js'
                },
                '/data/webroot/beidian_m/node_modules/html-minifier/src/htmlparser.js': {
                    name: '/data/webroot/beidian_m/node_modules/html-minifier/src/htmlparser.js',
                    tip: '/data/webroot/beidian_m/node_modules/html-minifier/src/htmlparser.js'
                }
            }
        };

    },
    components : {
        'doc-header' : DocHeader,
        'doc-footer' : DocFooter
    },
    methods : {
        echo : function (text) {
            console.log('value-change!');
        },
        changeUrls : function () {
            let tempUrls = this.filterUrls.slice(0);
            let newUrl = tempUrls[tempUrls.length - 1];

            console.log(newUrl);
            // 选中的是全部
            if (newUrl === 'all') {
                this.filterUrls = ['all'];
            } else if (tempUrls.indexOf('all') > -1) {
                tempUrls.splice(tempUrls.indexOf('all'), 1);
                this.filterUrls = tempUrls;
            }
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
