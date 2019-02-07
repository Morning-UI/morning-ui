import test                         from 'ava';
import snapshot                     from '../../helpers/snapshot';
import Vue                          from 'vue/dist/vue.common.js';
import tree                         from '../../../src/lib/components/tree/index.vue';
import commonTest                   from '../../common/unit';

const testOptions = {
    test,
    Vue,
    snapshot,
    component : window.morning._origin.Form.extend(tree),
    name : 'tree',
    attrs : ``,
    uiid : 3,
    delVmEl : false,
    _baseTestHookCustomMount : false
};

commonTest.componentBase(testOptions);
