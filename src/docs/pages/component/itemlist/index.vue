<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 项目列表 `<ui-itemlist>`
    
    <doc-component-status page="itemlist"></doc-component-status>

    [[[开始]]]

    定义项目列表组件，项目列表中的每一项包含图片及文字内容，这是一个块级元素。

    :::vue
    @name:使用
    ---
    #demo
    >desc
    项目列表可包含：
    <br><br>
    - 缩略图 `img`
    - 标题 `.title`
    - 描述 `.desc`
    - 主体内容 `.body`
    - 附加信息 `.additional`
    >tpl
    <div style="width:400px">
        <ui-itemlist>
            <ui-ul>
                <li>
                    <ui-img class="img" src="http://morning-ui-image.test.upcdn.net/48fc612216b4fd2112a6bcd7d0db6eba.jpeg"></ui-img>
                    <h3 class="title">Header</h3>
                    <p class="desc">Description</p>
                    <div class="body">Body</div>
                    <div class="additional">Additional Details</div> 
                </li>
                <li>
                    <ui-img class="img" src="http://morning-ui-image.test.upcdn.net/48fc612216b4fd2112a6bcd7d0db6eba.jpeg"></ui-img>
                    <h3 class="title">Header</h3>
                    <p class="desc">Description</p>
                    <div class="body">Body</div>
                    <div class="additional">Additional Details</div> 
                </li>
                <li>
                    <ui-img class="img" src="http://morning-ui-image.test.upcdn.net/48fc612216b4fd2112a6bcd7d0db6eba.jpeg"></ui-img>
                    <h3 class="title">Header</h3>
                    <p class="desc">Description</p>
                    <div class="body">Body</div>
                    <div class="additional">Additional Details</div> 
                </li>
            </ui-ul>
        </ui-itemlist>
    </div>
    :::

    :::vue
    @name:下划线分隔
    ---
    #demo
    >desc
    添加`underline`样式类可添加下划线分隔。
    >tpl
    <div style="width:400px">
        <ui-itemlist class="underline">
            <ui-ul>
                <li>
                    <ui-img class="img" src="http://morning-ui-image.test.upcdn.net/48fc612216b4fd2112a6bcd7d0db6eba.jpeg"></ui-img>
                    <h3 class="title">Header</h3>
                    <p class="desc">Description</p>
                    <div class="body">Body</div>
                    <div class="additional">Additional Details</div> 
                </li>
                <li>
                    <ui-img class="img" src="http://morning-ui-image.test.upcdn.net/48fc612216b4fd2112a6bcd7d0db6eba.jpeg"></ui-img>
                    <h3 class="title">Header</h3>
                    <p class="desc">Description</p>
                    <div class="body">Body</div>
                    <div class="additional">Additional Details</div> 
                </li>
                <li>
                    <ui-img class="img" src="http://morning-ui-image.test.upcdn.net/48fc612216b4fd2112a6bcd7d0db6eba.jpeg"></ui-img>
                    <h3 class="title">Header</h3>
                    <p class="desc">Description</p>
                    <div class="body">Body</div>
                    <div class="additional">Additional Details</div> 
                </li>
            </ui-ul>
        </ui-itemlist>
    </div>
    :::

    :::vue
    @name:单行标题
    ---
    #demo
    >tpl
    <div style="width:400px">
        <ui-itemlist xs>
            <ui-ul>
                <li>
                    <ui-img class="img" src="http://morning-ui-image.test.upcdn.net/48fc612216b4fd2112a6bcd7d0db6eba.jpeg"></ui-img>
                    <h3 class="title">Header</h3>
                </li>
                <li>
                    <ui-img class="img" src="http://morning-ui-image.test.upcdn.net/48fc612216b4fd2112a6bcd7d0db6eba.jpeg"></ui-img>
                    <h3 class="title">Header</h3>
                </li>
                <li>
                    <ui-img class="img" src="http://morning-ui-image.test.upcdn.net/48fc612216b4fd2112a6bcd7d0db6eba.jpeg"></ui-img>
                    <h3 class="title">Header</h3>
                </li>
            </ui-ul>
        </ui-itemlist>
    </div>
    :::

    :::vue
    @name:单行内容
    ---
    #demo
    >tpl
    <div style="width:400px">
        <ui-itemlist xs>
            <ui-ul>
                <li>
                    <ui-img class="img" src="http://morning-ui-image.test.upcdn.net/48fc612216b4fd2112a6bcd7d0db6eba.jpeg"></ui-img>
                    <div class="body">Body</div>
                </li>
                <li>
                    <ui-img class="img" src="http://morning-ui-image.test.upcdn.net/48fc612216b4fd2112a6bcd7d0db6eba.jpeg"></ui-img>
                    <div class="body">Body</div>
                </li>
                <li>
                    <ui-img class="img" src="http://morning-ui-image.test.upcdn.net/48fc612216b4fd2112a6bcd7d0db6eba.jpeg"></ui-img>
                    <div class="body">Body</div>
                </li>
            </ui-ul>
        </ui-itemlist>
    </div>
    :::

    :::vue
    @name:无图片
    ---
    #demo
    >tpl
    <div style="width:400px">
        <ui-itemlist>
            <ui-ul>
                <li>
                    <h3 class="title">Header</h3>
                    <p class="desc">Description</p>
                    <div class="body">Body</div>
                    <div class="additional">Additional Details</div> 
                </li>
                <li>
                    <h3 class="title">Header</h3>
                    <p class="desc">Description</p>
                    <div class="body">Body</div>
                    <div class="additional">Additional Details</div> 
                </li>
                <li>
                    <h3 class="title">Header</h3>
                    <p class="desc">Description</p>
                    <div class="body">Body</div>
                    <div class="additional">Additional Details</div> 
                </li>
            </ui-ul>
        </ui-itemlist>
    </div>
    :::
    
    :::vue
    @name:配合`ui-label`
    ---
    #demo
    >tpl
    <div style="width:400px">
        <ui-itemlist>
            <ui-ul>
                <li>
                    <ui-img class="img" src="http://morning-ui-image.test.upcdn.net/48fc612216b4fd2112a6bcd7d0db6eba.jpeg"></ui-img>
                    <h3 class="title">Header</h3>
                    <p class="desc">Description</p>
                    <div class="body">Body</div>
                    <div class="additional">
                        <ui-label s minor>Normal</ui-label>
                    </div> 
                </li>
                <li>
                    <ui-img class="img" src="http://morning-ui-image.test.upcdn.net/48fc612216b4fd2112a6bcd7d0db6eba.jpeg"></ui-img>
                    <h3 class="title">Header</h3>
                    <p class="desc">Description</p>
                    <div class="body">Body</div>
                    <div class="additional">
                        <ui-label s danger>High</ui-label>
                    </div> 
                </li>
                <li>
                    <ui-img class="img" src="http://morning-ui-image.test.upcdn.net/48fc612216b4fd2112a6bcd7d0db6eba.jpeg"></ui-img>
                    <h3 class="title">Header</h3>
                    <p class="desc">Description</p>
                    <div class="body">Body</div>
                    <div class="additional">
                        <ui-label s minor>Normal</ui-label>
                    </div> 
                </li>
            </ui-ul>
        </ui-itemlist>
    </div>
    :::

    [[[形态]]]

    #### 支持

    |类型|支持|默认|
    |-|-|-|
    |尺寸|全部|`m`|
    |色彩|不支持|-|
    |状态|不支持|-|

    <a href="/guide/status.html">查看形态文档</a>

    #### 尺寸
    
    :::repeat/html
    size
    ---
    <div style="width:400px">
        <ui-itemlist size="{$sizeKey}">
            <ui-ul>
                <li>
                    <ui-img class="img" src="http://morning-ui-image.test.upcdn.net/48fc612216b4fd2112a6bcd7d0db6eba.jpeg"></ui-img>
                    <h3 class="title">{$&sizeName}</h3>
                    <p class="desc">Description</p>
                    <div class="body">Body</div>
                    <div class="additional">Additional Details</div> 
                </li>
                <li>
                    <ui-img class="img" src="http://morning-ui-image.test.upcdn.net/48fc612216b4fd2112a6bcd7d0db6eba.jpeg"></ui-img>
                    <h3 class="title">{$&sizeName}</h3>
                    <p class="desc">Description</p>
                    <div class="body">Body</div>
                    <div class="additional">Additional Details</div> 
                </li>
                <li>
                    <ui-img class="img" src="http://morning-ui-image.test.upcdn.net/48fc612216b4fd2112a6bcd7d0db6eba.jpeg"></ui-img>
                    <h3 class="title">{$&sizeName}</h3>
                    <p class="desc">Description</p>
                    <div class="body">Body</div>
                    <div class="additional">Additional Details</div> 
                </li>
            </ui-ul>
        </ui-itemlist>
    </div>
    <br><br>
    :::

    [[[源码]]]

    <iframe src="/report/coverage/lib/components/itemlist/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>
    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'itemlist'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
