import test                         from 'ava';
import nightmare                    from 'nightmare';
import cleanstyle                   from '../../helpers/cleanstyle';
import common                       from '../../helpers/common';

const runner = nightmare({
    show : true,
    openDevTools : true,
    waitTimeout : 600 * 1000
});

let tagName = 'select';
let docUrl = common.getE2eDocUrl(tagName);
let testUrl = common.getE2eTestUrl();
let basicDemo = `[name="开始"] mor-${tagName}`;

let context = {
    tagName,
    basicDemo,
    common
};

// test.serial('basic style', async t => {

//     const result = await runner
//         .goto(docUrl)
//         .wait(basicDemo)
//         .evaluate(
//             eval(`(${common.e2eBasicFnString})`),
//             context
//         );

//     t.plan(1);

//     cleanstyle(result.style);
//     t.snapshot(result);

// });

// test.serial('state', async t => {

//     const result = await runner
//         .goto(docUrl)
//         .wait(basicDemo)
//         .evaluate(
//             eval(`(${common.e2eStatementFnString})`),
//             context,
//             'state_ndr',
//             [{
//                 child : '.wrap',
//                 attrs : [
//                     'border-color',
//                     'background-color',
//                     'cursor',
//                     '-webkit-user-select'
//                 ]
//             }, {
//                 child : '.wrap > .morningicon',
//                 attrs : [
//                     'display'
//                 ]
//             }, {
//                 child : '.wrap > mor-multiinput',
//                 attrs : [
//                     'background'
//                 ]
//             }, {
//                 child : '.wrap > mor-textinput',
//                 attrs : [
//                     'display'
//                 ]
//             }]
//         );

//     t.plan(2);

//     t.snapshot(result);
//     t.is(JSON.stringify(result.state_ndr.normal), JSON.stringify(result.default));

// });

test.serial('config : list : list key is number', async t => {

    t.plan(16);

    const result = {};

    await runner
        .goto(testUrl)
        .refresh()
        .wait('body')
        .evaluate(
            eval(`(${common.e2eRenderTestContent})`),
            {
                template : `:list="[
                    {
                        key : 1,
                        name : 'Tim Boelaars'
                    },
                    {
                        key : 2,
                        name : 'Andrew Colin Beck'
                    },
                    {
                        key : 3,
                        name : 'Gustavo Zambelli'
                    },
                    {
                        key : 4,
                        name : 'Victor Erixon'
                    }
                ]"`
            }
        )
        .click('mor-select .wrap')
        .wait(300);

    result.listHeight = await runner.evaluate(() => $('.mor-select-wrap .list')[0].getBoundingClientRect().height);
    result.listItemShow = await runner.evaluate(() => $('.mor-select-wrap .list li:nth-child(2)')[0].getBoundingClientRect().height);

    await runner
        .click('.mor-select-wrap .list li:first-child')
        .wait(300);

    result.list2Height = await runner.evaluate(() => $('.mor-select-wrap .list')[0].getBoundingClientRect().height);
    result.listItem2Show = await runner.evaluate(() => $('.mor-select-wrap .list li:nth-child(2)')[0].getBoundingClientRect().height);

    await runner
        .click('mor-select .wrap')
        .wait(300);

    result.value = await runner.evaluate(eval(`(${common.e2eGetValue})`));
    result.selectedShow = await runner.visible('.mor-select-wrap .list li:first-child');
    result.unselectShow = await runner.visible('.mor-select-wrap .list li:not(:first-child):not(.infoitem)');
    result.noitemShow = await runner.visible('.mor-select-wrap .list li.infoitem.noitem');
    result.maxshowShow = await runner.visible('.mor-select-wrap .list li.infoitem.maxshow');

    await runner.evaluate(eval(`(${common.e2eSetValue})`), [2]);

    result.newvalue = await runner.evaluate(eval(`(${common.e2eGetValue})`));
    result.newSelectedShow = await runner.visible('.mor-select-wrap .list li:nth-child(2)');
    result.newUnselectShow = await runner.visible('.mor-select-wrap .list li:not(:nth-child(2)):not(.infoitem)');
    result.newNoitemShow = await runner.visible('.mor-select-wrap .list li.infoitem.noitem');
    result.newMaxshowShow = await runner.visible('.mor-select-wrap .list li.infoitem.maxshow');

    // 取/设值正确
    t.is(result.value[0], 1);
    t.is(result.value.length, 1);
    t.is(result.newvalue[0], 2);
    t.is(result.newvalue.length, 1);

    // 选中项目展示正确
    t.is(result.selectedShow, false);
    t.is(result.newSelectedShow, false);
    
    // 未选中项目展示正确
    t.is(result.unselectShow, true);
    t.is(result.newUnselectShow, true);

    // 无项目展示正确
    t.is(result.noitemShow, false);
    t.is(result.newNoitemShow, false);

    // 最大项目展示正确
    t.is(result.maxshowShow, false);
    t.is(result.newMaxshowShow, false);

    // 下拉列表显示正确
    t.is(result.listHeight > 0, true);
    t.is(result.listItemShow > 0, true);
    t.is(result.list2Height === 0, true);
    t.is(result.listItem2Show === 0, true);

    // 搜索命中项目展示正确
    // 无

    // 搜索未命中项目展示正确
    // 无

});

