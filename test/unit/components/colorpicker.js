import test                         from 'ava';
import snapshot                     from '../../helpers/snapshot';
import Vue                          from 'vue/dist/vue.common.js';
import colorpicker                  from '../../../src/lib/components/colorpicker/index.vue';
import commonTest                   from '../../common/unit';

const testOptions = {
    test,
    Vue,
    snapshot,
    component : window.morning._origin.Form.extend(colorpicker),
    name : 'colorpicker',
    formValue1 : '#FF0000',
    formValue2 : '#FF0020',
    formValueInvalid1 : '#000000',
    formValueInvalid2 : '@asd123',
    attrs : ``,
    uiid : 9,
    // cause : slider's tip-formatter is a function, when run coverage test, the function always different.
    delVmEl : true,
    _baseTestHookCustomMount : false,
    _formValueChangeSkipInvalidValueEmitTest : false,
    _formValueChangeSkipValueFilterEmitTest : false
};

commonTest.componentBase(testOptions);
commonTest.formBase(testOptions);
commonTest.formValueChange(testOptions);
