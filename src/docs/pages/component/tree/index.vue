<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 树状控件 `<ui-tree>`
    
    <doc-component-status page="tree"></doc-component-status>

    [[[开始]]]

    定义一个树状控件，这是一个块元素。

    :::vue
    @name:使用
    ---
    #demo
    >desc
    通过`tree`配置来设置树状控件，每一项目可以简写为：`key:name`的形式，也可以完整的写为：`key:[object]`。
    <br>
    详见：`tree`配置
    >tpl
    <div style="width: 560px;">
        <ui-tree :tree="tree"></ui-tree>
    </div>
    >script
    {
        data : {
            tree : {
                0 : {
                    name : 'ROOT',
                    children : {
                        '0-1' : '0-1',
                        '0-2' : '0-2',
                        '0-3' : {
                            name : '0-3',
                            children : {
                                '0-3-1' : '0-3-1',
                                '0-3-2' : '0-3-2'
                            }
                        }
                    }
                }
            }
        }
    }
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
    @name:tree
    ---
    #config
    >conf-desc
    设置树状控件，每一项目可以简写为：`key:name`的形式，也可以完整的写为：`key:[object]`。
    <br><br>
    其中`object`包含两个属性：
    - `name` : 当前节点的名称
    - `disabled` : 禁用这个节点(无法选中及切换展开状态)
    - `unfold` : 默认展开这个节点
    - `icon` : 为节点设置icon(若设为空字符串则无icon，且仅对叶子节点生效)
    - `children` : 子节点对象
    - 除了以上属性外，还可以添加额外的数据至节点中，当节点触发点击/展开/收起等事件时可以通过事件的参数获取到此对象，从而访问这些额外的数据。
    >conf-accept
    对象
    >conf-type
    Object
    >conf-default
    `()=>({})`
    ---
    #demo
    >tpl
    <div style="width: 560px;">
        <ui-tree :tree="tree"></ui-tree>
    </div>
    >script
    {
        data : {
            tree : {
                0 : {
                    name : 'ROOT',
                    children : {
                        '0-1' : '0-1',
                        '0-2' : '0-2',
                        '0-3' : {
                            name : '0-3',
                            children : {
                                '0-3-1' : '0-3-1',
                                '0-3-2' : '0-3-2'
                            }
                        }
                    }
                }
            }
        }
    }
    ---
    #demo
    >desc
    使用`disabled`设置禁用节点。
    >tpl
    <div style="width: 560px;">
        <ui-tree :tree="tree"></ui-tree>
    </div>
    >script
    {
        data : {
            tree : {
                0 : {
                    name : 'ROOT',
                    children : {
                        '0-1' : '0-1',
                        '0-2' : {
                            name : '0-2',
                            children : {
                                '0-2-1' : '0-2-1',
                                '0-2-2' : '0-2-2',
                                '0-2-3' : '0-2-3'
                            }
                        },
                        '0-3' : {
                            name : '0-3',
                            disabled : true,
                            children : {
                                '0-3-1' : '0-3-1',
                                '0-3-2' : '0-3-2'
                            }
                        }
                    }
                }
            }
        }
    }
    ---
    #demo
    >desc
    使用`unfold`设置默认展开节点。
    >tpl
    <div style="width: 560px;">
        <ui-tree :tree="tree"></ui-tree>
    </div>
    >script
    {
        data : {
            tree : {
                0 : {
                    name : 'ROOT',
                    children : {
                        '0-1' : '0-1',
                        '0-2' : {
                            name : '0-2',
                            children : {
                                '0-2-1' : '0-2-1',
                                '0-2-2' : '0-2-2',
                                '0-2-3' : '0-2-3'
                            }
                        },
                        '0-3' : {
                            name : '0-3',
                            unfold : true,
                            children : {
                                '0-3-1' : '0-3-1',
                                '0-3-2' : '0-3-2'
                            }
                        }
                    }
                }
            }
        }
    }
    ---
    #demo
    >desc
    同时使用`disabled`和`unfold`设置一个展开无法折叠的子树。
    >tpl
    <div style="width: 560px;">
        <ui-tree :tree="tree"></ui-tree>
    </div>
    >script
    {
        data : {
            tree : {
                0 : {
                    name : 'ROOT',
                    children : {
                        '0-1' : '0-1',
                        '0-2' : {
                            name : '0-2',
                            children : {
                                '0-2-1' : '0-2-1',
                                '0-2-2' : '0-2-2',
                                '0-2-3' : '0-2-3'
                            }
                        },
                        '0-3' : {
                            name : '0-3',
                            unfold : true,
                            disabled : true,
                            children : {
                                '0-3-1' : '0-3-1',
                                '0-3-2' : '0-3-2'
                            }
                        }
                    }
                }
            }
        }
    }
    ---
    #demo
    >desc
    使用`icon`单独设置叶子节点Icon。
    >tpl
    <div style="width: 560px;">
        <ui-tree :tree="tree"></ui-tree>
    </div>
    >script
    {
        data : {
            tree : {
                0 : {
                    name : 'ROOT',
                    children : {
                        '0-1' : {
                            name : '0-1',
                            icon : '<i class="mo-icon mo-icon-file-o">'
                        },
                        '0-2' : {
                            name : '0-2',
                            children : {
                                '0-2-1' : '0-2-1',
                                '0-2-2' : '0-2-2',
                                '0-2-3' : '0-2-3'
                            }
                        }
                    }
                }
            }
        }
    }
    :::

    :::vue
    @name:foldable
    ---
    #config
    >conf-desc
    树状控件的节点是否可以折叠。
    <br>
    此配置开启后，树状控件默认会全部展开。
    >conf-accept
    `true`<br>`false`
    >conf-type
    Boolean
    >conf-default
    `true`
    ---
    #demo
    >tpl
    <div style="width: 560px;">
        <ui-tree :tree="tree" :foldable="false"></ui-tree>
    </div>
    >script
    {
        data : {
            tree : {
                0 : {
                    name : 'ROOT',
                    children : {
                        '0-1' : '0-1',
                        '0-2' : '0-2',
                        '0-3' : {
                            name : '0-3',
                            children : {
                                '0-3-1' : '0-3-1',
                                '0-3-2' : '0-3-2'
                            }
                        }
                    }
                }
            }
        }
    }
    :::

    :::vue
    @name:cable
    ---
    #config
    >conf-desc
    显示同层级节点之间的连接线。
    >conf-accept
    `true`<br>`false`
    >conf-type
    Boolean
    >conf-default
    `false`
    ---
    #demo
    >tpl
    <div style="width: 560px;">
        <ui-tree :tree="tree" :cable="true"></ui-tree>
    </div>
    >script
    {
        data : {
            tree : {
                0 : {
                    name : 'ROOT',
                    children : {
                        '0-1' : '0-1',
                        '0-2' : '0-2',
                        '0-3' : {
                            name : '0-3',
                            children : {
                                '0-3-1' : '0-3-1',
                                '0-3-2' : '0-3-2',
                                '0-3-3' : '0-3-3'
                            }
                        },
                        '0-4' : '0-4'
                    }
                }
            }
        }
    }
    :::

    :::vue
    @name:can-click
    ---
    #config
    >conf-desc
    树状控件的节点是否可以点击，若允许点击后会有交互效果及触发`node-emit`事件。一般用于纯展示的树状控件会关闭此配置。
    >conf-accept
    `true`<br>`false`
    >conf-type
    Boolean
    >conf-default
    `true`
    ---
    #demo
    >desc
    点击节点后不会触发事件，也不会有交互效果。
    >tpl
    <div style="width: 560px;">
        <ui-tree :tree="tree" :can-click="false"></ui-tree>
    </div>
    >script
    {
        data : {
            tree : {
                0 : {
                    name : 'ROOT',
                    children : {
                        '0-1' : '0-1',
                        '0-2' : '0-2',
                        '0-3' : {
                            name : '0-3',
                            children : {
                                '0-3-1' : '0-3-1',
                                '0-3-2' : '0-3-2'
                            }
                        }
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
    树的节点是否可以搜索。
    >conf-accept
    `true`<br>`false`
    >conf-type
    Boolean
    >conf-default
    `false`
    ---
    #demo
    >desc
    开启后可以搜索内容包含关键字的节点。
    >tpl
    <div style="width: 560px;">
        <ui-tree :tree="tree" :can-search="true"></ui-tree>
    </div>
    >script
    {
        data : {
            tree : {
                0 : {
                    name : 'ROOT',
                    children : {
                        '0-1' : '0-1',
                        '0-2' : {
                            name : '0-2',
                            children : {
                                '0-2-1' : '0-2-1',
                                '0-2-2' : '0-2-2',
                                '0-2-3' : '0-2-3'
                            }
                        },
                        '0-3' : {
                            name : '0-3',
                            children : {
                                '0-3-1' : '0-3-1',
                                '0-3-2' : '0-3-2'
                            }
                        }
                    }
                }
            }
        }
    }
    :::

    :::vue
    @name:custom-fold-icon
    ---
    #config
    >conf-desc
    自定义节点折叠后的图标。
    >conf-accept
    图标的HTML字符串
    >conf-type
    String
    >conf-default
    `''`
    ---
    #demo
    >desc
    修改折叠后的图标。
    >tpl
    <div style="width: 560px;">
        <ui-tree :tree="tree" custom-fold-icon="<i class='mo-icon mo-icon-sub'></i>"></ui-tree>
    </div>
    >script
    {
        data : {
            tree : {
                0 : {
                    name : 'ROOT',
                    children : {
                        '0-1' : '0-1',
                        '0-2' : {
                            name : '0-2',
                            children : {
                                '0-2-1' : '0-2-1',
                                '0-2-2' : '0-2-2',
                                '0-2-3' : '0-2-3'
                            }
                        },
                        '0-3' : {
                            name : '0-3',
                            children : {
                                '0-3-1' : '0-3-1',
                                '0-3-2' : '0-3-2'
                            }
                        }
                    }
                }
            }
        }
    }
    ---
    #demo
    >desc
    同时修改折叠和展开的图标。
    >tpl
    <div style="width: 560px;">
        <ui-tree :tree="tree" custom-fold-icon="<i class='mo-icon mo-icon-sub'></i>" custom-unfold-icon="<i class='mo-icon mo-icon-add'></i>"></ui-tree>
    </div>
    >script
    {
        data : {
            tree : {
                0 : {
                    name : 'ROOT',
                    children : {
                        '0-1' : '0-1',
                        '0-2' : {
                            name : '0-2',
                            children : {
                                '0-2-1' : '0-2-1',
                                '0-2-2' : '0-2-2',
                                '0-2-3' : '0-2-3'
                            }
                        },
                        '0-3' : {
                            name : '0-3',
                            children : {
                                '0-3-1' : '0-3-1',
                                '0-3-2' : '0-3-2'
                            }
                        }
                    }
                }
            }
        }
    }
    :::

    :::vue
    @name:custom-unfold-icon
    ---
    #config
    >conf-desc
    自定义节点未折叠的图标。
    >conf-accept
    图标的HTML字符串
    >conf-type
    String
    >conf-default
    `''`
    ---
    #demo
    >desc
    修改折叠后的图标。
    >tpl
    <div style="width: 560px;">
        <ui-tree :tree="tree" custom-unfold-icon="<i class='mo-icon mo-icon-add'></i>"></ui-tree>
    </div>
    >script
    {
        data : {
            tree : {
                0 : {
                    name : 'ROOT',
                    children : {
                        '0-1' : '0-1',
                        '0-2' : {
                            name : '0-2',
                            children : {
                                '0-2-1' : '0-2-1',
                                '0-2-2' : '0-2-2',
                                '0-2-3' : '0-2-3'
                            }
                        },
                        '0-3' : {
                            name : '0-3',
                            children : {
                                '0-3-1' : '0-3-1',
                                '0-3-2' : '0-3-2'
                            }
                        }
                    }
                }
            }
        }
    }
    ---
    #demo
    >desc
    同时修改折叠和未折叠的图标。
    >tpl
    <div style="width: 560px;">
        <ui-tree :tree="tree" custom-fold-icon="<i class='mo-icon mo-icon-sub'></i>" custom-unfold-icon="<i class='mo-icon mo-icon-add'></i>"></ui-tree>
    </div>
    >script
    {
        data : {
            tree : {
                0 : {
                    name : 'ROOT',
                    children : {
                        '0-1' : '0-1',
                        '0-2' : {
                            name : '0-2',
                            children : {
                                '0-2-1' : '0-2-1',
                                '0-2-2' : '0-2-2',
                                '0-2-3' : '0-2-3'
                            }
                        },
                        '0-3' : {
                            name : '0-3',
                            children : {
                                '0-3-1' : '0-3-1',
                                '0-3-2' : '0-3-2'
                            }
                        }
                    }
                }
            }
        }
    }
    :::

    :::vue
    @name:custom-leafnode-icon
    ---
    #config
    >conf-desc
    自定义叶子节点的图标。若在`tree`配置中单独对某个叶子节点设置了`icon`，则优先级更高。
    >conf-accept
    图标的HTML字符串
    >conf-type
    String
    >conf-default
    `''`
    ---
    #demo
    >tpl
    <div style="width: 560px;">
        <ui-tree :tree="tree" custom-leafnode-icon="<i class='mo-icon mo-icon-file-o'></i>"></ui-tree>
    </div>
    >script
    {
        data : {
            tree : {
                0 : {
                    name : 'ROOT',
                    children : {
                        '0-1' : '0-1',
                        '0-2' : {
                            name : '0-2',
                            children : {
                                '0-2-1' : '0-2-1',
                                '0-2-2' : '0-2-2',
                                '0-2-3' : '0-2-3'
                            }
                        },
                        '0-3' : {
                            name : '0-3',
                            children : {
                                '0-3-1' : '0-3-1',
                                '0-3-2' : '0-3-2'
                            }
                        }
                    }
                }
            }
        }
    }
    ---
    #demo
    >desc
    配合`cable`一起使用。
    >tpl
    <div style="width: 560px;">
        <ui-tree :tree="tree" :cable="true" custom-leafnode-icon="<i class='mo-icon mo-icon-file-o'></i>"></ui-tree>
    </div>
    >script
    {
        data : {
            tree : {
                0 : {
                    name : 'ROOT',
                    children : {
                        '0-1' : '0-1',
                        '0-2' : {
                            name : '0-2',
                            children : {
                                '0-2-1' : '0-2-1',
                                '0-2-2' : '0-2-2',
                                '0-2-3' : '0-2-3'
                            }
                        },
                        '0-3' : {
                            name : '0-3',
                            children : {
                                '0-3-1' : '0-3-1',
                                '0-3-2' : '0-3-2'
                            }
                        }
                    }
                }
            }
        }
    }
    :::

    :::vue
    @name:fold-style
    ---
    #config
    >conf-desc
    预设的三种风格的折叠/未折叠图标，方便开发者使用。
    <br>
    需要注意若同时配置了`fold-style`和`custom-fold-icon` / `custom-unfold-icon` / `custom-leafnode-icon`配置，则后者的优先级更高。
    >conf-accept
    `arrow`:箭头风格<br>`folder`:文件夹风格<br>`symbol`:加减符号风格
    >conf-type
    String
    >conf-default
    `'arrow'`
    ---
    #demo
    >desc
    文件夹风格的图标。
    >tpl
    <div style="width: 560px;">
        <ui-tree :tree="tree" fold-style="folder"></i>"></ui-tree>
    </div>
    >script
    {
        data : {
            tree : {
                0 : {
                    name : 'ROOT',
                    children : {
                        '0-1' : '0-1',
                        '0-2' : {
                            name : '0-2',
                            children : {
                                '0-2-1' : '0-2-1',
                                '0-2-2' : '0-2-2',
                                '0-2-3' : '0-2-3'
                            }
                        },
                        '0-3' : {
                            name : '0-3',
                            children : {
                                '0-3-1' : '0-3-1',
                                '0-3-2' : '0-3-2'
                            }
                        }
                    }
                }
            }
        }
    }
    ---
    #demo
    >desc
    加减符号风格的图标。
    >tpl
    <div style="width: 560px;">
        <ui-tree :tree="tree" fold-style="symbol"></i>"></ui-tree>
    </div>
    >script
    {
        data : {
            tree : {
                0 : {
                    name : 'ROOT',
                    children : {
                        '0-1' : '0-1',
                        '0-2' : {
                            name : '0-2',
                            children : {
                                '0-2-1' : '0-2-1',
                                '0-2-2' : '0-2-2',
                                '0-2-3' : '0-2-3'
                            }
                        },
                        '0-3' : {
                            name : '0-3',
                            children : {
                                '0-3-1' : '0-3-1',
                                '0-3-2' : '0-3-2'
                            }
                        }
                    }
                }
            }
        }
    }
    :::

    :::vue
    @name:block-leaf
    ---
    #config
    >conf-desc
    是否展示块状的子节点。
    >conf-accept
    `true`<br>`false`
    >conf-type
    Boolean
    >conf-default
    `false`
    ---
    #demo
    >tpl
    <div style="width: 560px;">
        <ui-tree :tree="tree" :block-leaf="true"></i>"></ui-tree>
    </div>
    >script
    {
        data : {
            tree : {
                0 : {
                    name : 'ROOT',
                    children : {
                        '0-1' : '0-1',
                        '0-2' : {
                            name : '0-2',
                            children : {
                                '0-2-1' : '0-2-1',
                                '0-2-2' : '0-2-2',
                                '0-2-3' : '0-2-3'
                            }
                        },
                        '0-3' : {
                            name : '0-3',
                            children : {
                                '0-3-1' : '0-3-1',
                                '0-3-2' : '0-3-2'
                            }
                        }
                    }
                }
            }
        }
    }
    :::

    [[[方法]]]

    :::vue
    @name:foldNode(path, [fold])
    ---
    #method
    >method-desc
    依次展开某一个节点及其父节点或依次折叠一个节点及其子节点。
    <br><br>
    需要注意的是`path`的数组必须是层级连续的(从根节点开始)，比如有这样的一个层级：`['0', '0-1', '0-1-2']`，需要展开`0-1-2`，`path`必须是`['0', '0-1', '0-1-2']`，下面这样是不行的因为层级没有连续：`['0-1', '0-1-2']`或`['0', '0-1-2']`。
    >method-args
    |path|NO|需要展开或折叠的节点的path，这个是一个数组，数组的index表示节点所在的层级，数组的键值将匹配对应层级的KEY。|目标节点的路径数组|`Array`|`undefined`|
    |fold|展开或折叠，未指定则切换到反向状态。|`undefined`:切换展开/折叠<br>`true`:折叠<br>`false`:展开|`Undefined`<br>`Boolean`|`undefined`|
    >method-return
    当前组件VM实例。
    ---
    #demo
    >tpl
    <div style="width: 560px;">
        <ui-tree ref="demo1" :tree="tree"></ui-tree>
        <br><br>
        <ui-link js="window.morning.findVM('demo1').foldNode(['0'], false);">展开ROOT节点</ui-link>
        <br>
        <ui-link js="window.morning.findVM('demo1').foldNode(['0', '0-3', '0-3-1'], false);">依次展开0-3-1及其父节点</ui-link>
        <br>
        <ui-link js="window.morning.findVM('demo1').foldNode(['0', '0-3', '0-3-1'], true);">依次折叠0-3-1及其父节点</ui-link>
        <br>
        <ui-link js="window.morning.findVM('demo1').foldNode(['0', '0-3']);">切换0-3节点展开/折叠</ui-link>
    </div>
    >script
    {
        data : {
            tree : {
                0 : {
                    name : 'ROOT',
                    children : {
                        '0-1' : '0-1',
                        '0-2' : '0-2',
                        '0-3' : {
                            name : '0-3',
                            children : {
                                '0-3-1' : '0-3-1',
                                '0-3-2' : '0-3-2'
                            }
                        }
                    }
                }
            }
        }
    }
    :::

    :::vue
    @name:foldAllNode()
    ---
    #method
    >method-desc
    折叠所有子节点。
    >method-return
    当前组件VM实例。
    ---
    #demo
    >tpl
    <div style="width: 560px;">
        <ui-tree ref="demo2" :tree="tree"></ui-tree>
        <br><br>
        <ui-link js="window.morning.findVM('demo2').foldAllNode();">折叠所有节点</ui-link>
    </div>
    >script
    {
        data : {
            tree : {
                0 : {
                    name : 'ROOT',
                    unfold : true,
                    children : {
                        '0-1' : {
                            name : '0-1',
                            unfold : true
                        },
                        '0-2' : {
                            name : '0-2',
                            unfold : true
                        },
                        '0-3' : {
                            name : '0-3',
                            unfold : true,
                            children : {
                                '0-3-1' : {
                                    name : '0-3-1',
                                    unfold : true
                                },
                                '0-3-2' : {
                                    name : '0-3-2',
                                    unfold : true
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    :::

    :::vue
    @name:unfoldAllNode()
    ---
    #method
    >method-desc
    展开所有子节点。
    >method-return
    当前组件VM实例。
    ---
    #demo
    >tpl
    <div style="width: 560px;">
        <ui-tree ref="demo3" :tree="tree"></ui-tree>
        <br><br>
        <ui-link js="window.morning.findVM('demo3').unfoldAllNode();">展开所有节点</ui-link>
    </div>
    >script
    {
        data : {
            tree : {
                0 : {
                    name : 'ROOT',
                    children : {
                        '0-1' : '0-1',
                        '0-2' : '0-2',
                        '0-3' : {
                            name : '0-3',
                            children : {
                                '0-3-1' : '0-3-1',
                                '0-3-2' : '0-3-2'
                            }
                        }
                    }
                }
            }
        }
    }
    :::

    [[[事件]]]

    :::vue
    @name:node-emit
    ---
    #event
    >event-desc
    当节点被点击时触发。
    >event-args
    |path|触发节点的路径数组，这个是一个数组，数组的index表示节点所在的层级，数组的键值是被触发节点的KEY。|`Array`|
    |nodes|从根节点至触发节点经过每一个节点的配置，这个是一个数组，数组的index表示节点所在的层级，数组的键值是对应节点在`tree`配置中对应的内容。|`Array`|
    ---
    #demo
    >tpl
    <div style="width: 560px;">
        <ui-tree ref="demo4" @node-emit="echo" :tree="tree"></ui-tree>
    </div>
    >script
    {
        methods : {
            echo : function (path, nodes) {
                console.log('demo4.console1', 'node-emit event!', path, nodes);
            }
        },
        data : {
            tree : {
                0 : {
                    name : 'ROOT',
                    children : {
                        '0-1' : '0-1',
                        '0-2' : '0-2',
                        '0-3' : {
                            name : '0-3',
                            children : {
                                '0-3-1' : '0-3-1',
                                '0-3-2' : '0-3-2'
                            }
                        }
                    }
                }
            }
        }
    }
    :::

    :::vue
    @name:node-fold
    ---
    #event
    >event-desc
    当节点被折叠时触发。
    >event-args
    |path|触发节点的路径数组，这个是一个数组，数组的index表示节点所在的层级，数组的键值是被触发节点的KEY。|`Array`|
    |nodes|从根节点至触发节点经过每一个节点的配置，这个是一个数组，数组的index表示节点所在的层级，数组的键值是对应节点在`tree`配置中对应的内容。|`Array`|
    ---
    #demo
    >tpl
    <div style="width: 560px;">
        <ui-tree ref="demo4" @node-fold="echo" :tree="tree"></ui-tree>
    </div>
    >script
    {
        methods : {
            echo : function (path, nodes) {
                console.log('demo4.console1', 'node-fold event!', path, nodes);
            }
        },
        data : {
            tree : {
                0 : {
                    name : 'ROOT',
                    children : {
                        '0-1' : '0-1',
                        '0-2' : '0-2',
                        '0-3' : {
                            name : '0-3',
                            children : {
                                '0-3-1' : '0-3-1',
                                '0-3-2' : '0-3-2'
                            }
                        }
                    }
                }
            }
        }
    }
    :::

    :::vue
    @name:node-unfold
    ---
    #event
    >event-desc
    当节点被展开时触发。
    >event-args
    |path|触发节点的路径数组，这个是一个数组，数组的index表示节点所在的层级，数组的键值是被触发节点的KEY。|`Array`|
    |nodes|从根节点至触发节点经过每一个节点的配置，这个是一个数组，数组的index表示节点所在的层级，数组的键值是对应节点在`tree`配置中对应的内容。|`Array`|
    ---
    #demo
    >tpl
    <div style="width: 560px;">
        <ui-tree ref="demo4" @node-unfold="echo" :tree="tree"></ui-tree>
    </div>
    >script
    {
        methods : {
            echo : function (path, nodes) {
                console.log('demo4.console1', 'node-unfold event!', path, nodes);
            }
        },
        data : {
            tree : {
                0 : {
                    name : 'ROOT',
                    children : {
                        '0-1' : '0-1',
                        '0-2' : '0-2',
                        '0-3' : {
                            name : '0-3',
                            children : {
                                '0-3-1' : '0-3-1',
                                '0-3-2' : '0-3-2'
                            }
                        }
                    }
                }
            }
        }
    }
    :::

    :::vue
    @name:生命周期事件
    ---
    #event
    >event-desc
    组件的生命周期事件，详见:[基础/事件/生命周期事件](/guide/event.html#生命周期事件)。
    ---
    #demo
    >tpl
    <div>
        <ui-tree
            target="#demoEventLifecycle"
            ref="demoEventLifecycle"
            v-show="show"
            @created="echo('created')"
            @mounted="echo('mounted')"
            @before-update="echo('before-update')"
            @updated="echo('updated')"
            @before-destroy="echo('before-destroy')"
            @destroyed="echo('destroyed')"
            :tree="tree"
        >{*text*}</ui-tree>
        <br><br>
        <ui-link js="this.text='生命周期事件';">触发update</ui-link>
        <ui-link js="this.$refs['demoEventLifecycle'].$destroy();">触发destroy</ui-link>
    </div>
    >script
    {
        data : function () {
            return {
               text : '树状控件',
               show : true,
                tree : {
                    0 : {
                        name : 'ROOT',
                        children : {
                            '0-1' : '0-1',
                            '0-2' : '0-2',
                            '0-3' : {
                                name : '0-3',
                                children : {
                                    '0-3-1' : '0-3-1',
                                    '0-3-2' : '0-3-2'
                                }
                            }
                        }
                    }
                }
            };
        },
        methods : {
            echo : function (name) {
                console.log('demoEventLifecycle.console1', name + ' event!');
            }
        }
    }
    :::

    [[[源码]]]

    <iframe src="/report/coverage/lib/components/tree/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>
    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'tree'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
