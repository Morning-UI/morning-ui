const TEST_HOST                                         = 'http://localhost:8089';
const SIZE = [
    'xxl',
    'xl',
    'l',
    'm',
    's',
    'xs',
    'xxs'
];
const COLOR_SHORT_MAP = {
    theme : 't',
    'light-theme' : 'lt',
    'dark-theme' : 'dt',
    success : 's',
    warning : 'w',
    danger : 'd',
    primary : 'p',
    minor : 'm',
    info : 'i',
    black : 'bk',
    'light-black' : 'lbk',
    'extra-light-black' : 'elbk',
    blue : 'bu',
    'light-blue' : 'lbu',
    'extra-light-blue' : 'elbu',
    silver : 'si',
    'light-silver' : 'lsi',
    'extra-light-silver' : 'elsi',
    gray : 'g',
    'light-gray' : 'lg',
    white : 'wh'
};
const COLOR = [
    'theme',
    'light-theme',
    'dark-theme',
    'success',
    'warning',
    'danger',
    'primary',
    'minor',
    'info',
    'black',
    'light-black',
    'extra-light-black',
    'blue',
    'light-blue',
    'extra-light-blue',
    'silver',
    'light-silver',
    'extra-light-silver',
    'gray',
    'light-gray',
    'white'
];
const STATE_NA = [
    'normal',
    'apparent'
];
const STATE_NDR = [
    'normal',
    'disabled',
    'readonly'
];
const STATE_ALL = [
    'normal',
    'hover',
    'active',
    'disabled',
    'readonly',
    'apparent'
];

let e2eStatementFnString = `(ctx, type, attrs, basicDemoSelector) => {

    let prefix = {
        size : '.si-',
        color : '.co-',
        state_na : '.st-',
        state_all : '.st-',
        state_ndr : '.st-'
    };

    let data = {
        [type] : {},
        default : {}
    };

    for (let attr of attrs) {

        if (typeof attr === 'object') {

            let $basicDemo, $el;

            if (typeof basicDemoSelector === 'string') {
    
                $basicDemo = $(basicDemoSelector);

            } else {
    
                $basicDemo = $(ctx.basicDemo);

            }

            if (attr.child && attr.self) {
    
                $el = $basicDemo.filter(attr.self).eq(0).find(attr.child);

            }else if (attr.child) {
    
                $el = $basicDemo.eq(0).find(attr.child);

            } else if (attr.self) {
    
                $el = $basicDemo.filter(attr.self);

            } else {
                
                $el = $basicDemo.eq(0);

            }
            
            for (let sattr of attr.attrs) {

                data.default[attr.child+'|'+attr.self+'|'+sattr] = $el.css(sattr);

            }

        } else {

            if (typeof basicDemoSelector === 'string') {
    
                $basicDemo = $(basicDemoSelector);

            } else {
    
                $basicDemo = $(ctx.basicDemo);

            }

            data.default[attr] = $basicDemo.eq(0).css(attr);

        }

    }

    for (let item of ctx.common[type.toUpperCase()]) {

        for (let attr of attrs) {

            if (data[type][item] === undefined) {
    
                data[type][item] = {};

            }

            if (typeof attr === 'object') {

                let el;
                
                if (type === 'color') {

                    if (attr.child) {

                        el = $('[name="形态"] '+prefix[type]+ctx.common.COLOR_SHORT_MAP[item]+' '+attr.child).eq(0);

                    } else if (attr.self){

                        el = $('[name="形态"] '+prefix[type]+ctx.common.COLOR_SHORT_MAP[item]+attr.self).eq(0);

                    } else {

                        el = $('[name="形态"] '+prefix[type]+ctx.common.COLOR_SHORT_MAP[item]).eq(0);

                    }

                } else {

                    if (attr.child) {

                        el = $('[name="形态"] '+prefix[type]+item+' '+attr.child).eq(0);

                    } else if (attr.self){

                        el = $('[name="形态"] '+prefix[type]+item+attr.self).eq(0);

                    } else {

                        el = $('[name="形态"] '+prefix[type]+item).eq(0);

                    }
            
                }

                for (let sattr of attr.attrs) {
    
                    data[type][item][attr.child+'|'+attr.self+'|'+sattr] = el.css(sattr);

                }

            } else {
                
                if (type === 'color') {

                    if (attr.child) {

                        data[type][item][attr] = $('[name="形态"] '+prefix[type]+ctx.common.COLOR_SHORT_MAP[item]+' '+attr.child).eq(0).css(attr);

                    } else if (attr.self){

                        data[type][item][attr] = $('[name="形态"] '+prefix[type]+ctx.common.COLOR_SHORT_MAP[item]+attr.self).eq(0).css(attr);


                    } else {

                        data[type][item][attr] = $('[name="形态"] '+prefix[type]+ctx.common.COLOR_SHORT_MAP[item]).eq(0).css(attr);


                    }

                } else {

                    if (attr.child) {

                        data[type][item][attr] = $('[name="形态"] '+prefix[type]+item+' '+attr.child).eq(0).css(attr);

                    } else if (attr.self){

                        data[type][item][attr] = $('[name="形态"] '+prefix[type]+item+attr.self).eq(0).css(attr);


                    } else {

                        data[type][item][attr] = $('[name="形态"] '+prefix[type]+item).eq(0).css(attr);


                    }

                }

            }

        }

    }

    if (typeof basicDemoSelector === 'function') {
    
        basicDemoSelector(null, data);

    }
    
    return data;

}`;

let e2eRenderTestContent = `(ctx, done) => {

    
    let options = Object.assign({
        template : \`<div style="width:400px;">
            \$\{ctx.templateBefore || ''\}
            <ui-select
                ref="test"
                \$\{ctx.template\}
            >
            </ui-select>
        </div>\`
    }, eval(\`(\$\{ctx.options\})\`));

    window.testpage.$options.components.testcontent = Vue.extend(options);

    window.testpage.istest = true;
    window.testpage.$nextTick(done);

}`

let e2eGetValue = `(done) => done(null, window.morning.findVM('test').get())`;
let e2eSetValue = `(value, done) => {window.morning.findVM('test').set(value);done();}`;

let e2eBasicFnString = `ctx => ({
    style : window.getComputedStyle($(ctx.basicDemo)[0])
})`;

let getE2eDocUrl = tagName => (`${TEST_HOST}/component/${tagName}.html?istest`);

let getE2eTestUrl = () => (`${TEST_HOST}/e2etest.html?istest`);

export default {
    TEST_HOST,
    SIZE,
    COLOR,
    COLOR_SHORT_MAP,
    STATE_NA,
    STATE_ALL,
    STATE_NDR,
    e2eRenderTestContent,
    e2eGetValue,
    e2eSetValue,
    e2eStatementFnString,
    e2eBasicFnString,
    getE2eDocUrl,
    getE2eTestUrl
};