test.serial('config : list : is object', async t => {

    t.plan(16);

    const result = {};

    await runner
        .goto(testUrl)
        .refresh()
        .wait('body')
        .evaluate(
            eval(`(${common.e2eRenderTestContent})`),
            {
                template : `:list="{
                    1 : 'Tim Boelaars',
                    2 : 'Andrew Colin Beck',
                    3 : 'Gustavo Zambelli',
                    4 : 'Victor Erixon'
                }"`
            }
        )
        .click('mor-select .wrap')
        .wait(300);

    result.listHeight = await runner.evaluate(() => $('.mor-select-wrap .list')[0].getBoundingClientRect().height);
    result.listItemShow = await runner.evaluate(() => $('.mor-select-wrap .list li:nth-child(2)')[0].getBoundingClientRect().height);

    await runner
        .click('.mor-select-wrap .list li:first-child')
        .wait(300);

    result.list2Height = await runner.evaluate(() => $('.mor-select-wrap .list')[0].getBoundingClientRect().height);
    result.listItem2Show = await runner.evaluate(() => $('.mor-select-wrap .list li:nth-child(2)')[0].getBoundingClientRect().height);

    await runner
        .click('mor-select .wrap')
        .wait(300);

    result.value = await runner.evaluate(eval(`(${common.e2eGetValue})`));
    result.selectedShow = await runner.visible('.mor-select-wrap .list li:first-child');
    result.unselectShow = await runner.visible('.mor-select-wrap .list li:not(:first-child):not(.infoitem)');
    result.noitemShow = await runner.visible('.mor-select-wrap .list li.infoitem.noitem');
    result.maxshowShow = await runner.visible('.mor-select-wrap .list li.infoitem.maxshow');

    await runner.evaluate(eval(`(${common.e2eSetValue})`), ['2']);

    result.newvalue = await runner.evaluate(eval(`(${common.e2eGetValue})`));
    result.newSelectedShow = await runner.visible('.mor-select-wrap .list li:nth-child(2)');
    result.newUnselectShow = await runner.visible('.mor-select-wrap .list li:not(:nth-child(2)):not(.infoitem)');
    result.newNoitemShow = await runner.visible('.mor-select-wrap .list li.infoitem.noitem');
    result.newMaxshowShow = await runner.visible('.mor-select-wrap .list li.infoitem.maxshow');

    // 取/设值正确
    t.is(result.value[0], '1');
    t.is(result.value.length, 1);
    t.is(result.newvalue[0], '2');
    t.is(result.newvalue.length, 1);

    // 选中项目展示正确 
    t.is(result.selectedShow, false);
    t.is(result.newSelectedShow, false);
    
    // 未选中项目展示正确
    t.is(result.unselectShow, true);
    t.is(result.newUnselectShow, true);

    // 无项目展示正确
    t.is(result.noitemShow, false);
    t.is(result.newNoitemShow, false);

    // 最大项目展示正确
    t.is(result.maxshowShow, false);
    t.is(result.newMaxshowShow, false);

    // 下拉列表显示正确
    t.is(result.listHeight > 0, true);
    t.is(result.listItemShow > 0, true);
    t.is(result.list2Height === 0, true);
    t.is(result.listItem2Show === 0, true);

    // 搜索命中项目展示正确
    // 无

    // 搜索未命中项目展示正确
    // 无

});

