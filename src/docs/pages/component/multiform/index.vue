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

    #### 使用

    :::democode/html
    <div style="width:300px;">
        <ui-multiform form-name="城市">
            <ui-formgroup>
                <div class="item">
                    <h5 class="title">
                        <ui-center class="fill">名称</ui-center>
                    </h5>
                    <div class="content">
                        <div class="form">
                            <ui-textinput form-key="name"></ui-textinput>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <h5 class="title">
                        <ui-center class="fill">省份</ui-center>
                    </h5>
                    <div class="content">
                        <div class="form">
                            <ui-textinput form-key="province"></ui-textinput>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <h5 class="title">
                        <ui-center class="fill">备注</ui-center>
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

    :::preset/html
    formStatus
    ---
    uikey:multiform
    statusDefaultValue:[{name:'Jim'}, {name:'Sam'}]
    statusMoreAttr::item-filler="item => ({title: item.name})"
    statusSlot:<ui-formgroup><div class="item"><h5 class="title"><ui-center class="fill">名称</ui-center></h5><div class="content"><div class="form"><ui-textinput form-key="name"></ui-textinput></div></div></div></ui-formgroup>
    :::

    [[[配置]]]

    :::preset/html
    formConfigTable
    ---
    |[item-name](#item-name)|项目的名称，如果没有设置`item-filler`，会作为每项的标题显示。同时会作为添加按钮标题的后缀。|项目的名称|String|`'项目'`|
    |[item-filler](#item-filler)|项目内容填充函数，此函数有一个参数：<br>`item`：每一项的数据对象<br><br>此函数通过`item`获取项目的标题及缩略图，然后返回给组件，最终将标题和缩略图显示在项目上。<br><br>返回值是一个对象，包含两个KEY：`title`、`thumb`(缩略图地址)|填充函数|Function|`() => {}`|
    |[item-validator](#item-validator)|项目添加或更新时，验证或二次处理项目的值，此函数有一个参数：<br>`value`：新增或更新项目的值<br><br>返回值(除`false`以外)作为项目添加或更新的值，若返回为`false`，则表示未通过验证，此项目不会被添加或更新。|验证函数|Function|`value => value`|
    |[can-move](#can-move)|输入项目是否可以移动|`true`<br>`false`|Boolean|`false`|
    |[max](#max)|可输入的最大项目数|数字：最大项目数<br>`undefined`：无限制|Number|`undefined`|
    |[clean-btn](#clean-btn)|显示清空全部项目的按钮|`true`<br>`false`|Boolean|`false`|
    |[input-type](#input-type)|表单的输入模式<br><br>在批量输入模式下会进行下面操作：<br>1. 将用户输入的字符串解析成id数组(按一定的规则)<br>2. 将id数组会输入一个填值函数(用户定义填值函数)<br>3. 填值函数解析id后，返回由多个项目对象组成的数组<br>4. 这些项目会被添加到表单中<br><br>批量输入必需添加：<br>`batch-reg`将字符串解析为id数组的正则表达式<br>`batch-filler`来将输入数组转换成项目对象数组|`'single'`：每次输入一项<br>`'batch-separate'`：批量输入，通过内容分割得到id数组<br>`'batch-pluck'`：批量输入，通过内容匹配选取得到id数组|String|`'single'`|
    |[batch-reg](#batch-reg)|解析用户输入字符串的正则表达式<br>在`batch-separate`模式下通过这个正则分割字符串得到id数组<br>在`batch-pluck`模式下通过匹配这个正则得到id数组(每匹配到一项添加到数组中)|正则表达式字符串|String|`','`|
    |[batch-filler](#batch-filler)|批量输入的填值函数，此函数有一个参数：<br>`ids`：用户输入的id数组<br><br>通过解析这些id，此函数返回多个项目对象组成的数组<br><br>如果解析是异步的，此函数也可以返回一个`Promise`对象|填值函数|Function|`value => value`|
    |[batch-uniq](#batch-uniq)|对用户输入解析后的id数组进行去重|`true`<br>`false`|Boolean|`false`|
    :::

    :::preset/html
    formConfigDemo
    ---
    uikey:multiform
    configDefaultValue:[{name:'Jim'}, {name:'Sam'}]
    configMoreAttr::item-filler="item => ({title: item.name})"
    configSlot:<ui-formgroup><div class="item"><h5 class="title"><ui-center class="fill">名称</ui-center></h5><div class="content"><div class="form"><ui-textinput form-key="name"></ui-textinput></div></div></div></ui-formgroup>
    :::


    #### item-name
    
    项目名称可以告知使用者输入项目的含义。建议和`item-filler`一起使用。

    :::democode/html
    <div style="width:300px;">
        <ui-multiform form-name="名单" item-name="使用者">
            <ui-formgroup>
                <div class="item">
                    <h5 class="title">
                        <ui-center class="fill">姓名</ui-center>
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

    #### item-filler

    `item-filler`可以中项目中选出标题和缩略图，显示在项目的区块中。设置后可以让使用者更好区分每一项。

    下面是使用`item-filler`选出项目的标题及缩略图：

    :::democode/html
    <div style="width:300px;">
        <ui-multiform form-name="名单" :item-filler="item => ({title: item.name, thumb: item.img})">
            <ui-formgroup>
                <div class="item">
                    <h5 class="title">
                        <ui-center class="fill">姓名</ui-center>
                    </h5>
                    <div class="content">
                        <div class="form">
                            <ui-textinput form-key="name"></ui-textinput>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <h5 class="title">
                        <ui-center class="fill">图片URL</ui-center>
                    </h5>
                    <div class="content">
                        <div class="form">
                            <ui-textinput form-key="img" default-value="https://d13yacurqjgara.cloudfront.net/users/23569/avatars/normal/4c2dc35fbb2e0da85969e49592dfd49d.jpg?1420405934"></ui-textinput>
                        </div>
                    </div>
                </div>
            </ui-formgroup>
        </ui-multiform>
    </div>
    :::

    和`item-name`一起使用：

    :::democode/html
    <div style="width:300px;">
        <ui-multiform form-name="名单" item-name="使用者" :item-filler="item => ({title: item.name})">
            <ui-formgroup>
                <div class="item">
                    <h5 class="title">
                        <ui-center class="fill">姓名</ui-center>
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

    #### item-validator

    `item-validator`第一种用法是对值进行二次处理，比如在名称前加上`Mr.`：

    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
        methods : {
            validator : function (value) {
                
                if (!/^Mr\./.test(value.name)) {

                    value.name = `Mr.${value.name}`;
            
                }

                return value;

            }
        }
    });
    ---
    <div style="width:300px;">
        <ui-multiform form-name="名单" item-name="使用者" :item-validator="validator">
            <ui-formgroup>
                <div class="item">
                    <h5 class="title">
                        <ui-center class="fill">姓名</ui-center>
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

    `item-validator`第二种用法是对值进行校验：

    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
        methods : {
            validator : function (value) {

                if (!/[0-9]/.test(value.name)) {
    
                    alert('名称中必须包含数字');
                    
                    return false;
            
                }

                return value;

            }
        }
    });
    ---
    <div style="width:300px;">
        <ui-multiform form-name="名单" item-name="使用者" :item-validator="validator">
            <ui-formgroup>
                <div class="item">
                    <h5 class="title">
                        <ui-center class="fill">姓名</ui-center>
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

    #### can-move

    :::democode/html
    <div style="width:300px;">
        <ui-multiform form-name="名单" can-move :item-filler="item => ({title: item.name})" :default-value="[{name:'Jim'}, {name:'Sam'}, {name:'Gustavo'}]">
            <ui-formgroup>
                <div class="item">
                    <h5 class="title">
                        <ui-center class="fill">姓名</ui-center>
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

    #### max
    
    下面的演示中设置了最多输入3项。
    
    :::democode/html
    <div style="width:300px;">
        <ui-multiform form-name="名单" max=3 :default-value="[{name:'Jim'}, {name:'Sam'}, {name:'Gustavo'}]">
            <ui-formgroup>
                <div class="item">
                    <h5 class="title">
                        <ui-center class="fill">姓名</ui-center>
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

    #### clean-btn

    开启后会在右下角增加清空全部的按钮。
    
    :::democode/html
    <div style="width:300px;">
        <ui-multiform form-name="名单" :clean-btn="true" :default-value="[{name:'Jim'}, {name:'Sam'}, {name:'Gustavo'}]">
            <ui-formgroup>
                <div class="item">
                    <h5 class="title">
                        <ui-center class="fill">姓名</ui-center>
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



    #### input-type

    下面是`input-type`为`batch-separate`的情况：

    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
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
    });
    ---
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
                        <ui-center class="fill">城市</ui-center>
                    </h5>
                    <div class="content">
                        <div class="form">
                            <ui-textinput form-key="city"></ui-textinput>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <h5 class="title">
                        <ui-center class="fill">省份</ui-center>
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
    :::

    下面是`input-type`为`batch-pluck`的情况，输入的内容混入了数字，采用了正则匹配并选取城市的字母：

    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
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
    });
    ---
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
                        <ui-center class="fill">城市</ui-center>
                    </h5>
                    <div class="content">
                        <div class="form">
                            <ui-textinput form-key="city"></ui-textinput>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <h5 class="title">
                        <ui-center class="fill">省份</ui-center>
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
    :::

    #### batch-reg

    通过`batch-reg`你可以修改输入id字符串的分隔符或是选取条件：

    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
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
    });
    ---
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
                        <ui-center class="fill">城市</ui-center>
                    </h5>
                    <div class="content">
                        <div class="form">
                            <ui-textinput form-key="city"></ui-textinput>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <h5 class="title">
                        <ui-center class="fill">省份</ui-center>
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
    :::

    #### batch-filler

    在上面的`batch-reg`中已经演示同步的`batch-filler`下面来看看异步的情况，异步的`batch-filler`允许你通过输入的id数组从远程拉取数据。

    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
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
    });
    ---
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
                        <ui-center class="fill">城市</ui-center>
                    </h5>
                    <div class="content">
                        <div class="form">
                            <ui-textinput form-key="city"></ui-textinput>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <h5 class="title">
                        <ui-center class="fill">省份</ui-center>
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
    :::

    #### batch-uniq
    
    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
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
    });
    ---
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
                        <ui-center class="fill">城市</ui-center>
                    </h5>
                    <div class="content">
                        <div class="form">
                            <ui-textinput form-key="city"></ui-textinput>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <h5 class="title">
                        <ui-center class="fill">省份</ui-center>
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
    :::


    [[[方法]]]

    :::preset/html
    formMethod
    ---
    uikey:multiform
    methodValue:[{name:'Jim'}, {name:'Sam'}]
    methodDefaultValue:[{name:'Jim'}, {name:'Sam'}]
    methodMoreAttr::item-filler="item => ({title: item.name})"
    methodSlot:<ui-formgroup><div class="item"><h5 class="title"><ui-center class="fill">名称</ui-center></h5><div class="content"><div class="form"><ui-textinput form-key="name"></ui-textinput></div></div></div></ui-formgroup>
    :::

    #### add(item, [index])

    在指定位置添加项。
    
    |KEY|可选|描述|接受值|值类型|默认值|
    |-|-|-|-|-|-|
    |item|NO|添加项目的内容|和表单对应的`key` / `value`对象|`Object`|`undefined`|
    |index|YES|添加的位置|`undefined`: 添加为最后一项<br>数字: 添加到指定的index位置|`Undefined`<br>`Number`|`undefined`|

    :::democode/html
    <div style="width:300px;">
        <ui-multiform ref="demo2" form-name="名单" :item-filler="item => ({title: item.name})" :default-value="[{name:'Jim'}]">
            <ui-formgroup>
                <div class="item">
                    <h5 class="title">
                        <ui-center class="fill">姓名</ui-center>
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
    :::

    #### update(item, index)

    更新指定位置的项。
    
    |KEY|可选|描述|接受值|值类型|默认值|
    |-|-|-|-|-|-|
    |item|NO|更新的项目内容|和表单对应的`key` / `value`对象|`Object`|`undefined`|
    |index|NO|更新的位置|更新项目的index位置|`Number`|`undefined`|

    :::democode/html
    <div style="width:300px;">
        <ui-multiform ref="demo4" form-name="名单" :item-filler="item => ({title: item.name})" :default-value="[{name:'Jim'}, {name:'Sam'}, {name:'Gustavo'}]">
            <ui-formgroup>
                <div class="item">
                    <h5 class="title">
                        <ui-center class="fill">姓名</ui-center>
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
    :::

    #### del(index)

    删除指定位置的项。
    
    |KEY|可选|描述|接受值|值类型|默认值|
    |-|-|-|-|-|-|
    |index|NO|删除指定位置的项目|删除项目的index位置|`Number`|`undefined`|

    :::democode/html
    <div style="width:300px;">
        <ui-multiform ref="demo3" form-name="名单" :item-filler="item => ({title: item.name})" :default-value="[{name:'Jim'}, {name:'Sam'}, {name:'Gustavo'}]">
            <ui-formgroup>
                <div class="item">
                    <h5 class="title">
                        <ui-center class="fill">姓名</ui-center>
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
    :::

    #### move(from, to)

    移动项目。
    
    |KEY|可选|描述|接受值|值类型|默认值|
    |-|-|-|-|-|-|
    |from|NO|需要移动的项目位置|移动项目的index位置|`Number`|`undefined`|
    |to|NO|移动之后的项目位置|移动之后的index位置|`Number`|`undefined`|

    :::democode/html
    <div style="width:300px;">
        <ui-multiform ref="demo5" form-name="名单" :item-filler="item => ({title: item.name})" :default-value="[{name:'Jim'}, {name:'Sam'}, {name:'Gustavo'}]">
            <ui-formgroup>
                <div class="item">
                    <h5 class="title">
                        <ui-center class="fill">姓名</ui-center>
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
    :::

    [[[事件]]]

    #### show

    当表单填写框显示时触发。

    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
        methods : {
            echo : function () {
                console.log('demo6.console1', 'show event!');
            }
        }
    });
    ---
    <div style="width:300px;">
        <ui-multiform ref="demo6" form-name="名单" @show="echo">
            <ui-formgroup>
                <div class="item">
                    <h5 class="title">
                        <ui-center class="fill">姓名</ui-center>
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

    #### hide

    当表单填写框隐藏时触发。

    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
        methods : {
            echo : function () {
                console.log('demo7.console1', 'hide event!');
            }
        }
    });
    ---
    <div style="width:300px;">
        <ui-multiform ref="demo7" form-name="名单" @hide="echo">
            <ui-formgroup>
                <div class="item">
                    <h5 class="title">
                        <ui-center class="fill">姓名</ui-center>
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

    :::preset/html
    formEvent
    ---
    uikey:multiform
    eventValue:[{name:'Jim'}, {name:'Sam'}]
    eventDefaultValue:[{name:'Jim'}, {name:'Sam'}]
    eventMoreAttr::item-filler="item => ({title: item.name})"
    eventSlot:<ui-formgroup><div class="item"><h5 class="title"><ui-center class="fill">名称</ui-center></h5><div class="content"><div class="form"><ui-textinput form-key="name"></ui-textinput></div></div></div></ui-formgroup>
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

    #### 输入/输出示例

    :::repeat/html
    formValueType:multiform
    ---
    <div>
        <p>{$valueType}类型</p>
        <div style="width:300px;">
            <ui-multiform ref="demoType{$valueType}" form-name="名单">
                <ui-formgroup>
                    <div class="item">
                        <h5 class="title">
                            <ui-center class="fill">姓名</ui-center>
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
        <ui-link js="window.morning.findVM('demoType{$valueType}').set({$&valueContent})">设置{$valueType}类型</ui-link>
        <ui-link js="alert(window.morning.findVM('demoType{$valueType}').getJson())">获取表单JSON值</ui-link>
    </div>
    <br>
    <br>
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
