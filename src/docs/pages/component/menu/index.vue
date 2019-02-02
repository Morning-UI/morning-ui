<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 导航菜单 `<ui-menu>`
    
    <doc-component-status page="menu"></doc-component-status>
    
    [[[开始]]]

    定义一个导航菜单，这是一个内联块元素。

    :::vue
    @name:使用
    ---
    #demo
    >desc
    通过`menu`配置来设置菜单。
    >tpl
    <div style="width:700px;">
        <ui-menu :menu="menu"></ui-menu>
    </div>
    >script
    {
        data : {
            menu : {
                'home' : '首页',
                'order' : '订单',
                'history' : '历史',
                'settings' : '设置'
            }
        }
    }
    :::

    :::vue
    @name:完整的菜单
    ---
    #demo
    >desc
    上面的菜单设置是简写，下面是一个完整的菜单设置。
    >tpl
    <div style="width:700px;">
        <ui-menu :menu="menu"></ui-menu>
    </div>
    >script
    {
        data : function () {
            return {
                menu : {
                    'home' : '首页',                            // 若目录的值是字符串，则此字符串是目录名称，这是一种简写
                    'active' : {
                        name : '活动'                           // 目录的值为对象时，可以通过`name`来设置目录的名称
                    },
                    'order' : {
                        name : '订单',          
                        childs : {
                            'all' : '所有',
                            'notshipped' : '待发货',
                            'intransit' : '运输中',
                            'done' : '已完成',
                            'history' : '历史订单',
                            'status' : '订单状态',
                            'data' : '数据统计'
                        },
                        groups : {                              // `groups`可以用来给子菜单`childs`分组
                            '订单列表' : ['all', 'done', 'notshipped', 'intransit'],
                            '更多' : ['history', 'status', 'data']
                        }
                    },
                    'search' : {
                        name : '搜索',
                        link : 'https://google.com/'            // 通过`link`设置点击后跳转的链接
                    },
                    'map' : {
                        name : '地图',
                        link : 'https://maps.google.com/',
                        newtab : true                           // 通过`newtab`设置点击后新窗口打开链接
                    },             
                    'settings' : {
                        name : '设置',
                        childs : {                              // 通过`child`设置子目录，当一个目录包含`child`后，`link`会失效
                            'common' : {
                                name : '通用设置',
                                childs : {                      // 支持多级子菜单
                                    'theme' : {
                                        name : '模板',
                                        childs : {
                                            'modify' : '编辑',
                                            'market' : '模板市场'
                                        }
                                    },
                                    'goods' : '商品',
                                    'payment' : '支付'
                                }
                            },
                            'account' : {
                                name : '账户设置',
                                childs : {
                                    'email' : '邮箱设置',
                                    'password' : '修改密码'
                                }
                            },
                            'safity' : {
                                name : '安全设置',
                                childs : {
                                    'multiple' : '多重认证',
                                    'found' : '账户找回',
                                    'history' : '登录历史',
                                    'help' : '寻求帮助',
                                    'blocked' : '锁定账户'
                                }
                            }
                        }
                    },
                    'logout' : {
                        name : '注销',
                        handler : this.logout                   // 通过`handler`为目录指定点击后的处理函数
                    },
                    'help' : {
                        name : '帮助',
                        disable : true                          // 禁用菜单项
                    }
                }
            };
        },
        methods : {
            logout : function () {
                alert('注销账户');
            }
        }
    }
    :::

    :::vue
    @name:线条风格的菜单
    ---
    #demo
    >desc
    通过`line`样式类定义线条风格的菜单。
    >tpl
    <div style="width:700px;">
        <ui-menu :menu="menu" class="line"></ui-menu>
    </div>
    >script
    {
        data : {
            menu : {
                'home' : '首页',
                'order' : '订单',
                'history' : '历史',
                'settings' : {
                    name : '设置',
                    childs : {
                        'common' : {
                            name : '通用设置',
                            childs : {
                                'theme' : {
                                    name : '模板',
                                    childs : {
                                        'modify' : '编辑',
                                        'market' : '模板市场'
                                    }
                                },
                                'goods' : '商品',
                                'payment' : '支付'
                            }
                        },
                        'account' : {
                            name : '账户设置',
                            childs : {
                                'email' : '邮箱设置',
                                'password' : '修改密码'
                            }
                        },
                        'safity' : {
                            name : '安全设置',
                            childs : {
                                'multiple' : '多重认证',
                                'found' : '账户找回',
                                'history' : '登录历史',
                                'help' : '寻求帮助',
                                'blocked' : '锁定账户'
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
    侧栏的线条风格的菜单。
    >tpl
    <div style="width:220px;">
        <ui-menu :menu="menu" class="line" position="side"></ui-menu>
    </div>
    >script
    {
        data : {
            menu : {
                'home' : '首页',
                'order' : '订单',
                'history' : '历史',            
                'settings' : {
                    name : '设置',
                    childs : {
                        'common' : {
                            name : '通用设置',
                            childs : {
                                'theme' : {
                                    name : '模板',
                                    childs : {
                                        'modify' : '编辑',
                                        'market' : '模板市场'
                                    }
                                },
                                'goods' : '商品',
                                'payment' : '支付'
                            }
                        },
                        'account' : {
                            name : '账户设置',
                            childs : {
                                'email' : '邮箱设置',
                                'password' : '修改密码'
                            }
                        },
                        'safity' : {
                            name : '安全设置',
                            childs : {
                                'multiple' : '多重认证',
                                'found' : '账户找回',
                                'history' : '登录历史',
                                'help' : '寻求帮助',
                                'blocked' : '锁定账户'
                            }
                        }
                    }
                }
            }
        }
    }
    :::

    :::vue
    @name:区块风格的菜单
    ---
    #demo
    >desc
    通过`block`样式类定义区块风格的菜单。
    >tpl
    <div style="width:700px;">
        <ui-menu :menu="menu" class="block"></ui-menu>
    </div>
    >script
    {
        data : {
            menu : {
                'home' : '首页',
                'order' : '订单',
                'history' : '历史',          
                'settings' : {
                    name : '设置',
                    childs : {
                        'common' : {
                            name : '通用设置',
                            childs : {
                                'theme' : {
                                    name : '模板',
                                    childs : {
                                        'modify' : '编辑',
                                        'market' : '模板市场'
                                    }
                                },
                                'goods' : '商品',
                                'payment' : '支付'
                            }
                        },
                        'account' : {
                            name : '账户设置',
                            childs : {
                                'email' : '邮箱设置',
                                'password' : '修改密码'
                            }
                        },
                        'safity' : {
                            name : '安全设置',
                            childs : {
                                'multiple' : '多重认证',
                                'found' : '账户找回',
                                'history' : '登录历史',
                                'help' : '寻求帮助',
                                'blocked' : '锁定账户'
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
    侧栏的区块风格的菜单。
    >tpl
    <div style="width:220px;">
        <ui-menu :menu="menu" class="block" position="side"></ui-menu>
    </div>
    >script
    {
        data : {
            menu : {
                'home' : '首页',
                'order' : '订单',
                'history' : '历史',        
                'settings' : {
                    name : '设置',
                    childs : {
                        'common' : {
                            name : '通用设置',
                            childs : {
                                'theme' : {
                                    name : '模板',
                                    childs : {
                                        'modify' : '编辑',
                                        'market' : '模板市场'
                                    }
                                },
                                'goods' : '商品',
                                'payment' : '支付'
                            }
                        },
                        'account' : {
                            name : '账户设置',
                            childs : {
                                'email' : '邮箱设置',
                                'password' : '修改密码'
                            }
                        },
                        'safity' : {
                            name : '安全设置',
                            childs : {
                                'multiple' : '多重认证',
                                'found' : '账户找回',
                                'history' : '登录历史',
                                'help' : '寻求帮助',
                                'blocked' : '锁定账户'
                            }
                        }
                    }
                }
            }
        }
    }
    :::

    :::vue
    @name:垂直填满容器的菜单
    ---
    #demo
    >desc
    当菜单的`position`为`top`时，可以为菜单添加`fill`样式类，使得菜单的高度与父容器高度保持一致。
    >tpl
    <div style="width:700px;">
        <div style="height: 120px;">
            <ui-menu :menu="menu" position="top" class="fill line"></ui-menu>
        </div>
    </div>
    >script
    {
        data : {
            menu : {
                'home' : '首页',
                'order' : '订单',
                'history' : '历史',
                'settings' : '设置'
            }
        }
    }
    :::

    :::vue
    @name:绑定处理函数
    ---
    #demo
    >desc
    帮点菜单点击后的处理函数有两种方法，第一方法是绑定在`menu`配置中，通过`handler`为每一个项目绑定处理函数。
    >tpl
    <div style="width:700px;">
        <ui-menu :menu="menu"></ui-menu>
    </div>
    >script
    {
        data : function () {
            return {
                menu : {
                    'home' : {
                        name : '首页',
                        handler : this.clickHome
                    },
                    'order' : {
                        name : '订单',
                        handler : this.clickOrder
                    },
                    'search' : {
                        name : '搜索',
                        hanlder : this.clickSearch
                    }
                }
            };
        },
        methods : {
            clickHome : function () {
                alert('点击首页');
            },
            clickOrder : function () {
                alert('点击订单');
            },
            clickSearch : function () {
                alert('点击搜索');
            }
        }
    }
    ---
    #demo
    >desc
    第二种方法通过监听导航菜单组件的`emit`事件。
    >tpl
    <div style="width:700px;">
        <ui-menu :menu="menu" @emit="itemClick"></ui-menu>
    </div>
    >script
    {
        data : function () {
            return {
                menu : {
                    'home' : '首页',
                    'order' : {
                        name : '订单',
                        childs : {
                            'my' : '我的订单',
                            'history' : '历史订单'
                        }
                    },
                    'search' : '搜索'
                }
            };
        },
        methods : {
            itemClick : function (item) {
                // item是点击项目的对象
                // 包含：
                // item.key : 项目的KEY
                // item.name : 项目的名称
                // item.link : 跳转链接
                // item.newtab : 是否新窗口打开
                // item.childs : 子菜单对象
                alert(`点击${item.name}(${item.key})`);
            }
        }
    }
    :::

    :::vue
    @name:多级子菜单
    ---
    #demo
    >tpl
    <div style="width:700px;">
        <ui-menu :menu="menu"></ui-menu>
    </div>
    >script
    {
        data : {
            menu : {
                'home' : '首页',
                'order' : '订单',
                'history' : '历史',
                'settings' : {
                    name : '设置',
                    childs : {
                        'common' : {
                            name : '通用设置',
                            childs : {
                                'theme' : {
                                    name : '模板',
                                    childs : {
                                        'modify' : '编辑',
                                        'market' : '模板市场'
                                    }
                                },
                                'goods' : '商品',
                                'payment' : '支付'
                            }
                        },
                        'account' : {
                            name : '账户设置',
                            childs : {
                                'email' : '邮箱设置',
                                'password' : '修改密码'
                            }
                        },
                        'safity' : {
                            name : '安全设置',
                            childs : {
                                'multiple' : '多重认证',
                                'found' : '账户找回',
                                'history' : '登录历史',
                                'help' : '寻求帮助',
                                'blocked' : '锁定账户'
                            }
                        }
                    }
                }
            }
        }
    }
    :::

    :::vue
    @name:子菜单分组
    ---
    #demo
    >desc
    从二级菜单开始，可以通过`groups`为菜单项目进行分组。需要注意的当指定了`groups`菜单项的顺序将按照`groups`为准，而不是`childs`中的顺序。
    >tpl
    <div style="width:700px;">
        <ui-menu :menu="menu"></ui-menu>
    </div>
    >script
    {
        data : function () {
            return {
                menu : {
                    'home' : '首页',
                    'order' : {
                        name : '订单',
                        childs : {
                            'all' : '所有',
                            'notshipped' : '待发货',
                            'intransit' : '运输中',
                            'done' : '已完成',
                            'history' : '历史订单',
                            'status' : '订单状态',
                            'data' : '数据统计'
                        },
                        groups : {
                            '订单列表' : ['all', 'done', 'notshipped', 'intransit'],
                            '更多' : ['history', 'status', 'data']
                        }
                    }
                }
            };
        }
    }
    :::

    :::vue
    @name:带图标的菜单
    ---
    #demo
    >desc
    你可以直接在`name`中增加`<i>`标签来为菜单增加图标。
    >tpl
    <div style="width:700px;">
        <ui-menu :menu="menu"></ui-menu>
    </div>
    >script
    {
        data : function () {
            return {
                menu : {
                    'home' : '<i class="mo-icon mo-icon-block-4"></i>首页',
                    'order' : {
                        name : '<i class="mo-icon mo-icon-menu"></i>订单',
                        childs : {
                            'my' : '<i class="mo-icon mo-icon-list"></i>我的订单',
                            'history' : '<i class="mo-icon mo-icon-time-cf"></i>历史订单'
                        }
                    },
                    'search' : '<i class="mo-icon mo-icon-more"></i>搜索'
                }
            };
        }
    }
    :::

    :::vue
    @name:菜单禁用
    ---
    #demo
    >desc
    通过`disabled`可以禁用菜单项，当项目被禁用后不会显示子菜单，也不会响应点击。
    >tpl
    <div style="width:700px;">
        <ui-menu :menu="menu"></ui-menu>
    </div>
    >script
    {
        data : function () {
            return {
                menu : {
                    'home' : '<i class="mo-icon mo-icon-block-4"></i>首页',
                    'order' : {
                        name : '<i class="mo-icon mo-icon-menu"></i>订单',
                        childs : {
                            'my' : '<i class="mo-icon mo-icon-list"></i>我的订单',
                            'history' : {
                                name : '<i class="mo-icon mo-icon-time-cf"></i>历史订单',
                                childs : {
                                    'week' : '最近一周',
                                    'month' : '最近一月'
                                },
                                disable : true
                            }
                        }
                    },
                    'search' : {
                        name : '<i class="mo-icon mo-icon-more"></i>搜索',
                        disable : true
                    }
                }
            };
        }
    }
    :::

    :::vue
    @name:高亮当前所在菜单
    ---
    #demo
    >desc
    你可以通过`current-menu`配置来高亮当前的菜单，多级菜单用斜杠来分割每一级。
    >tpl
    <div style="width:700px;">
        <ui-menu :menu="menu" current-menu="order/history/week"></ui-menu>
    </div>
    >script
    {
        data : function () {
            return {
                menu : {
                    'home' : '首页',
                    'order' : {
                        name : '订单',
                        childs : {
                            'my' : '我的订单',
                            'history' : {
                                name : '历史订单',
                                childs : {
                                    'week' : '最近一周',
                                    'month' : '最近一月'
                                }
                            }
                        }
                    },
                    'search' : '搜索'
                }
            };
        }
    }
    :::

    :::vue
    @name:侧边栏菜单
    ---
    #demo
    >desc
    通过将`position`配置设为`side`，可以将菜单位置改为侧栏。
    >tpl
    <div style="width:220px;">
        <ui-menu :menu="menu" position="side"></ui-menu>
    </div>
    >script
    {
        data : {
            menu : {
                'home' : '首页',
                'order' : '订单',
                'history' : '历史',
                'settings' : '设置'
            }
        }
    }
    ---
    #demo
    >desc
    有多级子菜单的侧边栏菜单。
    >tpl
    <div style="width:220px;">
        <ui-menu :menu="menu" position="side"></ui-menu>
    </div>
    >script
    {
        data : {
            menu : {
                'home' : '首页',
                'order' : '订单',
                'history' : '历史',
                'settings' : {
                    name : '设置',
                    childs : {
                        'common' : {
                            name : '通用设置',
                            childs : {
                                'theme' : {
                                    name : '模板',
                                    childs : {
                                        'modify' : '编辑',
                                        'market' : '模板市场'
                                    }
                                },
                                'goods' : '商品',
                                'payment' : '支付'
                            }
                        },
                        'account' : {
                            name : '账户设置',
                            childs : {
                                'email' : '邮箱设置',
                                'password' : '修改密码'
                            }
                        },
                        'safity' : {
                            name : '安全设置',
                            childs : {
                                'multiple' : '多重认证',
                                'found' : '账户找回',
                                'history' : '登录历史',
                                'help' : '寻求帮助',
                                'blocked' : '锁定账户'
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
    带菜单分组的侧边栏菜单。
    >tpl
    <div style="width:220px;">
        <ui-menu :menu="menu" position="side"></ui-menu>
    </div>
    >script
    {
        data : function () {
            return {
                menu : {
                    'home' : '首页',
                    'order' : {
                        name : '订单',
                        childs : {
                            'all' : '所有',
                            'notshipped' : '待发货',
                            'intransit' : '运输中',
                            'done' : '已完成',
                            'history' : '历史订单',
                            'status' : '订单状态',
                            'data' : '数据统计'
                        },
                        groups : {
                            '订单列表' : ['all', 'done', 'notshipped', 'intransit'],
                            '更多' : ['history', 'status', 'data']
                        }
                    }
                }
            };
        }
    }
    ---
    #demo
    >desc
    带图标的侧边栏菜单。
    >tpl
    <div style="width:220px;">
        <ui-menu :menu="menu" position="side"></ui-menu>
    </div>
    >script
    {
        data : function () {
            return {
                menu : {
                    'home' : '<i class="mo-icon mo-icon-block-4"></i>首页',
                    'order' : {
                        name : '<i class="mo-icon mo-icon-menu"></i>订单',
                        childs : {
                            'my' : '<i class="mo-icon mo-icon-list"></i>我的订单',
                            'history' : '<i class="mo-icon mo-icon-time-cf"></i>历史订单'
                        }
                    },
                    'search' : '<i class="mo-icon mo-icon-more"></i>搜索'
                }
            };
        }
    }
    ---
    #demo
    >desc
    带禁用项的侧边栏菜单。
    >tpl
    <div style="width:220px;">
        <ui-menu :menu="menu" position="side"></ui-menu>
    </div>
    >script
    {
        data : function () {
            return {
                menu : {
                    'home' : '<i class="mo-icon mo-icon-block-4"></i>首页',
                    'order' : {
                        name : '<i class="mo-icon mo-icon-menu"></i>订单',
                        childs : {
                            'my' : '<i class="mo-icon mo-icon-list"></i>我的订单',
                            'history' : {
                                name : '<i class="mo-icon mo-icon-time-cf"></i>历史订单',
                                childs : {
                                    'week' : '最近一周',
                                    'month' : '最近一月'
                                },
                                disable : true
                            }
                        }
                    },
                    'search' : {
                        name : '<i class="mo-icon mo-icon-more"></i>搜索',
                        disable : true
                    }
                }
            };
        }
    }
    ---
    #demo
    >desc
    高亮当前所在菜单的侧边栏菜单。
    >tpl
    <div style="width:220px;">
        <ui-menu :menu="menu" current-menu="order/history/week" position="side"></ui-menu>
    </div>
    >script
    {
        data : function () {
            return {
                menu : {
                    'home' : '首页',
                    'order' : {
                        name : '订单',
                        childs : {
                            'my' : '我的订单',
                            'history' : {
                                name : '历史订单',
                                childs : {
                                    'week' : '最近一周',
                                    'month' : '最近一月'
                                }
                            }
                        }
                    },
                    'search' : '搜索'
                }
            };
        }
    }
    :::

    [[[形态]]]

    #### 支持

    |类型|支持|默认|
    |-|-|-|
    |尺寸|`m` `s` `xs` `xxs`|`m`|
    |色彩|`white` `gray` `light-gray` `black` `light-black` `extra-light-black`|`white`|
    |状态|不支持|-|

    <a href="/guide/status.html">查看形态文档</a>

    :::vue
    @name:尺寸
    ---
    #renderer
    >name
    size-repeat
    >rules
    m,s,xs,xxs
    >tpl
    <div style="width:700px;">
        <ui-menu
            :menu="{
                'home' : '<i class=\'mo-icon mo-icon-block-4\'></i>尺寸{$sizeName}',
                'order' : {
                    name : '<i class=\'mo-icon mo-icon-menu\'></i>订单',
                    childs : {
                        'my' : '我的订单',
                        'history' : {
                            name : '历史订单',
                            childs : {
                                'week' : '最近一周',
                                'month' : '最近一月'
                            }
                        }
                    }
                },
                'search' : '<i class=\'mo-icon mo-icon-more\'></i>搜索'
            }"
            size="{$sizeKey}"
        ></ui-menu>
        <br>
    </div>
    ---
    #renderer
    >name
    size-repeat
    >rules
    m,s,xs,xxs
    >desc
    侧边栏导航菜单的尺寸。
    >tpl
    <div style="width:220px;">
        <ui-menu
            :menu="{
                'home' : '<i class=\'mo-icon mo-icon-block-4\'></i>尺寸{$sizeName}',
                'order' : {
                    name : '<i class=\'mo-icon mo-icon-menu\'></i>订单',
                    childs : {
                        'my' : '我的订单',
                        'history' : {
                            name : '历史订单',
                            childs : {
                                'week' : '最近一周',
                                'month' : '最近一月'
                            }
                        }
                    }
                },
                'search' : '<i class=\'mo-icon mo-icon-more\'></i>搜索'
            }"
            size="{$sizeKey}"
            position="side"
        ></ui-menu>
        <br>
    </div>
    ---
    #renderer
    >name
    size-repeat
    >rules
    m,s,xs,xxs
    >desc
    侧边栏折叠后的导航菜单的尺寸。
    >tpl
    <div style="width:220px;">
        <ui-menu
            :menu="{
                'home' : '<i class=\'mo-icon mo-icon-block-4\'></i>尺寸{$sizeName}',
                'order' : {
                    name : '<i class=\'mo-icon mo-icon-menu\'></i>订单',
                    childs : {
                        'my' : '我的订单',
                        'history' : {
                            name : '历史订单',
                            childs : {
                                'week' : '最近一周',
                                'month' : '最近一月'
                            }
                        }
                    }
                },
                'search' : '<i class=\'mo-icon mo-icon-more\'></i>搜索'
            }"
            size="{$sizeKey}"
            position="side"
            :side-collapse="true"
        ></ui-menu>
        <br>
    </div>
    :::

    :::vue
    @name:色彩(浅色)
    ---
    #renderer
    >name
    color-repeat
    >rules
    color:gray
    >tpl
    <div style="width:700px;padding:20px;">
        <ui-menu
            :menu="{
                'home' : '<i class=\'mo-icon mo-icon-block-4\'></i>颜色{$colorName}菜单',
                'active' : {
                    name : '活动',
                    disable : true
                },
                'order' : {
                    name : '订单',          
                    childs : {
                        'all' : '所有',
                        'notshipped' : '待发货',
                        'intransit' : '运输中',
                        'done' : '已完成',
                        'history' : '历史订单',
                        'status' : '订单状态',
                        'data' : '数据统计'
                    },
                    groups : {
                        '订单列表' : ['all', 'done', 'notshipped', 'intransit'],
                        '更多' : ['history', 'status', 'data']
                    }
                },
                'settings' : {
                    name : '设置',
                    childs : {
                        'common' : {
                            name : '通用设置',
                            childs : {
                                'theme' : {
                                    name : '模板',
                                    childs : {
                                        'modify' : '编辑',
                                        'market' : '模板市场'
                                    }
                                },
                                'goods' : '商品',
                                'payment' : '支付'
                            }
                        },
                        'account' : {
                            name : '账户设置',
                            childs : {
                                'email' : '邮箱设置',
                                'password' : '修改密码'
                            }
                        },
                        'safity' : {
                            name : '安全设置',
                            childs : {
                                'multiple' : '多重认证',
                                'found' : '账户找回',
                                'history' : '登录历史',
                                'help' : '寻求帮助',
                                'blocked' : '锁定账户'
                            }
                        }
                    }
                }
            }"
            color="{$colorKey}"
        ></ui-menu>
        <br>
    </div>
    ---
    #renderer
    >name
    color-repeat
    >rules
    color:gray
    >desc
    侧边栏导航菜单的尺寸。
    >tpl
    <div style="width:260px;padding:20px;">
        <ui-menu
            :menu="{
                'home' : '<i class=\'mo-icon mo-icon-block-4\'></i>颜色{$colorName}菜单',
                'active' : {
                    name : '活动',
                    disable : true
                },
                'order' : {
                    name : '订单',          
                    childs : {
                        'all' : '所有',
                        'notshipped' : '待发货',
                        'intransit' : '运输中',
                        'done' : '已完成',
                        'history' : '历史订单',
                        'status' : '订单状态',
                        'data' : '数据统计'
                    },
                    groups : {
                        '订单列表' : ['all', 'done', 'notshipped', 'intransit'],
                        '更多' : ['history', 'status', 'data']
                    }
                },
                'settings' : {
                    name : '设置',
                    childs : {
                        'common' : {
                            name : '通用设置',
                            childs : {
                                'theme' : {
                                    name : '模板',
                                    childs : {
                                        'modify' : '编辑',
                                        'market' : '模板市场'
                                    }
                                },
                                'goods' : '商品',
                                'payment' : '支付'
                            }
                        },
                        'account' : {
                            name : '账户设置',
                            childs : {
                                'email' : '邮箱设置',
                                'password' : '修改密码'
                            }
                        },
                        'safity' : {
                            name : '安全设置',
                            childs : {
                                'multiple' : '多重认证',
                                'found' : '账户找回',
                                'history' : '登录历史',
                                'help' : '寻求帮助',
                                'blocked' : '锁定账户'
                            }
                        }
                    }
                }
            }"
            color="{$colorKey}"
            position="side"
        ></ui-menu>
        <br>
    </div>
    ---
    #renderer
    >name
    color-repeat
    >rules
    color:gray
    >desc
    线条风格的菜单。
    >tpl
    <div>
        <div style="width:700px;padding:20px;">
            <ui-menu
                :menu="{
                    'home' : '<i class=\'mo-icon mo-icon-block-4\'></i>颜色{$colorName}菜单',
                    'active' : {
                        name : '活动',
                        disable : true
                    },
                    'order' : {
                        name : '订单',          
                        childs : {
                            'all' : '所有',
                            'notshipped' : '待发货',
                            'intransit' : '运输中',
                            'done' : '已完成',
                            'history' : '历史订单',
                            'status' : '订单状态',
                            'data' : '数据统计'
                        },
                        groups : {
                            '订单列表' : ['all', 'done', 'notshipped', 'intransit'],
                            '更多' : ['history', 'status', 'data']
                        }
                    },
                    'settings' : {
                        name : '设置',
                        childs : {
                            'common' : {
                                name : '通用设置',
                                childs : {
                                    'theme' : {
                                        name : '模板',
                                        childs : {
                                            'modify' : '编辑',
                                            'market' : '模板市场'
                                        }
                                    },
                                    'goods' : '商品',
                                    'payment' : '支付'
                                }
                            },
                            'account' : {
                                name : '账户设置',
                                childs : {
                                    'email' : '邮箱设置',
                                    'password' : '修改密码'
                                }
                            },
                            'safity' : {
                                name : '安全设置',
                                childs : {
                                    'multiple' : '多重认证',
                                    'found' : '账户找回',
                                    'history' : '登录历史',
                                    'help' : '寻求帮助',
                                    'blocked' : '锁定账户'
                                }
                            }
                        }
                    }
                }"
                color="{$colorKey}"
                class="line"
            ></ui-menu>
        </div>
        <br>
        <div style="width:260px;padding:20px;">
            <ui-menu
                :menu="{
                    'home' : '<i class=\'mo-icon mo-icon-block-4\'></i>颜色{$colorName}菜单',
                    'active' : {
                        name : '活动',
                        disable : true
                    },
                    'order' : {
                        name : '订单',          
                        childs : {
                            'all' : '所有',
                            'notshipped' : '待发货',
                            'intransit' : '运输中',
                            'done' : '已完成',
                            'history' : '历史订单',
                            'status' : '订单状态',
                            'data' : '数据统计'
                        },
                        groups : {
                            '订单列表' : ['all', 'done', 'notshipped', 'intransit'],
                            '更多' : ['history', 'status', 'data']
                        }
                    },
                    'settings' : {
                        name : '设置',
                        childs : {
                            'common' : {
                                name : '通用设置',
                                childs : {
                                    'theme' : {
                                        name : '模板',
                                        childs : {
                                            'modify' : '编辑',
                                            'market' : '模板市场'
                                        }
                                    },
                                    'goods' : '商品',
                                    'payment' : '支付'
                                }
                            },
                            'account' : {
                                name : '账户设置',
                                childs : {
                                    'email' : '邮箱设置',
                                    'password' : '修改密码'
                                }
                            },
                            'safity' : {
                                name : '安全设置',
                                childs : {
                                    'multiple' : '多重认证',
                                    'found' : '账户找回',
                                    'history' : '登录历史',
                                    'help' : '寻求帮助',
                                    'blocked' : '锁定账户'
                                }
                            }
                        }
                    }
                }"
                color="{$colorKey}"
                class="line"
                position="side"
            ></ui-menu>
        </div>
        <br>
    </div>
    ---
    #renderer
    >name
    color-repeat
    >rules
    color:gray
    >desc
    区块风格的菜单。
    >tpl
    <div>
        <div style="width:700px;padding:20px;">
            <ui-menu
                :menu="{
                    'home' : '<i class=\'mo-icon mo-icon-block-4\'></i>颜色{$colorName}菜单',
                    'active' : {
                        name : '活动',
                        disable : true
                    },
                    'order' : {
                        name : '订单',          
                        childs : {
                            'all' : '所有',
                            'notshipped' : '待发货',
                            'intransit' : '运输中',
                            'done' : '已完成',
                            'history' : '历史订单',
                            'status' : '订单状态',
                            'data' : '数据统计'
                        },
                        groups : {
                            '订单列表' : ['all', 'done', 'notshipped', 'intransit'],
                            '更多' : ['history', 'status', 'data']
                        }
                    },
                    'settings' : {
                        name : '设置',
                        childs : {
                            'common' : {
                                name : '通用设置',
                                childs : {
                                    'theme' : {
                                        name : '模板',
                                        childs : {
                                            'modify' : '编辑',
                                            'market' : '模板市场'
                                        }
                                    },
                                    'goods' : '商品',
                                    'payment' : '支付'
                                }
                            },
                            'account' : {
                                name : '账户设置',
                                childs : {
                                    'email' : '邮箱设置',
                                    'password' : '修改密码'
                                }
                            },
                            'safity' : {
                                name : '安全设置',
                                childs : {
                                    'multiple' : '多重认证',
                                    'found' : '账户找回',
                                    'history' : '登录历史',
                                    'help' : '寻求帮助',
                                    'blocked' : '锁定账户'
                                }
                            }
                        }
                    }
                }"
                color="{$colorKey}"
                class="block"
            ></ui-menu>
        </div>
        <br>
        <div style="width:260px;padding:20px;">
            <ui-menu
                :menu="{
                    'home' : '<i class=\'mo-icon mo-icon-block-4\'></i>颜色{$colorName}菜单',
                    'active' : {
                        name : '活动',
                        disable : true
                    },
                    'order' : {
                        name : '订单',          
                        childs : {
                            'all' : '所有',
                            'notshipped' : '待发货',
                            'intransit' : '运输中',
                            'done' : '已完成',
                            'history' : '历史订单',
                            'status' : '订单状态',
                            'data' : '数据统计'
                        },
                        groups : {
                            '订单列表' : ['all', 'done', 'notshipped', 'intransit'],
                            '更多' : ['history', 'status', 'data']
                        }
                    },
                    'settings' : {
                        name : '设置',
                        childs : {
                            'common' : {
                                name : '通用设置',
                                childs : {
                                    'theme' : {
                                        name : '模板',
                                        childs : {
                                            'modify' : '编辑',
                                            'market' : '模板市场'
                                        }
                                    },
                                    'goods' : '商品',
                                    'payment' : '支付'
                                }
                            },
                            'account' : {
                                name : '账户设置',
                                childs : {
                                    'email' : '邮箱设置',
                                    'password' : '修改密码'
                                }
                            },
                            'safity' : {
                                name : '安全设置',
                                childs : {
                                    'multiple' : '多重认证',
                                    'found' : '账户找回',
                                    'history' : '登录历史',
                                    'help' : '寻求帮助',
                                    'blocked' : '锁定账户'
                                }
                            }
                        }
                    }
                }"
                color="{$colorKey}"
                class="block"
                position="side"
            ></ui-menu>
        </div>
        <br>
    </div>
    :::

    :::vue
    @name:色彩(深色)
    ---
    #renderer
    >name
    color-repeat
    >rules
    color:black
    >tpl
    <div style="width:700px;padding:20px;background:#646b75;">
        <ui-menu
            :menu="{
                'home' : '<i class=\'mo-icon mo-icon-block-4\'></i>颜色{$colorName}菜单',
                'active' : {
                    name : '活动',
                    disable : true
                },
                'order' : {
                    name : '订单',          
                    childs : {
                        'all' : '所有',
                        'notshipped' : '待发货',
                        'intransit' : '运输中',
                        'done' : '已完成',
                        'history' : '历史订单',
                        'status' : '订单状态',
                        'data' : '数据统计'
                    },
                    groups : {
                        '订单列表' : ['all', 'done', 'notshipped', 'intransit'],
                        '更多' : ['history', 'status', 'data']
                    }
                },
                'settings' : {
                    name : '设置',
                    childs : {
                        'common' : {
                            name : '通用设置',
                            childs : {
                                'theme' : {
                                    name : '模板',
                                    childs : {
                                        'modify' : '编辑',
                                        'market' : '模板市场'
                                    }
                                },
                                'goods' : '商品',
                                'payment' : '支付'
                            }
                        },
                        'account' : {
                            name : '账户设置',
                            childs : {
                                'email' : '邮箱设置',
                                'password' : '修改密码'
                            }
                        },
                        'safity' : {
                            name : '安全设置',
                            childs : {
                                'multiple' : '多重认证',
                                'found' : '账户找回',
                                'history' : '登录历史',
                                'help' : '寻求帮助',
                                'blocked' : '锁定账户'
                            }
                        }
                    }
                }
            }"
            color="{$colorKey}"
        ></ui-menu>
        <br>
    </div>
    ---
    #renderer
    >name
    color-repeat
    >rules
    color:black
    >desc
    侧边栏导航菜单的尺寸。
    >tpl
    <div style="width:260px;padding:20px;background:#646b75;">
        <ui-menu
            :menu="{
                'home' : '<i class=\'mo-icon mo-icon-block-4\'></i>颜色{$colorName}菜单',
                'active' : {
                    name : '活动',
                    disable : true
                },
                'order' : {
                    name : '订单',          
                    childs : {
                        'all' : '所有',
                        'notshipped' : '待发货',
                        'intransit' : '运输中',
                        'done' : '已完成',
                        'history' : '历史订单',
                        'status' : '订单状态',
                        'data' : '数据统计'
                    },
                    groups : {
                        '订单列表' : ['all', 'done', 'notshipped', 'intransit'],
                        '更多' : ['history', 'status', 'data']
                    }
                },
                'settings' : {
                    name : '设置',
                    childs : {
                        'common' : {
                            name : '通用设置',
                            childs : {
                                'theme' : {
                                    name : '模板',
                                    childs : {
                                        'modify' : '编辑',
                                        'market' : '模板市场'
                                    }
                                },
                                'goods' : '商品',
                                'payment' : '支付'
                            }
                        },
                        'account' : {
                            name : '账户设置',
                            childs : {
                                'email' : '邮箱设置',
                                'password' : '修改密码'
                            }
                        },
                        'safity' : {
                            name : '安全设置',
                            childs : {
                                'multiple' : '多重认证',
                                'found' : '账户找回',
                                'history' : '登录历史',
                                'help' : '寻求帮助',
                                'blocked' : '锁定账户'
                            }
                        }
                    }
                }
            }"
            color="{$colorKey}"
            position="side"
        ></ui-menu>
        <br>
    </div>
    ---
    #renderer
    >name
    color-repeat
    >rules
    color:black
    >desc
    线条风格的菜单。
    >tpl
    <div>
        <div style="width:700px;padding:20px;background:#646b75;">
            <ui-menu
                :menu="{
                    'home' : '<i class=\'mo-icon mo-icon-block-4\'></i>颜色{$colorName}菜单',
                    'active' : {
                        name : '活动',
                        disable : true
                    },
                    'order' : {
                        name : '订单',          
                        childs : {
                            'all' : '所有',
                            'notshipped' : '待发货',
                            'intransit' : '运输中',
                            'done' : '已完成',
                            'history' : '历史订单',
                            'status' : '订单状态',
                            'data' : '数据统计'
                        },
                        groups : {
                            '订单列表' : ['all', 'done', 'notshipped', 'intransit'],
                            '更多' : ['history', 'status', 'data']
                        }
                    },
                    'settings' : {
                        name : '设置',
                        childs : {
                            'common' : {
                                name : '通用设置',
                                childs : {
                                    'theme' : {
                                        name : '模板',
                                        childs : {
                                            'modify' : '编辑',
                                            'market' : '模板市场'
                                        }
                                    },
                                    'goods' : '商品',
                                    'payment' : '支付'
                                }
                            },
                            'account' : {
                                name : '账户设置',
                                childs : {
                                    'email' : '邮箱设置',
                                    'password' : '修改密码'
                                }
                            },
                            'safity' : {
                                name : '安全设置',
                                childs : {
                                    'multiple' : '多重认证',
                                    'found' : '账户找回',
                                    'history' : '登录历史',
                                    'help' : '寻求帮助',
                                    'blocked' : '锁定账户'
                                }
                            }
                        }
                    }
                }"
                color="{$colorKey}"
                class="line"
            ></ui-menu>
        </div>
        <br>
        <div style="width:260px;padding:20px;background:#646b75;">
            <ui-menu
                :menu="{
                    'home' : '<i class=\'mo-icon mo-icon-block-4\'></i>颜色{$colorName}菜单',
                    'active' : {
                        name : '活动',
                        disable : true
                    },
                    'order' : {
                        name : '订单',          
                        childs : {
                            'all' : '所有',
                            'notshipped' : '待发货',
                            'intransit' : '运输中',
                            'done' : '已完成',
                            'history' : '历史订单',
                            'status' : '订单状态',
                            'data' : '数据统计'
                        },
                        groups : {
                            '订单列表' : ['all', 'done', 'notshipped', 'intransit'],
                            '更多' : ['history', 'status', 'data']
                        }
                    },
                    'settings' : {
                        name : '设置',
                        childs : {
                            'common' : {
                                name : '通用设置',
                                childs : {
                                    'theme' : {
                                        name : '模板',
                                        childs : {
                                            'modify' : '编辑',
                                            'market' : '模板市场'
                                        }
                                    },
                                    'goods' : '商品',
                                    'payment' : '支付'
                                }
                            },
                            'account' : {
                                name : '账户设置',
                                childs : {
                                    'email' : '邮箱设置',
                                    'password' : '修改密码'
                                }
                            },
                            'safity' : {
                                name : '安全设置',
                                childs : {
                                    'multiple' : '多重认证',
                                    'found' : '账户找回',
                                    'history' : '登录历史',
                                    'help' : '寻求帮助',
                                    'blocked' : '锁定账户'
                                }
                            }
                        }
                    }
                }"
                color="{$colorKey}"
                class="line"
                position="side"
            ></ui-menu>
        </div>
        <br>
    </div>
    ---
    #renderer
    >name
    color-repeat
    >rules
    color:black
    >desc
    区块风格的菜单。
    >tpl
    <div>
        <div style="width:700px;padding:20px;background:#646b75;">
            <ui-menu
                :menu="{
                    'home' : '<i class=\'mo-icon mo-icon-block-4\'></i>颜色{$colorName}菜单',
                    'active' : {
                        name : '活动',
                        disable : true
                    },
                    'order' : {
                        name : '订单',          
                        childs : {
                            'all' : '所有',
                            'notshipped' : '待发货',
                            'intransit' : '运输中',
                            'done' : '已完成',
                            'history' : '历史订单',
                            'status' : '订单状态',
                            'data' : '数据统计'
                        },
                        groups : {
                            '订单列表' : ['all', 'done', 'notshipped', 'intransit'],
                            '更多' : ['history', 'status', 'data']
                        }
                    },
                    'settings' : {
                        name : '设置',
                        childs : {
                            'common' : {
                                name : '通用设置',
                                childs : {
                                    'theme' : {
                                        name : '模板',
                                        childs : {
                                            'modify' : '编辑',
                                            'market' : '模板市场'
                                        }
                                    },
                                    'goods' : '商品',
                                    'payment' : '支付'
                                }
                            },
                            'account' : {
                                name : '账户设置',
                                childs : {
                                    'email' : '邮箱设置',
                                    'password' : '修改密码'
                                }
                            },
                            'safity' : {
                                name : '安全设置',
                                childs : {
                                    'multiple' : '多重认证',
                                    'found' : '账户找回',
                                    'history' : '登录历史',
                                    'help' : '寻求帮助',
                                    'blocked' : '锁定账户'
                                }
                            }
                        }
                    }
                }"
                color="{$colorKey}"
                class="block"
            ></ui-menu>
        </div>
        <br>
        <div style="width:260px;padding:20px;background:#646b75;">
            <ui-menu
                :menu="{
                    'home' : '<i class=\'mo-icon mo-icon-block-4\'></i>颜色{$colorName}菜单',
                    'active' : {
                        name : '活动',
                        disable : true
                    },
                    'order' : {
                        name : '订单',          
                        childs : {
                            'all' : '所有',
                            'notshipped' : '待发货',
                            'intransit' : '运输中',
                            'done' : '已完成',
                            'history' : '历史订单',
                            'status' : '订单状态',
                            'data' : '数据统计'
                        },
                        groups : {
                            '订单列表' : ['all', 'done', 'notshipped', 'intransit'],
                            '更多' : ['history', 'status', 'data']
                        }
                    },
                    'settings' : {
                        name : '设置',
                        childs : {
                            'common' : {
                                name : '通用设置',
                                childs : {
                                    'theme' : {
                                        name : '模板',
                                        childs : {
                                            'modify' : '编辑',
                                            'market' : '模板市场'
                                        }
                                    },
                                    'goods' : '商品',
                                    'payment' : '支付'
                                }
                            },
                            'account' : {
                                name : '账户设置',
                                childs : {
                                    'email' : '邮箱设置',
                                    'password' : '修改密码'
                                }
                            },
                            'safity' : {
                                name : '安全设置',
                                childs : {
                                    'multiple' : '多重认证',
                                    'found' : '账户找回',
                                    'history' : '登录历史',
                                    'help' : '寻求帮助',
                                    'blocked' : '锁定账户'
                                }
                            }
                        }
                    }
                }"
                color="{$colorKey}"
                class="block"
                position="side"
            ></ui-menu>
        </div>
        <br>
    </div>
    :::

    [[[配置]]]

    :::vue
    @name:menu
    ---
    #config
    >conf-desc
    菜单对象，用来描述整个菜单树状结构。
    <br><br>
    可以简写成`key`:`name`的形式，`key`为菜单项的KEY，`name`为菜单项的名称。
    <br><br>
    完整的写法为`key`:`object`的形式，其中`object`包含以下字段：
    <br>
    `name`: 菜单项的名称
    <br>
    `link`: 点击后跳转的链接
    <br>
    `newtab`: 链接是否在新窗口打开(配合`link`一起使用)
    <br>
    `childs`: 子菜单，值为子菜单的对象树
    <br>
    `groups`: 配合`childs`一起使用，这是一个对象，`key`为分组名称，`value`是一个包含子菜单KEY的数组。子菜单会按照这个数组将对应的菜单项分为一组
    <br>
    `handler`: 点击菜单项后的处理函数
    <br>
    `disable`: 禁用此菜单项
    <br><br>
    注意：当一个`object`包含`childs`时`link`和`newtab`会失效。
    >conf-accept
    菜单树对象
    >conf-type
    Object
    >conf-default
    `{}`
    ---
    #demo
    >desc
    简写
    >tpl
    <div style="width:700px;">
        <ui-menu :menu="menu"></ui-menu>
    </div>
    >script
    {
        data : {
            menu : {
                'home' : '首页',
                'order' : '订单',
                'history' : '历史',
                'settings' : '设置'
            }
        }
    }
    ---
    #demo
    >desc
    完整
    >tpl
    <div style="width:700px;">
        <ui-menu :menu="menu"></ui-menu>
    </div>
    >script
    {
        data : function () {
            return {
                menu : {
                    'home' : '首页',                            // 若目录的值是字符串，则此字符串是目录名称，这是一种简写
                    'active' : {
                        name : '活动'                           // 目录的值为对象时，可以通过`name`来设置目录的名称
                    },
                    'order' : {
                        name : '订单',          
                        childs : {
                            'all' : '所有',
                            'notshipped' : '待发货',
                            'intransit' : '运输中',
                            'done' : '已完成',
                            'history' : '历史订单',
                            'status' : '订单状态',
                            'data' : '数据统计'
                        },
                        groups : {                              // `groups`可以用来给子菜单`childs`分组
                            '订单列表' : ['all', 'done', 'notshipped', 'intransit'],
                            '更多' : ['history', 'status', 'data']
                        }
                    },
                    'search' : {
                        name : '搜索',
                        link : 'https://google.com/'            // 通过`link`设置点击后跳转的链接
                    },
                    'map' : {
                        name : '地图',
                        link : 'https://maps.google.com/',
                        newtab : true                           // 通过`newtab`设置点击后新窗口打开链接
                    },             
                    'settings' : {
                        name : '设置',
                        childs : {                              // 通过`child`设置子目录，当一个目录包含`child`后，`link`会失效
                            'common' : {
                                name : '通用设置',
                                childs : {                      // 支持多级子菜单
                                    'theme' : {
                                        name : '模板',
                                        childs : {
                                            'modify' : '编辑',
                                            'market' : '模板市场'
                                        }
                                    },
                                    'goods' : '商品',
                                    'payment' : '支付'
                                }
                            },
                            'account' : {
                                name : '账户设置',
                                childs : {
                                    'email' : '邮箱设置',
                                    'password' : '修改密码'
                                }
                            },
                            'safity' : {
                                name : '安全设置',
                                childs : {
                                    'multiple' : '多重认证',
                                    'found' : '账户找回',
                                    'history' : '登录历史',
                                    'help' : '寻求帮助',
                                    'blocked' : '锁定账户'
                                }
                            }
                        }
                    },
                    'logout' : {
                        name : '注销',
                        handler : this.logout                   // 通过`handler`为目录指定点击后的处理函数
                    },
                    'help' : {
                        name : '帮助',
                        disable : true                          // 禁用菜单项
                    }
                }
            };
        },
        methods : {
            logout : function () {
                alert('注销账户');
            }
        }
    }
    :::

    :::vue
    @name:current-menu
    ---
    #config
    >conf-desc
    高亮当前所在菜单项，接受一个路径字符串，由每一级的菜单项KEY组成，每级之间用斜杠分隔。例如:`settings/profile/email`。
    >conf-accept
    路径字符串
    >conf-type
    String
    >conf-default
    `''`
    ---
    #demo
    >tpl
    <div style="width:700px;">
        <ui-menu :menu="menu" current-menu="order/history/week"></ui-menu>
    </div>
    >script
    {
        data : function () {
            return {
                menu : {
                    'home' : '首页',
                    'order' : {
                        name : '订单',
                        childs : {
                            'my' : '我的订单',
                            'history' : {
                                name : '历史订单',
                                childs : {
                                    'week' : '最近一周',
                                    'month' : '最近一月'
                                }
                            }
                        }
                    },
                    'search' : '搜索'
                }
            };
        }
    }
    ---
    #demo
    >desc
    配合`position`一起使用。
    >tpl
    <div style="width:220px;">
        <ui-menu :menu="menu" current-menu="order/history/week" position="side"></ui-menu>
    </div>
    >script
    {
        data : function () {
            return {
                menu : {
                    'home' : '首页',
                    'order' : {
                        name : '订单',
                        childs : {
                            'my' : '我的订单',
                            'history' : {
                                name : '历史订单',
                                childs : {
                                    'week' : '最近一周',
                                    'month' : '最近一月'
                                }
                            }
                        }
                    },
                    'search' : '搜索'
                }
            };
        }
    }
    :::

    :::vue
    @name:position
    ---
    #config
    >conf-desc
    导航菜单的位置。
    >conf-accept
    `'top'` : 位于顶部<br>`'side'` : 位于侧边
    >conf-type
    String
    >conf-default
    `'top'`
    ---
    #demo
    >desc
    位于侧栏的导航菜单。
    >tpl
    <div style="width:220px;">
        <ui-menu :menu="menu" position="side"></ui-menu>
    </div>
    >script
    {
        data : {
            menu : {
                'home' : '首页',
                'order' : '订单',
                'history' : '历史',
                'settings' : '设置'
            }
        }
    }
    :::

    :::vue
    @name:auto-toggle-current
    ---
    #config
    >conf-desc
    用户切换菜单时，是否自动调整并高亮当前所在菜单项。注意：若开启此配置`current-menu`配置和用户操作同时生效。
    >conf-accept
    `true`<br>`false`
    >conf-type
    Boolean
    >conf-default
    `true`
    ---
    #demo
    >desc
    用户操作不会自动高亮。
    >tpl
    <div style="width:700px;">
        <ui-menu :menu="menu" :auto-toggle-current="false"></ui-menu>
    </div>
    >script
    {
        data : {
            menu : {
                'home' : '首页',
                'order' : '订单',
                'history' : '历史',
                'settings' : '设置'
            }
        }
    }
    ---
    #demo
    >desc
    用户操作会自动高亮。
    >tpl
    <div style="width:700px;">
        <ui-menu :menu="menu" :auto-toggle-current="true"></ui-menu>
    </div>
    >script
    {
        data : {
            menu : {
                'home' : '首页',
                'order' : '订单',
                'history' : '历史',
                'settings' : '设置'
            }
        }
    }
    :::

    :::vue
    @name:position-current
    ---
    #config
    >conf-desc
    定位到当前所在的菜单。开启此选项后，若配置了`current-menu`且是一个多层级菜单，菜单会逐级显示直到展示当前所在菜单项。<br>注意：当`position`为`top`时，定位到当前所在的菜单只是暂时显示，当鼠标在组件内移动，定位的菜单会消失。
    >conf-accept
    `true`<br>`false`
    >conf-type
    Boolean
    >conf-default
    `false`
    ---
    #demo
    >tpl
    <div style="width:700px;">
        <ui-menu :menu="menu" current-menu="order/history/week" :position-current="true"></ui-menu>
    </div>
    >script
    {
        data : function () {
            return {
                menu : {
                    'home' : '首页',
                    'order' : {
                        name : '订单',
                        childs : {
                            'my' : '我的订单',
                            'history' : {
                                name : '历史订单',
                                childs : {
                                    'week' : '最近一周',
                                    'month' : '最近一月'
                                }
                            }
                        }
                    },
                    'search' : '搜索'
                }
            };
        }
    }
    ---
    #demo
    >desc
    配合`position`一起使用。
    >tpl
    <div style="width:220px;">
        <ui-menu :menu="menu" current-menu="order/history/week" position="side" :position-current="true"></ui-menu>
    </div>
    >script
    {
        data : function () {
            return {
                menu : {
                    'home' : '首页',
                    'order' : {
                        name : '订单',
                        childs : {
                            'my' : '我的订单',
                            'history' : {
                                name : '历史订单',
                                childs : {
                                    'week' : '最近一周',
                                    'month' : '最近一月'
                                }
                            }
                        }
                    },
                    'search' : '搜索'
                }
            };
        }
    }
    :::

    :::vue
    @name:side-expand
    ---
    #config
    >conf-desc
    侧边栏的子菜单展开，启用后所有的子目录都会展开并且不可收缩。此配置仅在`position`为`side`时生效。
    >conf-accept
    `true`<br>`false`
    >conf-type
    Boolean
    >conf-default
    `false`
    ---
    #demo
    >tpl
    <div style="width:220px;">
        <ui-menu :menu="menu" position="side" :side-expand="true"></ui-menu>
    </div>
    >script
    {
        data : function () {
            return {
                menu : {
                    'home' : '首页',
                    'order' : {
                        name : '订单',
                        childs : {
                            'my' : '我的订单',
                            'history' : {
                                name : '历史订单',
                                childs : {
                                    'week' : '最近一周',
                                    'month' : '最近一月'
                                }
                            }
                        }
                    },
                    'search' : '搜索'
                }
            };
        }
    }
    :::

    :::vue
    @name:side-collapse
    ---
    #config
    >conf-desc
    侧边栏折叠，折叠后侧边栏仅显示菜单图标，可以缩小导航菜单所占用的空间。此配置仅在`position`为`side`时生效。
    >conf-accept
    `true`<br>`false`
    >conf-type
    Boolean
    >conf-default
    `false`
    ---
    #demo
    >tpl
    <div style="width:220px;">
        <ui-menu :menu="menu" position="side" :side-collapse="true"></ui-menu>
    </div>
    >script
    {
        data : function () {
            return {
                menu : {
                    'home' : '<i class="mo-icon mo-icon-block-4"></i>首页',
                    'order' : {
                        name : '<i class="mo-icon mo-icon-menu"></i>订单',
                        childs : {
                            'my' : '我的订单',
                            'history' : {
                                name : '历史订单',
                                childs : {
                                    'week' : '最近一周',
                                    'month' : '最近一月'
                                }
                            }
                        }
                    },
                    'search' : '<i class="mo-icon mo-icon-more"></i>搜索'
                }
            };
        }
    }
    :::

    [[[方法]]]
    
    <h1>暂无</h1>

    [[[事件]]]

    :::vue
    @name:emit
    ---
    #event
    >event-desc
    当导航菜单被点击时触发（处于禁用状态的菜单项被点击不会触发）。
    >event-args
    |data|菜单触发的数据对象|`Object`|
    ---
    #demo
    >tpl
    <div style="width:700px;">
        <ui-menu :menu="menu" @emit="echo"></ui-menu>
        <br>
        <p>点击菜单触发emit事件</p>
    </div>
    >script
    {
        data : {
            menu : {
                'home' : '首页',
                'order' : '订单',
                'history' : '历史',
                'settings' : '设置'
            }
        },
        methods : {
            echo : function () {
                console.log('demo1.console1', 'emit event!');
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
        <ui-menu
            ref="demoEventLifecycle"
            v-show="show"
            :menu="{
                'home' : '首页',
                'order' : '订单',
                'history' : '历史',
                'settings' : '设置'
            }"
            @created="echo('created')"
            @mounted="echo('mounted')"
            @before-update="echo('before-update')"
            @updated="echo('updated')"
            @before-destroy="echo('before-destroy')"
            @destroyed="echo('destroyed')"
        >{*text*}</ui-menu>
        <br><br>
        <ui-link js="this.text='生命周期事件';">触发update</ui-link>
        <ui-link js="this.$refs['demoEventLifecycle'].$destroy();">触发destroy</ui-link>
    </div>
    >script
    {
        data : function () {
            return {
               text : '导航菜单',
               show : true
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

    <iframe src="/report/coverage/lib/components/menu/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>

    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                 from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'menu'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
