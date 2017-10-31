import test                         from 'ava';
import nightmare                    from 'nightmare';

const runner = nightmare({
    show : false
});

let testHost = 'http://localhost:8089';

// fot eslint
let $ = null;

test.serial('size', async t => {

    const result = await runner
        .goto(`${testHost}/component/h.html`)
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

test.serial('style', async t => {

    const result = await runner
        .goto(`${testHost}/component/h.html`)
        .wait('[name="声明"]')
        .evaluate(() => ({
            color : {
                theme : $('[name="声明"] .sy-theme').css('color'),
                lightTheme : $('[name="声明"] .sy-lightTheme').css('color'),
                darkTheme : $('[name="声明"] .sy-darkTheme').css('color'),
                success : $('[name="声明"] .sy-success').css('color'),
                warning : $('[name="声明"] .sy-warning').css('color'),
                danger : $('[name="声明"] .sy-danger').css('color'),
                primary : $('[name="声明"] .sy-primary').css('color'),
                minor : $('[name="声明"] .sy-minor').css('color'),
                info : $('[name="声明"] .sy-info').css('color'),
                black : $('[name="声明"] .sy-black').css('color'),
                lightBlack : $('[name="声明"] .sy-lightBlack').css('color'),
                extraLightBlack : $('[name="声明"] .sy-extraLightBlack').css('color'),
                blue : $('[name="声明"] .sy-blue').css('color'),
                lightBlue : $('[name="声明"] .sy-lightBlue').css('color'),
                extraLightBlue : $('[name="声明"] .sy-extraLightBlue').css('color'),
                silver : $('[name="声明"] .sy-silver').css('color'),
                lightSilver : $('[name="声明"] .sy-lightSilver').css('color'),
                extraLightSilver : $('[name="声明"] .sy-extraLightSilver').css('color'),
                gray : $('[name="声明"] .sy-gray').css('color'),
                lightGray : $('[name="声明"] .sy-lightGray').css('color'),
                white : $('[name="声明"] .sy-white').css('color')
            }
        }));

    t.plan(1);

    t.snapshot(result);

});

test.serial('state', async t => {

    const result = await runner
        .goto(`${testHost}/component/h.html`)
        .wait('[name="声明"]')
        .evaluate(() => ({
            animationName : {
                theme : $('[name="声明"] .st-normal').css('animation-name'),
                lightTheme : $('[name="声明"] .st-apparent').css('animation-name')
            }
        }));

    t.plan(1);

    t.snapshot(result);

});
