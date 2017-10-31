import test                         from 'ava';
import snapshot                     from '../../helpers/snapshot';
import Vue                          from 'vue/dist/vue.common.js';
import mark                         from '../../../src/lib/components/mark/index.vue';

Vue.config.ignoredElements = ['i-mark'];

test('base : init component', async t => {

    const vm = new Vue(mark).$mount();

    t.plan(3);

    t.is(vm.uiid, 1);
    t.is(mark.options.name, 'mark');
    snapshot(t, vm);

});
