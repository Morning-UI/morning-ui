import test                         from 'ava';
import snapshot                     from '../../helpers/snapshot';
import Vue                          from 'vue/dist/vue.common.js';
import textinput                    from '../../../src/lib/components/textinput/index.vue';
import commonTest                   from '../../common/unit';

const testOptions = {
    test,
    Vue,
    snapshot,
    component : window.morning._origin.Form.extend(textinput),
    name : 'textinput',
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

test.serial('set pure number string value, get a string not number', async t => {

    const vm = new Vue({
        template : `<ui-${testOptions.name} v-model="value" ${testOptions.attrs}></ui-${testOptions.name}>`,
        data : {
            value : ''
        },
        components : {
            [`ui-${testOptions.name}`] : testOptions.component
        }
    });

    vm.$mount();
    vm.value = '123123123123123123123123123123123123';

    t.plan(1);

    Vue.nextTick(() => {

        t.is(vm.$children[0].get(), '123123123123123123123123123123123123');

    });

});
