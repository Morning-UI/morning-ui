<template>
    <doc-guide
        :page="page"
        :hasPadding="true" 
    >
    <script type="text/markdown">
    # 配置

    配置可以为组件提供不同的JS逻辑或样式。只有交互和表单组件支持配置，因为样式组件不支持JS逻辑。

    配置与形态的区别：

    - 形态是一种通用的组件属性，可以区分样式及JS逻辑，有一套全局的规范，大部分组件都支持。
    - 不通的组件可以有不同的配置，常用于区分JS逻辑，也可以区分样式，全局仅在命名上有规范，只有交互和表单组件支持。

    ### 初始化配置

    在使用组件时，可以在组件标签`<ui-*>`的`attr`属性中传入初始化配置：

    :::vue
    #demo
    >tpl
    <!-- ui-btn设置link配置 -->
    <!-- 配置名称是: link -->
    <!-- 配置数值是: https://www.google.com -->
    <ui-btn new-tab link="https://www.google.com">Google</ui-btn>
    :::

    键名为配置的名称，键值是配置的数值。

    由于初始化配置基于`Vue`的`props`，你也可以使用`v-bind`来传入配置，或使用JavaScript表达式。

    :::vue
    #demo
    >tpl
    <div>
        <!-- 通过v-bind为ui-btn设置link -->
        <ui-btn new-tab :link="link">Google</ui-btn>

        <!-- 通过JavaScript表达式为ui-btn设置link -->
        <ui-btn new-tab :link="'https://www.google.com'">Google</ui-btn>
    </div>
    >script
    {
        data : {
            link : 'https://www.google.com'
        }
    }
    :::

    更多用法见:[Vue/模板语法](https://cn.vuejs.org/v2/guide/syntax.html)。

    ### camelCase 和 kebab-case

    HTML特性是不区分大小写的。所以，当配置的名称是camelCased(驼峰式)命名的prop，在HTML中需要转换为相对应的kebab-case(短横线隔开式)命名：

    :::vue
    #demo
    >tpl
    <div>
        <!-- new-tab在HTML中是kebab-case命名 -->
        <ui-btn new-tab :link="link">Google</ui-btn>
    </div>
    >script
    {
        data : {
            link : 'https://www.google.com'
        }
    }
    :::

    ### 单向数据流

    配置是基于Vue的[Prop](https://cn.vuejs.org/v2/guide/components.html#Prop)实现的，所以具有`Prop`的特性。

    使用`v-bind`初始化配置时，配置会和父实例的数据发生变化时，将传导给组件的配置，但是反过来不会。在上面的示例中这意味着：

    - 当组件的配置`link`发生变更时，并不会同步到父实例的`link`中
    - 当父实例的`link`发生变更时，会同步到组件的配置`link`中

    :::vue
    #demo
    >tpl
    <div>
        <!-- 通过v-bind为ui-btn设置link -->
        <ui-btn ref="demo2" new-tab :link="link">Google</ui-btn>
    </div>
    >script
    {
        data : {
            link : 'https://www.google.com'
        },
        mounted : function () {

            // 组件的配置`link`改变时，父实例获取不到变化的配置
            morning.findVM('demo2').conf.link = 'https://www.baidu.com';
            console.log('demo2.console1', this.link); // `https://www.google.com`

            // 父实例的`link`改变会同步到组件的配置中
            this.link = 'https://bing.com';
            Vue.nextTick(() => {
                console.log('demo2.console2', morning.findVM('demo2').getConf().link); // `https://bing.com`
            });

        }
    }
    :::

    下面有张图可以帮助你更好的理解上面的概念：

    <img src="http://h0.hucdn.com/open/201746/cd9651aaab8bcc76_1300x213.png" width="650" alt="">
    
    父实例的配置变化时，会引起`Prop`的变化，`Prop`的变化会同步到组件的配置`vm.conf`中。

    ### 获取配置

    获取组件的配置应该使用组件上的`getConf()`方法，这个方法会对组件的配置进行一次拷贝然后返回，避免对配置的意外修改。

    #### getConf([name])
    
    ##### 参数

    |参数|可选|描述|类型|
    |-|-|-|-|
    |name|YES|获取的配置key，若不传则返回包含所有配置的对象|`undefined` `string`|

    ##### 返回值

    单项配置数值，或包含所有配置的对象，键名是配置的名称，键值是配置的数值。返回的配置内容经过拷贝，所以修改返回值并不会影响组件当前的配置。

    ### 配置属性

    任何一项配置都包含五个关键属性：

    - key : 配置的名称
    - desc : 配置描述
    - accept : 接受值(可以是一个范围，也可以是几个值)
    - type : 值类型
    - default : 默认值

    组件的逻辑及文档必须响应这些关键属性。

    ### 独立性

    不同的配置之间应该是相互独立的，尽可能是无依赖的。

    ### 配置全局命名规范

    配置在全局有一套命名规范，这样是为了防止不同的组件对于某个名词理解不同，导致同一名词在不同组件的不同行为。

    在为组件添加配置前应先检查下面的列表，是否有含义相同的配置，若有请使用，若没有请将新的配置添加到下面列表并注明它的含义。
    
    - `size` : 尺寸
    - `color` : 颜色
    - `state` : 状态
    - `link` : 链接
    - `js` : JS代码
    - `locked` : 锁定
    - `new-tab` : 新标签
    - `auto-close` : 点击组件外区域关闭
    - `tab` : 标签
    - `prepend` : 在之后插入
    - `append` : 在之前插入
    - `width` : 宽度
    - `height` : 高度
    - `show-type` : 展示方式
    - `time` : 时间
    - `note` : 提示
    - `root-name` : 跟节点名称
    - `choose-root` : 选择跟节点
    - `list` : 内容列表
    - `max-history` : 最大历史纪录
    - `target` : 目标
    - `placement` : 位置
    - `offset` : 偏移量
    - `trigger` : 触发类型
    - `form-name` : 表单名
    - `form-key` : 表单Key
    - `group` : 表单组
    - `default-value` : 表单默认值
    - `hide-name` : 隐藏表单名
    - `hide-value` : 表单数值不可见
    - `rows` : 行数
    - `auto-hide-name` : 自动隐藏表单名
    - `max-show` : 最大显示项目
    - `max-show-height` : 最大显示高度
    - `can-search` : 可搜索
    - `multi-select` : 多选
    - `max` : 最大
    - `inline-img-size` : 内联图片尺寸
    - `item-tip` : 项目提示
    - `item-tip-direct` : 项目提示方向
    - `accept-html` : 可使用HTML
    - `can-move` : 可移动
    - `total` : 总数
    - `page-size` : 每页数量
    - `page` : 页数
    - `jump-page` : 跳转页面
    - `item-name` : 项目名称
    - `item-filler` : 项目填充
    - `item-validator` : 项目验证
    - `input-type` : 输入类型
    - `batch-reg` : 批量输入正则表达式
    - `batch-filler` : 批量输入填充
    - `batch-uniq` : 批量输入去重
    - `empty-cell-value` : 空单元格的数值
    - `title` : 标题
    - `zebra-pattern` : 斑马线
    - `vertical-border` : 竖向边框
    - `horizontal-border` : 横向边框
    - `align` : 对齐
    - `show-col-name` : 显示列名称
    - `fixed-title-col` : 固定标题列
    - `col-set` : 列设置
    - `row-set` : 行设置
    - `cell-set` : 单元格设置
    - `export-csv` : 导出CSV文件
    - `csv-name` : CSV文件的名称
    - `close-btn` : 关闭按钮
    - `close-time` : 关闭时间
    - `date` : 日期
    - `highlight-now` : 高亮当日
    - `highlight-day` : 高亮日期
    - `pick-year-month` : 选择年月
    - `accept-type` : 接受类型
    - `allow-url` : 允许URL
    - `allow-drag` : 允许拖拽
    - `validate` : 验证
    - `uploader` : 上传适配器
    - `clean-zone` : 清空区域
    - `clearable` : 清空数值
    - `format` : 格式
    - `selectable-range` : 可选范围
    - `date-selectable-range` : 日期可选范围
    - `time-selectable-range` : 时间可选范围
    - `is-range` : 区间选择
    - `is-list` : 列表选择
    - `list-start` : 列表开始
    - `list-end` : 列表结束
    - `list-step` : 列表步长
    - `separator` : 分隔符
    - `start-name` : 开始名称
    - `end-name` : 结束名称
    - `auto-reset-search` : 重置搜索
    - `hide-selected` : 隐藏选中
    - `clean-allzone-btn` : 清空所有区域按钮
    - `quick-pick` : 快速选择
    - `anchor-target` : 锚点定位
    - `separate-emit` : 外部触发(触发分离)
    - `separator-type` : 分隔内容类型
    - `append-type` : 附加内容类型
    - `list-width` : 列表宽度
    - `max-rows` : 最大行数
    - `auto-size` : 自动调整尺寸
    - `keep-origin-name` : 保留原始名
    - `dynamic-list` : 动态列表
    - `position` : 位置
    - `disabled-options` : 禁用选项
    - `parent` : 父级
    - `method` : 方式
    - `open-note` : 开启备注
    - `close-note` : 关闭备注
    - `open-mark` : 开启标记
    - `close-mark` : 关闭标记
    - `done-hidden` : 完成后隐藏
    - `top` : 距离顶部
    - `bottom` : 距离底部
    - `src` :  源
    - `hide-time` : 隐藏时间
    - `hide-progress` : 隐藏进度条
    - `autoplay` : 自动播放
    - `poster` : 视频预览图
    - `allow-fullscreen` : 允许全屏
    - `tools` : 工具
    - `placeholder` : 占位符
    - `min` : 最小
    - `step` : 步长
    - `show-tip` : 显示提示
    - `tip-formatter` : 提示格式化
    - `show-point` : 显示点
    - `mark-range` : 标记范围
    - `value-type` : 值类型
    - `allow-alpha` : 允许透明
    - `title-col-width` : 标题列宽度
    - `shows` : 显示的项目
    - `formater` : 格式化函数
    - `parser` : 解析函数
    - `precision` : 精度
    - `can-close` : 可关闭
    - `close-content` : 关闭内容
    - `type` : 类型
    - `show-icon` : 显示图标
    - `show-counter` : 显示计数器
    - `menu` : 菜单
    - `current-menu` : 当前菜单
    - `auto-toggle-current` : 自动切换当前
    - `position-current` : 定位到当前
    - `side-expand` : 侧边展开
    - `failed` : 失败
    - `progressing` : 处理中
    - `percent` : 百分比
    - `inside-name` : 内部名称
    - `done-step` : 完成步骤
    - `mark-current` : 标记当前
    - `current-type` : 当前的类型
    - `toggle-time` : 切换时间
    - `toggle-type` : 切换类型
    - `toggle-btn` : 切换按钮
    - `indicator-position` : 指示器位置
    - `indicator-type` : 指示器类型

    </script>
    </doc-guide>
</template>

<script>
import DocGuide                    from 'Docs/common/DocGuide.vue';

export default {
    data : function () {

        return {
            page : 'config'
        };

    },
    components : {
        'doc-guide' : DocGuide
    }
};
</script>

<style lang="less">
</style>