test.serial('config : dynamic-list : basic', async t => {

    t.plan(16);

    const result = {};

    await runner
        .goto(testUrl)
        .refresh()
        .wait('body')
        .evaluate(
            eval(`(${common.e2eRenderTestContent})`),
            {
                template : `
                    :list="list"
                    :dynamic-list="true"
                `,
                options : `{
                    data : function () {
                        return {
                            list : {},
                            fulllist : {
                                tim : 'Tim Boelaars',
                                andrew : 'Andrew Colin Beck',
                                gustavo : 'Gustavo Zambelli',
                                victor : 'Victor Erixon',
                                shaun : 'Shaun Moynihan',
                                emir : 'Emir Ayouni',
                                katherine : 'Katherine Rainey',
                                jax : 'Jax Berndt',
                                elizabeth : 'Elizabeth Chiu',
                                sara : 'Sara Nicely',
                                anna : 'Anna Broussard'
                            }
                        };
                    },
                    methods : {
                        loadlist : function () {
                            setTimeout(() => {
                                this.list = this.fulllist;
                            }, 100);
                        }
                    },
                    mounted : function () {
                        this.loadlist();
                    }
                }`
            }
        )
        .click('mor-select .wrap')
        .wait(300);

    result.listHeight = await runner.evaluate(() => $('.mor-select-wrap .list')[0].getBoundingClientRect().height);
    result.listItemShow = await runner.evaluate(() => $('.mor-select-wrap .list li:nth-child(2)')[0].getBoundingClientRect().height);

    await runner
        .click('.mor-select-wrap .list li:first-child')
        .wait(300);

    result.list2Height = await runner.evaluate(() => $('.mor-select-wrap .list')[0].getBoundingClientRect().height);
    result.listItem2Show = await runner.evaluate(() => $('.mor-select-wrap .list li:nth-child(2)')[0].getBoundingClientRect().height);

    await runner
        .click('mor-select .wrap')
        .wait(300);

    result.value = await runner.evaluate(eval(`(${common.e2eGetValue})`));
    result.selectedShow = await runner.visible('.mor-select-wrap .list li:first-child');
    result.unselectShow = await runner.visible('.mor-select-wrap .list li:not(:first-child):not(.infoitem)');
    result.noitemShow = await runner.visible('.mor-select-wrap .list li.infoitem.noitem');
    result.maxshowShow = await runner.visible('.mor-select-wrap .list li.infoitem.maxshow');

    await runner.evaluate(eval(`(${common.e2eSetValue})`), ['andrew']);

    result.newvalue = await runner.evaluate(eval(`(${common.e2eGetValue})`));
    result.newSelectedShow = await runner.visible('.mor-select-wrap .list li:nth-child(2)');
    result.newUnselectShow = await runner.visible('.mor-select-wrap .list li:not(:nth-child(2)):not(.infoitem)');
    result.newNoitemShow = await runner.visible('.mor-select-wrap .list li.infoitem.noitem');
    result.newMaxshowShow = await runner.visible('.mor-select-wrap .list li.infoitem.maxshow');

    // 取/设值正确
    t.is(result.value[0], 'tim');
    t.is(result.value.length, 1);
    t.is(result.newvalue[0], 'andrew');
    t.is(result.newvalue.length, 1);

    // 选中项目展示正确 
    t.is(result.selectedShow, false);
    t.is(result.newSelectedShow, false);
    
    // 未选中项目展示正确
    t.is(result.unselectShow, true);
    t.is(result.newUnselectShow, true);

    // 无项目展示正确
    t.is(result.noitemShow, false);
    t.is(result.newNoitemShow, false);

    // 最大项目展示正确
    t.is(result.maxshowShow, false);
    t.is(result.newMaxshowShow, false);

    // 下拉列表显示正确
    t.is(result.listHeight > 0, true);
    t.is(result.listItemShow > 0, true);
    t.is(result.list2Height === 0, true);
    t.is(result.listItem2Show === 0, true);

    // 搜索命中项目展示正确
    // 无

    // 搜索未命中项目展示正确
    // 无

});

