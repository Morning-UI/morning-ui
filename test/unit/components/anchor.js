import test                         from 'ava';
import snapshot                     from '../../helpers/snapshot';
import Vue                          from 'vue/dist/vue.common.js';
import anchor                       from '../../../src/lib/components/anchor/index.vue';
import commonTest                   from '../../common/unit';

const testOptions = {
    test,
    Vue,
    snapshot,
    component : window.morning._origin.Form.extend(anchor),
    name : 'anchor',
    attrs : `:id="scope.name" :title="scope.name" is-anchor`,
    uiid : 3,
    delVmEl : false,
    _baseTestHookCustomMount : false
};

commonTest.componentBase(testOptions);
commonTest.componentDynamicSlot(testOptions, {
    testNum : 8,
    firstCheck : (t, vm) => {

        t.is(vm.$children[0].data.list[0].title, 'first');
        t.is(vm.$children[0].data.list[2].title, 'third');
        t.is(vm.$children[0].data.list[2].anchor, 'third');

    },
    secondCheck : (t, vm) => {
                
        t.is(vm.$children[0].data.list[0].title, '4th');
        t.is(vm.$children[0].data.list[1].title, '5th');
        t.is(vm.$children[0].data.list[1].anchor, '5th');

    },
    thirdCheck : (t, vm) => {
        
        t.is(vm.$children[0].data.list[0].title, '6th');
        t.is(vm.$children[0].data.list[0].anchor, '6th');

    }
});
