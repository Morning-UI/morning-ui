<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 级联选择 `<ui-cascader>`
    
    <doc-component-status page="cascader"></doc-component-status>
    
    [[[开始]]]

    定义文本输入框。

    :::vue
    @name:使用
    ---
    #demo
    >tpl
    <div style="width:300px;">
        <ui-cascader form-name="地址" :list="list"></ui-cascader>
    </div>
    >script
    {
        data : {
            list : {
                "zj" : {
                    name : "浙江省",
                    children : {
                        "hz" : {
                            name : "杭州",
                            children : {
                                "xcq" : "下城区",
                                "xhq" : "西湖区",
                                "jgq" : "江干区"
                            }
                        },
                        "nb" : {
                            name : "宁波",
                            children : {
                                "jbq" : "江北区",
                                "zhq" : "镇海区"
                            }
                        },
                        "wz" : "温州"
                    }
                },
                "js" : {
                    name : "江苏省",
                    children : {
                        "nj" : {
                            name : "南京",
                            children : {
                                "xwq" : "玄武区",
                                "jnq" : "江宁区"
                            }
                        },
                        "sz" : "苏州"
                    }
                },
                "gd" : {
                    name : "广东省",
                    children : {
                        "gz" : "广州",
                        "sz" : "深圳",
                        "fs" : "佛山"
                    }
                }
            }
        }
    }
    :::

    [[[形态]]]

    :::preset
    @name:formStatusWithSize
    @uikey:cascader
    @defaultValue:['zj', 'hz', 'jgq']
    @attrs: :list="{'zj':{name:'浙江省',children:{'hz':{name:'杭州',children:{'xcq':'下城区','xhq':'西湖区','jgq':'江干区'}},'nb':{name:'宁波',children:{'jbq':'江北区','zhq':'镇海区'}},'wz':'温州'}},'js':{name:'江苏省',children:{'nj':{name:'南京',children:{'xwq':'玄武区','jnq':'江宁区'}},'sz':'苏州'}},'gd':{name:'广东省',children:{'gz':'广州','sz':'深圳','fs':'佛山'}}}"
    :::
    
    [[[配置]]]

    :::preset
    @name:formConfig
    @uikey:cascader
    @defaultValue:['zj', 'hz', 'jgq']
    @attrs: :list="{'zj':{name:'浙江省',children:{'hz':{name:'杭州',children:{'xcq':'下城区','xhq':'西湖区','jgq':'江干区'}},'nb':{name:'宁波',children:{'jbq':'江北区','zhq':'镇海区'}},'wz':'温州'}},'js':{name:'江苏省',children:{'nj':{name:'南京',children:{'xwq':'玄武区','jnq':'江宁区'}},'sz':'苏州'}},'gd':{name:'广东省',children:{'gz':'广州','sz':'深圳','fs':'佛山'}}}"
    :::

    :::vue
    @name:inside-name
    ---
    #config
    >conf-desc
    在组件内显示的名称，和`form-name`互为补充。
    >conf-accept
    字符串
    >conf-type
    String
    >conf-default
    `'请选择'`
    ---
    #demo
    >tpl
    <div style="width:300px;">
        <ui-cascader inside-name="请选择地址" :list="list"></ui-cascader>
    </div>
    >script
    {
        data : {
            list : {
                "zj" : {
                    name : "浙江省",
                    children : {
                        "hz" : {
                            name : "杭州",
                            children : {
                                "xcq" : "下城区",
                                "xhq" : "西湖区",
                                "jgq" : "江干区"
                            }
                        },
                        "nb" : {
                            name : "宁波",
                            children : {
                                "jbq" : "江北区",
                                "zhq" : "镇海区"
                            }
                        },
                        "wz" : "温州"
                    }
                },
                "js" : {
                    name : "江苏省",
                    children : {
                        "nj" : {
                            name : "南京",
                            children : {
                                "xwq" : "玄武区",
                                "jnq" : "江宁区"
                            }
                        },
                        "sz" : "苏州"
                    }
                },
                "gd" : {
                    name : "广东省",
                    children : {
                        "gz" : "广州",
                        "sz" : "深圳",
                        "fs" : "佛山"
                    }
                }
            }
        }
    }
    :::

    :::vue
    @name:list
    ---
    #config
    >conf-desc
    可选对象，这是一个树状对象。
    <br><br>
    可以简写成`key`:`name`的形式，`key`为可选项的KEY，`name`为可选项的名称。
    <br><br>
    完整的写法为`key`:`object`的形式，其中`object`包含以下字段：
    <br>
    `name`: 可选项的名称
    <br>
    `children`: 子选项，值为子选项的对象树
    <br>
    `disable`: 禁用此选项
    >conf-accept
    选项树对象
    >conf-type
    Object
    >conf-default
    `{}`
    ---
    #demo
    >desc
    简写。
    >tpl
    <div style="width:300px;">
        <ui-cascader form-name="地址" :list="list"></ui-cascader>
    </div>
    >script
    {
        data : {
            list : {
                "zj" : "浙江省",
                "js" : "江苏省",
                "gd" : "广东省"
            }
        }
    }
    ---
    #demo
    >desc
    完整写法。
    >tpl
    <div style="width:300px;">
        <ui-cascader form-name="地址" :list="list"></ui-cascader>
    </div>
    >script
    {
        data : {
            list : {
                "zj" : {
                    name : "浙江省",
                    children : {
                        "hz" : {
                            name : "杭州",
                            children : {
                                "xcq" : "下城区",
                                "xhq" : "西湖区",
                                "jgq" : "江干区"
                            }
                        },
                        "nb" : {
                            name : "宁波",
                            children : {
                                "jbq" : "江北区",
                                "zhq" : "镇海区"
                            }
                        },
                        "wz" : "温州"
                    }
                },
                "js" : {
                    name : "江苏省",
                    children : {
                        "nj" : {
                            name : "南京",
                            children : {
                                "xwq" : "玄武区",
                                "jnq" : "江宁区"
                            }
                        },
                        "sz" : "苏州"
                    }
                },
                "gd" : {
                    name : "广东省",
                    children : {
                        "gz" : "广州",
                        "sz" : "深圳",
                        "fs" : "佛山"
                    }
                }
            }
        }
    }
    ---
    #demo
    >desc
    禁用某些选项。
    >tpl
    <div style="width:300px;">
        <ui-cascader form-name="地址" :list="list"></ui-cascader>
    </div>
    >script
    {
        data : {
            list : {
                "zj" : {
                    name : "浙江省",
                    children : {
                        "hz" : {
                            name : "杭州",
                            children : {
                                "xcq" : "下城区",
                                "xhq" : "西湖区",
                                "jgq" : "江干区"
                            }
                        },
                        "nb" : {
                            name : "宁波",
                            children : {
                                "jbq" : "江北区",
                                "zhq" : "镇海区"
                            }
                        },
                        "wz" : {
                            name : "温州",
                            disable : true
                        }
                    }
                },
                "js" : {
                    name : "江苏省",
                    children : {
                        "nj" : {
                            name : "南京",
                            disable : true,
                            children : {
                                "xwq" : "玄武区",
                                "jnq" : "江宁区"
                            }
                        },
                        "sz" : "苏州"
                    }
                },
                "gd" : {
                    name : "广东省",
                    children : {
                        "gz" : "广州",
                        "sz" : "深圳",
                        "fs" : "佛山"
                    }
                }
            }
        }
    }
    :::
    
    :::vue
    @name:submenu-trigger
    ---
    #config
    >conf-desc
    触发子菜单的时机。
    >conf-accept
    `hover`：鼠标移入显示<br>`click`：鼠标点击显示
    >conf-type
    String
    >conf-default
    `'click'`
    ---
    #demo
    >desc
    当鼠标移入时触发显示子菜单。
    >tpl
    <div style="width:300px;">
        <ui-cascader form-name="地址" :list="list" submenu-trigger="hover"></ui-cascader>
    </div>
    >script
    {
        data : {
            list : {
                "zj" : {
                    name : "浙江省",
                    children : {
                        "hz" : {
                            name : "杭州",
                            children : {
                                "xcq" : "下城区",
                                "xhq" : "西湖区",
                                "jgq" : "江干区"
                            }
                        },
                        "nb" : {
                            name : "宁波",
                            children : {
                                "jbq" : "江北区",
                                "zhq" : "镇海区"
                            }
                        },
                        "wz" : "温州"
                    }
                },
                "js" : {
                    name : "江苏省",
                    children : {
                        "nj" : {
                            name : "南京",
                            children : {
                                "xwq" : "玄武区",
                                "jnq" : "江宁区"
                            }
                        },
                        "sz" : "苏州"
                    }
                },
                "gd" : {
                    name : "广东省",
                    children : {
                        "gz" : "广州",
                        "sz" : "深圳",
                        "fs" : "佛山"
                    }
                }
            }
        }
    }
    :::
    
    :::vue
    @name:show-last-name
    ---
    #config
    >conf-desc
    选中后仅显示最后一级的名字。
    >conf-accept
    `true`<br>`false`
    >conf-type
    Boolean
    >conf-default
    `false`
    ---
    #demo
    >tpl
    <div style="width:300px;">
        <ui-cascader form-name="地址" :list="list" :show-last-name="true"></ui-cascader>
    </div>
    >script
    {
        data : {
            list : {
                "zj" : {
                    name : "浙江省",
                    children : {
                        "hz" : {
                            name : "杭州",
                            children : {
                                "xcq" : "下城区",
                                "xhq" : "西湖区",
                                "jgq" : "江干区"
                            }
                        },
                        "nb" : {
                            name : "宁波",
                            children : {
                                "jbq" : "江北区",
                                "zhq" : "镇海区"
                            }
                        },
                        "wz" : "温州"
                    }
                },
                "js" : {
                    name : "江苏省",
                    children : {
                        "nj" : {
                            name : "南京",
                            children : {
                                "xwq" : "玄武区",
                                "jnq" : "江宁区"
                            }
                        },
                        "sz" : "苏州"
                    }
                },
                "gd" : {
                    name : "广东省",
                    children : {
                        "gz" : "广州",
                        "sz" : "深圳",
                        "fs" : "佛山"
                    }
                }
            }
        }
    }
    :::
    
    :::vue
    @name:change-on-select
    ---
    #config
    >conf-desc
    选中即改变。
    >conf-accept
    `true`<br>`false`
    >conf-type
    Boolean
    >conf-default
    `false`
    ---
    #demo
    >tpl
    <div style="width:300px;">
        <ui-cascader form-name="地址" :list="list" :change-on-select="true"></ui-cascader>
    </div>
    >script
    {
        data : {
            list : {
                "zj" : {
                    name : "浙江省",
                    children : {
                        "hz" : {
                            name : "杭州",
                            children : {
                                "xcq" : "下城区",
                                "xhq" : "西湖区",
                                "jgq" : "江干区"
                            }
                        },
                        "nb" : {
                            name : "宁波",
                            children : {
                                "jbq" : "江北区",
                                "zhq" : "镇海区"
                            }
                        },
                        "wz" : "温州"
                    }
                },
                "js" : {
                    name : "江苏省",
                    children : {
                        "nj" : {
                            name : "南京",
                            children : {
                                "xwq" : "玄武区",
                                "jnq" : "江宁区"
                            }
                        },
                        "sz" : "苏州"
                    }
                },
                "gd" : {
                    name : "广东省",
                    children : {
                        "gz" : "广州",
                        "sz" : "深圳",
                        "fs" : "佛山"
                    }
                }
            }
        }
    }
    :::
    
    :::vue
    @name:can-search
    ---
    #config
    >conf-desc
    允许通过项目内容搜索项目。
    >conf-accept
    `true`<br>`false`
    >conf-type
    Boolean
    >conf-default
    `false`
    ---
    #demo
    >tpl
    <div style="width:300px;">
        <ui-cascader form-name="地址" :list="list" :can-search="true"></ui-cascader>
    </div>
    >script
    {
        data : {
            list : {
                "zj" : {
                    name : "浙江省",
                    children : {
                        "hz" : {
                            name : "杭州",
                            children : {
                                "xcq" : "下城区",
                                "xhq" : "西湖区",
                                "jgq" : "江干区"
                            }
                        },
                        "nb" : {
                            name : "宁波",
                            children : {
                                "jbq" : "江北区",
                                "zhq" : "镇海区"
                            }
                        },
                        "wz" : "温州"
                    }
                },
                "js" : {
                    name : "江苏省",
                    children : {
                        "nj" : {
                            name : "南京",
                            children : {
                                "xwq" : "玄武区",
                                "jnq" : "江宁区"
                            }
                        },
                        "sz" : "苏州"
                    }
                },
                "gd" : {
                    name : "广东省",
                    children : {
                        "gz" : "广州",
                        "sz" : "深圳",
                        "fs" : "佛山"
                    }
                }
            }
        }
    }
    :::
    
    :::vue
    @name:list-width
    ---
    #config
    >conf-desc
    搜索时下拉列表的宽度(单位px)，如果设为`false`则会根据组件宽度自动调整宽度（仅在开启`can-search`配置时生效）。
    >conf-accept
    `false`：自动调整宽度<br>数字：下拉列表的宽度(单位px)
    >conf-type
    Boolean<br>Number
    >conf-default
    `false`
    ---
    #demo
    >tpl
    <div style="width:300px;">
        <ui-cascader form-name="地址" :list="list" :can-search="true" :list-width="450"></ui-cascader>
    </div>
    >script
    {
        data : {
            list : {
                "zj" : {
                    name : "浙江省",
                    children : {
                        "hz" : {
                            name : "杭州",
                            children : {
                                "xcq" : "下城区",
                                "xhq" : "西湖区",
                                "jgq" : "江干区"
                            }
                        },
                        "nb" : {
                            name : "宁波",
                            children : {
                                "jbq" : "江北区",
                                "zhq" : "镇海区"
                            }
                        },
                        "wz" : "温州"
                    }
                },
                "js" : {
                    name : "江苏省",
                    children : {
                        "nj" : {
                            name : "南京",
                            children : {
                                "xwq" : "玄武区",
                                "jnq" : "江宁区"
                            }
                        },
                        "sz" : "苏州"
                    }
                },
                "gd" : {
                    name : "广东省",
                    children : {
                        "gz" : "广州",
                        "sz" : "深圳",
                        "fs" : "佛山"
                    }
                }
            }
        }
    }
    :::
    
    :::vue
    @name:multi-select
    ---
    #config
    >conf-desc
    级联选择可多选。
    >conf-accept
    `true`<br>`false`
    >conf-type
    Boolean
    >conf-default
    `false`
    ---
    #demo
    >tpl
    <div style="width:300px;">
        <ui-cascader form-name="地址" :list="list" multi-select></ui-cascader>
    </div>
    >script
    {
        data : {
            list : {
                "zj" : {
                    name : "浙江省",
                    children : {
                        "hz" : {
                            name : "杭州",
                            children : {
                                "xcq" : "下城区",
                                "xhq" : "西湖区",
                                "jgq" : "江干区"
                            }
                        },
                        "nb" : {
                            name : "宁波",
                            children : {
                                "jbq" : "江北区",
                                "zhq" : "镇海区"
                            }
                        },
                        "wz" : "温州"
                    }
                },
                "js" : {
                    name : "江苏省",
                    children : {
                        "nj" : {
                            name : "南京",
                            children : {
                                "xwq" : "玄武区",
                                "jnq" : "江宁区"
                            }
                        },
                        "sz" : "苏州"
                    }
                },
                "gd" : {
                    name : "广东省",
                    children : {
                        "gz" : "广州",
                        "sz" : "深圳",
                        "fs" : "佛山"
                    }
                }
            }
        }
    }
    :::

    [[[方法]]]

    :::preset
    @name:formMethod
    @uikey:cascader
    @value:['zj', 'hz', 'jgq']
    @defaultValue:['zj', 'hz', 'jgq']
    @attrs: :list="{'zj':{name:'浙江省',children:{'hz':{name:'杭州',children:{'xcq':'下城区','xhq':'西湖区','jgq':'江干区'}},'nb':{name:'宁波',children:{'jbq':'江北区','zhq':'镇海区'}},'wz':'温州'}},'js':{name:'江苏省',children:{'nj':{name:'南京',children:{'xwq':'玄武区','jnq':'江宁区'}},'sz':'苏州'}},'gd':{name:'广东省',children:{'gz':'广州','sz':'深圳','fs':'佛山'}}}"
    :::

    [[[事件]]]

    :::preset
    @name:formEvent
    @uiname:级联选择
    @uikey:cascader
    @value:['zj', 'hz', 'jgq']
    @wrapStyle:width:300px;
    @attrs: :list="{'zj':{name:'浙江省',children:{'hz':{name:'杭州',children:{'xcq':'下城区','xhq':'西湖区','jgq':'江干区'}},'nb':{name:'宁波',children:{'jbq':'江北区','zhq':'镇海区'}},'wz':'温州'}},'js':{name:'江苏省',children:{'nj':{name:'南京',children:{'xwq':'玄武区','jnq':'江宁区'}},'sz':'苏州'}},'gd':{name:'广东省',children:{'gz':'广州','sz':'深圳','fs':'佛山'}}}"
    :::

    [[[表单值]]]

    #### 值类型
    
    `Array` : 数组

    #### 值过滤

    - 所有不支持的值类型，都会被尝试转换成空数组(`[]`)。
    - 若数组中的KEY无法匹配对应层级的`list`配置，则数组仅保留可匹配部分。

    #### 值格式

    包含选中键值的数组(含层级关系)，键值是字符串。

    #### 默认值

    `[]`

    :::preset
    @name:formValue
    @uikey:cascader
    @uiname:下拉选择框
    @valueType:cascader
    @wrapStyle:width:300px;
    @attrs: :list="{'zj':{name:'浙江省',children:{'hz':{name:'杭州',children:{'xcq':'下城区','xhq':'西湖区','jgq':'江干区'}},'nb':{name:'宁波',children:{'jbq':'江北区','zhq':'镇海区'}},'wz':'温州'}},'js':{name:'江苏省',children:{'nj':{name:'南京',children:{'xwq':'玄武区','jnq':'江宁区'}},'sz':'苏州'}},'gd':{name:'广东省',children:{'gz':'广州','sz':'深圳','fs':'佛山'}}}"
    :::

    [[[源码]]]

    <iframe src="/report/coverage/lib/components/cascader/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>

    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                 from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'cascader'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
