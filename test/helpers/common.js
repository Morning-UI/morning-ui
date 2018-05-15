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

let e2eStatementFnString = `(ctx, type, attrs, basicDemoSelector) => {

    let prefix = {
        size : '.si-',
        color : '.co-',
        state_na : '.st-'
    };

    let data = {
        [type] : {},
        default : {}
    };

    for (let attr of attrs) {

        if (typeof attr === 'object') {

            let $basicDemo, $el;

            if (typeof basicDemoSelector === 'string') {
    
                $basicDemo = $(basicDemoSelector).eq(0);

            } else {
    
                $basicDemo = $(ctx.basicDemo).eq(0);

            }

            if (attr.child) {
    
                $el = $basicDemo.find(attr.child);

            } else {
    
                $el = $basicDemo;

            }
            
            for (let sattr of attr.attrs) {

                data.default[attr.child+'|'+sattr] = $el.css(sattr);

            }

        } else {

            if (typeof basicDemoSelector === 'string') {
    
                $basicDemo = $(basicDemoSelector).eq(0);

            } else {
    
                $basicDemo = $(ctx.basicDemo).eq(0);

            }

            data.default[attr] = $basicDemo.css(attr);

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

                    el = $('[name="形态"] '+prefix[type]+ctx.common.COLOR_SHORT_MAP[item]+' '+attr.child).eq(0);

                } else {
            
                    el = $('[name="形态"] '+prefix[type]+item+' '+attr.child).eq(0);

                }
                
                for (let sattr of attr.attrs) {
    
                    data[type][item][attr.child+'|'+sattr] = el.css(sattr);

                }

            } else {
                
                if (type === 'color') {

                    data[type][item][attr] = $('[name="形态"] '+prefix[type]+ctx.common.COLOR_SHORT_MAP[item]).eq(0).css(attr);

                } else {

                    data[type][item][attr] = $('[name="形态"] '+prefix[type]+item).eq(0).css(attr);

                }

            }

        }

    }

    if (typeof basicDemoSelector === 'function') {
    
        basicDemoSelector(null, data);

    }
    
    return data;

}`;

let e2eBasicFnString = `ctx => ({
    style : window.getComputedStyle($('[name="开始"] mor-'+ctx.tagName)[0])
})`;

export default {
    TEST_HOST,
    SIZE,
    COLOR,
    COLOR_SHORT_MAP,
    STATE_NA,
    e2eStatementFnString,
    e2eBasicFnString
};
