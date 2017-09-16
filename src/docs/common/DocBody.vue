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
import extend                       from 'extend';
import Mustache                     from 'mustache';
import _                            from 'underscore';
import hljs                         from 'highlight.js';
import DocHeader                    from 'Docs/common/DocHeader.vue';
import DocSubmenu                   from 'Docs/common/DocSubmenu.vue';
import DocComponentStatus           from 'Docs/common/DocComponentStatus.vue';

const randomRangeMin = 1e3;
const randomRangeMax = 9e3;

window.Vue.component('doc-component-status', DocComponentStatus);

let evals = [];

let data = {
    size : [
        {
            sizeKey : 'xxl',
            sizeName : 'XXL尺寸'
        },
        {
            sizeKey : 'xl',
            sizeName : 'XL尺寸'
        },
        {
            sizeKey : 'l',
            sizeName : 'L尺寸'
        },
        {
            sizeKey : 'm',
            sizeName : 'M尺寸'
        },
        {
            sizeKey : 's',
            sizeName : 'S尺寸'
        },
        {
            sizeKey : 'xs',
            sizeName : 'XS尺寸'
        },
        {
            sizeKey : 'xxs',
            sizeName : 'XXS尺寸'
        }
    ],
    theme : [
        {
            colorKey : 'theme',
            colorName : '主题色'
        },
        {
            colorKey : 'light-theme',
            colorName : '浅主题色'
        },
        {
            colorKey : 'dark-theme',
            colorName : '深主题色'
        }
    ],
    feature : [
        {
            colorKey : 'success',
            colorName : '成功/正确'
        },
        {
            colorKey : 'warning',
            colorName : '警告/注意'
        },
        {
            colorKey : 'danger',
            colorName : '错误/危险'
        },
        {
            colorKey : 'primary',
            colorName : '主要/关键'
        },
        {
            colorKey : 'minor',
            colorName : '次要/不醒目'
        },
        {
            colorKey : 'info',
            colorName : '信息/额外'
        }
    ],
    black : [
        {
            colorKey : 'black',
            colorName : '黑色'
        },
        {
            colorKey : 'light-black',
            colorName : '浅黑色'
        },
        {
            colorKey : 'extra-light-black',
            colorName : '超浅黑色'
        }
    ],
    blue : [
        {
            colorKey : 'blue',
            colorName : '青色'
        },
        {
            colorKey : 'light-blue',
            colorName : '浅青色'
        },
        {
            colorKey : 'extra-light-blue',
            colorName : '超浅青色'
        }
    ],
    silver : [
        {
            colorKey : 'silver',
            colorName : '银色'
        },
        {
            colorKey : 'light-silver',
            colorName : '浅银色'
        },
        {
            colorKey : 'extra-light-silver',
            colorName : '超浅银色'
        }
    ],
    gray : [
        {
            colorKey : 'gray',
            colorName : '灰色'
        },
        {
            colorKey : 'light-gray',
            colorName : '浅灰色'
        },
        {
            colorKey : 'white',
            colorName : '白色'
        }
    ],
    state : [
        {
            stateKey : 'normal',
            stateName : '正常'
        },
        {
            stateKey : 'hover',
            stateName : 'Hover'
        },
        {
            stateKey : 'active',
            stateName : '激活'
        },
        {
            stateKey : 'disabled',
            stateName : '禁用'
        },
        {
            stateKey : 'apparent',
            stateName : '醒目'
        },
        {
            stateKey : 'loading',
            stateName : '载入中'
        },
        {
            stateKey : 'processing',
            stateName : '处理中'
        },
    ],
    formConfig : {
        formName : '表单名',
        formKey : 'formKey',
        formGroupOne : 'groupName'
    },
    formValueType : [
        {
            valueType : 'String',
            valueContent : `'Jim'`
        },
        {
            valueType : 'Number',
            valueContent : '5'
        },
        {
            valueType : 'Boolean',
            valueContent : 'true'
        },
        {
            valueType : 'Null',
            valueContent : 'null'
        },
        {
            valueType : 'Undefined',
            valueContent : 'undefined'
        },
        {
            valueType : 'Object',
            valueContent : '{}'
        },
        {
            valueType : 'Array',
            valueContent : '[]'
        }
    ],
    formConfigTable : '\n|form-name|表单的名称（用于显示）|任意字符串|String|`undefined`|\n' +
        '|form-key|表单的Key（用于逻辑中作为识别标示）|任意字符串(唯一)|String|`undefined`|\n' +
        '|group|表单组，用于将多个表单的数值添加到同一个对象中。一个表单可以同时属于多个组|若是字符串，则将表单添加到单个组<br>若是数组，则将表单添加到多个组|String<br/>Array|`[]`|\n' +
        '|default-value|表单的默认值|任意(接受表单原始数值，也接受JSON序列化后的表单数值，若数值是JSON序列化的会自动转换成原始数值)|Any|`undefined`|\n' +
        '|hide-name|链接地址，若为空则不跳转|url地址|Boolean|`false`|'
};

