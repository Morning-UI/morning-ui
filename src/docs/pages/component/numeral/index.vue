<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 数字 `<ui-numeral>`
    
    <doc-component-status page="numeral"></doc-component-status>
    
    [[[开始]]]

    定义一个数字展示组件，可以用于格式化数字并展示，常用于统计等场景，这是一个内联块级元素。
    
    数字组件本身无样式可以通过额外的CSS来添加样式。

    数字组件基于[numeral](http://numeraljs.com)(版本2.0.6)打造。

    :::vue
    @name:使用
    ---
    #demo
    >tpl
    <ui-numeral :number="1000" format="0,0"></ui-numeral>
    :::

    :::vue
    @name:格式化小数
    ---
    #demo
    >desc
    仅显示特定小数位
    >tpl
    <ui-numeral :number="10.23214" format="0.00"></ui-numeral>
    ---
    #demo
    >desc
    补齐小数位
    >tpl
    <ui-numeral :number="10.2" format="0.0000"></ui-numeral>
    :::

    :::vue
    @name:格式化整数
    ---
    #demo
    >desc
    显示符号
    >tpl
    <div>
        <ui-numeral :number="5092" format="+0,0"></ui-numeral>
        <br>
        <ui-numeral :number="-5092" format="+0,0"></ui-numeral>
    </div>
    ---
    #demo
    >desc
    整数补零
    >tpl
    <ui-numeral :number="1982" format="00000,0"></ui-numeral>
    :::

    :::vue
    @name:货币
    ---
    #demo
    >tpl
    <ui-numeral :number="5092" format="$0,0" currency="¥"></ui-numeral>
    ---
    #demo
    >desc
    指定货币单位
    >tpl
    <ui-numeral :number="5090212" format="$ 0.00a" currency="¥"></ui-numeral>
    :::

    :::vue
    @name:字节
    ---
    #demo
    >tpl
    <ui-numeral :number="1024000" format="0b"></ui-numeral>
    ---
    #demo
    >tpl
    <ui-numeral :number="1024" format="0ib"></ui-numeral>
    :::

    :::vue
    @name:百分比
    ---
    #demo
    >tpl
    <ui-numeral :number="1" format="0%"></ui-numeral>
    ---
    #demo
    >desc
    指定小数位的百分比
    >tpl
    <ui-numeral :number="0.98765" format="0.00%"></ui-numeral>
    :::

    :::vue
    @name:指数
    ---
    #demo
    >tpl
    <div>
        <ui-numeral :number="12398734.202" format="0.00e+0"></ui-numeral>
        <br>
        <ui-numeral :number="0.000123987" format="0.000e+0"></ui-numeral>
    </div>
    :::

    [[[形态]]]

    #### 支持

    |类型|支持|默认|
    |-|-|-|
    |尺寸|不支持|-|
    |色彩|不支持|-|
    |状态|不支持|-|

    [[[配置]]]

    :::vue
    @name:number
    ---
    #config
    >conf-desc
    需要格式化的原始数字。
    >conf-accept
    数字<br>字符串(符合数字格式)
    >conf-type
    Number<br>String
    >conf-default
    `0`
    ---
    #demo
    >tpl
    <ui-time :number="6571"></ui-time>
    :::

    :::vue
    @name:format
    ---
    #config
    >conf-desc
    数字的的展示格式。
    <br><br>
    以下是一些格式化字符串示例：
    <br><br>
    __基础__
    <br>
    |原始数字|格式化字符串|结果|
    |-|-|-|
    |10000|'0,0.0000'|10,000.0000|
    |10000.23|'0,0'|10,000|
    |10000.23|'+0,0'|+10,000|
    |-10000|'0,0.0'|-10,000.0|
    |10000.1234|'0.000'|10000.123|
    |100.1234|'00000'|00100|
    |1000.1234|'000000,0'|001,000|
    |10|000.00|010.00|
    |10000.1234|0[.]00000|10000.12340|
    |-10000|(0,0.0000)|(10,000.0000)|
    |-0.23|.00|-.23|
    |-0.23|(.00)|(.23)|
    |0.23|0.00000|0.23000|
    |0.23|0.0[0000]|0.23|
    |1230974|0.0a|1.2m|
    |1460|0 a|1 k|
    |-104000|0a|-104k|
    |1|0o|1st|
    |100|0o|100th|
    <br><br>
    __货币__
    <br>
    |原始数字|格式化字符串|结果|
    |-|-|-|
    |1000.234|$0,0.00|$1,000.23|
    |1000.2|0,0[.]00 $|1,000.20 $|
    |1001|$ 0,0[.]00|$ 1,001|
    |-1000.234|($0,0)|($1,000)|
    |-1000.234|$0.00|-$1000.23|
    |1230974|($ 0.00 a)|$ 1.23 m|
    <br><br>
    __字节__
    <br>
    |原始数字|格式化字符串|结果|
    |-|-|-|
    |100|0b|100B|
    |1024|0b|1KB|
    |2048|0 ib|2 KiB|
    |3072|0.0 b|3.1 KB|
    |7884486213|0.00b|7.88GB|
    |3467479682787|0.000 ib|3.154 TiB|
    <br><br>
    __百分比__
    <br>
    |原始数字|格式化字符串|结果|
    |-|-|-|
    |1|0%|100%|
    |0.974878234|0.000%|97.488%|
    |-0.43|0 %|-43 %|
    |0.43|(0.000 %)|43.000 %|
    <br><br>
    __指数__
    <br>
    |原始数字|格式化字符串|结果|
    |-|-|-|
    |1123456789|0,0e+0|1e+9|
    |12398734.202|0.00e+0|1.24e+7|
    |0.000123987|0.000e+0|1.240e-4|
    >conf-accept
    格式化字符串
    >conf-type
    String
    >conf-default
    `'0,0'`
    ---
    #demo
    >desc
    仅显示特定小数位
    >tpl
    <ui-numeral :number="10.23214" format="0.00"></ui-numeral>
    ---
    #demo
    >desc
    补齐小数位
    >tpl
    <ui-numeral :number="10.2" format="0.0000"></ui-numeral>
    ---
    #demo
    >desc
    显示符号
    >tpl
    <ui-numeral :number="5092" format="+0,0"></ui-numeral>
    ---
    #demo
    >desc
    整数补零
    >tpl
    <ui-numeral :number="1982" format="00000,0"></ui-numeral>
    ---
    #demo
    >desc
    显示货币单位
    >tpl
    <ui-numeral :number="5092" format="$0,0" currency="¥"></ui-numeral>
    ---
    #demo
    >desc
    指定货币单位
    >tpl
    <ui-numeral :number="5090212" format="$ 0.00a" currency="¥"></ui-numeral>
    ---
    #demo
    >desc
    字节转换
    >tpl
    <ui-numeral :number="1024000" format="0b"></ui-numeral>
    ---
    #demo
    >desc
    显示百分比
    >tpl
    <ui-numeral :number="1" format="0%"></ui-numeral>
    ---
    #demo
    >desc
    指定小数位的百分比
    >tpl
    <ui-numeral :number="0.98765" format="0.00%"></ui-numeral>
    ---
    #demo
    >desc
    显示指数
    >tpl
    <ui-numeral :number="12398734.202" format="0.00e+0"></ui-numeral>
    :::

    :::vue
    @name:currency
    ---
    #config
    >conf-desc
    货币单位(配合货币格式化字符串一起使用)。
    >conf-accept
    货币单位
    >conf-type
    String
    >conf-default
    `'¥'`
    ---
    #demo
    >tpl
    <ui-numeral :number="5092" format="$0,0" currency="¥"></ui-numeral>
    :::

    :::vue
    @name:abbreviations
    ---
    #config
    >conf-desc
    缩略单位，这是一个对象，包含了所有缩略单位对应的文本：
    <br><br>
    - `thousand` : 千单位，默认`'k'`
    - `million` : 百万单位，默认`'m'`
    - `billion` : 十亿单位，默认`'b'`
    - `trillion` : 兆单位，默认`'t'`
    >conf-accept
    缩略单位配置对象
    >conf-type
    Object
    >conf-default
    `{thousand: 'k', million: 'm', billion: 'b', trillion: 't'}`
    ---
    #demo
    >tpl
    <ui-numeral :number="5092" format="0,0a" :abbreviations="{thousand:'千'}"></ui-numeral>
    :::

    [[[方法]]]
    
    <h1>暂无</h1>

    [[[事件]]]

    :::vue
    @layout:lifecycle-event
    ---
    numeral
    数字
    :::

    [[[源码]]]

    <iframe src="/report/coverage/lib/components/numeral/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>

    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                 from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'numeral'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
