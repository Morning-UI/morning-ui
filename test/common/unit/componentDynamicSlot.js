export default (options, extOptions) => {

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

   test.serial('slot is dynamic', async t => {

        let vm = new Vue({
            template : `
<ui-${name}>
    <div ${attrs} v-for="scope in scopes">
        CONTENT : {{scope.name}}
    </div>
</ui-${name}>
            `,
            data : {
                scopes : [{
                    name : 'first'
                }, {
                    name : 'second'
                }, {
                    name : 'third'
                }]
            },
            components : {
                [`ui-${name}`] : component
            }
        });

        vm.$mount();

        t.plan(extOptions.testNum);

        await new Promise(resolve => {

            Vue.nextTick(() => {

                extOptions.firstCheck(t, vm);

                vm.scopes = [{
                    name : '4th'
                }, {
                    name : '5th'
                }];

                resolve();

            });

        });

        await new Promise(resolve => {

            vm.$children[0].$mount();

            Vue.nextTick(() => {

                extOptions.secondCheck(t, vm);

                vm.scopes.pop();
                vm.scopes.pop();
                vm.scopes.push({
                    name : '6th'
                });

                resolve();

            });

        });

        await new Promise(resolve => {

            vm.$children[0].$mount();

            Vue.nextTick(() => {

                extOptions.thirdCheck(t, vm);

                resolve();

            });

        });

    });

};
