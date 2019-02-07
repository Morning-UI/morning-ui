import test                         from 'ava';
import snapshot                     from '../../helpers/snapshot';
import Vue                          from 'vue/dist/vue.common.js';
import link                         from '../../../src/lib/components/link/index.vue';
import commonTest                   from '../../common/unit';

const testOptions = {
    test,
    Vue,
    snapshot,
    component : window.morning._origin.Form.extend(link),
    name : 'link',
    attrs : ``,
    uiid : 2,
    delVmEl : false,
    _baseTestHookCustomMount : false
};

commonTest.componentBase(testOptions);

test.serial('config : link', async t => {

    const vm = new Vue({
        template : '<ui-link :link="link">链接</ui-link>',
        data : {
            link : 'https://www.google.com'
        },
        components : {
            'ui-link' : testOptions.component
        }
    });

    vm.$mount();

    t.plan(2);

    t.is(vm.$children[0].conf.link, 'https://www.google.com');
    snapshot(t, vm);

});
