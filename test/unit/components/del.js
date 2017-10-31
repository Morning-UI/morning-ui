import test                         from 'ava';
import snapshot                     from '../../helpers/snapshot';
import Vue                          from 'vue/dist/vue.common.js';
import del                          from '../../../src/lib/components/del/index.vue';

test('base : init component', async t => {

    const vm = new Vue(del).$mount();

    t.plan(3);

    t.is(vm.uiid, 1);
    t.is(del.options.name, 'del');
    snapshot(t, vm);

});
