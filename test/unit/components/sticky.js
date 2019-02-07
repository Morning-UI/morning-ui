import test                         from 'ava';
import snapshot                     from '../../helpers/snapshot';
import Vue                          from 'vue/dist/vue.common.js';
import sticky                       from '../../../src/lib/components/sticky/index.vue';
import commonTest                   from '../../common/unit';

const testOptions = {
    test,
    Vue,
    snapshot,
    component : window.morning._origin.Form.extend(sticky),
    name : 'sticky',
    attrs : ``,
    uiid : 2,
    delVmEl : false,
    _baseTestHookCustomMount : false
};

commonTest.componentBase(testOptions);
