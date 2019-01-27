import test                         from 'ava';
import nightmare                    from 'nightmare';
import cleanstyle                   from '../../helpers/cleanstyle';
import common                       from '../../helpers/common';

const runner = nightmare({
    show : false
});

let tagName = 'dialog';
let docUrl = common.getE2eDocUrl(tagName);
let basicDemo = `mor-${tagName}`;

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
    delete result.style.blockSize;
    delete result.style.height;
    delete result.style.perspectiveOrigin;
    delete result.style.webkitLogicalHeight;

    t.snapshot(result);

});

// NOTE : 因为dialog会被移到原有的节点之外，暂时无法获取正确的元素，暂不测试color
// test.serial('color', async t => {

//     const result = await runner
//         .goto(docUrl)
//         .wait(basicDemo)
//         .evaluate(
//             eval(`(${common.e2eStatementFnString})`),
//             context,
//             'color',
//             [{
//                 child : '.content > header',
//                 attrs : [
//                     'background-color',
//                     'color'
//                 ]
//             }],
//             'mor-dialog.has-header'
//         );

//     t.plan(2);

//     console.log(result);

//     t.snapshot(result);
//     t.is(JSON.stringify(result.color.theme), JSON.stringify(result.default));

// });
