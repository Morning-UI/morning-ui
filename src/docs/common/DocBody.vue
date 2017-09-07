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
import _                            from 'underscore';
import hljs                         from 'highlight.js';
import DocHeader                    from 'Docs/common/DocHeader.vue';
import DocSubmenu                   from 'Docs/common/DocSubmenu.vue';
import DocComponentStatus           from 'Docs/common/DocComponentStatus.vue';

Vue.component('doc-component-status', DocComponentStatus);

let evals = [];

let data = {
    size : [
        {
            size : 'xxl',
            name : 'XXL尺寸'
        },
        {
            size : 'xl',
            name : 'XL尺寸'
        },
        {
            size : 'l',
            name : 'L尺寸'
        },
        {
            size : 'm',
            name : 'M尺寸'
        },
        {
            size : 's',
            name : 'S尺寸'
        },
        {
            size : 'xs',
            name : 'XS尺寸'
        },
        {
            size : 'xxs',
            name : 'XXS尺寸'
        }
    ],
    theme : [
        {
            color : 'theme',
            name : '主题色'
        },
        {
            color : 'light-theme',
            name : '浅主题色'
        },
        {
            color : 'dark-theme',
            name : '深主题色'
        }
    ],
    feature : [
        {
            color : 'success',
            name : '成功/正确'
        },
        {
            color : 'warning',
            name : '警告/注意'
        },
        {
            color : 'danger',
            name : '错误/危险'
        },
        {
            color : 'primary',
            name : '主要/关键'
        },
        {
            color : 'minor',
            name : '次要/不醒目'
        },
        {
            color : 'info',
            name : '信息/额外'
        }
    ],
    black : [
        {
            color : 'black',
            name : '黑色'
        },
        {
            color : 'light-black',
            name : '浅黑色'
        },
        {
            color : 'extra-light-black',
            name : '超浅黑色'
        }
    ],
    blue : [
        {
            color : 'blue',
            name : '青色'
        },
        {
            color : 'light-blue',
            name : '浅青色'
        },
        {
            color : 'extra-light-blue',
            name : '超浅青色'
        }
    ],
    silver : [
        {
            color : 'silver',
            name : '银色'
        },
        {
            color : 'light-silver',
            name : '浅银色'
        },
        {
            color : 'extra-light-silver',
            name : '超浅银色'
        }
    ],
    gray : [
        {
            color : 'gray',
            name : '灰色'
        },
        {
            color : 'light-gray',
            name : '浅灰色'
        },
        {
            color : 'white',
            name : '白色'
        }
    ],
    state : [
        {
            state : 'normal',
            name : '正常'
        },
        {
            state : 'hover',
            name : 'Hover'
        },
        {
            state : 'active',
            name : '激活'
        },
        {
            state : 'disabled',
            name : '禁用'
        },
        {
            state : 'apparent',
            name : '醒目'
        },
        {
            state : 'loading',
            name : '载入中'
        },
        {
            state : 'processing',
            name : '处理中'
        },
    ]
}

