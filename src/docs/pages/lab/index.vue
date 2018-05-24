<template>
    <div>
        <doc-header :category="category"></doc-header>
        <!-- darg icon https://h0.hucdn.com/open/201734/175363ad9c01a51b_200x200.png -->
        <div class="lab">
            <h1><i class="iconfont">&#xe615;</i>Morning Laboratory</h1>
            <div class="area">

            <div style="width:300px;">
                <ui-imagemap group="test" form-key="test" state="normal" :default-value="{'images':[{'name':'151244303389249797.png','path':'http://morning-ui-image.test.upcdn.net/uploaddemo/17505/151244303389249797.png'}],'zones':[],'w':722,'h':725}" form-name="正常" >
                    
                    <ui-formgroup slot-scope="{group}">
                        <div class="item">
                            <h5 class="title">
                                <ui-center class="fill">自定义数据1</ui-center>
                            </h5>
                            <div class="content">
                                <div class="form">

                                    <ui-select
                                        form-name="test"
                                        :hide-selected="false"
                                        style="width: 300px"
                                        :group="group"
                                        form-key="customdata2"
                                    >

                                        <li v-for="name in list" :value="name">{{name}}</li>
                                    </ui-select>


                                </div>
                            </div>
                        </div>
                       
                    </ui-formgroup>


                </ui-imagemap>
            </div>
    
                <h1>大列表渲染</h1>

                <div style="width: 400px">
                
                <template v-for="n in 1">
                    <div style="width: 600px;">
                        <ui-btn class="demo5">点击选择</ui-btn>
                        <ui-select
                            form-name="test"
                            :hide-selected="false"
                            separate-emit=".demo5"
                            style="width: 300px"
                        >

                            <li v-for="name in list" :value="name">{{name}}</li>
                        </ui-select>
                        <span>123</span>
                    </div>

                    <ui-select
                        form-name="test"
                        :hide-selected="false"
                        style="width: 300px"
                    >
                        <li v-for="name in list" :value="name">{{name}}</li>
                    </ui-select>
                </template>

                </div>


                <div>
                    <ui-dialog ref="demo2">
                        <header slot="header">This is title</header>
                        <ui-select
                            form-name="test"
                            :hide-selected="false"
                            style="width: 300px"
                        >

                            <li v-for="name in list" :value="name">{{name}}</li>
                        </ui-select>
                    </ui-dialog>
                    <ui-link js="window.morning.findVM('demo2').toggle(true);">显示模拟盒</ui-link>
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
            list : ["chenchao.he","peng.zhao","jinjin.du","tiansheng.deng","feilong.huang","tingting.chen","ting.wang","qifeng.wu","pan.chen","huyun.wang","shuaiwei.zhang","yao.chen","kai.li","xijin.huang","huangling.zhou","gang.ye","jie.wang","jing.chen","ting.gui","xuchen.zhou","xing.chen","sang.li","huiru.zhang","qing.tian","xiaoshan.zhu","yingying.jiang","bin.chen","jingjing.hou","xiaodi.liu","jin.liu","sheng.hu","jiajie.yu","lan.lan","lijuan.zhou","xiaorong.shuai","chao.wu","qi.shen","wei.wu","xin.shi","hong.yang","tian.qiu","xiaoqian.hu","xiaodong.wang","kaijie.lu","susan.wang","yongjia.wang","geng.gao","lu.lu","han.gao","xiuping.wang","lele.wu","ruihua.cheng","junyan.zhang","yanling.wang","chuxuan.lin","rong.gu","huiyun.xu","yuqing.hu","jiping.zheng","wenlu.zhao","zhiwei.xu","junyi.zhang","shirley.chen","ling.tong","qi.wang","wei.guo","chunchun.shou","weijing.zhu","yingxian.wang","qian.huang","rongguang.feng","kaihui.hu","yuxin.yin","chunfang.han","jiayu.zhuang","bo.peng","xiabing.wu","yaomin.si","jianfen.xie","hao.wei","taohong.ouyang","liang.zhou","long.yang","dingding.huang","zuheng.lu","jiansheng.dai","lifeng.bao","yujian.xu","yanhua.zhang","mingfang.zeng","binwei.tang","lingling.song","songyi.zhang","ying.xu","kaimei.guan","lan.he","xianyong.lu","sisi.zheng","yingjie.xu","chengchao.feng","cong.zheng","chao.ma","junjie.duan","dongwu.wang","zunyao.ke","chenyang.ye","wentao.shi","hongjun.li","yindan.li","xiaoling.zhang","xiandong.huang","lijian.ma","yuqiao.luo","hao.chen2","yu.wei","yanfang.he","jing.xia","yingyu.li","liping.zhang","tiantian.huang","chunyan.feng","jian.li1","liang.yin","jingjing.yan","ruixiang.zeng","mengwei.zhang","yaxi.cai","ping.zhou","huadu.shen","jiajia.wu","yan.kuang","wanying.zheng","ning.liu","qian.zhang1","xiuyuan.yang","feifei.zhao","libo.lei","yalin.xu","fanbin.zeng","chao.yu","yan.liuy","yafen.luo","yuanhai.he","jinquan.zhang","huan.chen1","yan.wen","qing.ma","xiaotong.yang","xi.zhao","shanshan.lu","ouying.yao","yujia.zhang","xihao.liu","wei.zhou1","qianyan.shao","wenwen.chen","zhihong.chen","rong.lin","lin.ye","xiaoying.guo","piaopiao.cao","jing.liu","yongpeng.guo","han.cao","xiangfei.meng","guoqiao.qin","yiting.chen","mengyun.xiao","krystal.gao","hui.cui","shuwen.wang","mingquan.zhu","jiamei.lin","zengqiang.duan","haijun.pan","xiaoyuan.chen","zhou.jiang","bin.wang","lingfeng.yu","jianbo.gu","zhefeng.wei","tong.wu","yuanyuan.jin","zheng.sun","wenjie.he","yamin.cao","lingli.huang","liping.jiang","tongta.chen","wei.nan","pengpeng.sun","lei.fang","jiaying.xu","jun.yang","hao.chen1","chao.he","shumin.shi","shuai.zhang","lingjie.pan","chenyi.li","zeqin.peng","xiangrui.kong","mingcheng.mo","junrui.xu","yizhi.li","yue.wang2","liang.pan","pinpin.sun","luming.zhu","liu.yang","qian.zhao","yifan.zhou","linya.jiang","zelin.liu","yi.feng","min.wu","guo.yu","wenwen.zhang1","haofeng.yan","chenchen.zhou","yibing.zhang","lili.jin","fang.li","zhiyan.he","fengyun.huang","lingsha.li","qingqun.wu","youxiang.zheng","zunhui.chen","hao.hu","yichao.xu","kan.ye","zhihua.jia","xinyi.xianyu","xueru.chai","tianqi.gao","shengtong.wang","yunlei.kong","shuanglong.zhu","hongdan.shen","yunzhi.sheng","hongjuan.wang","zhichao.li","ke.xu","linting.wang","wenwen.cai","xiasheng.lin","lei.ding","donghui.wang","rui.gao","dong.liu","xuguang.zhou","huilin.zheng","wanqiang.pan","chenqi.dong","yang.zhang","kaifei.yao","qianwei.you","qian.ding","xia.kang","vivi.wang","meng.lin","jiaxing.yang","junfeng.li","yumeng.li","yulong.hu","qin.yang","hongxia.yang","pengcheng.zhang","bin.deng","carol.xu","jimmy.chen","jiale.deng","wentao.xu","li.mei","ningfan.lu","kuan.zhou","ting.hou","cheng.tang","changxiao.pan","guinan.lin","liqiang.yan","yibo.guo","jiajun.feng","xiaoxiao.zhu","hanchen.xu","meiqin.tong","weihao.zhang","xinxin.shen","fangfei.jin","zeping.yang","shixuan.zhao","landong.hou","fengteng.zhang","tao.zhang","chao.wang1","zhi.luo","haiyong.wang","gengfu.xu","qian.huang1","qing.lu","yaping.yang","xiduo.xu","yaxin.zhang","mengfang.chen","xiaojiao.zhang","junya.xie","xiaoqin.zhong","hong.luo","yun.liu","yuhong.wang","hui.chen","duan.zhang","haiyang.li","chenguang.zhu","kang.li","zi.li","xuehai.li","hongjun.fang","yanli.xia","danyan.wu","ze.sun","jia.huang","fengjiao.wang","shuangfei.fan","ying.rao","doudou.ji","tingting.zhang","deliang.zhang","shaowei.gao","yanyan.yao","huan.huang","xu.jiang","yan.lan","ping.wang","yutian.fu","peiyu.tong","jiangxue.huang","cong.jia","chen.huang","linghua.zhou","zhiqun.huang","cong.ma","zhiqiang.yang","zhangxian.yu","tingting.lv","xiaocong.gong","rui.wang","weiwei.liu","lip.fan","gill.wang","qin.jiang","yingyi.zhao","tao.xu","youyou.chen","jianying.cheng","xiao.han","meixia.zha","yibin.shen","yu.teng","pan.wang","hanlin.wang","yingzhen.zhu","Joker.chen","lingli.huang","hua.jia","shanshan.huang","lijun.huang","fengjin.liu","shujiao.guo","wanyi.zhang","cuizhen.chen","biang.gao","junting.chen","fan.ye","bin.zhao","wenwen.zhang","guanghua.shao","xiufen.jiang","yanan.zheng","shengxi.kan","jian.ye","zhoulong.shi","bailu.yan","junjie.lin","haibo.yang","jinhui.liu","chuang.hu","gang.xu","bin.hu","zhan.zhao","si.liu","bin.chen1","bijun.wang","miaomiao.zhu","chengyang.zhu","lei.tu","jing.zhu1","yudan.han","jinzhi.cui","jingjing.wu","yuechen.jia","jiajun.zhu","chengping.wan","mengfei.xia","tingyu.jin","jiadong.gao","yanyan.wei","shunping.zhao","zhen.wang","ronghua.zheng","jianbo.zheng","yixuan.luo","tianyang.chen","qiang.sun","nan.min","yucheng.chen","katherine.yang","peng.liu","qian.chen","lingyan.li","qin.ding","gui.zheng","yanting.li","wenyang.xu","nannan.chen","yaqin.liu","fei.xie","kang.yang","qijun.gao","xinyue.luo","zhengjie.you","yunfei.feng","lingling.bao","tian.chen","fangwen.gao","jungang.tian","ting.zhang","wuhong.shen","weixin.zhang","chao.chen","meirong.li","chunyan.yang","wei.lin","changwei.zhang","xueying.xu","xin.zheng","wenchu.yuan","deyang.zhou","zhaodan.song","deli.chen","jiacheng.wang","rui.li","wanying.wang","wenyuan.jiang","jinhao.mo","yiyin.yang","jie.gao","luying.ye","wenchao.jin","congna.feng","wenbo.shi","huizhi.luo","yajun.zhu","dike.yan","yang.li1","ru.sun","jun.zhao","qiong.shao","jiayu.zheng","lixin.lin","test.test","ling.luo","yan.zheng","yunxia.han","chaonan.wang","minzhang.wang","shiying.fang","lei.wang","chao.hu","ling.mei","qiwei.yang","anan.zheng","bobiao.fu","xueping.huang","xiang.li","panfeng.lv","zhiyang.ye","hanyu.zheng","zhiqiang.li","kunxue.liang","xuwei.zhang","yuyan.chen","beiyou.zicai","ruiqi.chu","qin.ye","xingmei.sun","yanling.he","jiajia.zhong","xinyan.ruan","ning.zou","xue.li","honglu.pang","hongliang.zhang","zhongxian.lu","shi.chen","yayan.chen","qiaoya.yu","min.ji","handong.liu","ying.zhou1","yuan.fu","wei.tao","chao.fan","jianqiang.dai","fangfang.wang","cong.chen","bo.su","jun.li","xiaoyu.yan","chunfang.lei","zhijun.ye","chunmin.guo","shuyin.mao","cuiqiao.xie","manlu.wang","xinlei.liu","xiuwen.yang","wenlong.peng","hanyue.cheng","lingfeng.jiang","rong.xiao","xiaodong.wei","liyu.zhuang","jie.li","fangyuan.miao","bentao.xie","xiaoxing.wang","yue.teng","ting.xue","zhemin.xie","yoyo.wang","zheng.liu","yang.li2","ni.yi","yuping.yang","min.xie","lilin.huang","longlong.zhao","tianmei.li","pengyi.zhao","jiajia.wen","yanru.yin","anna.wang","shikun.feng","lijun.wu","bin.jiang","linxiang.zhang","chuan.peng","bin.zuo","jingjing.yu","Starkey.wang","erfei.liu","yina.jiang","yini.wang","bing.jiang","rui.yao","lindan.zhu","huan.xu","guilin.yu","mingyang.xu","min.liu","yancang.lei","yingfeng.wei","yidan.zhu","minyan.zhu","xing.wang","yanlong.kong","juanzhi.he","jinli.zhang","lin.zheng","liangbin.cheng","haiyan.wang","fengmei.zhao","fulin.wang","shaochan.duan","daolong.mi","kankan.du","chenlu.gu","qian.huo","yilong.liu","yu.pan","xiangyang.cheng1","jianghui.dai","chenhua.fan","ziying.yu","kun.xie","zhengkang.wang","ou.zhu","yue.xu","jie.chen","xiaoshi.bai","yanzhen.peng","junjie.tao","miaofeng.chen","xiaolin.fu","ping.zheng","taoyi.chu","qinli.kong","qiqi.song","linjun.zheng","xinzhen.huang","mengxiang.guan","maowen.yan","yang.yu1","jingwan.hu","liuhui.lan","lin.luo","xin.li","ruili.tian","lei.sun","na.wang","jialiang.yin","lianglun.zhang","weijie.li","xuekang.li","zhuohua.guo","jin.chen","xiaoxia.zhou","yindi.wu","lu.ren","peng.tan","xianhai.hua","grace.jiang","ying.tong","demon.li","fangzhou.huang","xincang.lin","zechao.yu","youya.hu1","tracy.yu","long.chen","qiang.hu","deni.li","song.zhuang","li.zhang","crystal.peng","lailai.sheng","fangyan.ye","cong.yang","weilong.chong","bin.ye","fengliang.ma","jiaqing.zheng","leilei.zhang","siyuan.li","john.lu","bing.fang","ping.luo","chang.zheng","nannan.tian","shanshan.xu","yaoyao.hu","zygn.global","zhen.ye","fangfang.meng","jin.zhou","peiyang.li","xiao.ling","zunyuan.li","fanfeng.lu","lianlian.jiang","zhiqiang.huang","tao.chen","zhuojun.zhang","jiaming.lu","na.yuan","tianyi.yang","haijiao.jin","guodong.zhang","zhiyuan.qi","hao.zeng","tingyu.li","jifei.xing","jianwei.li","yanping.zhang","zhibin.cheng","tianli.huang","chengyue.zhong","xiaomei.han","xiao.chen","eason.zhou","zhipan.xu","hanzhi.hu","heng.quan","lifang.tu","de.zhang","yong.yang","yi.mao","aijun.chen","kangjian.liu","yaxiong.li","kaijie.ni","yao.lu","mengrou.deng","dandan.wang","shuangshuang.chen","lijun.zhu","haodong.xu","chao.wang","zhaojun.yang","tao.zhou","junjing.tu","lili.yuan","jonn.wang","lu.qing","xiaocai.chen","xiaoxiao.chen","junqing.fan","ya.hu","junjing.le","mengchu.mao","ping.cao","wenjun.he","yuchun.yin","youyin.gan","runhua.liu","biao.zhang","genlong.yang","min.ding","piaopiao.he","yongpin.guonei","yipin.yang","min.fan","chenyang.jia","wei.xue","suping.pan","jiahui.geng","xiang.cheng","dongxu.lu","muzi.he","hangjun.wu","weiwei.wang","yong.hang","lei.qiao","jing.tian","jingyi.yu","yiwen.cai","zhiyuan.chen","man.ren","jinhai.qiao","stella.liu","qianqian.wang","ying.niu","chengyu.hu","yinhui.sun","yibo.ling","zhinian.yang","fang.zhuo","xiangdong.ren","hongyan.ma","hongguang.liao","yuan.zhang","lizhou.lu","wenping.lin","tianhua.wang","ron.chen","yanfen.tang","xiu.chen","songzuo.jiang","xingxing.yu","fei.yu","shufen.chen","huahua.wu","ludan.bu","fenti.wang","xianghong.liu","feifei.lv","yanzhi.zhao","yang.lv","lihua.zhu","zehua.luo","guangcai.jiang","ting.zhou","tao.jiang","beimao.guonei","wei.zhang","shaoqiang.ran","qin.ren","yinshu.zhao","mengjun.chen","sheng.peng","hankun.zhu","xuejie.hou","jingjing.huang","yilong.zhang","like.wu","beiyou.global","hongjun.li","xiaoqing.wang","jiajia.yang","mengling.ke","jing.xiong","lingling.xu","liqing.song","chuanhao.pu","isa.zhou","min.yang","wenyan.li","chenxi.qian","panpan.he","min.zhang","guangsong.tao","shiqin.zhou","lu.zhang","na.li1","jianfa.xiang","dan.liu","bing.zhang","jiaran.yang","walter.wang","yeli.chen","jia.sun","zhangyun.hu","wei.liu","daiwei.liu","zhiqiang.chen","haiyan.sheng","huanran.zhao","shihan.wang","zhuoying.li","junpeng.chu","xingqi.jiang","ping.song","fang.lv","jenny.huang","cheng.chen","zhiqiang.sun","yuanyue.lv","yunlong.wan","qian.wang","baohua.wang","guyi.liu","jianming.xu","yuehua.chen","cai.zhang","senliang.chen","qiang.cao","yanqiu.liu","yisheng.tong","jiawei.liu","pin.wu","dongwei.yu","manli.luo","lian.chen","longzhu.zhang","yue.fu","zhibo.wang","bingbing.lu","jintao.yan","jianbing.luo","jin.wang","xi.xiong","heqiang.yang","mengling.song","wentao.shen","rui.zhao","yuchen.jiang","mengqin.zhang","jingchen.fang","guangfu.wang","leizhen.zhou","siyao.fang","linchang.yan","qinzheng.ma","yang.yang","hjzd.wb","zheng.zhou","guoqing.liu","guojian.chen","qiao.chen","nemin.sun","gangwu.chen","cuicui.qiu","guojian.zhang","yaodong.li","wenbin.zuo","wenjing.ye","yazhou.yang","jie.huang","xuerong.wang","louli.zhang","bingang.jiang","Sunno.wang","kangwen.qian","haisong.lin","shan.rong","lei.kao","mei.wang","di.li","chaonan.zhang","meizhuang.guonei","chaoxing.cai","fangxu.fan","kun.dong","jiale.zou","xue.kong","shangquan.xie","yanan.huang","shaohui.lu","jia.hu","yaozong.li","jun.luo","peng.zhang1","wenbin.hu","qian.liu","qiming.zou","ruilan.feng","zeng.zhang","lionel.han","hanqin.yao","junwei.wang","jun.chen","nengxiang.zhou","liang.zhu","binbin.lou","rongrong.shen","dongfeng.dai","jeans.chen","yueqin.li","hanqiao.he","xushuang.ren","yuanbo.dong","xin.liu","xuhong.shi","jian.huang","haowei.li","xiwen.chen","tingting.shen","jin.wu","han.peng","mei.feng","guanchun.yu","jingjing.wang","mengjia.ye","juanjuan.cao","tingting.li","zhi.wang","jie.cui","dan.wang","gang.liao","yahui.chen","xinyun.huang","yongni.yu","yanhong.bian","luping.zhang","xiaoming.sun","xiaoyun.guo","pingping.chen","kang.ma","reno.kong","lingling.lei","yuexi.chen","lijuan.ruan","yuping.li","teng.li","guoyu.zhang","xiuye.guo","david.ma","shaojie.xu","lai.zhang","lin.xiong","jinlian.zheng","huiyi.lv","gang.zhao","shan.zou","qiang.lin","xiaoli.tu","albert.li","yuling.xie","keke.wang","jing.zhou","xiaowei.dai","minglu.liu","lian.zhou","jiulinzi.zhang","jiayi.li","jiabao.sun","aven.chen","qian.dai","xiaoying.cheng","changpeng.jiang","jerry.wang","banglei.hu","rihong.qin","yue.hu","xiaoling.xu","liuqing.ding","hongyan.yang","hanbin.zhou","qiang.meng","zhonghui.wang","xinye.dai","yihan.ying","yue.chen","xiaodan.sun","chan.xiang","xing.xu","jingcun.hu","aiping.wang","tong.qiu","wei.chen","shuaishuai.pan","xin.wang","yang.gao","yongfei.miao","jiahui.dong","zeng.gao","fei.jiang","xugeng.ma","mingxiang.zhang","fei.huang","xiaodong.ding","qi.zhang1","tianlan.qi","xiaoqin.zhou","yunqiao.chang","jinye.sun","kaisong.li","yuxi.wang","miaoqing.liu","wenjie.fang","zanyi.sun","sang.xu","xiaohui.gao","jian.yang","wenwen.chen1","xiaodong.ling","jingzhe.wang","jiahui.ge","tingting.yu1","caili.shou","yanli.zhang","honglin.zheng","shuang.yang","huan.xu1","junjie.xu","manman.shan","ling.zhang","danqiong.ye","kangsheng.jin","xiaomin.wang","qing.hong","jiajun.wang","zhiming.li","rizheng.chen","cuiqin.huang","xiangyu.zhu","xindi.chen","minglei.wang","manzhe.xu","miao.gao","suqing.feng","ying.gu","kecai.gu","yin.liu","xiaohui.zhang1","yaoguang.zhang","chao.zheng","hong.lin","lu.xu","qian.zhang","wenxiu.su","lili.chen","zhihao.zheng","rui.feng","lixia.shui","ting.jin","jianfei.yu","shouhe.li","peipei.ni","taoqin.zheng1","haijin.lu","xiaowu.wang","xue.zhang","jituo.jiang","xiaoqin.li","aixue.lin","minbing.huo","hongju.yang","danning.zhang","yuzhou.liu","yanqin.wang","shuyi.jiang","xiaojing.li","wei.tan","ling.yang","ling.chen","lijun.yue","chengwei.han","renqiu.zhang","aluee.wu","feifan.zhang","sha.du","dongmei.zhang","yue.tian","liqi.zhu","hao.chen","hanlei.chen","min.shu","xudong.yang","lili.zhong","panpan.yu","mengqi.wu","xiaoming.liu","xiaonan.chen","xiaoyu.liu","yun.guo","lihua.wei","wenfeng.shao","win.liu","defa.lin","luojun.lou","wenshun.liu","lamar.li","longxiang.shi","juan.luo","xing.long","kuiyan.wu","huaguo.su","fan.yang","qunxiao.wang","chaojian.jin","guixiong.zhao","blair.liu","huihong.yang","xinying.ren","gaozhen.ying","june.chen","yani.li","grace.li","qinqin.xu","lily.yang","weiqi.guo","ronghui.shi","yangyang.tong","liyuan.wang","yao.jin","suri.huang","chenxin.yu","jiazheng.xu","xi.wang","dong.wang","zhaozhou.ming","zixiang.wang","mingjun.tang","zhijian.zhang","xueyun.luo","yefang.pan","weipeng.chen","pingfan.li","jiaying.lao","jialin.chu","waifei.huang","na.li","rui.huang","wanli.yu","jie1.liu","yajie.huang","guoqiang.lin","ke.wang","huamin.lai","yongjie.song","peisen.meng","xy.chen","david.wang","jiquan.zhao","yu.huang","amy.li","chunge.zhang","yan.lv","chun.zhang","kani.wang","qingqing.chen","xiaohui.chen","jing.hu","lian.zhang","weixing.wang","ting.song","rubing.bai","hexian.xu","enen.han","qi.xia","huiting.meng","xin.jiang","zhenwei.yu","meiling.zheng","xuming.li","yuan.zhao","peng.huang","sheng.zhai","xuewei.ma","yu.zhou","shilin.wang","yuang.wei","liuqi.wang","yunping.li","wentao.wang","xu.zhang","xiaoqing.liu","summer.yang","jiang.mei","meng.yan","gongwen.hu","ziyang.lu","mengzhen.cui","hongli.chen","yahui.li","poppy.chen","xin.cheng","yaling.lu","xiying.liao","junnan.zheng","jianping.zhang","juncheng.du","rong.zhao","xianqing.wang","li.xuan","jing.ren","bowen.li","di.fan","dan.luo","jacko.chen","lei.xie","chen.qin","zhe.tang","wei.yan","sheng.zhou","xingfeng.chen","ning.li","fei.yang","yuxue.yang","qiongwei.fang","ziliang.wang","zhiqi.zhong","zhe.zou","wei.ji","xiao.wang","lihui.shen","wenjia.sun","hongli.liu","wenjing.kang","chun.zheng","jingyi.huang","luni.fang","siyuan.chen","lina.guo","haigang.he","kai.zheng","hanmin.zuo","hanhan.zhou","feng.lan","yunxia.dai","qingqing.zheng","tao.huang","suyan.feng","hao.xiong","xiayan.tong","qing.jiang","yongjiang.hu","lijun.feng","dan.lin","jiajun.luo","shufeng.zheng","chunzhuan.yu","yongchao.wang","yuankai.li","fang.wei","lanting.wu","haifei.qian","wanting.du","shanshan.mao","wei.hu","junjun.lou","limi.su","liang.xu","yangqian.lin","wenqi.zhang","zhenhua.cai","ashine.zhou","tao.he","xiangjun.yu","feifei.liu","xiaoning.zhou","yurong.zuo","caixia.shi","chenyun.zhu","leiping.wang","biying.yuan","lesley.chen","jiabei.huang","zhenzhen.song","qingfeng.niu","yahan.yang","chao.guo","siyu.xu","kaihao.fan","qing.zhao","chan.chen","chong.xu","kexin.xie","lidong.pang","xiaoyang.zhang","edward.wang","tung.yang","feina.zhang","kaiping.liu","guichao.li","minqiong.pan","qing.feng","heng.zhang","baitao.wang","enyi.yang","tina.chen","qiaoling.zhou","congjie.hu","vivian.zhang","lili.sun","lun.chen","ye.li","haiping.huang","yiming.tang","xueting.ma","xinxiu.wei","chenjie.lu","huaiyi.li","yanfei.liu","shenxing.du","ranran.han","maker.wang","jiayi.gao","si.lin","mingming.hu","hongwei.zhou","guilan.zhou","zuyan.wang","axin.chen","chen.liu","binbin.ye","jian.zheng","chunhui.hu","fenjing.meng","austin.wang","jialing.huang","ying.liu","ruan.wang","fei.zheng","yinghua.yang","gege.jiang","haiyang.yu","hailun.song","xiaoxiao.wang","tianxing.ren","jiyun.miao","yahui.wang","caixia.yan","lei.zhao","dongqing.li","liting.yu","zhaofeng.wu","kexin.dong","jia.gao","gang.zhu","xiangrui.li","feifan.wu","siqi.jiang","shangqiao.xu","ziping.wang","bing.liu","xing.liu","wei.sheng","ruipei.chen","kun.wang","nan.wang","fanqi.kong","lei.chen","yan.lin","pengfei.sun","jianfei.mao","dongxu.diao","chang.ye","linbin.li","cunmiao.jiang","xin.ye","xiaoping.mi","li.ding","jin.ji","guangping.zhou","zhuo.huang","pan.sun","rong.zeng","peng.shen","xupei.lv","junmin.huang","mudan.jiang","jingyang.zhou","ru.liu","ya.xu","ya.guo","ni.chang","yingtao.chen","miao.zhang","zhiqiang.wu","kuang.li","jianfeng.ding","xinyi.wu","yingjie.wu","lu.song","junjun.li","simin.chen","ping.ku","zoe.wang","shangxu.feng","xujing.xue","bingjun.lv","xinqin.huang","chengxiao.guo","ningjing.xu","hualong.cai","haidan.zheng","hanqing.peng","yichuan.zhou","qiyu.tao","binbin.dong","yunjie.shi","diqian.zhang","zhengfang.fang","yanpeng.cai","tanya.tong","yanyan.liu","chunyan.ye","xingliang.xiao","ben.xu","fenfen.wang","zhen.fang","ru.zhang","chen.zheng","xiaoshan.chu","beidian.shengxian12","jianming.li","yini.xu","jingjing.zheng","chaohan.yang","anyan.song","liangcai.li","fanyu.zhang","chao.liang","zhuyan.ma","qianwen.tong","xiaojiang.ding","beibei.zhu","lili.cai","qunlin.yi","xiang.lan","feixia.shen","cong.yao","wei.sun","yang.lu","guangcheng.fan","yanzhen.zhang","wei.zhong","linhua.zhang","siny.wang","jinying.li","jingjing.chen","tian.wu","xiong.zhong","wanlin.zheng","yanan.diao","yiling.wang","yushuang.liu","jiaxi.lin","yueyue.zhang","changya.fan","shaobo.bei","jinfang.luo","yuzhu.tong","ying.zhang","yuting.fan","xuwen.zheng","boxue.liu","yuqi.liu","gongzheng.cao","lin.liu","angie.lu","zheng.fang","jun.zhang","wei.zheng","chaoyan.ye","han.chen","hangyi.lou","fang.wang","yiran.huang","ming.wang","yuping.hu","bowen.hu","shicheng.liu","le.gao","xiaodan.huang","yang.liu","qing.wu","xiaochen.wang","tianshuai.yang","jie.li1","yueping.hu","jie.wu","ping.yao","xiaodi.hu","qianrui.ren","zhao.xu","ziwei.yan","yangming.zhao","linda.liu","dongdong.hu","yangjing.zhou","zhendong.guan","lili.liang","yue.kong","hongliang.ma","xiaobing.dai","wenfang.yang","jiaqi.hu","mengli.jiang","yongbing.chao","yi.zhang","xiaoxi.zhao","shifan.zhang","yujia.fang","lijing.zheng","jing.li1","zela.zhou","jiawei.tan","xia.lin","jing.ye","xin.lv","yao.tao","lingling.zhu","zhongwen.xu","lianlian.chen","fangyuan.zhu","huisi.yang","lei.zhang","liping.zhou","xiaoying.wei","yuhui.yuan","chunhua.ma","jiahui.tang","ziwei.liu","xinkai.ma","lina.lu","jie.ni","siying.zhang","huixin.li","weijia.cheng","bo.liu","xiang.fei","yue.wan","liang.zhang","xiaoxiao.zheng","yang.wang","yusha.lan","yuanpeng.shao","song.he","nagisaww.zhang","riwei.chen","su.fang","xiaoying.wang","wusong.cheng","lu.tang","yi.jin","dorothy.pan","jingwei.gong","yichao.qin","yao.fu","youjin.wu","xie.chen","qingbai.zheng","kairui.jiang","yuqi.peng","dongshun.liu","ning.zhang","qiao.sun","jieke.xue","luojin.wan","lingfei.yu","ping.yu","lingai.huang","baowei.zhang","yunyun.guo","lingjie.yang","qianqian.wu","qianyuan.huang","jihang.chai","man.yu","hong.sun","zhu.zhang","ziqi.liu","xiaowei.shi","kaiying.li","youhong.xing","chunlan.liu","danping.sun","jianzhi.lu","jianjie.sun","yuning.hu","yujia.xiao","ying.zeng","weiwei.zhu","chengjian.cao","jiarong.chen","feng.yang","yuhan.xu","jiangliang.meng","yuebo.fang","burning.xu","yanping.kong","lei.huang","yuchen.zhang","yan.leng","jie.si","jing.yang","yanlei.wu","junfeng.he","yihan.duan","wanyi.zhou","siying.guo","xiaorui.zhang","cuiyun.li","yipei.qian","weiting.ye","xiaoting.liu","dongen.zou","ruolan.yang","jinfeng.liu","yufeng.cheng","zuting.ouyang","jiajia.zhou","ying.yang","gaoping.xie","min.an","yichou.chen","runze.su","yue.wu","lrving.wang","yun.song","changjun.zhan","dongsheng.lin","ji.li","jiahui.fu","longlong.xia","yanzhe.zhao","lin.feng","chong.chen","likai.qian","xiaoxia.wang","qinyan.wang","leo.sun","qiuxia.zhang","lijuan.zhang","chenglong.xu","tianli.cao","xuemei.chen","jiaojiao.zhu","yong.liu","dajiao.guo","chang.luo","xuan.lv","kangen.ling","guanghao.zhao","lynn.chen","meina.zhang","bo.fan","dongyang.xu","lisa.liu","liya.ma","yaying.du","xiaoqian.mao","pengying.cheng","abby.li","hong.xu","die.zheng","jane.huang","shuanghong.wang","yishu.zhou","kevin.fang","qiaoyue.wang","weimin.li","zhijie.zheng","xiao.zhou","ziqiang.xiang","shan.jiang","yifan.xu","xiaojing.ren","meiling.liu","cdd.chen","mali.zhang","mingcheng.zhao","yihang.mao","lanping.yu","jindou.shi","xiujie.zhou","siyun.liang","qingjian.jiang"]
        };

    },
    components : {
        'doc-header' : DocHeader,
        'doc-footer' : DocFooter
    },
    mounted : function () {}
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
