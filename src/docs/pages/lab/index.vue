<template>
    <div>
        <doc-header :category="category"></doc-header>
        <!-- darg icon https://h0.hucdn.com/open/201734/175363ad9c01a51b_200x200.png -->
        <div class="lab" style="width:1130px">
            <h1><i class="iconfont">&#xe615;</i>Morning Laboratory</h1>
            <div class="area">
                <div style="width:300px;">

                    <ui-table :list="list" multi-select show-col-name :col-set="colset"></ui-table>

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
            colset : [
                {col : 'name', name : 'Name'},
                {col : 'age', name : 'Age'},
                {col : 'gender', name : 'Gender'},
                {col : 'job', name : 'Job'}
            ],
            list : [
                {name : '<div>Tim, Boelaars</div><div>123123</div>', age : 20, gender : 'male', job : 'driver'},
                {name : 'Andrew" Colin Beck', age : 41, gender : 'female', job : 'engineer'},
                {name : 'Gustavo, "Zambelli', age : 23, gender : 'male', job : 'teacher'},
                {name : 'Victor Erixon', age : 15, gender : 'female', job : 'doctors'},
                {name : 'Emir Ayouni', age : 21, gender : 'male', job : `
                    <div id="asd">123123123</div>
                    <ui-popover target="#asd">
                        <ui-radio :list="context.radioList" v-model="context.flags[1]" color="success" size="xs" @value-change="context.echo"></ui-radio>
                    </ui-popover>
                `}
            ],
            radioList : {
                "1" : "1",
                "2" : "2"
            },
            flags : {
                0 : '0',
                1 : '1'
            },
            rule : {
                test : {
                    required : true,
                    message : '姓名必须填写'
                },
                test2 : {
                    required : true,
                    message : '姓名必须填写'
                },
                test3 : {
                    required : true,
                    message : '姓名必须填写'
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
            console.log('5555!');
        },
        echo2 : function (text) {
            console.log('5599!');
        },
        dialogHide : function () {
            window.morning.findVM('demo1').set(undefined);
        }
    },
    mounted : function () {

        // window.morning.findVM('demo1').state = 'disabled';
        // window.morning.findVM('demo1').set(["emir"]);
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
