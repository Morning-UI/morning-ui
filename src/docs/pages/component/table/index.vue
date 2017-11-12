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

    #### 使用

    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
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
    });
    ---
    <ui-table :list="list"></ui-table>
    :::

    [[[声明]]]

    #### 支持

    |类型|支持|默认|
    |-|-|-|
    |尺寸|不支持|-|
    |色彩|全部|`light-gray`|
    |状态|不支持|-|

    #### 色彩

    :::repeat/html
    color:theme
    color:feature
    color:black
    color:blue
    color:silver
    color:gray
    ---
    <p>{$colorName}</p>
    <ui-table :list="window.list" {$colorKey}></ui-table>
    <br>
    :::

    [[[配置]]]

    |KEY|描述|接受值|值类型|默认值|
    |-|-|-|-|-|
    |list|表格数据，这是一个数组，数组中每个对象是一行。对象的每个键是一列，键名是列的KEY，键值是列的数值。<br><br>表格的列是对象中所有键的合集，若某项缺少键，对应的单元格内会显示为`empty-cell`的内容。|数组|Array|`[]`|
    |empty-cell-value|如果某个单元格的内容是`undefined`，则设置的默认值|字符串|String|`'-'`|
    |title|表格的标题|标题字符串|String|`undefined`|
    |zebra-pattern|表格斑马线样式|`true`<br>`false`|Boolean|`true`|
    |vertical-border|显示表格内的竖直边框|`true`<br>`false`|Boolean|`true`|
    |horizontal-border|显示表格内的横向边框|`true`<br>`false`|Boolean|`true`|
    |col-align|列的对齐方式，这是单个表格的全局设置，可以使用`col-set`来单独设置某一列的对齐方式|`'left'`: 左对齐<br>`'center'`: 居中对齐<br>`'right'`: 右对齐|String|`'center'`|
    |show-col-name|在标题行显示列的名称，需要先在`col-set`中设置每列的名称|`true`<br>`false`|Boolean|`false`|
    |fixed-title-col|标题列的位置，可以设置左侧或右侧。对于列数较多的表格，可以使用固定标题列。|`'left'`: 位于左侧，不固定<br>`'right'`: 位于右侧，不固定<br>`'left-fixed'`: 位于左侧，固定<br>`'right-fixed'`: 位于右侧，固定|String|`'left'`|
    |col-set|列设置，这是一个对象，对象的键名对应列的KEY，对象的键值是一个配置对象，用来设置列。<br><br>配置对象包含：<br>`name`: 列的名称(String)，如果开启`show-col-name`会显示在标题行<br>`width`: 列的宽度(`px` / `%`)，宽度数组会改变列在宽度分配时的权重，但不一定完全符合设置的宽度值，如果需要控制宽度的绝对值使用`minwidth`或`maxwidth`<br>`minwidth`: 列的最小宽度(`px` / `%`)<br>`maxwidth`: 列的最大宽度(`px` / `%`)<br>`align`: 此列的对齐方式，支持三种：`left`、`center`、`right`，默认使用`col-align`的设置<br>`title`: 此列是否是标题列(Boolean)，根据`fixed-title-col`的设置所有的标题列会被放到最左或最右<br><br>注意：在设置`width`、`minwidth`、`maxwidth`为0时，需要加上单位，如：`0px`或`0%`。|数组|Array|`[]`|
    |export-csv|开启将表格导出csv文件的功能|`true`<br>`false`|Boolean|`false`|
    |export-csv-name|导出csv文件的名称|文件名称(不需要加尾缀)|String|`undefined`|

    #### list

    用于设置表格的数据，`list`数组内每一个对象是一行，对象的每个键是一列：

    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
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
    });
    ---
    <ui-table :list="list"></ui-table>
    :::

    表格的列是`list`中所有对象键的合集，若`list`中对象的键是不完全：

    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
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
    });
    ---
    <ui-table :list="list"></ui-table>
    :::

    #### empty-cell-value

    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
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
    });
    ---
    <ui-table :list="list" empty-cell-value="空"></ui-table>
    :::

    #### title

    :::democode/html
    <ui-table :list="list" title="这里是表格标题"></ui-table>
    :::

    #### zebra-pattern
    
    关闭斑马线样式：

    :::democode/html
    <ui-table :list="list" :zebra-pattern="false"></ui-table>
    :::

    #### vertical-border
    
    隐藏表格内竖直边框：

    :::democode/html
    <ui-table :list="list" :vertical-border="false"></ui-table>
    :::

    #### horizontal-border
    
    隐藏表格内横向边框：

    :::democode/html
    <ui-table :list="list" :horizontal-border="false"></ui-table>
    :::

    隐藏表格内所有边框：

    :::democode/html
    <ui-table :list="list" :vertical-border="false" :horizontal-border="false"></ui-table>
    :::

    #### col-align

    列内容右对齐：

    :::democode/html
    <ui-table :list="list" col-align="right"></ui-table>
    :::

    列内容左对齐：

    :::democode/html
    <ui-table :list="list" col-align="left"></ui-table>
    :::

    #### fixed-title-col
    
    此配置需要先在`col-set`中设置标题列。

    将标题列放到右侧：

    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
        data : {
            list : window.list,
            colset : {
                name : {name : 'Name', title : true},
                age : {name : 'Age'},
                gender : {name : 'Gender', title : true},
                job : {name : 'Job'}
            }
        }
    });
    ---
    <ui-table :list="list" :col-set="colset" :show-col-name="true" fixed-title-col="right"></ui-table>
    :::

    将标题列固定在左侧：

    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
        data : {
            list : window.biglist,
            colset : {
                name : {name : 'Name', title : true},
                age : {name : 'Age'},
                gender : {name : 'Gender', title : true},
                job : {name : 'Job'},
                country : {name : 'Country'},
                height : {name : 'Height'},
                weight : {name : 'Body weight'}
            }
        }
    });
    ---
    <ui-table :list="list" :col-set="colset" :show-col-name="true" fixed-title-col="left-fixed"></ui-table>
    :::

    #### col-set

    通过`name`及`show-col-name`设置标题行：

    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
        data : {
            list : window.list,
            colset : {
                name : {name : 'Name'},
                age : {name : 'Age'},
                gender : {name : 'Gender'},
                job : {name : 'Job'}
            }
        }
    });
    ---
    <ui-table :list="list" :col-set="colset" :show-col-name="true"></ui-table>
    :::

    设置列的`width` 、 `minwidth` 、 `maxwidth`：

    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
        data : {
            list : window.list,
            colset : {
                name : {name : 'Name', maxwidth : '50px'},
                age : {name : 'Age', width : '150px'},
                gender : {name : 'Gender', minwidth : '150px'},
                job : {name : 'Job'}
            }
        }
    });
    ---
    <ui-table :list="list" :col-set="colset" :show-col-name="true"></ui-table>
    :::

    标题行结合表头：

    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
        data : {
            list : window.list,
            colset : {
                name : {name : 'Name'},
                age : {name : 'Age'},
                gender : {name : 'Gender'},
                job : {name : 'Job'}
            }
        }
    });
    ---
    <ui-table :list="list" title="表名" :col-set="colset" :show-col-name="true"></ui-table>
    :::

    使用`align`来单独设置某一列的对齐方式：

    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
        data : {
            list : window.list,
            colset : {
                name : {name : 'Name', align : 'right'},
                age : {name : 'Age', align : 'left'},
                gender : {name : 'Gender', align : 'center'},
                job : {name : 'Job'}
            }
        }
    });
    ---
    <ui-table :list="list" :col-set="colset" :show-col-name="true"></ui-table>
    :::

    使用`title`来置标题列，标题列会被放置在最左或最右（通过`fixed-title-col`设置）：

    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
        data : {
            list : window.list,
            colset : {
                name : {name : 'Name', title : true},
                age : {name : 'Age'},
                gender : {name : 'Gender', title : true},
                job : {name : 'Job'}
            }
        }
    });
    ---
    <ui-table :list="list" :col-set="colset" :show-col-name="true"></ui-table>
    :::

    使用`title`设置标题列之后，导出的`csv`的列顺序也会保持一致：

    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
        data : {
            list : window.list,
            colset : {
                name : {name : 'Name', title : true},
                age : {name : 'Age'},
                gender : {name : 'Gender', title : true},
                job : {name : 'Job'}
            }
        }
    });
    ---
    <ui-table :list="list" :col-set="colset" :show-col-name="true" export-csv></ui-table>
    :::

    使用`title`设置标题列之后，若未开启`show-col-name`，导出的`csv`不会包含标题行：

    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
        data : {
            list : window.list,
            colset : {
                name : {name : 'Name', title : true},
                age : {name : 'Age'},
                gender : {name : 'Gender', title : true},
                job : {name : 'Job'}
            }
        }
    });
    ---
    <ui-table :list="list" :col-set="colset" export-csv></ui-table>
    :::


    #### export-csv

    :::democode/html
    <ui-table :list="list" export-csv></ui-table>
    :::

    #### export-csv-name

    :::democode/html
    <ui-table :list="list" export-csv export-csv-name="demo"></ui-table>
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
        window.list = [
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
        ];

        window.biglist = [
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
        ];
        /* eslint-enable no-magic-number */

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
