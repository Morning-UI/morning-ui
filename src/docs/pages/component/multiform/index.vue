<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 多项表单输入 `<ui-multiform>`
    
    <doc-component-status page="multiform"></doc-component-status>
    
    [[[开始]]]

    定义多项表单输入。

    多项表单输入组件是一个强大的组件，通过和其他表单组件的组合，它允许用户输入复杂的对象结构数据。

    :::vue
    @name:使用
    ---
    #demo
    >tpl
    <div style="width:300px;">
        <ui-multiform form-name="城市">
            <ui-formgroup>
                <div class="item">
                    <h5 class="title">
                        <ui-center height-fill>名称</ui-center>
                    </h5>
                    <div class="content">
                        <div class="form">
                            <ui-textinput form-key="name"></ui-textinput>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <h5 class="title">
                        <ui-center height-fill>省份</ui-center>
                    </h5>
                    <div class="content">
                        <div class="form">
                            <ui-textinput form-key="province"></ui-textinput>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <h5 class="title">
                        <ui-center height-fill>备注</ui-center>
                    </h5>
                    <div class="content">
                        <div class="form">
                            <ui-textarea form-key="note"></ui-textarea>
                        </div>
                    </div>
                </div>
            </ui-formgroup>
        </ui-multiform>
    </div>
    :::

    [[[形态]]]

    :::preset
    @name:formStatusWithSize
    @uikey:multiform
    @defaultValue:[{name:'Jim'}, {name:'Sam'}]
    @attrs: :item-filler="item => ({title: item.name})"
    @slot:<ui-formgroup><div class="item"><h5 class="title"><ui-center height-fill>名称</ui-center></h5><div class="content"><div class="form"><ui-textinput form-key="name"></ui-textinput></div></div></div></ui-formgroup>
    :::

    [[[配置]]]

    :::preset
    @name:formConfig
    @uikey:multiform
    @defaultValue:[{name:'Jim'}, {name:'Sam'}]
    @attrs: :item-filler="item => ({title: item.name})"
    @slot:<ui-formgroup><div class="item"><h5 class="title"><ui-center height-fill>名称</ui-center></h5><div class="content"><div class="form"><ui-textinput form-key="name"></ui-textinput></div></div></div></ui-formgroup>
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
    `''`
    ---
    #demo
    >tpl
    <div style="width:300px;">
        <ui-multiform inside-name="名单">
            <ui-formgroup>
                <div class="item">
                    <h5 class="title">
                        <ui-center height-fill>姓名</ui-center>
                    </h5>
                    <div class="content">
                        <div class="form">
                            <ui-textinput form-key="name"></ui-textinput>
                        </div>
                    </div>
                </div>
            </ui-formgroup>
        </ui-multiform>
    </div>
    :::

    :::vue
    @name:item-name
    ---
    #config
    >conf-desc
    项目的名称，如果没有设置`item-filler`，会作为每项的标题显示。同时会作为添加按钮标题的后缀。
    >conf-accept
    项目的名称
    >conf-type
    String
    >conf-default
    `'项目'`
    ---
    #demo
    >desc
    项目名称可以告知使用者输入项目的含义。建议和`item-filler`一起使用。
    >tpl
    <div style="width:300px;">
        <ui-multiform form-name="名单" item-name="使用者">
            <ui-formgroup>
                <div class="item">
                    <h5 class="title">
                        <ui-center height-fill>姓名</ui-center>
                    </h5>
                    <div class="content">
                        <div class="form">
                            <ui-textinput form-key="name"></ui-textinput>
                        </div>
                    </div>
                </div>
            </ui-formgroup>
        </ui-multiform>
    </div>
    :::

    :::vue
    @name:item-filler
    ---
    #config
    >conf-desc
    项目内容填充函数，此函数有一个参数：<br>`item`：每一项的数据对象<br><br>此函数通过`item`获取项目的标题及缩略图，然后返回给组件，最终将标题和缩略图显示在项目上。<br><br>返回值是一个对象，包含两个KEY：`title`、`thumb`(缩略图地址)。
    >conf-accept
    填充函数
    >conf-type
    Function
    >conf-default
    `() => {}`
    ---
    #demo
    >desc
    `item-filler`可以中项目中选出标题和缩略图，显示在项目的区块中。设置后可以让使用者更好区分每一项。<br><br>下面是使用`item-filler`选出项目的标题及缩略图。
    >tpl
    <div style="width:300px;">
        <ui-multiform form-name="名单" :item-filler="item => ({title: item.name, thumb: item.img})">
            <ui-formgroup>
                <div class="item">
                    <h5 class="title">
                        <ui-center height-fill>姓名</ui-center>
                    </h5>
                    <div class="content">
                        <div class="form">
                            <ui-textinput form-key="name"></ui-textinput>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <h5 class="title">
                        <ui-center height-fill>图片URL</ui-center>
                    </h5>
                    <div class="content">
                        <div class="form">
                            <ui-textinput form-key="img" v-model="inputValue"></ui-textinput>
                        </div>
                    </div>
                </div>
            </ui-formgroup>
        </ui-multiform>
    </div>
    >script
    {
        data : {
            inputValue : 'https://cdn.dribbble.com/users/23569/avatars/normal/4c2dc35fbb2e0da85969e49592dfd49d.jpg?1420405934'
        }
    }
    ---
    #demo
    >desc
    和`item-name`一起使用。
    >tpl
    <div style="width:300px;">
        <ui-multiform form-name="名单" item-name="使用者" :item-filler="item => ({title: item.name})">
            <ui-formgroup>
                <div class="item">
                    <h5 class="title">
                        <ui-center height-fill>姓名</ui-center>
                    </h5>
                    <div class="content">
                        <div class="form">
                            <ui-textinput form-key="name"></ui-textinput>
                        </div>
                    </div>
                </div>
            </ui-formgroup>
        </ui-multiform>
    </div>
    :::

    :::vue
    @name:item-validator
    ---
    #config
    >conf-desc
    项目添加或更新时，验证或二次处理项目的值，此函数有一个参数：<br>`value`：新增或更新项目的值<br><br>返回值(除`false`以外)作为项目添加或更新的值，若返回为`false`，则表示未通过验证，此项目不会被添加或更新。
    >conf-accept
    验证函数
    >conf-type
    Function
    >conf-default
    `value => value`
    ---
    #demo
    >desc
    `item-validator`第一种用法是对值进行二次处理，比如在名称前加上`Mr.`。
    >tpl
    <div style="width:300px;">
        <ui-multiform form-name="名单" item-name="使用者" :item-validator="validator">
            <ui-formgroup>
                <div class="item">
                    <h5 class="title">
                        <ui-center height-fill>姓名</ui-center>
                    </h5>
                    <div class="content">
                        <div class="form">
                            <ui-textinput form-key="name"></ui-textinput>
                        </div>
                    </div>
                </div>
            </ui-formgroup>
        </ui-multiform>
    </div>
    >script
    {
        methods : {
            validator : function (value) {
                
                if (!/^Mr\./.test(value.name)) {

                    value.name = `Mr.${value.name}`;
            
                }

                return value;

            }
        }
    }
    ---
    #demo
    >desc
    `item-validator`第二种用法是对值进行校验。
    >tpl
    <div style="width:300px;">
        <ui-multiform form-name="名单" item-name="使用者" :item-validator="validator">
            <ui-formgroup>
                <div class="item">
                    <h5 class="title">
                        <ui-center height-fill>姓名</ui-center>
                    </h5>
                    <div class="content">
                        <div class="form">
                            <ui-textinput form-key="name"></ui-textinput>
                        </div>
                    </div>
                </div>
            </ui-formgroup>
        </ui-multiform>
    </div>
    >script
    {
        methods : {
            validator : function (value) {

                if (!/[0-9]/.test(value.name)) {
    
                    alert('名称中必须包含数字');
                    
                    return false;
            
                }

                return value;

            }
        }
    }
    :::

    :::vue
    @name:can-move
    ---
    #config
    >conf-desc
    输入项目是否可以移动。
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
        <ui-multiform form-name="名单" can-move :item-filler="item => ({title: item.name})" v-model="value">
            <ui-formgroup>
                <div class="item">
                    <h5 class="title">
                        <ui-center height-fill>姓名</ui-center>
                    </h5>
                    <div class="content">
                        <div class="form">
                            <ui-textinput form-key="name"></ui-textinput>
                        </div>
                    </div>
                </div>
            </ui-formgroup>
        </ui-multiform>
    </div>
    >script
    {
        data : {
            value : [{name:'Jim'}, {name:'Sam'}, {name:'Gustavo'}]
        }
    }
    :::

    :::vue
    @name:max
    ---
    #config
    >conf-desc
    可输入的最大项目数。
    >conf-accept
    数字：最大项目数<br>`undefined`：无限制
    >conf-type
    Number
    >conf-default
    `undefined`
    ---
    #demo
    >desc
    下面的演示中设置了最多输入3项。
    >tpl
    <div style="width:300px;">
        <ui-multiform form-name="名单" max=3 v-model="value">
            <ui-formgroup>
                <div class="item">
                    <h5 class="title">
                        <ui-center height-fill>姓名</ui-center>
                    </h5>
                    <div class="content">
                        <div class="form">
                            <ui-textinput form-key="name"></ui-textinput>
                        </div>
                    </div>
                </div>
            </ui-formgroup>
        </ui-multiform>
    </div>
    >script
    {
        data : {
            value : [{name:'Jim'}, {name:'Sam'}, {name:'Gustavo'}]
        }
    }
    :::

    :::vue
    @name:input-type
    ---
    #config
    >conf-desc
    表单的输入模式<br><br>在批量输入模式下会进行下面操作：<br>1. 将用户输入的字符串解析成id数组(按一定的规则)<br>2. 将id数组会输入一个填值函数(用户定义填值函数)<br>3. 填值函数解析id后，返回由多个项目对象组成的数组<br>4. 这些项目会被添加到表单中<br><br>批量输入必需添加：<br>`batch-reg`将字符串解析为id数组的正则表达式<br>`batch-filler`来将输入数组转换成项目对象数组。
    >conf-accept
    `'single'`：每次输入一项<br>`'batch-separate'`：批量输入，通过内容分割得到id数组<br>`'batch-pluck'`：批量输入，通过内容匹配选取得到id数组
    >conf-type
    String
    >conf-default
    `'single'`
    ---
    #demo
    >desc
    下面是`input-type`为`batch-separate`的情况。
    >tpl
    <div style="width:300px;">
        <p>点击添加城市，输入城市的拼音缩写(使用逗号分隔)<code>hz,sh,sz</code>，然后查看效果</p>
        <ui-multiform
            form-name="地区"
            item-name="城市"
            :item-filler="item => ({title: item.city})"
            input-type="batch-separate"
            :batch-filler="filler"
        >
            <ui-formgroup>
                <div class="item">
                    <h5 class="title">
                        <ui-center height-fill>城市</ui-center>
                    </h5>
                    <div class="content">
                        <div class="form">
                            <ui-textinput form-key="city"></ui-textinput>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <h5 class="title">
                        <ui-center height-fill>省份</ui-center>
                    </h5>
                    <div class="content">
                        <div class="form">
                            <ui-textinput form-key="province"></ui-textinput>
                        </div>
                    </div>
                </div>
            </ui-formgroup>
        </ui-multiform>
    </div>
    >script
    {
        data : {
            list : {
                hz : {
                    city : '杭州',
                    province : '浙江'
                },
                sh : {
                    city : '上海',
                    province : '上海'
                },
                sz : {
                    city : '深圳',
                    province : '广东'
                }
            }
        },
        methods : {
            filler : function (ids) {
                let list = [];
                for (let id of ids) {
                    if (this.list[id]) {
                        list.push(this.list[id]);
                    }
                }
                return list;
            }
        }
    }
    ---
    #demo
    >desc
    下面是`input-type`为`batch-pluck`的情况，输入的内容混入了数字，采用了正则匹配并选取城市的字母。
    >tpl
    <div style="width:300px;">
        <p>点击添加城市，输入城市的拼音缩写(混入数字)<code>hz1sh23sz45</code>，然后查看效果</p>
        <ui-multiform
            form-name="地区"
            item-name="城市"
            :item-filler="item => ({title: item.city})"
            input-type="batch-pluck"
            batch-reg="(hz|sh|sz)"
            :batch-filler="filler"
        >
            <ui-formgroup>
                <div class="item">
                    <h5 class="title">
                        <ui-center height-fill>城市</ui-center>
                    </h5>
                    <div class="content">
                        <div class="form">
                            <ui-textinput form-key="city"></ui-textinput>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <h5 class="title">
                        <ui-center height-fill>省份</ui-center>
                    </h5>
                    <div class="content">
                        <div class="form">
                            <ui-textinput form-key="province"></ui-textinput>
                        </div>
                    </div>
                </div>
            </ui-formgroup>
        </ui-multiform>
    </div>
    >script
    {
        data : {
            list : {
                hz : {
                    city : '杭州',
                    province : '浙江'
                },
                sh : {
                    city : '上海',
                    province : '上海'
                },
                sz : {
                    city : '深圳',
                    province : '广东'
                }
            }
        },
        methods : {
            filler : function (ids) {
                let list = [];
                for (let id of ids) {
                    if (this.list[id]) {
                        list.push(this.list[id]);
                    }
                }
                return list;
            }
        }
    }
    :::

    :::vue
    @name:batch-reg
    ---
    #config
    >conf-desc
    解析用户输入字符串的正则表达式<br>在`batch-separate`模式下通过这个正则分割字符串得到id数组<br>在`batch-pluck`模式下通过匹配这个正则得到id数组(每匹配到一项添加到数组中)。
    >conf-accept
    正则表达式字符串
    >conf-type
    String
    >conf-default
    `','`
    ---
    #demo
    >desc
    通过`batch-reg`你可以修改输入id字符串的分隔符或是选取条件。
    >tpl
    <div style="width:300px;">
        <p>点击添加城市，输入城市的拼音缩写(使用斜线分隔)<code>hz/sh/sz</code>，然后查看效果</p>
        <ui-multiform
            form-name="地区"
            item-name="城市"
            :item-filler="item => ({title: item.city})"
            input-type="batch-separate"
            batch-reg="\/"
            :batch-filler="filler"
        >
            <ui-formgroup>
                <div class="item">
                    <h5 class="title">
                        <ui-center height-fill>城市</ui-center>
                    </h5>
                    <div class="content">
                        <div class="form">
                            <ui-textinput form-key="city"></ui-textinput>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <h5 class="title">
                        <ui-center height-fill>省份</ui-center>
                    </h5>
                    <div class="content">
                        <div class="form">
                            <ui-textinput form-key="province"></ui-textinput>
                        </div>
                    </div>
                </div>
            </ui-formgroup>
        </ui-multiform>
    </div>
    >script
    {
        data : {
            list : {
                hz : {
                    city : '杭州',
                    province : '浙江'
                },
                sh : {
                    city : '上海',
                    province : '上海'
                },
                sz : {
                    city : '深圳',
                    province : '广东'
                }
            }
        },
        methods : {
            filler : function (ids) {
                let list = [];
                for (let id of ids) {
                    if (this.list[id]) {
                        list.push(this.list[id]);
                    }
                }
                return list;
            }
        }
    }
    :::

    :::vue
    @name:batch-filler
    ---
    #config
    >conf-desc
    批量输入的填值函数，此函数有一个参数：<br>`ids`：用户输入的id数组<br><br>通过解析这些id，此函数返回多个项目对象组成的数组<br><br>如果解析是异步的，此函数也可以返回一个`Promise`对象。
    >conf-accept
    填值函数
    >conf-type
    Function
    >conf-default
    `value => value`
    ---
    #demo
    >desc
    在上面的`batch-reg`中已经演示同步的`batch-filler`下面来看看异步的情况，异步的`batch-filler`允许你通过输入的id数组从远程拉取数据。
    >tpl
    <div style="width:300px;">
        <p>点击添加城市，输入城市的拼音缩写(使用逗号分隔)<code>hz,sh,sz</code>，等待3秒查看效果</p>
        <ui-multiform
            form-name="地区"
            item-name="城市"
            :item-filler="item => ({title: item.city})"
            input-type="batch-separate"
            :batch-filler="filler"
        >
            <ui-formgroup>
                <div class="item">
                    <h5 class="title">
                        <ui-center height-fill>城市</ui-center>
                    </h5>
                    <div class="content">
                        <div class="form">
                            <ui-textinput form-key="city"></ui-textinput>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <h5 class="title">
                        <ui-center height-fill>省份</ui-center>
                    </h5>
                    <div class="content">
                        <div class="form">
                            <ui-textinput form-key="province"></ui-textinput>
                        </div>
                    </div>
                </div>
            </ui-formgroup>
        </ui-multiform>
    </div>
    >script
    {
        data : {
            list : {
                hz : {
                    city : '杭州',
                    province : '浙江'
                },
                sh : {
                    city : '上海',
                    province : '上海'
                },
                sz : {
                    city : '深圳',
                    province : '广东'
                }
            }
        },
        methods : {
            filler : function (ids) {
                let list = [];
                for (let id of ids) {
                    if (this.list[id]) {
                        list.push(this.list[id]);
                    }
                }
                return new Promise(resolve => {
                    setTimeout(()=>{
                        resolve(list);
                    }, 3000);
                });
            }
        }
    }
    :::

    :::vue
    @name:batch-uniq
    ---
    #config
    >conf-desc
    对用户输入解析后的id数组进行去重。
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
        <p>点击添加城市，输入城市的拼音缩写(使用逗号分隔)<code>hz,sh,sz,hz,sh,sz</code>，然后查看效果</p>
        <ui-multiform
            form-name="地区"
            item-name="城市"
            :item-filler="item => ({title: item.city})"
            input-type="batch-separate"
            :batch-uniq="true"
            :batch-filler="filler"
        >
            <ui-formgroup>
                <div class="item">
                    <h5 class="title">
                        <ui-center height-fill>城市</ui-center>
                    </h5>
                    <div class="content">
                        <div class="form">
                            <ui-textinput form-key="city"></ui-textinput>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <h5 class="title">
                        <ui-center height-fill>省份</ui-center>
                    </h5>
                    <div class="content">
                        <div class="form">
                            <ui-textinput form-key="province"></ui-textinput>
                        </div>
                    </div>
                </div>
            </ui-formgroup>
        </ui-multiform>
    </div>
    >script
    {
        data : {
            list : {
                hz : {
                    city : '杭州',
                    province : '浙江'
                },
                sh : {
                    city : '上海',
                    province : '上海'
                },
                sz : {
                    city : '深圳',
                    province : '广东'
                }
            }
        },
        methods : {
            filler : function (ids) {
                let list = [];
                for (let id of ids) {
                    if (this.list[id]) {
                        list.push(this.list[id]);
                    }
                }
                return list;
            }
        }
    }
    :::

    :::vue
    @name:show-type
    ---
    #config
    >conf-desc
    组件中对话框打开的方式(使用`no`可以提升性能)。
    >conf-accept
    `top`:从上往下弹出<br>`center`:从中间弹出<br>`no`:无动画直接出现
    >conf-type
    String
    >conf-default
    `'top'`
    ---
    #demo
    >desc
    从中间弹出的对话框。
    >tpl
    <div style="width:300px;">
        <ui-multiform form-name="名单" item-name="使用者" show-type="center">
            <ui-formgroup>
                <div class="item">
                    <h5 class="title">
                        <ui-center height-fill>姓名</ui-center>
                    </h5>
                    <div class="content">
                        <div class="form">
                            <ui-textinput form-key="name"></ui-textinput>
                        </div>
                    </div>
                </div>
            </ui-formgroup>
        </ui-multiform>
    </div>
    ---
    #demo
    >desc
    无动画直接出现的对话框。
    >tpl
    <div style="width:300px;">
        <ui-multiform form-name="名单" item-name="使用者" show-type="no">
            <ui-formgroup>
                <div class="item">
                    <h5 class="title">
                        <ui-center height-fill>姓名</ui-center>
                    </h5>
                    <div class="content">
                        <div class="form">
                            <ui-textinput form-key="name"></ui-textinput>
                        </div>
                    </div>
                </div>
            </ui-formgroup>
        </ui-multiform>
    </div>
    :::

    [[[方法]]]

    :::preset
    @name:formMethod
    @uikey:multiform
    @value:[{name:'Jim'}, {name:'Sam'}]
    @defaultValue:[{name:'Jim'}, {name:'Sam'}]
    @attrs: :item-filler="item => ({title: item.name})"
    @slot:<ui-formgroup><div class="item"><h5 class="title"><ui-center height-fill>名称</ui-center></h5><div class="content"><div class="form"><ui-textinput form-key="name"></ui-textinput></div></div></div></ui-formgroup>
    :::

    :::vue
    @name:add(item, [index])
    ---
    #method
    >method-desc
    在指定位置添加项。
    >method-args
    |item|NO|添加项目的内容|和表单对应的`key` / `value`对象|`Object`|`undefined`|
    |index|YES|添加的位置|`undefined`: 添加为最后一项<br>数字: 添加到指定的index位置|`Undefined`<br>`Number`|`undefined`|
    >method-return
    当前组件VM实例。
    ---
    #demo
    >tpl
    <div>
        <div style="width:300px;">
            <ui-multiform ref="demo2" form-name="名单" :item-filler="item => ({title: item.name})" v-model="value">
                <ui-formgroup>
                    <div class="item">
                        <h5 class="title">
                            <ui-center height-fill>姓名</ui-center>
                        </h5>
                        <div class="content">
                            <div class="form">
                                <ui-textinput form-key="name"></ui-textinput>
                            </div>
                        </div>
                    </div>
                </ui-formgroup>
            </ui-multiform>
        </div>
        <br>
        <ui-link js="morning.findVM('demo2').add({name: 'Sam'});">添加到最后</ui-link>
        <ui-link js="morning.findVM('demo2').add({name: 'Gustavo'}, 0);">添加到第0项</ui-link>
    </div>
    >script
    {
        data : {
            value : [{name:'Jim'}]
        }
    }
    :::

    :::vue
    @name:update(item, index)
    ---
    #method
    >method-desc
    更新指定位置的项。
    >method-args
    |item|NO|更新的项目内容|和表单对应的`key` / `value`对象|`Object`|`undefined`|
    |index|NO|更新的位置|更新项目的index位置|`Number`|`undefined`|
    >method-return
    当前组件VM实例。
    ---
    #demo
    >tpl
    <div>
        <div style="width:300px;">
            <ui-multiform ref="demo4" form-name="名单" :item-filler="item => ({title: item.name})" v-model="value">
                <ui-formgroup>
                    <div class="item">
                        <h5 class="title">
                            <ui-center height-fill>姓名</ui-center>
                        </h5>
                        <div class="content">
                            <div class="form">
                                <ui-textinput form-key="name"></ui-textinput>
                            </div>
                        </div>
                    </div>
                </ui-formgroup>
            </ui-multiform>
        </div>
        <br>
        <ui-link js="morning.findVM('demo4').update({name: 'Katherine'}, 1);">将第2项的name更新为Katherine</ui-link>
    </div>
    >script
    {
        data : {
            value : [{name:'Jim'}, {name:'Sam'}, {name:'Gustavo'}]
        }
    }
    :::
    
    :::vue
    @name:del(index)
    ---
    #method
    >method-desc
    删除指定位置的项。
    >method-args
    |index|NO|删除指定位置的项目|删除项目的index位置|`Number`|`undefined`|
    >method-return
    当前组件VM实例。
    ---
    #demo
    >tpl
    <div>
        <div style="width:300px;">
            <ui-multiform ref="demo3" form-name="名单" :item-filler="item => ({title: item.name})" v-model="value">
                <ui-formgroup>
                    <div class="item">
                        <h5 class="title">
                            <ui-center height-fill>姓名</ui-center>
                        </h5>
                        <div class="content">
                            <div class="form">
                                <ui-textinput form-key="name"></ui-textinput>
                            </div>
                        </div>
                    </div>
                </ui-formgroup>
            </ui-multiform>
        </div>
        <br>
        <ui-link js="morning.findVM('demo3').del(0);">删除第0项</ui-link>
    </div>
    >script
    {
        data : {
            value : [{name:'Jim'}, {name:'Sam'}, {name:'Gustavo'}]
        }
    }
    :::
    
    :::vue
    @name:move(from, to)
    ---
    #method
    >method-desc
    移动项目。
    >method-args
    |from|NO|需要移动的项目位置|移动项目的index位置|`Number`|`undefined`|
    |to|NO|移动之后的项目位置|移动之后的index位置|`Number`|`undefined`|
    >method-return
    当前组件VM实例。
    ---
    #demo
    >tpl
    <div>
        <div style="width:300px;">
            <ui-multiform ref="demo5" form-name="名单" :item-filler="item => ({title: item.name})" v-model="value">
                <ui-formgroup>
                    <div class="item">
                        <h5 class="title">
                            <ui-center height-fill>姓名</ui-center>
                        </h5>
                        <div class="content">
                            <div class="form">
                                <ui-textinput form-key="name"></ui-textinput>
                            </div>
                        </div>
                    </div>
                </ui-formgroup>
            </ui-multiform>
        </div>
        <br>
        <ui-link js="morning.findVM('demo5').move(2, 0);">将第2项移到第0项</ui-link>
    </div>
    >script
    {
        data : {
            value : [{name:'Jim'}, {name:'Sam'}, {name:'Gustavo'}]
        }
    }
    :::

    [[[事件]]]

    :::preset
    @name:formEvent
    @uiname:多项表单输入
    @uikey:multiform
    @value:[{name:'Jim'}, {name:'Sam'}]
    @defaultValue:[{name:'Jim'}, {name:'Sam'}]
    @attrs: :item-filler="item => ({title: item.name})"
    @slot:<ui-formgroup><div class="item"><h5 class="title"><ui-center height-fill>名称</ui-center></h5><div class="content"><div class="form"><ui-textinput form-key="name"></ui-textinput></div></div></div></ui-formgroup>
    @wrapStyle:width:300px;
    :::

    :::vue
    @name:show
    ---
    #event
    >event-desc
    当表单填写框显示时触发。
    ---
    #demo
    >tpl
    <div style="width:300px;">
        <ui-multiform ref="demo6" form-name="名单" @show="echo">
            <ui-formgroup>
                <div class="item">
                    <h5 class="title">
                        <ui-center height-fill>姓名</ui-center>
                    </h5>
                    <div class="content">
                        <div class="form">
                            <ui-textinput form-key="name"></ui-textinput>
                        </div>
                    </div>
                </div>
            </ui-formgroup>
        </ui-multiform>
    </div>
    >script
    {
        methods : {
            echo : function () {
                console.log('demo6.console1', 'show event!');
            }
        }
    }
    :::

    :::vue
    @name:hide
    ---
    #event
    >event-desc
    当表单填写框隐藏时触发。
    ---
    #demo
    >tpl
    <div style="width:300px;">
        <ui-multiform ref="demo7" form-name="名单" @hide="echo">
            <ui-formgroup>
                <div class="item">
                    <h5 class="title">
                        <ui-center height-fill>姓名</ui-center>
                    </h5>
                    <div class="content">
                        <div class="form">
                            <ui-textinput form-key="name"></ui-textinput>
                        </div>
                    </div>
                </div>
            </ui-formgroup>
        </ui-multiform>
    </div>
    >script
    {
        methods : {
            echo : function () {
                console.log('demo7.console1', 'hide event!');
            }
        }
    }
    :::

    :::vue
    @name:after-show
    ---
    #event
    >event-desc
    当表单填写框完成显示动画时触发。
    ---
    #demo
    >tpl
    <div style="width:300px;">
        <ui-multiform ref="demo8" form-name="名单" @after-show="echo">
            <ui-formgroup>
                <div class="item">
                    <h5 class="title">
                        <ui-center height-fill>姓名</ui-center>
                    </h5>
                    <div class="content">
                        <div class="form">
                            <ui-textinput form-key="name"></ui-textinput>
                        </div>
                    </div>
                </div>
            </ui-formgroup>
        </ui-multiform>
    </div>
    >script
    {
        methods : {
            echo : function () {
                console.log('demo8.console1', 'after-show event!');
            }
        }
    }
    :::

    :::vue
    @name:after-hide
    ---
    #event
    >event-desc
    当表单填写框完成隐藏动画时触发。
    ---
    #demo
    >tpl
    <div style="width:300px;">
        <ui-multiform ref="demo9" form-name="名单" @after-hide="echo">
            <ui-formgroup>
                <div class="item">
                    <h5 class="title">
                        <ui-center height-fill>姓名</ui-center>
                    </h5>
                    <div class="content">
                        <div class="form">
                            <ui-textinput form-key="name"></ui-textinput>
                        </div>
                    </div>
                </div>
            </ui-formgroup>
        </ui-multiform>
    </div>
    >script
    {
        methods : {
            echo : function () {
                console.log('demo9.console1', 'after-hide event!');
            }
        }
    }
    :::

    [[[表单值]]]

    #### 值类型
    
    `Array` : 数组

    #### 值过滤

    - 所有不支持的值类型，都会被尝试转换成空数组([])。
    - 若启用`max`，最多不会超过max设置的项目数量。

    #### 值格式

    数组由项目的对象组成，项目对象由表单的`key` / `value`组成。

    #### 默认值

    `[]`

    :::preset
    @name:formValue
    @uikey:multiform
    @uiname:多项表单输入
    @valueType:multiform
    @attrs: :item-filler="item => ({title: item.name})"
    @slot:<ui-formgroup><div class="item"><h5 class="title"><ui-center height-fill>名称</ui-center></h5><div class="content"><div class="form"><ui-textinput form-key="name"></ui-textinput></div></div></div></ui-formgroup>
    @wrapStyle:width:300px;
    :::

    [[[源码]]]

    <iframe src="/report/coverage/lib/components/multiform/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>

    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                 from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'multiform'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