test.serial('config : dynamic-list : with validate', async t => {

    t.plan(20);

    const result = {};

    await runner
        .goto(testUrl)
        .refresh()
        .wait('body')
        .evaluate(
            eval(`(${common.e2eRenderTestContent})`),
            {
                template : `
                    :list="list"
                    :dynamic-list="true"
                    :validate="validate"
                `,
                options : `{
                    data : function () {
                        return {
                            list : {},
                            fulllist : {
                                tim : 'Tim Boelaars',
                                andrew : 'Andrew Colin Beck',
                                gustavo : 'Gustavo Zambelli',
                                victor : 'Victor Erixon',
                                shaun : 'Shaun Moynihan',
                                emir : 'Emir Ayouni',
                                katherine : 'Katherine Rainey',
                                jax : 'Jax Berndt',
                                elizabeth : 'Elizabeth Chiu',
                                sara : 'Sara Nicely',
                                anna : 'Anna Broussard'
                            }
                        };
                    },
                    methods : {
                        loadlist : function () {
                            setTimeout(() => {
                                this.list = this.fulllist;
                            }, 100);
                        },
                        validate : function (key) {
                            if (key === 'tim') {
                                return false;
                            }
                        }
                    },
                    mounted : function () {
                        this.loadlist();
                    }
                }`
            }
        )
        .click('mor-select .wrap')
        .wait(300);

    result.listHeight = await runner.evaluate(() => $('.mor-select-wrap .list')[0].getBoundingClientRect().height);
    result.listItemShow = await runner.evaluate(() => $('.mor-select-wrap .list li:nth-child(2)')[0].getBoundingClientRect().height);

    await runner
        .click('.mor-select-wrap .list li:first-child')
        .wait(300);

    result.list2Height = await runner.evaluate(() => $('.mor-select-wrap .list')[0].getBoundingClientRect().height);
    result.listItem2Show = await runner.evaluate(() => $('.mor-select-wrap .list li:nth-child(2)')[0].getBoundingClientRect().height);

    await runner
        .click('mor-select .wrap')
        .wait(300);

    result.value = await runner.evaluate(eval(`(${common.e2eGetValue})`));
    result.selectedShow = await runner.visible('.mor-select-wrap .list li:first-child');
    result.unselectShow = await runner.visible('.mor-select-wrap .list li:not(:first-child):not(.infoitem)');
    result.noitemShow = await runner.visible('.mor-select-wrap .list li.infoitem.noitem');
    result.maxshowShow = await runner.visible('.mor-select-wrap .list li.infoitem.maxshow');

    await runner.evaluate(eval(`(${common.e2eSetValue})`), ['andrew']);

    result.newvalue = await runner.evaluate(eval(`(${common.e2eGetValue})`));
    result.newSelectedShow = await runner.visible('.mor-select-wrap .list li:nth-child(2)');
    result.newUnselectShow = await runner.visible('.mor-select-wrap .list li:not(:nth-child(2)):not(.infoitem)');
    result.newNoitemShow = await runner.visible('.mor-select-wrap .list li.infoitem.noitem');
    result.newMaxshowShow = await runner.visible('.mor-select-wrap .list li.infoitem.maxshow');

    await runner
        .click('.mor-select-wrap .list li:first-child');

    result.new2value = await runner.evaluate(eval(`(${common.e2eGetValue})`));
    result.new2SelectedShow = await runner.visible('.mor-select-wrap .list li:nth-child(2)');
    result.new2UnselectShow = await runner.visible('.mor-select-wrap .list li:not(:nth-child(2)):not(.infoitem)');
    result.new2NoitemShow = await runner.visible('.mor-select-wrap .list li.infoitem.noitem');
    result.new2MaxshowShow = await runner.visible('.mor-select-wrap .list li.infoitem.maxshow');

    // 取/设值正确
    t.is(result.value.length, 0);
    t.is(result.newvalue[0], 'andrew');
    t.is(result.newvalue.length, 1);
    t.is(result.new2value.length, 0);

    // 选中项目展示正确 
    t.is(result.selectedShow, true);
    t.is(result.newSelectedShow, false);
    t.is(result.new2SelectedShow, true);
    
    // 未选中项目展示正确
    t.is(result.unselectShow, true);
    t.is(result.newUnselectShow, true);
    t.is(result.new2UnselectShow, true);

    // 无项目展示正确
    t.is(result.noitemShow, false);
    t.is(result.newNoitemShow, false);
    t.is(result.new2NoitemShow, false);

    // 最大项目展示正确
    t.is(result.maxshowShow, false);
    t.is(result.newMaxshowShow, false);
    t.is(result.new2MaxshowShow, false);

    // 下拉列表显示正确
    t.is(result.listHeight > 0, true);
    t.is(result.listItemShow > 0, true);
    t.is(result.list2Height === 0, true);
    t.is(result.listItem2Show === 0, true);

    // 搜索命中项目展示正确
    // 无

    // 搜索未命中项目展示正确
    // 无

});

test.serial('config : dynamic-list : only validate', async t => {

    t.plan(16);

    const result = {};

    await runner
        .goto(testUrl)
        .refresh()
        .wait('body')
        .evaluate(
            eval(`(${common.e2eRenderTestContent})`),
            {
                template : `
                    :list="list"
                    :validate="validate"
                `,
                options : `{
                    data : function () {
                        return {
                            list : {
                                'tim' : 'Tim Boelaars',
                                'andrew' : 'Andrew Colin Beck',
                                'gustavo' : 'Gustavo Zambelli',
                                'victor' : 'Victor Erixon'
                            }
                        };
                    },
                    methods : {
                        validate : function (key) {
                            if (key === 'tim') {
                                return false;
                            }
                        }
                    }
                }`
            }
        )
        .click('mor-select .wrap')
        .wait(300);

    result.listHeight = await runner.evaluate(() => $('.mor-select-wrap .list')[0].getBoundingClientRect().height);
    result.listItemShow = await runner.evaluate(() => $('.mor-select-wrap .list li:nth-child(2)')[0].getBoundingClientRect().height);

    await runner
        .click('.mor-select-wrap .list li:first-child')
        .wait(300);

    result.list2Height = await runner.evaluate(() => $('.mor-select-wrap .list')[0].getBoundingClientRect().height);
    result.listItem2Show = await runner.evaluate(() => $('.mor-select-wrap .list li:nth-child(2)')[0].getBoundingClientRect().height);

    await runner
        .click('mor-select .wrap')
        .wait(300);

    result.value = await runner.evaluate(eval(`(${common.e2eGetValue})`));
    result.selectedShow = await runner.visible('.mor-select-wrap .list li:first-child');
    result.unselectShow = await runner.visible('.mor-select-wrap .list li:not(:first-child):not(.infoitem)');
    result.noitemShow = await runner.visible('.mor-select-wrap .list li.infoitem.noitem');
    result.maxshowShow = await runner.visible('.mor-select-wrap .list li.infoitem.maxshow');

    await runner.evaluate(eval(`(${common.e2eSetValue})`), ['andrew']);

    result.newvalue = await runner.evaluate(eval(`(${common.e2eGetValue})`));
    result.newSelectedShow = await runner.visible('.mor-select-wrap .list li:nth-child(2)');
    result.newUnselectShow = await runner.visible('.mor-select-wrap .list li:not(:nth-child(2)):not(.infoitem)');
    result.newNoitemShow = await runner.visible('.mor-select-wrap .list li.infoitem.noitem');
    result.newMaxshowShow = await runner.visible('.mor-select-wrap .list li.infoitem.maxshow');

    // 取/设值正确
    t.is(result.value[0], 'tim');
    t.is(result.value.length, 1);
    t.is(result.newvalue[0], 'andrew');
    t.is(result.newvalue.length, 1);

    // 选中项目展示正确 
    t.is(result.selectedShow, false);
    t.is(result.newSelectedShow, false);
    
    // 未选中项目展示正确
    t.is(result.unselectShow, true);
    t.is(result.newUnselectShow, true);

    // 无项目展示正确
    t.is(result.noitemShow, false);
    t.is(result.newNoitemShow, false);

    // 最大项目展示正确
    t.is(result.maxshowShow, false);
    t.is(result.newMaxshowShow, false);

    // 下拉列表显示正确
    t.is(result.listHeight > 0, true);
    t.is(result.listItemShow > 0, true);
    t.is(result.list2Height === 0, true);
    t.is(result.listItem2Show === 0, true);

    // 搜索命中项目展示正确
    // 无

    // 搜索未命中项目展示正确
    // 无

});