let parser = text => {

    let patt = /````(html|js|css|mixin|)((\n[\t ]*[\@a-zA-Z0-9\:\.\,\|]+)*)\n((.|\n)*?)(\n)*([ \t]*)````/g;
    let varpatt = /````(html|js|css)\n(\@var\:([a-zA-Z0-9]+))\n((.|\n)+?)\n([ \t]*)````/g;
    let result;
    let vars = {
        js : {},
        html : {}
    };
    let blocks = [];

    while ((result = varpatt.exec(text)) !== null) {

        vars[result[1]][result[3]] = result[4];
        text = text.slice(0, result.index - 1) + text.slice(result.index + result[0].length, text.length);

        varpatt.lastIndex = 0;

    }

    while ((result = patt.exec(text)) !== null) {

        let content = result[4];
        let helpers = result[2].split('\n');

        helpers.shift();
        
        // if (helpers.length === 0) {

        let block = {
            content,
            type : result[1],
            result,
            helpers : []
        };

        for(let name of helpers) {

            let list = name.split('|');
            let group = [];

            for (let help of list) {

                let fn = help.split(':')[0].replace(/^\@/, '');
                let param = help.split(':')[1];

                group.push({
                    fn,
                    param
                });

            }

            block.helpers.push(group);

        }

        blocks.push(block);

    }

    return {
        vars,
        blocks,
        text
    };

};

