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
        _baseTestHookBeforeSnapshot,
        _formValueChangeSkipInvalidValueEmitTest,
        _formValueChangeSkipValueFilterEmitTest
    } = options;
    /* eslint-enable no-unused-vars */

    test.serial('base : component snapshot', async t => {

        let vm = new Vue(component);

        if (_baseTestHookCustomMount) {

            vm = await _baseTestHookCustomMount(vm);

        } else {

            vm.$mount();

        }

        t.plan(1);

        // cause some components config is function, the function always different.
        if (delVmEl) {
            
            delete vm.$el;
        
        }

        if (_baseTestHookBeforeSnapshot) {

            vm = await _baseTestHookBeforeSnapshot(vm);

        }

        snapshot(t, vm);

    });

    test.serial('base : init component', async t => {

        const vm = new Vue(component).$mount();

        t.plan(2);

        t.is(vm.uiid, uiid);
        t.is(component.options.name, `morning-${name}`);

    });

    test.serial('base : component tag name is t-*', async t => {

        const vm = new Vue(component).$mount();

        t.plan(1);

        t.is(vm.$el.tagName, `mor-${name}`.toUpperCase());

    });

};