test.serial('config : separate-emit : basic', async t => {

    t.plan(18);

    const result = {};

    await runner
        .goto(testUrl)
        .refresh()
        .wait('body')
        .evaluate(
            eval(`(${common.e2eRenderTestContent})`),
            {
                templateBefore : `
                    <ui-btn class="testbtn">点击选择</ui-btn>
                `,
                template : `
                    :list="{
                        'tim' : 'Tim Boelaars',
                        'andrew' : 'Andrew Colin Beck',
                        'gustavo' : 'Gustavo Zambelli',
                        'victor' : 'Victor Erixon'
                    }"
                    separate-emit=".testbtn"
                `
            }
        )
        .click('.testbtn')
        .wait(300);

    result.wrapShow = await runner.evaluate(() => $('.mor-select-wrap .wrap')[0].getBoundingClientRect().height);
    result.listShow = await runner.evaluate(() => $('.mor-select-wrap .list')[0].getBoundingClientRect().height);
    result.listItemShow = await runner.evaluate(() => $('.mor-select-wrap .list li:nth-child(2)')[0].getBoundingClientRect().height);

    await runner
        .click('.mor-select-wrap .list li:first-child')
        .wait(300);

    result.wrap2Show = await runner.evaluate(() => $('.mor-select-wrap .wrap')[0].getBoundingClientRect().height);
    result.list2Show = await runner.evaluate(() => $('.mor-select-wrap .list')[0].getBoundingClientRect().height);
    result.listItem2Show = await runner.evaluate(() => $('.mor-select-wrap .list li:nth-child(2)')[0].getBoundingClientRect().height);

    await runner
        .click('.testbtn')
        .wait(300);

    result.value = await runner.evaluate(eval(`(${common.e2eGetValue})`));
    result.selectedShow = await runner.visible('.mor-select-wrap .list li:first-child');
    result.unselectShow = await runner.visible('.mor-select-wrap .list li:not(:first-child):not(.infoitem)');
    result.noitemShow = await runner.visible('.mor-select-wrap .list li.infoitem.noitem');
    result.maxshowShow = await runner.visible('.mor-select-wrap .list li.infoitem.maxshow');

    await runner.evaluate(eval(`(${common.e2eSetValue})`), ['andrew']);

    result.newvalue = await runner.evaluate(eval(`(${common.e2eGetValue})`));
    result.newSelectedShow = await runner.visible('.mor-select-wrap .list li:nth-child(2)');
    result.newUnselectShow = await runner.visible('.mor-select-wrap .list li:not(:nth-child(2)):not(.infoitem)');
    result.newNoitemShow = await runner.visible('.mor-select-wrap .list li.infoitem.noitem');
    result.newMaxshowShow = await runner.visible('.mor-select-wrap .list li.infoitem.maxshow');

    // 取/设值正确
    t.is(result.value[0], 'tim');
    t.is(result.value.length, 1);
    t.is(result.newvalue[0], 'andrew');
    t.is(result.newvalue.length, 1);

    // 选中项目展示正确 
    t.is(result.selectedShow, false);
    t.is(result.newSelectedShow, false);
    
    // 未选中项目展示正确
    t.is(result.unselectShow, true);
    t.is(result.newUnselectShow, true);

    // 无项目展示正确
    t.is(result.noitemShow, false);
    t.is(result.newNoitemShow, false);

    // 最大项目展示正确
    t.is(result.maxshowShow, false);
    t.is(result.newMaxshowShow, false);

    // 下拉列表显示正确
    t.is(result.wrapShow > 0, true);
    t.is(result.listShow > 0, true);
    t.is(result.listItemShow > 0, true);
    t.is(result.wrap2Show === 0, true);
    t.is(result.list2Show === 0, true);
    t.is(result.listItem2Show === 0, true);

    // 搜索命中项目展示正确
    // 无

    // 搜索未命中项目展示正确
    // 无

});

