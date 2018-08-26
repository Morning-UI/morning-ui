import test                         from 'ava';
import snapshot                     from '../../helpers/snapshot';
import Vue                          from 'vue/dist/vue.common.js';
import rate                         from '../../../src/lib/components/rate/index.vue';

const name = 'rate';
const component = window.morning._origin.Form.extend(rate);
const formValue1 = 2;
const formValue2 = 3;

test.serial('base : component snapshot', async t => {

    const vm = new Vue(component).$mount();

    t.plan(1);

    // cause : rate's formater/parser is a function, when run coverage test, the function always different.
    delete vm.$el;

    snapshot(t, vm);

});

test.serial('base : init component', async t => {

    const vm = new Vue(component).$mount();

    t.plan(2);

    t.is(vm.uiid, 2);
    t.is(component.options.name, `morning-${name}`);

});

test.serial('base : component tag name is t-*', async t => {

    const vm = new Vue(component).$mount();

    t.plan(1);

    t.is(vm.$el.tagName, `mor-${name}`.toUpperCase());

});

test.serial('form base : init component value is right when use v-model', async t => {

    const vm = new Vue({
        template : `
            <div style="width:300px;">
                <ui-${name} v-model="value1"></ui-${name}>
            </div>
        `,
        data : {
            value1 : formValue1
        },
        components : {
            [`ui-${name}`] : component
        }
    });

    vm.$mount();

    t.plan(1);

    Vue.nextTick(() => {

        t.is(vm.$children[0].get(), formValue1);

    });

});

test.serial('form base : init component value is right when both use v-model and default-value', async t => {

    const vm = new Vue({
        template : `
            <div style="width:300px;">
                <ui-${name} v-model="value1" :default-value="value2"></ui-${name}>
            </div>
        `,
        data : {
            value1 : formValue1,
            value2 : formValue2
        },
        components : {
            [`ui-${name}`] : component
        }
    });

    vm.$mount();

    t.plan(1);

    Vue.nextTick(() => {

        t.is(vm.$children[0].get(), formValue1);

    });

});
test.serial('form value-change : default value not emit event', async t => {

    let count = 0;

    const vm = new Vue({
        template : `
            <div style="width:300px;">
                <ui-${name} :default-value="value" @value-change="echo"></ui-${name}>
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
        }
    });

    vm.$mount();

    t.plan(1);

    Vue.nextTick(() => {

        t.is(count, 0);

    });

});

test.serial('form value-change : set value emit event once', async t => {

    let count = 0;

    const vm = new Vue({
        template : `
            <div style="width:300px;">
                <ui-${name} ref="test" :default-value="value" @value-change="echo"></ui-${name}>
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
                <ui-${name} ref="test" :default-value="value" @value-change="echo"></ui-${name}>
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

    let count = 0;

    const vm = new Vue({
        template : `
            <div style="width:300px;">
                <ui-${name} :default-value="value" ref="test" @value-change="echo"></ui-${name}>
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

            this.$refs.test.set(0);

            Vue.nextTick(() => {

                t.is(count, 1);
                this.$refs.test.set(NaN);

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

    let count = 0;

    const vm = new Vue({
        template : `
            <div style="width:300px;">
                <ui-${name} ref="test" :default-value="value" @value-change="echo"></ui-${name}>
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

            this.$refs.test.set(NaN);

            Vue.nextTick(() => {

                t.is(count, 1);
                
            });

        }
    });

    vm.$mount();

    t.plan(1);

});

test.serial('form value-change : v-model not emit event', async t => {

    let count = 0;

    const vm = new Vue({
        template : `
            <div style="width:300px;">
                <ui-${name} ref="test" v-model="value" @value-change="echo"></ui-${name}>
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
                <ui-${name} ref="test" v-model="value" @value-change="echo"></ui-${name}>
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