let helper = {
    normal : opts => {

        if (!opts.style) {

            opts.style = '';

        }

        return '<div class="demo" style="'+opts.style+'">'+opts.code+'</div>\n\n```'+opts.result[1]+'\n'+opts.code+'\n```\n';

    },
    size : opts => {

        let template = `{$#size}${opts.code}\n{$/size}`;
        
        Mustache.parse(template, ['{$', '}']);

        return helper.normal({
            code : Mustache.render(template, data),
            result : opts.result
        });

    },
    colorTheme : opts => {

        let template = `{$#theme}${opts.code}\n{$/theme}`;
        
        Mustache.parse(template, ['{$', '}']);

        return helper.normal({
            code : Mustache.render(template, data),
            result : opts.result
        });

    },
    colorFeature : opts => {

        let template = `{$#feature}${opts.code}\n{$/feature}`;
        
        Mustache.parse(template, ['{$', '}']);

        return helper.normal({
            code : Mustache.render(template, data),
            result : opts.result
        });

    },
    colorBlack : opts => {

        let template = `{$#black}${opts.code}\n{$/black}`;

        Mustache.parse(template, ['{$', '}']);

        return helper.normal({
            code : Mustache.render(template, data),
            result : opts.result
        });

    },
    colorBlue : opts => {

        let template = `{$#blue}${opts.code}\n{$/blue}`;

        Mustache.parse(template, ['{$', '}']);

        return helper.normal({
            code : Mustache.render(template, data),
            result : opts.result
        });

    },
    colorSilver : opts => {

        let template = `{$#silver}${opts.code}\n{$/silver}`;
        
        Mustache.parse(template, ['{$', '}']);

        return helper.normal({
            code : Mustache.render(template, data),
            result : opts.result,
            style : 'background: #626b75;border-color: #454d57'
        });

    },
    colorGray : opts => {

        let template = `{$#gray}${opts.code}\n{$/gray}`;
        Mustache.parse(template, ['{$', '}']);

        return helper.normal({
            code : Mustache.render(template, data),
            result : opts.result,
            style : 'background:#676767;border-color:#494949;'
        });

    },
    stateNA : opts => {

        let sna = [data.state[0], data.state[4]];
        let template = `{$#sna}${opts.code}\n{$/sna}`;

        Mustache.parse(template, ['{$', '}']);

        return helper.normal({
            code : Mustache.render(template, {sna}),
            result : opts.result
        });

    },
    stateALLwithTheme : opts => {

        let template = `{$#theme}<p>{$name}</p>\n{$#state}${opts.code}\n{$/state}<br/><br/>\n{$/theme}`;

        Mustache.parse(template, ['{$', '}']);

        return helper.normal({
            code : Mustache.render(template, data),
            result : opts.result
        });

    },
    stateALLwithFeature : opts => {

        let template = `{$#feature}<p>{$name}</p>\n{$#state}${opts.code}\n{$/state}<br/><br/>\n{$/feature}`;

        Mustache.parse(template, ['{$', '}']);

        return helper.normal({
            code : Mustache.render(template, data),
            result : opts.result
        });

    },
    stateALLwithBlack : opts => {

        let template = `{$#black}<p>{$name}</p>\n{$#state}${opts.code}\n{$/state}<br/><br/>\n{$/black}`;

        Mustache.parse(template, ['{$', '}']);

        return helper.normal({
            code : Mustache.render(template, data),
            result : opts.result
        });

    },
    stateALLwithBlue : opts => {

        let template = `{$#blue}<p>{$name}</p>\n{$#state}${opts.code}\n{$/state}<br/><br/>\n{$/blue}`;

        Mustache.parse(template, ['{$', '}']);

        return helper.normal({
            code : Mustache.render(template, data),
            result : opts.result
        });

    },
    stateALLwithSilver : opts => {

        let template = `{$#silver}<p>{$name}</p>\n{$#state}${opts.code}\n{$/state}<br/><br/>\n{$/silver}`;

        Mustache.parse(template, ['{$', '}']);

        return helper.normal({
            code : Mustache.render(template, data),
            result : opts.result,
            style : 'background: #626b75;border-color: #454d57'
        });
    
    },
    stateALLwithGray : opts => {

        let template = `{$#gray}<p>{$name}</p>\n{$#state}${opts.code}\n{$/state}<br/><br/>\n{$/gray}`;

        Mustache.parse(template, ['{$', '}']);

        return helper.normal({
            code : Mustache.render(template, data),
            result : opts.result,
            style : 'background:#676767;border-color:#494949;'
        });

    },
    use : opts => {

        let mixins = opts.value.split(',');
        let codes = '';
        let id = 'demo-'+_.random(1e3, 9e3);

        for(let mixin of mixins) {

            let lang = mixin.split('.')[0];
            let name = mixin.split('.')[1];
            let code = opts.vars[lang][name];

            if (lang === 'html') {

                let script = document.createElement('script');

                code = code.replace(/(^|\n)/g, '$1\t');
                script.innerHTML = '\n'+code+'\n';
                script.type = 'x-template';
                script.id = id+'-tmpl';

                codes += script.outerHTML + '\n\n';

                script.innerHTML = script.innerHTML.replace(/\{\%([a-zA-Z0-9\_]+)\%\}/g, '{{$1}}');
                evals.push(script);

            } else if (lang === 'js') {

                Mustache.parse(code, ['{$', '}']);

                code = Mustache.render(code, {
                    template : '#'+id+'-tmpl',
                    el : '#'+id+'-el'
                });

                let script = document.createElement('script');

                code = code.replace(/(^|\n)/g, '$1\t');
                script.innerHTML = '\n'+code+'\n';
                
                evals.push(script);

                codes += script.outerHTML;

            }

        }

        let con = '<div id="'+id+'-el"></div>';

        codes = '<div class="demo">'+con+'</div>\n\n```html\n'+con+'\n\n'+codes+'\n```';

        return codes;

    }
};

