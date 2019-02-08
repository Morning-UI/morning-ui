import test                         from 'ava';
import snapshot                     from '../../helpers/snapshot';
import Vue                          from 'vue/dist/vue.common.js';
import slider                       from '../../../src/lib/components/slider/index.vue';
import commonTest                   from '../../common/unit';

const num40 = 40;
const num60 = 60;
const testOptions = {
    test,
    Vue,
    snapshot,
    component : window.morning._origin.Form.extend(slider),
    name : 'slider',
    formValue1 : num40,
    formValue2 : num60,
    formValueInvalid1 : 0,
    formValueInvalid2 : NaN,
    attrs : ``,
    uiid : 3,
    // cause : tip-formatter is a function, when run coverage test, the function always different.
    delVmEl : true,
    _baseTestHookCustomMount : false,
    _formValueChangeSkipInvalidValueEmitTest : false,
    _formValueChangeSkipValueFilterEmitTest : false
};

commonTest.componentBase(testOptions);
commonTest.formBase(testOptions);
commonTest.formValueChange(testOptions);
