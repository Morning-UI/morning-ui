<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 表格 `<ui-table>`
    
    <doc-component-status page="table"></doc-component-status>
    
    [[[开始]]]

    定义一个表格，这是一个块级元素。

    :::vue
    @name:使用
    ---
    #demo
    >tpl
    <ui-table :list="list"></ui-table>
    >script
    {
        data : {
            list : [
                {name : 'Tim Boelaars', age : 20, gender : 'male', job : 'driver'},
                {name : 'Andrew Colin Beck', age : 41, gender : 'female', job : 'engineer'},
                {name : 'Gustavo Zambelli', age : 23, gender : 'male', job : 'teacher'},
                {name : 'Victor Erixon', age : 15, gender : 'female', job : 'doctors'},
                {name : 'Shaun Moynihan', age : 27, gender : 'female', job : 'driver'},
                {name : 'Emir Ayouni', age : 21, gender : 'male', job : 'gardener'}
            ]
        }
    }
    :::

    :::vue
    @name:单列控制
    ---
    #demo
    >desc
    `ui-table`通过`col-set`配置，可以设置单列的：
    <br><br>
    - 宽度
    - 最小宽度
    - 最大宽度
    - 样式
    - 禁用状态
    - 对齐方式
    - 是否是标题列(标题列将被聚合在一起)
    <br><br>
    更多单列控制见：[col-set配置](/component/table.html#col-set)。
    >tpl
    <ui-table :list="list" :col-set="colset" :show-col-name="true"></ui-table>
    >script
    {
        data : {
            list : window.demodata.list,
            colset : [
                {col : 'name', name : 'Name', title : true},
                {col : 'age', name : 'Age', minwidth : '150px'},
                {col : 'gender', name : 'Gender', disabled : true},
                {col : 'job', name : 'Job', align : 'right', style : 'success'}
            ]
        }
    }
    :::

    :::vue
    @name:单行控制
    ---
    #demo
    >desc
    `ui-table`通过`row-set`配置，可以设置行的：
    <br><br>
    - 样式
    - 禁用状态
    - 对齐方式
    <br><br>
    更多单行控制见：[row-set配置](/component/table.html#row-set)。
    >tpl
    <ui-table :list="list" :col-set="colset" :row-set="rowset" :show-col-name="true"></ui-table>
    >script
    {
        data : {
            list : window.demodata.list,
            colset : [
                {col : 'name', name : 'Name'},
                {col : 'age', name : 'Age'},
                {col : 'gender', name : 'Gender'},
                {col : 'job', name : 'Job'}
            ],
            rowset : [
                {row : 1, align : 'left'},
                {row : 2, style : 'warning'},
                {row : 4, disabled : true}
            ]
        }
    }
    :::

    :::vue
    @name:单元格控制
    ---
    #demo
    >desc
    `ui-table`通过`cell-set`配置，可以设置单元格的：
    <br><br>
    - 样式
    - 禁用状态
    - 对齐方式
    <br><br>
    更多单元格控制见：[cell-set配置](/component/table.html#cell-set)。
    >tpl
    <ui-table :list="list" :col-set="colset" :cell-set="cellset" :show-col-name="true"></ui-table>
    >script
    {
        data : {
            list : window.demodata.list,
            colset : [
                {col : 'name', name : 'Name'},
                {col : 'age', name : 'Age'},
                {col : 'gender', name : 'Gender'},
                {col : 'job', name : 'Job'}
            ],
            cellset : [
                {row : 0, col : 'age', style : 'success'},
                {row : 2, col : 'gender', disabled : true},
                {row : 3, col : 'job', style : 'danger'},
                {row : 4, col : 'job', align : 'left'}
            ]
        }
    }
    :::

    :::vue
    @name:自定义表头内容
    ---
    #demo
    >desc
    通过`slot="header"`可以自定义表头内容。
    >tpl
    <ui-table :list="window.demodata.list">
        <div slot="header">
            <div style="display:inline-block;width:160px">
                <ui-textinput size="xs" inside-name="填写内容..."></ui-textinput>
            </div>
            <ui-btn size="xs">按钮1</ui-btn>
            <ui-btn size="xs">按钮2</ui-btn>
        </div>
    </ui-table>
    ---
    #demo
    >desc
    配合`title`和`export-csv`一起使用。
    >tpl
    <ui-table :list="window.demodata.list" title="自定义表头内容" export-csv>
        <div slot="header">
            <ui-btn size="m">按钮1</ui-btn>
        </div>
    </ui-table>
    :::

    :::vue
    @name:实现搜索功能
    ---
    #demo
    >desc
    使用自定义表头实现搜索功能。
    >tpl
    <ui-table ref="demo8" :list="list">
        <div slot="header">
            <div style="display:inline-block;width:160px">
                <ui-textinput ref="demo8input" size="xs" inside-name="关键词..."></ui-textinput>
            </div>
            <ui-btn size="xs" @emit="search">搜索</ui-btn>
        </div>
    </ui-table>
    >script
    {
        data : {
            list : window.demodata.list
        },
        methods : {
            search : function () {

                let key = this.$refs.demo8input.get();

                if (key) {

                    let result = [];

                    for (let item of window.demodata.list) {

                        if (Object.values(item).join().search(key) !== -1) {

                            result.push(item);

                        }
                    
                    }

                    this.list = result;

                } else {

                    this.list = window.demodata.list;

                }
            }
        }
    }
    :::

    :::vue
    @name:单元格内嵌HTML
    ---
    #demo
    >desc
    表格数据列表支持传入HTML内容，在渲染时这些HTML也会被渲染。
    <br>
    列标题同样也支持HTML。
    >tpl
    <ui-table :list="list" :col-set="colset" :show-col-name="true"></ui-table>
    >script
    {
        data : {
            colset : [
                {col : 'name', name : '<span class="mo-co-font-theme">Name</span>'},
                {col : 'age', name : 'Age'},
                {col : 'gender', name : 'Gender'},
                {col : 'job', name : 'Job'},
                {col : 'action', name : 'Action'}
            ],
            list : [
                {name : 'Tim Boelaars', age : 20, gender : 'male', action : '<a href="#">发送</a>'},
                {name : 'Andrew Colin Beck', age : 41, gender : 'female', action : '<a href="#">发送</a>'},
                {name : 'Gustavo Zambelli', age : 23, gender : 'male', action : '<a href="#">发送</a>'},
                {name : 'Victor Erixon', age : 15, gender : 'female', action : '<a href="#">发送</a>'},
                {name : 'Shaun Moynihan', age : 27, gender : 'female', action : '<a href="#">发送</a>'},
                {name : 'Emir Ayouni', age : 21, gender : 'male', action : '<a href="#">发送</a>'}
            ]
        }
    }
    :::

    :::vue
    @name:单元格内嵌Vue组件
    ---
    #demo
    >desc
    表格数据列表的内容会通过Vue渲染，所以你可以使用Vue组件。
    >tpl
    <ui-table :list="list"></ui-table>
    >script
    {
        data : {
            list : [
                {name : 'Tim Boelaars', age : 20, gender : 'male', action : '<ui-btn color="success" size="xs">发送</ui-btn> <ui-link color="minor" size="xs">详情</ui-link>'},
                {name : 'Andrew Colin Beck', age : 41, gender : 'female', action : '<ui-btn color="success" size="xs">发送</ui-btn> <ui-link color="minor" size="xs">详情</ui-link>'},
                {name : 'Gustavo Zambelli', age : 23, gender : 'male', action : '<ui-btn color="success" size="xs">发送</ui-btn> <ui-link color="minor" size="xs">详情</ui-link>'}
            ]
        }
    }
    ---
    #demo
    >desc
    你也可以通过`col-set`配置在标题中使用Vue组件。
    >tpl
    <ui-table :list="list" :col-set="colset" show-col-name></ui-table>
    >script
    {
        data : {
            colset : [
                {col : 'name', name : '<span>Name <ui-btn size="xxs">查看更多</ui-btn></span>'},
                {col : 'age', name : '<span>Age <i id="demo13" class="mo-icon-question-cf"></i> <ui-tip target="#demo13">这里是详细信息</ui-tip></span>'},
                {col : 'gender', name : 'Gender'},
                {col : 'job', name : 'Job'},
                {col : 'action', name : 'Action'}
            ],
            list : [
                {name : 'Tim Boelaars', age : 20, gender : 'male', action : '-'},
                {name : 'Andrew Colin Beck', age : 41, gender : 'female', action : '-'},
                {name : 'Gustavo Zambelli', age : 23, gender : 'male', action : '-'}
            ]
        }
    }
    ---
    #demo
    >desc
    但需要注意的是由于在`list`配置中通过字符串模板的形式使用，所以在模板中的组件无法直接使用上下文的`props`、`data`、`methods`等属性或方法。
    <br><br>
    为此表格组件通过`context`来帮你精确定位上下文。
    >tpl
    <div>
        <ui-table ref="demoPropsData" :list="list"></ui-table>
        <ui-link js="this.btntext = '发送至邮箱'">修改btntext</ui-link>
    </div>
    >script
    {
        data : {
            btntext : '发送',
            list : [
                {name : 'Tim Boelaars', age : 20, gender : 'male', action : '<ui-btn color="success" size="xs">{*context.btntext*}</ui-btn> <ui-link color="minor" size="xs">详情</ui-link>'},
                {name : 'Andrew Colin Beck', age : 41, gender : 'female', action : '<ui-btn color="success" size="xs">{*context.btntext*}</ui-btn> <ui-link color="minor" size="xs">详情</ui-link>'},
                {name : 'Gustavo Zambelli', age : 23, gender : 'male', action : '<ui-btn color="success" size="xs">{*context.btntext*}</ui-btn> <ui-link color="minor" size="xs">详情</ui-link>'}
            ]
        }
    }
    ---
    #demo
    >desc
    `methods`也同样可以通过`context`访问上下文。
    >tpl
    <ui-table :list="list"></ui-table>
    >script
    {
        data : {
            list : [
                {name : 'Tim Boelaars', age : 20, gender : 'male', action : '<ui-btn color="success" size="xs" @emit="context.send(0);">第一个发送</ui-btn> <ui-link color="minor" size="xs">详情</ui-link>'},
                {name : 'Andrew Colin Beck', age : 41, gender : 'female', action : '<ui-btn color="success" size="xs" @emit="context.send(1);">第二个发送</ui-btn> <ui-link color="minor" size="xs">详情</ui-link>'},
                {name : 'Gustavo Zambelli', age : 23, gender : 'male', action : '<ui-btn color="success" size="xs">发送</ui-btn> <ui-link color="minor" size="xs">详情</ui-link>'}
            ]
        },
        methods : {
            send : function (id) {
                alert(`${this.list[id].name}发送成功!`);
            }
        }
    }
    ---
    #demo
    >desc
    由于表格中使用的Vue模板是动态生成的，所以如果需要使用一些依赖元素绑定的组件（比如：`ui-tip`），则需要将这些组件也写到模板中。
    <br><br>
    >tpl
    <div>
        <ui-table :list="list"></ui-table>
        <ui-tip target="#demo-tip-1">这个提示不会显示</ui-tip>
    </div>
    >script
    {
        data : {
            list : [
                {fisrt : '<span id="demo-tip-1">第一个提示不会显示</span>', second : '<span id="demo-tip-2">第二个提示会显示</span><ui-tip target="#demo-tip-2">这个提示可以正常显示</ui-tip>', gender : 'male'},
            ]
        }
    }
    :::

    :::vue
    @name:嵌套子内容
    ---
    #demo
    >desc
    使用`__expand`来嵌套子内容。注意使用嵌套子内容时，无法使用标题列(`col-set`中将列设为`title`)。
    >tpl
    <ui-table :list="mainList" :col-set="colset" :show-col-name="true"></ui-table>
    >script
    {
        data : {
            colset : [
                {col : 'name', name : 'Name'},
                {col : 'age', name : 'Age'},
                {col : 'gender', name : 'Gender'},
                {col : 'job', name : 'Job'}
            ],
            mainList : [
                {name : 'Tim Boelaars', age : 20, gender : 'male', job : 'driver'},
                {name : 'Andrew Colin Beck', age : 41, gender : 'female', job : 'engineer', __expand : '<ui-card><div>这里是卡片内容</div></ui-card>'},
                {name : 'Gustavo Zambelli', age : 23, gender : 'male', job : 'teacher', __expand : '<ui-table :list="context.list1"></ui-table>'}
            ],
            list1: [
                {name : 'Tim Boelaars', age : 20, gender : 'male', job : 'driver'},
                {name : 'Andrew Colin Beck', age : 41, gender : 'female', job : 'engineer'},
                {name : 'Gustavo Zambelli', age : 23, gender : 'male', job : 'teacher'}
            ]
        }
    }
    ---
    #demo
    >desc
    `__expand`也能够支持自定义组件。
    >tpl
    <ui-table :list="mainList"></ui-table>
    >script
    {
        components : {
            customCompontent : {
                template : '<div>这里是自定义组件</div>'
            }
        },
        data : {
            mainList : [
                {name : 'Tim Boelaars', age : 20, gender : 'male', job : 'driver'},
                {name : 'Andrew Colin Beck', age : 41, gender : 'female', job : 'engineer', __expand : '<custom-compontent></custom-compontent>'},
            ]
        }
    }
    :::

    :::vue
    @name:无数据
    ---
    #demo
    >desc
    当表格无数据时会显示提示信息。
    >tpl
    <ui-table :list="list"></ui-table>
    >script
    {
        data : {
            list : []
        }
    }
    ---
    #demo
    >desc
    如果设置了表头，表头仍然会显示。
    >tpl
    <ui-table :list="list" :col-set="colset" :show-col-name="true" export-csv title="无数据演示"></ui-table>
    >script
    {
        data : {
            list : [],
            colset : [
                {col : 'name', name : 'Name'},
                {col : 'age', name : 'Age'},
                {col : 'gender', name : 'Gender'},
                {col : 'job', name : 'Job'}
            ]
        }
    }
    :::

    [[[形态]]]

    #### 支持

    |类型|支持|默认|
    |-|-|-|
    |尺寸|`xs` / `s` / `m` / `l` / `xl`|`m`|
    |色彩|全部(除`transparent`)|`neutral-2`|
    |状态|不支持|-|

    <a href="/guide/status.html">查看形态文档</a> / <a href="/design/color.html">查看色彩文档</a>

    :::vue
    @name:尺寸
    ---
    #renderer
    >name
    size-repeat
    >rules
    xl,l,m,s,xs
    >tpl
    <br><br>
    <ui-table :list="window.demodata.list" size="{$sizeKey}" title="{$sizeName}的表格" export-csv></ui-table>
    :::

    :::vue
    @layout:color
    ---
    <br>
    <p>{$colorName}</p>
    <ui-table :list="window.demodata.list" color="{$colorKey}"></ui-table>
    :::

    [[[配置]]]

    :::vue
    @name:list
    ---
    #config
    >conf-desc
    表格数据，这是一个数组，数组中每个对象是一行。对象的每个键是一列，键名是列的KEY，键值是列的数值。<br><br>表格的列是对象中所有键的合集，若某项缺少键，对应的单元格内会显示为`empty-cell`的内容。
    >conf-accept
    数组
    >conf-type
    Array
    >conf-default
    `[]`
    ---
    #demo
    >desc
    用于设置表格的数据，`list`数组内每一个对象是一行，对象的每个键是一列。
    >tpl
    <ui-table :list="list"></ui-table>
    >script
    {
        data : {
            list : [
                {name : 'Tim Boelaars', age : 20, gender : 'male', job : 'driver'},
                {name : 'Andrew Colin Beck', age : 41, gender : 'female', job : 'engineer'},
                {name : 'Gustavo Zambelli', age : 23, gender : 'male', job : 'teacher'},
                {name : 'Victor Erixon', age : 15, gender : 'female', job : 'doctors'},
                {name : 'Shaun Moynihan', age : 27, gender : 'female', job : 'driver'},
                {name : 'Emir Ayouni', age : 21, gender : 'male', job : 'gardener'}
            ]
        }
    }
    ---
    #demo
    >desc
    表格的列是`list`中所有对象键的合集，若`list`中对象的键是不完全。
    >tpl
    <ui-table :list="list"></ui-table>
    >script
    {
        data : {
            list : [
                {name : 'Tim Boelaars', gender : 'male', job : 'driver'},
                {name : 'Andrew Colin Beck', age : 41, gender : 'female'},
                {name : 'Gustavo Zambelli', age : 23, gender : 'male', job : 'teacher'},
                {name : 'Victor Erixon', job : 'doctors'},
                {name : 'Shaun Moynihan'},
                {}
            ]
        }
    }
    ---
    #demo
    >desc
    在`list`中使用`__expand`来实现嵌套子内容。注意：无法同时使用标题列(`col-set`中将列设为`title`)。
    >tpl
    <ui-table :list="mainList"></ui-table>
    >script
    {
        data : {
            mainList : [
                {name : 'Tim Boelaars', age : 20, gender : 'male', job : 'driver'},
                {name : 'Andrew Colin Beck', age : 41, gender : 'female', job : 'engineer', __expand : '<ui-card><div>这里是卡片内容</div></ui-card>'},
                {name : 'Gustavo Zambelli', age : 23, gender : 'male', job : 'teacher', __expand : '<ui-table :list="context.list1"></ui-table>'}
            ],
            list1: [
                {name : 'Tim Boelaars', age : 20, gender : 'male', job : 'driver'},
                {name : 'Andrew Colin Beck', age : 41, gender : 'female', job : 'engineer'},
                {name : 'Gustavo Zambelli', age : 23, gender : 'male', job : 'teacher'}
            ]
        }
    }
    :::

    :::vue
    @name:empty-cell-value
    ---
    #config
    >conf-desc
    如果某个单元格的内容是`undefined`，则设置的默认值。
    >conf-accept
    字符串
    >conf-type
    String
    >conf-default
    `'-'`
    ---
    #demo
    >tpl
    <ui-table :list="list" empty-cell-value="空"></ui-table>
    >script
    {
        data : {
            list : [
                {name : 'Tim Boelaars', gender : 'male', job : 'driver'},
                {name : 'Andrew Colin Beck', age : 41, gender : 'female'},
                {name : 'Gustavo Zambelli', age : 23, gender : 'male', job : 'teacher'},
                {name : 'Victor Erixon', job : 'doctors'},
                {name : 'Shaun Moynihan'},
                {}
            ]
        }
    }
    :::

    :::vue
    @name:title
    ---
    #config
    >conf-desc
    表格的标题。
    >conf-accept
    标题字符串
    >conf-type
    String
    >conf-default
    `undefined`
    ---
    #demo
    >tpl
    <ui-table :list="window.demodata.list" title="这里是表格标题"></ui-table>
    :::

    :::vue
    @name:zebra-pattern
    ---
    #config
    >conf-desc
    表格斑马线样式。
    >conf-accept
    `true`<br>`false`
    >conf-type
    Boolean
    >conf-default
    `true`
    ---
    #demo
    >desc
    关闭斑马线样式。
    >tpl
    <ui-table :list="window.demodata.list" :zebra-pattern="false"></ui-table>
    :::

    :::vue
    @name:vertical-border
    ---
    #config
    >conf-desc
    显示表格内的竖直边框。
    >conf-accept
    `true`<br>`false`
    >conf-type
    Boolean
    >conf-default
    `true`
    ---
    #demo
    >desc
    隐藏表格内竖直边框。
    >tpl
    <ui-table :list="window.demodata.list" :vertical-border="false"></ui-table>
    :::

    :::vue
    @name:horizontal-border
    ---
    #config
    >conf-desc
    显示表格内的横向边框。
    >conf-accept
    `true`<br>`false`
    >conf-type
    Boolean
    >conf-default
    `true`
    ---
    #demo
    >desc
    隐藏表格内横向边框。
    >tpl
    <ui-table :list="window.demodata.list" :horizontal-border="false"></ui-table>
    ---
    #demo
    >desc
    隐藏表格内所有边框。
    >tpl
    <ui-table :list="window.demodata.list" :vertical-border="false" :horizontal-border="false"></ui-table>
    :::

    :::vue
    @name:align
    ---
    #config
    >conf-desc
    列的对齐方式，这是单个表格的全局设置，可以使用`col-set`来单独设置某一列的对齐方式。
    >conf-accept
    `'left'`: 左对齐<br>`'center'`: 居中对齐<br>`'right'`: 右对齐
    >conf-type
    String
    >conf-default
    `'center'`
    ---
    #demo
    >desc
    列内容右对齐。
    >tpl
    <ui-table :list="window.demodata.list" align="right"></ui-table>
    ---
    #demo
    >desc
    列内容左对齐。
    >tpl
    <ui-table :list="window.demodata.list" align="left"></ui-table>
    :::

    :::vue
    @name:show-col-name
    ---
    #config
    >conf-desc
    在标题行显示列的名称，需要先在`col-set`中设置每列的名称。
    >conf-accept
    `true`<br>`false`
    >conf-type
    Boolean
    >conf-default
    `false`
    ---
    #demo
    >tpl
    <ui-table :list="list" :col-set="colset" :show-col-name="true"></ui-table>
    >script
    {
        data : {
            list : window.demodata.list,
            colset : [
                {col : 'name', name : 'Name'},
                {col : 'age', name : 'Age'},
                {col : 'gender', name : 'Gender'},
                {col : 'job', name : 'Job'}
            ]
        }
    }
    :::

    :::vue
    @name:fixed-title-col
    ---
    #config
    >conf-desc
    标题列的位置，可以设置左侧或右侧。对于列数较多的表格，可以使用固定标题列。
    >conf-accept
    `'left'`: 位于左侧，不固定<br>`'right'`: 位于右侧，不固定<br>`'left-fixed'`: 位于左侧，固定<br>`'right-fixed'`: 位于右侧，固定
    >conf-type
    String
    >conf-default
    `'left'`
    ---
    #demo
    >desc
    此配置需要先在`col-set`中设置标题列。
    <br><br>
    将标题列放到右侧。
    >tpl
    <ui-table :list="list" :col-set="colset" :show-col-name="true" fixed-title-col="right"></ui-table>
    >script
    {
        data : {
            list : window.demodata.list,
            colset : [
                {col : 'name', name : 'Name', title : true},
                {col : 'age', name : 'Age'},
                {col : 'gender', name : 'Gender', title : true},
                {col : 'job', name : 'Job'}
            ]
        }
    }
    ---
    #demo
    >desc
    将标题列固定在左侧。
    >tpl
    <ui-table :list="list" :col-set="colset" :show-col-name="true" fixed-title-col="left-fixed"></ui-table>
    >script
    {
        data : {
            list : window.demodata.biglist,
            colset : [
                {col : 'name', name : 'Name', title : true, minwidth : '120px'},
                {col : 'age', name : 'Age', minwidth : '300px'},
                {col : 'gender', name : 'Gender', title : true, minwidth : '80px'},
                {col : 'job', name : 'Job', minwidth : '300px'},
                {col : 'country', name : 'Country', minwidth : '300px'},
                {col : 'height', name : 'Height', minwidth : '300px'},
                {col : 'weight', name : 'Body weight', minwidth : '300px'}
            ]
        }
    }
    ---
    #demo
    >desc
    将标题列固定在右侧，且导出的表格的列顺序也一样。
    >tpl
    <ui-table :list="list" :col-set="colset" :show-col-name="true" fixed-title-col="right-fixed" export-csv></ui-table>
    >script
    {
        data : {
            list : window.demodata.biglist,
            colset : [
                {col : 'name', name : 'Name', title : true, minwidth : '120px'},
                {col : 'age', name : 'Age', minwidth : '300px'},
                {col : 'gender', name : 'Gender', title : true, minwidth : '80px'},
                {col : 'job', name : 'Job', minwidth : '300px'},
                {col : 'country', name : 'Country', minwidth : '300px'},
                {col : 'height', name : 'Height', minwidth : '300px'},
                {col : 'weight', name : 'Body weight', minwidth : '300px'}
            ]
        }
    }
    :::

    :::vue
    @name:fixed-title-row
    ---
    #config
    >conf-desc
    固定标题行。
    >conf-accept
    `true`<br>`false`
    >conf-type
    Boolean
    >conf-default
    `false`
    ---
    #demo
    >tpl
    <ui-table style="height: 200px;" :list="list" :col-set="colset" :show-col-name="true" :fixed-title-row="true"></ui-table>
    >script
    {
        data : {
            list : window.demodata.list,
            colset : [
                {col : 'name', name : 'Name'},
                {col : 'age', name : 'Age'},
                {col : 'gender', name : 'Gender'},
                {col : 'job', name : 'Job'}
            ]
        }
    }
    ---
    #demo
    >desc
    配合`fixed-title-col`一起使用。
    >tpl
    <ui-table style="height: 200px;" :list="list" :col-set="colset" :show-col-name="true" :fixed-title-row="true" fixed-title-col="left-fixed"></ui-table>
    >script
    {
        data : {
            list : window.demodata.list,
            colset : [
                {col : 'name', name : 'Name', title : true},
                {col : 'age', name : 'Age', minwidth : '300px'},
                {col : 'gender', name : 'Gender', minwidth : '300px'},
                {col : 'job', name : 'Job', minwidth : '300px'}
            ]
        }
    }
    :::

    :::vue
    @name:title-col-width
    ---
    #config
    >conf-desc
    设置标题列的绝对宽度，请谨慎使用此配置，因为此宽度优先于其他配置的宽度。<br>若此配置为`0`，则不会启用。<br><br>此配置一般用来调整标题列与表格整体的占比。
    >conf-accept
    宽度数值(单位为px，无需添加单位)
    >conf-type
    Number
    >conf-default
    `0`
    ---
    #demo
    >desc
    将宽度设为`150`。
    >tpl
    <ui-table :list="list" :col-set="colset" :show-col-name="true" fixed-title-col="left" :title-col-width="150"></ui-table>
    >script
    {
        data : {
            list : window.demodata.biglist,
            colset : [
                {col : 'name', name : 'Name', title : true},
                {col : 'age', name : 'Age'},
                {col : 'gender', name : 'Gender', title : true},
                {col : 'job', name : 'Job'},
                {col : 'country', name : 'Country'},
                {col : 'height', name : 'Height'},
                {col : 'weight', name : 'Body weight'}
            ]
        }
    }
    ---
    #demo
    >desc
    将标题列固定在左侧并将宽度设为`150`。
    >tpl
    <ui-table :list="list" :col-set="colset" :show-col-name="true" fixed-title-col="left-fixed" :title-col-width="150"></ui-table>
    >script
    {
        data : {
            list : window.demodata.biglist,
            colset : [
                {col : 'name', name : 'Name', title : true, minwidth : '120px'},
                {col : 'age', name : 'Age', minwidth : '300px'},
                {col : 'gender', name : 'Gender', title : true, minwidth : '80px'},
                {col : 'job', name : 'Job', minwidth : '300px'},
                {col : 'country', name : 'Country', minwidth : '300px'},
                {col : 'height', name : 'Height', minwidth : '300px'},
                {col : 'weight', name : 'Body weight', minwidth : '300px'}
            ]
        }
    }
    ---
    #demo
    >desc
    将标题列固定在右侧并将宽度设为`150`。
    >tpl
    <ui-table :list="list" :col-set="colset" :show-col-name="true" fixed-title-col="right-fixed" :title-col-width="150"></ui-table>
    >script
    {
        data : {
            list : window.demodata.biglist,
            colset : [
                {col : 'name', name : 'Name', title : true, minwidth : '120px'},
                {col : 'age', name : 'Age', minwidth : '300px'},
                {col : 'gender', name : 'Gender', title : true, minwidth : '80px'},
                {col : 'job', name : 'Job', minwidth : '300px'},
                {col : 'country', name : 'Country', minwidth : '300px'},
                {col : 'height', name : 'Height', minwidth : '300px'},
                {col : 'weight', name : 'Body weight', minwidth : '300px'}
            ]
        }
    }
    :::

    :::vue
    @name:col-set
    ---
    #config
    >conf-desc
    列设置可以用来控制单独的一列。
    <br><br>
    `col-set`用于列控制，是一个数组，数组的每项都是一个配置对象。
    <br><br>
    配置对象包含下面这些属性，其中`col`用来定位需要设置列的位置。
    <br><br>
    |KEY|描述|接受值|值类型|默认值|
    |-|-|-|-|-|
    |col|需要设置列的KEY|列的KEY(`list`配置中设置)|String|`undefined`|
    |name|列的名称，如果开启`show-col-name`配置，名称会显示在标题行|名称|String|`undefined`|
    |width|列的宽度，此配置会改变列在宽度分配时的权重，但不一定完全符合设置的宽度值，如果需要最小最大宽度使用`minwidth`和`maxwidth`。<br>如果需要设置标题列的宽度请使用`title-col-width`配置。|宽度数值(必需包含单位`px`或`%`)|String|`undefined`|
    |minwidth|列的最小宽度，注意列会尽可能遵循此值，但不是绝对一致的。|宽度数值(必需包含单位`px`或`%`)|String|`undefined`|
    |maxwidth|列的最小宽度，注意列会尽可能遵循此值，但不是绝对一致的。|宽度数值(必需包含单位`px`或`%`)|String|`undefined`|
    |style|设置列的色彩样式|[设计/色彩](/design/color.html)中所有的颜色值|String|`undefined`|
    |disabled|是否展示列的禁用样式|`true`<br>`false`|Boolean|`false`|
    |align|列的对齐方式|`'left'`<br>`'right'`<br>`'align'`|String|`'align'`|
    |title|此列是否是标题列，根据`fixed-title-col`的设置所有的标题列会被放到最左或最右|`true`<br>`false`|Boolean|`false`|
    |hide|在表格中隐藏列，用于某些在`list`存在但不需要在展示的数据。列隐藏后在导出`.csv`文件时仍然会存在，如在导出`.csv`文件时也要排除，使用`col-set`配置的`export`属性来控制|`true`<br>`false`|Boolean|`false`|
    |export|导出`.csv`文件时，是否包含此列，若设为`false`此列不会被导出。一般包含行动区域的列会将此配置设为`false`|`true`<br>`false`|Boolean|`true`|
    |sort|开启单列排序，必需启用`show-col-name`才有效。多列排序需要启用`multi-sort`配置|`true`<br>`false`|Boolean|`false`|
    |sortmode|排序的模式，注意当`sortmode`不为`normal`时，必须开启`multi-sort`才生效。|`'normal'`:标准排序<br>`'asc desc'`:仅正倒序排序(默认正序)<br>`'desc asc'`:仅正倒序排序(默认倒序)<br>`'no asc'`:仅正序排序<br>`'no desc'`:仅倒序排序|String|`'normal'`|
    |filters|单列筛选项目，必需启用`show-col-name`才有效。<br><br>这是一个数组，数组中的每一项都是筛选项的对象，包含：<br>`name` : 选项名<br>`matcher` : 匹配值或匹配正则表达式|筛选项的数组|Array|`[]`|
    |pos|列的位置，这是一个数字，默认为0，表示按照数据输入的顺序。数值越大的列将会显示的越后面，数值也可以为负数。|位置数值|Number|`0`|
    <br>
    注意：在设置`width`、`minwidth`、`maxwidth`为0时，需要加上单位，如：`0px`或`0%`。
    >conf-accept
    数组
    >conf-type
    Array
    >conf-default
    `[]`
    ---
    #demo
    >title
    name
    >desc
    通过`name`及`show-col-name`设置标题行。
    >tpl
    <ui-table :list="list" :col-set="colset" :show-col-name="true"></ui-table>
    >script
    {
        data : {
            list : window.demodata.list,
            colset : [
                {col : 'name', name : 'Name'},
                {col : 'age', name : 'Age'},
                {col : 'gender', name : 'Gender'},
                {col : 'job', name : 'Job'}
            ]
        }
    }
    ---
    #demo
    >title
    name
    >desc
    标题行结合表头。
    >tpl
    <ui-table :list="list" title="表名" :col-set="colset" :show-col-name="true"></ui-table>
    >script
    {
        data : {
            list : window.demodata.list,
            colset : [
                {col : 'name', name : 'Name'},
                {col : 'age', name : 'Age'},
                {col : 'gender', name : 'Gender'},
                {col : 'job', name : 'Job'}
            ]
        }
    }
    ---
    #demo
    >title
    width、minwidth、maxwidth
    >desc
    设置列的`width` 、 `minwidth` 、 `maxwidth`。
    >tpl
    <ui-table :list="list" :col-set="colset" :show-col-name="true"></ui-table>
    >script
    {
        data : {
            list : window.demodata.list,
            colset : [
                {col : 'name', name : 'Name', maxwidth : '50px'},
                {col : 'age', name : 'Age', width : '150px'},
                {col : 'gender', name : 'Gender', minwidth : '150px'},
                {col : 'job', name : 'Job'}
            ]
        }
    }
    ---
    #demo
    >title
    style
    >desc
    设置指定列的样式（仅支持形态中的色彩）。
    >tpl
    <ui-table :list="list" :col-set="colset" :show-col-name="true"></ui-table>
    >script
    {
        data : {
            list : window.demodata.list,
            colset : [
                {col : 'name', name : 'Name'},
                {col : 'age', name : 'Age', style : 'primary'},
                {col : 'gender', name : 'Gender'},
                {col : 'job', name : 'Job'}
            ]
        }
    }
    ---
    #demo
    >title
    disabled
    >desc
    将单元格设置为禁用样式。
    >tpl
    <ui-table :list="list" :col-set="colset" :show-col-name="true"></ui-table>
    >script
    {
        data : {
            list : window.demodata.list,
            colset : [
                {col : 'name', name : 'Name'},
                {col : 'age', name : 'Age', disabled : true},
                {col : 'gender', name : 'Gender'},
                {col : 'job', name : 'Job'}
            ]
        }
    }
    ---
    #demo
    >title
    align
    >desc
    使用`align`来单独设置某一列的对齐方式。
    >tpl
    <ui-table :list="list" :col-set="colset" :show-col-name="true"></ui-table>
    >script
    {
        data : {
            list : window.demodata.list,
            colset : [
                {col : 'name', name : 'Name', align : 'right'},
                {col : 'age', name : 'Age', align : 'left'},
                {col : 'gender', name : 'Gender', align : 'center'},
                {col : 'job', name : 'Job'}
            ]
        }
    }
    ---
    #demo
    >title
    title
    >desc
    使用`title`来置标题列，标题列会被放置在最左或最右（通过`fixed-title-col`设置）。
    >tpl
    <ui-table :list="list" :col-set="colset" :show-col-name="true"></ui-table>
    >script
    {
        data : {
            list : window.demodata.list,
            colset : [
                {col : 'name', name : 'Name', title : true},
                {col : 'age', name : 'Age'},
                {col : 'gender', name : 'Gender', title : true},
                {col : 'job', name : 'Job'}
            ]
        }
    }
    ---
    #demo
    >title
    title
    >desc
    使用`title`设置标题列之后，导出的`csv`的列顺序也会保持一致。
    >tpl
    <ui-table :list="list" :col-set="colset" :show-col-name="true" export-csv></ui-table>
    >script
    {
        data : {
            list : window.demodata.list,
            colset : [
                {col : 'name', name : 'Name', title : true},
                {col : 'age', name : 'Age'},
                {col : 'gender', name : 'Gender', title : true},
                {col : 'job', name : 'Job'}
            ]
        }
    }
    ---
    #demo
    >title
    title
    >desc
    使用`title`设置标题列之后，若未开启`show-col-name`，导出的`csv`不会包含标题行。
    >tpl
    <ui-table :list="list" :col-set="colset" export-csv></ui-table>
    >script
    {
        data : {
            list : window.demodata.list,
            colset : [
                {col : 'name', name : 'Name', title : true},
                {col : 'age', name : 'Age'},
                {col : 'gender', name : 'Gender', title : true},
                {col : 'job', name : 'Job'}
            ]
        }
    }
    ---
    #demo
    >title
    hide
    >desc
    在表格中隐藏`Job`和`Gender`列，同时不导出`Gender`列。
    >tpl
    <ui-table :list="list" :col-set="colset" :show-col-name="true" export-csv></ui-table>
    >script
    {
        data : {
            list : window.demodata.list,
            colset : [
                {col : 'name', name : 'Name'},
                {col : 'age', name : 'Age'},
                {col : 'gender', name : 'Gender', hide : true, export : false},
                {col : 'job', name : 'Job', hide : true}
            ]
        }
    }
    ---
    #demo
    >title
    export
    >desc
    不导出`Gender`列。
    >tpl
    <ui-table :list="list" :col-set="colset" :show-col-name="true" export-csv></ui-table>
    >script
    {
        data : {
            list : window.demodata.list,
            colset : [
                {col : 'name', name : 'Name'},
                {col : 'age', name : 'Age'},
                {col : 'gender', name : 'Gender', export : false},
                {col : 'job', name : 'Job'}
            ]
        }
    }
    ---
    #demo
    >title
    sort
    >desc
    通过`sort`字段可以开启单列排序(多列排序需要开启`multi-sort`配置)，并且导出的`csv`也是排序之后的顺序。
    >tpl
    <ui-table :list="list" :col-set="colset" :show-col-name="true" export-csv></ui-table>
    >script
    {
        data : {
            list : window.demodata.list,
            colset : [
                {col : 'name', name : 'Name', sort : true},
                {col : 'age', name : 'Age', sort : true},
                {col : 'gender', name : 'Gender'},
                {col : 'job', name : 'Job'}
            ]
        }
    }
    ---
    #demo
    >title
    sort
    >desc
    标题列也可以使用`sort`。
    >tpl
    <ui-table :list="list" :col-set="colset" :show-col-name="true" export-csv></ui-table>
    >script
    {
        data : {
            list : window.demodata.list,
            colset : [
                {col : 'name', name : 'Name', sort : true, title : true},
                {col : 'age', name : 'Age', sort : true},
                {col : 'gender', name : 'Gender'},
                {col : 'job', name : 'Job'}
            ]
        }
    }
    ---
    #demo
    >title
    sortmode
    >desc
    通过`sortmode`字段可以设置仅正序倒序排序，必须配合`multi-sort`配置。
    >tpl
    <ui-table :list="list" :col-set="colset" multi-sort :show-col-name="true" export-csv></ui-table>
    >script
    {
        data : {
            list : window.demodata.list,
            colset : [
                {col : 'name', name : 'Name', sort : true, sortmode : 'asc desc'},
                {col : 'age', name : 'Age', sort : true, sortmode : 'asc desc'},
                {col : 'gender', name : 'Gender'},
                {col : 'job', name : 'Job'}
            ]
        }
    }
    ---
    #demo
    >title
    sortmode
    >desc
    通过`sortmode`字段可以设置仅正序倒序排序，默认设置倒序，必须配合`multi-sort`配置。
    >tpl
    <ui-table :list="list" :col-set="colset" multi-sort :show-col-name="true" export-csv></ui-table>
    >script
    {
        data : {
            list : window.demodata.list,
            colset : [
                {col : 'name', name : 'Name', sort : true, sortmode : 'desc asc'},
                {col : 'age', name : 'Age', sort : true, sortmode : 'desc asc'},
                {col : 'gender', name : 'Gender'},
                {col : 'job', name : 'Job'}
            ]
        }
    }
    ---
    #demo
    >title
    sortmode
    >desc
    通过`sortmode`字段可以设置仅支持正序，必须配合`multi-sort`配置。
    >tpl
    <ui-table :list="list" :col-set="colset" multi-sort :show-col-name="true" export-csv></ui-table>
    >script
    {
        data : {
            list : window.demodata.list,
            colset : [
                {col : 'name', name : 'Name', sort : true, sortmode : 'no asc'},
                {col : 'age', name : 'Age', sort : true, sortmode : 'no asc'},
                {col : 'gender', name : 'Gender'},
                {col : 'job', name : 'Job'}
            ]
        }
    }
    ---
    #demo
    >title
    filters
    >desc
    对Job和Age设置筛选器。
    >tpl
    <ui-table :list="list" :col-set="colset" :show-col-name="true" export-csv></ui-table>
    >script
    {
        data : {
            list : window.demodata.list,
            colset : [
                {col : 'name', name : 'Name'},
                {
                    col : 'age',
                    name : 'Age',
                    filters : [
                        {name : '10-19', matcher : /1[0-9]/},
                        {name : '20-29', matcher : /2[0-9]/},
                        {name : '40-49', matcher : /4[0-9]/},
                    ]
                },
                {col : 'gender', name : 'Gender'},
                {
                    col : 'job',
                    name : 'Job',
                    filters : [
                        {name : 'Driver', matcher : 'driver'},
                        {name : 'Doctors', matcher : 'doctors'},
                        {name : 'Gardener', matcher : /gardener/},
                        {name : 'Teacher', matcher : /teacher/}
                    ]
                }
            ]
        }
    }
    ---
    #demo
    >title
    pos
    >desc
    将`Name`的位置放到第三列，将`Age`放到第四列。
    >tpl
    <ui-table :list="list" :col-set="colset" :show-col-name="true" export-csv></ui-table>
    >script
    {
        data : {
            list : window.demodata.list,
            colset : [
                {col : 'name', name : 'Name', pos : 1},
                {col : 'age', name : 'Age', pos : 2},
                {col : 'gender', name : 'Gender'},
                {col : 'job', name : 'Job'}
            ]
        }
    }
    :::

    :::vue
    @name:row-set
    ---
    #config
    >conf-desc
    单行设置可以用来控制一行。
    <br><br>
    `row-set`用于行控制，是一个数组，数组的每项都是一个配置对象，用来设置单行。
    <br><br>
    配置对象包含下面这些属性，其中`row`用来定位需要设置行的位置。
    <br><br>
    |KEY|描述|接受值|值类型|默认值|
    |-|-|-|-|-|
    |row|需要设置的行数(从0开始，在有标题行时，0表示标题行)|行数|Number|`undefined`|
    |style|设置行的色彩样式|[设计/色彩](/design/color.html)中所有的颜色值|String|`undefined`|
    |disabled|是否展示行的禁用样式|`true`<br>`false`|Boolean|`false`|
    |align|行的对齐方式|`'left'`<br>`'right'`<br>`'align'`|String|`'align'`|
    |disableSelection|此行在多选模式下处于禁用状态，用户无法改变选中状态，但`setCheckedRows()`方法可以改变选中状态（必须配合`multi-select`才生效）|`true`<br>`false`|Boolean|`false`|
    <br>
    注意：在设置`width`、`minwidth`、`maxwidth`为0时，需要加上单位，如：`0px`或`0%`。
    >conf-accept
    数组
    >conf-type
    Array
    >conf-default
    `[]`
    ---
    #demo
    >title
    style
    >desc
    设置指定行的样式（仅支持形态中的色彩）。
    >tpl
    <ui-table :list="list" :col-set="colset" :row-set="rowset" :show-col-name="true"></ui-table>
    >script
    {
        data : {
            list : window.demodata.list,
            colset : [
                {col : 'name', name : 'Name'},
                {col : 'age', name : 'Age'},
                {col : 'gender', name : 'Gender'},
                {col : 'job', name : 'Job'}
            ],
            rowset : [
                {row : 0, style : 'success'},
                {row : 2, style : 'warning'}
            ]
        }
    }
    ---
    #demo
    >title
    disabled
    >desc
    将单行设置为禁用样式。
    >tpl
    <ui-table :list="list" :row-set="rowset" export-csv></ui-table>
    >script
    {
        data : {
            list : window.demodata.list,
            rowset : [
                {row : 1, disabled : true}
            ]
        }
    }
    ---
    #demo
    >title
    align
    >desc
    使用`align`来设置单行的对齐方式。
    >tpl
    <ui-table :list="list" :col-set="colset" :row-set="rowset" :show-col-name="true"></ui-table>
    >script
    {
        data : {
            list : window.demodata.list,
            colset : [
                {col : 'name', name : 'Name'},
                {col : 'age', name : 'Age'},
                {col : 'gender', name : 'Gender'},
                {col : 'job', name : 'Job'}
            ],
            rowset : [
                {row : 0, align : 'left'},
                {row : 1, align : 'right'},
                {row : 2, align : 'center'}
            ]
        }
    }
    ---
    #demo
    >title
    disableSelection
    >desc
    使用`disableSelection`来禁用某一行的选中。
    >tpl
    <ui-table :list="list" :col-set="colset" :row-set="rowset" :show-col-name="true" multi-select></ui-table>
    >script
    {
        data : {
            list : window.demodata.list,
            colset : [
                {col : 'name', name : 'Name'},
                {col : 'age', name : 'Age'},
                {col : 'gender', name : 'Gender'},
                {col : 'job', name : 'Job'}
            ],
            rowset : [
                {row : 1, disableSelection: true}
            ]
        }
    }
    :::

    :::vue
    @name:cell-set
    ---
    #config
    >conf-desc
    单元格设置可以用来控制单个单元格。
    <br><br>
    `cell-set`用于单元格控制，是一个数组，数组的每项都是一个配置对象，用来设置单个单元格。
    <br><br>
    配置对象包含下面这些属性，其中`row`和`col`用来定位需要设置单元格的位置。
    <br><br>
    |KEY|描述|接受值|值类型|默认值|
    |-|-|-|-|-|
    |row|需要设置单元格的行数(从0开始，在有标题行时，0表示标题行)|行数|Number|`undefined`|
    |col|需要设置单元格所在列的KEY|列的KEY(`list`配置中设置)|String|`undefined`|
    |style|设置单元格的色彩样式|[设计/色彩](/design/color.html)中所有的颜色值|String|`undefined`|
    |disabled|是否展示单元格的禁用样式|`true`<br>`false`|Boolean|`false`|
    |align|单元格的对齐方式|`'left'`<br>`'right'`<br>`'align'`|String|`'align'`|
    <br>
    注意：在设置`width`、`minwidth`、`maxwidth`为0时，需要加上单位，如：`0px`或`0%`。
    >conf-accept
    数组
    >conf-type
    Array
    >conf-default
    `[]`
    ---
    #demo
    >title
    style
    >desc
    设置指定单元格的样式（仅支持形态中的色彩）。
    >tpl
    <ui-table :list="list" :col-set="colset" :cell-set="cellset" :show-col-name="true"></ui-table>
    >script
    {
        data : {
            list : window.demodata.list,
            colset : [
                {col : 'name', name : 'Name'},
                {col : 'age', name : 'Age'},
                {col : 'gender', name : 'Gender'},
                {col : 'job', name : 'Job'}
            ],
            cellset : [
                {row : 0, col : 'age', style : 'success'},
                {row : 2, col : 'age', style : 'warning'},
                {row : 3, col : 'job', style : 'danger'}
            ]
        }
    }
    ---
    #demo
    >title
    disabled
    >desc
    设将单元格设置为禁用样式。
    >tpl
    <ui-table :list="list" :cell-set="cellset" export-csv></ui-table>
    >script
    {
        data : {
            list : window.demodata.list,
            cellset : [
                {row : 1, col : 'age', disabled : true}
            ]
        }
    }
    ---
    #demo
    >title
    align
    >desc
    使用`align`来单独设置单元格的对齐方式。
    >tpl
    <ui-table :list="list" :col-set="colset" :cell-set="cellset" :show-col-name="true"></ui-table>
    >script
    {
        data : {
            list : window.demodata.list,
            colset : [
                {col : 'name', name : 'Name'},
                {col : 'age', name : 'Age'},
                {col : 'gender', name : 'Gender'},
                {col : 'job', name : 'Job'}
            ],
            cellset : [
                {row : 0, col : 'age', align : 'left'},
                {row : 1, col : 'age', align : 'right'},
                {row : 2, col : 'age', align : 'center'},
                {row : 3, col : 'age', align : 'left'},
                {row : 4, col : 'age', align : 'right'}
            ]
        }
    }
    :::

    :::vue
    @name:export-csv
    ---
    #config
    >conf-desc
    开启将表格导出csv文件的功能。<br><br>导出的表格单元格内容中若包含HTML，则会被过滤仅保留文本内容(若存在`<br>`则会被替换成换行符)。
    >conf-accept
    `true`<br>`false`
    >conf-type
    Boolean
    >conf-default
    `false`
    ---
    #demo
    >tpl
    <ui-table :list="list" export-csv></ui-table>
    >script
    {
        data : {
            list : window.demodata.list
        }
    }
    :::

    :::vue
    @name:csv-name
    ---
    #config
    >conf-desc
    导出csv文件的名称。
    >conf-accept
    文件名称(不需要加尾缀)
    >conf-type
    String
    >conf-default
    `undefined`
    ---
    #demo
    >tpl
    <ui-table :list="list" export-csv csv-name="demo"></ui-table>
    >script
    {
        data : {
            list : window.demodata.list
        }
    }
    :::

    :::vue
    @name:custom-sort
    ---
    #config
    >conf-desc
    自定义排序规则。使用`custom-sort`可以通过监听`col-sort`事件获取排序列的KEY和排序规则，然后通过自定义逻辑来修改`list`实现排序。
    <br>
    一般和服务端排序一起使用。
    >conf-accept
    `true`<br>`false`
    >conf-type
    Boolean
    >conf-default
    `false`
    ---
    #demo
    >tpl
    <ui-table :list="list" :col-set="colset" show-col-name custom-sort @col-sort="customSort"></ui-table>
    >script
    {
        data : {
            list : window.demodata.list,
            colset : [
                {col : 'name', name : 'Name'},
                {col : 'age', name : 'Age', sort : true},
                {col : 'gender', name : 'Gender'},
                {col : 'job', name : 'Job'}
            ]
        },
        methods : {
            customSort : function (key, type) {

                if (type === 'desc') {

                    this.list = sortby(this.list, (val) => {

                        return val[key];

                    });

                } else if (type === 'asc') {

                    this.list = sortby(this.list, (val) => {

                        return -val[key];

                    });

                } else {

                    // 原始顺序
                    this.list = window.demodata.list;

                }

            }
        }
    }
    ---
    #demo
    >tpl
    <ui-table :list="list" :col-set="colset" show-col-name multi-sort custom-sort @col-sort="customSort"></ui-table>
    >script
    {
        data : {
            list : window.demodata.list,
            colset : [
                {col : 'name', name : 'Name'},
                {col : 'age', name : 'Age', sort : true, sortmode : 'desc asc'},
                {col : 'gender', name : 'Gender'},
                {col : 'job', name : 'Job'}
            ]
        },
        methods : {
            customSort : function (key, type) {

                console.log(99, key, type);

                if (type === 'desc') {

                    this.list = sortby(this.list, (val) => {

                        return val[key];

                    });

                } else if (type === 'asc') {

                    this.list = sortby(this.list, (val) => {

                        return -val[key];

                    });

                } else {

                    // 原始顺序
                    this.list = window.demodata.list;

                }

            }
        }
    }
    :::

    :::vue
    @name:multi-sort
    ---
    #config
    >conf-desc
    支持多列排序，默认只支持单列排序。多列排序时会根据所选排序列的顺序进行多次排序。使用此配置前需要先通过`col-set`的指定排序列。
    <br>
    注意若使用了`custom-sort`，则此配置无效。
    >conf-accept
    `true`<br>`false`
    >conf-type
    Boolean
    >conf-default
    `false`
    ---
    #demo
    >desc
    使用`multi-sort`后设置多个排序列，当多个列进行排序时会按照先后顺序对表格进行多次排序。
    >tpl
    <ui-table :list="list" :col-set="colset" show-col-name multi-sort export-csv></ui-table>
    >script
    {
        data : {
            list : window.demodata.list,
            colset : [
                {col : 'name', name : 'Name', sort : true},
                {col : 'age', name : 'Age', sort : true},
                {col : 'gender', name : 'Gender', sort : true},
                {col : 'job', name : 'Job'}
            ]
        }
    }
    :::

    :::vue
    @name:highlight-row
    ---
    #config
    >conf-desc
    是否高亮行，开启后最后点击的行会被高亮，同时也可以通过`setHighlightRow()`方法来高亮指定行，同一时间只能高亮一行。
    <br><br>
    也可以通过`row-set`配置来实现类似的功能，区别在于此配置可以通过`getHighlightRow()`来获取最后点击行，从而实现单选的功能。
    <br>
    同时也可以通过`cleanHighlightRow()`来取消高亮最后点击行。
    >conf-accept
    `true`<br>`false`
    >conf-type
    Boolean
    >conf-default
    `false`
    ---
    #demo
    >desc
    开启此配置后，最后点击的行将被高亮。
    >tpl
    <ui-table :list="list" highlight-row></ui-table>
    >script
    {
        data : {
            list : window.demodata.list
        }
    }
    :::

    :::vue
    @name:highlight-row-background
    ---
    #config
    >conf-desc
    当启用`highlight-row`配置后，高亮行的背景颜色。默认背景色(`default`)将匹配组件本身设置的色彩(`color`配置)。
    >conf-accept
    `'default'`<br>任意合法的`background-color`(CSS)的数值
    >conf-type
    String
    >conf-default
    `'default'`
    ---
    #demo
    >tpl
    <ui-table :list="list" highlight-row highlight-row-background="#A5C7FF"></ui-table>
    >script
    {
        data : {
            list : window.demodata.list
        }
    }
    :::

    :::vue
    @name:highlight-row-color
    ---
    #config
    >conf-desc
    当启用`highlight-row`配置后，高亮行的文字颜色。默认文字颜色(`default`)将匹配组件本身设置的色彩(`color`配置)。
    >conf-accept
    `'default'`<br>任意合法的`color`(CSS)的数值
    >conf-type
    String
    >conf-default
    `'default'`
    ---
    #demo
    >tpl
    <ui-table :list="list" highlight-row highlight-row-background="#2879FA" highlight-row-color="#FFF"></ui-table>
    >script
    {
        data : {
            list : window.demodata.list
        }
    }
    :::

    :::vue
    @name:multi-select
    ---
    #config
    >conf-desc
    表格可多选（多选仅行可用）。
    >conf-accept
    `true`<br>`false`
    >conf-type
    Boolean
    >conf-default
    `false`
    ---
    #demo
    >desc
    开启此配置后，可以选择表格的行。
    >tpl
    <ui-table :list="list" multi-select></ui-table>
    >script
    {
        data : {
            list : window.demodata.list
        }
    }
    ---
    #demo
    >desc
    开启`show-col-name`配置后，会展示全选的复选框。
    >tpl
    <ui-table :list="list" :col-set="colset" multi-select show-col-name></ui-table>
    >script
    {
        data : {
            list : window.demodata.list,
            colset : [
                {col : 'name', name : 'Name'},
                {col : 'age', name : 'Age'},
                {col : 'gender', name : 'Gender'},
                {col : 'job', name : 'Job'}
            ]
        }
    }
    ---
    #demo
    >desc
    开启`fixed-title-col`配置后，复选框也会固定到标题列。
    >tpl
    <ui-table :list="list" :col-set="colset" multi-select show-col-name fixed-title-col="left"></ui-table>
    >script
    {
        data : {
            list : window.demodata.list,
            colset : [
                {col : 'name', name : 'Name', title: true},
                {col : 'age', name : 'Age'},
                {col : 'gender', name : 'Gender'},
                {col : 'job', name : 'Job'}
            ]
        }
    }
    :::

    :::vue
    @name:no-hover-effect
    ---
    #config
    >conf-desc
    是否显示鼠标`hover`时的效果。
    >conf-accept
    `true`<br>`false`
    >conf-type
    Boolean
    >conf-default
    `true`
    ---
    #demo
    >tpl
    <ui-table :list="list" :hover-effect="false"></ui-table>
    >script
    {
        data : {
            list : window.demodata.list
        }
    }
    :::

    :::vue
    @name:loading
    ---
    #config
    >conf-desc
    表格是否处于数据加载状态。
    >conf-accept
    `true`<br>`false`
    >conf-type
    Boolean
    >conf-default
    `false`
    ---
    #demo
    >tpl
    <ui-table :list="list" :loading="true"></ui-table>
    >script
    {
        data : {
            list : window.demodata.list
        }
    }
    :::

    :::vue
    @name:loading-note
    ---
    #config
    >conf-desc
    当表格处于数据加载状态时的提示内容。
    >conf-accept
    提示文案
    >conf-type
    String
    >conf-default
    `'数据加载中...'`
    ---
    #demo
    >tpl
    <ui-table :list="list" :loading="true" loading-note="请稍后"></ui-table>
    >script
    {
        data : {
            list : window.demodata.list
        }
    }
    :::

    [[[方法]]]

    :::vue
    @name:getHighlightRow()
    ---
    #method
    >method-desc
    获取高亮的行号（从`0`开始），需要开启`highlight-row`配置，否则返回`-1`。
    >method-return
    高亮的行号。
    ---
    #demo
    >tpl
    <div>
        <ui-table ref="demo1" :list="list" highlight-row></ui-table>
        <br><br> 
        <ui-link js="alert(morning.findVM('demo1').getHighlightRow());">获取高亮的行号</ui-link>
    </div>
    >script
    {
        data : {
            list : window.demodata.list
        }
    }
    :::

    :::vue
    @name:setHighlightRow(rowNum)
    ---
    #method
    >method-desc
    高亮指定的行，需要开启`highlight-row`才生效。
    >method-args
    |rowNum|NO|需要高亮的行数|行数(从`0`开始)|`Number`|`undefined`|
    >method-return
    当前组件VM实例。
    ---
    #demo
    >tpl
    <div>
        <ui-table ref="demo3" :list="list" highlight-row></ui-table>
        <br><br> 
        <ui-link js="morning.findVM('demo3').setHighlightRow(1);">高亮第二行</ui-link>
    </div>
    >script
    {
        data : {
            list : window.demodata.list
        }
    }
    :::

    :::vue
    @name:cleanHighlightRow()
    ---
    #method
    >method-desc
    清除高亮行，需要开启`highlight-row`配置才有效。
    >method-return
    当前组件VM实例。
    ---
    #demo
    >tpl
    <div>
        <ui-table ref="demo2" :list="list" highlight-row></ui-table>
        <br><br> 
        <ui-link js="morning.findVM('demo2').cleanHighlightRow();">清除高亮行</ui-link>
    </div>
    >script
    {
        data : {
            list : window.demodata.list
        }
    }
    :::

    :::vue
    @name:getCheckedRows()
    ---
    #method
    >method-desc
    获取选中的行号（从`0`开始），需要开启`multi-select`配置。
    >method-return
    选中的行号组成的数组。
    ---
    #demo
    >tpl
    <div>
        <ui-table ref="demo4" :list="list" multi-select></ui-table>
        <br><br> 
        <ui-link js="alert(morning.findVM('demo4').getCheckedRows().join(','));">获取选中的行号</ui-link>
    </div>
    >script
    {
        data : {
            list : window.demodata.list
        }
    }
    :::

    :::vue
    @name:setCheckedRows(rows)
    ---
    #method
    >method-desc
    选中特定的行，需要开启`multi-select`配置。
    >method-args
    |rows|YES|需要选中行数(从`0`开始的数字)所组成的数组。|数组<br>`undefined`|`Array`<br>`Undefined`|`undefined`|
    >method-return
    当前组件VM实例。
    ---
    #demo
    >tpl
    <div>
        <ui-table ref="demo9" :list="list" multi-select></ui-table>
        <br><br> 
        <ui-link js="morning.findVM('demo9').setCheckedRows([1, 4]);">选中第3、5行</ui-link><br>
        <ui-link js="morning.findVM('demo9').setCheckedRows();">取消选中所有行</ui-link>
    </div>
    >script
    {
        data : {
            list : window.demodata.list
        }
    }
    :::

    :::vue
    @name:checkedAllRows()
    ---
    #method
    >method-desc
    选中所有行，需要开启`multi-select`配置。
    >method-return
    当前组件VM实例。
    ---
    #demo
    >tpl
    <div>
        <ui-table ref="demo11" :list="list" multi-select></ui-table>
        <br><br> 
        <ui-link js="morning.findVM('demo11').checkedAllRows();">选中所有行</ui-link>
    </div>
    >script
    {
        data : {
            list : window.demodata.list
        }
    }
    :::

    :::vue
    @name:uncheckAllRows()
    ---
    #method
    >method-desc
    取消选中所有行，需要开启`multi-select`配置。
    >method-return
    当前组件VM实例。
    ---
    #demo
    >tpl
    <div>
        <ui-table ref="demo12" :list="list" multi-select></ui-table>
        <br><br> 
        <ui-link js="morning.findVM('demo12').uncheckAllRows();">取消选中所有行</ui-link>
    </div>
    >script
    {
        data : {
            list : window.demodata.list
        }
    }
    :::

    :::vue
    @name:exportToCsv()
    ---
    #method
    >method-desc
    导出表格内容至`csv`文件并下载。
    >method-return
    当前组件VM实例。
    ---
    #demo
    >tpl
    <div>
        <ui-table ref="demo14" :list="list"></ui-table>
        <br><br> 
        <ui-link js="morning.findVM('demo14').exportToCsv();">导出数据</ui-link>
    </div>
    >script
    {
        data : {
            list : window.demodata.list
        }
    }
    :::

    [[[事件]]]

    :::vue
    @name:list-change
    ---
    #event
    >event-desc
    当表格数据变化后触发。
    ---
    #demo
    >tpl
    <div>
        <ui-table ref="demo2" :list="list" @list-change="echo"></ui-table>
        <br><br>
        <ui-link js="morning.findVM('demo2').conf.list = window.demodata.biglist;">重新设置表格数据</ui-link>
    </div>
    >script
    {
        data : {
            list : window.demodata.list
        },
        methods : {
            echo : function () {
                console.log('demo2.console1', `list-change event!`);
            }
        }
    }
    :::

    :::vue
    @name:cell-click
    ---
    #event
    >event-desc
    当单元格被点击时触发。
    >event-args
    |rowNum|被点击单元格所在的行号(从`0`开始)|`Number`|
    |colKey|被点击单元格所在列的`key`|`String`|
    ---
    #demo
    >tpl
    <div>
        <ui-table ref="demo5" :list="list" @cell-click="echo"></ui-table>
        <br><br>
        <p>点击单元格触发事件</p>
    </div>
    >script
    {
        data : {
            list : window.demodata.list
        },
        methods : {
            echo : function (rowNum, colKey) {
                console.log('demo5.console1', `cell-click event!`, rowNum, colKey);
            }
        }
    }
    :::

    :::vue
    @name:cell-enter
    ---
    #event
    >event-desc
    当鼠标移入单元格时触发。
    >event-args
    |rowNum|鼠标移入单元格所在的行号(从`0`开始)|`Number`|
    |colKey|鼠标移入单元格所在列的`key`|`String`|
    ---
    #demo
    >tpl
    <div>
        <ui-table ref="demo6" :list="list" @cell-enter="echo"></ui-table>
        <br><br>
        <p>鼠标移入单元格触发事件</p>
    </div>
    >script
    {
        data : {
            list : window.demodata.list
        },
        methods : {
            echo : function (rowNum, colKey) {
                console.log('demo6.console1', `cell-enter event!`, rowNum, colKey);
            }
        }
    }
    :::

    :::vue
    @name:cell-leave
    ---
    #event
    >event-desc
    当鼠标移出单元格时触发。
    >event-args
    |rowNum|鼠标移出单元格所在的行号(从`0`开始)|`Number`|
    |colKey|鼠标移出单元格所在列的`key`|`String`|
    ---
    #demo
    >tpl
    <div>
        <ui-table ref="demo7" :list="list" @cell-leave="echo"></ui-table>
        <br><br>
        <p>鼠标移出单元格触发事件</p>
    </div>
    >script
    {
        data : {
            list : window.demodata.list
        },
        methods : {
            echo : function (rowNum, colKey) {
                console.log('demo7.console1', `cell-leave event!`, rowNum, colKey);
            }
        }
    }
    :::

    :::vue
    @name:highlight-row-change
    ---
    #event
    >event-desc
    当高亮行改变时触发，仅在开启`highlight-row`配置后有效。
    <br>
    可以通过`getHighlightRow()`方法来获取高亮的行
    ---
    #demo
    >tpl
    <div>
        <ui-table ref="demo9" :list="list" highlight-row @highlight-row-change="echo"></ui-table>
        <br><br>
        <p>点击行触发事件</p>
    </div>
    >script
    {
        data : {
            list : window.demodata.list
        },
        methods : {
            echo : function () {
                console.log('demo9.console1', `highlight-row-change event!`);
            }
        }
    }
    :::

    :::vue
    @name:checked-row-change
    ---
    #event
    >event-desc
    当选中行发生改变时触发，仅在开启`multi-select`配置后有效。
    <br>
    可以通过`getCheckedRows()`方法来获取选中的行
    ---
    #demo
    >tpl
    <div>
        <ui-table ref="demo8" :list="list" multi-select @checked-row-change="echo"></ui-table>
        <br><br>
        <p>选中行触发事件</p>
    </div>
    >script
    {
        data : {
            list : window.demodata.list
        },
        methods : {
            echo : function () {
                console.log('demo8.console1', `checked-row-change event!`);
            }
        }
    }
    :::

    :::vue
    @name:col-sort
    ---
    #event
    >event-desc
    当列发生排序时触发。
    >event-args
    |key|当前排序列的KEY|`String`|
    |type|排序方式，包含：`asc`:升序，`desc`:降序，`no`:无排序|`String`|
    ---
    #demo
    >tpl
    <div>
        <ui-table :list="list" :col-set="colset" show-col-name custom-sort @col-sort="customSort"></ui-table>
        <p>点击排序触发事件</p>
    </div>
    >script
    {
        data : {
            list : window.demodata.list,
            colset : [
                {col : 'name', name : 'Name'},
                {col : 'age', name : 'Age', sort : true},
                {col : 'gender', name : 'Gender'},
                {col : 'job', name : 'Job'}
            ]
        },
        methods : {
            customSort : function (key, type) {

                console.log('demo10.console1', `col-sort event!`, key, type);

                if (type === 'desc') {

                    this.list = sortby(this.list, (val) => {

                        return val[key];

                    });

                } else if (type === 'asc') {

                    this.list = sortby(this.list, (val) => {

                        return -val[key];

                    });

                } else {

                    // 原始顺序
                    this.list = window.demodata.list;

                }

            }
        }
    }
    :::

    :::vue
    @layout:lifecycle-event
    ---
    table
    表格
    :::

    [[[源码]]]

    <iframe src="/report/coverage/lib/components/table/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>

    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                 from 'Docs/common/DocComponent.vue';
import sortby                       from 'lodash.sortby';

window.sortby = sortby;

export default {
    data : function () {

        return {
            page : 'table'
        };

    },
    created : function () {

        /* eslint-disable no-magic-number */
        window.demodata = {
            list : [
                {
                    name : 'Tim Boelaars',
                    age : 20,
                    gender : 'male',
                    job : 'driver'
                },
                {
                    name : 'Andrew Colin Beck',
                    age : 41,
                    gender : 'female',
                    job : 'engineer'
                },
                {
                    name : 'Gustavo Zambelli',
                    age : 23,
                    gender : 'male',
                    job : 'teacher'
                },
                {
                    name : 'Victor Erixon',
                    age : 15,
                    gender : 'female',
                    job : 'doctors'
                },
                {
                    name : 'Shaun Moynihan',
                    age : 27,
                    gender : 'female',
                    job : 'driver'
                },
                {
                    name : 'Emir Ayouni',
                    age : 21,
                    gender : 'male',
                    job : 'gardener'
                }
            ],
            biglist : [
                {
                    name : 'Tim Boelaars',
                    age : 20,
                    gender : 'male',
                    job : 'driver',
                    country : 'England',
                    height : 187,
                    weight : 160
                },
                {
                    name : 'Andrew Colin Beck',
                    age : 41,
                    gender : 'female',
                    job : 'engineer',
                    country : 'United States',
                    height : 165,
                    weight : 116
                },
                {
                    name : 'Gustavo Zambelli',
                    age : 23,
                    gender : 'male',
                    job : 'teacher',
                    country : 'Thailand',
                    height : 178,
                    weight : 132
                },
                {
                    name : 'Victor Erixon',
                    age : 15,
                    gender : 'female',
                    job : 'doctors',
                    country : 'United States',
                    height : 159,
                    weight : 100
                },
                {
                    name : 'Shaun Moynihan',
                    age : 27,
                    gender : 'female',
                    job : 'driver',
                    country : 'England',
                    height : 163,
                    weight : 116
                },
                {
                    name : 'Emir Ayouni',
                    age : 21,
                    gender : 'male',
                    job : 'gardener',
                    country : 'United States',
                    height : 173,
                    weight : 122
                }
            ]
        };
        /* eslint-enable no-magic-number */

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
