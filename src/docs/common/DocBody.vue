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
                v-docmd
            >
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
import marked                       from 'marked';
import Mustache                     from 'mustache';
import hljs                         from 'highlight.js';
import DocHeader                    from 'Docs/common/DocHeader.vue';
import DocSubmenu                   from 'Docs/common/DocSubmenu.vue';

let data = {
    size : [
        {
            key : 'xxl',
            name : 'XXL尺寸'
        },
        {
            key : 'xl',
            name : 'XL尺寸'
        },
        {
            key : 'l',
            name : 'L尺寸'
        },
        {
            key : 'm',
            name : 'M尺寸'
        },
        {
            key : 's',
            name : 'S尺寸'
        },
        {
            key : 'xs',
            name : 'XS尺寸'
        },
        {
            key : 'xxs',
            name : 'XXS尺寸'
        }
    ],
    theme : [
        {
            key : 'theme',
            name : '主题色'
        },
        {
            key : 'light-theme',
            name : '浅主题色'
        },
        {
            key : 'dark-theme',
            name : '深主题色'
        }
    ],
    feature : [
        {
            key : 'success',
            name : '成功/正确'
        },
        {
            key : 'warning',
            name : '警告/注意'
        },
        {
            key : 'danger',
            name : '错误/危险'
        },
        {
            key : 'primary',
            name : '主要/关键'
        },
        {
            key : 'minor',
            name : '次要/不醒目'
        },
        {
            key : 'info',
            name : '信息/额外'
        }
    ],
    black : [
        {
            key : 'black',
            name : '黑色'
        },
        {
            key : 'light-black',
            name : '浅黑色'
        },
        {
            key : 'extra-light-black',
            name : '超浅黑色'
        }
    ],
    blue : [
        {
            key : 'blue',
            name : '青色'
        },
        {
            key : 'light-blue',
            name : '浅青色'
        },
        {
            key : 'extra-light-blue',
            name : '超浅青色'
        }
    ],
    silver : [
        {
            key : 'silver',
            name : '银色'
        },
        {
            key : 'light-silver',
            name : '浅银色'
        },
        {
            key : 'extra-light-silver',
            name : '超浅银色'
        }
    ],
    gray : [
        {
            key : 'gray',
            name : '灰色'
        },
        {
            key : 'light-gray',
            name : '浅灰色'
        },
        {
            key : 'white',
            name : '白色'
        }
    ],
    state : [
        {
            key : 'normal',
            name : '正常'
        },
        {
            key : 'hover',
            name : 'Hover'
        },
        {
            key : 'active',
            name : '激活'
        },
        {
            key : 'disabled',
            name : '禁用'
        },
        {
            key : 'apparent',
            name : '醒目'
        },
        {
            key : 'loading',
            name : '载入中'
        },
        {
            key : 'processing',
            name : '处理中'
        },
    ]
}

let helper = {
    size : template => {

        template = `{$#size}${template}\n{$/size}`;
        Mustache.parse(template, ['{$', '}']);

        return {
            code : Mustache.render(template, data),
            style : ''
        };

    },
    colorTheme : template => {

        template = `{$#theme}${template}\n{$/theme}`;
        Mustache.parse(template, ['{$', '}']);

        return {
            code : Mustache.render(template, data),
            style : ''
        };

    },
    colorFeature : template => {

        template = `{$#feature}${template}\n{$/feature}`;
        Mustache.parse(template, ['{$', '}']);

        return {
            code : Mustache.render(template, data),
            style : ''
        };

    },
    colorBlack : template => {

        template = `{$#black}${template}\n{$/black}`;
        Mustache.parse(template, ['{$', '}']);

        return {
            code : Mustache.render(template, data),
            style : ''
        };

    },
    colorBlue : template => {

        template = `{$#blue}${template}\n{$/blue}`;
        Mustache.parse(template, ['{$', '}']);

        return {
            code : Mustache.render(template, data),
            style : ''
        };

    },
    colorSilver : template => {

        template = `{$#silver}${template}\n{$/silver}`;
        Mustache.parse(template, ['{$', '}']);

        return {
            code : Mustache.render(template, data),
            style : 'background:#c3cad2;border-color:#b0b7c1'
        };

    },
    colorGray : template => {

        template = `{$#gray}${template}\n{$/gray}`;
        Mustache.parse(template, ['{$', '}']);

        return {
            code : Mustache.render(template, data),
            style : 'background:#cfcfcf;border-color:#c6c6c6'
        };

    },
    stateNA : template => {

        let sna = [data.state[0], data.state[4]];

        template = `{$#sna}${template}\n{$/sna}`;
        Mustache.parse(template, ['{$', '}']);

        return {
            code : Mustache.render(template, {sna}),
            style : ''
        };

    }
};

Vue.directive('docmd',{
    bind : (el, binding, vnode) => {

        let mdScript = el.getElementsByTagName('script')[0];

        if (mdScript && mdScript.type === 'text/markdown') {

            let text = mdScript.innerText;
            let patt = /\`\`\`\`(html|js)((\n[\t ]*\@[a-zA-Z]+)*)\n((.|\n)+?)\n([ \t]*)\`\`\`\`/g;
            let result;

            while((result = patt.exec(text)) !== null) {

                let demo = result[4];
                let helpers = result[2].split('\n');
                helpers.shift();
                let newText = [];

                if (helpers.length === 0) {

                    let con = {
                        code : demo,
                        style : ''
                    };

                    newText.push('<div class="demo" style="'+con.style+'">'+con.code+'</div>\n\n```'+result[1]+'\n'+con.code+'\n```\n');

                } else {

                    for(let name of helpers) {

                        name = name.replace(/^\@/, '');
                        
                        let con = helper[name](demo);

                        newText.push('<div class="demo" style="'+con.style+'">'+con.code+'</div>\n\n```'+result[1]+'\n'+con.code+'\n```\n');

                    }

                }

                text = text.slice(0, result.index - 1) + newText.join('\n') + text.slice(result.index + result[0].length, text.length);

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
