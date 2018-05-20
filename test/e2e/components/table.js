import test                         from 'ava';
import nightmare                    from 'nightmare';
import cleanstyle                   from '../../helpers/cleanstyle';
import common                       from '../../helpers/common';

const runner = nightmare({
    show : false
});

let tagName = 'table';
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
                    'border-color'
                ]
            }, {
                child : 'header',
                attrs : [
                    'color',
                    'background-color'
                ]
            }, {
                child : '.co-style',
                attrs : [
                    'border-color'
                ]
            }, {
                child : '.co-style th',
                attrs : [
                    'color',
                    'border-color'
                ]
            }, {
                child : '.co-style td',
                attrs : [
                    'color',
                    'border-color'
                ]
            }, {
                child : '.co-style tr',
                attrs : [
                    'border-color'
                ]
            }]
        );

    t.plan(2);

    t.snapshot(result);
    t.is(JSON.stringify(result.color['light-gray']), JSON.stringify(result.default));

});
