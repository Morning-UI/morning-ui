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

    #### 使用

    通过`menu`配置来设置菜单：

    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
        data : {
            menu : {
                'home' : '首页',
                'order' : '订单',
                'history' : '历史',
                'settings' : '设置'
            }
        }
    });
    ---
    <div style="width:600px;">
        <ui-menu :menu="menu"></ui-menu>
    </div>
    :::

    #### 完整的菜单

    上面的菜单设置是简写，下面是一个完整的菜单设置

    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
        data : function () {
            return {
                menu : {
                    'home' : '首页',                            // 若目录的值是字符串，则此字符串是目录名称，这是一种简写
                    'order' : {
                        name : '订单'                           // 目录的值为对象时，可以通过`name`来设置目录的名称
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
                            'profile' : '个人设置',
                            'safity' : '账户安全',
                            'privacy' : '隐私'
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
    });
    ---
    <div style="width:600px;">
        <ui-menu :menu="menu"></ui-menu>
    </div>
    :::

    #### 绑定处理函数

    帮点菜单点击后的处理函数有两种方法，第一方法是绑定在`menu`配置中，通过`handler`为每一个项目绑定处理函数：

    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
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
    });
    ---
    <div style="width:600px;">
        <ui-menu :menu="menu"></ui-menu>
    </div>
    :::

    第二种方法通过监听导航菜单组件的`emit`事件：

    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
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
    });
    ---
    <div style="width:600px;">
        <ui-menu :menu="menu" @emit="itemClick"></ui-menu>
    </div>
    :::

    #### 多级子菜单

    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
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
    });
    ---
    <div style="width:600px;">
        <ui-menu :menu="menu"></ui-menu>
    </div>
    :::

    #### 子菜单分组

    从二级菜单开始，可以通过`groups`为菜单项目进行分组。需要注意的当指定了`groups`菜单项的顺序将按照`groups`为准，而不是`childs`中的顺序。

    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
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
    });
    ---
    <div style="width:600px;">
        <ui-menu :menu="menu"></ui-menu>
    </div>
    :::

    #### 带图标的菜单

    你可以直接在`name`中增加`<i>`标签来为菜单增加图标：

    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
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
    });
    ---
    <div style="width:600px;">
        <ui-menu :menu="menu"></ui-menu>
    </div>
    :::

    #### 菜单禁用
    
    通过`disabled`可以禁用菜单项，当项目被禁用后不会显示子菜单，也不会响应点击：

    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
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
    });
    ---
    <div style="width:600px;">
        <ui-menu :menu="menu"></ui-menu>
    </div>
    :::

    #### 高亮当前所在菜单

    你可以通过`current-menu`配置来高亮当前的菜单，多级菜单用`\/`来分割每一级：

    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
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
    });
    ---
    <div style="width:600px;">
        <ui-menu :menu="menu" current-menu="order/history/week"></ui-menu>
    </div>
    :::

    #### 侧边栏菜单

    通过将`position`配置设为`side`，可以将菜单位置改为侧栏：


    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
        data : {
            menu : {
                'home' : '首页',
                'order' : '订单',
                'history' : '历史',
                'settings' : '设置'
            }
        }
    });
    ---
    <div style="width:220px;">
        <ui-menu :menu="menu" position="side"></ui-menu>
    </div>
    :::

    有多级子菜单的侧边栏菜单：

    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
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
    });
    ---
    <div style="width:220px;">
        <ui-menu :menu="menu" position="side"></ui-menu>
    </div>
    :::

    带菜单分组的侧边栏菜单：

    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
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
    });
    ---
    <div style="width:220px;">
        <ui-menu :menu="menu" position="side"></ui-menu>
    </div>
    :::

    带图标的侧边栏菜单：

    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
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
    });
    ---
    <div style="width:220px;">
        <ui-menu :menu="menu" position="side"></ui-menu>
    </div>
    :::

    带禁用项的侧边栏菜单：

    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
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
    });
    ---
    <div style="width:220px;">
        <ui-menu :menu="menu" position="side"></ui-menu>
    </div>
    :::

    高亮当前所在菜单的侧边栏菜单：

    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
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
    });
    ---
    <div style="width:220px;">
        <ui-menu :menu="menu" current-menu="order/history/week" position="side"></ui-menu>
    </div>
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
