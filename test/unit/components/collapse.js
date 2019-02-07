import test                         from 'ava';
import snapshot                     from '../../helpers/snapshot';
import Vue                          from 'vue/dist/vue.common.js';
import collapse                     from '../../../src/lib/components/collapse/index.vue';
import commonTest                   from '../../common/unit';

const testOptions = {
    test,
    Vue,
    snapshot,
    component : window.morning._origin.Form.extend(collapse),
    name : 'collapse',
    attrs : ``,
    uiid : 2,
    delVmEl : false,
    _baseTestHookCustomMount : false
};

commonTest.componentBase(testOptions);
