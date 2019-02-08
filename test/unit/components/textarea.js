import test                         from 'ava';
import snapshot                     from '../../helpers/snapshot';
import Vue                          from 'vue/dist/vue.common.js';
import textarea                    from '../../../src/lib/components/textarea/index.vue';
import commonTest                   from '../../common/unit';

const testOptions = {
    test,
    Vue,
    snapshot,
    component : window.morning._origin.Form.extend(textarea),
    name : 'textarea',
    formValue1 : 'test 123',
    formValue2 : 'test 234',
    formValueInvalid1 : undefined,
    formValueInvalid2 : undefined,
    attrs : ``,
    uiid : 2,
    delVmEl : false,
    _baseTestHookCustomMount : false,
    // this component value always valid.
    _formValueChangeSkipInvalidValueEmitTest : true,
    _formValueChangeSkipValueFilterEmitTest : true
};

commonTest.componentBase(testOptions);
commonTest.formBase(testOptions);
commonTest.formValueChange(testOptions);
commonTest.formSetJsonValueInText(testOptions);