test.serial('config : separate-emit : with dynamic-list', async t => {

    t.plan(18);

    const result = {};

    await runner
        .goto(testUrl)
        .refresh()
        .wait('body')
        .evaluate(
            eval(`(${common.e2eRenderTestContent})`),
            {
                templateBefore : `
                    <ui-btn class="testbtn">点击选择</ui-btn>
                `,
                template : `
                    :list="list"
                    :dynamic-list="true"
                    separate-emit=".testbtn"
                `,
                options : `{
                    data : function () {
                        return {
                            list : {},
                            fulllist : {
                                tim : 'Tim Boelaars',
                                andrew : 'Andrew Colin Beck',
                                gustavo : 'Gustavo Zambelli',
                                victor : 'Victor Erixon',
                                shaun : 'Shaun Moynihan',
                                emir : 'Emir Ayouni',
                                katherine : 'Katherine Rainey',
                                jax : 'Jax Berndt',
                                elizabeth : 'Elizabeth Chiu',
                                sara : 'Sara Nicely',
                                anna : 'Anna Broussard'
                            }
                        };
                    },
                    methods : {
                        loadlist : function () {
                            setTimeout(() => {
                                this.list = this.fulllist;
                            }, 100);
                        }
                    },
                    mounted : function () {
                        this.loadlist();
                    }
                }`
            }
        )
        .click('.testbtn')
        .wait(300);

    result.wrapShow = await runner.evaluate(() => $('.mor-select-wrap .wrap')[0].getBoundingClientRect().height);
    result.listShow = await runner.evaluate(() => $('.mor-select-wrap .list')[0].getBoundingClientRect().height);
    result.listItemShow = await runner.evaluate(() => $('.mor-select-wrap .list li:nth-child(2)')[0].getBoundingClientRect().height);

    await runner
        .click('.mor-select-wrap .list li:first-child')
        .wait(300);

    result.wrap2Show = await runner.evaluate(() => $('.mor-select-wrap .wrap')[0].getBoundingClientRect().height);
    result.list2Show = await runner.evaluate(() => $('.mor-select-wrap .list')[0].getBoundingClientRect().height);
    result.listItem2Show = await runner.evaluate(() => $('.mor-select-wrap .list li:nth-child(2)')[0].getBoundingClientRect().height);

    await runner
        .click('.testbtn')
        .wait(300);

    result.value = await runner.evaluate(eval(`(${common.e2eGetValue})`));
    result.selectedShow = await runner.visible('.mor-select-wrap .list li:first-child');
    result.unselectShow = await runner.visible('.mor-select-wrap .list li:not(:first-child):not(.infoitem)');
    result.noitemShow = await runner.visible('.mor-select-wrap .list li.infoitem.noitem');
    result.maxshowShow = await runner.visible('.mor-select-wrap .list li.infoitem.maxshow');

    await runner.evaluate(eval(`(${common.e2eSetValue})`), ['andrew']);

    result.newvalue = await runner.evaluate(eval(`(${common.e2eGetValue})`));
    result.newSelectedShow = await runner.visible('.mor-select-wrap .list li:nth-child(2)');
    result.newUnselectShow = await runner.visible('.mor-select-wrap .list li:not(:nth-child(2)):not(.infoitem)');
    result.newNoitemShow = await runner.visible('.mor-select-wrap .list li.infoitem.noitem');
    result.newMaxshowShow = await runner.visible('.mor-select-wrap .list li.infoitem.maxshow');

    // 取/设值正确
    t.is(result.value[0], 'tim');
    t.is(result.value.length, 1);
    t.is(result.newvalue[0], 'andrew');
    t.is(result.newvalue.length, 1);

    // 选中项目展示正确 
    t.is(result.selectedShow, false);
    t.is(result.newSelectedShow, false);
    
    // 未选中项目展示正确
    t.is(result.unselectShow, true);
    t.is(result.newUnselectShow, true);

    // 无项目展示正确
    t.is(result.noitemShow, false);
    t.is(result.newNoitemShow, false);

    // 最大项目展示正确
    t.is(result.maxshowShow, false);
    t.is(result.newMaxshowShow, false);

    // 下拉列表显示正确
    t.is(result.wrapShow > 0, true);
    t.is(result.listShow > 0, true);
    t.is(result.listItemShow > 0, true);
    t.is(result.wrap2Show === 0, true);
    t.is(result.list2Show === 0, true);
    t.is(result.listItem2Show === 0, true);

    // 搜索命中项目展示正确
    // 无

    // 搜索未命中项目展示正确
    // 无

});

