<template>
    <div>
        <doc-header :category="category"></doc-header>
        <!-- darg icon https://h0.hucdn.com/open/201734/175363ad9c01a51b_200x200.png -->
        <div class="lab">
            <h1><i class="iconfont">&#xe615;</i>Morning Laboratory</h1>
            <div class="area">
                
                <ui-select form-name="Select designer" multi-select can-search>
                    <li v-for="user in users" :value="user._id">{{user.name}}</li>
                </ui-select>

                <div style="width:300px;">
                    <ui-timepicker form-name="时间" :selectable-range="['08:30:00', '12:00:00']"></ui-timepicker>
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
            category : 'lab',
            users : [
                {_id : 1, name : 'Boelaars'},
                {_id : 2, name : 'Beck'},
                {_id : 3, name : 'Zambelli'},
                {_id : 4, name : 'Andrew'},
                {_id : 5, name : 'Katherine'},
                {_id : 6, name : 'Moynihan'},
            ]
        };

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
