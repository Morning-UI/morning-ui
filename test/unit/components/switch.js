import test                         from 'ava';
import snapshot                     from '../../helpers/snapshot';
import Vue                          from 'vue/dist/vue.common.js';
import _switch                      from '../../../src/lib/components/switch/index.vue';
import commonTest                   from '../../common/unit';

const testOptions = {
    test,
    Vue,
    snapshot,
    component : window.morning._origin.Form.extend(_switch),
    name : 'switch',
    formValue1 : true,
    formValue2 : false,
    formValueInvalid1 : undefined,
    formValueInvalid2 : undefined,
    attrs : ``,
    uiid : 2,
    // cause : tip-formatter is a function, when run coverage test, the function always different.
    delVmEl : true,
    _baseTestHookCustomMount : false,
    // this component value always valid.
    _formValueChangeSkipInvalidValueEmitTest : true,
    _formValueChangeSkipValueFilterEmitTest : false
};

commonTest.componentBase(testOptions);
commonTest.formBase(testOptions);
commonTest.formValueChange(testOptions);
