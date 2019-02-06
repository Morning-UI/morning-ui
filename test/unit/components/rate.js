import test                         from 'ava';
import snapshot                     from '../../helpers/snapshot';
import Vue                          from 'vue/dist/vue.common.js';
import rate                         from '../../../src/lib/components/rate/index.vue';
import commonTest                   from '../../common/unit';

const testOptions = {
    test,
    Vue,
    snapshot,
    component : window.morning._origin.Form.extend(rate),
    name : 'rate',
    formValue1 : 2,
    formValue2 : 3,
    formValueInvalid1 : 0,
    formValueInvalid2 : NaN,
    attrs : ``,
    uiid : 2,
    // cause : rate's formater/parser is a function, when run coverage test, the function always different.
    delVmEl : true,
    _baseTestHookCustomMount : false,
    _formValueChangeSkipInvalidValueEmitTest : false,
    _formValueChangeSkipValueFilterEmitTest : false
};

commonTest.componentBase(testOptions);
commonTest.formBase(testOptions);
commonTest.formValueChange(testOptions);
