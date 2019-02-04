import test                         from 'ava';
import snapshot                     from '../../helpers/snapshot';
import Vue                          from 'vue/dist/vue.common.js';
import multiform                    from '../../../src/lib/components/multiform/index.vue';
import commonTest                   from '../../common/unit';

const testOptions = {
    test,
    Vue,
    snapshot,
    component : window.morning._origin.Form.extend(multiform),
    name : 'multiform',
    formValue1 : [
        {
            name : 'Jim'
        },
        {
            name : 'Sam'
        }
    ],
    formValue2 : [
        {
            name : 'Sam'
        },
        {
            name : 'Jim'
        }
    ],
    formValueInvalid1 : null,
    formValueInvalid2 : NaN,
    attrs : ``,
    uiid : 5,
    // cause : item-filler and item-validator is a function, when run coverage test, the function always different.
    delVmEl : true,
    _baseTestHookCustomMount : false,
    _formValueChangeSkipInvalidValueEmitTest : false,
    _formValueChangeSkipValueFilterEmitTest : false
};

commonTest.componentBase(testOptions);
commonTest.formBase(testOptions);
commonTest.formValueChange(testOptions);
