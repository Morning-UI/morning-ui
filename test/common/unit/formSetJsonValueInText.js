export default options => {

    let {
        test,
        Vue,
        snapshot,
        component,
        name,
        formValue1,
        formValue2,
        formValueInvalid1,
        formValueInvalid2,
        attrs,
        uiid,
        delVmEl,
        _baseTestHookCustomMount,
        _formValueChangeSkipInvalidValueEmitTest,
        _formValueChangeSkipValueFilterEmitTest
    } = options;

    test.serial('set json string value', async t => {

        const vm = new Vue({
            template : `<ui-${name} v-model="value" ${attrs}></ui-${name}>`,
            data : {
                value : ''
            },
            components : {
                [`ui-${name}`] : component
            }
        });

        vm.$mount();
        vm.value = '{"a":"a"}';

        t.plan(2);

        Vue.nextTick(() => {

            t.is(vm.$children[0].get(), '{"a":"a"}');

            vm.value = '[1, 2]';

            Vue.nextTick(() => {

                t.is(vm.$children[0].get(), '[1,2]');

            });

        });

    });

};
