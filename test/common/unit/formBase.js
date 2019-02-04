export default options => {

    /* eslint-disable no-unused-vars */
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
    /* eslint-enable no-unused-vars */

    test.serial('form base : init component value is right when use v-model', async t => {

        const vm = new Vue({
            template : `
                <div style="width:300px;">
                    <ui-${name} v-model="value" ${attrs}></ui-${name}>
                </div>
            `,
            data : {
                value : formValue1
            },
            components : {
                [`ui-${name}`] : component
            }
        });

        vm.$mount();

        t.plan(1);

        Vue.nextTick(() => {

            t.is(JSON.stringify(vm.$children[0].get()), JSON.stringify(formValue1));

        });

    });

};