let helpers = {
    render : opt => {

        opt.isText = true;

        return opt;

    },
    size : opt => {

        if (typeof opt.content === 'string') {

            opt.content = `{$#size}${opt.content}\n{$/size}`;

        } else if (typeof opt.content === 'object') {

            for (let key in opt.content) {

                opt.content[key] = `{$#size}${opt.content[key]}\n{$/size}`;

            }

        }

        return opt;

    },
    color : opt => {

        let color = opt.param;
        
        if (typeof opt.content === 'string') {

            opt.content = `{$#${color}}${opt.content}\n{$/${color}}`;

        } else if (typeof opt.contnet === 'object') {

            for (let key in opt.content) {
                    
                opt.content[key] = `{$#${color}}${opt.content[key]}\n{$/${color}}`;
                
            }

        }

        if (color === 'silver') {

            opt.style.push('background: #626b75;border-color: #454d57');

        } else if (color === 'gray') {

            opt.style.push('background:#676767;border-color:#494949');
        
        }

        return opt;

    },
    state : opt => {

        if (opt.param === undefined) {
            
            opt.param = 'all';

        }

        let states = opt.param.split(',');

        if (states.length > 0 &&
            states.indexOf('all') === -1) {

            let sna = [];

            for (let state of data.state) {

                if (states.indexOf(state.stateKey) !== -1) {

                    sna.push(state);

                }

            }

            opt.context = {
                state : sna
            };

        }

        if (typeof opt.content === 'string') {

            opt.content = `{$#state}${opt.content}\n{$/state}`;

        } else if (typeof opt.contnet === 'object') {

            for (let key in opt.content) {
                    
                opt.content[key] = `{$#state}${opt.content[key]}\n{$/state}`;
                
            }

        }

        return opt;

    },
    br : opt => {

        let num = +opt.param || 1;
        let brs = '';

        while (num--) {

            brs += '<br/>';

        }

        if (typeof opt.content === 'string') {

            opt.content = `${opt.content}\n${brs}\n`;

        } else if (typeof opt.content === 'object') {

            for (let key in opt.content) {

                opt.content[key] = `${opt.content[key]}\n${brs}\n`;

            }

        }

        return opt;

    },
    use : opt => {

        let links = opt.param.split(',');

        opt.content = {};

        for (let link of links) {

            let type = link.split('.')[0];
            let key = link.split('.')[1];

            opt.content[type] = `&&&&&{$id}|${opt.vars[type][key]}`;

        }

        opt.render = sopt => {

            let list = {};
            let code = '';
            let demo = '';
            let newData = extend(true, {}, sopt.context);
            let lastType;

            for (let key of Object.keys(newData)) {

                let value = newData[key];
                let id = `demo-${_.random(randomRangeMin, randomRangeMax)}`;

                if (value instanceof Array) {

                    for (let svalue of value) {

                        svalue.id = id;
                        svalue.el = `#${id}-el`;
                        svalue.template = `#${id}-tmpl`;

                    }

                } else if (typeof value === 'object') {

                    value.id = id;
                    value.el = `#${id}-el`;
                    value.template = `#${id}-tmpl`;

                }

            }

            let id = `demo-${_.random(randomRangeMin, randomRangeMax)}`;

            newData.id = id;
            newData.el = `#${id}-el`;
            newData.template = `#${id}-tmpl`;

            for (let type of Object.keys(sopt.content)) {

                Mustache.parse(sopt.content[type], ['{$', '}']);
                
                list[type] = Mustache.render(sopt.content[type], newData).split('&&&&&');
                list[type].shift();
                lastType = type;

            }

            for (let i in list[lastType]) {

                let html = list.html[i];
                let js = list.js[i];
                let demoid = html.match(/^([0-9a-z-]+?)\|/)[1];

                html = html.replace(/^[0-9a-z-]+?\|/, '');
                js = js.replace(/^[0-9a-z-]+?\|/, '');

                code += `<div id="${demoid}-el"><!-- ${demoid} 容器 --></div>\n\n`;
                demo += `<div id="${demoid}-el"></div>\n`;

                // html
                let htmlScript = document.createElement('script');

                html = html.replace(/[\n]*?$/, '');
                htmlScript.innerHTML = `\n${html}\n`;
                htmlScript.type = 'x-template';
                htmlScript.id = `${demoid}-tmpl`;

                code += `${htmlScript.outerHTML}\n\n`;

                htmlScript.innerHTML = htmlScript.innerHTML.replace(/\{%([a-zA-Z0-9_]+)%\}/g, '{{$1}}');
                evals.push(htmlScript);

                // js

                let jsScript = document.createElement('script');

                js = js.replace(/[\n]*?$/, '');
                jsScript.innerHTML = `\n${js}\n`;
                
                evals.push(jsScript);

                code += jsScript.outerHTML;

                if (i < list[lastType].length - 1) {

                    code += '\n\n------------------------------------------------\n\n';

                }

            }

            return {
                demo,
                code 
            };

        };

        return opt;

    },
    formConfig : opt => {

        if (typeof opt.content === 'string') {

            opt.content = `{$#formConfig}${opt.content}\n{$/formConfig}`;

        } else if (typeof opt.content === 'object') {

            for (let key in opt.content) {

                opt.content[key] = `{$#formConfig}${opt.content[key]}\n{$/formConfig}`;

            }

        }

        return opt;

    },
    formValueType : opt => {

        if (typeof opt.content === 'string') {

            opt.content = `{$#formValueType}${opt.content}\n{$/formValueType}`;

        } else if (typeof opt.content === 'object') {

            for (let key in opt.content) {

                opt.content[key] = `{$#formValueType}${opt.content[key]}\n{$/formValueType}`;

            }

        }

        return opt;

    }
};