test.serial('config : align : center', async t => {

    t.plan(11);

    const result = {};

    await runner
        .goto(testUrl)
        .refresh()
        .wait('body')
        .evaluate(
            eval(`(${common.e2eRenderTestContent})`),
            {
                template : `
                    :list="{
                        'tim' : 'Tim Boelaars',
                        'andrew' : 'Andrew Colin Beck',
                        'gustavo' : 'Gustavo Zambelli',
                        'victor' : 'Victor Erixon'
                    }"
                    align="center"
                `
            }
        )
        .click('mor-select .wrap')
        .wait(300);

    result.listHeight = await runner.evaluate(() => $('.mor-select-wrap .list')[0].getBoundingClientRect().height);
    result.listItemShow = await runner.evaluate(() => $('.mor-select-wrap .list li:nth-child(2)')[0].getBoundingClientRect().height);

    await runner
        .click('.mor-select-wrap .list li:first-child')
        .wait(300);

    result.list2Height = await runner.evaluate(() => $('.mor-select-wrap .list')[0].getBoundingClientRect().height);
    result.listItem2Show = await runner.evaluate(() => $('.mor-select-wrap .list li:nth-child(2)')[0].getBoundingClientRect().height);

    await runner
        .click('mor-select .wrap')
        .wait(300);

    result.value = await runner.evaluate(eval(`(${common.e2eGetValue})`));
    result.selectedShow = await runner.visible('.mor-select-wrap .list li:first-child');
    result.unselectShow = await runner.visible('.mor-select-wrap .list li:not(:first-child):not(.infoitem)');
    result.noitemShow = await runner.visible('.mor-select-wrap .list li.infoitem.noitem');
    result.maxshowShow = await runner.visible('.mor-select-wrap .list li.infoitem.maxshow');
    result.textalign = await runner.evaluate(() => window.getComputedStyle($('mor-select .wrap .selected')[0]).textAlign);

    // 取/设值正确
    t.is(result.value[0], 'tim');
    t.is(result.value.length, 1);

    // 选中项目展示正确
    t.is(result.selectedShow, false);
    t.is(result.textalign, 'center');
    
    // 未选中项目展示正确
    t.is(result.unselectShow, true);

    // 无项目展示正确
    t.is(result.noitemShow, false);

    // 最大项目展示正确
    t.is(result.maxshowShow, false);

    // 下拉列表显示正确
    t.is(result.listHeight > 0, true);
    t.is(result.listItemShow > 0, true);
    t.is(result.list2Height === 0, true);
    t.is(result.listItem2Show === 0, true);

    // 搜索命中项目展示正确
    // 无

    // 搜索未命中项目展示正确
    // 无

});

test.serial('config : align : right', async t => {

    t.plan(11);

    const result = {};

    await runner
        .goto(testUrl)
        .refresh()
        .wait('body')
        .evaluate(
            eval(`(${common.e2eRenderTestContent})`),
            {
                template : `
                    :list="{
                        'tim' : 'Tim Boelaars',
                        'andrew' : 'Andrew Colin Beck',
                        'gustavo' : 'Gustavo Zambelli',
                        'victor' : 'Victor Erixon'
                    }"
                    align="right"
                `
            }
        )
        .click('mor-select .wrap')
        .wait(300);

    result.listHeight = await runner.evaluate(() => $('.mor-select-wrap .list')[0].getBoundingClientRect().height);
    result.listItemShow = await runner.evaluate(() => $('.mor-select-wrap .list li:nth-child(2)')[0].getBoundingClientRect().height);

    await runner
        .click('.mor-select-wrap .list li:first-child')
        .wait(300);

    result.list2Height = await runner.evaluate(() => $('.mor-select-wrap .list')[0].getBoundingClientRect().height);
    result.listItem2Show = await runner.evaluate(() => $('.mor-select-wrap .list li:nth-child(2)')[0].getBoundingClientRect().height);

    await runner
        .click('mor-select .wrap')
        .wait(300);

    result.value = await runner.evaluate(eval(`(${common.e2eGetValue})`));
    result.selectedShow = await runner.visible('.mor-select-wrap .list li:first-child');
    result.unselectShow = await runner.visible('.mor-select-wrap .list li:not(:first-child):not(.infoitem)');
    result.noitemShow = await runner.visible('.mor-select-wrap .list li.infoitem.noitem');
    result.maxshowShow = await runner.visible('.mor-select-wrap .list li.infoitem.maxshow');
    result.textalign = await runner.evaluate(() => window.getComputedStyle($('mor-select .wrap .selected')[0]).textAlign);

    // 取/设值正确
    t.is(result.value[0], 'tim');
    t.is(result.value.length, 1);

    // 选中项目展示正确
    t.is(result.selectedShow, false);
    t.is(result.textalign, 'right');
    
    // 未选中项目展示正确
    t.is(result.unselectShow, true);

    // 无项目展示正确
    t.is(result.noitemShow, false);

    // 最大项目展示正确
    t.is(result.maxshowShow, false);

    // 下拉列表显示正确
    t.is(result.listHeight > 0, true);
    t.is(result.listItemShow > 0, true);
    t.is(result.list2Height === 0, true);
    t.is(result.listItem2Show === 0, true);

    // 搜索命中项目展示正确
    // 无

    // 搜索未命中项目展示正确
    // 无

});

