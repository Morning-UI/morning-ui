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

                <div style="width:300px;">
                    
                    <div v-for="(filter, key) in filterConfig" class="filter-wrapper">
                        <ui-textcolor color="extra-light-black">{{filter.name}}：</ui-textcolor>
                        <ui-select
                            v-if="key === 'url'"
                            group="filter"
                            :form-key="key"
                            :class="'select-'+key"
                            :default-value="[filterValue[key]]"
                            :hide-selected="false"
                            can-search
                            item-tip
                            item-tip-direct="left">
                            <template v-for="one in filter.value" >
                                <li :value="one.key">{{one.name}}</li>
                                <div class="item-tip">{{one.name}}</div>
                            </template>
                        </ui-select>
                        <ui-select
                            v-else
                            group="filter"
                            :form-key="key"
                            :class="'select-'+key"
                            :default-value="[filterValue[key]]"
                            :hide-selected="false">
                            <li v-for="one in filter.value" :value="one.key">{{one.name}}</li>
                        </ui-select>
                    </div>

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
            filterValue : {"url":"all","status":"1","err_level":"all","os":"all","appname":"all"},
            filterConfig : {"url":{"name":"URL","value":[{"key":"all","name":"全部"}]}}
        };

    },
    components : {
        'doc-header' : DocHeader,
        'doc-footer' : DocFooter
    },
    mounted : function () {

        this.filterConfig = {"url":{"name":"URL","value":[{"key":"all","name":"全部"},{"key":"http://m.beibei.com/weex/yuer_message.js","name":"http://m.beibei.com/weex/yuer_message.js"},{"key":"https://m.beibei.com/weex/yuer_message.js","name":"https://m.beibei.com/weex/yuer_message.js"},{"key":"http://m.beibei.com/weex/vip_award.js","name":"http://m.beibei.com/weex/vip_award.js"},{"key":"http://m.beibei.com/weex/vip.js","name":"http://m.beibei.com/weex/vip.js"},{"key":"http://m.beibei.com/weex/task_center.js","name":"http://m.beibei.com/weex/task_center.js"},{"key":"http://m.beibei.com/weex/sign_award_record.js","name":"http://m.beibei.com/weex/sign_award_record.js"},{"key":"http://m.beibei.com/weex/qc_list.js","name":"http://m.beibei.com/weex/qc_list.js"}]},"status":{"name":"错误状态","value":[{"key":"all","name":"全部"},{"key":"1","name":"未分配"},{"key":"2","name":"正在解决"},{"key":"3","name":"已解决"},{"key":"4","name":"已忽略"}]},"err_level":{"name":"错误级别","value":[{"key":"all","name":"全部"},{"key":"1","name":"错误"},{"key":"2","name":"警告"},{"key":"3","name":"信息"}]},"os":{"name":"操作系统","value":[{"key":"all","name":"全部"},{"key":"1","name":"Android"},{"key":"2","name":"iOS"}]},"appname":{"name":"应用","value":[{"key":"all","name":"全部"},{"key":"weixin","name":"微信"},{"key":"beibei","name":"贝贝"},{"key":"beidian","name":"贝店"}]}};

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
