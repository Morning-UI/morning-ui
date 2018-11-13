import test                         from 'ava';
import nightmare                    from 'nightmare';
import cleanstyle                   from '../../helpers/cleanstyle';
import common                       from '../../helpers/common';

const runner = nightmare({
    show : false
});

let tagName = 'pagination';
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

    // cause : circleci use other webkit.
    delete result.style.inlineSize;
    delete result.style.perspectiveOrigin;
    delete result.style.webkitLogicalWidth;
    delete result.style.width;
    delete result.style.height;
    delete result.style.webkitLogicalHeight;
    delete result.style.blockSize;
    
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
                child : ' .list > a',
                attrs : [
                    'font-size',
                    'padding',
                    'line-height',
                    'height'
                ]
            }, {
                child : ' .list > a.ignore',
                attrs : [
                    'padding',
                    'line-height'
                ]
            }, {
                child : ' .list .page-jump .page-num > input',
                attrs : [
                    'font-size',
                    'padding',
                    'line-height',
                    'height'
                ]
            }, {
                child : ' .list .page-jump .mo-icon',
                attrs : [
                    'font-size',
                    'line-height'
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
                child : '.list > a',
                attrs : [
                    'background-color',
                    'color'
                ]
            }, {
                child : '.list > a.current',
                attrs : [
                    'background-color',
                    'color'
                ]
            }]
        );

    t.plan(2);

    t.snapshot(result);
    t.is(JSON.stringify(result.color.theme), JSON.stringify(result.default));

});
