import test                         from 'ava';
import snapshot                     from '../../helpers/snapshot';
import Vue                          from 'vue/dist/vue.common.js';
import lead                         from '../../../src/lib/components/lead/index.vue';

Vue.config.ignoredElements = ['i-lead'];

test('base : init component', async t => {

    const vm = new Vue(lead).$mount();

    t.plan(3);

    t.is(vm.uiid, 1);
    t.is(lead.options.name, 'lead');
    snapshot(t, vm);

});
