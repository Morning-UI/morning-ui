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
    
    test.serial('form value-change : set value emit event once', async t => {

        let count = 0;

        const vm = new Vue({
            template : `
                <div style="width:300px;">
                    <ui-${name} ref="test" v-model="value" @value-change="echo" ${attrs}></ui-${name}>
                </div>
            `,
            data : {
                value : formValue1
            },
            components : {
                [`ui-${name}`] : component
            },
            methods : {
                echo : function () {

                    count++;

                }
            },
            mounted : function () {

                Vue.nextTick(() => {

                    t.is(count, 0);
                    this.$refs.test.set(formValue2);

                    Vue.nextTick(() => {

                        t.is(count, 1);

                    });

                });

            }
        });

        vm.$mount();

        t.plan(2);

    });

    test.serial('form value-change : set same value not emit event', async t => {

        let count = 0;

        const vm = new Vue({
            template : `
                <div style="width:300px;">
                    <ui-${name} ref="test" v-model="value" @value-change="echo" ${attrs}></ui-${name}>
                </div>
            `,
            data : {
                value : formValue1
            },
            components : {
                [`ui-${name}`] : component
            },
            methods : {
                echo : function () {

                    count++;

                }
            },
            mounted : function () {

                this.$refs.test.set(formValue2);

                Vue.nextTick(() => {

                    t.is(count, 1);

                    this.$refs.test.set(formValue2);

                    Vue.nextTick(() => {

                        t.is(count, 1);

                    });

                });

            }
        });

        vm.$mount();

        t.plan(2);

    });

    test.serial('form value-change : set invalid value not emit event', async t => {

        if (_formValueChangeSkipInvalidValueEmitTest) {

            t.plan(1);
            t.pass();

            return;

        }

        let count = 0;

        const vm = new Vue({
            template : `
                <div style="width:300px;">
                    <ui-${name} ref="test" v-model="value" @value-change="echo" ${attrs}></ui-${name}>
                </div>
            `,
            data : {
                value : formValue1
            },
            components : {
                [`ui-${name}`] : component
            },
            methods : {
                echo : function () {

                    count++;

                }
            },
            mounted : function () {

                this.$refs.test.set(formValueInvalid1);

                Vue.nextTick(() => {

                    t.is(count, 1);
                    this.$refs.test.set(formValueInvalid2);

                    Vue.nextTick(() => {

                        t.is(count, 1);
                        
                    });
                    
                });

            }
        });

        vm.$mount();

        t.plan(2);

    });

    test.serial('form value-change : value pass filter emit event once', async t => {

        if (_formValueChangeSkipValueFilterEmitTest) {

            t.plan(1);
            t.pass();

            return;

        }

        let count = 0;

        const vm = new Vue({
            template : `
                <div style="width:300px;">
                    <ui-${name} ref="test" v-model="value" @value-change="echo" ${attrs}></ui-${name}>
                </div>
            `,
            data : {
                value : formValue1
            },
            components : {
                [`ui-${name}`] : component
            },
            methods : {
                echo : function () {

                    count++;

                }
            },
            mounted : function () {

                this.$refs.test.set(undefined);

                Vue.nextTick(() => {

                    t.is(count, 1);

                    this.$refs.test.set(formValueInvalid1);

                    Vue.nextTick(() => {

                        t.is(count, 1);
                        
                    });
                        
                });

            }
        });

        vm.$mount();

        t.plan(2);

    });

    test.serial('form value-change : v-model not emit event', async t => {

        let count = 0;

        const vm = new Vue({
            template : `
                <div style="width:300px;">
                    <ui-${name} ref="test" v-model="value" @value-change="echo" ${attrs}></ui-${name}>
                </div>
            `,
            data : {
                value : formValue1
            },
            components : {
                [`ui-${name}`] : component
            },
            methods : {
                echo : function () {

                    count++;

                }
            },
            mounted : function () {

                Vue.nextTick(() => {

                    t.is(count, 0);
                    
                });

            }
        });

        vm.$mount();

        t.plan(1);

    });

    test.serial('form value-change : v-model change emit event once', async t => {

        let count = 0;

        const vm = new Vue({
            template : `
                <div style="width:300px;">
                    <ui-${name} ref="test" v-model="value" @value-change="echo" ${attrs}></ui-${name}>
                </div>
            `,
            data : {
                value : formValue1
            },
            components : {
                [`ui-${name}`] : component
            },
            methods : {
                echo : function () {

                    count++;

                }
            },
            mounted : function () {

                Vue.nextTick(() => {

                    t.is(count, 0);

                    this.value = formValue2;

                    Vue.nextTick(() => {

                        t.is(count, 1);
                        
                    });
                    
                });

            }
        });

        vm.$mount();

        t.plan(2);

    });

};