let make = {
    block : block => {

        return '<div class="demo">\n' + block.content + '</div>\n\n```' + block.type + '\n' + block.content + '\n```\n';

    },
    opt : (opts, block) => {

        let text = '';

        for (let opt of opts) {

            let code,
                demo;

            opt.context = extend({}, data, opt.context);

            if (typeof opt.render === 'function') {

                let result = opt.render(opt);

                code = result.code;
                demo = result.demo;

            } else {

                let template = opt.content;

                Mustache.parse(template, ['{$', '}']);

                code = Mustache.render(template, opt.context);

            }

            if (opt.style.length === 0) {

                opt.style = '';

            } else {

                opt.style = opt.style.join(';');
            
            }

            if (block.type === 'mixin') {

                block.type = 'html';

            }

            if (opt.isText) {

                text += code;

            } else {

                text += '<div class="demo" style="' + opt.style + '">\n' + (demo || code) + '</div>\n\n```' + block.type + '\n' + code + '\n```\n';

            }

        }

        return text;

    }
};

let runner = tree => {

    for (let block of tree.blocks) {

        if (block.helpers.length > 0) {

            let opts = [];

            for (let group of block.helpers) {

                let opt = {
                    content : block.content,
                    vars : tree.vars,
                    helperlist : group,
                    style : []
                };

                for(let helper of group) {

                    opt.param = helper.param;
                    opt = helpers[helper.fn](opt);

                }

                opts.push(opt);

            }

            block._html = make.opt(opts, block);

        } else {

            block._html = make.block(block);
        
        }

    }

    let text = tree.text;
    let patt = /````(html|js|css|mixin|)((\n[\t ]*[\@a-zA-Z0-9\:\.\,\|]+)*)\n((.|\n)*?)(\n)*([ \t]*)````/g;
    let index = 0;
    let result;

    while ((result = patt.exec(text)) !== null) {

        text = text.slice(0, result.index - 1) + tree.blocks[index++]._html + text.slice(result.index + result[0].length, text.length);

    }

    return text;
    
};
window.Vue.directive('docmd', {
    bind : el => {

        let mdScript = el.getElementsByTagName('script')[0];

        if (mdScript && mdScript.type === 'text/markdown') {

            let text = mdScript.innerText;
            let tree = parser(text);

            text = runner(tree);
            
            let md = marked(text);
            
            md = md.replace(/\{\%([a-zA-Z0-9\_]+)\%\}/g, '{{"\\\{\\\{$1\\\}\\\}"}}');
            md = md.replace(/\<p\>(\[\[\[(.+)\]\]\])\<\/p\>/g, '$1');
            md = md.replace(/(\[\[\[)/, '<ui-tab class="block noborder">$1');
            md = md.replace(/\[\[\[基础\]\]\]((.|\n)+?)(\[\[\[|$)/g, '<div slot="开始">$1</div>$3');
            md = md.replace(/\[\[\[声明\]\]\]((.|\n)+?)(\[\[\[|$)/g, '<div slot="声明">$1</div>$3');
            md = md.replace(/\[\[\[配置\]\]\]((.|\n)+?)(\[\[\[|$)/g, '<div slot="配置">$1</div>$3');
            md = md.replace(/\[\[\[方法\]\]\]((.|\n)+?)(\[\[\[|$)/g, '<div slot="方法">$1</div>$3');
            md = md.replace(/\[\[\[事件\]\]\]((.|\n)+?)(\[\[\[|$)/g, '<div slot="事件">$1</div>$3');
            md = md.replace(/\[\[\[表单值\]\]\]((.|\n)+?)(\[\[\[|$)/g, '<div slot="表单值">$1</div>$3');
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
    z-index: 9;
    position: relative;

    &+pre{
        border-radius: 0 0 3px 3px;
    }
}
</style>
