import test                         from 'ava';
import nightmare                    from 'nightmare';

const runner = nightmare({
    show : true
});

// fot eslint
let $ = null;

test.serial('size', async t => {

    const result = await runner
        .goto('http://localhost:8080/component/h.html')
        .wait('[name="声明"]')
        .evaluate(() => ({
            size : {
                xxl : $('[name="声明"] .si-xxl').css('font-size'),
                xl : $('[name="声明"] .si-xl').css('font-size'),
                l : $('[name="声明"] .si-l').css('font-size'),
                m : $('[name="声明"] .si-m').css('font-size'),
                s : $('[name="声明"] .si-s').css('font-size'),
                xs : $('[name="声明"] .si-xs').css('font-size'),
                xxs : $('[name="声明"] .si-xxs').css('font-size')
            }
        }));

    t.plan(1);

    t.snapshot(result);

});
