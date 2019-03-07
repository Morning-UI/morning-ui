import test                         from 'ava';
import nightmare                    from 'nightmare';
import cleanstyle                   from '../../helpers/cleanstyle';
import common                       from '../../helpers/common';

const runner = nightmare({
    show : false
});

let tagName = 'header';
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
                child : '',
                attrs : [
                    'font-size',
                    'padding-left',
                    'border-left-width'
                ]
            }, {
                child : 'small',
                attrs : [
                    'font-size',
                    'margin-left'
                ]
            }],
            '[_uiid="42"]'
        );

    t.plan(2);

    t.snapshot(result);
    t.is(JSON.stringify(result.size.m), JSON.stringify(result.default));

});

test.serial('color', async t => {

    const result = await runner
        .goto(docUrl)
        .wait(basicDemo)
        .evaluate(
            eval(`(${common.e2eStatementFnString})`),
            context,
            'color',
            [{
                child : '',
                attrs : [
                    'color'
                ]
            }, {
                child : ' .mark',
                attrs : [
                    'border-left-color'
                ]
            }, {
                child : ' .underline',
                attrs : [
                    'border-bottom-color'
                ]
            }, {
                child : ' small',
                attrs : [
                    'color'
                ]
            }],
            '[_uiid="42"]'
        );

    t.plan(2);

    t.snapshot(result);
    t.is(JSON.stringify(result.color.black), JSON.stringify(result.default));

});

test.serial('small title', async t => {

    const result = await runner
        .goto(docUrl)
        .wait(basicDemo)
        .evaluate(() => ({
            small : window.getComputedStyle($('[name="开始"] small')[0])
        }));

    t.plan(1);

    cleanstyle(result.small);
    t.snapshot(result);

});

test.serial('mark', async t => {

    const result = await runner
        .goto(docUrl)
        .wait(basicDemo)
        .evaluate(() => ({
            mark : window.getComputedStyle($('[name="开始"] .mark')[0])
        }));

    t.plan(1);

    cleanstyle(result.mark);
    t.snapshot(result);

});

test.serial('underline', async t => {

    const result = await runner
        .goto(docUrl)
        .wait(basicDemo)
        .evaluate(() => ({
            underline : window.getComputedStyle($('[name="开始"] .underline')[0])
        }));

    t.plan(1);

    cleanstyle(result.underline);
    t.snapshot(result);

});
