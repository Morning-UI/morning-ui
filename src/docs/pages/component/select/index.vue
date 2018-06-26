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

    下拉选择框的选项通过`list`配置传入，`list.val`是选项的值，`list.name`是选项的名称(支持HTML)。

    #### 使用

    :::democode/html
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

    #### 通过其他元素触发的下拉选择框

    通过`separate-emit`你可以指定任意元素来触发下拉选择框，更多用法见：[separate-emit配置](/component/select.html#separate-emit)

    :::democode/html
    <div style="width:300px;">
        <ui-btn class="demo5">点击选择</ui-btn>
        <ui-select
            form-name="Select designer"
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

    #### 使用HTML的选项

    :::democode/html
    <div style="width:300px;">
        <ui-select
            form-name="Select designer"
            :list="{
                tim : '<ui-img class=\'circle\' src=\'https://cdn.dribbble.com/users/2489/avatars/normal/702fb51d7c85c8b61628604762ffc21a.jpg?1444639894\'></ui-img>Tim Boelaars',
                andrew : '<ui-img class=\'circle\' src=\'https://cdn.dribbble.com/users/108671/avatars/normal/dadb0bd212cc107ad3a1d1baedc46938.jpg?1416997444\'></ui-img>Andrew Colin Beck',
                gustavo : '<ui-img class=\'circle\' src=\'https://cdn.dribbble.com/users/60266/avatars/normal/gustavo_avatar.jpg?1402000442\'></ui-img>Gustavo Zambelli',
                victor : '<ui-img class=\'circle\' src=\'https://cdn.dribbble.com/users/96387/avatars/normal/debda2342580bda98269c0165054464c.jpg?1435151464\'></ui-img>Victor Erixon',
                shaun : '<ui-img class=\'circle\' src=\'https://cdn.dribbble.com/users/2944/avatars/normal/e08c0e446862572facf0e48316d91c8f.png?1429207992\'></ui-img>Shaun Moynihan',
                emir : '<ui-img class=\'circle\' src=\'https://cdn.dribbble.com/users/23569/avatars/normal/4c2dc35fbb2e0da85969e49592dfd49d.jpg?1420405934\'></ui-img>Emir Ayouni',
                katherine : '<ui-img class=\'circle\' src=\'https://cdn.dribbble.com/users/460187/avatars/normal/eb8e273c036ae93b134b10358c5f19f5.jpg?1418705072\'></ui-img>Katherine Rainey',
                jax : '<ui-img class=\'circle\' src=\'https://cdn.dribbble.com/users/119911/avatars/normal/531fd12e5775ed5ac6a07aea7b492151.jpg?1427986143\'></ui-img>Jax Berndt',
                elizabeth : '<ui-img class=\'circle\' src=\'https://cdn.dribbble.com/users/857412/avatars/normal/8f5f9fbdd66cc70f22304f2ed3be4fa1.png?1440078204\'></ui-img>Elizabeth Chiu',
                sara : '<ui-img class=\'circle\' src=\'https://cdn.dribbble.com/users/162566/avatars/normal/1012292_10104881398564961_565325188_n.jpg?1403561573\'></ui-img>Sara Nicely',
                anna : '<ui-img class=\'circle\' src=\'https://cdn.dribbble.com/users/243797/avatars/normal/657a04cfaeca8f6f5bb7ecf64267bc67.jpg?1416007045\'></ui-img>Anna Broussard'
            }"
        >
        </ui-select>
    </div>
    :::
    
    #### 可搜索

    :::democode/html
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

    #### 多选

    :::democode/html
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

    #### 可搜索的多选

    :::democode/html
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

    #### 数量较多的选项

    若下拉选择存在大量选项时，我们推荐以下方法进行优化：

    - 小于`200`项：不需要特殊优化
    - `200`至`2000`项：采用[max-show](#max-show)配置优化，可减少DOM数量
    - 大于`2000`项：采用[dynamic-list](#dynamic-list)配置优化，可减少`list`中的数据及DOM数量，同时也可采用远程查询。

    #### 高性能模式

    当下拉列表的选项超过`200`项时，组件会自动开启高性能模式以减少掉帧的现象。在高性能模式下动画及计算会尽可能减少。

    [[[形态]]]

    :::preset/html
    formStatus
    ---
    uikey:select
    statusDefaultValue:['tim']
    statusMoreAttr::list="{tim:'Tim Boelaars', andrew:'Andrew Colin Beck', gustavo:'Gustavo Zambelli', victor:'Victor Erixon', shaun:'Shaun Moynihan', emir:'Emir Ayouni', katherine:'Katherine Rainey', jax:'Jax Berndt', elizabeth:'Elizabeth Chiu', sara:'Sara Nicely', anna:'Anna Broussard'}"
    :::

    #### 更多`disabled`状态

    多选及可搜索情况下`disabled`。

    :::democode/html
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

    #### 更多`readonly`状态

    多选及可搜索情况下`readonly`。

    :::democode/html
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

    :::preset/html
    formConfigTable
    ---
    |[list](#list)|通过此配置来设置可选项目，这是一个对象或数组。<br><br>若为对象：<br>键名是选项的值<br>键值若为字符串，则为选项的名称<br>若为对象，则可包含以下几个属性：<br>`name` : 选项的名称。<br>`tip` : 选项的提示信息(需要启用`item-tip`配置才会显示)<br><br>若为数组：<br>数组中每一项是一个对象，这个对象包含以下几个属性：<br>`key` : 选项的值<br>`name` : 选项的名称<br>`tip` : 选项的提示信息(需要启用`item-tip`配置才会显示)|对象<br>数组|Object<br>Array|`{}`|
    |[dynamic-list](#dynamic-list)|动态可选项目，开启此配置后允许动态的改变`list`且不校验选中项目是否在`list`配置中。<br>因为开启此配置后`list`中的选项是不完整的，所以如果需要校验选项是否存在，可以通过`validate`配置来实现。|`true`<br>`false`|Boolean|`false`|
    |[validate](#validate)|验证选项是否可用，若选项不可用将会直接过滤。只有在开启`dynamic-list`配置时生效。<br>函数包含一个入参：<br><br>参数是需要验证的值<br><br>通过这这个参数来验证有效性。<br><br>此函数的返回值为验证结果，是布尔值：<br><br>非`false`：验证通过<br>`false`：验证失败，直接过滤此值<br><br>需要注意是的验证不支持异步，如果需要异步校验数据应该写到组件取值之后。|验证函数(同步)|Function|`() => {}`|
    |[separate-emit](#separate-emit)|通过其他的元素来触发下拉选择框|元素选择器([MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/Document_Object_Model/Locating_DOM_elements_using_selectors))|String|`''`|
    |[align](#align)|内容对齐方式|`'left'` : 左对齐<br>`'center'` : 居中对齐<br>`'right'` : 右对齐|String|`'left'`|
    |[prepend](#prepend)|表单前缀|任意字符串(支持HTML)|String|`undefined`|
    |[max-show](#max-show)|下拉列表最多显示几项，超出的项目会被隐藏并提示通过搜索查看(必须启用`can-search`配置才会生效)。|项目数量|Number|`Infinity`|
    |[max-show-height](#max-show-height)|下拉列表最高显示几项(超过出现滚动条)的高度|项目数量|Number|`5`|
    |[auto-close](#auto-close)|点击下拉选择框以外的区域自动关闭下拉选择框|`true`<br>`false`|Boolean|`true`|
    |[can-search](#can-search)|允许通过项目内容搜索项目|`true`<br>`false`|Boolean|`false`|
    |[multi-select](#multi-select)|允许选择多个项目|`true`<br>`false`|Boolean|`false`|
    |[can-move](#can-move)|项目是否可以移动|`true`<br>`false`|Boolean|`false`|
    |[max](#max)|允许多选的最大项数，仅在开启`multi-select`后生效，未开启`multi-select`至多只能选择一项|数字|Number|`Infinity`|
    |[auto-reset-search](#auto-reset-search)|在多选模式下当选中某项或表单值发生变化后，重置搜索内容。(仅在开启`multi-select`及`can-search`时生效)|`true`<br>`false`|Boolean|`false`|
    |[hide-selected](#hide-selected)|开启此配置后当项目被选中时会被隐藏，若关闭此配置则会标记选中的项目。|`true`<br>`false`|Boolean|`true`|
    |[inline-img-size](#inline-img-size)|项目的缩略图大小(这不会影响选中项目的缩略图大小)|px或em为单位的数值字符串|String|'2em'|
    |[item-tip](#item-tip)|允许为下拉菜单设置提示|`true`<br>`false`|Boolean|`false`|
    |[item-tip-direct](#item-tip-direct)|为下拉菜单设置提示的方向，需要开启`list-tip`才有效|`top`<br>`right`<br>`bottom`<br>`left`|String|`top`|
    |[list-width](#list-width)|在开启`separate-emit`的情况下，下拉列表的宽度(单位px)，如果设为`false`则下拉列表会自动调整宽度。<br>若未开启`separate-emit`此配置不会生效，下拉列表的宽度等于组件本身的宽度。|`false`：自动调整宽度<br>数字：下拉列表的宽度(单位px)|Boolean<br>Number|`false`|
    :::

    :::preset/html
    formConfigDemo
    ---
    uikey:select
    configDefaultValue:['tim']
    configMoreAttr::list="{tim:'Tim Boelaars', andrew:'Andrew Colin Beck', gustavo:'Gustavo Zambelli', victor:'Victor Erixon', shaun:'Shaun Moynihan', emir:'Emir Ayouni', katherine:'Katherine Rainey', jax:'Jax Berndt', elizabeth:'Elizabeth Chiu', sara:'Sara Nicely', anna:'Anna Broussard'}"
    :::

    #### list

    简化配置：

    :::democode/html
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
    :::

    完整版配置：

    :::democode/html
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

    #### dynamic-list

    异步加载数据：

    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
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
    });
    ---
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
    :::

    通过`dynamic-list`和`can-search`配置可以启用异步检索：

    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
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
    });
    ---
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
    :::

    `dynamic-list`配合`multi-select`使用：

    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
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
    });
    ---
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
    :::

    #### validate

    下面这个示例中虽然可选项中有`Tim Boelaars`，但在校验器中无法通过校验，所以无法选中(使用时必须开启`dynamic-list`配置)：

    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
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
    });
    ---
    <div style="width:300px;">
        <ui-select
            form-name="Select designer"
            dynamic-list
            :validate="validate"
            :list="list"
        >
        </ui-select>
    </div>
    :::


    #### separate-emit

    通过`separate-emit`你可以指定任意元素来触发下拉选择框：

    :::democode/html
    <div style="width:300px;">
        <ui-btn class="demo6">点击选择</ui-btn>
        <ui-select
            form-name="Select designer"
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
    :::

    你可以通过设置`list-width`配置来调整宽度：

    :::democode/html
    <div style="width:300px;">
        <ui-btn class="demo11">点击选择</ui-btn>
        <ui-select
            form-name="Select designer"
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
    :::

    `separate-emit`和`can-search`共同使用：

    :::democode/html
    <div style="width:300px;">
        <ui-btn class="demo7">点击选择</ui-btn>
        <ui-select
            form-name="Select designer"
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
    :::

    `separate-emit`和`multi-select`共同使用：

    :::democode/html
    <div style="width:300px;">
        <ui-btn class="demo8">点击选择</ui-btn>
        <ui-select
            form-name="Select designer"
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
    :::

    `separate-emit`、`multi-select`、`can-search`共同使用：

    :::democode/html
    <div style="width:300px;">
        <ui-btn class="demo9">点击选择</ui-btn>
        <ui-select
            form-name="Select designer"
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
    :::

    `separate-emit`、`multi-select`、`can-move`共同使用：

    :::democode/html
    <div style="width:300px;">
        <ui-btn class="demo10">点击选择</ui-btn>
        <ui-select
            form-name="Select designer"
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
    :::

    `separate-emit`、`multi-select`、`hide-selected`共同使用：

    :::democode/html
    <div style="width:300px;">
        <ui-btn class="demo13">点击选择</ui-btn>
        <ui-select
            form-name="Select designer"
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

    #### align

    内容居中对齐：
    
    :::democode/html
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
    :::

    内容右对齐：
    
    :::democode/html
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

    #### prepend

    :::democode/html
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

    #### max-show
    
    当可选项目过多时应该启用此配置和`can-search`，因为用户面对过多的选项不会逐项查找，一般通过搜索来查找。若所有选项都进行渲染DOM会过多，从而对性能产生影响。

    最多显示4项：

    :::democode/html
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

    #### max-show-height

    下拉列表的高度可以显示两项：
    
    :::democode/html
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

    #### auto-close

    点击外部区域不会关闭下拉列表。
    
    :::democode/html
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

    #### can-search

    :::democode/html
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

    #### multi-select

    :::democode/html
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

    #### can-move

    :::democode/html
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

    #### max

    最多选择三项。

    :::democode/html
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

    #### auto-reset-search
    
    :::democode/html
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

    #### hide-selected

    显示选中项：
    
    :::democode/html
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
    :::

    隐藏选中项：
    
    :::democode/html
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

    #### inline-img-size

    :::democode/html
    <div style="width:300px;">
        <ui-select
            form-name="Select designer"
            inline-img-size="50px"
            :list="{
                tim : '<ui-img class=\'circle\' src=\'https://cdn.dribbble.com/users/2489/avatars/normal/702fb51d7c85c8b61628604762ffc21a.jpg?1444639894\'></ui-img>Tim Boelaars',
                andrew : '<ui-img class=\'circle\' src=\'https://cdn.dribbble.com/users/108671/avatars/normal/dadb0bd212cc107ad3a1d1baedc46938.jpg?1416997444\'></ui-img>Andrew Colin Beck',
                gustavo : '<ui-img class=\'circle\' src=\'https://cdn.dribbble.com/users/60266/avatars/normal/gustavo_avatar.jpg?1402000442\'></ui-img>Gustavo Zambelli',
                victor : '<ui-img class=\'circle\' src=\'https://cdn.dribbble.com/users/96387/avatars/normal/debda2342580bda98269c0165054464c.jpg?1435151464\'></ui-img>Victor Erixon',
                shaun : '<ui-img class=\'circle\' src=\'https://cdn.dribbble.com/users/2944/avatars/normal/e08c0e446862572facf0e48316d91c8f.png?1429207992\'></ui-img>Shaun Moynihan',
                emir : '<ui-img class=\'circle\' src=\'https://cdn.dribbble.com/users/23569/avatars/normal/4c2dc35fbb2e0da85969e49592dfd49d.jpg?1420405934\'></ui-img>Emir Ayouni',
                katherine : '<ui-img class=\'circle\' src=\'https://cdn.dribbble.com/users/460187/avatars/normal/eb8e273c036ae93b134b10358c5f19f5.jpg?1418705072\'></ui-img>Katherine Rainey',
                jax : '<ui-img class=\'circle\' src=\'https://cdn.dribbble.com/users/119911/avatars/normal/531fd12e5775ed5ac6a07aea7b492151.jpg?1427986143\'></ui-img>Jax Berndt',
                elizabeth : '<ui-img class=\'circle\' src=\'https://cdn.dribbble.com/users/857412/avatars/normal/8f5f9fbdd66cc70f22304f2ed3be4fa1.png?1440078204\'></ui-img>Elizabeth Chiu',
                sara : '<ui-img class=\'circle\' src=\'https://cdn.dribbble.com/users/162566/avatars/normal/1012292_10104881398564961_565325188_n.jpg?1403561573\'></ui-img>Sara Nicely',
                anna : '<ui-img class=\'circle\' src=\'https://cdn.dribbble.com/users/243797/avatars/normal/657a04cfaeca8f6f5bb7ecf64267bc67.jpg?1416007045\'></ui-img>Anna Broussard'
            }"
        >
        </ui-select>
    </div>
    :::

    #### item-tip

    启用`item-tip`后需要在`list`配置中的每个选项中添加`tip`属性来提供提示内容。

    下面示例中在第一和第二项中加入了提示。

    :::democode/html
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

    #### item-tip-direct

    :::democode/html
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

    #### list-width

    设置下拉列表的宽度为280px：

    :::democode/html
    <div style="width:300px;">
        <ui-btn class="demo14">点击选择</ui-btn>
        <ui-select
            form-name="Select designer"
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

    :::preset/html
    formMethod
    ---
    uikey:select
    methodValue:['tim']
    methodDefaultValue:['tim']
    methodMoreAttr::list="{tim:'Tim Boelaars', andrew:'Andrew Colin Beck', gustavo:'Gustavo Zambelli', victor:'Victor Erixon', shaun:'Shaun Moynihan', emir:'Emir Ayouni', katherine:'Katherine Rainey', jax:'Jax Berndt', elizabeth:'Elizabeth Chiu', sara:'Sara Nicely', anna:'Anna Broussard'}"
    :::

    #### toggle([show])

    切换下拉选择框的下拉列表是否显示。
    
    |KEY|可选|描述|接受值|值类型|默认值|
    |-|-|-|-|-|-|
    |show|YES|下拉列表需要切换到隐藏或显示，若不设置则切换到相反的状态。|`undefined`<br>`true`<br>`false`|`Undefined`<br>`Boolean`|`undefined`|

    :::democode/html
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

    #### list-show

    当下拉列表显示时触发。

    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
        methods : {
            echo : function () {
                console.log('demo2.console1', 'list-show event!');
            }
        }
    });
    ---
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
    :::

    #### list-hide

    当下拉列表隐藏时触发。

    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
        methods : {
            echo : function () {
                console.log('demo3.console1', 'list-hide event!');
            }
        }
    });
    ---
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
    :::

    #### search

    当开启`can-search`配置并且搜索关键词变化时时触发。

    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
        methods : {
            echo : function () {
                console.log('demo15.console1', 'search event!');
            }
        }
    });
    ---
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
    :::

    :::preset/html
    formEvent
    ---
    uikey:select
    eventValue:['tim']
    eventMoreAttr::list="{tim:'Tim Boelaars', andrew:'Andrew Colin Beck', gustavo:'Gustavo Zambelli', victor:'Victor Erixon', shaun:'Shaun Moynihan', emir:'Emir Ayouni', katherine:'Katherine Rainey', jax:'Jax Berndt', elizabeth:'Elizabeth Chiu', sara:'Sara Nicely', anna:'Anna Broussard'}"
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

    #### 输入/输出示例

    :::repeat/html
    formValueType:select
    ---
    <div>
        <p>{$valueType}类型</p>
        <div style="width:300px;">
            <ui-select
                ref="demoType{$valueType}"
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
        <br>
        <ui-link js="window.morning.findVM('demoType{$valueType}').set({$&valueContent})">设置{$valueType}类型</ui-link>
        <ui-link js="alert(window.morning.findVM('demoType{$valueType}').getJson())">获取表单JSON值</ui-link>
    </div>
    <br>
    <br>
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
