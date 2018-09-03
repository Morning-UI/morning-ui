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
    @name:内嵌HTML
    ---
    #demo
    >desc
    表格数据列表支持传入HTML内容，在渲染时这些HTML也会被渲染。
    >tpl
    <ui-table :list="list"></ui-table>
    >script
    {
        data : {
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
    @name:内嵌Vue组件
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
    |尺寸|不支持|-|
    |色彩|全部|`light-gray`|
    |状态|不支持|-|

    <a href="/guide/status.html">查看形态文档</a>

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


    [[[源码]]]

    <iframe src="/report/coverage/lib/components/table/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>

    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                 from 'Docs/common/DocComponent.vue';

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