test.serial('config : prepend', async t => {

    t.plan(2);

    const result = {};

    await runner
        .goto(testUrl)
        .refresh()
        .wait('body')
        .evaluate(
            eval(`(${common.e2eRenderTestContent})`),
            {
                template : `
                    :list="{
                        'tim' : 'Tim Boelaars',
                        'andrew' : 'Andrew Colin Beck',
                        'gustavo' : 'Gustavo Zambelli',
                        'victor' : 'Victor Erixon'
                    }"
                    prepend="Designer"
                `
            }
        )
        .click('mor-select .wrap')
        .wait(300);

    result.selectWrapWidth = await runner.evaluate(() => $('.mor-select-wrap')[0].getBoundingClientRect().width);
    result.selectAreaWidth = await runner.evaluate(() => $('mor-select .select-area')[0].getBoundingClientRect().width);
    result.addonWidth = await runner.evaluate(() => $('mor-select .input-group-addon')[0].getBoundingClientRect().width);
    result.selectWidth = await runner.evaluate(() => $('mor-select')[0].getBoundingClientRect().width);

    result.selectWrapWidth = Math.round(result.selectWrapWidth);
    result.selectAreaWidth = Math.round(result.selectAreaWidth);
    result.addonWidth = Math.round(result.addonWidth);
    result.selectWidth = Math.round(result.selectWidth);

    // 取/设值正确

    // 选中项目展示正确
    t.is(result.selectAreaWidth + result.addonWidth - result.selectWidth, 0);
    t.is(result.selectWrapWidth, result.selectAreaWidth);
    
    // 未选中项目展示正确

    // 无项目展示正确

    // 最大项目展示正确

    // 下拉列表显示正确

    // 搜索命中项目展示正确
    // 无

    // 搜索未命中项目展示正确
    // 无

});

// ========================================================================================================
// ========================================================================================================
// ========================================================================================================

// - CHECK LIST
//     + 取值正确
//     + 设值正确
//     + 选中项目展示正确
//     + 未选中项目展示正确
//     + 搜索未命中项目展示正确
//     + 提示展示正确

// - UI Select
//     - default-value
//     - value is number√
//     - list√
//     - dynamic-list√
//     - dynamic-list && validate√
//     - only validate√
//     - separate-emit√
//     - separate-emit && dynamic-list√
//     - align center√
//     - align right√
//     - prepend√
//     - max-show
//     - max-show && dynamic-list
//     - max-show && dynamic-list && separate-emit
//     - max-show-height
//     - auto-close
//     - can-search
//     - can-search && dynamic-list
//     - can-search && separate-emit
//     - can-search && max-show
//     - can-search && dynamic-list && max-show
//     - can-search && separate-emit && dynamic-list
//     - can-search && separate-emit && max-show
//     - multi-select
//     - multi-select && can-search
//     - multi-select && dynamic-list
//     - multi-select && separate-emit
//     - multi-select && max-show
//     - multi-select && dynamic-list && max-show
//     - multi-select && dynamic-list && separate-emit
//     - multi-select && dynamic-list && can-search
//     - multi-select && separate-emit && max-show
//     - multi-select && separate-emit && can-search
//     - multi-select && can-search && max-show
//     - multi-select && separate-emit && can-search && max-show
//     - multi-select && separate-emit && can-search && dynamic-list
//     - max && multi-select
//     - only max
//     - max && multi-select && can-search
//     - max && multi-select && dynamic-list
//     - max && multi-select && max-show
//     - auto-reset-search && multi-select && can-search
//     - auto-reset-search && multi-select && can-search && max-show
//     - auto-reset-search && multi-select && can-search && dynamic-list
//     - only multi-select && auto-reset-search
//     - only can-search && auto-reset-search
//     - only auto-reset-search
//     - hide-selected
//     - hide-selected && dynamic-list
//     - hide-selected && separate-emit
//     - hide-selected && max-show
//     - hide-selected && can-search
//     - hide-selected && multi-select
//     - hide-selected && max && multi-select
//     - inline-img-size
//     - item-tip
//     - item-tip-direct
//     - list-width