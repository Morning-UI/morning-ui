<template>
    

    <div>


    <div style="width:100%">
        <ui-grid>
            <div class="xs-c-2 s-c-4 m-c-6 l-c-8 xl-c-10" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">col</div>
            <div class="xs-c-20 s-c-16 m-c-12 l-c-8 xl-c-4" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">col</div>
            <div class="xs-c-2 s-c-4 m-c-6 l-c-8 xl-c-10" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">col</div>
        </ui-grid>
    </div>
    
        <doc-header :category="category"></doc-header>
        <!-- darg icon https://h0.hucdn.com/open/201734/175363ad9c01a51b_200x200.png -->
        <div class="lab" style="width:1130px">
            <h1><i class="iconfont">&#xe615;</i>Morning Laboratory</h1>
            <div class="area">
                <div style="width:300px;">
                        <ui-colorpicker
        form-name="姓名"
        :default-value="'#AAAAAA'"
        @value-change="echo"
    ></ui-colorpicker>

    <!-- <ui-textinput @value-change="echo"></ui-textinput> -->
    <ui-btn @emit="val = 2;">v-model change</ui-btn>

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
            val : '#333333'
        };

    },
    components : {
        'doc-header' : DocHeader,
        'doc-footer' : DocFooter
    },
    methods : {
        echo : function (text) {
            console.log('value-change!');
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
