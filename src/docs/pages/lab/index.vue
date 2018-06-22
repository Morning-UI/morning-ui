<template>
    <div>
        <doc-header :category="category"></doc-header>
        <!-- darg icon https://h0.hucdn.com/open/201734/175363ad9c01a51b_200x200.png -->
        <div class="lab">
            <h1><i class="iconfont">&#xe615;</i>Morning Laboratory</h1>
            <div class="area">
                <ui-select
                    ref="demo1"
                    group="demo"
                    form-key="demo"
                    :hide-selected="false"
                    :list="list"
                    can-search
                    item-t
                ></ui-select>
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
            pageSize : 30,
            list : []
        };

    },
    components : {
        'doc-header' : DocHeader,
        'doc-footer' : DocFooter
    },
    mounted : function () {

        setTimeout(() => {

            this.list = {"all":{"name":"全部","tip":"全部"},"http://m.beibei.com/weex/1yuan_tuan.js":{"name":"http://m.beibei.com/weex/1yuan_tuan.js","tip":"http://m.beibei.com/weex/1yuan_tuan.js"},"http://m.beibei.com/weex/bb_activity.js":{"name":"http://m.beibei.com/weex/bb_activity.js","tip":"http://m.beibei.com/weex/bb_activity.js"},"http://m.beibei.com/weex/new_product_2.js":{"name":"http://m.beibei.com/weex/new_product_2.js","tip":"http://m.beibei.com/weex/new_product_2.js"},"http://m.beibei.com/weex/s_vip/invite_input_code.js":{"name":"http://m.beibei.com/weex/s_vip/invite_input_code.js","tip":"http://m.beibei.com/weex/s_vip/invite_input_code.js"},"http://m.beibei.com/weex/vip.js":{"name":"http://m.beibei.com/weex/vip.js","tip":"http://m.beibei.com/weex/vip.js"},"http://m.beibei.com/weex/weekly_explosions.js":{"name":"http://m.beibei.com/weex/weekly_explosions.js","tip":"http://m.beibei.com/weex/weekly_explosions.js"}};


            morning.setGroup('demo', {
                demo : ['http://m.beibei.com/weex/1yuan_tuan.js']
            })

        }, 1000);
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
