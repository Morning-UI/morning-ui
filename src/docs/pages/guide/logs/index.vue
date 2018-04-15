<template>
    <doc-guide
        :page="page"
        :hasPadding="true" 
    >
    <script type="text/markdown">
    # 更新日志

    ### 版本规范

    Morning UI采用[语义化版本控制规范](http://semver.org/lang/zh-CN/)，同时采用`Stable`、`Beta`、`Canary`三种标记分别来标记版本。详见：[版本计划](/guide/versionplan.html)

    如果更新对使用方法有影响，会在更新记录的`Upgrade Precautions`说明。

    <!-- ### 1.0.0 <ui-badge class="circle" s light-black>Stable</ui-badge> -->

    <!-- ### 0.11.0 <ui-badge class="circle" s light-blue>Beta</ui-badge> -->
    
    ### 更新记录

    ### 0.10.19 <ui-badge class="circle ver-canary" size="s" color="light-theme">Canary</ui-badge>

    <ui-textcolor color="light-blue">
        <ui-small>
            发布于2018年4月15日，
            Archive : 
            <a href="https://github.com/Morning-UI/morning-ui/releases/tag/0.10.19" target="_blank">Package</a>
            <a href="https://cdn.jsdelivr.net/npm/morning-ui@0.10.19/dist/" target="_blank">CDN</a>
        </ui-small>
    </ui-textcolor><br/><br/>

    - `ui-select`组件新增`auto-reset-search`配置，开启后在多选模式下选中项目后会重置搜索内容
    - `ui-select`组件新增`hide-selected`配置，关闭后选中的项目不会消失
    - 修复`ui-select`组件在多选时，项目值和名称不一致的问题

    <ui-label color="primary">Upgrade Precautions</ui-label>

    - `ui-select`移除`clean-btn`配置，采用`clearable`配置代替

    ### 0.10.18 <ui-badge class="circle ver-canary" size="s" color="light-theme">Canary</ui-badge>

    <ui-textcolor color="light-blue">
        <ui-small>
            发布于2018年4月13日，
            Archive : 
            <a href="https://github.com/Morning-UI/morning-ui/releases/tag/0.10.18" target="_blank">Package</a>
            <a href="https://cdn.jsdelivr.net/npm/morning-ui@0.10.18/dist/" target="_blank">CDN</a>
        </ui-small>
    </ui-textcolor><br/><br/>

    - 新增`ui-datetimepicker`日期时间选择器
    - 优化`ui-datepicker`的区间选择功能
    - `ui-calendar`新增`date-enter`和`date-leave`事件
    - `ui-datepicker`新增`input-focus`、`input-blur`、`focus`、`blur`事件
    - `ui-timepicker`新增`getDate`方法
    - 修复`ui-tab`的标签页不能动态修改的问题
    - 修复在Vue版本2.5.14之后`ui-table`会导致内存溢出的问题
    - 适配Vue版本至2.5.16

    ### 0.10.17 <ui-badge class="circle ver-canary" size="s" color="light-theme">Canary</ui-badge>

    <ui-textcolor color="light-blue">
        <ui-small>
            发布于2018年2月26日，
            Archive : 
            <a href="https://github.com/Morning-UI/morning-ui/releases/tag/0.10.17" target="_blank">Package</a>
            <a href="https://cdn.jsdelivr.net/npm/morning-ui@0.10.17/dist/" target="_blank">CDN</a>
        </ui-small>
    </ui-textcolor><br/><br/>

    - 新增`ui-datepicker`日期选择器组件
    - 修复`ui-select`在同时使用`multi-select`配置和`v-for`生成列表时无法选择的问题
    - `ui-calendar`新增`highlight-hover`/`background-mark`/`point-mark`配置以及`click-date`事件

    ### 0.10.16 <ui-badge class="circle ver-canary" size="s" color="light-theme">Canary</ui-badge>

    <ui-textcolor color="light-blue">
        <ui-small>
            发布于2018年1月31日，
            Archive : 
            <a href="https://github.com/Morning-UI/morning-ui/releases/tag/0.10.16" target="_blank">Package</a>
            <a href="https://cdn.jsdelivr.net/npm/morning-ui@0.10.16/dist/" target="_blank">CDN</a>
        </ui-small>
    </ui-textcolor><br/><br/>

    - 新增`ui-timepicker`时间选择器组件
    - `ui-imagemap`支持`max-spot`配置

    ### 0.10.15 <ui-badge class="circle ver-canary" size="s" color="light-theme">Canary</ui-badge>

    <ui-textcolor color="light-blue">
        <ui-small>
            发布于2018年1月16日，
            Archive : 
            <a href="https://github.com/Morning-UI/morning-ui/releases/tag/0.10.15" target="_blank">Package</a>
            <a href="https://cdn.jsdelivr.net/npm/morning-ui@0.10.15/dist/" target="_blank">CDN</a>
        </ui-small>
    </ui-textcolor><br/><br/>

    - 标准化组件的clearable行为
    - 修复使用`v-model`时组件数值初始化不正确的问题
    - 修复`ui-imagemap`组件无法清空数值
        
    ### 0.10.14 <ui-badge class="circle ver-canary" size="s" color="light-theme">Canary</ui-badge>

    <ui-textcolor color="light-blue">
        <ui-small>
            发布于2018年1月15日，
            Archive : 
            <a href="https://github.com/Morning-UI/morning-ui/releases/tag/0.10.14" target="_blank">Package</a>
            <a href="https://cdn.jsdelivr.net/npm/morning-ui@0.10.14/dist/" target="_blank">CDN</a>
        </ui-small>
    </ui-textcolor><br/><br/>

    - `ui-multiform`新增`item-validator`配置
    - `ui-textinput`的`append`和`prepend`配置支持HTML
    - `ui-textinput`和`ui-select`新增`align`配置
    - `ui-select`新增`clearable`配置，可以清空表单数据
    - `ui-select`新增`prepend`配置
    - 修复`ui-imagemap`组件的`hide-name`配置无效的问题
    - 修复`ui-select`的一个取值错误问题
    - 修复`ui-message`的z-index问题
    - 修复`ui-imagemap`无法删除值的问题

    ### 0.10.13 <ui-badge class="circle ver-canary" size="s" color="light-theme">Canary</ui-badge>

    <ui-textcolor color="light-blue">
        <ui-small>
            发布于2017年12月7日，
            Archive : 
            <a href="https://github.com/Morning-UI/morning-ui/releases/tag/0.10.13" target="_blank">Package</a>
            <a href="https://cdn.jsdelivr.net/npm/morning-ui@0.10.13/dist/" target="_blank">CDN</a>
        </ui-small>
    </ui-textcolor><br><br>

    - 配置文档中的key可直接跳转到对应的demo
    - 增加许可证扫描([fossa](https://fossa.io/))
    - 修复`ui-imagemap`组件的一些问题
    - 修复文档的一些问题
    - 更新全局命名

    ### 0.10.12 <ui-badge class="circle ver-canary" size="s" color="light-theme">Canary</ui-badge>

    <ui-textcolor color="light-blue">
        <ui-small>
            发布于2017年12月5日，
            Archive : 
            <a href="https://github.com/Morning-UI/morning-ui/releases/tag/0.10.12" target="_blank">Package</a>
            <a href="https://cdn.jsdelivr.net/npm/morning-ui@0.10.12/dist/" target="_blank">CDN</a>
        </ui-small>
    </ui-textcolor><br><br>

    - 新增`ui-imagemap`图片热区组件
    - 新增`cleanGroup()`方法
    - `ui-upload`组件新增`isUploading()`方法，用来判断组件是否仍然上传图片
    - 修复`ui-upload`触发最大上传限制后，删除文件仍然显示无法上传的问题
    - 修复文档中的一些问题

    ### 0.10.11 <ui-badge class="circle ver-canary" size="s" color="light-theme">Canary</ui-badge>

    <ui-textcolor color="light-blue">
        <ui-small>
            发布于2017年11月29日，
            Archive : 
            <a href="https://github.com/Morning-UI/morning-ui/releases/tag/0.10.11" target="_blank">Package</a>
            <a href="https://cdn.jsdelivr.net/npm/morning-ui@0.10.11/dist/" target="_blank">CDN</a>
        </ui-small>
    </ui-textcolor><br><br>

    - 新增`ui-calendar`日历组件
    - `ui-table`组件支持单列/多列排序，支持导出`.csv`文件时排除指定列
    - `ui-table`支持隐藏特定列
    - `ui-table`在没有数据时会显示"无数据"
    - 新增`findAllVM`方法用来查找所有匹配`ref`的组件vm
    - `ui-message`组件的`close-time`配置新增`false`值，设置后消息不会定时关闭
    - 修复`ui-pagination`可能出现无法跳转页码的问题
    - 修复`ui-message`组件关闭按钮错误的问题
    - 修复`ui-multiform`在使用批量输入后，无法点击修改项目内容的问题
    - 修复文档的一些问题

    ### 0.10.10 <ui-badge class="circle ver-canary" size="s" color="light-theme">Canary</ui-badge>

    <ui-textcolor color="light-blue">
        <ui-small>
            发布于2017年11月27日，
            Archive : 
            <a href="https://github.com/Morning-UI/morning-ui/releases/tag/0.10.10" target="_blank">Package</a>
            <a href="https://cdn.jsdelivr.net/npm/morning-ui@0.10.10/dist/" target="_blank">CDN</a>
        </ui-small>
    </ui-textcolor><br><br>

    - 新增`ui-message`消息组件
    - 组件生成的HTML标签的前缀改为`mor-`
    - 符合Vue风格指南中优先级D的规则
    - `ui-dialog`组件新增`show-mask`配置

    <ui-label color="primary">Upgrade Precautions</ui-label>

    - 组件生成的HTML标签前缀由`i-`变为`mor-`，如JS、CSS有使用请修改

    ### 0.10.9 <ui-badge class="circle ver-canary" size="s" color="light-theme">Canary</ui-badge>

    <ui-textcolor color="light-blue">
        <ui-small>
            发布于2017年11月23日，
            Archive : 
            <a href="https://github.com/Morning-UI/morning-ui/releases/tag/0.10.9" target="_blank">Package</a>
            <a href="https://cdn.jsdelivr.net/npm/morning-ui@0.10.9/dist/" target="_blank">CDN</a>
        </ui-small>
    </ui-textcolor><br><br>
    
    - 新增`ui-upload`文件上传组件
    - 修复`morning.getGroupJson`方法无法使用的问题
    - 修复`ui-textinput`和`ui-textarea`设置某些值(对象或数组的JSON字符串)得到的结果不符合预期的问题
    - 符合Vue风格指南中优先级A的规则

    ### 0.10.8 <ui-badge class="circle ver-canary" size="s" color="light-theme">Canary</ui-badge>

    <ui-textcolor color="light-blue">
        <ui-small>
            发布于2017年11月20日，
            Archive : 
            <a href="https://github.com/Morning-UI/morning-ui/releases/tag/0.10.8" target="_blank">Package</a>
            <a href="https://cdn.jsdelivr.net/npm/morning-ui@0.10.8/dist/" target="_blank">CDN</a>
        </ui-small>
    </ui-textcolor><br><br>
    
    - 组件的配置支持单向数据流(与父组件属性绑定)
    - `ui-table`支持HTML内容和Vue组件
    - 增加配色CSS类，为组件外元素提供颜色
    - 文档章节增加锚点
    - 修复`ui-table`配置的一些问题
    - 修复文档的一些错误

    <ui-label color="primary">Upgrade Precautions</ui-label>

    - `声明`被移除，通过`形态`来替代，使用方法也发生变化，详见`形态`文档
    - `声明`的`style`现在通过`形态`的`color`替代
    - `声明`中状态的`loading`和`processing`被移除
    - `布局组件`更名为`样式组件`
    - 组件的`配置`及`形态`支持单向绑定
    - `setConf`方法被移除
    - `ui-table`的`setList`方法被移除，通过配置`list`替代

    ### 0.10.7 <ui-badge class="circle ver-canary" size="s" color="light-theme">Canary</ui-badge>

    <ui-textcolor color="light-blue">
        <ui-small>
            发布于2017年11月13日，
            Archive : 
            <a href="https://github.com/Morning-UI/morning-ui/releases/tag/0.10.7" target="_blank">Package</a>
            <a href="https://cdn.jsdelivr.net/npm/morning-ui@0.10.7/dist/" target="_blank">CDN</a>
        </ui-small>
    </ui-textcolor><br><br>
    
    - 新增`ui-table`表格组件
    - `ui-grid`栅格组件列数从16变为24

    <ui-label color="primary">Upgrade Precautions</ui-label>

    - `ui-grid`栅格组件一行列数更新至24列

    ### 0.10.6 <ui-badge class="circle ver-canary" size="s" color="light-theme">Canary</ui-badge>

    <ui-textcolor color="light-blue">
        <ui-small>
            发布于2017年11月20日，
            Archive : 
            <a href="https://github.com/Morning-UI/morning-ui/releases/tag/0.10.8" target="_blank">Package</a>
            <a href="https://cdn.jsdelivr.net/npm/morning-ui@0.10.8/dist/" target="_blank">CDN</a>
        </ui-small>
    </ui-textcolor>
    
    - 组件的配置支持单向数据流(与父组件属性绑定)
    - `ui-table`支持HTML内容和Vue组件
    - 增加配色CSS类，为组件外元素提供颜色
    - 文档章节增加锚点
    - 修复`ui-table`配置的一些问题
    - 修复文档的一些错误

    <ui-label color="primary">Upgrade Precautions</ui-label>

    - `声明`被移除，通过`形态`来替代，使用方法也发生变化，详见`形态`文档
    - `声明`的`style`现在通过`形态`的`color`替代
    - `声明`中状态的`loading`和`processing`被移除
    - `布局组件`更名为`样式组件`
    - 组件的`配置`及`形态`支持单向绑定
    - `setConf`方法被移除
    - `ui-table`的`setList`方法被移除，通过配置`list`替代

    ### 0.10.7 <ui-badge class="circle ver-canary" size="s" color="light-theme">Canary</ui-badge>

    <ui-textcolor color="light-blue">
        <ui-small>
            发布于2017年11月13日，
            Archive : 
            <a href="https://github.com/Morning-UI/morning-ui/releases/tag/0.10.7" target="_blank">Package</a>
            <a href="https://cdn.jsdelivr.net/npm/morning-ui@0.10.7/dist/" target="_blank">CDN</a>
        </ui-small>
    </ui-textcolor><br><br>
    
    - 新增`ui-table`表格组件
    - `ui-grid`栅格组件列数从16变为24

    <ui-label color="primary">Upgrade Precautions</ui-label>

    - `ui-grid`栅格组件一行列数更新至24列

    ### 0.10.6 <ui-badge class="circle ver-canary" size="s" color="light-theme">Canary</ui-badge>

    <ui-textcolor color="light-blue">
        <ui-small>
            发布于2017年11月10日，
            Archive : 
            <a href="https://github.com/Morning-UI/morning-ui/releases/tag/0.10.6" target="_blank">Package</a>
            <a href="https://cdn.jsdelivr.net/npm/morning-ui@0.10.6/dist/" target="_blank">CDN</a>
        </ui-small>
    </ui-textcolor><br><br>
    
    - `ui-multiinput`组件新增`update`方法
    - `ui-multiform`组件新增`item-filler`和`clean-btn`配置
    - 完善样式组件的端点(E2E)测试
    - 项目构建工具升级至Webpack3

    <ui-label color="primary">Upgrade Precautions</ui-label>

    - `ui-multiform`的`item-title-key`配置被移除，使用`item-filler`替代

    ### 0.10.5 <ui-badge class="circle ver-canary" size="s" color="light-theme">Canary</ui-badge>

    <ui-textcolor color="light-blue">
        <ui-small>
            发布于2017年11月6日，
            Archive : 
            <a href="https://github.com/Morning-UI/morning-ui/releases/tag/0.10.5" target="_blank">Package</a>
            <a href="https://cdn.jsdelivr.net/npm/morning-ui@0.10.5/dist/" target="_blank">CDN</a>
        </ui-small>
    </ui-textcolor><br><br>

    - `ui-multiform`组件支持批量输入
    - 表单组件数据支持通过`v-model`指令双向绑定
    - 网站支持HTTPS，增加Google Analytics

    ### 0.10.4 <ui-badge class="circle ver-canary" size="s" color="light-theme">Canary</ui-badge>

    <ui-textcolor color="light-blue">
        <ui-small>
        发布于2017年11月5日，
            Archive : 
            <a href="https://github.com/Morning-UI/morning-ui/releases/tag/0.10.4" target="_blank">Package</a>
            <a href="https://cdn.jsdelivr.net/npm/morning-ui@0.10.4/dist/" target="_blank">CDN</a>
        </ui-small>
    </ui-textcolor><br><br>
    
    - 新增`ui-multiform`多项表单输入组件
    - 支持文档搜索([DocSearch](https://community.algolia.com/docsearch/))
    - 支持使用模块管理器(Webpack/Rollup等)
    - 支持CDN引用(cdn.jsdelivr.net)

    <ui-label color="primary">Upgrade Precautions</ui-label>

    - 通过模块方式引入，不会在全局注册window.morning变量
    - 初始化方法从`morning.init([options])`变为`Vue.use(morning, [options])`

    ### 0.10.3 <ui-badge class="circle ver-canary" size="s" color="light-theme">Canary</ui-badge>

    <ui-textcolor color="light-blue">
        <ui-small>
        发布于2017年11月2日，
            Archive : 
            <a href="https://github.com/Morning-UI/morning-ui/releases/tag/0.10.3" target="_blank">Package</a>
            <a href="https://cdn.jsdelivr.net/npm/morning-ui@0.10.3/dist/" target="_blank">CDN</a>
        </ui-small>
    </ui-textcolor><br><br>

    - `ui-formgroup`支持内联布局
    - 现在表单方法`.get()`返回原始值，`.getJson()`返回JSON值
    - 新增样式组件的单元测试
    - 更新开发者规范
    - 优化CI流程中的测试覆盖率部分，避免重复的测试
    - 优化文档构建方式，减小文档体积
    - 修复`ui-select`在搜索模式下不会出现`无项目`提示的问题

    <ui-label color="primary">Upgrade Precautions</ui-label>

    - 表单组件的`.get()`方法变更，请查询最新文档
    - 组件样式中以驼峰法命名的`class`现在换成了中划线法命名
    - 所有之前返回`undeifned`的组件方法，现在都会返回组件的Vue实例(取值方法除外)
    - `ui-tab`的`switchNext()`和`switchPrev()`方法换成了`next()`和`prev()`方法

    ### 0.10.2 <ui-badge class="circle ver-canary" size="s" color="light-theme">Canary</ui-badge>

    <ui-textcolor color="light-blue">
        <ui-small>
        发布于2017年11月1日，
            Archive : 
            <a href="https://github.com/Morning-UI/morning-ui/releases/tag/0.10.2" target="_blank">Package</a>
            <a href="https://cdn.jsdelivr.net/npm/morning-ui@0.10.2/dist/" target="_blank">CDN</a>
        </ui-small>
    </ui-textcolor><br><br>
    
    - 增加`ui-pagination`分页组件
    - 增加codecov.io统计测试覆盖率
    - 更新文档
    - 修复`ui-select`组件的`list`通过模板渲染，会导致默认值被过滤的问题

    ### 0.10.1 <ui-badge class="circle ver-canary" size="s" color="light-theme">Canary</ui-badge>

    <ui-textcolor color="light-blue">
        <ui-small>
        发布于2017年10月31日，
            Archive : 
            <a href="https://github.com/Morning-UI/morning-ui/releases/tag/0.10.1" target="_blank">Package</a>
            <a href="https://cdn.jsdelivr.net/npm/morning-ui@0.10.1/dist/" target="_blank">CDN</a>
        </ui-small>
    </ui-textcolor><br><br>

    - 增加codacy代码质量检测
    - 增加Lint、Build、Test、Coverage等CI流程
    - 更新README
    - 优化功能色彩
    - 移除`.npmignore`
    - 修复ESLint和StyleLint检测到的问题
    - 修复表单组的中表单销毁了，但值还可以通过`getGroup`取到的问题

    ### 0.10.0 <ui-badge class="circle ver-canary" size="s" color="light-theme">Canary</ui-badge>

    <ui-textcolor color="light-blue">
        <ui-small>
        发布于2017年10月31日，
            Archive : 
            <a href="https://github.com/Morning-UI/morning-ui/releases/tag/0.10.0" target="_blank">Package</a>
            <a href="https://cdn.jsdelivr.net/npm/morning-ui@0.10.0/dist/" target="_blank">CDN</a>
        </ui-small>
    </ui-textcolor><br><br>

    MorningUI第一个版本，基于HMP UI，规范了定义，实现部分组件。

    </script>
    </doc-guide>
</template>
 
<script>
import DocGuide                    from 'Docs/common/DocGuide.vue';

export default {
    data : function () {

        return {
            page : 'logs'
        };

    },
    components : {
        'doc-guide' : DocGuide
    }
};
</script>

<style lang="less">
.ver-canary{
    background: #f5ab27 !important;
}
</style>
