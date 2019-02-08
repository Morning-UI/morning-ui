import test                         from 'ava';
import snapshot                     from '../../helpers/snapshot';
import Vue                          from 'vue/dist/vue.common.js';
import multiinput                   from '../../../src/lib/components/multiinput/index.vue';
import commonTest                   from '../../common/unit';

const testOptions = {
    test,
    Vue,
    snapshot,
    component : window.morning._origin.Form.extend(multiinput),
    name : 'multiinput',
    formValue1 : ['value1', 'value2'],
    formValue2 : ['value3', 'value4'],
    formValueInvalid1 : NaN,
    formValueInvalid2 : 'asd',
    attrs : ``,
    uiid : 2,
    delVmEl : false,
    _baseTestHookCustomMount : false,
    _formValueChangeSkipInvalidValueEmitTest : false,
    _formValueChangeSkipValueFilterEmitTest : false
};

commonTest.componentBase(testOptions);
commonTest.formBase(testOptions);
commonTest.formValueChange(testOptions);
