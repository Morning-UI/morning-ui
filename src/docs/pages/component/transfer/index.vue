<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 穿梭框 `<ui-transfer>`
    
    <doc-component-status page="transfer"></doc-component-status>
    
    [[[开始]]]

    定义穿梭框，穿梭框是一个处理结构化数据的组件，数值中包含`source`和`target`两个数组，用于区分一组KEY分别属于哪一个数组。

    :::vue
    @name:使用
    ---
    #demo
    >tpl
    <div style="width:500px;height:280px;">
        <ui-transfer form-name="选择" :list="list" v-model="value"></ui-transfer>
    </div>
    >script
    {
        data : {
            list : {
                item1 : '备选项-1',
                item2 : '备选项-2',
                item3 : '备选项-3',
                item4 : '备选项-4',
                item5 : '备选项-5',
                item6 : '备选项-6',
                item7 : '备选项-7',
                item8 : '备选项-8',
                item9 : '备选项-9'
            },
            value : {
                source : [
                    'item2',
                    'item3',
                    'item4',
                    'item5',
                    'item6',
                    'item7',
                    'item8',
                    'item9'
                ],
                target : [
                    'item1'
                ]
            }
        }
    }
    :::

    [[[形态]]]

    :::preset
    @name:formStatus
    @uikey:transfer
    @defaultValue:{source:['item2','item3','item4','item5','item6','item7','item8','item9'],target:['item1']}
    @attrs: :list="{item1:'备选项-1',item2:'备选项-2',item3:'备选项-3',item4:'备选项-4',item5:'备选项-5',item6:'备选项-6',item7:'备选项-7',item8:'备选项-8',item9:'备选项-9'}"
    @wrapStyle:width:500px;height:280px;
    :::

    [[[配置]]]

    :::preset
    @name:formConfig
    @uikey:transfer
    @defaultValue:{source:['item2','item3','item4','item5','item6','item7','item8','item9'],target:['item1']}
    @attrs: :list="{item1:'备选项-1',item2:'备选项-2',item3:'备选项-3',item4:'备选项-4',item5:'备选项-5',item6:'备选项-6',item7:'备选项-7',item8:'备选项-8',item9:'备选项-9'}"
    @wrapStyle:width:500px;height:280px;
    :::

    :::vue
    @name:list
    ---
    #config
    >conf-desc
    通过此配置来设置可选项目，这是一个对象。
    <br>
    对象中的键名是选项的值，键值是字符串为选项的名称。
    <br>
    所有`list`中的选项，默认位于左侧区域。
    >conf-accept
    对象
    >conf-type
    Object
    >conf-default
    `{}`
    ---
    #demo
    >tpl
    <div style="width:500px;height:280px;">
        <ui-transfer :list="list"></ui-transfer>
    </div>
    >script
    {
        data : {
            list : {
                item1 : '备选项-1',
                item2 : '备选项-2',
                item3 : '备选项-3',
                item4 : '备选项-4',
                item5 : '备选项-5',
                item6 : '备选项-6',
                item7 : '备选项-7',
                item8 : '备选项-8',
                item9 : '备选项-9'
            }
        }
    }
    :::

    :::vue
    @name:source-title
    ---
    #config
    >conf-desc
    穿梭框左侧的标题。
    >conf-accept
    名称
    >conf-type
    String
    >conf-default
    `'可选'`
    ---
    #demo
    >tpl
    <div style="width:500px;height:280px;">
        <ui-transfer source-title="可选人员" :list="list"></ui-transfer>
    </div>
    >script
    {
        data : {
            list : {
                item1 : '备选项-1',
                item2 : '备选项-2',
                item3 : '备选项-3',
                item4 : '备选项-4',
                item5 : '备选项-5',
                item6 : '备选项-6',
                item7 : '备选项-7',
                item8 : '备选项-8',
                item9 : '备选项-9'
            }
        }
    }
    ---
    #demo
    >desc
    标题也可以是HTML，比如包含图标。
    >tpl
    <div style="width:500px;height:280px;">
        <ui-transfer source-title="<i class='mo-icon mo-icon-list'></i> 可选人员" :list="list"></ui-transfer>
    </div>
    >script
    {
        data : {
            list : {
                item1 : '备选项-1',
                item2 : '备选项-2',
                item3 : '备选项-3',
                item4 : '备选项-4',
                item5 : '备选项-5',
                item6 : '备选项-6',
                item7 : '备选项-7',
                item8 : '备选项-8',
                item9 : '备选项-9'
            }
        }
    }
    :::

    :::vue
    @name:target-title
    ---
    #config
    >conf-desc
    穿梭框右侧的标题。
    >conf-accept
    名称
    >conf-type
    String
    >conf-default
    `'选中'`
    ---
    #demo
    >tpl
    <div style="width:500px;height:280px;">
        <ui-transfer target-title="参与人员" :list="list"></ui-transfer>
    </div>
    >script
    {
        data : {
            list : {
                item1 : '备选项-1',
                item2 : '备选项-2',
                item3 : '备选项-3',
                item4 : '备选项-4',
                item5 : '备选项-5',
                item6 : '备选项-6',
                item7 : '备选项-7',
                item8 : '备选项-8',
                item9 : '备选项-9'
            }
        }
    }
    ---
    #demo
    >desc
    标题也可以是HTML，比如包含图标。
    >tpl
    <div style="width:500px;height:280px;">
        <ui-transfer target-title="<i class='mo-icon mo-icon-star-f'></i> 参与人员" :list="list"></ui-transfer>
    </div>
    >script
    {
        data : {
            list : {
                item1 : '备选项-1',
                item2 : '备选项-2',
                item3 : '备选项-3',
                item4 : '备选项-4',
                item5 : '备选项-5',
                item6 : '备选项-6',
                item7 : '备选项-7',
                item8 : '备选项-8',
                item9 : '备选项-9'
            }        }
    }
    :::

    :::vue
    @name:can-search
    ---
    #config
    >conf-desc
    是否可以搜索选项。
    >conf-accept
    `true`<br>`false`
    >conf-type
    Boolean
    >conf-default
    `false`
    ---
    #demo
    >tpl
    <div style="width:500px;height:280px;">
        <ui-transfer :can-search="true" :list="list"></ui-transfer>
    </div>
    >script
    {
        data : {
            list : {
                item1 : '备选项-1',
                item2 : '备选项-2',
                item3 : '备选项-3',
                item4 : '备选项-4',
                item5 : '备选项-5',
                item6 : '备选项-6',
                item7 : '备选项-7',
                item8 : '备选项-8',
                item9 : '备选项-9'
            }
        }
    }
    :::

    :::vue
    @name:disabled-options
    ---
    #config
    >conf-desc
    禁止选中的项目。
    >conf-accept
    由禁止修改项目键名(key)组成的数组
    >conf-type
    Array
    >conf-default
    `[]`
    ---
    #demo
    >tpl
    <div style="width:500px;height:280px;">
        <ui-transfer :disabled-options="['item6', 'item8', 'item2']" :list="list" v-model="value"></ui-transfer>
    </div>
    >script
    {
        data : {
            list : {
                item1 : '备选项-1',
                item2 : '备选项-2',
                item3 : '备选项-3',
                item4 : '备选项-4',
                item5 : '备选项-5',
                item6 : '备选项-6',
                item7 : '备选项-7',
                item8 : '备选项-8',
                item9 : '备选项-9'
            },
            value : {
                source : [
                    'item5',
                    'item6',
                    'item7',
                    'item8',
                    'item9'
                ],
                target : [
                    'item1',
                    'item2',
                    'item3',
                    'item4',
                ]
            }
        }
    }
    :::

    :::vue
    @name:checked-options
    ---
    #config
    >conf-desc
    选中的项目。
    >conf-accept
    由选中项目键名(key)组成的数组
    >conf-type
    Array
    >conf-default
    `[]`
    ---
    #demo
    >tpl
    <div style="width:500px;height:280px;">
        <ui-transfer :checked-options="['item6', 'item8', 'item2']" :list="list" v-model="value"></ui-transfer>
    </div>
    >script
    {
        data : {
            list : {
                item1 : '备选项-1',
                item2 : '备选项-2',
                item3 : '备选项-3',
                item4 : '备选项-4',
                item5 : '备选项-5',
                item6 : '备选项-6',
                item7 : '备选项-7',
                item8 : '备选项-8',
                item9 : '备选项-9'
            },
            value : {
                source : [
                    'item5',
                    'item6',
                    'item7',
                    'item8',
                    'item9'
                ],
                target : [
                    'item1',
                    'item2',
                    'item3',
                    'item4',
                ]
            }
        }
    }
    ---
    #demo
    >desc
    `checked-options`和`disabled-options`一起使用。
    >tpl
    <div style="width:500px;height:280px;">
        <ui-transfer :checked-options="['item6', 'item8', 'item2', 'item4']" :disabled-options="['item6', 'item9', 'item4']" :list="list" v-model="value"></ui-transfer>
    </div>
    >script
    {
        data : {
            list : {
                item1 : '备选项-1',
                item2 : '备选项-2',
                item3 : '备选项-3',
                item4 : '备选项-4',
                item5 : '备选项-5',
                item6 : '备选项-6',
                item7 : '备选项-7',
                item8 : '备选项-8',
                item9 : '备选项-9'
            },
            value : {
                source : [
                    'item5',
                    'item6',
                    'item7',
                    'item8',
                    'item9'
                ],
                target : [
                    'item1',
                    'item2',
                    'item3',
                    'item4',
                ]
            }
        }
    }
    :::

    [[[方法]]]

    :::preset
    @name:formMethod
    @uikey:transfer
    @value:{source:['item2','item3','item4','item5','item6','item7','item8','item9'],target:['item1']}
    @defaultValue:{source:['item2','item3','item4','item5','item6','item7','item8','item9'],target:['item1']}
    @attrs: :list="{item1:'备选项-1',item2:'备选项-2',item3:'备选项-3',item4:'备选项-4',item5:'备选项-5',item6:'备选项-6',item7:'备选项-7',item8:'备选项-8',item9:'备选项-9'}"
    @wrapStyle:width:500px;height:280px;box-sizing:content-box;padding-bottom:50px;
    :::

    [[[源码]]]

    <iframe src="/report/coverage/lib/components/transfer/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>

    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                 from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'transfer'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
