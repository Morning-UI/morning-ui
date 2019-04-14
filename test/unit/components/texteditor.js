import test                         from 'ava';
import snapshot                     from '../../helpers/snapshot';
import Vue                          from 'vue/dist/vue.common.js';
import texteditor                   from '../../../src/lib/components/texteditor/index.vue';
import commonTest                   from '../../common/unit';

const uiid = 31;
const testOptions = {
    test,
    Vue,
    snapshot,
    component : window.morning._origin.Form.extend(texteditor),
    name : 'texteditor',
    formValue1 : '<p>编辑你的文章123</p>',
    formValue2 : '<p>编辑你的文章234</p>',
    formValueInvalid1 : undefined,
    formValueInvalid2 : undefined,
    attrs : ``,
    uiid,
    // cause : validate is a function, when run coverage test, the function always different.
    delVmEl : true,
    _baseTestHookCustomMount : false,
    // this component value always valid.
    _formValueChangeSkipInvalidValueEmitTest : true,
    _formValueChangeSkipValueFilterEmitTest : true
};

commonTest.componentBase(testOptions);
commonTest.formBase(testOptions);
commonTest.formValueChange(testOptions);
commonTest.formSetJsonValueInText(testOptions);
