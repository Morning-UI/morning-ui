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

    ### 0.10.10 <ui-badge class="circle ver-canary" size="s" color="light-theme">Canary</ui-badge>

    <ui-textcolor color="light-blue">
        <ui-small>
            发布于2017年11月27日，
            Archive : 
            <a href="https://github.com/Morning-UI/morning-ui/releases/tag/0.10.10" target="_blank">Package</a>
            <a href="https://cdn.jsdelivr.net/npm/morning-ui@0.10.10/dist/" target="_blank">CDN</a>
        </ui-small>
    </ui-textcolor>

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
    </ui-textcolor>
    
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

    <ui-label primary>Upgrade Precautions</ui-label>

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
