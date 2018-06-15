<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 导航菜单 `<ui-nav>`
    
    <doc-component-status page="nav"></doc-component-status>
    
    [[[开始]]]

    定义一个导航菜单组件，这是一个块元素。

    #### 使用

    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
        data : {
            menu : {
                home : {
                    name : 'Home'
                },
                msg : {
                    name : 'Messages'
                },
                settings : {
                    name : 'Settings'
                },
                support : {
                    name : 'Support'
                }
            }
        }
    });
    ---
    <div style="width: 600px;">
        <ui-nav :list="menu"></ui-nav>
    </div>
    :::

    #### 在菜单中使用链接

    可以通过`link`设置菜单链接，通过`new-tab`设置来控制是否要在新窗口打开链接。

    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
        data : {
            menu : {
                home : {
                    name : 'Home'
                },
                search : {
                    name : 'Search',
                    link : 'https://google.com/'
                },
                wiki : {
                    name : 'Wiki',
                    link : 'https://zh.wikipedia.org/zh/Wiki',
                    newTab : true
                }
            }
        }
    });
    ---
    <div style="width: 600px;">
        <ui-nav :list="menu"></ui-nav>
    </div>
    :::

    #### 多个层级嵌套

    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
        data : {
            menu : {
                home : {
                    name : 'Home'
                },
                msg : {
                    name : 'Messages',
                    childs : {
                        inbox : {
                            name : 'Inbox'
                        },
                        outbox : {
                            name : 'Outbox'
                        },
                        archiving : {
                            name : 'Archiving'
                        }
                    }
                },
                settings : {
                    name : 'Settings',
                    childs : {
                        universal : {
                            name : 'Universal'
                        },
                        safety : {
                            name : 'Safety',
                            childs : {
                                account : {
                                    name : 'Account'
                                },
                                privacy : {
                                    name : 'Privacy'
                                }
                            }
                        }
                    }
                },
                support : {
                    name : 'Support'
                }
            }
        }
    });
    ---
    <div style="width: 600px;">
        <ui-nav :list="menu"></ui-nav>
    </div>
    :::

    [[[源码]]]

    <iframe src="/report/coverage/lib/components/nav/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>

    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                 from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'nav'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
