<template>
    <doc-component
        :page="page"
        :hasPadding="true" 
    >
    <script type="text/markdown">
    # 图标

    Morning UI内置了一套常用的图标库。
    
    ## 使用

    通过`<i></i>`和以`mo-icon`为前缀的类名来使用，比如：

    :::democode/html
    <div>
        <i class="mo-icon-block-9"></i>
        <i class="mo-icon-block-4"></i>
        <i class="mo-icon-list"></i>
    </div>
    :::

    ## 命名规范
    
    每个图标的命名规则如下：

    - 整体命名：`mo-icon-[图标名]-[描线/形状]`，其中`描线/形状`是可选的，`图标名`中间可增加`-`来分割多个单词
    - 在`描线/形状`有以下一些关键字：
        - `o` : 描线(空心)
        - `f` : 填充(实心)
        - `c` : 圆形
        - 这些关键词也可以组合(按字母顺序排)，比如：`co`表示圆形的描线图标，`cf`表示圆形的填充图标

    ## 可用图标

    <div class="iconlist">
        <div>
            <i class="mo-icon-check"></i>
            <span>mo-icon-check</span>
        </div>
        <div>
            <i class="mo-icon-close"></i>
            <span>mo-icon-close</span>
        </div>
        <div>
            <i class="mo-icon-arrow-down"></i>
            <span>mo-icon-arrow-down</span>
        </div>
        <div>
            <i class="mo-icon-arrow-up"></i>
            <span>mo-icon-arrow-up</span>
        </div>
        <div>
            <i class="mo-icon-arrow-left"></i>
            <span>mo-icon-arrow-left</span>
        </div>
        <div>
            <i class="mo-icon-arrow-right"></i>
            <span>mo-icon-arrow-right</span>
        </div>
        <div>
            <i class="mo-icon-set"></i>
            <span>mo-icon-set</span>
        </div>
        <div>
            <i class="mo-icon-del"></i>
            <span>mo-icon-del</span>
        </div>
        <div>
            <i class="mo-icon-location"></i>
            <span>mo-icon-location</span>
        </div>
        <div>
            <i class="mo-icon-block-9"></i>
            <span>mo-icon-block-9</span>
        </div>
        <div>
            <i class="mo-icon-block-4"></i>
            <span>mo-icon-block-4</span>
        </div>
        <div>
            <i class="mo-icon-refresh"></i>
            <span>mo-icon-refresh</span>
        </div>
        <div>
            <i class="mo-icon-list"></i>
            <span>mo-icon-list</span>
        </div>
        <div>
            <i class="mo-icon-copy"></i>
            <span>mo-icon-copy</span>
        </div>
        <div>
            <i class="mo-icon-share-f"></i>
            <span>mo-icon-share-f</span>
        </div>
        <div>
            <i class="mo-icon-share-o"></i>
            <span>mo-icon-share-o</span>
        </div>
        <div>
            <i class="mo-icon-down"></i>
            <span>mo-icon-down</span>
        </div>
        <div>
            <i class="mo-icon-up"></i>
            <span>mo-icon-up</span>
        </div>
        <div>
            <i class="mo-icon-left"></i>
            <span>mo-icon-left</span>
        </div>
        <div>
            <i class="mo-icon-right"></i>
            <span>mo-icon-right</span>
        </div>
        <div>
            <i class="mo-icon-left-thin"></i>
            <span>mo-icon-left-thin</span>
        </div>
        <div>
            <i class="mo-icon-right-thin"></i>
            <span>mo-icon-right-thin</span>
        </div>
        <div>
            <i class="mo-icon-left-thin-twin"></i>
            <span>mo-icon-left-thin-twin</span>
        </div>
        <div>
            <i class="mo-icon-right-thin-twin"></i>
            <span>mo-icon-right-thin-twin</span>
        </div>
        <div>
            <i class="mo-icon-dropdown"></i>
            <span>mo-icon-dropdown</span>
        </div>
        <div>
            <i class="mo-icon-menu"></i>
            <span>mo-icon-menu</span>
        </div>
        <div>
            <i class="mo-icon-link"></i>
            <span>mo-icon-link</span>
        </div>
        <div>
            <i class="mo-icon-warn-f"></i>
            <span>mo-icon-warn-f</span>
        </div>
        <div>
            <i class="mo-icon-warn-o"></i>
            <span>mo-icon-warn-o</span>
        </div>
        <div>
            <i class="mo-icon-star-f"></i>
            <span>mo-icon-star-f</span>
        </div>
        <div>
            <i class="mo-icon-star-o"></i>
            <span>mo-icon-star-o</span>
        </div>
        <div>
            <i class="mo-icon-love-f"></i>
            <span>mo-icon-love-f</span>
        </div>
        <div>
            <i class="mo-icon-love-o"></i>
            <span>mo-icon-love-o</span>
        </div>
        <div>
            <i class="mo-icon-error-cf"></i>
            <span>mo-icon-error-cf</span>
        </div>
        <div>
            <i class="mo-icon-error-co"></i>
            <span>mo-icon-error-co</span>
        </div>
        <div>
            <i class="mo-icon-plus-cf"></i>
            <span>mo-icon-plus-cf</span>
        </div>
        <div>
            <i class="mo-icon-plus-co"></i>
            <span>mo-icon-plus-co</span>
        </div>
        <div>
            <i class="mo-icon-info-cf"></i>
            <span>mo-icon-info-cf</span>
        </div>
        <div>
            <i class="mo-icon-info-co"></i>
            <span>mo-icon-info-co</span>
        </div>
        <div>
            <i class="mo-icon-question-cf"></i>
            <span>mo-icon-question-cf</span>
        </div>
        <div>
            <i class="mo-icon-question-co"></i>
            <span>mo-icon-question-co</span>
        </div>
        <div>
            <i class="mo-icon-correct-cf"></i>
            <span>mo-icon-correct-cf</span>
        </div>
        <div>
            <i class="mo-icon-correct-co"></i>
            <span>mo-icon-correct-co</span>
        </div>
        <div>
            <i class="mo-icon-more"></i>
            <span>mo-icon-more</span>
        </div>
        <div>
            <i class="mo-icon-time-cf"></i>
            <span>mo-icon-time-cf</span>
        </div>
        <div>
            <i class="mo-icon-time-co"></i>
            <span>mo-icon-time-co</span>
        </div>
        <div>
            <i class="mo-icon-sort"></i>
            <span>mo-icon-sort</span>
        </div>
        <div>
            <i class="mo-icon-date"></i>
            <span>mo-icon-date</span>
        </div>
        <div>
            <i class="mo-icon-play"></i>
            <span>mo-icon-play</span>
        </div>
        <div>
            <i class="mo-icon-imagemap"></i>
            <span>mo-icon-imagemap</span>
        </div>
        <div>
            <i class="mo-icon-upload"></i>
            <span>mo-icon-upload</span>
        </div>
        <div>
            <i class="mo-icon-backward"></i>
            <span>mo-icon-backward</span>
        </div>
        <div>
            <i class="mo-icon-forward"></i>
            <span>mo-icon-forward</span>
        </div>
        <div>
            <i class="mo-icon-pause"></i>
            <span>mo-icon-pause</span>
        </div>
        <div>
            <i class="mo-icon-step-backward"></i>
            <span>mo-icon-step-backward</span>
        </div>
        <div>
            <i class="mo-icon-step-forward"></i>
            <span>mo-icon-step-forward</span>
        </div>
        <div>
            <i class="mo-icon-fast-backward"></i>
            <span>mo-icon-fast-backward</span>
        </div>
        <div>
            <i class="mo-icon-fast-forward"></i>
            <span>mo-icon-fast-forward</span>
        </div>
        <div>
            <i class="mo-icon-volume-off"></i>
            <span>mo-icon-volume-off</span>
        </div>
        <div>
            <i class="mo-icon-volume-1"></i>
            <span>mo-icon-volume-1</span>
        </div>
        <div>
            <i class="mo-icon-volume-2"></i>
            <span>mo-icon-volume-2</span>
        </div>
        <div>
            <i class="mo-icon-volume-3"></i>
            <span>mo-icon-volume-3</span>
        </div>
        <div>
            <i class="mo-icon-fullscreen"></i>
            <span>mo-icon-fullscreen</span>
        </div>
        <div>
            <i class="mo-icon-add"></i>
            <span>mo-icon-add</span>
        </div>
        <div>
            <i class="mo-icon-sub"></i>
            <span>mo-icon-sub</span>
        </div>
        <div>
            <i class="mo-icon-file-o"></i>
            <span>mo-icon-file-o</span>
        </div>
        <div>
            <i class="mo-icon-folder-close-o"></i>
            <span>mo-icon-folder-close-o</span>
        </div>
        <div>
            <i class="mo-icon-folder-open-o"></i>
            <span>mo-icon-folder-open-o</span>
        </div>
        <div>
            <i class="mo-icon-tag-f"></i>
            <span>mo-icon-tag-f</span>
        </div>
        <div>
            <i class="mo-icon-drawer-full"></i>
            <span>mo-icon-drawer-full</span>
        </div>
        <div>
            <i class="mo-icon-drawer-empty"></i>
            <span>mo-icon-drawer-empty</span>
        </div>
        <div>
            <i class="mo-icon-user-o"></i>
            <span>mo-icon-user-o</span>
        </div>
        <div>
            <i class="mo-icon-markdown-f"></i>
            <span>mo-icon-markdown-f</span>
        </div>
        <div>
            <i class="mo-icon-doc-f"></i>
            <span>mo-icon-doc-f</span>
        </div>
        <div>
            <i class="mo-icon-filter-f"></i>
            <span>mo-icon-filter-f</span>
        </div>
        <div>
            <i class="mo-icon-num-0-cf"></i>
            <span>mo-icon-num-0-cf</span>
        </div>
        <div>
            <i class="mo-icon-num-1-cf"></i>
            <span>mo-icon-num-1-cf</span>
        </div>
        <div>
            <i class="mo-icon-num-2-cf"></i>
            <span>mo-icon-num-2-cf</span>
        </div>
        <div>
            <i class="mo-icon-num-3-cf"></i>
            <span>mo-icon-num-3-cf</span>
        </div>
        <div>
            <i class="mo-icon-num-4-cf"></i>
            <span>mo-icon-num-4-cf</span>
        </div>
        <div>
            <i class="mo-icon-num-5-cf"></i>
            <span>mo-icon-num-5-cf</span>
        </div>
        <div>
            <i class="mo-icon-num-6-cf"></i>
            <span>mo-icon-num-6-cf</span>
        </div>
        <div>
            <i class="mo-icon-num-7-cf"></i>
            <span>mo-icon-num-7-cf</span>
        </div>
        <div>
            <i class="mo-icon-num-8-cf"></i>
            <span>mo-icon-num-8-cf</span>
        </div>
        <div>
            <i class="mo-icon-num-9-cf"></i>
            <span>mo-icon-num-9-cf</span>
        </div>
        <div>
            <i class="mo-icon-progress-start-cf"></i>
            <span>mo-icon-progress-start-cf</span>
        </div>
        <div>
            <i class="mo-icon-progress-1-8-cf"></i>
            <span>mo-icon-progress-1-8-cf</span>
        </div>
        <div>
            <i class="mo-icon-progress-1-4-cf"></i>
            <span>mo-icon-progress-1-4-cf</span>
        </div>
        <div>
            <i class="mo-icon-progress-3-8-cf"></i>
            <span>mo-icon-progress-3-8-cf</span>
        </div>
        <div>
            <i class="mo-icon-progress-1-2-cf"></i>
            <span>mo-icon-progress-1-2-cf</span>
        </div>
        <div>
            <i class="mo-icon-progress-5-8-cf"></i>
            <span>mo-icon-progress-5-8-cf</span>
        </div>
        <div>
            <i class="mo-icon-progress-3-4-cf"></i>
            <span>mo-icon-progress-3-4-cf</span>
        </div>
        <div>
            <i class="mo-icon-progress-7-8-cf"></i>
            <span>mo-icon-progress-7-8-cf</span>
        </div>
        <div>
            <i class="mo-icon-progress-done-cf"></i>
            <span>mo-icon-progress-done-cf</span>
        </div>
        <div>
            <i class="mo-icon-flag-c"></i>
            <span>mo-icon-flag-c</span>
        </div>
        <div>
            <i class="mo-icon-star-cf"></i>
            <span>mo-icon-star-cf</span>
        </div>
    </div>
    
    ## 图标托管

    Morning UI图标托管在[Iconfont](http://iconfont.cn/)，再此感谢[Iconfont](http://iconfont.cn/)。

    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'iconfont'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
.iconlist{
    font-size: 0;
    padding: 30px 0;

    > div{
        width: 20%;
        height: 90px;
        display: inline-block;
        vertical-align: top;

        > i{
            font-size: 30px;
            display: block;
            text-align: center;
            color: #333;
        }

        > span{
            display: block;
            font-size: 13px;
            color: #555;
            text-align: center;
        }
    }
}
</style>
