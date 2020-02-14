<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 标签页 `<ui-tab>`
    
    <doc-component-status page="tab"></doc-component-status>

    [[[开始]]]

    定义一个标签页，标签页支持嵌套。

    :::vue
    @name:使用
    ---
    #demo
    >desc
    使用`slot`属性标记内容对应的标签名，标签名是唯一索引，所以`slot`不能重复。
    >tpl
    <ui-tab>
        <template #第一页>
            <div>第一页</div>
        </template>
        <template #第二页>
            <div>第二页</div>
        </template>
        <template #第三页>
            <div>第三页</div>
        </template>
    </ui-tab>
    :::

    :::vue
    @name:区块标签页
    ---
    #demo
    >desc
    通过`type="block"`定义区块风格的标签页。
    >tpl
    <ui-tab type="block">
        <template #第一页>
            <div>第一页</div>
        </template>
        <template #第二页>
            <div>第二页</div>
        </template>
        <template #第三页>
            <div>第三页</div>
        </template>
    </ui-tab>
    :::

    :::vue
    @name:线条标签页
    ---
    #demo
    >desc
    通过`type="line"`定义线条风格的标签页。
    >tpl
    <ui-tab type="line">
        <template #第一页>
            <div>第一页</div>
        </template>
        <template #第二页>
            <div>第二页</div>
        </template>
        <template #第三页>
            <div>第三页</div>
        </template>
    </ui-tab>
    :::

    :::vue
    @name:按钮式标签页
    ---
    #demo
    >desc
    通过`type="btn"`定义线条风格的标签页。
    >tpl
    <ui-tab type="btn">
        <template #第一页>
            <div>第一页</div>
        </template>
        <template #第二页>
            <div>第二页</div>
        </template>
        <template #第三页>
            <div>第三页</div>
        </template>
    </ui-tab>
    :::

    :::vue
    @name:无内边距
    ---
    #demo
    >desc
    标签页默认有一定内边距，通过`no-padding`为标签页内容取消内边距。
    <br><br>
    更多用法详见：[no-padding配置](/component/tab.html#no-padding)
    >tpl
    <ui-tab no-padding>
        <template #第一页>
            <div>第一页</div>
        </template>
        <template #第二页>
            <div>第二页</div>
        </template>
        <template #第三页>
            <div>第三页</div>
        </template>
    </ui-tab>
    :::

    :::vue
    @name:无边框标签页
    ---
    #demo
    >desc
    通过`no-border`定义无边框标签页，一般配合`type="line"`使用。
    <br><br>
    更多用法详见：[no-border配置](/component/tab.html#no-border)
    >tpl
    <ui-tab type="line" no-border>
        <template #第一页>
            <div>第一页</div>
        </template>
        <template #第二页>
            <div>第二页</div>
        </template>
        <template #第三页>
            <div>第三页</div>
        </template>
    </ui-tab>
    :::

    :::vue
    @name:嵌套使用
    ---
    #demo
    >tpl
    <ui-tab type="block">
        <template #A>
            <div>
                <ui-tab type="line">
                    <template #A1>
                        <div>
                            <ui-tab>
                                <template #A11>
                                    <div>A11</div>
                                </template>
                                <template #A12>
                                    <div>A12</div>
                                </template>
                                <template #A13>
                                    <div>A13</div>
                                </template>
                            </ui-tab>
                        </div>
                    </template>
                    <template #A2>
                        <div>A2</div>
                    </template>
                    <template #A3>
                        <div>A3</div>
                    </template>
                </ui-tab>
            </div>
        </template>
        <template #B>
            <div>B</div>
        </template>
        <template #C>
            <div>C</div>
        </template>
    </ui-tab>
    :::

    :::vue
    @name:位于左侧的标签页
    ---
    #demo
    >desc
    通过标签页的`position`配置你可以调整标签页的位置。
    <br><br>
    更多用法详见：[position配置](/component/tab.html#position)
    >tpl
    <ui-tab position="left">
        <template #第一页>
            <div>第一页</div>
        </template>
        <template #第二页>
            <div>第二页</div>
        </template>
        <template #第三页>
            <div>第三页</div>
        </template>
    </ui-tab>
    :::

    :::vue
    @name:锚点定位
    ---
    #demo
    >desc
    开启`anchor-target`配置后，当标签页检测到页面锚点变化时，会自动切换到对应的标签并定位：
    <br><br>
    <a href="#锚点1">定位到第二章的锚点1</a><br>
    <a href="#锚点2">定位到第三章的锚点2</a>
    <br><br>
    如果使用了多个标签页嵌套，组件会切换所有标签直到可以显示锚点定位内容：
    <br><br>
    <a href="#锚点3">定位到`第四章`的`第二节`的`第三页`中的锚点3</a>
    <br><br>
    多层嵌套的标签页进行切换时，如层级中某个标签页组件未开启`anchor-target`配置，则这个标签页不会进行切换。但不影响其他标签页切换。
    >tpl
    <ui-tab type="block" no-border anchor-target>
        <template #第一章>
            <div>第一章</div>
        </template>
        <template #第二章>
            <div>
                <div style="height:100px;">第二章</div>
                <div id="锚点1">锚点1</div>
            </div>
        </template>
        <template #第三章>
            <div>
                <div style="height:200px;">第三章</div>
                <div id="锚点2">锚点2</div>
            </div>
        </template>
        <template #第四章>
            <div>
                <ui-tab no-border anchor-target>
                    <template #第一节>
                        <div>第一节</div>
                    </template>
                    <template #第二节>
                        <div>
                            <ui-tab no-border anchor-target>
                                <template #第一页>
                                    <div>第一页</div>
                                </template>
                                <template #第二页>
                                    <div>第二页</div>
                                </template>
                                <template #第三页>
                                    <div>
                                        <div style="height:200px;">第三页</div>
                                        <div id="锚点3">锚点3</div>
                                    </div>
                                </template>
                            </ui-tab>
                        </div>
                    </template>
                    <template #第三节>
                        <div>第三节</div>
                    </template>
                </ui-tab>
            </div>
        </template>
    </ui-tab>
    :::

    :::vue
    @name:无内容标签页
    ---
    #demo
    >desc
    若某个标签页中没有内容，建议使用空状态组件(`ui-empty`)。
    >tpl
    <ui-tab>
        <template #第一页>
            <div>第一页</div>
        </template>
        <template #第二页>
            <div><ui-empty></ui-empty></div>
        </template>
        <template #第三页>
            <div><ui-empty></ui-empty></div>
        </template>
    </ui-tab>
    :::

    [[[形态]]]

    #### 支持

    |类型|支持|默认|
    |-|-|-|
    |尺寸|不支持|-|
    |色彩|不支持|-|
    |状态|不支持|-|

    <a href="/guide/status.html">查看形态文档</a> / <a href="/design/color.html">查看色彩文档</a>

    [[[配置]]]

    :::vue
    @name:tab
    ---
    #config
    >conf-desc
    默认展示的标签页。<br>无法选中`disabled-options`设置的禁用标签。
    >conf-accept
    `slot`(标签名)
    >conf-type
    String
    >conf-default
    第一个标签名
    ---
    #demo
    >tpl
    <ui-tab tab="第三页">
        <!-- 默认展示第三页 -->
        <template #第一页>
            <div>第一页</div>
        </template>
        <template #第二页>
            <div>第二页</div>
        </template>
        <template #第三页>
            <div>第三页</div>
        </template>
    </ui-tab>
    :::

    :::vue
    @name:prepend
    ---
    #config
    >conf-desc
    在对应标签名之前插入内容(可以是HTML，一般用于插入icon)。若标签名在此对象中未找到则什么都不插入。
    >conf-accept
    需要插入内容的hash(键名对应标签名，键值是需要插入的内容)
    >conf-type
    Object
    >conf-default
    `{}`
    ---
    #demo
    >tpl
    <div>
        <ui-tab
            :prepend="prepend"
        >
            <template #应用>
                <div>应用</div>
            </template>
            <template #标签>
                <div>标签</div>
            </template>
            <template #其他>
                <div>其他</div>
            </template>
        </ui-tab>
    </div>
    >script
    {
        data : function () {
            return {
                // 需要插入的内容
                prepend : {
                    '应用' : '{{'<i class="mo-icon mo-icon-block-4"></i> '}}',
                    '标签' : '{{'<i class="mo-icon mo-icon-star-f"></i> '}}'
                }
            }
        }
    }
    :::

    :::vue
    @name:append
    ---
    #config
    >conf-desc
    在对应标签名之后插入内容(可以是HTML，一般用于插入icon)。若标签名在此对象中未找到则什么都不插入。
    >conf-accept
    需要插入内容的hash(键名对应标签名，键值是需要插入的内容)
    >conf-type
    Object
    >conf-default
    `{}`
    ---
    #demo
    >tpl
    <div>
        <ui-tab
            :append="append"
        >
            <template #应用>
                <div>应用</div>
            </template>
            <template #标签>
                <div>标签</div>
            </template>
            <template #其他>
                <div>其他</div>
            </template>
        </ui-tab>
    </div>
    >script
    {
        data : function () {
            return {
                // 需要插入的内容
                append : {
                    '应用' : '{{' <i class="mo-icon mo-icon-block-4"></i>'}}',
                    '标签' : '{{' <i class="mo-icon mo-icon-star-f"></i>'}}'
                }
            }
        }
    }
    :::

    :::vue
    @name:anchor-target
    ---
    #config
    >conf-desc
    是否启用锚点定位。启用后URL中锚点匹配到的元素所在的标签页，会切换标签并滚动到此元素。<br>多层嵌套的标签页进行切换时，如层级中某个标签页组件未开启此配置，则这个标签页不会进行切换。但不影响其他标签页切换。
    >conf-accept
    `true`<br>`false`
    >conf-type
    Boolean
    >conf-default
    `false`
    ---
    #demo
    >desc
    开启`anchor-target`配置后，当标签页检测到页面锚点变化时，会自动切换到对应的标签并定位：
    <br><br>
    <a href="#锚点4">定位到第二章的锚点4</a><br>
    <a href="#锚点5">定位到第三章的锚点5</a>
    <br><br>
    如果使用了多个标签页嵌套，组件会切换所有标签直到可以显示锚点定位内容：
    <br><br>
    <a href="#锚点6">定位到`第四章`的`第二节`的`第三页`中的锚点6</a>
    <br><br>
    多层嵌套的标签页进行切换时，如层级中某个标签页组件未开启`anchor-target`配置，则这个标签页不会进行切换。但不影响其他标签页切换。
    >tpl
    <ui-tab type="block" no-border anchor-target>
        <template #第一章>
            <div>第一章</div>
        </template>
        <template #第二章>
            <div>
                <div style="height:100px;">第二章</div>
                <div id="锚点4">锚点4</div>
            </div>
        </template>
        <template #第三章>
            <div>
                <div style="height:200px;">第三章</div>
                <div id="锚点5">锚点5</div>
            </div>
        </template>
        <template #第四章>
            <div>
                <ui-tab no-border anchor-target>
                    <template #第一节>
                        <div>第一节</div>
                    </template>
                    <template #第二节>
                        <div>
                            <ui-tab no-border anchor-target>
                                <template #第一页>
                                    <div>第一页</div>
                                </template>
                                <template #第二页>
                                    <div>第二页</div>
                                </template>
                                <template #第三页>
                                    <div>
                                        <div style="height:200px;">第三页</div>
                                        <div id="锚点6">锚点6</div>
                                    </div>
                                </template>
                            </ui-tab>
                        </div>
                    </template>
                    <template #第三节>
                        <div>第三节</div>
                    </template>
                </ui-tab>
            </div>
        </template>
    </ui-tab>
    :::

    :::vue
    @name:position
    ---
    #config
    >conf-desc
    标签页的位置。
    >conf-accept
    `'top'`：上方<br>`'left'`：左侧<br>`'right'`：右侧<br>`'bottom'`：下方
    >conf-type
    String
    >conf-default
    `'top'`
    ---
    #demo
    >desc
    标签页在上方。
    >tpl
    <ui-tab position="top">
        <template #第一页>
            <div>第一页</div>
        </template>
        <template #第二页>
            <div>第二页</div>
        </template>
        <template #第三页>
            <div>第三页</div>
        </template>
    </ui-tab>
    ---
    #demo
    >desc
    标签页在上方，配合无边框。
    >tpl
    <ui-tab position="top" no-border>
        <template #第一页>
            <div>第一页</div>
        </template>
        <template #第二页>
            <div>第二页</div>
        </template>
        <template #第三页>
            <div>第三页</div>
        </template>
    </ui-tab>
    ---
    #demo
    >desc
    标签页在上方，配合区块标签页。
    >tpl
    <ui-tab position="top" type="block">
        <template #第一页>
            <div>第一页</div>
        </template>
        <template #第二页>
            <div>第二页</div>
        </template>
        <template #第三页>
            <div>第三页</div>
        </template>
    </ui-tab>
    ---
    #demo
    >desc
    标签页在上方，配合线条标签页。
    >tpl
    <ui-tab position="top" type="line">
        <template #第一页>
            <div>第一页</div>
        </template>
        <template #第二页>
            <div>第二页</div>
        </template>
        <template #第三页>
            <div>第三页</div>
        </template>
    </ui-tab>
    ---
    #demo
    >desc
    标签页在上方，配合按钮式标签页。
    >tpl
    <ui-tab position="top" type="btn">
        <template #第一页>
            <div>第一页</div>
        </template>
        <template #第二页>
            <div>第二页</div>
        </template>
        <template #第三页>
            <div>第三页</div>
        </template>
    </ui-tab>
    ---
    #demo
    >desc
    标签页在下方。
    >tpl
    <ui-tab position="bottom">
        <template #第一页>
            <div>第一页</div>
        </template>
        <template #第二页>
            <div>第二页</div>
        </template>
        <template #第三页>
            <div>第三页</div>
        </template>
    </ui-tab>
    ---
    #demo
    >desc
    标签页在下方，配合无边框。
    >tpl
    <ui-tab position="bottom" no-border>
        <template #第一页>
            <div>第一页</div>
        </template>
        <template #第二页>
            <div>第二页</div>
        </template>
        <template #第三页>
            <div>第三页</div>
        </template>
    </ui-tab>
    ---
    #demo
    >desc
    标签页在下方，配合区块标签页。
    >tpl
    <ui-tab position="bottom" type="block">
        <template #第一页>
            <div>第一页</div>
        </template>
        <template #第二页>
            <div>第二页</div>
        </template>
        <template #第三页>
            <div>第三页</div>
        </template>
    </ui-tab>
    ---
    #demo
    >desc
    标签页在下方，配合线条标签页。
    >tpl
    <ui-tab position="bottom" type="line">
        <template #第一页>
            <div>第一页</div>
        </template>
        <template #第二页>
            <div>第二页</div>
        </template>
        <template #第三页>
            <div>第三页</div>
        </template>
    </ui-tab>
    ---
    #demo
    >desc
    标签页在下方，配合按钮式标签页。
    >tpl
    <ui-tab position="bottom" type="btn">
        <template #第一页>
            <div>第一页</div>
        </template>
        <template #第二页>
            <div>第二页</div>
        </template>
        <template #第三页>
            <div>第三页</div>
        </template>
    </ui-tab>
    ---
    #demo
    >desc
    标签页在左侧。
    >tpl
    <ui-tab position="left">
        <template #第一页>
            <div>第一页</div>
        </template>
        <template #第二页>
            <div>第二页</div>
        </template>
        <template #第三页>
            <div>第三页</div>
        </template>
    </ui-tab>
    ---
    #demo
    >desc
    标签页在左侧，配合无边框。
    >tpl
    <ui-tab position="left" no-border>
        <template #第一页>
            <div>第一页</div>
        </template>
        <template #第二页>
            <div>第二页</div>
        </template>
        <template #第三页>
            <div>第三页</div>
        </template>
    </ui-tab>
    ---
    #demo
    >desc
    标签页在左侧，配合区块标签页。
    >tpl
    <ui-tab position="left" type="block">
        <template #第一页>
            <div>第一页</div>
        </template>
        <template #第二页>
            <div>第二页</div>
        </template>
        <template #第三页>
            <div>第三页</div>
        </template>
    </ui-tab>
    ---
    #demo
    >desc
    标签页在左侧，配合线条标签页。
    >tpl
    <ui-tab position="left" type="line">
        <template #第一页>
            <div>第一页</div>
        </template>
        <template #第二页>
            <div>第二页</div>
        </template>
        <template #第三页>
            <div>第三页</div>
        </template>
    </ui-tab>
    ---
    #demo
    >desc
    标签页在左侧，配合按钮式标签页。
    >tpl
    <ui-tab position="left" type="btn">
        <template #第一页>
            <div>第一页</div>
        </template>
        <template #第二页>
            <div>第二页</div>
        </template>
        <template #第三页>
            <div>第三页</div>
        </template>
    </ui-tab>
    ---
    #demo
    >desc
    标签页在右侧。
    >tpl
    <ui-tab position="right">
        <template #第一页>
            <div>第一页</div>
        </template>
        <template #第二页>
            <div>第二页</div>
        </template>
        <template #第三页>
            <div>第三页</div>
        </template>
    </ui-tab>
    ---
    #demo
    >desc
    标签页在右侧，配合无边框。
    >tpl
    <ui-tab position="right" no-border>
        <template #第一页>
            <div>第一页</div>
        </template>
        <template #第二页>
            <div>第二页</div>
        </template>
        <template #第三页>
            <div>第三页</div>
        </template>
    </ui-tab>
    ---
    #demo
    >desc
    标签页在右侧，配合区块标签页。
    >tpl
    <ui-tab position="right" type="block">
        <template #第一页>
            <div>第一页</div>
        </template>
        <template #第二页>
            <div>第二页</div>
        </template>
        <template #第三页>
            <div>第三页</div>
        </template>
    </ui-tab>
    ---
    #demo
    >desc
    标签页在右侧，配合线条标签页。
    >tpl
    <ui-tab position="right" type="line">
        <template #第一页>
            <div>第一页</div>
        </template>
        <template #第二页>
            <div>第二页</div>
        </template>
        <template #第三页>
            <div>第三页</div>
        </template>
    </ui-tab>
    ---
    #demo
    >desc
    标签页在右侧，配合按钮式标签页。
    >tpl
    <ui-tab position="right" type="btn">
        <template #第一页>
            <div>第一页</div>
        </template>
        <template #第二页>
            <div>第二页</div>
        </template>
        <template #第三页>
            <div>第三页</div>
        </template>
    </ui-tab>
    ---
    :::

    :::vue
    @name:disabled-options
    ---
    #config
    >conf-desc
    禁用指定的标签页，禁用后将无法切换到此标签页<br>若在通过`tab`配置指定的标签处于禁用状态，则会切换到下一个最近可用标签。<br>注意：请至少保留一个可选标签。
    >conf-accept
    禁用标签名组成的数组
    >conf-type
    Array
    >conf-default
    `[]`
    ---
    #demo
    >tpl
    <ui-tab :disabled-options="['第二页']">
        <template #第一页>
            <div>第一页</div>
        </template>
        <template #第二页>
            <div>第二页</div>
        </template>
        <template #第三页>
            <div>第三页</div>
        </template>
    </ui-tab>
    ---
    #demo
    >desc
    区块标签页。
    >tpl
    <ui-tab :disabled-options="['第二页']" type="block">
        <template #第一页>
            <div>第一页</div>
        </template>
        <template #第二页>
            <div>第二页</div>
        </template>
        <template #第三页>
            <div>第三页</div>
        </template>
    </ui-tab>
    ---
    #demo
    >desc
    线条标签页。
    >tpl
    <ui-tab :disabled-options="['第二页']" type="line">
        <template #第一页>
            <div>第一页</div>
        </template>
        <template #第二页>
            <div>第二页</div>
        </template>
        <template #第三页>
            <div>第三页</div>
        </template>
    </ui-tab>
    ---
    #demo
    >desc
    按钮式标签页。
    >tpl
    <ui-tab :disabled-options="['第二页']" type="btn">
        <template #第一页>
            <div>第一页</div>
        </template>
        <template #第二页>
            <div>第二页</div>
        </template>
        <template #第三页>
            <div>第三页</div>
        </template>
    </ui-tab>
    ---
    #demo
    >desc
     使用`tab`无法选中禁用的标签（自动切换下一个最近可选标签）。
    >tpl
    <ui-tab :disabled-options="['第二页']" tab="第二页">
        <template #第一页>
            <div>第一页</div>
        </template>
        <template #第二页>
            <div>第二页</div>
        </template>
        <template #第三页>
            <div>第三页</div>
        </template>
    </ui-tab>
    :::

    :::vue
    @name:type
    ---
    #config
    >conf-desc
    标签页的展示风格。
    >conf-accept
    `'normal'`:标准<br>`'block'`:区块<br>`'line'`:线条<br>`'btn'`:按钮
    >conf-type
    String
    >conf-default
    `'normal'`
    ---
    #demo
    >desc
    标准风格标签页。
    >tpl
    <ui-tab type="normal">
        <template #第一页>
            <div>第一页</div>
        </template>
        <template #第二页>
            <div>第二页</div>
        </template>
        <template #第三页>
            <div>第三页</div>
        </template>
    </ui-tab>
    ---
    #demo
    >desc
    区块风格标签页。
    >tpl
    <ui-tab type="block">
        <template #第一页>
            <div>第一页</div>
        </template>
        <template #第二页>
            <div>第二页</div>
        </template>
        <template #第三页>
            <div>第三页</div>
        </template>
    </ui-tab>
    ---
    #demo
    >desc
    线条风格标签页。
    >tpl
    <ui-tab type="line">
        <template #第一页>
            <div>第一页</div>
        </template>
        <template #第二页>
            <div>第二页</div>
        </template>
        <template #第三页>
            <div>第三页</div>
        </template>
    </ui-tab>
    ---
    #demo
    >desc
    按钮风格标签页。
    >tpl
    <ui-tab type="btn">
        <template #第一页>
            <div>第一页</div>
        </template>
        <template #第二页>
            <div>第二页</div>
        </template>
        <template #第三页>
            <div>第三页</div>
        </template>
    </ui-tab>
    :::

    :::vue
    @name:no-padding
    ---
    #config
    >conf-desc
    取消标签页默认的内边距。
    >conf-accept
    `true`<br>`false`
    >conf-type
    Boolean
    >conf-default
    `false`
    ---
    #demo
    >tpl
    <ui-tab no-padding>
        <template #第一页>
            <div>第一页</div>
        </template>
        <template #第二页>
            <div>第二页</div>
        </template>
        <template #第三页>
            <div>第三页</div>
        </template>
    </ui-tab>
    :::

    :::vue
    @name:no-border
    ---
    #config
    >conf-desc
    取消标签页默认的边框，一般配合`type="line"`使用。
    >conf-accept
    `true`<br>`false`
    >conf-type
    Boolean
    >conf-default
    `false`
    ---
    #demo
    >tpl
    <ui-tab no-border>
        <template #第一页>
            <div>第一页</div>
        </template>
        <template #第二页>
            <div>第二页</div>
        </template>
        <template #第三页>
            <div>第三页</div>
        </template>
    </ui-tab>
    :::

    [[[方法]]]

    :::vue
    @name:switch(name)
    ---
    #method
    >method-desc
    切换到指定的标签。
    >method-args
    |name|NO|切换到的标签名|标签的名称`slot`|`String`|`undefined`|
    >method-return
    当前组件VM实例。
    ---
    #demo
    >tpl
    <div>
        <ui-tab ref="demo3">
            <template #第一页>
                <div>第一页</div>
            </template>
            <template #第二页>
                <div>第二页</div>
            </template>
            <template #第三页>
                <div>第三页</div>
            </template>
        </ui-tab>
        <br><br> 
        <ui-link js="morning.findVM('demo3').switch('第一页');">切换到第一页</ui-link>
        <ui-link js="morning.findVM('demo3').switch('第二页');">切换到第二页</ui-link>
        <ui-link js="morning.findVM('demo3').switch('第三页');">切换到第三页</ui-link>
    </div>
    :::

    :::vue
    @name:next()
    ---
    #method
    >method-desc
    切换到下一个标签，若是最后一个则切换到第一个。
    >method-return
    当前组件VM实例。
    ---
    #demo
    >tpl
    <div>
        <ui-tab ref="demo4">
            <template #第一页>
                <div>第一页</div>
            </template>
            <template #第二页>
                <div>第二页</div>
            </template>
            <template #第三页>
                <div>第三页</div>
            </template>
        </ui-tab>
        <br><br> 
        <ui-link js="morning.findVM('demo4').next();">切换到下一个标签</ui-link>
    </div>
    :::

    :::vue
    @name:prev()
    ---
    #method
    >method-desc
    切换到上一个标签，若是第一个则切换到最后一个。
    >method-return
    当前组件VM实例。
    ---
    #demo
    >tpl
    <div>
        <ui-tab ref="demo5">
            <template #第一页>
                <div>第一页</div>
            </template>
            <template #第二页>
                <div>第二页</div>
            </template>
            <template #第三页>
                <div>第三页</div>
            </template>
        </ui-tab>
        <br><br>
        <ui-link js="morning.findVM('demo5').prev();">切换到上一个标签</ui-link>
    </div>
    :::

    [[[事件]]]

    :::vue
    @name:switch
    ---
    #event
    >event-desc
    当标签页切换后触发。
    >event-args
    |name|切换到标签的名称`slot`|`String`|
    ---
    #demo
    >tpl
    <div>
        <ui-tab @switch="echo" ref="demo6">
            <template #第一页>
                <div>第一页</div>
            </template>
            <template #第二页>
                <div>第二页</div>
            </template>
            <template #第三页>
                <div>第三页</div>
            </template>
        </ui-tab>
        <p>切换标签页触发此事件</p>
    </div>
    >script
    {
        methods : {
            echo : function (name) {
                console.log('demo6.console1', 'switch event!', name);
            }
        }
    }
    :::

    :::vue
    @layout:lifecycle-event
    ---
    tab
    标签页
    <template #第一页>
        <div>{*text*}</div>
    </template>
    <template #第二页>
        <div>第二页</div>
    </template>
    <template #第三页>
        <div>第三页</div>
    </template>
    :::

    [[[源码]]]

    <iframe src="/report/coverage/lib/components/tab/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>
    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'tab'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
