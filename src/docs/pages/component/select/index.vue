<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 下拉选择框 `<ui-select>`
    
    <doc-component-status page="select\"></doc-component-status>
    
    [[[开始]]]

    定义下拉选择框。

    下拉选择框的选项通过`list`配置传入，`list.key`是选项的值，`list.name`是选项的名称(支持HTML)。

    :::vue
    @name:使用
    ---
    #demo
    >tpl
    <div style="width:300px;">
        <ui-select
            form-name="Select designer"
            :list="{
                tim : 'Tim Boelaars',
                andrew : 'Andrew Colin Beck',
                gustavo : 'Gustavo Zambelli',
                victor : 'Victor Erixon',
                shaun : 'Shaun Moynihan',
                emir : 'Emir Ayouni',
                katherine : 'Katherine Rainey',
                jax : 'Jax Berndt',
                elizabeth : 'Elizabeth Chiu',
                sara : 'Sara Nicely',
                anna : 'Anna Broussard'
            }"
        >
        </ui-select>
    </div>
    :::

    :::vue
    @name:通过其他元素触发的下拉选择框
    ---
    #demo
    >desc
    通过`separate-emit`你可以指定任意元素来触发下拉选择框，更多用法见：[separate-emit配置](/component/select.html#separate-emit)
    >tpl
    <div style="width:300px;">
        <ui-btn class="demo5">点击选择</ui-btn>
        <ui-select
            inside-name="Select designer"
            separate-emit=".demo5"
            :list="{
                tim : 'Tim Boelaars',
                andrew : 'Andrew Colin Beck',
                gustavo : 'Gustavo Zambelli',
                victor : 'Victor Erixon',
                shaun : 'Shaun Moynihan',
                emir : 'Emir Ayouni',
                katherine : 'Katherine Rainey',
                jax : 'Jax Berndt',
                elizabeth : 'Elizabeth Chiu',
                sara : 'Sara Nicely',
                anna : 'Anna Broussard'
            }"
        >
        </ui-select>
    </div>
    :::

    :::vue
    @name:使用HTML的选项
    ---
    #demo
    >tpl
    <div style="width:300px;">
        <ui-select
            form-name="Select designer"
            :list="{
                tim : '<img style=\'border-radius: 50%;\' src=\'https://cdn.dribbble.com/users/2489/avatars/normal/702fb51d7c85c8b61628604762ffc21a.jpg?1444639894\'></img>Tim Boelaars',
                andrew : '<img style=\'border-radius: 50%;\' src=\'https://cdn.dribbble.com/users/108671/avatars/normal/dadb0bd212cc107ad3a1d1baedc46938.jpg?1416997444\'></img>Andrew Colin Beck',
                gustavo : '<img style=\'border-radius: 50%;\' src=\'https://cdn.dribbble.com/users/60266/avatars/normal/gustavo_avatar.jpg?1402000442\'></img>Gustavo Zambelli',
                victor : '<img style=\'border-radius: 50%;\' src=\'https://cdn.dribbble.com/users/96387/avatars/normal/debda2342580bda98269c0165054464c.jpg?1435151464\'></img>Victor Erixon',
                shaun : '<img style=\'border-radius: 50%;\' src=\'https://cdn.dribbble.com/users/2944/avatars/normal/e08c0e446862572facf0e48316d91c8f.png?1429207992\'></img>Shaun Moynihan',
                emir : '<img style=\'border-radius: 50%;\' src=\'https://cdn.dribbble.com/users/23569/avatars/normal/4c2dc35fbb2e0da85969e49592dfd49d.jpg?1420405934\'></img>Emir Ayouni',
                katherine : '<img style=\'border-radius: 50%;\' src=\'https://cdn.dribbble.com/users/460187/avatars/normal/eb8e273c036ae93b134b10358c5f19f5.jpg?1418705072\'></img>Katherine Rainey',
                jax : '<img style=\'border-radius: 50%;\' src=\'https://cdn.dribbble.com/users/119911/avatars/normal/531fd12e5775ed5ac6a07aea7b492151.jpg?1427986143\'></img>Jax Berndt',
                elizabeth : '<img style=\'border-radius: 50%;\' src=\'https://cdn.dribbble.com/users/857412/avatars/normal/8f5f9fbdd66cc70f22304f2ed3be4fa1.png?1440078204\'></img>Elizabeth Chiu',
                sara : '<img style=\'border-radius: 50%;\' src=\'https://cdn.dribbble.com/users/162566/avatars/normal/1012292_10104881398564961_565325188_n.jpg?1403561573\'></img>Sara Nicely',
                anna : '<img style=\'border-radius: 50%;\' src=\'https://cdn.dribbble.com/users/243797/avatars/normal/657a04cfaeca8f6f5bb7ecf64267bc67.jpg?1416007045\'></img>Anna Broussard'
            }"
        >
        </ui-select>
    </div>
    :::

    :::vue
    @name:可搜索
    ---
    #demo
    >tpl
    <div style="width:300px;">
        <ui-select
            form-name="Select designer"
            can-search
            :list="{
                tim : 'Tim Boelaars',
                andrew : 'Andrew Colin Beck',
                gustavo : 'Gustavo Zambelli',
                victor : 'Victor Erixon',
                shaun : 'Shaun Moynihan',
                emir : 'Emir Ayouni',
                katherine : 'Katherine Rainey',
                jax : 'Jax Berndt',
                elizabeth : 'Elizabeth Chiu',
                sara : 'Sara Nicely',
                anna : 'Anna Broussard'
            }"
        >
        </ui-select>
    </div>
    :::

    :::vue
    @name:多选
    ---
    #demo
    >tpl
    <div style="width:300px;">
        <ui-select
            form-name="Select designer"
            multi-select
            :list="{
                tim : 'Tim Boelaars',
                andrew : 'Andrew Colin Beck',
                gustavo : 'Gustavo Zambelli',
                victor : 'Victor Erixon',
                shaun : 'Shaun Moynihan',
                emir : 'Emir Ayouni',
                katherine : 'Katherine Rainey',
                jax : 'Jax Berndt',
                elizabeth : 'Elizabeth Chiu',
                sara : 'Sara Nicely',
                anna : 'Anna Broussard'
            }"
        >
        </ui-select>
    </div>
    :::

    :::vue
    @name:可搜索的多选
    ---
    #demo
    >tpl
    <div style="width:300px;">
        <ui-select
            form-name="Select designer"
            multi-select
            can-search
            :list="{
                tim : 'Tim Boelaars',
                andrew : 'Andrew Colin Beck',
                gustavo : 'Gustavo Zambelli',
                victor : 'Victor Erixon',
                shaun : 'Shaun Moynihan',
                emir : 'Emir Ayouni',
                katherine : 'Katherine Rainey',
                jax : 'Jax Berndt',
                elizabeth : 'Elizabeth Chiu',
                sara : 'Sara Nicely',
                anna : 'Anna Broussard'
            }"
        >
        </ui-select>
    </div>
    :::

    #### 支持快捷键

    下拉选择框组件支持快捷键选择，你可通过上下方向键选择项目，通过回车键来选中项目。

    #### 数量较多的选项

    若下拉选择存在大量选项时，我们推荐以下方法进行优化：

    - 小于`200`项：不需要特殊优化
    - `200`至`2000`项：采用[max-show](#max-show)配置优化，可减少DOM数量
    - 大于`2000`项：采用[dynamic-list](#dynamic-list)配置优化，可减少`list`中的数据及DOM数量，同时也可采用远程查询。

    #### 高性能模式

    当下拉列表的选项超过`200`项时，组件会自动开启高性能模式以减少掉帧的现象。在高性能模式下动画及计算会尽可能减少。

    [[[形态]]]
    
    :::preset
    @name:formStatus
    @uikey:select
    @defaultValue:['tim']
    @attrs: :list="{tim:'Tim Boelaars', andrew:'Andrew Colin Beck', gustavo:'Gustavo Zambelli', victor:'Victor Erixon', shaun:'Shaun Moynihan', emir:'Emir Ayouni', katherine:'Katherine Rainey', jax:'Jax Berndt', elizabeth:'Elizabeth Chiu', sara:'Sara Nicely', anna:'Anna Broussard'}"
    :::

    :::vue
    @name:更多`disabled`状态
    ---
    #demo
    >desc
    多选及可搜索情况下`disabled`。
    >tpl
    <!-- 可搜索情况下disabled -->
    <div style="width:300px;">
        <ui-select
            form-name="禁用"
            state="disabled"
            can-search
            :default-value="['tim']"
            :list="{
                tim : 'Tim Boelaars',
                andrew : 'Andrew Colin Beck',
                gustavo : 'Gustavo Zambelli',
                victor : 'Victor Erixon',
                shaun : 'Shaun Moynihan',
                emir : 'Emir Ayouni',
                katherine : 'Katherine Rainey',
                jax : 'Jax Berndt',
                elizabeth : 'Elizabeth Chiu',
                sara : 'Sara Nicely',
                anna : 'Anna Broussard'
            }"
        >
        </ui-select>
    </div>

    <br><br>

    <!-- 多选情况下disabled -->
    <div style="width:300px;">
        <ui-select
            form-name="禁用"
            state="disabled"
            multi-select
            :default-value="['tim', 'andrew']"
            :list="{
                tim : 'Tim Boelaars',
                andrew : 'Andrew Colin Beck',
                gustavo : 'Gustavo Zambelli',
                victor : 'Victor Erixon',
                shaun : 'Shaun Moynihan',
                emir : 'Emir Ayouni',
                katherine : 'Katherine Rainey',
                jax : 'Jax Berndt',
                elizabeth : 'Elizabeth Chiu',
                sara : 'Sara Nicely',
                anna : 'Anna Broussard'
            }"
        >
        </ui-select>
    </div>
    :::

    :::vue
    @name:更多`readonly`状态
    ---
    #demo
    >desc
    多选及可搜索情况下`readonly`。
    >tpl
    <!-- 可搜索情况下disabled -->
    <div style="width:300px;">
        <ui-select
            form-name="只读"
            state="readonly"
            can-search
            :default-value="['tim']"
            :list="{
                tim : 'Tim Boelaars',
                andrew : 'Andrew Colin Beck',
                gustavo : 'Gustavo Zambelli',
                victor : 'Victor Erixon',
                shaun : 'Shaun Moynihan',
                emir : 'Emir Ayouni',
                katherine : 'Katherine Rainey',
                jax : 'Jax Berndt',
                elizabeth : 'Elizabeth Chiu',
                sara : 'Sara Nicely',
                anna : 'Anna Broussard'
            }"
        >
        </ui-select>
    </div>

    <br><br>

    <!-- 多选情况下disabled -->
    <div style="width:300px;">
        <ui-select
            form-name="只读"
            state="readonly"
            multi-select
            :default-value="['tim', 'andrew']"
            :list="{
                tim : 'Tim Boelaars',
                andrew : 'Andrew Colin Beck',
                gustavo : 'Gustavo Zambelli',
                victor : 'Victor Erixon',
                shaun : 'Shaun Moynihan',
                emir : 'Emir Ayouni',
                katherine : 'Katherine Rainey',
                jax : 'Jax Berndt',
                elizabeth : 'Elizabeth Chiu',
                sara : 'Sara Nicely',
                anna : 'Anna Broussard'
            }"
        >
        </ui-select>
    </div>
    :::
    
    [[[配置]]]

    :::preset
    @name:formConfig
    @uikey:select
    @defaultValue:['tim']
    @attrs: :list="{tim:'Tim Boelaars', andrew:'Andrew Colin Beck', gustavo:'Gustavo Zambelli', victor:'Victor Erixon', shaun:'Shaun Moynihan', emir:'Emir Ayouni', katherine:'Katherine Rainey', jax:'Jax Berndt', elizabeth:'Elizabeth Chiu', sara:'Sara Nicely', anna:'Anna Broussard'}"
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
        <ui-select
            inside-name="Select designer"
            :list="{
                tim : 'Tim Boelaars',
                andrew : 'Andrew Colin Beck',
                gustavo : 'Gustavo Zambelli',
                victor : 'Victor Erixon'
            }"
        >
        </ui-select>
    </div>
    :::

    :::vue
    @name:list
    ---
    #config
    >conf-desc
    通过此配置来设置可选项目，这是一个对象或数组。<br><br>若为对象：<br>键名是选项的值<br>键值若为字符串，则为选项的名称<br>若为对象，则可包含以下几个属性：<br>`name` : 选项的名称。<br>`tip` : 选项的提示信息(需要启用`item-tip`配置才会显示)<br><br>若为数组：<br>数组中每一项是一个对象，这个对象包含以下几个属性：<br>`key` : 选项的值<br>`name` : 选项的名称<br>`tip` : 选项的提示信息(需要启用`item-tip`配置才会显示)。
    >conf-accept
    对象<br>数组
    >conf-type
    Object<br>Array
    >conf-default
    `{}`
    ---
    #demo
    >desc
    简化配置。
    >tpl
    <div style="width:300px;">
        <ui-select
            form-name="Select designer"
            :list="{
                tim : 'Tim Boelaars',
                andrew : 'Andrew Colin Beck',
                gustavo : 'Gustavo Zambelli',
                victor : 'Victor Erixon'
            }"
        >
        </ui-select>
    </div>
    ---
    #demo
    >desc
    完整版配置。
    >tpl
    <div style="width:300px;">
        <ui-select
            form-name="Select designer"
            :list="{
                tim : {
                    name : 'Tim Boelaars',
                    tip : 'This is Tim Boelaars'
                },
                andrew : {
                    name : 'Andrew Colin Beck',
                    tip : 'This is Andrew Colin Beck'
                },
                gustavo : {
                    name : 'Gustavo Zambelli',
                    tip : 'This is Gustavo Zambelli'
                },
                victor : {
                    name : 'Victor Erixon',
                    tip : 'This is Victor Erixon'
                }
            }"
        >
        </ui-select>
    </div>
    :::

    :::vue
    @name:dynamic-list
    ---
    #config
    >conf-desc
    动态可选项目，开启此配置后允许动态的改变`list`且不校验选中项目是否在`list`配置中。<br>因为开启此配置后`list`中的选项是不完整的，所以如果需要校验选项是否存在，可以通过`validate`配置来实现。
    >conf-accept
    `true`<br>`false`
    >conf-type
    Boolean
    >conf-default
    `false`
    ---
    #demo
    >desc
    异步加载数据。
    >tpl
    <div style="width:300px;">
        <ui-select
            ref="demo12"
            form-name="Select designer"
            dynamic-list
            :list="list"
        >
        </ui-select>
        <ui-link @click.native="loadlist">加载选项</ui-link>
    </div>
    >script
    {
        data : {
            fulllist : {
                tim : 'Tim Boelaars',
                andrew : 'Andrew Colin Beck',
                gustavo : 'Gustavo Zambelli',
                victor : 'Victor Erixon',
                shaun : 'Shaun Moynihan',
                emir : 'Emir Ayouni',
                katherine : 'Katherine Rainey',
                jax : 'Jax Berndt',
                elizabeth : 'Elizabeth Chiu',
                sara : 'Sara Nicely',
                anna : 'Anna Broussard'
            },
            list : {}
        },
        methods : {
            loadlist : function () {
                
                this.list = this.fulllist;

            }
        }
    }
    ---
    #demo
    >desc
    通过`dynamic-list`和`can-search`配置可以启用异步检索。
    >tpl
    <div style="width:300px;">
        <ui-select
            form-name="Select designer"
            @search="search"
            dynamic-list
            can-search
            :list="list"
        >
        </ui-select>
    </div>
    >script
    {
        data : {
            fulllist : {
                tim : 'Tim Boelaars',
                andrew : 'Andrew Colin Beck',
                gustavo : 'Gustavo Zambelli',
                victor : 'Victor Erixon',
                shaun : 'Shaun Moynihan',
                emir : 'Emir Ayouni',
                katherine : 'Katherine Rainey',
                jax : 'Jax Berndt',
                elizabeth : 'Elizabeth Chiu',
                sara : 'Sara Nicely',
                anna : 'Anna Broussard'
            },
            list : {}
        },
        methods : {
            search : function (keyword) {

                setTimeout(() => {

                    this.list = {};
                    
                    for (let key in this.fulllist) {

                        if (this.fulllist[key].indexOf(keyword) !== -1) {
        
                            this.list[key] = this.fulllist[key];

                        }

                    }

                }, 200);

            }
        }
    }
    ---
    #demo
    >desc
    `dynamic-list`配合`multi-select`使用。
    >tpl
    <div style="width:300px;">
        <ui-select
            form-name="Select designer"
            @search="search"
            dynamic-list
            can-search
            multi-select
            :list="list"
        >
        </ui-select>
    </div>
    >script
    {
        data : {
            fulllist : {
                tim : 'Tim Boelaars',
                andrew : 'Andrew Colin Beck',
                gustavo : 'Gustavo Zambelli',
                victor : 'Victor Erixon',
                shaun : 'Shaun Moynihan',
                emir : 'Emir Ayouni',
                katherine : 'Katherine Rainey',
                jax : 'Jax Berndt',
                elizabeth : 'Elizabeth Chiu',
                sara : 'Sara Nicely',
                anna : 'Anna Broussard'
            },
            list : {}
        },
        methods : {
            search : function (keyword) {

                setTimeout(() => {

                    this.list = {};
                    
                    for (let key in this.fulllist) {

                        if (this.fulllist[key].indexOf(keyword) !== -1) {
        
                            this.list[key] = this.fulllist[key];

                        }

                    }

                }, 200);

            }
        }
    }
    :::

    :::vue
    @name:validate
    ---
    #config
    >conf-desc
    验证选项是否可用，若选项不可用将会直接过滤。只有在开启`dynamic-list`配置时生效。<br>函数包含一个入参：<br><br>参数是需要验证的值<br><br>通过这这个参数来验证有效性。<br><br>此函数的返回值为验证结果，是布尔值：<br><br>非`false`：验证通过<br>`false`：验证失败，直接过滤此值<br><br>需要注意是的验证不支持异步，如果需要异步校验数据应该写到组件取值之后。
    >conf-accept
    验证函数(同步)
    >conf-type
    Function
    >conf-default
    `() => {}`
    ---
    #demo
    >desc
    下面这个示例中虽然可选项中有`Tim Boelaars`，但在校验器中无法通过校验，所以无法选中(使用时必须开启`dynamic-list`配置)。
    >tpl
    <div style="width:300px;">
        <ui-select
            form-name="Select designer"
            dynamic-list
            :validate="validate"
            :list="list"
        >
        </ui-select>
    </div>
    >script
    {
        data : {
            fulllist : {
                andrew : 'Andrew Colin Beck',
                gustavo : 'Gustavo Zambelli',
                victor : 'Victor Erixon',
                shaun : 'Shaun Moynihan',
                emir : 'Emir Ayouni',
                katherine : 'Katherine Rainey',
                jax : 'Jax Berndt',
                elizabeth : 'Elizabeth Chiu',
                sara : 'Sara Nicely',
                anna : 'Anna Broussard'
            },
            list : {}
        },
        methods : {
            validate : function (value) {
                
                return (Object.keys(this.fulllist).indexOf(value) !== -1);

            }   
        },
        mounted : function () {

            this.list = Object.assign({
                tim : 'Tim Boelaars'
            }, this.fulllist);

        }
    }
    :::

    :::vue
    @name:separate-emit
    ---
    #config
    >conf-desc
    通过其他的元素来触发下拉选择框。<br>注意开启后`form-name`将不会显示，可使用`inside-name`。
    >conf-accept
    元素选择器([MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/Document_Object_Model/Locating_DOM_elements_using_selectors))
    >conf-type
    String
    >conf-default
    `''`
    ---
    #demo
    >desc
    通过`separate-emit`你可以指定任意元素来触发下拉选择框。
    >tpl
    <div style="width:300px;">
        <ui-btn class="demo6">点击选择</ui-btn>
        <ui-select
            inside-name="Select designer"
            separate-emit=".demo6"
            :list="{
                tim : 'Tim Boelaars',
                andrew : 'Andrew Colin Beck',
                gustavo : 'Gustavo Zambelli',
                victor : 'Victor Erixon',
                shaun : 'Shaun Moynihan',
                emir : 'Emir Ayouni',
                katherine : 'Katherine Rainey',
                jax : 'Jax Berndt',
                elizabeth : 'Elizabeth Chiu',
                sara : 'Sara Nicely',
                anna : 'Anna Broussard'
            }"
        >
        </ui-select>
    </div>
    ---
    #demo
    >desc
    你可以通过设置`list-width`配置来调整宽度。
    >tpl
    <div style="width:300px;">
        <ui-btn class="demo11">点击选择</ui-btn>
        <ui-select
            inside-name="Select designer"
            separate-emit=".demo11"
            :list-width="180"
            :list="{
                tim : 'Tim Boelaars',
                andrew : 'Andrew Colin Beck',
                gustavo : 'Gustavo Zambelli',
                victor : 'Victor Erixon',
                shaun : 'Shaun Moynihan',
                emir : 'Emir Ayouni',
                katherine : 'Katherine Rainey',
                jax : 'Jax Berndt',
                elizabeth : 'Elizabeth Chiu',
                sara : 'Sara Nicely',
                anna : 'Anna Broussard'
            }"
        >
        </ui-select>
    </div>
    ---
    #demo
    >desc
    `separate-emit`和`can-search`共同使用。
    >tpl
    <div style="width:300px;">
        <ui-btn class="demo7">点击选择</ui-btn>
        <ui-select
            inside-name="Select designer"
            separate-emit=".demo7"
            can-search
            :list="{
                tim : 'Tim Boelaars',
                andrew : 'Andrew Colin Beck',
                gustavo : 'Gustavo Zambelli',
                victor : 'Victor Erixon',
                shaun : 'Shaun Moynihan',
                emir : 'Emir Ayouni',
                katherine : 'Katherine Rainey',
                jax : 'Jax Berndt',
                elizabeth : 'Elizabeth Chiu',
                sara : 'Sara Nicely',
                anna : 'Anna Broussard'
            }"
        >
        </ui-select>
    </div>
    ---
    #demo
    >desc
    `separate-emit`和`multi-select`共同使用。
    >tpl
    <div style="width:300px;">
        <ui-btn class="demo8">点击选择</ui-btn>
        <ui-select
            inside-name="Select designer"
            separate-emit=".demo8"
            multi-select
            :max="5"
            :list="{
                tim : 'Tim Boelaars',
                andrew : 'Andrew Colin Beck',
                gustavo : 'Gustavo Zambelli',
                victor : 'Victor Erixon',
                shaun : 'Shaun Moynihan',
                emir : 'Emir Ayouni',
                katherine : 'Katherine Rainey',
                jax : 'Jax Berndt',
                elizabeth : 'Elizabeth Chiu',
                sara : 'Sara Nicely',
                anna : 'Anna Broussard'
            }"
        >
        </ui-select>
    </div>
    ---
    #demo
    >desc
    `separate-emit`、`multi-select`、`can-search`共同使用。
    >tpl
    <div style="width:300px;">
        <ui-btn class="demo9">点击选择</ui-btn>
        <ui-select
            inside-name="Select designer"
            separate-emit=".demo9"
            can-search
            multi-select
            can-search
            :list="{
                tim : 'Tim Boelaars',
                andrew : 'Andrew Colin Beck',
                gustavo : 'Gustavo Zambelli',
                victor : 'Victor Erixon',
                shaun : 'Shaun Moynihan',
                emir : 'Emir Ayouni',
                katherine : 'Katherine Rainey',
                jax : 'Jax Berndt',
                elizabeth : 'Elizabeth Chiu',
                sara : 'Sara Nicely',
                anna : 'Anna Broussard'
            }"
        >
        </ui-select>
    </div>
    ---
    #demo
    >desc
    `separate-emit`、`multi-select`、`can-move`共同使用。
    >tpl
    <div style="width:300px;">
        <ui-btn class="demo10">点击选择</ui-btn>
        <ui-select
            inside-name="Select designer"
            separate-emit=".demo10"
            can-search
            multi-select
            can-move
            :list="{
                tim : 'Tim Boelaars',
                andrew : 'Andrew Colin Beck',
                gustavo : 'Gustavo Zambelli',
                victor : 'Victor Erixon',
                shaun : 'Shaun Moynihan',
                emir : 'Emir Ayouni',
                katherine : 'Katherine Rainey',
                jax : 'Jax Berndt',
                elizabeth : 'Elizabeth Chiu',
                sara : 'Sara Nicely',
                anna : 'Anna Broussard'
            }"
        >
        </ui-select>
    </div>
    ---
    #demo
    >desc
    `separate-emit`、`multi-select`、`hide-selected`共同使用。
    >tpl
    <div style="width:300px;">
        <ui-btn class="demo13">点击选择</ui-btn>
        <ui-select
            inside-name="Select designer"
            separate-emit=".demo13"
            multi-select
            :hide-selected="false"
            :list="{
                tim : 'Tim Boelaars',
                andrew : 'Andrew Colin Beck',
                gustavo : 'Gustavo Zambelli',
                victor : 'Victor Erixon',
                shaun : 'Shaun Moynihan',
                emir : 'Emir Ayouni',
                katherine : 'Katherine Rainey',
                jax : 'Jax Berndt',
                elizabeth : 'Elizabeth Chiu',
                sara : 'Sara Nicely',
                anna : 'Anna Broussard'
            }"
        >
        </ui-select>
    </div>
    :::

    :::vue
    @name:align
    ---
    #config
    >conf-desc
    内容对齐方式充。
    >conf-accept
    `'left'` : 左对齐<br>`'center'` : 居中对齐<br>`'right'` : 右对齐
    >conf-type
    String
    >conf-default
    `'left'`
    ---
    #demo
    >desc
    内容居中对齐。
    >tpl
    <div style="width:300px;">
        <ui-select
            form-name="Select designer"
            align="center"
            :list="{
                tim : 'Tim Boelaars',
                andrew : 'Andrew Colin Beck',
                gustavo : 'Gustavo Zambelli',
                victor : 'Victor Erixon',
                shaun : 'Shaun Moynihan',
                emir : 'Emir Ayouni',
                katherine : 'Katherine Rainey',
                jax : 'Jax Berndt',
                elizabeth : 'Elizabeth Chiu',
                sara : 'Sara Nicely',
                anna : 'Anna Broussard'
            }"
        >
        </ui-select>
    </div>
    ---
    #demo
    >desc
    内容右对齐。
    >tpl
    <div style="width:300px;">
        <ui-select
            form-name="Select designer"
            align="right"
            :list="{
                tim : 'Tim Boelaars',
                andrew : 'Andrew Colin Beck',
                gustavo : 'Gustavo Zambelli',
                victor : 'Victor Erixon',
                shaun : 'Shaun Moynihan',
                emir : 'Emir Ayouni',
                katherine : 'Katherine Rainey',
                jax : 'Jax Berndt',
                elizabeth : 'Elizabeth Chiu',
                sara : 'Sara Nicely',
                anna : 'Anna Broussard'
            }"
        >
        </ui-select>
    </div>
    :::

    :::vue
    @name:prepend
    ---
    #config
    >conf-desc
    表单前缀。
    >conf-accept
    任意字符串(支持HTML)
    >conf-type
    String
    >conf-default
    `undefined`
    ---
    #demo
    >tpl
    <div style="width:300px;">
        <ui-select
            form-name="Select designer"
            prepend="设计师"
            :list="{
                tim : 'Tim Boelaars',
                andrew : 'Andrew Colin Beck',
                gustavo : 'Gustavo Zambelli',
                victor : 'Victor Erixon',
                shaun : 'Shaun Moynihan',
                emir : 'Emir Ayouni',
                katherine : 'Katherine Rainey',
                jax : 'Jax Berndt',
                elizabeth : 'Elizabeth Chiu',
                sara : 'Sara Nicely',
                anna : 'Anna Broussard'
            }"
        >
        </ui-select>
    </div>
    :::

    :::vue
    @name:max-show
    ---
    #config
    >conf-desc
    下拉列表最多显示几项，超出的项目会被隐藏并提示通过搜索查看(必须启用`can-search`配置才会生效)。<br><br>当可选项目过多时应该启用此配置和`can-search`，因为用户面对过多的选项不会逐项查找，一般通过搜索来查找。若所有选项都进行渲染DOM会过多，从而对性能产生影响。
    >conf-accept
    项目数量
    >conf-type
    Number
    >conf-default
    `Infinity`
    ---
    #demo
    >desc
    最多显示4项。
    >tpl
    <div style="width:300px;">
        <ui-select
            form-name="Select designer"
            can-search
            :max-show="4"
            :list="{
                tim : 'Tim Boelaars',
                andrew : 'Andrew Colin Beck',
                gustavo : 'Gustavo Zambelli',
                victor : 'Victor Erixon',
                shaun : 'Shaun Moynihan',
                emir : 'Emir Ayouni',
                katherine : 'Katherine Rainey',
                jax : 'Jax Berndt',
                elizabeth : 'Elizabeth Chiu',
                sara : 'Sara Nicely',
                anna : 'Anna Broussard'
            }"
        >
        </ui-select>
    </div>
    :::

    :::vue
    @name:max-show-height
    ---
    #config
    >conf-desc
    下拉列表最高显示几项(超过出现滚动条)的高度。
    >conf-accept
    项目数量
    >conf-type
    Number
    >conf-default
    `5`
    ---
    #demo
    >desc
    下拉列表的高度可以显示两项。
    >tpl
    <div style="width:300px;">
        <ui-select
            form-name="Select designer"
            :max-show-height="2"
            :list="{
                tim : 'Tim Boelaars',
                andrew : 'Andrew Colin Beck',
                gustavo : 'Gustavo Zambelli',
                victor : 'Victor Erixon',
                shaun : 'Shaun Moynihan',
                emir : 'Emir Ayouni',
                katherine : 'Katherine Rainey',
                jax : 'Jax Berndt',
                elizabeth : 'Elizabeth Chiu',
                sara : 'Sara Nicely',
                anna : 'Anna Broussard'
            }"
        >
        </ui-select>
    </div>
    :::

    :::vue
    @name:auto-close
    ---
    #config
    >conf-desc
    点击下拉选择框以外的区域自动关闭下拉选择框。
    >conf-accept
    `true`<br>`false`
    >conf-type
    Boolean
    >conf-default
    `true`
    ---
    #demo
    >desc
    点击外部区域不会关闭下拉列表。
    >tpl
    <div style="width:300px;">
        <ui-select
            form-name="Select designer"
            :auto-close="false"
            :list="{
                tim : 'Tim Boelaars',
                andrew : 'Andrew Colin Beck',
                gustavo : 'Gustavo Zambelli',
                victor : 'Victor Erixon',
                shaun : 'Shaun Moynihan',
                emir : 'Emir Ayouni',
                katherine : 'Katherine Rainey',
                jax : 'Jax Berndt',
                elizabeth : 'Elizabeth Chiu',
                sara : 'Sara Nicely',
                anna : 'Anna Broussard'
            }"
        >
        </ui-select>
    </div>
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
        <ui-select
            form-name="Select designer"
            can-search
            :list="{
                tim : 'Tim Boelaars',
                andrew : 'Andrew Colin Beck',
                gustavo : 'Gustavo Zambelli',
                victor : 'Victor Erixon',
                shaun : 'Shaun Moynihan',
                emir : 'Emir Ayouni',
                katherine : 'Katherine Rainey',
                jax : 'Jax Berndt',
                elizabeth : 'Elizabeth Chiu',
                sara : 'Sara Nicely',
                anna : 'Anna Broussard'
            }"
        >
        </ui-select>
    </div>
    :::

    :::vue
    @name:multi-select
    ---
    #config
    >conf-desc
    允许选择多个项目。
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
        <ui-select
            form-name="Select designer"
            multi-select
            :list="{
                tim : 'Tim Boelaars',
                andrew : 'Andrew Colin Beck',
                gustavo : 'Gustavo Zambelli',
                victor : 'Victor Erixon',
                shaun : 'Shaun Moynihan',
                emir : 'Emir Ayouni',
                katherine : 'Katherine Rainey',
                jax : 'Jax Berndt',
                elizabeth : 'Elizabeth Chiu',
                sara : 'Sara Nicely',
                anna : 'Anna Broussard'
            }"
        >
        </ui-select>
    </div>
    :::

    :::vue
    @name:can-move
    ---
    #config
    >conf-desc
    项目是否可以移动。
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
        <ui-select
            form-name="Select designer"
            multi-select
            can-move
            :default-value="['Tim Boelaars', 'Andrew Colin Beck', 'Gustavo Zambelli']"
            :list="{
                tim : 'Tim Boelaars',
                andrew : 'Andrew Colin Beck',
                gustavo : 'Gustavo Zambelli',
                victor : 'Victor Erixon',
                shaun : 'Shaun Moynihan',
                emir : 'Emir Ayouni',
                katherine : 'Katherine Rainey',
                jax : 'Jax Berndt',
                elizabeth : 'Elizabeth Chiu',
                sara : 'Sara Nicely',
                anna : 'Anna Broussard'
            }"
        >
        </ui-select>
    </div>
    :::

    :::vue
    @name:max
    ---
    #config
    >conf-desc
    允许多选的最大项数，仅在开启`multi-select`后生效，未开启`multi-select`至多只能选择一项。
    >conf-accept
    数字
    >conf-type
    Number
    >conf-default
    `Infinity`
    ---
    #demo
    >desc
    最多选择三项。
    >tpl
    <div style="width:300px;">
        <ui-select
            form-name="Select designer"
            multi-select
            :max="3"
            :list="{
                tim : 'Tim Boelaars',
                andrew : 'Andrew Colin Beck',
                gustavo : 'Gustavo Zambelli',
                victor : 'Victor Erixon',
                shaun : 'Shaun Moynihan',
                emir : 'Emir Ayouni',
                katherine : 'Katherine Rainey',
                jax : 'Jax Berndt',
                elizabeth : 'Elizabeth Chiu',
                sara : 'Sara Nicely',
                anna : 'Anna Broussard'
            }"
        >
        </ui-select>
    </div>
    :::

    :::vue
    @name:auto-reset-search
    ---
    #config
    >conf-desc
    在多选模式下当选中某项或表单值发生变化后，重置搜索内容。(仅在开启`multi-select`及`can-search`时生效)
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
        <ui-select
            form-name="Select designer"
            auto-reset-search
            multi-select
            can-search
            :list="{
                tim : 'Tim Boelaars',
                andrew : 'Andrew Colin Beck',
                gustavo : 'Gustavo Zambelli',
                victor : 'Victor Erixon',
                shaun : 'Shaun Moynihan',
                emir : 'Emir Ayouni',
                katherine : 'Katherine Rainey',
                jax : 'Jax Berndt',
                elizabeth : 'Elizabeth Chiu',
                sara : 'Sara Nicely',
                anna : 'Anna Broussard'
            }"
        >
        </ui-select>
    </div>
    :::

    :::vue
    @name:hide-selected
    ---
    #config
    >conf-desc
    开启此配置后当项目被选中时会被隐藏，若关闭此配置则会标记选中的项目。
    >conf-accept
    `true`<br>`false`
    >conf-type
    Boolean
    >conf-default
    `true`
    ---
    #demo
    >desc
    显示选中项。
    >tpl
    <div style="width:300px;">
        <ui-select
            form-name="Select designer"
            :hide-selected="false"
            multi-select
            :list="{
                tim : 'Tim Boelaars',
                andrew : 'Andrew Colin Beck',
                gustavo : 'Gustavo Zambelli',
                victor : 'Victor Erixon',
                shaun : 'Shaun Moynihan',
                emir : 'Emir Ayouni',
                katherine : 'Katherine Rainey',
                jax : 'Jax Berndt',
                elizabeth : 'Elizabeth Chiu',
                sara : 'Sara Nicely',
                anna : 'Anna Broussard'
            }"
        >
        </ui-select>
    </div>
    ---
    #demo
    >desc
    隐藏选中项。
    >tpl
    <div style="width:300px;">
        <ui-select
            form-name="Select designer"
            hide-selected
            multi-select
            :list="{
                tim : 'Tim Boelaars',
                andrew : 'Andrew Colin Beck',
                gustavo : 'Gustavo Zambelli',
                victor : 'Victor Erixon',
                shaun : 'Shaun Moynihan',
                emir : 'Emir Ayouni',
                katherine : 'Katherine Rainey',
                jax : 'Jax Berndt',
                elizabeth : 'Elizabeth Chiu',
                sara : 'Sara Nicely',
                anna : 'Anna Broussard'
            }"
        >
        </ui-select>
    </div>
    :::

    :::vue
    @name:inline-img-size
    ---
    #config
    >conf-desc
    项目的缩略图大小(这不会影响选中项目的缩略图大小)
    >conf-accept
    px或em为单位的数值字符串
    >conf-type
    String
    >conf-default
    `'2em'`
    ---
    #demo
    >tpl
    <div style="width:300px;">
        <ui-select
            form-name="Select designer"
            inline-img-size="50px"
            :list="{
                tim : '<img style=\'border-radius: 50%;\' src=\'https://cdn.dribbble.com/users/2489/avatars/normal/702fb51d7c85c8b61628604762ffc21a.jpg?1444639894\'></img>Tim Boelaars',
                andrew : '<img style=\'border-radius: 50%;\' src=\'https://cdn.dribbble.com/users/108671/avatars/normal/dadb0bd212cc107ad3a1d1baedc46938.jpg?1416997444\'></img>Andrew Colin Beck',
                gustavo : '<img style=\'border-radius: 50%;\' src=\'https://cdn.dribbble.com/users/60266/avatars/normal/gustavo_avatar.jpg?1402000442\'></img>Gustavo Zambelli',
                victor : '<img style=\'border-radius: 50%;\' src=\'https://cdn.dribbble.com/users/96387/avatars/normal/debda2342580bda98269c0165054464c.jpg?1435151464\'></img>Victor Erixon',
                shaun : '<img style=\'border-radius: 50%;\' src=\'https://cdn.dribbble.com/users/2944/avatars/normal/e08c0e446862572facf0e48316d91c8f.png?1429207992\'></img>Shaun Moynihan',
                emir : '<img style=\'border-radius: 50%;\' src=\'https://cdn.dribbble.com/users/23569/avatars/normal/4c2dc35fbb2e0da85969e49592dfd49d.jpg?1420405934\'></img>Emir Ayouni',
                katherine : '<img style=\'border-radius: 50%;\' src=\'https://cdn.dribbble.com/users/460187/avatars/normal/eb8e273c036ae93b134b10358c5f19f5.jpg?1418705072\'></img>Katherine Rainey',
                jax : '<img style=\'border-radius: 50%;\' src=\'https://cdn.dribbble.com/users/119911/avatars/normal/531fd12e5775ed5ac6a07aea7b492151.jpg?1427986143\'></img>Jax Berndt',
                elizabeth : '<img style=\'border-radius: 50%;\' src=\'https://cdn.dribbble.com/users/857412/avatars/normal/8f5f9fbdd66cc70f22304f2ed3be4fa1.png?1440078204\'></img>Elizabeth Chiu',
                sara : '<img style=\'border-radius: 50%;\' src=\'https://cdn.dribbble.com/users/162566/avatars/normal/1012292_10104881398564961_565325188_n.jpg?1403561573\'></img>Sara Nicely',
                anna : '<img style=\'border-radius: 50%;\' src=\'https://cdn.dribbble.com/users/243797/avatars/normal/657a04cfaeca8f6f5bb7ecf64267bc67.jpg?1416007045\'></img>Anna Broussard'
            }"
        >
        </ui-select>
    </div>
    :::

    :::vue
    @name:item-tip
    ---
    #config
    >conf-desc
    允许为下拉菜单设置提示。
    >conf-accept
    `true`<br>`false`
    >conf-type
    Boolean
    >conf-default
    `false`
    ---
    #demo
    >desc
    启用`item-tip`后需要在`list`配置中的每个选项中添加`tip`属性来提供提示内容。<br>下面示例中在第一和第二项中加入了提示。
    >tpl
    <div style="width:300px;">
        <ui-select
            form-name="Select designer"
            item-tip
            :list="{
                tim : {
                    name : 'Tim Boelaars',
                    tip : 'This is Tim Boelaars'
                },
                andrew : {
                    name : 'Andrew Colin Beck',
                    tip : 'This is Andrew Colin Beck'
                },
                gustavo : 'Gustavo Zambelli',
                victor : 'Victor Erixon',
                shaun : 'Shaun Moynihan',
                emir : 'Emir Ayouni',
                katherine : 'Katherine Rainey',
                jax : 'Jax Berndt',
                elizabeth : 'Elizabeth Chiu',
                sara : 'Sara Nicely',
                anna : 'Anna Broussard'
            }"
        >
        </ui-select>
    </div>
    :::

    :::vue
    @name:item-tip-direct
    ---
    #config
    >conf-desc
    为下拉菜单设置提示的方向，需要开启`list-tip`才有效。
    >conf-accept
    `top`<br>`right`<br>`bottom`<br>`left`
    >conf-type
    String
    >conf-default
    `top`
    ---
    #demo
    >tpl
    <div style="width:300px;">
        <p>上侧出现的提示框</p>
        <ui-select
            form-name="Select designer"
            item-tip
            item-tip-direct="top"
            :list="{
                tim : {
                    name : 'Tim Boelaars',
                    tip : 'This is Tim Boelaars'
                },
                andrew : {
                    name : 'Andrew Colin Beck',
                    tip : 'This is Andrew Colin Beck'
                },
                gustavo : {
                    name : 'Gustavo Zambelli',
                    tip : 'This is Gustavo Zambelli'
                },
                victor : {
                    name : 'Victor Erixon',
                    tip : 'This is Victor Erixon'
                },
                shaun : {
                    name : 'Shaun Moynihan',
                    tip : 'This is Shaun Moynihan'
                },
                emir : {
                    name : 'Emir Ayouni',
                    tip : 'This is Emir Ayouni'
                },
                katherine : {
                    name : 'Katherine Rainey',
                    tip : 'This is Katherine Rainey'
                },
                jax : {
                    name : 'Jax Berndt',
                    tip : 'This is Jax Berndt'
                },
                elizabeth : {
                    name : 'Elizabeth Chiu',
                    tip : 'This is Elizabeth Chiu'
                },
                sara : {
                    name : 'Sara Nicely',
                    tip : 'This is Sara Nicely'
                },
                anna : {
                    name : 'Anna Broussard',
                    tip : 'This is Anna Broussard'
                }
            }"
        >
        </ui-select>

        <br><br>
        <p>右侧出现的提示框</p>
        <ui-select
            form-name="Select designer"
            item-tip
            item-tip-direct="right"
            :list="{
                tim : {
                    name : 'Tim Boelaars',
                    tip : 'This is Tim Boelaars'
                },
                andrew : {
                    name : 'Andrew Colin Beck',
                    tip : 'This is Andrew Colin Beck'
                },
                gustavo : {
                    name : 'Gustavo Zambelli',
                    tip : 'This is Gustavo Zambelli'
                },
                victor : {
                    name : 'Victor Erixon',
                    tip : 'This is Victor Erixon'
                },
                shaun : {
                    name : 'Shaun Moynihan',
                    tip : 'This is Shaun Moynihan'
                },
                emir : {
                    name : 'Emir Ayouni',
                    tip : 'This is Emir Ayouni'
                },
                katherine : {
                    name : 'Katherine Rainey',
                    tip : 'This is Katherine Rainey'
                },
                jax : {
                    name : 'Jax Berndt',
                    tip : 'This is Jax Berndt'
                },
                elizabeth : {
                    name : 'Elizabeth Chiu',
                    tip : 'This is Elizabeth Chiu'
                },
                sara : {
                    name : 'Sara Nicely',
                    tip : 'This is Sara Nicely'
                },
                anna : {
                    name : 'Anna Broussard',
                    tip : 'This is Anna Broussard'
                }
            }"
        >
        </ui-select>

        <br><br>
        <p>下侧出现的提示框</p>
        <ui-select
            form-name="Select designer"
            item-tip
            item-tip-direct="bottom"
            :list="{
                tim : {
                    name : 'Tim Boelaars',
                    tip : 'This is Tim Boelaars'
                },
                andrew : {
                    name : 'Andrew Colin Beck',
                    tip : 'This is Andrew Colin Beck'
                },
                gustavo : {
                    name : 'Gustavo Zambelli',
                    tip : 'This is Gustavo Zambelli'
                },
                victor : {
                    name : 'Victor Erixon',
                    tip : 'This is Victor Erixon'
                },
                shaun : {
                    name : 'Shaun Moynihan',
                    tip : 'This is Shaun Moynihan'
                },
                emir : {
                    name : 'Emir Ayouni',
                    tip : 'This is Emir Ayouni'
                },
                katherine : {
                    name : 'Katherine Rainey',
                    tip : 'This is Katherine Rainey'
                },
                jax : {
                    name : 'Jax Berndt',
                    tip : 'This is Jax Berndt'
                },
                elizabeth : {
                    name : 'Elizabeth Chiu',
                    tip : 'This is Elizabeth Chiu'
                },
                sara : {
                    name : 'Sara Nicely',
                    tip : 'This is Sara Nicely'
                },
                anna : {
                    name : 'Anna Broussard',
                    tip : 'This is Anna Broussard'
                }
            }"
        >
        </ui-select>

        <br><br>
        <p>左侧出现的提示框</p>
        <ui-select
            form-name="Select designer"
            item-tip
            item-tip-direct="left"
            :list="{
                tim : {
                    name : 'Tim Boelaars',
                    tip : 'This is Tim Boelaars'
                },
                andrew : {
                    name : 'Andrew Colin Beck',
                    tip : 'This is Andrew Colin Beck'
                },
                gustavo : {
                    name : 'Gustavo Zambelli',
                    tip : 'This is Gustavo Zambelli'
                },
                victor : {
                    name : 'Victor Erixon',
                    tip : 'This is Victor Erixon'
                },
                shaun : {
                    name : 'Shaun Moynihan',
                    tip : 'This is Shaun Moynihan'
                },
                emir : {
                    name : 'Emir Ayouni',
                    tip : 'This is Emir Ayouni'
                },
                katherine : {
                    name : 'Katherine Rainey',
                    tip : 'This is Katherine Rainey'
                },
                jax : {
                    name : 'Jax Berndt',
                    tip : 'This is Jax Berndt'
                },
                elizabeth : {
                    name : 'Elizabeth Chiu',
                    tip : 'This is Elizabeth Chiu'
                },
                sara : {
                    name : 'Sara Nicely',
                    tip : 'This is Sara Nicely'
                },
                anna : {
                    name : 'Anna Broussard',
                    tip : 'This is Anna Broussard'
                }
            }"
        >
        </ui-select>
    </div>
    :::
    
    :::vue
    @name:list-width
    ---
    #config
    >conf-desc
    在开启`separate-emit`的情况下，下拉列表的宽度(单位px)，如果设为`false`则下拉列表会自动调整宽度。<br>若未开启`separate-emit`此配置不会生效，下拉列表的宽度等于组件本身的宽度。
    >conf-accept
    `false`：自动调整宽度<br>数字：下拉列表的宽度(单位px)
    >conf-type
    Boolean<br>Number
    >conf-default
    `false`
    ---
    #demo
    >desc
    设置下拉列表的宽度为280px。
    >tpl
    <div style="width:300px;">
        <ui-btn class="demo14">点击选择</ui-btn>
        <ui-select
            inside-name="Select designer"
            separate-emit=".demo14"
            :list-width="280"
            :list="{
                tim : 'Tim Boelaars',
                andrew : 'Andrew Colin Beck',
                gustavo : 'Gustavo Zambelli',
                victor : 'Victor Erixon',
                shaun : 'Shaun Moynihan',
                emir : 'Emir Ayouni',
                katherine : 'Katherine Rainey',
                jax : 'Jax Berndt',
                elizabeth : 'Elizabeth Chiu',
                sara : 'Sara Nicely',
                anna : 'Anna Broussard'
            }"
        >
        </ui-select>
    </div>
    :::

    [[[方法]]]

    :::preset
    @name:formMethod
    @uikey:select
    @value:['tim']
    @defaultValue:['tim']
    @attrs: :list="{tim:'Tim Boelaars', andrew:'Andrew Colin Beck', gustavo:'Gustavo Zambelli', victor:'Victor Erixon', shaun:'Shaun Moynihan', emir:'Emir Ayouni', katherine:'Katherine Rainey', jax:'Jax Berndt', elizabeth:'Elizabeth Chiu', sara:'Sara Nicely', anna:'Anna Broussard'}"
    :::

    :::vue
    @name:toggle([show])
    ---
    #method
    >method-desc
    切换下拉选择框的下拉列表是否显示。
    >method-args
    |show|YES|下拉列表需要切换到隐藏或显示，若不设置则切换到相反的状态。|`undefined`<br>`true`<br>`false`|`Undefined`<br>`Boolean`|`undefined`|
    >method-return
    当前组件VM实例。
    ---
    #demo
    >tpl
    <div style="width:300px;">
        <ui-link js="window.morning.findVM('demo1').toggle(true);">显示下拉列表</ui-link>
        <ui-link js="window.morning.findVM('demo1').toggle(false);">隐藏下拉列表</ui-link>
        <ui-link js="window.morning.findVM('demo1').toggle();">切换到反向状态</ui-link>

        <br><br>

        <ui-select
            ref="demo1"
            form-name="Select designer"
            :auto-close="false"
            :list="{
                tim : 'Tim Boelaars',
                andrew : 'Andrew Colin Beck',
                gustavo : 'Gustavo Zambelli',
                victor : 'Victor Erixon',
                shaun : 'Shaun Moynihan',
                emir : 'Emir Ayouni',
                katherine : 'Katherine Rainey',
                jax : 'Jax Berndt',
                elizabeth : 'Elizabeth Chiu',
                sara : 'Sara Nicely',
                anna : 'Anna Broussard'
            }"
        >
        </ui-select>
    </div>
    :::

    [[[事件]]]

    :::preset
    @name:formEvent
    @uiname:下拉选择框
    @uikey:select
    @value:['tim']
    @wrapStyle:width:300px;
    @attrs: :list="{tim:'Tim Boelaars', andrew:'Andrew Colin Beck', gustavo:'Gustavo Zambelli', victor:'Victor Erixon', shaun:'Shaun Moynihan', emir:'Emir Ayouni', katherine:'Katherine Rainey', jax:'Jax Berndt', elizabeth:'Elizabeth Chiu', sara:'Sara Nicely', anna:'Anna Broussard'}"
    :::

    :::vue
    @name:list-show
    ---
    #event
    >event-desc
    当下拉列表显示时触发。
    ---
    #demo
    >tpl
    <div style="width:300px;">
        <ui-select
            ref="demo2"
            form-name="Select designer"
            @list-show="echo"
            :list="{
                tim : 'Tim Boelaars',
                andrew : 'Andrew Colin Beck',
                gustavo : 'Gustavo Zambelli',
                victor : 'Victor Erixon',
                shaun : 'Shaun Moynihan',
                emir : 'Emir Ayouni',
                katherine : 'Katherine Rainey',
                jax : 'Jax Berndt',
                elizabeth : 'Elizabeth Chiu',
                sara : 'Sara Nicely',
                anna : 'Anna Broussard'
            }"
        >
        </ui-select>
    </div>
    >script
    {
        methods : {
            echo : function () {
                console.log('demo2.console1', 'list-show event!');
            }
        }
    }
    :::

    :::vue
    @name:list-hide
    ---
    #event
    >event-desc
    当下拉列表隐藏时触发。
    ---
    #demo
    >tpl
    <div style="width:300px;">
        <ui-select
            ref="demo3"
            form-name="Select designer"
            @list-hide="echo"
            :list="{
                tim : 'Tim Boelaars',
                andrew : 'Andrew Colin Beck',
                gustavo : 'Gustavo Zambelli',
                victor : 'Victor Erixon',
                shaun : 'Shaun Moynihan',
                emir : 'Emir Ayouni',
                katherine : 'Katherine Rainey',
                jax : 'Jax Berndt',
                elizabeth : 'Elizabeth Chiu',
                sara : 'Sara Nicely',
                anna : 'Anna Broussard'
            }"
        >
        </ui-select>
    </div>
    >script
    {
        methods : {
            echo : function () {
                console.log('demo3.console1', 'list-hide event!');
            }
        }
    }
    :::

    :::vue
    @name:search
    ---
    #event
    >event-desc
    当开启`can-search`配置并且搜索关键词变化时时触发。
    ---
    #demo
    >tpl
    <div style="width:300px;">
        <ui-select
            ref="demo15"
            form-name="Select designer"
            can-search
            @search="echo"
            :list="{
                tim : 'Tim Boelaars',
                andrew : 'Andrew Colin Beck',
                gustavo : 'Gustavo Zambelli',
                victor : 'Victor Erixon',
                shaun : 'Shaun Moynihan',
                emir : 'Emir Ayouni',
                katherine : 'Katherine Rainey',
                jax : 'Jax Berndt',
                elizabeth : 'Elizabeth Chiu',
                sara : 'Sara Nicely',
                anna : 'Anna Broussard'
            }"
        >
        </ui-select>
    </div>
    >script
    {
        methods : {
            echo : function () {
                console.log('demo15.console1', 'search event!');
            }
        }
    }
    :::

    [[[表单值]]]

    #### 值类型
    
    `Array` : 数组

    #### 值过滤

    - 所有不支持的值类型，都会被尝试转换成空数组(`[]`)。
    - 若开启`dynamic-list`配置且设置了`validate`，则会通过此配置过滤，若未设置`validate`则不会过滤。
    - 若未开启`dynamic-list`配置，则数组中的键值不在可选列表内，会被过滤。
    - 数组项目数过滤：
        - 若未开启`multi-select`，此数组最多只会有一项。
        - 若开启`multi-select`，此数组最多不会超过`max`设置的项目数量。

    #### 值格式

    包含选中键值的无序数组，键值是字符串。

    #### 默认值

    `[]`

    :::preset
    @name:formValue
    @uikey:select
    @uiname:下拉选择框
    @valueType:select
    @wrapStyle:width:300px;
    @attrs: :list="{tim:'Tim Boelaars', andrew:'Andrew Colin Beck', gustavo:'Gustavo Zambelli', victor:'Victor Erixon', shaun:'Shaun Moynihan', emir:'Emir Ayouni', katherine:'Katherine Rainey', jax:'Jax Berndt', elizabeth:'Elizabeth Chiu', sara:'Sara Nicely', anna:'Anna Broussard'}"
    :::

    [[[源码]]]

    <iframe src=\"/report/coverage/lib/components/select/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight\"></iframe>

    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                 from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'select'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
