import test                         from 'ava';
import nightmare                    from 'nightmare';
import cleanstyle                   from '../../helpers/cleanstyle';
import common                       from '../../helpers/common';

const runner = nightmare({
    show : false
});

let tagName = 'itemlist';
let docUrl = common.getE2eDocUrl(tagName);
let basicDemo = `[name="开始"] mor-${tagName}`;

let context = {
    tagName,
    basicDemo,
    common
};

test.serial('basic style', async t => {

    const result = await runner
        .goto(docUrl)
        .wait(basicDemo)
        .evaluate(
            eval(`(${common.e2eBasicFnString})`),
            context
        );

    t.plan(1);

    cleanstyle(result.style);
    t.snapshot(result);

});

test.serial('size', async t => {

    const result = await runner
        .goto(docUrl)
        .wait(basicDemo)
        .evaluate(
            eval(`(${common.e2eStatementFnString})`),
            context,
            'size',
            [{
                child : ' li',
                attrs : [
                    'margin-top',
                    'padding-bottom'
                ]
            }, {
                child : ' li > mor-img',
                attrs : [
                    'height',
                    'width',
                    'padding'
                ]
            }, {
                child : ' li > .title',
                attrs : [
                    'font-size',
                    'padding'
                ]
            }, {
                child : ' li > .desc',
                attrs : [
                    'font-size',
                    'margin',
                    'padding'
                ]
            }, {
                child : ' li > .body',
                attrs : [
                    'font-size',
                    'margin',
                    'padding'
                ]
            }, {
                child : ' li > .additional',
                attrs : [
                    'font-size',
                    'padding'
                ]
            }]
        );

    t.plan(2);

    t.snapshot(result);
    t.is(JSON.stringify(result.size.m), JSON.stringify(result.default));

});

test.serial('underline', async t => {

    const result = await runner
        .goto(docUrl)
        .wait(basicDemo)
        .evaluate(() => ({
            'border-bottom' : $('[name="开始"] .underline li').css('border-bottom')
        }));

    t.plan(1);

    t.snapshot(result);

});
