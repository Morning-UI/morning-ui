import test                         from 'ava';
import snapshot                     from '../../helpers/snapshot';
import Vue                          from 'vue/dist/vue.common.js';
import checkbox                     from '../../../src/lib/components/checkbox/index.vue';
import commonTest                   from '../../common/unit';

const testOptions = {
    test,
    Vue,
    snapshot,
    component : window.morning._origin.Form.extend(checkbox),
    name : 'checkbox',
    formValue1 : ['Tim'],
    formValue2 : ['Andrew'],
    formValueInvalid1 : ['asd'],
    formValueInvalid2 : ['sdf'],
    attrs : `:list="{Tim:'Tim Boelaars',Andrew:'Andrew Colin Beck',Victor:'Victor Erixon'}"`,
    uiid : 2,
    delVmEl : false,
    _baseTestHookCustomMount : false,
    _formValueChangeSkipInvalidValueEmitTest : false,
    _formValueChangeSkipValueFilterEmitTest : false
};

commonTest.componentBase(testOptions);
commonTest.formBase(testOptions);
commonTest.formValueChange(testOptions);
