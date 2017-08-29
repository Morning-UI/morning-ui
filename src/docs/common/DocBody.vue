<template>
    <div>
       <doc-header :category="category"></doc-header>
         <div class="body">
            <doc-submenu
                :category="category"
                :page="page"
            ></doc-submenu>
            <div
                class="content markdown-body"
                :class="{padding : hasPadding}"
                v-md
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

        if (mdScript && mdScript.type === 'text/markdown') {

            let text = mdScript.innerText;
            let patt = /\`\`\`\`(html|js)\n((.|\n)+?)\n\`\`\`\`/g;
            let result;

            while((result = patt.exec(text)) !== null) {

                let newText = '<div class="demo">'+result[2]+'</div>\n\n```'+result[1]+'\n'+result[2]+'\n```\n';

                text = text.slice(0, result.index - 1) + newText + text.slice(result.index + result[0].length, text.length);

            }

            let res = Vue.compile(`<div>${marked(text)}</div>`);

            let instance = new Vue({
                render: res.render,
                staticRenderFns: res.staticRenderFns
            });

            instance.$mount();
            
            el.appendChild(instance.$el);

        }

    }
});

export default {
    props : {
        category : String,
        page : String,
        hasPadding : Boolean
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
    font-size: 14px;
    box-sizing: border-box;

    div > h1 > code{
        vertical-align: 6px;
    }

    &.padding {
        padding: 50px;
    }
}
.demo{
    padding: 10px;
    box-sizing: border-box;
    border: 1px #f1f4f6 solid;
    border-radius:3px 3px 0 0;

    &+pre{
        border-radius: 0 0 3px 3px;
    }
}
</style>
