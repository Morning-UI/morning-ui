<template>

    <doc-design
        :page="page"
        :hasPadding="true" 
    >
    <script type="text/markdown">

    # 色彩

    Morning UI采用了一套特定的色板来规定使用的颜色，这可以为你的产品提供一致的视觉感受，这套颜色分为：`主色`、`功能色`、`中性色`。

    #### 主色

    UI的主色彩，Morning默认采用红色，使用者可以自己定义主题色。

    页面中尽量不要大面积使用，容易产生冲突和混淆。

    <div class="colorFlex">
        <div class="item w3" style="background:#F86F88;">
            <p class="key">light-theme</p>
            <p class="name">浅主题色</p>
            <p class="color">#F86F88</p>
        </div>
        <div class="item w3" style="background:#F33D5D;">
            <p class="key">theme</p>
            <p class="name">主题色</p>
            <p class="color">#F33D5D</p>
        </div>
        <div class="item w3" style="background:#D22343;">
            <p class="key">dark-theme</p>
            <p class="name">深主题色</p>
            <p class="color">#D22343</p>
        </div>
    </div>

    #### 功能色

    功能色具有一定的含义，可以用在特定的场景，比如绿色表示成功，黄色表示警告。

    <div class="colorFlex">
        <div class="item w3" style="background:#1EB818;">
            <p class="key">success</p>
            <p class="name">成功/正确</p>
            <p class="color">#1EB818</p>
        </div>
        <div class="item w3" style="background:#FA9428;">
            <p class="key">warning</p>
            <p class="name">警告/注意</p>
            <p class="color">#FA9428</p>
        </div>
        <div class="item w3" style="background:#FA2833;">
            <p class="key">danger</p>
            <p class="name">错误/危险</p>
            <p class="color">#FA2833</p>
        </div>
    </div>
    
    <div class="colorFlex">
        <div class="item w3" style="background:#2879FA;">
            <p class="key">primary</p>
            <p class="name">主要/关键</p>
            <p class="color">#2879FA</p>
        </div>
        <div class="item w3" style="background:#B2B2B2;">
            <p class="key">minor</p>
            <p class="name">次要/不醒目</p>
            <p class="color">#B2B2B2</p>
        </div>
        <div class="item w3" style="background:#18B8B6;">
            <p class="key">info</p>
            <p class="name">信息/额外</p>
            <p class="color">#18B8B6</p>
        </div>
    </div>

    #### 中性色

    灰色是中性化的颜色，可传递“沉稳、专业、系统”的感情色彩。适用于文字、背景、边框颜色，运用不同的中性色，来表现层次结构。

    <div class="colorFlex">
        <div class="item w11 group">
            <div class="item" style="background:#333333">
                <p class="key">neutral-11</p>
                <p class="color">#333333</p>
            </div>
            <div class="item" style="background:#4C4C4C">
                <p class="key">neutral-10</p>
                <p class="color">#4C4C4C</p>
            </div>
            <div class="item" style="background:#666666">
                <p class="key">neutral-9</p>
                <p class="color">#666666</p>
            </div>
            <div class="item" style="background:#7F7F7F">
                <p class="key">neutral-8</p>
                <p class="color">#7F7F7F</p>
            </div>
            <div class="item" style="background:#999999">
                <p class="key">neutral-7</p>
                <p class="color">#999999</p>
            </div>
            <div class="item" style="background:#B2B2B2">
                <p class="key">neutral-6</p>
                <p class="color">#B2B2B2</p>
            </div>
            <div class="item" style="background:#CCCCCC;color:#000">
                <p class="key">neutral-5</p>
                <p class="color">#CCCCCC</p>
            </div>
            <div class="item" style="background:#D9D9D9;color:#000">
                <p class="key">neutral-4</p>
            <p class="color">#D9D9D9</p>
            </div>
            <div class="item" style="background:#E0E0E0;color:#000">
                <p class="key">neutral-3</p>
                <p class="color">#E0E0E0</p>
            </div>
            <div class="item" style="background:#E5E5E5;color:#000">
                <p class="key">neutral-2</p>
                <p class="color">#E5E5E5</p>
            </div>
            <div class="item" style="background:#F0F0F0;color:#000">
                <p class="key">neutral-1</p>
                <p class="color">#F0F0F0</p>
            </div>
        </div>
    </div>

    <div class="colorFlex" style="margin-top:15px;">
        <div class="item w3" style="background:#FFFFFF;color: #000;border: 1px #CCC solid;">
            <p class="key">white</p>
            <p class="name">纯白</p>
            <p class="color">#FFFFFF</p>
        </div>
        <div class="item w3" style="background:#000000;color: #FFF">
            <p class="key">black</p>
            <p class="name">纯黑</p>
            <p class="color">#000000</p>
        </div>
        <div class="item w3" style="background:transparent;color: #000;border: 1px #ff2a4f solid;position: relative;">
            <span class="line"></span>
            <p class="key">transparent</p>
            <p class="name">透明</p>
            <p class="color">Transparent</p>
        </div>
    </div>

    <br>
    
    #### 使用

    在组件中使用：

    - 请查看[形态/色彩](/guide/status.html#色彩)

    在组件之外使用：

    - 通过CSS类，请查看：[配色](/component/uniformcolor.html)
    - 使用色值，请查看：[设计/色彩](/design/color.html)

    </script>
    </doc-design>

</template>

<script>
import DocDesign                   from 'Docs/common/DocDesign.vue';

export default {
    data : function () {

        return {
            page : 'color'
        };

    },
    components : {
        'doc-design' : DocDesign
    }
};
</script>

<style lang="less">
.colorFlex{
    display: flex;
    justify-content: space-between;
    margin: 5px 0;

    .item{
        color: #FFF;
        padding: 20px;
        box-sizing: border-box;
        position: relative;

        &.colorDark{
            color: #000;
        }

        p{
            margin: 2px 0;
            font-size: 13px;

            &.color{
                text-transform: uppercase;
            }
        }

        .line{
            width: 268px;
            height: 1px;
            display: block;
            background: #ff2a4f;
            position: absolute;
            left: -11px;
            top: 50%;
            transform: rotate(-22.8deg);
            z-index: 0;
        }
    }

    .group{
        padding: 0;

        &.colorDark{
            .item {
                color: #000;
            }
        }
    }

    .w3{
        width: 31%;
    }

    .w4{
        width: 23%;

        .item{
            height: 105px;
        }
    }

    .w11{
        width: 100%;
        flex-direction: row;
        flex-wrap: nowrap;
        display: flex;

        .item{
            height: 95px;
            padding: 20px 5px;
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
    }
}
</style>
