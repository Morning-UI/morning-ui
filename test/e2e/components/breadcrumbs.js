import test                         from 'ava';
import nightmare                    from 'nightmare';
import cleanstyle                   from '../../helpers/cleanstyle';
import common                       from '../../helpers/common';

const runner = nightmare({
    show : true,
    openDevTools: {
    mode: 'detach'
  }
});

let tagName = 'link';
let docUrl = `${common.TEST_HOST}/component/${tagName}.html`;
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

    await new Promise((resolve) => {
        setTimeout(resolve, 28000);
    });

    await new Promise((resolve) => {
        setTimeout(resolve, 28000);
    });

    await new Promise((resolve) => {
        setTimeout(resolve, 28000);
    });

    await new Promise((resolve) => {
        setTimeout(resolve, 28000);
    });

    await new Promise((resolve) => {
        setTimeout(resolve, 28000);
    });

    await new Promise((resolve) => {
        setTimeout(resolve, 28000);
    });

    await new Promise((resolve) => {
        setTimeout(resolve, 28000);
    });

    cleanstyle(result.style);
    t.snapshot(result);

});

// test.serial('size', async t => {

//     const result = await runner
//         .goto(docUrl)
//         .wait(basicDemo)
//         .evaluate(
//             eval(`(${common.e2eStatementFnString})`),
//             context,
//             'size',
//             [{
//                 child : ' ul',
//                 attrs : [
//                     'height'
//                 ]
//             }, {
//                 child : ' li',
//                 attrs : [
//                     'font-size'
//                 ]
//             }, {
//                 child : ' li.separator',
//                 attrs : [
//                     'font-size',
//                     'vertical-align',
//                     'margin'
//                 ]
//             }]
//         );

//     t.plan(2);

//     t.snapshot(result);
//     t.is(JSON.stringify(result.size.m), JSON.stringify(result.default));

// });
