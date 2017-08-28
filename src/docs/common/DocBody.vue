<template>
    <div>
        <doc-header :category="category"></doc-header>
        <div class="body">
            <doc-submenu
                :category="category"
                :page="page"
            ></doc-submenu>
            <div class="content markdown-body"
                :class="{padding : hasPadding}"
                v-md="content"
            >
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
import marked                       from 'marked';
import hljs                         from 'highlight.js';
import DocHeader                    from 'Docs/common/DocHeader.vue';
import DocSubmenu                   from 'Docs/common/DocSubmenu.vue';

Vue.directive('md',{
    bind : (el, binding, vnode) => {
        
        let mdScript = el.getElementsByTagName('script')[0];

        if (mdScript.type === 'text/markdown') {

            el.innerHTML = marked(mdScript.innerText);

        }

    }
});

export default {
    props : {
        category : String,
        page : String,
        hasPadding : Boolean,
        content : String
    },
    data : function () {

        return {};

    },
    components : {
        'doc-header' : DocHeader,
        'doc-submenu' : DocSubmenu
    },
    mounted : function () {

        hljs.initHighlightingOnLoad();

    } 
    // render : function (h) {
    //     console.log(55, this.$slots.default);

    //     let html = '';

    //     for (let node of this.$slots.default) {
    //         html += node.text;
    //     }

    //     return h(
    //         'div',
    //         {},
    //         [
    //             h(DocHeader, {
    //                 props : {
    //                     category : this.category
    //                 }
    //             }),
    //             h('div', {
    //                 'class' : {
    //                     body : true
    //                 }
    //             },
    //             [
    //                 h(DocSubmenu, {
    //                     props : {
    //                         category : this.category,
    //                         page : this.page
    //                     }
    //                 }),
    //                 h('div', {
    //                     'class' : {
    //                         content : true
    //                     },
    //                     domProps : {
    //                         innerHTML : marked(html)
    //                     }
    //                 })
    //             ])
    //         ]
    //     )

    // }
};
</script>

<style lang="less">
@import "~Docs/common/common.less";
@import "~github-markdown-css";
@import "~Docs/common/markdown.less";
@import "~Npm/highlight.js/styles/hopscotch.css";
@import "~Docs/common/highlight.less";

.body {
    width: 1100px;
    margin: 0 auto;
    font-size: 0;
}
.content {
    width: 900px;
    display: inline-block;
    vertical-align: top;
    font-size: 16px;
    box-sizing: border-box;

    &.padding {
        padding: 50px;
    }
}
</style>
