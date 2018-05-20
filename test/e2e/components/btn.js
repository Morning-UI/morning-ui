import test                         from 'ava';
import nightmare                    from 'nightmare';
import cleanstyle                   from '../../helpers/cleanstyle';
import common                       from '../../helpers/common';

const runner = nightmare({
    show : false
});

let tagName = 'btn';
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
                attrs : [
                    'font-size',
                    'height',
                    'line-height',
                    'padding'
                ]
            }, {
                child : ' .morningicon',
                attrs : [
                    'font-size',
                    'transform-origin'
                ]
            }]
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
                attrs : [
                    'background-color',
                    'color'
                ]
            }, {
                self : '.st-hover',
                attrs : [
                    'background-color'
                ]
            }, {
                self : '.st-active',
                attrs : [
                    'background-color'
                ]
            }, {
                self : '.st-disabled',
                attrs : [
                    'color'
                ]
            }]
        );

    const result2 = await runner
        .goto(docUrl)
        .wait(basicDemo)
        .evaluate(
            eval(`(${common.e2eStatementFnString})`),
            context,
            'color',
            [{
                attrs : [
                    'background-color',
                    'color'
                ]
            }]
        );

    t.plan(2);

    t.snapshot(result);
    t.is(JSON.stringify(result2.color.theme), JSON.stringify(result2.default));

});

test.serial('state', async t => {

    const result = await runner
        .goto(docUrl)
        .wait(basicDemo)
        .evaluate(
            eval(`(${common.e2eStatementFnString})`),
            context,
            'state_all',
            [
                'box-shadow',
                'cursor',
                'animation-name',
                'animation-duration',
                'animation-timing-function',
                'animation-iteration-count'
            ]
        );

    t.plan(2);

    t.snapshot(result);
    t.is(JSON.stringify(result.state_all.normal), JSON.stringify(result.default));

});
