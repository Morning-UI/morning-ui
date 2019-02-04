import test                         from 'ava';
import snapshot                     from '../../helpers/snapshot';
import Vue                          from 'vue/dist/vue.common.js';
import upload                       from '../../../src/lib/components/upload/index.vue';
import commonTest                   from '../../common/unit';

const testOptions = {
    test,
    Vue,
    snapshot,
    component : window.morning._origin.Form.extend(upload),
    name : 'upload',
    formValue1 : [{
        path : 'http://morning-ui-image.test.upcdn.net/uploaddemo/17491/1511259398095810608.png',
        name : '1511259398095810608.png'
    }],
    formValue2 : [{
        path : 'http://morning-ui-image.test.upcdn.net/uploaddemo/17492/1511259398095810606.png',
        name : '1511259398095810606.png'
    }],
    formValueInvalid1 : [],
    formValueInvalid2 : 'sdf',
    attrs : ``,
    uiid : 2,
    // cause : validate is a function, when run coverage test, the function always different.
    delVmEl : true,
    _baseTestHookCustomMount : false,
    _formValueChangeSkipInvalidValueEmitTest : false,
    _formValueChangeSkipValueFilterEmitTest : false
};

commonTest.componentBase(testOptions);
commonTest.formBase(testOptions);
commonTest.formValueChange(testOptions);
