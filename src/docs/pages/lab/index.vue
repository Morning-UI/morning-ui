<template>
    <div>
        <doc-header :category="category"></doc-header>
        <!-- darg icon https://h0.hucdn.com/open/201734/175363ad9c01a51b_200x200.png -->
        <div class="lab">
            <h1><i class="iconfont">&#xe615;</i>Morning Laboratory</h1>
            <div class="area">
                <ui-table :list="list" :col-set="[
                  {col: 'app', name: 'appId', hide: true},
                  {col: 'type', name: '类型', hide: true},
                  {col: 'tactics', name: '默认策略', hide: true},
                  {col: 'tags', name: '标签', hide: true},
                  {col: 'appName', name: '应用', sort: true, title: true, width: '20px', maxwidth: '60px'},
                  {col: 'key', name: 'KEY', sort: true, title: true, width: '50px'},
                  {col: 'desc', name: '描述', sort: true, title: true, width: '50px'},
                  {col: 'operate', name: '操作', title : true, width: '50px'},
                  {col: 'tagsText', name: '标签'},
                  {col: 'tacticsText', name: '默认策略', sort: true},
                  {col: 'typeText', name: '类型', sort: true}, 
                  {col: 'id', name: 'ID', sort: true}
             ]" show-col-name fixed-title-col="right-fixed"></ui-table>
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
            // list : [
            //     {app : 'Tim Boelaars', type : 20, tactics : 'male', tags : 'driver', appName: 'appName', key: 'key', desc: 'desc', operate: 'operate', tagsText: 'tagsText', tacticsText: 'tacticsText', typeText: 'typeText', id: 'id'},
            //     {app : 'Tim Boelaars', type : 20, tactics : 'male', tags : 'driver', appName: 'appName', key: 'key', desc: 'desc', operate: 'operate', tagsText: 'tagsText', tacticsText: 'tacticsText', typeText: 'typeText', id: 'id'},
            //     {app : 'Tim Boelaars', type : 20, tactics : 'male', tags : 'driver', appName: 'appName', key: 'key', desc: 'desc', operate: 'operate', tagsText: 'tagsText', tacticsText: 'tacticsText', typeText: 'typeText', id: 'id'},
            //     {app : 'Tim Boelaars', type : 20, tactics : 'male', tags : 'driver', appName: 'appName', key: 'key', desc: 'desc', operate: 'operate', tagsText: 'tagsText', tacticsText: 'tacticsText', typeText: 'typeText', id: 'id'},
            //     {app : 'Tim Boelaars', type : 20, tactics : 'male', tags : 'driver', appName: 'appName', key: 'key', desc: 'desc', operate: 'operate', tagsText: 'tagsText', tacticsText: 'tacticsText', typeText: 'typeText', id: 'id'},
            //     {app : 'Tim Boelaars', type : 20, tactics : 'male', tags : 'driver', appName: 'appName', key: 'key', desc: 'desc', operate: 'operate', tagsText: 'tagsText', tacticsText: 'tacticsText', typeText: 'typeText', id: 'id'},
            //     {app : 'Tim Boelaars', type : 20, tactics : 'male', tags : 'driver', appName: 'appName', key: 'key', desc: 'desc', operate: 'operate', tagsText: 'tagsText', tacticsText: 'tacticsText', typeText: 'typeText', id: 'id'},
            //     {app : 'Tim Boelaars', type : 20, tactics : 'male', tags : 'driver', appName: 'appName', key: 'key', desc: 'desc', operate: 'operate', tagsText: 'tagsText', tacticsText: 'tacticsText', typeText: 'typeText', id: 'id'},
            //     {app : 'Tim Boelaars', type : 20, tactics : 'male', tags : 'driver', appName: 'appName', key: 'key', desc: 'desc', operate: 'operate', tagsText: 'tagsText', tacticsText: 'tacticsText', typeText: 'typeText', id: 'id'}
            // ]
        };

    },
    components : {
        'doc-header' : DocHeader,
        'doc-footer' : DocFooter
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
