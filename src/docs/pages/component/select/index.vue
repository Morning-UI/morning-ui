<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 下拉选择框 `<ui-select>`
    
    <doc-component-status page="select"></doc-component-status>
    
    [[[开始]]]

    定义下拉选择框。

    在组件中使用`<li>`标签定义选项，使用`value`属性定义选项的值。

    注意`<li>`的`value`属性和纯文本内容(innerText去除两端空格)必须是唯一的，因为这两个值用于标记项目。

    #### 使用

    :::democode/html
    <div style="width:300px;">
        <ui-select form-name="Select designer">
            <li value="Tim Boelaars">Tim Boelaars</li>
            <li value="Andrew Colin Beck">Andrew Colin Beck</li>
            <li value="Gustavo Zambelli">Gustavo Zambelli</li>
            <li value="Victor Erixon">Victor Erixon</li>
            <li value="Shaun Moynihan">Shaun Moynihan</li>
            <li value="Emir Ayouni">Emir Ayouni</li>
            <li value="Katherine Rainey">Katherine Rainey</li>
            <li value="Jax Berndt">Jax Berndt</li>
            <li value="Elizabeth Chiu">Elizabeth Chiu</li>
            <li value="Sara Nicely">Sara Nicely</li>
            <li value="Anna Broussard">Anna Broussard</li>
        </ui-select>
    </div>
    :::

    #### 带图片的选项

    :::democode/html
    <div style="width:300px;">
        <ui-select form-name="Select designer">
            <li value="Tim Boelaars"><ui-img class="circle" src="https://cdn.dribbble.com/users/2489/avatars/normal/702fb51d7c85c8b61628604762ffc21a.jpg?1444639894"></ui-img>Tim Boelaars</li>
            <li value="Andrew Colin Beck"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/108671/avatars/normal/dadb0bd212cc107ad3a1d1baedc46938.jpg?1416997444"></ui-img>Andrew Colin Beck</li>
            <li value="Gustavo Zambelli"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/60266/avatars/normal/gustavo_avatar.jpg?1402000442"></ui-img>Gustavo Zambelli</li>
            <li value="Victor Erixon"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/96387/avatars/normal/debda2342580bda98269c0165054464c.jpg?1435151464"></ui-img>Victor Erixon</li>
            <li value="Shaun Moynihan"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/2944/avatars/normal/e08c0e446862572facf0e48316d91c8f.png?1429207992"></ui-img>Shaun Moynihan</li>
            <li value="Emir Ayouni"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/23569/avatars/normal/4c2dc35fbb2e0da85969e49592dfd49d.jpg?1420405934"></ui-img>Emir Ayouni</li>
            <li value="Katherine Rainey"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/460187/avatars/normal/eb8e273c036ae93b134b10358c5f19f5.jpg?1418705072"></ui-img>Katherine Rainey</li>
            <li value="Jax Berndt"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/119911/avatars/normal/531fd12e5775ed5ac6a07aea7b492151.jpg?1427986143"></ui-img>Jax Berndt</li>
            <li value="Elizabeth Chiu"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/857412/avatars/normal/8f5f9fbdd66cc70f22304f2ed3be4fa1.png?1440078204"></ui-img>Elizabeth Chiu</li>
            <li value="Sara Nicely"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/162566/avatars/normal/1012292_10104881398564961_565325188_n.jpg?1403561573"></ui-img>Sara Nicely</li>
            <li value="Anna Broussard"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/243797/avatars/normal/657a04cfaeca8f6f5bb7ecf64267bc67.jpg?1416007045"></ui-img>Anna Broussard</li>
        </ui-select>
    </div>
    :::

    #### 可搜索

    :::democode/html
    <div style="width:300px;">
        <ui-select form-name="Select designer" can-search>
            <li value="Tim Boelaars"><ui-img class="circle" src="https://cdn.dribbble.com/users/2489/avatars/normal/702fb51d7c85c8b61628604762ffc21a.jpg?1444639894"></ui-img>Tim Boelaars</li>
            <li value="Andrew Colin Beck"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/108671/avatars/normal/dadb0bd212cc107ad3a1d1baedc46938.jpg?1416997444"></ui-img>Andrew Colin Beck</li>
            <li value="Gustavo Zambelli"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/60266/avatars/normal/gustavo_avatar.jpg?1402000442"></ui-img>Gustavo Zambelli</li>
            <li value="Victor Erixon"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/96387/avatars/normal/debda2342580bda98269c0165054464c.jpg?1435151464"></ui-img>Victor Erixon</li>
            <li value="Shaun Moynihan"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/2944/avatars/normal/e08c0e446862572facf0e48316d91c8f.png?1429207992"></ui-img>Shaun Moynihan</li>
            <li value="Emir Ayouni"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/23569/avatars/normal/4c2dc35fbb2e0da85969e49592dfd49d.jpg?1420405934"></ui-img>Emir Ayouni</li>
            <li value="Katherine Rainey"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/460187/avatars/normal/eb8e273c036ae93b134b10358c5f19f5.jpg?1418705072"></ui-img>Katherine Rainey</li>
            <li value="Jax Berndt"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/119911/avatars/normal/531fd12e5775ed5ac6a07aea7b492151.jpg?1427986143"></ui-img>Jax Berndt</li>
            <li value="Elizabeth Chiu"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/857412/avatars/normal/8f5f9fbdd66cc70f22304f2ed3be4fa1.png?1440078204"></ui-img>Elizabeth Chiu</li>
            <li value="Sara Nicely"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/162566/avatars/normal/1012292_10104881398564961_565325188_n.jpg?1403561573"></ui-img>Sara Nicely</li>
            <li value="Anna Broussard"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/243797/avatars/normal/657a04cfaeca8f6f5bb7ecf64267bc67.jpg?1416007045"></ui-img>Anna Broussard</li>
        </ui-select>
    </div>
    :::

    #### 多选

    :::democode/html
    <div style="width:300px;">
        <ui-select form-name="Select designer" multi-select>
            <li value="Tim Boelaars"><ui-img class="circle" src="https://cdn.dribbble.com/users/2489/avatars/normal/702fb51d7c85c8b61628604762ffc21a.jpg?1444639894"></ui-img>Tim Boelaars</li>
            <li value="Andrew Colin Beck"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/108671/avatars/normal/dadb0bd212cc107ad3a1d1baedc46938.jpg?1416997444"></ui-img>Andrew Colin Beck</li>
            <li value="Gustavo Zambelli"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/60266/avatars/normal/gustavo_avatar.jpg?1402000442"></ui-img>Gustavo Zambelli</li>
            <li value="Victor Erixon"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/96387/avatars/normal/debda2342580bda98269c0165054464c.jpg?1435151464"></ui-img>Victor Erixon</li>
            <li value="Shaun Moynihan"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/2944/avatars/normal/e08c0e446862572facf0e48316d91c8f.png?1429207992"></ui-img>Shaun Moynihan</li>
            <li value="Emir Ayouni"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/23569/avatars/normal/4c2dc35fbb2e0da85969e49592dfd49d.jpg?1420405934"></ui-img>Emir Ayouni</li>
            <li value="Katherine Rainey"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/460187/avatars/normal/eb8e273c036ae93b134b10358c5f19f5.jpg?1418705072"></ui-img>Katherine Rainey</li>
            <li value="Jax Berndt"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/119911/avatars/normal/531fd12e5775ed5ac6a07aea7b492151.jpg?1427986143"></ui-img>Jax Berndt</li>
            <li value="Elizabeth Chiu"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/857412/avatars/normal/8f5f9fbdd66cc70f22304f2ed3be4fa1.png?1440078204"></ui-img>Elizabeth Chiu</li>
            <li value="Sara Nicely"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/162566/avatars/normal/1012292_10104881398564961_565325188_n.jpg?1403561573"></ui-img>Sara Nicely</li>
            <li value="Anna Broussard"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/243797/avatars/normal/657a04cfaeca8f6f5bb7ecf64267bc67.jpg?1416007045"></ui-img>Anna Broussard</li>
        </ui-select>
    </div>
    :::

    #### 可搜索的多选

    :::democode/html
    <div style="width:300px;">
        <ui-select form-name="Select designer" multi-select can-search>
            <li value="Tim Boelaars"><ui-img class="circle" src="https://cdn.dribbble.com/users/2489/avatars/normal/702fb51d7c85c8b61628604762ffc21a.jpg?1444639894"></ui-img>Tim Boelaars</li>
            <li value="Andrew Colin Beck"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/108671/avatars/normal/dadb0bd212cc107ad3a1d1baedc46938.jpg?1416997444"></ui-img>Andrew Colin Beck</li>
            <li value="Gustavo Zambelli"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/60266/avatars/normal/gustavo_avatar.jpg?1402000442"></ui-img>Gustavo Zambelli</li>
            <li value="Victor Erixon"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/96387/avatars/normal/debda2342580bda98269c0165054464c.jpg?1435151464"></ui-img>Victor Erixon</li>
            <li value="Shaun Moynihan"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/2944/avatars/normal/e08c0e446862572facf0e48316d91c8f.png?1429207992"></ui-img>Shaun Moynihan</li>
            <li value="Emir Ayouni"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/23569/avatars/normal/4c2dc35fbb2e0da85969e49592dfd49d.jpg?1420405934"></ui-img>Emir Ayouni</li>
            <li value="Katherine Rainey"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/460187/avatars/normal/eb8e273c036ae93b134b10358c5f19f5.jpg?1418705072"></ui-img>Katherine Rainey</li>
            <li value="Jax Berndt"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/119911/avatars/normal/531fd12e5775ed5ac6a07aea7b492151.jpg?1427986143"></ui-img>Jax Berndt</li>
            <li value="Elizabeth Chiu"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/857412/avatars/normal/8f5f9fbdd66cc70f22304f2ed3be4fa1.png?1440078204"></ui-img>Elizabeth Chiu</li>
            <li value="Sara Nicely"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/162566/avatars/normal/1012292_10104881398564961_565325188_n.jpg?1403561573"></ui-img>Sara Nicely</li>
            <li value="Anna Broussard"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/243797/avatars/normal/657a04cfaeca8f6f5bb7ecf64267bc67.jpg?1416007045"></ui-img>Anna Broussard</li>
        </ui-select>
    </div>
    :::

    #### 通过`v-for`生成可选项

    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
        data : {
            list : [
                {name : 'Tim Boelaars'},
                {name : 'Andrew Colin Beck'},
                {name : 'Gustavo Zambelli'},
                {name : 'Victor Erixon'},
                {name : 'Shaun Moynihan'},
                {name : 'Emir Ayouni'}
            ]
        }
    });
    ---
    <div style="width:300px;">
        <ui-select form-name="Select designer">
            <li :value="item.name" v-for="item in list">{*item.name*}</li>
        </ui-select>
    </div>
    :::

    [[[形态]]]

    :::preset/html
    formStatus
    ---
    uikey:select
    statusDefaultValue:['Tim Boelaars']
    statusSlot:<li value="Tim Boelaars"><ui-img class="circle" src="https://cdn.dribbble.com/users/2489/avatars/normal/702fb51d7c85c8b61628604762ffc21a.jpg?1444639894"></ui-img>Tim Boelaars</li><li value="Andrew Colin Beck"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/108671/avatars/normal/dadb0bd212cc107ad3a1d1baedc46938.jpg?1416997444"></ui-img>Andrew Colin Beck</li><li value="Gustavo Zambelli"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/60266/avatars/normal/gustavo_avatar.jpg?1402000442"></ui-img>Gustavo Zambelli</li><li value="Victor Erixon"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/96387/avatars/normal/debda2342580bda98269c0165054464c.jpg?1435151464"></ui-img>Victor Erixon</li><li value="Shaun Moynihan"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/2944/avatars/normal/e08c0e446862572facf0e48316d91c8f.png?1429207992"></ui-img>Shaun Moynihan</li><li value="Emir Ayouni"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/23569/avatars/normal/4c2dc35fbb2e0da85969e49592dfd49d.jpg?1420405934"></ui-img>Emir Ayouni</li><li value="Katherine Rainey"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/460187/avatars/normal/eb8e273c036ae93b134b10358c5f19f5.jpg?1418705072"></ui-img>Katherine Rainey</li><li value="Jax Berndt"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/119911/avatars/normal/531fd12e5775ed5ac6a07aea7b492151.jpg?1427986143"></ui-img>Jax Berndt</li><li value="Elizabeth Chiu"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/857412/avatars/normal/8f5f9fbdd66cc70f22304f2ed3be4fa1.png?1440078204"></ui-img>Elizabeth Chiu</li><li value="Sara Nicely"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/162566/avatars/normal/1012292_10104881398564961_565325188_n.jpg?1403561573"></ui-img>Sara Nicely</li><li value="Anna Broussard"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/243797/avatars/normal/657a04cfaeca8f6f5bb7ecf64267bc67.jpg?1416007045"></ui-img>Anna Broussard</li>
    :::

    #### 更多`disabled`状态

    多选及可搜索情况下`disabled`。

    :::democode/html
    <!-- 可搜索情况下disabled -->
    <div style="width:300px;">
        <ui-select disabled :default-value="['Tim Boelaars']" can-search form-name="禁用" >
            <li value="Tim Boelaars"><ui-img class="circle" src="https://cdn.dribbble.com/users/2489/avatars/normal/702fb51d7c85c8b61628604762ffc21a.jpg?1444639894"></ui-img>Tim Boelaars</li>
            <li value="Andrew Colin Beck"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/108671/avatars/normal/dadb0bd212cc107ad3a1d1baedc46938.jpg?1416997444"></ui-img>Andrew Colin Beck</li>
            <li value="Gustavo Zambelli"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/60266/avatars/normal/gustavo_avatar.jpg?1402000442"></ui-img>Gustavo Zambelli</li>
            <li value="Victor Erixon"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/96387/avatars/normal/debda2342580bda98269c0165054464c.jpg?1435151464"></ui-img>Victor Erixon</li>
            <li value="Shaun Moynihan"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/2944/avatars/normal/e08c0e446862572facf0e48316d91c8f.png?1429207992"></ui-img>Shaun Moynihan</li>
            <li value="Emir Ayouni"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/23569/avatars/normal/4c2dc35fbb2e0da85969e49592dfd49d.jpg?1420405934"></ui-img>Emir Ayouni</li>
            <li value="Katherine Rainey"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/460187/avatars/normal/eb8e273c036ae93b134b10358c5f19f5.jpg?1418705072"></ui-img>Katherine Rainey</li>
            <li value="Jax Berndt"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/119911/avatars/normal/531fd12e5775ed5ac6a07aea7b492151.jpg?1427986143"></ui-img>Jax Berndt</li>
            <li value="Elizabeth Chiu"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/857412/avatars/normal/8f5f9fbdd66cc70f22304f2ed3be4fa1.png?1440078204"></ui-img>Elizabeth Chiu</li>
            <li value="Sara Nicely"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/162566/avatars/normal/1012292_10104881398564961_565325188_n.jpg?1403561573"></ui-img>Sara Nicely</li>
            <li value="Anna Broussard"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/243797/avatars/normal/657a04cfaeca8f6f5bb7ecf64267bc67.jpg?1416007045"></ui-img>Anna Broussard</li>
        </ui-select>
    </div>

    <br><br>

    <!-- 多选情况下disabled -->
    <div style="width:300px;">
        <ui-select disabled :default-value="['Tim Boelaars', 'Andrew Colin Beck']" multi-select form-name="禁用" >
            <li value="Tim Boelaars"><ui-img class="circle" src="https://cdn.dribbble.com/users/2489/avatars/normal/702fb51d7c85c8b61628604762ffc21a.jpg?1444639894"></ui-img>Tim Boelaars</li>
            <li value="Andrew Colin Beck"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/108671/avatars/normal/dadb0bd212cc107ad3a1d1baedc46938.jpg?1416997444"></ui-img>Andrew Colin Beck</li>
            <li value="Gustavo Zambelli"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/60266/avatars/normal/gustavo_avatar.jpg?1402000442"></ui-img>Gustavo Zambelli</li>
            <li value="Victor Erixon"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/96387/avatars/normal/debda2342580bda98269c0165054464c.jpg?1435151464"></ui-img>Victor Erixon</li>
            <li value="Shaun Moynihan"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/2944/avatars/normal/e08c0e446862572facf0e48316d91c8f.png?1429207992"></ui-img>Shaun Moynihan</li>
            <li value="Emir Ayouni"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/23569/avatars/normal/4c2dc35fbb2e0da85969e49592dfd49d.jpg?1420405934"></ui-img>Emir Ayouni</li>
            <li value="Katherine Rainey"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/460187/avatars/normal/eb8e273c036ae93b134b10358c5f19f5.jpg?1418705072"></ui-img>Katherine Rainey</li>
            <li value="Jax Berndt"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/119911/avatars/normal/531fd12e5775ed5ac6a07aea7b492151.jpg?1427986143"></ui-img>Jax Berndt</li>
            <li value="Elizabeth Chiu"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/857412/avatars/normal/8f5f9fbdd66cc70f22304f2ed3be4fa1.png?1440078204"></ui-img>Elizabeth Chiu</li>
            <li value="Sara Nicely"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/162566/avatars/normal/1012292_10104881398564961_565325188_n.jpg?1403561573"></ui-img>Sara Nicely</li>
            <li value="Anna Broussard"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/243797/avatars/normal/657a04cfaeca8f6f5bb7ecf64267bc67.jpg?1416007045"></ui-img>Anna Broussard</li>
        </ui-select>
    </div>
    :::
        
    [[[配置]]]

    :::preset/html
    formConfigTable
    ---
    |[align](#align)|内容对齐方式|`'left'` : 左对齐<br>`'center'` : 居中对齐<br>`'right'` : 右对齐|String|`'left'`|
    |[clearable](#clearable)|显示表单清空按钮|`true`<br>`false`|`false`|
    |[prepend](#prepend)|表单前缀|任意字符串(支持HTML)|String|`undefined`|
    |[max-show](#max-show)|下拉列表最多显示几项(超过出现滚动条)|项目数量|Number|`5`|
    |[auto-close](#auto-close)|点击下拉选择框以外的区域自动关闭下拉选择框|`true`<br>`false`|Boolean|`true`|
    |[can-search](#can-search)|允许通过项目内容搜索项目|`true`<br>`false`|Boolean|`false`|
    |[multi-select](#multi-select)|允许选择多个项目|`true`<br>`false`|Boolean|`false`|
    |[can-move](#can-move)|项目是否可以移动|`true`<br>`false`|Boolean|`false`|
    |[max](#max)|允许多选的最大项数，仅在开启`multi-select`后生效，未开启`multi-select`至多只能选择一项|数字|Number|`Infinity`|
    |[clean-btn](#clean-btn)|出现清空按钮，允许清空所选值|`true`<br>`false`|Boolean|`false`|
    |[inline-img-size](#inline-img-size)|项目的缩略图大小(这不会影响选中项目的缩略图大小)|px或em为单位的数值字符串|String|'2em'|
    |[item-tip](#item-tip)|允许为下拉菜单设置提示|`true`<br>`false`|Boolean|`false`|
    |[item-tip-direct](#item-tip-direct)|为下拉菜单设置提示的方向，需要开启`list-tip`才有效|`top`<br>`right`<br>`bottom`<br>`left`|String|`top`|
    :::
    
    :::preset/html
    formConfigDemo
    ---
    uikey:select
    configDefaultValue:['Tim Boelaars']
    configSlot:<li value="Tim Boelaars"><ui-img class="circle" src="https://cdn.dribbble.com/users/2489/avatars/normal/702fb51d7c85c8b61628604762ffc21a.jpg?1444639894"></ui-img>Tim Boelaars</li><li value="Andrew Colin Beck"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/108671/avatars/normal/dadb0bd212cc107ad3a1d1baedc46938.jpg?1416997444"></ui-img>Andrew Colin Beck</li><li value="Gustavo Zambelli"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/60266/avatars/normal/gustavo_avatar.jpg?1402000442"></ui-img>Gustavo Zambelli</li><li value="Victor Erixon"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/96387/avatars/normal/debda2342580bda98269c0165054464c.jpg?1435151464"></ui-img>Victor Erixon</li><li value="Shaun Moynihan"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/2944/avatars/normal/e08c0e446862572facf0e48316d91c8f.png?1429207992"></ui-img>Shaun Moynihan</li><li value="Emir Ayouni"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/23569/avatars/normal/4c2dc35fbb2e0da85969e49592dfd49d.jpg?1420405934"></ui-img>Emir Ayouni</li><li value="Katherine Rainey"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/460187/avatars/normal/eb8e273c036ae93b134b10358c5f19f5.jpg?1418705072"></ui-img>Katherine Rainey</li><li value="Jax Berndt"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/119911/avatars/normal/531fd12e5775ed5ac6a07aea7b492151.jpg?1427986143"></ui-img>Jax Berndt</li><li value="Elizabeth Chiu"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/857412/avatars/normal/8f5f9fbdd66cc70f22304f2ed3be4fa1.png?1440078204"></ui-img>Elizabeth Chiu</li><li value="Sara Nicely"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/162566/avatars/normal/1012292_10104881398564961_565325188_n.jpg?1403561573"></ui-img>Sara Nicely</li><li value="Anna Broussard"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/243797/avatars/normal/657a04cfaeca8f6f5bb7ecf64267bc67.jpg?1416007045"></ui-img>Anna Broussard</li>
    :::

    #### align

    内容居中对齐：
    
    :::democode/html
    <div style="width:300px;">
        <ui-select form-name="Select designer" align="center">
            <li value="Tim Boelaars"><ui-img class="circle" src="https://cdn.dribbble.com/users/2489/avatars/normal/702fb51d7c85c8b61628604762ffc21a.jpg?1444639894"></ui-img>Tim Boelaars</li>
            <li value="Andrew Colin Beck"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/108671/avatars/normal/dadb0bd212cc107ad3a1d1baedc46938.jpg?1416997444"></ui-img>Andrew Colin Beck</li>
            <li value="Gustavo Zambelli"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/60266/avatars/normal/gustavo_avatar.jpg?1402000442"></ui-img>Gustavo Zambelli</li>
            <li value="Victor Erixon"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/96387/avatars/normal/debda2342580bda98269c0165054464c.jpg?1435151464"></ui-img>Victor Erixon</li>
            <li value="Shaun Moynihan"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/2944/avatars/normal/e08c0e446862572facf0e48316d91c8f.png?1429207992"></ui-img>Shaun Moynihan</li>
            <li value="Emir Ayouni"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/23569/avatars/normal/4c2dc35fbb2e0da85969e49592dfd49d.jpg?1420405934"></ui-img>Emir Ayouni</li>
            <li value="Katherine Rainey"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/460187/avatars/normal/eb8e273c036ae93b134b10358c5f19f5.jpg?1418705072"></ui-img>Katherine Rainey</li>
            <li value="Jax Berndt"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/119911/avatars/normal/531fd12e5775ed5ac6a07aea7b492151.jpg?1427986143"></ui-img>Jax Berndt</li>
            <li value="Elizabeth Chiu"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/857412/avatars/normal/8f5f9fbdd66cc70f22304f2ed3be4fa1.png?1440078204"></ui-img>Elizabeth Chiu</li>
            <li value="Sara Nicely"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/162566/avatars/normal/1012292_10104881398564961_565325188_n.jpg?1403561573"></ui-img>Sara Nicely</li>
            <li value="Anna Broussard"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/243797/avatars/normal/657a04cfaeca8f6f5bb7ecf64267bc67.jpg?1416007045"></ui-img>Anna Broussard</li>
        </ui-select>
    </div>
    :::

    内容右对齐：
    
    :::democode/html
    <div style="width:300px;">
        <ui-select form-name="Select designer" align="right">
            <li value="Tim Boelaars"><ui-img class="circle" src="https://cdn.dribbble.com/users/2489/avatars/normal/702fb51d7c85c8b61628604762ffc21a.jpg?1444639894"></ui-img>Tim Boelaars</li>
            <li value="Andrew Colin Beck"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/108671/avatars/normal/dadb0bd212cc107ad3a1d1baedc46938.jpg?1416997444"></ui-img>Andrew Colin Beck</li>
            <li value="Gustavo Zambelli"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/60266/avatars/normal/gustavo_avatar.jpg?1402000442"></ui-img>Gustavo Zambelli</li>
            <li value="Victor Erixon"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/96387/avatars/normal/debda2342580bda98269c0165054464c.jpg?1435151464"></ui-img>Victor Erixon</li>
            <li value="Shaun Moynihan"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/2944/avatars/normal/e08c0e446862572facf0e48316d91c8f.png?1429207992"></ui-img>Shaun Moynihan</li>
            <li value="Emir Ayouni"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/23569/avatars/normal/4c2dc35fbb2e0da85969e49592dfd49d.jpg?1420405934"></ui-img>Emir Ayouni</li>
            <li value="Katherine Rainey"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/460187/avatars/normal/eb8e273c036ae93b134b10358c5f19f5.jpg?1418705072"></ui-img>Katherine Rainey</li>
            <li value="Jax Berndt"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/119911/avatars/normal/531fd12e5775ed5ac6a07aea7b492151.jpg?1427986143"></ui-img>Jax Berndt</li>
            <li value="Elizabeth Chiu"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/857412/avatars/normal/8f5f9fbdd66cc70f22304f2ed3be4fa1.png?1440078204"></ui-img>Elizabeth Chiu</li>
            <li value="Sara Nicely"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/162566/avatars/normal/1012292_10104881398564961_565325188_n.jpg?1403561573"></ui-img>Sara Nicely</li>
            <li value="Anna Broussard"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/243797/avatars/normal/657a04cfaeca8f6f5bb7ecf64267bc67.jpg?1416007045"></ui-img>Anna Broussard</li>
        </ui-select>
    </div>
    :::

    #### clearable

    :::democode/html
    <div style="width:300px;">
        <ui-select form-name="Select designer" :default-value="['Tim Boelaars']" :clearable="true">
            <li value="Tim Boelaars"><ui-img class="circle" src="https://cdn.dribbble.com/users/2489/avatars/normal/702fb51d7c85c8b61628604762ffc21a.jpg?1444639894"></ui-img>Tim Boelaars</li>
            <li value="Andrew Colin Beck"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/108671/avatars/normal/dadb0bd212cc107ad3a1d1baedc46938.jpg?1416997444"></ui-img>Andrew Colin Beck</li>
            <li value="Gustavo Zambelli"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/60266/avatars/normal/gustavo_avatar.jpg?1402000442"></ui-img>Gustavo Zambelli</li>
            <li value="Victor Erixon"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/96387/avatars/normal/debda2342580bda98269c0165054464c.jpg?1435151464"></ui-img>Victor Erixon</li>
            <li value="Shaun Moynihan"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/2944/avatars/normal/e08c0e446862572facf0e48316d91c8f.png?1429207992"></ui-img>Shaun Moynihan</li>
            <li value="Emir Ayouni"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/23569/avatars/normal/4c2dc35fbb2e0da85969e49592dfd49d.jpg?1420405934"></ui-img>Emir Ayouni</li>
            <li value="Katherine Rainey"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/460187/avatars/normal/eb8e273c036ae93b134b10358c5f19f5.jpg?1418705072"></ui-img>Katherine Rainey</li>
            <li value="Jax Berndt"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/119911/avatars/normal/531fd12e5775ed5ac6a07aea7b492151.jpg?1427986143"></ui-img>Jax Berndt</li>
            <li value="Elizabeth Chiu"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/857412/avatars/normal/8f5f9fbdd66cc70f22304f2ed3be4fa1.png?1440078204"></ui-img>Elizabeth Chiu</li>
            <li value="Sara Nicely"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/162566/avatars/normal/1012292_10104881398564961_565325188_n.jpg?1403561573"></ui-img>Sara Nicely</li>
            <li value="Anna Broussard"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/243797/avatars/normal/657a04cfaeca8f6f5bb7ecf64267bc67.jpg?1416007045"></ui-img>Anna Broussard</li>
        </ui-select>
    </div>
    :::

    #### prepend

    :::democode/html
    <div style="width:300px;">
        <ui-select form-name="Select designer" prepend="设计师">
            <li value="Tim Boelaars"><ui-img class="circle" src="https://cdn.dribbble.com/users/2489/avatars/normal/702fb51d7c85c8b61628604762ffc21a.jpg?1444639894"></ui-img>Tim Boelaars</li>
            <li value="Andrew Colin Beck"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/108671/avatars/normal/dadb0bd212cc107ad3a1d1baedc46938.jpg?1416997444"></ui-img>Andrew Colin Beck</li>
            <li value="Gustavo Zambelli"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/60266/avatars/normal/gustavo_avatar.jpg?1402000442"></ui-img>Gustavo Zambelli</li>
            <li value="Victor Erixon"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/96387/avatars/normal/debda2342580bda98269c0165054464c.jpg?1435151464"></ui-img>Victor Erixon</li>
            <li value="Shaun Moynihan"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/2944/avatars/normal/e08c0e446862572facf0e48316d91c8f.png?1429207992"></ui-img>Shaun Moynihan</li>
            <li value="Emir Ayouni"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/23569/avatars/normal/4c2dc35fbb2e0da85969e49592dfd49d.jpg?1420405934"></ui-img>Emir Ayouni</li>
            <li value="Katherine Rainey"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/460187/avatars/normal/eb8e273c036ae93b134b10358c5f19f5.jpg?1418705072"></ui-img>Katherine Rainey</li>
            <li value="Jax Berndt"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/119911/avatars/normal/531fd12e5775ed5ac6a07aea7b492151.jpg?1427986143"></ui-img>Jax Berndt</li>
            <li value="Elizabeth Chiu"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/857412/avatars/normal/8f5f9fbdd66cc70f22304f2ed3be4fa1.png?1440078204"></ui-img>Elizabeth Chiu</li>
            <li value="Sara Nicely"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/162566/avatars/normal/1012292_10104881398564961_565325188_n.jpg?1403561573"></ui-img>Sara Nicely</li>
            <li value="Anna Broussard"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/243797/avatars/normal/657a04cfaeca8f6f5bb7ecf64267bc67.jpg?1416007045"></ui-img>Anna Broussard</li>
        </ui-select>
    </div>
    :::

    #### max-show

    下拉列表最多显示两项。
    
    :::democode/html
    <div style="width:300px;">
        <ui-select form-name="Select designer" :max-show="2">
            <li value="Tim Boelaars"><ui-img class="circle" src="https://cdn.dribbble.com/users/2489/avatars/normal/702fb51d7c85c8b61628604762ffc21a.jpg?1444639894"></ui-img>Tim Boelaars</li>
            <li value="Andrew Colin Beck"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/108671/avatars/normal/dadb0bd212cc107ad3a1d1baedc46938.jpg?1416997444"></ui-img>Andrew Colin Beck</li>
            <li value="Gustavo Zambelli"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/60266/avatars/normal/gustavo_avatar.jpg?1402000442"></ui-img>Gustavo Zambelli</li>
            <li value="Victor Erixon"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/96387/avatars/normal/debda2342580bda98269c0165054464c.jpg?1435151464"></ui-img>Victor Erixon</li>
            <li value="Shaun Moynihan"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/2944/avatars/normal/e08c0e446862572facf0e48316d91c8f.png?1429207992"></ui-img>Shaun Moynihan</li>
            <li value="Emir Ayouni"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/23569/avatars/normal/4c2dc35fbb2e0da85969e49592dfd49d.jpg?1420405934"></ui-img>Emir Ayouni</li>
            <li value="Katherine Rainey"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/460187/avatars/normal/eb8e273c036ae93b134b10358c5f19f5.jpg?1418705072"></ui-img>Katherine Rainey</li>
            <li value="Jax Berndt"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/119911/avatars/normal/531fd12e5775ed5ac6a07aea7b492151.jpg?1427986143"></ui-img>Jax Berndt</li>
            <li value="Elizabeth Chiu"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/857412/avatars/normal/8f5f9fbdd66cc70f22304f2ed3be4fa1.png?1440078204"></ui-img>Elizabeth Chiu</li>
            <li value="Sara Nicely"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/162566/avatars/normal/1012292_10104881398564961_565325188_n.jpg?1403561573"></ui-img>Sara Nicely</li>
            <li value="Anna Broussard"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/243797/avatars/normal/657a04cfaeca8f6f5bb7ecf64267bc67.jpg?1416007045"></ui-img>Anna Broussard</li>
        </ui-select>
    </div>
    :::

    #### auto-close

    点击外部区域不会关闭下拉列表。
    
    :::democode/html
    <div style="width:300px;">
        <ui-select form-name="Select designer" :auto-close="false">
            <li value="Tim Boelaars"><ui-img class="circle" src="https://cdn.dribbble.com/users/2489/avatars/normal/702fb51d7c85c8b61628604762ffc21a.jpg?1444639894"></ui-img>Tim Boelaars</li>
            <li value="Andrew Colin Beck"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/108671/avatars/normal/dadb0bd212cc107ad3a1d1baedc46938.jpg?1416997444"></ui-img>Andrew Colin Beck</li>
            <li value="Gustavo Zambelli"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/60266/avatars/normal/gustavo_avatar.jpg?1402000442"></ui-img>Gustavo Zambelli</li>
            <li value="Victor Erixon"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/96387/avatars/normal/debda2342580bda98269c0165054464c.jpg?1435151464"></ui-img>Victor Erixon</li>
            <li value="Shaun Moynihan"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/2944/avatars/normal/e08c0e446862572facf0e48316d91c8f.png?1429207992"></ui-img>Shaun Moynihan</li>
            <li value="Emir Ayouni"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/23569/avatars/normal/4c2dc35fbb2e0da85969e49592dfd49d.jpg?1420405934"></ui-img>Emir Ayouni</li>
            <li value="Katherine Rainey"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/460187/avatars/normal/eb8e273c036ae93b134b10358c5f19f5.jpg?1418705072"></ui-img>Katherine Rainey</li>
            <li value="Jax Berndt"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/119911/avatars/normal/531fd12e5775ed5ac6a07aea7b492151.jpg?1427986143"></ui-img>Jax Berndt</li>
            <li value="Elizabeth Chiu"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/857412/avatars/normal/8f5f9fbdd66cc70f22304f2ed3be4fa1.png?1440078204"></ui-img>Elizabeth Chiu</li>
            <li value="Sara Nicely"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/162566/avatars/normal/1012292_10104881398564961_565325188_n.jpg?1403561573"></ui-img>Sara Nicely</li>
            <li value="Anna Broussard"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/243797/avatars/normal/657a04cfaeca8f6f5bb7ecf64267bc67.jpg?1416007045"></ui-img>Anna Broussard</li>
        </ui-select>
    </div>
    :::

    #### can-search

    :::democode/html
    <div style="width:300px;">
        <ui-select form-name="Select designer" can-search>
            <li value="Tim Boelaars"><ui-img class="circle" src="https://cdn.dribbble.com/users/2489/avatars/normal/702fb51d7c85c8b61628604762ffc21a.jpg?1444639894"></ui-img>Tim Boelaars</li>
            <li value="Andrew Colin Beck"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/108671/avatars/normal/dadb0bd212cc107ad3a1d1baedc46938.jpg?1416997444"></ui-img>Andrew Colin Beck</li>
            <li value="Gustavo Zambelli"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/60266/avatars/normal/gustavo_avatar.jpg?1402000442"></ui-img>Gustavo Zambelli</li>
            <li value="Victor Erixon"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/96387/avatars/normal/debda2342580bda98269c0165054464c.jpg?1435151464"></ui-img>Victor Erixon</li>
            <li value="Shaun Moynihan"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/2944/avatars/normal/e08c0e446862572facf0e48316d91c8f.png?1429207992"></ui-img>Shaun Moynihan</li>
            <li value="Emir Ayouni"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/23569/avatars/normal/4c2dc35fbb2e0da85969e49592dfd49d.jpg?1420405934"></ui-img>Emir Ayouni</li>
            <li value="Katherine Rainey"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/460187/avatars/normal/eb8e273c036ae93b134b10358c5f19f5.jpg?1418705072"></ui-img>Katherine Rainey</li>
            <li value="Jax Berndt"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/119911/avatars/normal/531fd12e5775ed5ac6a07aea7b492151.jpg?1427986143"></ui-img>Jax Berndt</li>
            <li value="Elizabeth Chiu"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/857412/avatars/normal/8f5f9fbdd66cc70f22304f2ed3be4fa1.png?1440078204"></ui-img>Elizabeth Chiu</li>
            <li value="Sara Nicely"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/162566/avatars/normal/1012292_10104881398564961_565325188_n.jpg?1403561573"></ui-img>Sara Nicely</li>
            <li value="Anna Broussard"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/243797/avatars/normal/657a04cfaeca8f6f5bb7ecf64267bc67.jpg?1416007045"></ui-img>Anna Broussard</li>
        </ui-select>
    </div>
    :::

    #### multi-select

    :::democode/html
    <div style="width:300px;">
        <ui-select form-name="Select designer" multi-select>
            <li value="Tim Boelaars"><ui-img class="circle" src="https://cdn.dribbble.com/users/2489/avatars/normal/702fb51d7c85c8b61628604762ffc21a.jpg?1444639894"></ui-img>Tim Boelaars</li>
            <li value="Andrew Colin Beck"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/108671/avatars/normal/dadb0bd212cc107ad3a1d1baedc46938.jpg?1416997444"></ui-img>Andrew Colin Beck</li>
            <li value="Gustavo Zambelli"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/60266/avatars/normal/gustavo_avatar.jpg?1402000442"></ui-img>Gustavo Zambelli</li>
            <li value="Victor Erixon"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/96387/avatars/normal/debda2342580bda98269c0165054464c.jpg?1435151464"></ui-img>Victor Erixon</li>
            <li value="Shaun Moynihan"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/2944/avatars/normal/e08c0e446862572facf0e48316d91c8f.png?1429207992"></ui-img>Shaun Moynihan</li>
            <li value="Emir Ayouni"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/23569/avatars/normal/4c2dc35fbb2e0da85969e49592dfd49d.jpg?1420405934"></ui-img>Emir Ayouni</li>
            <li value="Katherine Rainey"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/460187/avatars/normal/eb8e273c036ae93b134b10358c5f19f5.jpg?1418705072"></ui-img>Katherine Rainey</li>
            <li value="Jax Berndt"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/119911/avatars/normal/531fd12e5775ed5ac6a07aea7b492151.jpg?1427986143"></ui-img>Jax Berndt</li>
            <li value="Elizabeth Chiu"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/857412/avatars/normal/8f5f9fbdd66cc70f22304f2ed3be4fa1.png?1440078204"></ui-img>Elizabeth Chiu</li>
            <li value="Sara Nicely"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/162566/avatars/normal/1012292_10104881398564961_565325188_n.jpg?1403561573"></ui-img>Sara Nicely</li>
            <li value="Anna Broussard"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/243797/avatars/normal/657a04cfaeca8f6f5bb7ecf64267bc67.jpg?1416007045"></ui-img>Anna Broussard</li>
        </ui-select>
    </div>
    :::

    #### can-move

    :::democode/html
    <div style="width:300px;">
        <ui-select form-name="Select designer" :default-value="['Tim Boelaars', 'Andrew Colin Beck', 'Gustavo Zambelli']" multi-select can-move>
            <li value="Tim Boelaars"><ui-img class="circle" src="https://cdn.dribbble.com/users/2489/avatars/normal/702fb51d7c85c8b61628604762ffc21a.jpg?1444639894"></ui-img>Tim Boelaars</li>
            <li value="Andrew Colin Beck"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/108671/avatars/normal/dadb0bd212cc107ad3a1d1baedc46938.jpg?1416997444"></ui-img>Andrew Colin Beck</li>
            <li value="Gustavo Zambelli"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/60266/avatars/normal/gustavo_avatar.jpg?1402000442"></ui-img>Gustavo Zambelli</li>
            <li value="Victor Erixon"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/96387/avatars/normal/debda2342580bda98269c0165054464c.jpg?1435151464"></ui-img>Victor Erixon</li>
            <li value="Shaun Moynihan"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/2944/avatars/normal/e08c0e446862572facf0e48316d91c8f.png?1429207992"></ui-img>Shaun Moynihan</li>
            <li value="Emir Ayouni"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/23569/avatars/normal/4c2dc35fbb2e0da85969e49592dfd49d.jpg?1420405934"></ui-img>Emir Ayouni</li>
            <li value="Katherine Rainey"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/460187/avatars/normal/eb8e273c036ae93b134b10358c5f19f5.jpg?1418705072"></ui-img>Katherine Rainey</li>
            <li value="Jax Berndt"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/119911/avatars/normal/531fd12e5775ed5ac6a07aea7b492151.jpg?1427986143"></ui-img>Jax Berndt</li>
            <li value="Elizabeth Chiu"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/857412/avatars/normal/8f5f9fbdd66cc70f22304f2ed3be4fa1.png?1440078204"></ui-img>Elizabeth Chiu</li>
            <li value="Sara Nicely"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/162566/avatars/normal/1012292_10104881398564961_565325188_n.jpg?1403561573"></ui-img>Sara Nicely</li>
            <li value="Anna Broussard"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/243797/avatars/normal/657a04cfaeca8f6f5bb7ecf64267bc67.jpg?1416007045"></ui-img>Anna Broussard</li>
        </ui-select>
    </div>
    :::

    #### max

    最多选择三项。

    :::democode/html
    <div style="width:300px;">
        <ui-select form-name="Select designer" multi-select :max="3">
            <li value="Tim Boelaars"><ui-img class="circle" src="https://cdn.dribbble.com/users/2489/avatars/normal/702fb51d7c85c8b61628604762ffc21a.jpg?1444639894"></ui-img>Tim Boelaars</li>
            <li value="Andrew Colin Beck"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/108671/avatars/normal/dadb0bd212cc107ad3a1d1baedc46938.jpg?1416997444"></ui-img>Andrew Colin Beck</li>
            <li value="Gustavo Zambelli"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/60266/avatars/normal/gustavo_avatar.jpg?1402000442"></ui-img>Gustavo Zambelli</li>
            <li value="Victor Erixon"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/96387/avatars/normal/debda2342580bda98269c0165054464c.jpg?1435151464"></ui-img>Victor Erixon</li>
            <li value="Shaun Moynihan"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/2944/avatars/normal/e08c0e446862572facf0e48316d91c8f.png?1429207992"></ui-img>Shaun Moynihan</li>
            <li value="Emir Ayouni"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/23569/avatars/normal/4c2dc35fbb2e0da85969e49592dfd49d.jpg?1420405934"></ui-img>Emir Ayouni</li>
            <li value="Katherine Rainey"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/460187/avatars/normal/eb8e273c036ae93b134b10358c5f19f5.jpg?1418705072"></ui-img>Katherine Rainey</li>
            <li value="Jax Berndt"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/119911/avatars/normal/531fd12e5775ed5ac6a07aea7b492151.jpg?1427986143"></ui-img>Jax Berndt</li>
            <li value="Elizabeth Chiu"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/857412/avatars/normal/8f5f9fbdd66cc70f22304f2ed3be4fa1.png?1440078204"></ui-img>Elizabeth Chiu</li>
            <li value="Sara Nicely"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/162566/avatars/normal/1012292_10104881398564961_565325188_n.jpg?1403561573"></ui-img>Sara Nicely</li>
            <li value="Anna Broussard"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/243797/avatars/normal/657a04cfaeca8f6f5bb7ecf64267bc67.jpg?1416007045"></ui-img>Anna Broussard</li>
        </ui-select>
    </div>
    :::

    #### clean-btn

    :::democode/html
    <div style="width:300px;">
        <ui-select form-name="Select designer" :default-value="['Tim Boelaars', 'Andrew Colin Beck']" multi-select clean-btn>
            <li value="Tim Boelaars"><ui-img class="circle" src="https://cdn.dribbble.com/users/2489/avatars/normal/702fb51d7c85c8b61628604762ffc21a.jpg?1444639894"></ui-img>Tim Boelaars</li>
            <li value="Andrew Colin Beck"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/108671/avatars/normal/dadb0bd212cc107ad3a1d1baedc46938.jpg?1416997444"></ui-img>Andrew Colin Beck</li>
            <li value="Gustavo Zambelli"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/60266/avatars/normal/gustavo_avatar.jpg?1402000442"></ui-img>Gustavo Zambelli</li>
            <li value="Victor Erixon"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/96387/avatars/normal/debda2342580bda98269c0165054464c.jpg?1435151464"></ui-img>Victor Erixon</li>
            <li value="Shaun Moynihan"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/2944/avatars/normal/e08c0e446862572facf0e48316d91c8f.png?1429207992"></ui-img>Shaun Moynihan</li>
            <li value="Emir Ayouni"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/23569/avatars/normal/4c2dc35fbb2e0da85969e49592dfd49d.jpg?1420405934"></ui-img>Emir Ayouni</li>
            <li value="Katherine Rainey"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/460187/avatars/normal/eb8e273c036ae93b134b10358c5f19f5.jpg?1418705072"></ui-img>Katherine Rainey</li>
            <li value="Jax Berndt"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/119911/avatars/normal/531fd12e5775ed5ac6a07aea7b492151.jpg?1427986143"></ui-img>Jax Berndt</li>
            <li value="Elizabeth Chiu"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/857412/avatars/normal/8f5f9fbdd66cc70f22304f2ed3be4fa1.png?1440078204"></ui-img>Elizabeth Chiu</li>
            <li value="Sara Nicely"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/162566/avatars/normal/1012292_10104881398564961_565325188_n.jpg?1403561573"></ui-img>Sara Nicely</li>
            <li value="Anna Broussard"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/243797/avatars/normal/657a04cfaeca8f6f5bb7ecf64267bc67.jpg?1416007045"></ui-img>Anna Broussard</li>
        </ui-select>
    </div>
    :::

    #### inline-img-size

    :::democode/html
    <div style="width:300px;">
        <ui-select form-name="Select designer" inline-img-size="50px">
            <li value="Tim Boelaars"><ui-img class="circle" src="https://cdn.dribbble.com/users/2489/avatars/normal/702fb51d7c85c8b61628604762ffc21a.jpg?1444639894"></ui-img>Tim Boelaars</li>
            <li value="Andrew Colin Beck"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/108671/avatars/normal/dadb0bd212cc107ad3a1d1baedc46938.jpg?1416997444"></ui-img>Andrew Colin Beck</li>
            <li value="Gustavo Zambelli"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/60266/avatars/normal/gustavo_avatar.jpg?1402000442"></ui-img>Gustavo Zambelli</li>
            <li value="Victor Erixon"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/96387/avatars/normal/debda2342580bda98269c0165054464c.jpg?1435151464"></ui-img>Victor Erixon</li>
            <li value="Shaun Moynihan"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/2944/avatars/normal/e08c0e446862572facf0e48316d91c8f.png?1429207992"></ui-img>Shaun Moynihan</li>
            <li value="Emir Ayouni"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/23569/avatars/normal/4c2dc35fbb2e0da85969e49592dfd49d.jpg?1420405934"></ui-img>Emir Ayouni</li>
            <li value="Katherine Rainey"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/460187/avatars/normal/eb8e273c036ae93b134b10358c5f19f5.jpg?1418705072"></ui-img>Katherine Rainey</li>
            <li value="Jax Berndt"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/119911/avatars/normal/531fd12e5775ed5ac6a07aea7b492151.jpg?1427986143"></ui-img>Jax Berndt</li>
            <li value="Elizabeth Chiu"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/857412/avatars/normal/8f5f9fbdd66cc70f22304f2ed3be4fa1.png?1440078204"></ui-img>Elizabeth Chiu</li>
            <li value="Sara Nicely"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/162566/avatars/normal/1012292_10104881398564961_565325188_n.jpg?1403561573"></ui-img>Sara Nicely</li>
            <li value="Anna Broussard"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/243797/avatars/normal/657a04cfaeca8f6f5bb7ecf64267bc67.jpg?1416007045"></ui-img>Anna Broussard</li>
        </ui-select>
    </div>
    :::

    #### item-tip

    启用`item-tip`后需要在每个有tip的项目后添加`<div class="item-tip">`元素，元素的内容为提示的内容。

    下面示例中在第一和第二项中加入了提示。

    :::democode/html
    <div style="width:300px;">
        <ui-select form-name="Select designer" item-tip>
            <li value="Tim Boelaars"><ui-img class="circle" src="https://cdn.dribbble.com/users/2489/avatars/normal/702fb51d7c85c8b61628604762ffc21a.jpg?1444639894"></ui-img>Tim Boelaars</li>
            <div class="item-tip"><p>Tim Boelaars</p><img src="https://cdn.dribbble.com/users/2489/avatars/normal/702fb51d7c85c8b61628604762ffc21a.jpg?1444639894"></div>
            <li value="Andrew Colin Beck"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/108671/avatars/normal/dadb0bd212cc107ad3a1d1baedc46938.jpg?1416997444"></ui-img>Andrew Colin Beck</li>
            <div class="item-tip"><p>Andrew Colin Beck</p><img src="https://d13yacurqjgara.cloudfront.net/users/108671/avatars/normal/dadb0bd212cc107ad3a1d1baedc46938.jpg?1416997444"></div>
            <li value="Gustavo Zambelli"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/60266/avatars/normal/gustavo_avatar.jpg?1402000442"></ui-img>Gustavo Zambelli</li>
            <li value="Victor Erixon"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/96387/avatars/normal/debda2342580bda98269c0165054464c.jpg?1435151464"></ui-img>Victor Erixon</li>
            <li value="Shaun Moynihan"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/2944/avatars/normal/e08c0e446862572facf0e48316d91c8f.png?1429207992"></ui-img>Shaun Moynihan</li>
            <li value="Emir Ayouni"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/23569/avatars/normal/4c2dc35fbb2e0da85969e49592dfd49d.jpg?1420405934"></ui-img>Emir Ayouni</li>
            <li value="Katherine Rainey"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/460187/avatars/normal/eb8e273c036ae93b134b10358c5f19f5.jpg?1418705072"></ui-img>Katherine Rainey</li>
            <li value="Jax Berndt"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/119911/avatars/normal/531fd12e5775ed5ac6a07aea7b492151.jpg?1427986143"></ui-img>Jax Berndt</li>
            <li value="Elizabeth Chiu"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/857412/avatars/normal/8f5f9fbdd66cc70f22304f2ed3be4fa1.png?1440078204"></ui-img>Elizabeth Chiu</li>
            <li value="Sara Nicely"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/162566/avatars/normal/1012292_10104881398564961_565325188_n.jpg?1403561573"></ui-img>Sara Nicely</li>
            <li value="Anna Broussard"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/243797/avatars/normal/657a04cfaeca8f6f5bb7ecf64267bc67.jpg?1416007045"></ui-img>Anna Broussard</li>
        </ui-select>
    </div>
    :::

    #### item-tip-direct

    :::democode/html
    <div style="width:300px;">
        <p>上侧出现的提示框</p>
        <ui-select form-name="Select designer" item-tip item-tip-direct="top">
            <li value="Tim Boelaars"><ui-img class="circle" src="https://cdn.dribbble.com/users/2489/avatars/normal/702fb51d7c85c8b61628604762ffc21a.jpg?1444639894"></ui-img>Tim Boelaars</li>
            <div class="item-tip"><p>Tim Boelaars</p><img src="https://cdn.dribbble.com/users/2489/avatars/normal/702fb51d7c85c8b61628604762ffc21a.jpg?1444639894"></div>
            <li value="Andrew Colin Beck"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/108671/avatars/normal/dadb0bd212cc107ad3a1d1baedc46938.jpg?1416997444"></ui-img>Andrew Colin Beck</li>
            <div class="item-tip"><p>Andrew Colin Beck</p><img src="https://d13yacurqjgara.cloudfront.net/users/108671/avatars/normal/dadb0bd212cc107ad3a1d1baedc46938.jpg?1416997444"></div>
            <li value="Gustavo Zambelli"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/60266/avatars/normal/gustavo_avatar.jpg?1402000442"></ui-img>Gustavo Zambelli</li>
            <div class="item-tip"><p>Gustavo Zambelli</p><img src="https://d13yacurqjgara.cloudfront.net/users/60266/avatars/normal/gustavo_avatar.jpg?1402000442"></div>
            <li value="Victor Erixon"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/96387/avatars/normal/debda2342580bda98269c0165054464c.jpg?1435151464"></ui-img>Victor Erixon</li>
            <div class="item-tip"><p>Victor Erixon</p><img src="https://d13yacurqjgara.cloudfront.net/users/96387/avatars/normal/debda2342580bda98269c0165054464c.jpg?1435151464"></div>
            <li value="Shaun Moynihan"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/2944/avatars/normal/e08c0e446862572facf0e48316d91c8f.png?1429207992"></ui-img>Shaun Moynihan</li>
            <div class="item-tip"><p>Shaun Moynihan</p><img src="https://d13yacurqjgara.cloudfront.net/users/2944/avatars/normal/e08c0e446862572facf0e48316d91c8f.png?1429207992"></div>
            <li value="Emir Ayouni"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/23569/avatars/normal/4c2dc35fbb2e0da85969e49592dfd49d.jpg?1420405934"></ui-img>Emir Ayouni</li>
            <div class="item-tip"><p>Emir Ayouni</p><img src="https://d13yacurqjgara.cloudfront.net/users/23569/avatars/normal/4c2dc35fbb2e0da85969e49592dfd49d.jpg?1420405934"></div>
            <li value="Katherine Rainey"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/460187/avatars/normal/eb8e273c036ae93b134b10358c5f19f5.jpg?1418705072"></ui-img>Katherine Rainey</li>
            <div class="item-tip"><p>Katherine Rainey</p><img src="ttps://d13yacurqjgara.cloudfront.net/users/460187/avatars/normal/eb8e273c036ae93b134b10358c5f19f5.jpg?1418705072"></div>
            <li value="Jax Berndt"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/119911/avatars/normal/531fd12e5775ed5ac6a07aea7b492151.jpg?1427986143"></ui-img>Jax Berndt</li>
            <div class="item-tip"><p>Jax Berndt</p><img src="https://d13yacurqjgara.cloudfront.net/users/119911/avatars/normal/531fd12e5775ed5ac6a07aea7b492151.jpg?1427986143"></div>
            <li value="Elizabeth Chiu"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/857412/avatars/normal/8f5f9fbdd66cc70f22304f2ed3be4fa1.png?1440078204"></ui-img>Elizabeth Chiu</li>
            <div class="item-tip"><p>Elizabeth Chiu</p><img src="https://d13yacurqjgara.cloudfront.net/users/857412/avatars/normal/8f5f9fbdd66cc70f22304f2ed3be4fa1.png?1440078204"></div>
            <li value="Sara Nicely"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/162566/avatars/normal/1012292_10104881398564961_565325188_n.jpg?1403561573"></ui-img>Sara Nicely</li>
            <div class="item-tip"><p>Sara Nicely</p><img src="https://d13yacurqjgara.cloudfront.net/users/162566/avatars/normal/1012292_10104881398564961_565325188_n.jpg?1403561573"></div>
            <li value="Anna Broussard"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/243797/avatars/normal/657a04cfaeca8f6f5bb7ecf64267bc67.jpg?1416007045"></ui-img>Anna Broussard</li>
            <div class="item-tip"><p>Anna Broussard</p><img src="https://d13yacurqjgara.cloudfront.net/users/243797/avatars/normal/657a04cfaeca8f6f5bb7ecf64267bc67.jpg?1416007045"></div>
        </ui-select>

        <br><br>
        <p>右侧出现的提示框</p>
        <ui-select form-name="Select designer" item-tip item-tip-direct="right">
            <li value="Tim Boelaars"><ui-img class="circle" src="https://cdn.dribbble.com/users/2489/avatars/normal/702fb51d7c85c8b61628604762ffc21a.jpg?1444639894"></ui-img>Tim Boelaars</li>
            <div class="item-tip"><p>Tim Boelaars</p><img src="https://cdn.dribbble.com/users/2489/avatars/normal/702fb51d7c85c8b61628604762ffc21a.jpg?1444639894"></div>
            <li value="Andrew Colin Beck"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/108671/avatars/normal/dadb0bd212cc107ad3a1d1baedc46938.jpg?1416997444"></ui-img>Andrew Colin Beck</li>
            <div class="item-tip"><p>Andrew Colin Beck</p><img src="https://d13yacurqjgara.cloudfront.net/users/108671/avatars/normal/dadb0bd212cc107ad3a1d1baedc46938.jpg?1416997444"></div>
            <li value="Gustavo Zambelli"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/60266/avatars/normal/gustavo_avatar.jpg?1402000442"></ui-img>Gustavo Zambelli</li>
            <div class="item-tip"><p>Gustavo Zambelli</p><img src="https://d13yacurqjgara.cloudfront.net/users/60266/avatars/normal/gustavo_avatar.jpg?1402000442"></div>
            <li value="Victor Erixon"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/96387/avatars/normal/debda2342580bda98269c0165054464c.jpg?1435151464"></ui-img>Victor Erixon</li>
            <div class="item-tip"><p>Victor Erixon</p><img src="https://d13yacurqjgara.cloudfront.net/users/96387/avatars/normal/debda2342580bda98269c0165054464c.jpg?1435151464"></div>
            <li value="Shaun Moynihan"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/2944/avatars/normal/e08c0e446862572facf0e48316d91c8f.png?1429207992"></ui-img>Shaun Moynihan</li>
            <div class="item-tip"><p>Shaun Moynihan</p><img src="https://d13yacurqjgara.cloudfront.net/users/2944/avatars/normal/e08c0e446862572facf0e48316d91c8f.png?1429207992"></div>
            <li value="Emir Ayouni"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/23569/avatars/normal/4c2dc35fbb2e0da85969e49592dfd49d.jpg?1420405934"></ui-img>Emir Ayouni</li>
            <div class="item-tip"><p>Emir Ayouni</p><img src="https://d13yacurqjgara.cloudfront.net/users/23569/avatars/normal/4c2dc35fbb2e0da85969e49592dfd49d.jpg?1420405934"></div>
            <li value="Katherine Rainey"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/460187/avatars/normal/eb8e273c036ae93b134b10358c5f19f5.jpg?1418705072"></ui-img>Katherine Rainey</li>
            <div class="item-tip"><p>Katherine Rainey</p><img src="ttps://d13yacurqjgara.cloudfront.net/users/460187/avatars/normal/eb8e273c036ae93b134b10358c5f19f5.jpg?1418705072"></div>
            <li value="Jax Berndt"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/119911/avatars/normal/531fd12e5775ed5ac6a07aea7b492151.jpg?1427986143"></ui-img>Jax Berndt</li>
            <div class="item-tip"><p>Jax Berndt</p><img src="https://d13yacurqjgara.cloudfront.net/users/119911/avatars/normal/531fd12e5775ed5ac6a07aea7b492151.jpg?1427986143"></div>
            <li value="Elizabeth Chiu"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/857412/avatars/normal/8f5f9fbdd66cc70f22304f2ed3be4fa1.png?1440078204"></ui-img>Elizabeth Chiu</li>
            <div class="item-tip"><p>Elizabeth Chiu</p><img src="https://d13yacurqjgara.cloudfront.net/users/857412/avatars/normal/8f5f9fbdd66cc70f22304f2ed3be4fa1.png?1440078204"></div>
            <li value="Sara Nicely"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/162566/avatars/normal/1012292_10104881398564961_565325188_n.jpg?1403561573"></ui-img>Sara Nicely</li>
            <div class="item-tip"><p>Sara Nicely</p><img src="https://d13yacurqjgara.cloudfront.net/users/162566/avatars/normal/1012292_10104881398564961_565325188_n.jpg?1403561573"></div>
            <li value="Anna Broussard"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/243797/avatars/normal/657a04cfaeca8f6f5bb7ecf64267bc67.jpg?1416007045"></ui-img>Anna Broussard</li>
            <div class="item-tip"><p>Anna Broussard</p><img src="https://d13yacurqjgara.cloudfront.net/users/243797/avatars/normal/657a04cfaeca8f6f5bb7ecf64267bc67.jpg?1416007045"></div>
        </ui-select>

        <br><br>
        <p>下侧出现的提示框</p>
        <ui-select form-name="Select designer" item-tip item-tip-direct="bottom">
            <li value="Tim Boelaars"><ui-img class="circle" src="https://cdn.dribbble.com/users/2489/avatars/normal/702fb51d7c85c8b61628604762ffc21a.jpg?1444639894"></ui-img>Tim Boelaars</li>
            <div class="item-tip"><p>Tim Boelaars</p><img src="https://cdn.dribbble.com/users/2489/avatars/normal/702fb51d7c85c8b61628604762ffc21a.jpg?1444639894"></div>
            <li value="Andrew Colin Beck"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/108671/avatars/normal/dadb0bd212cc107ad3a1d1baedc46938.jpg?1416997444"></ui-img>Andrew Colin Beck</li>
            <div class="item-tip"><p>Andrew Colin Beck</p><img src="https://d13yacurqjgara.cloudfront.net/users/108671/avatars/normal/dadb0bd212cc107ad3a1d1baedc46938.jpg?1416997444"></div>
            <li value="Gustavo Zambelli"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/60266/avatars/normal/gustavo_avatar.jpg?1402000442"></ui-img>Gustavo Zambelli</li>
            <div class="item-tip"><p>Gustavo Zambelli</p><img src="https://d13yacurqjgara.cloudfront.net/users/60266/avatars/normal/gustavo_avatar.jpg?1402000442"></div>
            <li value="Victor Erixon"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/96387/avatars/normal/debda2342580bda98269c0165054464c.jpg?1435151464"></ui-img>Victor Erixon</li>
            <div class="item-tip"><p>Victor Erixon</p><img src="https://d13yacurqjgara.cloudfront.net/users/96387/avatars/normal/debda2342580bda98269c0165054464c.jpg?1435151464"></div>
            <li value="Shaun Moynihan"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/2944/avatars/normal/e08c0e446862572facf0e48316d91c8f.png?1429207992"></ui-img>Shaun Moynihan</li>
            <div class="item-tip"><p>Shaun Moynihan</p><img src="https://d13yacurqjgara.cloudfront.net/users/2944/avatars/normal/e08c0e446862572facf0e48316d91c8f.png?1429207992"></div>
            <li value="Emir Ayouni"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/23569/avatars/normal/4c2dc35fbb2e0da85969e49592dfd49d.jpg?1420405934"></ui-img>Emir Ayouni</li>
            <div class="item-tip"><p>Emir Ayouni</p><img src="https://d13yacurqjgara.cloudfront.net/users/23569/avatars/normal/4c2dc35fbb2e0da85969e49592dfd49d.jpg?1420405934"></div>
            <li value="Katherine Rainey"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/460187/avatars/normal/eb8e273c036ae93b134b10358c5f19f5.jpg?1418705072"></ui-img>Katherine Rainey</li>
            <div class="item-tip"><p>Katherine Rainey</p><img src="ttps://d13yacurqjgara.cloudfront.net/users/460187/avatars/normal/eb8e273c036ae93b134b10358c5f19f5.jpg?1418705072"></div>
            <li value="Jax Berndt"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/119911/avatars/normal/531fd12e5775ed5ac6a07aea7b492151.jpg?1427986143"></ui-img>Jax Berndt</li>
            <div class="item-tip"><p>Jax Berndt</p><img src="https://d13yacurqjgara.cloudfront.net/users/119911/avatars/normal/531fd12e5775ed5ac6a07aea7b492151.jpg?1427986143"></div>
            <li value="Elizabeth Chiu"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/857412/avatars/normal/8f5f9fbdd66cc70f22304f2ed3be4fa1.png?1440078204"></ui-img>Elizabeth Chiu</li>
            <div class="item-tip"><p>Elizabeth Chiu</p><img src="https://d13yacurqjgara.cloudfront.net/users/857412/avatars/normal/8f5f9fbdd66cc70f22304f2ed3be4fa1.png?1440078204"></div>
            <li value="Sara Nicely"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/162566/avatars/normal/1012292_10104881398564961_565325188_n.jpg?1403561573"></ui-img>Sara Nicely</li>
            <div class="item-tip"><p>Sara Nicely</p><img src="https://d13yacurqjgara.cloudfront.net/users/162566/avatars/normal/1012292_10104881398564961_565325188_n.jpg?1403561573"></div>
            <li value="Anna Broussard"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/243797/avatars/normal/657a04cfaeca8f6f5bb7ecf64267bc67.jpg?1416007045"></ui-img>Anna Broussard</li>
            <div class="item-tip"><p>Anna Broussard</p><img src="https://d13yacurqjgara.cloudfront.net/users/243797/avatars/normal/657a04cfaeca8f6f5bb7ecf64267bc67.jpg?1416007045"></div>
        </ui-select>

        <br><br>
        <p>左侧出现的提示框</p>
        <ui-select form-name="Select designer" item-tip item-tip-direct="left">
            <li value="Tim Boelaars"><ui-img class="circle" src="https://cdn.dribbble.com/users/2489/avatars/normal/702fb51d7c85c8b61628604762ffc21a.jpg?1444639894"></ui-img>Tim Boelaars</li>
            <div class="item-tip"><p>Tim Boelaars</p><img src="https://cdn.dribbble.com/users/2489/avatars/normal/702fb51d7c85c8b61628604762ffc21a.jpg?1444639894"></div>
            <li value="Andrew Colin Beck"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/108671/avatars/normal/dadb0bd212cc107ad3a1d1baedc46938.jpg?1416997444"></ui-img>Andrew Colin Beck</li>
            <div class="item-tip"><p>Andrew Colin Beck</p><img src="https://d13yacurqjgara.cloudfront.net/users/108671/avatars/normal/dadb0bd212cc107ad3a1d1baedc46938.jpg?1416997444"></div>
            <li value="Gustavo Zambelli"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/60266/avatars/normal/gustavo_avatar.jpg?1402000442"></ui-img>Gustavo Zambelli</li>
            <div class="item-tip"><p>Gustavo Zambelli</p><img src="https://d13yacurqjgara.cloudfront.net/users/60266/avatars/normal/gustavo_avatar.jpg?1402000442"></div>
            <li value="Victor Erixon"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/96387/avatars/normal/debda2342580bda98269c0165054464c.jpg?1435151464"></ui-img>Victor Erixon</li>
            <div class="item-tip"><p>Victor Erixon</p><img src="https://d13yacurqjgara.cloudfront.net/users/96387/avatars/normal/debda2342580bda98269c0165054464c.jpg?1435151464"></div>
            <li value="Shaun Moynihan"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/2944/avatars/normal/e08c0e446862572facf0e48316d91c8f.png?1429207992"></ui-img>Shaun Moynihan</li>
            <div class="item-tip"><p>Shaun Moynihan</p><img src="https://d13yacurqjgara.cloudfront.net/users/2944/avatars/normal/e08c0e446862572facf0e48316d91c8f.png?1429207992"></div>
            <li value="Emir Ayouni"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/23569/avatars/normal/4c2dc35fbb2e0da85969e49592dfd49d.jpg?1420405934"></ui-img>Emir Ayouni</li>
            <div class="item-tip"><p>Emir Ayouni</p><img src="https://d13yacurqjgara.cloudfront.net/users/23569/avatars/normal/4c2dc35fbb2e0da85969e49592dfd49d.jpg?1420405934"></div>
            <li value="Katherine Rainey"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/460187/avatars/normal/eb8e273c036ae93b134b10358c5f19f5.jpg?1418705072"></ui-img>Katherine Rainey</li>
            <div class="item-tip"><p>Katherine Rainey</p><img src="ttps://d13yacurqjgara.cloudfront.net/users/460187/avatars/normal/eb8e273c036ae93b134b10358c5f19f5.jpg?1418705072"></div>
            <li value="Jax Berndt"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/119911/avatars/normal/531fd12e5775ed5ac6a07aea7b492151.jpg?1427986143"></ui-img>Jax Berndt</li>
            <div class="item-tip"><p>Jax Berndt</p><img src="https://d13yacurqjgara.cloudfront.net/users/119911/avatars/normal/531fd12e5775ed5ac6a07aea7b492151.jpg?1427986143"></div>
            <li value="Elizabeth Chiu"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/857412/avatars/normal/8f5f9fbdd66cc70f22304f2ed3be4fa1.png?1440078204"></ui-img>Elizabeth Chiu</li>
            <div class="item-tip"><p>Elizabeth Chiu</p><img src="https://d13yacurqjgara.cloudfront.net/users/857412/avatars/normal/8f5f9fbdd66cc70f22304f2ed3be4fa1.png?1440078204"></div>
            <li value="Sara Nicely"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/162566/avatars/normal/1012292_10104881398564961_565325188_n.jpg?1403561573"></ui-img>Sara Nicely</li>
            <div class="item-tip"><p>Sara Nicely</p><img src="https://d13yacurqjgara.cloudfront.net/users/162566/avatars/normal/1012292_10104881398564961_565325188_n.jpg?1403561573"></div>
            <li value="Anna Broussard"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/243797/avatars/normal/657a04cfaeca8f6f5bb7ecf64267bc67.jpg?1416007045"></ui-img>Anna Broussard</li>
            <div class="item-tip"><p>Anna Broussard</p><img src="https://d13yacurqjgara.cloudfront.net/users/243797/avatars/normal/657a04cfaeca8f6f5bb7ecf64267bc67.jpg?1416007045"></div>
        </ui-select>
    </div>
    :::
   
    [[[方法]]]

    :::preset/html
    formMethod
    ---
    uikey:select
    methodValue:['Tim Boelaars']
    methodDefaultValue:['Tim Boelaars']
    methodSlot:<li value="Tim Boelaars"><ui-img class="circle" src="https://cdn.dribbble.com/users/2489/avatars/normal/702fb51d7c85c8b61628604762ffc21a.jpg?1444639894"></ui-img>Tim Boelaars</li><li value="Andrew Colin Beck"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/108671/avatars/normal/dadb0bd212cc107ad3a1d1baedc46938.jpg?1416997444"></ui-img>Andrew Colin Beck</li><li value="Gustavo Zambelli"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/60266/avatars/normal/gustavo_avatar.jpg?1402000442"></ui-img>Gustavo Zambelli</li><li value="Victor Erixon"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/96387/avatars/normal/debda2342580bda98269c0165054464c.jpg?1435151464"></ui-img>Victor Erixon</li><li value="Shaun Moynihan"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/2944/avatars/normal/e08c0e446862572facf0e48316d91c8f.png?1429207992"></ui-img>Shaun Moynihan</li><li value="Emir Ayouni"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/23569/avatars/normal/4c2dc35fbb2e0da85969e49592dfd49d.jpg?1420405934"></ui-img>Emir Ayouni</li><li value="Katherine Rainey"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/460187/avatars/normal/eb8e273c036ae93b134b10358c5f19f5.jpg?1418705072"></ui-img>Katherine Rainey</li><li value="Jax Berndt"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/119911/avatars/normal/531fd12e5775ed5ac6a07aea7b492151.jpg?1427986143"></ui-img>Jax Berndt</li><li value="Elizabeth Chiu"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/857412/avatars/normal/8f5f9fbdd66cc70f22304f2ed3be4fa1.png?1440078204"></ui-img>Elizabeth Chiu</li><li value="Sara Nicely"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/162566/avatars/normal/1012292_10104881398564961_565325188_n.jpg?1403561573"></ui-img>Sara Nicely</li><li value="Anna Broussard"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/243797/avatars/normal/657a04cfaeca8f6f5bb7ecf64267bc67.jpg?1416007045"></ui-img>Anna Broussard</li>
    :::

    #### toggle([show])

    切换下拉选择框的下拉列表是否显示。
    
    |KEY|可选|描述|接受值|值类型|默认值|
    |-|-|-|-|-|-|
    |show|YES|下拉列表需要切换到隐藏或显示，若不设置则切换到相反的状态。|`undefined`<br>`true`<br>`false`|`Undefined`<br>`Boolean`|`undefined`|

    :::democode/html
    <div style="width:300px;">
        <ui-select ref="demo1" form-name="Select designer" :auto-close="false">
            <li value="Tim Boelaars"><ui-img class="circle" src="https://cdn.dribbble.com/users/2489/avatars/normal/702fb51d7c85c8b61628604762ffc21a.jpg?1444639894"></ui-img>Tim Boelaars</li>
            <li value="Andrew Colin Beck"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/108671/avatars/normal/dadb0bd212cc107ad3a1d1baedc46938.jpg?1416997444"></ui-img>Andrew Colin Beck</li>
            <li value="Gustavo Zambelli"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/60266/avatars/normal/gustavo_avatar.jpg?1402000442"></ui-img>Gustavo Zambelli</li>
            <li value="Victor Erixon"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/96387/avatars/normal/debda2342580bda98269c0165054464c.jpg?1435151464"></ui-img>Victor Erixon</li>
            <li value="Shaun Moynihan"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/2944/avatars/normal/e08c0e446862572facf0e48316d91c8f.png?1429207992"></ui-img>Shaun Moynihan</li>
            <li value="Emir Ayouni"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/23569/avatars/normal/4c2dc35fbb2e0da85969e49592dfd49d.jpg?1420405934"></ui-img>Emir Ayouni</li>
            <li value="Katherine Rainey"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/460187/avatars/normal/eb8e273c036ae93b134b10358c5f19f5.jpg?1418705072"></ui-img>Katherine Rainey</li>
            <li value="Jax Berndt"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/119911/avatars/normal/531fd12e5775ed5ac6a07aea7b492151.jpg?1427986143"></ui-img>Jax Berndt</li>
            <li value="Elizabeth Chiu"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/857412/avatars/normal/8f5f9fbdd66cc70f22304f2ed3be4fa1.png?1440078204"></ui-img>Elizabeth Chiu</li>
            <li value="Sara Nicely"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/162566/avatars/normal/1012292_10104881398564961_565325188_n.jpg?1403561573"></ui-img>Sara Nicely</li>
            <li value="Anna Broussard"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/243797/avatars/normal/657a04cfaeca8f6f5bb7ecf64267bc67.jpg?1416007045"></ui-img>Anna Broussard</li>
        </ui-select>

        <br><br>

        <ui-link js="window.morning.findVM('demo1').toggle(true);">显示下拉列表</ui-link>
        <ui-link js="window.morning.findVM('demo1').toggle(false);">隐藏下拉列表</ui-link>
        <ui-link js="window.morning.findVM('demo1').toggle();">切换到反向状态</ui-link>
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
        <ui-select ref="demo2" form-name="Select designer" @list-show="echo">
            <li value="Tim Boelaars"><ui-img class="circle" src="https://cdn.dribbble.com/users/2489/avatars/normal/702fb51d7c85c8b61628604762ffc21a.jpg?1444639894"></ui-img>Tim Boelaars</li>
            <li value="Andrew Colin Beck"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/108671/avatars/normal/dadb0bd212cc107ad3a1d1baedc46938.jpg?1416997444"></ui-img>Andrew Colin Beck</li>
            <li value="Gustavo Zambelli"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/60266/avatars/normal/gustavo_avatar.jpg?1402000442"></ui-img>Gustavo Zambelli</li>
            <li value="Victor Erixon"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/96387/avatars/normal/debda2342580bda98269c0165054464c.jpg?1435151464"></ui-img>Victor Erixon</li>
            <li value="Shaun Moynihan"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/2944/avatars/normal/e08c0e446862572facf0e48316d91c8f.png?1429207992"></ui-img>Shaun Moynihan</li>
            <li value="Emir Ayouni"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/23569/avatars/normal/4c2dc35fbb2e0da85969e49592dfd49d.jpg?1420405934"></ui-img>Emir Ayouni</li>
            <li value="Katherine Rainey"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/460187/avatars/normal/eb8e273c036ae93b134b10358c5f19f5.jpg?1418705072"></ui-img>Katherine Rainey</li>
            <li value="Jax Berndt"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/119911/avatars/normal/531fd12e5775ed5ac6a07aea7b492151.jpg?1427986143"></ui-img>Jax Berndt</li>
            <li value="Elizabeth Chiu"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/857412/avatars/normal/8f5f9fbdd66cc70f22304f2ed3be4fa1.png?1440078204"></ui-img>Elizabeth Chiu</li>
            <li value="Sara Nicely"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/162566/avatars/normal/1012292_10104881398564961_565325188_n.jpg?1403561573"></ui-img>Sara Nicely</li>
            <li value="Anna Broussard"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/243797/avatars/normal/657a04cfaeca8f6f5bb7ecf64267bc67.jpg?1416007045"></ui-img>Anna Broussard</li>
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
        <ui-select ref="demo3" form-name="Select designer" @list-hide="echo">
            <li value="Tim Boelaars"><ui-img class="circle" src="https://cdn.dribbble.com/users/2489/avatars/normal/702fb51d7c85c8b61628604762ffc21a.jpg?1444639894"></ui-img>Tim Boelaars</li>
            <li value="Andrew Colin Beck"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/108671/avatars/normal/dadb0bd212cc107ad3a1d1baedc46938.jpg?1416997444"></ui-img>Andrew Colin Beck</li>
            <li value="Gustavo Zambelli"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/60266/avatars/normal/gustavo_avatar.jpg?1402000442"></ui-img>Gustavo Zambelli</li>
            <li value="Victor Erixon"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/96387/avatars/normal/debda2342580bda98269c0165054464c.jpg?1435151464"></ui-img>Victor Erixon</li>
            <li value="Shaun Moynihan"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/2944/avatars/normal/e08c0e446862572facf0e48316d91c8f.png?1429207992"></ui-img>Shaun Moynihan</li>
            <li value="Emir Ayouni"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/23569/avatars/normal/4c2dc35fbb2e0da85969e49592dfd49d.jpg?1420405934"></ui-img>Emir Ayouni</li>
            <li value="Katherine Rainey"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/460187/avatars/normal/eb8e273c036ae93b134b10358c5f19f5.jpg?1418705072"></ui-img>Katherine Rainey</li>
            <li value="Jax Berndt"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/119911/avatars/normal/531fd12e5775ed5ac6a07aea7b492151.jpg?1427986143"></ui-img>Jax Berndt</li>
            <li value="Elizabeth Chiu"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/857412/avatars/normal/8f5f9fbdd66cc70f22304f2ed3be4fa1.png?1440078204"></ui-img>Elizabeth Chiu</li>
            <li value="Sara Nicely"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/162566/avatars/normal/1012292_10104881398564961_565325188_n.jpg?1403561573"></ui-img>Sara Nicely</li>
            <li value="Anna Broussard"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/243797/avatars/normal/657a04cfaeca8f6f5bb7ecf64267bc67.jpg?1416007045"></ui-img>Anna Broussard</li>
        </ui-select>
    </div>
    :::

    :::preset/html
    formEvent
    ---
    uikey:select
    eventValue:['Tim Boelaars']
    eventSlot:<li value="Tim Boelaars"><ui-img class="circle" src="https://cdn.dribbble.com/users/2489/avatars/normal/702fb51d7c85c8b61628604762ffc21a.jpg?1444639894"></ui-img>Tim Boelaars</li><li value="Andrew Colin Beck"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/108671/avatars/normal/dadb0bd212cc107ad3a1d1baedc46938.jpg?1416997444"></ui-img>Andrew Colin Beck</li><li value="Gustavo Zambelli"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/60266/avatars/normal/gustavo_avatar.jpg?1402000442"></ui-img>Gustavo Zambelli</li><li value="Victor Erixon"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/96387/avatars/normal/debda2342580bda98269c0165054464c.jpg?1435151464"></ui-img>Victor Erixon</li><li value="Shaun Moynihan"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/2944/avatars/normal/e08c0e446862572facf0e48316d91c8f.png?1429207992"></ui-img>Shaun Moynihan</li><li value="Emir Ayouni"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/23569/avatars/normal/4c2dc35fbb2e0da85969e49592dfd49d.jpg?1420405934"></ui-img>Emir Ayouni</li><li value="Katherine Rainey"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/460187/avatars/normal/eb8e273c036ae93b134b10358c5f19f5.jpg?1418705072"></ui-img>Katherine Rainey</li><li value="Jax Berndt"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/119911/avatars/normal/531fd12e5775ed5ac6a07aea7b492151.jpg?1427986143"></ui-img>Jax Berndt</li><li value="Elizabeth Chiu"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/857412/avatars/normal/8f5f9fbdd66cc70f22304f2ed3be4fa1.png?1440078204"></ui-img>Elizabeth Chiu</li><li value="Sara Nicely"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/162566/avatars/normal/1012292_10104881398564961_565325188_n.jpg?1403561573"></ui-img>Sara Nicely</li><li value="Anna Broussard"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/243797/avatars/normal/657a04cfaeca8f6f5bb7ecf64267bc67.jpg?1416007045"></ui-img>Anna Broussard</li>
    :::


    [[[表单值]]]

    #### 值类型
    
    `Array` : 数组

    #### 值过滤

    - 所有不支持的值类型，都会被尝试转换成空数组(`[]`)。
    - 若数组中的键值不在可选列表内，会被过滤。
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
            <ui-select ref="demoType{$valueType}">
                <li value="Tim Boelaars"><ui-img class="circle" src="https://cdn.dribbble.com/users/2489/avatars/normal/702fb51d7c85c8b61628604762ffc21a.jpg?1444639894"></ui-img>Tim Boelaars</li>
                <li value="Andrew Colin Beck"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/108671/avatars/normal/dadb0bd212cc107ad3a1d1baedc46938.jpg?1416997444"></ui-img>Andrew Colin Beck</li>
                <li value="Gustavo Zambelli"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/60266/avatars/normal/gustavo_avatar.jpg?1402000442"></ui-img>Gustavo Zambelli</li>
                <li value="Victor Erixon"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/96387/avatars/normal/debda2342580bda98269c0165054464c.jpg?1435151464"></ui-img>Victor Erixon</li>
                <li value="Shaun Moynihan"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/2944/avatars/normal/e08c0e446862572facf0e48316d91c8f.png?1429207992"></ui-img>Shaun Moynihan</li>
                <li value="Emir Ayouni"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/23569/avatars/normal/4c2dc35fbb2e0da85969e49592dfd49d.jpg?1420405934"></ui-img>Emir Ayouni</li>
                <li value="Katherine Rainey"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/460187/avatars/normal/eb8e273c036ae93b134b10358c5f19f5.jpg?1418705072"></ui-img>Katherine Rainey</li>
                <li value="Jax Berndt"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/119911/avatars/normal/531fd12e5775ed5ac6a07aea7b492151.jpg?1427986143"></ui-img>Jax Berndt</li>
                <li value="Elizabeth Chiu"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/857412/avatars/normal/8f5f9fbdd66cc70f22304f2ed3be4fa1.png?1440078204"></ui-img>Elizabeth Chiu</li>
                <li value="Sara Nicely"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/162566/avatars/normal/1012292_10104881398564961_565325188_n.jpg?1403561573"></ui-img>Sara Nicely</li>
                <li value="Anna Broussard"><ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/243797/avatars/normal/657a04cfaeca8f6f5bb7ecf64267bc67.jpg?1416007045"></ui-img>Anna Broussard</li>
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

    <iframe src="/report/coverage/lib/components/select/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>

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
