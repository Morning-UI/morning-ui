<template>
    <div>
        <doc-header :category="category"></doc-header>
        <!-- darg icon https://h0.hucdn.com/open/201734/175363ad9c01a51b_200x200.png -->
        <div class="lab" style="width:1130px">
            <h1><i class="iconfont">&#xe615;</i>Morning Laboratory</h1>
            <div class="area">
                <div style="width:600px;display: flex;">

                    <ui-menu :menu="menu" class="block" current-menu="index"
    position="side"
  :position-current="true"
  color="white"
  :side-expand="true"
                    ></ui-menu>
                    <ui-datetimepicker form-name="日期时间"></ui-datetimepicker>
                    <ui-cascader :list-width="600" form-name="地址" :list="questionMap" can-search multi-select :collapse-limit="1"></ui-cascader>
<!-- side-collapse -->
                    <!-- <ui-tab>
                        <div slot="第一页">第一页</div>
                        <div slot="第二页">第二页</div>
                        <div slot="第三页">第三页</div>
                    </ui-tab> -->

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
            "questionMap": [
            {
                "id": 1,
                "name": "发货问题",
                "children": [
                {
                    "id": 7,
                    "name": "商家发货",
                    "children": [
                    {
                        "id": 8,
                        "name": "催发货（非预售、超时效）",
                        "children": null
                    },
                    {
                        "id": 9,
                        "name": "修改地址/手机",
                        "children": null
                    },
                    {
                        "id": 11,
                        "name": "少发/重量不足",
                        "children": null
                    },
                    {
                        "id": 13,
                        "name": "空包裹",
                        "children": null
                    },
                    {
                        "id": 53,
                        "name": "错发",
                        "children": null
                    },
                    {
                        "id": 54,
                        "name": "已发货未揽件",
                        "children": null
                    }]
                },
                {
                    "id": 10,
                    "name": "用户取消订单",
                    "children": [
                    {
                        "id": 12,
                        "name": "取消订单（下单超过2小时，全球购30分钟）",
                        "children": null
                    }]
                }]
            },
            {
                "id": 2,
                "name": "物流问题",
                "children": [
                {
                    "id": 14,
                    "name": "物流配送",
                    "children": [
                    {
                        "id": 15,
                        "name": "物流更新缓慢/停滞/不派送（四通一达/天天/邮政,超48h）",
                        "children": null
                    },
                    {
                        "id": 16,
                        "name": "物流更新缓慢/停滞/不派送（其他快递,超48h）",
                        "children": null
                    },
                    {
                        "id": 17,
                        "name": "非本人签收（四通一达/天天/邮政,超48h）",
                        "children": null
                    },
                    {
                        "id": 18,
                        "name": "非本人签收（其他快递,超48h）",
                        "children": null
                    },
                    {
                        "id": 19,
                        "name": "异地签收",
                        "children": null
                    },
                    {
                        "id": 20,
                        "name": "超区无法送达",
                        "children": null
                    },
                    {
                        "id": 21,
                        "name": "走件异常",
                        "children": null
                    },
                    {
                        "id": 55,
                        "name": "客户拒收，要求召回",
                        "children": null
                    }]
                }]
            },
            {
                "id": 3,
                "name": "收货问题",
                "children": [
                {
                    "id": 22,
                    "name": "质量问题",
                    "children": [
                    {
                        "id": 23,
                        "name": "做工差/材质差",
                        "children": null
                    },
                    {
                        "id": 24,
                        "name": "红屁股/起坨/断层/漏尿等",
                        "children": null
                    },
                    {
                        "id": 25,
                        "name": "过敏",
                        "children": null
                    },
                    {
                        "id": 26,
                        "name": "临期/过期",
                        "children": null
                    },
                    {
                        "id": 27,
                        "name": "质疑正品",
                        "children": null
                    }]
                },
                {
                    "id": 28,
                    "name": "描述不符",
                    "children": [
                    {
                        "id": 29,
                        "name": "商品与页面描述不符（尺寸/颜色/重量/大小等）",
                        "children": null
                    }]
                },
                {
                    "id": 34,
                    "name": "商品功能",
                    "children": [
                    {
                        "id": 35,
                        "name": "商品功能使用故障/维修",
                        "children": null
                    },
                    {
                        "id": 36,
                        "name": "商品安装咨询",
                        "children": null
                    }]
                }]
            },
            {
                "id": 4,
                "name": "商品相关",
                "children": [
                {
                    "id": 30,
                    "name": "发票相关",
                    "children": [
                    {
                        "id": 31,
                        "name": "开票咨询/发票信息核对等（联营可提工单）",
                        "children": null
                    },
                    {
                        "id": 32,
                        "name": "催发票进度/索要物流单号",
                        "children": null
                    }]
                }]
            },
            {
                "id": 5,
                "name": "售后服务",
                "children": [
                {
                    "id": 33,
                    "name": "赚红包问题",
                    "children": [
                    {
                        "id": 37,
                        "name": "红包取消/红包未到账",
                        "children": null
                    }]
                },
                {
                    "id": 38,
                    "name": "退款问题",
                    "children": [
                    {
                        "id": 39,
                        "name": "退款未到账",
                        "children": null
                    }]
                },
                {
                    "id": 40,
                    "name": "售后结果",
                    "children": [
                    {
                        "id": 41,
                        "name": "对仲裁/售后结果不满意",
                        "children": null
                    }]
                },
                {
                    "id": 42,
                    "name": "退货问题",
                    "children": [
                    {
                        "id": 43,
                        "name": "退货信息缺失",
                        "children": null
                    },
                    {
                        "id": 44,
                        "name": "地址寄错/退错货等",
                        "children": null
                    },
                    {
                        "id": 45,
                        "name": "商家拒绝退货/赔付/拒收商品",
                        "children": null
                    },
                    {
                        "id": 46,
                        "name": "运费待协商",
                        "children": null
                    }]
                },
                {
                    "id": 47,
                    "name": "补寄问题",
                    "children": [
                    {
                        "id": 48,
                        "name": "代发补寄",
                        "children": null
                    },
                    {
                        "id": 49,
                        "name": "联营补寄",
                        "children": null
                    },
                    {
                        "id": 50,
                        "name": "专区/大礼包/开店专区补寄",
                        "children": null
                    }]
                }]
            },
            {
                "id": 6,
                "name": "功能体验",
                "children": [
                {
                    "id": 51,
                    "name": "特约店主反馈（仅用于微信客服）",
                    "children": [
                    {
                        "id": 52,
                        "name": "特约店主其他反馈",
                        "children": null
                    }]
                }]
            },
            {
                "id": 59,
                "name": "其他",
                "children": [
                {
                    "id": 60,
                    "name": "非电商业务",
                    "children": [
                    {
                        "id": 61,
                        "name": "非电商业务",
                        "children": null
                    }]
                },
                {
                    "id": 62,
                    "name": "投诉客服",
                    "children": [
                    {
                        "id": 63,
                        "name": "投诉客服",
                        "children": null
                    }]
                }]
            }],
            listcascader : {
                "zj" : {
                    name : "浙江省浙江省浙江省浙江省浙江省",
                    children : {
                        "hz" : {
                            name : "杭州杭州杭州杭州杭州杭州杭州",
                            children : {
                                "xcq" : "下城区下城区下城区下城区下城区下城区",
                                "xhq" : "西湖区西湖区西湖区西湖区西湖区西湖区",
                                "jgq" : "江干区江干区江干区江干区江干区江干区"
                            }
                        },
                        "nb" : {
                            name : "宁波",
                            children : {
                                "jbq" : "江北区",
                                "zhq" : "镇海区"
                            }
                        },
                        "wz" : "温州"
                    }
                },
                "js" : {
                    name : "江苏省",
                    children : {
                        "nj" : {
                            name : "南京",
                            children : {
                                "xwq" : "玄武区",
                                "jnq" : "江宁区"
                            }
                        },
                        "sz" : "苏州"
                    }
                },
                "gd" : {
                    name : "广东省",
                    children : {
                        "gz" : "广州",
                        "sz" : "深圳",
                        "fs" : "佛山"
                    }
                }
            },
            menu : {"index":{"name":"<i class=\"iconfont icon-apps\"></i>首页","link":"/cloud/index"},"application":{"name":"<i class=\"iconfont icon-preview\"></i>应用管理","children":{"list":{"name":"应用列表","link":"/cloud/application/list"},"create":{"name":"创建应用","link":"/cloud/application/create"}}},"work":{"name":"<i class=\"iconfont icon-preview\"></i>容器服务","children":{"create":{"name":"创建容器","link":"/cloud/work/create"},"list":{"name":"容器列表","link":"/cloud/work/list"}}},"environment":{"name":"<i class=\"iconfont icon-book\"></i>环境管理","children":{"list":{"name":"环境列表","link":"/cloud/environment/list"}}}},
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
        reverseCascaderData(data, obj = {}) {
            if (!data) {
                return;
            }
            data.forEach((item) => {
                obj[item.id] = {
                    name: item.name,
                };
                if (item.children) {
                    obj[item.id].children = this.reverseCascaderData(item.children, obj[item.id].children);
                }
            });
            return obj;
        },
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
    created : function () {

        this.questionMap = this.reverseCascaderData(this.questionMap);

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
