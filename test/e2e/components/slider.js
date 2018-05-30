import test                         from 'ava';
import nightmare                    from 'nightmare';
import cleanstyle                   from '../../helpers/cleanstyle';
import common                       from '../../helpers/common';

const runner = nightmare({
    show : false
});

let tagName = 'slider';
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

test.serial('state', async t => {

    const result = await runner
        .goto(docUrl)
        .wait(basicDemo)
        .evaluate(
            eval(`(${common.e2eStatementFnString})`),
            context,
            'state_ndr',
            [{
                child : '.wrap',
                attrs : [
                    'cursor'
                ]
            },{
                child : '.wrap .track',
                attrs : [
                    'cursor',
                    'background'
                ]
            },{
                child : '.selected-line',
                attrs : [
                    'background'
                ]
            },{
                child : '.main-slider',
                attrs : [
                    'cursor',
                    'border-color'
                ]
            }]
        );

    t.plan(2);

    t.snapshot(result);
    t.is(JSON.stringify(result.state_ndr.normal), JSON.stringify(result.default));

});
