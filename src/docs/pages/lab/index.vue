<template>
    <div>
        <doc-header :category="category"></doc-header>
        <!-- darg icon https://h0.hucdn.com/open/201734/175363ad9c01a51b_200x200.png -->
        <div class="lab" style="width:1130px">
            <h1><i class="iconfont">&#xe615;</i>Morning Laboratory</h1>
            <div class="area">
                <div style="width:1200px;display: flex;">

                    <ui-menu :menu="menu" class="block" current-menu="index"
    position="side"
  :position-current="true"
  color="white"
  :side-expand="true"
                    ></ui-menu>
                    <ui-datetimepicker form-name="日期时间"></ui-datetimepicker>
                    <ui-cascader :list-width="600" form-name="地址" :list="questionMap" can-search multi-select :collapse-limit="1"></ui-cascader>
                    <ui-table :list="list" :col-set="colset" :show-col-name="true" export-csv></ui-table>

<!-- side-collapse -->
                    <!-- <ui-tab>
                        <div slot="第一页">第一页</div>
                        <div slot="第二页">第二页</div>
                        <div slot="第三页">第三页</div>
                    </ui-tab> -->

                </div>

                        <ui-select
            form-name="Select designer"
            can-search
            multi-select
            :list="{'14745975069@chatroom':'贝昇，你好、贝店山姆店长、就你瘦！','8810264846@chatroom':'Kitty助手测试群（1）','21903437226@chatroom':'李散群聊（1）','8936276395@chatroom':'kitty（01）','23219436758@chatroom':'李散诗人','17255269942@chatroom':'李散是个小哥哥呀','18786869675@chatroom':'木子吕、贝店哈德森店长、木子吕的小号、贝店才哲店长','8752264958@chatroom':'Kitty助手测试群（2）','8411456684@chatroom':'木俊哈','8580426625@chatroom':'群名称是啥55，文山改的','15792960819@chatroom':'Alex助手测试群（2）','23612636513@chatroom':'Kira、贝店乔纳森店长、贝店哈德森店长22、略略略□□','4675782836@chatroom':'贝店店长家族2','13362966213@chatroom':'木子吕、贝店山姆店长、拉拉、贝店文山、贝店乔纳森店长、wxid_l7japme3wkbj22','15400968725@chatroom':'11527384','15944968409@chatroom':'1111111111111111','15030968895@chatroom':'QQ WWW WWW','13083963036@chatroom':'李散助手测试群（1）','23098037432@chatroom':'贝店哈德森店长、贝店沃尔顿店长','8871272822@chatroom':'WWW','22093036753@chatroom':'希望可以谢娜','14717973357@chatroom':'贝点 贝昇、贝店山姆店长、贝店昊嘉店长、贝店晴虹店长','21840437827@chatroom':'','22852537798@chatroom':'wxid_sfd43kdy794422、贝店山姆店长、就你瘦！','13891968190@chatroom':'木子吕、李散、木子吕的小号','14598969086@chatroom':'店主擅自拉群','13649968515@chatroom':'5678','14740968585@chatroom':'2222222','21820939170@chatroom':'木子吕、贝店哈德森店长、华莱士','21993137423@chatroom':'wxid_awggu4ldnnj722、wxid_4pwatz2j7mya22、wxid_lo728hkyv9b622、wxid_w0h167ek82522、wxid_1c4fj109ouud22、w...','18943873522@chatroom':'你好群哈哈','22462741742@chatroom':'sssddd进攻','18324473999@chatroom':'备注哈的僧、木子吕的小号、贝店才哲店长','4909754201@chatroom':'一粒、木由、Mr.wang、呙 、褚思洁洁洁洁、呀、7块、这只□□ 有点傻、微笑、 冰淇淋、翼龙、张修嘉、8喜、请  勿  打   扰、杜庆佳、02□□、淡定、农夫三拳有点疼         　...','18691974097@chatroom':'木子吕、贝店哈德森店长、木子吕的小号','23682241418@chatroom':'群备注测试群','18899076238@chatroom':'buge、wxid_bcc1q0z6ye7l22、木子吕的小号、Teapot','18985176886@chatroom':'张义（一⭐️一义）、NEC 十分光荣','12497249868@chatroom':'小蓝杯~券分享','1843569209@chatroom':'南大-00CS-上海帮','3265957830@chatroom':'南大00CS','7269092821@chatroom':'初中一班','12134956365@chatroom':'2019红包雨一直下','3020313939@chatroom':'贝贝小伙伴2群','496516434@chatroom':'贝贝研发中心','5802253862@chatroom':'iOS架构组&PMO','12407263867@chatroom':'贝管家iOS审核问题处理','3740197705@chatroom':'00cs四班','1014487900@chatroom':'飲む・打つ・買う','23466436586@chatroom':'软件问题解决群','5398481353@chatroom':'贝贝研发部','6431895041@chatroom':'李思学、张义','15162916463@chatroom':'张义（一️一义）、苏打绿绿、柚子','10323210900@chatroom':'客户端架构','5274426861@chatroom':'ios审核，广告问题','9687180673@chatroom':'张义','8617165469@chatroom':'贝贝iOS审核问题','9618105449@chatroom':'10.1日18:10接13020222522 ','5449553998@chatroom':'丽江公寓白云苑3-4-202交易群','8843989781@chatroom':'jakill、张义（一️一义）、郑超','5684285012@chatroom':'育儿亲子团队','1076051455@chatroom':'贝贝iOS','5531377306@chatroom':'遇见、张义（一️一义）、weihao','5620083853@chatroom':'weihao、X、这个西瓜有点甜  □□','5629858307@chatroom':'张义（一️一义）、R□□心一旦、X','10230077852@chatroom':'张义（一️一义）、weihao、X','9785026294@chatroom':'b1域名劫持问题','4354380141@chatroom':'张义（一️一义）、房产砖家-黄涛、Gemini-星爷','5778653189@chatroom':'614 今天今天 端午快乐团建聚餐','5330660000@chatroom':'魅力之城','5544622451@chatroom':'福星高照刘平、Gemini-星爷、知足常乐张福星','9627009622@chatroom':'张义（一️一义）、X、tailang','4504330295@chatroom':'备胎计划','4793285502@chatroom':'张义（一️一义）、房产砖家-黄涛、Gemini-星爷','4577230958@chatroom':'张义（一️一义）、weihao、郑超','7479119238@chatroom':'电商-特卖研发','5281071435@chatroom':'张义（一️一义）、weihao、郑超','7067153354@chatroom':'张义（一️一义）、张阳、曾英佩','5117070385@chatroom':'weihao、郑超、X','4871033700@chatroom':'张义（一️一义）、weihao、镜子像月亮','5105033878@chatroom':'张义（一️一义）、weihao、郑超','4629017096@chatroom':'张义（一️一义）、weihao、郑超','6694196500@chatroom':'□□贝贝技术应急响应小组','7615832600@chatroom':'张义（一️一义）、沈水','3247725811@chatroom':'NJU上海基友团','7142067983@chatroom':'架构研发','8094113398@chatroom':'良伦Allen、rikki、小萍','6953003551@chatroom':'架构研发','2034907372@chatroom':'贝贝共享技术','2845769942@chatroom':'遇见、文武之道、刘凯','2791451600@chatroom':'大奶牛、王瑾、婉清','1864983170@chatroom':'特卖&架构6.25团建','2458160865@chatroom':'张义（一️一义）、Amichael、liyh','1756153509@chatroom':'张义（一️一义）、Amanda Luo、Gemini-星爷','2197496188@chatroom':'沈水、Gemini-星爷、张义（一️一义）','1240244088@chatroom':'z0e.、张阳、Yami','416968021@chatroom':'张义（一️一义）、周恒磊','158970136@chatroom':'张义（一️一义）、Gemini-星爷','163860267@chatroom':'张义（一️一义）、Connie、Gemini-星爷','813100136@chatroom':'张义（一️一义）、杨震、Gemini-星爷','4869286238@chatroom':'魅力之城','4443463343@chatroom':'iOS基础问题排查群','17234176435@chatroom':'约个时间一起吃饭吧','22503341929@chatroom':'L1-贝店官方群16班-糖果班','9441148965@chatroom':'党中央领导委员会','18894277651@chatroom':'张义（一️一义）、辰辰、NEC 十分光荣','23601242066@chatroom':'L1-贝店官方60班--汤圆班','23488141935@chatroom':'L1-贝店官方58班--汤圆班','21810741922@chatroom':'L1-贝店官方59班--汤圆班','22776342157@chatroom':'L1-贝店官方56班--汤圆班','23408942044@chatroom':'L1-贝店官方57班--汤圆班','22896442017@chatroom':'L1-贝店官方11班-西瓜班','19165878240@chatroom':'群聊群'}"
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
                {col : 'age', name : 'Age', sort : true},
                {col : 'gender', name : 'Gender'},
                {col : 'job', name : 'Job'}
            ],
            list : [
                {name : '<div>Tim, Boelaars</div><div>123123</div>', age : '<p>20%</p>', gender : 'male', job : 'driver'},
                {name : 'Andrew" Colin Beck', age : '<p>100%</p>', gender : 'female', job : 'engineer'},
                {name : 'Gustavo, "Zambelli', age : '<p>30%</p>', gender : 'male', job : 'teacher'},
                {name : 'Victor Erixon', age : '0%', gender : 'female', job : 'doctors'},
                {name : 'Emir Ayouni', age : '58%', gender : 'male', job : `
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