Vue.directive('docmd',{
    bind : (el, binding, vnode) => {

        let mdScript = el.getElementsByTagName('script')[0];

        if (mdScript && mdScript.type === 'text/markdown') {

            let text = mdScript.innerText;
            let patt = /\`\`\`\`(html|js|css|mixin)((\n[\t ]*\@[a-zA-Z0-9\:\.\,]+)*)\n((.|\n)*?)(\n)*([ \t]*)\`\`\`\`/g;
            let varpatt = /\`\`\`\`(html|js|css)\n(\@var\:([a-zA-Z0-9]+))\n((.|\n)+?)\n([ \t]*)\`\`\`\`/g;
            let result;
            let vars = {
                js : {},
                html : {}
            };

            while((result = varpatt.exec(text)) !== null) {

                vars[result[1]][result[3]] = result[4];
                text = text.slice(0, result.index - 1) + text.slice(result.index + result[0].length, text.length);

                varpatt.lastIndex = 0;

            }
            
            while((result = patt.exec(text)) !== null) {

                let code = result[4];
                let helpers = result[2].split('\n');
                helpers.shift();
                let newText = [];

                if (helpers.length === 0) {

                    let opts = {
                        code,
                        result
                    };

                    newText.push(helper.normal(opts));

                } else {

                    for(let name of helpers) {

                        let list = name.split(':');
                        let fn = list[0].replace(/^\@/, '');
                        let value = list[1];

                        newText.push(helper[fn]({
                            code,
                            result,
                            value,
                            vars
                        }));

                    }

                }


                text = text.slice(0, result.index - 1) + newText.join('\n') + text.slice(result.index + result[0].length, text.length);

            }

            let md = marked(text);
            
            md = md.replace(/\{\%([a-zA-Z0-9\_]+)\%\}/g, '{{"\\\{\\\{$1\\\}\\\}"}}');
            md = md.replace(/\<p\>(\[\[\[(.+)\]\]\])\<\/p\>/g, '$1');
            md = md.replace(/(\[\[\[)/, '<ui-tab class="block noborder">$1');
            md = md.replace(/\[\[\[基础\]\]\]((.|\n)+?)(\[\[\[|$)/g, '<div slot="开始">$1</div>$3');
            md = md.replace(/\[\[\[声明\]\]\]((.|\n)+?)(\[\[\[|$)/g, '<div slot="声明">$1</div>$3');
            md = md.replace(/\[\[\[配置\]\]\]((.|\n)+?)(\[\[\[|$)/g, '<div slot="配置">$1</div>$3');
            md = md.replace(/\[\[\[方法\]\]\]((.|\n)+?)(\[\[\[|$)/g, '<div slot="方法">$1</div>$3');
            md = md.replace(/\[\[\[事件\]\]\]((.|\n)+?)(\[\[\[|$)/g, '<div slot="事件">$1</div>$3');
            md = md.replace(/\[\[\[单元测试\]\]\]((.|\n)+?)(\[\[\[|$)/g, '<div slot="源码">$1</div>$3');
            md = md.replace(/(.|\n)$/, '$1</ui-tab>');

            let res = Vue.compile(`<div>${md}</div>`);
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

        for (let js of evals) {
            document.body.appendChild(js);
        }

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
